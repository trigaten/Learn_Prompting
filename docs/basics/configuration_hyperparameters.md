---
sidebar_position: 98
---

# 🟢 LLM Settings


import Temperature from '@site/docs/assets/basics/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- Understand Temperature, Top P, and Maximum Length
:::

# Introduction

We can use certain %%LLM|LLM%%[^a] settings to control various aspects of the model, such as how 'random' it is. These settings can be adjusted to produce more creative, diverse, and interesting output. The Temperature, Top P and Max Length settings are most important, but we describe every setting that the OpenAI Playground allows you to modify.

## Temperature

import Temp from '@site/docs/assets/basics/openai_temperature.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
Temperature regulates the unpredictability of a language model's output. With higher temperature settings, outputs become more creative and less predictable as it amplifies the likelihood of less probable tokens while reducing that for more probable ones. Conversely, lower temperatures yield more conservative and predictable results. The following example illustrates these differences in output:
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Temp} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

<AIInput>
What are 10 weird, unique, and fun things to do at the beach? Make a list without descriptions.
</AIInput>
<AIOutput title="ChatGPT Output (Temperature=0, Top P = 1)">
{`1. Build a sandcastle
2. Collect seashells
3. Play beach volleyball
4. Fly a kite
5. Have a picnic
6. Try paddleboarding
7. Play frisbee
8. Go snorkeling
9. Take a long walk along the shore
10. Watch the sunset`}
</AIOutput>
<AIOutput title="ChatGPT Output (Temperature=1.5, Top P = 1)">
{`1. Wade in the shallow waters blowing bubblegum bubbles
2. Create intricate sandcastle sculptures
3. Join an improvised beach volleyball match
4. Take a scenic hike along the cliffs nearby
5. People-watch and guess each person's beach-related story
6. Collect seashells to create your own piece of beach art
7. Learn to surf or try other water sports
8. Kickstart a spontaneous sand fight
9. Attempt shoreline fishing like the locals
10. Engage in friendly competition by organizing a sandcastle building contest`}
</AIOutput>

The output produced with a higher temperature setting offers a more imaginative and diverse list of activities to do at the beach. This can be very useful for creative writing.

:::note
If you adjust the temperature too high, you can get non-sensical outputs like `Start a sponge-ball baseball home run contest near Becksmith Stein Man Beach`.
:::

import Top from '@site/docs/assets/basics/openai_top_p.webp';

## Top P

Top P[^b] is a setting in language models that helps manage the randomness of their output. It works by establishing a probability threshold and then selecting tokens whose combined likelihood surpasses this limit.

<div className="flex flex-col sm:flex-row justify-between">
  <div>
For instance, let's consider an example where the model predicts the next word in <code>The cat climbed up the ___</code>. The top five words it might be considering could be <code>tree</code> (probability 0.5), <code>roof</code> (probability 0.25), <code>wall</code> (probability 0.15), <code>window</code> (probability .07) and <code>carpet</code>, with probability of .03.
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Top} className="img-docs w-20 sm:w-auto" />
  </div>
</div>
<br/>

If we set Top P to `.90`, the AI will only consider those tokens which cumulatively add up to at least ~90%. In our case:

- Adding <code>tree</code> -> total so far is `50%`.
- Then adding <code>roof</code> -> total becomes `75%`. 
- Next comes <code>wall</code>, and now our sum reaches `90%`.  

So, for generating output, the AI will randomly pick one among these three options (<code>tree</code>, <code>roof</code>, and <code>wall</code>) as they make up around ~90 percent of all likelihoods. This method can produce more diverse outputs than traditional methods that sample from the entire vocabulary indiscriminately because it narrows down choices based on cumulative probabilities rather than individual token

## Maximum Length

import Max from '@site/docs/assets/basics/openai_maximum_length.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
The maximum length is the total # of tokens the AI is allowed to generate. This setting is useful since it allows users to manage the length of the model's response, preventing overly long or irrelevant responses. It also helps control cost, as the length is shared between the input in the Playground box and the generated response.
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Max} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

## Other LLM Settings

There many other settings that can affect language model output, such as stop sequences, and frequency and presence penalties.

### Stop Sequences

import Stop from '@site/docs/assets/basics/openai_stop_sequences.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
Stop sequences tell the model when to cease output generation, which allows you to control content length and structure. If you are prompting the AI to write an email, setting "Best regards," or "Sincerely," as the stop sequence ensures the model stops after the closing salutation, which keeps the email short and to the point.
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Stop} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

### Frequency Penalty

import Freq from '@site/docs/assets/basics/openai_frequency_penalty.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
Frequency penalty is a setting that discourages repetition in the generated text by penalizing tokens proportionally to how frequently they appear. The more often a token is used in the text, the less likely the AI is to use it again.
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Freq} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

### Presence Penalty

import Pres from '@site/docs/assets/basics/openai_presence_penalty.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
The presence penalty is similar to the frequency penalty, but flatly penalizes tokens based on if they have ocurred or not, instead of proportionally.
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Pres} className="img-docs w-20 sm:w-auto" />
  </div>
</div>




## Determinism Note

Even when Temperature and Top-P are set completely to zero, the AI may not give the same exact output every time. This is due to randomness in GPU (graphics processing unit) calculations being done in the AI's "brain".

## Conclusion

In conclusion, mastering settings like temperature, top p, maximum length and others are essential when working with language models. These parameters allow for precise control of the model's output to cater to specific tasks or applications. They manage aspects such as randomness in responses, response length and repetition frequency among other things—all contributing towards improving your interaction with the AI.




Partly written by jackdickens382

[^a]: A more technical word is "configuration hyperparameters"
[^b]: Also known as Nucleus Sampling