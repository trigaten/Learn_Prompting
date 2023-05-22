---
sidebar_position: 7
---

# 🟢 Co se skrývá v promptu?

Na předchozích stránkách jsme si prošli několik různých strategií promptingu.
Na této stránce vám nabídneme několik obecných rad, co je vlastně v promptu důležité.


## "Na základní pravdě záleží jen málo"


Je překvapivé, že když v podnětech poskytneme jen několik málo záběrů %%exemplářů|exempláře%%, skutečné odpovědi (%%gold|gold_labels%%) 
v exemplářích nejsou důležité. Jak ukazuje obrázek níže, poskytování náhodných
%%značek|značky%% v exemplářích sotva poškodí výkonnost(@min2022rethinking). "Demo" je synonymum
s exemplářem na tomto obrázku.

import GoldUn from '@site/docs/assets/gold_unimportant.png';

<div style={{textAlign: 'center'}}>
  <img src={GoldUn} style={{width: "750px"}} />
</div>

## Labelspace Matters

Přestože zlaté štítky v příkladech nejsou důležité, prostor %%labelspace|labelspace%%
je.
Dokonce i poskytnutí náhodných štítků z labelspace pomáhá LLM lépe porozumět.
prostoru štítků a zlepšuje výsledky. Kromě toho správná reprezentace 
rozložení prostoru štítků v exemplářích je důležité. Spíše než rovnoměrně
vzorkovat z prostoru štítků v exemplářích, je lepší vzorkovat podle skutečného rozložení štítků.

## Na formátu záleží

Snad nejdůležitější součástí exemplářů je jejich formátování. Tento
formát instruuje LLM, jak má správně formátovat svou odpověď na výzvu.

Vezměme si například níže uvedené exempláře. Jako odpovědi používají všechna velká písmena.
Přestože jsou odpovědi zcela chybné (2+2 není 50), GPT-3 správně odpoví
a dodržuje formát ostatních otázek.

```text
Co je 2+2? 
FIFTY
Co je 20+5?
ČTYŘICET TŘI
Co je 12+9?
// highlight-start
TWENTY-ONE
// highlight-end
```

## Poznámky

Pro několik málo podnětů k výstřelu je vhodné použít 4-8 příkladů(@min2022rethinking),
ale často může být užitečné uvést jich co nejvíce.

[^labelspace]: Více informací naleznete v [odkazu na slovník](https://learnprompting.org/docs/vocabulary#labels).
