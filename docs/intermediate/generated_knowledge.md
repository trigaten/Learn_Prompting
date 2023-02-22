---
sidebar_position: 7
---

# 🟡 Generated Knowledge


The generated knowledge approach(@liu2021generated) asks the %%LLM|LLM%% to generate
potentially useful information about the question before generating a response.
This approach is composed of two intermediate steps, knowledge generation and 
knowledge integration. 

import KGImage from '../assets/knowledge_generation.png';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge (Liu et al.)
</div>

## Knowledge Generation

In the knowledge generation step, the %%LLM|LLM%% is asked to generate a set of facts
about the **question**. The LLM is prompted in few-shot fashion as seen below. 
M different completions are generated using this same prompt.

import KGP1Image from '../assets/gen_k_p1.png';

<div style={{textAlign: 'center'}}>
  <img src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge Example (Liu et al.)
</div>


## Knowledge Integration

Next, we generate "knowledge augmented" questions and prompt the %%LLM|LLM%% with them
to get final answers. The easiest way to understand this is to go through an example.

Let's assume we are attempting to answer the **question** 
"Most Kangaroos have <mask\> limbs". Assume that at the knowledge generation step 
we generated 2 knowledges (M=2):

- Knowledge 1: "Kangaroos are marsupials that live in Australia."

- Knowledge 2: "Kangaroos are marsupials that have 5 limbs."

Now, we concatenate each knowledge with the question to generate knowledge augmented questions:

- Knowledge Augmented Question 1: "Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that live in Australia."

- Knowledge Augmented Question 2: "Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that have 5 limbs."

We then prompt the LLM with these knowledge augmented questions and get the final answer proposals:

- Answer 1: "4"

- Answer 2: "5"

We select the answer with the highest probability as the final answer. The 
highest probability could be the softmax probability of the answer token, or the
log probability of the answer token(s).

## Results

This method shows improvements on various commonsense datasets.

## Notes

The knowledge corresponding to the selected answer is called the _selected knowledge_.
