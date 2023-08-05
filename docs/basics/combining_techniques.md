---
sidebar_position: 80
---

# 🟢 Combining Techniques

import CombinedPrompt from '@site/docs/assets/basics/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

:::takeaways
- Understand how to combine prompting techniques
:::


As we have seen in the previous lessons, prompts can have varying formats and complexity. They can include context, instructions, and multiple input-output examples. However, thus far, we have only examined separate classes of prompts. Combining these different prompting techniques can lead to more powerful prompts. 

## Combining Role and Instruction Prompting

Role and instruction prompting can also be combined to create more complex prompts. For example, you could instruct the AI to assume the role of a historian and then provide instructions for a specific task. 

<AIInput>
You are a historian specializing in the American Civil War. Write a brief summary of the key events and outcomes of the war.
</AIInput>

The AI's response:

<AIOutput>
The American Civil War, fought from 1861 to 1865, was a pivotal event in the history of the United States. It began primarily as a conflict over the preservation of the Union and the legality of slavery, particularly in the newly admitted western states.

Key events of the war include the Battle of Fort Sumter, which marked the beginning of the conflict; the Battle of Antietam, the bloodiest single-day battle in American history; and the Emancipation Proclamation in 1862, in which President Abraham Lincoln declared that all slaves in Confederate-held territory were to be set free.

The Battle of Gettysburg in 1863 is often considered the war's turning point. The Union's victory there, along with their successful Siege of Vicksburg, gave the North a decisive advantage. The war effectively ended with General Robert E. Lee's surrender at Appomattox Court House in 1865.

The war resulted in approximately 620,000 soldier deaths and an undetermined number of civilian casualties. It ended slavery in the United States, restored the Union, and greatly expanded the powers of the federal government.
</AIOutput>

In this example, the AI assumes the role of a historian and follows the instructions to write a brief summary of the American Civil War. The combination of role and instruction prompting results in a detailed and accurate response.


## Combining Context, Instruction, and Few Shot Prompting

This is an example of a prompt that combines context, instruction, and few-shot prompting. The context is provided by the explanation about Twitter and the task of classifying tweets. The instruction is given in the sentence "Make sure to classify the last tweet correctly." The few-shot prompting is demonstrated by the two examples of positive and negative tweets. The AI is then expected to use this combination of context, instruction, and examples to correctly classify the final tweet.

<AIInput>
Twitter is a social media platform where users can post short messages called "tweets".
Tweets can be positive or negative, and we would like to be able to classify tweets as
positive or negative. Here are some examples of positive and negative tweets. Make sure 
to classify the last tweet correctly.

Q: Tweet: "What a beautiful day!"
Is this tweet positive or negative?

A: positive

Q: Tweet: "I hate this class"
Is this tweet positive or negative?

A: negative

Q: Tweet: "I love pockets on jeans"

A:
</AIInput>

## Conclusion

Combining different prompting strategies can lead to more powerful and effective prompts. Almost all prompts you write will combine multiple strategies. As you continue to experiment with and refine your prompts, consider how different techniques can be combined to achieve your desired results.