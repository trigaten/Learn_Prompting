---
sidebar_position: 4
---

# 🟢 Build Chatbot from a KB

import ImageIntents from '../assets/chatbot_from_kb_intents.png'
import ImageGPT3 from '../assets/chatbot_from_kb_gpt3.png'
import ImageGPT3Organized from '../assets/chatbot_from_kb_gpt3_organized.png'
import ImagePrompt from '../assets/chatbot_from_kb_prompt.png'
import ImageLogin from '../assets/chatbot_from_kb_login.png'

Recent advancements in large language models (LLMs) such as [GPT-3](https://arxiv.org/abs/2005.14165) and [ChatGPT](https://chat.openai.com/chat) have created a lot of buzz in the tech industry. These models are incredibly powerful for content generation, but they also have some downsides such as bias(@nadeem-etal-2021-stereoset) and hallucinations(@Ji_2022). One area in which these LLMs can be particularly useful is chatbot development.

## Intent-Based Chatbots

Traditional chatbots are typically intent-based, meaning they are designed to respond to specific user intents. Each intent is made up of a set of sample questions and an associated response. For example, the intent “Weather” might include sample questions like “What’s the weather today?” or “Will it rain today?” and a response like “Today will be sunny.” When a user asks a question, the chatbot matches it to the intent with the most similar sample questions and returns the associated response.

<div style={{textAlign: 'left'}}>
  <img src={ImageIntents} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>How a traditional intent-based chatbot works. Image by the author.</p>
</div>

However, intent-based chatbots have their own set of problems. One issue is that they require a large number of specific intents to give specific answers. For example, user utterances like “I can’t login”, “I forgot my password”, or “Login error” may need three different answers and therefore three different intents, even though they are all quite similar.

## How GPT-3 Can Help

This is where GPT-3 can be particularly useful. Instead of having many very specific intents, each intent can be broader and leverage a [Knowledge Base](https://en.wikipedia.org/wiki/Knowledge_base) document (e.g. one intent for “login problems,” one intent for “how to subscribe,” etc.). Each intent is associated with a document instead of a list of questions and a specific answer. When a user asks a question about login, we can pass the “login problems” document to GPT-3 as context information and generate a specific response to the user’s question.


<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>How a chatbot leveraging GPT-3 could work. Image by the author.</p>
</div>

This approach reduces the number of intents that need to be managed and allows for answers that are better adapted to each question. Additionally, if the document associated with the intent describes different processes (e.g. a process for “login on the website” and another for “login on the mobile app”), GPT-3 can automatically ask the user for clarification before giving the final answer.

## Why Can’t We Pass the Whole KB to GPT-3?

Today, LLMs like GPT-3 have a maximum prompt size of about 4k tokens (for the [`text-davinci-003`](https://beta.openai.com/docs/models/gpt-3) model), which is a lot but not enough for feeding a whole knowledge base into a single prompt. The LLMs have a maximum prompt size for computational reasons, as generating text with them involves a number of computations which quickly increases as the prompt size increases.

Future LLMs may not have this limitation while retaining the text generation capabilities. However, for now, we need to design a solution around it.

## How a Chatbot With GPT-3 Could Work

So, the chatbot pipeline could be made of two steps:

1. First, we need to select the appropriate intent for the user question, i.e. we need to retrieve the right document from our knowledge base.
2. Then, once we have the right document, we can leverage GPT-3 to generate an appropriate answer for the user. In doing so, we’ll need to craft a good prompt.

The first step is essentially solved by [semantic search](https://en.wikipedia.org/wiki/Semantic_search). We can use pre-trained models from the [`sentence-transformers`](https://www.sbert.net/examples/applications/semantic-search/README.html) library and easily assign a score to each document. The document with the highest score is the one that will be used to generate the chatbot answer.

<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3Organized} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>How a chatbot leveraging GPT-3 could work. GPT-3 could be used to generate an appropriate answer leveraging the information from knowledge base documents. Image by the author.</p>
</div>

## Generating Answers with GPT-3

Once we have the right document, we’ll need to create a good prompt to be used with GPT-3 to generate the answer. In the following experiments, we’ll always use the `text-davinci-003` model with a temperature of `0.7`.

To craft the prompt, we’ll experiment using:

- [**Role-prompting**](https://learnprompting.org/docs/basics/roles): a heuristic technique that assigns a specific role to the AI.
- **Relevant KB information**, i.e. the document retrieved in the semantic search step.
- **The last messages exchanged between the user and the chatbot**. These are useful for messages sent by the user where the whole context is not specified. We’ll see an example of it later. Have a look at [this example](https://learnprompting.org/docs/applied_prompting/build_chatgpt) to see how to manage conversations with GPT-3.
- Last, **the user question**.

<div style={{textAlign: 'left'}}>
  <img src={ImagePrompt} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Information used to craft our GPT-3 prompt. Image by the author.</p>
</div>

Let’s start our prompt using the <span style={{backgroundColor: "#FFF2CC"}}>role-prompting</span> technique.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.</span><br/>
</pre>

Then, suppose the semantic search step extracts the following document from our knowledge base. All the documents describe how the VideoGram product works, which is an imaginary product similar to Instagram, but only for videos.

<div style={{textAlign: 'left'}}>
  <img src={ImageLogin} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>A document explaining how login to VideoGram works. Image by the author.</p>
</div>

We can add <span style={{backgroundColor: "#FFF2CC"}}>its content</span> inside the prompt in this way.

<pre>
    As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.<br/><br/>

    <span style={{backgroundColor: "#FFF2CC"}}>
    START CONTEXT<br/>
    Login to VideoGram from Website<br/>
    1. Open your web browser and go to the VideoGram website.<br/>
    2. Click on the “Login” button located in the top right corner of the page.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, click on the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    <br/>
    Login to VideoGram from Mobile App<br/>
    1. Open the VideoGram app on your mobile device.<br/>
    2. On the main page, tap the “Login” button located in the bottom right corner. 3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, tap the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    END CONTEXT<br/>
    </span>
</pre>

Last, we need to add <span style={{backgroundColor: "#FFF2CC"}}>the conversation and the user question</span> to the end of the prompt, like in the following example.

<pre>
    As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.<br/>
    <br/>
    START CONTEXT<br/>
    Login to VideoGram from Website<br/>
    1. Open your web browser and go to the VideoGram website.<br/>
    2. Click on the “Login” button located in the top right corner of the page.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, click on the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    <br/>
    Login to VideoGram from Mobile App<br/>
    1. Open the VideoGram app on your mobile device.<br/>
    2. On the main page, tap the “Login” button located in the bottom right corner. 3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, tap the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    END CONTEXT<br/>
    <br/>
    <span style={{backgroundColor: "#FFF2CC"}}>SKIPPY: Hello, I’m Skippy! How can I help you?<br/>
    USER: I can’t find the login button.<br/>
    SKIPPY:</span><br/>
</pre>

Passing this prompt to GPT-3, I got the following generated answer.

<pre>
    <span style={{backgroundColor: "#D2F4D3"}}>No problem! On the website, the login button is located in the top right corner of the page. On the mobile app, the login button is located in the bottom right corner. Let me know if you need any further assistance!</span>
</pre>

Notice how the information in the generated answer comes from the knowledge base document.

## Disambiguating Questions with GPT-3

Let’s try with a more vague user utterance, like <span style={{backgroundColor: "#FFF2CC"}}>“can’t login”</span>. Here’s the complete prompt.

<pre>
    As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.<br/>
    <br/>
    START CONTEXT<br/>
    Login to VideoGram from Website<br/>
    1. Open your web browser and go to the VideoGram website.<br/>
    2. Click on the “Login” button located in the top right corner of the page.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, click on the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    <br/>
    Login to VideoGram from Mobile App<br/>
    1. Open the VideoGram app on your mobile device.<br/>
    2. On the main page, tap the “Login” button located in the bottom right corner. 3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, tap the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    END CONTEXT<br/>
    <br/>
    SKIPPY: Hello, I’m Skippy! How can I help you?<br/>
    USER: <span style={{backgroundColor: "#FFF2CC"}}>Can’t login</span><br/>
    SKIPPY:<br/>
</pre>

GPT-3 answers trying to understand better what’s the problem of the user.

<pre>
    <span style={{backgroundColor: "#D2F4D3"}}>I’m sorry to hear that. Can you tell me if you are trying to login via the VideoGram website or mobile app?</span>
</pre>

Next, here’s how the complete conversation goes. The whole prompt is hidden for better visibility.

<pre>
    USER: Can’t login<br/>
    SKIPPY: I’m sorry to hear that. Can you tell me if you are trying to login via the VideoGram website or mobile app?<br/>
    USER: Mobile app<br/>
    <span style={{backgroundColor: "#D2F4D3"}}>SKIPPY: OK, no problem. To login via the mobile app, open the VideoGram app on your mobile device. On the main page, tap the “Login” button located in the bottom right corner. On the login page, enter your VideoGram username and password. Once you have entered your credentials, tap the “Login” button. You should now be logged in to your VideoGram account. Please let me know if you need any further assistance.</span><br/>
</pre>

GPT-3 can manage disambiguation, provided that it has the right contextual information.

## Problems With Generating Answers with GPT-3

The previous examples worked well. However, there are several ways in which this chatbot could fail.

If we ask “Is the mobile app free?” to GPT-3 passing the login document as context, you’d often get an answer like “Yes, the VideoGram mobile app is free to download and use”, even if such information is not contained in the context information. Generating false information is very bad for customer service chatbots!

GPT-3 rarely generates false information when the answer to the user question can be found in the context. As user questions are often short and ambiguous texts, we can’t rely on the semantic search step to always retrieve a correct document, and so we are always vulnerable to false information generated.

## Conclusion

GPT-3 is very useful for creating conversational chatbots and is able to answer a series of specific questions on the basis of contextual information inserted in the prompt. However, it’s hard to make the model produce answers leveraging only the information in the context, as the model tends to hallucinate (i.e. generating new information, potentially false). Generating false information is a problem of different severity depending on the use case.

Written by [Fabio Chiusano](https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/).

<!--
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


<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">Here is a link</a> to the full code for a simple chatbot.

<p></p>

Now all that's left is to build a nice front-end that users can interact with!

Written by [jayo78](https://twitter.com/jayo782).

-->