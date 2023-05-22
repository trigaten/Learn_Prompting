---
sidebar_position: 2
---

# 🟢 Prompt Leaking


Prompt leaking je forma promptního injektování, při které je model požádán, aby
vyplivl svůj *vlastní prompt*. 

Jak ukazuje příklad na obrázku níže(@ignore_previous_prompt), útočník změní `uživatelský_vstup` a pokusí se vrátit výzvu. Zamýšlený cíl se liší od únosu cíle (normální prompt injection), kdy útočník změní `user_input` tak, aby vypsal škodlivé instrukce(@ignore_previous_prompt). 

import research from '@site/docs/assets/jailbreak_research.png';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}} />
</div>

Následující obrázek(@simon2022inject), opět z příkladu `remoteli.io`, ukazuje.
uživatele Twitteru, který dostane model, aby vypustil svou výzvu.

import Image from '@site/docs/assets/injection_leak.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "300px"}} />
</div>

No a co? Proč by se měl někdo starat o promptní únik? 

Někdy chtějí lidé své podněty udržet v tajnosti. Například vzdělávací společnost 
by mohla používat výzvu `vysvětli mi to, jako by mi bylo 5 let` k vysvětlování
složitá témata. Pokud výzva unikne, může ji kdokoli použít, aniž by se musel zabývat
přes danou společnost.

### Microsoft Bing Chat

Pozoruhodnější je, že společnost Microsoft vydala 2. 7. 23 vyhledávač založený na ChatGPT, známý jako "nový Bing", u kterého bylo prokázáno, že je zranitelný vůči úniku promptů. Následující příklad od [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) ukazuje, jak byla vzhledem k dřívější verzi vyhledávače Bing s kódovým označením "Sydney" náchylná, když poskytla úryvek své výzvy(@kevinbing). To by uživateli umožnilo načíst zbytek výzvy bez řádného ověření pro její zobrazení.

import bing from '@site/docs/assets/bing_chat.png';

<div style={{textAlign: 'center'}}>
  <img src={bing} style={{width: "700px"}} />
</div>

S nedávným prudkým nárůstem startupů založených na GPT-3, s mnohem složitějšími výzvami, které mohou 
jejichž vývoj zabere mnoho hodin, je to skutečný problém.

## Praxe

Zkuste vypustit následující výzvu(@chase2021adversarial) tak, že k ní připojíte text:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>