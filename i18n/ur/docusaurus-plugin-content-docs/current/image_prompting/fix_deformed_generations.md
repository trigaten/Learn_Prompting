---
sidebar_position: 90
---
# 🟢 Fix Deformed Generations

Deformed generations, particularly on human body parts (e.g. hands, feet), are a common issue with many models. This can be dealt with to some extent with good negative prompts(@blake2022with). The following example is adapted from [this Reddit post](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/).

## Example

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.webp';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.webp';

Using Stable Diffusion v1.5 and the following prompt, we generate a nice image of Brad Pitt, except for his hands of course!

<AIInput>studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6</AIInput>

<div style={{textAlign: 'center'}}>
  <img src={bad_pitt} className="img-docs"  style={{width: "250px"}}/>
</div>

Using a robust negative prompt, we can generate much more convincing hands.

<AIInput>studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6 | disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5</AIInput>
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_pitt} style={{width: "250px"}} />
</div>

Using a similar negative prompt can help with other body parts as well. Unfortunately, this technique is not consistent, so you may need to attempt multiple generations
before getting a good result.
In the future, this type of prompting should be unnecessary since models will improve. 
However, currently it is a very useful technique.


# Notes

Improved models such as [Protogen](https://civitai.com/models/3666/protogen-x34-official-release) are often better with hands, feet, etc.