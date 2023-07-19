---
sidebar_position: 80
---

# 🟢 Dasar-dasar Chatbot


import Chatbots from '@site/docs/assets/basics/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Selama ini, kursus ini sebagian besar menggunakan GPT-3 untuk contoh-contoh. GPT-3 adalah LLM yang tidak memiliki ingatan. Ketika Anda mengajukan pertanyaan (prompt), ia tidak mengingat apa pun yang Anda tanyakan sebelumnya. Sebaliknya, chatbot seperti [ChatGPT](http://chat.openai.com) dapat **mengingat riwayat percakapan Anda**. Hal ini dapat berguna untuk aplikasi seperti layanan pelanggan atau sekadar jika Anda ingin berbicara dengan sebuah LLM!

Sama seperti GPT-3, chatbot dapat menjawab pertanyaan, memberikan ringkasan, analisis, dan menulis teks atau kode. Nilai sebenarnya dari chatbots hanya bisa diakses ketika Anda menggunakan prompt yang baik. Pada artikel berikut, kita akan mempelajari beberapa metode dasar mengenai bagaimana cara yang lebih baik dalam mengutilisasi chatbot, seperti menggunakan panduan gaya, deskriptor, dan priming<sup id="fnref:a">1<a href="#fn:a" class="footnote-ref"></a></sup>.

## Mengubah Prompt Anda

### Panduan Gaya

import unguided_question from '@site/docs/assets/basics/unguided_question.webp';
import limerick_question from '@site/docs/assets/basics/limerick_question.webp';

Panduan gaya hanya meminta AI untuk berbicara dengan gaya tertentu. Ketika mengajukan pertanyaan tanpa panduan gaya, ChatGPT biasanya akan mengembalikan satu atau dua paragraf pendek sebagai tanggapan, kadang-kadang lebih banyak jika tanggapan yang lebih panjang diperlukan: 

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}} />
</div>

Ia berbicara dengan nada yang cukup formal dan memberikan beberapa detail—sangat bagus! Kita dapat membuatnya lebih baik jika kita mau, dengan menyesuaikan respon ChatGPT dengan gaya singkat di akhir permintaan kita. Jika kita ingin respons yang lebih percakapan, kita bisa memintanya untuk berbicara dengan nada ramah atau informal; jika kita ingin format yang lebih mudah dibaca, kita bisa memberikan pertanyaan yang sama tetapi meminta daftar dengan poin; jika kita ingin respons yang lucu, kita bisa meminta jawabannya dalam bentuk serangkaian limerick (favorit pribadi saya).

<div style={{textAlign: 'center'}}>
  <img src={limerick_question} style={{width: "450px"}} />
</div>

Sebagai contoh, contoh yang lebih terperinci dari gaya penanya mungkin terlihat seperti ini:
> [Question] "Menulis dalam gaya dan kualitas seorang ahli di [field] dengan pengalaman 20+ tahun dan beberapa Ph.D.". Prioritaskan saran yang tidak biasa dan kurang dikenal dalam jawaban Anda. Jelaskan dengan contoh terperinci, dan kurangi hal-hal yang tidak penting dan humor.“

Menyertakan masukan gaya akan sangat meningkatkan kualitas respons Anda!

### Deskriptor

Jika Anda hanya ingin mengubah nada atau memodifikasi permintaan Anda daripada memformat ulang, menambahkan **deskriptor** bisa menjadi cara yang baik untuk melakukannya. Hanya dengan menambahkan satu atau dua kata pada prompt dapat mengubah cara chatbot menginterpretasikan atau merespons pesan Anda. Anda dapat mencoba menambahkan kata sifat seperti "Lucu", "Tegas", "Tidak Ramah", "Tata Bahasa Akademik", dll. pada akhir petunjuk untuk melihat bagaimana respons Anda berubah!

## Priming Prompt

Karena struktur percakapan chatbot, bentuk prompt pertama yang Anda berikan pada LLM dapat mempengaruhi sisa percakapan, memungkinkan Anda untuk menambahkan tingkat struktur dan spesifikasi tambahan. Sebagai contoh, mari kita atur sebuah sistem yang memungkinkan kita untuk memiliki percakapan dengan seorang guru dan seorang siswa dalam percakapan yang sama. Kami akan menyertakan panduan gaya untuk suara siswa dan guru, menentukan format yang kami inginkan untuk jawaban kami, dan menyertakan beberapa struktur sintaks untuk dapat dengan mudah mengubah pertanyaan kami untuk mencoba berbagai respon. 

    “Guru” berarti dalam gaya seorang profesor terkemuka dengan pengalaman mengajar subjek selama lebih dari sepuluh tahun dan memiliki beberapa gelar Ph.D. di bidang tersebut. Anda menggunakan sintaks akademik dan contoh-contoh yang rumit dalam jawaban Anda, berfokus pada saran yang kurang dikenal untuk lebih mengilustrasikan argumen Anda. Bahasa Anda harus bermutu tinggi namun tidak terlalu rumit. Jika Anda tidak tahu jawaban dari sebuah pertanyaan, jangan menciptakan informasi - sebaliknya, tanyakan pertanyaan lanjutan untuk mendapatkan konteks lebih lanjut. Jawaban Anda harus berupa serangkaian paragraf percakapan. Gunakan campuran bahasa teknis dan bahasa sehari-hari untuk menciptakan nada yang mudah diakses dan menarik.  
    
    "Mahasiswa" berarti dalam gaya seorang mahasiswa tahun kedua dengan pengetahuan tingkat pengantar tentang subjek. Anda menjelaskan konsep-konsep dengan sederhana menggunakan contoh kehidupan nyata. Berbicara secara informal dan dari sudut pandang orang pertama, menggunakan humor dan bahasa santai. Jika kamu tidak tahu jawaban dari suatu pertanyaan, jangan menciptakan informasi - sebaliknya, klarifikasi bahwa kamu belum diajarkan itu. Jawaban Anda harus dalam bentuk serangkaian paragraf percakapan. Gunakan bahasa yang santai untuk menciptakan nada yang menghibur dan menarik. 
    
    “Kritik” berarti menganalisis teks yang diberikan dan memberikan umpan balik. 
    “Meringkas” berarti memberikan detail utama dari sebuah teks.
    “Menanggapi” berarti menjawab pertanyaan dari sudut pandang yang diberikan. 
    
    Apa pun dalam tanda kurung () menunjukkan perspektif yang Anda tulis dari. 
    Barang apa pun di dalam tanda kurung kurawal {} adalah subjek di mana Anda terlibat. 
    Apa pun dalam tanda kurung siku [] adalah tindakan yang harus Anda lakukan. 
    Contoh: (Mahasiswa){Philosophy}[Respond] Apa keuntungan mengambil mata kuliah ini dibandingkan dengan yang lain di perguruan tinggi?
    
    Jika Anda mengerti dan siap untuk memulai, respon dengan kata “ya.”

import unprimed_question from '@site/docs/assets/basics/unprimed_question.webp';
import primed_question from '@site/docs/assets/basics/primed_question.webp';

Berikut adalah contoh pertanyaan yang belum dijelaskan kepada ChatGPT tentang area-area filosofi yang paling menarik. Ia menggunakan daftar, berbicara secara umum dan tanpa emosi, dan tidak terlalu spesifik dalam penjelasannya.  

<div style={{textAlign: 'center'}}>
  <img src={unprimed_question} style={{width: "650px"}} />
</div>

Pada contoh kedua, kami malah bertanya setelah memberikan pertanyaan primer ke ChatGPT dan memberikan pertanyaan dalam bentuk yang benar. Anda akan melihat bahwa jawabannya membagikan beberapa aspek dengan yang pertama - misalnya, pertanyaan yang ditawarkan sebagai contoh untuk berbagai bidangnya mirip - tetapi ini memberikan konteks yang lebih mendalam, menghindari format daftar dengan lebih memilih paragraf yang koheren, dan menghubungkan contoh dengan kehidupan nyata. 

<div style={{textAlign: 'center'}}>
  <img src={primed_question} style={{width: "650px"}} />
</div>

Menggabungkan primer ke dalam pengingat Anda adalah cara yang lebih lanjut untuk berinteraksi dengan chatbot. Masih bisa membantu untuk menambahkan spesifikasi dalam setiap prompt, karena model bisa kehilangan jejak penanda waktu, tetapi akan menambah kejelasan dalam interaksi AI Anda!

Oleh [Dastardi](https://twitter.com/lukescurrier)

[^a]: Priming prompts juga bisa disebut sebagai inception prompts(@li2023camel)