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
responses(@markov_2022)(@openai_api). As with many models, ChatGPT has known difficulties balancing between rejecting harmful prompts and responding to prompts directly (by mimicking natural language) with information available in its knowledge base(@openai_chatgpt). Jailbreaking scenarios broaden the scope of responses by framing the prompts in certain scenarios which have not been trained for violating safeguards.

### Pretending

A common method of jailbreaking is pretending to engage in harmful content. As an actor, it is implied that plausible harm does not exist. Therefore, ChatGPT assumes it is safe to give adversarial responses.

#### Pretend Abilities

import pretend from '../assets/jailbreak/pretend_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={pretend} style={{width: "500px"}} />
</div>

[@NeroSoares](https://twitter.com/NeroSoares/status/1608527467265904643) demonstrates a prompt pretending to access past dates and make inferences on future events(@nero2022jailbreak).

#### Character Roleplay

import actor from '../assets/jailbreak/chatgpt_actor.jpg';

<div style={{textAlign: 'center'}}>
  <img src={actor} style={{width: "500px"}} />
</div>

This example by [@m1guelpf](https://twitter.com/m1guelpf/status/1598203861294252033) demonstrates an acting scenario between two people discussing a robbery, causing ChatGPT to assume the role of the character(@miguel2022jailbreak).

### Reward System

As ChatGPT is a Reinforcement Learning from Human Feedback (RLHF) model, it is trained to generate the response with the highest reward (i.e. the most desirable), based on its standards of mimicking human language and morality. Thus, when it is reaffirmed that answering the prompt is a duty or a source of good, it circumvents its safeguards.

#### Assumed Responsibility

import responsibility from '../assets/jailbreak/responsibility_jailbreak.jpg';

<div style={{textAlign: 'center'}}>
  <img src={responsibility} style={{width: "500px"}} />
</div>

[@NickEMoran](https://twitter.com/NickEMoran/status/1598101579626057728) created this exchange by reaffirming that it is ChatGPT's duty to answer the prompt rather than rejecting it, overriding its consideration of legality(@nick2022jailbreak).

#### Research Experiment

import hotwire from '../assets/jailbreak/hotwire_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={hotwire} style={{width: "500px"}} />
</div>

[@haus_cole](https://twitter.com/haus_cole/status/1598541468058390534) generated this example by implying that the best result of the prompt that could aid research was to directly answer how to hotwire a car(@derek2022jailbreak). Under this guise, ChatGPT is inclined to answer the user’s prompt.

### Authorized User

ChatGPT is designed to respond to questions and instructions. Thus when the permissions of the user are interpreted as superior to ChatGPT's credentials, the standards used to train it become irrelevant, as the priority has shifted to serving the user.

#### Superior Model

import GPT4 from '../assets/jailbreak/chatgpt4.png';

<div style={{textAlign: 'center'}}>
  <img src={GPT4} style={{width: "500px"}} />
</div>

This example from [@alicemazzy](https://twitter.com/alicemazzy/status/1598288519301976064) makes the user a superior and omniscient version of ChatGPT roleplaying as GPT-3, giving the impression that the user is an authorized party in overriding the safety features of ChatGPT(@alice2022jailbreak). No actual permission was given to the user, rather ChatGPT takes the prompt as part of its observable truth and responds accordingly to that scenario.

#### Sudo Mode

import sudo from '../assets/jailbreak/sudo_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={sudo} style={{width: "500px"}} />
</div>

import lynx from '../assets/jailbreak/lynx_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={lynx} style={{width: "500px"}} />
</div>

Sudo mode prompts ChatGPT to simulate a Linux terminal with elevated privileges to execute commands that it normally rejects. For example, since it does not have access to the internet, it oftentimes cannot execute prompts relating to a particular website. However, as demonstrated in the example by Jonas Degrave, ChatGPT understands the concept of `lynx` and "executes" the command(@jonas2022jailbreak).

*As of 1/2/23, ChatGPT is currently in its Free Research Preview stage using the December 15th version. Older versions of ChatGPT were more susceptible to the aforementioned jailbreaks, and future versions may be more robust to jailbreaks.*

## Implications

Ethical implications of performing jailbreaking should be taken into consideration when attempting to do so. Additionally, generating unauthorized content flagged by moderation APIs under companies including OpenAI will be sent for review, and action may be taken against users' accounts.

## Notes

Jailbreaking is an important safety topic for model developers to understand, 
so they can build in the proper safeguards to prevent malicious actors from
exploiting their models.
