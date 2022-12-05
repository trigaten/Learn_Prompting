---
sidebar_position: 1
---

# Soft Prompting

Soft prompting(@lester2021power) is a model training technique which freezes the model weights,
and instead updates the parameters of a prompt (tunes the prompts).

import Image from '../assets/prompt_tuning.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}} />
</div>

To understand the logic behind soft prompting, let's think about how **model inference** works:

1) Let's consider how a standard prompt is tokenized:
`What's 2+2?` -> `What, 's, 2, +, 2, ?`. 

2) Then, each token will be converted to a vector of values.

In model tuning, multiple

This vectors of values can be then considered to be parameters. The model can be further
trained, only adjusting the weights of these prompts.

Note that as soon as we start updating these weights, the vectors of the tokens no
longer correspond to actual embeddings from the vocabulary.

Prompt tuning performs better with larger models. Larger models also require less
tokens. Regardless, more than 20 tokens does not yield significant performance gains.


🚧 Under Construction 🚧