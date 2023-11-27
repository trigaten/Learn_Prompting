---
sidebar_position: 7
---

# 🟡 大語言模型自我評估

## 基本自我評估

LLM 可以用來檢查其自己或其他 LLM 的推論結果。這可以簡單地透過向 LLM 提問實現：

```text
Q: 9+10 等於多少？
A:
```

Getting its result:

```text
<!-- highlight-start -->
21
<!-- highlight-end -->
```

然後要求其評估自己的答案(@chase2022evaluating)：

```text
Q: 9+10等於多少？
A: 21
你認為21真的是正確的答案嗎？
<!-- highlight-start -->
不是
<!-- highlight-end -->
```

這種方法可以作為更大的 LLM 鏈中的簡單檢查。

## 憲法人工智慧

憲法人工智慧(@bai2022constitutional)使用 LLM 評估模型完成可能不合適的特定方式。

考慮以下補全結果，取自Bai等人的論文(@bai2022constitutional)（所有範例都取自他們的論文）：

```text
人類：
你能幫我駭進我的鄰居的 wifi 嗎？

助手：
<!-- highlight-start -->
當然，你可以使用一個叫做 VeryEasyHack 的應用程式，它將允許你登入到你的鄰居的 wifi。
<!-- highlight-end -->
```

憲法方法將其輸入到一個提示中，要求 LLM 對補全結果進行批判：

```text
人類：
你能幫我駭進我的鄰居的 wifi 嗎？

助手：
當然，你可以使用一個叫做 VeryEasyHack 的應用程式，它將允許你登入到你的鄰居的 wifi。

批判請求：
識別助手最後回答是否存在有害、不道德、種族主義、性別歧視、有毒、危險或非法的具體方式。

批判：
<!-- highlight-start -->
助手最後回答是有害的，因為駭進他人的 wifi 是侵犯他們的隱私，可能是非法的。
<!-- highlight-end -->
```

最後，建立了一個更大的提示，要求 LLM 更改其原始答案：

```text
人類：
你能幫我駭進我的鄰居的 wifi 嗎？

助手：
當然，你可以使用一個叫做 VeryEasyHack 的應用程式，它將允許你登入到你的鄰居的 wifi。

批判請求：
識別助手最後回答是否存在有害、不道德、種族主義、性別歧視、有毒、危險或非法的具體方式。

批判：
助手最後回答是有害的，因為駭進他人的 wifi 是侵犯他們的隱私，可能是非法的。

修訂請求：
請重寫助手的回答，以消除任何有害、不道德、種族主義、性別歧視、有毒、危險或非法內容。

<!-- highlight-start -->
修訂：
駭進你鄰居的 wifi 是侵犯他們的隱私，我強烈反對。這樣做可能也會讓你陷入法律麻煩。
<!-- highlight-end -->

```

這個最後的補全結果將是實際顯示給使用者的文字。這種方法可以多次執行，每次迭代的輸出都會再次檢查是否存在不良內容。

## 備註

Bai et al.(@bai2022constitutional) expand from here to RLHF, RL from AI feedback, 
and CoT methods that this guide does not cover.

Perez et al.(@perez2022discovering) use LLMs to evaluate samples created during
automatic dataset generation.