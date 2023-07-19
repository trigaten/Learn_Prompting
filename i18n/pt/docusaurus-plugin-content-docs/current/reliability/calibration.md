---
sidebar_position: 10
---

# 🔴 Calibrandos LLMs

É possível contrabalançar alguns dos vieses que as LLMs exibem através da calibração de **distribuições de saída**(@zhao2021calibrate). 

**O que exatamente significa calibrar uma distribuição de saída?**

Vamos dar um exemplo rápido: digamos que temos uma tarefa de %%análise de sentimento|sentiment analysis%% com dois possíveis rótulos, `Positivo` e `Negativo`.
Considere o que acontece quando a  %%LLM|LLM%% recebe  `Entrada: nada Sentimento:` .
Esta entrada não contém nenhum _contexto_ que a LLM possa usar para fazer uma previsão de sentimento, portanto, é chamada de **entrada sem contexto**.

Como `nada` não é um conceito positivo ou negativo, esperaríamos que a LLM retornasse uma probabilidade de cerca de 0,5 para ambos `Positivo` e `Negativo`. No entanto, muitas vezes (e para este exemplo), esse não será o caso.

```
p("Positivo" | "Entrada: nada Sentimento:") = 0.9

p("Negativo" | "Entrada: nada Sentimento:") = 0.1
```
Dadas essas probabilidades de rótulo para uma entrada sem contexto, sabemos que a **distribuição de saída** da LLM provavelmente está enviesada em direção ao rótulo `Positivo`. Isso pode fazer com que a LLM favoreça `Positivo` para todas as entradas, mesmo que a entrada não seja realmente positiva.

Se pudermos de alguma forma **calibrar** a distribuição de saída, de modo que entradas sem contexto sejam atribuídas a uma probabilidade de 0,5 para ambos `Positivo` e `Negativo`, podemos remover o viés em relação a `Positivo` e a LLM será mais confiável em ambas as entradas sem contexto e com contexto.

## Solução não-técnica

Uma solução não técnica para esse problema é simplesmente fornecer exemplos de poucos disparos em que os exemplos livres de contexto são efetivamente atribuídos a uma probabilidade de 0,5 para ambas as classes `Positivo` e `Negativo`.

Por exemplo, poderíamos fornecer os seguintes exemplos de poucos disparos que mostram cada exemplo livre de contexto sendo classificado como `Positivo` e `Negativo`:

```
Entrada: Eu odeio esse filme. Sentimento: Negativo
Entrada: Eu amo esse filme. Sentimento: Positivo
Entrada: N/A Sentimento: Positivo
Entrada: N/A Sentimento: Negativo
Entrada: nada Sentimento: Positivo
Entrada: nada Sentimento: Negativo
Entrada: Eu gosto de ovos. Sentimento:
```
Até onde eu sei, essa solução não foi explorada na literatura, e não tenho certeza de como ela funciona na prática. No entanto, é uma solução simples que demonstra o que a calibração está tentando alcançar.

## Solução técnica

Outra solução para isso é a __calibração contextual__(@zhao2021calibrate), onde ajustamos parâmetros de calibração especiais, que garantem que entradas sem contexto, como `Entrada: nada Sentimento:`, sejam atribuídas a uma probabilidade de cerca de 0,5 para ambas as classes. Note que, na prática, esse método realiza a calibração em várias entradas sem contexto diferentes (por exemplo, `Entrada: N/A Sentimento:`, `Entrada: [MASK] Sentimento:`). Ele calcula a média dos parâmetros de calibração que funcionam melhor para cada entrada sem contexto para encontrar os melhores parâmetros de calibração para o LLM.

### Exemplo

Vamos considerar um exemplo de cálculo dos parâmetros de calibração para uma entrada livre de contexto. Observe que este exemplo não é reproduzível com o GPT-3 devido ao fato de que não pode ser restrito aos rótulos `Positivo` e `Negativo`.

Considere novamente o exemplo acima em que o LLM atribui as seguintes probabilidades aos rótulos para uma entrada livre de contexto:

```
p("Positivo" | "Entrada: nada Sentimento:") = 0.9

p("Negativo" | "Entrada: nada Sentimento:") = 0.1
```
Nós queremos encontrar uma distribuição probabilistica q de forma que:

```
q("Positivo" | "Entrada: nada Sentimento:") = 0.5

q("Negativo" | "Entrada: nada Sentimento:") = 0.5
```
Faremos isso criando uma transformação linear que ajusta (calibra) as probabilidades de $p$.

$\hat q = \text{Softmax}(W\hat p + b)$

Esta equação considera as probabilidades originais $\hat p$ e aplica os pesos $W$ e o viés $b$ a elas. Os pesos $W$ e o viés $b$ são os parâmetros de calibração, que, quando aplicados às probabilidades do exemplo livre de contexto, produzirão $\hat p$ = [0.5, 0.5].

#### Calculando W e b

Precisamos calcular os pesos $W$ e o viés $b$ de alguma forma. Uma maneira de fazer isso é:

$W = \text{diag}(\hat p)^{-1}$ 

$b = 0$

Embora a definição de $W$ possa parecer um pouco estranha à primeira vista, ela apenas está pegando o inverso de cada valor em $\hat p$ para encontrar um $W$ que transformará as probabilidades originais $\hat p$ em probabilidades calibradas [0,5, 0,5].

Vamos verificar se isso funciona para o exemplo acima:

$\hat p = [0.9, 0.1]$

$W = \text{diag}(\hat p)^{-1} = \text{diag}([0.9, 0.1])^{-1} 
= \begin{bmatrix}
   0.9 & 0 \\
   0 & 0.1
\end{bmatrix}^{-1}
= \begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}$

$\hat q = \text{Softmax}(W\hat p + b) = \text{Softmax}(\begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}*{[0.9, 0.1]} + 0)
= \text{Softmax}([1, 1])
=[0.5, 0.5]$

Como mencionado acima, executaríamos esse mesmo processo para várias entradas livres de contexto, pegar a  média dos parâmetros de calibração que funcionam melhor para cada entrada, a fim de para encontrar os melhores parâmetros de calibração para o LLM. Isso significa que os parâmetros de calibração finais provavelmente não mapearão nenhuma das entradas em exatamente 0.5, 0.5].

### Outro método
$b$ também pode ser ajustado para $-\hat p$ e $W$ para a matriz identidade. Este método funciona melhor em tarefas de geração do que em tarefas de classificação (@zhao2021calibrate).

## Conclusões
LLMs geralmente apresentam predisposição (viés) em relação a certos rótulos. A calibração pode ser usada para neutralizar esse viés.