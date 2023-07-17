---
sidebar_position: 7
---

# 🟡 Generated Knowledge

La idea detrás del enfoque de conocimiento generado(@liu2021generated) es pedir al %%LLM|LLM%% que genere información potencialmente útil sobre una pregunta o tema dado antes de generar una respuesta final.

Por ejemplo, supongamos que desea escribir un pequeño artículo sobre algún animal, como [osos espirituales](https://en.wikipedia.org/wiki/Kermode_bear). Antes de pedirle al %%LLM|LLM%% que escriba el artículo, puede pedirle que genere algunos datos sobre los osos espirituales. Esto ayudará al LLM a escribir un artículo más informativo. Hay dos formas sencillas de hacer esto.

## Enfoque de un solo prompt.

El primer enfoque consiste en pedirle al LLM que genere conocimiento y luego escriba la publicación, todo con un solo prompt.

```text
Genera 4 hechos sobre el oso Kermode, luego usa estos hechos para escribir una breve publicación de blog con la información:

// highlight-start
El oso Kermode, también conocido como oso espíritu, es una rara subespecie del oso negro americano que se encuentra en las regiones costeras de Columbia Británica, Canadá.

1. El oso Kermode es una subespecie única del oso negro americano, con aproximadamente el 10% de la población que tiene pelaje blanco.

2. El oso Kermode es un símbolo de los pueblos de las Primeras Naciones de Columbia Británica y es visto como un animal espiritual.

3. El oso Kermode es una parte importante del ecosistema, ayudando a dispersar las semillas y mantener el equilibrio del bosque.

4. El oso Kermode es una especie protegida y su población es monitoreada de cerca por el gobierno provincial.

El oso Kermode es un animal único y especial que se encuentra en las regiones costeras de Columbia Británica, Canadá. Aproximadamente el 10% de la población de esta subespecie del oso negro americano tiene pelaje blanco, lo que los convierte en una vista rara. El oso Kermode es un símbolo de los pueblos de las Primeras Naciones de Columbia Británica y es visto como un animal espiritual. Es una parte importante del ecosistema, ayudando a dispersar las semillas y mantener el equilibrio del bosque. El oso Kermode es una especie protegida y su población es monitoreada de cerca por el gobierno provincial. Es un animal hermoso y majestuoso, y es importante que hagamos nuestra parte para proteger y conservar esta especie.
// highlight-end
```

## Enfoque de doble prompt

En este enfoque, primero pedimos al %%LLM|LLM%% que genere hechos sobre el oso:

```text
Genera 10 hechos sobre el oso Kermode:
// highlight-start
1. El oso Kermode, también conocido como Spirit Bear, es una rara subespecie del oso negro americano que se encuentra en Columbia Británica, Canadá.

2. El oso Kermode tiene un pelaje único de color blanco o crema, lo cual se debe a un gen recesivo.

3. El oso Kermode es un símbolo de esperanza y renovación para las Primeras Naciones de Columbia Británica.

4. El oso Kermode es una especie protegida y se encuentra en la lista de especies de preocupación especial del Comité sobre el Estatus de la Vida Silvestre en Peligro de Extinción en Canadá.
// highlight-end
```

Luego, utilizamos los hechos generados para escribir el post, con una segunda solicitud:

```text

1. El oso Kermode, también conocido como el Oso Espíritu, es una rara subespecie del oso negro americano que se encuentra en la Columbia Británica, Canadá.

2. El oso Kermode tiene un pelaje único de color blanco o crema, que se debe a un gen recesivo.

3. El oso Kermode es un símbolo de esperanza y renovación para los pueblos de las Primeras Naciones de la Columbia Británica.

4. El oso Kermode es una especie protegida y está clasificado como una especie de especial preocupación por el Comité sobre el Estado de la Vida Silvestre en Peligro de Canadá.

Usa los hechos anteriores para escribir una entrada de blog de un párrafo sobre el oso Kermode:

// highlight-start

El oso Kermode, también conocido como el Oso Espíritu, es una rara subespecie del oso negro americano que se encuentra en la Columbia Británica, Canadá. Este oso único tiene un pelaje blanco o crema, causado por un gen recesivo, y es un símbolo de esperanza y renovación para los pueblos de las Primeras Naciones de la Columbia Británica. El oso Kermode es una especie protegida y está clasificado como una especie de especial preocupación por el Comité sobre el Estado de la Vida Silvestre en Peligro de Canadá, lo que lo convierte en una parte importante de la biodiversidad de la región.

// highlight-end
```

Recomiendo este segundo enfoque, ya que puede producir contenidos más largos de forma más fiable.

## Otro caso de uso

El enfoque del conocimiento generado se introdujo en realidad para una tarea completamente distinta, la de responder a preguntas difíciles. Consideremos la siguiente pregunta, a la que GPT-3 responde incorrectamente:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="¿Cuál país es más grande, Congo o Sudáfrica?" initial-response="Sudáfrica es más grande que Congo." max-tokens="256" box-rows="3" model-temp="0" top-p="0">
    <noscript>Error al cargar Dyno Embed: JavaScript debe estar habilitado</noscript>
</div>
<br/>

Si primero le preguntamos al %%LLM|LLM%% que genere información sobre Congo y Sudáfrica, podemos luego utilizar esa información para responder la pregunta correctamente. En teoría, esto es similar a la técnica de %%CoT|prompting de CoT%%, ya que efectivamente estamos obteniendo del LLM un razonamiento intermedio en forma de hechos relacionados.

Comencemos con el primer paso, _generación de conocimiento_. Podemos pedirle al %%LLM|LLM%% que genere información sobre Congo y Sudáfrica:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Genera algunos hechos sobre los tamaños de Sudáfrica y Congo:" initial-response="Sudáfrica es el país número 25 más grande del mundo, con un área de 1.221.037 kilómetros cuadrados (471.445 millas cuadradas). Congo, por otro lado, es el país número 11 más grande del mundo, con un área de 2.344.858 kilómetros cuadrados (905.567 millas cuadradas). Sudáfrica es casi la mitad del tamaño de Congo, con una población de 57,7 millones en comparación con la población de Congo de 84,3 millones. Sudáfrica es el país más poblado de la región, mientras que Congo es el segundo más poblado." max-tokens="256" box-rows="6" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

A continuación, usemos ese conocimiento para responder correctamente la pregunta. ¡Este es el paso de _integración de conocimiento_!

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Sudáfrica es el país número 25 más grande del mundo, con un área de 1.221.037 kilómetros cuadrados (471.445 millas cuadradas). Congo, por otro lado, es el país número 11 más grande del mundo, con un área de 2.344.858 kilómetros cuadrados (905.567 millas cuadradas). Sudáfrica es casi la mitad del tamaño de Congo, con una población de 57,7 millones en comparación con la población de Congo de 84,3 millones. Sudáfrica es el país más poblado de la región, mientras que Congo es el segundo más poblado.\n\n¿Qué país es más grande, Congo o Sudáfrica?" initial-response="Congo es más grande que Sudáfrica." max-tokens="256" box-rows="15" model-temp="0" top-p="0">
    <noscript>Error al cargar Dyno Embed: JavaScript debe estar habilitado</noscript>
</div>

## Una discusión más técnica

Aunque el caso de uso anterior era similar a la forma en que se introdujo originalmente el conocimiento generado, no es exactamente igual. El siguiente contenido abarca el contexto más técnico en el que se introdujo el enfoque. Sigue el patrón de dos pasos intermedios (generación de conocimiento e integración de conocimiento) que vimos anteriormente.

import KGImage from '@site/docs/assets/intermediate/knowledge_generation.webp';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge (Liu et al.)
</div>

### Generación de conocimiento

En el paso de generación de conocimiento, se pide al %%LLM|LLM%% que genere un conjunto de hechos
sobre la **pregunta**. Al LLM se le pide que responda como se muestra a continuación.
Se generan M terminaciones diferentes utilizando esta misma pregunta (similar al enfoque de autoconsistencia).

import KGP1Image from '@site/docs/assets/intermediate/gen_k_p1.webp';

<div style={{textAlign: 'center'}}>
  <img src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge Example (Liu et al.)
</div>

## Integración de conocimiento

A continuación, generamos preguntas "con conocimientos ampliados" y hacemos una solicitud al modelo LLM con ellas para obtener respuestas finales. La forma más sencilla de entender esto es mediante un ejemplo.

Supongamos que intentamos responder la **pregunta** "La mayoría de los canguros tienen extremidades <mask\>". Supongamos que en la etapa de generación de conocimientos hemos generado 2 conocimientos (M = 2):

- Conocimiento 1: `Los canguros son marsupiales que viven en Australia`.

- Conocimiento 2: `Los canguros son marsupiales que tienen 5 extremidades`.

Ahora, concatenamos cada conocimiento con la pregunta para generar preguntas con conocimientos ampliados:

- Pregunta con Conocimiento Ampliado 1: `La mayoría de los canguros tienen <mask\> extremidades. Los canguros son marsupiales que viven en Australia`.

- Pregunta con Conocimiento Ampliado 2: `La mayoría de los canguros tienen <mask\> extremidades. Los canguros son marsupiales que tienen 5 extremidades`.

Luego, solicitamos al LLM que responda estas preguntas con conocimientos ampliados y obtenemos las propuestas de respuesta final:

- Respuesta 1: `4`

- Respuesta 2: `5`

Seleccionamos la respuesta con la probabilidad más alta como la respuesta final. La probabilidad más alta podría ser la probabilidad softmax del token de respuesta o la probabilidad logarítmica del token (o tokens) de respuesta.

## Modelos de lenguaje de Recitation-Augmented

El enfoque de recitación aumentada (@sun2022recitationaugmented) es similar al conocimiento generado (básicamente el mismo). Sin embargo, es mucho menos complejo que la implementación formal del conocimiento generado.

import RImage from '@site/docs/assets/intermediate/recitation.webp';

<div style={{textAlign: 'center'}}>
  <img src={RImage} style={{width: "250px"}} />
</div>

La idea aquí es hacer una prompt de pocos ejemplos al LLM para generar información _y_ responder en _un mismo_ paso. El hecho de que el modelo recite/genere conocimiento y responda la pregunta en el mismo paso es la principal diferencia del enfoque de conocimiento generado.

Para reiterar, este enfoque induce al modelo con múltiples ejemplos de (pregunta, recitación, respuesta), y luego hace la pregunta. Los autores señalan que este enfoque se puede combinar con autoconsistencia o múltiples caminos de finalización.

## Notas

- El conocimiento generado muestra mejoras en varios conjuntos de datos de sentido común.

- El conocimiento correspondiente a la respuesta seleccionada se llama el conocimiento seleccionado.

- En la práctica, se podría tomar la respuesta más frecuentemente encontrada como la final.
