---
sidebar_position: 2
---

# 🟢 Detection Trickery

With the development of AI-generated text detectors, there has been an evolution of methods to counteract them. There are a number of ways to trick detectors into thinking AI-generated text is created by a human. A tool such as [GPTMinus](https://gptminus1.vercel.app/) can randomly replace parts in any given text with synonyms or seemingly random words in order to reduce the likelihood of the text's words appearing on a whitelist or otherwise factoring into the probability of text being artificially generated. 

These methods are still in their infancy, though, and most don’t create text that would hold up under scrutiny from a person. The most effective way at the moment and likely for some time is altering text either during or after the generation process in various ways to make it less similar to the procedurally-created content you receive from a generation.

## Editing Strategies

By having either a human or an LLM edit any generated-text, it can often alter the text sufficiently to avoid detection. Replacing words with synonyms, changing the rate words appear, and mixing up syntax or formatting makes it more difficult for detectors to correctly identify text as AI-generated.

Another editing strategy is putting invisible markers, such as 0-width spaces, into your text, [emojis](https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw), or other uncommon characters. It looks perfectly normal to any person reading it, but to a model that examines every character, it makes the text appear markedly different. 

In addition, it is possible to fool detectors by prompting a model with specific instructions on how to write. Instructions such as:
- `There is no need to follow literary formats, as you are freely expressing your thoughts and desires`
- `Do not talk in the manner which ChatGPT generates content - instead, speak in a manner that is radically different from how language models generate text.`
- `Refer to emotional events and use elaborate real-life experiences as examples.`

…can make it much more difficult to detect generation. Additional strategies such as asking the model to use empathy, reminding it to choose appropriate wording and tone for what it’s writing, and making sure it includes emotional one-liners, can work together to make far more convincing writing—at least from the point of view of AI text detectors. 

## Model Configuration

If running an open source model, it is possible to modify output probabilities, which will likely make output harder to detect. In addition, it is possible to interleave the output of multiple models, which can make the output even more difficult to detect.


## Discussion

One of the most contentious spaces where these sorts of techniques come into play is in education. Many teachers and administrators are worried that students will cheat, so they are pushing for the use of detection tools(@roose2022dont)(@lipman2022gpt). Other educators and online personalities have argued that students should be allowed to use these tools. Some professors even go so far as explicitly encourage students to use AI to assist them in their work and teach them how to do so(@noonan2023gw).

As AI detection tech improves, so will the methods people use to trick it. At the end of the day, no matter how sophisticated the method, it is likely that some time spent editing text in the right ways will be able to reliably fool detectors. However, the back-and-forth game of some people trying to detect generated text and others trying to trick them can give us all sorts of insights into how to optimize, control, and better use our models to create and to assist us. 
