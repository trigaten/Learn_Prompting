---
sidebar_position: 5
---
# 🟢 Zvyšování kvality

Posilovače kvality (ang. Quality boosters)(@oppenlaender2022taxonomy) jsou výrazy přidané k promptu ke zlepšení určité vlastnosti generovaného obrázku, které nejsou specifické pro daný styl. Například "úžasný", "krásný" a "kvalitní" jsou boostery kvality, které lze použít ke zlepšení kvality generovaného obrázku.

import pyramids from '@site/docs/assets/images_chapter/pyramids.png';
import special_pyramids from '@site/docs/assets/images_chapter/special_pyramids.png';

# Příklad

Připomeňme si z druhé stránky pyramidy vygenerované pomocí DALLE a prompt `pyramid`.

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}} />
</div>

Nyní se podívejte na pyramidy vygenerované pomocí tohoto promptu:
`Krásná, velkolepá, neuvěřitelná pyramida, 4K`.

<div style={{textAlign: 'center'}}>
  <img src={special_pyramids} style={{width: "750px"}} />
</div>

Tyto jsou mnohem malebnější a působivější! 

Zde je seznam řady kvalitních boosterů: 
```text
Vysoké rozlišení, 2K, 4K, 8K, jasný, dobré osvětlení, detailní, extrémně detailní, ostrý, sofistikovaný, krásný, realistický+++, doplňkové barvy, vysoká kvalita, hyper detailní, mistrovské dílo, nejlepší kvalita, masterpiece, ohromující
```

## Poznámky

Podobně jako v poznámce na předchozí stránce se naše pracovní definice boosterů kvality liší od Oppenlaendera a dalších (@oppenlaender2022taxonomy). Jak již bylo řečeno, je někdy obtížné přesně rozlišit mezi boostery kvality a modifikátory stylu.