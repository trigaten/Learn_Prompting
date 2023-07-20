---
sidebar_position: 1000
---

# 🟢 开始你的旅程


import Steps from '@site/docs/assets/basics/steps.svg';


<div style={{textAlign: 'center'}}>
  <Steps style={{width:"500px",height:"200px",verticalAlign:"top"}}/>
</div>
现在你已经了解了提示工程（prompt engineering）的基础知识，你已经可以开始自己尝试提示工程了。本课程的其余部分将包含更多的技术和资源，但学习 PE 的最好方法是开始用自己的提示（prompts）进行实验。本节将告诉你如何开始解决一个任意的提示工程问题。

假设你想要这样一个提示（prompt），它通过 ChatGPT 生成一个沉浸式的互动故事。

## Step 1: 研究

首先要做的是研究你想要的提示。除了谷歌之外，以下资源也非常有参考价值：

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) （以及类似的子版块）
- [Learn Prompting Discord](https://discord.gg/learn-prompting) （以及其他相关的讨论区，包括 [OpenAI Discord](https://discord.gg/openai)）

你可以先试试[这个提示](https://prompts.chat/#act-as-a-text-based-adventure-game)（by [Heroj04](https://github.com/Heroj04)）：

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. I want you to only reply with the game output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets {like this}. my first command is wake up

## Step 2: 实验

现在，我们将把提示放入 ChatGPT，看看会发生什么。

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}}/>
</div>

我们可以看到，它生成了一个故事，但它是在 csharp（一种编程语言）的代码块中写的。也许我们不想要这样的形式，所以我们将把提示修改成：

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. My first command is wake up

**ChatGPT 回答**:

```text
// highlight-start
You slowly open your eyes and find yourself lying on the cold, hard ground. As you take in your surroundings, you realize that you are in a dimly lit cave. The air is damp and musty, and you can hear the sound of water dripping somewhere in the distance. Your head is throbbing and you feel disoriented. You need to figure out where you are and how to get out of here.
// highlight-end
```

很好，现在它把故事输出为纯文本。然而，我们的提示缺乏细节。让我们在提示中增加一些结构：

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. Use flowery language and descriptive words. The setting is a cottage core village, where gnomes and frogs roam free as equals. Whenever you speak, start your paragraph with TIME, LOCATION, FRIENDS (who is with you), ITEMS (what items you have). My first command is wake up.

**ChatGPT 回答**:

```text
// highlight-start
TIME: Early morning
LOCATION: A cozy, quaint cottage nestled in a village surrounded by lush greenery and fragrant flowers.
FRIENDS: You are alone in your bedroom, snuggled under a cozy quilt.
ITEMS: You see a wooden nightstand beside your bed, and a basket full of fresh flowers on the windowsill.

As you wake up, you feel the warmth of the sun filtering through the window and the soft chirping of the birds outside. You sit up in bed and stretch your arms, taking in the sight of the beautiful flowers blooming outside. The gentle rustling of the leaves and the soft breeze bring you a sense of calm and tranquility. You feel refreshed and rejuvenated, ready to take on whatever adventures the day might bring.
// highlight-end
```

啊，完美，现在你可以通过 ChatGPT 实现你的田园梦了 🌸


## Step 3: 获取反馈并迭代

现在，给你的朋友/员工/老板看看，并向他们征求反馈意见。如果他们喜欢，很好！如果不喜欢，就迭代你的提示，直到得到你们都喜欢的东西。你也可以在上面提到的社区中征求反馈意见。这个步骤永远不会真正结束。你将一直对你的提示进行迭代，因为问题和人是随着时间变化的。

## 结论

做 *你* 想做的提示工程。我（本课程的维护者）总是从头开始写我的提示语。如何写出最好的提示语没有黄金标准；试验和错误是最好的学习方法。祝你学习愉快，祝你本课程的其余部分学习顺利！

:::note
本文的建议适用于所有的提示工程问题，而不仅仅是编写交互式故事！
:::


## 备注

- 在接下来的章节中，你可能会看到 **AI**、**模型**和 **LLM** 这三个词**交替使用**。相关详细信息，请参阅[词汇参考](https://learnprompting.org/docs/vocabulary) 。