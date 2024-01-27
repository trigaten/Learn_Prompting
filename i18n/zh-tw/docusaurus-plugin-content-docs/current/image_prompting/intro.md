---
sidebar_position: 1
---

# 🟢 介紹

如何找到最佳的提示詞來生成完美的圖片是一項特殊的挑戰。與文字提示相比，研究如何做到這一點的方法並沒有那麼成熟。這可能是因為建立物件自身的挑戰，這些物件基本上是主觀的並且往往缺乏良好的準確性度量方法。但不要擔心，社群(@parsons2022dalleprompt)已經對如何提示各種影象模型(@rombach2021highresolution)(@ramesh2022hierarchical)有了很大的進展。

本指南涵蓋了基本的影象提示技術，並且我們強烈建議您檢視本章末尾的優秀資源。此外，我們還提供了一個端到端影象提示過程的示例。

## 例子

這裡，我將透過一個例子說明我是如何為這門課程的封面建立圖片的。之前我一直在進行一個深度強化學習神經輻射場專案，使用了低多邊形模型，我很喜歡這種低多邊形的風格，並且想在這個課程的封面圖片中使用它。

我想要在封面圖片上展示一個宇航員、一枚火箭和一臺電腦。

我對如何建立低多邊形圖片進行了大量研究，包括在 [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) 和其他網站上查詢，但沒有找到非常有用的資訊。

於是我決定從 DALLE 和提示語 `Low poly white and blue rocket shooting to the moon in front of a sparse green meadow` 開始嘗試，看看會發生什麼。

import rockets1 from '@site/docs/assets/images_chapter/rockets_dalle_1.webp';
import rockets2 from '@site/docs/assets/images_chapter/rockets_dalle_2.webp';
import computer_1 from '@site/docs/assets/images_chapter/computer_dalle_1.webp';
import astronaut_1 from '@site/docs/assets/images_chapter/astronaut_dalle_1.webp';
import astronaut_2 from '@site/docs/assets/images_chapter/astronaut_sd_1.webp';
import rocket_sd_1 from '@site/docs/assets/images_chapter/rocket_sd_1.webp';
import rocket_final from '@site/static/img/rocket.webp';
import laptop_sd_1 from '@site/docs/assets/images_chapter/laptop_sd_1.webp';
import gemstone_sd_1 from '@site/docs/assets/images_chapter/gemstone_sd_1.webp';
import gemstone_sd_2 from '@site/docs/assets/images_chapter/gemstone_sd_2.webp';
import gemstone_sd_3 from '@site/docs/assets/images_chapter/gemstone_sd_3.webp';
import focus_final from '@site/static/img/computer.webp';
import astronaut_final from '@site/static/img/astronaut.webp';

<div style={{textAlign: 'center'}}>
  <img src={rockets1} style={{width: "750px"}}/>
</div>


<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rockets2} style={{width: "750px"}} />
</div>

我認為這些結果對於第一次嘗試來說是非常不錯的，我特別喜歡左下角的火箭。


接下來，我想要生成同樣風格的一臺電腦: `Low poly white and blue computer sitting in a sparse green meadow`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={computer_1} style={{width: "750px"}} />
</div>

最後，我想要一個宇航員！`Low poly white and blue astronaut sitting in a sparse green meadow with low poly mountains in the background` 看起來很奏效。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_1} style={{width: "750px"}} />
</div>

我認為第二張圖還不錯。

現在我有了一個宇航員、一個火箭和一個電腦。我對它們很滿意，所以我把它們放在了主頁上。幾天後，經過我的朋友們的反饋，我意識到這些圖片的風格不夠一致 😔。

我在 [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) 上做了更多的研究，發現人們在使用 “isometric” 這個詞。我決定嘗試一下這種風格，使用 Stable Diffusion 而不是 DALLE。我還意識到需要在我的提示語中增加更多的修飾語來約束風格。於是我嘗試了這個提示語：
`A low poly world, with an astronaut in white suit and blue visor sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_2} style={{width: "250px"}} />
</div>

這些結果不是很好，所以我決定先從「火箭」入手

`A low poly world, with a white and blue rocket blasting off from a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_sd_1} style={{width: "250px"}} />
</div>

這些結果並不是特別好，但在進行了一些嘗試之後，我最終得到了下面的影象

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_final} style={{width: "250px"}} />
</div>

現在我想要一個更好的膝上型電腦

`A low poly world, with a white and blue laptop sitting in sparse green meadow with low poly mountains in the background. The screen is completely blue. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={laptop_sd_1} style={{width: "250px"}} />
</div>

我得到的結果不太一致；雖然我喜歡右下角的那個影象，但我決定走另外一條路線。

`A low poly world, with a glowing white and blue gemstone sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_1} style={{width: "250px"}} />
</div>

這不是很對，讓我們嘗試一下魔幻的發光效果。

`A low poly world, with a glowing white and blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_2} style={{width: "250px"}} />
</div>

我喜歡這些影象，但是希望石頭在螢幕的中間。

`A low poly world, with a glowing blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_3} style={{width: "250px"}} />
</div>

在這個階段，我使用了 Stable Diffusion，讓之前的圖片對後續的圖片產生一些影響。於是我得到了以下結果：

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={focus_final} style={{width: "250px"}} />
</div>

最終，我得到了這個。

`A low poly world, with an astronaut in white suite and blue visor is sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_final} style={{width: "250px"}} />
</div>

在這一點上，我對我的三張圖片之間的風格一致性感到滿意，可以在網站上使用它們了。對我來說，主要的收穫是這是一個非常反覆、不斷研究的過程，我必須根據不同的提示和模型進行實驗，調整我的期望和想法。
