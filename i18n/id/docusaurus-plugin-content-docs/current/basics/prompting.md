---
sidebar_position: 1
---

# 🟢Prompting

import Prompt from '@site/docs/assets/basics/prompt.svg';

<div style={{textAlign: 'center'}}>
  <Prompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Pada bab sebelumnya, kita membahas AI dan bagaimana manusia dapat menginstruksikan AI untuk melakukan tugas. Proses menginstruksikan sebuah AI untuk melakukan tugas disebut prompting(@shin2020autoprompt). Kami memberi tahu AI serangkaian instruksi (prompt) dan ia menjalankan tugasnya. Prompt bisa sangat sederhana seperti instruksi/pertanyaan, atau sangat kompleks seperti potongan teks yang sangat besar.

Berikut adalah dua contoh prompt:

#### 1) Menyimpulkan Sebuah Artikel

Bayangkan kamu sedang membaca artikel tentang salju di Florida. Anda ingin cepat mendaptkan ide utama dari artikel ini, maka Anda menunjukkan kepada AI apa yang Anda baca, dan minta untuk diberikan ringkasan[^2]:

```
Sangat jarang terjadi salju di Amerika Serikat. negara bagian Florida, terutama di bagian tengah dan selatan negara. Dengan pengecualian daerah paling utara negara bagian, sebagian besar kota-kota besar di Florida tidak pernah mencatatkan curah salju yang bisa diukur, meskipun jumlah jejak telah tercatat, atau flurry di udara teramati beberapa kali setiap abad. Menurut Layanan Cuaca Nasional, di Florida Keys dan Key West tidak ada catatan adanya hempasan salju sejak kolonisasi Eropa di wilayah tersebut lebih dari 300 tahun yang lalu. Di Miami, Fort Lauderdale, dan Palm Beach hanya ada satu laporan yang diketahui tentang debu salju yang teramati di udara dalam lebih dari 200 tahun; hal ini terjadi pada bulan Januari 1977. Dalam setiap kejadian, Miami, Fort Lauderdale, dan Palm Beach belum pernah melihat gerimis salju sebelum atau sesudah acara tahun 1977 ini.

Ringkaslah paragraf ini dalam satu kalimat:
```

Berikut adalah respons dari AI. Ini adalah bacaan yang jauh lebih pendek!

```text
// highlight-start
Salju sangat jarang terjadi di Florida, kecuali di daerah utara yang jauh, dan hanya satu kejadian kerlipan salju di udara yang tercatat di kota-kota besar Miami, Fort Lauderdale, dan Palm Beach dalam 200 tahun terakhir.
// highlight-end
```

#### 2) Menyelesaikan Masalah Matematika Cerita

Jika Anda memiliki dataset persamaan matematika yang ingin Anda model bahasa selesaikan, Anda dapat membuat permintaan dengan menyampaikan pertanyaan "Berapa hasil PERSAMAAN".

Untuk pertanyaan yang diberikan, contoh lengkapnya bisa terlihat seperti ini:

```
Berapa hasil dari 965*590?
```

Untuk prompt ini, GPT-3 (text-davinci-003) (sebuah kecerdasan buatan) kadang-kadang menjawab 569.050 (salah). Inilah saatnya rekayasa yang cepat datang.

# Prompt Engineering

Jika, alih-alih menanyakan `Apakah 965*590?`, kita menanyakan `Pastikan jawaban Anda benar. Berapa hasil dari 965*590? Pastikan jawaban Anda tepat:`, GPT-3 akan menjawab `569350` (benar). Mengapa demikian? Mengapa memberi tahu AI dua kali untuk memberikan jawaban yang benar berguna? Bagaimana cara kita membuat prompt yang menghasilkan hasil optimal di tugas kita? Pertanyaan terakhir ini, khususnya, adalah fokus dari bidang Prompt Engineering, sesuai dengan kursus ini.

:::peringatan
Satu lagi hal, jika Anda menjalankan prompt di GPT-3 di atas, Anda harus mengatur temperatur menjadi 0 untuk menghilangkan acak-acakan.
:::

Lanjutkan membaca untuk mempelajari cara merancang pertanyaan yang baik!

[^2]: Paragraf ini berasal dari https://en.wikipedia.org/wiki/Snow_in_Florida
