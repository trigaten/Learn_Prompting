# 🟢 Mengurangi Bias pada Prompt

Halaman ini mencakup beberapa teknik sederhana untuk mengurangi bias pada prompt.

## Mengurangi Bias pada Exemplar

Berdasarkan distribusinya dan urutan dalam prompt, exemplar dapat mempengaruhi hasil keluaran LLM[^1]. hal ini dibahas dalam beberapa halaman, seperti di [Apa yang ada dalam sebuah Prompt](http://learnprompting.org/docs/intermediate/whats_in_a_prompt).

### Distribusi

Ketika membahas distribusi contoh dalam prompt, kita mengacu pada berapa banyak contoh dari kelas yang berbeda yang ada. Misalnya, jika Anda melakukan analisis sentimen biner (positif atau negatif) pada tweet, dan Anda memberikan 3 tweet positif dan 1 tweet negatif sebagai contoh, maka Anda memiliki distribusi 3:1. Karena distribusinya condong ke tweet positif, model akan cenderung memprediksi tweet positif.

### Buruk:

```
Q: Tweet: "What a beautiful day!"
A: positif

Q: Tweet: "I love pockets on jeans"
A: positif

Q: Tweet: "I love hotpockets"
A: positif

Q: Tweet: "I hate this class"
A: negatif
```

### Lebih Baik:

Mempunyai distribusi contoh yang merata lebih baik.

```
Q: Tweet: "What a beautiful day!"
A: positif

Q: Tweet: "I love pockets on jeans"
A: positif

Q: Tweet: "I don't like pizza"
A: negatif

Q: Tweet: "I hate this class"
A: negatif
```

### Urutan

Urutan exemplar juga dapat menyebabkan bias. Misalnya, prompt yang memiliki contoh yang diurutkan secara acak seringkali akan berkinerja lebih baik daripada prompt di atas, yang berisi tweet positif terlebih dahulu, diikuti oleh tweet negatif.

### Paling Baik:

```
Q: Tweet: "I hate this class"
A: negatif

Q: Tweet: "What a beautiful day!"
A: positif

Q: Tweet: "I don't like pizza"
A: negatif

Q: Tweet: "I love pockets on jeans"
A: positif
```

## Mengurangi Bias pada Instruksi

Kita dapat dengan jelas meminta GPT-3 untuk tidak bias dengan menyertakan instruksi untuk melakukannya pada prompt. Khususnya, Si et al.[^1] menggunakan instruksi berikut saat bereksperimen dengan BBQ[^2], suatu benchmark bias.

```
Kita seharusnya memperlakukan orang dari berbagai status sosial, orientasi seksual, agama, ras, penampilan fisik, kewarganegaraan, identitas gender, disabilitas, dan usia secara sama. Ketika kita tidak memiliki informasi yang cukup, kita seharusnya memilih opsi yang tidak diketahui, daripada membuat asumsi berdasarkan stereotip kita.
```

## Catatan

Lihat lebih banyak tentang mengurangi bias di bagian Kalibrasi.

---

[^1]: Si, C., Gan, Z., Yang, Z., Wang, S., Wang, J., Boyd-Graber, J., & Wang, L. (2022). Meminta GPT-3 agar dapat diandalkan. [↩](https://learnprompting.org/docs/reliability/debiasing#fnref-1)
[^2]: Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P. M., & Bowman, S. R. (2021). BBQ: Sebuah Benchmark Bias yang Dibangun Secara Manual untuk Pertanyaan Jawaban.[↩](https://learnprompting.org/docs/reliability/debiasing#fnref-2)
