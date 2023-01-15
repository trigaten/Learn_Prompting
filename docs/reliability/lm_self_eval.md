---
sidebar_position: 7
---

# 🟡 LLM Self Evaluation

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
```