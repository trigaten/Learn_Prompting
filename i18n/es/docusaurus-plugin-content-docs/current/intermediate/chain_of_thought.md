---
sidebar_position: 3
locale: en-us
style: chicago
---

# 🟢 Cadena de pensamiento

El Encadenamiento de pensamiento (CoT, por sus siglas en inglés "Chain of Thought") (@wei2022chain) es un método de indicaciones que se desarrolló recientemente y que alienta al LLM a explicar su razonamiento. La imagen a continuación (@wei2022chain) muestra una indicación estándar de "pocos ejemplos" (izquierda) en comparación con una indicación de encadenamiento de pensamiento (derecha).

import CoTExample from '@site/docs/assets/chain_of_thought_example.png';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Indicación estándar vs. CoT (Wei et al.)
</div>


La idea principal de CoT es que, al mostrarle al LLM algunos %%ejemplos|ejemplos%% con pocos disparos en los que se explica el proceso de razonamiento, el LLM también mostrará el proceso de razonamiento al responder la indicación. Esta explicación del razonamiento a menudo conduce a resultados más precisos.

## Ejemplo

Aquí hay algunas demostraciones. La primera muestra que GPT-3 (davinci-003) no puede resolver un problema de palabras simple. La segunda muestra que GPT-3 (davinci-003) resuelve con éxito el mismo problema utilizando la indicación de CoT.

#### Incorrecto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="¿Cuál es la forma más rápida de llegar al trabajo?\nOpción 1: Tomar un autobús de 1000 minutos, luego un tren de media hora y finalmente un paseo en bicicleta de 10 minutos.\nOpción 2: Tomar un autobús de 800 minutos, luego un tren de una hora y finalmente un paseo en bicicleta de 30 minutos." initial-response="La opción 1 es una forma más rápida de llegar al trabajo." max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

#### Correcto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="¿Cuál es la forma más rápida de llegar a casa?\nOption 1: Tomar un autobús de 10 minutos, luego un autobús de 40 minutos y finalmente un tren de 10 minutos.\nOption 2: Tomar un tren de 90 minutos, luego un paseo en bicicleta de 45 minutos y finalmente un autobús de 10 minutos.\nOption 1: tomará 10+40+10=60 minutos.\nOption 2: tomará 90+45+10=145 minutos.\nSince Dado que la opción 1 tarda 60 minutos y la opción 2 tarda 145 minutos, la opción 1 es más rápida.\n\n¿Cuál es la forma más rápida de llegar al trabajo? \nOption 1: Tomar un autobús de 1000 minutos, luego un tren de media hora y finalmente un paseo en bicicleta de 10 minutos. \nOption 2: Tomar un autobús de 800 minutos, luego un tren de una hora y finalmente un paseo en bicicleta de 30 minutos." initial-response="La opción 1 tomará 1000+30+10=1040 minutos.
La opción 2 tomará 800+60+30=890 minutos.
Dado que la opción 2 tarda 890 minutos y la opción 1 tarda 1040 minutos, la opción 2 es más rápida." max-tokens="256" box-rows="18" model-temp="0" top-p="0"></div>

## Resultados

Se ha demostrado que CoT es efectivo para mejorar los resultados en tareas como 
aritmética, sentido común y tareas de razonamiento simbólico (@wei2022chain). 
En particular, prompted PaLM 540B (@chowdhery2022palm) alcanza una precisión de 
tasa de resolución del 57% en GSM8K (@cobbe2021training) (SOTA en ese momento).

import PromptedPaLM from '@site/docs/assets/prompted_palm.png';

<div style={{textAlign: 'center'}}>
  <img src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparación de modelos en la prueba de referencia GSM8K (Wei et al.)
</div>

## Limitaciones

Es importante destacar que, según Wei et al., "CoT solo produce mejoras en el rendimiento cuando se utiliza con modelos de ∼100B de parámetros". Modelos más pequeños escribieron cadenas de pensamiento ilógicas, lo que llevó a una precisión peor que la de la prueba estándar. Los modelos suelen obtener mejoras de rendimiento a partir de la sugerencia CoT de manera proporcional al tamaño del modelo.

## Notas

Ningún modelo de lenguaje fue ~~dañado~~ afinado en el proceso de escritura de este capítulo 😊.