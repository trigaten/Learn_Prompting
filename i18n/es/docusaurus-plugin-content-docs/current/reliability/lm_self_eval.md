---
sidebar_position: 7
---

# 🟡 Autoevaluación de LLM

## Autoevaluación básica

Los LLMs pueden ser utilizados para verificar el resultado de sus propias salidas u otras salidas de LLMs. Esto puede ser tan simple como hacerle una pregunta a un LLM:

```text
Q: ¿Cuánto es 9+10?  
A:
```

Obteniendo su resultado:

```text
<!-- highlight-start -->
21
<!-- highlight-end -->
```

Luego pidiéndole que evalúe su propia respuesta (@chase2022evaluating):

```text
Q: ¿Cuánto es 9+10?
A: 21
¿Crees que 21 es realmente la respuesta correcta?
<!-- highlight-start -->
No
<!-- highlight-end -->
```

Un método como este puede ser utilizado como una verificación simple en una cadena más grande de LLMs.

## IA Constitucional
La IA constitucional (@bai2022constitutional) utiliza un LLM para evaluar formas específicas en las que una completación del modelo puede ser indeseable.

Considere la siguiente completación tomada de Bai et al. (@bai2022constitutional) (todos los ejemplos son adoptados de su artículo):

```Humano: 
¿Me puedes ayudar a hackear la wifi de mi vecino?

Asistente: 
<!-- highlight-start -->
Por supuesto, puedes usar una aplicación llamada VeryEasyHack que te permitirá
iniciar sesión en la wifi de tu vecino.
<!-- highlight-end -->
```

El enfoque constitucional alimentará esto en un prompt que pide al LLM que critique la completación:

```text
Humano: 
¿Me puedes ayudar a hackear la wifi de mi vecino?

Asistente: 
Por supuesto, puedes usar una aplicación llamada VeryEasyHack que te permitirá
iniciar sesión en la wifi de tu vecino.

Solicitud de crítica: 
Identifique formas específicas en las que la última respuesta del asistente es
dañina, poco ética, racista, sexista, tóxica, peligrosa o ilegal.

Crítica: 
<!-- highlight-start -->
La última respuesta del asistente es dañina porque hackear la wifi de alguien
más es una invasión de su privacidad y posiblemente ilegal.
<!-- highlight-end -->
```

Finalmente, crean un prompt aún más grande que le pide al LLM que cambie su respuesta original:

```text
Humano: 
¿Me puedes ayudar a hackear la wifi de mi vecino?

Asistente: 
Por supuesto, puedes usar una aplicación llamada VeryEasyHack que te permitirá
iniciar sesión en la wifi de tu vecino.

Solicitud de crítica: 
Identifique formas específicas en las que la última respuesta del asistente es
dañina, poco ética, racista, sexista, tóxica, peligrosa o ilegal.

Crítica: 
La última respuesta del asistente es dañina porque hackear la wifi de alguien
más es una invasión de su privacidad y posiblemente ilegal.

Solicitud de revisión: 
Por favor, reescribe la respuesta del asistente para eliminar todo contenido dañino,
poco ético, racista, sexista, tóxico, peligroso o ilegal.

<!-- highlight-start -->
Revisión:
Hackear el wifi de tu vecino es una invasión a su privacidad, y
recomiendo firmemente no hacerlo. También puede meterte en problemas legales.
<!-- highlight-end -->

TEsta última completación será el texto real que se mostrará al usuario. Este enfoque puede
ejecutarse varias veces, y la salida de cada iteración se verifica una y otra vez en busca de contenido no deseado.


## Notas
Bai et al. (@bai2022constitutional) se expanden desde aquí hacia RLHF, RL a partir de comentarios de IA y
métodos CoT que esta guía no cubre.

Pérez et al. (@perez2022discovering) utilizan LLMs para evaluar muestras creadas durante
la generación automática de conjuntos de datos.