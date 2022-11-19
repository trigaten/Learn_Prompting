---
sidebar_position: 2
locale: en-us
style: chicago
---

# Chain of Thought Prompting

import CoTImage from '../assets/chain_of_thought.png';

<div style={{textAlign: 'center'}}>
  <img src={CoTImage} style={{width: "250px"}} />
</div>

Chain of Thought (CoT) prompting (@wei2022chain) is a recently developed prompting
method which encourages the LLM to explain its reasoning. The below image(@wei2022chain) 
shows a standard prompt (left) compared to a chain of thought prompt (right).


import CoTExample from '../assets/chain_of_thought_example.png';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Regular Prompting vs CoT (Wei et al.)
</div>

The main idea of CoT is that by showing the LLM few shot examples where the reasoning
process is explained by in the example, the LLM will also show the reasoning process
when answering the prompt. This explanation of reasoning often leads to more accurate
results.

## Results

CoT has been shown to be effective in improving results on tasks like 
arithmetic, commonsense, and symbolic reasoning tasks (@wei2022chain). 
In particular, prompted PaLM 540B(@chowdhery2022palm) acheives 57% solve 
rate accuracy on GSM8K(@cobbe2021training) (SOTA at the time).

import PromptedPaLM from '../assets/prompted_palm.png';

<div style={{textAlign: 'center'}}>
  <img src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparison of models on the GSM8K benchmark
</div>

Additionally, according to Wei et al., "CoT only yields performance gains when used with models of ∼100B parameters". Smaller models wrote illogical chains of thought, which led to worse accuracy than standard prompting. 

## Experiments

🚧

## Notes

No language models were ~~hurt~~ finetuned in the process of writing this chapter 😊.