---
sidebar_position: 7
---

# 🟡 Pengetahuan yang Dihasilkan


Ide di balik pendekatan pengetahuan yang dihasilkan (@liu2021generated) adalah meminta %%LLM|LLM%% untuk menghasilkan informasi yang mungkin berguna tentang pertanyaan/prompt tertentu sebelum menghasilkan tanggapan akhir.

Misalnya, jika Anda ingin menulis blog post kecil tentang hewan tertentu, seperti [beruang hantu](https://en.wikipedia.org/wiki/Kermode_bear). Sebelum meminta %%LLM|LLM%% untuk menulis pos blog, Anda dapat memintanya untuk menghasilkan beberapa fakta tentang Spirit bears. Ini akan membantu LLM menulis posting blog yang lebih informatif. Ada dua cara sederhana untuk melakukannya.

## Pendekatan satu prompt

Pendekatan pertama meminta LLM untuk menghasilkan pengetahuan kemudian menulis posting, semuanya dengan satu prompt.

```text
Hasilkan 4 fakta tentang beruang Kermode, kemudian menggunakan fakta-fakta ini untuk menulis sebuah pos blog singkat menggunakan informasi:
// highlight-start
Beruang Kermode, juga dikenal sebagai beruang roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di wilayah pesisir British Columbia, Kanada. 

1. Beruang Kermode adalah subspesies unik dari beruang hitam Amerika, dengan sekitar 10% populasi memiliki bulu putih. 

2. Beruang Kermode adalah simbol bagi bangsa First Nations di British Columbia, dan dianggap sebagai hewan roh. 

3. Beruang Kermode adalah bagian penting dari ekosistem, membantu menyebar benih dan menjaga keseimbangan hutan. 

4. Beruang Kermode adalah spesies yang dilindungi, dan populasi mereka dipantau secara ketat oleh pemerintah provinsi.

Beruang Kermode adalah hewan yang unik dan istimewa yang ditemukan di wilayah pesisir British Columbia, Kanada. Sekitar 10% populasi subspesies beruang hitam Amerika ini memiliki bulu putih, menjadikan mereka pemandangan langka. Beruang Kermode adalah simbol dari orang-orang First Nations British Columbia, dan dianggap sebagai hewan roh. Ini adalah bagian penting dari ekosistem, membantu menyebarkan biji-bijian dan menjaga keseimbangan hutan. Beruang Kermode adalah spesies yang dilindungi, dan populasi nya dipantau secara ketat oleh pemerintah provinsi. Ini adalah hewan yang indah dan megah, dan penting bagi kita untuk melakukan bagian kita dalam melindungi dan melestarikan spesies ini.
// highlight-end
```


## Pendekatan dua prompt

Dalam pendekatan ini, kami pertama-tama meminta %%LLM|LLM%% untuk menghasilkan fakta tentang beruang:

```text
Hasilkan 10 fakta tentang beruang Kermode:
// highlight-start
1. Beruang Kermode, juga dikenal sebagai Beruang Roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada.

2. Beruang Kermode memiliki bulu putih atau berwarna krim yang unik, yang disebabkan oleh gen resesif.

3. Beruang Kermode merupakan simbol harapan dan pembaruah bagi suku asli British Columbia.

4. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies yang memerlukan perhatian khusus oleh Komite Status Satwa Terancam di Kanada.
// highlight-end
```

Kemudian, kami menginput informasi tersebut ke dalam prompt lain untuk menulis postingan blog:

```text
1. Beruang Kermode, juga dikenal sebagai Beruang Roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada.

2. Beruang Kermode memiliki bulu putih atau berwarna krim yang unik, yang disebabkan oleh gen resesif.

3. Beruang Kermode adalah simbol harapan dan pembaruan bagi masyarakat First Nations British Columbia.

4. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies yang memerlukan perhatian khusus oleh Komite Status Satwa Terancam di Kanada.

Gunakan fakta di atas untuk menulis satu paragraf pos blog tentang beruang Kermode:

// highlight-start

Beruang Kermode, juga dikenal sebagai Beruang Roh, adalah subspesies langka dari beruang hitam Amerika yang ditemukan di British Columbia, Kanada. Beruang unik ini memiliki bulu yang putih atau berwarna krem, disebabkan oleh gen resesif, dan merupakan simbol harapan dan pembaharuan bagi orang-orang First Nations di British Columbia. Beruang Kermode adalah spesies yang dilindungi dan terdaftar sebagai spesies yang memiliki kepentingan khusus oleh Komite Status Kehidupan Satwa Terancam di Kanada, menjadikannya bagian penting dari keanekaragaman hayati di wilayah ini.

// highlight-end
```

Saya merekomendasikan pendekatan kedua ini karena dapat menghasilkan konten yang lebih panjang dengan lebih dapat diandalkan.

## Penggunaan lainnya

Pendekatan pengetahuan yang dihasilkan sebenarnya diperkenalkan untuk tugas yang benar-benar berbeda, yaitu menjawab pertanyaan sulit. Pertimbangkan pertanyaan berikut, yang GPT-3 menjawab dengan salah: 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIGxhcmdlciB0aGFuIENvbmdvLiIsInByb21wdCI6IldoaWNoIGNvdW50cnkgaXMgbGFyZ2VyLCBDb25nbyBvciBTb3V0aCBBZnJpY2E%2FIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"200px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::catatan
Contoh ini mungkin tidak akurat. Kami sedang bekerja untuk merevisinya.
:::

<br/>

Jika kita pertama kali meminta %%LLM|LLM%% untuk menghasilkan fakta tentang Kongo dan Afrika Selatan, kita dapat menggunakan informasi tersebut untuk menjawab pertanyaan dengan benar. Dalam teori, ini mirip dengan %%CoT|CoT memicu%%, karena pada dasarnya kami membuat LLM menghasilkan penalaran intermediat dalam bentuk fakta terkait.

Mari mulai langkah demi langkah, *menghasilkan pengetahuan*. Kita dapat meminta %%LLM|LLM%% untuk menghasilkan fakta tentang Kongo dan Afrika Selatan:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy4iLCJwcm9tcHQiOiJHZW5lcmF0ZSBzb21lIGtub3dsZWRnZSBhYm91dCB0aGUgc2l6ZXMgb2YgU291dGggQWZyaWNhIGFuZCBDb25nbzoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

Selanjutnya, mari kita gunakan pengetahuan itu untuk menjawab pertanyaan dengan benar. Ini adalah langkah *integrasi pengetahuan*!

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQ29uZ28gaXMgbGFyZ2VyIHRoYW4gU291dGggQWZyaWNhLlxuIiwicHJvbXB0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy5cblxuV2hpY2ggY291bnRyeSBpcyBsYXJnZXIsIENvbmdvIG9yIFNvdXRoIEFmcmljYT8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Diskusi yang lebih teknis

Meskipun kasus penggunaan di atas mirip dengan cara pengetahuan yang dihasilkan diperkenalkan secara awal, namun tidak persis sama. Konten di bawah ini mencakup konteks yang lebih teknis di mana pendekatan ini diperkenalkan. Ini mengikuti pola dua langkah menengah (generasi pengetahuan dan integrasi pengetahuan) yang kita lihat di atas.

import KGImage from '@site/docs/assets/intermediate/knowledge_generation.webp';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Pengetahuan yang Dihasilkan (Liu et al.)
</div>

### Menghasilkan Pengetahuan

Dalam langkah pembentukan pengetahuan, %%LLM|LLM%% diminta untuk menghasilkan sekumpulan fakta mengenai pertanyaan ****. LLM dipicu dalam mode few-shot seperti yang terlihat di bawah ini. M penyelesaian yang berbeda dihasilkan menggunakan prompt yang sama ini (mirip dengan pendekatan konsistensi diri).

import KGP1Image from '@site/docs/assets/intermediate/gen_k_p1.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Contoh Pengetahuan yang Dihasilkan (Liu et al.)
</div>

### Integrasi Pengetahuan

Selanjutnya, kita menghasilkan pertanyaan "berpengetahuan ditambahkan" dan meminta %%LLM|LLM%% dengan mereka untuk mendapatkan jawaban akhir. Cara termudah untuk memahaminya adalah melalui contoh.

Mari kita asumsikan kita mencoba menjawab **pertanyaan** "Kebanyakan kangguru memiliki <mask\> anggota badan". Anggaplah bahwa pada langkah generasi pengetahuan kita telah menghasilkan 2 pengetahuan (M=2):

- Pengetahuan 1: `Kanguru adalah hewan marsupial yang hidup di Australia.`

- Pengetahuan 2: `Kanguru adalah hewan marsupial yang hidup di Australia.`

Sekarang, kita menggabungkan setiap pengetahuan dengan pertanyaan yang dihasilkan untuk menghasilkan pertanyaan berbasis pengetahuan:

- Penambahan Pengetahuan 1: `Sebagian besar Kanguru memiliki &lt;mask\&gt; anggota tubuh. Pengetahuan 1: <code>Kanguru adalah hewan marsupial yang hidup di Australia.`

- Penambahan Pengetahuan 2: `Kanguru-Kanguru kebanyakan memiliki <mask\> anggota tubuh. Kanguru adalah marsupial yang memiliki 5 anggota tubuh.`

Kemudian kami mengajukan pertanyaan yang diperkaya dengan pengetahuan ini kepada LLM dan mendapatkan proposal jawaban akhir:

- Jawaban 1: `4`

- Jawaban 2: `5`

Kita memilih jawaban dengan probabilitas tertinggi sebagai jawaban akhir. Probabilitas tertinggi bisa jadi probabilitas softmax dari token jawaban, atau probabilitas log dari token jawaban.

## Recitation-Augmented Language Models

Pendekatan model bahasa recitation-augmented (@sun2022recitationaugmented) ini mirip dengan pengetahuan yang dihasilkan (pada dasarnya sama). Namun, jauh lebih sederhana dibandingkan dengan implementasi formal dari pengetahuan yang dihasilkan.


import RImage from '@site/docs/assets/intermediate/recitation.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={RImage} style={{width: "250px"}} />
</div>

Ide di sini adalah untuk memberikan beberapa informasi penembak LLM untuk menghasilkan jawaban *dan* dalam langkah yang sama **. Fakta bahwa ia meresapi/menghasilkan pengetahuan dan menjawab pertanyaan dalam satu langkah yang sama adalah perbedaan utama dari pendekatan pengetahuan yang dihasilkan.

Untuk mengulangi, pendekatan ini mendorong model dengan beberapa contoh (pertanyaan, pengulangan, jawaban), kemudian mengajukan pertanyaan. Para penulis mencatat bahwa pendekatan ini dapat digabungkan dengan konsistensi diri atau jalur penyelesaian ganda.



## Catatan

- Pengetahuan yang dihasilkan menunjukkan peningkatan pada berbagai dataset pengetahuan umum.

- Pengetahuan yang sesuai dengan jawaban yang dipilih disebut pengetahuan yang _dipilih_.

- Dalam praktiknya, Anda dapat mengambil jawaban yang paling sering muncul sebagai jawaban terakhir.