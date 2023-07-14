# 🟡 Pengetahuan yang Dihasilkan

Ide di balik pendekatan pengetahuan yang dihasilkan[^1] adalah untuk meminta LLM menghasilkan informasi yang mungkin berguna tentang pertanyaan atau perintah tertentu sebelum menghasilkan respons akhir.

Misalnya, jika Anda ingin menulis blog post kecil tentang hewan tertentu, seperti [beruang kermode](https://en.wikipedia.org/wiki/Kermode_bear). Sebelum meminta LLM menulis blog post, Anda dapat memintanya untuk menghasilkan beberapa fakta tentang beruang kermode. Ini akan membantu LLM menulis posting blog yang lebih informatif. Ada dua cara sederhana untuk melakukannya.

## Pendekatan satu prompt

Pendekatan pertama meminta LLM untuk menghasilkan pengetahuan kemudian menulis posting, semua dengan satu prompt.

```
Hasilkan 4 fakta tentang Beruang Kermode, kemudian gunakan fakta-fakta ini untuk menulis posting blog singkat dengan informasi:
Beruang Kermode, juga dikenal sebagai beruang hantu, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di wilayah pesisir British Columbia, Kanada.

1. Beruang Kermode adalah subspesies beruang hitam Amerika yang unik, dengan sekitar 10% populasi yang memiliki bulu putih.

2. Beruang Kermode adalah simbol dari orang-orang First Nations British Columbia, dan dianggap sebagai hewan roh.

3. Beruang Kermode adalah bagian penting dari ekosistem, membantu menyebar biji dan menjaga keseimbangan hutan.

4. Beruang Kermode adalah spesies yang dilindungi, dan populasi mereka dipantau dengan ketat oleh pemerintah provinsi.

Beruang Kermode adalah hewan yang unik dan istimewa yang ditemukan di wilayah pesisir British Columbia, Kanada. Sekitar 10% populasi subspesies beruang hitam Amerika ini memiliki bulu putih, membuatnya menjadi pemandangan langka. Beruang Kermode adalah simbol dari orang-orang First Nations British Columbia, dan dianggap sebagai hewan roh. Ini adalah bagian penting dari ekosistem, membantu menyebar biji dan menjaga keseimbangan hutan. Beruang Kermode adalah spesies yang dilindungi, dan populasi mereka dipantau dengan ketat oleh pemerintah provinsi. Ini adalah hewan yang indah dan megah, dan penting bagi kita untuk melakukan bagian kami dalam melindungi dan melestarikan spesies ini.
```

## Pendekatan dua prompt

Dalam pendekatan ini, kita pertama-tama meminta LLM untuk menghasilkan fakta tentang beruang:

```
Hasilkan 10 fakta tentang beruang Kermode:
1. Beruang Kermode, juga dikenal sebagai Beruang Hantu, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada.

2. Beruang Kermode memiliki mantel putih atau krem yang unik, yang disebabkan oleh gen resesif.

3. Beruang Kermode adalah simbol harapan dan pembaharuan bagi orang First Nations British Columbia.

4. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies kekhawatiran khusus oleh Komite Status Satwa Terancam di Kanada.
```

Kemudian, kita memberikan informasi tersebut ke prompt lain untuk menulis posting blog:

```
1. Beruang Kermode, juga dikenal sebagai Beruang Hantu, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada.

2. Beruang Kermode memiliki mantel putih atau krem yang unik, yang disebabkan oleh gen resesif.

3. Beruang Kermode adalah simbol harapan dan pembaharuan bagi orang First Nations British Columbia.

4. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies kekhawatiran khusus oleh Komite Status Satwa Terancam di Kanada.

Gunakan fakta di atas untuk menulis posting blog satu paragraf tentang beruang Kermode:

Beruang Kermode, juga dikenal sebagai Beruang Hantu, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada. Beruang unik ini memiliki mantel putih atau krem yang disebabkan oleh gen resesif dan merupakan simbol harapan dan pembaharuan bagi orang First Nations British Columbia. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies kekhawatiran khusus oleh Komite Status Satwa Terancam di Kanada, menjadikannya bagian penting dari keanekaragaman hayati wilayah.
```

Saya merekomendasikan pendekatan kedua karena dapat menghasilkan konten yang lebih panjang dan lebih dapat diandalkan.

## Use case lainnya

Pendekatan pengetahuan yang dihasilkan sebenarnya diperkenalkan untuk tugas yang sama sekali berbeda, yaitu menjawab pertanyaan sulit. Pertimbangkan pertanyaan berikut, yang GPT-3 menjawab dengan salah:

https://embed.learnprompting.org/?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIGxhcmdlciB0aGFuIENvbmdvLiIsInByb21wdCI6IldoaWNoIGNvdW50cnkgaXMgbGFyZ2VyLCBDb25nbyBvciBTb3V0aCBBZnJpY2E%2FIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D

CATATAN

Contoh ini mungkin tidak akurat. Kami bekerja untuk merevisinya.

Jika kita pertama-tama meminta LLM untuk menghasilkan fakta tentang Kongo dan Afrika Selatan, kita dapat menggunakan informasi tersebut untuk menjawab pertanyaan dengan benar. Secara teori, ini mirip dengan CoT, karena kita efektif mendapatkan LLM untuk menghasilkan penalaran intermediate dalam bentuk fakta terkait.

Mari mulai dengan langkah pertama, ************************menghasilkan pengetahuan************************. Kita dapat meminta LLM untuk menghasilkan fakta tentang Kongo dan Afrika Selatan:

https://embed.learnprompting.org/?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy4iLCJwcm9tcHQiOiJHZW5lcmF0ZSBzb21lIGtub3dsZWRnZSBhYm91dCB0aGUgc2l6ZXMgb2YgU291dGggQWZyaWNhIGFuZCBDb25nbzoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D

Selanjutnya, mari gunakan pengetahuan itu untuk menjawab pertanyaan dengan benar. Ini adalah langkah *integrasi pengetahuan*!

https://embed.learnprompting.org/?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQ29uZ28gaXMgbGFyZ2VyIHRoYW4gU291dGggQWZyaWNhLlxuIiwicHJvbXB0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy5cblxuV2hpY2ggY291bnRyeSBpcyBsYXJnZXIsIENvbmdvIG9yIFNvdXRoIEFmcmljYT8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D

## Diskusi teknis lebih lanjut

Meskipun use case  di atas mirip dengan cara pengetahuan yang dihasilkan diperkenalkan awalnya, ini tidak sepenuhnya sama. Konten di bawah ini mencakup konteks teknis lebih lanjut di mana pendekatan ini diperkenalkan. Hal ini mengikuti pola dua langkah lanjutan (menghasilkan pengetahuan dan integrasi pengetahuan) yang kita lihat di atas.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/3c9eff2b-f8bc-4a86-bc43-34422a0066c6)

Pengetahuan yang Dihasilkan (Liu et al.)

### Menghasilkan Pengetahuan

Dalam langkah menghasilkan pengetahuan, LLM diminta untuk menghasilkan seperangkat fakta tentang **pertanyaan**. LLM diperintah dalam bentuk few-shot seperti yang terlihat di bawah ini. Penggabungan yang berbeda sejumlah M dihasilkan menggunakan prompt yang sama ini (mirip dengan pendekatan self-consistency).

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/e8eab985-7ecc-4523-8b50-7752ce270fa1)

Contoh Pengetahuan yang Dihasilkan (Liu et al.)

### Integrasi Pengetahuan

Selanjutnya, kita menghasilkan pertanyaan "pengetahuan yang ditingkatkan" dan memerintahkan LLM dengan pertanyaan-pertanyaan tersebut untuk mendapatkan jawaban akhir. Cara termudah untuk memahami ini adalah dengan melalui contoh.

Mari kita anggap kita mencoba menjawab **pertanyaan** "Kanguru kebanyakan memiliki anggota badan yang <mask>". Anggaplah bahwa pada tahap pembangkitan pengetahuan kami menghasilkan 2 pengetahuan (M = 2):

- Pengetahuan 1: `Kanguru adalah marsupial yang hidup di Australia.`
- Pengetahuan 2: `Kanguru adalah marsupial yang memiliki 5 anggota badan.`

Kemudian, kami menggabungkan setiap pengetahuan dengan pertanyaan untuk menghasilkan pertanyaan yang ditingkatkan oleh pengetahuan:

- Pertanyaan yang Ditingkatkan oleh Pengetahuan 1: `Kanguru kebanyakan memiliki anggota badan yang <mask\\>. Kanguru adalah marsupial yang hidup di Australia.`
- Pertanyaan yang Ditingkatkan oleh Pengetahuan 2: `Kanguru kebanyakan memiliki anggota badan yang <mask\\>. Kanguru adalah marsupial yang memiliki 5 anggota badan.`

Kita kemudian memerintahkan LLM dengan pertanyaan-pertanyaan yang ditingkatkan oleh pengetahuan ini dan mendapatkan proposal jawaban akhir:

- Jawaban 1: `4`
- Jawaban 2: `5`

Kami memilih jawaban dengan probabilitas tertinggi sebagai jawaban akhir. Probabilitas tertinggi bisa menjadi probabilitas softmax dari token jawaban, atau probabilitas log dari token jawaban.

## Model Bahasa Recitation-Augmented

Pendekatan model bahasa recitation-augmented [^2] mirip dengan pengetahuan yang dihasilkan (pada dasarnya sama). Namun, jauh lebih sedikit kompleksitasnya dari implementasi formal pengetahuan yang dihasilkan.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/768805db-8a5e-4245-a87d-f47baf356e58)

Idenya adalah dengan menggiring model bahasa recitation-augmented ke few-shot prompt untuk menghasilkan informasi dan menjawab dalam satu langkah. Fakta bahwa ini mengulangi / menghasilkan pengetahuan dan menjawab pertanyaan dalam satu langkah adalah perbedaan utama dari pendekatan pengetahuan yang dihasilkan.

Untuk menegaskan kembali, pendekatan ini mempromosikan model dengan beberapa contoh (pertanyaan, pengulangan, jawaban), kemudian menanyakan pertanyaan. Penulis mencatat bahwa pendekatan ini dapat digabungkan dengan konsistensi diri atau jalur penyelesaian ganda.

## Catatan

- Pengetahuan yang dihasilkan menunjukkan peningkatan pada berbagai data set common sense.
- Pengetahuan yang sesuai dengan jawaban terpilih disebut sebagai *pengetahuan terpilih*.
- Dalam praktiknya, Anda dapat mengambil jawaban yang paling sering terjadi sebagai jawaban akhir.

---

[^1]: Liu, J., Liu, A., Lu, X., Welleck, S., West, P., Bras, R. L., Choi, Y., & Hajishirzi, H. (2021). Generated Knowledge Prompting for Commonsense Reasoning. [↩](https://learnprompting.org/docs/intermediate/generated_knowledge#fnref-1)
[^2]: Sun, Z., Wang, X., Tay, Y., Yang, Y., & Zhou, D. (2022). Recitation-Augmented Language Models. [↩](https://learnprompting.org/docs/intermediate/generated_knowledge#fnref-2)
