---
sidebar_position: 101
---

# 🟢 Pitfalls of LLMs

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- Understand the biases and problems that LLMs have
:::

Language Learning Models (LLMs) are powerful tools that have revolutionized many aspects of technology, from customer service to content creation. However, like any technology, they are not without their flaws. Understanding these pitfalls is crucial for effectively using LLMs and mitigating potential issues. This article will explore some of the common pitfalls of LLMs, including issues with citing sources, bias, hallucinations, math, and prompt hacking.

## Citing Sources

While LLMs can generate text that appears to cite sources, it's important to note that they **cannot accurately cite sources**. This is because they do not have access to the Internet and do not have the ability to remember where their training data came from. As a result, they often generate sources that seem plausible but are entirely fabricated. This is a significant limitation when using LLMs for tasks that require accurate source citation.

:::note
The issue of inaccurate source citation can be mitigated to some extent by using search augmented LLMs. These are LLMs that have the ability to search the Internet and other sources to provide more accurate information.
:::

## Bias

LLMs can exhibit bias in their responses, often generating stereotypical or prejudiced content. This is because they are trained on large datasets that may contain biased information. Despite safeguards put in place to prevent this, LLMs can sometimes produce sexist, racist, or homophobic content. This is a critical issue to be aware of when using LLMs in consumer-facing applications or in research, as it can lead to the propagation of harmful stereotypes and biased results.

## Hallucinations

LLMs can sometimes "hallucinate" or generate false information when asked a question they do not know the answer to. Instead of stating that they do not know the answer, they often generate a response that sounds confident but is incorrect. This can lead to the dissemination of misinformation and should be taken into account when using LLMs for tasks that require accurate information.

## Math

Despite their advanced capabilities, Large Language Models (LLMs) often struggle with mathematical tasks and can provide incorrect answers (even as simple as multiply two numbers). This is because they are trained on large volumes of text and math may require a different approach. 

:::note
The issue with math can be somewhat alleviated by using a tool augmented LLM, which combines the capabilities of an LLM with specialized tools for tasks like math.
:::

## Prompt Hacking

LLMs can be manipulated or "hacked" by users to generate specific content. This is known as prompt hacking and can be used to trick the LLM into generating inappropriate or harmful content. It's important to be aware of this potential issue when using LLMs, especially in public-facing applications. You can read more about prompt hacking [here](https://learnprompting.org/docs/category/-prompt-hacking).

## Conclusion

In conclusion, while LLMs are powerful and versatile tools, they come with a set of pitfalls that users need to be aware of. Issues with accurately citing sources, inherent biases, generating false information, difficulties with math, and susceptibility to prompt hacking are all challenges that need to be addressed when using these models. By understanding these limitations, we can use LLMs more effectively and responsibly, and work towards improving these models in the future.