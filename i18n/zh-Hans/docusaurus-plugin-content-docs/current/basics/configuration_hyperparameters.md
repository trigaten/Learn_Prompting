---
sidebar_position: 100
---

# 🟢 LLM Settings


import Temperature from '/docs/assets/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>


# 导论

LLMs 的输出受*超参数配置（configuration hyperparameters）*影响，它能控制模型的多个方面，例如有多「随机」。调整超参数能生成更具活泼、多样及有趣的输出。本章将讨论两个重要的超参数以及它们如何影响 LLMs。

:::note
[给研究者] 这些配置不同于学习率（learning rate）、层数（number of layers）及隐藏大小（hidden size）等通常的超参数。
:::

## 热度（Temperature）

热度可以控制语言模型输出的随机度。高热度生成更难预料及富有创造性的结果，低热度则更保守。例如热度为 0.5 时模型生成内容将比 1.0 更容易预测且创造性更少。

## Top p

Top p，即核心采样（nucleus sampling），是另一个控制语言模型输出随机性的超参数配置。它设定了一个概率阈值，并选择累积概率超过该阈值的最佳词汇，然后模型从这组词汇中随机抽取以生成输出。与传统方法（在整个词汇表中随机抽样）相比，这种方法可以产生更丰富多样且有趣的输出。例如 top p 为 0.9 时模型将仅考虑概率阈值 90% 以上的词汇。

## 其他相关超参数

还有许多其他超参数会影响语言模型的表现，如频率（frequency）和存在惩罚（presence penalties）。这里暂时不涉及它们，但也许将来会。

## 超参数如何影响输出

热度和 top p 都可以通过控制生成文本中的随机性和多样性来影响语言模型的输出。较高的热度或 top p 会生成更不可预测且有趣的结果，但同时也增加了错误或无意义文本的可能性。相反较低的热度或 top p 则生成更保守和可预测的结果，但也可能导致重复或乏味。

对于文本生成你可能希望使用较高的热度或 top p。然而，对于精确性重视型场景，如翻译或问答时，则应用较低的热度或 top p 以提高精确性和事实正确性。

:::note
有时对于需要更多随机性的精确性重视型场景，搭配[特殊提示技巧](https://learnprompting.org/zh-Hans/docs/intermediate/self_consistency)可能有所帮助。
:::

## 结论

总之，在使用语言模型时，热度、top p 和其他模型超参数配置是需要考虑的关键因素。通过理解这些超参数与模型输出之间的关系，使用者可以针对特定场景和应用优化他们的提示。

:::warning
有些模型，如 ChatGPT，**不允许**调整这些超参数配置。
:::

By jackdickens382