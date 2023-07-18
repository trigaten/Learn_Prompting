---
sidebar_position: 1
---

# 🔴 Soft Prompts

La sintonización de prompts (@lester2021power), una alternativa a la sintonización fina del modelo (@khashabi2021prompt), congela los pesos del modelo y actualiza los parámetros de un prompt. El prompt resultante es un 'prompt suave'.


import Image from '@site/docs/assets/trainable/prompt_tuning.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Ajuste del modelo vs. Ajuste del prompt (Lester et al.)
</div>

La imagen anterior contrasta la sintonización del modelo con la sintonización del prompt. En la sintonización del modelo, se ajusta el mismo modelo en diferentes tareas. Esto te da unos pocos modelos diferentes, con los cuales no necesariamente puedes agrupar fácilmente las entradas.

Por otro lado, la sintonización del prompt te permite utilizar el mismo modelo para todas las tareas. Sólo necesitas añadir los prompts adecuados en el momento de la inferencia, lo que facilita el agrupamiento de diferentes tareas. Básicamente, esto es la misma ventaja que tiene la sintonización regular de prompts. Además, los prompts suaves entrenados para un solo modelo en múltiples tareas a menudo tendrán la misma longitud de tokens.

## Cómo funciona

Para entender la lógica básica detrás de la sintonización suave del prompt, pensemos en cómo funciona la **inferencia del modelo** en un prompt dado: "¿Cuánto es 2+2?".

1) Podría ser tokenizado como "¿Cuánto, 'es', 2, +, 2,?".

2) Luego, cada token se convertirá en un vector de valores.

3) Estos vectores de valores pueden considerarse como parámetros del modelo. El modelo puede ser adicionalmente entrenado, ajustando sólo los pesos de estos prompts.

Nótese que tan pronto como empezamos a actualizar estos pesos, los vectores de los tokens ya no corresponden a los embeddings reales del vocabulario.

# Resultados

La sintonización de prompts funciona mejor con modelos más grandes. Los modelos más grandes también requieren menos tokens suaves del prompt. Sin embargo, más de 20 tokens no produce ganancias significativas de rendimiento.