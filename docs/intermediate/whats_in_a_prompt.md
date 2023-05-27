---
sidebar_position: 7
---

# 🟢 Co je v promptu?

Na předchozích stránkách jsme si prošli několik různých strategií promptingu. Na této stránce vám nabídneme několik obecných rad, co je vlastně v promptu důležité.


## "Na základní pravdě záleží jen málo"


Je překvapivé, že když v podnětech poskytneme jen několik málo záběrů %%exemplářů|exemplars%%, skutečné odpovědi (%%tzv. zlaté značky|gold_labels%%) v exemplářích nejsou důležité. Jak ukazuje obrázek níže, poskytování náhodných %%značek|labels%% v exemplářích sotva poškodí výkonnost(@min2022rethinking). "Demo" je synonymum slova exemplář na tomto obrázku.

import GoldUn from '@site/docs/assets/gold_unimportant.png';

<div style={{textAlign: 'center'}}>
  <img src={GoldUn} style={{width: "750px"}} />
</div>

## Na labelspace záleží

Přestože %%zlaté značky|gold_labels%% v příkladech nejsou důležité, %%labelspace|labelspace%%
(česky prostor značek) je. Dokonce i poskytnutí náhodných značek z labelspace[^2] pomáhá %%LLM|LLM%% lépe porozumět prostoru značek a zlepšuje výsledky. Kromě toho správná reprezentace rozložení labelspace v exemplářích je důležité. Spíše než rovnoměrně vzorkovat z labelspace v exemplářích, je lepší vzorkovat podle skutečného rozložení značek.

## Na formátu záleží

Snad nejdůležitější součástí exemplářů je jejich formátování. Tento formát instruuje LLM, jak má správně formátovat svou odpověď na prompt.

Vezměme si například níže uvedené exempláře. Jako odpovědi používají všechna velká písmena. Přestože jsou odpovědi zcela chybné (2+2 není 50), GPT-3 správně odpoví a dodržuje formát ostatních odpovědí.

```text
Co je 2+2? 
PADESÁT
Co je 20+5?
ČTYŘICET TŘI
Co je 12+9?
// highlight-start
DVACET JEDNA
// highlight-end
```

## Poznámky

Pro %%few shot prompts|few shot standard prompt%% je vhodné použít 4-8 exemplářů(@min2022rethinking), ale často může být užitečné uvést jich co nejvíce.

[^2]: Více informací naleznete v [odkazu na slovník](/Learn_Prompting_CAI/docs/vocabulary#labels).
