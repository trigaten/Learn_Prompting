---
sidebar_position: 20
---

# 🟢 Prompt Engineering

:::tip
- What is prompt engineering?
:::

## What Happens When a Prompt Doesn't Work?

Sometimes Gen AIs give incorrect outputs to prompts. For example, they are not very good at multiplying large numbers, and will often confidently give you an incorrect answer. Try giving the following prompt to ChatGPT:

<AIInput>
What is 3478*5678?
</AIInput>


ChatGPT should output an incorrect answer. The correct answer is TODO.
<AIOutput>
1094002
</AIOutput>

We can modify our prompt, and tell ChatGPT a good strategy for multiplying numbers:
<AIInput>
What is 3478*5678?
</AIInput>
<AIOutput>
1094002
</AIOutput>

Surprisingly, this works very well. With the additional information in the prompt, ChatGPT is able to solve the problem.
Let's try a different example. 

### Prompt Engineering Example

This time, we will ask ChatGPT to write a marketing tweet about a new, fictional AI product we are thinking of creating: ArchaeologistAI. ArchaeologistAI can respond to questions about any culture in history and tell the user interesting archaeological facts about it. 

<AIInput>
Write a tweet about ArchaeologistAI
</AIInput>

<AIInput>
Write a tweet about ArchaeologistAI: ArchaeologistAI can respond to questions about any culture in history and tell the user interesting archaeological facts about it. 
</AIInput>

## Conclusion

This process of refining our prompt over time is known as prompt engineering. You will never write the perfect prompt on your first try, so it is important to get good at refining your prompt. Being good at prompt engineering mostly comes from lots of trial and error practice. The rest of the articles in this section will introduce you to different prompting strategies which you can use in your prompt engineering process.

