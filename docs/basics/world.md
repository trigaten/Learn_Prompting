---
sidebar_position: 105
---
# 🟢 Understanding AI Minds


import Brain from '@site/docs/assets/basics/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- There are many different types of AIs
- Basics of how LLMs work
:::


Before delving into the rest of the course, it's important to grasp some fundamental concepts about various AIs and their functioning. This foundational knowledge will provide a clearer understanding of the material that follows.


## Different AIs

The landscape of artificial intelligence is vast and varied[^a], encompassing thousands, if not millions, of distinct models. These models boast a broad spectrum of capabilities and applications. Some are generative, engineered to create outputs such as [images](https://openai.com/product/dall-e-2), [music](https://google-research.github.io/seanet/musiclm/examples/), [text](https://platform.openai.com/playground), and even [videos](https://makeavideo.studio/). In contrast, others are discriminative, designed to classify or differentiate between various inputs, like an image classifier distinguishing between cats and dogs. This course, however, will concentrate solely on generative AIs.

Among generative AIs, only a select few possess the advanced capabilities that make them particularly useful for prompt engineering. In this course, we will primarily focus on ChatGPT and other Large Language Models (LLMs). The techniques we explore are applicable to most LLMs.

As we venture into the realm of image generation, we'll explore the use of [Stable Diffusion](https://beta.dreamstudio.ai/home) and [DALLE](https://openai.com/product/dall-e-2).

## How Large Language Models Work

Generative text AIs, such as GPT-3 and ChatGPT, operate based on a complex type of neural network known as a transformer architecture. This architecture comprises billions of artificial neurons. Here are some key points to understand about how these AIs work:

1. At their core, these AIs are mathematical functions. Instead of a simple function like $f(x) = x^2$, think of them as functions with thousands of variables leading to thousands of possible outputs.
2. These AIs process sentences by breaking them into units called tokens, which can be words or subwords. For example, the AI might read `I don't like` as `"I", "don", "'t", "like"`. Each token is then converted into a list of numbers for the AI to process.
3. The AIs generate text by predicting the next token based on the previous ones. For instance, after `I don't like`, the AI might predict `apples`[^b]. Each new token they generate is influenced by the previous tokens.
4. Unlike humans who read from left to right or right to left, these AIs consider all tokens simultaneously.

It is important to note that terms like "think", "brain", and "neuron" are metaphors used to describe the workings of these AIs. In reality, these models are mathematical functions, not biological entities. They don't "think" in the way humans do; they calculate based on the data they've been trained on.

## Conclusion

Understanding the fundamental workings of AI is crucial as we delve deeper into this course. While it's tempting to anthropomorphize AI for easier understanding, it's essential to remember that these models are mathematical functions, not thinking beings. They operate based on data and algorithms, not human cognition. As we continue to explore and debate the nature and capabilities of AI, this foundational knowledge will serve as a guide, helping us navigate the complex and fascinating world of artificial intelligence.

[^a]: [d2l.ai](https://www.d2l.ai) is a good resource for learning about how AI works

[^b]: Please note that the authors do, in fact, enjoy apples. They are delicious.
