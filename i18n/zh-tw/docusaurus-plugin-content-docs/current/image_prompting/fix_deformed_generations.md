---
sidebar_position: 90
---
# 🟢 修復變形生成

變形生成在許多模型中都是一個常見問題，特別是在人體部位（如手、腳）上。透過良好的反向提示語(@blake2022with)，可以在一定程度上解決這個問題。以下示例來自於[這篇Reddit帖子](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/)。

## 例子

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.webp';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.webp';

使用 Stable Diffusion v1.5 和下面的提示語，我們生成了一張不錯的 Brad Pitt 影象，當然除了他的手！

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6`

<div style={{textAlign: 'center'}}>
  <img src={bad_pitt} style={{width: "250px"}}/>
</div>

使用強大的反向提示語，我們可以生成更加逼真的手部影象。

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6 | disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5`
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_pitt} style={{width: "250px"}} />
</div>

使用類似的反向提示語也可以幫助處理其他身體部位。不幸的是，這個技術並不是一直奏效，因此您可能需要多次嘗試才能獲得滿意的結果。 未來，這種提示技術應該是不必要的，因為模型會不斷改進。然而，目前這是一種非常有用的技術。

# 註釋

改進的模型，如 [Protogen](https://civitai.com/models/3666/protogen-x34-official-release)  ，通常在處理手、腳等部位時表現更好。
