---
sidebar_position: 2
---
# 🟢 Giving Instructions

One of the simplest prompting methods is just giving instructions. We already saw a simple instruction
in a previous section (`What is 1,000,000 * 9,000? Make sure to put the right amount of zeros, even if there are many:`). However,
modern AIs can follow much more complex instructions. 

Below is an example that is a Dyno interactive embed. If you do not see it, make sure to turn Javascript on in your browser. Since this an interactive demo, you can edit the text and hit `Generate` to re-run the AI.

#### Example 1

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="A user has input their first and last name into a form. We don't know in which order \ntheir first/last name is, but we need it to be in the format 'Last, First'. Convert the following:\n\njohn doe" initial-response="Doe, John" max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

<br/>The AI is easily able to solve this problem. Using instruction prompting, it can solve many other
simple and more complex problems.

#### Example 2

Here is a more complicated example[^1]:

```
Read the following sales email. Remove any personally identifiable information (PII),
and replace it with the appropriate placeholder. For example, replace the name "John Doe"
with "[NAME]".

Hi John,

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

Jimmy Smith

Phone: 410-805-2345
Email: jimmysmith@cheapdealz.com
```

Here is the [AI's response](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Hi [NAME],

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership ([DEALERSHIP]), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

[SALESPERSON]

Phone: [PHONE NUMBER]
Email: [EMAIL ADDRESS]
// highlight-end
```

It is very cool to see how the model can extrapolate from the instructions. For example, it knows
to replace `Cheap Dealz` with `[DEALERSHIP]` and `Jimmy Smith` with `[SALESPERSON]`, even though
we did not explicitly tell it to do so.

[^1]: Allowing AI to remove PII from text is a promising approach, but it should be used with extraordinary caution as it may make mistakes.


## Notes 

🚧 This page needs citations 🚧