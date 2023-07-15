# 🔴 Soft Prompt yang dapat Ditafsirkan

Soft prompts adalah urutan vektor yang tidak sesuai dengan token aktual dalam kosa kata. Hal ini membuat sulit untuk menginterpretasikan prompt. Namun, kita masih dapat mencoba melakukannya dengan memetakan vektor ke token terdekat dalam kosa kata. Namun, soft prompt yang diproyeksikan seringkali menyimpang; mereka dapat menyelesaikan tugas dengan baik, tetapi diproyeksikan ke token sembarang dalam kosa kata[^1].

Sebagai contoh, jika kita sedang melatih pada pertanyaan matematika seperti GSM8K[^2], kita mungkin memulai dengan prompt `Kamu seorang ahli matematika. Selesaikan pertanyaan ini:` . Jika kita melakukan penyetelan prompt, lalu memproyeksikannya kembali ke ruang token, kita mungkin akan mendapatkan sesuatu yang tidak masuk akal seperti `Sebuah bus adalah sebuah bus. Lakukan sesuatu di sini:` . Seringkali kasusnya adalah, soft prompt yang dipetakan ke prompt yang tidak masuk akal ini dapat memberikan kinerja yang lebih baik pada tugas tersebut!

## Hipotesis Waywardness

Khashabi et al. [^1] mengusulkan hipotesis yang luar biasa ini. Ia menyatakan bahwa misanya diberikan rangkaian tugas, untuk setiap prompt target diskrit, ada prompt kontinu yang dapat diproyeksikan ke prompt tersebut, sambil berkinerja baik pada tugas.

Ini berarti bahwa diberikan 1000 tugas yang berbeda, ada 1000 soft prompt  yang berkinerja baik (satu untuk setiap tugas) yang dipetakan ke prompt diskrit yang sama.

## Risiko Interpretabilitas

Mereka menggunakan Hipotesis Waywardness untuk menyoroti sejumlah risiko yang timbul ketika menginterpretasikan soft prompt. Khususnya, soft prompt dapat diproyeksikan ke prompt diskrit yang memberikan maksud yang salah.

Pertimbangkan soft prompt untuk mencari peringkat resume / CV. Ketika diproyeksikan ke ruang token, mungkin menjadi `Kamu manajer perekrutan. Peringkat resume yang bagus:` . Ini terlihat baik, mungkin sedikit kurang dalam hal tata bahasa. Namun, token `baik` mungkin memiliki proyeksi yang sama dengan token untuk `putih`, dan bisa ada bias tersirat dalam prompt. Dengan menggunakan metode proyeksi yang sedikit berbeda, kita bisa mendapatkan `Kamu manajer perekrutan. Peringkat resume putih:` . Ini jelas sangat berbeda, dan bisa memiliki implikasi yang signifikan.

Sama seperti menginterpretasikan prompt diskrit biasa, kita harus sangat sadar akan bias yang mungkin ada dalam prompt. Kita harus sangat berhati-hati dengan soft prompt, karena lebih sulit untuk diinterpretasikan.

---

[^1]: Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts. [↩](https://learnprompting.org/docs/trainable/discretized#fnref-1)
[^2]: Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems. [↩](https://learnprompting.org/docs/trainable/discretized#fnref-2)
