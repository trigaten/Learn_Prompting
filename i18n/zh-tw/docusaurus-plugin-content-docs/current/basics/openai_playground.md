---
sidebar_position: 97
---

# 🟢 OpenAI Playground

import Playground from '@site/docs/assets/basics/openai_playground.webp';

<div style={{textAlign: 'center'}}>
    <img src={Playground} className="img-docs" style={{width: "80%"}}/>
</div>
<br/>

:::takeaways
- 設定 OpenAI Playground
- 了解基本的 Playground 配置
:::


除了 ChatGPT 網站之外，OpenAI 還提供了另一個介面進行提示。它被稱為 OpenAI Playground，讓您可以更好地控制 ChatGPT。它還允許您存取其他 AI，包括不同版本的 ChatGPT、GPT-4 和舊模型（如 GPT-3）。

:::note
OpenAI Playground 是本課程維護者最常使用的工具。
:::

## 開始設定

- 瀏覽 [http://platform.openai.com](http://platform.openai.com)
- 登入並開始測試提示！

或觀看這部影片:

<iframe width="560" height="315" src="https://www.youtube.com/embed/6OD14rpokRw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

## 介面

乍一看，這個介面看起來非常複雜。有許多下拉式選單和選項設定值滑桿可讓您配置模型。我們將在本影片中介紹系統提示、模式和型號選擇。我們將在下一課中介紹其餘內容。

### System Prompts

您可能注意到的第一件事是頁面左側的系統區域。到目前為止，我們已經看到了兩種類型的消息，`USER messages`（只是您發送給聊天機器人的訊息）和 `ASSISTANT messages`（聊天機器人的回應）。還有第三種類型的消息，即 `SYSTEM`，可用於配置 AI 的回應方式。這是放置啟動提示的最佳位置。

### Mode

import Mode from '@site/docs/assets/basics/openai_mode.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
    點選頁面右上角的 Mode 下拉式選單。此下拉清單可讓您變更正在使用的模型類型。 OpenAI 有三種不同的模式：<code>Chat</code>、<code>Complete</code> 和 <code>Edit</code>。我們已經了解了前兩者； <code>編輯</code>模型修改您給它們的提示，例如修復拼字錯誤。在本課程中，我們僅使用 <code>Chat</code> 模型，偶爾使用 <code>Complete</code> 模型。
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Mode} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

### Model

import Model from '@site/docs/assets/basics/openai_model.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
    點選頁面右側的 Model 下拉清單。此下拉清單可讓您變更正在使用的模型。每種 Mode 都有多個模型，但我們將專注於聊天模型。這個清單看起來很複雜（gpt-3.5-turbo 是什麼意思？），但這些只是不同型號的技術名稱。任何以 <code>gpt-3.5-turbo</code> 開頭的內容都是 ChatGPT 的一個版本，而任何以 <code>gpt-4</code> 開頭的內容都是 GPT-4 的版本。
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Model} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

:::note
您可能在介面中看不到 GPT-4 版本。
:::

模型名稱中的 16K 或 32K 等數字代表上下文長度。如果未指定，則預設上下文長度為 4K。 OpenAI 定期更新 ChatGPT (gpt-3.5-turbo) 和 GPT-4，舊版本在平台上保留一段有限的時間。這些舊型號的名稱末尾有附加數字，例如 <code>0613</code>。例如，模型 <code>gpt-3.5-turbo-16k-0613</code> 是一個上下文長度為 16K 的 ChatGPT 模型，於 2023 年 6 月 13 日發布。但是，建議使用最新版本的模型，該模型不支援包含任何日期資訊。可以在[此處](https://platform.openai.com/docs/models/gpt-4)找到模型版本的完整清單。


## 結論

OpenAI Playground 是一個功能強大的工具，它提供了更進階的介面來與 ChatGPT 和其他 AI 模型進行互動。它提供了一系列配置選項，包括選擇不同型號和模式的能力。我們將在下一課中了解其餘的設定。 Playground 也支援系統提示，可用於指導 AI 的反應。雖然介面乍看之下可能很複雜，但經過實踐，它就會成為探索 OpenAI 模型功能的寶貴資源。無論您是使用最新版本的 ChatGPT 或 GPT-4，還是探索舊模型，Playground 都為 AI 互動和實驗提供了靈活且強大的平台。