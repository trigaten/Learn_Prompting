---
sidebar_position: 3
---

# 🟡 具有推理和行動能力的 LLMs

ReAct(@yao2022react)(reason, act)是一種使用自然語言推理解決複雜任務的語言模型範例。ReAct 旨在用於允許 LLM 執行某些操作的任務。例如，在 MRKL 系統中，LLM 可以與外部 API 互動以檢索資訊。當提出問題時，LLM 可以選擇執行操作以檢索資訊，然後根據檢索到的資訊回答問題。

ReAct 系統可以被視為具有**推理和行動能力**的 MRKL 系統，。

請檢視以下影像。頂部框中的問題來自 HotPotQA(@yang2018hotpotqa)，這是一個需要複雜推理的問答資料集。 ReAct 能夠首先透過推理問題（Thought 1），然後執行一個動作（Act 1）來向 Google 傳送查詢來回答問題。然後它收到了一個觀察（Obs 1），並繼續進行這個思想，行動，觀察迴圈，直到達到結論（Act 3）。

import react_qa from '@site/docs/assets/advanced/react_qa.webp';

<div style={{textAlign: 'center'}}>
  <img src={react_qa} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
ReAct System (Yao et al.)
</div>

具有強化學習知識的讀者可能會認為，這個過程類似於經典的 RL 迴圈：狀態，行動，獎勵，狀態，...。ReAct 在其論文中對此進行了一些規範化。

## 結論

Google 在 ReAct 的實驗中使用了 PaLM(@chowdhery2022palm) LLM。與標準提示（僅問題）、CoT 和其他配置進行比較表明，ReAct 在複雜推理任務方面的表現是有希望的。谷歌還對涵蓋事實提取和驗證的 Fever 資料集(@thorne2018fever)進行了研究。

import react_performance from '@site/docs/assets/advanced/react_performance.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={react_performance} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
ReAct Results (Yao et al.)
</div>

