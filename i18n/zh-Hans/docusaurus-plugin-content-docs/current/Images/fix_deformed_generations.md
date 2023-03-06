---
sidebar_position: 90
---
# 🟢 修复变形生成

变形生成在许多模型中都是一个常见问题，特别是在人体部位（如手、脚）上。通过良好的反向提示语(@blake2022with)，可以在一定程度上解决这个问题。以下示例来自于[这篇Reddit帖子](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/)。

## 例子

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.png';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.png';

使用 Stable Diffusion v1.5 和下面的提示语，我们生成了一张不错的 Brad Pitt 图像，当然除了他的手！

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6`

<div style={{textAlign: 'center'}}>
  <img src={bad_pitt} style={{width: "250px"}} />
</div>

使用强大的反向提示语，我们可以生成更加逼真的手部图像。

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6 | disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5`
<div style={{textAlign: 'center'}}>
  <img src={good_pitt} style={{width: "250px"}} />
</div>

使用类似的反向提示语也可以帮助处理其他身体部位。不幸的是，这个技术并不是一直奏效，因此您可能需要多次尝试才能获得满意的结果。 未来，这种提示技术应该是不必要的，因为模型会不断改进。然而，目前这是一种非常有用的技术。

# 注释

改进的模型，如 [Protogen](https://civitai.com/models/3666/protogen-x34-official-release)  ，通常在处理手、脚等部位时表现更好。
