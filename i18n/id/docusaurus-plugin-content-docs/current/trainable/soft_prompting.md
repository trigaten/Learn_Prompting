---
sidebar_position: 1
---

# 🔴 Soft Prompt

Prompt tuning(@lester2021power), sebuah alternatif untuk penyetelan model (@khashabi2021prompt), membekukan bobot model, dan memperbarui parameter dari sebuah perintah. Prompt yang dihasilkan adalah 'soft prompt'.


import Image from '@site/docs/assets/trainable/prompt_tuning.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Penyetelan Model vs Penyetelan Prompt (Lester et al.)
</div>

Gambar di atas membandingkan penyetelan model dengan penyetelan prompt. Dalam penyetelan model, Anda menyetel ulang model yang sama pada tugas yang berbeda. Hal ini memberi Anda beberapa model yang berbeda, dengan mana Anda tidak selalu dapat memproses input secara mudah.

Di sisi lain, penyetelan cepat memungkinkan Anda menggunakan model yang sama untuk semua tugas. Anda hanya perlu menambahkan prompt yang tepat pada waktu inferensi, yang membuat pengelompokan lintas tugas yang berbeda menjadi lebih mudah. Hal ini memiliki keuntungan yang cukup sama dengan apa yang dimiliki prompting biasa. Sebagai tambahan, soft prompt yang dilatih untuk satu model di beberapa tugas sering kali memiliki panjang token yang sama.

## Bagaimana cara kerjanya

Untuk memahami logika dasar dari soft prompting, mari kita berpikir bagaimana**inferensi model ** bekerja pada prompt tertentu: `Berapa 2+2?`.

1) Itu mungkin akan di-tokenisasi sebagai `Apa, 's, 2, +, 2, ?`.

2) Kemudian, setiap token akan dikonversi menjadi vektor nilai.

3) Vektor nilai ini dapat dianggap sebagai parameter model. Model dapat dilatih lebih lanjut, hanya menyesuaikan bobot dari prompt ini.

Perhatikan bahwa segera setelah kita mulai memperbarui bobot ini, vektor token tidak lagi sesuai dengan embedding aktual dari kosa kata.

# Hasil

Penyetelan prompt berkinerja lebih baik dengan model yang lebih besar. Model yang lebih besar juga memerlukan sedikit token soft prompt. Terlepas dari itu, lebih dari 20 token tidak menghasilkan peningkatan kinerja yang signifikan.