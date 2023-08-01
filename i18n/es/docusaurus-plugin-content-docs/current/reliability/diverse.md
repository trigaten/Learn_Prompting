---
sidebar_position: 5
---

# 🟡 Diverse Prompts

DiVeRSe(@li2022advance) ("**Di**verse **Ve**rifier on **R**easoning **S**t**e**ps") es un método que mejora la confiabilidad de las respuestas de tres maneras. Lo hace mediante el uso de
1) múltiples prompts para generar completados diversos, 2) un verificador para distinguir entre buenas y malas respuestas, y 3) un verificador para verificar la corrección de los pasos de razonamiento.


import diverse from '@site/docs/assets/reliability/diverse.webp';

<div style={{textAlign: 'center'}}>
  <img src={diverse} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
DiVeRSe (Li et al.)
</div>


## Diverse Prompts

DiVeRSe utiliza 5 prompts diferentes para una entrada dada. Para construir cada prompt, se toman al azar algunos ejemplos del conjunto de entrenamiento. Aquí hay un ejemplo de un prompt de few-shot (k=2), con ejemplos tomados del conjunto de datos GSM8K (@cobbe2021training). En la práctica, DiVeRSe utiliza 5 ejemplos en los prompts para este conjunto de datos.


```
Q: Natalia vendió clips a 48 de sus amigos en abril, y luego vendió la mitad de esa cantidad en mayo. ¿Cuántos clips vendió Natalia en total en abril y mayo??
A: Natalia vendió 48/2 = 24 clips en mayo.
Natalia vendió 48+24 = 72 clips en total en abril y mayo.
#### 72
Q: Weng gana $12 por hora cuidando niños. Ayer, solo cuidó a los niños durante 50 minutos. ¿Cuánto ganó?
A: Weng gana 12/60 = $0.2 por minuto.
Trabajando 50 minutos, ella ganó 0.2 x 50 = $10.
#### 10
Q: P: Betty está ahorrando dinero para una nueva billetera que cuesta $100. Betty tiene solo la mitad del dinero que necesita. Sus padres decidieron darle $15 para ese propósito, y sus abuelos el doble de lo que dieron sus padres. ¿Cuánto más necesita Betty para comprar la billetera?
A:
```

Después de generar 5 prompts diferentes como el anterior, DiVeRSe muestrea 20 caminos de razonamiento diferentes para cada uno (temperatura = 0.5). Aquí hay algunos completados de ejemplo del prompt anterior. Tenga en cuenta que las respuestas no siempre son correctas.

<pre>

<div style={{backgroundColor: '#d2f4d3'}}>
<div>Betty tiene 0.5*100 = $50.</div>

<div>Luego recibe 15 más = $65.</div>

<div>Luego recibe 2*15 = $90.</div>

<div>Necesita $10 más.</div>

#### 10
</div>
</pre>

<pre>

<div style={{backgroundColor: '#d2f4d3'}}>
<div>R: Betty tiene 0.5*100 = $500.</div>

<div>Luego recibe 15 más = $650.</div>

<div>Luego recibe 2*15 = $900.</div>

<div>Ella necesita 100-90 = $1000 más.</div>

#### 1000
</div>
</pre>

At this point, DiVeRSe has generated 100 different completions.

## Verificador de votación

En este punto, DiVeRSe ha generado 100 completados diferentes.

Ahora, podríamos simplemente tomar la respuesta mayoritaria, como hace Self-Consistency(@mitchell2022enhancing).

Sin embargo, DiVeRSe propone un método mucho más complicado, que ellos llaman un _verificador de votación_.

En el momento de la prueba, el uso del verificador de votación es un proceso de dos pasos. Primero, el verificador (una red neuronal) asigna una puntuación de 0 a 1 a cada completado basado en qué tan probable es que sea correcto. Luego, el componente de 'votación' suma todas las puntuaciones de diferentes respuestas y arroja la respuesta final.

### Ejemplo

Aquí hay un pequeño ejemplo. Digamos que tenemos los siguientes completados para la consigna `¿Cuánto es dos más dos?`:

<pre>
<div style={{backgroundColor: '#d2f4d3'}}>
<div>4</div>
</div>
</pre>

<pre>
<div style={{backgroundColor: '#d2f4d3'}}>
<div>dos + 2 = 5</div>
</div>
</pre>

<pre>
<div style={{backgroundColor: '#d2f4d3'}}>
<div>Creo que 2+2 = 6</div>
</div>
</pre>

<pre>
<div style={{backgroundColor: '#d2f4d3'}}>
<div>dos más dos = 4</div>
</div>
</pre>

<pre>
<div style={{backgroundColor: '#d2f4d3'}}>
<div>Es 5</div>
</div>
</pre>

El verificador leerá cada completado y le asignará una puntuación. Por ejemplo, podría asignar las puntuaciones: 0,9; 0,1; 0,2; 0,8; 0,3 respectivamente. Luego, el componente de votación sumará las puntuaciones para cada respuesta.


```
puntuación(4) = 0,9 + 0,8 = 1,7
puntuación(5) = 0,1 + 0,3 = 0,4
puntuación(6) = 0,2
```

La respuesta final es 4, ya que tiene la puntuación más alta.

**Pero, ¿cómo se entrena el verificador?**

El verificador se entrena con una función de pérdida ligeramente compleja, que no cubriré aquí. Lea la sección 3.3 del artículo para obtener más detalles(@li2022advance).

## Conclusiones

La principal conclusión aquí es utilizar múltiples consignas para generar completados diversos. En la práctica, la votación mayoritaria probablemente funcionará bien en comparación con el verificador de votación.