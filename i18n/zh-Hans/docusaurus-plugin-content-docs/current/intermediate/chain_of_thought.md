---
sidebar_position: 3
locale: en-us
style: chicago
---

# 🟢 思维链提示过程

思维链(CoT)提示过程(@wei2022chain)是一种最近开发的提示方法，它鼓励大语言模型解释其推理过程。下图(@wei2022chain) 显示了 %%few shot standard prompt|few shot standard prompt%%（左)与链式思维提示过程（右）的比较。

import CoTExample from '@site/docs/assets/basics/chain_of_thought_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
常规提示过程 vs 思维链提示过程(Wei et al.)
</div>

思维链的主要思想是通过向大语言模型展示一些少量的 %%exemplars|exemplars%%，在样例中解释推理过程，大语言模型在回答提示时也会显示推理过程。这种推理的解释往往会引导出更准确的结果。

## 示例

以下是几个演示。第一个演示了GPT-3（davinci-003）无法解决简单的单词问题。第二个演示了GPT-3（davinci-003）通过使用思维链提示过程成功解决相同的问题。

#### 不正确的答案

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="哪种方法是更快的上班方式？\n选项1：乘坐1000分钟的公共汽车，然后半小时的火车，最后10分钟的自行车骑行。\n选项2：乘坐800分钟的公共汽车，然后1小时的火车，最后30分钟的自行车骑行。" initial-response="选项1是更快的上班方式。" max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

#### 正确的答案

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="哪种方法是更快的回家方式？\n选项1：乘坐10分钟的公共汽车，然后40分钟的公共汽车，最后10分钟的火车。\n选项2：乘坐90分钟的火车，然后骑行45分钟，最后10分钟的公共汽车。\n选项1需要60分钟，即10+40+10 = 60分钟。\n选项2需要145分钟，即90+45+10=145分钟。\n由于选项1需要60分钟，选项2需要145分钟，因此选项1更快。\n\n哪种方法是更快的上班方式？\n选项1：乘坐1000分钟的公共汽车，然后半小时的火车，最后10分钟的自行车骑行。\n选项2：乘坐800分钟的公共汽车，然后1小时的火车，最后30分钟的自行车骑行。" initial-response="选项1需要1000+30+10 = 1040分钟。
选项2需要800+60+30 = 890分钟。由于选项2需要890分钟，选项1需要1040分钟，因此选项2更快。" max-tokens="256" box-rows="18" model-temp="0" top-p="0"></div>

## 结论

思维链已被证明对于算术、常识和符号推理等任务的结果有所改进(@wei2022chain)。特别是，在GSM8K(@cobbe2021training)基准测试上，PaLM 540B(@chowdhery2022palm)的提示达到了57%的解决率准确性。

import PromptedPaLM from '@site/docs/assets/intermediate/prompted_palm.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparison of models on the GSM8K benchmark (Wei et al.)
</div>

## 限制

重要的是，根据Wei等人的说法，“思维链仅在使用∼100B参数的模型时才会产生性能提升”。较小的模型编写了不合逻辑的思维链会导致精度比标准提示更差。通常，模型从思维链提示过程中获得性能提升的方式与模型的大小成比例。


## 备注

本章的写作过程中，没有对任何语言模型进行微调 😊.