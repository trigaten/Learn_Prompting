---
sidebar_position: 90
---

# 📙 Slovní zásoba

Na této stránce naleznete seznam termínů a pojmů, které budeme v tomto kurzu používat.

#### Velké jazykové modely (Large Language Models neboli LLM), předem natrénované jazykové modely (Pretrained Language Models neboli PLM)(@branch2022evaluating), jazykové modely (Language Models neboli LM) a základní modely (foundation models).

Všechny tyto termíny označují víceméně totéž: velké umělé inteligence (neuronové sítě), které byly obvykle natrénovány
na obrovském množství textu.

#### Maskované jazykové modely (Masked Language Models neboli MLM)

MLM jsou typem modelů NLP, které mají speciální token, obvykle `[MASK]`, který je nahrazen slovem ze slovníku. Model pak předpovídá slovo, které bylo zamaskováno. Například pokud věta zní `"Pes [MASK] kočku"`, model s vysokou pravděpodobností předpoví `"honí"`.

#### Značky (Labels)

Koncept značek nejlépe pochopíte na příkladu.

Řekněme, že chceme klasifikovat některé tweety jako kruté nebo nekruté (mean nebo not mean). Máme-li seznam tweetů a jejich odpovídající _značku_ (mean nebo not mean), můžeme natrénovat model pro klasifikaci zda jsou tweety kruté, nebo ne. Značky (štítky) jsou obecně jen pravděpodobnosti pro klasifikační úlohy.

#### Zlaté značky (Gold Labels)

Správné značky pro danou úlohu.

#### Prostor značek (Label Space)

Všechny možné značky pro danou úlohu ("kruté" a "nekruté" pro výše uvedený příklad).

#### Analýza sentimentu (Sentiment Analysis)

Analýza sentimentu je úloha klasifikace textu na pozitivní, negativní nebo jiné sentimenty.

#### "Model" vs. "AI" vs. "LLM".

Tyto termíny se v tomto kurzu používají do jisté míry zaměnitelně, ale neznamenají vždy totéž. Jak bylo uvedeno výše, LLM jsou typem AI, ale ne všechny AI jsou LLM. Když se v tomto kurzu zmiňujeme o modelech, máme na mysli modely AI. V tomto kurzu 
můžete považovat pojmy "model" a "AI" za zaměnitelné.

#### Strojové učení (Machine Learning neboli ML)

ML je studijní obor, který se zaměřuje na algoritmy, které se mohou učit z dat. ML je podoborem umělé inteligence.

#### Verbalizér

V klasifikačním prostředí jsou verbalizéry mapování ze značek na slova ve slovníku jazykového modelu(@schick2020exploiting). Uvažujme například klasifikaci sentimentu s následující výzvou:

```text
Tweet: "Miluji Hotpockets"
Jaký je sentiment tohoto tweetu? Řekněte "pozitivní" (positive) nebo "negativní" (negative).
```

Zde je verbalizér mapováním z pojmových značek `positive` a `negative` na tokeny `pos` a `neg`.

#### Učení posilováním ze zpětné vazby od člověka (Reinforcement Learning from Human Feedback neboli RLHF)

Technika, která trénuje model odměny přímo z lidské zpětné vazby a používá tento model jako funkci odměny k optimalizaci politiky agenta pomocí posilujícího učení (Reinforcement Learning – RL) přes optimalizační algoritmus.

#### Fine tuning

Je to proces, při kterém se předtrénovaný model (např. LLM) přizpůsobuje pro konkrétní úlohu trénováním na označených datech souvisejících s danou úlohou.

Při fine-tuningu se používají metody učení s dohledem (supervised learning), kdy jsou k dispozici označená trénovací data pro danou úlohu. Model se poté trénuje na těchto datech, aby se přizpůsobil konkrétní úloze a zlepšil svou výkonnost.

#### Exempláře (exemplars)

Jsou to příklady úlohy, kterou se prompt snaží vyřešit a která je součástí samotného promptu.

#### Few Shot Standard Prompt

Technika promptingu, která umožňuje modelu zpracovat příklady před pokusem o splnění úkolu. Jsou to standardní prompty, které obsahují exempláře.

#### Chain of Thought Prompting – CoT

Prompting pomocí myšlenkového řetězce (Chain-of-thought prompting - CoT) zlepšuje schopnost uvažování LLM tím, že je podněcuje k vytvoření řady mezikroků, které vedou ke konečné odpovědi na vícekrokový problém.

#### Least to Most Prompting – LtM

Prompting od nejmenšího k největšímu (Least to Most Prompting – LtM) nejprve rozdělí problém na dílčí problémy a pak řeší každý z nich. Jedná se o techniku inspirovanou reálnými vzdělávacími strategiemi pro děti.

#### Program-aided Language Models – PAL

Když je zadána otázka, jsou PAL schopni napsat kód, který tuto otázku řeší. Tento kód odešlou do programového runtime, aby získali výsledek. PAL funguje jinak než CoT; zprostředkujícím uvažováním PAL je kód, zatímco CoT je přirozený jazyk. Jinak řečeno, je to metoda, která využívá LLM ke čtení problémů v přirozeném jazyce a generování programů jako mezikroků v uvažování, ale krok řešení přenáší na programový runtime, jako je interpret Pythonu. 

#### Modular Reasoning, Knowledge and Language – MRKL

Systémy MRKL jsou neuro-symbolickou architekturou, která kombinuje LLM a externí nástroje, jako jsou kalkulačky (symbolické výpočty), k řešení složitých problémů.

Systém MRKL se skládá ze sady modulů (např. kalkulačka, API pro počasí, databáze atd.) a směrovače, který rozhoduje o tom, jak "směrovat" příchozí dotazy v přirozeném jazyce na příslušný modul.

Jednoduchým příkladem systému MRKL je LLM, který může používat aplikaci kalkulačky. Jedná se o systém s jedním modulem, kde LLM je směrovačem. Při dotazu "Kolik je 100*100?" může LLM zvolit, že z dotazu vytáhne čísla, a pak systému MRKL říct, aby k výpočtu výsledku použil aplikaci kalkulačky.

<!-- %%RemarkAutoGlossary::list_all%% -->
