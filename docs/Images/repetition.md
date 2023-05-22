---
sidebar_position: 50
---
# 🟢 Opakování

Opakování stejného slova v rámci výzvy nebo podobných frází může způsobit, že model
zvýraznit toto slovo ve vygenerovaném obrázku(@oppenlaender2022taxonomy). Například [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) vygeneroval tyto vodopády pomocí DALLE:

import bad_water from '@site/docs/assets/images_chapter/bad_water.jpg';
import good_water from '@site/docs/assets/images_chapter/good_water.jpg';
import planet from '@site/docs/assets/images_chapter/planet.png';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.png';


`Krásný obraz hory vedle vodopádu.`.

<div style={{textAlign: 'center'}}>
  <img src={bad_water} style={{width: "750px"}} />
</div>

`Velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi velmi krásný obraz hory vedle vodopádu.`

<div style={{textAlign: 'center'}}>
  <img src={good_water} style={{width: "750px"}} />
</div>

Zdá se, že důraz na slovo `velmi` zlepšuje kvalitu generování! Opakování může
také použít ke zdůraznění předmětných výrazů. Pokud například chcete vygenerovat obrázek
planety s mimozemšťany, použijte výzvu `Planeta s mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany `.
zvýšíte pravděpodobnost, že na výsledném obrázku budou mimozemšťané. Následující obrázky jsou vytvořeny pomocí stabilní difúze.

`Planeta s mimozemšťany`
<div style={{textAlign: 'center'}}>
  <img src={planet} style={{width: "250px"}} />
</div>

`Planeta s mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany mimozemšťany`

<div style={{textAlign: 'center'}}>
  <img src={planet_aliens} style={{width: "250px"}} />
</div>


## Poznámky 

Tato metoda není dokonalá a použití vah (další článek) je často lepší volbou.