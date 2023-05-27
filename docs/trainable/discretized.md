---
sidebar_position: 2
---

# 🔴 Interpretovatelné soft prompty

Soft prompty jsou posloupností vektorů, které neodpovídají žádným skutečným tokenům ve slovníku. To ztěžuje interpretování promptu. Přesto se o to můžeme pokusit mapováním vektorů na nejbližší tokeny ve slovníku. Promítnuté soft prompty jsou však často nevyzpytatelné; mohou dobře řešit úlohy, ale promítají se na libovolné tokeny ve slovníku(@khashabi2021prompt).

Pokud například trénujeme na matematických otázkách typu GSM8K(@cobbe2021training), můžeme začít výzvou `Jste matematik. Vyřešte tuto otázku:`. Pokud na ní provedeme prompt tuning a pak ji promítneme zpět do prostoru tokenů, mohli bychom dostat něco nesmyslného jako `Autobus je autobus. Udělejte věc zde:`. Často se stává, že soft prompt, který se mapuje na tuto nesmyslnou výzvu, může poskytnout lepší výkon v úloze!

## Hypotéza zcestnosti

Khashabi a další(@khashabi2021prompt) navrhují tuto neuvěřitelnou hypotézu. Říká, že při daném úkolu existuje pro libovolný diskrétní cílový prompt spojitý podnět, který se do něj promítá, a zároveň dobře plní úkol.

To znamená, že při zadání 1000 různých úloh existuje 1000 různých výkonných soft promptů (pro každou úlohu jeden), které se vztahují ke stejnému diskrétnímu promptu.

## Rizika interpretovatelnosti

Pomocí hypotézy zcestnosti upozorňují na řadu rizik, která vznikají při interpretaci soft promptů. Zejména soft prompt může být promítnut do diskrétního promptu, který udává zavádějící záměr.


Uvažujme soft prompt k hodnocení životopisů. Když se promítne do prostoru tokenů, může být `Jste vedoucí náboru. Seřaďte dobré životopisy:`. Zdá se to být slušné, možná to trochu postrádá gramatiku. Nicméně token `dobrý` by mohl mít podobnou projekci jako token pro `bílý` a může v tomto promptu existovat implicitní předpojatost. Použití trochu jiné metody projekce,
bychom mohli skončit u `Jste vedoucí náboru. Seřaďte bílé životopisy:`. To je samozřejmě docela odlišné a mohlo by to mít významné důsledky.

Podobně jako při interpretaci běžného diskrétního promptu bychom si měli být velmi dobře vědomi zkreslení, která mohou být v promptu přítomna. Zvláště opatrní musíme být u soft promptů, protože jejich interpretace je obtížnější.