---
sidebar_position: 7
---

# 🟢 What's in a Prompt?

We have gone through a few different prompting strategies in the previous pages.
This page will offer some general advice about what is actually important in a prompt.


## "Ground Truth Matters Little"


Surprisingly, when providing few shot %%exemplars|exemplars%% in prompts, the actual answers (%%gold|gold_labels%%) 
in the exemplars are not important. As shown in the figure below, providing random
%%labels|labels%% in the exemplars barely hurts performance(@min2022rethinking). "Demo" is synonymous
with exemplar in this image.

import GoldUn from '@site/docs/assets/intermediate/gold_unimportant.webp';

<div style={{textAlign: 'center'}}>
  <img src={GoldUn} style={{width: "750px"}}/>
</div>

## Labelspace Matters

Even though the gold labels in the exemplars are not important, the %%labelspace|labelspace%%
is. The labelspace is simply the list of the possible labels for a given task (e.g. "positive", "negative" in a classification task).
Even providing random labels from the labelspace helps the LLM get a better understanding
of the labelspace, and improves results. Additionally, properly representing the 
distribution of the labelspace in the exemplars is important. Rather than uniformly
sampling from the labelspace in the exemplars, it is better to sample according to the true distribution of the labels.

## Format Matters

Perhaps the most important part of exemplars is how they are formatted. This
format instructs the LLM on how to properly format its answer to the prompt.

For example, consider the below exemplars. They use all capital words as answers.
Even though the answers are completely wrong (2+2 is not 50), GPT-3 correctly answers
the last question, and follows the format of the others.

```text
What is 2+2? 
FIFTY
What is 20+5?
FORTY-THREE
What is 12+9?
// highlight-start
TWENTY-ONE
// highlight-end
```

## Notes

Between 4-8 exemplars is a good number to use for few shot prompts(@min2022rethinking),
but it can often be helpful to put as many as possible.

[^labelspace]: See the [vocabulary reference](https://learnprompting.org/docs/vocabulary#labels) for more info.
