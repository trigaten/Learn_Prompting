---
sidebar_position: 90
---

# 📙 Reference na slovní zásobu

Na této stránce naleznete seznam termínů a pojmů, které budeme v tomto kurzu používat.

#### Velké jazykové modely (Large Language Models neboli LLM), předem natrénované jazykové modely (Pretrained Language Models neboli PLM)(@branch2022evaluating), jazykové modely (Language Models neboli LM) a modely základů (foundation models).

Všechny tyto termíny označují víceméně totéž: velké umělé inteligence (neuronové sítě), které byly obvykle natrénovány
na obrovském množství textu.

#### Maskované jazykové modely (Masked Language Models neboli MLM)

MLM jsou typem modelů NLP, které mají speciální token, obvykle `[MASK]`, který je
nahrazen slovem ze slovníku. Model pak předpovídá slovo, které
bylo zamaskováno. Například pokud věta zní "Pes je [MASK] kočku", model
s vysokou pravděpodobností předpoví "honí".

#### Štítky (Labels)

Koncept štítků nejlépe pochopíte na příkladu.

Řekněme, že chceme klasifikovat některé tweety jako kruté nebo nekruté (mean nebo not mean). Máme-li seznam tweetů a
jejich odpovídající _štítek_ (mean nebo not mean), můžeme natrénovat model pro klasifikaci tweetů.
zda jsou tweety kruté, nebo ne. Štítky jsou obecně jen možnosti pro
klasifikační úlohy.

#### Prostor štítků (Label Space)

Všechny možné štítky pro danou úlohu ("mean" a "not mean" pro výše uvedený příklad).

#### Analýza sentimentu (Sentiment Analysis)

Analýza sentimentu je úloha klasifikace textu na pozitivní, negativní nebo jiné sentimenty.

#### "Model" vs. "AI" vs. "LLM".

Tyto termíny se v tomto kurzu používají do jisté míry zaměnitelně, ale mají
neznamenají vždy totéž. Jak bylo uvedeno výše, LLM jsou typem AI, ale ne všechny AI jsou LLM.
Když se v tomto kurzu zmiňujeme o modelech, máme na mysli modely AI. V tomto kurzu 
můžete považovat pojmy "model" a "AI" za zaměnitelné.

#### Strojové učení (Machine Learning neboli ML)

ML je studijní obor, který se zaměřuje na algoritmy, které
se mohou učit z dat. ML je podoborem umělé inteligence.

#### Verbalizér

V prostředí klasifikace jsou verbalizátory mapování ze štítků na slova v oblasti
slovníku jazykového modelu(@schick2020exploiting). Uvažujme např.
provádění klasifikace sentimentu s následující výzvou:

```text
Tweet: "Miluji Hotpockets"
Jaký je sentiment tohoto tweetu? Řekněte "pozitivní" (positive) nebo "negativní" (negative).
```

Zde je verbalizátor mapováním z pojmových značek `positive` a `negative` na tokeny `pos` a `neg`.

#### Učení posilováním ze zpětné vazby od člověka (Reinforcement Learning from Human Feedback neboli RLHF)

RLHF je metoda pro jemné ladění LLM podle údajů o lidských preferencích.

<!-- %%RemarkAutoGlossary::list_all%% -->
