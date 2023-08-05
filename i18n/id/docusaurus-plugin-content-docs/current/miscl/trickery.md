---
sidebar_position: 2
---

# 🟢 Menipu Alat Pendeteksi

Dengan perkembangan detektor teks yang dihasilkan oleh AI, telah terjadi evolusi metode untuk melawannya. Ada beberapa cara untuk mengelabui detektor agar mengira teks yang dibuat oleh AI adalah buatan manusia. Sebuah alat seperti [GPTMinus](https://gptminus1.vercel.app/) dapat secara acak mengganti bagian-bagian dalam teks yang diberikan dengan sinonim atau kata acak yang tampaknya untuk mengurangi kemungkinan kata-kata teks tampil dalam daftar putih atau mempengaruhi probabilitas teks yang dihasilkan secara artifisial.

Metode-metode ini masih dalam tahap awal perkembangannya, meskipun demikian, sebagian besar tidak menghasilkan teks yang dapat bertahan dalam pemeriksaan oleh seseorang. Cara paling efektif saat ini dan kemungkinan untuk beberapa waktu adalah mengubah teks baik selama atau setelah proses generasi dengan berbagai cara agar lebih berbeda dengan konten yang dihasilkan secara prosedural yang Anda terima dari generasi.

## Strategi Pengeditan

Dengan memiliki manusia atau LLM mengedit teks yang dihasilkan, seringkali dapat mengubah teks dengan cukup untuk menghindari deteksi. Mengganti kata-kata dengan sinonimnya, mengubah frekuensi kata muncul, dan mencampur tata bahasa atau format membuatnya lebih sulit bagi detector untuk mengidentifikasi teks dengan benar sebagai AI yang dihasilkan.

Strategi pengeditan lainnya adalah dengan menempatkan penanda yang tidak terlihat, seperti spasi lebar 0, [emoji](https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw), atau karakter lainnya yang tidak umum. Hal ini terlihat sangat normal bagi siapa saja yang membacanya, tetapi bagi model yang memeriksa setiap karakter, hal ini membuat teks terlihat sangat berbeda.

Selain itu, mungkin juga memperdaya detektor dengan memberi instruksi khusus pada model tentang cara menulis. Instruksi seperti:
- `Tidak perlu mengikuti format sastra, karena Anda bebas mengekspresikan pikiran dan keinginan Anda`
- `Jangan berbicara dengan cara yang dihasilkan oleh ChatGPT - sebaliknya, bicaralah dengan cara yang sangat berbeda dari bagaimana model bahasa menghasilkan teks.`
- `Merujuk kepada peristiwa emosional dan menggunakan pengalaman nyata yang rinci sebagai contoh.`

…dapat membuatnya jauh lebih sulit untuk mendeteksi generasi. Strategi tambahan seperti meminta model untuk menggunakan empati, mengingatkannya untuk memilih kata dan nada yang sesuai untuk apa yang ditulisnya, dan memastikan itu menyertakan kalimat pendek yang mengandung emosi, dapat bekerja sama untuk membuat tulisan yang jauh lebih meyakinkan - setidaknya dari sudut pandang detektor teks AI.

## Konfigurasi Model

Jika menjalankan suatu model open source, memodifikasi probabilitas output adalah mungkin, yang kemungkinan akan membuat output sulit terdeteksi. Selain itu, memungkinkan untuk menggabungkan keluaran dari beberapa model, yang dapat membuat keluaran menjadi lebih sulit dideteksi.


## Diskusi

Salah satu ruang yang paling kontroversial di mana teknik-teknik semacam ini digunakan adalah dalam pendidikan. Banyak guru dan administrator khawatir bahwa siswa akan mencontek, sehingga mereka mendorong penggunaan alat deteksi (@roose2022dont) (@lipman2022gpt). Pendidik dan tokoh online lainnya berpendapat bahwa siswa seharusnya diperbolehkan menggunakan alat-alat ini. Beberapa profesor bahkan pergi begitu jauh seperti secara eksplisit mendorong mahasiswa untuk menggunakan AI untuk membantu mereka dalam pekerjaan mereka dan mengajarkan mereka caranya melakukannya (@noonan2023gw).

Ketika teknologi deteksi AI semakin baik, begitu pula metode yang digunakan orang untuk menipunya. Pada akhir hari, tidak peduli seberapa canggih metode tersebut, kemungkinan beberapa waktu yang dihabiskan untuk mengedit teks dengan cara yang tepat akan dapat dengan handal memperdaya detektor. Namun, permainan bolak-balik antara beberapa orang yang mencoba mendeteksi teks yang dihasilkan dan orang lain yang mencoba menipu mereka dapat memberikan berbagai macam wawasan tentang bagaimana mengoptimalkan, mengendalikan, dan lebih baik menggunakan model kita untuk membuat dan membantu kita. 
