---
sidebar_position: 70
---

# 🟡 數學演算

在整個課程中，我們看到了許多不同的提示方法，可以用來提高 %%LLM|LLM%% 數學能力。最近的一種方法 MathPrompter(@imani2023mathprompter) 將其中一些方法(%%CoT|CoT prompting%%, %%PAL|PAL%%, etc.) 統一為一項技術。總體思想是將數學問題分解為代數術語，然後使用 Python 程式碼以不同的方式解決它。

import math from '@site/docs/assets/reliability/math.webp';

<div style={{textAlign: 'center'}}>
  <img src={math} style={{width: "500px"}}/>
</div>

MathPrompter 有 **4** 步驟。我們將使用以下範例問題來解釋它們。此範例直接取自論文。

```text
Q: At a restaurant, each adult meal costs $5 and kids eat free. If a group of 15
people came in and 8 were kids, how much would it cost for the group to eat?
```

## Step 1: 產生代數模板

第一步是為問題中的每個數字分配一個變數。這很有幫助，因為它可以更輕鬆地將問題轉換為抽象數學問題以及程式碼。

這可以透過一些 few shot 提示來完成:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH0iLCJwcm9tcHQiOiJROiBBIHpvbyBjaGFyZ2VzICQxMiBwZXIgYWR1bHQgdGlja2V0IGFuZCBhbGxvd3MgY2hpbGRyZW4gdW5kZXIgNSB0byBlbnRlciBmb3IgZnJlZS4gQSBmYW1pbHkgb2YgNCBhZHVsdHMgYW5kIDIgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLiBXaGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuUXQ6IEF0IGEgem9vLCBlYWNoIGFkdWx0IHRpY2tldCBjb3N0cyAkQSBhbmQgY2hpbGRyZW4gdW5kZXIgNSBjYW4gZW50ZXIgZm9yIGZyZWUuIElmIGEgZmFtaWx5IG9mIEIgYWR1bHRzIGFuZCBDIGNoaWxkcmVuIHVuZGVyIDUgdmlzaXQgdGhlIHpvbywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBmb3IgdGhlIGZhbWlseSB0byBlbnRlcj9cbk1hcHBpbmc6IHtBOiAxMiwgQjogNCwgQzogMn1cblxuUTogQSBzdG9yZSBzZWxscyBzaG9lcyBhdCAkNjAgcGVyIHBhaXIgYW5kIHNvY2tzIGF0ICQ4IHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgMiBwYWlycyBvZiBzaG9lcyBhbmQgMyBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5ROiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkNSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiAxNVxucGVvcGxlIGNhbWUgaW4gYW5kIDggd2VyZSBraWRzLCBob3cgbXVjaCB3b3VsZCBpdCBjb3N0IGZvciB0aGUgZ3JvdXAgdG8gZWF0PyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Step 2: 數學提示

此步驟的重點是將問題表述為代數語句和 Python 程式碼。此步驟有兩個同時提示，有助於給出問題的不同表示。

### 2a: 代數陳述

We can few-shot prompt the LLM to represent the math problem as an algebraic statement. This is done by asking the LLM to generate the answer format, starting with "Answer =".

我們可以使用 few-shot提示讓 LLM 將數學問題表示為代數陳述。這是透過要求 LLM 產生以 "Answer =" 開頭的答案格式來完成的。

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkFuc3dlciA9IEEgKiBCIC0gQSAqIEMiLCJwcm9tcHQiOiJRdDogQXQgYSB6b28sIGVhY2ggYWR1bHQgdGlja2V0IGNvc3RzICRBIGFuZCBjaGlsZHJlbiB1bmRlciA1IGNhbiBlbnRlciBmb3IgZnJlZS4gSWYgYSBmYW1pbHkgb2YgQiBhZHVsdHMgYW5kIEMgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLCB3aGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuTWFwcGluZzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQlxuXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQyArIEIgKiBEXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH1cblxuV3JpdGUgYSBtYXRoZW1hdGljYWwgZXF1YXRpb24gYW5kIGdlbmVyYXRlIHRoZSBhbnN3ZXIgZm9ybWF0XG5zdGFydGluZyB3aXRoICdBbnN3ZXIgPSciLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 2b: Python 程式碼

我們也可以要求 %%LLM|LLM%% 產生解決問題的 Python 程式碼。這是透過要求 LLM 產生一個 Python 函數來完成的。

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiByZXN0YXVyYW50X2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogKEIgLSBDKSIsInByb21wdCI6IlF0OiBBdCBhIHpvbywgZWFjaCBhZHVsdCB0aWNrZXQgY29zdHMgJEEgYW5kIGNoaWxkcmVuIHVuZGVyIDUgY2FuIGVudGVyIGZvciBmcmVlLiBJZiBhIGZhbWlseSBvZiBCIGFkdWx0cyBhbmQgQyBjaGlsZHJlbiB1bmRlciA1IHZpc2l0IHRoZSB6b28sIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3QgZm9yIHRoZSBmYW1pbHkgdG8gZW50ZXI%2FXG5NYXBwaW5nOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgem9vX2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogQlxuXG5cblF0OiBBdCBhIHN0b3JlLCBzaG9lcyBjb3N0ICRBIHBlciBwYWlyIGFuZCBzb2NrcyBjb3N0ICRCIHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgQyBwYWlycyBvZiBzaG9lcyBhbmQgRCBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgc3RvcmVfY29zdChBLCBCLCBDLCBEKTpcbiAgcmV0dXJuIChBICogQykgKyAoQiAqIEQpXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cblxuV3JpdGUgYSBQeXRob24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhbnN3ZXIuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 答案生成

現在，我們可以使用先前產生的映射來自動填入變數。

```text
Mapping: {A: 5, B: 15, C: 8}
```

代數: 
```text
Answer = 5 * 15 - 5 * 8
```

Python 函數:
```python
def restaurant_cost(A=5, B=15, C=8):
  return A * (B - C)
```

我們可以使用 Python 來評估兩者。

代數: 
```python
>>> eval("5 * 15 - 5 * 8")
35
```

Python 函數:
```python
>>> restaurant_cost()
35
```

## Step 4: 自我一致性

最後，我們將利用 %%Self-Consistency|self_consistency%% 多次重新執行上述過程 (~5)，然後採用多數答案。

## 結論

MathPrompter 驗證 MultiArith(@roy-roth-2015-solving) 資料集的準確度為 92.5%。這項技術的成功是一個很好的例子，說明您作為提示工程師如何能夠採用您在本課程中學到的方法並將它們結合起來處理更大更複雜的問題。
