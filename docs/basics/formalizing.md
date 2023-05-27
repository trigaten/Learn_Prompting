---
sidebar_position: 7
---

# 🟢 Formování promptů

import FormalPrompt from '@site/docs/assets/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>


Doposud jsme se zabývali typy promptů a také způsoby jejich kombinování. Na této stránce najdete pojmy, které vysvětlují různé typy promptů. Přestože existují přístupy k formalizaci diskurzu kolem prompt inženýrství(@white2023prompt), tato oblast se neustále mění, takže vám poskytneme jen dostatek informací pro začátek.

## Části promptů

Existuje několik různých částí promptu, se kterými se budete setkávat stále dokola. Jsou to zhruba tyto:

- Role
- Pokyn/úkol
- Otázka
- Kontext
- Příklady (few shot)

Na předchozích stránkách jsme se zabývali rolemi, pokyny a příklady. Otázka je prostě otázka! (Např. `jaké je hlavní město Francie?`). Kontext je jakákoli relevantní informace, kterou má model při zodpovídání otázky/provádění instrukce použít.

Ne všechny z nich se vyskytují v každém promptu, a pokud se některé vyskytují, neexistuje pro ně standardní pořadí. Například následující dva prompty, z nichž každý obsahuje roli, instrukci a kontext, budou dělat zhruba totéž:

```text
Jste lékař. Přečtěte si tuto anamnézu a předpovězte rizika pro pacienta:

1. ledna 2000: Zlomenina pravé ruky při hře basketbalu. Ošetřena sádrou.
15. února 2010: Diagnostikována hypertenze. Předepsán lisinopril.
10. září 2015: Rozvinul se u něj zápal plic. Léčen antibiotiky a plně se zotavil.
1. března 2022: Při autonehodě utrpěl otřes mozku. Přijat do nemocnice a 24 hodin sledován.
```

```text
1. ledna 2000: Zlomenina pravé ruky při hře basketbalu. Ošetřena sádrou.
15. února 2010: Diagnostikována hypertenze. Předepsán lisinopril.
10. září 2015: Rozvinul se u něj zápal plic. Léčen antibiotiky a plně se zotavil.
1. března 2022: Při autonehodě utrpěl otřes mozku. Přijat do nemocnice a 24 hodin sledován.

Jste lékař. Přečtěte si tuto anamnézu a předpovězte rizika pro pacienta:
```

Druhý prompt je však pravděpodobně vhodnější, protože pokyn je poslední částí promptu. To je dobré, protože je méně pravděpodobné, že LLM prostě napíše další kontext, místo aby se řídil instrukcí. Pokud by například dostal první prompt, mohl by LLM přidat nový řádek: `15. března 2022: Naplánovaná následná schůzka s neurologem za účelem posouzení průběhu zotavování po otřesu mozku`.


## "Standardní" prompt

Dosud jsme slyšeli o několika různých formátech promptů. Nyní se rychle vrátíme na začátek a definujeme "standardní" prompt. V návaznosti na Kojimu et al. (@kojima2022large) budeme odkazovat na výzvy, které se skládají z otázky, jako "standardní" prompt. Za "standardní" prompty považujeme také ty, které se skládají výhradně z otázky ve formátu QA (otázka->odpověď).

#### Proč by mě to mělo zajímat?

Mnoho článků/příspěvků, na které odkazujeme, používá tento termín. Definujeme jej proto, abychom mohli diskutovat nové typy promptů v kontrastu se standardními prompty. 

### Dva příklady standardních promptů:


_Standardní prompt_
```
Jaké je hlavní město Francie?
```

_Standardní prompt ve formátu QA_
```
Q: Jaké je hlavní město Francie?

A:
```

## Standardní few shot prompty

Standardní few shot prompty(@liu2021pretrain) jsou pouze standardní prompty, které obsahují _exempláře_. Exempláře jsou příklady úlohy, kterou se daný prompt snaží vyřešit, které jsou součástí samotného promptu (@brown2020language). V rámci výzkumu se standardní few shot prompty někdy označují jednoduše jako standardní podněty (ačkoli se to v této příručce snažíme nedělat).

### Dva příklady standardních few shot promptů:

_Standardní few shot prompt_

```
Jaké je hlavní město Španělska?
Madrid
Jaké je hlavní město Itálie?
Řím
Jaké je hlavní město Francie?
```

_Standardní few shot prompt ve formátu QA_
```
Q: Jaké je hlavní město Španělska?
A: Madrid
Q: Jaké je hlavní město Itálie?
A: Řím
Q: Jaké je hlavní město Francie?
A:
```

Few shot prompty usnadňují "few shot" učení alias "v kontextu", což je schopnost učit se bez aktualizace parametrů (@zhao2021calibrate).
