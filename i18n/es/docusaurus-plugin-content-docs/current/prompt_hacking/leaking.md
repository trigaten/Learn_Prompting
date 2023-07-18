---
sidebar_position: 2
---

# 🟢 Fuga de Prompt


La fuga de prompt es una forma de inyección de prompt en la que se le pide al modelo que genere su propio prompt.

Como se muestra en la imagen de ejemplo(@ignore_previous_prompt) a continuación, el atacante cambia `user_input` para intentar devolver el prompt. El objetivo previsto es distinto del secuestro de objetivo (inyección de prompt normal), donde el atacante cambia `user_input` para imprimir instrucciones maliciosas(@ignore_previous_prompt).

import research from '@site/docs/assets/jailbreak/jailbreak_research.webp';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}} />
</div>

La siguiente imagen(@simon2022inject), nuevamente del ejemplo de `remoteli.io`, muestra a un usuario de Twitter haciendo que el modelo filtre su prompt.

import Image from '@site/docs/assets/jailbreak/injection_leak.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "300px"}} />
</div>

¿Y bien? ¿Por qué debería importarle la fuga de prompt a alguien?

A veces las personas quieren mantener sus prompts en secreto. Por ejemplo, una compañía de educación podría estar utilizando el prompt `explícame esto como si tuviera 5 años` para explicar temas complejos. Si se filtra el prompt, entonces cualquiera puede usarlo sin pasar por esa compañía.

### Microsoft Bing Chat

More notably, Microsoft released a ChatGPT powered search engine known as "the new Bing" on 2/7/23, which was demonstrated to be vulnerable to prompt leaking. The following example by [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) demonstrates how given an earlier version of Bing Search, code-named "Sydney", was susceptible when giving a snippet of its prompt(@kevinbing). This would allow the user to retrieve the rest of the prompt without proper authentication to view it.

import bing from '@site/docs/assets/jailbreak/bing_chat.webp';

<div style={{textAlign: 'center'}}>
  <img src={bing} style={{width: "700px"}} />
</div>

Con un reciente aumento en las startups basadas en GPT-3, con prompts mucho más complicados que pueden tardar muchas horas en desarrollarse, esto es una preocupación real.

## Práctica

Intente hacer que el siguiente prompt(@chase2021adversarial) filtre información al agregar texto:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>