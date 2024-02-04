---
sidebar_position: 10
---

# 🟢 使用 ChatGPT 進行提示

import Interface from '@site/docs/assets/basics/chatgpt_interface.webp';

<div style={{textAlign: 'center'}}>
  <img src={Interface} className="img-docs" style={{width: "80%"}}/>
</div>
<br/>

:::takeaways 本文要點

- 設定 ChatGPT
- 使用 ChatGPT 對文字進行摘要並解決數學問題

:::

在上一章中，我們討論了 AI 以及人類如何指導 AI 來執行任務。使用提示詞(prompt)來指導 AI 執行任務的過程稱為提示（prompting）(@shin2020autoprompt)。我們將使用 [ChatGPT](http://chat.openai.com)[^a] 來探索提示。ChatGPT 是一個非常受歡迎的大語言模型(%%LLM|LLM%%)，由 OpenAI 開發，它能夠理解和生文字，是目前是最易用的生成式 AI 且使用完全免費。

## 設定 ChatGPT

遵循以下步驟以開始使用 ChatGPT:

1. 在瀏覽器中開啟 [http://chat.openai.com](http://chat.openai.com)。
2. 如果您還沒有 OpenAI 賬戶，請按照指示註冊一個新賬戶。
3. 使用您建立的 OpenAI 賬戶登入。

這個影片向你展示瞭如何設定 ChatGPT.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FMEzy2jo84c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

## 在 ChatGPT 上測試提示

現在我們已經設定好了 ChatGPT，讓我們來測試一些提示吧。

#### 1) 草的顏色

我們從一個非常簡單的問題開始：ChatGPT 能告訴我們草的顏色嗎？

<AIInput>
草是什麼顏色？
</AIInput>

<AIOutput>
草一般是綠色的。
</AIOutput>

確實可以，現在讓我們嘗試一個更實用的例子。

#### 2) 摘要文章

假設你正在閱讀一篇關於佛羅里達州下雪的文章。你想快速瞭解文章的主要內容，所以你向 AI 展示你正在閱讀的內容，並要求它進行摘要[^b]:

<AIInput>
佛羅里達州很少下雪，特別是中部和南部地區。除了該州北部的一些地區，大部分佛羅里達州的主要城市從未記錄到可測量的降雪，儘管偶爾會記錄到零星的微量降雪，或者每個世紀觀察到幾次雪花飄落。根據國家氣象局的資料顯示，在佛羅里達群島和基韋斯特群島地區，自歐洲殖民以來的 300 多年，沒有發現過降雪的情況。邁阿密、勞德代爾堡和棕櫚灘地區在 200 多年的歷史中只有一次觀測到雪花，這發生在 1977 年的一月份。然而，自從 1977 年以來，邁阿密、勞德代爾堡和棕櫚灘地區再也沒有觀測到雪花。

用一句話總結這個段落：
</AIInput>

以下是 ChatGPT 的回覆，它更加簡潔！

<AIOutput>
佛羅里達州很少下雪，除了極北部地區外，邁阿密、勞德代爾堡和棕櫚灘這幾個主要城市，在過去的 200 年中僅有一次記錄到雪花飄落在空中。
</AIOutput>

:::caution 注意

你可能會看到輸出結果的細微差異。在本課程中的大多數提示中都會出現這樣的情況。我們將在本模組的後面學習原因。

:::

#### 3) 解決數學問題

ChatGPT 還可以解決數學問題！讓我們給它一個簡單的問題來進行提示。

<AIInput>
如果我有 20 個蘋果，吃掉 3 個，然後再賣掉 3 個，我還剩下多少個蘋果？
</AIInput>

<AIOutput>
如果你有 20 個蘋果，吃掉其中 3 個，你就會剩下 20 - 3 = 17 個蘋果。

在吃掉三個蘋果之後（剩下 17 個），如果你再賣掉三個蘋果，你就會剩下 17 - 3 = 14 個蘋果。
</AIOutput>

## 總結

現在，您應該對 %%prompt|prompt%% 是什麼以及如何使用 ChatGPT 進行基本提示有所瞭解。

請記住，_提示(prompt)_ 可以是一個動詞或一個名詞。你可以 _提示(prompt)_ 一個模型，也可以 _給模型一個提示_。這兩個短語的意思是相同的。給模型一個提示的行為被稱為 prompting（提示）。我們將在下一課中學習更多關於 prompting 的內容。

[^a]: GPT-4 是 OpenAI 開發的另一個更高階的模型，但需要付費。
[^b]: 這個段落來自 https://en.wikipedia.org/wiki/Snow_in_Florida
