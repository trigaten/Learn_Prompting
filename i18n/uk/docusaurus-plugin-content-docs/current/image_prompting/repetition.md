---
sidebar_position: 50
---

# 🟢 Повторення

Повторення того самого слова або схожих фраз у запиті може призвести до того, що модель зробить акцент на цьому слові в згенерованому зображенні (@oppenlaender2022taxonomy). Наприклад, [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) створив ці водоспади за допомогою нейромережі DALLE:

import bad_water from '@site/docs/assets/images_chapter/bad_water.webp';
import good_water from '@site/docs/assets/images_chapter/good_water.webp';
import planet from '@site/docs/assets/images_chapter/planet.webp';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.webp';


`A beautiful painting of a mountain next to a waterfall.`.

<div style={{textAlign: 'center'}}>
  <img src={bad_water} style={{width: "750px"}}/>
</div>

`A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_water} style={{width: "750px"}} />
</div>

Акцент на слові `very`, здається, покращує якість результату! Повторення також можна використовувати для підкреслення предметних термінів. Наприклад, якщо ви хочете створити зображення планети з інопланетянами, використовуючи запит: `A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`, інопланетяни з більшою вірогідністю будуть присутні на отриманому зображенні. Наступні зображення створено за допомогою моделі Stable Diffusion:

``
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet} style={{width: "250px"}} />
</div>

`A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet_aliens} style={{width: "250px"}} />
</div>

## Примітки

Цей метод не досконалим, і використання значущості (наступна стаття) часто є кращим варіантом.