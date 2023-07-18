---
sidebar_position: 50
---

# 🟢 Repetition

Repeating the same word within a prompt, or similar phrases can cause the model to emphasize that word in the generated image(@oppenlaender2022taxonomy). For example, [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) generated these waterfalls with DALLE:

import bad_water from '@site/docs/assets/images_chapter/bad_water.webp';
import good_water from '@site/docs/assets/images_chapter/good_water.webp';
import planet from '@site/docs/assets/images_chapter/planet.webp';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.webp';


`A beautiful painting of a mountain next to a waterfall.`.

<div style={{textAlign: 'center'}}>
  <img src={bad_water} style={{width: "750px"}} />
</div>

`A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.`

<div style={{textAlign: 'center'}}>
  <img src={good_water} style={{width: "750px"}} />
</div>

The emphasis on the word `very` seems to improve generation quality! Repetition can also be used to emphasize subject terms. For example, if you want to generate an image of a planet with aliens, using the prompt `A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens` will make it more likely that aliens are in the resultant image. The following images are made with Stable Diffusion.

``
<div style={{textAlign: 'center'}}>
  <img src={planet} style={{width: "250px"}} />
</div>

`A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`

<div style={{textAlign: 'center'}}>
  <img src={planet_aliens} style={{width: "250px"}} />
</div>

## Notes

This method is not perfect, and using weights (next article) is often a better option.