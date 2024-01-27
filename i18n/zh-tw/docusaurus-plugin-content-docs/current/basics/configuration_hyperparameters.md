---
sidebar_position: 98
---

# 🟢 LLM 超參數設定


import Temperature from '@site/docs/assets/basics/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- 理解 Temperature, Top P, 與 Maximum Length
:::

# 介紹

我們可以使用某些 %%LLM|LLM%%[^a] 設定來控制模型的各個方面，例如它的「隨機」程度。可以調整這些設定以產生更具創意、多樣化和有趣的輸出。在相關的超參數中 Temperature、Top P 和 Max Length　這幾個設定是最重要的，但我們描述了 OpenAI Playground 允許您修改的這些設定。

## Temperature

import Temp from '@site/docs/assets/basics/openai_temperature.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
Temperature 調節語言模型輸出的不可預測性。透過較高的溫度設置，輸出變得更具創造性且更難以預測，因為它放大了不太可能的令牌的可能性，同時降低了更可能的令牌的可能性。相反，較低的溫度會產生更保守和可預測的結果。以下範例說明了輸出中的這些差異：
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Temp} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

<AIInput>
What are 10 weird, unique, and fun things to do at the beach? Make a list without descriptions.
</AIInput>
<AIOutput title="ChatGPT Output (Temperature=0, Top P = 1)">
{`1. Build a sandcastle
2. Collect seashells
3. Play beach volleyball
4. Fly a kite
5. Have a picnic
6. Try paddleboarding
7. Play frisbee
8. Go snorkeling
9. Take a long walk along the shore
10. Watch the sunset`}
</AIOutput>
<AIOutput title="ChatGPT Output (Temperature=1.5, Top P = 1)">
{`1. Wade in the shallow waters blowing bubblegum bubbles
2. Create intricate sandcastle sculptures
3. Join an improvised beach volleyball match
4. Take a scenic hike along the cliffs nearby
5. People-watch and guess each person's beach-related story
6. Collect seashells to create your own piece of beach art
7. Learn to surf or try other water sports
8. Kickstart a spontaneous sand fight
9. Attempt shoreline fishing like the locals
10. Engage in friendly competition by organizing a sandcastle building contest`}
</AIOutput>

較高溫度設定產生的輸出提供了更具想像力和多樣化的海灘活動清單。這對於創意寫作非常有用。

:::note
如果將溫度調整得太高，您可能會得到無意義的輸出，例如「在 Becksmith Stein Man Beach 附近開始一場海綿球棒球本壘打比賽」。
:::

import Top from '@site/docs/assets/basics/openai_top_p.webp';

## Top P

Top P[^b] 是語言模型中的一項可設定的超參數，有助於管理其輸出的隨機性。它的工作原理是建立一個機率閾值，然後選擇組合可能性超過此限制的令牌。

<div className="flex flex-col sm:flex-row justify-between">
  <div>
例如，讓我們考慮一個範例，其中模型預測 <code>The cat crafted up the ___</code> 中的下一個單字。它可能考慮的前五個單字可能是<code>tree</code>（機率0.5）、<code>roof</code>（機率0.25）、<code>wall</code>（機率0.15）、< code>window</code>（機率為0.07）和<code>carpet</code>，機率為0.03。
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Top} className="img-docs w-20 sm:w-auto" />
  </div>
</div>
<br/>

如果我們將 Top P 設定為 `.90`，AI 將只考慮那些累積機率機率至少達到 90% 的令牌。在我們的例子中：

- 選入 <code>tree</code> -> 累積機率是 `50%`.
- 然後再選入 <code>roof</code> -> 累積機率成為 `75%`. 
- 最後再選入 <code>wall</code>, 最後累積機率到達 `90%`.  

因此，為了產生輸出，人工智慧將在這三個選項（<code>tree</code>、<code>roof</code> 和<code>wall</code>）中隨機選擇一個，因為它們圍繞著它們組成所有可能性的 90% 左右。與不加區別地從整個詞彙表中採樣的傳統方法相比，該方法可以產生更多樣化的輸出，因為它根據累積機率而不是單一標記縮小選擇範圍

## Maximum Length

import Max from '@site/docs/assets/basics/openai_maximum_length.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
最大長度是允許 AI 產生的令牌總數。此設定非常有用，因為它允許使用者管理模型回應的長度，防止回應過長或不相關。它還有助於控制成本，因為 Playground 會顯示輸入和產生的回應之間令牌長度。
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Max} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

## 其它 LLM 超參數

還有許多其他設定可能會影響語言模型輸出，例如 `Stop Sequences` 和 `Frequency Penalty`。

### Stop Sequences

import Stop from '@site/docs/assets/basics/openai_stop_sequences.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
Stop sequences 告訴模型何時停止輸出生成，這使您可以控制內容長度和結構。如果您提示 AI 撰寫電子郵件，設定 "Best regards," 或 "Sincerely," 作為停止順序，以確保模型在配對到 Stop sequences 字樣後停止，從而使電子郵件的產出簡短明瞭。
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Stop} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

### Frequency Penalty

import Freq from '@site/docs/assets/basics/openai_frequency_penalty.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
Frequency penalty 是一種超參數設置，透過根據令牌出現的頻率按比例懲罰標記，從而阻止生成文字中的重複。文本中使用的令牌越頻繁，人工智慧再次使用它的可能性就越小。
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Freq} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

### Presence Penalty

import Pres from '@site/docs/assets/basics/openai_presence_penalty.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
Ｐresence penalty 與　Frequency Penalty 類似，但根據令牌是否出現而不是按比例對令牌進行懲罰。
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Pres} className="img-docs w-20 sm:w-auto" />
  </div>
</div>


## Determinism 註釋

即使 Temperature 和 Top-P 完全設定為零，AI 也可能不會每次都給出相同的精確輸出。這是由於人工智慧「大腦」中 GPU（圖形處理單元）計算的隨機性所造成的。

## 結論

總之，在使用語言模型時，掌握 Temperature、Top P、Maximum length 等設定至關重要。這些參數可以精確控制模型的輸出，以滿足特定的任務或應用程式。它們管理回應的隨機性、回應長度和重複頻率等方面，所有這些都有助於改善您與人工智慧的互動。
