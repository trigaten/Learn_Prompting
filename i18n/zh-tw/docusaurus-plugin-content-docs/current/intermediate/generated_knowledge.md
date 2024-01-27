---
sidebar_position: 7
---

# 🟡 知識的生成


生成知識方法（@liu2021 generated）背後的想法是要求 %%LLM|LLM%% 在生成最終回應之前產生有關給定問題/提示的潛在有用資訊。

例如，假設您想寫一篇關於某種動物的部落格文章，例如[靈熊](https://en.wikipedia.org/wiki/Kermode_bear)。在要求 %%LLM|LLM%% 撰寫部落格文章之前，您可以要求它產生一些有關靈熊的事實。這將有助於 LLM 撰寫內容更豐富的部落格文章。有兩種簡單的方法可以解決這個問題。

## 單提示法

第一種方法要求 LLM 產生知識，然後撰寫文章，所有這些都通過一個提示。

```text
Generate 4 facts about the Kermode bear, then use these facts to write a short blog post using the information:
// highlight-start
The Kermode bear, also known as the spirit bear, is a rare subspecies of the American black bear that is found in the coastal regions of British Columbia, Canada. 

1. The Kermode bear is a unique subspecies of the American black bear, with approximately 10% of the population having white fur. 

2. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal. 

3. The Kermode bear is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest. 

4. The Kermode bear is a protected species, and its population is monitored closely by the provincial government.

The Kermode bear is a unique and special animal that is found in the coastal regions of British Columbia, Canada. Approximately 10% of the population of this subspecies of the American black bear have white fur, making them a rare sight. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal. It is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest. The Kermode bear is a protected species, and its population is monitored closely by the provincial government. It is a beautiful and majestic animal, and it is important that we do our part to protect and conserve this species.
// highlight-end
```


## 雙提示法

在這種方法中，我們首先提示 %%LLM|LLM%% 產生有關熊的事實：
  
```text
Generate 10 facts about the Kermode bear:
// highlight-start
1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.

2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.

3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.

4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.
// highlight-end
```

然後，我們將該資訊輸入到另一個提示中以撰寫部落格文章：

```text
1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.

2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.

3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.

4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.

Use the above facts to write a one paragraph blog post about the Kermode bear:

// highlight-start

The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada. This unique bear has a white or cream-colored coat, caused by a recessive gene, and is a symbol of hope and renewal for the First Nations people of British Columbia. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada, making it an important part of the region's biodiversity.

// highlight-end
```

我推薦第二種方法，因為它可以更可靠地產生更長的內容。

## 另一個用例

生成知識方法實際上是為了一項完全不同的任務而引入的，也就是回答困難的問題。考慮以下 GPT-3 也回答不正確的問題:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIGxhcmdlciB0aGFuIENvbmdvLiIsInByb21wdCI6IldoaWNoIGNvdW50cnkgaXMgbGFyZ2VyLCBDb25nbyBvciBTb3V0aCBBZnJpY2E%2FIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"200px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::note
這個例子可能不準確。我們正在努力修改它。
:::

<br/>

如果我們首先要求 %%LLM|LLM%% 產生有關剛果和南非的事實，那麼我們就可以使用這些資訊來正確回答問題。理論上，這類似於 %%CoT|CoT prompting%%，因為我們有效地讓 LLM 以相關事實的形式產生中間推理。

讓我們從第一步開始，*知識生成*。我們可以要求 %%LLM|LLM%% 產生有關剛果和南非的事實:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy4iLCJwcm9tcHQiOiJHZW5lcmF0ZSBzb21lIGtub3dsZWRnZSBhYm91dCB0aGUgc2l6ZXMgb2YgU291dGggQWZyaWNhIGFuZCBDb25nbzoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

接下來，讓我們利用這些知識來正確回答問題。這是 *知識統整* 步驟！

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQ29uZ28gaXMgbGFyZ2VyIHRoYW4gU291dGggQWZyaWNhLlxuIiwicHJvbXB0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy5cblxuV2hpY2ggY291bnRyeSBpcyBsYXJnZXIsIENvbmdvIG9yIFNvdXRoIEFmcmljYT8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 更技術性的討論

儘管上述用例與最初引入生成知識的方式類似，但並不完全相同。以下內容涵蓋了引入該方法的更多技術背景。它遵循我們上面看到的兩個中間步驟（**知識生成**和**知識統整**）模式。

import KGImage from '@site/docs/assets/intermediate/knowledge_generation.webp';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge (Liu et al.)
</div>

### 知識生成

在知識生成步驟中，%%LLM|LLM%% 被要求關於**問題**產生一組事實。 LLM 以 few-shot 的方式進行提示，如下所示。

使用相同的提示產生多個不同的回應（類似於 self-consistency 方法）。

import KGP1Image from '@site/docs/assets/intermediate/gen_k_p1.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge Example (Liu et al.)
</div>


### 知識統整

接下來，我們產生「知識增強」問題並用它們提示 %%LLM|LLM%% 以獲得最終答案。理解這一點的最簡單方法是透過一個例子。

假設我們正在嘗試回答**問題**: "Most Kangaroos have <mask\> limbs"。

假設在知識生成步驟下我們產生了 2 個知識（M=2）:

- Knowledge 1: `Kangaroos are marsupials that live in Australia.`

- Knowledge 2: `Kangaroos are marsupials that have 5 limbs.`

現在，我們將每個知識與問題連接起來以產生知識增強問題:

- Knowledge Augmented Question 1: `Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that live in Australia.`

- Knowledge Augmented Question 2: `Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that have 5 limbs.`

然後，我們向法學碩士提出這些知識增強問題，並得到最終的答案建議:

- Answer 1: `4`

- Answer 2: `5`

我們選擇機率最大的答案作為最終答案。這最高機率可以是答案令牌的 softmax 機率，或者記錄答案令牌的機率。

## 背誦增強語言模型

背誦增強（@sun2022reitationaugmented）方法類似於生成知識（基本上相同）。然而，它比生成知識的正式實現要簡單得多。


import RImage from '@site/docs/assets/intermediate/recitation.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={RImage} style={{width: "250px"}} />
</div>

這裡的想法是使用 few shot 提示讓 LLM 在 *same* 步驟中生成資訊 *and* 答案。事實上，它是在同一步驟中 `reciting/generating` 知識和回答問題，這是與生成知識方法的主要區別。

重申一下，這個方法會用多個（問題、背誦、答案）範例提示模型，然後再提出問題。作者指出，這種方法可以與自我一致性或多個完成路徑結合。


## 筆記

- 產生的知識顯示了各種常識資料集的改進。

- 與所選答案對應的知識稱為_所選知識_。

- 實際上，您可以將最常出現的答案作為最終答案。
