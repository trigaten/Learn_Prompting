---
sidebar_position: 90
---

# 📙 Vocabulário

Consulte esta página para obter uma lista de termos e conceitos que usaremos ao longo deste curso.

#### Modelos de Linguagem Grandes (LLMs), Modelos de Linguagem Pré-treinados (PLMs)(@branch2022evaluating), Modelos de Linguagem (LMs) e modelos fundamentais

Esses termos se referem mais ou menos à mesma coisa: AIs (redes neurais) grandes, que geralmente foram treinados em uma grande quantidade de texto.

#### Modelos de Linguagem Mascaráveis (MLMs)
Os MLMs são um tipo de modelo NLP, que têm um token especial, geralmente `[MASK]`, que é substituído por uma palavra do vocabulário. O modelo então prevê a palavra que foi mascarada. Por exemplo, se a frase é "O cachorro está [MASK] o gato", o modelo prevê "perseguindo" com alta probabilidade.

#### Rótulos (labels, em inglês)

Digamos que queremos classificar alguns tweets como sendo ofensivos ou não. Se tivermos uma lista de tweets e seu rótulo correspondente (ofensivo ou não-ofensivo), podemos treinar um modelo para classificar se os tweets são ofensivos ou não. Os rótulos são geralmente apenas possibilidades para a tarefa de classificação.

#### Espaço de Rótulos ou Categorias (Labelspace, em inglês)

Todos os possíveis rótulos para uma determinada tarefa ('ofensivo' e 'não-ofensivo' para o exemplo acima).

#### Sentiment Analysis

Sentiment analysis is the task of classifying text into positive, negative, or other sentiments.

#### "Modelo" vs. "IA" vs. "LLM"

Esses termos são usados de forma intercambiável ao longo deste curso, mas eles nem sempre significam a mesma coisa. LLMs são um tipo de IA, como mencionado acima, mas nem todas as IAs são LLMs. Quando mencionamos modelos neste curso, estamos nos referindo a modelos de IA. Portanto, neste curso, você pode considerar os termos "modelo" e "IA" como intercambiáveis.

#### Aprendizado de Máquina (ML, Machine Learning, em inglês)

ML é um campo de estudo que se concentra em algoritmos que podem aprender com dados. ML é uma subárea da IA.

#### Verbalizador

No cenário de classificação, verbalizadores são mapeamentos de rótulos para palavras no vocabulário de um modelo de linguagem (@schick2020exploiting). Por exemplo, considere realizar a classificação de sentimento com o seguinte prompt:

```text
Tweet: "I amo pão de queijo."
Qual o sentimento desse Tweet? Responda com 'pos' ou 'neg'.

```
Nesse exemplo o verbalizador estará mapeando os rótulos conceituais de `positivo` e `negativo` para os tokens `pos` and `neg`.

#### Aprendizado por Reforço a partir de Feedback Humano (ARFH) 
ARFH é um método para ajustar LLMs de acordo com dados de preferência humana. 
Em inglês o termo é conhecido como Reinforcement Learning from Human Feedback (RLHF).

<!-- %%RemarkAutoGlossary::list_all%% -->