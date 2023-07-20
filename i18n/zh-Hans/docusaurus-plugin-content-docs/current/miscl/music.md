---
sidebar_position: 3
---

# 🟢 音乐生成

音乐生成模型越来越受欢迎，将最终对音乐产业产生巨大影响。

音乐生成模型可以创作和生成和弦、旋律或完整歌曲，它们可以按特定类型构造和创建音乐，并以特定艺术家的风格进行作曲或即兴演奏。

然而，尽管音乐模型的潜力巨大，但目前难以进行详细的提示，生成的输出通常不像图像或文本生成模型那样可以进行彻底的自定义。

## Riffusion
import riffusion from '@site/docs/assets/miscl/riffusion_phonk.webp';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}}/>
</div>

Riffusion（@Forsgren_Martiros_2022）是 Stable Diffusion 的精细调整版本，可以通过提示进行控制，生成乐器和伪风格，但拥有的节拍数量有限。

## Mubert

[Mubert](https://mubert.com/) 似乎通过情感分析来解释提示，并将适当的音乐风格与提示相关联（无法通过提示详细控制音乐参数）。目前尚不清楚多少结果是由 AI 完成的。

## 其他

有尝试将 GPT-3 作为 Text-2-Music 工具，并进行实际提示以获取音乐元素的“微观”级别（而不是 mubert & riffusion 产生的相当模糊的提示样式类比）（例如，`写一个只使用 A、B、C＃、F＃和 G 的民歌曲目的音符`）。但是，目前这些尝试仅限于单个乐器。

其他方法包括模型链，[将任何图像转换为代表其的声音](https://huggingface.co/spaces/fffiloni/img-to-music)，以及提示 ChatGPT 生成[创建声音的 Python 库](https://twitter.com/teropa/status/1598713756074246145)的代码。

## 备注

音乐提示功能尚未完全发展...... MusicLM 看起来很有前途，但尚未向公众开放。