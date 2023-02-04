---
sidebar_position: 130
---

# 🟣 Reinforcement Learning

This section covers reinforcement learning methods which optimize discrete prompts (not soft prompts). <br/>This is extremely complicated.

## RLPrompt

RLPrompt(@deng2022rlprompt) is a method that takes an input and trains a language model (the policy)
to generate a good prompt for that input.

More formally, given an input sequence $x$, the policy designs a prompt $z$ by selecting $[z_1, z_2, ..., z_T]$ tokens from the vocabulary sequentially.

After creating the prompt, it combines it with $x$, and uses another language model to
generate the completion. The LM output of x prompted by z can be described as $y_{LM}(\hat{z}, x)$.

Then, the policy receives some reward according to this output: $R(y_{LM}(\hat{z}, x))$

### Example

Assuming we have partially trained RLPrompt on classifying movie reviews, and our next
training point example is `x = "I hate this movie."`. RLPrompt will generate a prompt like
`z = "Movie review bad or good:`. Then, it will combine the prompt with the input to get
`x' = "Movie review bad or good: I hate this movie."`. Then, it will use a language model
to generate the completion. Say it generates `bad`. Then, the reward is computed as
`R(y_{LM}(\hat{z}, x))`...

## Training
Optimize via soft q learning

## TEMPERA

**TE**st-ti**M**e **P**rompt **E**diting using **R**einforcement le**A**rning 
(TEMPERA)(@zhang2022tempera) is a method for automatically generating
interpretable prompts.

At a high level, TEMPERA takes a starting prompt and modifies different parts of it in order to see what changes help most.

## Action Space

TEMPERA is allowed to edit 3 parts of the prompt:

1) The instruction
2) in-context examples
3) The verbalizers

## Reward

They use a reward which consists of the difference of score between a prompt before/after an edit.

TEMPERA is densely reward, computing a reward for each edit step according to 

## Training

TEMPERA uses a GPT architecture and is trained with proximal policy optimization. 

They use a reward which consists of the difference of score between a prompt before/after an edit.
