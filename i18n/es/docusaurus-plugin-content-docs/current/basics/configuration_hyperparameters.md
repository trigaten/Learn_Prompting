---
sidebar_position: 100
---

# 🟢 Ajustes del LLM

import Temperature from '@site/docs/assets/basics/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

# Introducción

Los resultados de los LLM pueden verse afectados por los _hiperparámetros de configuración_, que controlan varios aspectos del modelo, como su grado de "aleatoriedad". Estos hiperparámetros pueden ajustarse para producir resultados más creativos, diversos e interesantes. En esta sección, discutiremos dos hiperparámetros de configuración importantes y cómo afectan a los resultados de los LLM.

:::note
[para investigadores] Son diferentes de los hiperparámetros normales, como la tasa de aprendizaje, el número de capas, el tamaño oculto, etc.
:::

## Temperatura

La temperatura es un hiperparámetro de configuración que controla la aleatoriedad de los resultados del modelo lingüístico. Una temperatura alta produce resultados más impredecibles y creativos, mientras que una temperatura baja produce resultados más comunes y conservadores. Por ejemplo, si ajusta la temperatura a 0.5, el modelo generará normalmente un texto más predecible y menos creativo que si ajusta la temperatura a 1.0.

## Top p

Top p, también conocido como muestreo de núcleos, es otro hiperparámetro de configuración que controla la aleatoriedad de la salida del modelo lingüístico. Establece un umbral de probabilidad y selecciona los tokens superiores cuya probabilidad acumulada supera el umbral. A continuación, el modelo toma muestras aleatorias de este conjunto de tokens para generar la salida. Este método puede producir resultados más diversos e interesantes que los métodos tradicionales, que muestrean aleatoriamente todo el vocabulario. Por ejemplo, si se fija top p en 0,9, el modelo sólo tendrá en cuenta las palabras más probables que constituyan el 90% de la masa de probabilidad.

## Otros hiperparámetros relevantes

Hay muchos otros hiperparámetros que pueden afectar el rendimiento del modelo de lenguaje, como la frecuencia y las penalizaciones por presencia. No los cubrimos aquí, pero tal vez lo haremos en el futuro.

## Cómo estos hiperparámetros afectan la salida

Tanto la temperatura como el valor top p pueden afectar al resultado de un modelo lingüístico controlando el grado de aleatoriedad y diversidad del texto generado. Un valor alto de temperatura o de top p produce resultados más impredecibles e interesantes, pero también aumenta la probabilidad de errores o de texto sin sentido. Un valor bajo de temperatura o de Top p pueden producir resultados más conservadores y predecibles, pero también pueden dar lugar a texto repetitivo o poco interesante.

Para tareas de generación de texto, puede que le interese utilizar una temperatura alta o un valor p alto. Sin embargo, para las tareas en las que la precisión es importante, como las tareas de traducción o la respuesta a preguntas, se debe utilizar una temperatura baja o un valor p superior para mejorar la precisión y la corrección factual.

:::note
A veces, más aleatoriedad puede ser útil en tareas donde la precisión es necesaria cuando se combina con [técnicas especiales de prompting](https://learnprompting.org/docs/intermediate/self_consistency).
:::

## Conclusión

En resumen, la temperatura, el top p y otros hiperparámetros de configuración del modelo son factores clave a tener en cuenta cuando se trabaja con modelos lingüísticos. Al comprender la relación entre estos hiperparámetros y el resultado del modelo, los profesionales pueden optimizar sus prompts para tareas y aplicaciones específicas.

:::warning
Algunos modelos, como ChatGPT, **no** permiten ajustar estos hiperparámetros de configuración.
:::

Por jackdickens382
