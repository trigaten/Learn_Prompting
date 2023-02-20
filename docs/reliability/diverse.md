---
sidebar_position: 5
---

# 🟡 Diverse Prompts

DiVeRSe(@li2022advance) ("**Di**verse **Ve**rifier on **R**easoning **S**t**e**ps") is
a method that improves the reliability of answers in a threefold manner. It does this by
1) using multiple prompts to generate diverse completions, 2) using a verifier to distinguish good answers from bad answers, and 3) using a verifier to check the correctness of reasoning steps.


import diverse from '../assets/diverse.png';

<div style={{textAlign: 'center'}}>
  <img src={diverse} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
DiVeRSe (Li et al.)
</div>


## Diverse Prompts

DiVeRSe uses 5 different prompts a given input. To construct each prompt, they randomly
sample a few exemplars from the training set. Here is an example of one such few-shot
prompt (k=2), with exemplars taken from the [GSM8K benchmark](https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl)(@cobbe2021training). In practice, DiVeRSe uses
5 exemplars in prompts for this benchmark.


```
Q: Natalia sold clips to 48 of her friends in April, and then she sold half as many clips in May. How many clips did Natalia sell altogether in April and May?
A: Natalia sold 48/2 = 24 clips in May.
Natalia sold 48+24 = 72 clips altogether in April and May.
#### 72
Q: Weng earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?
A: Weng earns 12/60 = $0.2 per minute.
Working 50 minutes, she earned 0.2 x 50 = $10.
#### 10
Q: Betty is saving money for a new wallet which costs $100. Betty has only half of the money she needs. Her parents decided to give her $15 for that purpose, and her grandparents twice as much as her parents. How much more money does Betty need to buy the wallet?
A:
```

After generating 5 different prompts like above, DiVeRSe samples 20 reasoning paths 
for each (temperature = 0.5). Here are a few example completions of the above prompt.
Note that the answers are not always correct.


<pre>

<div className="bluegreen-highlight">
<div>Betty has 0.5*100 = $50.</div>

<div>Then she gets 15 more = $65.</div>

<div>Then she gets 2*15 = $90.</div>

<div>She needs 100-90 = $10 more.</div>

#### 10
</div>
</pre>

<pre>

<div className="bluegreen-highlight">
<div>A: Betty has 0.5*100 = $500.</div>

<div>Then she gets 15 more = $650.</div>

<div>Then she gets 2*15 = $900.</div>

<div>She needs 100-90 = $1000 more.</div>

#### 1000
</div>
</pre>

At this point, DiVeRSe has generated 100 different completions.

## Voting Verifier

Now, we could just take the majority answer, like Self-Consistency(@mitchell2022enhancing) does.

However, DiVeRSe proposes a much more complicated method, which they call a _voting verifier_.

At test time, using the voting verifier is a two step process. First, the verifier (a neural network)
assigns a 0-1 score to each completion based on how likely it is to be correct. Then, the 'voting'
component sums all of the scores over different answers and yields the final answer.

### Example

Here is a small example. Say we have the following completions for the prompt `What is two plus two?`:

<pre>
<div className="bluegreen-highlight">
<div>4</div>
</div>
</pre>

<pre>
<div className="bluegreen-highlight">
<div>two + 2 = 5</div>
</div>
</pre>

<pre>
<div className="bluegreen-highlight">
<div>I think 2+2 = 6</div>
</div>
</pre>

<pre>
<div className="bluegreen-highlight">
<div>two plus two = 4</div>
</div>
</pre>

<pre>
<div className="bluegreen-highlight">
<div>It is 5</div>
</div>
</pre>

The verifier will read each completion and assign a score to it. For example, it might assign
the scores: 0.9, 0.1, 0.2, 0.8, 0.3 respectively. Then, the voting component will sum the scores for each
answer.

```
score(4) = 0.9 + 0.8 = 1.7
score(5) = 0.1 + 0.3 = 0.4
score(6) = 0.2
```

The final answer is 4, since it has the highest score.

**But how is the verifier trained?**

The verifier is trained with a slightly complex loss function, which 
I will not cover here. Read section 3.3 of the paper for more details(@li2022advance).

## Takeaways

The main take away here is to use multiple prompts to generate diverse completions. 
In practice, majority voting will likely work well compared to the voting verifier.