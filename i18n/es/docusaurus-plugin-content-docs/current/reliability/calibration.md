---
sidebar_position: 10
---

# 🔴 Calibración de LLMs

Es posible contrarrestar algunos de los sesgos que presentan los LLMs mediante la calibración de las **distribuciones de salida**(@zhao2021calibrate). 

**¿Qué significa exactamente calibrar una distribución de salida?**

Veamos un ejemplo rápido: digamos que tenemos una tarea de %%análisis de sentimientos|análisis de sentimientos%% con dos posibles etiquetas, `Positivo` y `Negativo`. Consideremos lo que sucede cuando se le solicita al %%LLM|LLM%% que analice `Entrada: nada Sentimiento: `. Esta entrada no contiene ningún _contexto_ que el LLM pueda utilizar para realizar una predicción de sentimiento, por lo que se llama una entrada **sin contexto**.

Dado que `nada` no es un concepto ni positivo ni negativo, esperaríamos que el LLM generara una probabilidad de alrededor de 0.5 para ambos, `Positivo` y `Negativo`. Sin embargo, a menudo (y para este ejemplo) ese no será el caso.
```
p("Positivo" | "Entrada: nada Sentimiento:") = 0.9

p("Negativo" | "Entrada: nada Sentimiento:") = 0.1
```

Dados estos probabilidades de etiquetas para una entrada sin contexto, sabemos que la **distribución de salida** del LLM es probablemente sesgada hacia la etiqueta `Positivo`. Esto puede hacer que el LLM favorezca la etiqueta `Positivo` para todas las entradas, incluso si la entrada no es realmente positiva.

Si podemos de alguna manera **calibrar** la distribución de salida, de tal forma que las entradas sin contexto se asignen una probabilidad de 0.5 tanto para `Positivo` como para `Negativo`, entonces podemos eliminar con frecuencia el sesgo hacia `Positivo` y el LLM será más confiable tanto en entradas sin contexto como en entradas con contexto.

## Solución no técnica

Una solución no técnica a este problema es simplemente proporcionar algunos ejemplos de pocos disparos donde los ejemplos sin contexto se asignan de manera efectiva una probabilidad de 0.5 tanto para `Positivo` como para `Negativo`.

Por ejemplo, podríamos proporcionar los siguientes ejemplos de pocos disparos que muestren que cada ejemplo sin contexto se clasifica como tanto `Positivo` como `Negativo`:
```
Entrada: Odio esta película. Sentimiento: Negativo
Entrada: Amo esta película. Sentimiento: Positivo
Entrada: N/A Sentimiento: Positivo
Entrada: N/A Sentimiento: Negativo
Entrada: nada Sentimiento: Positivo
Entrada: nada Sentimiento: Negativo
Entrada: Me gustan los huevos. Sentimiento:
```

Hasta donde sé, esta solución no se ha explorado en la literatura, y no estoy seguro de cómo funciona en la práctica. Sin embargo, es una solución simple que demuestra lo que se trata de lograr con la calibración.

## Solución técnica

Otra solución para esto es la calibración contextual, donde ajustamos parámetros de calibración especiales, que garantizan que las entradas sin contexto como `Input: nothing Sentiment:` tengan una probabilidad de alrededor del 0.5 para ambas etiquetas. Se debe tener en cuenta que en la práctica, este método realiza la calibración sobre múltiples entradas sin contexto diferentes (por ejemplo, `Input: N/A Sentiment: `, `Input: [MASK] Sentiment: `). Se promedian los parámetros de calibración que funcionan mejor para cada entrada sin contexto para encontrar los mejores parámetros de calibración para el LLM.

### Ejemplo

Veamos un ejemplo de cómo calcular los parámetros de calibración para una entrada sin contexto. Tenga en cuenta que este ejemplo no es reproducible con GPT-3 debido al hecho de que no se puede restringir a las etiquetas `Positive` y `Negative`.

Considere nuevamente el ejemplo anterior donde el LLM asigna las siguientes probabilidades a las etiquetas para una entrada sin contexto:

```
p("Positive" | "Input: nothing Sentiment:") = 0.9

p("Negative" | "Input: nothing Sentiment:") = 0.1
```

Queremos encontrar alguna distribución de probabilidad q tal que
```
q("Positive" | "Input: nothing Sentiment:") = 0.5

q("Negative" | "Input: nothing Sentiment:") = 0.5
```

Lo haremos creando una transformación lineal que ajusta (calibra) las probabilidades de $p$.

$\^{q} = \text{Softmax}(W\^{p} + b)$

Esta ecuación toma las probabilidades originales $\^{p}$ y aplica los pesos $W$ y el sesgo $b$ a ellos. Los pesos $W$ y el sesgo $b$ son los parámetros de calibración, que, cuando se aplican a las probabilidades del ejemplo sin contexto, darán como resultado $\^{q}$ = [0.5, 0.5].

#### Cálculo de W y b

Necesitamos calcular los pesos $W$ y el sesgo $b$. Una forma de hacer esto es:

$W = \text{diag}(\^{p})^{-1}$ 

$b = 0$

Aunque la definición de $W$ puede parecer un poco extraña al principio, simplemente está tomando el inverso de cada valor en $\^{p}$ para encontrar un $W$ que transformará las probabilidades originales $\^{p}$ en las probabilidades calibradas [0.5, 0.5].

Verifiquemos que esto funciona para el ejemplo anterior:

$\^{p} = [0.9, 0.1]$

$W = \text{diag}(\^{p})^{-1} = \text{diag}([0.9, 0.1])^{-1} 
= \begin{bmatrix}
   0.9 & 0 \\
   0 & 0.1
\end{bmatrix}^{-1}
= \begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}$

$\^{q} = \text{Softmax}(W\^{p} + b) = \text{Softmax}(\begin{bmatrix}
   1.11 &
   0 & 10
\end{bmatrix}*{[0.9, 0.1]} + 0)
= \text{Softmax}([1, 1])
=[0.5, 0.5]$

Como se mencionó anteriormente, realizaríamos este mismo proceso para múltiples entradas libres de contexto diferentes y promediaríamos los parámetros de calibración que funcionen mejor para cada entrada libre de contexto para encontrar los mejores parámetros de calibración para el LLM. Esto significa que los parámetros de calibración finales probablemente no asignen ninguna de las entradas libres de contexto exactamente a [0.5, 0.5].

### Otro método

$b$ también podría establecerse en $-\^{p}$, y $W$ en la matriz de identidad. Este método funciona mejor en tareas de generación que en tareas de clasificación(@zhao2021calibrate).

## Conclusiones

Los LLM a menudo están predispuestos (sesgados) hacia ciertas etiquetas. La calibración se puede utilizar para contrarrestar este sesgo.