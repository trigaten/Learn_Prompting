---
sidebar_position: 40
---

# 🟢 Chatbot + Basis Pengetahuan

import ImageIntents from '@site/docs/assets/basic_applications/chatbot_from_kb_intents.webp'
import ImageGPT3 from '@site/docs/assets/basic_applications/chatbot_from_kb_gpt3.webp'
import ImageGPT3Organized from '@site/docs/assets/basic_applications/chatbot_from_kb_gpt3_organized.webp'
import ImagePrompt from '@site/docs/assets/basic_applications/chatbot_from_kb_prompt.webp'
import ImageLogin from '@site/docs/assets/basic_applications/chatbot_from_kb_login.webp'

Perkembangan terbaru dalam model bahasa besar (LLM) seperti [GPT-3](https://arxiv.org/abs/2005.14165) dan [ChatGPT](https://chat.openai.com/chat) telah menciptakan banyak kehebohan di industri teknologi. Model-model ini sangat kuat untuk menghasilkan konten, tetapi mereka juga memiliki beberapa kelemahan seperti bias (@nadeem-etal-2021-stereoset) dan halusinasi (@Ji_2022). Salah satu area di mana LLM ini dapat sangat berguna adalah pengembangan chatbot.

## Intent-Based Chatbots/Chatbot Berbasis Niat

Chatbot tradisional umumnya berbasis pada niat, artinya mereka dirancang untuk merespons niat pengguna tertentu. Setiap niat terdiri dari serangkaian pertanyaan contoh dan tanggapan yang terkait. Misalnya, niat “Cuaca” mungkin mencakup contoh pertanyaan seperti “Bagaimana cuaca hari ini?” atau “Akan hujan hari ini?” dan tanggapan seperti “Hari ini akan cerah.” Ketika pengguna mengajukan pertanyaan, chatbot mencocokkannya dengan niat dengan pertanyaan contoh yang paling mirip dan mengembalikan tanggapan yang terkait.

<div style={{textAlign: 'left'}}>
  <img src={ImageIntents} style={{width: "700px"}}/>
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Bagaimana cara kerja chatbot berbasis niat tradisional. Gambar oleh penulis.</p>
</div>

Namun, chatbot berbasis niat memiliki sejumlah masalah tersendiri. Satu masalah adalah bahwa mereka membutuhkan sejumlah besar niat tertentu untuk memberikan jawaban tertentu. Misalnya, kalimat dari pengguna seperti “Saya tidak dapat masuk”, “Saya lupa kata sandi saya”, atau “Kesalahan masuk” mungkin memerlukan tiga jawaban yang berbeda dan oleh karena itu tiga niat yang berbeda, meskipun mereka semua cukup mirip.

## Bagaimana GPT-3 Dapat Membantu

Ini adalah tempat di mana GPT-3 bisa sangat berguna. Alih-alih memiliki banyak niat yang sangat spesifik, setiap niat dapat lebih luas dan memanfaatkan dokumen dari [basis pengetahuan](https://en.wikipedia.org/wiki/Knowledge_base) Anda. Basis Pengetahuan (Knowleadge Base/KB) adalah informasi yang disimpan sebagai data terstruktur dan tak terstruktur, siap digunakan untuk analisis atau inferensi. KB Anda mungkin terdiri dari serangkaian dokumen yang menjelaskan cara menggunakan produk Anda.

Dengan cara ini, setiap niat terkait dengan sebuah dokumen bukan sebuah daftar pertanyaan dan jawaban spesifik, misalnya sebuah niat untuk 'masalah login', satu niat untuk 'bagaimana cara berlangganan', dll. Ketika pengguna mengajukan pertanyaan tentang login, kita dapat melewati dokumen 'masalah login' ke GPT-3 sebagai informasi konteks dan menghasilkan respons yang spesifik terhadap pertanyaan pengguna.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={ImageGPT3} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Bagaimana sebuah chatbot memanfaatkan GPT-3 bisa bekerja. Gambar oleh penulis.</p>
</div>

Pendekatan ini mengurangi jumlah niat yang perlu dikelola dan memungkinkan jawaban yang lebih sesuai dengan setiap pertanyaan. Selain itu, jika dokumen yang terkait dengan niat tersebut menggambarkan proses yang berbeda (misalnya, proses untuk "masuk di situs web" dan proses lainnya untuk "masuk di aplikasi seluler"), GPT-3 dapat otomatis menanyakan klarifikasi kepada pengguna sebelum memberikan jawaban akhir.

## Kenapa Kita Tidak Bisa Mengirim Semua KB ke GPT-3?

Saat ini, LLM seperti GPT-3 memiliki ukuran prompt maksimum sekitar 4k token (untuk model [`text-davinci-003`](https://beta.openai.com/docs/models/gpt-3)), yang banyak tetapi tidak cukup untuk memberi makan seluruh basis pengetahuan ke dalam satu prompt. LLM memiliki ukuran prompt maksimum untuk alasan komputasi, karena menghasilkan teks dengan mereka melibatkan sejumlah perhitungan yang dengan cepat meningkat seiring peningkatan ukuran prompt.

LLM masa depan mungkin tidak memiliki batasan ini sambil tetap mempertahankan kemampuan pembangkitan teks. Bagaimanapun, untuk saat ini, kita perlu merancang sebuah solusi di sekitarnya.

## Bagaimana Chatbot dengan GPT-3 Bekerja

Jadi, pipeline chatbot bisa terdiri dari dua langkah:

1. Pertama, kita perlu memilih niat yang tepat untuk pertanyaan pengguna, yaitu kita perlu mengambil dokumen yang benar dari basis pengetahuan kami.
2. Kemudian, setelah kita memiliki dokumen yang tepat, kita dapat memanfaatkan GPT-3 untuk menghasilkan jawaban yang sesuai untuk pengguna. Dalam melakukan hal ini, kita perlu merumuskan sebuah permintaan yang baik.

Langkah pertama secara fundamental diselesaikan oleh [pencarian semantis](https://en.wikipedia.org/wiki/Semantic_search). Kita dapat menggunakan model yang sudah dilatih dari library [sentence-transformers<\/code>](https://www.sbert.net/examples/applications/semantic-search/README.html) dan dengan mudah menetapkan skor untuk setiap dokumen. Dokumen dengan skor tertinggi adalah yang akan digunakan untuk menghasilkan jawaban chatbot.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={ImageGPT3Organized} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Bagaimana chatbot yang memanfaatkan GPT-3 bisa bekerja. GPT-3 dapat digunakan untuk menghasilkan jawaban yang sesuai dengan memanfaatkan informasi dari dokumen basis pengetahuan. Gambar oleh penulis.</p>
</div>

## Menghasilkan Jawaban dengan GPT-3

Setelah kami memiliki dokumen yang tepat, kami perlu membuat perintah yang baik untuk digunakan dengan GPT-3 agar dapat menghasilkan jawaban. Dalam eksperimen berikutnya, kita akan selalu menggunakan model `text-davinci-003` dengan suhu `0.7`.

Untuk membuat permintaan, kita akan bereksperimen menggunakan:

- [**Role-prompting**](https://learnprompting.org/docs/basics/roles): teknik heuristik yang memberikan peran tertentu kepada AI.
- **Informasi KB yang relevan**, yaitu dokumen yang ditemukan dalam langkah pencarian semantis.
- **Pesan terakhir yang dipertukarkan antara pengguna dan chatbot**. Ini berguna untuk pesan yang dikirim oleh pengguna di mana konteksnya tidak ditentukan. Kita akan melihat contohnya nanti. Lihatlah [contoh ini](https://learnprompting.org/docs/applied_prompting/build_chatgpt) untuk melihat bagaimana mengelola percapakan dengan GPT-3.
- Terakhir, **pertanyaan pengguna**.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={ImagePrompt} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Informasi yang digunakan untuk membuat permintaan GPT-3 kami. Gambar oleh penulis.</p>
</div>

Mari mulai prompt kita dengan teknik <span className="yellow-highlight">role-prompting</span>.

<pre>
    <span className="yellow-highlight">As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.</span>
</pre>

Kemudian, anggaplah langkah pencarian semantik mengekstraksi dokumen berikut dari basis pengetahuan kami. Semua dokumen menjelaskan bagaimana produk VideoGram bekerja, yang merupakan produk imajiner mirip dengan Instagram, tetapi hanya untuk video.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={ImageLogin} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Dokumen yang menjelaskan cara masuk ke VideoGram. Gambar oleh sang penulis.</p>
</div>

Kita bisa menambahkan <span className="yellow-highlight">kontennya</span> di dalam prompt dengan cara ini.

<pre>
    As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.<br/><br/>

    <span className="yellow-highlight">
    START CONTEXT<br/>
    Login to VideoGram from Website<br/>
    1. Open your web browser and go to the VideoGram website.<br/>
    2. Click on the “Login” button located in the top right corner of the page.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, click on the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    <br/>
    Login to VideoGram from Mobile App<br/>
    1. Open the VideoGram app on your mobile device.<br/>
    2. On the main page, tap the “Login” button located in the bottom right corner.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, tap the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    END CONTEXT<br/>
    </span>
</pre>

Terakhir, kita perlu menambahkan <span className="yellow-highlight">percakapan dan pertanyaan pengguna</span> ke akhir perintah, seperti contoh berikut.

<pre>
    As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.<br/>
    <br/>
    START CONTEXT<br/>
    Login to VideoGram from Website<br/>
    1. Open your web browser and go to the VideoGram website.<br/>
    2. Click on the “Login” button located in the top right corner of the page.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, click on the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    <br/>
    Login to VideoGram from Mobile App<br/>
    1. Open the VideoGram app on your mobile device.<br/>
    2. On the main page, tap the “Login” button located in the bottom right corner.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, tap the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    END CONTEXT<br/>
    <br/>
    <span className="yellow-highlight">SKIPPY: Hello, I’m Skippy! How can I help you?<br/>
    USER: I can’t find the login button.<br/>
    SKIPPY:</span><br/>
</pre>

Kirimkan prompt ini ke GPT-3, saya mendapatkan jawaban yang dihasilkan berikut ini.

<pre>
    <span className="bluegreen-highlight">No problem! On the website, the login button is located in the top right corner of the page. On the mobile app, the login button is located in the bottom right corner. Let me know if you need any further assistance!</span>
</pre>

Perhatikan bagaimana informasi dalam jawaban yang dihasilkan berasal dari dokumen basis pengetahuan.

## Menyamakan Pertanyaan dengan GPT-3

Ayo coba dengan pertanyaan pengguna yang lebih samar, seperti <span className="yellow-highlight">"tidak bisa login"</span>. Berikut adalah prompt lengkap.

<pre>
    As an advanced chatbot named Skippy, your primary goal is to assist users to the best of your ability.<br/>
    <br/>
    START CONTEXT<br/>
    Login to VideoGram from Website<br/>
    1. Open your web browser and go to the VideoGram website.<br/>
    2. Click on the “Login” button located in the top right corner of the page.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, click on the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    <br/>
    Login to VideoGram from Mobile App<br/>
    1. Open the VideoGram app on your mobile device.<br/>
    2. On the main page, tap the “Login” button located in the bottom right corner.<br/>
    3. On the login page, enter your VideoGram username and password.<br/>
    4. Once you have entered your credentials, tap the “Login” button.<br/>
    5. You should now be logged in to your VideoGram account.<br/>
    END CONTEXT<br/>
    <br/>
    SKIPPY: Hello, I’m Skippy! How can I help you?<br/>
    USER: <span className="yellow-highlight">Can’t login</span><br/>
    SKIPPY:<br/>
</pre>

GPT-3 menjawab mencoba memahami lebih baik apa masalah pengguna.

<pre>
    <span className="bluegreen-highlight">I’m sorry to hear that. Can you tell me if you are trying to login via the VideoGram website or mobile app?</span>
</pre>

Selanjutnya, berikut ini adalah bagaimana percakapan lengkapnya. Seluruh prompt disembunyikan untuk visibilitas yang lebih baik.

<pre>
    USER: Can’t login<br/>
    SKIPPY: I’m sorry to hear that. Can you tell me if you are trying to login via the VideoGram website or mobile app?<br/>
    USER: Mobile app<br/>
    <span className="bluegreen-highlight">SKIPPY: OK, no problem. To login via the mobile app, open the VideoGram app on your mobile device. On the main page, tap the “Login” button located in the bottom right corner. On the login page, enter your VideoGram username and password. Once you have entered your credentials, tap the “Login” button. You should now be logged in to your VideoGram account. Please let me know if you need any further assistance.</span>
</pre>

GPT-3 dapat mengelola penjelasan, asalkan memiliki informasi kontekstual yang tepat.

## Masalah dalam Menghasilkan Jawaban dengan GPT-3

Contoh sebelumnya berhasil dengan baik. Namun, ada beberapa cara di mana chatbot ini bisa gagal.

Jika kita bertanya, “Apakah aplikasi seluler gratis?” ke GPT-3 dengan melewati dokumen login sebagai konteks, seringkali Anda akan mendapatkan jawaban seperti, “Ya, aplikasi seluler VideoGram gratis untuk diunduh dan digunakan”, meskipun informasi tersebut tidak terkandung dalam informasi konteks. Menghasilkan informasi palsu sangat buruk untuk chatbot layanan pelanggan!

GPT-3 jarang menghasilkan informasi yang salah ketika jawaban atas pertanyaan pengguna dapat ditemukan dalam konteks. Karena pertanyaan pengguna sering kali pendek dan ambigu, kita tidak dapat mengandalkan langkah pencarian semantik untuk selalu mendapatkan dokumen yang benar, dan oleh karena itu kita selalu rentan terhadap pembentukan informasi palsu.

## Kesimpulan

GPT-3 sangat berguna untuk membuat chatbot percakapan dan mampu menjawab serangkaian pertanyaan spesifik berdasarkan informasi kontekstual yang dimasukkan dalam permintaan. Namun, sulit bagi model untuk menghasilkan jawaban hanya dengan menggunakan informasi dalam konteks, karena model cenderung berhalusinasi (yaitu menghasilkan informasi baru, yang mungkin salah). Menghasilkan informasi palsu adalah masalah yang berbeda tingkat keparahannya tergantung pada kasus penggunaan.

Ditulis oleh [Fabio Chiusano](https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/).
