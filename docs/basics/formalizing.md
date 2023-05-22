---
sidebar_position: 7
---

# 🟢 Formalizující prompty/výzvy

import FormalPrompt from '@site/docs/assets/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>


Nyní jsme se zabývali více typy výzev a také způsoby jejich kombinování. Na této stránce najdete pojmy, které vysvětlují různé typy výzev. Přestože existují přístupy k formalizaci diskurzu kolem promptního inženýrství(@white2023prompt), tato oblast se neustále mění, takže vám poskytneme jen dostatek informací pro začátek.

## Části promptů

Existuje několik různých částí výzvy, se kterými se budete setkávat stále dokola. Jsou to zhruba tyto:

- Role
- Pokyn/úkol
- Otázka
- Kontext
- Příklady (několik záběrů)

Na předchozích stránkách jsme se zabývali rolemi, pokyny a příklady. Otázka je prostě otázka! (Např. `jaké je hlavní město Francie?`). Kontext je jakákoli relevantní informace, kterou má model při zodpovídání otázky/provádění instrukce použít.

Ne všechny z nich se vyskytují v každé výzvě, a pokud se některé vyskytují, neexistuje pro ně standardní pořadí. Například následující dvě výzvy, z nichž každá obsahuje roli, instrukci a kontext, budou dělat zhruba totéž:

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

Druhá výzva je však pravděpodobně vhodnější, protože pokyn je poslední částí výzvy. To je dobré, protože je méně pravděpodobné, že žák s LLM prostě napíše další kontext, místo aby se řídil instrukcí. Pokud by například dostal první výzvu, mohl by LLM přidat nový řádek: `15. března 2022: Naplánovaná následná schůzka s neurologem za účelem posouzení průběhu zotavování po otřesu mozku`.


## "Standardní" výzva

Dosud jsme slyšeli o několika různých formátech výzev. Nyní se rychle vrátíme na začátek a definujeme "standardní" výzvu. V návaznosti na Kojimu et al. (@kojima2022large) budeme odkazovat na výzvy, které se skládají z 
se skládají pouze z otázky, jako "standardní" podněty. Za výzvy považujeme také ty, které se skládají výhradně z
otázku, které jsou ve formátu QA, za "standardní" výzvy.

#### Proč by mě to mělo zajímat?

Mnoho článků/příspěvků, na které odkazujeme, používá tento termín. Definujeme jej proto, abychom mohli diskutovat 
nové typy výzev v kontrastu se standardními výzvami. 

### Dva příklady standardních výzev:


_Standardní výzva_
```
Jaké je hlavní město Francie?
```

_Standardní výzva ve formátu QA_
```
Otázka: Jaké je hlavní město Francie?

A:
```

## Několik standardních výzev k výstřelu

Několik vystřelených standardních výzev(@liu2021pretrain) jsou pouze standardní výzvy, které mají _vzor_
v nich. Exempláře jsou příklady úlohy, kterou se daná výzva snaží vyřešit, 
které jsou součástí samotné výzvy (@brown2020language). V rámci výzkumu se jen málo střílelo do standardních výzev 
někdy označují jednoduše jako standardní podněty (ačkoli se to v této příručce snažíme nedělat).

### Dva příklady standardních výzev s několika snímky:

_Few Shot Standard Prompt_

```
Jaké je hlavní město Španělska?
Madrid
Jaké je hlavní město Itálie?
Řím
Jaké je hlavní město Francie?
```

_Několik snímků Standardní výzva ve formátu QA_
```
Otázka: Jaké je hlavní město Španělska?
A: Madrid
Otázka: Jaké je hlavní město Itálie?
Odpověď: Řím
Otázka: Jaké je hlavní město Francie?
A:
```

Výzvy s několika málo záběry usnadňují učení "několika záběrů" alias "v kontextu", což je 
schopnost učit se bez aktualizace parametrů (@zhao2021calibrate).
