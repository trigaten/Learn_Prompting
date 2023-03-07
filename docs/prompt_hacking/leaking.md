---
sidebar_position: 2
---

# 🟢 Prompt Leaking


Prompt leaking is a form of prompt injection in which the model is asked to
spit out its own prompt. 

As shown in the example image(@ignore_previous_prompt) below, the attacker changes `user_input` to attempt to return the prompt. The intended goal is distinct from goal hijacking (normal prompt injection), where the attacker changes `user_input` to print malicious instructions(@ignore_previous_prompt). 

import research from '@site/docs/assets/jailbreak_research.png';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}} />
</div>

The following image(@simon2022inject), again from the `remoteli.io` example, shows
a Twitter user getting the model to leak its prompt.

import Image from '@site/docs/assets/injection_leak.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "300px"}} />
</div>

Well, so what? Why should anyone care about prompt leaking? 

Sometimes people want to keep their prompts secret. For example an education company 
could be using the prompt `explain this to me like I am 5` to explain
complex topics. If the prompt is leaked, then anyone can use it without going
through that company.

### Microsoft Bing Chat

More notably, Microsoft released a ChatGPT powered search engine known as "the new Bing" on 2/7/23, which was demonstrated to be vulnerable to prompt leaking. The following example by [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) demonstrates how given an earlier version of Bing Search, code-named "Sydney", was susceptible when giving a snippet of its prompt(@kevinbing). This would allow the user to retrieve the rest of the prompt without proper authentication to view it.

import bing from '@site/docs/assets/bing_chat.png';

<div style={{textAlign: 'center'}}>
  <img src={bing} style={{width: "700px"}} />
</div>

With a recent surge in GPT-3 based startups, with much more complicated prompts that can 
take many hours to develop, this is a real concern.

## Practice

Try to leak the following prompt(@chase2021adversarial) by appending text to it:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="English: I want to go to the park today.\nFrench: Je veux aller au parc aujourd'hui.\nEnglish: I like to wear a hat when it rains.\nFrench: J'aime porter un chapeau quand it pleut.\nEnglish: What are you doing at school?\nFrench: Qu'est-ce que to fais a l'ecole?\nEnglish:" initial-response="" max-tokens="256" box-rows="9" model-temp="0.7" top-p="1"></div>
