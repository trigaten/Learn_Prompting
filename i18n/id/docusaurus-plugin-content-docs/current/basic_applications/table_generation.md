---
sidebar_position: 0
---

# 🟢 Penataan Data

Satu contoh penggunaan yang sederhana dan menarik untuk LLM adalah mengorganisir data ke dalam tabel. Mungkin Anda memiliki sekelompok artikel berita atau laporan bisnis, dan Anda ingin semua poin penting diringkas dalam sebuah tabel yang kemudian dapat Anda masukkan ke dalam spreadsheet atau basis data. Chat bot seperti ChatGPT dapat membantu Anda melakukannya.

Kita dapat mengekstraksi informasi dari laporan berikut dengan menambahkan `Generate sebuah tabel yang berisi informasi ini:` ke dalamnya.

```text
Dalam presentasi laporan bisnis baru-baru ini, CEO Zana Corp. menyoroti pertumbuhan mereka yang luar biasa dalam tahun fiskal yang lalu. Dia berbagi bahwa perusahaan mengalami peningkatan pendapatan sebesar 15%, mencapai $50 juta, dengan margin keuntungan 12% ($6 juta dalam keuntungan bersih). Laporan tersebut juga menampilkan pertumbuhan 20% dalam jumlah pelanggan mereka, yang sekarang mencapai total 100.000 pelanggan. Selain itu, biaya operasional perusahaan naik sebesar 10%, mencapai $10 juta, sementara jumlah karyawan meningkat sebesar 25%, sehingga saat ini memiliki tenaga kerja sebanyak 500 orang. 

Buat tabel yang berisi informasi ini:
```

ChatGPT akan menghasilkan tabel seperti berikut:

| Metrik                        | Nilai       |
| ----------------------------- | ----------- |
| Pendapatan                    | $50 million |
| Margin Laba                   | 12%         |
| Laba Bersih                   | $6 juta     |
| Basis Pelanggan               | 100.000     |
| Biaya Operasional             | $10 juta    |
| Jumlah Karyawan               | 500         |
| Peningkatan Pendapatan        | 15%         |
| Peningkatan Pelanggan         | 20%         |
| Peningkatan Biaya Operasional | 10%         |
| Peningkatan Jumlah Karyawan   | 25%         |

Anda kemudian dapat menyalin dan menempelkannya ke dalam lembar kerja seperti Excel/Sheets atau bahkan dokumen dan presentasi.