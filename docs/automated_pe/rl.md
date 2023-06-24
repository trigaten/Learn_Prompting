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
`R(y_{LM}(\hat{z}, x))`. Deng et al. do not use a simple 0/1 reward.

## Training

RLPrompt embeds a task specific MLP inside a frozen LM. The MLP is trained with Soft Q Learning(@guo2021efficient).

## TEMPERA

**TE**st-ti**M**e **P**rompt **E**diting using **R**einforcement le**A**rning 
(TEMPERA)(@zhang2022tempera) is a method for automatically generating
interpretable prompts.

At a high level, instead of building a prompt from scratch like RLPrompt, TEMPERA takes a starting prompt and modifies different parts of it in order to see what changes help most.

## Action Space

TEMPERA is allowed to edit 3 parts of the prompt:

### 1) The instruction

Given the instruction $i$, one could parse it through `nltk.tokenize.treebank` into a set of phrases. Then the actions allow swapping, addition and deletion between current set of phrases. For example, this will first parse the sentence `"Given text, classify whether it is good or bad."` to `["Given text", "classify", "whether", "it is", "good", "or", "bad"]`. Then we can perform different editing strategies (e.g., swapping two phrases, delete one phrase or repeat one phrase) on this set of phrases.

### 2) In-context examples

Given a example pool of $K$ examples (aka %%exemplars|exemplars%%), we want to select $k$ from them to formulate the final prompt. The action space allows change position of examples $i, j$ with $0 < i < j < k$. It also supports replacing example $0 < i < k$ with any candidate from the pool $k < j < K+1$. 

### 3) The verbalizers

The editing space simply allows changing the current verbalizer to any other verbalizer from the `promptsource` collections. For examples, changing from `["positive", "negative"]` to `["great", "terrible"]`.

## Reward

They use a reward which consists of the difference of score between a prompt before/after an edit.

TEMPERA is densely reward, computing a reward for each edit step according to the accuracy improvement comparing the current prompt (after editing) and the previous prompt (before editing).

## Training

TEMPERA uses a GPT architecture and is trained with proximal policy optimization. 

They use a reward which consists of the difference of score between a prompt before/after an edit.
