---
sidebar_position: 1
---
# 🟢 Prompting

import Prompt from '@site/docs/assets/prompt.svg';

<div style={{textAlign: 'center'}}>
<Prompt style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>



V předchozí kapitole jsme se zabývali umělou inteligencí a tím, jak mohou lidé dávat umělé inteligenci pokyny k provádění úkolů.
Proces zadávání pokynů umělé inteligenci k provedení úkolu se nazývá výzva(@shin2020autoprompt). Umělé inteligenci říkáme
sadu instrukcí (prompt) a ona provede úkol. Podněty mohou být jednoduché jako instrukce/otázka nebo složité jako obrovské kusy textu. 

Zde jsou dva příklady výzev:

#### 1) Shrnutí článku

Řekněme, že čtete článek o sněžení na Floridě. Chcete se rychle seznámit s hlavními myšlenkami článku, a proto ukážete UI, co čtete, a požádáte o shrnutí[^2]:

```
V americkém státě Florida padá sníh velmi zřídka, zejména v centrální a jižní části státu. S výjimkou nejsevernějších oblastí státu většina velkých měst na Floridě nikdy nezaznamenala měřitelné sněžení, ačkoli byla zaznamenána stopová množství sněhu nebo několikrát za století pozorovány závěje ve vzduchu. Podle Národní meteorologické služby není v oblasti Florida Keys a Key West znám žádný výskyt sněhových závějí od doby evropské kolonizace oblasti před více než 300 lety. V Miami, Fort Lauderdale a Palm Beach je za více než 200 let známa pouze jedna zpráva o pozorování sněhových vánic v ovzduší; stalo se tak v lednu 1977. V každém případě v Miami, Fort Lauderdale a Palm Beach nebyly před touto událostí v roce 1977 ani po ní zaznamenány sněhové vánice.

Shrňte tento odstavec do jedné věty:
```

Zde je odpověď AI. Je to mnohem kratší čtení!

```text
// highlight-start
Sněžení je na Floridě, s výjimkou nejsevernějších oblastí, velmi vzácné a ve velkých městech Miami, Fort Lauderdale a Palm Beach byl za posledních 200 let zaznamenán pouze jeden případ sněhové vánice ve vzduchu.
// highlight-end
```

#### 2) Řešení matematických slovních úloh

Máte-li k dispozici soubor dat s matematickými rovnicemi, které chcete řešit pomocí jazykového modelu,
můžete vytvořit výzvu položením otázky "Co je to ROVNICE".

Pro danou otázku může vaše úplná výzva vypadat takto:

```
Co je 965*590?
```

Na tuto výzvu GPT-3 (text-davinci-003) (umělá inteligence) někdy odpoví 569,050 (nesprávně). Zde přichází na řadu inženýrství výzvy.

# Prompt Engineering

Pokud se místo otázky `Co je 965*590? ` zeptáme 
`Ujistěte se, že vaše odpověď je přesně správná. Kolik je 965*590? Ujistěte se, že vaše odpověď je přesně správná:`, GPT-3 bude
odpoví `569350` (správně). Proč tomu tak je? Proč je užitečné říci umělé inteligenci dvakrát, aby uvedla správnou odpověď? Jak můžeme vytvořit
výzvy, které přinesou optimální výsledky naší úlohy? Zejména tato poslední otázka,
je středem zájmu oboru Prompt Engineering a také tohoto kurzu.

:::caution
Ještě jedna věc, pokud výše uvedenou výzvu spouštíte v GPT-3, měli byste nastavit teplotu na 0, abyste odstranili náhodnost. 
:::

Čtěte dále a dozvíte se, jak konstruovat dobré výzvy!

[^2]: Tento odstavec je z https://en.wikipedia.org/wiki/Snow_in_Florida
