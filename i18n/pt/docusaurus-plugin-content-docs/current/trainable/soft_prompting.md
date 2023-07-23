---
sidebar_position: 1
---

# 🔴 Prompts Suaves

A afinação de prompts (@lester2021power), uma alternativa à afinação fina de modelos (@khashabi2021prompt), congela os pesos do modelo e atualiza os parâmetros de um prompt. O prompt resultante é um 'prompt suave'.


import Image from '@site/docs/assets/trainable/prompt_tuning.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Ajuste de Modelo vs Ajuste de Prompt (Lester et al.)
</div>

A imagem acima contrasta o ajuste de modelo com o ajuste de prompt. No ajuste de modelo, você afina o mesmo modelo em diferentes tarefas. Isso lhe dá alguns modelos diferentes, com os quais não é necessariamente fácil agrupar entradas.

Por outro lado, o ajuste de prompt permite que você use o mesmo modelo para todas as tarefas. Você só precisa anexar os prompts apropriados no momento da inferência, o que facilita o agrupamento entre tarefas diferentes. Isso é praticamente a mesma vantagem que o prompting regular tem. Além disso, prompts suaves treinados para um único modelo em várias tarefas muitas vezes terão o mesmo comprimento de token.

## Como funciona

Para entender a lógica básica por trás do prompt suave, pense em como a **inferência do modelo** funciona em um prompt específico: `"Quanto é 2+2?"`.

1) Pode ser tokenizado como What, 's, 2, +, 2, ?.

2) Em seguida, cada token será convertido em um vetor de valores.

3) Esses vetores de valores podem ser considerados como parâmetros do modelo. O modelo pode ser posteriormente treinado, ajustando apenas os pesos desses prompts.

Observe que assim que começamos a atualizar esses pesos, os vetores dos tokens não correspondem mais a embeddings reais do vocabulário.

# Resultados

O ajuste de prompt tem melhor desempenho com modelos maiores. Modelos maiores também requerem menos tokens de prompt suave. Independentemente disso, mais de 20 tokens não proporcionam ganhos significativos de desempenho.