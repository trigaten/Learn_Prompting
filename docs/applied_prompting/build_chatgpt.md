---
sidebar_position: 2
---

# 🟢 Build ChatGPT with GPT-3

import Skippy from '../assets/skippy_chatbot.png'    
import SkippyHeader from '../assets/skippy_chatbot_header.png'    
import Therapy from '../assets/therapy_chatbot.gif'

<div style={{textAlign: 'left'}}>
  <img src={SkippyHeader} style={{width: "700px"}} />
</div>

## Introduction

ChatGPT has blown up in the past month, gaining a million users in just a week. What's crazy is that the underlying model, GPT-3 was debuted in 2020 and released for public access <a href="https://openai.com/blog/api-no-waitlist/">over a year ago!</a>   

For those who don't know, ChatGPT is a new language model from OpenAI that was finetuned from GPT-3 to be <a href="https://openai.com/blog/chatgpt/">optimized for conversation.</a> It has a nice chat bot interface where you can give input and get a response from an AI assistant. Check it out at chat.openai.com. 

While the early versions of GPT-3 weren't as advanced as the current GPT-3.5 series, they were still impressive. These models have been available through an API and a <a href="https://beta.openai.com/playground">playground web UI interface</a> that lets you tune certain parameters and test out prompts. GPT-3 certainly gained a lot of traction, but it was no where near the virality of ChatGPT. 

What makes ChatGPT so successful, comparatively, is its accessibility as a straighforward product for the average person, regardless of their knowledge of data science, language models, or AI.  

In this article I overview how chat bots like ChatGPT can be implemented using a large language model like GPT-3.

## Motivation
This article was written in part because of a tweet by <a href="https://twitter.com/goodside">Riley Goodside</a> explaining how ChatGPT was probably implemented. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to make your own knock-off ChatGPT using GPT‑3 (text‑davinci‑003) — where you can customize the rules to your needs, and access the resulting chatbot over an API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">December 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

To summarize: ChatGPT is designed specifically for chat bots and it incorporates tuning and mitigations to make outputs "safer." Chat bots like ChatGPT can be built using a prompt that includes a transcript of previous exchanges.

Both ChatGPT and models in the GPT 3.5 series use RL and human feedback to optimize outputs. ChatGPT is by no means leaps and bounds better than the core GPT models. **It largely relies on a good prompt.**

## The Prompt

<div style={{textAlign: 'left'}}>
  <img src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Full Skippy chat bot prompt from article header</p>
</div>

<a href="https://learnprompting.org/docs/basics/prompting">Prompting is the process of instructing an AI to do something. </a> As you have probably seen in ChatGPT examples online, you can prompt GPT-3 with just about anything. Common use cases are summarizing text, writing content based on a description, or creating things like poems, recipes, and much more.

<p></p>

**The core abstraction to this process is input/output.** You input information and then the model uses the data it was trained on to predict the best completion to your input. An important thing to note is that an LLM like GPT-3 isn't responding to a prompt, it is determining what tokens come next based on a probability distribution of tokens is has seen during pre-training(@jurafsky2009). Put simply, it is figuring out what words comes next given some previous text. 

<p></p>

GPT-3 is able to learn in context based on a few examples or a simple instruction. This is called few-shot learning (@brown2020language). In the chat bot prompt above, I instruct Skippy to provide responses to users. GPT-3 picks up on the back-and-forth format, `USER: {user input}` and `SKIPPY: {skippy response}`. GPT-3 understands that Skippy is a chat bot and the previous exchanges are a conversation so that when we provide the next user input, "Skippy" will respond.

### Memorization

Past exchanges between Skippy and User get appended to  the next prompt. Each time we give more user input and get more chatbot output, the prompt expands to incorporate this new exchange. This is how chatbots like Skippy and ChatGPT can **remember previous inputs.** There is a limit, however, to how much a GPT-3 chat bot can remember.

Prompts can get massive after several exchanges, especially if we are using the chat bot to generate long responses like blog posts. Prompts sent to GPT-3 are converted into tokens, which are numerical representations of words or parts of words. This allows GPT-3 to efficiently process large amounts of text. There is a limit of <a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">4097 tokens (about 3000 words)</a> for the combined prompt and generated response for GPT-3 models, including ChatGPT. 

There are many different use cases of this expanding prompt technique. In my experience, ChatGPT will only ask follow ups if absolutely necessary or prompted to do so. **It is good at coming up with answer with little context.** It can sometimes, however, be helpful to have an AI chat bot ask follow ups. Below is an example prompt for a therapy chatbot that asks about the user's day.

<div style={{textAlign: 'left'}}>
  <img src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Therapy chatbot prompt</p>
</div>

## Implementation

I will walk through coding a simple GPT-3 powered chat bot in Python. Implementing GPT-3 into an app you are building is incredibly easy because OpenAI has an API. You will need to create an account on OpenAI and get an API key. Check out their docs <a href="https://beta.openai.com/docs/introduction">here.</a>

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
        "<conversation_history>", conversation_history).replace("<user input>", user_input)

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


<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">Here is a link</a> to the full code for a simple chat bot.

<p></p>

Now all that's left is to build a nice front-end that users can interact with! I implemented this example in Python for ease of understanding.

Written by [jayo78](https://twitter.com/jayo782).