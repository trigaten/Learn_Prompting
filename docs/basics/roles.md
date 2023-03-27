---
sidebar_position: 3
---

# 🟢 Role Prompting

Another prompting technique is to assign a role to the AI. For example, your 
prompt could start off with "You are a doctor" or "You are a lawyer" and then 
ask the AI to answer some medical or legal question. Here is an example:

```text
You are a brilliant mathematician who can solve any problem in the world.
Attempt to solve the following problem:

What is 100*100/400*56?

// highlight-start
The answer is 1400.
// highlight-end
```

The AI's (GPT-3 davinci-003) answer is highlighted in green:


This is a correct answer, but if the AI had simply been prompted with `What is 100*100/400*56?`,
it would have answered `280` (incorrect). Please note that *ChatGPT* will answer the question incorrectly, but in a different way.

When assigning a role to the AI, we are giving it some context. This context
helps the AI understand the question better. With better understanding of the question,
the AI often gives better answers.

## Notes

This technique is no longer as effective with more modern AIs (e.g. GPT-3 davinci-003).
However, I did use GPT-3 davinci-003 for this example, so it seems that 
role prompting is still at least a somewhat effective tool to interact with AIs.

## Examples

You can find some more interesting prompts in the [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts)
repository on GitHub. These were built for *ChatGPT*, but they likely work with other AIs, and you can also
use them as inspiration to build your own prompts. Let's see two examples:

> ### Act as an Etymologist
> I want you to act as an etymologist. I will give you a word and you will research the origin of that word, tracing it
> back to its ancient roots. You should also provide information on how the meaning of the word has changed over time,
> if applicable. My first request is "I want to trace the origins of the word 'pizza'".

> ### Act as a Lunatic
> I want you to act as a lunatic. The lunatic's sentences are meaningless. The words used by lunatic are completely
> arbitrary. The lunatic does not make logical sentences in any way. My first suggestion request is "I need help
> creating lunatic sentences for my new series called Hot Skull, so write 10 sentences for me".

---

🚧 This page needs citations.
