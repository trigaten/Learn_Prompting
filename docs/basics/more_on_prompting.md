---
sidebar_position: 10
locale: en-us
style: chicago
---

# 🟢 More on Prompting

As we have seen in the previous pages, prompts can have varying formats and complexity. They can include context, instructions, multiple questions-answer examples, and even other prompts (what!?).

Here is an example of a prompt that includes context, instructions, and multiple examples:

```text
Twitter is a social media platform where users can post short messages called "tweets".
Tweets can be positive or negative, and we would like to be able to classify tweets as
positive or negative. Here are some examples of positive and negative tweets. Make sure 
to classify the last tweet correctly.

Q: Tweet: "What a beautiful day!"
Is this tweet positive or negative?

A: positive

Q: Tweet: "I hate this class"
Is this tweet positive or negative?

A: negative

Q: Tweet: "I love pockets on jeans"

A:
```

By adding additional context/examples, we can often improve the performance of AIs
on different tasks. The next chapter covers slightly more advanced prompting techniques.

## Notes

In the next chapters, you may see the words **AI, model, and LLM
used interchangeably**. See the [vocabulary reference](https://learnprompting.org/docs/vocabulary) for more information.

Prompts inside of prompts, or self-augmented prompts(@kojima2022large), will be 
covered in the next few sections.
