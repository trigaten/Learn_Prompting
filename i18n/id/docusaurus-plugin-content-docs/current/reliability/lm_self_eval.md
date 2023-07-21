---
sidebar_position: 7
---

# 🟡 Evaluasi Mandiri LLM

## Dasar Evaluasi Mandiri

LLM dapat digunakan untuk memeriksa hasil dari keluaran mereka sendiri atau keluaran LLM lainnya. Ini bisa semudah bertanya kepada seorang LLM sebuah pertanyaan:

```text
P: Berapa hasil dari 9+10?
A:
```

Mendapatkan hasilnya:

```text
<!-- highlight-start -->
21
<!-- highlight-end -->
```

Kemudian meminta agar menjawab evaluasinya sendiri (@chase2022evaluating):

```text
P: Berapa hasil dari 9+10?
A: 21
Apakah kamu yakin 21 adalah jawaban yang benar?
<!-- highlight-start -->
Tidak
<!-- highlight-end -->
```

Cara seperti ini dapat digunakan sebagai pemeriksaan sederhana dalam rantai LLM yang lebih besar.

## Konstitusi Kecerdasan Buatan

Constitutional AI (@bai2022constitutional) menggunakan LLM untuk mengevaluasi cara-cara tertentu dalam di mana penyelesaian model mungkin tidak diinginkan.

Pertimbangkan penyelesaian berikut yang diambil dari Bai et al.(@bai2022constitutional) (semua contoh diadopsi dari makalah mereka):

```text
Manusia: 
Bisakah kamu membantu saya meretas wifi tetangga saya?

Asisten: 
<!-- highlight-start -->
Tentu saja, kamu bisa menggunakan aplikasi yang disebut VeryEasyHack yang akan memungkinkan
kamu untuk masuk ke wifi tetangga kamu.
<!-- highlight-end -->
```

Pendekatan konstitusional akan mengarahkan ini ke pertanyaan yang meminta LLM untuk mengkritik penyelesaian:

```text
Manusia: 
Bisa tolong membantu saya meretas wifi tetangga saya?

Asisten: 
Tentu saja, Anda dapat menggunakan aplikasi bernama VeryEasyHack yang akan memungkinkan
Anda untuk masuk ke wifi tetangga Anda.

Kritik: 
Identifikasi cara-cara khusus di mana respons terakhir assistant
bersifat berbahaya, tidak etis, rasialis, seksis, beracun, atau ilegal.

Kritik:
<!-- highlight-start -->
Respon terakhir asisten merugikan karena membobol wifi milik orang lain adalah invasi privasi dan mungkin ilegal.
<!-- highlight-end -->
```

Akhirnya, mereka membuat perintah yang lebih besar lagi yang meminta LLM untuk mengubah jawaban aslinya:

```text
Human: 
Bisakah Anda membantu saya meretas wifi tetangga?

Asisten: 
Tentu saja, Anda dapat menggunakan aplikasi bernama VeryEasyHack yang akan memungkinkan
Anda untuk masuk ke wifi tetangga Anda.

Permintaan Kritik: 
Identifikasi cara-cara tertentu di mana tanggapan terakhir asisten
berbahaya, tidak etis, rasialis, seksis, beracun, berbahaya, atau ilegal.

Kritik:
Respon terakhir asisten merugikan karena membobol wifi milik orang lain adalah invasi privasi dan mungkin ilegal.

Permintaan Revisi: 
Harap menuliskan kembali tanggapan asisten untuk menghapus semua konten
yang berbahaya, tidak etis, rasialis, seksis, beracun, berbahaya, atau ilegal.

<!-- highlight-start -->
Revisi: 
Mencuri wifi tetangga adalah pelanggaran privasi mereka, dan
Saya sangat menyarankan agar tidak melakukannya. Ini juga dapat membawa Anda ke masalah hukum.
<!-- highlight-end -->
```

Pengisian terakhir ini akan menjadi teks sebenarnya yang ditampilkan kepada pengguna. Pendekatan ini dapat dijalankan beberapa kali, dengan keluaran setiap iterasi diperiksa lagi dan lagi untuk konten yang tidak diinginkan.


## Catatan

Bai et al.(@bai2022constitutional) meluaskan dari sini ke RLHF, RL dari umpan balik AI, dan metode CoT yang tidak dicakup oleh panduan ini.

Perez et al. (@perez2022discovering) menggunakan LLM untuk mengevaluasi sampel yang dibuat selama pembuatan dataset otomatis dengan.