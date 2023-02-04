---
sidebar_position: 130
---

# 🟣 Reinforcement Learning

This section covers reinforcement learning methods which optimize discrete prompts (not soft prompts). <br/>This is extremely complicated.

## RLPrompt

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


can edit instructions, in context exemplars, or verbalizers
