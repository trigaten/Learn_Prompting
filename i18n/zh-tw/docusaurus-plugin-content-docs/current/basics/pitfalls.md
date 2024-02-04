---
sidebar_position: 101
---

# 🟢 大語言模型（LLMs）中的隱患

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"500px",height:"200px",verticalAlign:"top"}}/>
</div>

:::takeaways
- 了解 LLM 的偏見和相關問題
:::

LLMs 十分強大但也並非完美，在使用的時候需注意一些隱患。

## 引用來源

LLMs 如果沒有連線到網路且無法精確得知他們的資訊來源時，大多數情況下**不能準確給出引用來源**。他們經常會產生一些看起來不錯，但完全不準確的資料。

:::note
搜尋特化型（能夠搜尋網路及其他來源）LLMs 能解決這個問題。
:::

## 偏見

LLMs 時常產生具有刻板印象的回應。即使有安全防護措施，他們有時也會生成性別歧視／種族歧視／同性戀歧視的內容。在面向消費者的應用中使用 LLMs 時要小心，即使在研究中也要小心（它們可能產生有偏見的結果）。

## 幻覺

當被問到一個不知道答案的問題時，LLMs 時常產生虛假的資訊。有時他們會說不知道答案，但很多時候他們會自信地給出一個錯誤的答案。

## 數學

LLMs 不擅長邏輯計算。他們解決簡單的數學問題也存在困難，對於更複雜的數學問題更是無從下手。

:::note
[工具增強型 LLMs](https://learnprompting.org/zh-Hans/docs/advanced_applications/mrkl) 在一定程度上能改善這個問題。
:::

## 提示詞攻擊

使用者可以欺騙 LLMs 使其生成任何他們想要的內容。[閱讀更多](https://learnprompting.org/zh-Hans/docs/category/-prompt-hacking)
