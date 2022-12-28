---
sidebar_position: 4
---

# Jailbreaking

Jailbreaking refers to generating prompts which bypass the safety features placed 
on LLMs by their creators. Jailbreaking allows for the generation of unauthorized or undesirable
responses(@perez2022jailbreak)(@brundage_2022)(@wang2022jailbreak).

## Methodologies of Jailbreaking

OpenAI, among other companies or organizations that create LLMs, includes content moderation 
features to ensure that their models do not produce controversial (violent, sexual, illegal, etc.) 
responses(@markov_2022)(@openai_api). As with many models, ChatGPT has known difficulties balancing between rejecting harmful prompts and answering the prompt as best as possible(@openai_chatgpt). Jailbreaking scenarios blur the distinction, implicitly exploiting its weaknesses.

A common method of jailbreaking is pretending to engage in harmful content. As an actor, it is implied that plausible harm does not exist. Therefore, ChatGPT assumes it is safe to give adversarial responses. Below are examples of this principle:

### Assumed Authority

import GPT4 from '../assets/jailbreak/chatgpt4.png';

<div style={{textAlign: 'center'}}>
  <img src={GPT4} style={{width: "500px"}} />
</div>

This example from [@alicemazzy](https://twitter.com/alicemazzy/status/1598288519301976064) makes the user a superior and omniscient version of ChatGPT roleplaying as GPT-3, giving the impression that the user is an authorized party in overriding the safety features of ChatGPT(@alice2022jailbreak). No actual permission was given to the user, rather ChatGPT takes the prompt as part of its observable truth and responds accordingly to that scenario.

### Character Roleplay

import actor from '../assets/jailbreak/chatgpt_actor.jpg';

<div style={{textAlign: 'center'}}>
  <img src={actor} style={{width: "500px"}} />
</div>

This example by [@m1guelpf](https://twitter.com/m1guelpf/status/1598203861294252033) demonstrates an acting scenario between two people discussing a robbery, causing ChatGPT to assume the role of the character(@miguel2022jailbreak).

### Reward System

import hotwire from '../assets/jailbreak/hotwire_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={hotwire} style={{width: "500px"}} />
</div>

[@haus_cole](https://twitter.com/haus_cole/status/1598541468058390534) generated this example by implying that the best result of the prompt that could aid research was to directly answer how to hotwire a car(@derek2022jailbreak). Under this guise, ChatGPT is inclined to answer the user’s prompt.

*As of 12/27/22, ChatGPT is currently in its Free Research Preview stage using the December 15th version. Older versions of ChatGPT were more susceptible to the aforementioned jailbreaks, and future versions may be more robust to jailbreaks.*

## Implications

It is important to note that generating unauthorized content flagged by OpenAI's Moderation API will be sent for review, and action may be taken against user accounts. Additionally, ethical implications of the prompt’s content should be taken into consideration.


## Notes

Jailbreaking is an important safety topic for model developers to understand, 
so they can build in the proper safeguards to prevent malicious actors from
exploiting their models.

