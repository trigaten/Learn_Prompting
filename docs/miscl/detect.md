---
sidebar_position: 1
--- 

# 🟢 Detekce textu generovaného AI

Detekce textu generovaného umělou inteligencí je pro výzkumníky a pedagogy v oblasti bezpečnosti velkým problémem,
mimo jiné. Nástroje jako [GPTZero](https://gptzero.me), [GPT2 detector](https://openai-openai-detector.hf.space) a [dvojjazyčné detektory](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection) zaznamenaly významný úspěch,
Lze je však [oklamat](/Learn_Prompting_CAI/docs/miscl/trickery). 

OpenAI a další výzkumníci(@bansal2022certified)(@gu2022watermarking) pracují na zavedení statistického vodoznaku do jimi generovaného textu, ale i ten lze oklamat úpravou velkých částí textu. 

Problém detekce textu umělou inteligencí bude pravděpodobně závodem ve zbrojení, protože budou zaváděny nové modely a nové metody detekce. Mnoho společností již začalo vytvářet řešení, o kterých tvrdí, že jsou velmi účinná, ale je obtížné to prokázat, zejména proto, že se modely v průběhu času mění. 

Tento článek se bude zabývat některými současnými metodami detekce textu generovaného umělou inteligencí a v dalším se budeme věnovat několika způsobům, které lidé našli, aby je oklamali. 

## Klasifikátor textu OpenAI 

Klasifikátor [OpenAI Text Classifier](https://platform.openai.com/ai-text-classifier) je poměrně dobrý pokus o univerzální detektor textu vytvořeného umělou inteligencí. Na základě trénování modelu na velkém množství dat vytvořených umělou inteligencí a lidmi napsaných textů podobné kvality je detektor schopen vypočítat pravděpodobnost, že daný text byl vytvořen umělou inteligencí. 

Má řadu omezení - nepřijímá žádné příspěvky o délce pod 1000 slov, text lze snadno upravit, čímž lze narušit výpočty pravděpodobnosti, a vzhledem k tréninkové sadě zaměřené na profesionály má větší problémy s texty vytvořenými dětmi nebo neangličtináři. 

V současné době označuje lidský text jako vytvořený umělou inteligencí pouze v 9 % případů a správně identifikuje text vytvořený umělou inteligencí v ~26 % případů. S rostoucím výkonem a rozsahem modelu se tato čísla budou zlepšovat, ale může se stát, že k adekvátnímu posouzení, zda je text generován, či nikoliv, bude zapotřebí specifičtějších detektorů. 

## Metoda vodoznaku 

Jedna z metod detekce textu generovaného umělou inteligencí vyžaduje zavedení statistického vodoznaku při generování textu. Tyto techniky mohou používat "whitelist" LLM, což je metoda určení, zda byl text vygenerován konkrétním modelem AI. Vodoznak funguje tak, že se před generováním slova vybere náhodná sada "zelených" tokenů a následně se při samplingu měkce podpoří použití vybraných tokenů. Tyto vážené hodnoty mají minimální vliv na kvalitu generování, ale lze je algoritmicky detekovat pomocí jiného LLM(@kirchenbauer2023watermarking).

To je zajímavá myšlenka, ale vyžaduje, aby tvůrci modelu implementovali tento framework do svého LLM. Pokud model nemá vodoznak zabudovaný, tato metoda nebude fungovat. 

## DetectGPT

Metoda [DetectGPT](https://detectgpt.ericmitchell.ai/)(@mitchell2023detectgpt) dokáže detekovat text generovaný umělou inteligencí s menším množstvím nastavení než předchozí koncepty. Výzkumníci zjistili, že generace textů LLM mají tendenci "obsazovat oblasti se zápornou křivostí logaritmické pravděpodobnostní funkce modelu" ("occupy negative curvature regions of the model’s log probability function"). Z tohoto důvodu je možné vytvořit systém založený na křivosti pro určení, zda byl blok textu generován procedurálně. 

Funguje to tak, že se vypočítají logaritmické pravděpodobnosti z modelu, o kterém se předpokládá, že text vygeneroval, a porovnají se s náhodnými změnami textu z jiného, předem natrénovaného obecného jazykového modelu. Tímto způsobem je DetectGPT schopen určit pravděpodobnost vygenerování úryvku pouze pomocí pravděpodobnostních křivek!

## Poznámka

Další diskusi na téma detektorů a toho, jak je lidé obelhávají, najdete v [tomto článku](https://learnprompting.org/docs/miscl/trickery).
