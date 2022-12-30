---
sidebar_position: 2
locale: en-us
---

# 🟢 Multiple Choice Questions

Let's use GPT to solve an LSAT[^1] question!

[^1]: 
The LSAT (Law School Admission Test) is a standardized test used by law schools in the United States to assess the critical thinking and analytical reasoning skills of prospective students.

Below is an example LSAT question. Consider how you would answer it, as well
as your reasoning.

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

Try pasting the problem into the demo below:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?
a) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. 
b) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. 
c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. 
d) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity." initial-response="e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

<p></p>

<details scheme='warning'>
<summary>Why is my answer different?</summary>
Your answer could differ because of

1) Updates to the underlying model, GPT-3
2) Randomness in the text generation process. We can make the output more consistent by setting <a href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature">temperature</a> to 0.

</details>

The model failed. Does that mean the model is incapable for answering this type of question? Not necessarily. We will dive into techniques that we can use to improve model results.

## The Magic Phrase
The standard prompt we used above gives little insight into the “reasoning” of GPT's output. We can try adding the phrase `let's explain step by step` like so:


```markdown
...
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.

Let’s explain step by step
```
This phrase will increase the verbosity of the model. You might get an output like this:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?
a) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. 
b) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. 
c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. 
d) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity. Let’s explain step by step" initial-response="A) This answer choice is incorrect. This answer does not strengthen the argument, as it instead introduces an alternative explanation for the aurora borealis. 
B) This answer choice is incorrect. This answer does not strengthen the argument, as it is irrelevant to the connection between sunspot activity and aurora borealis sightings. 
C) This answer choice is correct. This answer strengthens the argument by suggesting that the sunspot activity recorded by John of Worcester was the cause of the aurora borealis that was observed in Korea five days later. 
D) This answer choice is incorrect. This answer does not strengthen the argument, as it is irrelevant to the connection between sunspot activity and aurora borealis sightings. 
E) This answer choice is incorrect. This answer does not strengthen the argument, as it is irrelevant to the connection between sunspot activity and aurora borealis sightings. 
The correct answer is C) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

<p></p>

:::info
Notice how the model reasons through the problem step-by-step.

The specific term for this behaviour is Chain of Thought(@wei2022chain); the model sequentially generates statements to reach an answer. This is similar to the concept of System 2 thinking (from [Thinking Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)); the model defaults to system 1 thinking, but can chain system 1 thinking to arrive at a more methodological answer. 
:::

## Improvements

Here are some variations on our basic prompt for multiple choice questions:

### Reorder Question Items

We can reorder the items in the question

```
...
a) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.
b) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
...
```

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?
a) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity. 
b) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
c) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. 
d) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. 
e) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. 
Let’s explain step by step" initial-response="A) Weakens - This option weakens the argument because it implies that the aurora borealis did not necessarily need to be caused by sunspot activity, which is the argument the author is trying to make. B) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis. C) Strengthens - This option strengthens the argument because it suggests that the only way an aurora borealis could be seen in Korea is if there had been heavy sunspot activity, which is what John of Worcester observed. D) Weakens - This option weakens the argument because it implies that the conditions under which John of Worcester observed the sunspots may not have been reliable, which could cast doubt on the accuracy of his sighting. E) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

### Reword the Question


Recall the original prompt was this:
```
Which one of the following, if true, most strengthens the argument?
```

We can change the prompt to this:
```
Identify each choice as strengthens, weakens or doesn't impact the argument.
```
to gain further insight into the answer choice. 


<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument? 
a) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. 
b) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. 
c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. 
d) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. 
e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.
Identify each choice as strengthens, weakens or doesn't impact the argument and explain step by step." initial-response="A) Weakens - This option weakens the argument because it implies that the aurora borealis did not necessarily need to be caused by sunspot activity, which is the argument the author is trying to make.
B) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis.
C) Strengthens - This option strengthens the argument because it suggests that the only way an aurora borealis could be seen in Korea is if there had been heavy sunspot activity, which is what John of Worcester observed.
D) Weakens - This option weakens the argument because it implies that the conditions under which John of Worcester observed the sunspots may not have been reliable, which could cast doubt on the accuracy of his sighting.
E) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>


### Add Additional Context

Here is an example of a problem which can be easily solved by using Bayes' theorem:

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

Let's try this with GPT:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is\npresent, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%\neffective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods\nof identifying the virus. The virus is carried by 2% of all people.\n(a) Say that a person is tested for the virus using only Test A. What is the probability that the person\nis really carrying the virus given that Test A came back positive? (2 points)\n(b) Say that a person is tested for the virus using only Test B. What is the probability that the person\nis really carrying the virus given that Test B came back positive? (2 points)\n(c) Say that a person is tested for the virus using both tests. What is the probability that the person is\nreally carrying the virus given that both tests came back positive? (2 points)" initial-response="(a) The probability that the person is really carrying the virus given that Test A came back positive is 90%. \n\n(b) The probability that the person is really carrying the virus given that Test B came back positive is 95%.\n\n(c) The probability that the person is really carrying the virus given that both tests came back positive is 99.9%." max-tokens="256" box-rows="10" model-temp="0" top-p="0"></div>

The output is **incorrect**!

If we add a bit of context, like so:

```
...
Let's explain step by step. The formula for bayes is 
```
The model will use the right formula, Bayes.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is\npresent, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%\neffective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods\nof identifying the virus. The virus is carried by 2% of all people.\n(a) Say that a person is tested for the virus using only Test A. What is the probability that the person\nis really carrying the virus given that Test A came back positive? (2 points)\n(b) Say that a person is tested for the virus using only Test B. What is the probability that the person\nis really carrying the virus given that Test B came back positive? (2 points)\n(c) Say that a person is tested for the virus using both tests. What is the probability that the person is\nreally carrying the virus given that both tests came back positive? (2 points)\n\nLet's explain step by step. Give the numerical expression as answer, do not return a number. The formula for bayes is" initial-response="P(A|B) = P(B|A) * P(A) / P(B)\n\n\n(a) P(Virus|Test A Positive) = P(Test A Positive|Virus) * P(Virus) / P(Test A Positive) = (0.9 * 0.02) / (0.9 * 0.02 + 0.05 * 0.98)\n\n(b) P(Virus|Test B Positive) = P(Test B Positive|Virus) * P(Virus) / P(Test B Positive) = (0.95 * 0.02) / (0.95 * 0.02 + 0.1 * 0.98)\n\n(c) P(Virus|Test A Positive and Test B Positive) = P(Test A Positive and Test B Positive|Virus) * P(Virus) / P(Test A Positive and Test B Positive) = (0.9 * 0.95 * 0.02) / (0.9 * 0.95 * 0.02 + 0.05 * 0.1 * 0.98)" max-tokens="256" box-rows="10" model-temp="0" top-p="0"></div>

Which is **correct**!

:::warning
GPT model doesn't perform arithmetic operations well. You might notice that while the expression written is corrected, the computed number is not.

Try adding the phrase: `Give the expression as answer, not a number` to disable computation.


You may be interested in [MRKL](https://learnprompting.org/docs/advanced_applications/mrkl)(@karpas2022mrkl), the paradigm of combining GPT with external tools like calculators, to solve this problem.
:::

Written by [zeyuzhao](https://github.com/Zeyuzhao).