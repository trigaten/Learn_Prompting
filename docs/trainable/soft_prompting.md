---
sidebar_position: 1
---

# Soft Prompts

Prompt tuning(@lester2021power) is a model training technique which freezes the model weights,
and instead updates the parameters of a prompt. This yields a 'soft prompt'.


import Image from '../assets/prompt_tuning.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}} />
</div>

The above image contrasts model tuning with prompt tuning. 
In model tuning, you finetune the same model on different tasks. This gives you
a few different models, which you can't necessarily batch inputs into together.

On the other hand, prompt tuning let's you use the same model for all tasks. You 
just need to append the proper prompts at inference time, which makes batching across
different tasks easier. Additionally, soft prompts will usually be of the same token 
length.

## How it works

To understand the basic logic behind soft prompting, let's think about how **model inference** works
on a given prompt: `What's 2+2?`.

1) It might be tokenized as `What, 's, 2, +, 2, ?`. 

2) Then, each token will be converted to a vector of values.

3) This vectors of values can be then considered to be parameters. The model can be further
trained, only adjusting the weights of these prompts.

Note that as soon as we start updating these weights, the vectors of the tokens no
longer correspond to actual embeddings from the vocabulary.

# Results 

Prompt tuning performs better with larger models. Larger models also require less
tokens. Regardless, more than 20 tokens does not yield significant performance gains.


🚧 Under Construction 🚧