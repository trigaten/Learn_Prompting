# 🟢 Mulai Perjalanan Anda

Sekarang setelah Anda telah mempelajari dasar-dasar teknik prompt engineering, Anda siap untuk memulai prompt engineering sendiri. Sisa kursus ini akan berisi teknik dan sumber daya tambahan, tetapi cara terbaik untuk belajar PE adalah dengan mulai bereksperimen dengan prompt Anda sendiri. Halaman ini akan menunjukkan cara memulai memecahkan masalah prompt engineering yang sembarang.

Misalkan Anda ingin prompt yang akan menghasilkan cerita interaktif yang imersif dengan ChatGPT.

## Langkah 1: Penelitian

Hal pertama yang harus dilakukan adalah meneliti prompt yang Anda inginkan. Selain dari Googling, sumber daya berikut sangat berharga:

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com/)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (dan subreddit serupa)
- [Learn Prompting Discord](https://discord.gg/learn-prompting) (dan Discord relevan lainnya, termasuk [OpenAI Discord](https://discord.gg/openai))

Anda mungkin menemukan [ini](https://prompts.chat/#act-as-a-text-based-adventure-game) oleh [Heroj04](https://github.com/Heroj04) sebagai titik awal yang baik:

> Saya ingin Anda berperan sebagai game petualangan berbasis teks. Saya akan mengetik perintah dan Anda akan membalas dengan deskripsi tentang apa yang dilihat karakter. Saya ingin Anda hanya membalas keluaran game dalam satu blok kode unik, dan tidak ada yang lain. Jangan menulis penjelasan. Jangan mengetik perintah kecuali saya memerintahkan untuk melakukannya. Ketika saya perlu memberi tahu Anda sesuatu dalam bahasa Inggris, saya akan melakukannya dengan menaruh teks di dalam kurung kurawal {seperti ini}. Perintah pertama saya adalah bangun.
> 

## Langkah 2: Bereksperimen

Sekarang, kita akan memasukkan prompt ke dalam ChatGPT dan melihat apa yang terjadi.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/99cf3ac3-db39-4957-8d30-908deefa50cd)

Kita dapat melihat AI telah menghasilkan cerita, tetapi ditulis dalam blok kode csharp (bahasa pemrograman). Mungkin kita tidak menginginkan ini, jadi kita akan memodifikasi prompt menjadi:

> Saya ingin Anda berperan sebagai game petualangan berbasis teks. Saya akan mengetik perintah dan Anda akan membalas dengan deskripsi tentang apa yang dilihat karakter. Jangan menulis penjelasan. Perintah pertama saya adalah bangun.
> 

**Respon ChatGPT**:

```
Anda perlahan membuka mata dan menemukan diri Anda terbaring di tanah yang dingin dan keras. Ketika Anda melihat sekeliling, Anda menyadari bahwa Anda berada di dalam gua yang redup. Udara lembab dan bau, dan Anda bisa mendengar suara air menetes di suatu tempat di kejauhan. Kepala Anda sakit dan Anda merasa bingung. Anda perlu mencari tahu di mana Anda berada dan bagaimana cara keluar dari sini.
```

Baiklah, sekarang keluaran ceritanya dalam bentuk teks biasa. Namun, prompt kami kurang detail. Mari tambahkan struktur yang lebih banyak ke prompt:

> Saya ingin Anda berperan sebagai game petualangan berbasis teks. Saya akan mengetik perintah dan Anda akan membalas dengan deskripsi tentang apa yang dilihat karakter. Jangan menulis penjelasan. Gunakan bahasa yang indah dan kata-kata deskriptif. Pengaturan adalah sebuah desa cottage core, di mana si kerdil dan katak berkeliaran bebas dan memiliki derajat yang sama. Setiap kali Anda berbicara, mulai paragraf Anda dengan WAKTU, LOKASI, TEMAN (siapa yang bersama Anda), ITEM (barang apa yang Anda miliki). Perintah pertama saya adalah bangun.
> 

**Respon ChatGPT**:

```
WAKTU: Pagi hari
LOKASI: Sebuah rumah kecil yang nyaman di sebuah desa yang dikelilingi oleh tanaman hijau dan bunga yang harum.
TEMAN: Anda sendirian di kamar tidur Anda, terlelap di bawah selimut yang nyaman.
ITEM: Anda melihat meja samping kayu di samping tempat tidur Anda, dan sebuah keranjang penuh bunga segar di ambang jendela.

Ketika Anda bangun, Anda merasakan kehangatan sinar matahari menyaring melalui jendela dan suara gemericik lembut burung di luar. Anda duduk di tempat tidur dan merentangkan lengan Anda, mengambil pemandangan bunga yang indah mekar di luar. Keributan lembut dari dedaunan dan angin lembut membawa Anda rasa damai dan ketenangan. Anda merasa segar dan bugar, siap untuk menghadapi petualangan apa pun yang mungkin terjadi pada hari tersebut.
```

Ah, sempurna, sekarang Anda dapat menjalani mimpi cottage core Anda dengan ChatGPT 🌸

## Langkah 3: Dapatkan Umpan Balik dan Iterasi

Sekarang, tunjukkan kepada teman/karyawan/bos Anda dan minta umpan balik. Jika mereka menyukainya, bagus! Jika tidak, iterasi pada prompt sampai Anda mendapatkan sesuatu yang Anda sukai. Anda juga dapat meminta umpan balik di komunitas yang disebutkan di atas. Langkah ini tidak pernah benar-benar berakhir. Anda akan selalu mengulang prompt Anda karena masalah dan orang berubah dari waktu ke waktu.

## Kesimpulan

Lakukan prompt engineering sesuai dengan *keinginan Anda*. Saya (pengelola kursus ini) selalu menulis prompt saya dari awal. Tidak ada standar emas untuk menulis prompt terbaik; Percobaan dan kesalahan adalah cara terbaik untuk belajar. Selamat belajar, dan semoga sukses dengan sisa kursus ini!

> CATATAN
> 
> 
> Rekomendasi dalam artikel ini berlaku untuk semua masalah prompt engineering, tidak hanya menulis cerita interaktif!
> 

## Catatan

- Di bab berikutnya, Anda mungkin melihat kata-kata **AI, model, dan LLM digunakan secara bergantian**. Lihat [referensi kosakata](https://learnprompting.org/docs/vocabulary) untuk informasi lebih lanjut.
