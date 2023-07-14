# 🟢 Chatbot + Basis Pengetahuan

Perkembangan terbaru dalam model bahasa besar (LLM) seperti [GPT-3](https://arxiv.org/abs/2005.14165) dan [ChatGPT](https://chat.openai.com/chat) telah menciptakan banyak kehebohan dalam industri teknologi. Model-model ini sangat kuat untuk menghasilkan konten, tetapi mereka juga memiliki beberapa kelemahan seperti bias [^1] dan halusinasi [^2]. Salah satu area di mana LLM ini bisa sangat berguna adalah pengembangan chatbot.

## Intent-Base Chatbot / Chatbot Berbasis Niat

Chatbot tradisional biasanya didasarkan pada niat, artinya mereka dirancang untuk merespons niat pengguna tertentu. Setiap niat terdiri dari serangkaian pertanyaan sampel dan jawaban terkait. Misalnya, niat "Cuaca" mungkin mencakup pertanyaan sampel seperti "Bagaimana cuaca hari ini?" atau "Apakah akan hujan hari ini?" dan jawaban seperti "Hari ini akan cerah." Ketika pengguna mengajukan pertanyaan, chatbot mencocokkannya dengan niat yang memiliki pertanyaan sampel paling mirip dan mengembalikan jawaban terkait.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/917d7951-d392-44e5-b89c-3c892231bd49)


Cara kerja intent-based chatbot. Gambar oleh penulis.

Namun, chatbot berbasis niat memiliki masalah tersendiri. Satu masalah adalah bahwa mereka memerlukan sejumlah besar niat tertentu untuk memberikan jawaban tertentu. Misalnya, ucapan pengguna seperti "Saya tidak dapat login", "Saya lupa kata sandi", atau "Kesalahan login" mungkin memerlukan tiga jawaban yang berbeda dan oleh karena itu tiga niat yang berbeda, meskipun semuanya cukup mirip.

## Bagaimana GPT-3 Dapat Membantu

Ini adalah area di mana GPT-3 dapat sangat berguna. Alih-alih memiliki banyak niat yang sangat spesifik, setiap niat dapat lebih luas dan memanfaatkan dokumen dari [basis pengetahuan](https://en.wikipedia.org/wiki/Knowledge_base) Anda. Basis Pengetahuan (Knowledge Based / KB)(https://en.wikipedia.org/wiki/Knowledge_base) adalah informasi yang disimpan sebagai data terstruktur dan tak terstruktur, siap digunakan untuk analisis atau inferensi. KB Anda mungkin terdiri dari serangkaian dokumen yang menjelaskan cara menggunakan produk Anda.

Dengan cara ini, setiap niat artinya terasosiasi dengan dokumen daripada daftar pertanyaan dan jawaban tertentu, misalnya satu niat untuk "masalah login", satu niat untuk "bagaimana cara berlangganan", dan sebagainya. Ketika pengguna mengajukan pertanyaan tentang login, kita dapat menyampaikan dokumen "masalah login" ke GPT-3 sebagai informasi konteks dan menghasilkan jawaban tertentu untuk pertanyaan pengguna.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/48f6a6b5-71c9-4f70-9753-53e56cbcb913)
Cara kerja pemanfaatan GPT-3. Gambar oleh penulis.

Pendekatan ini mengurangi jumlah niat yang perlu dikelola dan memungkinkan jawaban yang lebih cocok untuk setiap pertanyaan. Selain itu, jika dokumen yang terkait dengan niat menggambarkan proses yang berbeda (misalnya, proses untuk "login di situs web" dan yang lainnya untuk "login di aplikasi seluler"), GPT-3 dapat secara otomatis meminta klarifikasi dari pengguna sebelum memberikan jawaban akhir.

## Mengapa Kita Tidak Bisa Mengirim Seluruh KB ke GPT-3?

Saat ini, LLM seperti GPT-3 memiliki ukuran prompt maksimum sekitar 4k token (untuk model `[text-davinci-003] (<https://beta.openai.com/docs/models/gpt-3>)`), yang banyak tetapi tidak cukup untuk memberi makan seluruh basis pengetahuan ke dalam satu prompt. LLM memiliki ukuran prompt maksimum untuk alasan komputasi, karena menghasilkan teks dengan mereka melibatkan sejumlah komputasi yang cepat meningkat seiring peningkatan ukuran prompt.

LLM masa depan mungkin tidak memiliki batasan ini sambil tetap mempertahankan kemampuan penghasilan teks. Namun, untuk saat ini, kita perlu merancang solusi di sekitarnya.

## Bagaimana Chatbot Dengan GPT-3 Bisa Bekerja

Jadi, saluran chatbot dapat terdiri dari dua langkah berikut:

1. Pertama, kita perlu memilih niat yang sesuai untuk pertanyaan pengguna, yaitu kita perlu mengambil dokumen yang tepat dari basis pengetahuan kita.
2. Kemudian, setelah kita memiliki dokumen yang tepat, kita dapat memanfaatkan GPT-3 untuk menghasilkan jawaban yang sesuai untuk pengguna. Dalam melakukan hal ini, kita perlu membuat prompt yang baik.

Langkah pertama pada dasarnya sudah diselesaikan dengan pencarian semantik. Kita dapat menggunakan model yang sudah dilatih dari perpustakaan `[sentence-transformers] (<https://www.sbert.net/examples/applications/semantic-search/README.html>)` dan dengan mudah menetapkan skor untuk setiap dokumen. Dokumen dengan skor tertinggi adalah dokumen yang akan digunakan untuk menghasilkan jawaban chatbot.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b36ba835-7b50-4406-8f14-04e28afa5d21)
Cara kerja chatbot yang memanfaatkan GPT-3. GPT-3 dapat digunakan untuk menghasilkan jawaban yang sesuai dengan memanfaatkan informasi dari dokumen basis pengetahuan. Gambar oleh penulis.

## Menghasilkan Jawaban dengan GPT-3

Setelah kita memiliki dokumen yang tepat, kita perlu membuat prompt yang baik untuk digunakan dengan GPT-3 untuk menghasilkan jawaban. Dalam eksperimen berikut, kita selalu menggunakan model `text-davinci-003` dengan suhu `0,7`.

Untuk membuat prompt, kita akan mencoba menggunakan:

- **[Role-prompting](https://learnprompting.org/docs/basics/roles)**: teknik heuristik yang menetapkan peran tertentu untuk AI.
- **Informasi KB yang relevan**, yaitu dokumen yang diambil pada langkah pencarian semantik.
- **Pesan terakhir yang ditukar antara pengguna dan chatbot**. Ini berguna untuk pesan yang dikirim oleh pengguna di mana konteks lengkap tidak ditentukan. Kita akan melihat contohnya nanti. Lihatlah [contoh ini](https://learnprompting.org/docs/applied_prompting/build_chatgpt) untuk melihat cara mengelola percakapan dengan GPT-3.
- Terakhir, **pertanyaan pengguna**.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b1521c64-4e6f-475b-ba3a-de037852e21b)
Informasi yang digunakan untuk membuat prompt GPT-3 kami. Gambar oleh penulis.

Mari kita mulai prompt kami menggunakan teknik role-prompting.

```
Sebagai chatbot canggih bernama Skippy, tujuan utama Anda adalah membantu pengguna sebaik mungkin.
```

Kemudian, anggaplah langkah pencarian semantik mengekstrak dokumen berikut dari basis pengetahuan kita. Semua dokumen menggambarkan cara kerja produk VideoGram, yang merupakan produk khayalan yang mirip dengan Instagram, tetapi hanya untuk video.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/adb6b88c-0128-4353-bb6a-023b69a33687)
Dokumen yang menjelaskan cara login ke VideoGram. Gambar oleh penulis.

Kita dapat menambahkan kontennya ke dalam prompt seperti ini.

```
Sebagai chatbot canggih bernama Skippy, tujuan utama Anda adalah membantu pengguna sebaik mungkin.

AWAL KONTEKS
Login ke VideoGram dari Situs Web

1. Buka browser web Anda dan masuk ke situs web VideoGram.
2. Klik tombol "Login" yang terletak di pojok kanan atas halaman.
3. Di halaman login, masukkan nama pengguna dan kata sandi VideoGram Anda.
4. Setelah Anda memasukkan kredensial Anda, klik tombol "Login".
5. Anda seharusnya sekarang masuk ke akun VideoGram Anda.

Login ke VideoGram dari Aplikasi Seluler

1. Buka aplikasi VideoGram di perangkat seluler Anda.
2. Di halaman utama, ketuk tombol "Login" yang terletak di pojok kanan bawah.
3. Di halaman login, masukkan nama pengguna dan kata sandi VideoGram Anda.
4. Setelah Anda memasukkan kredensial Anda, ketuk tombol "Login".
5. Anda seharusnya sekarang masuk ke akun VideoGram Anda.
AKHIR KONTEKS
```

Terakhir, kita perlu menambahkan percakapan dan pertanyaan pengguna ke akhir prompt, seperti contoh berikut.

```
Sebagai chatbot canggih bernama Skippy, tujuan utama Anda adalah membantu pengguna sebaik mungkin.

AWAL KONTEKS
Login ke VideoGram dari Situs Web

1. Buka browser web Anda dan masuk ke situs web VideoGram.
2. Klik tombol "Login" yang terletak di pojok kanan atas halaman.
3. Di halaman login, masukkan nama pengguna dan kata sandi VideoGram Anda.
4. Setelah Anda memasukkan kredensial Anda, klik tombol "Login".
5. Anda seharusnya sekarang masuk ke akun VideoGram Anda.

Login ke VideoGram dari Aplikasi Seluler

1. Buka aplikasi VideoGram di perangkat seluler Anda.
2. Di halaman utama, ketuk tombol "Login" yang terletak di pojok kanan bawah.
3. Di halaman login, masukkan nama pengguna dan kata sandi VideoGram Anda.
4. Setelah Anda memasukkan kredensial Anda, ketuk tombol "Login".
5. Anda seharusnya sekarang masuk ke akun VideoGram Anda.
AKHIR KONTEKS

SKIPPY: Hai, saya Skippy! Bagaimana saya bisa membantu Anda?
PENGGUNA: Saya tidak dapat menemukan tombol login.
SKIPPY:
```

Kirim prompt ini ke GPT-3, dan saya mendapatkan jawaban yang dihasilkan berikut.

```
Tidak masalah! Di situs web, tombol login terletak di pojok kanan atas halaman. Pada aplikasi seluler, tombol login terletak di pojok kanan bawah. Beri tahu saya jika Anda memerlukan bantuan lebih lanjut!
```

Perhatikan bagaimana informasi dalam jawaban yang dihasilkan berasal dari dokumen basis pengetahuan.

## Menjelaskan Pertanyaan dengan GPT-3

Mari kita coba dengan ucapan pengguna yang lebih samar, seperti "tidak bisa login". Berikut adalah prompt lengkapnya.

```
Sebagai chatbot canggih bernama Skippy, tujuan utama Anda adalah membantu pengguna sebaik mungkin.

MULAI KONTEKS
Masuk ke VideoGram dari Situs Web
1. Buka browser web Anda dan pergi ke situs web VideoGram.
2. Klik tombol "Login" yang terletak di sudut kanan atas halaman.
3. Di halaman login, masukkan nama pengguna dan kata sandi VideoGram Anda.
4. Setelah Anda memasukkan kredensial Anda, klik tombol "Login".
5. Anda sekarang harus masuk ke akun VideoGram Anda.

Masuk ke VideoGram dari Aplikasi Seluler
1. Buka aplikasi VideoGram di perangkat seluler Anda.
2. Di halaman utama, ketuk tombol "Login" yang terletak di sudut kanan bawah.
3. Di halaman login, masukkan nama pengguna dan kata sandi VideoGram Anda.
4. Setelah Anda memasukkan kredensial Anda, ketuk tombol "Login".
5. Anda sekarang harus masuk ke akun VideoGram Anda.
AKHIR KONTEKS

SKIPPY: Halo, saya Skippy! Bagaimana saya bisa membantu Anda?
PENGGUNA: Tidak bisa login
SKIPPY:
```

GPT-3 menjawab berusaha memahami lebih baik apa masalah pengguna.

```
Maaf mendengarnya. Bisakah Anda memberitahu saya apakah Anda mencoba login melalui situs web atau aplikasi seluler VideoGram?
```

Berikut ini adalah bagaimana seluruh percakapan berlangsung. Prompt lengkapnya disembunyikan untuk visibilitas yang lebih baik.

```
PENGGUNA: Tidak bisa login
SKIPPY: Maaf mendengarnya. Bisakah Anda memberitahu saya apakah Anda mencoba login melalui situs web atau aplikasi seluler VideoGram?
PENGGUNA: Aplikasi seluler
SKIPPY: Oke, tidak ada masalah. Untuk login melalui aplikasi seluler, buka aplikasi VideoGram di perangkat seluler Anda. Di halaman utama, ketuk tombol "Login" yang terletak di sudut kanan bawah. Di halaman login, masukkan nama pengguna dan kata sandi VideoGram Anda. Setelah Anda memasukkan kredensial Anda, ketuk tombol "Login". Anda sekarang harus masuk ke akun VideoGram Anda. Tolong beritahu saya jika Anda membutuhkan bantuan lebih lanjut.

```

GPT-3 dapat mengelola disambiguasi, asalkan memiliki informasi kontekstual yang tepat.

## Masalah dalam Menghasilkan Jawaban dengan GPT-3

Contoh sebelumnya berhasil dengan baik. Namun, ada beberapa cara di mana chatbot ini bisa gagal.

Jika kita bertanya "Apakah aplikasi seluler gratis?" kepada GPT-3 dengan melewatkan dokumen login sebagai konteks, Anda akan sering mendapatkan jawaban seperti "Ya, aplikasi seluler VideoGram gratis untuk diunduh dan digunakan", bahkan jika informasi tersebut tidak terkandung dalam informasi konteks. Menghasilkan informasi palsu sangat buruk bagi chatbot berperan sebagai customer service!

GPT-3 jarang menghasilkan informasi palsu ketika jawaban atas pertanyaan pengguna dapat ditemukan dalam konteks. Karena pertanyaan pengguna seringkali merupakan teks yang pendek dan ambigu, kita tidak dapat mengandalkan langkah pencarian semantis untuk selalu mengambil dokumen yang benar, dan oleh karena itu selalu rentan terhadap pembuatan informasi palsu.

## Kesimpulan

GPT-3 sangat berguna untuk membuat chatbot percakapan dan mampu menjawab serangkaian pertanyaan tertentu berdasarkan informasi kontekstual yang dimasukkan dalam prompt. Namun, sulit membuat model menghasilkan jawaban hanya dengan menggunakan informasi dalam konteks, karena model cenderung halusinasi (yaitu menghasilkan informasi baru, yang berpotensi palsu). Menghasilkan informasi palsu adalah masalah yang berbeda keparahannya tergantung pada kasus penggunaan.

Ditulis oleh [Fabio Chiusano](https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/).

---

[^1]: Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), 5356–5371. https://doi.org/10.18653/v1/2021.acl-long.416
[↩](https://learnprompting.org/docs/applied_prompting/build_chatbot_from_kb#fnref-1)
[^2]: Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y., Madotto, A., & Fung, P. (2022). Survey of Hallucination in Natural Language Generation. ACM Computing Surveys. https://doi.org/10.1145/3571730
[↩](https://learnprompting.org/docs/applied_prompting/build_chatbot_from_kb#fnref-2)
