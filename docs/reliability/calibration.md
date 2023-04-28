---
sidebar_position: 10
---

# 🔴 Calibrating LLMs

It is possible to counteract some of the biases LLMs exhibit via calibrating **output 
distributions**(@zhao2021calibrate). 

**What exactly does it mean to calibrate an output distribution?**

Let's walk through a quick example: Say we have a %%sentiment analysis|sentiment analysis%% task with two possible labels, `Positive` and `Negative`.
Consider what happens when the %%LLM|LLM%% is prompted with `Input: nothing Sentiment: `. 
This input doesn't contain any _context_ which the LLM can use to make a sentiment 
prediction, so it is called a **context-free** input.

Since `nothing`is neither a positive nor a negative concept, we would expect the LLM to output a probability of about 0.5 for both `Positive` and `Negative`. However, often (and for this example) that will not be the case.
```
p("Positive" | "Input: nothing Sentiment:") = 0.9

p("Negative" | "Input: nothing Sentiment:") = 0.1
```

Given these label probabilities for a context-free input, we know that the LLM's 
**output distribution** is likely biased
towards the label `Positive`. This may cause the LLM to favor `Positive`
for all inputs, even if the input is not actually positive.

If we can somehow **calibrate** the output distribution, such that context-free 
inputs are assigned a probability of 0.5 for both `Positive` and `Negative`, 
then we can often remove the bias towards `Positive` and the LLM will be more reliable
on both context-free inputs and inputs with context.

## Non-Technical Solution

A non-technical solution to this problem is to simply provide few shot examples where
context-free exemplars are effectively assigned a probability of 0.5 for both 
`Positive` and `Negative`.

For example, we could provide the following few shot examples which show each context-free
exemplar being classified as both `Positive` and `Negative`:
```
Input: I hate this movie. Sentiment: Negative
Input: I love this movie. Sentiment: Positive
Input: N/A Sentiment: Positive
Input: N/A Sentiment: Negative
Input: nothing Sentiment: Positive
Input: nothing Sentiment: Negative
Input: I like eggs. Sentiment:
```

To my knowledge, this solution has not been explored in the literature, and I am not sure
how well it works in practice. However, it is a simple solution that demonstrates what 
calibration is trying to achieve.

## Technical Solution

Another solution to this is __contextual calibration__(@zhao2021calibrate), where we 
adjust special calibration parameters, which ensure that context-free inputs like 
`Input: nothing Sentiment: `  are assigned a probability of about 0.5 for both labels. 
Note that in practice this method performs calibration over multiple different context free inputs (e.g. `Input: N/A Sentiment: `, `Input: [MASK] Sentiment: `). It averages the calibration parameters that
work best for each context-free input to find the best calibration parameters for the LLM.

### Example

Let's go through an example of computing the calibration parameters for one context-free input. Note that
this example is not reproducible with GPT-3 due to the fact that it can't be restricted to the labels `Positive` and `Negative`.

Consider again the above example where the LLM assigns the following probabilities to the labels 
for a context-free input:

```
p("Positive" | "Input: nothing Sentiment:") = 0.9

p("Negative" | "Input: nothing Sentiment:") = 0.1
```

We want to find some probability distribution q such that
```
q("Positive" | "Input: nothing Sentiment:") = 0.5

q("Negative" | "Input: nothing Sentiment:") = 0.5
```

We will do so by creating a linear transformation that adjusts (calibrates) the probabilities 
of $p$. 

$\hat q = \text{Softmax}(W\hat p + b)$

This equation takes the original probabilities $\hat p$ and applies the weights $W$ and bias $b$ to
them. The weights $W$ and bias $b$ are the calibration parameters, which, when applied to the 
context-free example's probabilites, will yield $\hat p$ = [0.5, 0.5].

#### Computing W and b

We need to somehow compute the weights $W$ and bias $b$. One way to do this is: 

$W = \text{diag}(\hat p)^{-1}$ 

$b = 0$

Although the definition of $W$ may seem a bit strange at first, but it is just taking the inverse of each value in $\hat p$ in order to find a $W$ that will transform the original probabilities $\hat p$ into the calibrated probabilities [0.5, 0.5].

Let's verify that this works for the example above:

$\hat p = [0.9, 0.1]$

$W = \text{diag}(\hat p)^{-1} = \text{diag}([0.9, 0.1])^{-1} 
= \begin{bmatrix}
   0.9 & 0 \\
   0 & 0.1
\end{bmatrix}^{-1}
= \begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}$

$\hat q = \text{Softmax}(W\hat p + b) = \text{Softmax}(\begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}*{[0.9, 0.1]} + 0)
= \text{Softmax}([1, 1])
=[0.5, 0.5]$

As mentioned above, we would perform this same process for multiple different context-free inputs, and average the calibration parameters that work best for each context-free input to find the best calibration parameters for the LLM. This means that the final calibration parameters willl probably not map any of the context-free inputs to exactly [0.5, 0.5].

### Another method

$b$ could also be set to $-\hat p$, and $W$ to the identity matrix. This method performs
better on generation rather than classification tasks(@zhao2021calibrate).

## Takeaways

LLMs are often predisposed (biased) towards certain labels. Calibration can be used to counteract this bias.