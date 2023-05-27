---
sidebar_position: 4
---
# 🟢 Modifikátory stylu

Modifikátory stylu jsou jednoduše deskriptory, které důsledně vytvářejí určité styly (např. "tónovaná červená", "ze skla", "vykresleno v Unity")(@oppenlaender2022taxonomy). Lze je kombinovat dohromady a vytvářet tak ještě specifičtější styly. Mohou "obsahovat informace o uměleckých obdobích, školách a stylech, ale také o uměleckých materiálech a médiích, technikách a umělcích"(@oppenlaender2022taxonomy).

import pyramids from '@site/docs/assets/images_chapter/pyramids.png';
import red_pyramids from '@site/docs/assets/images_chapter/red_pyramids.png';

# Příklad

Zde je několik pyramid vygenerovaných DALLE s promptem `pyramid`.

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}} />
</div>

Zde je několik pyramid vygenerovaných programem DALLE s promptem `Pyramida ze skla, vykreslená v Unity a zbarvená do červena`, který používá 3 modifikátory stylu.

<div style={{textAlign: 'center'}}>
  <img src={red_pyramids} style={{width: "750px"}} />
</div>

Zde je seznam některých užitečných modifikátorů stylu:

```text
fotorealistický, od grega rutkowského, od christophera nolana, malba, digitální malba, koncepční umění, oktanový render, široký objektiv, 3D render, filmové osvětlení, trendy na ArtStation, trendy na CGSociety, hyperrealistický, fotografie, přirozené světlo, filmové zrno
```

## Poznámky

Oppenlaender et al.(@oppenlaender2022taxonomy) popisují deskriptor `renderováno v ...` jako popisek zvyšující kvalitu, ale naše pracovní definice se liší, protože tento modifikátor důsledně generuje konkrétní styl vykreslovacího enginu Unity (nebo jiného enginu). Proto budeme tento deskriptor nazývat modifikátorem stylu.