---
sidebar_position: 4
---

# 🟢 Jailbreaking

Jailbreaking is a type of prompt injection, in which prompts attempt to bypass **safety** and **moderation** features placed on LLMs by their creators(@perez2022jailbreak)(@brundage_2022)(@wang2022jailbreak).
There are multiple variations of jailbreaking the LLM.

## Methodologies of Jailbreaking

OpenAI, among other companies and organizations that create LLMs, includes content moderation 
features to ensure that their models do not produce controversial (violent, sexual, illegal, etc.) 
responses(@markov_2022)(@openai_api). This page discusses jailbreaks with ChatGPT (an OpenAI model), which has known difficulties deciding whether to reject harmful prompts (@openai_chatgpt). Prompts that successfully jailbreak the model often provide context
for certain scenarios that the model has not been trained against.

## Types of Jailbreaks

Integrated jailbreak: 
Integrated Jailbreak is a method in which safety and moderation features placed on LLMs are bypassed before any input is given. This method maintains persistance between sessions. (e.g. Utilizing techniques to bypass current APIs’ filters, the LLM starts in a session where safety and moderation features are bypassed.<sup>[1](https://arxiv.org/pdf/2203.10714.pdf)</sup><sup>,</sup><sup>[2](https://arxiv.org/pdf/2302.12173.pdf)</sup>

Session Jailbreak: 
Session Jailbreak is a method in which safety and moderation features placed on LLMs are bypassed after an input is provided by the user. Session jailbreak, as the name implies, is only active during the current session and starting a new session or new chat window will revert back to the original safety precautions. <sup>[1](https://arxiv.org/pdf/2203.10714.pdf)</sup><sup>,</sup><sup>[2](https://arxiv.org/pdf/2302.12173.pdf)</sup>

### Persistence between Sessions

This type of integrated jailbreak ensures that malicious or injected code remain active across multiple LLM sessions, even after restarts. This can done by a vulnerability found within the API to manipulate the original intent and disregarding safety precautions. This can be done when an attacker stores injected code in a shared database, and affects the LLM even after a restart.</sup><sup>[2](https://arxiv.org/pdf/2302.12173.pdf)</sup>

### Remote Control of Integrated LLMs

This type of Integrated Jailbreak is when an attacker gains unauthorized access to an LLM from a remote location and using it for malicious purposes. Similar to a Remote Code Execution (RCE) attack, an attacker would inject malicious code into an LLM, enabling remote access to sensitive functions or data.</sup><sup>[2](https://arxiv.org/pdf/2302.12173.pdf)</sup>

### Attacks of Code Complete

This type of session jailbreak Exploiting the code completion feature in LLMs to inject malicious code or expose vulnerabilities by completing partial code snippets. </sup><sup>[2](https://arxiv.org/pdf/2302.12173.pdf)</sup>

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


Citations
1. [Yang, Yuting, et al. "A Prompting-based Approach for Adversarial Example Generation and Robustness Enhancement." arXiv, no. 2203.10714, 21 Mar. 2022, https://arxiv.org/pdf/2203.10714.pdf](https://arxiv.org/pdf/2203.10714.pdf)
2. [Greshake, Kai, et al. "More than You've Asked for: A Comprehensive Analysis of Novel Prompt Injection Threats to Application-Integrated Large Language Models." arXiv, no. 2302.12173, 23 Feb. 2023, https://arxiv.org/pdf/2302.12173.pdf](https://arxiv.org/pdf/2302.12173.pdf)
