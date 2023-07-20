---
sidebar_position: 3
---

# 🟢 Music Generation

Music generation models are becoming increasingly popular, and will eventually have a large impact on the music industry. 

Music generation models can create chord progressions, melodies, or full songs. They can structure and create music in specific genres and compose or improvise in the style of specific artists.

However, despite the enormous potential of music models, they are currently difficult to prompt. Generated output is often not thoroughly customizable by prompts, unlike image or text generation models.

## Riffusion
import riffusion from '@site/docs/assets/miscl/riffusion_phonk.webp';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}}/>
</div>

Riffusion(@Forsgren_Martiros_2022), a fine tuned version of Stable Diffusion, can be controlled with prompts to generate instruments and pseudo styles, but it has a limited number of beats available.

## Mubert

[Mubert](https://mubert.com/) seems to interpret prompts through sentiment analysis that links appropriate musical stylistics to the prompt (controlling the musical parameters in detail via prompts is not possible). It is unclear how much of the resultant generation is done by AI.

## Other

There are attempts to use GPT-3 as a Text-2-Music tool with actual prompting for musical elements on the "micro-level" of notes (instead of the rather vague prompt-style-analogies mubert & riffusion produce) (e.g. `write the notes for a folk song that only uses A, B, C#, F#, and G`). However, at present those attempts are limited to single instruments.

Other approaches include a model chain that [converts any image into sound that represents it](https://huggingface.co/spaces/fffiloni/img-to-music) and prompting ChatGPT to generate code for [Python libraries that create sound](https://twitter.com/teropa/status/1598713756074246145).

## Notes

Music prompting is not well built out... yet. MusicLM looks promising, but it is not yet available to the public.
