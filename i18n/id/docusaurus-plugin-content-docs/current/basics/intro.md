---
sidebar_position: 0
---

# 🟢Pendahuluan

import Techniques from '@site/docs/assets/basics/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Bab ini memperkenalkan teknik prompting yang sederhana serta terminologinya. Untuk memahami prompting/prompt engineering, pertama-tama Anda perlu memahami beberapa konsep AI yang *sangat* dasar. Jika Anda sudah mengetahui tentang topik di bawah ini, silakan lanjutkan ke artikel berikutnya [](https://learnprompting.org/docs/basics/prompting).

## Apa itu AI?

Sebagai tujuan kita bersama, kecerdasan buatan (artificial intelligence/AI) adalah sebuah bidang di mana orang menciptakan algoritma "cerdas" yang "berpikir" seperti manusia[^1]. Algoritma ini bisa menulis **esai**, menyelesaikan **masalah matematika**, dan menciptakan **seni**. Kemajuan terbaru dalam bidang ini telah menciptakan AI yang begitu canggih sehingga mereka dapat menulis **email penjualan** yang meyakinkan, **artikel berita**, dan bahkan **memenangkan [kompetisi seni](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/)**.

Ai saat ini merevolusi banyak industri, termasuk **jurnalisme**, **perawatan kesehatan**, dan **edukasi**. Anda kemungkinan akan melihatnya diterapkan di tempat kerja/ruang kelas Anda segera jika Anda belum melakukannya. Meskipun AI sangat berguna, tetapi membutuhkan manusia untuk mengarahkannya pada apa yang harus dilakukan. Sering kali AI seperti anak berusia lima tahun yang sangat cerdas. Mereka bisa melakukan banyak hal, tapi mereka membutuhkan instruksi yang hati-hati untuk melakukannya dengan baik.

Mampu mengarahkan AI dengan baik adalah suatu kemampuan yang sangat kuat. Jadi, bagaimana kamu berkomunikasi dengan mereka? AIs yang dibahas kursus ini memahami bahasa Inggris (dan bahasa lainnya), sehingga kita biasanya hanya perlu menjelaskan tugas yang ingin kita selesaikan. Misalnya, kita memberi perintah kepada AI untuk `Tulis esai mengenai manfaat AI` dan ia akan mengatakan[^2]:

```
Dalam beberapa tahun terakhir, Kecerdasan Buatan (AI) telah menjadi topik hangat di dunia teknologi. Dengan potensinya untuk merevolusi banyak aspek kehidupan kita, AI semakin relevan seiring teknologi terus berkembang. Dari aplikasinya di bidang kesehatan dan transportasi hingga penggunaannya di bidang pendidikan dan manufaktur, AI telah menunjukkan potensi besar untuk mendukung masyarakat dalam berbagai cara.

Manfaat paling jelas dari AI adalah kemampuannya untuk mengotomatiskan tugas-tugas membosankan. Sistem AI dapat digunakan untuk mengotomatisasi operasi berukuran besar, seperti analisis data, layanan pelanggan, dan bahkan produksi barang. Ini membebaskan tenaga kerja manusia untuk fokus pada tugas-tugas kompleks dan kreatif yang membutuhkan kecerdasan dan kecanggihan manusia lebih banyak. AI juga dapat digunakan untuk menganalisis jumlah data yang besar dan membuat keputusan dalam sebagian kecil waktu yang dibutuhkan oleh manusia. Hal ini dapat bermanfaat di industri seperti keuangan, di mana AI dapat mendeteksi pola di pasar saham dan memberikan wawasan yang bisa terlewatkan.

AI juga dapat digunakan untuk membuat prediksi dan menghasilkan wawasan yang dapat digunakan untuk meningkatkan efisiensi dan akurasi. Misalnya, kecerdasan buatan dapat digunakan untuk memprediksi tren dan preferensi pelanggan, membantu bisnis membuat keputusan yang lebih baik dan meningkatkan keuntungan. AI juga dapat digunakan untuk mengidentifikasi risiko dan peluang potensial dalam berbagai industri, seperti keuangan, kesehatan, dan manufaktur. Ini dapat membantu perusahaan membuat keputusan yang berdasar dan mengurangi risiko kesalahan yang mahal.

Akhirnya, AI dapat digunakan untuk meningkatkan pemahaman kita tentang dunia. AI dapat digunakan untuk menganalisis kumpulan data besar dan menghasilkan wawasan yang dapat digunakan untuk lebih memahami dunia di sekitar kita. Ini dapat digunakan untuk membantu kami memahami dampak perubahan iklim dengan lebih baik, mengembangkan pengobatan baru untuk penyakit, dan bahkan memprediksi peristiwa seperti gempa bumi dan banjir.

Secara keseluruhan, Kecerdasan Buatan memiliki potensi untuk merevolusi banyak aspek kehidupan kita. Dari mengotomatiskan tugas-tugas membosankan hingga menghasilkan wawasan dan prediksi, kecerdasan buatan dapat digunakan untuk meningkatkan efisiensi, akurasi, dan pemahaman kita tentang dunia. Seiring dengan perkembangan teknologi, AI akan menjadi semakin relevan dan potensinya untuk memberikan manfaat bagi masyarakat akan semakin besar.
```

## Mengapa saya harus peduli?

AI dapat digunakan untuk mengotomatisasi tugas yang Anda habiskan berjam-jam melakukannya *saat ini*. Kami telah menyebutkan beberapa contoh di atas, tetapi Anda juga dapat mempertimbangkan tugas yang sedikit berulang yang Anda lakukan. Ini bisa menulis email, menulis laporan, atau bahkan menulis kode. Jika Anda dapat menjelaskan tugas kepada sebuah AI, kemungkinan AI tersebut dapat melakukannya untuk Anda atau setidaknya memberikan titik awal kepada Anda.

## Bagaimana cara memulai?

Baca sisa bab ini, kemudian lihat bab lain yang menarik minat Anda. Secara khusus pada bagian [prompting terapan](https://learnprompting.org/docs/applied_prompting/overview) mungkin menarik jika Anda ingin melihat bagaimana para profesional menggunakan AI untuk mengotomasi pekerjaan mereka. Anda dapat bereksperimen dengan AI menggunakan sumber daya seperti [Playground](https://beta.openai.com/playground), [IDE lain](https://learnprompting.org/docs/tooling/IDEs/intro), atau menggunakan embeds yang [interaktif](https://learnprompting.org/docs/basics/intro#embeds) yang akan Anda jumpai dalam situs ini.

Sebelum membaca artikel selanjutnya, penting untuk dicatat bahwa Anda tidak memerlukan latar belakang teknis apa pun untuk melakukan rekayasa cepat. Sebagian besar adalah coba-coba, dan Anda bisa belajar seiring berjalannya waktu.

### Embeds

Kursus ini menawarkan pengalaman belajar interaktif. Anda dapat bereksperimen dengan latihan yang dibahas dalam kursus menggunakan [menyematkan](https://embed.learnprompting.org/) yang ditempatkan di seluruh situs.

Berikut adalah gambar **** dari tampilan yang disisipkan:

import dyno from '@site/docs/assets/basics/dyno_example.webp';
import key from '@site/docs/assets/basics/API_key.webp';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}}/>
</div>

Anda seharusnya dapat melihat sebuah embed yang terlihat persis seperti gambar ini tepat di bawah paragraf ini. Jika Anda tidak bisa, Anda mungkin perlu mengaktifkan JavaScript atau menggunakan browser yang berbeda.

<hr />
Masukkan di sini:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr />

Anggap saja Anda bisa melihatnya, klik tombol **Generate**. Jika ini merupakan kali pertama Anda menggunakannya (atau Anda menggunakan browser baru/cookies di browser Anda hapus), Anda diminta untuk memasukkan [OpenAI API key](https://platform.openai.com/account/api-keys). Anda dapat mendapatkan kunci gratis dengan mengklik [tautan ini](https://platform.openai.com/account/api-keys) dan mendaftar untuk akun OpenAI. Kunci ini memungkinkan Anda menggunakan AI OpenAI untuk menghasilkan teks dalam penanaman.

:::catatan
Meskipun OpenAI menyediakan kredit gratis, pada akhirnya Anda harus membayar untuk menggunakan kecerdasan buatan mereka. Beruntung, harganya [relatif murah](https://openai.com/pricing)!
:::

Ketika Anda dapat mengakses halaman [OpenAI API key](https://platform.openai.com/account/api-keys), klik tombol**Create new secret key**. Ini akan muncul sebuah modal yang berisi sebuah string teks seperti ini:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={key} style={{width: "750px"}} />
</div>

Masukkan kunci ini ke dalam embed dan tekan **Simpan**. Sekarang Anda seharusnya dapat menggunakan embed di seluruh situs ini.

Sekarang Anda memiliki semua informasi yang Anda butuhkan untuk memulai. Selamat Belajar!


[^1]: Secara teknis, mereka tidak "berpikir" seperti manusia, tetapi ini adalah cara yang sederhana untuk menjelaskan.
[^2]: An AI (GPT-3 davinci-003) memang menulis ini.
