---
sidebar_position: 4
---

# 🟢 Build ChatGPT from GPT-3

import Skippy from '@site/docs/assets/basic_applications/skippy_chatbot.webp'    
import SkippyHeader from '@site/docs/assets/basic_applications/skippy_chatbot_header.webp'    
import Therapy from '@site/docs/assets/basic_applications/therapy_chatbot.gif'
import ChatGPT from '@site/docs/assets/basic_applications/chatgpt_ui_diagram.webp'

<div style={{textAlign: 'left'}}>
  <img src={SkippyHeader} style={{width: "700px"}} />
</div>

## Introduction

[ChatGPT](https://chat.openai.com/chat) has blown up in the past month, gaining a million users in just a week. Surprisingly, the underlying model, GPT-3 debuted in 2020 and was released for public access <a href="https://openai.com/blog/api-no-waitlist/">over a year ago!</a>   

For those who don't know, ChatGPT is a new language model from OpenAI that was finetuned from GPT-3 to be optimized for conversation (@chatgpt2022). It has a user-friendly chat interface, where you can give input and get a response from an AI assistant. Check it out at [chat.openai.com](https://chat.openai.com/chat).

While the early versions of GPT-3 weren't as advanced as the current GPT-3.5 series, they were still impressive. These models have been available through an API and a <a href="https://beta.openai.com/playground">playground web UI interface</a> that lets you tune certain configuration hyperparameters and test prompts. GPT-3 gained significant traction, but it did not approach the virality of ChatGPT.

What makes ChatGPT so successful, compared to GPT-3, is it's accessibility as a straightforward AI assistant for the average person, regardless of their knowledge of data science, language models, or AI.

In this article, I overview how chatbots like ChatGPT can be implemented using a large language model like GPT-3.

## Motivation
This article was written in part because of a tweet by <a href="https://twitter.com/goodside">Riley Goodside</a>, noting how ChatGPT could have been implemented.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to make your own knock-off ChatGPT using GPT‑3 (text‑davinci‑003) — where you can customize the rules to your needs, and access the resulting chatbot over an API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">December 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Like other models in the GPT-3.5 series, ChatGPT was trained using [RLHF](https://huggingface.co/blog/rlhf), but much of it's effectiveness comes from using a **good prompt**.

## The Prompt

<div style={{textAlign: 'left'}}>
  <img src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Full Skippy chatbot prompt from article header</p>
</div>

<a href="https://learnprompting.org/docs/basics/prompting">Prompting is the process of instructing an AI to do something. </a> As you have probably seen in ChatGPT examples online, you can prompt it to do just about anything. Common use cases are summarizing text, writing content based on a description, or creating things like poems, recipes, and much more.

<p></p>

ChatGPT is both a language model and user interface. The prompt input by a user to the interface is actually inserted into a larger prompt that contains the entire conversation between the user and ChatGPT. This allows the underlying language model to understand the context of the conversation and respond appropriately.

<div style={{textAlign: 'left'}}>
  <img src={ChatGPT} style={{width: "600px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Example insertion of user prompt before sending to model</p>
</div>

The language model completes the prompt by figuring out what words come next based on probabilities it learned during pre-training(@jurafsky2009).

<p></p>

GPT-3 is able to 'learn' from a simple instruction or a few examples in the prompt. The latter is called few-shot, or in context learning (@brown2020language). In the chatbot prompt above, I create a fictitious chatbot named Skippy, and instruct it to provide responses to users. GPT-3 picks up on the back-and-forth format, `USER: {user input}` and `SKIPPY: {skippy response}`. GPT-3 understands that Skippy is a chatbot and the previous exchanges are a conversation, so that when we provide the next user input, "Skippy" will respond.

### Memorization

Past exchanges between Skippy and the user get appended to the next prompt. Each time we give more user input and get more chatbot output, the prompt expands to incorporate this new exchange. This is how chatbots like Skippy and ChatGPT can **remember previous inputs.** There is a limit, however, to how much a GPT-3 chatbot can remember.

Prompts can get massive after several exchanges, especially if we are using the chatbot to generate long responses like blog posts. Prompts sent to GPT-3 are converted into tokens, which are individual words or parts of them. There is a limit of <a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">4097 tokens (about 3000 words)</a> for the combined prompt and generated response for GPT-3 models, including ChatGPT.

### A Few Examples

There are many different use cases of chatbot prompts that store previous conversations. ChatGPT is meant to be an all purpose general assistant and in my experience, it rarely asks follow ups.

#### Therapy chatbot that asks about your day

It can be helpful to have a chatbot that actively asks questions and gets feedback from the user. Below is an example therapy chatbot prompt that will ask questions and follow ups to help a user think about their day.

<div style={{textAlign: 'left'}}>
  <img src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Therapy chatbot prompt</p>
</div>

#### Talk to your younger self using old journal entries

<a href="https://twitter.com/michellehuang42">Michelle Huang</a> used GPT-3 to have a chat with her younger self. The prompt uses some context, in this case old journal entries, paired with a chatbot style back and forth format. GPT-3 is able to mimic a personality based on these entries.

<p></p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my &quot;inner child&quot;<br/><br/>some reflections below:</p>&mdash; michelle huang (@michellehuang42) <a href="https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw">November 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Prompt from the Tweet:
```markdown
The following is a conversation with Present Michelle (age [redacted]) and Young Michelle (age 14).

Young Michelle has written the following journal entries:
[diary entries here]

Present Michelle: [type your questions here]
```

The author does note that diary entries can reach the token limit. In this case you could pick a select few entries or try to summarize several entries.

## Implementation

I will walk through coding a simple GPT-3 powered chatbot in Python. Including GPT-3 in an app you are building is incredibly easy using the OpenAI API. You will need to create an account on OpenAI and get an API key. Check out their docs <a href="https://beta.openai.com/docs/introduction">here.</a>

Overview of what we need to do:

1. Format user input into a chatbot prompt for GPT-3
2. Get the chatbot response as a completion from GPT-3
3. Update the prompt with both the user's input and the chatbot's response
4. Loop

Here is the prompt I will use. We can use python to replace <conversation history\> and <user input\> with their actual values.

```python
chatbot_prompt = """
    As an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.

    <conversation history>

    User: <user input>
    Chatbot:"""
```

I keep track of both the next user input and the previous conversation. New input/output between chatbot and user is appended each loop.
```python
import openai

openai.api_key = "YOUR API KEY HERE"
model_engine = "text-davinci-003"
chatbot_prompt = """
As an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.

<conversation history>

User: <user input>
Chatbot:"""


def get_response(conversation_history, user_input):
    prompt = chatbot_prompt.replace(
        "<conversation history>", conversation_history).replace("<user input>", user_input)

    # Get the response from GPT-3
    response = openai.Completion.create(
        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)

    # Extract the response from the response object
    response_text = response["choices"][0]["text"]

    chatbot_response = response_text.strip()

    return chatbot_response


def main():
    conversation_history = ""

    while True:
        user_input = input("> ")
        if user_input == "exit":
            break
        chatbot_response = get_response(conversation_history, user_input)
        print(f"Chatbot: {chatbot_response}")
        conversation_history += f"User: {user_input}\nChatbot: {chatbot_response}\n"

main()
```

<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">Here is a link</a> to the full code for a simple chatbot.

<p></p>

Now all that's left is to build a nice front-end that users can interact with!

Written by [jayo78](https://twitter.com/jayo782).