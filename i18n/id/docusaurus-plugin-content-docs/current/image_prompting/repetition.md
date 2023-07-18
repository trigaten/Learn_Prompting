---
sidebar_position: 50
---

# 🟢 Pengulangan

Mengulang kata yang sama dalam suatu tugas, atau frase yang serupa dapat membuat model menekankan kata itu dalam gambar yang dihasilkan (@oppenlaender2022taxonomy). Misalnya, [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) membuat air terjun ini dengan DALLE:

import bad_water from '@site/docs/assets/images_chapter/bad_water.webp';
import good_water from '@site/docs/assets/images_chapter/good_water.webp';
import planet from '@site/docs/assets/images_chapter/planet.webp';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.webp';


`A beautiful painting of a mountain next to a waterfall.`.

<div style={{textAlign: 'center'}}>
  <img src={bad_water} style={{width: "750px"}} />
</div>

`A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.`

<div style={{textAlign: 'center'}}>
  <img src={good_water} style={{width: "750px"}} />
</div>

Penekanan pada kata `very` tampaknya meningkatkan kualitas generasi! Pengulangan juga bisa digunakan untuk menekankan subjek. Misalnya, jika Anda ingin menghasilkan gambar dari planet dengan alien, menggunakan masukkan `A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens` akan membuatnya lebih mungkin bahwa alien ada dalam gambar tersebut. Gambar-gambar berikut dibuat dengan Difusi Stabil.

``
<div style={{textAlign: 'center'}}>
  <img src={planet} style={{width: "250px"}} />
</div>

`A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`

<div style={{textAlign: 'center'}}>
  <img src={planet_aliens} style={{width: "250px"}} />
</div>

## Catatan

Metode ini tidak sempurna, dan menggunakan bobot (artikel berikutnya) seringkali menjadi pilihan yang lebih baik.