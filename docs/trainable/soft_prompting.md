---
sidebar_position: 1
---

# 🔴 Měkké prompty/výzvy

Ladění promptů(@lester2021power), alternativa k fine tuningu modelu(@khashabi2021prompt), zmrazí váhy modelu a aktualizuje parametry výzvy. Výsledný prompt je "měkký prompt".


import Image from '../assets/prompt_tuning.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Model Tuning vs Prompt Tuning (Lester et al.)
</div>

Výše uvedený obrázek staví do kontrastu modelové ladění a promptní ladění. 
Při ladění modelu dolaďujete stejný model na různých úlohách. Tím získáte
několik různých modelů, s nimiž nelze nutně snadno dávkovat vstupy.

Naproti tomu promptní ladění vám umožňuje použít stejný model pro všechny úlohy. Můžete 
stačí v době inference přidat správné výzvy, což umožňuje dávkování napříč různými
různých úlohách jednodušší. To je v podstatě stejná výhoda, jakou má běžné promptování.
má. Navíc měkké podněty natrénované pro jeden model napříč
více úloh budou mít často stejnou délku tokenu.

## Jak to funguje

Abychom pochopili základní logiku soft promptingu, zamysleme se nad tím, jak funguje **odvozování modelu**.
na daném promptu: `Co je 2+2?`.

1) Může být tokenizována jako `Co, 's, 2, +, 2, ?`. 

2) Pak se každý token převede na vektor hodnot.

3) Tyto vektory hodnot lze považovat za parametry modelu. Model může být dále
trénovat pouze úpravou vah těchto proměnných.

Všimněte si, že jakmile začneme tyto váhy aktualizovat, vektory tokenů se již nebudou měnit.
již neodpovídají skutečným vnořením ze slovníku.

# Výsledky 

Ladění promptů funguje lépe u větších modelů. Větší modely také vyžadují méně
měkkých promptních tokenů. Bez ohledu na to více než 20 tokenů nepřináší výrazný nárůst výkonu.