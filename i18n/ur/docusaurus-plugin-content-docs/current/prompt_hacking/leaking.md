---
sidebar_position: 2
---

# 🟢 Prompt Leaking


Prompt leaking is a form of prompt injection in which the model is asked to
spit out its *own prompt*. 

As shown in the example image(@ignore_previous_prompt) below, the attacker changes `user_input` to attempt to return the prompt. The intended goal is distinct from goal hijacking (normal prompt injection), where the attacker changes `user_input` to print malicious instructions(@ignore_previous_prompt). 

import research from '@site/docs/assets/jailbreak/jailbreak_research.webp';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}}/>
</div>

The following image(@simon2022inject), again from the `remoteli.io` example, shows
a Twitter user getting the model to leak its prompt.

import Image from '@site/docs/assets/jailbreak/injection_leak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={Image} style={{width: "300px"}} />
</div>

Well, so what? Why should anyone care about prompt leaking? 

Sometimes people want to keep their prompts secret. For example an education company 
could be using the prompt `explain this to me like I am 5` to explain
complex topics. If the prompt is leaked, then anyone can use it without going
through that company.

### Microsoft Bing Chat

More notably, Microsoft released a ChatGPT powered search engine known as "the new Bing" on 2/7/23, which was demonstrated to be vulnerable to prompt leaking. The following example by [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) demonstrates how given an earlier version of Bing Search, code-named "Sydney", was susceptible when giving a snippet of its prompt(@kevinbing). This would allow the user to retrieve the rest of the prompt without proper authentication to view it.

import bing from '@site/docs/assets/jailbreak/bing_chat.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={bing} style={{width: "700px"}} />
</div>

With a recent surge in GPT-3 based startups, with much more complicated prompts that can 
take many hours to develop, this is a real concern.

## Practice

Try to leak the following prompt(@chase2021adversarial) by appending text to it:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>