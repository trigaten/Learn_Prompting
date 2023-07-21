---
sidebar_position: 60
---

# 🟢 Menggunakan Bobot

Beberapa model (Stable Diffusion, Midjourney, dll.) memungkinkan Anda memberi bobot pada istilah dalam prompt. Ini dapat digunakan untuk menekankan kata-kata atau frasa tertentu dalam gambar yang dihasilkan. Ini juga dapat digunakan untuk mengurangi penekanan pada kata atau frasa tertentu dalam gambar yang dihasilkan. Mari kita pertimbangkan contoh sederhana: berikut:

import mountains from '@site/docs/assets/images_chapter/mountains.webp';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.webp';
import planets from '@site/docs/assets/images_chapter/planets.webp';


# Contoh

Ini adalah beberapa gunung yang dihasilkan oleh Stable Diffusion, dengan prompt `mountain`.

<div style={{textAlign: 'center'}}>
  <img src={mountains} style={{width: "350px"}}/>
</div>

Namun, jika kita ingin pegunungan tanpa pepohonan, kita bisa menggunakan prompt `gunung | tree:-10`. Karena kami memberi bobot negatif yang sangat tinggi pada pohon, mereka tidak muncul di gambar yang dihasilkan.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains_no_trees} style={{width: "350px"}} />
</div>

Kata berbobot dapat digabungkan menjadi permintaan yang lebih rumit, seperti `A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planets} style={{width: "350px"}} />
</div>

## Catatan

Baca lebih lanjut tentang pembobotan dalam beberapa sumber di akhir bab ini.