# 🟢 Memahami Pikiran AI

Ada beberapa hal sederhana yang harus Anda ketahui tentang berbagai kecerdasan buatan (AI) dan cara kerjanya sebelum Anda mulai membaca kursus yang lain.

## Berbagai Jenis AI

Ribuan, bahkan jutaan AI ada di dunia. Beberapa lebih baik dari yang lain. Berbagai jenis AI dapat menghasilkan [gambar](https://openai.com/product/dall-e-2), [musik](https://google-research.github.io/seanet/musiclm/examples/), [tulisan](https://platform.openai.com/playground), dan bahkan [video](https://makeavideo.studio/). Perlu dicatat bahwa semuanya adalah AI yang *generatif*, yaitu AI yang *membuat* sesuatu. Ada juga AI *diskriminatif*, yaitu AI yang *mengklasifikasikan* sesuatu. Misalnya, Anda dapat menggunakan klasifikasi gambar untuk mengetahui apakah gambar adalah kucing atau anjing. Kami tidak akan menggunakan AI diskriminatif dalam kursus ini.

Hanya beberapa jenis AI generatif yang saat ini cukup maju untuk digunakan dalam teknik prompting. Kami terutama menggunakan GPT-3 dan ChatGPT dalam kursus ini. Seperti yang kami sebutkan pada halaman sebelumnya, ChatGPT adalah chatbot, sedangkan GPT-3 tidak. **Mereka biasanya menghasilkan respons yang berbeda ketika ditanya pertanyaan yang sama**. Jika Anda adalah pengembang, saya sarankan menggunakan GPT-3, karena lebih dapat direproduksi. Jika Anda bukan pengembang, saya sarankan menggunakan [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), karena lebih mudah digunakan. Kebanyakan teknik dalam kursus ini dapat diterapkan pada kedua jenis AI. Namun, beberapa teknik hanya berlaku untuk GPT-3, jadi kami mendorong Anda untuk menggunakan GPT-3 jika ingin menggunakan semua teknik dalam kursus ini.

Kami juga akan menggunakan [Stable Diffusion](https://beta.dreamstudio.ai/home) dan [DALLE](https://openai.com/product/dall-e-2) dalam bagian pembuatan gambar. Lihat lebih banyak AI yang relevan [di sini](https://learnprompting.org/docs/products#chatbots).

## Bagaimana Cara Kerja AI

Bagian ini menjelaskan aspek-aspek dari AI generatif **teks** populer. AI ini memiliki otak yang terdiri dari miliaran neuron buatan. Cara neuron-neuron ini dibentuk disebut arsitektur transformer. Ini adalah jenis jaringan saraf yang cukup kompleks. Yang harus Anda pahami adalah:

1. AI ini hanyalah fungsi matematika. Alih-alih *f*(*x*)=*x*2, mereka lebih seperti f(ribuan variabel)=ribuan kemungkinan output.
2. AI ini memahami kalimat dengan memecahnya menjadi kata-kata/subkata yang disebut token (misalnya, AI mungkin membaca `Saya tidak suka` sebagai `"Saya", "tidak", "suka"`). Setiap token kemudian diubah menjadi daftar angka, sehingga AI dapat memprosesnya.
3. AI ini memprediksi kata/token berikutnya dalam kalimat berdasarkan kata/tokens sebelumnya (misalnya, AI mungkin memprediksi `apel` setelah `Saya tidak suka`). Setiap token yang mereka tulis didasarkan pada token sebelumnya yang mereka lihat dan tulis; setiap kali mereka menulis token baru, mereka berhenti sejenak untuk memikirkan apa token berikutnya.
4. AI ini melihat setiap token pada saat bersamaan. Mereka tidak membaca dari kiri ke kanan atau dari kanan ke kiri seperti manusia.

Harap pahami bahwa kata-kata "berpikir", "otak", dan "neuron" adalah zoomorfisme, yang pada dasarnya adalah metafora untuk apa yang sebenarnya dilakukan oleh model. Model ini sebenarnya tidak berpikir, mereka hanya fungsi matematika. Mereka sebenarnya bukan otak, mereka hanyalah jaringan saraf buatan. Mereka sebenarnya bukan neuron biologis, mereka hanya angka.

Ini adalah area penelitian dan filsafat yang aktif. Deskripsi ini agak sinis tentang sifat mereka dan dimaksudkan untuk menyeimbangkan penggambaran media populer tentang AI sebagai makhluk yang berpikir/bertindak seperti manusia. Namun demikian, jika Anda ingin menyamakan AI dengan manusia, silakan saja! Tampaknya kebanyakan orang melakukannya dan mungkin bahkan berguna untuk pembelajaran.

## Catatan

- [d2l.ai](https://www.d2l.ai/) adalah sumber daya yang bagus untuk belajar tentang cara kerja AI.
- Harap dicatat bahwa para penulis, sebenarnya, menyukai apel. Apel enak.
