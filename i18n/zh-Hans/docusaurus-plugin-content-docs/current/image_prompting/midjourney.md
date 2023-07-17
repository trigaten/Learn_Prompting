---
sidebar_position: 99
---
# 🟢 Midjourney

[Midjourney](https://www.midjourney.com) 是另一个 AI 图像生成器。与 Stable Diffusion 不同，Midjourney 使用 Discord Bot 作为 AI 图像生成的接口（[在此](https://discord.gg/midjourney)加入 Discord，或在 [Learn Prompting Discord](http://learnprompting.org/discord) 中尝试该 Bot）。不过，使用 Midjourney Bot 的遵循相同的图像提示基本原则。

import midjourney_astronaut from '@site/docs/assets/images_chapter/midjourney_astronaut.webp';
import midjourney_astronaut_params from '@site/docs/assets/images_chapter/midjourney_astronaut_params.webp';
import midjourney_astronaut_multi1 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi1.webp';
import midjourney_astronaut_multi2 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi2.webp';
import midjourney_astronaut_ip2 from '@site/docs/assets/images_chapter/midjourney_astronaut_ip2.webp';


# 基本用法

Midjourney 的基本结构是 `/imagine prompt: [IMAGE PROMPT] [--OPTIONAL PARAMETERS]`. 例如:

```text
/imagine prompt: astronaut on a horse
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "750px"}} />
</div>

更多关于图像提示参数的信息可以在这里找到：[Midjourney Documentation - Parameter List](https://docs.midjourney.com/docs/parameter-list)

例如:

```text
/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000 
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params} style={{width: "750px"}} />
</div>

# 进阶用法
## 多重提示
Midjourney 默认情况下会整体理解你的提示语。使用双冒号 :: 可以让 Midjourney 分别理解提示语的每个部分。例如：
```text
/imagine prompt: astronaut and horse
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi1} style={{width: "750px"}} />
</div>

```text
/imagine prompt: astronaut:: and horse
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi2} style={{width: "750px"}} />
</div>


## 图像提示
通过将一个图片上传到 Discord，并在提示语中使用它的 URL，你可以指示 Midjourney 使用该图片来影响你的结果的内容、样式和构成。例如：
[Astronaut (Source: Wikipedia)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).webp)

```text
/imagine prompt: [image URL], impressionist painting
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_ip2} style={{width: "750px"}} />
</div>

## Notes

Needs more content!