---
sidebar_position: 5
---
# 🟢 質量增強器

“Quality boosters”(@oppenlaender2022taxonomy)是新增到提示中以提高生成影象的某些非特定樣式質量的術語。例如，“amazing”、“beautiful”和“good quality”都是質量增強器，可以用於改善生成影象的質量。

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import special_pyramids from '@site/docs/assets/images_chapter/special_pyramids.webp';

# 例子

回想一下前面一頁中使用 DALLE 生成的金字塔以及這個提示語 `pyramid`。

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}}/>
</div>

現在看一下用這個提示生成的金字塔:
`A beautiful, majestic, incredible pyramid, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={special_pyramids} style={{width: "750px"}} />
</div>

它們更為栩栩如生以及令人印象深刻！

這裡列出了一些質量增強器:
```text
High resolution, 2K, 4K, 8K, clear, good lighting, detailed, extremely detailed, sharp focus, intricate, beautiful, realistic+++, complementary colors, high quality, hyper detailed, masterpiece, best quality, artstation, stunning
```

## 註釋

與前一頁上的註釋類似，我們對質量增強器的工作定義與 Oppenlaender 等人(@oppenlaender2022taxonomy)不同。儘管如此，有時很難準確區分質量增強器和樣式修飾符。
