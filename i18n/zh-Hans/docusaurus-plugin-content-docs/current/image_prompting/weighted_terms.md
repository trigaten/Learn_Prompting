---
sidebar_position: 60
---

# 🟢 加权

一些模型（如 Stable Diffusion、Midjourney 等）允许你对提示中的词语进行加权。这可以用于强调生成图片中的某些词语或短语。它还可以用于减弱生成的图片中某些词语或短语的影响。让我们考虑一个简单的例子：

import mountains from '@site/docs/assets/images_chapter/mountains.webp';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.webp';
import planets from '@site/docs/assets/images_chapter/planets.webp';

# 例子

这是通过 Stable Diffusion 生成的一些山，提示语是 `mountain`。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains} style={{width: "350px"}} />
</div>

然而，如果我们想得到没有树的山，我们可以使用提示语 `mountain | tree:-10`。因为我们把树的权重设置为负数，所以它们不会出现在生成的图片中。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains_no_trees} style={{width: "350px"}} />
</div>

加权项可以组合成更复杂的提示语，比如 
`A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planets} style={{width: "350px"}} />
</div>

## 注释

阅读本章末尾的一些资源，了解有关加权的更多信息。
