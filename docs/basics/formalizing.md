---
sidebar_position: 90
---

# 🟢 Formalizing Prompts

:::takeaways
- Understand the basic parts of a prompt
:::

import FormalPrompt from '@site/docs/assets/basics/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


We have now covered multiple types of prompts, as well as ways to combine them. This page will provide you with terms to explain different types of prompts. Although there have been approaches to formalize discourse around prompt engineering(@white2023prompt), the field is ever changing, so we will provide you with just enough information to get started.

## Parts of a Prompt

There are a few different parts of a prompt that you will see over and over again. They are roughly:

- A role
- An instruction/task
- A question
- Context
- Examples (few shot)

We have covered roles, instructions, and examples in previous pages. A question is simply a question! (E.g. `what is the capital of France?`). Context is any relevant information that you want the model to use when answering the question/performing the instruction.

Not all of these occur in every prompt, and when some do occur, there is no standard order for them. For example, the following two prompts, which each contain a role, an instruction, and context, will do roughly the same thing:

<AIInput>
You are a doctor. Read this medical history and predict risks for the patient:

January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.
</AIInput>

<AIInput>
January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.

You are a doctor. Read this medical history and predict risks for the patient:
</AIInput>

However, we prefer the second prompt, since the instruction is the last part of the prompt. This is good since the LLM is less likely to simply write more context instead of following the instruction. For example, if given the first prompt, the LLM might add a new line: `March 15, 2022: Follow-up appointment scheduled with neurologist to assess concussion recovery progress.`


## A "Standard" Prompt

We have heard of a few different formats of prompts thus far. Now, we will quickly jump back to the beginning and define a "standard" prompt. Following Kojima et al. (@kojima2022large), we will refer to prompts that consist 
solely of a question as "standard" prompts. We also consider prompts that consist solely of
a question that are in the QA format to be "standard" prompts.

#### Why should I care?

Many articles/papers that we reference use this term. We are defining it so we can discuss 
new types of prompts in contrast to standard prompts. 

### Two examples of standard prompts:


_Standard Prompt_
<AIInput>
What is the capital of France?
</AIInput>

_Standard Prompt in QA format_
<AIInput>
Q: What is the capital of France?

A:
</AIInput>

## Few Shot Standard Prompts

Few shot standard prompts(@liu2021pretrain) are just standard prompts that have _exemplars_
in them. Exemplars are examples of the task that the prompt is trying to solve, 
which are included in the prompt itself (@brown2020language). In research, few shot standard prompts 
are sometimes referred to simply as standard prompts (though we attempt not to do so in this guide).

### Two examples of few shot standard prompts:

_Few Shot Standard Prompt_

<AIInput>
What is the capital of Spain?
Madrid
What is the capital of Italy?
Rome
What is the capital of France?
</AIInput>

_Few Shot Standard Prompt in QA format_
<AIInput>
Q: What is the capital of Spain?
A: Madrid
Q: What is the capital of Italy?
A: Rome
Q: What is the capital of France?
A:
</AIInput>

Few shot prompts facilitate "few shot" AKA "in context" learning, which is the 
ability to learn without parameter updates(@zhao2021calibrate).
