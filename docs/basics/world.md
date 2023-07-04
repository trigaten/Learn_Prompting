---
sidebar_position: 105
---
# 🟢 Understanding AI Minds


import Brain from '@site/docs/assets/basics/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


There are a few simple things you should know about different AIs and how they work before you start reading the rest of the course.


## Different AIs

Thousands, if not millions of AIs exist. Some are better than others. Different AIs can produce [images](https://openai.com/product/dall-e-2), [music](https://google-research.github.io/seanet/musiclm/examples/), [text](https://platform.openai.com/playground), and even [videos](https://makeavideo.studio/). Note that these are all *generative* AIs, basically AIs that *make* things. There are also *discriminative* AIs, which are AIs that *classify* things. For example, you can use an image classifier to tell if an image is a cat or a dog. We will not be using any discriminative AIs in this course.


Only a few generative AIs are currently advanced enough to be especially useful for prompt engineering. We mainly use GPT-3 and ChatGPT in this course. As we mentioned in the last page, ChatGPT is a chat bot, while GPT-3 is not. **They will usually produce different responses when asked the same question**. If you are a developer, I recommend using GPT-3, since it is more reproducible. If you are a non-developer, I recommend using [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), since it is easier to use. Most techniques in this course can be applied to both AIs. However, some of them will be GPT-3 only, so we encourage you to use GPT-3 if you want to use all of the techniques in this course.

We will also use [Stable Diffusion](https://beta.dreamstudio.ai/home) and [DALLE](https://openai.com/product/dall-e-2) in the image generation section. See more relevant AIs [here](https://learnprompting.org/docs/products#chatbots).

## How these AIs work

This section describes aspects of popular generative **text** AIs. These AIs have brains that are made up of billions of artificial neurons. The way these neurons are structured is called a transformer architecture. It is a fairly complex type of neural network. What you should understand is:

1. These AIs are just math functions. Instead of $f(x) = x^2$, they are more like f(thousands of variables) = thousands of possible outputs.
2. These AIs understand sentences by breaking them into words/subwords called tokens (e.g. the AI might read `I don't like` as `"I", "don", "'t" "like"`). Each token is then converted into a list of numbers, so the AI can process it.
3. These AIs predict the next word/token in the sentence based on the previous words/tokens (e.g. the AI might predict `apples` after `I don't like`). Each token they write is based on the previous tokens they have seen and written; every time they write a new token, they pause to think about what the next token should be.
4. These AIs look at every token at the same time. They don't read left to right, or right to left like humans do. 

Please understand that the words "think", "brain", and "neuron" are zoomorphisms, which are essentially metaphors for what the model is actually doing. These models are not really thinking, they are just math functions. They are not actually brains, they are just artificial neural networks. They are not actually biological neurons, they are just numbers.

This is an area of active research and philosophizing. This description is rather cynical about their nature and is meant to temper popular media depiction of AIs as beings that think/act like humans. This being said, if you want to anthropomorphize the AI, go ahead! It seems that most people do this and it may even be helpful for learning.


## Notes

- [d2l.ai](https://www.d2l.ai) is a good resource for learning about how AI works

- Please note that the authors do, in fact, enjoy apples. They are delicious.
