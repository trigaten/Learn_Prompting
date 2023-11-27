---
sidebar_position: 105
---
# 🟢 理解人工智慧思維

import Brain from '@site/docs/assets/basics/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- 有許多不同類型的人工智慧
- LLM 如何運作的基礎知識
:::

你好，恭喜你完成了基礎介紹章節。你在這個非常令人興奮的領域有了一個很好的開端。在繼續閱讀本課程的其餘部分之前，有幾件簡單的事情你應該知道，關於不同的人工智慧及其工作原理。

import music_image from '@site/docs/assets/basics/music+image.webp';

<div style={{textAlign: 'center'}}>
  <img src={music_image} style={{width: "850px"}}/>
</div>

<div style={{textAlign: 'center'}}>
  從影像生成音訊
</div>

## 不同的人工智慧

在現在的世界上存在著成千上萬，甚至可能有數百萬個人工智慧。有些可能要比另一些優秀。不同的人工智慧可以生成[影像](https://openai.com/product/dall-e-2)、[音樂](https://google-research.github.io/seanet/musiclm/examples/)、[文字](https://platform.openai.com/playground)，甚至[影片](https://makeavideo.studio/)。請注意，這些都是*生成式*人工智慧，基本上是*創造*東西的人工智慧。還有*用於判別的*人工智慧，即*分類*事物的人工智慧。例如，你可以使用影像分類器來確定一張圖片是貓還是狗。在本課程中，我們不會使用任何判別人工智慧。

目前僅有少數生成式人工智慧足夠先進，可以利用提示工程來取得好的成果。在本課程中，我們主要使用 GPT-3.5-Turbo 和 ChatGPT。正如我們在上一頁中提到的那樣，ChatGPT 是一個聊天機器人，而 GPT-3-Turbo 不是。它們通常在回答相同問題時會產生不同的響應。如果你是開發人員，我建議使用 GPT-3.5-Turbo，因為它更可復現的。如果你不是開發人員，我建議使用[ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting)，因為它更易於使用。本課程中的大多數技術都可以應用於這兩個人工智慧。然而，其中一些技術只適用於 GPT-3.5-Turbo，因此如果你想使用本課程中的所有技術的話，我們鼓勵你使用 GPT-3.5-Turbo。

在影像生成部分，我們還將使用 [Stable Diffusion](https://beta.dreamstudio.ai/home) 和 [DALLE](https://openai.com/product/dall-e-2)。在[這裡](https://learnprompting.org/docs/products#chatbots)可以檢視更多相關的人工智慧。


## 人工智慧是如何工作的呢？

本節介紹了流行的生成式**文字**人工智慧的方面。這些人工智慧的大腦由數十億個人工神經元組成。這些神經元的結構被稱為 transformer 架構，它是一種相當複雜的神經網路型別。你需要了解的是：

1. 這些人工智慧只是數學函式。它們更像是**f(成千上萬的變數) = 成千上萬種可能的輸出**，而不是 $f(x) = x^2$ 這樣的簡單函式。
2. 這些人工智慧透過將句子分解成稱為令牌（tokens）的單詞/子單詞（例如，AI 可能將 “I don't like” 作為 “"I", "don", "'t" "like"”）（譯註：由於中文 token 化的表現形式和英文並不完全相同，這裡保持英文範例，感興趣的同學可以在 OpenAI 提供的[線上工具](https://platform.openai.com/tokenizer)自行體驗）來理解句子。然後，每個標記都被轉換為一組數字，以便人工智慧進行處理。
3. 這些人工智慧根據前面的單詞/標記預測句子中的下一個單詞/標記（例如，人工智慧可能會在 “I don't like” 後面預測 “apples”）。它們寫下的每個令牌都基於它們以前看到和寫下的令牌；每次它們寫下一個新令牌時，它們都會停下來思考下一個令牌應該是什麼。
4. 這些人工智慧同時檢視每個令牌。它們不像人類那樣從左到右或從右到左閱讀。

請理解，“思考”、“大腦” 和 “神經元” 這些詞是擬人化的表述（zoomorphism），實際上是對模型所做的事情的比喻。這些模型並不真正思考，它們只是數學函式。它們不是真正的大腦，它們只是人工神經網路。它們不是真正的生物神經元，它們只是數字。

這是一個非常活躍的研究和哲學領域。這種描述與它們的本質相去甚遠，旨在緩和大眾媒體對人工智慧作為像人類一樣思考/行動的存在的描繪。話雖如此，如果你真的想擬人化人工智慧，那就去做吧！似乎大多數人都這樣做，這甚至可能有助於學習它們。

## 備註

- [d2l.ai](https://www.d2l.ai) 是瞭解人工智慧工作原理的好資源。

- 順便說一下，作者實際上是喜歡蘋果的。它們很好吃。
