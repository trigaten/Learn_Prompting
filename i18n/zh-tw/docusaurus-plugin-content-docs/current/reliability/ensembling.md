---
sidebar_position: 5
---

# 🟡 提示集成

提示集成(prompt ensembling)是使用多個不同的提示概念，來嘗試回答相同問題的過程。對此有許多不同的方法。

## DiVeRSe

DiVeRSe(@li2022advance) ("**Di**verse **Ve**rifier on **R**easoning **S**t**e**ps") 是一種以三階段方式提高答案可靠性的方法。它透過以下方式做到這一點:

1. 使用多個提示產生不同的補全
2. 使用驗證器區分好答案和壞答案
3. 使用驗證器檢查推理步驟的正確性

import diverse from '@site/docs/assets/reliability/diverse.webp';

<div style={{textAlign: 'center'}}>
  <img src={diverse} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
DiVeRSe (Li et al.)
</div>


### 多樣化的提示

DiVerSe 在給定的使用者輸入上使用了 5 個不同的提示。為了建立每個提示，他們隨機從訓練集中抽取一些樣本。這是一個 few-shot 提示 (k=2)的範例，範例取自 [GSM8K 基準](https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl)(@cobbe2021training)。在此基準測試，DiVerSe 使用有 5 個範例的提示。


```
Q: Natalia sold clips to 48 of her friends in April, and then she sold half as many clips in May. How many clips did Natalia sell altogether in April and May?
A: Natalia sold 48/2 = 24 clips in May.
Natalia sold 48+24 = 72 clips altogether in April and May.
#### 72
Q: Weng earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?
A: Weng earns 12/60 = $0.2 per minute.
Working 50 minutes, she earned 0.2 x 50 = $10.
#### 10
Q: Betty is saving money for a new wallet which costs $100. Betty has only half of the money she needs. Her parents decided to give her $15 for that purpose, and her grandparents twice as much as her parents. How much more money does Betty need to buy the wallet?
A:
```

在產生如上所示的 5 個不同提示後，DiVerSe 會對每個提示取樣 20 個推理路徑 (temperature = 0.5)。以下是上述提示的一些完成範例。請注意，答案並不總是正確的。

```text
<!-- highlight-start -->
Betty has 0.5*100 = $50.
Then she gets 15 more = $65.
Then she gets 2*15 = $90.
She needs 100-90 = $10 more.
#### 10
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
A: Betty has 0.5*100 = $500.
Then she gets 15 more = $650.
Then she gets 2*15 = $900.
She needs 100-90 = $1000 more.
#### 1000
<!-- highlight-end -->
```

至此，DiVerSe 已經產生了 100 個不同的補全。

### 投票驗證器

現在，我們可以採用大多數答案，就像自我一致性（@mitchell2022enhancing）所做的那樣。

然而，DiVerSe 提出了一種更複雜的方法，他們稱之為 _投票驗證器_。

在測試時，使用投票驗證器是一個兩步驟過程。首先 "驗證者"（神經網路）根據正確的可能性為每個完成分配 0-1 分。然後，"投票" 組件將不同答案的所有分數相加並得出最終答案。

#### 範例

這是一個小範例。假設我們對提示 `What is two plus two?` 有以下補全:

```text
<!-- highlight-start -->
4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
two + 2 = 5
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
I think 2+2 = 6
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
two plus two = 4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
It is 5
<!-- highlight-end -->
```

The verifier will read each completion and assign a score to it. For example, it might assign
the scores: 0.9, 0.1, 0.2, 0.8, 0.3 respectively. Then, the voting component will sum the scores for each
answer.

驗證者將讀取每個 LLM 回應的結果並為其給予評分。例如，它可能會給予的分數分別為：0.9、0.1、0.2、0.8、0.3。然後，投票組件將對每個的分數進行求和
回答。

```
score(4) = 0.9 + 0.8 = 1.7
score(5) = 0.1 + 0.3 = 0.4
score(6) = 0.2
```

最終答案是 4，因為它的得分最高。

**但 "驗證者" 是如何訓練的呢?**

驗證器使用稍微複雜的損失函數進行訓練，我不會在這裡介紹。閱讀論文第 3.3 節以了解更多詳細資訊(@li2022advance)。

## AMA 提示

import ama from '@site/docs/assets/reliability/AMA_Prompting.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ama} style={{width: "750px"}} />
</div>

Ask Me Anything (AMA) 提示(@arora2022ama) 是與 DiVerSe 類似的方法。然而，其**多重提示步驟**和**答案聚合步驟**有顯著差異。 AMA 的核心思想是使用 LLM 產生多個提示，而不是僅使用不同的少數樣本。

### 多重提示

AMA 表明您可以提出一個問題並以多種方式重新格式化它以創建不同的提示。例如，假設您正在抓取一堆網站以獲取有關動物的信息，並且只想記錄生活在北美的動物。讓我們建立一個提示來確定這一點。

鑑於維基百科的以下段落:

```text
The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.
```

您可以將此任務格式化為提示，如下所示:

```text
Is the following claim True or False given the context?

Context: The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.
Claim: This animal lives in North America
Answer:
```

這是一個有點奇怪的表述。為什麼不直接使用下面更簡單的提示呢?

```text
Context: The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.
Question: Does this animal lives in North America?
```

那麼，透過以這種特殊的方式提出問題，我們可以產生不同的提示。我們的第一步是接受「這種動物生活在北美」這一說法，並將其重新格式化為不同的問題，這些問題基本上都在問同一件事。為此，我們將透過如下圖所示的提示傳遞想法。

import ama_multi from '@site/docs/assets/reliability/AMA_multiprompting.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ama_multi} style={{width: "800px"}} />
</div>

這可能會輸出:
1. Was the animal living in North America?
2. Does the animal live in North America?
3. Where does the animal live?

這背後的想法是創建任務的不同「視角」。然後我們將每個應用到給定的上下文中，如下所示：

```text
Context: The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.
Question: Was the animal living in North America?
```

然後，我們可以為每個產生答案:

1. `Yes it was`
2. `Yes it does`
3. `North America`


這些是 *intermediate* 答案。我們需要將它們對應到任務標籤（例如是或否）。

我們可以透過以下提示傳遞中間答案來做到這一點:

```text
Select the correct category.

"Categories":
- Yes, North America
- No, not North America

"Yes it was" fits category:
```

現在我們可以得到輸出答案。

1. `Yes, North America`
2. `Yes, North America`
3. `Yes, North America`

在這裡，他們都同意，所以我們可以採取第一個答案。但是，如果他們不同意，我們可以使用 AMA 聚合步驟來獲得最終答案。

### 答案聚合

AMA 使用非常複雜的策略來聚合答案（比 DiVerSe 更複雜），而不是簡單地採用多數答案。要理解為什麼大多數答案可能是個糟糕的選擇，請考慮我們之前產生的兩個問題:

1. Was the animal living in North America?
2. Does the animal live in North America?

它們非常相似，因此可能會產生相同的結果。由於問題非常相似，它們會有效地影響最終結果。為了解決這個問題，AMA 依靠弱監督和複雜的數學來估計它創建的不同提示之間的依賴關係，然後使用它來適當地加權它們。

因此，對於我們產生的三個問題，它可能會分配 25%、25% 和 50% 的權重，因為前兩個問題非常相似。

雖然AMA的聚合策略很強大，但是它太複雜了，我在這裡不做介紹。閱讀論文第 3.4 節以了解更多詳細資訊 (@arora2022ama)。

### 結果

- 透過這種提示策略，AMA 能夠使用 GPT-J-6B(@wange2021gptj) 來超越 GPT-3。

- AMA 更適合解決給定上下文包含答案的問題。

## 重點

集成方法(Ensembling methods) 非常強大。它們可用於提高任何模型的性能，並可用於提高模型在特定任務上的性能。

在實踐中，多數投票(majority voting)應該是您的首選策略。

