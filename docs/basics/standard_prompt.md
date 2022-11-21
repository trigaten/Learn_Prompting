---
sidebar_position: 2
---

# A "Standard" Prompt

We have heard of a few different formats of prompts thus far. 
Following Kojima et al. (@kojima2022large), we will refer to prompts that consist 
solely of a question as "standard" prompts. We also consider prompts that consist solely of
a question and in the QA format to be "standard" prompts.

Two examples of standard prompts:


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

Few shot standard prompts are just standard prompts that have _exemplars_
in them. Exemplars are examples of the task that the prompt is trying to solve, 
which are included in the prompt itself (@wei2022chain). Few shot standard prompts 
are sometimes referred to as standard prompts.

Two examples of few shot standard prompts:

_Standard Few Shot Prompt_

```
What is the capital of Spain?
Madrid
What is the capital of Italy?
Rome
What is the capital of France?
```

_Standard Few Shot Prompt in QA format_
```
Q: What is the capital of Spain?
A: Madrid
Q: What is the capital of Italy?
A: Rome
Q: What is the capital of France?
A:
```

We will mainly refer to standard prompts in contrast to new types of prompts we 
discuss throughout this course. 