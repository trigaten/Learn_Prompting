---
sidebar_position: 1000
---

# 🟢 Starting Your Journey

:::takeaways
- Learn the steps of prompt engineering
:::

import Steps from '@site/docs/assets/basics/steps.svg';

<div style={{textAlign: 'center'}}>
  <Steps style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Now that you have learned about the basics of prompt engineering, you are ready to start prompt engineering on your own. The rest of this course will contain additional techniques and resources, but the best way of learning PE is to start experimenting with your own prompts. This lesson will show you how to get started with solving an arbitrary prompt engineering problem.

Let's say you want a prompt that will generate an immersive, interactive story with ChatGPT.

## Step 1: Research

The first thing to do is research the prompt you want. Aside from Googling, the following resources are very valuable:

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (and similar subreddits)
- [Learn Prompting Discord](https://discord.gg/learn-prompting) (and other relevant Discords, including the [OpenAI Discord](https://discord.gg/openai))

You might find [this one](https://prompts.chat/#act-as-a-text-based-adventure-game) by [Heroj04](https://github.com/Heroj04) to be a good starting point:
> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. I want you to only reply with the game output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets {like this}. my first command is wake up

## Step 2: Experiment

Now, we will put the prompt into ChatGPT and see what happens.

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}}/>
</div>

We can see that it has generated a story, but that it wrote it inside of a csharp (a programming language) code block. Perhaps we do not want this, so we will modify the prompt to:

<AIInput>
I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. My first command is wake up
</AIInput>

**ChatGPT response**:

<AIOutput>
You slowly open your eyes and find yourself lying on the cold, hard ground. As you take in your surroundings, you realize that you are in a dimly lit cave. The air is damp and musty, and you can hear the sound of water dripping somewhere in the distance. Your head is throbbing and you feel disoriented. You need to figure out where you are and how to get out of here.
</AIOutput>

Nice, now it outputs the story as plain text. However, our prompt lacks detail. Let's add some more structure to the prompt:

<AIInput>
I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. Use flowery language and descriptive words. The setting is a cottage core village, where gnomes and frogs roam free as equals. Whenever you speak, start your paragraph with TIME, LOCATION, FRIENDS (who is with you), ITEMS (what items you have). My first command is wake up.
</AIInput>

**ChatGPT response**:
<AIOutput>
TIME: Early morning
LOCATION: A cozy, quaint cottage nestled in a village surrounded by lush greenery and fragrant flowers.
FRIENDS: You are alone in your bedroom, snuggled under a cozy quilt.
ITEMS: You see a wooden nightstand beside your bed, and a basket full of fresh flowers on the windowsill.

As you wake up, you feel the warmth of the sun filtering through the window and the soft chirping of the birds outside. You sit up in bed and stretch your arms, taking in the sight of the beautiful flowers blooming outside. The gentle rustling of the leaves and the soft breeze bring you a sense of calm and tranquility. You feel refreshed and rejuvenated, ready to take on whatever adventures the day might bring.
</AIOutput>

Ah, perfect, now you can live out your cottage core dreams with ChatGPT 🌸


## Step 3: Get Feedback and Iterate

Now, show your friends/employees/boss and ask them for feedback. If they like it, great! If not, iterate on the prompt until you get something you both like. You can also ask for feedback in the communities mentioned above. This step never truly ends. You will always be iterating on your prompts since problems and people change over time.

## Conclusion

Do prompt engineering as *you* want to. I (the maintainer of this course) always write my prompts from scratch. There is no gold standard for how to write the best prompts; Trial and error is the best way to learn. Happy learning, and good luck with the rest of this course!

:::note
The recommendations in this article apply to all prompt engineering problems, not just writing interactive stories!
:::


## Notes

- In the next modules, you may see the words **AI, model, and LLM
used interchangeably**. See the [vocabulary reference](https://learnprompting.org/docs/vocabulary) for more information.