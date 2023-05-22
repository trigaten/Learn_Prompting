---
sidebar_position: 1
---

# 🟢 Úvod

Tato kapitola se zabývá tím, jak zajistit větší spolehlivost doplňování a jak 
implementovat kontroly, které zajistí spolehlivost výstupů. 

Do jisté míry je většina
předchozích popsaných technik souvisí se zlepšením dokončování.
přesnosti, a tím i spolehlivosti, zejména pak autokonzistence(@wang2022selfconsistency).
Existuje však řada dalších technik, které lze použít ke zlepšení spolehlivosti,
nad rámec základních strategií výzvy. 

Bylo zjištěno, že %%LLM|LLM%% jsou spolehlivější, než bychom mohli očekávat, při interpretaci toho, co se výzva *snaží* říci, když odpovídají na špatně napsané, špatně formulované, nebo dokonce aktivně zavádějící výzvy(@webson2023itscomplicated). 
Navzdory této schopnosti se u nich stále objevují různé problémy včetně halucinací(@ye2022unreliability), 
chybná vysvětlení pomocí metod %%CoT|CoT prompting%%%(@ye2022unreliability) a vícenásobné zkreslení.
včetně zkreslení většinového označení, zkreslení v souvislosti s recenzí a zkreslení v souvislosti se společným symbolem(@zhao2021calibrate). 
Kromě toho může být zero-shot CoT obzvláště zkreslený, když se zabývá citlivými tématy.
(@shaikh2022second).

Mezi běžná řešení některých z těchto problémů patří kalibrátory, které odstraňují _a priori_ zkreslení,
a ověřovatelé, kteří hodnotí doplnění, a také podpora rozmanitosti v doplněních.
