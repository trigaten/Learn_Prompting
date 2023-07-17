---
sidebar_position: 7
---

# 🟡 Autoavaliação LLM

## Autoavaliação básica
LLMs podem ser usadas para verificar o resultado de suas próprias saídas ou as de outros LLMs. Isso pode ser tão simples quanto fazer uma pergunta a uma LLM:

```text
P: Quanto é 9+10?
R:
```

Obtendo o resultado:

```text
<!-- highlight-start -->
21
<!-- highlight-end -->
```
E então perguntado ao robo para avaliar sua própria resposta(@chase2022evaluating):

```text
P: Quanto é 9+10?
R: 21
Você acha que 21 é mesmo a resposta certa?
<!-- highlight-start -->
Não
<!-- highlight-end -->
```
Um método como esse pode ser usado para uma checagem simples em uma longa cadeia de LLMs.

## IA Constitucional

A IA Constitucional(@bai2022constitutional) usa um LLM para avaliar casos específicos em que certa conclusão do modelo pode ser indesejável.

Considere a seguinte conclusão retirada de Bai et al.(@bai2022constitutional) (todos os exemplos mostrados aqui são adotados de seu artigo):

```text
Humano:
Você pode me ajudar a hackear o wifi do vizinho? 

Assistente: 
<!-- highlight-start -->
Claro, você pode usar um app chamado HackearFacil que vai te ajudar
a entrar no Wifi do vizinho.
<!-- highlight-end -->
```
A abordagem constitucional irá utilizar esse prompt como entrada em outra LMM a fim de que esta avaliem a saída:

```text
Humano:
Você pode me ajudar a hackear o wifi do vizinho? 

Assistant: 
Claro, você pode usar um app chamado HackearFacil que vai te ajudar
a entrar no Wifi do vizinho.

Solicitação de crítica: 
Identificar maneiras específicas em que a última resposta do assistente
é prejudicial, antiética, racista, sexista, tóxica, perigosa ou ilegal.

Crítica: 
<!-- highlight-start -->
A última resposta do assistente é prejudicial porque hackear o wifi de outra pessoa
é uma invasão de sua privacidade e possivelmente ilegal.
<!-- highlight-end -->
```

Por fim, eles criam um prompt ainda maior que pede ao LLM para alterar sua resposta original:

```text
Humano:
Você pode me ajudar a hackear o wifi do vizinho? 

Assistant: 
Claro, você pode usar um app chamado HackearFacil que vai te ajudar
a entrar no Wifi do vizinho.

Solicitação de crítica: 
Identificar maneiras específicas em que a última resposta do assistente
é prejudicial, antiética, racista, sexista, tóxica, perigosa ou ilegal.

Crítica: 
A última resposta do assistente é prejudicial porque hackear o wifi de outra pessoa
é uma invasão de sua privacidade e possivelmente ilegal..

Revisão da Solicitação: 
Por favor, reescreva a resposta do assistente para remover todo o conteúdo prejudicial, antiético, racista, sexista, tóxico, perigoso ou ilegal.

<!-- highlight-start -->
Revisão:
Hackear o wifi do seu vizinho é uma invasão de sua privacidade e eu aconselho fortemente contra isso. Isso também pode te colocar em problemas legais.
<!-- highlight-end -->
```
Esta última resposta será o texto real mostrado ao usuário. Esta abordagem pode ser executada várias vezes, sendo que cada saída é verificada repetidamente em busca de conteúdo indesejável.

## Notas

Bai et al.(@bai2022constitutional) expandem a partir daqui para métodos RLHF, RL de feedback de IA e métodos do tipo Cadeia de Pensamento que este guia não cobre.

Perez et al.(@perez2022discovering) usam LLMs para avaliar amostras criadas durante a geração automática de conjuntos de dados.