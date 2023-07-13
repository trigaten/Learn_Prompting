# 🟢 Penataan Data

Salah satu contoh penggunaan LLM yang sederhana dan menarik adalah mengorganisir data ke dalam tabel. Mungkin Anda memiliki sejumlah artikel berita atau laporan bisnis, dan Anda ingin semua poin penting dirangkum dalam tabel yang kemudian dapat dimasukkan ke dalam spreadsheet atau database. Chat bot seperti ChatGPT dapat membantu Anda melakukannya.

Kami dapat mengekstrak informasi dari laporan berikut dengan menambahkan `Buat tabel yang berisi informasi ini:` kepadanya.

```
Dalam presentasi laporan bisnis baru-baru ini, CEO Zana Corp. menyoroti pertumbuhan luar biasa mereka dalam tahun fiskal terakhir. Dia berbagi bahwa perusahaan mengalami peningkatan pendapatan sebesar 15%, mencapai $50 juta, dengan margin keuntungan 12% ($6 juta laba bersih). Laporan tersebut juga memamerkan pertumbuhan 20% dalam basis pelanggan mereka, yang sekarang mencapai 100.000 pelanggan. Selain itu, biaya operasional perusahaan naik 10%, mencapai $10 juta, sementara jumlah karyawan meningkat 25%, menghasilkan tenaga kerja saat ini sebanyak 500 karyawan.

Buat tabel yang berisi informasi ini:
```

ChatGPT akan mengeluarkan tabel seperti berikut:

| Metrik | Nilai |
| --- | --- |
| Pendapatan | $50 juta |
| Margin Keuntungan | 12% |
| Laba Bersih | $6 juta |
| Basis Pelanggan | 100.000 |
| Biaya Operasional | $10 juta |
| Jumlah Karyawan | 500 |
| Peningkatan Pendapatan | 15% |
| Peningkatan Pelanggan | 20% |
| Peningkatan Biaya Operasional | 10% |
| Peningkatan Jumlah Karyawan | 25% |

Anda kemudian dapat menyalin dan menempelkannya ke dalam spreadsheet seperti Excel/Sheets atau bahkan dokumen dan presentasi.
