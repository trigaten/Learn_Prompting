# 🟡 LLM Menggunakan Tools

MRKL Systems[^1] (Modular Reasoning, Knowledge and Language, diucapkan "miracle") adalah **arsitektur neuro-simbolik** yang menggabungkan LLM (neural computation) dan alat eksternal seperti kalkulator (symbolic computation), untuk menyelesaikan masalah kompleks.

Sebuah sistem MRKL terdiri dari kumpulan modul (mis. kalkulator, API cuaca / weather API, basis data, dll.) dan router yang memutuskan cara 'mengarahkan' pertanyaan bahasa alami yang masuk ke modul yang sesuai.

Contoh sederhana dari sistem MRKL adalah LLM yang dapat menggunakan aplikasi kalkulator. Ini adalah sistem modul tunggal, di mana LLM adalah router. Ketika ditanya, `Apa itu 100 * 100?`, LLM dapat memilih untuk mengekstrak angka dari prompt, dan kemudian memberi tahu sistem MRKL untuk menggunakan aplikasi kalkulator untuk menghitung hasilnya. Ini mungkin terlihat seperti berikut:

```
Apa itu 100 * 100?

KALKULATOR [100 * 100]
```

Sistem MRKL akan melihat kata `KALKULATOR` dan memasukkan `100 * 100` ke aplikasi kalkulator. Ide sederhana ini dapat dengan mudah diperluas ke berbagai alat komputasi simbolik.

Pertimbangkan contoh aplikasi tambahan berikut:

- Sebuah chatbot yang mampu menanggapi pertanyaan tentang database keuangan dengan mengekstraksi informasi untuk membentuk kueri SQL dari teks pengguna.

```
Berapa harga saham Apple saat ini?

Harga saat ini adalah DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"].
```

- Sebuah chatbot yang mampu menjawab pertanyaan tentang cuaca dengan mengekstraksi informasi dari prompt dan menggunakan API cuaca untuk mengambil informasi.

```
Bagaimana cuacanya di New York?

Cuaca adalah WEATHER_API [New York].
```

- Atau bahkan tugas yang jauh lebih kompleks yang bergantung pada beberapa sumber data, seperti berikut:

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/ffc2b3b3-3044-4324-9833-e675d51fca2e)
Contoh Sistem MRKL (AI21)

## Contoh

Saya telah mereproduksi contoh Sistem MRKL dari makalah asli, menggunakan [Dust.tt](http://dust.tt/). Sistem membaca masalah matematika (mis. `Apa itu 20 kali 5 ^ 6?`), mengekstrak angka dan operasi, dan memformat ulang untuk aplikasi kalkulator (mis. `20 * 5 ^ 6`). Kemudian sistem mengirimkan persamaan yang diformat ulang ke aplikasi kalkulator Google, dan mengembalikan hasilnya. Perhatikan bahwa makalah asli melakukan penyetelan prompt pada router (LLM), tetapi saya tidak melakukannya dalam contoh ini. Mari kita lihat bagaimana ini bekerja:

Pertama, saya membuat kumpulan data sederhana di tab Dust `Dataset`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/5c4a7e73-0e33-41eb-b2c5-c1fd3da06cb5)


Kemudian, saya beralih ke tab `Specification` dan memuat kumpulan data menggunakan blok `input`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/20175a39-5dbe-41f4-b710-ce68f0a601ae)



Selanjutnya, saya membuat blok `llm` yang mengekstrak angka dan operasi. Perhatikan bagaimana pada prompt saya memberitahunya bahwa kita akan menggunakan kalkulator Google. Model yang saya gunakan (GPT-3) kemungkinan memiliki beberapa pengetahuan tentang kalkulator Google dari pre-training.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/1bb115c9-4018-47c5-b48c-5a45d6594475)


Kemudian, saya membuat blok `code`, yang menjalankan kode javascript sederhana untuk menghapus spasi dari penyelesaian.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/d60c45fe-645f-4b1b-a2aa-f08558ecce0a)


Terakhir, saya membuat blok `search` yang mengirimkan persamaan yang diformat ulang ke kalkulator Google.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/7fcea60b-7802-40f3-9caa-2a0e03aeea2d)


Di bawah ini kita dapat melihat hasil akhirnya, yang semuanya benar!

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/07e9046b-e4ee-4230-ac06-9c9a6f99151c)


Silakan copy dan lakukan eksperimen dengan playground ini [di sini](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7).

## Catatan

MRKL dikembangkan oleh [AI21](https://www.ai21.com/) dan awalnya menggunakan LLM J-1 (Jurassic 1)[^2].

## More

Lihat [contoh](https://python.langchain.com/en/latest/modules/agents/agents/examples/mrkl.html) MRKL System yang dibangun dengan LangChain di sini.

---

[^1]: Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022). MRKL Systems: A modular, neuro-symbolic architecture that combines large language models, external knowledge sources and discrete reasoning. [↩](https://learnprompting.org/docs/advanced_applications/mrkl#fnref-1)
[^2]: Lieber, O., Sharir, O., Lentz, B., & Shoham, Y. (2021). Jurassic-1: Technical Details and Evaluation, White paper, AI21 Labs, 2021. URL: [Https://Uploads-Ssl](https://uploads-ssl/). Webflow. Com/60fd4503684b466578c0d307/61138924626a6981ee09caf6_jurassic_ Tech_paper. Pdf. [↩](https://learnprompting.org/docs/advanced_applications/mrkl#fnref-2)
