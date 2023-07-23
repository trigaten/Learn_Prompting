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

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### Correcto

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiLCv0N1w6FsIGVzIGxhIGZvcm1hIG3DoXMgcsOhcGlkYSBkZSBsbGVnYXIgYSBjYXNhP1xuT3BjacOzbiAxOiBUb21hciB1biBhdXRvYsO6cyBkZSAxMCBtaW51dG9zLCBsdWVnbyB1biBhdXRvYsO6cyBkZSA0MCBtaW51dG9zIHkgZmluYWxtZW50ZSB1biB0cmVuIGRlIDEwIG1pbnV0b3MuXG5PcGNpw7NuIDI6IFRvbWFyIHVuIHRyZW4gZGUgOTAgbWludXRvcywgbHVlZ28gdW4gcGFzZW8gZW4gYmljaWNsZXRhIGRlIDQ1IG1pbnV0b3MgeSBmaW5hbG1lbnRlIHVuIGF1dG9iw7pzIGRlIDEwIG1pbnV0b3MuXG5PcGNpw7NuIDE6IHRvbWFyw6EgMTArNDArMTAiLCJvdXRwdXQiOiJMYSBvcGNpw7NuIDEgdG9tYXLDoSAxMDAwKzMwKzEwIiwibWF4VG9rZW5zIjoyNTYsImJveFJvd3MiOjE4LCJ0ZW1wZXJhdHVyZSI6MCwidG9wUCI6MH0%3D"
    style={{width:"100%", height:"900px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

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
