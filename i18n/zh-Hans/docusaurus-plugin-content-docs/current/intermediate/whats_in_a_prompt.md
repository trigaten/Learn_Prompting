---
sidebar_position: 7
---

# 🟢 提示的关键要素

在之前的页面中，我们已经讨论了几种不同的提示策略。本页将提供一般建议，这些建议对于提示的实际编写很重要。

## “基本事实的重要性不大”

令人惊讶的是，在提示中提供少量 %%exemplars|exemplars%% 时，实际答案 (%%gold|gold_labels%%) 并不重要。正如下图所示，即使在样本中提供随机标签，性能也几乎不受影响(@min2022rethinking)。在此图像中，“演示”与示例相同。

import GoldUn from '@site/docs/assets/gold_unimportant.png';

<div style={{textAlign: 'center'}}>
  <img src={GoldUn} style={{width: "750px"}} />
</div>

## 标签空间很重要

尽管样本中的黄金标签并不重要，但 %%labelspace|labelspace%% 很重要。即使从标签空间中提供随机标签，也有助于大语言模型更好地理解标签空间并提高结果。此外，正确地在示例中表示标签空间的分布很重要。与在示例中从标签空间中均匀采样不同，最好按照标签的真实分布进行采样。

## 格式很重要

样本的格式或许是最重要的部分，因为它指示大语言格式如何正确地格式化其对提示的答案。

例如，请考虑以下样本。它们使用全大写的单词作为答案。尽管这些答案完全错误（2+2不是50），但 GPT-3 正确地回答了最后一个问题，并按照其他样本的格式进行回答。

```text
2+2等于多少？ 
五十
20+5等于多少？
四十三
12+9等于多少？
// highlight-start
二十一
// highlight-end
```

## 备注

使用 4 到 8 个样本是适合用于少量示例提示的合适数字(@min2022rethinking) ，但通常尽可能多地提供样本会更有帮助。

[^labelspace]: See the [vocabulary reference](https://learnprompting.org/docs/vocabulary#labels) for more info.
