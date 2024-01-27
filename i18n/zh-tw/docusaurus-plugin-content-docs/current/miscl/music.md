---
sidebar_position: 3
---

# 🟢 音樂生成

音樂生成模型越來越受歡迎，將最終對音樂產業產生巨大影響。

音樂生成模型可以創作和生成和絃、旋律或完整歌曲，它們可以按特定型別構造和建立音樂，並以特定藝術家的風格進行作曲或即興演奏。

然而，儘管音樂模型的潛力巨大，但目前難以進行詳細的提示，生成的輸出通常不像影象或文字生成模型那樣可以進行徹底的自定義。

## Riffusion
import riffusion from '@site/docs/assets/miscl/riffusion_phonk.webp';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}}/>
</div>

Riffusion（@Forsgren_Martiros_2022）是 Stable Diffusion 的精細調整版本，可以透過提示進行控制，生成樂器和偽風格，但擁有的節拍數量有限。

## Mubert

[Mubert](https://mubert.com/) 似乎透過情感分析來解釋提示，並將適當的音樂風格與提示相關聯（無法透過提示詳細控制音樂引數）。目前尚不清楚多少結果是由 AI 完成的。

## 其他

有嘗試將 GPT-3 作為 Text-2-Music 工具，並進行實際提示以獲取音樂元素的“微觀”級別（而不是 mubert & riffusion 產生的相當模糊的提示樣式類比）（例如，`寫一個只使用 A、B、C＃、F＃和 G 的民歌曲目的音符`）。但是，目前這些嘗試僅限於單個樂器。

其他方法包括模型鏈，[將任何影象轉換為代表其的聲音](https://huggingface.co/spaces/fffiloni/img-to-music)，以及提示 ChatGPT 生成[建立聲音的 Python 庫](https://twitter.com/teropa/status/1598713756074246145)的程式碼。

## 備註

音樂提示功能尚未完全發展...... MusicLM 看起來很有前途，但尚未向公眾開放。