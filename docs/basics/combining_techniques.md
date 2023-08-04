---
sidebar_position: 80
---

# 🟢 Combining Techniques

import CombinedPrompt from '@site/docs/assets/basics/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

:::takeaways
- Combine prompting techniques to improve your results.
:::


As we have seen in the previous pages, prompts can have varying formats and complexity. They can include context, instructions, and multiple input-output examples. However, thus far, we have only examined separate classes of prompts. Combining these different prompting techniques can lead to more powerful prompts. 

Here is an example of a prompt that includes context, instructions, and multiple examples:

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

By adding additional context/examples, we can often improve the performance of AIs
on different tasks. 

