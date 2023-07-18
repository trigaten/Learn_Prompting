---
sidebar_position: 4
---

# 🟢 Zero Shot Chain of Thought


Zero Shot Chain of Thought (Zero-shot-CoT) prompting (@kojima2022large) es un seguimiento del %%prompting de CoT|prompting de CoT%% (@wei2022chain), que introduce un prompt zero shot increíblemente simple. Descubren que al agregar las palabras "**Pensemos paso a paso.**" al final de una pregunta, los LLM pueden generar una cadena de pensamiento que responde a la pregunta. A partir de esta cadena de pensamiento, pueden extraer respuestas más precisas.

import ZSImage from '@site/docs/assets/intermediate/zero_shot.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Zero Shot CoT (Kojima et al.)
</div>

Técnicamente, el proceso completo de Zero-shot-CoT implica dos prompts/completions separados. En la siguiente imagen, la burbuja superior de la izquierda genera una cadena de pensamiento, mientras que la burbuja superior de la derecha toma la salida del primer prompt (incluido el primer prompt en sí mismo) y extrae la respuesta de la cadena de pensamiento. Este segundo prompt es un prompt _self augmented_.

import ZSProcessImage from '@site/docs/assets/intermediate/zero_shot_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Full Zero Shot CoT Process (Kojima et al.)
</div>

## Ejemplo

Aquí hay algunas demostraciones (que solo realizan extracción de razonamiento). Esta primera demostración muestra a GPT-3 (davinci-003) fallando en una simple pregunta de matemáticas, mientras que la segunda demostración utiliza un prompt Zero-shot-CoT y resuelve el problema con éxito. Siéntase libre de ingresar su clave de API de OpenAI (haga clic en Generar) y jugar con los ejemplos. Tenga en cuenta lo mucho más simple que es el prompt Zero-shot-CoT en comparación con el prompt CoT.

#### Incorrecta

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### Correcta

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Resultados
Zero-shot-CoT también fue efectivo para mejorar los resultados en tareas de aritmética, sentido común y razonamiento simbólico. Sin embargo, como era de esperar, generalmente no fue tan efectivo como el CoT prompting. Un caso de uso importante para Zero-shot-CoT es cuando es difícil obtener ejemplos de few shot para la generación de CoT.

## Ablaciones de Interés

Kojima et al. experimentaron con varios prompts de Zero-shot-CoT diferentes (por ejemplo, "Resolvamos este problema dividiéndolo en pasos." o "Pensemos en esto lógicamente."), pero encontraron que "Pensemos paso a paso" es el más efectivo para las tareas que seleccionaron.



## Notas

El paso de extracción a menudo debe ser específico de la tarea, lo que hace que Zero-Shot-CoT sea menos generalizable de lo que parece al principio.

Anecdóticamente, he encontrado que los prompts de estilo Zero-shot-CoT a veces son efectivos para mejorar la longitud de las completaciones para tareas generativas. Por ejemplo, considera el prompt estándar `Escribe una historia sobre una rana y un hongo que se hacen amigos`. Agregar las palabras `Pensemos paso a paso.` al final de este prompt conduce a una completación mucho más larga.

