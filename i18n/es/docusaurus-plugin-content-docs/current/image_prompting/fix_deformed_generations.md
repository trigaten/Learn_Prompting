---
sidebar_position: 90
---
# 🟢 Generaciones Deformes

Las generaciones deformes, especialmente en partes del cuerpo humano (por ejemplo, manos, pies), son un problema común en muchos modelos. Esto se puede tratar en cierta medida con buenos prompts negativos (@blake2022with). El siguiente ejemplo está adaptado de [esta publicación de Reddit](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/).

## Ejemplo

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.webp';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.webp';

Usando Stable Diffusion v1.5 y el siguiente prompt, generamos una bonita imagen de Brad Pitt, ¡excepto por sus manos, por supuesto!

`retrato mediano de estudio de Brad Pitt saludando con sus manos, detallado, película, iluminación de estudio, lente de 90mm, por Martin Schoeller:6`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={bad_pitt} style={{width: "250px"}} />
</div>

Usando un prompt negativo robusto, podemos generar manos mucho más convincentes.

`retrato mediano de estudio de Brad Pitt saludando con sus manos, detallado, película, iluminación de estudio, lente de 90mm, por Martin Schoeller:6 | deformidad, manos deformes, borrosas, granuladas, rotas, bizcas, no muertas, photoshopeadas, sobreexpuestas, subexpuestas, baja resolución, mala anatomía, malas manos, dígitos adicionales, menos dígitos, mal dígito, malas orejas, malos ojos, mala cara, recortado: -5`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_pitt} style={{width: "250px"}} />
</div>

El uso de un prompt negativo similar también puede ayudar con otras partes del cuerpo. Desafortunadamente, esta técnica no es consistente, por lo que es posible que necesite intentar varias generaciones antes de obtener un buen resultado.
En el futuro, este tipo de prompting debería ser innecesario ya que los modelos mejorarán.
Sin embargo, actualmente es una técnica muy útil.

# Notas

Los modelos mejorados como [Protogen](https://civitai.com/models/3666/protogen-x34-official-release) suelen ser mejores con manos, pies, etc.