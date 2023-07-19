---
sidebar_position: 3
---

# 🟡 LLMs que razonan y actúan

ReAct (@yao2022react) (razonamiento, acción) es un paradigma para permitir que los modelos de lenguaje resuelvan tareas complejas utilizando el razonamiento del lenguaje natural. ReAct está diseñado para tareas en las que el LLM tiene permitido realizar ciertas acciones. Por ejemplo, como en un sistema MRKL, un LLM puede interactuar con APIs externas para obtener información. Cuando se le hace una pregunta, el LLM podría elegir realizar una acción para recuperar información, y luego responder la pregunta basándose en la información recuperada.

Los sistemas ReAct se pueden pensar como sistemas MRKL, con la capacidad adicional de **razonar sobre** las acciones que pueden realizar.

Examinemos la siguiente imagen. La pregunta en el cuadro superior proviene de HotPotQA (@yang2018hotpotqa), un conjunto de datos de preguntas y respuestas que requiere un razonamiento complejo. ReAct puede responder la pregunta primero razonando sobre ella (Pensamiento 1), y luego realizando una acción (Acción 1) para enviar una consulta a Google. Luego recibe una observación (Obs 1) y continúa con este ciclo de pensamiento, acción, observación hasta que llega a una conclusión (Acción 3).


import react_qa from '@site/docs/assets/advanced/react_qa.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={react_qa} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Sistema ReAct (Yao et al.)
</div>

Los lectores con conocimientos de aprendizaje por refuerzo pueden reconocer este proceso como similar al ciclo clásico de RL de estado, acción, recompensa, estado,.... ReAct proporciona una formalización para esto en su artículo.


## Resultados

Google utilizó el LLM PaLM (@chowdhery2022palm) en experimentos con ReAct. Las comparaciones con la solicitud estándar (solo pregunta), CoT y otras configuraciones muestran que el rendimiento de ReAct es prometedor para tareas de razonamiento complejas. Google también realiza estudios en el conjunto de datos fever (@thorne2018fever), que cubre la extracción y verificación de hechos.

import react_performance from '@site/docs/assets/advanced/react_performance.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={react_performance} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Resultados de ReAct (Yao et al.)
</div>

