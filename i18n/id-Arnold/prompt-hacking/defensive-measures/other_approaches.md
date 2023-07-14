# 🟢 Pendekatan Lainnya

Meskipun pendekatan sebelumnya dapat sangat kuat, beberapa pendekatan lain, seperti menggunakan model yang berbeda, termasuk fine tuning, soft prompting, dan pembatasan panjang, juga dapat efektif.

## Menggunakan Model yang Berbeda

Model modern seperti GPT-4 lebih kuat terhadap injeksi prompt. Selain itu, model yang tidak dioptimalkan untuk instruksi mungkin sulit untuk diinjeksi prompt.

## Fine Tuning

Fine tuning model adalah pertahanan yang sangat efektif[^1], karena pada saat inferensi tidak ada prompt yang terlibat, kecuali input pengguna. Ini mungkin adalah pertahanan yang diinginkan dalam situasi nilai tinggi, karena sangat kuat. Namun, ini membutuhkan jumlah data yang besar dan mungkin mahal, itulah mengapa pertahanan ini tidak sering diimplementasikan.

## Soft Prompting

Soft prompting juga mungkin efektif, karena tidak memiliki prompt diskrit yang jelas (selain input pengguna). Soft prompting efektif memerlukan fine tuning, sehingga memiliki banyak manfaat yang sama, tetapi kemungkinan akan lebih murah. Namun, soft prompting tidak dipelajari dengan baik seperti fine tuning, sehingga tidak jelas seberapa efektifnya.

## Pembatasan Panjang

Terakhir, pembatasan panjang pada input pengguna[^2] atau membatasi panjang percakapan chatbot seperti yang dilakukan Bing dapat mencegah beberapa serangan seperti injeksi prompt dengan gaya DAN yang besar atau serangan virtualisasi secara berturut-turut.

---

[^1]: Goodside, R. (2022). GPT-3 Prompt Injection Defenses. https://twitter.com/goodside/status/1578278974526222336?s=20&t=3UMZB7ntYhwAk3QLpKMAbw [↩]
[^2]: Selvi, J. (2022). Exploring Prompt Injection Attacks. https://research.nccgroup.com/2022/12/05/exploring-prompt-injection-attacks/ [↩]
