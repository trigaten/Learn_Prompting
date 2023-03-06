---
sidebar_position: 90
---

# 📙 Referencia de Vocabulario

Por favor, consulte esta página para obtener una lista de términos y conceptos que utilizaremos a lo largo de este curso.

#### Modelos de Lenguaje Grande (LLMs), Modelos de Lenguaje Pre-entrenados (PLMs) (@branch2022evaluating), Modelos de Lenguaje (LMs) y modelos base

Estos términos se refieren más o menos a lo mismo: AIs grandes (redes neuronales), que por lo general se han entrenado en una gran cantidad de texto.

#### Modelos de Lenguaje con Máscara (MLMs)

Los MLMs son un tipo de modelo de NLP que tienen un token especial, generalmente `[MASK]`, que se sustituye por una palabra del vocabulario. El modelo luego predice la palabra que se enmascaró. Por ejemplo, si la oración es "El perro está [MASK] al gato", el modelo predecirá "persiguiendo" con alta probabilidad.

#### Etiquetas

El concepto de etiquetas se comprende mejor con un ejemplo.

Digamos que queremos clasificar algunos tweets como "ofensivos" o "no ofensivos". Si tenemos una lista de tweets y su correspondiente *etiqueta* (ofensivo o no ofensivo), podemos entrenar un modelo para clasificar si los tweets son ofensivos o no. Las etiquetas son generalmente solo posibilidades para la tarea de clasificación.

#### Espacio de Etiquetas

Todas las posibles etiquetas para una tarea dada ("ofensivo" y "no ofensivo" para el ejemplo anterior).

#### Análisis de Sentimiento

El análisis de sentimiento es la tarea de clasificar el texto en sentimientos positivos, negativos u otros.

#### "Modelo" vs. "AI" vs. "LLM"

Estos términos se utilizan de manera algo intercambiable a lo largo de este curso, pero no siempre significan lo mismo. Los LLM son un tipo de AI, como se señaló anteriormente, pero no todas las AIs son LLM. Cuando mencionamos modelos en este curso, nos referimos a modelos de IA. Como tal, en este curso, puede considerar los términos "modelo" y "IA" como intercambiables.

#### Verbalizador

En el entorno de clasificación, los verbalizadores son mapeos de etiquetas a palabras en el vocabulario del modelo de lenguaje (@schick2020exploiting). Por ejemplo, considere realizar la clasificación de sentimientos con el siguiente prompt:

```text
Tweet: "Amo los hotpockets"
¿Cuál es el sentimiento de este tweet? Diga 'pos' o 'neg'.
```

Aquí, el verbalizador es el mapeo de las etiquetas conceptuales de `positive` y `negative` a los tokens `pos` y `neg`.

#### Reinforcement Learning from Human Feedback (RLHF)

RLHF es un método para ajustar los LLM según los datos de preferencia humana.

<!-- %%RemarkAutoGlossary::list_all%% -->
