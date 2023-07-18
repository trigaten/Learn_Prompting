---
sidebar_position: 30
---

# 🟢 Rekan Belajar

Salah satu cara favorit kami untuk menggunakan LLM adalah sebagai alat belajar! Secara khusus, hal ini berguna untuk menjelaskan istilah-istilah yang membingungkan serta meminta Anda dalam konten ujian.

## Menjelaskan Istilah

Saya baru saja membaca sebuah buku teks tentang kaktus (@nobel2002cacti), dan melihat bagian ini:

```text
Karena adaptasi terhadap kondisi xeric dan keberadaan **kayu kurang modern** di Pereskioideae, Cactaceae adalah salah satu keluarga yang paling menarik dari segi anatomi dan morfologi. 
```

Saya tidak memiliki ide apa yang **kayu hasil turunan kurang** artinya, dan Google hanya menampilkan artikel penelitian tentangnya. Saya memutuskan untuk menggunakan ChatGPT untuk mencari tahu apa artinya. Saya memberikan mereka prompt berikut, yang merupakan bagian sederhana dari buku dan pertanyaan saya.

```text
Karena adaptasi terhadap kondisi kering dan keberadaan kayu yang kurang berkembang di Pereskioideae, Cactaceae adalah salah satu keluarga yang paling menarik secara anatomi dan morfologi. 

Apa arti kayu turunan yang lebih sedikit?

// highlight-start
Dalam konteks ini, "kayu yang kurang berubah" merujuk pada bentuk kayu nenek moyang atau primitif yang ditemukan dalam evolusi awal tumbuhan. Hutan-hutan ini tidak memiliki struktur dan fitur khusus yang berevolusi lebih lanjut pada tanaman yang lebih maju atau canggih. Dalam subkeluarga Pereskioideae dari keluarga Cactaceae, kayunya kurang berbeda dibandingkan dengan subkeluarga lainnya dan lebih mirip dengan kayu yang ditemukan pada tanaman non-kaktus. Kayu yang kurang diperoleh dalam Pereskioideae diyakini sebagai adaptasi terhadap lingkungan yang lebih lembap dan kurang kering di mana tanaman-tanaman ini tumbuh dibandingkan dengan kaktus lainnya.
//highlight-end
```

Model tersebut dapat menjawab pertanyaan saya dengan cepat dan saya bisa melanjutkan membaca saya.

## Menguji Diri Sendiri dengan Quiz

Cara lain untuk menggunakan LLMs sebagai alat bantu belajar adalah dengan menguji diri sendiri. Jika Anda memiliki ujian kalkulus yang akan datang, Anda bisa saja bertanya:

```text
Hasilkan 5 pertanyaan skripsi kalkulus I untuk saya:

// highlight-start
1. Apa turunan dari y = x3?
2. Evaluasi integral tak tentu dari x3 + 5x2 + 7x + 4.
3. Apa aturannya untuk turunan berdasarkan produk?
4. Temukan persamaan dari garis singgung pada y = x2 pada titik (4, 16).
5. Apa turunan kedua dari y = x4?
//highlight-end
```

Jika Anda sedang mempelajari topik yang lebih spesifik, Anda mungkin perlu memberikan informasi tambahan kepada model, misalnya catatan kelas Anda!

```text
20/3/2020 14:30

Catatan Kelas Pemasaran

- Berdiskusi tentang 4P dalam marketing: Product, Price, Place, Promotion
- Perbedaan antara B2C dan B2B: B2C merupakan pasar konsumer langsung, sedangkan B2B adalah hubungan bisnis dengan bisnis
- Perbedaan antara riset pasar: Kuantitatif dan Kualitatif, seperti survey dan focus groups
- Strategi Penentuan Harga: Skimming, Penetrasi, Kompetisi, dan Nilai
- Segmentasi: segmentasi basis pengguna berdasarkan umur, income, dll.
- 4 tipe segmentasi: Demografi, Geografi, Psikografi, dan Tingkah Laku
- Berdiskusi perbedaan alat-alat untuk promosi: Periklanan, Personal Selling, Relasi Publik, Pemasaran Langsung Discussed, Promosi Sales

Buat 5 pertanyaan kuis tentang pemasaran untuk saya berdasarkan catatan saya:

// highlight-start
1. Apa saja 4 P's dari pemasaran?
2. Apa perbedaan antara B2C dan B2B?
3. Apa dua jenis penelitian pasar?
4. Apa saja 4 jenis segmentasi?
5. Nama 5 alat promosi.
//highlight-end
```

## Kesimpulan

Mungkin ada cara lain untuk menggunakan LLMs dalam studi. Banyak perusahaan pembelajaran seperti Duolingo dan Quizlet sedang mengimplementasikan LLM dalam produk mereka.