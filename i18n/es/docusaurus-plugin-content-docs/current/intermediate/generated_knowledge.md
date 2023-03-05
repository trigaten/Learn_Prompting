---
sidebar_position: 7
---

# 🟡 Generated Knowledge


El enfoque de conocimiento generado (@liu2021generated) pide al LLM que genere información 
potencialmente útil sobre la pregunta antes de generar una respuesta. Este enfoque está 
compuesto por dos pasos intermedios, generación de conocimiento e integración de 
conocimiento. 

import KGImage from '@site/docs/assets/knowledge_generation.png';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge (Liu et al.)
</div>

## Generación de conocimiento

En el paso de generación de conocimiento, se le pide al LLM que genere un conjunto de 
hechos sobre la **pregunta**. El LLM se solicita de manera few-shot como se ve a 
continuación. Se generan M diferentes completados usando la misma solicitud.

import KGP1Image from '@site/docs/assets/gen_k_p1.png';

<div style={{textAlign: 'center'}}>
  <img src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge Example (Liu et al.)
</div>


## Integración de conocimiento

A continuación, generamos preguntas "aumentadas con conocimiento" y le pedimos al LLM 
que las responda para obtener respuestas finales. La forma más sencilla de entender esto 
es a través de un ejemplo.

Supongamos que intentamos responder la **pregunta** "La mayoría de los canguros tienen 
extremidades <mask\>". Suponga que en el paso de generación de conocimiento generamos 2 
conocimientos (M=2):

- Conocimiento 1: "Los canguros son marsupiales que viven en Australia."

- Conocimiento 2: "Los canguros son marsupiales que tienen 5 extremidades."

Ahora, concatenamos cada conocimiento con la pregunta para generar preguntas aumentadas 
con conocimiento:

- Pregunta aumentada con conocimiento 1: "La mayoría de los canguros tienen <mask\> 
extremidades. Los canguros son marsupiales que viven en Australia."

- Pregunta aumentada con conocimiento 2: "La mayoría de los canguros tienen <mask\> 
extremidades. Los canguros son marsupiales que tienen 5 extremidades."

Luego, le pedimos al LLM que responda estas preguntas aumentadas con conocimiento y 
obtenemos las propuestas de respuestas finales:

- Respuesta 1: "4"

- Respuesta 2: "5"

Seleccionamos la respuesta con la probabilidad más alta como respuesta final. La 
probabilidad más alta podría ser la probabilidad softmax del token de respuesta, o la 
probabilidad logarítmica del (los) token(s) de respuesta.

## Resultados

Este método muestra mejoras en varios conjuntos de datos de sentido común.

## Notas

El conocimiento correspondiente a la respuesta seleccionada se llama _conocimiento seleccionado_.
