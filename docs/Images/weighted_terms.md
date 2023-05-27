---
sidebar_position: 60
---

# 🟢 Vážené podmínky

Některé modely (Stable Diffusion, Midjourney atd.) umožňují přidávat vážené výrazy v promptu. Toho lze využít ke zvýraznění určitých slov nebo frází ve vygenerovaném obrázku. Může se také použít ke snížení důrazu na určitá slova nebo slovní spojení ve vygenerovaném obrázku. Uvažujme jednoduchý příklad:

import mountains from '@site/docs/assets/images_chapter/mountains.png';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.png';
import planets from '@site/docs/assets/images_chapter/planets.png';


# Příklad

Zde je několik hor vygenerovaných programem Stable Diffusion s promptem `mountain`.

<div style={{textAlign: 'center'}}>
  <img src={mountains} style={{width: "350px"}} />
</div>

Pokud však chceme hory bez stromů, můžeme použít prompt `hory | strom:-10`. Protože jsme stromy vážili velmi negativně, ve vygenerovaném obrázku se neobjeví.

<div style={{textAlign: 'center'}}>
  <img src={mountains_no_trees} style={{width: "350px"}} />
</div>

Vážené výrazy lze kombinovat do složitějších promptů, jako např. 
`Planeta ve vesmíru:10 | hýřící červenou, modrou a fialovou barvou:4 | mimozemšťané:-10 | 4K, vysoká kvalita`

<div style={{textAlign: 'center'}}>
  <img src={planets} style={{width: "350px"}} />
</div>

## Poznámky

Další informace o vážení si přečtěte v některých zdrojích na konci této kapitoly.