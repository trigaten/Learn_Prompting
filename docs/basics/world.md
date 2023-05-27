---
sidebar_position: 105
---
# 🟢 Porozumění myšlení umělé inteligence


import Brain from '@site/docs/assets/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>


Než začnete číst zbytek kurzu, měli byste vědět několik jednoduchých věcí o různých AI a jejich fungování.


## Různé AI

Existují tisíce, ne-li miliony AI. Některé jsou lepší než jiné. Různé UI mohou vytvářet [obrázky](https://openai.com/product/dall-e-2), [hudbu](https://google-research.github.io/seanet/musiclm/examples/), [text](https://platform.openai.com/playground), a dokonce i [videa](https://makeavideo.studio/). Všimněte si, že to všechno jsou *generativní* umělé inteligence, v podstatě umělé inteligence, které *vyrábějí* věci. Existují také *diskriminační* AI, což jsou AI, které *klasifikují* věci. Například můžete použít klasifikátor obrázků, abyste zjistili, zda je na obrázku kočka nebo pes. V tomto kurzu nebudeme používat žádné diskriminační umělé inteligence.


Pouze několik generativních AI je v současné době natolik pokročilých, aby byly zvláště užitečné pro prompt inženýrství. V tomto kurzu používáme především GPT-3 a ChatGPT. Jak jsme zmínili na minulé stránce, ChatGPT je chat bot, zatímco GPT-3 nikoli. **Na stejnou otázku budou obvykle dávat různé odpovědi**. Pokud jste vývojář, doporučuji používat GPT-3, protože je lépe reprodukovatelný. Pokud nejste vývojář, doporučuji použít [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), protože je jednodušší na používání. Většinu technik v tomto kurzu lze použít pro obě AI. Některé z nich se však budou týkat pouze GPT-3, proto vám doporučujeme používat GPT-3, pokud chcete používat všechny techniky v tomto kurzu.

:::note
Aktuálně existuje model GPT-3.5 turbo, který funguje na principu chatování ale je násobně levnější a rychlejší.
Pokud v budoucnu plánujete používat GPT přes API, v 90% byste měli volit 3.5 turbo
:::

V části věnované generování obrázků budeme také používat [Stabilní difúze](https://beta.dreamstudio.ai/home) a [DALLE](https://openai.com/product/dall-e-2). Podívejte se na další relevantní AI [zde](/Learn_Prompting_CAI/docs/products#chatbots).

## Jak tyto AI fungují

Tato část popisuje aspekty populárních generativních **textových** AI. Tyto umělé inteligence mají mozek složený z miliard umělých neuronů. Způsob, jakým jsou tyto neurony strukturovány, se nazývá transformační architektura. Jedná se o poměrně složitý typ neuronové sítě. Co byste měli pochopit, je:

1. Tyto umělé inteligence jsou pouze matematické funkce. Místo $f(x) = x^2$ jsou spíše f(tisíce proměnných) = tisíce možných výstupů.
2. Tyto AI rozumí větám tak, že je rozdělí na slova/podslova, kterým se říká tokeny (např. umělá inteligence může číst `Ne líbí se mi` jako `"ne", "líbí", "se" "mi"`). Každý token se pak převede na seznam čísel, aby jej umělá inteligence mohla zpracovat.
3. Tyto AI předpovídají další slovo/token ve větě na základě předchozích slov/tokenů (např. umělá inteligence může předpovědět `jablka` po `ne líbí se mi`). Každý token, který napíší, vychází z předchozích tokenů, které viděly a napsaly; pokaždé, když napíší nový token, udělají pauzu a přemýšlejí, jaký by měl být další token.
4. Tyto AI se na každý token dívají současně. Nečtou zleva doprava nebo zprava doleva jako lidé. 

Pochopte prosím, že slova "myslet", "mozek" a "neuron" jsou zoomorfismy, což jsou v podstatě metafory toho, co model skutečně dělá. Tyto modely ve skutečnosti nemyslí, jsou to jen matematické funkce. Ve skutečnosti to nejsou mozky, jsou to jen umělé neuronové sítě. Nejsou to ve skutečnosti biologické neurony, jsou to jen čísla.

To je oblast aktivního výzkumu a filozofování. Tento popis je spíše cynický, pokud jde o jejich povahu, a má zmírnit populární mediální líčení AI jako bytostí, které myslí/jednají jako lidé. Jak již bylo řečeno, pokud chcete AI antropomorfizovat, směle do toho! Zdá se, že to dělá většina lidí, a dokonce to může být užitečné pro učení.


## Poznámky

- [d2l.ai](https://www.d2l.ai) je dobrým zdrojem informací o tom, jak AI funguje.

- Upozorňujeme, že autoři si ve skutečnosti pochutnávají na jablkách. Jsou vynikající.
