---
sidebar_position: 4
---

# 🟢 Zero Shot Chain of Thought


Zero Shot Chain of Thought (Zero-shot-CoT) prompting (@kojima2022large) is a 
follow up to %%CoT prompting|CoT prompting%% (@wei2022chain), which introduces an incredibly 
simple zero shot prompt. They find that by appending the words "**Let's think step
by step.**" to the end of a question, LLMs are able to generate a chain of
thought that answers the question. From this chain of thought, they are able to
extract more accurate answers.

import ZSImage from '@site/docs/assets/zero_shot.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Zero Shot CoT (Kojima et al.)
</div>

Technically, the full Zero-shot-CoT process involves two separate prompts/completions. 
In the below image, the top bubble on the left generates a chain of thought, while the top bubble on
the right takes in the output from the first prompt (including the first prompt itself),
and extracts the answer from the chain of thought. This second prompt is a _self augmented_ prompt.

import ZSProcessImage from '@site/docs/assets/zero_shot_example.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Full Zero Shot CoT Process (Kojima et al.)
</div>

## Example

Here are a few demos (which only perform reasoning extraction). This first
demo shows GPT-3 (davinci-003) failing a simple math question, while the second demo uses a 
Zero-shot-CoT prompt and successfully solves the problem. Feel free to enter your
OpenAI API key (Click Generate) and play around with the examples. Note how much simpler
the Zero-shot-CoT prompt is compared to the CoT prompt.

#### Incorrect

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?" initial-response="John has 8 pears." max-tokens="256" box-rows="3" model-temp="0.7" top-p="1"></div>


#### Correct

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?\n\nLet's think step by step." initial-response="John starts with 5 pears. He eats 2 pears, leaving him with 3 pears. He buys 5 more pears, giving him a total of 8 pears. He gives 3 pears to his friend, leaving him with only 5 pears." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>

## Results
Zero-shot-CoT was also effective in improving results on arithmetic, commonsense, 
and symbolic reasoning tasks. However, unsurprisingly, it was usually not as 
effective as CoT prompting. An important use case for Zero-shot-CoT is when obtaining
few shot examples for CoT prompting is difficult. 

## Ablations of Interest

Kojima et al. experiment with a number of different Zero-shot-CoT prompts 
(e.g. "Let’s solve this problem by splitting it into steps." or "Let’s think about this logically."), but they find that "Let's think step by step" is most effective for their
chosen tasks.



## Notes

The extraction step often must be task specific, making Zero-Shot-CoT less
generalizable than it appears at first.

Anecdotally, I've found that Zero-shot-CoT style prompts are sometimes effective 
in improving the length of completions for generative tasks. For example, consider
the standard prompt `Write a story about a frog and a mushroom who become friends.`
Appending the words `Let's think step by step.` to the end of this prompt leads to
a much longer completion.

