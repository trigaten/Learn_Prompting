---
sidebar_position: 2
locale: pt-br
---

# 🟢 Perguntas de Múltipla Escolha

Vamos usar o GPT para resolver uma pergunta do LSAT[^1]!

[^1]: 
O LSAT (Law School Admission Test) é um teste padronizado usado por faculdades de direito nos Estados Unidos para avaliar as habilidades de pensamento crítico e raciocínio analítico de estudantes em potencial.

Abaixo está um exemplo de pergunta do LSAT. Considere como você responderia e seu raciocínio.


```md
<!-- highlight-start -->
John de Worceste de Worcester, um monge inglês, registrou a observação, em 8 de dezembro de 1128, de dois grandes pontos solares incomuns. Cinco dias depois, uma aurora boreal brilhante foi observada no sul da Coreia. A atividade dos pontos solares é normalmente seguida pela aparição de uma aurora boreal, após um período de tempo que em média é de cinco dias. Assim, a observação na Coreia ajuda a confirmar a observação de John de Worcester. Qual das seguintes alternativas, se verdadeira, mais fortalece o argumento?
<!-- highlight-end -->

a) Uma aurora boreal pode ocorrer às vezes mesmo quando não houve atividade significativa de pontos solares na semana anterior.
b) Fontes chinesas registraram a observação de pontos solares mais de 1000 anos antes de John de Worcester.
c) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia.
d) Como é impossível observar pontos solares a olho nu em condições típicas de luz do dia, a observação registrada por John de Worcester teria ocorrido em condições meteorológicas incomuns, como neblina ou nuvens finas.
e) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares.
```
<details>
<summary>A resposta correta é ...</summary>
c) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia.
</details>

Tente colar o problema no demo abaixo:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="João de Worcester, um monge inglês, registrou a observação, em 8 de dezembro de 1128, de dois grandes pontos solares incomuns. Cinco dias depois, uma aurora boreal brilhante foi observada no sul da Coreia. A atividade dos pontos solares é normalmente seguida pela aparição de uma aurora boreal, após um período de tempo que em média é de cinco dias. Assim, a observação na Coreia ajuda a confirmar a observação de John de Worcester. Qual das seguintes alternativas, se verdadeira, mais fortalece o argumento?
a) Uma aurora boreal pode ocorrer às vezes mesmo quando não houve atividade significativa de pontos solares na semana anterior.
b) Fontes chinesas registraram a observação de pontos solares mais de 1000 anos antes de John de Worcester.
c) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia.
d) Como é impossível observar pontos solares a olho nu em condições típicas de luz do dia, a observação registrada por John de Worcester teria ocorrido em condições meteorológicas incomuns, como neblina ou nuvens finas.
e) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares." initial-response="e) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

<p></p>

<details scheme='warning'>
<summary>Por que minha resposta é diferente?</summary>
Sua resposta pode ser diferente porque:
    
1) Atualizações no modelo GPT-3
2) Aleatóridade no processo de geração de textos. Você consegue manipular a saída para mais consistência ao definir <a href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature">sua temperatura para 0</a>(artigo em inglês).

</details>

O modelo falhou. Isso significa que o modelo é incapaz de responder esse tipo de pergunta? Não necessariamente. Nós vamos nos aprofundar em técnincas que podemos utilizar para melhorar os resultados do modelo.

## A frase mágica

A prompt padrão que usamos acima fornece pouco insight sobre o "raciocínio" da saída do GPT. Podemos tentar adicionar a frase `vamos explicar passo a passo` da seguinte forma:

```markdown
...
e) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares.
Vamos explicar passo a passo.
```
Esta frase aumentará a verbosidade do modelo. Você pode obter uma saída como esta:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="João de Worcester, um monge inglês, registrou a observação, em 8 de dezembro de 1128, de dois grandes pontos solares incomuns. Cinco dias depois, uma aurora boreal brilhante foi observada no sul da Coreia. A atividade dos pontos solares é normalmente seguida pela aparição de uma aurora boreal, após um período de tempo que em média é de cinco dias. Assim, a observação na Coreia ajuda a confirmar a observação de John de Worcester. Qual das seguintes alternativas, se verdadeira, mais fortalece o argumento?\n\na) Uma aurora boreal pode ocorrer às vezes mesmo quando não houve atividade significativa de pontos solares na semana anterior.\nb) Fontes chinesas registraram a observação de pontos solares mais de 1000 anos antes de John de Worcester.\nc) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia.\nd) Como é impossível observar pontos solares a olho nu em condições típicas de luz do dia, a observação registrada por John de Worcester teria ocorrido em condições meteorológicas incomuns, como neblina ou nuvens finas.\ne) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares.\n\nVamos explicar passo a passo." initial-response="O argumento apresentado é que a observação de pontos solares por João de Worcester, seguida pela observação de uma aurora boreal na Coreia cinco dias depois, fortalece a relação entre esses eventos. Para fortalecer ainda mais esse argumento, precisamos escolher a alternativa que mais apoia essa relação.\n\na) Esta alternativa enfraquece o argumento, pois sugere que uma aurora boreal pode ocorrer sem atividade significativa de pontos solares na semana anterior.
b) Embora esta alternativa seja interessante, ela não fortalece diretamente o argumento apresentado. Além disso, a fonte dessa informação pode ser questionável.
c) Esta alternativa fortalece o argumento, pois sugere que apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia, corroborando a relação entre os eventos observados por João de Worcester e na Coreia.
d) Esta alternativa não é relevante para o argumento apresentado, pois não afeta a relação entre a observação de pontos solares por João de Worcester e a observação da aurora boreal na Coreia.
e) Embora esta alternativa seja interessante, ela não fortalece diretamente o argumento apresentado. Além disso, não há garantia de que o desenho de John de Worcester seja a primeira ilustração de atividade de pontos solares.\n\nPortanto, a alternativa mais forte é a letra c." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>


:::info
Observe como o modelo raciocina através do problema passo a passo.

O termo específico para esse comportamento é "Cadeia de Pensamento" (@wei2022chain); o modelo gera sequencialmente declarações para chegar a uma resposta. Isso é semelhante ao conceito de Pensamento de Sistema 2 (do livro ["Rápido e Devagar"] de Daniel Kahneman (https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)); o modelo é programado para usar o Pensamento de Sistema 1, mas pode encadear o Pensamento de Sistema 1 para chegar a uma resposta mais metodológica.

:::

## Melhorias.

Aqui estão algumas variações do nosso prompt básico para perguntas de múltipla escolha.


### Alterando a ordem dos itens de resposta

Você pode reordenar os itens de resposta na sua pergunta:
```
...
a) Como é impossível observar pontos solares a olho nu em condições típicas de luz do dia, a observação registrada por John de Worcester teria ocorrido em condições meteorológicas incomuns, como neblina ou nuvens finas.
b) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares
...
```

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="João de Worcester, um monge inglês, registrou a observação, em 8 de dezembro de 1128, de dois grandes pontos solares incomuns. Cinco dias depois, uma aurora boreal brilhante foi observada no sul da Coreia. A atividade dos pontos solares é normalmente seguida pela aparição de uma aurora boreal, após um período de tempo que em média é de cinco dias. Assim, a observação na Coreia ajuda a confirmar a observação de John de Worcester. Qual das seguintes alternativas, se verdadeira, mais fortalece o argumento?\n\na) Como é impossível observar pontos solares a olho nu em condições típicas de luz do dia, a observação registrada por John de Worcester teria ocorrido em condições meteorológicas incomuns, como neblina ou nuvens finas.\nb) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares\nc) Uma aurora boreal pode ocorrer às vezes mesmo quando não houve atividade significativa de pontos solares na semana anterior.\nd) Fontes chinesas registraram a observação de pontos solares mais de 1000 anos antes de John de Worcester.\ne) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia.\n\nVamos explicar passo a passo." initial-response="A observação de João de Worcester de dois grandes pontos solares incomuns em 8 de dezembro de 1128 foi seguida, cinco dias depois, por uma aurora boreal brilhante no sul da Coreia. Como a atividade dos pontos solares é normalmente seguida pela aparição de uma aurora boreal, a observação na Coreia ajuda a confirmar a observação de John de Worcester. Para fortalecer ainda mais esse argumento, devemos encontrar uma opção que apoie essa relação entre pontos solares e auroras boreais.\n\nA opção (e) não fortalece o argumento, pois afirma que apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia, o que não é coerente com a observação de John de Worcester.\n\nA opção (b) não tem relação com a observação de auroras boreais e, portanto, não ajuda a fortalecer o argumento.\n\nA opção (a) contradiz o argumento, pois afirma que é impossível observar pontos solares a olho nu em condições típicas de luz do dia, o que não é verdade.\n\nA opção (d) não fortalece o argumento, pois relata uma observação de pontos solares anterior a de John de Worcester, o que não afeta a relação entre pontos solares e auroras boreais.\n\nA opção (c) não enfraquece o argumento, mas também não ajuda a fortalecê-lo, pois afirma que uma aurora boreal pode ocorrer às vezes mesmo quando não houve atividade significativa de pontos solares na semana anterior, o que não é relevante para a relação entre os pontos solares e a aurora boreal observados por João de Worcester.\n\nPortanto, a opção que mais fortalece o argumento é a (e)." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

### Refazendo a pergunta com outras palavras


Lembre-se que o prompt original era o seguinte:

```
Qual das opções a seguir, se verdadeira, mais fortalece o argumento?
```

Podemos mudar o prompt para o seguinte:

```
Identifique cada opção como fortalece, enfraquece ou não afeta o argumento.
```
para obter mais informações sobre as opções de resposta.


<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="João de Worcester, um monge inglês, registrou a observação, em 8 de dezembro de 1128, de dois grandes pontos solares incomuns. Cinco dias depois, uma aurora boreal brilhante foi observada no sul da Coreia. A atividade dos pontos solares é normalmente seguida pela aparição de uma aurora boreal, após um período de tempo que em média é de cinco dias. Assim, a observação na Coreia ajuda a confirmar a observação de John de Worcester. Identifique cada opção como fortalece, enfraquece ou não afeta o argumento.\n\na) Uma aurora boreal pode ocorrer às vezes mesmo quando não houve atividade significativa de pontos solares na semana anterior.\nb) Fontes chinesas registraram a observação de pontos solares mais de 1000 anos antes de John de Worcester.\nc) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal visível em uma latitude tão baixa quanto a da Coreia.\nd) Como é impossível observar pontos solares a olho nu em condições típicas de luz do dia, a observação registrada por John de Worcester teria ocorrido em condições meteorológicas incomuns, como neblina ou nuvens finas.\ne) O relato de John de Worcester incluía um desenho dos pontos solares, que pode ser a primeira ilustração de atividade de pontos solares.\n\nVamos explicar passo a passo." initial-response="a) Enfraquece o argumento, pois sugere que a aurora boreal observada na Coreia pode não estar relacionada à atividade dos pontos solares registrados por John de Worcester. \n\nb) Não afeta o argumento, pois o fato de as fontes chinesas terem registrado a observação de pontos solares antes de John de Worcester não tem relação direta com a ocorrência de uma aurora boreal na Coreia após a observação do monge.\n\nc) Fortalece o argumento, pois sugere que a observação de uma aurora boreal em uma latitude tão baixa quanto a da Coreia requer uma atividade intensa de pontos solares, o que é consistente com a observação de John de Worcester.\n\nd) Enfraquece o argumento, pois a possibilidade de que as condições meteorológicas incomuns possam ter afetado a observação de John de Worcester pode sugerir que os pontos solares registrados por ele possam não ter sido tão incomuns ou significativos.\n\ne) Fortalece o argumento, pois sugere que o registro de John de Worcester pode ser a primeira ilustração conhecida de atividade de pontos solares, o que reforça sua observação e a importância do evento.." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>


### Incluindo contexto adicional

Abaixo um exemplo de um problema que poderia ser facilmente resolvido usando o [Teorema de Bayes](https://pt.wikipedia.org/wiki/Teorema_de_Bayes)

```
Considere dois testes médicos, A e B, para um vírus. O Teste A é 90% eficaz em reconhecer o vírus quando presente, mas tem uma taxa de 5% de falsos positivos (indicando que o vírus está presente quando não está). O Teste B é 95% eficaz em reconhecer o vírus, mas tem uma taxa de 10% de falsos positivos. Os dois testes usam métodos independentes para identificar o vírus. O vírus é carregado por 2% de todas as pessoas.
(a) Suponha que uma pessoa é testada para o vírus usando apenas o Teste A. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que o Teste A deu positivo? (2 pontos)
(b) Suponha que uma pessoa é testada para o vírus usando apenas o Teste B. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que o Teste B deu positivo? (2 pontos)
(c) Suponha que uma pessoa é testada para o vírus usando ambos os testes. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que ambos os testes deram positivo? (2 pontos)
```

Vamos tentar com o Chat-GPT:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Considere dois testes médicos, A e B, para um vírus. O Teste A é 90% eficaz em reconhecer o vírus quando presente, mas tem uma taxa de 5% de falsos positivos (indicando que o vírus está presente quando não está). O Teste B é 95% eficaz em reconhecer o vírus, mas tem uma taxa de 10% de falsos positivos. Os dois testes usam métodos independentes para identificar o vírus. O vírus é carregado por 2% de todas as pessoas.\n(a) Suponha que uma pessoa é testada para o vírus usando apenas o Teste A. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que o Teste A deu positivo? (2 pontos)\n(b) Suponha que uma pessoa é testada para o vírus usando apenas o Teste B. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que o Teste B deu positivo? (2 pontos)\n(c) Suponha que uma pessoa é testada para o vírus usando ambos os testes. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que ambos os testes deram positivo? (2 pontos)" initial-response="(a) A probabilidade de a pessoa estar realmente carregando o vírus, dado que o Teste A deu positivo, é de 90%.\n\n(b) A probabilidade de a pessoa estar realmente carregando o vírus, dado que o Teste B deu positivo, é de 95%.\n\n(c) A probabilidade de a pessoa estar realmente carregando o vírus, dado que ambos os testes deram positivo, é de 99,9%." max-tokens="256" box-rows="10" model-temp="0" top-p="0"></div>

A resposta está **incorreta**!

Vamos adicionar um pouxo de contexto.
```
...
Vamos pensar passo a passo. A formula de Bayes é
```
O modelo então vai usar a fórmula correta:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Considere dois testes médicos, A e B, para um vírus. O Teste A é 90% eficaz em reconhecer o vírus quando está presente, mas possui uma taxa de 5% de falso positivo (indicando que o vírus está presente quando não está). O Teste B é 95% eficaz em reconhecer o vírus, mas possui uma taxa de 10% de falso positivo. Os dois testes usam métodos independentes para identificar o vírus. O vírus é carregado por 2% de todas as pessoas.\n\n(a) Suponha que uma pessoa é testada para o vírus usando apenas o Teste A. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que o Teste A retornou positivo? (2 pontos)\n\n(b) Suponha que uma pessoa é testada para o vírus usando apenas o Teste B. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que o Teste B retornou positivo? (2 pontos)\n\n(c) Suponha que uma pessoa é testada para o vírus usando ambos os testes. Qual é a probabilidade de que a pessoa esteja realmente carregando o vírus, dado que ambos os testes retornaram positivo? (2 pontos)\n\nVamos explicar passo a passo. Forneça a expressão numérica como resposta, não retorne um número. A fórmula para Bayes é" initial-response="A fórmula para o Teorema de Bayes é:\n\nP(A|B) = P(B|A) * P(A) / P(B)\n\nOnde:\n\nP(A|B) é a probabilidade condicional de A dado B (a probabilidade de que a pessoa esteja realmente carregando o vírus dado que o teste retornou positivo).\nP(B|A) é a probabilidade condicional de B dado A (a probabilidade de que o teste retorne positivo se a pessoa estiver realmente carregando o vírus).\nP(A) é a probabilidade a priori de A (a probabilidade de que a pessoa esteja carregando o vírus).\nP(B) é a probabilidade a priori de B (a probabilidade de que o teste retorne positivo).\n\n(a) P(A|B) = (0,9 * 0,02) / (0,9 * 0,02 + 0,05 * 0,98) = 0,26\n\n(b) P(A|B) = (0,95 * 0,02) / (0,95 * 0,02 + 0,1 * 0,98) = 0,16\n\n(c) P(A|B) = (0,9 * 0,95 * 0,02) / (0,9 * 0,95 * 0,02 + 0,05 * 0,98 * 0,1) = 0,83" max-tokens="256" box-rows="10" model-temp="0" top-p="0"></div>

A resposta está **correta**!

:::warning
GPT não performa operações aritiméticas muito bem. Você pode observar que mesmo quando a expressão retornada está correta, o número computado está errado.

Tente incluir a frase: `Forneça a expressão numérica como resposta, não retorne um número` para cancelar a etapa de computação.

Você pode estar interessado em [MRKL](https://learnprompting.org/docs/advanced_applications/mrkl)(@karpas2022mrkl), o paradigma de combinar GPT com ferramentas externas como calculadoras, para resolver esse tipo de problema. 
:::

Escrito por [zeyuzhao](https://github.com/Zeyuzhao). Traduzido por [gabi fonseca](https://imgabi.com).