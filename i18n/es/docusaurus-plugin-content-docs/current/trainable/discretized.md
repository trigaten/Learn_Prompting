---
sidebar_position: 2
---

# 🔴 Soft Prompts Interpretables

Los soft prompts son una secuencia de vectores que no corresponden a ningún token real del vocabulario. Esto dificulta la interpretación del prompt. Sin embargo, aún podemos intentar hacerlo mapeando los vectores a los tokens más cercanos en el vocabulario. Sin embargo, los soft prompts proyectados suelen ser desviados; pueden resolver tareas bien, pero proyectarse a tokens arbitrarios en el vocabulario(@khashabi2021prompt).

Por ejemplo, si estamos entrenando en preguntas de matemáticas como GSM8K(@cobbe2021training), podríamos comenzar con el prompt `Eres un matemático. Resuelve esta pregunta:`. Si hacemos ajuste de prompt en él, luego lo proyectamos de regreso al espacio de tokens, podríamos quedarnos con algo sin sentido como `Un autobús es un autobús. Hacer cosa aquí:`. A menudo, el prompt suave que se asigna a este prompt sin sentido puede proporcionar un mejor rendimiento en la tarea.

## La hipótesis de desviación

Khashabi et al.(@khashabi2021prompt) proponen esta increíble hipótesis. Dice que dado una tarea, para cualquier prompt objetivo discreto, existe un prompt continuo que se proyecta en él, mientras se desempeña bien en la tarea.

Esto significa que dado 1000 tareas diferentes, existen 1000 soft prompts diferentes y efectivos (uno para cada tarea) que se asignan al mismo prompt discreto.

## Riesgos de interpretación

Utilizan la hipótesis de desviación para resaltar una serie de riesgos que surgen al interpretar los soft prompts. En particular, un soft prompt puede ser proyectado en un prompt discreto que da una intención engañosa.

Considera un soft prompt para clasificar currículums. Cuando se proyecta en el espacio de tokens, podría ser `Eres gerente de contratación. Clasifica buenos currículums:`. Esto parece decente, quizás un poco deficiente en gramaticalidad. Sin embargo, el token `buenos` podría tener una proyección similar al token para `blanco`, y podría existir un sesgo implícito en el prompt. Usando un método de proyección ligeramente diferente, podríamos terminar con `Eres gerente de contratación. Clasifica currículums blancos:`. Esto es obviamente bastante diferente y podría tener implicaciones significativas.

Al igual que al interpretar un prompt discreto regular, debemos ser extremadamente conscientes de los sesgos que pueden estar presentes en el prompt. Debemos ser especialmente cuidadosos con los soft prompts, ya que son más difíciles de interpretar.
