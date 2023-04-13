---
sidebar_position: 100
---

# 🟢 配置 LLMs


import Temperature from '/docs/assets/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>


# 導論

LLMs 的輸出受*超參數配置（configuration hyperparameters）*影響，它能控制模型的多個方面，例如有多「隨機」。調整超參數能生成更具活潑、多樣及有趣的輸出。本章我們將討論兩個重要的超參數及它們如何影響 LLMs。

:::note
[給研究者] 這些配置不同於學習率（learning rate）、層數（number of layers）及隱藏大小（hidden size）等通常的超參數。
:::

## 熱度（Temperature）

熱度可以控制語言模型輸出的隨機度。高熱度生成更難預料及富有創造性的結果，低熱度則更保守。例如熱度為 0.5 時模型生成內容將比 1.0 更容易預測且創造性更少。

## Top p

Top p，即核心采样（nucleus sampling），是另一个控制语言模型输出随机性的超参数配置。它设定了一个概率阈值，并选择累积概率超过该阈值的最佳词汇，然后模型从这组词汇中随机抽取以生成输出。与传统方法（在整个词汇表中随机抽样）相比，这种方法可以产生更丰富多样且有趣的输出。例如 top p 为 0.9 時模型将仅考虑概率阈值 90% 以上的词汇。

## 其他相关超参数

There are many other hyperparameters that can affect language model performance, such as frequency and presence penalties. We do not cover them here, but perhaps will in the future.

还有许多其他超参数会影响语言模型的表現，如频率（frequency）和存在惩罚（presence penalties）。这里我们暫時不涉及它们，但也许将来会。

## 超参数如何影响输出

熱度和 top p 都可以通过控制生成文本中的随机性和多样性来影响语言模型的输出。较高的熱度或 top p 会生成更不可预测且有趣的结果，但同时也增加了错误或无意义文本的可能性。相反较低的熱度或 top p 則生成更保守和可预测的结果，但也可能导致重复或乏味。

对于文本生成你可能希望使用较高的熱度或 top p。然而，對於精確性重視型場景，如翻译或问答時，則应用较低的熱度或 top p 以提高精確性和事实正确性。

:::note
有時對於需要更多隨機性的精確性重視型場景，搭配[特殊提示技巧](https://learnprompting.org/zh-Hans/docs/intermediate/self_consistency)可能有所幫助。
:::

## 结论

总之，在使用语言模型时，熱度、top p 和其他模型超参数配置是需要考虑的关键因素。通过理解这些超参数与模型输出之间的关系，使用者可以针对特定場景和应用优化他们的提示。

:::warning
有些模型，如 ChatGPT，**不允许**调整这些超参数配置。
:::

By jackdickens382