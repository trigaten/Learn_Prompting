---
sidebar_position: 3
---

# 🟢 Generación de música

Los modelos de generación de música están cada vez más populares, y eventualmente tendrán un gran impacto en la industria musical.

Los modelos de generación de música pueden crear progresiones de acordes, melodías o canciones completas. Pueden estructurar y crear música en géneros específicos y componer o improvisar en el estilo de artistas específicos.

Sin embargo, a pesar del enorme potencial de los modelos de música, actualmente son difíciles de "promptear". La salida generada a menudo no es totalmente personalizable por los prompts, a diferencia de los modelos de generación de imágenes o texto.

## Riffusion

import riffusion from '@site/docs/assets/miscl/riffusion_phonk.webp';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}}/>
</div>

Riffusion (@Forsgren_Martiros_2022), una versión ajustada de Stable Diffusion, se puede controlar con prompts para generar instrumentos y estilos pseudo, pero tiene un número limitado de beats disponibles.

## Mubert

[Mubert](https://mubert.com/) parece interpretar los prompts a través del análisis de sentimientos que vincula los estilos musicales apropiados al prompt (no es posible controlar los parámetros musicales en detalle a través de prompts). No está claro cuánta de la generación resultante es hecha por IA.

## Otros

Hay intentos de usar GPT-3 como una herramienta Text-2-Music con prompting real para elementos musicales en el "micro-nivel" de notas (en lugar de las analogías de estilo de prompt bastante vagas que producen Mubert y Riffusion) (por ejemplo, `escribe las notas para una canción folclórica que solo use A, B, C#, F# y G`). Sin embargo, en la actualidad esos intentos están limitados a instrumentos individuales.

Otros enfoques incluyen una cadena de modelos que [convierte cualquier imagen en un sonido que lo representa](https://huggingface.co/spaces/fffiloni/img-to-music) y la generación de código de prompts para [bibliotecas de Python que crean sonido](https://twitter.com/teropa/status/1598713756074246145) con ChatGPT.

## Notas

La generación de música aún no está bien desarrollada... todavía. MusicLM parece prometedor, pero aún no está disponible para el público.
