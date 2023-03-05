---
sidebar_position: 7
---

# 🟡 Generated Knowledge


The idea behind the generated knowledge approach(@liu2021generated) is to ask the %%LLM|LLM%% to generate potentially useful information about a given question/prompt before generating a final response.

For example, say you want to write a small blog post about some animal, like [Spirit bears](https://en.wikipedia.org/wiki/Kermode_bear). Before asking the %%LLM|LLM%% to write the blog post, you can ask it to generate some facts about Spirit bears. This will help the LLM write a more informative blog post. There are two simple ways of going about this.

## Single prompt approach

The first approach asks the LLM to generate knowledge then write the post, all with a single prompt.

```text
Generate 4 facts about the Kermode bear, then use these facts to write a short blog post using the information:
// highlight-start
The Kermode bear, also known as the spirit bear, is a rare subspecies of the American black bear that is found in the coastal regions of British Columbia, Canada. 

1. The Kermode bear is a unique subspecies of the American black bear, with approximately 10% of the population having white fur. 

2. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal. 

3. The Kermode bear is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest. 

4. The Kermode bear is a protected species, and its population is monitored closely by the provincial government.

The Kermode bear is a unique and special animal that is found in the coastal regions of British Columbia, Canada. Approximately 10% of the population of this subspecies of the American black bear have white fur, making them a rare sight. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal. It is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest. The Kermode bear is a protected species, and its population is monitored closely by the provincial government. It is a beautiful and majestic animal, and it is important that we do our part to protect and conserve this species.
// highlight-end
```


## Dual prompt approach

In this approach, we first prompt the %%LLM|LLM%% to generate facts about the bear:
  
```text
Generate 10 facts about the Kermode bear:
// highlight-start
1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.

2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.

3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.

4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.
// highlight-end
```

Then, we feed that information into another prompt to write the blog post:

```text
1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.

2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.

3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.

4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.

Use the above facts to write a one paragraph blog post about the Kermode bear:

// highlight-start

The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada. This unique bear has a white or cream-colored coat, caused by a recessive gene, and is a symbol of hope and renewal for the First Nations people of British Columbia. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada, making it an important part of the region's biodiversity.

// highlight-end
```

I recommend this second approach since it can produce longer content more reliably.

## Another use case

The generated knowledge approach was actually introduced for a completely different task, that of answering difficult questions. Consider the following question, which GPT-3 answers incorrectly: 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Which country is larger, Congo or South Africa?" initial-response="South Africa is larger than Congo." max-tokens="256" box-rows="3" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

If we first ask the %%LLM|LLM%% to generate facts about Congo and South Africa, we can then use that information to answer the question correctly. In theory, this is similar to %%CoT|CoT prompting%%, since we are effectively getting the LLM to generate intermediate reasoning in the form of related facts.

Let's start with the first step, *knowledge generation*. We can ask the %%LLM|LLM%% to generate facts about Congo and South Africa:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Generate some knowledge about the sizes of South Africa and Congo:" initial-response="South Africa is the 25th largest country in the world, with an area of 1,221,037 square kilometers (471,445 square miles). Congo, on the other hand, is the 11th largest country in the world, with an area of 2,344,858 square kilometers (905,567 square miles). South Africa is almost half the size of Congo, with a population of 57.7 million compared to Congo's population of 84.3 million. South Africa is the most populous country in the region, while Congo is the second most populous." max-tokens="256" box-rows="6" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

Next, let's use that knowledge to answer the question correctly. This is the *knowledge integration* step!

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="South Africa is the 25th largest country in the world, with an area of 1,221,037 square kilometers (471,445 square miles). Congo, on the other hand, is the 11th largest country in the world, with an area of 2,344,858 square kilometers (905,567 square miles). South Africa is almost half the size of Congo, with a population of 57.7 million compared to Congo's population of 84.3 million. South Africa is the most populous country in the region, while Congo is the second most populous.\n\nWhich country is larger, Congo or South Africa?" initial-response="Congo is larger than South Africa." max-tokens="256" box-rows="15" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## A more technical discussion

Although the above use case was similar to the way generated knowledge was originally introduced, it is not exactly the same. The below content covers the more technical context in which the approach was introduced. It follows the two intermediate steps (knowledge generation and knowledge integration) pattern that we saw above.

import KGImage from '@site/docs/assets/knowledge_generation.png';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge (Liu et al.)
</div>

### Knowledge Generation

In the knowledge generation step, the %%LLM|LLM%% is asked to generate a set of facts
about the **question**. The LLM is prompted in few-shot fashion as seen below. 
M different completions are generated using this same prompt (similar to the self-consistency approach).

import KGP1Image from '@site/docs/assets/gen_k_p1.png';

<div style={{textAlign: 'center'}}>
  <img src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge Example (Liu et al.)
</div>


### Knowledge Integration

Next, we generate "knowledge augmented" questions and prompt the %%LLM|LLM%% with them
to get final answers. The easiest way to understand this is to go through an example.

Let's assume we are attempting to answer the **question** 
"Most Kangaroos have <mask\> limbs". Assume that at the knowledge generation step 
we generated 2 knowledges (M=2):

- Knowledge 1: `Kangaroos are marsupials that live in Australia.`

- Knowledge 2: `Kangaroos are marsupials that have 5 limbs.`

Now, we concatenate each knowledge with the question to generate knowledge augmented questions:

- Knowledge Augmented Question 1: `Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that live in Australia.`

- Knowledge Augmented Question 2: `Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that have 5 limbs.`

We then prompt the LLM with these knowledge augmented questions and get the final answer proposals:

- Answer 1: `4`

- Answer 2: `5`

We select the answer with the highest probability as the final answer. The 
highest probability could be the softmax probability of the answer token, or the
log probability of the answer token(s).

## Recitation-Augmented Language Models

The recitation-augmented(@sun2022recitationaugmented) approach it is similar to generated knowledge (basically the same). However, is much less complex than the formal implementation of generated knowledge.


import RImage from '@site/docs/assets/recitation.png';

<div style={{textAlign: 'center'}}>
  <img src={RImage} style={{width: "250px"}} />
</div>

The idea here is to few shot prompt the LLM to generate information *and* answer in the *same* step. The fact that it is reciting/generating knowledge and answering the question in the same step is the main difference from the generated knowledge approach.

To reiterate, this approach prompts the model with multiple (question, recitation, answer) exemplars, then asks the question. The authors note that this approach can be combined with self consistency or multiple completion paths.



## Notes

- Generated knowledge shows improvements on various commonsense datasets.

- The knowledge corresponding to the selected answer is called the _selected knowledge_.

- In practice, you could take the most frequently occurring answer as the final one.