---
sidebar_position: 60
---

# 🟢 加權

一些模型（如 Stable Diffusion、Midjourney 等）允許你對提示中的詞語進行加權。這可以用於強調生成圖片中的某些詞語或短語。它還可以用於減弱生成的圖片中某些詞語或短語的影響。讓我們考慮一個簡單的例子：

import mountains from '@site/docs/assets/images_chapter/mountains.webp';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.webp';
import planets from '@site/docs/assets/images_chapter/planets.webp';

# 例子

這是透過 Stable Diffusion 生成的一些山，提示語是 `mountain`。

<div style={{textAlign: 'center'}}>
  <img src={mountains} style={{width: "350px"}}/>
</div>

然而，如果我們想得到沒有樹的山，我們可以使用提示語 `mountain | tree:-10`。因為我們把樹的權重設定為負數，所以它們不會出現在生成的圖片中。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains_no_trees} style={{width: "350px"}} />
</div>

加權項可以組合成更復雜的提示語，比如 
`A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planets} style={{width: "350px"}} />
</div>

## 註釋

閱讀本章末尾的一些資源，瞭解有關加權的更多資訊。
