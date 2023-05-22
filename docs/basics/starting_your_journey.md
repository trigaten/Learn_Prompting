---
sidebar_position: 1000
---

# 🟢 Začínáme vaši cestu


import Steps from '@site/docs/assets/steps.svg';

<div style={{textAlign: 'center'}}>
<Steps style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>

Nyní, když jste se seznámili se základy promptního inženýrství, jste připraveni začít s promptním inženýrstvím na vlastní pěst. Zbytek tohoto kurzu bude obsahovat další techniky a zdroje, ale nejlepší způsob, jak se naučit PE, je začít experimentovat s vlastními podněty. Tato stránka vám ukáže, jak začít s řešením libovolného problému promptního inženýrství.

Řekněme, že chcete prompt, který bude generovat poutavý, interaktivní příběh s ChatGPT.

## Krok 1: Výzkum

Nejprve je třeba prozkoumat požadovaný prompt. Kromě googlování jsou velmi cenné následující zdroje:

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (a podobné subreddity).
- [Learn Prompting Discord](https://discord.gg/learn-prompting) (a další příslušné diskurzy, včetně [OpenAI Discord](https://discord.gg/openai)).

Jako dobrý výchozí bod vám může posloužit [tento](https://prompts.chat/#act-as-a-text-based-adventure-game) od [Heroj04](https://github.com/Heroj04):
> Chci, abyste se chovali jako textová adventura. Já budu zadávat příkazy a vy budete odpovídat popisem toho, co postava vidí. Chci, abyste odpovídali pouze výstupem ze hry uvnitř jednoho unikátního bloku kódu a ničím jiným. nepište vysvětlivky. nepište příkazy, pokud vám k tomu nedám pokyn. když vám budu potřebovat něco říct anglicky, udělám to tak, že vložím text do kudrnatých závorek {jako je tento}. můj první příkaz je probuď se

## Krok 2: Experiment

Nyní vložíme příkaz do programu ChatGPT a uvidíme, co se stane.

import CSharp from '../assets/csharp.png';

<div style={{textAlign: 'center'}}>
<img src={CSharp} style={{width: "750px"}} />
</div>

Vidíme, že vygeneroval příběh, ale že jej napsal uvnitř bloku kódu csharp (programovací jazyk). To možná nechceme, takže výzvu upravíme na:

> Chci, abyste se chovali jako textová adventura. Já budu zadávat příkazy a vy budete odpovídat popisem toho, co postava vidí. Vysvětlivky nepište. Můj první příkaz je probuď se.


**Odpověď ChatGPT**:
```text
// highlight-start
Pomalu otevíráš oči a zjišťuješ, že ležíš na studené, tvrdé zemi. Když se rozhlédneš po okolí, uvědomíš si, že se nacházíš v matně osvětlené jeskyni. Vzduch je vlhký a zatuchlý a někde v dálce slyšíš zvuk kapající vody. Hlava ti třeští a cítíš se dezorientovaný. Musíš zjistit, kde jsi a jak se odsud dostat.
// highlight-end
```

Pěkné, nyní se příběh vypíše jako prostý text. Naše výzva však postrádá podrobnosti. Přidejme do výzvy další strukturu:

> Chci, abyste se chovali jako textová adventura. Já budu zadávat příkazy a vy budete odpovídat popisem toho, co postava vidí. Nepište vysvětlivky. Používejte květnatý jazyk a popisná slova. Dějištěm je vesnice s chalupářským jádrem, kde se volně pohybují skřítci a žáby jako sobě rovní. Kdykoli budete mluvit, začněte odstavec ČAS, MÍSTO, PŘÁTELÉ (kdo je s vámi), PŘEDMĚTY (jaké předměty máte). Můj první příkaz je probuď se.

**Odpověď ChatGPT**:
```text
// highlight-start
ČAS: Brzy ráno
UMÍSTĚNÍ: Útulná, malebná chaloupka zasazená do vesnice obklopené bujnou zelení a voňavými květinami.
PŘÍBĚHY: Jste sami v ložnici, zachumlaní pod útulnou přikrývkou.
PŘÍBĚHY: V PEŘINĚ SE PŘIKRÝVÁTE A PŘIKRÝVÁTE: Vedle postele vidíš dřevěný noční stolek a na parapetu stojí košík plný čerstvých květin.

Když se probudíte, cítíte teplo slunce pronikající oknem a tiché štěbetání ptáků venku. Posadíte se v posteli, protáhnete si ruce a kocháte se pohledem na krásné květiny, které venku kvetou. Jemné šumění listů a jemný vánek vám přinášejí pocit klidu a pohody. Cítíte se osvěžení a omlazení, připravení na všechna dobrodružství, která vám den přinese.
// highlight-end
```

Ach, perfektní, nyní můžete prožít své sny o jádru chaty s ChatGPT 🌸.


## Krok 3: Získejte zpětnou vazbu a vylepšujte

Nyní to ukažte svým přátelům/zaměstnancům/šéfovi a požádejte je o zpětnou vazbu. Pokud se jim to bude líbit, skvělé! Pokud ne, iterujte výzvu, dokud nezískáte něco, co se bude líbit vám oběma. O zpětnou vazbu můžete požádat také ve výše zmíněných komunitách. Tento krok nikdy skutečně nekončí. Podněty budete vždy iterovat, protože problémy a lidé se v průběhu času mění.

## Závěr

Dělejte inženýrství podnětů tak, jak *chcete*. Já (správce tohoto kurzu) píšu své podněty vždy od začátku. Neexistuje žádný zlatý standard, jak psát nejlepší podněty; nejlepší způsob, jak se to naučit, je pokus a omyl. Šťastné učení a hodně štěstí se zbytkem tohoto kurzu!

:::poznámka
Doporučení v tomto článku platí pro všechny problémy tvorby podnětů, nejen pro psaní interaktivních příběhů!
:::


## Poznámky

- V dalších kapitolách se můžete setkat se slovy **AI, model a LLM.
používána zaměnitelně**. Více informací naleznete v [odkazu na slovník](https://learnprompting.org/docs/vocabulary).