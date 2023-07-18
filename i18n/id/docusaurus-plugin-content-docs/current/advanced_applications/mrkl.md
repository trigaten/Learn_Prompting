---
sidebar_position: 2
---

# 🟡 LLM Menggunakan Tools

MRKL Systems(@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, diucapkan "miracle") adalah **arsitektur neuro-simbolik** yang menggabungkan LLM (neural computation) dan alat eksternal seperti kalkulator (symbolic computation), untuk menyelesaikan masalah kompleks.

Sistem MRKL terdiri dari satu set modul (misalnya kalkulator, API cuaca, basis data, dll.) dan sebuah pemroses yang menentukan cara 'mengarahkan' permintaan bahasa alami yang masuk ke modul yang tepat.

Contoh sederhana dari sistem MRKL adalah LLM yang dapat menggunakan aplikasi kalkulator. Ini adalah sistem modul tunggal, di mana LLM adalah router. Ketika ditanyakan, `Apa itu 100*100?`, LLM dapat memilih untuk mengekstrak angka dari pertanyaan, dan kemudian memberi tahu sistem MRKL untuk menggunakan aplikasi kalkulator untuk menghitung hasilnya. Ini mungkin terlihat seperti berikut:

<pre>
<p>Apa itu 100*100?</p>

<span className="bluegreen-highlight">CALCULATOR[100*100]</span>
</pre>

Sistem MRKL akan melihat kata `KALKULATOR` dan memasukkan `100*100` ke aplikasi kalkulator. Ide sederhana ini dapat dengan mudah diperluas ke berbagai alat komputasi simbolik.

Pertimbangkan contoh tambahan contoh dari pengaplikasiannya:

- Sebuah chatbot yang mampu menanggapi pertanyaan tentang database keuangan dengan mengekstraksi informasi untuk membentuk kueri SQL dari teks pengguna.

<pre>
<p>Berapa harga saham Apple saat ini?</p>

<span className="bluegreen-highlight">Harga saat ini adalah DATABASE [SELECT harga dari stok WHERE perusahaan = "Apple" DAN waktu = "sekarang"].</span>
</pre>

- Sebuah chatbot yang mampu menjawab pertanyaan tentang cuaca dengan mengekstraksi informasi dari prompt dan menggunakan API cuaca untuk mengambil informasi.

<pre>
<p>Bagaimana cuaca di New York?</p>

<span className="bluegreen-highlight">Cuaca adalah WEATHER_API[New York].</span>
</pre>

- Atau bahkan tugas yang jauh lebih kompleks yang bergantung pada beberapa sumber data, seperti berikut:


import mrkl_task from '@site/docs/assets/advanced/mrkl_task.webp';
import dataset from '@site/docs/assets/advanced/mrkl/dataset.webp';
import load_dataset from '@site/docs/assets/advanced/mrkl/load_dataset.webp';
import model from '@site/docs/assets/advanced/mrkl/model.webp';
import extract from '@site/docs/assets/advanced/mrkl/extract.webp';
import search from '@site/docs/assets/advanced/mrkl/search.webp';
import final from '@site/docs/assets/advanced/mrkl/final.webp';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Contoh Sistem MRKL (AI21)
</div>

## Contoh

Saya telah mereproduksi sebuah contoh Sistem MRKL dari makalah aslinya, menggunakan Dust.tt, yang terhubung [di sini](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7). Sistem membaca masalah matematika (misalnya `Apa itu 20 kali 5^6?`), mengekstrak angka dan operasi, dan memformat ulang untuk aplikasi kalkulator (misalnya `20*5^6`). Kemudian, ia mengirim persamaan yang diformat ulang ke aplikasi kalkulator Google, dan mengembalikan hasilnya. Perhatikan bahwa kertas asli melakukan penyetelan cepat pada router (LLM), tetapi tidak saya lakukan dalam contoh ini. Mari kita jelajahi bagaimana ini berfungsi:

Pertama, saya membuat dataset sederhana pada tab `Dataset` Dust.

<div style={{textAlign: 'center'}}>
  <img src={dataset} style={{width: "750px"}} />
</div>

Lalu, saya beralih ke tab `Spesifikasi` dan memuat dataset menggunakan blok input ``.

<div style={{textAlign: 'center'}}>
  <img src={load_dataset} style={{width: "750px"}} />
</div>

Selanjutnya, saya membuat blok `llm` yang mengekstrak angka dan operasi. Perhatikan bagaimana dalam prompt saya memberitahukannya bahwa kita akan menggunakan kalkulator Google. Model yang saya gunakan (GPT-3) kemungkinan memiliki beberapa pengetahuan tentang kalkulator Google dari pra-pelatihan.

<div style={{textAlign: 'center'}}>
  <img src={model} style={{width: "750px"}} />
</div>

Lalu, saya membuat blok kode ``, yang menjalankan beberapa kode javascript sederhana untuk menghapus spasi dari penyelesaian.

<div style={{textAlign: 'center'}}>
  <img src={extract} style={{width: "750px"}} />
</div>

Akhirnya, saya membuat blok `pencarian` yang mengirim persamaan yang diformat ulang ke kalkulator Google.

<div style={{textAlign: 'center'}}>
  <img src={search} style={{width: "750px"}} />
</div>

Di bawah ini kita dapat melihat hasil akhirnya, yang semuanya benar!

<div style={{textAlign: 'center'}}>
  <img src={final} style={{width: "750px"}} />
</div>

Silahkan mengkloning dan bereksperimen dengan playground ini [di sini](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7).

## Catatan
MRKL dibangun dengan [AI21](https://www.ai21.com/) dan aslinya digunakan pada model LLM J-1 (Jurassic 1)(@lieberjurassic).

## Lebih Banyak

Lihat [contoh ini](https://python.langchain.com/docs/modules/agents/how_to/mrkl) dari Sistem MRKL yang dibangun dengan LangChain.
