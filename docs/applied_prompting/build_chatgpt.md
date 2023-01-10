---
sidebar_position: 4
---

# 🟢 Build ChatGPT from GPT-3

import Skippy from '../assets/skippy_chatbot.png'    
import SkippyHeader from '../assets/skippy_chatbot_header.png'    
import Therapy from '../assets/therapy_chatbot.gif'

<div style={{textAlign: 'left'}}>
  <img src={SkippyHeader} style={{width: "700px"}} />
</div>

ChatGPT has blown up in the past month, gaining a million users in just a week. What's crazy is that the underlying model, GPT-3 has been around for over 2 years!  

While the early versions of GPT-3 weren't as advanced as the current GPT-3.5 series, they were still impressive. What made ChatGPT so successful is its accessibility to the average person, regardless of their knowledge of data science, language models, or AI.   

With API access to the same powerful models that power ChatGPT, all you need is the **right interface** for the **right audience** to build a great product.   

Check out this tweet by Riley Goodside on making your own knock off ChatGPT using Open AI's API.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to make your own knock-off ChatGPT using GPT‑3 (text‑davinci‑003) — where you can customize the rules to your needs, and access the resulting chatbot over an API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">December 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

To summarize: ChatGPT is designed specifically for chat bots and it incorporates tuning and mitigations to make outputs "safer." Chat bots like ChatGPT can be built using a prompt that includes a transcript of previous exchanges.

Both ChatGPT and models in the GPT 3.5 series use RL and human feedback to optimize outputs. ChatGPT is by no means leaps and bounds better than the core GPT models. It mainly relies on a really good prompt.

## The Prompt

<div style={{textAlign: 'left'}}>
  <img src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Full Skippy chat bot prompt from article header</p>
</div>

<a href="https://learnprompting.org/docs/basics/prompting">Prompting is the process of instructing an AI to do something. </a> As you have probably seen in ChatGPT examples online, you can prompt GPT-3 with just about anything. Common use cases are summarizing text, writing content based on a description, or creating things like poems, recipes, and much more.

<p></p>

<a href="http://ai.stanford.edu/blog/in-context-learning/">The core abstraction to this process is input/output.</a> You input information and then the AI uses the data it was trained on to predict the best completion to your input.   

<p></p>

In the chat bot prompt above, I instruct Skippy to provide responses to users. GPT-3 picks up on the back-and-forth format, "USER: {user input}", SKIPPY: {skippy response}. Now when we provide the next input for a user, GPT-3 understands that Skippy is a chat bot and the previous exchanges are **a conversation.**

### Memorization

Past exchanges between Skippy and User get appended to  the next prompt. Each time we give more user input and get more chatbot output, the prompt expands to incorporate this new exchange. This is how chatbots like Skippy and ChatGPT can **remember what you previously asked it.**

Prompts can get massive after several exchanges, especially if we are using the chat bot to generate long responses like blog posts. Prompts sent to GPT-3 are converted into tokens, which are numerical representations of words or parts of words. This allows GPT-3 to efficiently process large amounts of text. 

There is a limit of 4097 tokens (about 3000 words) for the combined prompt and generated response for GPT-3 models, including ChatGPT. There are possible work arounds like using tactics like summarizing user inputs.

There are many different use cases of this prompting technique. ChatGPT is **optimized for answering questions efficiently with little context.** It will only ask follow ups if absolutely necessary.

It can sometimes, however, be helpful to have an AI chat bot ask follow ups. Below is an example prompt for a therapy chatbot that asks about the user's day.

<div style={{textAlign: 'left'}}>
  <img src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Therapy chatbot prompt</p>
</div>

## Implementation

I will walk through coding a simple GPT-3 powered chat bot in Python. Implementing GPT-3 into an app you are building is super easy because OpenAI has an API. You will need to create an account on OpenAI and get an API key. Check out their docs here.

Overview of what we need to do:

1. Format user input into a chatbot prompt for GPT-3
2. Get the chatbot response as a completion from GPT-3
3. Update the prompt with both the user's input and the chatbot's response
4. Loop

Here is the prompt I will use. We can use python to replace <conversation history\> and <user input\> with their actual values.

<pre style="white-space: pre-wrap; width: 50px">
    chatbot_prompt = """
        As an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.
        &lt;conversation history&lt;
        User: &lt;user input&lt;
        Chatbot:"""
</pre>


<!-- <pre style="white-space: pre-wrap;">
    chatbot_prompt = """
As an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.
&lt;conversation history&gt;
User: &lt;user input&gt;
Chatbot:"""
</pre>


<script src="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d.js"></script> -->

I keep track of both the next user input and the previous conversation. New input/output between chatbot and user is appended each loop.
<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">Here is a link</a> to the full code for a simple chat bot.

<p></p>

Now all that's left is to build a nice front-end that users can interact with! I implemented this example in Python for ease of understanding.

Written by [jayo78](https://twitter.com/jayo782).