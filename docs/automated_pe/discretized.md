---
sidebar_position: 2
---

# 🔴 Interpretable Soft Prompts

Soft prompts are a sequence of vectors which
don't correspond to any actual tokens in the vocabulary. This makes it difficult
to interpret the prompt. However, we can still attempt to do so
by mapping the vectors to the closest tokens in the vocabulary. However, projected 
soft prompts are often wayward; they can solve 
tasks well, but get projected to arbitrary tokens in the vocabulary(@khashabi2021prompt).

For example, if we are training on math questions like GSM8K(@cobbe2021training), 
we might start with the prompt `You are a mathematician. Solve this question:`. 
If we perform prompt tuning on it, then project that back into tokenspace, we might 
be left with something nonsensical like `A bus is a bus. Do thing here:`. It is often the
case that the soft prompt which maps to this nonsensical prompt can provide better performance on the task!

## The Waywardness Hypothesis

Khashabi et al.(@khashabi2021prompt) propose this incredible hypothesis. It says 
that given a task, for any discrete target prompt, there exists a 
continuous prompt that projects to it, while performing well on the task.

This means that given 1000 different tasks, there exist 1000 different
performant soft prompts (one for each task) which map to the same discrete prompt.

## Interpretability Risks

They use the Waywardness Hypothesis to highlight a number of risks which arise 
when interpreting soft prompts. In particular, a soft prompt can be projected to
a discrete prompt which gives a misleading intent.

Consider a soft prompt for ranking resumes. When projected into tokenspace, it might
be `You hiring manager. Rank good resumes:`. This seems decent, perhaps a bit lacking
in grammaticality. However, the token `good` might have a similar projection as the token for `white`, and there
could exist implicit bias in the prompt. Using a slightly different projection method,
we could end up with `You hiring manager. Rank white resumes:`. This is obviously quite
different, and could have significant implications.

Similarly to interpreting a regular discrete prompt, we should be extremely 
conscious of the biases which might be present in the prompt. We must be especially
careful with soft prompts, as they are more difficult to interpret.
