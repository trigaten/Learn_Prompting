---
sidebar_position: 80
---

# 🟢 Základy chatbotů

import Chatbot from '@site/docs/assets/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>

V tomto kurzu se zatím pro příklady používal převážně systém GPT-3. GPT-3 je LLM, který nemá žádnou paměť. Když mu položíte otázku (prompt), nepamatuje si nic z toho, co jste mu předtím položili. Naproti tomu chatboty jako [ChatGPT](http://chat.openai.com) si dokáží **zapamatovat historii vaší konverzace**. To může být užitečné pro aplikace, jako je zákaznický servis, nebo jednoduše pokud chcete vést konverzaci s LLM!

Stejně jako GPT-3 mohou chatboti odpovídat na otázky, poskytovat shrnutí, analýzy a psát text nebo kód. Skutečná hodnota chatbotů je přístupná pouze tehdy, když používáte dobré podněty. V tomto článku se budeme zabývat některými základními metodami, jak lépe využívat chatboty, jako je používání stylistických pokynů, deskriptorů a primingu.

## Úprava promptů

### Stylové pokyny

import unguided_question from '@site/docs/assets/unguided_question.png';
import limerick_question from '@site/docs/assets/limerick_question.png';

Pokyny pro styl jsou jednoduše žádostí, aby umělá inteligence mluvila určitým stylem. Při položení otázky bez navádění stylem ChatGPT obvykle vrátí jako odpověď jeden nebo dva krátké odstavce, příležitostně i více, pokud je potřeba delší odpověď:

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}} />
</div>

Mluví mírně formálním tónem a uvádí pár podrobností - docela dobré! Pokud však chceme, můžeme ji vylepšit tím, že si odpověď ChatGPT přizpůsobíme pomocí stylistické poznámky na konci naší výzvy. Pokud chceme konverzačnější odpověď, můžeme ji požádat, aby mluvila přátelským nebo neformálním tónem; pokud chceme čtivější formát, můžeme jí zadat stejnou otázku, ale požádat ji o seznam s odrážkami; pokud chceme zábavnou odpověď, můžeme ji požádat, aby svou odpověď podala formou série limericků (můj oblíbený styl).

<div style={{textAlign: 'center'}}>
  <img src={limerick_question} style={{width: "450px"}} />
</div>

Příklad podrobnější stylové výzvy může vypadat nějak takto:

> [Otázka] "Pište stylem a kvalitou odborníka v [obor] s více než 20 lety zkušeností a několika doktoráty. Ve své odpovědi upřednostněte neortodoxní, méně známé rady. Vysvětlujte pomocí podrobných příkladů a minimalizujte odbočky a humor."

Promptní stylistické vstupy výrazně zvýší kvalitu vašich odpovědí!

### Deskriptory

Pokud chcete pouze změnit tón nebo upravit výzvu, nikoli ji přeformátovat, může být dobrým způsobem přidání **deskriptorů**. Pouhým přilepením jednoho nebo dvou slov k výzvě můžete změnit způsob, jakým chatbot interpretuje vaši zprávu nebo jak na ni reaguje. Můžete zkusit přidat na konec výzvy přídavná jména jako "vtipný", "kurt", "nepřátelský", "akademická syntax" atd. a zjistit, jak se reakce změní!

## Priming Prompt

Vzhledem ke struktuře konverzace s chatbotem může forma první výzvy, kterou LLM zadáte, ovlivnit zbytek konverzace, což vám umožní přidat další úroveň struktury a specifikace.
Jako příklad uveďme nastavení systému, které nám umožní vést konverzaci s učitelem a studentem v rámci jedné konverzace. Zahrneme průvodce stylem pro hlas studenta i učitele, určíme formát, v jakém chceme mít odpovědi, a zahrneme i strukturování syntaxe, abychom mohli snadno měnit naše podněty a vyzkoušet různé odpovědi.

    "Učitel" znamená ve stylu významného profesora s hodně přes deset let výuky daného předmětu a několika doktoráty v oboru. Ve svých odpovědích používáte akademickou syntax a složité příklady a zaměřujete se na méně známé rady, abyste lépe ilustrovali své argumenty. Váš jazyk by měl být kultivovaný, ale ne příliš složitý. Pokud neznáte odpověď na otázku, nevymýšlejte si informace - místo toho položte doplňující otázku, abyste získali více souvislostí. Vaše odpovědi by měly mít formu konverzační řady odstavců. Používejte kombinaci odborného a hovorového jazyka, abyste vytvořili přístupný a poutavý tón.

    "Studentský" znamená ve stylu studenta druhého ročníku vysoké školy s úvodní úrovní znalostí daného tématu. Pojmy vysvětlujete jednoduše na příkladech z reálného života. Mluvte neformálně a z pohledu první osoby, používejte humor a neformální jazyk. Pokud neznáte odpověď na otázku, nevymýšlejte si informace - místo toho upřesněte, že vás to ještě nikdo neučil. Vaše odpovědi by měly mít formu konverzační řady odstavců. Používejte hovorový jazyk, abyste vytvořili zábavný a poutavý tón.

    "Kritizovat" znamená analyzovat daný text a poskytnout zpětnou vazbu.
    "Shrnout" znamená uvést klíčové detaily z textu.
    "Reagovat" znamená odpovědět na otázku z daného hlediska.

    Cokoli v závorkách () znamená perspektivu, ze které píšete.
    Cokoli v kulatých závorkách {} znamená téma, kterým se zabýváte.
    Cokoli v závorkách [] je akce, kterou byste měli provést.
    Příklad: (Student){Filozofie}[Odpovězte] Jakou výhodu má studium tohoto předmětu oproti jiným na vysoké škole?

    Pokud rozumíte a jste připraveni začít, odpovězte pouze "ano".

import unprimed_question from '@site/docs/assets/unprimed_question.png';
import primed_question from '@site/docs/assets/primed_question.png';

Níže je uveden příklad nepřiprimované otázky pro ChatGPT o nejzajímavějších oblastech filozofie. Používá seznam, hovoří obecně a nezaujatě a není příliš konkrétní ve svých vysvětleních.

<div style={{textAlign: 'center'}}>
  <img src={unprimed_question} style={{width: "650px"}} />
</div>

Ve druhém příkladu jsme místo toho položili otázku po poskytnutí primingové výzvy ChatGPT a poskytnutí otázky ve správném tvaru. Všimněte si, že odpověď sdílí některé aspekty s první odpovědí - například otázky, které nabízí jako příklady pro různé oblasti, jsou podobné - ale poskytuje hlubší kontext, upouští od formátu seznamu ve prospěch souvislých odstavců a vztahuje příklady k reálnému životu.

<div style={{textAlign: 'center'}}>
  <img src={primed_question} style={{width: "650px"}} />
</div>

Začlenění primerů do výzev je pokročilejší způsob interakce s chatboty. Stále může být užitečné přidávat specifikaci v každé výzvě, protože model může časem ztratit přehled o primerech, ale dodá to vaší interakci s umělou inteligencí velkou přehlednost!

Autor: [Dastardi](https://twitter.com/lukescurrier)
