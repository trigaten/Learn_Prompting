---
sidebar_position: 4
---

# 🟡 Codigo como Razonamiento

Los Modelos de Lenguaje Asistidos por Programa (PAL, por sus siglas en inglés) son otro ejemplo de un sistema MRKL. Cuando se les hace una pregunta, los PAL son capaces de **escribir código** que resuelve esa pregunta. Envían el código a un tiempo de ejecución programático para obtener el resultado. El funcionamiento de PAL es en contraposición al de CoT; el razonamiento intermedio de PAL es código, mientras que el de CoT es lenguaje natural.

import image from '@site/docs/assets/advanced/pal.webp';

<div style={{textAlign: 'center'}}>
  <img src={image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Ejemplo de PAL (Gao et al.)
</div>

Una cosa importante a tener en cuenta es que PAL en realidad entrelaza el lenguaje natural (NL) y el código. En la imagen anterior, en azul están el razonamiento en lenguaje natural que PAL genera. Aunque no se muestra en la imagen, PAL en realidad genera '\#' antes de cada línea de razonamiento NL, para que sean interpretados como comentarios por el tiempo de ejecución programático.

## Ejemplo

Veamos un ejemplo de PAL resolviendo una pregunta de matemáticas. Utilizo un prompt de 3 disparos, que es una versión simplificada de [este](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal).

Para esto, usaré langchain, un paquete de Python para encadenar la funcionalidad de LLM. Primero, se necesitan algunas instalaciones:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

Luego, podemos crear una instancia de GPT-3 davinci-002 (se hace una llamada a la API cuando usamos este objeto)
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

Aquí está el prompt de tres disparos:

```python
MATH_PROMPT = '''
Q: Había nueve computadoras en la sala de servidores. Cada día se instalaron cinco computadoras más, de lunes a jueves. How many computers are now in the server room?

¿Cuántas computadoras hay ahora en la sala de servidores?

# Solución en Python: """Había nueve computadoras en la sala de servidores. Cada día se instalaron cinco computadoras más, de lunes a jueves. ¿Cuántas computadoras hay ahora en la sala de servidores?"""
computadoras_iniciales = 9
computadoras_por_dia = 5
num_dias = 4  # 4 días entre lunes y jueves
computadoras_agregadas = computadoras_por_dia * num_dias
computadoras_totales = computadoras_iniciales + computadoras_agregadas
resultado = computadoras_totales
return resultado


Q: Shawn tiene cinco juguetes. Para Navidad, recibió dos juguetes de su mamá y dos juguetes de su papá. How many toys does he have now?

¿Cuántos juguetes tiene ahora?

# Solución en Python: """Shawn tiene cinco juguetes. Para Navidad, recibió dos juguetes de su mamá y dos juguetes de su papá. ¿Cuántos juguetes tiene ahora?
toys_initial = 5
mom_toys = 2
dad_toys = 2
total_received = mom_toys + dad_toys
total_toys = toys_initial + total_received
result = total_toys


P: Jason tenía 20 chupetines. Le dio algunos chupetines a Denny. Ahora Jason tiene 12 chupetines. How many lollipops did Jason give to Denny?

# solution in Python:
"""Jason had 20 lollipops. Le dio algunos chupetines a Denny. Ahora Jason tiene 12 chupetines. ¿Cuántos chupetines le dio Jason a Denny?"""
jason_lollipops_initial = 20
jason_lollipops_after = 12
denny_lollipops = jason_lollipops_initial - jason_lollipops_after
result = denny_lollipops

P: {pregunta}

# Solución en Python:
'''
```

Ahora podemos pasar la pregunta combinada a GPT-3.

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

La salida es:

<pre>
<span className="bluegreen-highlight">
"""Emma tomó un vuelo de 60 minutos a Seattle. Luego tomó un viaje en tren de 2 horas a Portland, y luego un viaje en autobús de 30 minutos a Vancouver. ¿Cuánto tiempo le llevó llegar a Vancouver?"""<br/>

plane_ride = 60<br/>
train_ride = 2 * 60  # 2 horas en minutos<br/>
bus_ride = 30<br/>
total_time = plane_ride + train_ride + bus_ride<br/>
result = total_time
</span>
</pre>

Finalmente, podemos pasar este código a un entorno de Python para obtener la respuesta:

```python
exec(llm_out)
print(result)
```

La salida es **210**, que es correcta.

Vea el cuaderno de Jupyter para este ejemplo aquí. [here](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb).

## Más

Consulte también [el ejemplo de colab de PAL.](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).