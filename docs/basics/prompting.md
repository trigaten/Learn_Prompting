---
sidebar_position: 10
---
# 🟢 Prompting With ChatGPT

import Prompt from '@site/docs/assets/basics/prompt.svg';

<div style={{textAlign: 'center'}}>
  <Prompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

:::takeaways
- Set up ChatGPT
- Use ChatGPT to summarize text and solve a math problem
:::

In the previous chapter, we discussed AI and how humans can instruct AIs to perform tasks.
Using a prompt to instruct an AI to do a task is called prompting(@shin2020autoprompt). We will explore prompting with [ChatGPT](http://chat.openai.com)[^a], a very popular Large Language Model (%%LLM|LLM%%), that can understand and write text. It was developed by OpenAI, and is currently the easiest Gen AI to work with. It is also completely free to use.

## Set up ChatGPT

To get started with ChatGPT, follow these steps:

- Navigate to [http://chat.openai.com](http://chat.openai.com)
- It should ask you to make an account. Go ahead and do so.

Here is a video that shows you how to get setup with ChatGPT.

## Test Some Prompts on ChatGPT

Now that we have ChatGPT set up, let's test out some prompts.

#### 1) Summarizing an Article

Say you are reading an article about snowfall in Florida. You want to quickly get the main ideas of the article, so you show the AI what you are reading, and ask for a summary[^b]:

<AIInput>
It is very rare for snow to fall in the U.S. state of Florida, especially in the central and southern portions of the state. With the exception of the far northern areas of the state, most of the major cities in Florida have never recorded measurable snowfall, though trace amounts have been recorded, or flurries in the air observed few times each century. According to the National Weather Service, in the Florida Keys and Key West there is no known occurrence of snow flurries since the European colonization of the region more than 300 years ago. In Miami, Fort Lauderdale, and Palm Beach there has been only one known report of snow flurries observed in the air in more than 200 years; this occurred in January 1977. In any event, Miami, Fort Lauderdale, and Palm Beach have not seen snow flurries before or since this 1977 event.

Summarize this paragraph in a single sentence:
</AIInput>

Here is ChatGPT's response. It is a much shorter read!

<AIOutput>
Snowfall is extremely rare in Florida, with the exception of the far northern areas, and only one instance of snow flurries in the air has been recorded in the major cities of Miami, Fort Lauderdale, and Palm Beach in the last 200 years.
</AIOutput>

:::caution
You will likely see a slightly different output. This will be the case for most prompts in this course. We will learn why later in this chapter.
:::

#### 2) Math Problem Solving

ChatGPT can also solve math problems! Let's give it a prompt with a simple problem.


<AIInput>
If I have 20 apples, eat three of them, and sell three more, how many do I have left?
</AIInput>

<AIOutput>
16
</AIOutput>


## Conclusion

You should now be comfortable with what a %%prompt|prompt%% is, and how to do some basic prompting with ChatGPT.
Keep in mind that *prompt* can be a verb or a noun. You can *prompt* a model or you can *give* a model a prompt. These two phrases mean the same thing. The action of giving a model a prompt is called prompting. We will learn more about prompting in the next lesson.




[^a]: GPT-4 is another model developed by OpenAI that is more advanced, but costs money.
[^b]: This paragraph is from https://en.wikipedia.org/wiki/Snow_in_Florida
