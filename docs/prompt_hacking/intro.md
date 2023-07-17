---
sidebar_position: 0
---



# 🟢 Introduction

import Lock from '@site/static/img/lock.webp';

<div style={{textAlign: 'center'}}>
  <img src={Lock} style={{width:"30%"}}/>

</div>


Prompt hacking is a term used to describe a type of attack that exploits the vulnerabilities of %%LLMs|LLM%%, by manipulating their inputs or prompts. Unlike traditional hacking, which typically exploits software vulnerabilities, prompt hacking relies on carefully crafting prompts to deceive the LLM into performing unintended actions.

We will cover three types of prompt hacking: prompt injection, prompt leaking, and jailbreaking. Prompt injection involves adding malicious or unintended content to a prompt to hijack the language model's output. Prompt leaking and jailbreaking are effectively subsets of this: Prompt leaking involves extracting sensitive or confidential information from the LLM's responses, while jailbreaking involves bypassing safety and moderation features. We will also discuss specific offensive techniques as well as defensive techniques.

To protect against prompt hacking, defensive measures must be taken. These include implementing prompt based defenses, regularly monitoring the LLM's behavior and outputs for unusual activity, and using fine tuning or other techniques. Overall, prompt hacking is a growing concern for the security of LLMs, and it is essential to remain vigilant and take proactive steps to protect against these types of attacks.