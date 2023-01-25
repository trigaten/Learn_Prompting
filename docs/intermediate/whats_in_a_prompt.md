---
sidebar_position: 7
---

# 🟢 What's in a Prompt?

We have gone through a few different prompting strategies in the previous pages.
This page will offer some general advice about what is actually important in a prompt.


## "Ground Truth Matters Little"


Surprisingly, when providing few shot exemplars in prompts, the actual answers (gold)
in the exemplars are not important. As shown in the figure below, providing random
labels in the exemplars barely hurts performance(@min2022rethinking). "Demo" is synonymous
with exemplar in this image.

import GoldUn from '../assets/gold_unimportant.png';

<div style={{textAlign: 'center'}}>
  <img src={GoldUn} style={{width: "750px"}} />
</div>

## Labelspace Matters

Even though the gold labels in the exemplars are not important, the labelspace 
(all of the possible labels for the task) is.
Even providing random labels from the labelspace helps the LLM get a better understanding
of the labelspace, and improves results. Additionally, properly representing the 
distribution of the labelspace in the exemplars is important. Rather than uniformly
sampling from the labelspace in the exemplars, it is better to sample from the distribution of the
labels.

## Format Matters

Perhaps the most important part of exemplars is how they are formatted. This
format instructs the LLM on how to properly format its answer to the prompt.

## Notes

Between 4-8 exemplars is a good number to use for few shot prompts(@min2022rethinking).
