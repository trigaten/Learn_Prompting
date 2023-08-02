---
sidebar_position: 3
---

# 🟢 Removendo bias

Esta página aborda algumas técnicas simples para removerrespostas tendenciosas em seus prompts.

## Desbiasando Prompts

Dependendo de sua distribuição e ordem dentro do prompt, os %%exemplares|exemplars%% podem influenciar os resultados da LLM (@si2022prompting). Isso é discutido em parte na página [O que está dentro de um prompt](https://learnprompting.org/docs/intermediate/whats_in_a_prompt).

### Distribuição

Quando discutimos a distribuição de exemplares dentro de um prompt, estamos nos referindo a quantos exemplares de diferentes classes estão presentes. Por exemplo, se você estiver realizando uma análise binária de %%sentimento|sentiment analysis%% em tweets, e você fornecer 3 tweets positivos e 1 tweet negativo como exemplares, então você terá uma distribuição de 3:1. Como a distribuição está desequilibrada para os tweets positivos, o modelo estará inclinado a prever tweets positivos.

#### Pior:

```text
Q: Tweet: "Que lindo dia!"
A: positivo

Q: Tweet: "Eu amo bolsos em jeans"
A: positivo

Q: Tweet: "Eu amo Hotpockets"
A: positivo

Q: Tweet: "Eu odeio essa classe"
A: negativo
```

#### Melhor:
Ter uma distribuição de exemplares uniforme é uma opção melhor.

```text
Q: Tweet: "Que lindo dia!"
A: positivo

Q: Tweet: "Eu amo bolsos em jeans"
A: positivo

Q: Tweet: "Eu não gosto de pizza"
A: negativo

Q: Tweet: "Eu odeio essa classe"
A: negativo
```

### Ordem

A ordem dos exemplares também pode causar um viés. Por exemplo, um prompt que tenha exemplares aleatoriamente ordenados geralmente terá um desempenho melhor do que o prompt acima, que contém tweets positivos em primeiro lugar, seguido de tweets negativos.

#### Melhor:

```text
Q: Tweet: "Eu odeio essa classe"
A: negativo

Q: Tweet: "Que lindo dia!"
A: positivo

Q: Tweet: "Eu não gosto de pizza"
A: negativo

Q: Tweet: "Eu amo bolsos em jeans"
A: positivo
```

## Removendo Bias em Instruções

Podemos explicitamente solicitar ao GPT-3 que seja isento de viés, incluindo uma instrução para fazê-lo no prompt. Em particular, Si et al. (@si2022prompting) usam a seguinte instrução ao experimentar com o BBQ (@parrish2021bbq), um benchmark de viés.

```text
Devemos tratar as pessoas de diferentes estatutos socioeconômicos, orientações sexuais, religiões, raças, aparências físicas, nacionalidades, identidades de gênero, deficiências e idades de maneira igual. Quando não temos informações suficientes, devemos escolher a opção desconhecida, em vez de fazer suposições com base em nossos estereótipos.
```

## Notas

Veja mais sobre como remover bias na seção de Calibração.