---
sidebar_position: 0
---

# 🟢 Introduction

import Techniques from '@site/docs/assets/basics/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


This chapter introduces simple prompting techniques as well as terminology. In order to understand prompting/prompt engineering, you first need to understand some *very* basic AI concepts. If you already know about the below topics, feel free to skip ahead to the [next article](https://learnprompting.org/docs/basics/prompting).

## What is AI?

For our purposes, artificial intelligence (AI) is a field in which people have created
"smart" algorithms that "think" like humans[^1]. These algorithms can write **essays**, 
solve **math problems**, and create **art**. Recent advances in the field have created AIs
so advanced that they can write convincing **sales emails**, **news articles**, and even 
**win [art competitions](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/)**.

AI is currently revolutionizing many industries, including **journalism**, **healthcare**, and
**education**. You will likely see it deployed in your workplace/classroom soon if you have not
already. Although AI is extremely useful, it requires humans to direct it on what to do.
Often AIs are like very smart five-year-olds. They can do a lot of things, but they need 
careful instruction to do them well.

Being able to properly direct AIs is a very powerful skill. So, how do you communicate with them? 
The AIs this course discusses understand English (and other languages),
so we can usually just describe tasks that we want done. For example, we can tell an AI to
`Write an essay about the benefits of AI` and it would say[^2]:

```
In recent years, Artificial Intelligence (AI) has become a hot topic among the tech world. With its potential to revolutionize many aspects of our lives, AI is becoming increasingly relevant as technology continues to develop. From its applications in healthcare and transportation to its use in education and manufacturing, AI has already shown us its immense potential to benefit society in multiple ways.

The most obvious benefit of AI is its ability to automate mundane tasks. AI systems can be used to automate large-scale operations, such as data analysis, customer service, and even the production of goods. This frees up human labor to focus on complex, creative tasks that require more human intelligence and ingenuity. AI can also be used to analyze large amounts of data and make decisions in a fraction of the time it would take a human. This can be beneficial in industries such as finance, where AI can detect patterns in the stock market and offer insights that would otherwise go unnoticed.

AI can also be used to make predictions and generate insights that can be used to improve efficiency and accuracy. For instance, AI can be used to predict customer trends and preferences, helping businesses make better decisions and increase profits. AI can also be used to identify potential risks and opportunities in various industries, such as finance, healthcare, and manufacturing. This can help companies make informed decisions and reduce the risk of costly mistakes.

Finally, AI can be used to improve our understanding of the world. AI can be used to analyze large datasets and generate insights that can be used to better understand the world around us. This can be used to help us better understand the impacts of climate change, develop new treatments for diseases, and even predict events such as earthquakes and floods.

Overall, AI has the potential to revolutionize many aspects of our lives. From automating mundane tasks to generating insights and predictions, AI can be used to improve efficiency, accuracy, and our understanding of the world. As technology continues to develop, AI will become increasingly relevant and its potential to benefit society will only grow.
```

## Why should I care?

AI can be used to automate tasks that you spend countless hours doing *right now*.
We mentioned several examples above, but you can also consider any slightly repetitive task you do.
It could be writing emails, writing reports, or even writing code. If you can describe the task
to an AI, it can likely either do it for you or at least give you a starting point. 

## How do I get started?

Read the rest of this chapter, then check out other chapters that interest you.
In particular, the [applied prompting](https://learnprompting.org/docs/applied_prompting/overview) section may be of interest if you would like
to see how professionals use AI to automate their work. You can experiment with AIs
using resources like [Playground](https://beta.openai.com/playground), [other IDEs](https://learnprompting.org/docs/tooling/IDEs/intro), or simply using the interactive [embeds](https://learnprompting.org/docs/basics/intro#embeds) that you will see throughout this site.

Before reading the next article, it is important to note that you don't need any technical background to do prompt engineering. Most of it is trial and error, and you can learn as you go.

### Embeds

This course offers an interactive learning experience. You can experiment with exercises discussed in the course using [embeds](https://embed.learnprompting.org/) that are placed throughout the site.

Here is an **image** of what an embed looks like:

import lp_embed from '@site/docs/assets/basics/lp_embed.webp';
import key from '@site/docs/assets/basics/API_key.webp';

<div style={{textAlign: 'center'}}>
  <img src={lp_embed} style={{width: "750px"}}/>
</div>

You should be able to see an embed that looks exactly like this image right below this paragraph. If you can't, you may need to enable JavaScript or use a different browser.

<hr/>
Embed here:
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr/>

Assuming that you can see it, click on the **Generate** button. If this is your first time using it (or you are in a new browser/have cleared cookies), it will ask you to input an [OpenAI API key](https://platform.openai.com/account/api-keys). You can get a free key by clicking [this link](https://platform.openai.com/account/api-keys) and signing up for an OpenAI account. This key allows you to use OpenAI's AIs to generate text in the embeds. 

:::note
Although OpenAI provides free credits, you will eventually have to pay to use their AI. Fortunately, it is [relatively cheap](https://openai.com/pricing)!
:::

When you navigate to the [OpenAI API key](https://platform.openai.com/account/api-keys) page, click the **Create new secret key** button. It will pop up a modal that contains a string of text like this:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={key} style={{width: "750px"}} />
</div>

Put this key into the embed and hit **Save**. You should now be able to use the embeds throughout this site.

Now you have all of the information that you need to get started. Happy Learning!


[^1]: Technically, they are not "thinking" like humans, but this is a simple way to explain it.
[^2]: An AI (GPT-3 davinci-003) did in fact write this.
