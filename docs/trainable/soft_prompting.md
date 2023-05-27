---
sidebar_position: 1
---

# 🔴 Soft prompty

Prompt tuning(@lester2021power), alternativa k fine tuningu modelu(@khashabi2021prompt), zmrazí váhy modelu a aktualizuje parametry promptu. Výsledný prompt je "měkký prompt" (ang. soft prompt).


import Image from '../assets/prompt_tuning.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Model Tuning vs Prompt Tuning (Lester et al.)
</div>

Na výše uvedeném obrázku je kontrast mezi tuningem modelu a prompt tuningem. Při tuningu (ladění) modelu dolaďujete stejný model na různých úlohách. Tím získáte několik různých modelů, s nimiž nelze nutně snadno batchovat vstupy.

Naproti tomu ladění promptu vám umožňuje použít stejný model pro všechny úlohy. Stačí jen v době inference doplnit správné prompty, což usnadňuje batching v různých úlohách. To je v podstatě stejná výhoda, jakou má běžný prompting. Navíc soft prompty natrénované pro jeden model ve více úlohách budou mít často stejnou délku tokenu.

## Jak to funguje

Abychom pochopili základní logiku soft promptingu, zamysleme se nad tím, jak funguje **odvozování modelu** na daném promptu: `Co je 2+2?`.

1) Může být tokenizována jako `Co, 's, 2, +, 2, ?`. 

2) Pak se každý token převede na vektor hodnot.

3) Tyto vektory hodnot lze považovat za parametry modelu. Model může být dále trénovaán pouze úpravou vah těchto proměnných.

Všimněte si, že jakmile začneme tyto váhy aktualizovat, vektory tokenů již neodpovídají skutečným embeddingům ze slovníku.

# Výsledky 

Ladění promptů funguje lépe u větších modelů. Větší modely také vyžadují méně soft prompt tokenů. Bez ohledu na to více než 20 tokenů nepřináší výrazný nárůst výkonu.