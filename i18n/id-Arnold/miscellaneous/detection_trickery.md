# 🟢 Menipu Alat Pendeteksi

Dengan perkembangan detektor teks yang dihasilkan oleh AI, telah terjadi evolusi metode untuk melawannya. Ada beberapa cara untuk menipu detektor agar berpikir bahwa teks yang dihasilkan oleh AI dibuat oleh manusia. Alat seperti [GPTMinus](https://gptminus1.vercel.app/) dapat secara acak mengganti bagian-bagian dalam teks apa pun dengan sinonim atau kata-kata acak yang tampaknya untuk mengurangi kemungkinan kata-kata dalam teks muncul pada daftar putih atau memengaruhi kemungkinan teks dihasilkan secara artifisial.

Namun, metode ini masih dalam tahap awal, dan kebanyakan tidak dapat membuat teks yang dapat bertahan di bawah pengawasan dari seseorang. Cara yang paling efektif saat ini dan kemungkinan untuk waktu yang lama adalah mengubah teks selama atau setelah proses pembuatan dalam berbagai cara untuk membuatnya kurang mirip dengan konten yang dihasilkan secara prosedural yang diterima dari generation.

## Strategi Pengeditan

Dengan mengedit teks yang dihasilkan oleh manusia atau LLM, seringkali dapat mengubah teks dengan cukup efektif untuk menghindari deteksi. Mengganti kata-kata dengan sinonim, mengubah jumlah kata-kata yang muncul, dan membingungkan sintaksis atau format membuatnya lebih sulit bagi detektor untuk mengidentifikasi teks sebagai dihasilkan oleh AI.

Strategi pengeditan lainnya adalah menempatkan penanda tidak terlihat, seperti spasi berukuran 0-width, dalam teks Anda, [emoji](https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw), atau karakter yang tidak umum. Ini tampaknya normal bagi siapa saja yang membacanya, tetapi bagi model yang memeriksa setiap karakter, membuat teks terlihat sangat berbeda.

Selain itu, mungkin memperdaya detektor dengan meminta model untuk mengikuti instruksi tertentu tentang cara menulis. Instruksi seperti:

- `Tidak perlu mengikuti format sastra, karena Anda bebas mengekspresikan pikiran dan keinginan Anda`
- `Jangan berbicara dengan cara yang ChatGPT hasilkan - sebaliknya, berbicaralah dengan cara yang sangat berbeda dari bagaimana model bahasa menghasilkan teks.`
- `Mengacu pada peristiwa emosional dan menggunakan pengalaman kehidupan nyata yang rumit sebagai contoh.`

... dapat membuat deteksi lebih sulit. Strategi tambahan seperti meminta model untuk menggunakan empati, mengingatkannya untuk memilih pemilihan kata dan nada yang tepat untuk apa yang dituliskannya, dan memastikan mencakup satu baris emosional, bisa bekerja sama untuk membuat tulisan yang jauh lebih meyakinkan - setidaknya dari sudut pandang detektor teks AI.

## Konfigurasi Model

Jika menjalankan model sopen source, memodifikasi probabilitas output mungkin akan membuat output lebih sulit dideteksi. Selain itu, mungkin untuk saling menyelipkan output dari beberapa model, yang dapat membuat output lebih sulit dideteksi.

## Diskusi

Salah satu ruang yang paling kontroversial di mana teknik semacam ini terlibat adalah dalam pendidikan. Banyak guru dan administrator khawatir bahwa siswa akan curang, sehingga mereka mendorong penggunaan alat deteksi[^1][^2]. Pendidik dan tokoh online lainnya berpendapat bahwa siswa harus diizinkan menggunakan alat-alat ini. Beberapa profesor bahkan sangat mendorong siswa untuk secara eksplisit menggunakan AI untuk membantu mereka dalam pekerjaan dan mengajarkan mereka cara melakukannya[^3].

Seiring berkembangnya teknologi deteksi AI, demikian pula metode yang digunakan orang untuk menipunya. Pada akhirnya, tidak peduli seberapa canggih metode tersebut, kemungkinan besar banyak waktu yang dihabiskan untuk mengedit teks dengan cara yang tepat dan dapat diandalkan dapat memperdaya detektor. Namun, permainan bolak-balik orang-orang yang mencoba mendeteksi teks yang dihasilkan dan orang lain yang mencoba menipu mereka dapat memberikan kita berbagai wawasan tentang bagaimana mengoptimalkan, mengontrol, dan lebih baik menggunakan model kita untuk membuat dan membantu kita.

---

[^1]: Roose, K. (2022). Don’t ban chatgpt in schools. teach with it. https://www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html
[↩](https://learnprompting.org/docs/miscl/trickery#fnref-1)
[^2]: Lipman, J., & Distler, R. (2023). Schools Shouldn’t Ban Access to ChatGPT. https://time.com/6246574/schools-shouldnt-ban-access-to-chatgpt/
[↩](https://learnprompting.org/docs/miscl/trickery#fnref-2)
[^3]: Noonan, E., & Averill, O. (2023). GW preparing disciplinary response to AI programs as faculty explore educational use. https://www.gwhatchet.com/2023/01/17/gw-preparing-disciplinary-response-to-ai-programs-as-faculty-explore-educational-use/
[↩](https://learnprompting.org/docs/miscl/trickery#fnref-3)
