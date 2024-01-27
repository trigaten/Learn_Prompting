---
sidebar_position: 3
---

# 🟢 Memecahkan Pertanyaan Diskusi

import Auto from '@site/docs/assets/basic_applications/short_content_auto.webp';

Dengan bantuan yang tepat, GPT-3 sangat mampu menulis tanggapan dalam bentuk pendek. Untuk menunjukkan ini, saya akan menyelesaikan **pertanyaan diskusi**, tugas mingguan umum di banyak program kuliah. Respon terhadap pertanyaan diskusi biasanya sekitar 100-700 kata. Konten yang lebih panjang bisa sedikit lebih sulit karena LLMs memiliki memori terbatas dan kesulitan memahami gambaran global dari apa yang mereka tulis(@jin2022plot).

Mari kita lihat contoh pertanyaan diskusi dasar:

> _Apa masalah lingkungan yang paling mendesak yang dihadapi planet kita hari ini, dan langkah apa yang dapat diambil individu untuk membantu mengatasi masalah-masalah ini_

Kita dapat mengubah ini menjadi prompt sederhana untuk GPT-3 dengan menambahkan di awalnya <span className="yellow-highlight">Tanggapi dengan yang berikut ini:</span>.

<pre>
    <span className="yellow-highlight">Tanggapi pertanyaan berikut:</span>
<br/><br/>Apa masalah lingkungan yang paling mendesak yang dihadapi planet kita hari ini, dan langkah apa yang dapat diambil oleh individu untuk membantu mengatasi masalah-masalah ini?
</pre>

Hasil yang dihasilkan dengan perintah ini tidak konsisten, dan beberapa hanya satu atau dua kalimat. Jawaban diskusi biasanya harus memiliki beberapa paragraf, jadi hasil ini tidak ideal. Petunjuk yang baik harus memberikan **instruksi khusus tentang format dan konten**. Anda ingin menghilangkan ambiguitas dalam bahasa Anda untuk meningkatkan konsistensi dan kualitasnya. Ini adalah prompt yang lebih baik.

<pre>
    <span className="yellow-highlight">Tulis esai yang sangat detail dengan paragraf pendahuluan, isi, dan kesimpulan sebagai respons berikut ini:</span>
    <br/><br/>Apa isu lingkungan yang paling mendesak dihadapi oleh planet kita saat ini, dan langkah apa yang dapat diambil individu untuk membantu mengatasi isu-isu ini?
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="contoh"></iframe>

Prompt kedua menghasilkan keluaran yang lebih panjang dengan struktur yang lebih baik secara rata-rata. Penggunaan istilah 'esai' dalam instruksi ini sengaja dilakukan, karena GPT-3 dapat memahami definisi esai, dan oleh karena itu lebih mungkin menghasilkan respons yang koheren dan terstruktur.

### Banyak pertanyaan diskusi tidak efektif untuk prompting.

> _"Perang Sipil sebuah konflik tentang ekspansi? Setujukah Anda atau tidak setuju dan mengapa_

Berikut adalah pertanyaan diskusi nyata dari kursus sejarah perguruan tinggi. Ini tidak diformulasikan dengan benar dan terlalu terbuka. **Untuk mendapatkan respons diskusi yang baik, Anda perlu menulis ulang pertanyaannya di dalam prompt yang sudah jelas.** Prompt yang sudah jelas untuk pertanyaan diskusi di atas bisa jadi:

> _Jelaskan penyebab Perang Saudara dan apakah ekspansi memainkan peranan dalam konflik. Sertakan bukti untuk mendukung argumen Anda."_

Sekarang kita bisa menambahkan pemformatan dan petunjuk konteks.

<pre>
    <span className="yellow-highlight">Tulis respons diskusi yang sangat rinci, dalam struktur esai, yang menanggapi prompt berikut:</span>

<br/><br/>Jelaskan penyebab Perang Saudara dan apakah perluasan memainkan peran dalam konflik tersebut. Sertakan bukti untuk mendukung argumen Anda.
</pre>

### Otomasi pembaharuan prompt yang terdefinisi dengan baik dengan GPT-3

Contoh perubahan di atas dihasilkan dengan [ChatGPT](https://openai.com/blog/chatgpt/)dari OpenAI.

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}}/>
</div>

### Iterasi

Setelah membuat pertanyaan diskusi yang efektif, sekarang Anda perlu memperbaiki hasil yang dihasilkan oleh GPT-3. Hal ini mungkin melibatkan penyesuaian hasil keluaran untuk mematuhi batasan seperti jumlah kata, atau menggabungkan konsep dari hasil yang dihasilkan yang berbeda.

Metode sederhana untuk mengulang adalah dengan menghasilkan beberapa output dan meninjau mereka untuk memahami konsep yang digunakan GPT-3 dan struktur yang dipegangnya. Setelah hasil keluaran dievaluasi, Anda dapat memilih hasil yang paling sesuai dan menggabungkannya menjadi respons yang padu.

Cara lain untuk mengulang adalah dengan memulai dan kemudian **perluas dengan langkah demi langkah**. Ini membutuhkan lebih dari satu prompt: Sebuah prompt awal untuk menulis paragraf awal atau lebih dan kemudian prompt lainnya untuk mengembangkan apa yang sudah ditulis.

Berikut adalah pertanyaan diskusi potensial dalam filsafat:

> _"Apakah matematika diciptakan atau ditemukan? Gunakan penalaran yang hati-hati untuk menjelaskan jawaban Anda."_

Tambahkan ke dalam tampilan sederhana seperti ini:

<pre>
    <span className="yellow-highlight">Tulis sebuah paragraf awal sebagai tanggapan atas hal berikut:</span>
    <br/><br/>Apakah matematika diciptakan atau ditemukan? Gunakan pemikiran yang hati-hati untuk menjelaskan jawaban Anda
</pre>

Saya menghasilkan beberapa tanggapan dan menemukan satu yang saya suka:

<pre>
    <span className="bluegreen-highlight">Ada banyak perdebatan di kalangan filsuf dan matematikawan tentang apakah matematika diciptakan atau ditemukan. Beberapa berpendapat bahwa konsep dan prinsip matematika ada secara independen dari pikiran manusia dan oleh karena itu dapat dianggap sebagai penemuan bukan penemuan. Sebagai contoh, konsep angka, rasio, dan bentuk geometri diamati dalam dunia alam dan dapat diabstraksi serta dipelajari secara sistematis.</span>
</pre>

Ini adalah awal yang cukup baik. Kemudian saya mengikuti ini dengan permintaan lain untuk meluaskannya:

<pre>
    <span className="yellow-highlight">Tulis sebuah paragraf awal sebagai tanggapan atas hal berikut:</span>
    <br/><br/>Apakah matematika diciptakan atau ditemukan? Gunakan penalaran yang hati-hati untuk menjelaskan jawaban Anda. 
    <span className="yellow-highlight"><p/>Berikut adalah apa yang saya dapatkan sejauh ini:</span>
    <br/><br/>Terdapat banyak perdebatan di antara para filsuf dan ahli matematika mengenai apakah matematika diciptakan atau ditemukan. Beberapa berpendapat bahwa konsep dan prinsip matematika ada secara independen dari pikiran manusia dan oleh karena itu dapat dianggap sebagai penemuan bukan penemuan. Sebagai contoh, konsep angka, rasio, dan bentuk geometri diamati dalam dunia alam dan dapat diabstraksi serta dipelajari secara sistematis. 
    <p/><span className="yellow-highlight">tTulis paragraf selanjutnya dari esai saya</span>
</pre>

Coba prompt ekspansi berikut ini dengan demo di bawah (Anda akan membutuhkan API key OpenAI Anda)

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9uIHRoZSBvdGhlciBoYW5kLCBzb21lIGFyZ3VlIHRoYXQgbWF0aCBpcyBsYXJnZWx5IGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZC4gTWF0aGVtYXRpY2FsIHByaW5jaXBsZXMgYXJlIGJhc2VkIG9uIGxvZ2ljYWwgcmVhc29uaW5nLCB3aGljaCBpcyBhIGZlYXR1cmUgb2YgdGhlIGh1bWFuIG1pbmQuIEZvciBpbnN0YW5jZSwgRXVjbGlkZWFuIGdlb21ldHJ5IGlzIGJhc2VkIG9uIGFic3RyYWN0IGF4aW9tcyBhbmQgcG9zdHVsYXRlcywgd2hpY2ggYXJlIGFjY2VwdGVkIGFzIHRydWUgd2l0aG91dCBwcm9vZi4gQXMgc3VjaCwgaXQgY2FuIGJlIGFyZ3VlZCB0aGF0IGdlb21ldHJ5IGlzIGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZCByYXRoZXIgdGhhbiBhIGRpc2NvdmVyeS4gU2ltaWxhcmx5LCBtYXRoZW1hdGljYWwgZm9ybXVsYXMgYW5kIGVxdWF0aW9ucyBhcmUgdXNlZCB0byBtb2RlbCBhbmQgcHJlZGljdCBwaHlzaWNhbCBwaGVub21lbmEsIHdoaWNoIGFyZSBhZ2FpbiB0aGUgcmVzdWx0IG9mIGh1bWFuIHJlYXNvbmluZy4iLCJwcm9tcHQiOiJJIGFtIHdyaXRpbmcgYSBkZXRhaWxlZCBzaG9ydCBlc3NheSByZXNwb25kaW5nIHRvIHRoZSBmb2xsb3dpbmcgcHJvbXB0OiBcbklzIG1hdGggaW52ZW50ZWQgb3IgZGlzY292ZXJlZD8gVXNlIGNhcmVmdWwgcmVhc29uaW5nIHRvIGV4cGxhaW4geW91ciBhbnN3ZXIuIFxuXG5IZXJlIGlzIHdoYXQgSSBoYXZlIHNvIGZhcjogVGhlcmUgaXMgbXVjaCBkZWJhdGUgYW1vbmcgcGhpbG9zb3BoZXJzIGFuZCBtYXRoZW1hdGljaWFucyBhcyB0byB3aGV0aGVyIG1hdGggaXMgaW52ZW50ZWQgb3IgZGlzY292ZXJlZC4gU29tZSBhcmd1ZSB0aGF0IG1hdGhlbWF0aWNhbCBjb25jZXB0cyBhbmQgcHJpbmNpcGxlcyBleGlzdCBpbmRlcGVuZGVudGx5IG9mIGh1bWFuIG1pbmRzIGFuZCBjYW4gdGhlcmVmb3JlIGJlIGNvbnNpZGVyZWQgYXMgZGlzY292ZXJlZCByYXRoZXIgdGhhbiBpbnZlbnRlZC4gRm9yIGV4YW1wbGUsIHRoZSBjb25jZXB0IG9mIG51bWJlcnMsIHJhdGlvcywgYW5kIGdlb21ldHJpYyBzaGFwZXMgYXJlIG9ic2VydmVkIGluIHRoZSBuYXR1cmFsIHdvcmxkIGFuZCBjYW4gYmUgYWJzdHJhY3RlZCBhbmQgc3R1ZGllZCBpbiBhIHN5c3RlbWF0aWMgd2F5LiBcblxuV3JpdGUgdGhlIG5leHQgcGFyYWdyYXBoIG9mIG15IGVzc2F5LiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

Saya menghasilkan beberapa ekspansi dengan prompt ini dan memilih satu yang saya sukai untuk mendapatkan hasil akhir berikut:

<pre>
    Ada banyak perdebatan di kalangan filsuf dan matematikawan mengenai apakah matematika 
    <br/>diciptakan atau ditemukan. Beberapa berpendapat bahwa konsep dan prinsip matematika ada secara <br/>independen dari pikiran manusia dan oleh karena itu dapat dianggap sebagai penemuan bukan penemuan. 
    <br/>Sebagai contoh, konsep angka, rasio, dan bentuk geometri diamati secara alami <br/> dan dapat diabstraksi serta dipelajari secara sistematis.
    <span className="bluegreen-highlight">
    <br/>
    <br/>Di sisi lain, ada yang berargumen bahwa matematika sebagian besar merupakan hasil dari pikiran manusia. Prinsip
    <br/>matematika didasarkan pada penalaran logis,  yang merupakan fitur dari pikiran manusia. Misalnya,
    <br/>geometri Euclidean didasarkan pada aksioma abstrak dan postulat, yang mana diterima sebagai hal yang benar tanpa
    <br/>bukti. Oleh karena itu, dapat dikatakan bahwa geometri merupakan hasil dari pikiran manusia daripada
    <br/>penemuan. Demikian pula, rumus dan persamaan matematika digunakan untuk memodelkan dan memprediksi fenomena
    <br/>fisik, yang merupakan hasil dari penalaran manusia. 
    </span>
</pre>

Dengan menggunakan prompt ekspansi, kita dapat menulis secara bertahap dan melakukan iterasi pada setiap langkah. Ini berguna ketika Anda perlu **menghasilkan output berkualitas lebih tinggi dan ingin memodifikasi langkah-langkah peningkatan**.

Ditulis oleh [jayo78](https://twitter.com/jayo782).
