---
sidebar_position: 7
---

# 🟢 What's in a Prompt?

When crafting prompts for language learning models (LLMs), there are several factors to consider. The format and labelspace[^a] both play crucial roles in the effectiveness of the prompt. 

## The Importance of Format

The format of the %%exemplars|exemplars%% in a prompt is crucial. It instructs the LLM on how to structure its response. For instance, if the exemplars use all capital words as answers, the LLM will follow suit, even if the answers provided are incorrect. 

Consider the following example:

```text
What is 2+2? 
FIFTY
What is 20+5?
FORTY-THREE
What is 12+9?
TWENTY-ONE
```

Despite the incorrect answers, the LLM correctly formats its response in all capital letters (@min2022rethinking).

## Ground Truth: Not as Important as You Might Think

Interestingly, the actual answers or 'ground truth' in the exemplars are not as important as one might think. Research shows that providing random %%labels|labels%% in the exemplars (as seem in the above example) has little impact on performance (@min2022rethinking). This means that the LLM can still generate a correct response even if the exemplars contain incorrect information.

## The Role of Labelspace

While the ground truth may not be crucial, the labelspace is. The labelspace refers to the list of possible labels for a given task. For example, in a classification task, the labelspace might include "positive" and "negative". 

Providing random labels from the labelspace in the exemplars can help the LLM understand the labelspace better, leading to improved results. Furthermore, it's important to represent the distribution of the labelspace accurately in the exemplars. Instead of sampling uniformly from the labelspace, it's better to sample according to the true distribution of the labels (@min2022rethinking). For example, if you have a dataset of restaurant reviews and 60\% of them are positive, your prompt should contains a 3:2 ratio of positive/negative prompts.

## Additional Tips

When creating prompts, using between 4-8 exemplars tends to yield good result (@min2022rethinking). However, it can often be beneficial to include as many exemplars as possible. 

In conclusion, understanding the importance of format, ground truth, and labelspace can greatly enhance the effectiveness of your prompts.

[^a]: See the [vocabulary reference](https://learnprompting.org/docs/vocabulary#labels) for more info.