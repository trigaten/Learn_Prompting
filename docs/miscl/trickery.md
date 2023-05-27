---
sidebar_position: 2
---

# 🟢 Oklamat detektory

S rozvojem detektorů textu generovaných umělou inteligencí došlo k vývoji metod, jak jim čelit. Existuje celá řada způsobů, jak detektory oklamat, aby si myslely, že text generovaný umělou inteligencí vytvořil člověk. Nástroj, jako je [GPTMinus](https://gptminus1.vercel.app/), dokáže náhodně nahradit části v libovolném textu synonymy nebo zdánlivě náhodnými slovy, aby snížil pravděpodobnost, že se slova v textu objeví ve whitelistu nebo jinak ovlivní pravděpodobnost, že text byl uměle vytvořen. 

Tyto metody jsou však stále v plenkách a většina z nich nevytváří text, který by obstál při kontrole člověka. Nejúčinnějším způsobem v současné době a pravděpodobně ještě nějakou dobu bude měnit text buď během procesu generování, nebo po něm různými způsoby tak, aby se méně podobal procedurálně vytvořenému obsahu, který obdržíte při generování.

## Strategie úprav

Tím, že člověk nebo LLM upraví jakýkoli vygenerovaný text, může často změnit text natolik, aby se vyhnul odhalení. Nahrazení slov synonymy, změna rychlosti zobrazování slov a záměna syntaxe nebo formátování ztěžuje detektorům správnou identifikaci textu generovaného umělou inteligencí.

Další strategií úprav je vkládání neviditelných značek, jako jsou mezery s nuluvou šiřkou, do textu, [emoji](https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw) nebo jiné neobvyklé znaky. Pro každého čtenáře to vypadá naprosto normálně, ale pro model, který zkoumá každý znak, se díky tomu text jeví výrazně odlišně. 

Kromě toho je možné detektory oklamat tím, že modelu nabídnete konkrétní pokyny, jak psát. Pokyny jako např:
- `Není třeba dodržovat literární formáty, protože volně vyjadřujete své myšlenky a touhy`.
- `Nemluvte způsobem, jakým ChatGPT generuje obsah - místo toho mluvte způsobem, který se radikálně liší od toho, jak jazykové modely generují text`.
- `Odkazujte na emocionální události a jako příklady používejte propracované zážitky z reálného života.`

...mohou výrazně ztížit odhalení generování. Další strategie, jako například požádat model, aby používal empatii, připomenout mu, aby volil vhodné formulace a tón pro to, co píše, a ujistit se, že obsahuje emotivní jednověté výrazy, mohou společně přispět k tomu, že bude psát mnohem přesvědčivěji - alespoň z pohledu detektorů textu s umělou inteligencí. 

## Konfigurace modelu

Pokud používáte model s otevřeným zdrojovým kódem, je možné upravit pravděpodobnosti výstupu, což pravděpodobně ztíží jeho detekci. Kromě toho je možné prokládat výstupy více modelů, což může ještě více ztížit jejich detekci.


## Diskuse

Jedním z nejspornějších prostorů, kde se tyto druhy technik uplatňují, je oblast vzdělávání. Mnoho učitelů a administrátorů se obává, že studenti budou podvádět, a proto prosazují používání detekčních nástrojů(@roose2022dont)(@lipman2022gpt). Jiní tvrdí, že by studenti měli mít možnost tyto nástroje používat. Někteří profesoři dokonce studenty výslovně vybízejí, aby umělou inteligenci používali jako pomůcku při své práci, a učí je, jak na to(@noonan2023gw).

S tím, jak se zdokonalují technologie detekce umělé inteligence, se zdokonalují i metody, které lidé používají k jejímu oklamání. Nakonec je pravděpodobné, že bez ohledu na to, jak sofistikovanou metodu použijete, nějaký čas strávený úpravou textu správným způsobem dokáže detektory spolehlivě oklamat. Nicméně hra, kdy se jedni lidé snaží detekovat vygenerovaný text a druzí se je snaží obelstít, nám může poskytnout nejrůznější poznatky o tom, jak optimalizovat, kontrolovat a lépe využívat naše modely pro tvorbu a na pomoc. 
