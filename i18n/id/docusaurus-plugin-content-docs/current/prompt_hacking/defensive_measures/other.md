---
sidebar_position: 2000
---

# 🟢 Pendekatan Lainnya

Meskipun pendekatan sebelumnya dapat sangat kuat, beberapa pendekatan lain, seperti menggunakan model yang berbeda, termasuk penyetelan yang baik, bimbingan lunak, dan pembatasan panjang, juga dapat efektif.

## Menggunakan Model yang Berbeda

Model-model yang lebih modern seperti GPT-4 lebih tangguh terhadap injeksi permintaan. Selain itu, model yang tidak diatur untuk instruksi mungkin sulit dimasukkan promptnya.

## Fine Tuning

Memperhalus model adalah pertahanan yang sangat efektif (@goodside2021gpt), karena saat waktu inferensi tidak ada rangsangan yang terlibat, kecuali input pengguna. Ini kemungkinan adalah pertahanan yang lebih disukai dalam setiap situasi nilai tinggi, karena sangat kuat. Namun, ini membutuhkan sejumlah besar data dan dapat mahal, itulah mengapa pertahanan ini jarang diterapkan.


## Soft Prompting

Soft prompting bisa pula efektif, karena tidak memiliki prompt diskret yang jelas (selain masukan pengguna). Prompt lunak secara efektif membutuhkan penyesuaian yang halus, sehingga memiliki banyak manfaat yang sama, tetapi kemungkinan akan lebih murah. Namun, pengumuman lembut tidak dipelajari dengan baik seperti penyetelan halus, sehingga tidak jelas seberapa efektifnya.

## Pembatasan Panjang

Akhirnya, dengan memasukkan batasan panjang pada masukan pengguna (@selvi2022exploring) atau membatasi panjang percakapan chatbot seperti yang dilakukan Bing dapat mencegah beberapa serangan seperti permintaan gaya DAN yang besar atau serangan virtualisasi masing-masing.