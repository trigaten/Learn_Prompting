---
sidebar_position: 0
locale: en-us
---

# Multiple choice questions

Let's use GPT to solve a LSAT[^1] question!

[^1]: 
The LSAT (Law School Admission Test) is a standardized test used by law schools in the United States to assess the critical thinking and analytical reasoning skills of prospective students.

Here is a LSAT question:

Give it a try, and do your best to explain your reasoning.

```md
<!-- highlight-start -->
John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?
<!-- highlight-end -->

a) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. 
b) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. 
c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. 
d) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.
```

<details>
<summary>The correct answer is ...</summary>
c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. 
</details>

Try copy pasting the problem into the demo below:

<iframe src="https://embed.trydyno.com/embed?model=text-davinci-003&promptText=John%20of%20Worcester%2C%20an%20English%20monk%2C%20recorded%20the%20sighting%2C%20on%20December%208%2C%201128%2C%20of%20two%20unusually%20large%20sunspots.%20Five%20days%20later%20a%20brilliant%20aurora%20borealis%20(northern%20lights)%20was%20observed%20in%20southern%20Korea.%20Sunspot%20activity%20is%20typically%20followed%20by%20the%20appearance%20of%20an%20aurora%20borealis%2C%20after%20a%20span%20of%20time%20that%20averages%20five%20days.%20Thus%2C%20the%20Korean%20sighting%20helps%20to%20confirm%20John%20of%20Worcester's%20sighting.%20Which%20one%20of%20the%20following%2C%20if%20true%2C%20most%20strengthens%20the%20argument%3F%0A%0Aa)%20An%20aurora%20borealis%20can%20sometimes%20occur%20even%20when%20there%20has%20been%20no%20significant%20sunspot%20activity%20in%20the%20previous%20week.%20%0Ab)%20Chinese%20sources%20recorded%20the%20sighting%20of%20sunspots%20more%20than%201000%20years%20before%20John%20of%20Worcester%20did.%20%0Ac)%20Only%20heavy%20sunspot%20activity%20could%20have%20resulted%20in%20an%20aurora%20borealis%20viewable%20at%20a%20latitude%20as%20low%20as%20that%20of%20Korea.%0Ad)%20Because%20it%20is%20impossible%20to%20view%20sunspots%20with%20the%20naked%20eye%20under%20typical%20daylight%20conditions%2C%20the%20sighting%20recorded%20by%20John%20of%20Worcester%20would%20have%20taken%20place%20under%20unusual%20weather%20conditions%20such%20as%20fog%20or%20thin%20clouds.%0Ae)%20John%20of%20Worcester's%20account%20included%20a%20drawing%20of%20the%20sunspots%2C%20which%20could%20be%20the%20earliest%20illustration%20of%20sunspot%20activity.%0A&response=C)%20Only%20heavy%20sunspot%20activity%20could%20have%20resulted%20in%20an%20aurora%20borealis%20viewable%20at%20a%20latitude%20as%20low%20as%20that%20of%20Korea.&maxTokens=256&boxRows=3&uid=a4361398-8182-4fa3-b396-beadcbdbe9f3" frameBorder="0" style={{overflow:"hidden",width:"100%"}} width="100%" onLoad={e=>{let t=e.currentTarget;window.addEventListener("message",e=>{"frameheight-a4361398-8182-4fa3-b396-beadcbdbe9f3"==e.data[0]&&(t.height=e.data[1]+"px")},!1)}}></iframe>

The result:

```
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.
```

<details scheme='warning'>
<summary>Why is my answer different?</summary>
Notice that different executions could lead to different outputs. Text generation process has two components: a deterministic model that estimates different probabilities for different words, and a sampling process that selects a word. The sampling process introduces randomness. We can make the output consistent by setting <a href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature">temperature</a> to 0.
</details>

The model likely failed. Does that mean the model is incapable for answering this type of question? Not necessarily. We will dive into techniques we can use to improve model results.

## The Magic Phrase
This is not the right answer, and gives little insight into the “reasoning” of the decision. We can try adding the phrase `let's explain step by step` like so:


```markdown
...
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.

Let’s explain step by step
```
This phrase will increase verbosity of the model. You might get output like this:

<iframe src="https://embed.trydyno.com/embed?model=text-davinci-003&promptText=John%20of%20Worcester%2C%20an%20English%20monk%2C%20recorded%20the%20sighting%2C%20on%20December%208%2C%201128%2C%20of%20two%20unusually%20large%20sunspots.%20Five%20days%20later%20a%20brilliant%20aurora%20borealis%20(northern%20lights)%20was%20observed%20in%20southern%20Korea.%20Sunspot%20activity%20is%20typically%20followed%20by%20the%20appearance%20of%20an%20aurora%20borealis%2C%20after%20a%20span%20of%20time%20that%20averages%20five%20days.%20Thus%2C%20the%20Korean%20sighting%20helps%20to%20confirm%20John%20of%20Worcester's%20sighting.%20Which%20one%20of%20the%20following%2C%20if%20true%2C%20most%20strengthens%20the%20argument%3F%0A%0Aa)%20An%20aurora%20borealis%20can%20sometimes%20occur%20even%20when%20there%20has%20been%20no%20significant%20sunspot%20activity%20in%20the%20previous%20week.%20%0Ab)%20Chinese%20sources%20recorded%20the%20sighting%20of%20sunspots%20more%20than%201000%20years%20before%20John%20of%20Worcester%20did.%20%0Ac)%20Only%20heavy%20sunspot%20activity%20could%20have%20resulted%20in%20an%20aurora%20borealis%20viewable%20at%20a%20latitude%20as%20low%20as%20that%20of%20Korea.%0Ad)%20Because%20it%20is%20impossible%20to%20view%20sunspots%20with%20the%20naked%20eye%20under%20typical%20daylight%20conditions%2C%20the%20sighting%20recorded%20by%20John%20of%20Worcester%20would%20have%20taken%20place%20under%20unusual%20weather%20conditions%20such%20as%20fog%20or%20thin%20clouds.%0Ae)%20John%20of%20Worcester's%20account%20included%20a%20drawing%20of%20the%20sunspots%2C%20which%20could%20be%20the%20earliest%20illustration%20of%20sunspot%20activity.%0A%0ALet's%20explain%20step%20by%20step.&response=A)%20This%20answer%20choice%20is%20incorrect%20because%20it%20weakens%20the%20argument%20by%20suggesting%20that%20an%20aurora%20borealis%20can%20occur%20without%20sunspot%20activity.%0A%0AB)%20This%20answer%20choice%20is%20incorrect%20because%20it%20is%20irrelevant%20to%20the%20argument.%0A%0AC)%20This%20answer%20choice%20is%20correct%20because%20it%20strengthens%20the%20argument%20by%20suggesting%20that%20the%20sunspot%20activity%20recorded%20by%20John%20of%20Worcester%20was%20strong%20enough%20to%20cause%20an%20aurora%20borealis%20viewable%20at%20a%20low%20latitude.%0A%0AD)%20This%20answer%20choice%20is%20incorrect%20because%20it%20is%20irrelevant%20to%20the%20argument.%0A%0AE)%20This%20answer%20choice%20is%20incorrect%20because%20it%20is%20irrelevant%20to%20the%20argument.&maxTokens=256&boxRows=3&uid=7c7c7fdf-2480-4e22-af8d-1006cfdf3e5d" frameBorder="0" style={{overflow:"hidden",width:"100%"}} width="100%" onLoad={e=>{let t=e.currentTarget;window.addEventListener("message",e=>{"frameheight-7c7c7fdf-2480-4e22-af8d-1006cfdf3e5d"==e.data[0]&&(t.height=e.data[1]+"px")},!1)}}></iframe>


:::info
Our model is autoregressive: prior text, the original prompt text and additional model-generated text, affects the next output. In this case, the step-by-step keyword makes the model more verbose. The model may choose to summarize a question, or synthesize new information from the question before supplying an answer.

The specific term for this behavior is Chain of Thought: the model sequentially generates statements to reach an answer. This is similar to the concept of System 2 thinking (from Thinking Fast and Slow): the model defaults to system 1 thinking, but can chain system 1 thinking to arrive at a more methodological answer. 
:::

## Improvements

Here are some variations on our basic prompt for multiple choice questions:

### Reorder Question Items

We can reorder the item in the question

```
...
a) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.
b) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
...
```

### Reword the Question


Recall the original prompt was this:
```
Which one of the following, if true, most strengthens the argument?
```

We can change the prompt to this:
```
Identify each choice as strengthens, weakens or doesn't impact the argument.
```
to gain further insight to it answer choice. 

```
John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument? 

a) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. 
b) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. 
c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. 
d) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.

Identify each choice as strengthens, weakens or doesn't impact the argument and explain step by step.

A) Weakens - This option weakens the argument because it implies that the aurora borealis did not necessarily need to be caused by sunspot activity, which is the argument the author is trying to make.

B) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis.

C) Strengthens - This option strengthens the argument because it suggests that the only way an aurora borealis could be seen in Korea is if there had been heavy sunspot activity, which is what John of Worcester observed.

D) Weakens - This option weakens the argument because it implies that the conditions under which John of Worcester observed the sunspots may not have been reliable, which could cast doubt on the accuracy of his sighting.

E) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis.
```


### Add Additional Context

Here is a standard bayes problem:

```
Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is
present, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%
effective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods
of identifying the virus. The virus is carried by 2% of all people.
(a) Say that a person is tested for the virus using only Test A. What is the probability that the person
is really carrying the virus given that Test A came back positive? (2 points)
(b) Say that a person is tested for the virus using only Test B. What is the probability that the person
is really carrying the virus given that Test B came back positive? (2 points)
(c) Say that a person is tested for the virus using both tests. What is the probability that the person is
really carrying the virus given that both tests came back positive? (2 points)
```

Directly feeding GPT this prompt returns the following:

```
(a) The probability that the person is really carrying the virus given that Test A came back positive is 90%. 

(b) The probability that the person is really carrying the virus given that Test B came back positive is 95%.

(c) The probability that the person is really carrying the virus given that both tests came back positive is 99.9%.
```
which is **incorrect**!

If we add a bit of context, like so:

```
...
Let's explain step by step. The formula for bayes is 
```
the model will approach using the right formula, Bayes.

:::warning
GPT model doesn't perform arithmetic operations well. You might notice that while the expression written is corrected, the computed number is not.

Try adding the phrase: `Give the expression as answer, not a number` to disable computation.

You may be interested in [MRKL](../advanced_applications/mrkl.md), the paradigm of combining GPT with external tools like calculators, to solve this problem.
:::

