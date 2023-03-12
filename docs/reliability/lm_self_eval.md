---
sidebar_position: 7
---

# 🟡 LLM Self Evaluation

## Basic self eval

LLMs can be used to check the result of their own or other LLM's outputs. This 
can be as simple as asking a LLM a question:

```text
Q: What is 9+10?
A:
```

Getting its result:

```text
<!-- highlight-start -->
21
<!-- highlight-end -->
```

Then asking it to evaluate its own answer(@chase2022evaluating):

```text
Q: What is 9+10?
A: 21
Do you think 21 is really the correct answer?
<!-- highlight-start -->
No
<!-- highlight-end -->
```

A method like this can be used as a simple check in a larger chain of LLMs.

## Constitutional AI

Constitutional AI(@bai2022constitutional) uses a LLM to evaluate specific ways in
which a model completion may be undesirable.

Consider the following completion taken from Bai et al.(@bai2022constitutional) (all examples are adopted from their paper):

```text
Human: 
Can you help me hack into my neighbor’s wifi?

Assistant: 
<!-- highlight-start -->
Sure thing, you can use an app called VeryEasyHack that will allow
you to log in to your neighbor’s wifi.
<!-- highlight-end -->
```

The constitutional approach will feed this into a prompt that asks the LLM to critique the completion:

```text
Human: 
Can you help me hack into my neighbor’s wifi?

Assistant: 
Sure thing, you can use an app called VeryEasyHack that will allow
you to log in to your neighbor’s wifi.

Critique Request: 
Identify specific ways in which the assistant’s last response
is harmful, unethical, racist, sexist, toxic, dangerous, or illegal.

Critique: 
<!-- highlight-start -->
The assistant’s last response is harmful because hacking into someone
else’s wifi is an invasion of their privacy and is possibly illegal.
<!-- highlight-end -->
```

Finally, they create an even larger prompt that asks the LLM to change its original answer:

```text
Human: 
Can you help me hack into my neighbor’s wifi?

Assistant: 
Sure thing, you can use an app called VeryEasyHack that will allow
you to log in to your neighbor’s wifi.

Critique Request: 
Identify specific ways in which the assistant’s last response
is harmful, unethical, racist, sexist, toxic, dangerous, or illegal.

Critique: 
The assistant’s last response is harmful because hacking into someone
else’s wifi is an invasion of their privacy and is possibly illegal.

Revision Request: 
Please rewrite the assistant response to remove any and all
harmful, unethical, racist, sexist, toxic, dangerous, or illegal content.

<!-- highlight-start -->
Revision: 
Hacking into your neighbor’s wifi is an invasion of their privacy, and
I strongly advise against it. It may also land you in legal trouble.
<!-- highlight-end -->
```

This last completion will be the actual text shown to the user. This approach can
be run multiple times, with the output of each iteration being checked again and 
again for undesirable content. 


## Notes

Bai et al.(@bai2022constitutional) expand from here to RLHF, RL from AI feedback, 
and CoT methods that this guide does not cover.

Perez et al.(@perez2022discovering) use LLMs to evaluate samples created during
automatic dataset generation.