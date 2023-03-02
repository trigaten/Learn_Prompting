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


This is a incorrect answer, but if the AI had simply been prompted with `What is 100*100/400*56?`,
it would have answered `280` (incorrect). Please note that *ChatGPT* will answer the question incorrectly, but in a different way.

When assigning a role to the AI, we are giving it some context. This context
helps the AI understand the question better. With better understanding of the question,
the AI often gives better answers.

## Notes

This technique is no longer as effective with more modern AIs (e.g. GPT-3 davinci-003).
However, I did use GPT-3 davinci-003 for this example, so it seems that 
role prompting is still at least a somewhat effective tool.

🚧 This page needs citations 🚧
