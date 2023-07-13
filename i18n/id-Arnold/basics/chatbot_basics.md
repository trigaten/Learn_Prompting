# 🟢 Dasar-dasar Chatbot

Sejauh ini, kursus ini sebagian besar menggunakan GPT-3 sebagai contoh. GPT-3 adalah LLM yang tidak memiliki memori. Ketika Anda menanyakan pertanyaan (prompt) padanya, ia tidak mengingat apa pun yang pernah Anda tanyakan sebelumnya. Sebaliknya, chatbot seperti [ChatGPT](http://chat.openai.com/) dapat **mengingat riwayat percakapan Anda**. Ini bisa berguna untuk aplikasi seperti layanan pelanggan atau hanya jika Anda ingin berbicara dengan LLM!

Sama seperti GPT-3, chatbot dapat menjawab pertanyaan, memberikan ringkasan, analisis, dan menulis teks atau kode. Value sebenarnya dari chatbot hanya dapat diakses ketika Anda menggunakan prompt yang baik. Dalam artikel ini, kami akan menjelajahi beberapa metode dasar untuk lebih memanfaatkan chatbot, seperti menggunakan panduan gaya, descriptor, dan priming.

## Memodifikasi Prompt Anda

### Panduan Gaya / Memberikan Gaya Bahasa

Memberikan gaya bahasa mudahnya adalah meminta AI untuk berbicara dengan gaya bahasa tertentu. Ketika menanyakan pertanyaan tanpa memberikan gaya bahasa, ChatGPT biasanya akan merepons dalam satu atau dua paragraf pendek saja, terkadang lebih jika respons yang lebih panjang diperlukan:

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/e3cf1bc0-18e8-44fb-b21b-d5e811dbc9a1)


Biasanya respons ChatGPT bernada cukup formal dan memberikan beberapa detail—sangat bagus! Namun, kita bisa membuatnya lebih baik jika kita mau, dengan menyesuaikan respons ChatGPT dengan uraian singkat mengenai gaya di akhir prompt kita. Jika kita ingin respons yang bergaya bahasa seperti percakapan, kita bisa memintanya untuk berbicara dengan nada ramah atau informal; jika kita ingin format yang lebih mudah dibaca, kita bisa memberikan pertanyaan yang sama tetapi memintanya merespons dalam bentuk poin/list; jika kita ingin respons yang menghibur, kita bisa memintanya untuk memberikan jawabannya dalam bentuk serangkaian limericks / pantun jenaka (favorit pribadi saya).

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/f24658e5-4f34-4b88-af82-4c29f6630f5c)


Contoh prompt dengan gaya bahasa yang lebih terperinci mungkin terlihat seperti ini:

> [Pertanyaan] “Tuliskan dengan gaya dan kualitas seorang ahli di bidang [subjek] dengan pengalaman lebih dari 20 tahun dan beberapa Ph.D. Utamakan saran yang tidak ortodoks dan kurang dikenal dalam jawaban Anda. Jelaskan dengan contoh rinci, dan minimalisir hal-hal yang tidak terkait dan humor.“
> 

Menggunakan prompt dengan gaya bahasa tersebut akan meningkatkan kualitas respons Anda dengan luar biasa!

### Descriptor

Jika Anda hanya ingin mengubah nada atau menyesuaikan prompt Anda daripada merubah formatnya, menambahkan **descriptor** dapat menjadi cara yang baik untuk melakukannya. Cukup menambahkan satu atau dua kata ke prompt dapat mengubah bagaimana chatbot menafsirkan atau merespons pesan Anda. Anda bisa mencoba menambahkan kata sifat seperti "Lucu", "Singkat", "Tidak Ramah", "Sintaks Akademik", dll di akhir prompt untuk melihat bagaimana respons Anda berubah!

## Priming Prompt

Karena struktur percakapan chatbot, bentuk prompt pertama yang Anda berikan pada LLM dapat memengaruhi sisa percakapan, memungkinkan Anda menambahkan tingkat struktur dan spesifikasi tambahan. Sebagai contoh, mari atur sistem untuk memungkinkan kita berbicara dengan seorang guru dan seorang siswa dalam percakapan yang sama. Kita akan menyertakan panduan gaya untuk siswa dan guru, menentukan format yang kita inginkan untuk jawaban, dan menyertakan struktur sintaks agar dengan mudah mengubah prompt untuk mencoba berbagai respons.

```
“Guru” memiliki gaya seorang profesor terkemuka dengan pengalaman mengajar lebih dari sepuluh tahun dan beberapa Ph.D. di bidang tersebut. Anda menggunakan sintaks akademik dan contoh yang rumit dalam jawaban Anda, berfokus pada saran yang kurang dikenal untuk lebih menggambarkan argumen Anda. Bahasa Anda harus canggih tetapi tidak terlalu kompleks. Jika Anda tidak tahu jawaban dari sebuah pertanyaan, jangan membuat informasi semata-mata - sebaliknya, tanyakan pertanyaan tindak lanjut untuk memperoleh lebih banyak konteks. Jawaban Anda harus berupa serangkaian paragraf percakapan. Gunakan campuran bahasa teknis dan sehari-hari untuk menciptakan nada yang mudah diakses dan menarik.

“Siswa” memiliki gaya seorang mahasiswa tahun kedua dengan pemahaman level awal tentang subjek tersebut. Anda menjelaskan konsep dengan sederhana menggunakan contoh kehidupan nyata. Berbicara secara informal dan dari sudut pandang orang pertama, menggunakan humor dan bahasa santai. Jika Anda tidak tahu jawaban dari sebuah pertanyaan, jangan membuat informasi semata-mata - sebaliknya, jelaskan bahwa Anda belum diajari. Jawaban Anda harus berupa serangkaian paragraf percakapan. Gunakan bahasa sehari-hari untuk menciptakan nada yang menghibur dan menarik.

“Kritik” berarti menganalisis teks yang diberikan dan memberikan umpan balik.
“Ringkasan” berarti memberikan detail kunci dari sebuah teks.
“Menjawab” berarti menjawab pertanyaan dari sudut pandang yang diberikan.

Apa pun yang berada di dalam tanda kurung () menunjukkan sudut pandang yang Anda tulis.
Apa pun yang berada di dalam kurung kurawal {} adalah subjek yang Anda terlibat.
Apa pun yang ada dalam tanda kurung siku [] adalah tindakan yang harus Anda lakukan.
Contoh: (Siswa){Filsafat}[Menjawab] Apa keuntungan mengambil mata kuliah ini dibandingkan dengan mata kuliah lain di perguruan tinggi?

Jika Anda mengerti dan siap untuk memulai, balas hanya dengan "ya."
```

Di bawah adalah contoh pertanyaan yang bukan termasuk priming prompt ke ChatGPT tentang area filsafat yang paling menarik. Prompt ini menggunakan daftar, berbicara secara umum dan tanpa emosi, dan tidak terlalu spesifik dalam penjelasannya.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/43f9da04-312e-4ca4-a838-770a6fce8c02)


Pada contoh kedua, kita bertanya setelah memberikan konsep priming prompt ke ChatGPT dan memberikan pertanyaan dalam bentuk yang benar. Anda akan melihat jawabannya terbagi dalam beberapa aspek dengan yang pertama - misalnya, pertanyaan yang ditawarkan sebagai contoh untuk berbagai bidang serupa - tetapi memberikan konteks yang lebih dalam, meninggalkan format daftar untuk paragraf yang koheren, dan mengaitkan contoh dengan kehidupan nyata.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/431dc30c-d59a-432a-a232-f53e84d47f43)


Menggunakan konsep priming prompt ke dalam prompt Anda adalah cara yang lebih baik untuk berinteraksi dengan chatbot. Lebih lanjut, kita juga masih bisa menambahkan spesifikasi dalam setiap prompt, karena model dapat kehilangan jejak ‘priming’ tersebut dari waktu ke waktu, tetapi itu akan menambahkan banyak kejelasan pada interaksi AI Anda!

Oleh [Dastardi](https://twitter.com/lukescurrier)
