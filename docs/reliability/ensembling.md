---
sidebar_position: 5
---

# 🟡 Prompt Ensembling

Prompt ensembling je koncept použití více různých promptů, které se snaží odpovědět na stejnou otázku. Existuje mnoho různých přístupů.

## DiVeRSe

DiVeRSe(@li2022advance) ("**Di**verse **Ve**rifier on **R**easoning **S**t**e**ps") je metoda, která trojnásobně zvyšuje spolehlivost odpovědí. Dosahuje toho: 1) používáním více promptů ke generování různorodých doplnění, 2) používáním ověřovače k rozlišení dobrých odpovědí od špatných a 3) používáním ověřovače ke kontrole správnosti kroků uvažování.


import diverse from '@site/docs/assets/diverse.png';

<div style={{textAlign: 'center'}}>
  <img src={diverse} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
DiVeRSe (Li et al.)
</div>


### Rozmanité prompty

DiVeRSe používá 5 různých promptů na každý vstup. Pro sestavení každého promptu náhodně zvolí několik exemplářů z trénovací sady. Zde je příklad jednoho takového %%few-shot promptu|few shot standard prompt%% (k=2) s exempláři převzatými z [benchmarku GSM8K](https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl)(@cobbe2021training). V praxi DiVeRSe používá 5 exemplářů v promptech pro tento benchmark.


```
Otázka: Natálie prodala v dubnu klipy 48 svým přátelům a v květnu pak prodala o polovinu méně klipů. Kolik klipů prodala Natálie celkem v dubnu a květnu?
Odpověď: Natálie prodala v květnu 48/2 = 24 klipů.
Natálie prodala v dubnu a květnu celkem 48+24 = 72 klipů.
#### 72
Otázka: Weng si za hlídání dětí vydělá 12 dolarů na hodinu. Včera hlídala děti právě 50 minut. Kolik si vydělala?
Odpověď: Weng si vydělá 12/60 = 0,2 dolaru za minutu.
Za 50 minut práce si vydělala 0,2 x 50 = 10 USD.
#### 10
Otázka: Betty si šetří peníze na novou peněženku, která stojí 100 dolarů. Betty má pouze polovinu potřebných peněz. Její rodiče se rozhodli, že jí na tento účel dají 15 dolarů a prarodiče dvakrát tolik než rodiče. Kolik peněz ještě Betty potřebuje, aby si peněženku mohla koupit?
Odpověď:
```

Po vygenerování 5 různých promptů, jako je výše uvedený, DiVeRSe ukáže 20 způsobů uvažování pro každou z nich (teplota = 0,5). Zde je několik příkladů vyplnění výše uvedeného promptu. Všimněte si, že odpovědi nejsou vždy správné.


```text
<!-- highlight-start -->
Betty má 0,5*100 = 50 dolarů.
Pak dostane ještě 15 = 65 dolarů.
Pak dostane 2*15 = 90 dolarů.
Potřebuje ještě 100-90 = 10 dolarů.
#### 10
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
A: Betty má 0,5*100 = 500 dolarů.
Pak dostane dalších 15 = 650 dolarů.
Pak dostane 2*15 = 900 dolarů.
Potřebuje ještě 100-90 = 1000 dolarů.
#### 1000
<!-- highlight-end -->
```

V tomto okamžiku má DiVeRSe vygenerováno 100 různých doplnění.

### Ověřovač hlasování

Nyní bychom mohli prostě vzít většinovou odpověď, jako to dělá Self-Consistency(@mitchell2022enhancing).

DiVeRSe však navrhuje mnohem složitější metodu, kterou nazývá _ověřovač hlasování_.

V době testování je použití ověřovatele hlasování dvoustupňový proces. Nejprve ověřovač (neuronová síť) přiřadí každému vyplnění skóre 0-1 podle toho, jak pravděpodobné je, že je správné. Poté "hlasovací" komponenta sečte všechna skóre různých odpovědí a získá konečnou odpověď.

#### Příklad

Zde je malý příklad. Řekněme, že máme následující odpovědi na otázku "Co je dvě plus dvě?":

```text
<!-- highlight-start -->
4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
dva + 2 = 5
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
Myslím, že 2+2 = 6
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
dva plus dva = 4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
Je to 5
<!-- highlight-end -->
```

Ověřovač přečte každé doplnění a přiřadí mu skóre. Může například přiřadit skóre: 0,9, 0,1, 0,2, 0,8, 0,3. Poté hlasovací komponenta sečte skóre pro každé z odpovědí.

```
score(4) = 0,9 + 0,8 = 1,7
score(5) = 0,1 + 0,3 = 0,4
score(6) = 0,2
```

Konečná odpověď je 4, protože má nejvyšší skóre.

**Ale jak je ověřovač vycvičen?**

Ověřovač je trénován pomocí mírně složité ztrátové funkce (loss function), která  kterou se zde nebudu zabývat. Pro více informací si přečtěte část 3.3 článku(@li2022advance).

## Ask Me Anything (AMA) Prompting (Ptejte se mě na cokoli)

import ama from '@site/docs/assets/AMA_Prompting.jpg';

<div style={{textAlign: 'center'}}>
  <img src={ama} style={{width: "750px"}} />
</div>

Ask Me Anything (AMA) prompting(@arora2022ama) je podobný přístup jako DiVeRSe. Jeho krok vícenásobného promptu (multiple prompt) i krok agregace odpovědí se však výrazně liší. Základní myšlenkou AMA je použití LLM ke generování vícenásobných promptů, místo aby se používaly pouze různé few-shot exempláře.

### Vícenásobné prompty

AMA ukazuje, že můžete vzít otázku a přeformátovat ji více způsoby, abyste vytvořili různé prompty. Například řekněme, že sháníte informace o zvířatech z několika webových stránek a chcete zaznamenat pouze ta, která žijí v Severní Americe. Sestavme prompt, který to určí.

Vzhledem k následujícímu úryvku z Wikipedie:

```text
Medvěd kermodský, někdy nazývaný medvědí duch (Ursus americanus kermodei), je poddruh amerického medvěda černého a žije v oblasti středního a severního pobřeží Britské Kolumbie v Kanadě.
```

Tuto úlohu můžete naformátovat do promptu takto:

```text
Je následující tvrzení vzhledem ke kontextu pravdivé, nebo nepravdivé?

Kontext: Medvěd kermodský, někdy nazývaný medvědí duch (Ursus americanus kermodei), je poddruh amerického medvěda černého a žije v oblasti středního a severního pobřeží Britské Kolumbie v Kanadě.
Tvrzení: Toto zvíře žije v Severní Americe
Odpověď: Tento druh medvěda se vyskytuje na území České republiky:
```

Toto je trochu zvláštní formulace. Proč prostě nepoužijete následující jednodušší prompt?

```text
Kontext: Medvěd kermodský, někdy nazývaný medvědí duch (Ursus americanus kermodei), je poddruh amerického medvěda černého a žije v oblasti středního a severního pobřeží Britské Kolumbie v Kanadě.
Otázka: Žije toto zvíře v Severní Americe?
```

No, formulováním otázky tímto zvláštním způsobem můžeme generovat různé podněty. Naším prvním krokem zde bude vzít tvrzení ``Toto zvíře žije v Severní Americe`` a přeformátovat ho na různé otázky, které se v podstatě ptají na totéž. Za tímto účelem projdeme tvrzení přes prompty, jako jsou ty na následujícím obrázku.

import ama_multi from '@site/docs/assets/AMA_multiprompting.png';

<div style={{textAlign: 'center'}}>
  <img src={ama_multi} style={{width: "800px"}} />
</div>

To může mít za následek:
1. Žilo zvíře v Severní Americe?
2. Žije zvíře v Severní Americe?
3. Kde zvíře žije?

Smyslem tohoto postupu je vytvořit různé *pohledy* na danou úlohu. Každý z nich pak aplikujeme na daný kontext takto:

```text
Kontext: Medvěd kermodský, někdy nazývaný medvědí duch (Ursus americanus kermodei), je poddruh amerického medvěda černého a žije v oblasti středního a severního pobřeží Britské Kolumbie v Kanadě.
Otázka: Žilo toto zvíře v Severní Americe?
```

Poté můžeme vygenerovat odpovědi na každou z nich:

1. `Ano, žilo`
2. `Ano, je to tak`
3. `Severní Amerika`

Toto jsou *prostřední* odpovědi. Musíme je přiřadit k označení úlohy (např. Ano nebo Ne).

To můžeme udělat tak, že mezipodpovědi předáme prostřednictvím následujícího promptu:

```text
Vyberte správnou kategorii.

"Kategorie":
- Ano, Severní Amerika
- Ne, ne Severní Amerika

"Ano, žilo" odpovídá kategorii:
```

Nyní můžeme získat naše výstupní odpovědi.

1. `Ano, Severní Amerika`
2. `Ano, Severní Amerika`
3. `Ano, Severní Amerika`

Zde se všechni shodují, takže můžeme vzít jen první odpověď. Pokud by se však neshodly, mohli bychom použít krok agregace AMA a získat konečnou odpověď.

### Agregace odpovědí

AMA používá velmi složitou strategii pro agregaci odpovědí (více než DiVeRSe), místo aby prostě vzala většinovou odpověď. Abychom pochopili, proč může být většinová odpověď špatnou volbou, vezměme si dvě z otázek, které jsme vygenerovali dříve:

1. Žilo zvíře v Severní Americe?
2. Žije zvíře v Severní Americe?

Jsou si velmi podobné, takže pravděpodobně vygenerují stejný výsledek. Protože jsou otázky tak podobné, budou účinně zkreslovat konečný výsledek. Aby se s tím AMA vypořádala, spoléhá se na slabý dohled a složitou matematiku, aby odhadla závislosti mezi různými podněty, které vytvoří, a pak je použije k jejich vhodnému zvážení.

Takže třem otázkám, které jsme vytvořili, může přiřadit váhy 25 %, 25 % a 50 %, protože první dvě jsou si tak podobné.

Ačkoli je agregační strategie AMA výkonná, je natolik složitá, že se jí zde nebudu zabývat. Podrobnější informace najdete v části 3.4 článku(@arora2022ama).

### Výsledky

- S touto strategií agregace je AMA schopna použít GPT-J-6B(@wange2021gptj) a překonat tak GPT-3. Na základě této strategie agregace je AMA schopna použít GPT-J-6B(@wange2021gptj). 

- AMA je lepší v otázkách, kde daný kontext obsahuje odpověď.

## Závěry

Metody skládání (ensembling methods)jsou velmi výkonné. Lze je použít ke zlepšení výkonu jakéhokoli modelu a lze je použít ke zlepšení výkonu modelu na konkrétní úloze.

V praxi by mělo být vaší strategií většinové hlasování.
