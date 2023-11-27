---
sidebar_position: 2
---

# 🟡 LLMs 使用 Tools

MRKL 系統(@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, pronounced "miracle") 是一種**神經符號結構**，結合了 LLMs（神經計算）和像計算器（符號計算）這樣的外部工具，用於解決複雜問題。

MRKL 系統由一組 Tools 模組（例如計算器、天氣API、資料庫等）和一個路由器組成，決定如何將自然語言查詢“路由”到適當的 Tools 模組。

一個簡單的 MRKL系統 範例是一個可以使用計算器應用程式的LLM。 這是一個單一 tool 模組系統，其中 LLM 是路由器。 當被問到 `100*100是多少？` 時，LLM 可以選擇從提示中提取數字，然後告訴 MRKL 系統使用計算器應用程式計算結果。 這可能如下所示：

<pre>
<p>100*100 是多少？</p>

<span className="bluegreen-highlight">CALCULATOR [100*100]</span>
</pre>

MRKL系統將看到單詞 `CALCULATOR`，並將 `100*100` 插入計算器應用程式中。 這個簡單的想法可以很容易地擴充套件到各種符號計算工具。

考慮以下其他應用範例：

- 一個聊天機器人，能夠從使用者的文字中提取資訊，形成 SQL 查詢，回答有關金融資料庫的問題。

<pre>
<p>蘋果公司股票現在的價格是多少？</p>

<span className="bluegreen-highlight">當前價格為DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"]。</span>
</pre>

- 一個聊天機器人，能夠從提示中提取資訊，使用天氣 API 檢索資訊回答有關天氣的問題。

<pre>
<p>紐約的天氣怎麼樣？</p>

<span className="bluegreen-highlight">天氣是WEATHER_API[New York]。</span>
</pre>

- 或者更複雜的依賴多個數據源的任務，例如下面這個例子：


import mrkl_task from '@site/docs/assets/advanced/mrkl_task.webp';
import dataset from '@site/docs/assets/advanced/mrkl/dataset.webp';
import load_dataset from '@site/docs/assets/advanced/mrkl/load_dataset.webp';
import model from '@site/docs/assets/advanced/mrkl/model.webp';
import extract from '@site/docs/assets/advanced/mrkl/extract.webp';
import search from '@site/docs/assets/advanced/mrkl/search.webp';
import final from '@site/docs/assets/advanced/mrkl/final.webp';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
範例 MRKL 系統(AI21)
</div>

## 範例

我使用 Dust.tt 復現了原始論文中的一個範例 MRKL 系統，連結在[這裡](https://dust.tt/trigaten/a/98bdd65cb7)。 該系統可以讀取數學問題（例如`20乘以5^6等於多少？ `），提取數字和運算子號，並將其格式化為計算器應用(例如 `20 * 5^6`）。 然後它將重新格式化的方程式傳送給 Google 的計算器應用程式，並返回結果。 請注意，原始論文對路由器（LLM）進行了提示調整，但是我在這個例子中沒有進行提示調整。 讓我們來看看這是如何工作的：

首先，我在 Dust 的`資料集`選項卡中製作了一個簡單的資料集。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={dataset} style={{width: "750px"}} />
</div>

然後，我切換到 `Specification` 選項卡，並使用 `data` 塊載入了資料集。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={load_dataset} style={{width: "750px"}} />
</div>

接下來，我建立了一個 `llm` 塊，用於提取數字和運算子號。 請注意，在提示中，我告訴它我們將使用 Google 的計算器。 我使用的模型（GPT-3）可能已經預先訓練了一些關於 Google 計算器的知識。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={model} style={{width: "750px"}} />
</div>

然後，我建立了一個 `code` 塊，其中執行一些簡單的 JavaScript 程式碼來刪除補全結果(completion)中的空格。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={extract} style={{width: "750px"}} />
</div>

最後，我建立了一個 `search` 塊，將重新格式化的方程式傳送給 Google 的計算器。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={search} style={{width: "750px"}} />
</div>

下面我們可以看到最終的結果，全部都是正確的！

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={final} style={{width: "750px"}} />
</div>

請隨意嘗試並進行實驗，這是演練場(playground)的[連結](https://dust.tt/trigaten/a/98bdd65cb7).

## 備註
MRKL 由[AI21](https://www.ai21.com/)開發，最初使用了他們的 J-1 (Jurassic 1)(@lieberjurassic) LLM。

## 更多內容

請參見 [此範例](https://langchain.readthedocs.io/en/latest/modules/agents/implementations/mrkl.html) MRKL 系統，該系統是使用 LangChain 構建的。
