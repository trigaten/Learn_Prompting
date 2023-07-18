---
sidebar_position: 105
---

# 🟢 Memahami Pikiran AI


import Brain from '@site/docs/assets/basics/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Ada beberapa hal sederhana yang perlu Anda ketahui tentang AI yang berbeda dan cara kerjanya sebelum Anda mulai membaca sisa kursus ini.


## Berbagai Jenis AI

Ribuan, bahkan jutaan AI ada di dunia. Beberapa lebih baik daripada yang lain. Berbagai AI dapat menghasilkan [gambar](https://openai.com/product/dall-e-2), [musik](https://google-research.github.io/seanet/musiclm/examples/), [teks](https://platform.openai.com/playground), dan bahkan [video](https://makeavideo.studio/). Perhatikan bahwa ini semua adalah *generative* AI, pada dasarnya AI yang *membuat* sesuatu. Juga ada *AI diskriminatif*, yaitu AI yang *mengklasifikasikan* hal-hal. Misalnya, Anda dapat menggunakan pengklasifikasi gambar untuk mengetahui apakah sebuah gambar adalah kucing atau anjing. Kami tidak akan menggunakan AI yang diskriminatif dalam kursus ini.


Hanya beberapa AI generatif saat ini sudah cukup maju untuk menjadi sangat berguna dalam rekayasa permintaan. Kami utamanya menggunakan GPT-3 dan ChatGPT dalam kursus ini. Seperti yang kami sebutkan di halaman terakhir, ChatGPT adalah chat bot, sedangkan GPT-3 tidak. **Mereka biasanya akan memberikan respons yang berbeda ketika ditanya pertanyaan yang sama**. Jika Anda seorang pengembang, saya menyarankan untuk menggunakan GPT-3, karena lebih dapat direproduksi. Jika Anda bukan seorang developer, saya rekomendasikan menggunakan [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), karena lebih mudah digunakan. Sebagian besar teknik dalam kursus ini dapat diterapkan untuk kedua AI. Namun, beberapa di antaranya akan menjadi GPT-3 saja, jadi kami menganjurkan Anda untuk menggunakan GPT-3 jika Anda ingin menggunakan semua teknik dalam kursus ini.

Kami juga akan menggunakan [Stable Diffusion](https://beta.dreamstudio.ai/home) dan [DALLE](https://openai.com/product/dall-e-2) di bagian generasi gambar. Lihat lebih banyak AIs yang relevan [di sini](https://learnprompting.org/docs/products#chatbots).

## Bagaimana AI ini bekerja

Bagian ini menjelaskan aspek-aspek umum dari generative **teks** KI yang populer. Kecerdasan Buatan ini memiliki otak yang terdiri dari miliaran neuron buatan. Sistem cara neuron-neuron ini terstruktur disebut arsitektur transformer. Ini adalah jenis jaringan saraf yang cukup kompleks. Apa yang harus Anda pahami adalah:

1. AI ini hanyalah fungsi matematika. Daripada $f(x) = x^2$, mereka lebih seperti f(ribuan variabel) = ribuan keluaran yang mungkin.
2. AI ini memahami kalimat dengan memecahnya menjadi kata-kata/subkata yang disebut token (misalnya, AI dapat membaca `Saya tidak suka` sebagai `"Saya", "tidak", "suka"`). Setiap token kemudian diubah menjadi daftar angka, sehingga AI dapat memprosesnya.
3. AI ini memprediksi kata/token selanjutnya dalam kalimat berdasarkan kata/token sebelumnya (misalnya, AI dapat memprediksi `apel` setelah `saya tidak suka`). Setiap token yang mereka tulis didasarkan pada token sebelumnya yang telah mereka lihat dan tulis. Setiap kali mereka menulis token baru, mereka berhenti sejenak untuk berpikir tentang apa yang seharusnya menjadi token berikutnya.
4. AI ini melihat setiap token pada saat yang sama. Mereka tidak membaca dari kiri ke kanan, atau dari kanan ke kiri seperti manusia.

Mohon dimengerti bahwa kata-kata "berpikir", "otak", dan "neuron" adalah kata benda binatang, yang pada dasarnya adalah metafora untuk apa yang sebenarnya dilakukan oleh model ini. Model-model ini sebenarnya tidak berpikir, mereka hanya fungsi matematika. Mereka sebenarnya bukan otak, mereka hanya jaringan saraf buatan. Mereka sebenarnya bukan neuron biologis, mereka hanya angka.

Ini adalah area penelitian aktif dan filsafat. Deskripsi ini agak sinis tentang sifat mereka dan dimaksudkan untuk menyeimbangkan representasi media populer tentang KI sebagai makhluk yang berpikir/beraksi seperti manusia. Namun, jika Anda ingin menyerupakan Kecerdasan Buatan, silakan maju! Tampaknya kebanyakan orang melakukan ini dan mungkin bahkan bermanfaat untuk belajar.


## Catatan

- [d2l.ai](https://www.d2l.ai) adalah sumber yang baik untuk mempelajari bagaimana AI bekerja

- Harap dicatat bahwa para penulis, sebenarnya, menyukai apel. Apel enak.
