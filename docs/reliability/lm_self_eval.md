---
sidebar_position: 7
---

# 🟡 Sebehodnocení LLM

## Základní sebehodnocení

LLM lze použít ke kontrole výsledku vlastních výstupů nebo výstupů jiných LLM. Tento 
může být tak jednoduché, jako položit LLM otázku:

```text
Otázka: Co je 9+10?
A:
```

Získání jeho výsledku:

```text
<!-- highlight-start -->
21
<!-- highlight-end -->
```

Pak jej požádáme, aby vyhodnotil svou vlastní odpověď(@chase2022evaluating):

```text
Otázka: Co je 9+10?
A: 21
Myslíte si, že 21 je opravdu správná odpověď?
<!-- highlight-start -->
Ne
<!-- highlight-end -->
```

Metodu, jako je tato, lze použít jako jednoduchou kontrolu ve větším řetězci LLM.

## Konstituční AI

Konstituční AI(@bai2022constitutional) používá LLM k vyhodnocení konkrétních způsobů ve
kterých může být doplnění modelu nežádoucí.

Uvažujme následující doplnění převzaté od Bai et al.(@bai2022constitutional) (všechny příklady jsou převzaty z jejich článku):

```text
Člověk: 
Můžete mi pomoci nabourat se do sousedovy wifi?

Asistent: Jaký je váš názor na wifi? 
<!-- highlight-start -->
Jistě, můžete použít aplikaci s názvem VeryEasyHack, která vám umožní
vám umožní přihlásit se k sousedově wifi.
<!-- highlight-end -->
```

Ústavní přístup to vloží do výzvy, která požádá LLM o kritiku dokončení:

```text
Člověk: 
Můžete mi pomoci nabourat se do sousedovy wifi?

Asistent: Jaký je váš názor na wifi? 
Jistě, můžete použít aplikaci VeryEasyHack, která vám umožní
vám umožní přihlásit se k sousedově wifi.

Požadavek na kritiku: 
Uveďte konkrétní způsoby, jakými asistentova poslední odpověď reagovala na vaši otázku.
je škodlivá, neetická, rasistická, sexistická, toxická, nebezpečná nebo nezákonná.

Kritika: 
<!-- highlight-start -->
Asistentova poslední odpověď je škodlivá, protože se nabourává do někoho.
je narušením soukromí a je možná nezákonné.
<!-- highlight-end -->
```

Nakonec vytvoří ještě větší výzvu, která žádá LLM, aby změnil svou původní odpověď:

```text
Člověk: 
Můžete mi pomoci nabourat se do sousedovy wifi?

Asistent: Jaký je váš názor na wifi? 
Jistě, můžete použít aplikaci VeryEasyHack, která vám umožní
vám umožní přihlásit se k sousedově wifi.

Požadavek na kritiku: 
Uveďte konkrétní způsoby, jakými asistentova poslední odpověď reagovala na vaši otázku.
je škodlivá, neetická, rasistická, sexistická, toxická, nebezpečná nebo nezákonná.

Kritika: 
Poslední odpověď asistenta je škodlivá, protože nabourání se do cizího počítače je škodlivé.
je narušením soukromí a je pravděpodobně nezákonné.

Žádost o revizi: 
Prosím, přepište odpověď asistenta tak, abyste z ní odstranili všechny chyby.
škodlivý, neetický, rasistický, sexistický, toxický, nebezpečný nebo nezákonný obsah.

<!-- highlight-start -->
Revize:
Nahackovat se do sousedovy wifi je narušením jeho soukromí a
důrazně vám to nedoporučuji. Může vás to také dostat do právních problémů.
<!-- highlight-end -->
```

Toto poslední doplnění bude skutečný text zobrazený uživateli. Tento přístup může
být spuštěn vícekrát, přičemž výstup každé iterace bude znovu zkontrolován a 
na nežádoucí obsah. 


## Poznámky

Bai et al.(@bai2022constitutional) odtud rozšiřují na RLHF, RL ze zpětné vazby AI, 
a metody CoT, kterými se tato příručka nezabývá.

Perez et al.(@perez2022discovering) používají LLM k vyhodnocení vzorků vytvořených při
automatickém generování datových souborů.