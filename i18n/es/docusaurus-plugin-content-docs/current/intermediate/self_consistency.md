---
sidebar_position: 5
---

# 🟡 Autoconsistencia

Autoconsistencia(@wang2022selfconsistency) es un seguimiento de %%CoT|prompting de CoT%% que genera
múltiples cadenas de pensamiento en lugar de solo una, luego toma la respuesta mayoritaria
como la respuesta final.

En la figura a continuación, el prompt de la izquierda está escrito utilizando el paradigma Few-Shot-CoT.
Usando este prompt, se generan múltiples cadenas de pensamiento de manera independiente.
Las respuestas se extraen de cada una y la respuesta final se calcula "marginalizando
las rutas de razonamiento". En la práctica, esto significa tomar la respuesta mayoritaria.

import SCImage from '@site/docs/assets/reliability/self_consistency.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={SCImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Autoconsistencia (Wang et al.)
</div>

## Ejemplo

Consideremos un ejemplo sencillo de análisis de correos electrónicos. Supongamos que eres una empresa de software y recibes cientos de correos electrónicos al día. Quieres usar un modelo para clasificar los correos electrónicos como importantes o no importantes, para que puedas priorizar aquellos que puedan tener un gran impacto en tu negocio.

Aquí hay un ejemplo de correo electrónico que podrías recibir:

```
Hola,

He descubierto una gran vulnerabilidad de seguridad en su sistema. Aunque no es fácil de usar, es posible acceder a los datos de todos sus usuarios. He adjuntado una prueba de concepto. Por favor, solucione este problema lo antes posible.

Saludos cordiales,

Donny
```

Vamos a poner eso en un prompt:

```
Hola,

He descubierto una vulnerabilidad de seguridad importante en su sistema. Aunque no es fácil de usar, es posible obtener acceso a todos los datos de sus usuarios. Adjunto una prueba de concepto. Por favor, solucione este problema lo antes posible.

Saludos,

Donny

Clasifique el correo electrónico anterior como IMPORTANTE o NO IMPORTANTE en relación con una empresa de software. Pensemos paso a paso.
```

Ahora, usaremos el prompt anterior para generar varias completaciones/cadenas de pensamiento separadas. Aquí hay algunos ejemplos:

```text
<!-- highlight-start -->
- El remitente ha descubierto una vulnerabilidad de seguridad importante en el sistema. Esto es importante porque podría conducir a una violación de datos. Clasificaría este correo electrónico como IMPORTANTE.
<!-- highlight-end -->
```

```text
<!-- highlight-start -->

- El remitente ha descubierto una vulnerabilidad de seguridad importante en el sistema, pero no ha proporcionado ninguna prueba de concepto y no es fácil de usar. Clasificaría este correo electrónico como NO IMPORTANTE.
<!-- highlight-end -->
```

```text
<!-- highlight-start -->

- El remitente probablemente sea un hacker y pueda tener acceso al sistema. Esto es importante porque podría conducir a una violación de datos. Clasificaría este correo electrónico como IMPORTANTE.
<!-- highlight-end -->
```

Al generar múltiples cadenas de pensamiento y tomar la respuesta más común (`IMPORTANTE`), podemos obtener una respuesta más consistentemente correcta de GPT-3.

## Resultados

Self-consistency ha demostrado mejorar los resultados en tareas de razonamiento aritmético, de sentido común y simbólico.

Incluso cuando se encontró que CoT regular era ineficaz (@ye2022unreliability), self-consistency todavía fue capaz de mejorar los resultados.

## Notas

Wang et al. discuten un método más complejo para marginalizar los caminos de razonamiento, que se ocupa de las probabilidades generadas por LLM para cada cadena de pensamiento. Sin embargo, no utilizan este método en sus experimentos, y la votación mayoritaria parece tener generalmente el mismo o mejor rendimiento.
