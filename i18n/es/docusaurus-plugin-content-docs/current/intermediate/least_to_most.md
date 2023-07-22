---
sidebar_position: 7
locale: es-mx
style: chicago
---

# 🟡 Least to Most Prompting

Prompting de menos a más (LtM) (Zhou et al., 2022) lleva la técnica de %%CoT prompting|prompting de CoT%% un paso más allá al descomponer un problema en subproblemas y resolver cada uno. Esta técnica está inspirada en estrategias educativas del mundo real para niños.

Al igual que en CoT prompting, el problema a resolver se descompone en un conjunto de subproblemas que se construyen uno sobre otro. En una segunda etapa, estos subproblemas se resuelven uno por uno. A diferencia de la cadena de pensamiento, la solución de los subproblemas anteriores se alimenta en el prompt para tratar de resolver el siguiente problema.

import leastToMost from '@site/docs/assets/intermediate/least_to_most_formal.webp'

<div style={{textAlign: 'center'}}>
  <img src={leastToMost} style={{width: "600px"}} alt="A diagram of a least to most prompting"/>
</div>

<div style={{textAlign: 'center'}}>
   Diagram of a Least to Most prompting
</div>

## Ejemplo: Respuesta a una consulta del cliente

Formulemos una pregunta de atención al cliente un poco complicada:

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>Esto ha fallado (estamos dentro del tiempo de retorno), así que vamos a intentar dividirlo en subproblemas:

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>Tratemos de resolver el primer subproblema:

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Con sólo resolver el primer subproblema, podíamos resolver todo el problema. Si GPT-3 no devolvía una respuesta inmediatamente, podríamos haber resuelto el siguiente subproblema y así sucesivamente hasta que devolviera una respuesta. Obsérvese que utilizamos `Vayamos paso a paso`. La adición de esta frase no siempre es necesaria, pero ayuda para este ejemplo.

## Ejemplo: concatenación de letras

LtM se introdujo originalmente utilizando una solicitud de pocos ejemplos, en lugar de una instrucción explícita para descomponer un problema en múltiples pasos (como se ve arriba). Además, a veces se puede implementar con una sola solicitud en lugar de solicitudes concatenadas. Examinemos el problema de concatenar la última letra de palabras individuales (@wei2022chain) (por ejemplo, dadas las palabras de entrada cake, etymology, la salida debería ser ey).

### Primer intento: Estándar

El prompt estándar con ejemplos de few-shot funciona muy mal, incluso con un modelo más avanzado como text-davinci-003.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwLjIifQ%3D%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Segundo intento: Cadena de pensamiento (CoT)

Chain of Thought obtiene unos resultados significativamente mejores que los de la incitación estándar. Esto se debe a que ahora permite al modelo considerar la extracción de la última letra de cada palabra por sí mismo, reduciendo la complejidad a la operación de agrupar letras que ha recogido previamente. Sin embargo, esto empieza a fallar con tamaños más grandes.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwLjIifQ%3D%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Tercer intento: De menor a mayor (un solo prompt)

Con el método de menor a mayor, aumentamos el concepto de cadena de pensamiento reformulando los pasos individuales para volver a expresar el resultado concatenado previamente. De este modo, cada paso se reduce a concatenar una sola letra nueva. Así se obtienen buenos resultados hasta 12 o más palabras.

Este enfoque puede parecer muy similar al de la Cadena de Pensamiento, pero es conceptualmente muy diferente. Aquí, en cada paso, introducimos la concatenación anterior. En el caso de "think, machine, learning", en lugar de concatenar las letras "k", "e", "g" individualmente, concatenará "k" y "e", luego "ke" y "g". Como resultado de esta reintroducción del trabajo anterior, el modelo puede ahora generalizarse a cadenas mucho más largas porque lleva el resultado de forma incremental y sólo necesita hacer una pequeña cantidad de trabajo en cada paso.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwLjIifQ%3D%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Resultados

En el último problema de concatenación de letras con 12 palabras, Chain of Thought tiene una precisión del 34%, mientras que Least to Most tiene una precisión del 74% (el artículo utiliza text-davinci-002 como modelo).

## Ejemplo: generalización composicional (SCAN)

La prueba de referencia SCAN (@lake2018scan) requiere que el modelo convierta el lenguaje natural en secuencias de acciones. Por ejemplo, la frase "correr a la izquierda y caminar dos veces" se traduciría como " TURN_LEFT + RUN + WALK \* 2". Los modelos lingüísticos funcionan especialmente mal cuando se enfrentan a secuencias más largas que las del conjunto de entrenamiento.

### Primer intento: Standard prompting

Utilizando prompts estándar simples, text-davinci-003 llega impresionantemente lejos, pero sigue fallando.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwLjIifQ%3D%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Segundo intento: De menos a más, primer paso - Reducción

Aquí, trabajamos con 2 diferentes prompts. El primer prompt se utiliza para reducir el problema de entrada a una secuencia de pasos más simple. El segundo prompt se utiliza para mapear esta secuencia simplificada de pasos en acciones reales.

Ambos prompts son bastante largos y usan notación de Python comprimida para la acción para ahorrar tokens.

El primer paso descompone la descripción del lenguaje natural en un lenguaje más explícito, pero aún humano. Esto ayudará al paso de mapeo a entender las cosas en secuencia.
Por ejemplo, "saltar hacia la izquierda dos veces" se reduce a "saltar a la izquierda" -> `TURN_LEFT + JUMP` y "saltar alrededor a la izquierda" -> `(TURN_LEFT + JUMP) * 4`. Del mismo modo, el paso de reducción es el que se utiliza para explicar el concepto de repetición (dos veces, tres veces, etc...).

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwLjIifQ%3D%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Segundo intento: De menor a mayor, segundo paso - Cartografía

En el segundo paso, utilizamos el resultado de la reducción y, de nuevo, una instrucción bastante larga (14 casos) para traducir la descripción reducida en lenguaje natural en una secuencia de acciones.

Aquí inyectamos el resultado del primer paso:

> "saltar dos veces a la izquierda" puede resolverse con: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces". "camina hacia la izquierda tres veces" puede ser resuelto por: "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces". Por lo tanto, "saltar alrededor de la izquierda dos veces después de caminar frente a la izquierda tres veces" se puede resolver por: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces", "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces".

en el LLM.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwLjIifQ%3D%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Resultados

LtM conlleva múltiples mejoras:

- mejora de la precisión con respecto a Chain of Thought
- mayor generalización en problemas más difíciles que los del prompt
- mejora espectacular del rendimiento en la generalización composicional, en particular en la prueba de referencia SCAN (@lake2018scan).

Las instrucciones estándar con texto-davinci-002 (el modelo utilizado en el artículo) dan como resultado un 6% de problemas SCAN resueltos con éxito, mientras que las instrucciones de menor a mayor dan como resultado una impresionante tasa de éxito del 76%. Los resultados son aún más significativos con code-davinci-002, donde Least to Most logra una tasa de éxito del 99.7%.
