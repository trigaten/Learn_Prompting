---
sidebar_position: 50
---

# 🟢 給予指令

import InstructionPrompt from '@site/docs/assets/basics/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways

- 理解指令提示
- 了解指令提示的複雜應用
:::

現在我們將介紹第一個提示技術，_指令提示_(@efrat2020turking)(@mishra2022reframing)。我們已經在之前的文章中看到過使用的簡單指令（例如讓人工智慧來解決數學問題）。然而，
我們可以透過指令來提示新一代人工智慧模型來執行更複雜的任務。

### 名稱解析範例

收集姓名資料時的一個常見問題是不同的人姓名格式不同。英文的姓名裡有些可能有 “Mrs.” 或 “Jr.”。此外，名字和姓氏可能不按順序排列。過去，像這樣清理資料是一項無聊的手動任務。現在，我們可以透過簡單的提示將其完全自動化。

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlNtaXRoLCBKb2huIiwicHJvbXB0IjoiQSB1c2VyIGhhcyBpbnB1dCB0aGVpciBmaXJzdCBhbmQgbGFzdCBuYW1lIGludG8gYSBmb3JtLiBXZSBkb24ndCBrbm93IGluIHdoaWNoIG9yZGVyIHRoZWlyIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZSBhcmUsIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIGluIHRoaXMgZm9ybWF0ICc8TGFzdCBuYW1lPiwgPEZpcnN0IG5hbWU%2BJy4gXG5cblBsZWFzZSBjb252ZXJ0IHRoZSBmb2xsb3dpbmcgbmFtZSBpbiB0aGUgZXhwZWN0ZWQgZm9ybWF0OiBKb2huIFNtaXRoIiwibW9kZWwiOiJncHQtMy41LXR1cmJvIn0%3D"
    style={{width:"100%", height:"400px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>嘗試變更姓名，直到找到提示無法正確處理的姓名。如果你能做到這一點，也許你也能提升提示能力！這是一個有趣的練習，可以提高您的提示工程技能！

### 個人識別資訊刪除範例

刪除 PII 是另一個相關任務。在發布私人文件之前，公司或政府可以手動編輯文檔中的資訊。 Gen AI 可用於自動刪除 PII，無需大量人力[^a][^b]。

<AIInput>
Read the following sales email. Remove any personally identifiable information (PII),
and replace it with the appropriate placeholder. For example, replace the name "John Doe"
with "[NAME]".

Hi John,

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

Jimmy Smith

Phone: 410-805-2345
Email: jimmysmith@cheapdealz.com
</AIInput>

以下是 AI 的回應[^c]:

<AIOutput>
Hi [NAME],

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership ([DEALERSHIP]), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

[SALESPERSON]

Phone: [PHONE NUMBER]
Email: [EMAIL ADDRESS]
</AIOutput>

看到 AI 模型如何從指令來進行推斷是非常令人興奮的。例如，它知道將 `Cheap Dealz` 替換為 `[DEALERSHIP]`，將 `Jimmy Smith` 替換為 `[SALESPERSON]`，即使我們沒有明確告訴它要這樣做。

### 論文評估和回饋範例

Gen AI 可用於根據一組複雜的標準來評估論文並提供回饋。這包括語法、清晰度、連貫性和論證品質等要素。

<AIInput>
閱讀以下論文摘錄，並根據以下標準提供回饋：語法、清晰度、連貫性、論證品質和證據的使用。為每個屬性提供 1-10 分的分數，並說明分數的理由。 “儘管人們普遍認為，但沒有確鑿的證據支持電子遊戲導致暴力行為的觀點。有關該主題的研究往往是矛盾的且沒有結論。一些研究發現了相關性，但相關性並不意味著因果關係。因此，現在斷言還為時過早。將社會暴力歸咎於電子遊戲。”

</AIInput>

以下是 AI 的回應:

<AIOutput>
語法：8
該段落的語法使用基本正確，句子結構清晰，沒有明顯的語法錯誤。

清晰度：7
該段落的表達相對清晰，能夠清楚地傳達論點和主題。然而，有些地方可能需要更清晰和具體的說明，以使讀者更好地理解論點。

連貫性：8
該段落的句子和句子之間有一定的連貫性，讀者可以理解句子之間的邏輯關係。然而，可能需要更多的過渡詞或短語，以加強段落內容的連貫性。

論證品質：9
該段落提出了一個論點：沒有確鑿的證據支持電子遊戲導致暴力行為的觀點。論點合理且有道理，並且給出了解釋為什麼如此的理由。然而，可以更具體地提供更多相關研究的例子或詳情來支持論點。

證據的使用：7
該段落提到了一些有關該主題的研究，但沒有提供具體的例子或詳細數據來支持論點。更多的證據和具體的研究結果可以增強論點的可信度。

綜合來說，該段落在語法、清晰度和連貫性方面表現良好。論證品質還不錯，但可以提供更多的具體證據來支持論點。
</AIOutput>

## 結論

指令提示包括給 Gen AI 一些任務或指示。儘管概念很簡單，但新一代的人工智慧模型能夠遵循非常複雜的指令。在本課程中將頻繁使用指令提示。

[^a]: Allowing AI to remove PII from text is a promising approach, but it should be used with extraordinary caution as it may make mistakes.
[^b]:
    It should also be noted in this example that you are sending PII to a third-party (e.g. OpenAI if you are using ChatGPT), and these services may record and use your prompts for their own needs.
    [^c] We used a different Gen AI, GPT-3, for this example.
