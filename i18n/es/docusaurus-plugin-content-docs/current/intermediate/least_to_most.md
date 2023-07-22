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

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="CONSULTA DEL CLIENTE:\nAcabo de comprar una camiseta de tu colección Arnold el 1 de marzo. Vi que estaba en descuento, así que compré una camisa que originalmente costaba $30 y obtuve un 40% de descuento. Vi que tienes un nuevo descuento del 50% para las camisetas. ¿Me pregunto si puedo devolver la camisa y tener suficiente crédito en la tienda para comprar dos de tus camisetas?\n\nINSTRUCCIONES:\nEres un agente de servicio al cliente encargado de responder amablemente a las consultas de los clientes. Las devoluciones son permitidas dentro de los 30 días. La fecha de hoy es el 29 de marzo. Actualmente hay un descuento del 50% en todas las camisetas. Los precios de las camisetas van desde $18-$100 en tu tienda. No inventes ninguna información sobre las políticas de descuento." initial-response="Gracias por su consulta. Desafortunadamente, como compró la camiseta el 1 de marzo, está fuera de nuestra política de devoluciones de 30 días. Sin embargo, actualmente tenemos un descuento del 50% en todas las camisetas, por lo que podría comprar dos camisetas con el mismo monto de crédito en la tienda. Los precios de nuestras camisetas van desde $18-$100. Por favor, háganos saber si tiene alguna otra pregunta." max-tokens="256" box-rows="16" model-temp="0" top-p="0">
    <noscript>No se pudo cargar Dyno Embed: JavaScript debe estar habilitado</noscript>
</div>
<br/>Esto ha fallado (estamos dentro del tiempo de retorno), así que vamos a intentar dividirlo en subproblemas:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="CONSULTA DEL CLIENTE:\nAcabo de comprar una camiseta de tu colección Arnold el 1 de marzo. Vi que estaba en descuento, así que compré una camiseta que originalmente costaba $30, y obtuve un 40% de descuento. Vi que tienes un nuevo descuento para camisetas al 50%. Me pregunto si puedo devolver la camiseta y tener suficiente crédito en la tienda para comprar dos de tus camisetas.\n\nINSTRUCCIONES:\nEres un agente de servicio al cliente encargado de responder amablemente a las consultas de los clientes. Las devoluciones son permitidas dentro de los 30 días. La fecha de hoy es el 29 de marzo. Actualmente hay un descuento del 50% en todas las camisetas. Los precios de las camisetas van desde $18-$100 en tu tienda. No inventes información sobre las políticas de descuento.\n¿Qué subproblemas deben resolverse antes de responder la consulta?" initial-response="1. Determinar si el cliente se encuentra dentro de la ventana de devolución de 30 días.\n2. Calcular la cantidad de crédito en la tienda que el cliente recibiría si devolviera la camiseta.\n3. Calcular el costo de dos camisetas con el actual descuento del 50%.\n4. Determinar si el cliente tiene suficiente crédito en la tienda para comprar dos camisetas." max-tokens="256" box-rows="12" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>Tratemos de resolver el primer subproblema:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="CONSULTA DEL CLIENTE:\nAcabo de comprar una camiseta de la colección Arnold el 1 de marzo. Vi que estaba en descuento, así que compré una camiseta que originalmente costaba $30, y obtuve un 40% de descuento. Vi que tienen un nuevo descuento para camisetas del 50%. Me pregunto si puedo devolver la camiseta y tener suficiente crédito en la tienda para comprar dos de sus camisetas.\n\nINSTRUCCIONES:\nEres un agente de servicio al cliente encargado de responder amablemente a las consultas de los clientes. Las devoluciones se permiten dentro de los 30 días. La fecha de hoy es el 29 de marzo. Actualmente hay un descuento del 50% en todas las camisetas. Los precios de las camisetas oscilan entre $18 y $100 en su tienda. No invente ninguna información sobre políticas de descuento.\nDetermina si el cliente está dentro de la ventana de devolución de 30 días. Vamos paso a paso." initial-response="Sí, el cliente se encuentra dentro de la ventana de devolución de 30 días. El cliente compró la camiseta el 1 de marzo y la fecha de hoy es el 29 de marzo, lo que está dentro de la ventana de devolución de 30 días. \n\nPor lo tanto, el cliente es elegible para devolver la camiseta y recibir un crédito en la tienda por la compra. El cliente puede usar el crédito en la tienda para comprar dos camisetas con el actual descuento del 50%." max-tokens="256" box-rows="19" model-temp="0" top-p="0">
    <noscript>Error al cargar Dyno Embed: JavaScript debe estar habilitado</noscript>
</div>

Con sólo resolver el primer subproblema, podíamos resolver todo el problema. Si GPT-3 no devolvía una respuesta inmediatamente, podríamos haber resuelto el siguiente subproblema y así sucesivamente hasta que devolviera una respuesta. Obsérvese que utilizamos `Vayamos paso a paso`. La adición de esta frase no siempre es necesaria, pero ayuda para este ejemplo.

## Ejemplo: concatenación de letras

LtM se introdujo originalmente utilizando una solicitud de pocos ejemplos, en lugar de una instrucción explícita para descomponer un problema en múltiples pasos (como se ve arriba). Además, a veces se puede implementar con una sola solicitud en lugar de solicitudes concatenadas. Examinemos el problema de concatenar la última letra de palabras individuales (@wei2022chain) (por ejemplo, dadas las palabras de entrada cake, etymology, la salida debería ser ey).

### Primer intento: Estándar

El prompt estándar con ejemplos de few-shot funciona muy mal, incluso con un modelo más avanzado como text-davinci-003.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: ke\n\nQ: learning, reasoning, generalization\nA: ggn\n\nQ: artificial, intelligence\nA: le\n\nQ: transformer, language, vision\nA: ren\n\nQ: foo,bar,baz,blip\nA:"
     initial-response="lip"
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Segundo intento: Cadena de pensamiento (CoT)

Chain of Thought obtiene unos resultados significativamente mejores que los de la incitación estándar. Esto se debe a que ahora permite al modelo considerar la extracción de la última letra de cada palabra por sí mismo, reduciendo la complejidad a la operación de agrupar letras que ha recogido previamente. Sin embargo, esto empieza a fallar con tamaños más grandes.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: La última letra de &#34;think&#34; es &#34;k&#34;. La última letra de &#34;machine&#34; es &#34;e&#34;. Entonces &#34;think, machine&#34; es &#34;ke&#34;.\n\nQ: learning, reasoning, generalization\nA: La última letra de &#34;learning&#34; es &#34;g&#34;. La última letra de &#34;reasoning&#34; es &#34;n&#34;. La última letra de &#34;generalization&#34; es &#34;n&#34;. Entonces &#34;learning, reasoning, generalization&#34; es &#34;ggn&#34;.\n\nQ: artificial, intelligence\nA: La última letra de &#34;artificial&#34; es &#34;l&#34;. La última letra de &#34;intelligence&#34; es &#34;e&#34;. Entonces &#34;artificial, intelligence&#34; es &#34;le&#34;.\n\nQ: transformer, language, vision\nA: La última letra de &#34;transformer&#34; es &#34;r&#34;. La última letra de &#34;language&#34; es &#34;e&#34;. La última letra de &#34;vision&#34; es &#34;n&#34;. Entonces &#34;transformer, language, vision&#34; es &#34;ren&#34;.\n\nQ: foo,bar,baz,blip\nA:"
     initial-response="La última letra de &#34;foo&#34; es &#34;o&#34;. La última letra de &#34;bar&#34; es &#34;r&#34;. La última letra de &#34;baz&#34; es &#34;z&#34;. La última letra de &#34;blip&#34; es &#34;p&#34;. Por lo tanto, &#34;foo,bar,baz,blip&#34; es &#34;orzp&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Tercer intento: De menor a mayor (un solo prompt)

Con el método de menor a mayor, aumentamos el concepto de cadena de pensamiento reformulando los pasos individuales para volver a expresar el resultado concatenado previamente. De este modo, cada paso se reduce a concatenar una sola letra nueva. Así se obtienen buenos resultados hasta 12 o más palabras.

Este enfoque puede parecer muy similar al de la Cadena de Pensamiento, pero es conceptualmente muy diferente. Aquí, en cada paso, introducimos la concatenación anterior. En el caso de "think, machine, learning", en lugar de concatenar las letras "k", "e", "g" individualmente, concatenará "k" y "e", luego "ke" y "g". Como resultado de esta reintroducción del trabajo anterior, el modelo puede ahora generalizarse a cadenas mucho más largas porque lleva el resultado de forma incremental y sólo necesita hacer una pequeña cantidad de trabajo en cada paso.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: La última letra de &#34;think&#34; es &#34;k&#34;. La última letra de &#34;machine&#34; es &#34;e&#34;. Concatenando &#34;k&#34; y &#34;e&#34; nos da &#34;ke&#34;. Entonces &#34;think, machine&#34; nos da &#34;ke&#34;.\n\nQ: think, machine, learning\nA: &#34;think, machine&#34; entrega &#34;ke&#34;. La última letra de &#34;learning&#34; es &#34;g&#34;. Concatenando &#34;ke&#34; y &#34;g&#34; nos da &#34;keg&#34;. Entonces &#34;think, machine, learning&#34; es &#34;keg&#34;.\n\nQ: transformer, language\nA: La última letra de &#34;transformer&#34; es &#34;r&#34;. La última letra de &#34;language&#34; es &#34;e&#34;. Concatenando &#34;r&#34; y &#34;e&#34; nos da &#34;re&#34;. Entonces &#34;transformer, language&#34; es &#34;re&#34;.\n\nQ: transformer, language, vision\nA: &#34;transformer, language&#34; entrega &#34;re&#34;. La última letra de &#34;vision&#34; es &#34;n&#34;. Concatenando &#34;re&#34; y &#34;n&#34; nos da &#34;ren&#34;. Entonces &#34;transformer, language, vision&#34; es &#34;ren&#34;.\n\nQ: foo,bar,baz,blip,learn,prompting,world,shaking,event,dancefloor,prisma,giraffe\nA:"
     initial-response="La última letra de &#34;foo&#34; es &#34;o&#34;. La última letra de &#34;bar&#34; es &#34;r&#34;. Concatenando &#34;o&#34; y &#34;r&#34; nos da &#34;or&#34;. La última letra de &#34;baz&#34; es &#34;z&#34;. Concatenando &#34;or&#34; y &#34;z&#34; nos da &#34;orz&#34;. La última letra de &#34;blip&#34; es &#34;p&#34;. Concatenando &#34;orz&#34; y &#34;p&#34; nos da &#34;orzp&#34;. La última letra de &#34;learn&#34; es &#34;n&#34;. Concatenando &#34;orzp&#34; y &#34;n&#34; nos da &#34;orzpn&#34;. La última letra de &#34;prompting&#34; es &#34;g&#34;. Concatenando &#34;orzpn&#34; y &#34;g&#34; nos da &#34;orzpng&#34;. La última letra de &#34;world&#34; es &#34;d&#34;. Concatenando &#34;orzpng&#34; y &#34;d&#34; nos da &#34;orzpngd&#34;. La última letra de &#34;shaking&#34; es &#34;g&#34;. Concatenando &#34;orzpngd&#34; y &#34;g&#34; nos da &#34;orzpngdg&#34;. La última letra de &#34;event&#34; es &#34;t&#34;. Concatenando &#34;orzpngdg&#34; y &#34;t&#34; nos da &#34;orzpngdgt&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Resultados

En el último problema de concatenación de letras con 12 palabras, Chain of Thought tiene una precisión del 34%, mientras que Least to Most tiene una precisión del 74% (el artículo utiliza text-davinci-002 como modelo).

## Ejemplo: generalización composicional (SCAN)

La prueba de referencia SCAN (@lake2018scan) requiere que el modelo convierta el lenguaje natural en secuencias de acciones. Por ejemplo, la frase "correr a la izquierda y caminar dos veces" se traduciría como " TURN_LEFT + RUN + WALK \* 2". Los modelos lingüísticos funcionan especialmente mal cuando se enfrentan a secuencias más largas que las del conjunto de entrenamiento.

### Primer intento: Standard prompting

Utilizando prompts estándar simples, text-davinci-003 llega impresionantemente lejos, pero sigue fallando.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: girar a la izquierda\nA: TURN LEFT\n\nQ: girar a la derecha\nA: TURN RIGHT\n\nQ: saltar a la izquierda\nA: TURN LEFT + JUMP\n\nQ: correr a la derecha\nA: TURN RIGHT + RUN\n\nQ: mirar dos veces\nA: LOOK * 2\n\nQ: correr y mirar dos veces\nA: RUN + LOOK * 2\n\nQ: saltar a la derecha tres veces\nA: (TURN RIGHT + JUMP) * 3\n\nQ: caminar después de correr\nA: RUN + WALK\n\nQ: girar en dirección opuesta a la izquierda\nA: TURN LEFT * 2\n\nQ: dar la vuelta a la izquierda\nA: TURN LEFT * 4\n\nQ: girar en dirección opuesta a la derecha\nA: TURN RIGHT * 2\n\nQ: dar la vuelta a la derecha\nA: TURN RIGHT * 4\n\nQ: caminar en dirección opuesta a la izquierda\nA: TURN LEFT * 2 + WALK\n\nQ: caminar alrededor de la izquierda\nA: (TURN LEFT + WALK) * 4\n\nQ: &#34;saltar alrededor de la izquierda dos veces después de caminar en dirección opuesta a la izquierda tres veces&#34; \nA:"
     initial-response="(TURN LEFT * 2 + WALK) * 3 + (TURN LEFT + JUMP) * 2"
     max-tokens="512" box-rows="18"
     model-temp="0.2" ></div>

### Segundo intento: De menos a más, primer paso - Reducción

Aquí, trabajamos con 2 diferentes prompts. El primer prompt se utiliza para reducir el problema de entrada a una secuencia de pasos más simple. El segundo prompt se utiliza para mapear esta secuencia simplificada de pasos en acciones reales.

Ambos prompts son bastante largos y usan notación de Python comprimida para la acción para ahorrar tokens.

El primer paso descompone la descripción del lenguaje natural en un lenguaje más explícito, pero aún humano. Esto ayudará al paso de mapeo a entender las cosas en secuencia.
Por ejemplo, "saltar hacia la izquierda dos veces" se reduce a "saltar a la izquierda" -> `TURN_LEFT + JUMP` y "saltar alrededor a la izquierda" -> `(TURN_LEFT + JUMP) * 4`. Del mismo modo, el paso de reducción es el que se utiliza para explicar el concepto de repetición (dos veces, tres veces, etc...).

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: mira a la derecha después de mirar dos veces\nA: &#34;mira a la derecha después de mirar dos veces&#34; se puede resolver con: &#34;mira a la derecha&#34;, &#34;mira dos veces&#34;.\n\nQ: salta opuesto a la derecha tres veces y camina\nA: &#34;salta opuesto a la derecha tres veces&#34; se puede resolver con: &#34;salta opuesto a la derecha&#34;, &#34;salta opuesto a la derecha tres veces&#34;. &#34;caminar&#34; se puede resolver con &#34;caminar&#34;. Entonces, &#34;salta opuesto a la derecha tres veces y camina&#34; se puede resolver con: &#34;salta opuesto a la derecha&#34;, &#34;salta opuesto a la derecha tres veces&#34;, &#34;caminar&#34;.\n\nQ: corre a la izquierda dos veces y corre a la derecha\nA: &#34;corre a la izquierda dos veces&#34; se puede resolver con: &#34;corre a la izquierda&#34;, &#34;corre a la izquierda dos veces&#34;. &#34;corre a la derecha&#34; se puede resolver con &#34;corre a la derecha&#34;. Entonces, &#34;corre a la izquierda dos veces y corre a la derecha&#34; se puede resolver con: &#34;corre a la izquierda&#34;, &#34;corre a la izquierda dos veces&#34;, &#34;corre a la derecha&#34;.\n\nQ: corre opuesto a la derecha\nA: &#34;corre opuesto a la derecha&#34; se puede resolver con &#34;corre opuesto a la derecha&#34;.\n\nQ: mira opuesto a la derecha tres veces después de caminar\nA: &#34;mira opuesto a la derecha tres veces&#34; se puede resolver con: &#34;mira opuesto a la derecha&#34;, &#34;mira opuesto a la derecha tres veces&#34;. &#34;caminar&#34; se puede resolver con &#34;caminar&#34;. Entonces, &#34;mira opuesto a la derecha tres veces después de caminar&#34; se puede resolver con: &#34;mira opuesto a la derecha&#34;, &#34;mira opuesto a la derecha tres veces&#34;, &#34;caminar&#34;.\n\nQ: salta alrededor de la derecha\nA: &#34;salta a la derecha&#34; se puede resolver con: &#34;salta a la derecha&#34;, &#34;salta alrededor de la derecha&#34;. Entonces, &#34;salta alrededor de la derecha&#34; se puede resolver con: &#34;salta a la derecha&#34;, &#34;salta alrededor de la derecha&#34;.\n\nQ: mira a la derecha tres veces y camina\nA: &#34;mira a la derecha tres veces&#34; puede ser resuelto por: &#34;mira a la derecha&#34;, &#34;mira alrededor a la derecha&#34;, &#34;mira alrededor a la derecha tres veces&#34;. &#34;caminar&#34; puede ser resuelto por &#34;caminar&#34;. Así que, &#34;mira a la derecha tres veces y camina&#34; puede ser resuelto por: &#34;mira a la derecha&#34;, &#34;mira alrededor a la derecha&#34;, &#34;mira alrededor a la derecha tres veces&#34;, &#34;caminar&#34;.\n\nQ: gira a la derecha después de correr a la derecha tres veces\nA: &#34;gira a la derecha&#34; puede ser resuelto por: &#34;gira a la derecha&#34;. &#34;correr a la derecha tres veces&#34; puede ser resuelto por: &#34;correr a la derecha&#34;, &#34;correr a la derecha tres veces&#34;. Así que, &#34;gira a la derecha después de correr a la derecha tres veces&#34; puede ser resuelto por: &#34;gira a la derecha&#34;, &#34;correr a la derecha&#34;, &#34;correr a la derecha tres veces&#34;.\n\nQ: salta alrededor a la izquierda dos veces después de caminar opuesto a la izquierda tres veces\nA:"
     initial-response="&#34;saltar alrededor de la izquierda dos veces&#34; se puede resolver como: &#34;saltar a la izquierda&#34;, &#34;saltar alrededor de la izquierda&#34;, &#34;saltar alrededor de la izquierda dos veces&#34;. &#34;caminar opuesto a la izquierda tres veces&#34; se puede resolver como: &#34;caminar opuesto a la izquierda&#34;, &#34;caminar opuesto a la izquierda tres veces&#34;. Por lo tanto, &#34;saltar alrededor de la izquierda dos veces después de caminar opuesto a la izquierda tres veces&#34; se puede resolver como: &#34;saltar a la izquierda&#34;, &#34;saltar alrededor de la izquierda&#34;, &#34;saltar alrededor de la izquierda dos veces&#34;, &#34;caminar opuesto a la izquierda&#34;, &#34;caminar opuesto a la izquierda tres veces&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Segundo intento: De menor a mayor, segundo paso - Cartografía

En el segundo paso, utilizamos el resultado de la reducción y, de nuevo, una instrucción bastante larga (14 casos) para traducir la descripción reducida en lenguaje natural en una secuencia de acciones.

Aquí inyectamos el resultado del primer paso:

> "saltar dos veces a la izquierda" puede resolverse con: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces". "camina hacia la izquierda tres veces" puede ser resuelto por: "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces". Por lo tanto, "saltar alrededor de la izquierda dos veces después de caminar frente a la izquierda tres veces" se puede resolver por: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces", "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces".

en el LLM.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: &#34;turn left&#34; produce &#34;TURN LEFT&#34;.\n\nQ: turn right\nA: &#34;turn right&#34; produce &#34;TURN RIGHT&#34;.\n\nQ: jump left\nA: La salida de &#34;jump left&#34; concatena: la salida de &#34;turn left&#34;, la salida de &#34;jump&#34;. &#34;turn left&#34; produce &#34;TURN LEFT&#34;. &#34;jump&#34; produce &#34;JUMP&#34;. Entonces concatenando la salida de &#34;turn left&#34; y la salida de &#34;jump&#34; conduce a &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;. Entonces la salida de &#34;jump left&#34; es &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;.\n\nQ: run right\nA: La salida de &#34;run right&#34; concatena: la salida de &#34;turn right&#34;, la salida de &#34;run&#34;. &#34;turn right&#34; produce &#34;TURN RIGHT&#34;. &#34;run&#34; produce &#34;RUN&#34;. Entonces concatenando la salida de &#34;turn right&#34; y la salida de &#34;run&#34; conduce a &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;. Entonces la salida de &#34;run right&#34; es &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;.\n\nQ: look twice\nA: La salida de &#34;look twice&#34; concatena: la salida de &#34;look&#34;, la salida de &#34;look&#34;. &#34;look&#34; produce &#34;LOOK&#34;. Entonces repitiendo la salida de &#34;look&#34; dos veces conduce a &#34;LOOK&#34; * 2. Entonces la salida de &#34;look twice&#34; es &#34;LOOK&#34; * 2.\n\nQ: run and look twice\nA: La salida de &#34;run and look twice&#34; concatena: la salida de &#34;run&#34;, la salida de &#34;look twice&#34;. &#34;run&#34; produce &#34;RUN&#34;. &#34;look twice&#34; produce &#34;LOOK&#34; * 2. Entonces concatenando la salida de &#34;run&#34; y la salida de &#34;look twice&#34; conduce a &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2. Entonces la salida de &#34;run and look twice&#34; es &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2.\n\nQ: jump right thrice\nA: La salida de &#34;jump right thrice&#34; concatena: la salida de &#34;jump right&#34;, la salida de &#34;jump right&#34;, la salida de &#34;jump right&#34;. &#34;jump right&#34; produce &#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;. Entonces repitiendo la salida de &#34;jump right&#34; tres veces nos da (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3. Entonces la salida de &#34;jump right thrice&#34; is (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3.\n\nQ: walk after run\nA: La salida de &#34;walk after run&#34; concatena: la salida de &#34;run&#34;, la salida de &#34;walk&#34;. &#34;run&#34; produce &#34;RUN&#34;. &#34;walk&#34; produce &#34;WALK&#34;. Entonces concatenando la salida de &#34;run&#34; y la salida de &#34;walk&#34; conduce a &#34;RUN&#34; &#43; &#34;WALK&#34;. Entonces la salida de &#34;walk after run&#34; es &#34;RUN&#34; &#43; &#34;WALK&#34;.\n\nQ: turn opposite left\nA: La salida de &#34;turn opposite left&#34; concatena: la salida de &#34;turn left&#34;, la salida de &#34;turn left&#34;. &#34;turn left&#34; produce &#34;TURN LEFT&#34;. Entonces repitiendo la salida de &#34;turn left&#34; twice leads to &#34;TURN LEFT&#34; * 2. Entonces la salida de &#34;turn opposite left&#34; es &#34;TURN LEFT&#34; * 2.\n\nQ: turn around left\nA: La salida de &#34;turn around left&#34; concatena: la salida de &#34;turn left&#34;, la salida de &#34;turn left&#34;, la salida de &#34;turn left&#34;, la salida de &#34;turn left&#34;. &#34;turn left&#34; produce &#34;TURN LEFT&#34;. Entonces repitiendo la salida de &#34;turn left&#34; cuatro veces nos da &#34;TURN LEFT&#34; * 4. Entonces la salida de &#34;turn around left&#34; es &#34;TURN LEFT&#34; * 4.\n\nQ: turn opposite right\nA: La salida de &#34;turn opposite right&#34; concatena: la salida de &#34;turn right&#34;, la salida de &#34;turn right&#34;. &#34;turn right&#34; produce &#34;TURN RIGHT&#34;. Entonces repitiendo la salida de &#34;turn right&#34; twice leads to &#34;TURN RIGHT&#34; * 2. Entonces la salida de &#34;turn opposite right&#34; es &#34;TURN RIGHT&#34; * 2.\n\nQ: turn around right\nA: La salida de &#34;turn around right&#34; concatena: la salida de &#34;turn right&#34;, la salida de &#34;turn right&#34;, la salida de &#34;turn right&#34;, la salida de &#34;turn right&#34;. &#34;turn right&#34; produce &#34;TURN RIGHT&#34;. Entonces repitiendo la salida de &#34;turn right&#34; cuatro veces nos da &#34;TURN RIGHT&#34; * 4. Entonces la salida de &#34;turn around right&#34; es &#34;TURN RIGHT&#34; * 4.\n\nQ: walk opposite left\nA: La salida de &#34;walk opposite left&#34; concatena: la salida de &#34;turn opposite left&#34;, la salida de &#34;walk&#34;. &#34;turn opposite left&#34; produce &#34;TURN LEFT&#34; * 2. &#34;walk&#34; produce &#34;WALK&#34;. Entonces concatenando la salida de &#34;turn opposite left&#34; y la salida de &#34;walk&#34; conduce a &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;. Entonces la salida de &#34;walk opposite left&#34; es &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;.\n\nQ: walk around left\nA: La salida de &#34;walk around left&#34; concatena: la salida de &#34;walk left&#34;, la salida de &#34;walk left&#34;, la salida de &#34;walk left&#34;, la salida de &#34;walk left&#34;. &#34;walk left&#34; produce &#34;TURN LEFT&#34; &#43; &#34;WALK&#34;. Entonces repitiendo la salida de &#34;walk around left&#34; cuatro veces nos da (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4. Entonces la salida de &#34;walk around left&#34; is (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4.\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="La salida de &#34;jump around left twice after walk opposite left thrice&#34; concatena: la salida de &#34;walk opposite left thrice&#34;, la salida de &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; outputs &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3. &#34;jump around left twice&#34; outputs (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. Entonces concatenando la salida de &#34;walk opposite left thrice&#34; and la salida de &#34;jump around left twice&#34; conduce a &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. Entonces la salida de &#34;jump around left twice after walk opposite left thrice&#34; es &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4."
     max-tokens="1024" box-rows="18"
     model-temp="0.2" ></div>

### Resultados

LtM conlleva múltiples mejoras:

- mejora de la precisión con respecto a Chain of Thought
- mayor generalización en problemas más difíciles que los del prompt
- mejora espectacular del rendimiento en la generalización composicional, en particular en la prueba de referencia SCAN (@lake2018scan).

Las instrucciones estándar con texto-davinci-002 (el modelo utilizado en el artículo) dan como resultado un 6% de problemas SCAN resueltos con éxito, mientras que las instrucciones de menor a mayor dan como resultado una impresionante tasa de éxito del 76%. Los resultados son aún más significativos con code-davinci-002, donde Least to Most logra una tasa de éxito del 99.7%.
