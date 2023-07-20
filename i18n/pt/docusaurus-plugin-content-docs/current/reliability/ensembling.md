---
sidebar_position: 5
---

# 🟡 Montagem de prompts / Métodos de ensamblagem

"Montagem de prompts" ou "Métodos de ensamblagem" (ou ensembling prompt, em inglês) é o conceito de usar vários prompts diferentes para tentar responder a mesma pergunta. Existem muitas abordagens diferentes para isso.

## DiVeRSe

DiVeRSe(@li2022advance) ("**Di**verse **Ve**rifier on **R**easoning **S**t**e**ps", ou "Verificador Diversificado em Etapas de Raciocínio") é um método que melhora a confiabilidade das respostas de três maneiras. Isso é feito 1) usando vários prompts para gerar conclusões diversificadas, 2) usando um verificador para distinguir boas respostas das ruins e 3) usando um verificador para verificar a correção das etapas de raciocínio.

import diverse from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/reliability/diverse.png';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={diverse} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
DiVeRSe (Li et al.)
</div>


### Prompts do tipo DiVeRSe 

O DiVeRSe usa 5 prompts diferentes para um determinado input. Para construir cada prompt, eles amostram aleatoriamente alguns exemplos do conjunto de treinamento. Aqui está um exemplo de um prompt com poucas amostras (k = 2), com exemplos retirados do [GSM8K benchmark] (https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl) (@cobbe2021training). Na prática, o DiVeRSe usa 5 exemplos em prompts para este benchmark.


```
Q: Natália vendeu clipes para 48 de seus amigos em abril e, em seguida, vendeu a metade disso em maio. Quantos clipes Natália vendeu no total, em abril e maio?
A: Natália vendeu 48/2 = 24 clipes em maio.
Natália vendeu 48 + 24 = 72 clipes no total, em abril e maio.
#### 72
Q: Weng ganha US$ 12 por hora para trabalhar como babá. Ontem ela só trabalhou 50 minutos como babá. Quanto ela ganhou?
A: Weng ganha 12/60 = R$ 0,2 por minuto.
Trabalhando 50 minutos, ela ganhou 0,2 x 50 = R$ 10.
#### 10
Q: Betty está economizando dinheiro para uma nova carteira que custa R$ 100. Betty tem apenas metade do dinheiro que precisa. Seus pais decidiram dar-lhe R$ 15 para esse propósito e seus avós o dobro do que seus pais. Qual a quantia Betty ainda precisa para comprar a carteira?
A:
```

Depois de gerar 5 prompts diferentes como acima, o DiVeRSe amostra 20 caminhos de raciocínio para cada um (temperatura = 0,5). Aqui estão alguns exemplos de completamento do prompt acima. Note que as respostas nem sempre são corretas.



```text
<!-- highlight-start -->
Betty tem 0.5*100 = R$50.
Então ela ganha mais 15 = R$65.
Em seguida ela ganha 2*15 = R$90.
Ela ainda precisa de 100-90 = R$10 a mais.
#### 10
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
A: Betty tem 0.5*100 = R$500.
Então ela ganha 15 a mais = R$650.
Em seguida ela ganha 2*15 = R$900.
Ela ainda precisa de 100-90 = R$1000 a mais.
#### 1000
<!-- highlight-end -->
```

Nesse ponto, o DiVeRSe gerou 1000 completamentos diferentes.

### Verificador de Votação

Agora, nós poderíamos simplesmente pegar a resposta majoritária, como o Self-Consistency (@mitchell2022enhancing) faz.

No entanto, o DiVeRSe propõe um método muito mais complicado, que eles chamam de _verificador de votação_.

Na hora dos testes, usar o verificador de votação é um processo de duas etapas. Primeiro, o verificador (uma rede neural) atribui uma pontuação de 0 a 1 para cada completamento, com base na probabilidade de ser correto. Depois, a parte da "votação" soma todas as pontuações de diferentes respostas e fornece a resposta final.

#### Exemplo

Aqui está um pequeno exemplo. Digamos que temos os seguintes completamentos para o prompt `Qual é a soma de dois mais dois?`:

```text
<!-- highlight-start -->
4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
dois + 2 = 5
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
Eu acho que 2+2 = 6
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
dois mais dois = 4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
É 5
<!-- highlight-end -->
```

O verificador lerá cada completamento e atribuirá uma pontuação a ele. Por exemplo, pode atribuir
as pontuações: 0,9, 0,1, 0,2, 0,8, 0,3, respectivamente. Então, a parte da votação somará as pontuações de cada
resposta.

```
pontuação(4) = 0.9 + 0.8 = 1.7
pontuação(5) = 0.1 + 0.3 = 0.4
pontuação(6) = 0.2
```

A resposta final é 4, já que ela teve a pontuação maior.

**Mas como o verificador é treinado?**

O verificador é treinando com uma função um pouco compleza, que eu não vou abordar aqui. Leia a seção 3.3 desse artigo para mais informações (@li2022advance).

## Prompts do tipo "Me Pergunte Qualquer Coisa" - Ask Me Anything (AMA)

import ama from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/reliability/AMA_Prompting.jpg';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ama} style={{width: "750px"}} />
</div>

Perguntas do tipo AMA (@arora2022ama) é uma abordagem semelhante à DiVeRSe. No entanto, tanto seu passo de múltiplos prompts quanto seu passo de agregação de respostas diferem significativamente. A ideia principal do AMA é usar um LLM para gerar múltiplos prompts, em vez de usar apenas prompts com poucos exemplos.

### Prompts Múltiplos

A abordagem AMA mostra que você pode tomar uma pergunta e reformatá-la de várias maneiras para criar prompts diferentes. Por exemplo, digamos que você está coletando um monte de sites para obter informações sobre animais e deseja gravar apenas os que vivem na América do Norte. Vamos construir um prompt para determinar isso.

Dado o seguinte trecho da Wikipedia:

```text
O urso Kermode, às vezes chamado de urso espírito (Ursus americanus kermodei), é uma subespécie do urso negro americano e vive nas regiões da Costa Central e Norte da Colúmbia Britânica, Canadá.
```

Você pode formatar essa tarefa em um prompt assim:

```text
A seguinte afirmação é Verdadeira ou Falsa dado o contexto?

Contexto: O urso Kermode, às vezes chamado de urso espírito (Ursus americanus kermodei), é uma subespécie do urso negro americano e vive nas regiões da Costa Central e Norte da Colúmbia Britânica, Canadá.
Afirmação: Este animal vive na América do Norte
Resposta:
```

Esta é uma forma um pouco estranha de formular. Por que não usar o seguinte prompt, que é bem mais simples?

```text
Contexto: O urso Kermode, às vezes chamado de urso espírito (Ursus americanus kermodei), é uma subespécie do urso-preto americano e vive nas regiões da Costa Central e Norte da Colúmbia Britânica, Canadá.
Pergunta: Esse animal vive na América do Norte?
```

Bem, ao formular a questão desta forma especial, podemos gerar prompts diferentes.
Nosso primeiro passo aqui será transformar a afirmação `Esse animal vive na América do Norte` e reformatá-la em diferentes perguntas, que basicamente estão perguntando a mesma coisa. Para isso, passaremos a afirmação por prompts como os da imagem abaixo.

import ama_multi from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/reliability/AMA_multiprompting.png';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ama_multi} style={{width: "800px"}} />
</div>

Isso pode gerar:
1. O animal estava vivendo na América do Norte?
2. O animal vive na América do Norte?
3. Onde o animal vive?

A ideia por trás disso é criar diferentes *visões* da tarefa. Então, aplicamos cada uma ao contexto dado da seguinte forma:

```text
Contexto: O urso Kermode, às vezes chamado de urso espírito (Ursus americanus kermodei), é uma subespécie do urso-preto americano e vive nas regiões da Costa Central e Norte da Colúmbia Britânica, Canadá.
Pergunta: O animal estava vivendo na América do Norte?
```

Então, podemos gerar respostas para cada uma:

1. `Sim, ele estava`
2. `Sim, ele faz`
3. `América do Norte`

Estas são *respostas intermediárias*. Precisamos mapeá-las para etiquetas de tarefa (por exemplo, Sim ou Não).

Podemos fazer isso passando as respostas intermediárias por um prompt como o seguinte:

```text
Selecione a categoria correta.

"Categorias":
- Sim, América do Norte
- Não, não na América do Norte

"Sim, ele estava" se encaixa na categoria:
```

Agora podemos obter nossas respostas de saída.

1. `Sim, América do Norte`
2. `Sim, América do Norte`
3. `Sim, América do Norte`

Aqui, todos concordam, então podemos pegar a primeira resposta. No entanto, se eles discordassem, poderíamos usar o passo de agregação do AMA para obter uma resposta final.

### Agregação de respostas

A AMA usa uma estratégia muito complicada para agregar respostas (mais do que a DiVeRSe) em vez de simplesmente considerar a resposta da maioria. Para entender por que a resposta da maioria pode ser uma escolha ruim, considere duas das perguntas que geramos antes:

1. O animal vivia na América do Norte?
2. O animal vive na América do Norte?

Eles são extremamente similares, portanto provavelmente gerarão o mesmo resultado. Como as perguntas são tão semelhantes, elas afetarão de forma significativa o resultado final. Para lidar com isso, a AMA conta com supervisão fraca e matemática complexa para estimar as dependências entre os diferentes prompts que cria e, em seguida, usa isso para ponderá-los adequadamente.

Portanto, para as três perguntas que geramos, ela pode atribuir pesos de 25%, 25% e 50%, já que as primeiras duas são tão semelhantes.

Embora a estratégia de agregação da AMA seja poderosa, ela é tão complicada que não a abordarei aqui. Leia a seção 3.4 do artigo para obter mais detalhes (@arora2022ama).

### Resultados

- Com essa estratégia de prompting, a AMA é capaz de usar o GPT-J-6B (@wange2021gptj) para superar a performance do GPT-3.

- A AMA é melhor em perguntas em que o contexto dado contém a resposta.

## Takeaways

Métodos de ensamblagem são muito poderosos. Eles podem ser usados ​​para melhorar o desempenho de qualquer modelo e também podem ser usados ​​para melhorar o desempenho de um modelo em uma tarefa específica.

Na prática, a votação da maioria deve ser a sua estratégia principal.