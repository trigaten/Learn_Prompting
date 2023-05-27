---
sidebar_position: 200000
---

# 🔥 Horká témata

## GPT-4

GPT-4(@openai2023gpt4) je další LLM v řadě GPT od OpenAI. Vylepšuje GPT-3 v řadě ohledů, včetně lepšího uvažování a delšího kontextu. V současné době se jí v tomto kurzu přímo nezabýváme, protože 1) ne každý k ní má zatím přístup a 2) většina strategií promptů, kterými se zabýváme na této webové stránce, funguje i pro GPT-4. Doporučuju, abyste si přečetli [stránku OpenAI](https://openai.com/research/gpt-4) o GPT-4, kde najdete další podrobnosti.

## Agenti

Agenti jsou systémy umělé inteligence, které mohou provádět akce a úkoly, mezi něž často patří i používání nástrojů.
Agentům se budeme věnovat ve zvláštním kurzu nebo workshopu. Máte-li zájěm, [dejte vědět](mailto:hello@shh.agency).

### Auto-GPT
Představte si, že máte osobního asistenta, který dokáže s pomocí AI udělat cokoli, co si přejete. Auto-GPT takový je, jedná se o open-source aplikaci, která k provádění autonomních úkolů využívá GPT-4 od OpenAI. Vytvořil ji Toran Bruce Richards a funguje tak, že zadaný cíl rozdělí na dílčí úkoly a ty pak pomocí internetu a dalších nástrojů splní(@richards2023). Pokud například zadáte Auto-GPT, aby ''napsal příspěvek na blog o nejnovějších zprávách o umělé inteligenci'', nejprve vyhledá nejnovější zpravodajské články o umělé inteligenci, přečte je a poté napíše příspěvek na blog o tom, co se dozvěděl. Chcete-li Auto-GPT používat, musíte postupovat podle pokynů k nastavení [zde](https://significant-gravitas.github.io/Auto-GPT/setup/). Po instalaci aplikace Auto-GPT ji můžete začít používat zadáním cíle do řádku s výzvou. Aplikace Auto-GPT se pak pokusí tohoto cíle dosáhnout.

### Baby AGI
BabyAGI je systém pro správu úkolů založený na umělé inteligenci, který vytvořil Yohei Nakajima(@nakajima2023). Systém využívá rozhraní API OpenAI a Pinecone k vytváření a provádění úkolů na základě priority a obtížnosti předchozích úkolů a předem definovaného cíle. BabyAGI funguje tak, že spouští smyčku, která provádí následující kroky:
1. Vytáhne první úlohu ze seznamu úloh.
2. Odešle úkol agentovi pro provádění, který použije rozhraní API OpenAI k dokončení úkolu na základě kontextu.
3. Obohatí výsledek a uloží jej do Chroma.
4. Vytváří nové úlohy a mění priority seznamu úloh na základě cíle a výsledku předchozí úlohy.

### AgentGPT
[AgentGPT](https://agentgpt.reworkd.ai/) od Reworkd je platforma, která uvolňuje uživatelům možnost vytvářet a nasazovat soběstačné AI agenty, od zákaznického servisu až po analýzu dat(@reworkd2023). Vzdělává AI agenta v odlišném úkolu a poté ho obdaří schopností splnit předem stanovený cíl. Agenti mohou využívat různá rozhraní API pro přístup k informacím z reálného světa a jejich zpracování a mohou také komunikovat s lidmi a jinými agenty. Pro použití AgentGPT se uživatelé musí zaregistrovat a vybrat cíl pro svého agenta. Poté mohou svého agenta instruovat tím, že mu poskytnou data a instrukce.

## Firefly

[Firefly](https://firefly.adobe.com/) je AI nástroj od Adobe, který má Generativní výplň (generative fill), ohromující generativní nástroj umělé inteligence, který aktivuje vaše tvůrčí superschopnosti. Přidávejte, rozšiřujte a odstraňujte obsah z obrázků pomocí jednoduchých textových pokynů. Poté je dotáhněte do pixelově dokonalé podoby, a to vše ve Photoshopu.

Zatím Adobe zveřejnil: Text-to-image, generativní výplň, textové efekty, generativní přebarvení, 3D-to-image. Těmito (a podobnými) nástroji se budeme zabývat ve zvláštním kurzu nebo workshopu. Máte-li zájěm, [dejte vědět](mailto:hello@shh.agency).

V nejbližší době se plánuje: generování personalizovaných obrázků, text-to-vector, text-to-pattern, text-to-brush, sketch-to-image a text-to-template.