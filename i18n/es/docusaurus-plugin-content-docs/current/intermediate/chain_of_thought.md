---
sidebar_position: 3
locale: es-mx
style: chicago
---

# 🟢 Cadena de pensamiento

El prompting Chain of Thought (CoT) (@wei2022chain) es un método de prompt recientemente desarrollado que alienta al LLM a explicar su razonamiento. La siguiente imagen (@wei2022chain) muestra un %%few shot standard prompt|prompt estándar de pocos ejemplos%% (izquierda) en comparación con un prompt de Cadena de Pensamiento (derecha).

import CoTExample from '@site/docs/assets/basics/chain_of_thought_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Prompting regular vs. CoT (Wei et al.)
</div>

La idea principal de CoT es que al mostrarle al LLM algunos %%ejemplos|ejemplos%% de few shots donde se explica el proceso de razonamiento, el LLM también mostrará el proceso de razonamiento al responder al prompt. Esta explicación del razonamiento a menudo conduce a resultados más precisos.

## Ejemplo

Aquí hay algunas demostraciones. La primera muestra a GPT-3 (davinci-003) fallando al resolver un problema de palabras simple. La segunda muestra a GPT-3 (davinci-003) resolviendo con éxito el mismo problema, utilizando un prompt de CoT.

#### Incorrecto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="¿Cuál es la forma más rápida de llegar al trabajo?\nOpción 1: Tomar un autobús de 1000 minutos, luego un tren de media hora y finalmente un paseo en bicicleta de 10 minutos.\nOpción 2: Tomar un autobús de 800 minutos, luego un tren de una hora y finalmente un paseo en bicicleta de 30 minutos." initial-response="La opción 1 es una forma más rápida de llegar al trabajo." max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

#### Correcto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="¿Cuál es la forma más rápida de llegar a casa?\nOpción 1: Tomar un autobús de 10 minutos, luego un autobús de 40 minutos y finalmente un tren de 10 minutos.\nOpción 2: Tomar un tren de 90 minutos, luego un paseo en bicicleta de 45 minutos y finalmente un autobús de 10 minutos.\nOpción 1: tomará 10+40+10=60 minutos.\nOpción 2: tomará 90+45+10=145 minutos.\nSince Dado que la opción 1 tarda 60 minutos y la opción 2 tarda 145 minutos, la opción 1 es más rápida.\n\n¿Cuál es la forma más rápida de llegar al trabajo? \nOpción 1: Tomar un autobús de 1000 minutos, luego un tren de media hora y finalmente un paseo en bicicleta de 10 minutos. \nOpción 2: Tomar un autobús de 800 minutos, luego un tren de una hora y finalmente un paseo en bicicleta de 30 minutos." initial-response="La opción 1 tomará 1000+30+10=1040 minutos.
La opción 2 tomará 800+60+30=890 minutos.
Dado que la opción 2 tarda 890 minutos y la opción 1 tarda 1040 minutos, la opción 2 es más rápida." max-tokens="256" box-rows="18" model-temp="0" top-p="0"></div>

## Resultados

Se ha demostrado que CoT es efectivo para mejorar los resultados en tareas como aritmética, sentido común y tareas de razonamiento simbólico (@wei2022chain). En particular, PaLM 540B con prompting (@chowdhery2022palm) logra una precisión de tasa de resolución del 57% en GSM8K (@cobbe2021training) (SOTA en ese momento).

import PromptedPaLM from '@site/docs/assets/intermediate/prompted_palm.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparación de modelos en la prueba de referencia GSM8K (Wei et al.)
</div>

## Limitaciones

Es importante destacar que, según Wei et al., "CoT solo produce mejoras de rendimiento cuando se usa con modelos de alrededor de 100 mil millones de parámetros". Los modelos más pequeños escribieron cadenas de pensamiento ilógicas, lo que condujo a una precisión peor que la del prompting estándar. Los modelos suelen obtener mejoras de rendimiento del prompting CoT de manera proporcional al tamaño del modelo.

## Notas

Ningún modelo de lenguaje fue ~~dañado~~ ajustado en el proceso de escribir este capítulo 😊.
