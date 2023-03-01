---
sidebar_position: 1
---
# 🟢 *Prompting*

No capítulo anterior, nós dicutimos sobre IA e como os humanos podem ensinar IAs a realizar tarefas. O processo de
instruir uma IA a fazer uma tarefa é chamado de prompting(@shin2020autoprompt). Nós enviamos para a IA uma série de
instruções (o *prompt*) e ela executa a tarefa. *Prompts* podem ser simples como uma pergunta, ou complexos como um
texto de vários parágrafos.

Abaixo, alguns exemplos de *prompts*:

#### 1) Resumindo um Artigo

Digamos que você está lendo um artigo sobre chuva de granizo em Minas Gerais. Você quer rapidamente capturar as ideias
principais do artigo, então você mostra para a IA o que você está lendo e pede um resumo[^2]:

```txt
A chuva de granizo no leste de Minas Gerais em 1985 foi um evento de queda de granizo e chuvas intensas que afetou
severamente áreas dos vales do Rio Doce e Mucuri, no interior mineiro, em 30 de setembro de 1985. O município de
Itabirinha, então denominado Itabirinha de Mantena, foi o mais afetado. Contava com cerca de 10 mil habitantes em 1985,
dos quais 4 mil ficaram desabrigados. Somente nessa cidade foram registradas vinte vítimas fatais e seiscentos feridos.

Resuma esse parágrafo em uma única sentença.
```

Aqui está a resposta da IA. É uma leitura muito mais curta!

<pre>
  <div className="bluegreen-highlight">
    Em 30 de setembro de 1985, uma chuva de granizo e chuvas intensas atingiu severamente as áreas dos vales do Rio Doce
    e Mucuri no leste de Minas Gerais, resultando em 20 vítimas fatais e 600 feridos em Itabirinha, o município mais
    afetado.
  </div>
</pre>

#### 2) Resolvendo um Problema Matemático

Se você tiver uma lista de equações matemáticas que você gostaria de resolver através de um modelo de linguagem, você
pode criar um *prompt* utilizando a pergunda "Quanto é {{EQUAÇÃO}}".

Para uma certa questão, seu *prompt* completo pode ser algo como:

```txt
Quanto é 965*590?
```

Para esse *prompt*, a IA GPT-3 (text-davinci-003) algumas vezes responde incorretamente `572,850`. É aqui onde a
engenharia de *prompt* entra em ação.

# Prompt Engineering

If, instead of asking `What is 965*590?`, we ask 
`Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct:`, GPT-3 will
answer `569350` (correct). Why is this the case? Why is telling the AI twice to give a correct answer helpful? How can we create
prompts that yield optimal results on our task? This last question, in particular,
is the focus of the field of Prompt Engineering, as well as this course.

Read on to learn how to engineer good prompts!

[^2]: This paragraph is from https://en.wikipedia.org/wiki/Snow_in_Florida