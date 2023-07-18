---
sidebar_position: 99
---

# 🟢 Midjourney

[Midjourney](https://www.midjourney.com) adalah generator gambar AI yang beroperasi melalui antarmuka bot Discord serta aplikasi web (versi API Midjourney direncanakan). Proses untuk menghasilkan gambar dengan Midjourney mengikuti prinsip dasar yang sama dengan generator gambar AI lainnya, termasuk penggunaan prompt untuk memandu proses penghasilan.

Salah satu fitur unik Midjourney dibandingkan dengan generator gambar AI lainnya adalah kemampuannya untuk membuat gambar yang menarik secara visual dan dikomposisikan secara artistik. Ini disebabkan oleh pelatihan khusus model ini, yang memungkinkannya menghasilkan gambar berkualitas tinggi dengan parameter artistik yang spesifik (lebih lanjut mengenai ini di dalam "Prompts Lanjutan" > "Parameter").

Anda dapat bereksperimen dengan Midjourney Bot di [Discord Learn Prompting](http://learnprompting.org/discord) atau di [server Discord resmi Midjourney](https://discord.gg/midjourney).

import midjourney_astronaut from '@site/docs/assets/images_chapter/midjourney_astronaut.webp';
import midjourney_astronaut_params from '@site/docs/assets/images_chapter/midjourney_astronaut_params.webp';
import midjourney_astronaut_multi1 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi1.webp';
import midjourney_astronaut_multi2 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi2.webp';
import midjourney_astronaut_ip2 from '@site/docs/assets/images_chapter/midjourney_astronaut_ip2.webp';

import midjourney_astronaut_params_a12 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a12.webp';
import midjourney_astronaut_params_a169 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a169.webp';

import midjourney_astronaut_params_c20 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c20.webp';
import midjourney_astronaut_params_c80 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c80.webp';

import midjourney_astronaut_params_q05 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q05.webp';
import midjourney_astronaut_params_q2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q2.webp';

import midjourney_astronaut_params_s50 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s50.webp';
import midjourney_astronaut_params_s900 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s900.webp';

import midjourney_astronaut_params_sameseed from '@site/docs/assets/images_chapter/midjourney_astronaut_params_sameseed.webp';
import midjourney_astronaut_params_seed123 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_seed123.webp';

import midjourney_astronaut_params_tile from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tile.webp';
import midjourney_astronaut_params_tilegrid from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilegrid.webp';
import midjourney_astronaut_params_tilecomplete from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilecomplete.webp';

import midjourney_astronaut_params_v1 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v1.webp';
import midjourney_astronaut_params_v2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v2.webp';
import midjourney_astronaut_params_v3 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v3.webp';



# Penggunaan Dasar

Anatomi dasar prompt dengan Midjourney adalah `/bayangkan prompt: [GAMBAR PROMPT] [--PARAMETER OPSIONAL]`.

Contoh: `/imagine prompt: astronaut on a horse`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "350px"}} />
</div>

Contoh dengan parameter: `imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params} style={{width: "350px"}} />
</div>

Dalam contoh dasar ini, parameter-parameter berikut telah digunakan:


`--ar 3:2` sets the aspect ratio of the image to 3:2

`--c 70` menambahkan sebuah nilai kekacauan sebesar 70 untuk memungkinkan Midjourney menginterpretasikan prompt dengan lebih bebas(nilai kekacauan: 0 - 100)

`--seed 100` menetapkan nilai benih sembarang yang dapat digunakan untuk merender atau memperbarui gambar nanti


(pelajari lebih lanjut tentang parameter Midjourney di "Prompt Lanjutan" > "Parameter")


# Prompt Lanjutan
Prompt lanjutan di Midjourney menggunakan parameter dan teknik prompting khusus yang didukung oleh algoritma Midjourney.

## Multi Prompts
Midjourney secara default mengartikan permintaan Anda secara holistik. Menggunakan titik dua ganda `::` memberitahu Midjourney untuk menginterpretasikan setiap bagian prompt secara terpisah.

Contoh:

```text
/imagine prompt: astronaut and horse
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi1} style={{width: "350px"}} />
</div>

```text
/imagine prompt: astronaut:: and horse
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi2} style={{width: "350px"}} />
</div>

## Image Prompts
Dengan mengunggah gambar ke Discord dan menggunakan URL-nya dalam sebuah prompt, Anda dapat menginstruksikan Midjourney untuk menggunakan gambar tersebut untuk mempengaruhi konten, gaya, dan komposisi hasil Anda. Contoh: [Astronot (Sumber: Wikipedia)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).webp)

```text
/imagine prompt: [image URL], impressionist painting
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_ip2} style={{width: "350px"}} />
</div>

## Parameter (v4)

Berikut adalah parameter-parameter yang didukung oleh model terbaru Midjourney (v4).

### Rasio Aspek:

`--ar [ratio]` mengubah rasio default (1:1) ke rasio baru (saat ini rasio maksimum yang didukung adalah 2:1)

Contoh: `astronaut on a horse --ar 16:9` dan `astronaut on a horse --ar 1:2`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_a169} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_a12} style={{width: "175px"}} />
</div>

### Chaos:

`--c [value]` mengatur nilai kekacauan yang menentukan seberapa banyak Midjourney bervariasi dalam prompt; semakin tinggi nilai kekacauan, semakin tidak biasa dan tak terduga hasil dan komposisi (rentang: 0 - 100)

Contoh: `astronaut on a horse --c20` dan `astronaut on a horse --c 80`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_c20} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_c80} style={{width: "350px"}} />
</div>

### Kualitas:

`--q [value]` menentukan berapa lama waktu yang akan dihabiskan untuk menghasilkan gambar, sehingga meningkatkan kualitasnya. Pengaturan default adalah "1". Nilai yang lebih tinggi menggunakan lebih banyak GPU Anda (menerima nilai ".25", ".5", "1", dan "2")

Contoh: `astronaut on a horse --q .5` and `astronaut on a horse --q 2`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_q05} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_q2} style={{width: "350px"}} />
</div>

### Seed:

`--seed [value]` menetapkan nomor biji yang menentukan titik awal (lapangan suara) untuk pembuatan gambar. Seeds untuk setiap gambar dihasilkan secara acak ketika tidak ditentukan dengan parameter seed. Menggunakan nomor seed dan prompt yang sama akan menghasilkan gambar yang serupa.

Contoh: `astronaut on a horse --seed 123`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
</div>

### Stylize:

`--menambah gaya [value]` atau `--s [value]` mempengaruhi seberapa kuat Midjourney menerapkan algoritma artistiknya.  Nilai rendah menghasilkan gambar yang sangat cocok dengan permintaan, nilai tinggi menciptakan gambar yang sangat artistik yang kurang terhubung dengan permintaan. Nilai default adalah 100, rentang nilai adalah 0 - 1000. (Catatan: Anda dapat menggunakan perintah `/pengatura n`untuk mengubah nilai gaya bawaan dari "🖌️ Style Med" (=`--s 100`) menjadi "🖌️ Style Low" (=`--s 50`), "🖌️ Style High" (=`--s 250`) atau "🖌️ Style Very High" (=`--s 750`))

Contoh: `astronaut on a horse --s 50` dan `astronaut on a horse --s 900`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_s50} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_s900} style={{width: "350px"}} />
</div>

### Versi:
`--v [nomor versi]` atau `--version [nomor versi]` memungkinkan Anda mengakses model Midjourney sebelumnya (1-3)

Contoh: `--v 1`, `--v 2`, and `--v 3`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_v1} style={{width: "220px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_v2} style={{width: "220px"}} />
   &nbsp;
      <img src={midjourney_astronaut_params_v3} style={{width: "220px"}} />
</div>

## Parameter (model sebelumnya)

### Same Seed

`--sameseed`: sementara parameter `--seed` menghasilkan satu bidang kebisingan yang diterapkan pada semua gambar dalam grid awal, parameter sameseed menerapkan kebisingan awal yang sama pada semua gambar dalam grid awal sehingga akan menghasilkan gambar yang sangat mirip.

Contoh: `astronaut on a horse --sameseed --v 3`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_sameseed} style={{width: "350px"}} />
</div>

### Tile

`--tile` menghasilkan gambar yang dapat digunakan sebagai pola berulang untuk membuat pola yang mulus untuk kain, wallpaper, dan tekstur (hanya berfungsi dengan model 1 - 3)

Contoh: `astronaut on a horse --tile --v 3`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_tilegrid} style={{width: "220px"}} />
  &nbsp;
  <img src={midjourney_astronaut_params_tile} style={{width: "220px"}} />
  &nbsp;
  <img src={midjourney_astronaut_params_tilecomplete} style={{width: "220px"}} />
</div>

### Video

`--video` membuat film pendek dari tata letak gambar yang dihasilkan. Dengan emoji ✉️ membuat Bot Midjourney mengirimkan DM ke Anda dengan tautan ke video.

Contoh: `astronaut on a horse --video --v 3`

<div style={{textAlign: 'center'}}>
 <video width="320" height="240" autoplay muted>
  <source src="https://i.mj.run/27c89699-d96d-4834-b6fa-b022a453eb28/video.mp4" type="video/mp4">
</source>
</video>
</div>

## Tautan

[Dokumentasi Resmi Midjourney](https://docs.midjourney.com/)