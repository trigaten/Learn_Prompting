---
sidebar_position: 5
---

# 🟡 Prompt Ensembling

Prompt ensembling adalah konsep menggunakan beberapa prompt yang berbeda untuk mencoba menjawab pertanyaan yang sama. Ada banyak pendekatan berbeda terhadap ini.

## DiVeRSe

DiVeRSe(@li2022advance) ("**Di**verse **Ve**rifier pada **R**easoning **S**t**e**ps") adalah sebuah metode yang meningkatkan keandalan jawaban secara tiga kali lipat. Ini dilakukan dengan 1) menggunakan beberapa prompt untuk menghasilkan kelengkapan yang beragam, 2) menggunakan pengecek untuk membedakan jawaban yang bagus dari jawaban yang buruk, dan 3) menggunakan pengecek untuk memeriksa kebenaran langkah-langkah penalaran.


import diverse from '@site/docs/assets/reliability/diverse.webp';

<div style={{textAlign: 'center'}}>
  <img src={diverse} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
DiVeRSe (Li et al.)
</div>

### Diverse Prompts

DiVeRSe menggunakan 5 contoh yang berbeda untuk input yang diberikan. Untuk membuat setiap prompt, mereka secara acak sampel beberapa contoh dari set pelatihan. Berikut adalah contoh salah satu few-shot prompt (k=2), dengan contoh yang diambil dari [GSM8K benchmark2](https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl)(@cobbe2021training). Dalam praktiknya, DiVeRSe menggunakan 5 contoh dalam permintaan untuk benchmark ini.


```
P: Natalia menjual klip kepada 48 temannya pada bulan April, dan kemudian ia menjual separuh dari jumlah klip tersebut pada bulan Mei. Berapa banyak klip yang Natalia jual secara keseluruhan pada bulan April dan Mei?
A: Natalia menjual 48/2 = 24 klip pada bulan Mei.
Natalia menjual 48+24 = 72 klip secara keseluruhan pada bulan April dan Mei.
#### 72
Q: Weng mendapatkan $12 per jam untuk menjaga anak. Kemarin, dia baru saja melakukan 50 menit pengasuhan anak. Berapa banyak yang dia dapatkan?
A: Weng mendapatkan 12/60 = $0.2 per menit.
Bekerja selama 50 menit, dia mendapatkan 0,2 x 50 = $10.
#### 10
Q: Betty sedang mengumpulkan uang untuk dompet baru yang harganya $100. Betty hanya memiliki setengah dari uang yang dia butuhkan. Orangtuanya memutuskan untuk memberikannya $15 untuk tujuan itu, dan kakek neneknya dua kali lipat dari orangtuanya. Berapa banyak uang lagi yang dibutuhkan oleh Betty untuk membeli dompet?
A:
```

Setelah menghasilkan 5 prompt yang berbeda seperti di atas, DiVeRSe mengambil 20 jalur penalaran yang berbeda untuk setiapnya (suhu = 0.5). Berikut beberapa contoh penyelesaian dari prompt di atas. Perhatikan bahwa jawabannya tidak selalu benar.


```text
<!-- highlight-start -->
Betty memiliki 0.5*100 = $50.
Kemudian dia mendapatkan 15 lagi = $65.
Kemudian dia mendapatkan 2*15 = $90.
Dia membutuhkan 100-90 = $10 lebih.
#### 10
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
A: Betty memiliki 0,5*100 = $500.
Kemudian ia mendapatkan 15 lagi = $650.
Kemudian dia mendapatkan 2*15 = $900.
Dia membutuhkan 100-90 = $1000 lagi.
#### 1000
<!-- highlight-end -->
```

Pada titik ini, DiVeRSe telah menghasilkan 100 penyelesaian yang berbeda.

### Voting Verifier

Sekarang, kita bisa hanya mengambil jawaban mayoritas, seperti yang dilakukan Self-Consistency (@ mitchell2022enhancing).

Namun, DiVeRSe mengusulkan metode yang jauh lebih rumit, yang mereka sebut sebagai _pengecek suara_.

Pada saat pengujian, penggunaan verifikasi pemilih adalah proses dua langkah. Pertama, verifier (jaringan saraf) memberikan skor 0-1 ke setiap kelengkapan berdasarkan seberapa mungkin itu benar. Kemudian, komponen 'voting' menjumlahkan semua skor dari jawaban yang berbeda dan menghasilkan jawaban akhir.

#### Contoh

Berikut contoh kecilnya. Katakanlah kita memiliki kelengkapan berikut untuk perintah `Berapa dua tambah dua?`:

```text
<!-- highlight-start -->
4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
dua + 2 = 5
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
saya pikir 2+2 = 6
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
dua tambah dua sama dengan 4
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
Ini adalah 5
<!-- highlight-end -->
```

Verifikator akan membaca setiap penyelesaian dan memberikan skor padanya. Misalnya, mungkin memberikan skor: 0.9, 0.1, 0.2, 0.8, 0.3 secara berturut-turut. Kemudian, komponen pemungutan suara akan menjumlahkan nilai untuk setiap jawaban.

```
score(4) = 0.9 + 0.8 = 1.7
score(5) = 0.1 + 0.3 = 0.4
score(6) = 0.2
```

Jawaban akhir adalah 4, karena memiliki skor tertinggi.

**Tapi bagaimana pelatihan verifikator?**

Verifikator dilatih dengan fungsi loss yang sedikit rumit, yang tidak akan saya bahas di sini. Baca bagian 3.3 dari makalah untuk informasi lebih lanjut(@li2022advance).

## Ask Me Anything (AMA) Prompting

import ama from '@site/docs/assets/reliability/AMA_Prompting.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ama} style={{width: "750px"}} />
</div>

Tanyakan apapun kepada saya (AMA) prompting (@arora2022ama) adalah pendekatan serupa dengan DiVeRSe. Namun, langkah prompt berulang dan langkah agregasi jawabannya berbeda secara signifikan. The core idea of AMA is to use a LLM to generate multiple prompts, instead of just using different few-shot exemplars.

### Prompt Ganda

AMA menunjukkan bahwa Anda dapat mengambil sebuah pertanyaan dan mengubah formatnya dengan berbagai cara untuk membuat kuisioner yang berbeda. Sebagai contoh, misalkan Anda sedang melakukan scraping terhadap sejumlah situs web untuk mendapatkan informasi mengenai hewan dan ingin hanya mencatat hewan yang tinggal di Amerika Utara. Mari kita buat sebuah prompt untuk menentukannya.

Diberikan kutipan berikut dari Wikipedia:

```text
Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies dari beruang hitam Amerika dan hidup di wilayah Pesisir Tengah dan Utara British Columbia, Kanada.
```

Anda dapat memformat tugas ini menjadi prompt seperti ini:

```text
Apakah klaim berikut Benar atau Salah dengan mempertimbangkan konteks?

Konteks: Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies beruang hitam Amerika dan hidup di daerah Tengah dan Pantai Utara British Columbia, Kanada.
Klaim: Hewan ini hidup di Amerika Utara
Jawaban:
```

Ini agak formulasi yang aneh. Mengapa tidak menggunakan perintah yang lebih sederhana berikut ini?

```text
Konteks: Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies beruang hitam Amerika dan hidup di wilayah Pesisir Tengah dan Utara British Columbia, Kanada.
Pertanyaan: Apakah hewan ini hidup di Amerika Utara?
```

Nah, dengan merumuskan pertanyaan dengan cara khusus ini, kita dapat menghasilkan tuntutan yang berbeda. Langkah pertama kami di sini akan mengambil tuntutan `Hewan ini hidup di Amerika Utara` dan merubahnya menjadi pertanyaan-pertanyaan yang berbeda, yang pada dasarnya meminta hal yang sama. Untuk melakukan hal ini, kami akan melewati tuntutan melalui petunjuk seperti yang ada di gambar di bawah ini.

import ama_multi from '@site/docs/assets/reliability/AMA_multiprompting.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ama_multi} style={{width: "800px"}} />
</div>

Ini mungkin menghasilkan:
1. Apakah hewan itu hidup di Amerika Utara?
2. Apakah hewan hidup di Amerika Utara?
3. Di mana hewan tersebut tinggal?

Ide di balik hal ini adalah untuk membuat berbagai *tampilan* dari tugas tersebut. Kemudian kami menerapkan masing-masing ke konteks yang diberikan seperti ini:

```text
Konteks: Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies beruang hitam Amerika dan hidup di wilayah Pesisir Tengah dan Utara British Columbia, Kanada.
Pertanyaan: Apakah hewan itu hidup di Amerika Utara?
```

Kemudian, kita dapat menghasilkan jawaban untuk masing-masing:

1. `Ya itu begitu`
2. `Ya, itu benar`
3. `Amerika Utara`

Ini adalah *jawaban* tingkat menengah. Kita perlu memetakan mereka ke label tugas (misalnya Ya atau Tidak).

Kita bisa melakukannya dengan melewati jawaban-jawaban intermediate melalui prompt seperti berikut:

```text
Pilih kategori yang benar.

"Kategori":
- Ya, Amerika Utara
- Tidak, bukan Amerika Utara

"Ya, memang" cocok dengan kategori:
```

Sekarang kita dapat mendapatkan jawaban keluaran kita.

1. `Ya, Amerika Utara`
2. `Ya, Amerika Utara`
3. `Ya, Amerika Utara`

Di sini, mereka semua setuju, jadi kita bisa langsung mengambil jawaban pertama. Namun, jika mereka tidak setuju, kita dapat menggunakan langkah agregasi AMA untuk mendapatkan jawaban final.

### Pengumpulan Jawaban

AMA menggunakan strategi yang sangat rumit untuk menggabungkan jawaban (lebih kompleks daripada DiVeRSe) alih-alih hanya mengambil mayoritas jawaban. Untuk memahami mengapa jawaban mayoritas mungkin bukan pilihan yang baik, pertimbangkan dua pertanyaan yang telah kita buat sebelumnya:

1. Apakah hewan itu hidup di Amerika Utara?
2. Apakah hewan ini tinggal di Amerika Utara?

Mereka sangat mirip, sehingga kemungkinan besar akan menghasilkan hasil yang sama. Karena pertanyaannya begitu mirip, mereka akan efektif mempengaruhi hasil akhir. Untuk mengatasi hal ini, AMA mengandalkan pengawasan yang lemah dan matematika kompleks untuk mengestimasi ketergantungan antara berbagai respons yang dibuatnya, dan kemudian menggunakan ini untuk memberikan bobot yang sesuai.

Jadi, untuk tiga pertanyaan yang kita hasilkan, mungkin akan diberikan bobot 25%, 25%, dan 50%, karena dua yang pertama sangat mirip.

Meskipun strategi agregasi AMA sangat kuat, begitu rumit sehingga saya tidak akan membahasnya di sini. Baca bagian 3.4 dari makalah untuk lebih jelasnya(@arora2022ama).

### Hasil

- Dengan strategi pendorong ini, AMA mampu menggunakan GPT-J-6B (@ wange2021gptj) untuk mengungguli GPT-3.

- AMA lebih baik pada pertanyaan di mana konteks yang diberikan mengandung jawabannya.

## Pelajaran Penting

Metode ensemble sangat kuat. Mereka dapat digunakan untuk meningkatkan kinerja setiap model, dan dapat digunakan untuk meningkatkan kinerja model pada tugas tertentu.

Dalam praktiknya, pemungutan suara mayoritas harus menjadi strategi pilihan Anda.

