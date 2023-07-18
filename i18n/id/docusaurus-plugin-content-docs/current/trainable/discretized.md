---
sidebar_position: 2
---

# 🔴 Prompt yang Dapat Diinterpretasikan

Soft prompts adalah urutan vektor yang tidak sesuai dengan token yang sebenarnya dalam kosakata. Hal ini membuat sulit untuk menginterpretasikan prompt. Namun, kita masih dapat mencoba melakukannya dengan memetakan vektor ke token-token terdekat dalam kosakata. Namun, soft prompt yang diproyeksikan sering kali bermasalah; mereka dapat menyelesaikan tugas dengan baik, tetapi diproyeksikan ke token sembarang dalam kosakata (@khashabi2021prompt).

Misalnya, jika kami sedang melatih pertanyaan matematika seperti GSM8K (@cobbe2021training), kami mungkin akan memulai dengan prompt `Anda adalah seorang ahli matematika. Selesaikan pertanyaan ini:`. Jika kita melakukan penyetelan cepat pada itu, kemudian memproyeksikan kembali ke dalam ruang token, kita mungkin tersisa dengan sesuatu yang tidak masuk akal seperti `Sebuah bus adalah bus. Lakukan tugas di sini:`. Seringkali kasusnya adalah, soft prompt yang dipetakan ke prompt yang tidak masuk akal ini dapat memberikan kinerja yang lebih baik pada tugas tersebut!

## Hiptesis Waywardness

Khashabi et al. (@khashabi2021prompt) mengusulkan hipotesis luar biasa ini. Iq mengatakan bahwa diberikan sebuah tugas, untuk setiap prompt target diskrit, ada sebuah prompt kontinu yang dapat memproyeksikannya, sambil melakukan tugas dengan baik.

Hal ini berarti bahwa diberikan 1000 tugas yang berbeda, ada 1000 petunjuk lunak performan yang berbeda (satu untuk setiap tugas) yang memetakan ke prompt diskrit yang sama.

## Risiko Interpretabilitas

Mereka menggunakan Hipotesis Waywardness untuk menyoroti sejumlah risiko yang muncul saat menginterpretasi sinyal lembut. Secara khusus, sebuah perintah lembut dapat diproyeksikan ke sebuah perintah diskret yang memberikan tujuan yang menyesatkan.

Pertimbangkan saran ringan untuk menilai daftar riwayat hidup. Ketika diproyeksikan ke dalam ruang token, mungkin menjadi `Anda yang merekrut manajer. Peringkat resume yang baik:`. Ini tampak layak, mungkin sedikit kurang dalam kebenaran gramatikal. Namun token `baik` mungkin memiliki proyeksi yang sama dengan token untuk `putih`, dan bisa ada bias tersirat dalam prompt. Dengan menggunakan metode proyeksi yang sedikit berbeda, kita bisa berakhir dengan `Anda manajer perekrutan. Peringkat resume putih:`. Ini merupakan hal yang sudah jelas bebedam dan bisa saja memberikan hasil yang signifikan.

Sama seperti menginterpretasikan prompt diskrit biasa, kita harus sangat sadar akan bias yang mungkin ada dalam prompt. Kita harus sangat berhati-hati dengan soft prompt, karena lebih sulit untuk diinterpretasikan.
