---
sidebar_position: 20
---

# 🟢 Prompt Engineering

:::takeaways
- What is prompt engineering?
:::

## What Happens When a Prompt Doesn't Work?

Sometimes Gen AIs give incorrect outputs to prompts. For example, they are not very good at multiplying numbers, and will often confidently give you an incorrect answer. Try giving the following prompt to ChatGPT:

<AIInput>
What is 923 * 99?
</AIInput>

<AIOutput>
923 * 99 equals 91,677.
</AIOutput>

ChatGPT gave an incorrect answer (the correct answer is 91,377). We can modify our prompt, and tell ChatGPT to think through its steps.

<AIInput>
What is 923 * 99? Let's go step by step. Always write out the full number of 0s for each term.
</AIInput>
<AIOutput>
To multiply 923 by 99, we can break it down into smaller steps:

Step 1: Write out the full number of 0s for each term:
923 \* 99 = 923 \* 990

Step 2: Multiply the first term by 9:
923 \* 9 = 8307

Step 3: Multiply the first term by 90 (adding one 0):
923 \* 90 = 83070

Step 4: Add the results from step 2 and step 3:
8307 + 83070 = 91377

Therefore, 923 multiplied by 99 is equal to 91,377.
</AIOutput>

Surprisingly, these additional instructions, ChatGPT is able to solve the problem. This worked because ChatGPT wrote out all of its work, and thus did not make mistakes. Gen AI's mathematical abilities can be improved by prompt engineering. Now, let's try a different example. 

### ArchaeologistAI Example

This time, we will ask ChatGPT to write a marketing tweet about a new, fictional AI product we are thinking of creating: ArchaeologistAI. ArchaeologistAI tells stories about famous archaeologists.

<AIInput>
Write a tweet about ArchaeologistAI
</AIInput>

<AIOutput>
"🔍 Exciting times ahead with #ArchaeologistAI! This cutting-edge technology is revolutionizing the field of archaeology, helping us uncover ancient mysteries and piece together our past like never before. Can't wait to see what hidden treasures and insights it unveils! #AI #Archaeology"
</AIOutput>

This Tweet is not accurate, since ArchaeologistAI only tells stories, and does not discover new things. However, this is not ChatGPT's fault! It did not know anything about ArchaeologistAI. Let's include relevant information in the prompt.

<AIInput>
Write a tweet about ArchaeologistAI: ArchaeologistAI tells stories about famous archaeologists.
</AIInput>

<AIOutput>
"🔍 Unearth the captivating tales of legendary archaeologists with #ArchaeologistAI! From Indiana Jones to Mary Leakey, this AI-powered storyteller brings their adventures to life, shedding light on their groundbreaking discoveries and inspiring the next generation of explorers. 🌍 #Archaeology"
</AIOutput>

This is much better! Now let's try to make ChatGPT write the Tweet in the style of Indiana Jones.

<AIInput>
Write a tweet about ArchaeologistAI, in the style of Indiana Jones: ArchaeologistAI tells stories about famous archaeologists.
</AIInput>

<AIOutput>
"Grab your fedora and whip, folks! 🎩🔥 ArchaeologistAI is like having a personal Sallah by your side, sharing captivating tales of legendary archaeologists who've braved ancient tombs and unearthed hidden treasures! 🗺️💎 Get ready to embark on a digital adventure through history! #ArchaeologistAI #UnearthTheLegends"
</AIOutput>

Alright, that may be the message we need to target archaeology fans! By testing multiple prompts, we can see which one gives the best output. 

## Conclusion

This process of refining our prompt over time is known as prompt engineering. You will never write the perfect prompt on your first try, so it is important to get good at refining your prompt. Being good at prompt engineering mostly comes from lots of practice (trial and error). The rest of the articles in this section will introduce you to different prompting strategies which you can use in your prompt engineering process.

