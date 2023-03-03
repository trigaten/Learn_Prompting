---
sidebar_position: 1
---
# 🟢 Prompting

En el capítulo anterior, discutimos sobre la inteligencia artificial (IA) y cómo los humanos pueden instruir a las IAs para realizar tareas. El proceso de instruir a una IA para realizar una tarea se llama "prompt" o "prompting"(@shin2020autoprompt). Le decimos a la IA un conjunto de instrucciones (el prompt) y ella realiza la tarea. Los prompts pueden ser tan simples como una pregunta o tan complejos como varios párrafos.

Aquí hay dos ejemplos de prompts:

#### 1) Resumen de un Artículo

Digamos que estás leyendo un artículo sobre la nevada en Florida. Quieres obtener rápidamente las ideas principales del artículo, por lo que le muestras al AI lo que estás leyendo y le pides un resumen.[^2]:

```
Es muy raro que nieve en el estado de Florida en los Estados Unidos, especialmente en las partes central y sur del estado. Con la excepción de las áreas más al norte del estado, la mayoría de las ciudades importantes de Florida nunca han registrado una nevada medible, aunque se han registrado pequeñas cantidades o se han observado escasas veces algunas veces cada siglo. Según el Servicio Nacional de Meteorología, en los Cayos de Florida y Key West no se conoce la ocurrencia de nevadas desde la colonización europea de la región hace más de 300 años. En Miami, Fort Lauderdale y Palm Beach solo se ha conocido un informe de nevadas observadas en el aire en más de 200 años; esto ocurrió en enero de 1977. En cualquier caso, Miami, Fort Lauderdale y Palm Beach no han visto nevadas antes ni después de este evento de 1977.

Resuma este párrafo en una sola oración:
```

Here is the AI's response. It is a much shorter read!

<pre>
<div style={{backgroundColor: '#d2f4d3'}}>
La caída de nieve es extremadamente rara en Florida, con la excepción de las áreas del norte, <br/>y solo se ha registrado un caso de nieve en las principales ciudades <br/>de Miami, Fort Lauderdale y Palm Beach en los últimos 200 años.
</div>
</pre>

#### 2) Resolución de problemas matemáticos de palabras
Si tiene un conjunto de datos de ecuaciones matemáticas que le gustaría que un modelo de lenguaje resuelva, puede crear un prompt formulando la pregunta "¿Cuál es ECUACIÓN?".

Para una pregunta dada, su prompt completo podría verse así:

```
cuanto es 1,000,000 * 9,000?
```

Para este prompt, GPT-3 (text-davinci-002) (un AI) a veces responde 9,000,000 (incorrecto). Aquí es donde entra en juego el ingeniería de prompt.

# Ingeniería de prompts

Si en lugar de preguntar `cuanto es 1,000,000 * 9,000?`,  preguntamos 
`cuanto es 1,000,000 * 9,000? Asegúrese de poner la cantidad correcta de ceros, incluso si hay muchos:`, GPT-3 responderá 9,000,000,000 (correcto). ¿Por qué sucede esto? ¿Por qué es necesaria la especificación adicional de la cantidad de ceros para que la IA obtenga la respuesta correcta? ¿Cómo podemos crear prompts que produzcan resultados óptimos en nuestra tarea? Esta última pregunta, en particular, es el enfoque del campo de la ingeniería de prompts, así como de este curso.

¡Sigue leyendo para aprender cómo crear buenos prompts!

[^2]: Este párrafo es de https://en.wikipedia.org/wiki/Snow_in_Florida