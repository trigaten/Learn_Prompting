---
sidebar_position: 1
---

# 🟢Pendahuluan

Mencari tahu instruksi terbaik untuk membuat gambar yang sempurna adalah sebuah tantangan khusus. Penelitian tentang metode untuk melakukannya tidak begitu berkembang seperti pemicu teks. Ini mungkin disebabkan oleh tantangan bawaan dalam menciptakan objek yang pada dasarnya bersifat subjektif dan seringkali kurang memiliki metrik akurasi yang baik. Namun, jangan khawatir, karena gambar yang mendorong komunitas (@parsons2022dalleprompt) telah menemukan banyak penemuan mengenai cara memprovokasi berbagai model gambar (@rombach2021highresolution)(@ramesh2022hierarchical).

Panduan ini mencakup teknik dasar pemunculan gambar, dan kami sangat mendorong Anda melihat sumber daya yang baik di akhir bab. Selain itu, kami menyediakan contoh proses pencitraan dari awal hingga akhir di bawah ini.


## Contoh

Di sini saya akan menjelaskan contoh bagaimana saya membuat gambar untuk halaman depan kursus ini. Saya telah bereksperimen dengan gaya poli rendah untuk proyek medan pencerdasan kuat radiasi neural yang mendalam. Saya suka gaya low poly, dan ingin menggunakannya untuk gambar-gambar kursus ini.

Saya ingin ada gambar astronot, roket, dan komputer untuk halaman depan.

Saya melakukan banyak penelitian tentang cara membuat gambar low poly, di [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) dan situs lainnya, tetapi tidak bisa menemukan sesuatu yang sangat membantu.

Saya memutuskan untuk hanya memulai dengan DALLE dan prompt `Low poly white and blue rocket shooting to the moon in front of a sparse green meadow` dan melihat apa yang terjadi.

import rockets1 from '@site/docs/assets/images_chapter/rockets_dalle_1.webp';
import rockets2 from '@site/docs/assets/images_chapter/rockets_dalle_2.webp';
import computer_1 from '@site/docs/assets/images_chapter/computer_dalle_1.webp';
import astronaut_1 from '@site/docs/assets/images_chapter/astronaut_dalle_1.webp';
import astronaut_2 from '@site/docs/assets/images_chapter/astronaut_sd_1.webp';
import rocket_sd_1 from '@site/docs/assets/images_chapter/rocket_sd_1.webp';
import rocket_final from '@site/static/img/rocket.webp';
import laptop_sd_1 from '@site/docs/assets/images_chapter/laptop_sd_1.webp';
import gemstone_sd_1 from '@site/docs/assets/images_chapter/gemstone_sd_1.webp';
import gemstone_sd_2 from '@site/docs/assets/images_chapter/gemstone_sd_2.webp';
import gemstone_sd_3 from '@site/docs/assets/images_chapter/gemstone_sd_3.webp';
import focus_final from '@site/static/img/computer.webp';
import astronaut_final from '@site/static/img/astronaut.webp';

<div style={{textAlign: 'center'}}>
  <img src={rockets1} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rockets2} style={{width: "750px"}} />
</div>

Saya pikir hasil ini cukup bagus untuk percobaan pertama; Saya terutama suka roket di sebelah kiri bawah.

Selanjutnya, saya ingin memiliki komputer dengan gaya yang sama: `Low poly white and blue computer sitting in a sparse green meadow`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={computer_1} style={{width: "750px"}} />
</div>

Akhirnya, saya membutuhkan seorang astronot! `Low poly white and blue astronaut sitting in a sparse green meadow with low poly mountains in the background` sepertinya bagus.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_1} style={{width: "750px"}} />
</div>

Saya pikir yang kedua lumayan bagus.

Sekarang saya memiliki seorang astronot, roket, dan komputer. Saya merasa senang dengan mereka, jadi saya menempatkannya di halaman depan. Setelah beberapa hari dan masukan dari teman-teman saya, saya menyadari gayanya tidak cukup konsisten 😔.


Saya melakukan riset pada [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) dan bertemu orang-orang yang menggunakan isometric. Saya memutuskan mencoba itu, menggunakan Diffusi Stabil alih-alih DALLE. Saya juga menyadari bahwa saya perlu menambahkan lebih banyak pengubah pada prompt saya untuk membatasi gaya. Saya mencoba prompt ini: `A low poly world, with an astronaut in white suit and blue visor sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_2} style={{width: "250px"}} />
</div>

Hasilnya tidak bagus, jadi saya memutuskan untuk memulai pada roket sebagai gantinya

`A low poly world, with a white and blue rocket blasting off from a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_sd_1} style={{width: "250px"}} />
</div>

Ini tidak terlalu bagus, tetapi setelah saya mencoba-coba di sini, saya berakhir dengan 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_final} style={{width: "250px"}} />
</div>

Sekarang saya membutuhkan laptop agar lebih baik

`A low poly world, with a white and blue laptop sitting in sparse green meadow with low poly mountains in the background. The screen is completely blue. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={laptop_sd_1} style={{width: "250px"}} />
</div>

Saya mendapatkan beberapa hasil yang tidak konsisten; Saya suka yang di pojok kanan bawah, tapi saya memutuskan untuk mengambil arah yang berbeda.

`A low poly world, with a glowing white and blue gemstone sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_1} style={{width: "250px"}} />
</div>

Hasilnya tidak begitu benar. Ayo coba sesuatu yang ajaib dan bercahaya.

`A low poly world, with a glowing white and blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_2} style={{width: "250px"}} />
</div>

Saya menyukai ini, tetapi ingin batu di tengah layar.

`A low poly world, with a glowing blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_3} style={{width: "250px"}} />
</div>

Di sekitar sini, saya menggunakan kemampuan SD untuk menggunakan gambar sebelumnya sebagai pengaruh pada gambar di masa depan. Dan dengan demikian saya memutuskan:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={focus_final} style={{width: "250px"}} />
</div>

Akhirnya, saya beralih ke astronot.

`A low poly world, with an astronaut in white suite and blue visor is sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_final} style={{width: "250px"}} />
</div>

Pada titik ini, saya sudah cukup puas dengan konsistensi gaya antara tiga gambar saya untuk menggunakannya di situs web. Hal utama yang saya dapatkan adalah bahwa ini adalah proses yang sangat iteratif dan membutuhkan penelitian yang banyak, dan saya harus memodifikasi harapan dan ide saya saat saya bereksperimen dengan berbagai pemberitahuan dan model yang berbeda.