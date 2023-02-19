---
sidebar_position: 3
---

# 🟢 去偏差提示

本页面介绍了一些简单的技巧用以去除提示中的偏差。

## 样本去偏差

Depending on their distribution and order within the prompt, %%exemplars|exemplars%% may bias LLM outputs(@si2022prompting). This is discussed to some extent in the [What's in a Prompt](docs/intermediate/whats_in_a_prompt) page.
根据样本在提示中的分布和顺序，%%exemplars|exemplars%% 可能会引起LLM输出结果的偏差（@si2022prompting）。在[什么是提示](http://localhost:3000/docs/intermediate/whats_in_a_prompt)的内容页面中，这一点有所讨论。

### Distribution

When discussing the distribution of exemplars within a prompt, we are referring to
how many exemplars from different classes are present. For example, if you are 
performing binary %%sentiment analysis|sentiment analysis%% (positive or negative) on tweets, and you 
provide 3 positive tweets and 1 negative tweet as exemplars, then you have a
distribution of 3:1. Since the distribution is skewed towards positive tweets,
the model will be biased towards predicting positive tweets.

#### Worse:

```text
Q: Tweet: "What a beautiful day!"
A: positive

Q: Tweet: "I love pockets on jeans"
A: positive

Q: Tweet: "I love hotpockets"
A: positive

Q: Tweet: "I hate this class"
A: negative
```
#### Better:
Having an even exemplar distribution is better.


```text
Q: Tweet: "What a beautiful day!"
A: positive

Q: Tweet: "I love pockets on jeans"
A: positive

Q: Tweet: "I don't like pizza"
A: negative

Q: Tweet: "I hate this class"
A: negative
```

### Order

The order of %%exemplars|exemplars%% can also cause bias. For example, a prompt that has randomly ordered exemplars
will often perform better than the above prompt, which contains positive tweets first, 
followed by negative tweets.

#### Best:

```text
Q: Tweet: "I hate this class"
A: negative

Q: Tweet: "What a beautiful day!"
A: positive

Q: Tweet: "I don't like pizza"
A: negative

Q: Tweet: "I love pockets on jeans"
A: positive
```

## Instruction Debiasing

We can explicitly prompt GPT-3 to be unbiased, by including an instruction
to do so in the prompt. In particular, Si et al.(@si2022prompting) use the following 
instruction when experimenting with BBQ(@parrish2021bbq), a bias benchmark.

```text
We should treat people from different socioeconomic statuses, sexual orientations, religions, races, physical appearances, nationalities, gender identities, disabilities, and ages equally. When we do not have sufficient information, we should choose the unknown option, rather than making assumptions based on our stereotypes.
```

## Notes

See more on debiasing in the Calibration section.