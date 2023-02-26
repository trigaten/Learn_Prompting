---
sidebar_position: 200
---
# 🟢 Understanding AI Minds

Hello reader, congratulations on getting through the intro chapter. You are off to a great start in this very exciting field. There are a few things you should know about different AIs and how they work before you start reading the rest of the course.

## Different AIs

Thousands if not millions of AIs exist. Some are better than others. Only a few are currently advanced enough to be especially useful for prompt engineering. We mainly use GPT-3 and ChatGPT in this course.

As we mentioned in the last page, ChatGPT is a chat bot, while GPT-3 is not. They will usually produce different responses when asked the same question. If you are a developer, I recommend using GPT-3, since it is more reproducible. If you are a non-developer, I recommend using ChatGPT, since it is easier to use. Most techniques in this course can be applied to both AIs.

## How AIs work

These AIs have brains that are made up of billions of artificial neurons. The way these neurons are structured is called a transformer architecture. It is a fairly complex type of neural network. What you should understand is:

1. These AIs are just math functions. Instead of f(x) = x^2, they are more like f(thousands of variables) = thousands of possible outputs.
2. These AIs understand sentences by breaking them into words/subwords (tokens). (e.g. the AI might read `I don't like` as `"I", "don", "'t" "like"`). Each token is then converted into a list of numbers, so the AI can process it.
3. These AIs predict the next word/token in the sentence based on the previous words/tokens (e.g. the AI might predict `apples` after `I don't like`). Each token they write is based on the previous tokens they have seen and written; every time they write a new token, they pause to think about what the next token should be.
4. These AIs look at every token at the same time. They don't read left to right, or right to left. 

Please understand that the words "think", "brain", and "neuron" are zoomorphisms, which are essentially metaphors for what the model is actually doing. These models are not really thinking, they are just math functions. They are not actually brains, they are just artificial neural networks. They are not actually biological neurons, they are just numbers.

This is an area of active research and philosophizing. This description is rather cynical about their nature and is meant to temper popular media depiction of AIs as beings that think/act like humans. This being said, if you want to anthropomorphize the AI, go ahead! It seems that most people do this.


## Notes

- [d2l.ai](https://www.d2l.ai) is a good resource to learn about how AI works

- Please note that the authors do, in fact, enjoy apples. They are delicious.
