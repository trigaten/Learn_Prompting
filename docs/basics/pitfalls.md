---
sidebar_position: 101
---

# 🟢 Pitfalls of LLMs

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

:::takeaways
- Understand the many problems that LLMs have
:::

LLMs are extremely powerful, but they are by no means perfect. There are many pitfalls that you should be aware of when using them.

## Citing Sources

LLMs for the most part **cannot accurately cite sources**. This is because they do not have access to the Internet, and do not exactly remember where their information came from. They will frequently generate sources that look good, but are entirely inaccurate.

:::note
Strategies like search augmented LLMs (LLMs that can search the Internet and other sources) can often fix this problem
:::

## Bias

LLMs are often biased towards generating stereotypical responses. Even with safe guards in place, they will sometimes say sexist/racist/homophobic things. Be careful when using LLMs in consumer-facing applications, and also be careful when using them in research (they can generate biased results).

## Hallucinations

LLMs will frequently generate falsehoods when asked a question that they do not know the answer to. Sometimes they will state that they do not know the answer, but much of the time they will confidently give a wrong answer.

## Math

LLMs are often bad at math. They have difficulty solving simple math problems, and they are often unable to solve more complex math problems.

:::note
This problem can be fixed to some extent by using a [tool augmented LLM](https://learnprompting.org/docs/advanced_applications/mrkl).
:::

## Prompt Hacking

Users can often trick LLMs into generating any content they want. Read more about this [here](https://learnprompting.org/docs/category/-prompt-hacking).