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

For example, Lu et al. (2022) found that the prompt order can have a large effect on the final task performance; Zhao et al. (2021) show that the choice of prompt format, training examples, and prompt order can cause the performance to vary quite significantly.

For example, Liu et al. (2022) propose to retrieve exemplars from a training pool that are semantically similar to a test example, and show it can significantly boost the performance




significant gains compared with recent SoTA approaches like prompt tun- ing, AutoPrompt, and RLPrompt