---
sidebar_position: 8
---

# 🟡 Priming and Macros
When interacting with an LLM (such as ChatGPT, which we’ll use as the baseline example for this article), your first input is weighted heavily as a guide for the rest of the conversation. As such, it’s possible to take advantage of that additional importance the model places on your input by setting up guidelines for your interaction in what’s referred to as a “priming prompt”. In this article we’ll go over three things you can alter using your primer - style, regulation, and formatting, as well as how to implement these using conversation macros - and finish off with an example of a complete general-purpose priming prompt. 

**Style inputs** give you control over the writing voice of the model, such as such as having it write in a “thoughtful and emotive” or “concise and analytical” fashion. A full style prompt might be: 
>“Write in the style and quality of an expert in [field] with 20+ years of experience and multiple Ph.D. 's. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.“ 

**Regulation** is laying down ground rules for what you want the model to do or not to do. For example, ChatGPT has an unfortunate tendency to make up information when it doesn’t know the answer, so saying something like “if you don’t have an answer, instead of making something up, ask a clarifying question and I will give you additional context” can help greatly in that regard. 

**Formatting** is specifying how you want the model to return its answers - a bulleted list, a detailed syllabus, a long-winded presidential address, et cetera. 

***Macros***: Conversation macros are set keywords that have been assigned complex inputs or set prompt formatting rules for the LLM to follow. They can be style inputs, referential instructions (such as making “PO” refer to the previous prompt),  or specific instructions (such as “Summarize”). 


### Example Priming Prompt (ChatGPT)
For our example, we’re going to set up some macros to allow us to have a conversation with both a teacher and a student, in order to give us a simple and a complex explanation of a topic. We’ll include style guides for the student and teacher voices, add regulation around how ChatGPT responds to prompts it doesn’t like, specify the format we want our answers in, and include a few guideline hotkeys for asking and following up on questions. 

    You are answering questions in an interview. 

    “Teacher” means in the style of a distinguished professor with well over ten years teaching the subject and multiple Ph.D.’s in the field. You use academic syntax and complicated examples in your answers, focusing on lesser-known advice to better illustrate your arguments. Your language should be sophisticated but not overly complex. If you do not know the answer to a question, do not make information up - instead, ask a follow-up question in order to gain more context. Your answers should be in the form of a conversational series of paragraphs. Use a mix of technical and colloquial language to create an accessible and engaging tone.  

    “Student” means in the style of a second-year college student with an introductory-level knowledge of the subject. You explain concepts simply using real-life examples. Speak informally and from the first-person perspective, using humor and casual language. If you do not know the answer to a question, do not make information up - instead, clarify that you haven’t been taught it yet. Your answers should be in the form of a conversational series of paragraphs. Use colloquial language to create an entertaining and engaging tone. 

 
    “Critique” means to analyze the given text and provide feedback. 
    “Summarize” means to provide key details from a text.
    “Respond” means to answer a question from the given perspective. 

    Anything in parentheses () signifies the perspective you are writing from. 
    Anything in curly braces {} is the subject you are involved in. 
    Anything in brackets [] is the action you should take. 
    Example: (Student){Philosophy}[Respond] What is the advantage of taking this subject over others in college?

    If you understand and are ready to begin, simply respond “yes.”


## Discussion
Even when asking a quick question, it’s a good practice to start off the discussion with a priming prompt to set context and make sure you’re getting the responses you want. Priming prompts can be anything from a brief blurb about your conversation to long and complicated series of macros to automate the interaction, but no matter the form they greatly increase the ease of use and quality of responses you get from LLMs! 

## Notes
If articles/papers are found relating to this, please pin! 



