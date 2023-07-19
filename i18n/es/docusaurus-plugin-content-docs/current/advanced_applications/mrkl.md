---
sidebar_position: 2
---

# 🟡 LLMs Utilizando Herramientas

MRKL Systems (@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, siguiendo una lógica fonética inglesa, se prouncia "miracle") son una **arquitectura neuro-simbólica** que combina LLMs (computación neuronal) y herramientas externas como calculadoras (computación simbólica) para resolver problemas complejos.

Un sistema MRKL está compuesto por un conjunto de módulos (por ejemplo, una calculadora, una API del clima, una base de datos, etc.) y un enrutador que decide cómo "enrutar" las consultas en lenguaje natural entrantes al módulo apropiado.

Un ejemplo simple de un sistema MRKL es un LLM que puede usar una aplicación de calculadora. Este es un sistema de un solo módulo, donde el LLM es el enrutador. Cuando se le pregunta: "¿Cuál es el resultado de 100*100?", el LLM puede elegir extraer los números de la consulta y luego decirle al sistema MRKL que use una aplicación de calculadora para calcular el resultado. Esto podría verse así:

<pre>
<p>¿Cuál es el resultado de 100*100?</p>

<span style={{backgroundColor: '#d2f4d3'}}>CALCULADORA[100*100]</span>
</pre>

El sistema MRKL vería la palabra "CALCULADORA" e insertaría "100*100" en la aplicación de calculadora. Esta idea simple se puede expandir fácilmente a varias herramientas de computación simbólica.

Considere los siguientes ejemplos adicionales de aplicaciones:

- Un chatbot que puede responder preguntas sobre una base de datos financiera extrayendo información para formar una consulta SQL a partir del texto del usuario.

<pre>
<p>¿Cuál es el precio de las acciones de Apple ahora?</p>

<span style={{backgroundColor: '#d2f4d3'}}>El precio actual es BASE DE DATOS [SELECCIONAR precio DE acciones DONDE empresa = "Apple" Y tiempo = "ahora"].</span>
</pre>

- Un chatbot que puede responder preguntas sobre el clima extrayendo información de la consulta y utilizando una API del clima para recuperar la información.

<pre>
<p>¿Cómo está el clima en Nueva York?</p>

<span style={{backgroundColor: '#d2f4d3'}}>El clima es API DEL CLIMA[Nueva York].</span>
</pre>

- O incluso tareas mucho más complejas que dependen de múltiples fuentes de datos, como las siguientes:

import mrkl_task from '@site/docs/assets/advanced/mrkl_task.webp';
import dataset from '@site/docs/assets/advanced/mrkl/dataset.webp';
import load_dataset from '@site/docs/assets/advanced/mrkl/load_dataset.webp';
import model from '@site/docs/assets/advanced/mrkl/model.webp';
import extract from '@site/docs/assets/advanced/mrkl/extract.webp';
import search from '@site/docs/assets/advanced/mrkl/search.webp';
import final from '@site/docs/assets/advanced/mrkl/final.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mrkl_task} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Ejemplo de Sistema MRKL (AI21)
</div>


## Un Ejemplo

He reproducido un ejemplo del sistema MRKL del artículo original, utilizando Dust.tt, 
vinculado [aquí](https://dust.tt/trigaten/a/98bdd65cb7). 
El sistema lee un problema matemático (por ejemplo, `¿Cuánto es 20 por 5^6?`), extrae los números y las operaciones,
y los reformatea para una aplicación de calculadora (por ejemplo, `20*5^6`). Luego envía la ecuación reformateada 
a la aplicación de calculadora de Google y devuelve el resultado. Tenga en cuenta que el artículo original realiza una optimización rápida en el enrutador (el LLM), pero no lo hago en este ejemplo. Veamos cómo funciona esto:

Primero, hice un conjunto de datos simple en la pestaña `Datasets` de Dust.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={dataset} style={{width: "750px"}} />
</div>

Luego, cambié a la pestaña `Specification` y cargué el conjunto de datos utilizando un bloque `data`.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={load_dataset} style={{width: "750px"}} />
</div>

A continuación, creé un bloque `llm` que extrae los números y operaciones. Observe cómo en el prompt le dije que estaríamos usando la calculadora de Google. El modelo que uso (GPT-3) probablemente tiene algún conocimiento de la calculadora de Google desde el preentrenamiento.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={model} style={{width: "750px"}} />
</div>

Luego, hice un bloque `code`, que ejecuta un código JavaScript simple para eliminar los espacios de la finalización.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={extract} style={{width: "750px"}} />
</div>

Finalmente, hice un bloque `search` que envía la ecuación reformateada a la calculadora de Google.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={search} style={{width: "750px"}} />
</div>

¡A continuación, podemos ver los resultados finales, que son todos correctos!

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={final} style={{width: "750px"}} />
</div>

Siéntase libre de clonar y experimentar con este playground [aquí](https://dust.tt/trigaten/a/98bdd65cb7).

## Notas
MRKL fue desarrollado por [AI21](https://www.ai21.com/) y originalmente utilizó su LLM J-1 (Jurassic 1) (@lieberjurassic).

## Más

Vea [este ejemplo](https://langchain.readthedocs.io/en/latest/modules/agents/implementations/mrkl.html) de un sistema MRKL construido con LangChain.
