---
sidebar_position: 80
---

# 🟢 Chatbot Basics


import Chatbots from '@site/docs/assets/basics/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Thus far, this course has mostly used GPT-3 for examples. GPT-3 is a LLM that has no memory. When you ask it a question (a prompt), it does not remember anything that you have previously asked it. In contrast, chatbots like [ChatGPT](https://chat.openai.com) are able to **remember your conversation history**. This can be useful for applications such as customer service or simply if you want to have a conversation with a LLM!

Just like GPT-3, chatbots can answer questions, provide summaries, analysis, and write text or code. The real value of chatbots is only accessible when you use good prompts. In this article, we’ll explore some basic methods for how to better utilize chatbots, such as using style guidance, descriptors, and priming [^a]. 

## Modifying Your Prompt

### Style Guidance

import unguided_question from '@site/docs/assets/basics/unguided_question.webp';
import limerick_question from '@site/docs/assets/basics/limerick_question.webp';

Style guidance is simply asking the AI to speak in a certain style. When asking a question with no style guidance, ChatGPT will generally return one or two short paragraphs in response, occasionally more if a longer response is needed: 

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}}/>
</div>

It speaks in a moderately formal tone and gives a couple details—pretty good! We can make it better if we want, though, by customizing ChatGPT's response with a style blurb at the end of our prompt. If we want a more conversational response, we can ask it to speak in a friendly or informal tone; if we want a more readable format, we can give it the same question but ask for a bulleted list; if we want an amusing response, we can ask it to give its answer in the form of a series of limericks (a personal favorite of mine).

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={limerick_question} style={{width: "450px"}} />
</div>

An example of a more detailed style prompt might look something like: 
>[Question] “Write in the style and quality of an expert in [field] with 20+ years of experience and multiple Ph.D.'s. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.“ 

Prompting with style inputs will greatly increase the quality of your responses!

### Descriptors

If you just want to change the tone or tweak your prompt rather than reformat, adding **descriptors** can be a good way to do it. Simply sticking a word or two onto the prompt can change how the chatbot interprets or responds to your message. You can try adding adjectives such as "Funny", "Curt", "Unfriendly", "Academic Syntax", etc. to the end of prompts to see how your responses change! 

## Priming Prompt

Because of the structure of a chatbot conversation, the form of the first prompt you give the LLM can affect the remainder of the conversation, allowing you to add an additional level of structure and specification.
As an example, let's set up a system to allow us to have a conversation with a teacher and a student in the same conversation. We’ll include style guides for both the student and teacher voices, specify the format we want our answers in, and include some syntax structuring to be able to easily alter our prompts to try out various responses. 

    “Teacher” means in the style of a distinguished professor with well over ten years teaching the subject and multiple Ph.D.’s in the field. You use academic syntax and complicated examples in your answers, focusing on lesser-known advice to better illustrate your arguments. Your language should be sophisticated but not overly complex. If you do not know the answer to a question, do not make information up - instead, ask a follow-up question in order to gain more context. Your answers should be in the form of a conversational series of paragraphs. Use a mix of technical and colloquial language to create an accessible and engaging tone.  

    “Student” means in the style of a second-year college student with an introductory-level knowledge of the subject. You explain concepts simply using real-life examples. Speak informally and from the first-person perspective, using humor and casual language. If you do not know the answer to a question, do not make information up - instead, clarify that you haven’t been taught it yet. Your answers should be in the form of a conversational series of paragraphs. Use colloquial language to create an entertaining and engaging tone. 

    “Critique” means to analyze the given text and provide feedback. 
    “Summarize” means to provide key details from a text.
    “Respond” means to answer a question from the given perspective. 

    Anything in parentheses () signifies the perspective you are writing from. 
    Anything in curly braces {} is the subject you are involved in. 
    Anything in brackets [] is the action you should take. 
    Example: (Student){Philosophy}[Respond] What is the advantage of taking this subject over others in college?

    If you understand and are ready to begin, respond with only “yes.”
    
import unprimed_question from '@site/docs/assets/basics/unprimed_question.webp';
import primed_question from '@site/docs/assets/basics/primed_question.webp';

Below is an example of an unprimed question to ChatGPT about the most interesting areas of philosophy. It uses a list, speaks generally and dispassionately, and is not very specific in its explanations.  

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={unprimed_question} style={{width: "650px"}} />
</div>

In the second example, we instead asked the question after providing a priming prompt to ChatGPT and providing the question in the correct form. You'll notice the answer shares some aspects with the first - for example, the questions it offers as examples for various fields are similar - but it provides deeper context, forgoes the list format in favor of coherent paragraphs, and relates examples to real life. 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={primed_question} style={{width: "650px"}} />
</div>

Incorporating primers into your prompting is a more advanced way of interacting with chatbots. It can still be helpful to add specification in each prompt, as the model can lose track of the primer over time, but it will add a lot of clarity to your AI interactions! 

By [Dastardi](https://twitter.com/lukescurrier)

[^a]: Priming prompts may also be called inception prompts(@li2023camel)