# 🟢Pendahuluan

Bab ini memperkenalkan teknik prompting sederhana beserta terminologi. Untuk memahami prompting/prompt engineering, pertama-tama Anda perlu memahami beberapa konsep AI yang sangat dasar. Jika Anda sudah mengetahui topik di bawah ini, silakan lewati ke artikel berikutnya.

## Apa itu AI?

Sebagai tujuan kita bersama, kecerdasan buatan (artificial intelligence/AI) adalah sebuah bidang di mana orang menciptakan algoritma "cerdas" yang "berpikir" seperti manusia [^1]. Algoritma ini bisa menulis **esai**, menyelesaikan **masalah matematika**, dan menciptakan **seni**. Kemajuan terbaru dalam bidang ini telah menciptakan AI yang begitu canggih sehingga mereka dapat menulis email **penjualan yang meyakinkan**, **artikel berita**, dan bahkan memenangkan **kompetisi seni**.

AI saat ini merevolusi banyak industri, termasuk **jurnalisme**, **perawatan kesehatan**, dan **pendidikan**. Anda kemungkinan akan melihatnya diterapkan di tempat kerja/kelas Anda segera jika Anda belum pernah melihatnya. Meskipun AI sangat berguna, ia membutuhkan manusia untuk mengarahkannya tentang apa yang harus dilakukan. Seringkali, AI seperti anak lima tahun yang sangat pintar. Mereka bisa melakukan banyak hal, tetapi mereka membutuhkan instruksi yang hati-hati untuk melakukannya dengan baik.

Mampu mengarahkan AI dengan benar adalah keterampilan yang sangat kuat. Jadi, bagaimana Anda berkomunikasi dengan mereka? AI yang dibahas dalam kursus ini memahami bahasa Inggris (dan bahasa lainnya), sehingga kita biasanya hanya perlu mendeskripsikan tugas yang ingin kita lakukan. Misalnya, kita bisa memberitahu AI untuk **menulis esai tentang manfaat AI** dan ia akan mengatakan[^2]:

```
Dalam beberapa tahun terakhir, Kecerdasan buatan (AI) telah menjadi topik hangat di antara dunia teknologi. Dengan potensinya untuk merevolusi banyak aspek kehidupan kita, AI semakin relevan seiring dengan perkembangan teknologi. Dari aplikasinya di bidang kesehatan dan transportasi hingga penggunaannya di bidang pendidikan dan manufaktur, AI telah menunjukkan potensi besar untuk memberikan manfaat bagi masyarakat dalam banyak cara.

Manfaat paling jelas dari AI adalah kemampuannya untuk mengotomatisasi tugas-tugas yang membosankan. Sistem AI dapat digunakan untuk mengotomatisasi operasi skala besar, seperti analisis data, layanan pelanggan, dan bahkan produksi barang. Hal ini membebaskan tenaga kerja manusia untuk fokus pada tugas-tugas yang kompleks, kreatif yang membutuhkan lebih banyak kecerdasan dan keinginan. AI juga dapat digunakan untuk menganalisis jumlah data yang besar dan membuat keputusan dalam sebagian kecil waktu yang dibutuhkan manusia. Hal ini dapat bermanfaat di industri seperti keuangan, di mana AI dapat mendeteksi pola di pasar saham dan menawarkan wawasan yang sebaliknya tidak akan terlihat.

AI juga dapat digunakan untuk membuat prediksi dan menghasilkan wawasan yang dapat digunakan untuk meningkatkan efisiensi dan akurasi. Misalnya, AI dapat digunakan untuk memprediksi tren dan preferensi pelanggan, membantu bisnis membuat keputusan yang lebih baik dan meningkatkan keuntungan. AI juga dapat digunakan untuk mengidentifikasi risiko dan peluang potensial di berbagai industri, seperti keuangan, kesehatan, dan manufaktur. Hal ini dapat membantu perusahaan membuat keputusan yang bijaksana dan mengurangi risiko kesalahan yang mahal.

Terakhir, AI dapat digunakan untuk meningkatkan pemahaman kita tentang dunia. AI dapat digunakan untuk menganalisis kumpulan data besar dan menghasilkan wawasan yang dapat digunakan untuk lebih memahami dunia di sekitar kita. Ini dapat digunakan untuk membantu kita lebih memahami dampak perubahan iklim, mengembangkan pengobatan baru untuk penyakit, dan bahkan memprediksi peristiwa seperti gempa bumi dan banjir.

Secara keseluruhan, AI memiliki potensi untuk merevolusi banyak aspek kehidupan kita. Dari mengotomatisasi tugas-tugas membosankan hingga menghasilkan wawasan dan prediksi, AI dapat digunakan untuk meningkatkan efisiensi, akurasi, dan pemahaman kita tentang dunia. Seiring dengan perkembangan teknologi, AI akan semakin relevan dan potensinya untuk memberikan manfaat bagi masyarakat akan semakin berkembang.
```

## Mengapa saya harus peduli?

AI dapat digunakan untuk mengotomatisasi tugas-tugas yang Anda habiskan berjam-jam lakukan *sekarang*. Kami telah menyebutkan beberapa contoh di atas, tetapi Anda juga bisa mempertimbangkan tugas yang sedikit berulang yang Anda lakukan. Ini bisa menulis email, menulis laporan, atau bahkan menulis kode. Jika Anda bisa mendeskripsikan tugas tersebut ke AI, ia mungkin bisa melakukannya untuk Anda atau setidaknya memberi Anda titik awal.

## Bagaimana cara memulai?

Baca sisa bab ini, lalu periksa bab lain yang menarik minat Anda. Secara khusus, bagian [prompting terapan](https://learnprompting.org/docs/applied_prompting/overview) mungkin menarik minat Anda jika Anda ingin melihat bagaimana para profesional menggunakan AI untuk mengotomatisasi pekerjaan mereka. Anda bisa bereksperimen dengan AI menggunakan sumber daya seperti [Playground](https://beta.openai.com/playground), [IDE lainnya](https://learnprompting.org/docs/tooling/IDEs/intro), atau hanya menggunakan interactive [embeds](https://learnprompting.org/docs/basics/intro#embeds) yang akan Anda lihat di seluruh situs ini.

Sebelum membaca artikel berikutnya, penting untuk dicatat bahwa Anda tidak perlu memiliki latar belakang teknis untuk melakukan prompt engineering. Trial dan error adalah hal yang baik, dan Anda dapat belajar seiring berjalannya waktu.

### Embeds

Kursus ini menawarkan pengalaman pembelajaran interaktif. Anda bisa bereksperimen dengan latihan yang dibahas dalam kursus menggunakan embed yang ditempatkan di seluruh situs.

Berikut adalah **gambar** dari apa yang terlihat seperti embed:

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/564161bf-6a74-465c-8c28-1b1ff44db93f)


Anda seharusnya bisa melihat embed yang terlihat persis seperti gambar ini tepat di bawah paragraf ini. Jika Anda tidak dapat melihatnya, Anda mungkin perlu mengaktifkan JavaScript atau menggunakan browser yang berbeda.

---

Embed di sini: 

https://embed.learnprompting.org/?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D

---

Dengan asumsi bahwa Anda dapat melihatnya, klik tombol **Generate**. Jika ini adalah pertama kalinya Anda menggunakannya (atau Anda berada di browser baru/bersihkan cookie), ia akan meminta Anda memasukkan API key dari OpenAI. Anda bisa mendapatkan key gratis dengan mengklik [link ini](https://platform.openai.com/account/api-keys) dan mendaftar untuk akun OpenAI. Key ini memungkinkan Anda untuk menggunakan AI OpenAI untuk menghasilkan teks dalam embed.

> CATATAN
Meskipun OpenAI menyediakan kredit gratis, Anda pada akhirnya harus membayar untuk menggunakan AI mereka. Untungnya, itu [relatif murah](https://openai.com/pricing)!
> 

Ketika Anda menavigasi ke halaman kunci API OpenAI, klik tombol **Buat kunci rahasia baru**. Ini akan memunculkan sebuah bagian yang berisi string teks seperti ini:

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/e3fbf787-d791-4c40-aa39-56c11df2964e)


Masukkan key ini ke dalam embed dan klik **Simpan**. Sekarang Anda seharusnya bisa menggunakan embed di seluruh situs ini.

Sekarang Anda memiliki semua informasi yang Anda butuhkan untuk memulai. Selamat belajar!

---

[^1]: Secara teknis, mereka tidak "berpikir" seperti manusia, tetapi ini adalah cara yang sederhana untuk menjelaskannya. [↩](https://learnprompting.org/docs/basics/intro#fnref-1)
[^2]: Sebuah AI (GPT-3 davinci-003) memang menulis ini. [↩](https://learnprompting.org/docs/basics/intro#fnref-2)
