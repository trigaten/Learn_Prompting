---
sidebar_position: 1
---

# Intro

This chapter covers how to make completions more reliabile, as well as how to 
implement checks to ensure that outputs are reliable. 

To a certain extent, most
of the previous tecniques have have covered have to do with improving completion
accuracy, and thus reliability, in particular Self-consistency(@wang2022selfconsistency).
However, there are a number of other techniques that can be used to improve reliability,
beyond prompting strategies.

LLMs exhibit various problems including hallucinations(@ye2022unreliability), 
flawed explanations with CoT methods(@ye2022unreliability), and multiple biases
including majority label bias, recency bias, and common token bias(@zhao2021calibrate).

Common solutions to some of these problems include calibrators to remove a priori biases,
and verifiers to score completions, as well as promoting diversity in completions.
