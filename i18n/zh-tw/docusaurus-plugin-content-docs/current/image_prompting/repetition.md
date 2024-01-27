---
sidebar_position: 50
---
# 🟢 重複

在提示中重複相同的詞語或者類似短語會導致模型在生成的圖片中強調該詞語。例如，[@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) 使用 DALLE 生成了這些瀑布：

import bad_water from '@site/docs/assets/images_chapter/bad_water.webp';
import good_water from '@site/docs/assets/images_chapter/good_water.webp';
import planet from '@site/docs/assets/images_chapter/planet.webp';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.webp';


`A beautiful painting of a mountain next to a waterfall.`.

<div style={{textAlign: 'center'}}>
  <img src={bad_water} style={{width: "750px"}}/>
</div>

`A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_water} style={{width: "750px"}} />
</div>

強調詞 "very" 似乎可以提高生成質量！重複也可用於強調主題。例如，如果你想生成一張有外星人的星球圖片，使用提示語 `A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens` 將使得結果圖片中出現外星人的可能性更大。下面的圖片是使用 Stable Diffusion 生成的。

`A planet with aliens`
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet} style={{width: "250px"}} />
</div>

`A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet_aliens} style={{width: "250px"}} />
</div>

## 註釋

這種方法並不完美，使用權重（下一篇文章）通常是一個更好的選擇。
