---
sidebar_position: 2
locale: en-us
---

# 🟢 Preguntas Multiple Choice 
¡Vamos a utilizar GPT para resolver una pregunta de LSAT 1!

El LSAT (siglas de "Law School Admission Test" en ingles) es un examen estandarizado utilizado por las escuelas de derecho en los Estados Unidos para evaluar las habilidades de pensamiento crítico y razonamiento analítico de los estudiantes potenciales.

A continuación se muestra un ejemplo de pregunta de LSAT. Considere cómo respondería y su razonamiento.

```md
<!-- highlight-start -->
John de Worcester, un monje inglés, registró la observación, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco días después, se observó una brillante aurora boreal en el sur de Corea. La actividad de las manchas solares suele ir seguida de la aparición de una aurora boreal, después de un lapso de tiempo que promedia cinco días. Por lo tanto, la observación coreana ayuda a confirmar la observación de John de Worcester. ¿Cuál de las siguientes opciones, si es verdadera, refuerza más el argumento?
<!-- highlight-end -->

a) A veces puede producirse una aurora boreal incluso cuando no ha habido una actividad significativa de manchas solares en la semana anterior.
b) Las fuentes chinas registraron la observación de manchas solares más de 1000 años antes que John de Worcester.
c) Solo una actividad intensa de las manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea.
d) Debido a que es imposible ver las manchas solares a simple vista en condiciones típicas de luz del día, la observación registrada por John de Worcester habría tenido lugar bajo condiciones climáticas inusuales como la niebla o nubes delgadas.
e) El relato de John de Worcester incluía un dibujo de las manchas solares, que podría ser la primera ilustración de la actividad de las manchas solares.
```
<details>
<summary>La respuesta correcta es...</summary>
c) Solo una actividad intensa de las manchas solares podría haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea. 
</details>

Intente pegar el problema en el cuadro de la demostración a continuación:

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<p></p>

<details scheme='warning'>
<summary>¿Por qué es diferente mi respuesta?</summary>
Tu respuesta podría ser diferente debido a:

1) Actualizaciones en el modelo subyacente, GPT-3
2) Aleatoriedad en el proceso de generación de texto. Podemos hacer que la salida sea más consistente configurando la <a href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature">temperatura</a> a 0.

</details>

El modelo falló. ¿Significa eso que el modelo es incapaz de responder este tipo de pregunta? No necesariamente. Vamos a profundizar en técnicas que podemos utilizar para mejorar los resultados del modelo.

## La frase mágica
El prompt estándar que usamos arriba da poca información sobre el "razonamiento" de la salida de GPT. Podemos intentar agregar la frase "vamos a explicar paso a paso" así:

```markdown
...
e) La cuenta de John of Worcester incluía un dibujo de las manchas solares, que podría ser la ilustración más antigua de la actividad de manchas solares.

pensamiento paso a paso
```
Esta frase aumentará la verbosidad del modelo. Podrías obtener una salida como esta:

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<p></p>

:::info
Observe cómo el modelo razona a través del problema paso a paso.

Este comportamiento se denomina "Cadena de Pensamiento" (@wei2022chain) (CoT, siglas de "Chain of Thought" en ingles). El modelo genera declaraciones de manera secuencial para llegar a una respuesta. Este proceso es similar al concepto de pensamiento de Sistema 2 (del libro [Thinking Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)); El modelo se predispone a utilizar el pensamiento del sistema 1, pero puede encadenar el pensamiento del sistema 1 para llegar a una respuesta más metodológica.
:::

## Mejoras

Aquí hay algunas variaciones en nuestra plantilla básica para preguntas de opción múltiple:

### Reordenar los elementos de la pregunta

Podemos reordenar los elementos de la pregunta

```
...
a) El informe de John of Worcester incluyó un dibujo de las manchas solares, lo que podría ser la primera ilustración de actividad de manchas solares.
b) Debido a que es imposible ver manchas solares a simple vista en condiciones de luz del día típicas, el avistamiento registrado por John of Worcester habría tenido lugar bajo condiciones climáticas inusuales como la niebla o las nubes delgadas.
...
```

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Reformulación de la pregunta


Recordemos que la pregunta original era esta:
```
¿Cuál de las siguientes opciones, si es verdadera, refuerza más el argumento?
```

Podemos cambiar la pregunta a esta:
```
Identifique cada opción como refuerza, debilita o no impacta el argumento.
```
para obtener una mayor comprensión de las opciones de respuesta. 


<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


### Agregar contexto adicional

Aquí hay un ejemplo de un problema que se puede resolver fácilmente usando el teorema de Bayes:

```
Considere dos pruebas médicas, A y B, para un virus. La prueba A es 90% efectiva para reconocer el virus cuando está presente, pero tiene una tasa de falsos positivos del 5% (lo que indica que el virus está presente cuando no lo está). La prueba B es 95% efectiva para reconocer el virus, pero tiene una tasa de falsos positivos del 10%. Las dos pruebas utilizan métodos independientes para identificar el virus. El virus es transportado por el 2% de todas las personas.
(a) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba A. ¿Cuál es la probabilidad de que la persona realmente esté infectada con el virus dado que la Prueba A dio positivo? (2 puntos)
(b) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba B. ¿Cuál es la probabilidad de que la persona realmente esté infectada con el virus dado que la Prueba B dio positivo? (2 puntos)
(c) Supongamos que una persona es sometida a la prueba del virus utilizando ambas pruebas. ¿Cuál es la probabilidad de que la persona realmente esté infectada con el virus dado que ambas pruebas dieron positivo? (2 puntos)
```

Intentemos esto con GPT:

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

¡El resultado es **incorrecto**!

Si agregamos un poco de contexto, como por ejemplo:

```
...
Explicaremos paso a paso. La fórmula para Bayes es
```
El modelo utilizará la fórmula correcta, Bayes.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

¡Lo cual es **correcto**!

:::warning
El modelo GPT no realiza bien las operaciones aritméticas. Es posible que notes que la expresión escrita está correcta, pero el número calculado no lo es.

Prueba agregar la frase: `Da la expresión como respuesta, no un número` para evitar el cálculo.


Tal vez te interese conocer [MRKL](https://learnprompting.org/docs/advanced_applications/mrkl)(@karpas2022mrkl), el paradigma que combina GPT con herramientas externas como calculadoras, para resolver este tipo de problema.
:::

Written by [zeyuzhao](https://github.com/Zeyuzhao).