---
sidebar_position: 3
locale: en-us
style: chicago
---

# 🟢 思維鏈提示過程

思維鏈(CoT)提示過程(@wei2022chain)是一種最近開發的提示方法，它鼓勵大語言模型解釋其推理過程。下圖(@wei2022chain) 顯示了 %%few shot standard prompt|few shot standard prompt%%（左)與鏈式思維提示過程（右）的比較。

import CoTExample from '@site/docs/assets/basics/chain_of_thought_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
常規提示過程 vs 思維鏈提示過程(Wei et al.)
</div>

思維鏈的主要思想是透過向大語言模型展示一些少量的 %%exemplars|exemplars%%，在樣例中解釋推理過程，大語言模型在回答提示時也會顯示推理過程。這種推理的解釋往往會導引出更準確的結果。

## 範例

以下是幾個演示。第一個演示了GPT-3（davinci-003）無法解決簡單的單詞問題。第二個演示了GPT-3（davinci-003）透過使用思維鏈提示過程成功解決相同的問題。

#### 不正確的答案

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IumAiemhuTHmmK%2Fmm7Tlv6vnmoTkuIrnj63mlrnlvI%2FjgIIiLCJwcm9tcHQiOiLlk6rnp43mlrnms5XmmK%2Fmm7Tlv6vnmoTkuIrnj63mlrnlvI%2FvvJ9cXG7pgInpobkx77ya5LmY5Z2QMTAwMOWIhumSn%2BeahOWFrOWFseaxvei9pu%2B8jOeEtuWQjuWNiuWwj%2BaXtueahOeBq%2Bi9pu%2B8jOacgOWQjjEw5YiG6ZKf55qE6Ieq6KGM6L2m6aqR6KGM44CCXFxu6YCJ6aG5Mu%2B8muS5mOWdkDgwMOWIhumSn%2BeahOWFrOWFseaxvei9pu%2B8jOeEtuWQjjHlsI%2Fml7bnmoTngavovabvvIzmnIDlkI4zMOWIhumSn%2BeahOiHquihjOi9pumqkeihjOOAgiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### 正確的答案

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiLlk6rnp43mlrnms5XmmK%2Fmm7Tlv6vnmoTlm57lrrbmlrnlvI%2FvvJ9cbumAiemhuTHvvJrkuZjlnZAxMOWIhumSn%2BeahOWFrOWFseaxvei9pu%2B8jOeEtuWQjjQw5YiG6ZKf55qE5YWs5YWx5rG96L2m77yM5pyA5ZCOMTDliIbpkp%2FnmoTngavovabjgIJcbumAiemhuTLvvJrkuZjlnZA5MOWIhumSn%2BeahOeBq%2Bi9pu%2B8jOeEtuWQjumqkeihjDQ15YiG6ZKf77yM5pyA5ZCOMTDliIbpkp%2FnmoTlhazlhbHmsb3ovabjgIJcbumAiemhuTHpnIDopoE2MOWIhumSn%2B%2B8jOWNszEwKzQwKzEwICIsIm91dHB1dCI6IumAiemhuTHpnIDopoExMDAwKzMwKzEwICIsIm1heFRva2VucyI6MjU2LCJib3hSb3dzIjoxOCwidGVtcGVyYXR1cmUiOjAsInRvcFAiOjB9"
    style={{width:"100%", height:"900px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 結論

思維鏈已被證明對於算術、常識和符號推理等任務的結果有所改進(@wei2022chain)。特別是，在GSM8K(@cobbe2021training)基準測試上，PaLM 540B(@chowdhery2022palm)的提示達到了57%的解決率準確性。

import PromptedPaLM from '@site/docs/assets/intermediate/prompted_palm.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparison of models on the GSM8K benchmark (Wei et al.)
</div>

## 限制

重要的是，根據Wei等人的說法，“思維鏈僅在使用∼100B引數的模型時才會產生效能提升”。較小的模型編寫了不合邏輯的思維鏈會導致精度比標準提示更差。通常，模型從思維鏈提示過程中獲得性能提升的方式與模型的大小成比例。


## 備註

本章的寫作過程中，沒有對任何語言模型進行微調 😊.