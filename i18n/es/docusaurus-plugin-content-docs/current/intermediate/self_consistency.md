---
sidebar_position: 5
---

# 🟡 Autoconsistencia

La autoconsistencia(@wang2022selfconsistency) (Self-consistency en ingles) es un seguimiento de la iniciativa CoT que genera múltiples cadenas de pensamiento en lugar de solo una, y luego toma la respuesta mayoritaria como respuesta final.

En la figura a continuación, el prompt en la izquierda está escrito utilizando el paradigma Few-Shot-CoT. Usando este solo prompt, se generan múltiples cadenas de pensamiento de manera independiente. Las respuestas se extraen de cada una y la respuesta final se calcula "marginalizando los caminos de razonamiento". En la práctica, esto simplemente significa tomar la respuesta mayoritaria.

import SCImage from '@site/docs/assets/self_consistency.png';

<div style={{textAlign: 'center'}}>
  <img src={SCImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Autoconsistencia (Wang et al.)
</div>

## Resultados

Se ha demostrado que la autoconsistencia mejora los resultados en tareas de aritmética, razonamiento común y simbólico.

Incluso cuando se encontró que CoT regular era ineficaz (@ye2022unreliability), la autoconsistencia todavía pudo mejorar los resultados.

## Notas

Wang et al. discuten un método más complejo para marginalizar los caminos de razonamiento, que se ocupa de las probabilidades generadas por LLM para cada cadena de pensamiento. Sin embargo, no usan este método en sus experimentos, y la votación mayoritaria parece tener el mismo o mejor rendimiento en general.