---
sidebar_position: 4
---

# 🟢 Zero Shot Chain of Thought


La cadena de pensamiento sin entrenamiento previo (Zero Shot Chain of Thought, Zero-shot-CoT) (@kojima2022large) es una continuación de la iniciativa de cadena de pensamiento (CoT prompting) (@wei2022chain), que introduce una simple frase inicial sin entrenamiento previo. Encuentran que al agregar las palabras "**Pensemos paso a paso.**" al final de una pregunta, las LM (lenguajes modelo) son capaces de generar una cadena de pensamiento que responde la pregunta. A partir de esta cadena de pensamiento, pueden extraer respuestas más precisas.

import ZSImage from '@site/docs/assets/zero_shot.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Zero Shot CoT (Kojima et al.)
</div>

Técnicamente, el proceso completo de Zero-shot-CoT implica dos frases iniciales/completados separados. En la siguiente imagen, la burbuja superior de la izquierda genera una cadena de pensamiento, mientras que la burbuja superior de la derecha toma la salida del primer completado (incluyendo el propio completado) y extrae la respuesta de la cadena de pensamiento. Este segundo completado es un completado _auto-aumentado_.

import ZSProcessImage from '@site/docs/assets/zero_shot_example.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Full Zero Shot CoT Process (Kojima et al.)
</div>

## Ejemplo

Aquí tienes algunas demostraciones (que solo realizan extracción de razonamiento). Esta primera demostración muestra cómo GPT-3 (davinci-003) no responde correctamente a una simple pregunta matemática, mientras que la segunda demostración utiliza una frase inicial de Zero-shot-CoT y resuelve con éxito el problema. Siéntete libre de ingresar tu clave API de OpenAI (haz clic en "Generar") y jugar con los ejemplos. Observa lo mucho más simple que es la frase inicial de Zero-shot-CoT en comparación con la de CoT.


#### Incorrecta

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Si John tiene 5 peras, luego come 2, y compra 5 más, luego le da 3 a su amigo, ¿cuántas peras tiene?" initial-response="John tiene 8 peras." max-tokens="256" box-rows="3" model-temp="0.7" top-p="1"></div>


#### Correcta

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Si John tiene 5 peras, luego come 2, y compra 5 más, luego le da 3 a su amigo, ¿cuántas peras tiene?\n\nPensemos paso a paso." initial-response="John comienza con 5 peras. Come 2 peras, lo que lo deja con 3 peras. Compra 5 peras más, lo que le da un total de 8 peras. Le da 3 peras a su amigo, lo que lo deja con solo 5 peras." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>


## Resultados 

Zero-shot-CoT también resultó efectivo para mejorar los resultados en tareas de aritmética, razonamiento común y simbólico. Sin embargo, como era de esperar, generalmente no fue tan efectivo como CoT prompting. Un caso de uso importante para Zero-shot-CoT es cuando es difícil obtener ejemplos de pocos disparos para el CoT prompting.

## Ablaciones de Interés

Kojima y su equipo experimentaron con una serie de diferentes comandos Zero-shot-CoT (por ejemplo, "Resolvamos este problema dividiéndolo en pasos" o "Pensemos en esto lógicamente"), pero descubrieron que "Pensemos paso a paso" es el más efectivo para sus tareas elegidas.



## Notas

El paso de extracción a menudo debe ser específico de la tarea, lo que hace que Zero-Shot-CoT sea menos generalizable de lo que parece al principio.

De manera anecdotica, he encontrado que los comandos de estilo Zero-shot-CoT a veces son efectivos para mejorar la longitud de las completaciones para tareas generativas. Por ejemplo, considere el comando estándar `Write a story about a frog and a mushroom who become friends.`
Agregar las palabras `Let's think step by step.` al final de este comando lleva a una finalización mucho más larga.

