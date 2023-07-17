---
sidebar_position: 5
---
# 🟢 质量增强器

“Quality boosters”(@oppenlaender2022taxonomy)是添加到提示中以提高生成图像的某些非特定样式质量的术语。例如，“amazing”、“beautiful”和“good quality”都是质量增强器，可以用于改善生成图像的质量。

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import special_pyramids from '@site/docs/assets/images_chapter/special_pyramids.webp';

# 例子

回想一下前面一页中使用 DALLE 生成的金字塔以及这个提示语 `pyramid`。

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}} />
</div>

现在看一下用这个提示生成的金字塔:
`A beautiful, majestic, incredible pyramid, 4K`

<div style={{textAlign: 'center'}}>
  <img src={special_pyramids} style={{width: "750px"}} />
</div>

它们更为栩栩如生以及令人印象深刻！

这里列出了一些质量增强器:
```text
High resolution, 2K, 4K, 8K, clear, good lighting, detailed, extremely detailed, sharp focus, intricate, beautiful, realistic+++, complementary colors, high quality, hyper detailed, masterpiece, best quality, artstation, stunning
```

## 注释

与前一页上的注释类似，我们对质量增强器的工作定义与 Oppenlaender 等人(@oppenlaender2022taxonomy)不同。尽管如此，有时很难准确区分质量增强器和样式修饰符。
