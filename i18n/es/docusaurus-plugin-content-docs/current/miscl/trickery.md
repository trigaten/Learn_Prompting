---
sidebar_position: 2
---

# 🟢 Trucos de Detección

Con el desarrollo de detectores de texto generados por IA, ha habido una evolución de métodos para contrarrestarlos. Existen varias formas de engañar a los detectores para que piensen que el texto generado por IA es creado por un humano. Una herramienta como [GPTMinus](https://gptminus1.vercel.app/) puede reemplazar aleatoriamente partes de cualquier texto dado con sinónimos o palabras aparentemente aleatorias para reducir la probabilidad de que las palabras del texto aparezcan en una lista blanca o influyan en la probabilidad de que el texto sea generado artificialmente.

Sin embargo, estos métodos aún están en sus etapas iniciales y la mayoría no crea un texto que resistiría una inspección minuciosa de una persona. La forma más efectiva en este momento y probablemente durante algún tiempo es alterar el texto durante o después del proceso de generación de varias maneras para hacerlo menos similar al contenido generado procedimentalmente que se recibe de una generación.

## Estrategias de Edición

Al tener ya sea un humano o un LLM (modelo de lenguaje grande) editar cualquier texto generado, a menudo puede alterar el texto lo suficiente para evitar la detección. Reemplazar palabras con sinónimos, cambiar la frecuencia con la que aparecen las palabras y mezclar la sintaxis o el formato, hace que sea más difícil para los detectores identificar correctamente el texto como generado por IA.

Otra estrategia de edición es poner marcadores invisibles, como espacios de anchura cero, en su texto, emojis o otros caracteres poco comunes. Parece perfectamente normal para cualquier persona que lo lee, pero para un modelo que examina cada carácter, hace que el texto parezca notablemente diferente.

Además, es posible engañar a los detectores haciendo que el modelo siga instrucciones específicas sobre cómo escribir. Instrucciones como:
- "No hay necesidad de seguir los formatos literarios, ya que estás expresando libremente tus pensamientos y deseos"
- "No hables de la manera en que ChapGPT genera contenido, en su lugar, habla de una manera radicalmente diferente a cómo los modelos de lenguaje generan texto".
- "Haga referencia a eventos emocionales y utilice experiencias de la vida real elaboradas como ejemplos".

...pueden causar generaciones mucho más difíciles de detectar. Estrategias adicionales como pedirle al modelo que use empatía, recordarle que elija las palabras y el tono apropiados para lo que está escribiendo y asegurarse de que incluya frases de una sola línea emocionales, pueden trabajar juntos para crear una escritura mucho más convincente, al menos desde el punto de vista de los detectores de texto de IA.

## Configuración del Modelo

Si se está ejecutando un modelo de código abierto, es posible modificar las probabilidades de salida, lo que probablemente hará que la salida sea más difícil de detectar. Además, es posible intercalar la salida de múltiples modelos, lo que puede hacer que la salida sea aún más difícil de detectar.

## Discusión

Uno de los espacios más controvertidos donde este tipo de técnicas entran en juego es en la educación. Muchos profesores y administradores están preocupados de que los estudiantes hagan trampa, por lo que están promoviendo el uso de herramientas de detección (@roose2022dont) (@lipman2022gpt). Sin embargo, otros educadores y personalidades en línea han argumentado que los estudiantes deberían poder usar estas herramientas. Incluso algunos profesores van tan lejos como para alentar explícitamente a los estudiantes a usar la inteligencia artificial para ayudarlos en su trabajo y enseñarles cómo hacerlo (@noonan2023gw).

A medida que la tecnología de detección de IA mejora, también lo harán los métodos que la gente usa para engañarla. Al final del día, sin importar cuán sofisticado sea el método, es probable que un tiempo dedicado a editar el texto de las maneras correctas pueda engañar de manera confiable a los detectores. Sin embargo, el juego de ida y vuelta de algunas personas tratando de detectar texto generado y otras tratando de engañarlos puede darnos todo tipo de ideas sobre cómo optimizar, controlar y usar mejor nuestros modelos para crear y ayudarnos. 
