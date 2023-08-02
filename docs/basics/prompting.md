---
sidebar_position: 1
---
# 🟢 Prompting

import Prompt from '@site/docs/assets/basics/prompt.svg';

<div style={{textAlign: 'center'}}>
  <Prompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>



In the previous chapter, we discussed AI and how humans can instruct AIs to perform tasks.
The process of instructing an AI to do a task is called prompting(@shin2020autoprompt). We tell the AI
a set of instructions (the prompt) and it performs the task. Prompts can be as simple as a instruction/question, or as complex as huge chunks of text. 

Here are two examples of prompts:

#### 1) Summarizing an Article

Say you are reading an article about snowfall in Florida. You want to quickly get the main ideas of the article, so you show the AI what you are reading, and ask for a summary[^2]:

```
It is very rare for snow to fall in the U.S. state of Florida, especially in the central and southern portions of the state. With the exception of the far northern areas of the state, most of the major cities in Florida have never recorded measurable snowfall, though trace amounts have been recorded, or flurries in the air observed few times each century. According to the National Weather Service, in the Florida Keys and Key West there is no known occurrence of snow flurries since the European colonization of the region more than 300 years ago. In Miami, Fort Lauderdale, and Palm Beach there has been only one known report of snow flurries observed in the air in more than 200 years; this occurred in January 1977. In any event, Miami, Fort Lauderdale, and Palm Beach have not seen snow flurries before or since this 1977 event.

Summarize this paragraph in a single sentence:
```

Here is the AI's response. It is a much shorter read!

```text
// highlight-start
Snowfall is extremely rare in Florida, with the exception of the far northern areas, and only one instance of snow flurries in the air has been recorded in the major cities of Miami, Fort Lauderdale, and Palm Beach in the last 200 years.
// highlight-end
```

#### 2) Math Word Problem Solving

If you have a dataset of mathematical equations that you would like a language model to solve,
you can create a prompt by posing the question "What is EQUATION".

For a given question, your full prompt could look like this:

```
What is 965*590?
```

For this prompt, GPT-3 (text-davinci-003) (an AI) sometimes answers 569,050 (incorrect). This is where prompt engineering comes in.

# Prompt Engineering

If, instead of asking `What is 965*590?`, we ask 
`Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct:`, GPT-3 will
answer `569350` (correct). Why is this the case? Why is telling the AI twice to give a correct answer helpful? How can we create
prompts that yield optimal results on our task? This last question, in particular,
is the focus of the field of Prompt Engineering, as well as this course.

:::caution
One more thing, if you are running the above prompt in GPT-3, you should set temperature to 0 to remove randomness. 
:::

Read on to learn how to engineer good prompts!

[^2]: This paragraph is from https://en.wikipedia.org/wiki/Snow_in_Florida
