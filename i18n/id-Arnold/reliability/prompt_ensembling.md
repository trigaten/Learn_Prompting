# 🟡 Prompt Ensembling

Prompt ensembling adalah konsep menggunakan beberapa prompt yang berbeda untuk mencoba menjawab pertanyaan yang sama. Ada banyak pendekatan yang berbeda untuk ini.

## DiVeRSe

DiVeRSe[^1] ("**Di**verse **Ve**rifier on **R**easoning **S**t**e**ps") adalah metode yang meningkatkan keandalan jawaban dengan tiga cara. Hal ini dilakukan dengan 1) menggunakan beberapa prompt untuk menghasilkan penyelesaian yang berbeda, 2) menggunakan verifikator untuk membedakan jawaban yang baik dengan jawaban yang buruk, dan 3) menggunakan verifikator untuk memeriksa kebenaran langkah-langkah berpikir.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/73a434fb-a715-4003-a27a-2306e3ec5950)

DiVeRSe (Li et al.)

### Diverse Prompts

DiVeRSe menggunakan 5 prompt yang berbeda untuk setiap input. Untuk mengonstruksi setiap prompt, mereka secara acak mengambil beberapa exemplar dari training set. Berikut adalah contoh salah satu few-shot prompt (k=2), dengan contoh yang diambil dari [GSM8K benchmark](https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl)[^2]. Dalam praktiknya, DiVeRSe menggunakan 5 exemplar dalam prompt untuk benchmark ini.

```
Q: Natalia menjual klip ke 48 temannya pada bulan April, dan kemudian dia menjual setengah banyak klip pada bulan Mei. Berapa banyak klip yang dijual Natalia secara keseluruhan pada bulan April dan Mei?
A: Natalia menjual 48/2 = 24 klip pada bulan Mei.
Natalia menjual 48+24 = 72 klip secara keseluruhan pada bulan April dan Mei.
#### 72
Q: Weng menghasilkan $12 per jam untuk mengasuh anak. Kemarin, dia hanya mengasuh anak selama 50 menit. Berapa banyak yang dia hasilkan?
A: Weng menghasilkan 12/60 = $0.2 per menit.
Bekerja selama 50 menit, dia menghasilkan 0.2 x 50 = $10.
#### 10
Q: Betty sedang menghemat uang untuk dompet baru yang harganya $100. Betty hanya memiliki separuh uang yang ia butuhkan. Orang tuanya memutuskan memberinya $15 untuk tujuan tersebut, dan kakek-neneknya dua kali lipat dari orang tuanya. Berapa banyak uang lagi yang dibutuhkan Betty untuk membeli dompet?
A:
```

Setelah menghasilkan 5 prompt yang berbeda seperti di atas, DiVeRSe mengambil sampel 20 jalur penalaran untuk masing-masing (temperatur= 0,5). Berikut adalah beberapa contoh penyelesaian dari prompt di atas. Perlu diperhatikan bahwa jawaban tidak selalu benar.

```
Betty memiliki 0,5*100 = $50.
Kemudian dia mendapatkan 15 lebih banyak = $65.
Kemudian dia mendapatkan 2*15 = $90.
Dia membutuhkan $10 lagi.
#### 10
```

```
A: Betty memiliki 0,5*100 = $500.
Kemudian dia mendapatkan 15 lebih banyak = $650.
Kemudian dia mendapatkan 2*15 = $900.
Dia membutuhkan $1000 lagi.
#### 1000
```

Pada saat ini, DiVeRSe telah menghasilkan 100 penyelesaian yang berbeda.

### Voting Verifier

Sekarang, kita hanya bisa mengambil jawaban mayoritas, seperti yang dilakukan oleh Self-Consistency[^3].

Namun, DiVeRSe mengusulkan metode yang lebih rumit, yang mereka sebut *voting verifier*.

Pada saat pengujian, menggunakan voting verifier merupakan proses dua langkah. Pertama, verifikator (sebuah neural network) menugaskan skor 0-1 untuk setiap penyelesaian berdasarkan seberapa mungkin jawaban tersebut benar. Kemudian, komponen 'voting' menjumlahkan semua skor dari jawaban yang berbeda dan menghasilkan jawaban akhir.

### Contoh

Berikut adalah contoh kecil. Katakanlah kita memiliki penyelesaian berikut untuk prompt `Berapa dua ditambah dua?`:

```
4
```

```
dua + 2 = 5
```

```
Saya pikir 2+2 = 6
```

```
dua ditambah dua = 4
```

```
Ini adalah 5
```

Verifikator akan membaca setiap penyelesaian dan menugaskan skor ke masing-masing. Misalnya, mungkin menugaskan skor: 0,9; 0,1; 0,2; 0,8; 0,3 secara berturut-turut. Kemudian, komponen voting akan menjumlahkan skor untuk setiap jawaban.

```
score(4) = 0,9 + 0,8 = 1,7
score(5) = 0,1 + 0,3 = 0,4
score(6) = 0,2
```

Jawaban akhir adalah 4, karena memiliki skor tertinggi.

**Namun bagaimana verifikator dilatih?**

Verifikator dilatih dengan fungsi loss yang sedikit rumit, yang tidak akan saya bahas di sini. Baca bagian 3.3 dari makalah untuk lebih jelasnya[^1].

## Ask Me Anything (AMA) Prompting

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/7c8cb29e-f907-4f71-a37d-b9b084c7375e)

Ask Me Anything (AMA) prompting[^4] adalah pendekatan yang mirip dengan DiVeRSe. Namun, baik langkah prompt berganda maupun langkah agregasi memiliki jawaban yang secara signifikan berbeda. Ide inti dari AMA adalah menggunakan LLM untuk menghasilkan beberapa prompt, daripada hanya menggunakan exemplar few-shot yang berbeda.

### Prompts Ganda

AMA menunjukkan bahwa Anda dapat mengambil sebuah pertanyaan dan mengubah formatnya menjadi beberapa cara untuk membuat prompt yang berbeda. Misalnya, katakanlah Anda mengambil informasi dari banyak situs web tentang hewan dan hanya ingin mencatat yang hidup di Amerika Utara. Mari kita buat prompt untuk menentukan hal ini.

Diberikan kutipan berikut dari Wikipedia:

```
Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies dari beruang hitam Amerika dan hidup di wilayah Tengah dan Pesisir Utara British Columbia, Kanada.
```

Anda dapat memformat tugas ini menjadi prompt seperti ini:

```
Apakah klaim berikut benar atau salah dengan memberikan konteks?

Konteks: Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies dari beruang hitam Amerika dan hidup di wilayah Tengah dan Pesisir Utara British Columbia, Kanada.
Klaim: Hewan ini hidup di Amerika Utara.
Jawaban:
```

Formulasinya agak aneh. Mengapa tidak menggunakan prompt yang lebih sederhana berikut ini?

```
Konteks: Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies dari beruang hitam Amerika dan hidup di wilayah Tengah dan Pesisir Utara British Columbia, Kanada.
Pertanyaan: Apakah hewan ini hidup di Amerika Utara?
```

Dengan merumuskan pertanyaan dengan cara khusus ini, kita dapat menghasilkan prompt yang berbeda. Langkah pertama kita adalah memberikan klaim `Hewan ini hidup di Amerika Utara` dan memformatnya menjadi pertanyaan yang berbeda, yang pada dasarnya menanyakan hal yang sama. Untuk melakukannya, kita akan melewati klaim melalui prompt seperti yang terlihat pada gambar di bawah ini.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/1c63e51a-d2df-4077-a3a0-4befd06cabdf)

,Hal ini mungkin menghasilkan:

1. Apakah hewan hidup di Amerika Utara?
2. Apakah hewan hidup di Amerika Utara?
3. Di mana hewan tersebut hidup?

Ide di balik hal ini adalah untuk membuat berbagai *tampilan* dari tugas tersebut. Kemudian kita menerapkan masing-masing ke dalam konteks yang diberikan seperti ini:

```
Konteks: Beruang Kermode, kadang-kadang disebut beruang roh (Ursus americanus kermodei), adalah subspesies dari beruang hitam Amerika dan hidup di wilayah Tengah dan Pesisir Utara British Columbia, Kanada.
Pertanyaan: Apakah hewan hidup di Amerika Utara?
```

Kemudian, kita dapat menghasilkan jawaban untuk masing-masing:

1. `Ya`
2. `Ya`
3. `Amerika Utara`

Ini adalah jawaban *intermediate*. Kami perlu memetakan mereka ke label tugas (misalnya Ya atau Tidak).

Kami dapat melakukannya dengan meneruskan jawaban intermediate melalui prompt seperti berikut:

```
Pilih kategori yang benar.

"Kategori":
- Ya, Amerika Utara
- Tidak, bukan Amerika Utara

"Ya" cocok dengan kategori:
```

Sekarang kita bisa mendapatkan jawaban output kita.

1. `Ya, Amerika Utara`
2. `Ya, Amerika Utara`
3. `Ya, Amerika Utara`

Di sini, semuanya setuju, jadi kita hanya mengambil jawaban pertama. Namun, jika mereka tidak setuju, kita bisa menggunakan langkah agregasi AMA untuk mendapatkan jawaban akhir.

### Agregasi Jawaban

AMA menggunakan strategi yang sangat rumit untuk menggabungkan jawaban (lebih rumit daripada DiVeRSe) daripada hanya mengambil mayoritas jawaban. Untuk memahami mengapa mayoritas jawaban mungkin menjadi pilihan yang buruk, pertimbangkan dua pertanyaan yang kita buat sebelumnya:

1. Was the animal living in North America? (Apakah hewan hidup di Amerika Utara?)
2. Does the animal live in North America? (Apakah hewan hidup di Amerika Utara?)

Mereka sangat mirip, sehingga kemungkinan besar menghasilkan hasil yang sama. Karena pertanyaannya sangat mirip, mereka efektif memengaruhi hasil akhir. Untuk menangani ini, AMA bergantung pada supervisi lemah dan matematika yang kompleks untuk memperkirakan ketergantungan antara prompt yang berbeda yang dibuatnya, dan kemudian menggunakan ini untuk menimbangnya dengan tepat.

Jadi, untuk tiga pertanyaan yang kita buat, mungkin ia menetapkan bobot 25%, 25%, dan 50%, karena dua yang pertama sangat mirip.

Meskipun strategi agregasi AMA sangat kuat, begitu rumit sehingga saya tidak akan membahasnya di sini. Baca bagian 3.4 dari paper untuk lebih banyak detail[^4].

### Hasil

- Dengan strategi prompting ini, AMA mampu menggunakan GPT-J-6B[^5] untuk mengungguli GPT-3.
- AMA lebih baik pada pertanyaan di mana konteks yang diberikan berisi jawaban.

## Kesimpulan

Metode ensemble sangat kuat. Mereka dapat digunakan untuk meningkatkan kinerja model apa pun, dan dapat digunakan untuk meningkatkan kinerja model pada tugas tertentu.

Dalam praktiknya, pemungutan suara mayoritas harus menjadi strategi andalan Anda.

---

[^1]: Li, Y., Lin, Z., Zhang, S., Fu, Q., Chen, B., Lou, J.-G., & Chen, W. (2022). On the Advance of Making Language Models Better Reasoners. [↩](https://learnprompting.org/docs/reliability/ensembling#fnref-1)
[^2]: Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems. [↩](https://learnprompting.org/docs/reliability/ensembling#fnref-2)
[^3]: Mitchell, E., Noh, J. J., Li, S., Armstrong, W. S., Agarwal, A., Liu, P., Finn, C., & Manning, C. D. (2022). Enhancing Self-Consistency and Performance of Pre-Trained Language Models through Natural Language Inference. [↩](https://learnprompting.org/docs/reliability/ensembling#fnref-3)
[^4]: Arora, S., Narayan, A., Chen, M. F., Orr, L., Guha, N., Bhatia, K., Chami, I., Sala, F., & Ré, C. (2022). Ask Me Anything: A simple strategy for prompting language models. [↩](https://learnprompting.org/docs/reliability/ensembling#fnref-4)
[^5]: Wang, B., & Komatsuzaki, A. (2021). GPT-J-6B: A 6 Billion Parameter Autoregressive Language Model. [https://github.com/kingoflolz/mesh-transformer-jax.](https://github.com/kingoflolz/mesh-transformer-jax)
[↩](https://learnprompting.org/docs/reliability/ensembling#fnref-5)
