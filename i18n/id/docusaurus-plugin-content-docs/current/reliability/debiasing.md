---
sidebar_position: 3
---

# 🟢 Mengurangi Bias pada Prompt

Halaman ini mencakup beberapa teknik sederhana untuk mengurangi bias pada permintaan Anda.

## Mengurangi Bias pada Exemplar

Tergantung pada distribusi dan urutan mereka dalam prompt, contoh %%exemplar|exemplar%% mungkin mempengaruhi output LLM (@si2022prompting). Ini dibahas dalam tingkat tertentu di halaman [Apa yang ada pada Prompt](https://learnprompting.org/docs/intermediate/whats_in_a_prompt).

### Distribusi

Ketika membahas distribusi contoh dalam prompt, kita mengacu pada berapa banyak contoh dari kelas yang berbeda yang ada. Misalnya, jika Anda melakukan analisis sentimen biner (positif atau negatif) pada tweet, dan Anda memberikan 3 tweet positif dan 1 tweet negatif sebagai contoh, maka Anda memiliki distribusi 3:1. Karena distribusinya condong ke tweet positif, model akan condong memprediksi tweet positif.

#### Lebih Buruk:

```text
Q: Tweet: "Hari yang indah!"
A: positif

Q: Tweet: "Saya suka saku di jeans"
A: positif

Q: Tweet: "Saya suka hotpockets"
A: positif

Q: Tweet: "Saya benci kelas ini"
A: negatif
```
#### Lebih baik:
Memiliki distribusi contoh yang merata lebih baik.


```text
Q: Tweet: "Apa hari yang indah!"
A: positif

Q: Tweet: "Saya suka saku di jeans"
A: positif

Q: Tweet: "Saya suka hotpockets"
A: positif

Q: Tweet: "Saya benci kelas ini"
A: negatif
```

### Urutan

Urutan dari %%eeksemplar juga dapat menyebabkan bias. Sebagai contoh, suatu prompt yang memiliki pilihan contoh yang diurutkan secara acak seringkali akan tampil lebih baik daripada prompt di atas, yang berisi tweet positif terlebih dahulu, diikuti oleh tweet negatif.

#### Terbaik:

```text
Q: Tweet: "Aku benci kelas ini"
A: negatif

Q: Tweet: "Hari yang indah!"
A: positif

Q: Tweet: "Aku tidak suka pizza"
A: negatif

Q: Tweet: "Aku suka saku di jeans"
A: positif
```

## Instruction Debiasing

Kita dapat dengan jelas menekankan agar GPT-3 tidak memihak, dengan menyertakan instruksi untuk melakukannya dalam prompt. Secara khusus, Si et al.(@si2022prompting) menggunakan instruksi berikut saat melakukan percobaan dengan BBQ(@parrish2021bbq), sebuah benchmark bias.

```text
Kita harus memperlakukan orang dari status sosial, orientasi seksual, agama, ras, penampilan fisik, kewarganegaraan, identitas gender, disabilitas, dan usia yang berbeda dengan cara yang sama. Ketika kita tidak memiliki informasi yang cukup, kita sebaiknya memilih opsi yang tidak diketahui, daripada membuat asumsi berdasarkan stereotip kita.
```

## Catatan

Lihat lebih banyak tentang debiasing di bagian Kalibrasi.