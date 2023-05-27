---
sidebar_position: 6
locale: cs-CZ
style: chicago
---

# 🟢 Kombinování technik

import CombinedPrompt from '@site/docs/assets/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>


Jak jsme viděli na předchozích stránkách, prompty mohou mít různý formát a složitost. Mohou obsahovat kontext, instrukce a několik příkladů vstupů a výstupů. Dosud jsme však zkoumali pouze samostatné třídy promptů. Kombinace těchto různých technik výzev může vést k vytvoření výkonnějších promptů. 

Zde je příklad promptu, který zahrnuje kontext, instrukce a více příkladů:

```text
Twitter je platforma sociálních médií, kde mohou uživatelé zveřejňovat krátké zprávy nazývané "tweety". Tweety mohou být pozitivní nebo negativní a my bychom chtěli být schopni klasifikovat tweety jako pozitivní nebo negativní. Zde je několik příkladů pozitivních a negativních tweetů. Ujistěte se, že správně zařadíte poslední tweet.

Otázka: Tweet: "To je ale krásný den!"
Je tento tweet pozitivní, nebo negativní?

Odpověď: pozitivní

Otázka: Tweet: "Nesnáším tuhle třídu"
Je tento tweet pozitivní, nebo negativní?

Odpověď: negativní

Otázka: Tweet: "Miluju kapsy na džínách"

A:
```

Přidáním dalšího kontextu/příkladů můžeme často zlepšit výkonnost AI v různých úlohách. 
