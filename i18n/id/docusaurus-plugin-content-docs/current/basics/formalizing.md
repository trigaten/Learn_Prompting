---
sidebar_position: 7
---

# 🟢 Merumuskan Prompt

import FormalPrompt from '@site/docs/assets/basics/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Kita telah membahas beberapa tipe pertanyaan, serta cara menggabungkannya. Halaman ini akan memberikan Anda istilah-istilah untuk menjelaskan berbagai jenis prompt. Meskipun telah ada pendekatan untuk merumuskan wacana seputar teknik prompt (@white2023prompt), bidang ini terus bergerak, jadi kami akan memberi Anda informasi yang cukup untuk memulai.

## Bagian dari Prompt

Ada beberapa bagian yang berbeda dari sebuah prompt yang akan Anda lihat berulang-ulang. Mereka kurang lebih:

- Peran (Role)
- Instruksi/tugas (Instruction/task)
- Pertanyaan (Question)
- Konteks (Context)
- Contoh (Few shot)

Kita telah membahas peran, instruksi, dan contoh pada halaman sebelumnya. Sebuah pertanyaan hanya sebuah pertanyaan! (Misalnya, `apa ibukota Perancis?`). Konteks adalah informasi yang relevan yang Anda ingin model gunakan saat menjawab pertanyaan/menjalankan instruksi.

Tidak semuanya muncul di setiap prompt, dan ketika beberapa di antaranya muncul, tidak ada urutan standar untuk mereka. Misalnya, dua prompt berikut, yang masing-masing mengandung peran, instruksi, dan konteks, akan melakukan hal yang sama:

```text
Kamu adalah seorang dokter. Baca riwayat medis ini dan prediksi risiko bagi pasien:

1 Januari 2000: Lengan kanan patah saat bermain basket. Ditangani dengan pembalut gips.
15 Februari 2010: Didiagnosis dengan hipertensi. Lisinopril yang diresepkan.
10 September 2015: Terkena pneumonia. Diperlakukan dengan antibiotik dan sembuh sepenuhnya.
1 Maret 2022: Mengalami gegar otak dalam kecelakaan mobil. Diterima di rumah sakit dan dipantau selama 24 jam.
```

```text
1 Januari 2000: Lengan kanan patah saat bermain bola basket. Diperlakukan dengan gips.
15 Februari 2010: Didiagnosis dengan hipertensi. Menggunakan lisinopril.
10 September 2015: Terkena pneumonia. Diterapi dengan antibiotik dan sembuh total.
1 Maret 2022: Mengalami gegar otak dalam kecelakaan mobil. Diterima di rumah sakit dan dipantau selama 24 jam.

Anda adalah seorang dokter. Baca riwayat medis ini dan prediksi risiko bagi pasien:
```

Namun, prompt kedua mungkin lebih disukai karena instruksinya merupakan bagian terakhir dari prompt. Ini bagus karena LLM kemungkinan lebih sedikit menulis lebih banyak konteks daripada mengikuti instruksi. Misalnya, jika diberikan prompt pertama, LLM mungkin menambahkan baris baru: `15 Maret 2022: Janji temu tindak lanjut dengan ahli saraf untuk mengevaluasi kemajuan pemulihan gegar otak.`


## Prompt "Standar"

Kita telah mendengar beberapa format prompt yang berbeda sampai sekarang ini. Sekarang, kita akan cepat kembali ke awal dan mendefinisikan prompt "standar". Mengikuti Kojima dkk. (@kojima2022large), kami akan mengacu pada perintah yang terdiri hanya dari pertanyaan sebagai prompt "standar". Kami juga mempertimbangkan desakan yang terdiri hanya dari sebuah pertanyaan yang berformat QA sebagai prompt "standar".

#### Kenapa aku harus peduli?

Banyak artikel/makalah yang kami rujuk menggunakan istilah ini. Kami mendefinisikannya agar kita dapat membahas tipe prompt baru dibandingkan dengan prompt standar.

### Dua contoh prompt standar:


_Prompt Standar_
```
Apa ibu kota Prancis?
```

_Prompt Standar dalam format QA_
```
Q: Apa ibu kota Prancis?

A:
```

## Few Shot Prompt yang Standar

Few shot prompt yang standar(@liu2021pretrain) adalah prompt standar yang memiliki _contoh_ di dalamnya. Exemplar adalah contoh dari tugas yang diusahakan oleh prompt, yang termasuk dalam prompt itu sendiri (@brown2020language). Dalam penelitian, few shot prompts yang standar terkadang disebut sebagai prompt standar (meskipun kami mencoba tidak melakukannya dalam panduan ini).

### Dua contoh dari few shot prompt yang standar:

_Few Shot Standard Prompt_

```
Apa ibu kota Spanyol?
Madrid
Apa ibu kota Italia?
Roma
Apa ibu kota Prancis?
```

_Few Shot Standard Prompt dalam format QA_
```
Q: Apa ibu kota Spanyol?
A: Madrid
Q: Apa ibukota Italia?
A: Roma
Q: Apa ibukota Prancis?
A:
```

Few shot prompts memfasilitasi pembelajaran "few shot" alias pembelajaran "in context", yaitu kemampuan untuk belajar tanpa pembaruan parameter(@zhao2021calibrate).
