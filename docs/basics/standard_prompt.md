---
sidebar_position: 3
---

# 🟢 A "Standard" Prompt

We have heard of a few different formats of prompts thus far. 
Following Kojima et al. (@kojima2022large), we will refer to prompts that consist 
solely of a question as "standard" prompts. We also consider prompts that consist solely of
a question that are in the QA format to be "standard" prompts.

#### Why should I care?

Many articles that we reference use this term. We are defining it so we can discuss 
new types of prompts in contrast to standard prompts. 

### Two examples of standard prompts:


_Standard Prompt_
```
What is the capital of France?
```

_Standard Prompt in QA format_
```
Q: What is the capital of France?

A:
```

## Few Shot Standard Prompts

Few shot standard prompts(@liu2021pretrain) are just standard prompts that have _exemplars_
in them. Exemplars are examples of the task that the prompt is trying to solve, 
which are included in the prompt itself (@brown2020language). In research, few shot standard prompts 
are sometimes referred to simply as standard prompts (though we attempt not to do so in this guide).

### Two examples of few shot standard prompts:

_Few Shot Standard Prompt_

```
What is the capital of Spain?
Madrid
What is the capital of Italy?
Rome
What is the capital of France?
```

_Few Shot Standard Prompt in QA format_
```
Q: What is the capital of Spain?
A: Madrid
Q: What is the capital of Italy?
A: Rome
Q: What is the capital of France?
A:
```

Few shot prompts facilitate "few shot" AKA "in context" learning, which is the 
ability to learn without parameter updates(@zhao2021calibrate).

