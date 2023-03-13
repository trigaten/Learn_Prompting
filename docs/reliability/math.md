---
sidebar_position: 70
---

# 🟡 Math

Throughout this course, we have seen many different prompting methods that can be used to improve %%LLM|LLM%% math ability. One recent approach, MathPrompter(@imani2023mathprompter), unifies some of these methods (%%CoT|CoT prompting%%, %%PAL|PAL%%, etc.) into a single technique. The overarching idea is to break down a math question into algebraic terms then use Python code to solve it in different ways.

import math from '@site/docs/assets/math.png';

<div style={{textAlign: 'center'}}>
  <img src={math} style={{width: "500px"}} />
</div>

MathPrompter has **four** steps. We will explain them using the following example problem. The example is taken directly from the paper.

```text
Q: At a restaurant, each adult meal costs $5 and kids eat free. If a group of 15
people came in and 8 were kids, how much would it cost for the group to eat?
```

## Step 1: Generate Algabraic Template

The first step is to assign a variable to each number in the question. This helps because it allows easier translation of the question into an abstract math question, as well as into programming code.

This can be done via few shot prompting:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Q: A zoo charges $12 per adult ticket and allows children under 5 to enter for free. A family of 4 adults and 2 children under 5 visit the zoo. What is the total cost for the family to enter?\nQt: At a zoo, each adult ticket costs $A and children under 5 can enter for free. If a family of B adults and C children under 5 visit the zoo, what is the total cost for the family to enter?\nMapping: {A: 12, B: 4, C: 2}\n\nQ: A store sells shoes at $60 per pair and socks at $8 per pair. If a customer buys 2 pairs of shoes and 3 pairs of socks, what is the total cost of the purchase?\nQt: At a store, shoes cost $A per pair and socks cost $B per pair. If a customer buys C pairs of shoes and D pairs of socks, what is the total cost of the purchase?\nMapping: {A: 60, B: 8, C: 2, D: 3}\n\nQ: At a restaurant, each adult meal costs $5 and kids eat free. If a group of 15\npeople came in and 8 were kids, how much would it cost for the group to eat?" initial-response="Qt: At a restaurant, each adult meal costs $A and kids eat free. If a group of B people came in and C were kids, how much would it cost for the group to eat?\nMapping: {A: 5, B: 15, C: 8}" max-tokens="256" box-rows="14" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## Step 2: Math Prompts

The point of this step is to formulate the problem as both an algabraic statement and as Python code. This step has two simultaneous prompts, which help to give diverse representations of the problem.

### 2a: Algebraic Statement

We can few-shot prompt the LLM to represent the math problem as an algebraic statement. This is done by asking the LLM to generate the answer format, starting with "Answer =".

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Qt: At a zoo, each adult ticket costs $A and children under 5 can enter for free. If a family of B adults and C children under 5 visit the zoo, what is the total cost for the family to enter?\nMapping: {A: 12, B: 4, C: 2}\n\nWrite a mathematical equation and generate the answer format\nstarting with ‘Answer =’\n\nAnswer = A * B\n\nQt: At a store, shoes cost $A per pair and socks cost $B per pair. If a customer buys C pairs of shoes and D pairs of socks, what is the total cost of the purchase?\nMapping: {A: 60, B: 8, C: 2, D: 3}\n\nWrite a mathematical equation and generate the answer format\nstarting with ‘Answer =’\n\nAnswer = A * C + B * D\n\nQt: At a restaurant, each adult meal costs $A and kids eat free. If a group of B people came in and C were kids, how much would it cost for the group to eat?\nMapping: {A: 5, B: 15, C: 8}\n\nWrite a mathematical equation and generate the answer format\nstarting with ‘Answer =’" initial-response="Answer = A * B - A * C" max-tokens="256" box-rows="14" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

### 2b: Python Code

We can also ask the %%LLM|LLM%% to generate Python code that solves the problem. This is done by asking the LLM to generate a Python function.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Qt: At a zoo, each adult ticket costs $A and children under 5 can enter for free. If a family of B adults and C children under 5 visit the zoo, what is the total cost for the family to enter?\nMapping: {A: 12, B: 4, C: 2}\n\nWrite a Python function that returns the answer.\n\ndef zoo_cost(A, B, C):\n  return A * B\n\n\nQt: At a store, shoes cost $A per pair and socks cost $B per pair. If a customer buys C pairs of shoes and D pairs of socks, what is the total cost of the purchase?\n\nWrite a Python function that returns the answer.\n\ndef store_cost(A, B, C, D):\n  return (A * C) + (B * D)\n\nQt: At a restaurant, each adult meal costs $A and kids eat free. If a group of B people came in and C were kids, how much would it cost for the group to eat?\n\nWrite a Python function that returns the answer." initial-response="def restaurant_cost(A, B, C):\n  return A * (B - C)" max-tokens="256" box-rows="14" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

### Answer Generation

Now, we can use the Mapping that we generated previously to automatically fill in the variables.

```text
Mapping: {A: 5, B: 15, C: 8}
```

Algabraic: 
```text
Answer = 5 * 15 - 5 * 8
```

Python function:
```python
def restaurant_cost(A=5, B=15, C=8):
  return A * (B - C)
```

We can evaluate both using Python.

Algebraic:
```python
>>> eval("5 * 15 - 5 * 8")
35
```

Python function:
```python
>>> restaurant_cost()
35
```

## Step 4: Self-Consistency

Finally, we will leverage %%Self-Consistency|self_consistency%% to rerun the above process multiple times (~5), then take the majority answer.

## Conclusion

MathPrompter reports 92.5% accuracy on the MultiArith(@roy-roth-2015-solving) dataset. The success of this technique is a great example of how **you** as a prompt engineer can take methods that you have learned throughout this course and combine them to deal with larger problems.