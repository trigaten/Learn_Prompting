---
sidebar_position: 1
---

# 🔴 Soft Prompts

Prompt tuning(@lester2021power), an alternative to model fine tuning(@khashabi2021prompt), freezes the model weights, and updates the parameters of a prompt. The resultant prompt is a 'soft prompt'.


import Image from '@site/docs/assets/trainable/prompt_tuning.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Model Tuning vs Prompt Tuning (Lester et al.)
</div>

The above image contrasts model tuning with prompt tuning. 
In model tuning, you finetune the same model on different tasks. This gives you
a few different models, with which you can't necessarily batch inputs easily.

On the other hand, prompt tuning lets you use the same model for all tasks. You 
just need to append the proper prompts at inference time, which makes batching across
different tasks easier. This is pretty much the same advantage that regular prompting
has. Additionally, soft prompts trained for a single model across
multiple tasks will often be of the same token length.

## How it works

To understand the basic logic behind soft prompting, let's think about how **model inference** works
on a given prompt: `What's 2+2?`.

1) It might be tokenized as `What, 's, 2, +, 2, ?`. 

2) Then, each token will be converted to a vector of values.

3) This vectors of values can be considered as model parameters. The model can be further
trained, only adjusting the weights of these prompts.

Note that as soon as we start updating these weights, the vectors of the tokens no
longer correspond to actual embeddings from the vocabulary.

# Results 

Prompt tuning performs better with larger models. Larger models also require less
soft prompt tokens. Regardless, more than 20 tokens does not yield significant performance gains.