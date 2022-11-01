---
sidebar_position: 1
locale: en-us
style: chicago
---

# More on Prompting

Prompts that we saw in the prior examples consisted solely of a question. However, prompts can be much more complex than this; they can include context, instructions, multiple questions-answer
examples, and even other prompts (what!?).

Given the twitter sentiment analysis example, we could provide additional context,
as well as examples of positive and negative tweets:

```
Twitter is a social media platform where users can post short messages called "tweets".
Tweets can be positive or negative, and we would like to be able to classify tweets as
positive or negative. Here are some examples of positive and negative tweets:

Q: Tweet: "What a beautiful day!"
Is this tweet positive or negative?

A: positive

Q: Tweet: "I hate this class"
Is this tweet positive or negative?

A: negative

Q: Tweet: "I love pockets on jeans"

A:
```
With this additional context/examples LLMs are often able to perform better on the task.

Prompts inside of prompts, or self-augmented prompts (@kojima2022large) will be 
covered in the next few sections.