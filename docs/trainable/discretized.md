---
sidebar_position: 2
---

# 🔴 Interpretovatelné měkké prompty/výzvy

Měkké prompty jsou posloupností vektorů, které
neodpovídají žádným skutečným tokenům ve slovníku. To ztěžuje
interpretovat výzvu. Přesto se o to můžeme pokusit
mapováním vektorů na nejbližší tokeny ve slovníku. Promítnutí 
měkké podněty jsou často zcestné; mohou řešit 
úlohy dobře, ale promítají se na libovolné tokeny ve slovníku(@khashabi2021prompt).

Pokud například trénujeme na matematických otázkách typu GSM8K(@cobbe2021training), 
můžeme začít výzvou `Jste matematik. Vyřešte tuto otázku:`. 
Pokud na ní provedeme ladění promptů a pak ji promítneme zpět do prostoru tokenů, mohli bychom 
zůstat něco nesmyslného jako `Autobus je autobus. Udělejte věc zde:`. Často je to
že měkká výzva, která se mapuje na tuto nesmyslnou výzvu, může poskytnout lepší výkon v úloze!

## Hypotéza necestovosti

Khashabi a další (@khashabi2021prompt) navrhují tuto neuvěřitelnou hypotézu. Říká 
že při zadání úlohy existuje pro jakoukoli diskrétní cílovou výzvu 
spojitá výzva, která se do ní promítá, a přitom v úloze dobře funguje.

To znamená, že při zadání 1000 různých úloh existuje 1000 různých
výkonných měkkých podnětů (pro každý úkol jeden), které se vztahují ke stejnému diskrétnímu podnětu.

## Rizika interpretovatelnosti

Pomocí hypotézy směrodatnosti upozorňují na řadu rizik, která vznikají 
při interpretaci měkkých výzev. Konkrétně může být měkká výzva promítnuta do
diskrétní výzvu, která poskytuje zavádějící záměr.

Uvažujme měkkou výzvu k hodnocení životopisů. Když se promítne do prostoru tokenů, může se stát, že
`Vy vedoucí náboru. Seřaďte dobré životopisy:`. To se zdá být slušné, možná trochu nedostatečné
gramaticky. Nicméně token `dobrý` by mohl mít podobnou projekci jako token pro `bílý` a tam
může v této výzvě existovat implicitní předpojatost. Použití trochu jiné metody projekce,
bychom mohli skončit u `Vy vedoucí náboru. Seřaďte bílé životopisy:`. To je samozřejmě docela
odlišné a mohlo by to mít významné důsledky.

Podobně jako při interpretaci běžné diskrétní výzvy bychom měli být extrémně 
uvědomit si předsudky, které by mohly být v dotazu přítomny. Musíme být obzvláště
opatrní u měkkých výzev, protože jejich interpretace je obtížnější.
