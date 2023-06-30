---
sidebar_position: 6
locale: en-us
style: chicago
---

# 🟢 Combining Techniques

## Usage

import CombinedPrompt from '@site/docs/assets/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


As we have seen in the previous pages, prompts can have varying formats and complexity. They can include context, instructions, and multiple input-output examples. However, thus far, we have only examined separate classes of prompts. Combining these different prompting techniques can lead to more powerful prompts. 

Here is an example of a prompt that includes context, instructions, and multiple examples:

```text
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
```

By adding additional context/examples, we can often improve the performance of AIs
on different tasks. 

## Prompt Coverage

### Concept

The subsequent prompt may Coverage the previous prompt if the prompt is not specific.

Prompt

```md
The incorrect are?
A.1+1=2
B.1+2=4
C.1+1=0
B
The incorrect are?
A.1+1=21
B.1+2=3
C.1+1=20
```

Completions

```md
The incorrect statement is B. 1+2=4.
```

We can see the completions is wrong,because the Prompt Coverage is occur.
GPT know the previous 1 is the example to learn. But after you say "The incorrect are?" The latest prompt is coverage the previous prompt. 

### How to fix it?

So why the GPT answer is not good? Because he don't know what is your instructinon,what is your problem. So the later prompt will coverage previous prompt. GPT can't think this is a unit. If the prompt is not specific,it will think it's a another prompt not a one prompt.
In each Prompt part,we had better tell it what is the instruction,what is the example and so on.
We give a new prompt method below,it's more specific.

Prompt

```md
1.
A.1+1=2
B.1+2=4
C.1+1=0
The incorrect are?
B,C

2.
A.1+1=21
B.1+2=3
C.1+1=20
The incorrect are?

```

Completions

```md
A, C
```

In this case,we can clear see 
The title number: 1.
The answer option:
A.1+1=2
B.1+2=4
C.1+1=0
question:
The incorrect are?
answer:B,C

Don't need to same,you just need to be specific to avoid the prompt coverage.





