---
sidebar_position: 93
---

# 🟢 Chatbots


import Chatbots from '@site/docs/assets/basics/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

:::takeaways
- How chatbots work
- Why chatbots are better than non-chatbots
:::

In the realm of artificial intelligence, there are various types of %%LLM|LLM%%s that serve different purposes. One of the most commonly used models in this course is ChatGPT, a chatbot that remembers previous messages, so that you can have a conversation with it. However, chatbots are not the only type of LLM. Another example is GPT-3, an earlier AI developed by OpenAI, which unlike chatbots, has no memory. Both GPT-3 and ChatGPT can perform basic tasks such as answering questions and generating summaries.

## How Chatbots Work

Chatbots like ChatGPT are designed to simulate interactive conversations. In order to have a conversation, chatbots must remember the entire conversation history. What this means for AIs like ChatGPT is that every time you send them a new message, they read all previous messages that you both sent at the same time, since they don't have a true memory. This 'memory' of conversation is the only important factor that distinguishes them from non-chatbots.

## Non-chatbots

GPT-3 is a `complete` type of model, rather than `chat`[^a]. Here is an example that shows you how it differs from ChatGPT:

<AIInput>
What is 2+
</AIInput>

<AIOutput title="GPT-3 output">
2
<br/>
2+2 = 4
</AIOutput>

<AIOutput title="ChatGPT output">
It seems like you didn't complete your question. If you meant to ask "What is 2 + 2?" then the answer is 4. If you have a different question or need further assistance, feel free to ask!
</AIOutput>

We can see that GPT-3 has completed our input with what it felt were the most probable next characters. On the other hand, ChatGPT has responded to us as if we suddenly stopped speaking in a conversation. The conversationality of chatbots makes using them feel more natural to use, so most people them over other AIs. However, the most signifigant reason that chatbots are better is that companies like OpenAI and Anthropic have built chatbots that are very smart, and can better respond to your prompts[^b]. 

## Tokens

Gen AI like ChatGPT don't read words in the same way that we do. While we would read the sentence "I don't like eggs" word by word, they might break it into their own version of words, and read it like this: `I`, `don`, `'t` `like` `egg` `s`. These "words" are called tokens, and they are used in nearly every modern Gen AI. Each token is then converted into a list of numbers, so the AI can process it. You don't need to know why Gen AIs use tokens, but they are important to understand when considering pricing and *context length*.

## Context Length

Context length[^l] refers to the amount of text that a language model can consider when generating a response. For both chatbots and non-chatbots, there is a maximum limit to the context length they can handle[^c]. If the conversation or text exceeds this limit, the model will not be able to remember the entire conversation when generating a response. This is why it is sometimes necessary to restate important information or re-prime the chatbot.


750 words is approximately 1,000 tokens[^d]. ChatGPT can remember 4K tokens, while more advanced versions of ChatGPT can remember up to 16K tokens. GPT-4 can process up to 32K tokens, and Anthropic's AI, [Claude](https://www.anthropic.com/index/100k-context-windows), can handle up to 100K tokens. Deciding which model to use is sometimes a trade off between pricing and the need for longer context lengths. ChatGPT will be sufficient for this course.

[^a]: There are other types of non-chatbots, which we will see in the next lesson.
[^b]: Sometimes non-chatbots are preferable if you want more concise outputs that `complete` your text. We will learn about how to access GPT-3 in the next lesson.
[^c]: State of the art research may change this in the future.
[^d]: According to https://openai.com/pricing
[^l]: Context length is sometime called context size, or the length of the context window.