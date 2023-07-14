# 🟢 Memecahkan Pertanyaan Diskusi

Dengan prompt yang tepat, GPT-3 sangat mampu menulis tanggapan singkat. Untuk menunjukkan ini, saya akan **menyelesaikan pertanyaan diskusi**, tugas mingguan umum di banyak program kuliah. Respon diskusi biasanya sekitar 100-700 kata. Konten yang lebih panjang bisa menjadi sedikit lebih sulit karena LLM memiliki memori terbatas dan kesulitan memahami gambaran besar tentang apa yang mereka tulis. Untuk detail lebih lanjut, silakan buka referensi[^1].

Mari kita lihat contoh pertanyaan diskusi dasar berikut ini:

> "*Apa isu lingkungan yang paling mendesak yang dihadapi planet kita saat ini, dan langkah apa yang dapat diambil individu untuk membantu mengatasi masalah ini?*"
> 

Kita dapat mengubahnya menjadi prompt sederhana untuk GPT-3 dengan menambahkan "Tanggapi hal berikut:"

```
Tanggapi hal berikut:

Apa isu lingkungan yang paling mendesak yang dihadapi planet kita saat ini, dan langkah apa yang dapat diambil individu untuk membantu mengatasi masalah ini? ```
```

Hasilnya tidak konsisten, dan beberapa hanya satu atau dua kalimat. Respon diskusi yang baik harus memiliki beberapa paragraf, sehingga hasilnya tidak ideal. Prompt yang baik harus memberikan **instruksi spesifik tentang format dan konten**. Anda ingin menghilangkan ambiguitas dalam bahasa Anda untuk meningkatkan konsistensi dan kualitas. Berikut adalah prompt yang lebih baik.

```
Tulis esai yang sangat rinci dengan paragraf pengantar, tubuh, dan kesimpulan yang menjawab hal berikut:

Apa isu lingkungan yang paling mendesak yang dihadapi planet kita saat ini, dan langkah apa yang dapat diambil individu untuk membantu mengatasi masalah ini?
```

https://player.vimeo.com/video/778327269?h=77d739ae72&badge=0&autopause=0&player_id=0&app_id=58479

Prompt kedua menghasilkan hasil yang lebih panjang dengan struktur yang lebih baik secara rata-rata. Penggunaan istilah 'esai' dalam prompt merupakan kesengajaan, karena GPT-3 dapat memahami definisi esai, dan oleh karena itu lebih mungkin menghasilkan respon yang koheren dan terstruktur.

## Banyak pertanyaan diskusi tidak efektif untuk prompting.

> Apakah Perang Saudara merupakan konflik tentang perluasan? Setuju atau tidak setuju dan mengapa?"
> 

Berikut adalah pertanyaan diskusi dari kursus sejarah perguruan tinggi. Diskusi ni tidak diformulasikan dengan benar dan merupakan pertanyaan yang terlalu terbuka. **Untuk mendapatkan respon diskusi yang baik, Anda perlu menulis ulang pertanyaan menjadi prompt yang terdefinisi dengan baik**. Prompt yang terdefinisi dengan baik untuk pertanyaan diskusi di atas dapat menjadi:

> Jelaskan penyebab Perang Saudara dan apakah perluasan memainkan peran dalam konflik tersebut. Sertakan bukti untuk mendukung argumen Anda.
> 

Sekarang kita dapat menambahkan format dan petunjuk konteks.

```
Tulis respons diskusi yang sangat rinci, dalam struktur esai, yang menanggapi prompt berikut:

Jelaskan penyebab Perang Saudara dan apakah perluasan memainkan peran dalam konflik tersebut. Sertakan bukti untuk mendukung argumen Anda.
```

## Otomatisasi penulisan prompt yang terdefinisi dengan baik menggunakan GPT-3

Contoh penulisan ulang di atas dihasilkan dengan [ChatGPT](https://openai.com/blog/chatgpt/) dari OpenAI.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/fa509fb7-e71c-4dd9-8fd6-4a5a6d2814fb)


## Iterasi

Setelah merancang prompt yang efektif untuk pertanyaan diskusi Anda, Anda sekarang perlu menyempurnakan hasil yang dihasilkan oleh GPT-3. Hal ini mungkin harus menyesuaikan output untuk mematuhi batasan seperti jumlah kata, atau menggabungkan konsep dari hasil berbeda yang dihasilkan.

Metode sederhana iterasi adalah menghasilkan beberapa output dan meninjau mereka untuk memahami konsep yang digunakan oleh GPT-3 dan struktur yang diikuti. Setelah output dievaluasi, Anda dapat memilih hasil yang paling cocok dan menggabungkannya menjadi respons yang koheren.

Cara lain untuk melakukan iterasi adalah memulai dan kemudian **memperluas langkah demi langkah**. Ini memerlukan lebih dari satu prompt: prompt awal untuk menulis paragraf awal atau lebih dan kemudian prompt lain untuk memperluas apa yang sudah ditulis.

Berikut adalah pertanyaan diskusi filosofis yang potensial:

> Apakah matematika diciptakan atau ditemukan? Gunakan penalaran yang hati-hati untuk menjelaskan jawaban Anda.
> 

Tambahkan ke prompt sederhana seperti ini:

```
Tulis paragraf awal yang menanggapi hal berikut:

Apakah matematika diciptakan atau ditemukan? Gunakan penalaran yang hati-hati untuk menjelaskan jawaban Anda.
```

Saya menghasilkan beberapa respons dan menemukan satu yang saya sukai:

```
Terdapat banyak perdebatan di antara para filsuf dan ahli matematika mengenai apakah matematika diciptakan atau ditemukan. Beberapa berpendapat bahwa konsep dan prinsip matematika ada secara independen dari pikiran manusia dan oleh karena itu dapat dianggap sebagai ditemukan daripada diciptakan. Misalnya, konsep angka, rasio, dan bentuk geometris diamati di alam dan dapat diabstraksi dan dipelajari secara sistematis.
```

Ini adalah awal yang cukup baik. Lalu saya mengikuti prompt ini dengan prompt lain untuk memperluas:

```
Saya menulis respons diskusi singkat terperinci dalam struktur esai, yang menanggapi prompt berikut:

Apakah matematika diciptakan atau ditemukan? Gunakan penalaran yang hati-hati untuk menjelaskan jawaban Anda. Berikut adalah apa yang saya miliki sejauh ini:

Terdapat banyak perdebatan di antara para filsuf dan ahli matematika mengenai apakah matematika diciptakan atau ditemukan. Beberapa berpendapat bahwa konsep dan prinsip matematika ada secara independen dari pikiran manusia dan oleh karena itu dapat dianggap sebagai ditemukan daripada diciptakan. Misalnya, konsep angka, rasio, dan bentuk geometris diamati di alam dan dapat diabstraksi dan dipelajari secara sistematis. Tulis paragraf berikutnya dari esai saya.
```

Cobalah perluasan prompt berikut ini dengan demo di bawah ini (Anda akan membutuhkan key API OpenAI Anda)

Saya menghasilkan beberapa ekspansi dengan prompt ini dan memilih satu yang saya sukai untuk akhirnya menghasilkan hasil akhir berikut:

```
Terdapat banyak perdebatan di antara para filsuf dan ahli matematika mengenai apakah matematika diciptakan atau ditemukan. Beberapa berpendapat bahwa konsep dan prinsip matematika ada secara independen dari pikiran manusia dan oleh karena itu dapat dianggap sebagai ditemukan daripada diciptakan. Misalnya, konsep angka, rasio, dan bentuk geometris diamati di alam dan dapat diabstraksi dan dipelajari secara sistematis.

Di sisi lain, ada yang berargumen bahwa matematika sebagian besar merupakan hasil dari pikiran manusia. Prinsip matematika didasarkan pada penalaran logis, yang merupakan fitur dari pikiran manusia. Misalnya, geometri Euclidean didasarkan pada aksioma abstrak dan postulat, yang diterima sebagai benar tanpa bukti. Oleh karena itu, dapat dikatakan bahwa geometri merupakan hasil dari pikiran manusia daripada penemuan. Demikian pula, rumus dan persamaan matematika digunakan untuk memodelkan dan memprediksi fenomena fisik, yang merupakan hasil dari penalaran manusia.
```

Dengan menggunakan konsep perluasan prompt, kita dapat menulis lebih secara bertahap dan melakukan iterasi pada setiap langkah. Ini berguna ketika Anda perlu menghasilkan output dengan kualitas yang lebih tinggi dan ingin memodifikasi langkah-langkah bertahap.

Ditulis oleh [jayo78](https://twitter.com/jayo782).

---

[^1]: Jin, Y., Kadam, V., & Wanvarie, D. (2022). Plot Writing From Pre-Trained Language Models. [↩](https://learnprompting.org/docs/applied_prompting/short_response#fnref-1)
