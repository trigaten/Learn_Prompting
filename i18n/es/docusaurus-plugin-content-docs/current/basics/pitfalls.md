---
sidebar_position: 90
---

# 🟢 Trampas de los LLMs

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"500px",height:"200px",verticalAlign:"top"}}/>
</div>

Los LLMs son extremadamente poderosos, pero no son perfectos. Hay muchos aspectos que debes tener en cuenta a la hora de utilizarlos.

## Citar fuentes

La mayoría de los LLM **no pueden citar las fuentes con precisión**. Esto se debe a que no tienen acceso a Internet y no recuerdan exactamente de dónde procede su información. A menudo generan fuentes que parecen buenas, pero que son totalmente inexactas.

:::note
Estrategias como LLMs con búsqueda aumentada (LLMs que pueden buscar en Internet y otras fuentes) a menudo pueden solucionar este problema.
:::

## Sesgos

Los LLM suelen estar predispuestos a generar respuestas estereotipadas. Incluso con medidas de seguridad, a veces dicen cosas sexistas, racistas y homófobas. Ten cuidado cuando utilices LLM en aplicaciones orientadas al consumidor, y también ten cuidado cuando los utilices en investigación (pueden generar resultados sesgados).

## Alucinaciones

Los LLM suelen decir falsedades cuando se les hace una pregunta cuya respuesta desconocen. A veces dirán que no saben la respuesta, pero la mayoría de las veces darán con seguridad una respuesta incorrecta.

## Matemáticas

Los LLM suelen ser malos en matemáticas. Les cuesta resolver problemas matemáticos sencillos y a menudo son incapaces de resolver problemas matemáticos más complejos.

:::note
Este problema puede solucionarse hasta cierto punto utilizando una [herramienta LLM aumentada](https://learnprompting.org/es/docs/advanced_applications/mrkl).
:::

## Prompt Hacking

A menudo, los usuarios pueden engañar a los LLM para que generen el contenido que deseen. Lee más sobre esto [aquí](https://learnprompting.org/es/docs/category/-prompt-hacking).
