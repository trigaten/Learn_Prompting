---
sidebar_position: 90
---

# 🟢 Memperbaiki Hasil yang Cacat

Hasil yang cacat, terutama pada bagian tubuh manusia (misalnya tangan, kaki), merupakan masalah umum dengan banyak model. Hal ini dapat ditangani sampai batas tertentu dengan perintah negatif yang baik (@blake2022with). Contoh berikut diadaptasi dari [postingan Reddit](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/)ini.

## Contoh

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.webp';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.webp';

Dengan menggunakan Stable Diffusion v1.5 dan dengan menggunakan contoh berikut, kita menghasilkan gambar yang bagus dari Brad Pitt, kecuali tangan-tangannya tentu saja!

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6`

<div style={{textAlign: 'center'}}>
  <img src={bad_pitt} style={{width: "250px"}} />
</div>

Dengan menggunakan prompt negatif yang kuat, kita dapat menghasilkan tangan yang jauh lebih meyakinkan.

``
<div style={{textAlign: 'center'}}>
  <img src={good_pitt} style={{width: "250px"}} />
</div>

Dengan menggunakan prompt negatif yang serupa dapat membantu kita pada bagian tubuh yang lain juga. Sayangnya, teknik ini tidak konsisten, sehingga mungkin Anda perlu mencoba beberapa kali sebelum mendapatkan hasil yang baik. Di masa depan, jenis prompt seperti ini seharusnya tidak perlu lagi karena model-model akan meningkat kualitasnya. Namun, saat ini ini adalah teknik yang sangat berguna.


# Catatan

Model lebih baik seperti [Protogen](https://civitai.com/models/3666/protogen-x34-official-release) sering kali lebih baik dengan tangan, kaki, dan sebagainya.