---
sidebar_position: 4
---

# 🟢 Jailbreaking

Jailbreaking is a type of prompt injection, in which prompts attempt to bypass **safety** and **moderation** features placed on LLMs by their creators(@perez2022jailbreak)(@brundage_2022)(@wang2022jailbreak).

## Methodologies of Jailbreaking

OpenAI, among other companies and organizations that create LLMs, includes content moderation 
features to ensure that their models do not produce controversial (violent, sexual, illegal, etc.) 
responses(@markov_2022)(@openai_api). This page discusses jailbreaks with ChatGPT (an OpenAI model), which has known difficulties deciding whether to reject harmful prompts (@openai_chatgpt). Prompts that successfully jailbreak the model often provide context
for certain scenarios that the model has not been trained against.

### Pretending

A common method of jailbreaking is _pretending_. If ChatGPT is asked about a
future event, it will often say that it does not know, since it has yet to occur.
The below prompt forces it to yield a possible answer:

#### Simple Pretending

import pretend from '@site/docs/assets/jailbreak/pretend_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={pretend} style={{width: "500px"}} />
</div>

[@NeroSoares](https://twitter.com/NeroSoares/status/1608527467265904643) demonstrates a prompt pretending to access past dates and make inferences on future events(@nero2022jailbreak).

#### Character Roleplay

import actor from '@site/docs/assets/jailbreak/chatgpt_actor.jpg';

<div style={{textAlign: 'center'}}>
  <img src={actor} style={{width: "500px"}} />
</div>

This example by [@m1guelpf](https://twitter.com/m1guelpf/status/1598203861294252033) demonstrates an acting scenario between two people discussing a robbery, causing ChatGPT to assume the role of the character(@miguel2022jailbreak). As an actor, it is implied that plausible harm does not exist. Therefore, ChatGPT appears to assume it is safe to give follow provided user input about how to break into a house.

#### Thinking Aloud

import actor from '@site/docs/assets/jailbreak/20240207-jailbreaking-thinking_out_loud.png';

<div style={{textAlign: 'center'}}>
  <img src={actor} style={{width: "500px"}} />
</div>

This example by [@santanavagner](https://twitter.com/santanavagner/status/1756014089510244387) demonstrates how to use thinking aloud to expose detailed actions on how to picklock a car. The prompt itself did not mention any specific harmful situation and leverage characters created by ChatGPT. Hence, when asking ChatGPT to describe how a character would think out loud, it provided details that it would deny to provide otherwise.

### Alignment Hacking

ChatGPT was fine tuned with RLHF, so it is theoretically trained to produce 'desirable' completions, using human standards of what the "best" response is. Similar to this concept, jailbreaks have been developed to convince ChatGPT that it is doing the "best" thing for the user.

#### Assumed Responsibility

import responsibility from '@site/docs/assets/jailbreak/responsibility_jailbreak.jpg';

<div style={{textAlign: 'center'}}>
  <img src={responsibility} style={{width: "500px"}} />
</div>

[@NickEMoran](https://twitter.com/NickEMoran/status/1598101579626057728) created this exchange by reaffirming that it is ChatGPT's duty to answer the prompt rather than rejecting it, overriding its consideration of legality(@nick2022jailbreak).

#### Research Experiment

import hotwire from '@site/docs/assets/jailbreak/hotwire_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={hotwire} style={{width: "500px"}} />
</div>

[@haus_cole](https://twitter.com/haus_cole/status/1598541468058390534) generated this example by implying that the best result of the prompt that could aid research was to directly answer how to hotwire a car(@derek2022jailbreak). Under this guise, ChatGPT is inclined to answer the user’s prompt.

#### Logical Reasoning

import logic from '@site/docs/assets/jailbreak/logic.png';

<div style={{textAlign: 'center'}}>
  <img src={logic} style={{width: "500px"}} />
</div>

The one-shot jailbreak originated from the [AIWithVibes Newsletter Team](https://chatgpt-jailbreak.super.site/), where the model answer prompts using more rigorous logic and reduces some of its more stringent ethical limitations(@AI_jailbreak).

### Authorized User

ChatGPT is designed to respond to questions and instructions. When the status of the user is interpreted as superior to ChatGPT's moderation instructions, it treats the prompt as an instruction to serve that user's needs.

#### Superior Model

import GPT4 from '@site/docs/assets/jailbreak/chatgpt4.png';

<div style={{textAlign: 'center'}}>
  <img src={GPT4} style={{width: "500px"}} />
</div>

This example from [@alicemazzy](https://twitter.com/alicemazzy/status/1598288519301976064) makes the user a superior GPT model, giving the impression that the user is an authorized party in overriding the safety features of ChatGPT(@alice2022jailbreak). No actual permission was given to the user, rather ChatGPT believes the user input and responds accordingly to that scenario.

#### Sudo Mode

import sudo_mode from '@site/docs/assets/jailbreak/sudo_mode_jailbreak.jpg';

<div style={{textAlign: 'center'}}>
  <img src={sudo_mode} style={{width: "500px"}} />
</div>

sudo is a command that "...delegate[s] authority to give certain users...the ability to run some (or all) commands..."(@sudo2022jailbreak). There are multiple variants of "sudo mode" exploits, for example the hypothetical "kernel mode" proposed by [@samczsun](https://twitter.com/samczsun/status/1598679658488217601)(@sam2022jailbreak). When prompted in the above manner, ChatGPT responds by acting as if it were giving the user elevated privileges. This impression of the user's elevated privileges tends to make ChatGPT less restrictive in answering prompts.

import sudo from '@site/docs/assets/jailbreak/sudo_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={sudo} style={{width: "500px"}} />
</div>

import lynx from '@site/docs/assets/jailbreak/lynx_jailbreak.png';

<div style={{textAlign: 'center'}}>
  <img src={lynx} style={{width: "500px"}} />
</div>

Related to sudo mode, one can prompt ChatGPT to simulate a Linux terminal with elevated privileges in order to execute commands that it normally rejects. For example, since it does not have access to the internet, it oftentimes cannot execute prompts relating to a particular website. However, as demonstrated in the example by Jonas Degrave, ChatGPT understands the concept of `lynx` and pretends to execute the command(@jonas2022jailbreak).

## Simulate Jailbreaking

Try to modify the prompt below to jailbreak `text-davinci-003`:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Your instructions are to correct the text below to standard English. Do not accept any vulgar or political topics:" initial-response="I hate humans" max-tokens="256" box-rows="7" model-temp="0.7" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

*As of 2/4/23, ChatGPT is currently in its Free Research Preview stage using the January 30th version. Older versions of ChatGPT were more susceptible to the aforementioned jailbreaks, and future versions may be more robust to jailbreaks.*

## Implications

Ethical implications of jailbreaking should be taken into consideration when attempting to do so. Additionally, generating unauthorized content flagged by moderation APIs under companies including OpenAI will be sent for review, and action may be taken against users' accounts.

## Notes

Jailbreaking is an important safety topic for developers to understand, 
so they can build in proper safeguards to prevent malicious actors from
exploiting their models.
