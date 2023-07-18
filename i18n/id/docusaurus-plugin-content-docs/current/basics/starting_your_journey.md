---
sidebar_position: 1000
---

# 🟢 Mulai Perjalanan Anda


import Steps from '@site/docs/assets/basics/steps.svg';

<div style={{textAlign: 'center'}}>
  <Steps style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Sekarang setelah Anda telah belajar tentang dasar-dasar teknik prompt, Anda siap untuk mulai mengembangkan prompt sendiri. Bagian lain dari kursus ini akan mencakup teknik-teknik dan sumber daya tambahan, namun cara terbaik untuk belajar PE adalah dengan mulai bereksperimen dengan perintah Anda sendiri. Halaman ini akan menunjukkan cara memulai dalam memecahkan masalah rekayasa prompt sembarang.

Mari kita katakan Anda ingin prompt yang akan menghasilkan cerita yang mendalam dan interaktif dengan ChatGPT.

## Langkah 1: Penelitian

Hal pertama yang harus dilakukan adalah mencari tahu tentang pertanyaan yang Anda inginkan. Selain Googling, sumber daya berikut sangat berharga:

- [Kumpulan Prompt Bagus untuk ChatGPT](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (and similar subreddits)
- [DiscordLearn Prompting](https://discord.gg/learn-prompting) (dan Discord lain yang relevan, termasuk [Discord OpenAI](https://discord.gg/openai))

Anda mungkin menemukan [ini](https://prompts.chat/#act-as-a-text-based-adventure-game) oleh [Heroj04](https://github.com/Heroj04) menjadi titik awal yang baik:
> Saya ingin kamu bertindak sebagai permainan petualangan berbasis teks. Saya akan mengetik perintah dan Anda akan membalas dengan deskripsi tentang apa yang dilihat karakter. Saya ingin Anda hanya membalas dengan hasil game di dalam satu blok kode unik, dan tidak ada yang lain. jangan menulis penjelasan. tidak perlu mengetik perintah kecuali saya memberi instruksi kepadamu untuk melakukannya. ketika saya perlu memberitahumu sesuatu dalam bahasa Inggris, saya akan melakukannya dengan cara menempatkan teks di dalam kurung kurawal {like this}. perintah pertamaku adalah bangun

## Langkah 2: Eksperimen

Sekarang, kita akan memasukkan prompt ke dalam ChatGPT dan melihat apa yang terjadi.

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}} />
</div>

Kita dapat melihat bahwa hal tersebut telah menghasilkan sebuah cerita, tetapi ditulis di dalam blok kode csharp (bahasa pemrograman). Mungkin kita tidak menginginkan ini, jadi kita akan mengubah permintaan menjadi:

> Saya ingin Anda berperan sebagai permainan petualangan berbasis teks. Saya akan mengetik perintah dan Anda akan membalas dengan deskripsi tentang apa yang karakter lihat. Jangan menulis penjelasan. Perintah pertamaku adalah bangun


**respon ChatGPT**:
```text
// Highlight-start
Kamu perlahan membuka mata dan menemukan dirimu berbaring di atas tanah yang dingin dan keras. Saat Anda memerhatikan sekitar Anda, Anda menyadari bahwa Anda berada di dalam gua yang remang-remang. Udara lembap dan berbau apek, dan Anda dapat mendengar suara air menetes di suatu tempat di kejauhan. Kepalamu sedang berdenyut-denyut dan kamu merasa pusing. Anda perlu mencari tahu di mana Anda berada dan bagaimana cara keluar dari sini.
// highlight-end
```

Bagus, sekarang hal itu menghasilkan cerita dalam format teks biasa. Namun, prompt kita kurang rinci. Mari kita tambahkan sedikit struktur ke prompt ini:

> Saya ingin Anda bertindak sebagai permainan petualangan berbasis teks. Aku akan mengetik perintah dan kamu akan menjawab dengan deskripsi tentang apa yang karakter lihat. Jangan menulis penjelasan. Gunakan bahasa berbunga dan kata-kata deskriptif. Pengaturannya adalah sebuah desa gaya pondok, di mana taman gnome dan kodok berkeliaran bebas sebagai kesetaraan. Setiap kali kamu berbicara, mulailah paragrafmu dengan WAKTU, LOKASI, TEMAN (siapa yang bersamamu), BARANG (apa barang yang kamu miliki). Perintah pertama saya adalah bangun.

**Respon ChatGPT**:
```text
// highlight-start
WAKTU: Pagi hari
LOKASI: Sebuah pondok nyaman yang tersembunyi di sebuah desa yang dikelilingi oleh pepohonan hijau dan bunga harum.
TEMAN-TEMAN: Kamu sendirian di kamarmu, terbungkus selimut yang nyaman.
BARANG: Anda melihat sebuah meja kecil kayu di samping tempat tidur Anda, dan sebuah keranjang penuh bunga segar di jendela.

Saat kamu terbangun, kamu merasakan kehangatan matahari yang menyaring melalui jendela dan kicauan lembut burung di luar. Anda duduk di tempat tidur dan meregangkan lengan Anda, melihat pemandangan bunga-bunga indah yang mekar di luar. Desiran lembut dari daun-daun dan angin yang lembut memberikanmu rasa tenang dan kedamaian. Anda merasa segar dan bugar, siap untuk menghadapi petualangan apa pun yang mungkin datang pada hari ini.
// highlight-end
```

Ah, sempurna, sekarang kamu bisa mewujudkan impian rumah pedesaanmu dengan ChatGPT 🌸


## Langkah 3: Dapatkan Umpan Balik dan Lakukan Perbaikan

Sekarang, tunjukkan kepada teman/pegawai/bos Anda dan mintalah masukan. Jika mereka suka, bagus sekali! Jika tidak, ulangi permintaan sampai Anda mendapatkan sesuatu yang kalian sukai. Anda juga dapat meminta umpan balik di komunitas yang disebutkan di atas. Langkah ini tidak pernah benar-benar berakhir. Anda akan selalu mengulang prompt Anda karena masalah dan orang-orang berubah seiring waktu.

## Kesimpulan

Melakukan rekayasa prompt sebagaimana *yang Anda* inginkan. Saya (pengelola kursus ini) selalu menulis perintah saya dari awal. Tidak ada standar emas untuk cara menulis permintaan terbaik; Percobaan dan kesalahan adalah cara terbaik untuk belajar. Selamat belajar, dan semoga berhasil dengan sisa kursus ini!

:::catatan
Rekomendasi dalam artikel ini berlaku untuk semua masalah rekayasa prompt, bukan hanya menulis cerita interaktif!
:::


## Catatan

- Di bab-bab berikutnya, Anda mungkin melihat kata-kata **AI, model, dan LLM digunakan bergantian**. Lihat referensi kosakata [](https://learnprompting.org/docs/vocabulary) untuk informasi lebih lanjut.