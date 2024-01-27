---
sidebar_position: 4
---
# 🟢 樣式修飾符

樣式修飾符是一些能夠產生特定樣式的描述符（例如，“帶有紅色色調”、“玻璃製成”、“用 Unity 渲染”）(@oppenlaender2022taxonomy)。它們可以組合在一起，產生更具體的樣式。它們可以“包括關於藝術時期、流派和風格，以及藝術材料和媒介、技術和藝術家(@oppenlaender2022taxonomy)”的資訊。

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import red_pyramids from '@site/docs/assets/images_chapter/red_pyramids.webp';

# 例子

以下是用 DALLE 生成的一些金字塔，使用這個提示語 `pyramid`。

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}}/>
</div>

另外一些使用 DALLE 生成的金字塔，使用 3 個不同樣式修飾符的提示語 `A pyramid made of glass, rendered in Unity and tinted red`。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={red_pyramids} style={{width: "750px"}} />
</div>

這是一些有用的樣式修飾符列表：

```text
photorealistic, by greg rutkowski, by christopher nolan, painting, digital painting, concept art, octane render, wide lens, 3D render, cinematic lighting, trending on ArtStation, trending on CGSociety, hyper realist, photo, natural light, film grain
```

## 註釋

Oppenlaender(@oppenlaender2022taxonomy) 等人將`rendered in ...` 的描述符稱為質量增強器，但是我們的工作定義有所不同，因為該修飾符確實會一致地產生特定的 Unity（或其他渲染引擎）樣式。因此，我們將該描述符稱為樣式修飾符。
