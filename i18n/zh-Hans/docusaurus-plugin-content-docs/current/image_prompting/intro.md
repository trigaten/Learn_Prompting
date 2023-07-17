---
sidebar_position: 1
---

# 🟢 介绍

如何找到最佳的提示词来生成完美的图片是一项特殊的挑战。与文本提示相比，研究如何做到这一点的方法并没有那么成熟。这可能是因为创建对象自身的挑战，这些对象基本上是主观的并且往往缺乏良好的准确性度量方法。但不要担心，社区(@parsons2022dalleprompt)已经对如何提示各种图像模型(@rombach2021highresolution)(@ramesh2022hierarchical)有了很大的进展。

本指南涵盖了基本的图像提示技术，并且我们强烈建议您查看本章末尾的优秀资源。此外，我们还提供了一个端到端图像提示过程的示例。

## 例子

这里，我将通过一个例子说明我是如何为这门课程的封面创建图片的。之前我一直在进行一个深度强化学习神经辐射场项目，使用了低多边形模型，我很喜欢这种低多边形的风格，并且想在这个课程的封面图片中使用它。

我想要在封面图片上展示一个宇航员、一枚火箭和一台电脑。

我对如何创建低多边形图片进行了大量研究，包括在 [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) 和其他网站上查找，但没有找到非常有用的信息。

于是我决定从 DALLE 和提示语 `Low poly white and blue rocket shooting to the moon in front of a sparse green meadow` 开始尝试，看看会发生什么。

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
  <img src={rockets1} style={{width: "750px"}} />
</div>


<div style={{textAlign: 'center'}}>
  <img src={rockets2} style={{width: "750px"}} />
</div>

我认为这些结果对于第一次尝试来说是非常不错的，我特别喜欢左下角的火箭。


接下来，我想要生成同样风格的一台电脑: `Low poly white and blue computer sitting in a sparse green meadow`

<div style={{textAlign: 'center'}}>
  <img src={computer_1} style={{width: "750px"}} />
</div>

最后，我想要一个宇航员！`Low poly white and blue astronaut sitting in a sparse green meadow with low poly mountains in the background` 看起来很奏效。

<div style={{textAlign: 'center'}}>
  <img src={astronaut_1} style={{width: "750px"}} />
</div>

我认为第二张图还不错。

现在我有了一个宇航员、一个火箭和一个电脑。我对它们很满意，所以我把它们放在了主页上。几天后，经过我的朋友们的反馈，我意识到这些图片的风格不够一致 😔。

我在 [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) 上做了更多的研究，发现人们在使用 “isometric” 这个词。我决定尝试一下这种风格，使用 Stable Diffusion 而不是 DALLE。我还意识到需要在我的提示语中增加更多的修饰语来约束风格。于是我尝试了这个提示语：
`A low poly world, with an astronaut in white suit and blue visor sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <img src={astronaut_2} style={{width: "250px"}} />
</div>

这些结果不是很好，所以我决定先从「火箭」入手

`A low poly world, with a white and blue rocket blasting off from a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <img src={rocket_sd_1} style={{width: "250px"}} />
</div>

这些结果并不是特别好，但在进行了一些尝试之后，我最终得到了下面的图像

<div style={{textAlign: 'center'}}>
  <img src={rocket_final} style={{width: "250px"}} />
</div>

现在我想要一个更好的笔记本电脑

`A low poly world, with a white and blue laptop sitting in sparse green meadow with low poly mountains in the background. The screen is completely blue. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <img src={laptop_sd_1} style={{width: "250px"}} />
</div>

我得到的结果不太一致；虽然我喜欢右下角的那个图像，但我决定走另外一条路线。

`A low poly world, with a glowing white and blue gemstone sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_1} style={{width: "250px"}} />
</div>

这不是很对，让我们尝试一下魔幻的发光效果。

`A low poly world, with a glowing white and blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_2} style={{width: "250px"}} />
</div>

我喜欢这些图像，但是希望石头在屏幕的中间。

`A low poly world, with a glowing blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_3} style={{width: "250px"}} />
</div>

在这个阶段，我使用了 Stable Diffusion，让之前的图片对后续的图片产生一些影响。于是我得到了以下结果：

<div style={{textAlign: 'center'}}>
  <img src={focus_final} style={{width: "250px"}} />
</div>

最终，我得到了这个。

`A low poly world, with an astronaut in white suite and blue visor is sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <img src={astronaut_final} style={{width: "250px"}} />
</div>

在这一点上，我对我的三张图片之间的风格一致性感到满意，可以在网站上使用它们了。对我来说，主要的收获是这是一个非常反复、不断研究的过程，我必须根据不同的提示和模型进行实验，调整我的期望和想法。
