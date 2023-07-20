---
sidebar_position: 60
---

# 🟢 Términos ponderados

Algunos modelos (Stable Diffusion, Midjourney, etc.) permiten ponderar los términos en un prompt. Esto se puede utilizar para enfatizar ciertas palabras o frases en la imagen generada. También se puede utilizar para disminuir la importancia de ciertas palabras o frases en la imagen generada. Consideremos un ejemplo sencillo:

import mountains from '@site/docs/assets/images_chapter/mountains.webp';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.webp';
import planets from '@site/docs/assets/images_chapter/planets.webp';


# Ejemplo

Aquí hay algunas montañas generadas por Stable Diffusion, con el prompt `mountain`.

<div style={{textAlign: 'center'}}>
  <img src={mountains} style={{width: "350px"}}/>
</div>

Sin embargo, si queremos montañas sin árboles, podemos usar el prompt `mountain | tree:-10`. Como ponderamos negativamente el término "tree", no aparecen en la imagen generada.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains_no_trees} style={{width: "350px"}} />
</div>

Los términos ponderados se pueden combinar en prompts más complejos, como 
`A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planets} style={{width: "350px"}} />
</div>

## Notas

Lea más sobre la ponderación en algunos de los recursos al final de este capítulo.