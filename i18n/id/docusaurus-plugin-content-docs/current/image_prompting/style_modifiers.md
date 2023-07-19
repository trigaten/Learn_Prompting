---
sidebar_position: 4
---

# 🟢 Modifikasi Gaya

Modifikasi gaya hanyalah descriptor yang secara konsisten menghasilkan gaya tertentu (misalnya 'tinted red', 'made of glass', 'rendered in Unity')(@oppenlaender2022taxonomy). Mereka dapat digabungkan bersama-sama untuk menghasilkan gaya yang lebih spesifik. Mereka dapat "mencakup informasi tentang periode seni, sekolah, dan gaya, tetapi juga bahan dan media seni, teknik, dan seniman"(@oppenlaender2022taxonomy).

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import red_pyramids from '@site/docs/assets/images_chapter/red_pyramids.webp';

# Contoh

Berikut beberapa piramida yang dihasilkan oleh DALLE, dengan prompt `pyramid`.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={pyramids} style={{width: "750px"}} />
</div>

Berikut beberapa piramida yang dihasilkan oleh DALLE, dengan prompt `A pyramid made of glass, rendered in Unity and tinted red`, yang menggunakan 3 perubahan gaya.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={red_pyramids} style={{width: "750px"}} />
</div>

Berikut adalah daftar beberapa pengubah gaya yang berguna:

```text
photorealistic, by greg rutkowski, by christopher nolan, painting, digital painting, concept art, octane render, wide lens, 3D render, cinematic lighting, trending on ArtStation, trending on CGSociety, hyper realist, photo, natural light, film grain
```

## Catatan

Oppenlaender et al.(@oppenlaender2022taxonomy) menggambarkan `yang ditampilkan dalam ...` deskriptor sebagai penguat kualitas, tetapi definisi kerja kami berbeda, karena pemodifikasi tersebut secara konsisten menghasilkan gaya Unity (atau mesin render lainnya) yang spesifik. Sebagai hasilnya, kami akan menyebut deskriptor tersebut sebagai modifikasi gaya.