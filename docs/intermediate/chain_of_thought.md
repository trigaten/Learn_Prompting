---
sidebar_position: 3
locale: en-us
style: chicago
---

# 🟢 Chain of Thought Prompting

Chain of Thought (CoT) prompting (@wei2022chain) is a recently developed prompting
method, which encourages the LLM to explain its reasoning. The below image(@wei2022chain) 
shows a %%few shot standard prompt|few shot standard prompt%% (left) compared to a chain of thought prompt (right).


import CoTExample from '@site/docs/assets/chain_of_thought_example.png';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Regular Prompting vs CoT (Wei et al.)
</div>

The main idea of CoT is that by showing the LLM some few shot %%exemplars|exemplars%% where the reasoning
process is explained in the exemplars, the LLM will also show the reasoning process
when answering the prompt. This explanation of reasoning often leads to more accurate
results.

## Example

Here are a few demos. The first shows GPT-3 (davinci-003)
failing to solve a simple word problem. The second shows GPT-3 (davinci-003) succesfully solving the same problem, by using CoT prompting.

#### Incorrect

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Which is a faster way to get to work?\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride." initial-response="Option 1 is a faster way to get to work." max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

#### Correct

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Which is a faster way to get home?\nOption 1: Take an 10 minutes bus, then an 40 minute bus, and finally a 10 minute train.\nOption 2: Take a 90 minutes train, then a 45 minute bike ride, and finally a 10 minute bus.\nOption 1 will take 10+40+10 = 60 minutes.\nOption 2 will take 90+45+10=145 minutes.\nSince Option 1 takes 60 minutes and Option 2 takes 145 minutes, Option 1 is faster.\n\nWhich is a faster way to get to work?\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride." initial-response="Option 1 will take 1000+30+10 = 1040 minutes.
Option 2 will take 800+60+30 = 890 minutes.
Since Option 2 takes 890 minutes and Option 1 takes 1040 minutes, Option 2 is faster." max-tokens="256" box-rows="18" model-temp="0" top-p="0"></div>

## Results

CoT has been shown to be effective in improving results on tasks like 
arithmetic, commonsense, and symbolic reasoning tasks (@wei2022chain). 
In particular, prompted PaLM 540B(@chowdhery2022palm) achieves 57% solve 
rate accuracy on GSM8K(@cobbe2021training) (SOTA at the time).

import PromptedPaLM from '@site/docs/assets/prompted_palm.png';

<div style={{textAlign: 'center'}}>
  <img src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparison of models on the GSM8K benchmark (Wei et al.)
</div>

## Limitations

Importantly, according to Wei et al., "CoT only yields performance gains when used with models of ∼100B parameters". Smaller models wrote illogical chains of thought, which led to worse accuracy than standard prompting. Models usually get performance boosts from CoT prompting in a manner proportional to the size of the model.


## Notes

No language models were ~~hurt~~ finetuned in the process of writing this chapter 😊.