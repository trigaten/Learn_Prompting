---
sidebar_position: 50
---
# 🟢 重复

在提示中重复相同的词语或者类似短语会导致模型在生成的图片中强调该词语。例如，[@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) 使用 DALLE 生成了这些瀑布：

import bad_water from '@site/docs/assets/images_chapter/bad_water.webp';
import good_water from '@site/docs/assets/images_chapter/good_water.webp';
import planet from '@site/docs/assets/images_chapter/planet.webp';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.webp';


`A beautiful painting of a mountain next to a waterfall.`.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={bad_water} style={{width: "750px"}} />
</div>

`A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_water} style={{width: "750px"}} />
</div>

强调词 "very" 似乎可以提高生成质量！重复也可用于强调主题。例如，如果你想生成一张有外星人的星球图片，使用提示语 `A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens` 将使得结果图片中出现外星人的可能性更大。下面的图片是使用 Stable Diffusion 生成的。

`A planet with aliens`
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet} style={{width: "250px"}} />
</div>

`A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet_aliens} style={{width: "250px"}} />
</div>

## 注释

这种方法并不完美，使用权重（下一篇文章）通常是一个更好的选择。
