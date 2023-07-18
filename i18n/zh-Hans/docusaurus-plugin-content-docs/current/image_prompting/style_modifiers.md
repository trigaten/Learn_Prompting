---
sidebar_position: 4
---
# 🟢 样式修饰符

样式修饰符是一些能够产生特定样式的描述符（例如，“带有红色色调”、“玻璃制成”、“用 Unity 渲染”）(@oppenlaender2022taxonomy)。它们可以组合在一起，产生更具体的样式。它们可以“包括关于艺术时期、流派和风格，以及艺术材料和媒介、技术和艺术家(@oppenlaender2022taxonomy)”的信息。

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import red_pyramids from '@site/docs/assets/images_chapter/red_pyramids.webp';

# 例子

以下是用 DALLE 生成的一些金字塔，使用这个提示语 `pyramid`。

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}} />
</div>

另外一些使用 DALLE 生成的金字塔，使用 3 个不同样式修饰符的提示语 `A pyramid made of glass, rendered in Unity and tinted red`。

<div style={{textAlign: 'center'}}>
  <img src={red_pyramids} style={{width: "750px"}} />
</div>

这是一些有用的样式修饰符列表：

```text
photorealistic, by greg rutkowski, by christopher nolan, painting, digital painting, concept art, octane render, wide lens, 3D render, cinematic lighting, trending on ArtStation, trending on CGSociety, hyper realist, photo, natural light, film grain
```

## 注释

Oppenlaender(@oppenlaender2022taxonomy) 等人将`rendered in ...` 的描述符称为质量增强器，但是我们的工作定义有所不同，因为该修饰符确实会一致地产生特定的 Unity（或其他渲染引擎）样式。因此，我们将该描述符称为样式修饰符。
