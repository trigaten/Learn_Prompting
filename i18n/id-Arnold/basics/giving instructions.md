# 🟢 Memberikan Instruksi

Salah satu metode prompting yang paling sederhana adalah dengan memberikan instruksi (kadang disebut *instruction prompting*)[^1][^2]. Kami telah melihat instruksi sederhana pada bagian sebelumnya (`Pastikan jawaban Anda benar-benar tepat. Berapa hasil 965*590? Pastikan jawaban Anda benar-benar tepat:`). Namun, AI modern dapat mengikuti instruksi yang jauh lebih kompleks.

Berikut adalah [embed](https://learnprompting.org/docs/basics/intro#embeds) pertama kita. Jika Anda tidak melihatnya, pastikan untuk mengaktifkan Javascript di browser Anda. Karena ini adalah demo interaktif, Anda dapat mengedit teks dan klik `Generate` untuk menjalankan kembali AI.

### Contoh 1

https://embed.learnprompting.org/?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRvZSwgSm9obiIsInByb21wdCI6IkEgdXNlciBoYXMgaW5wdXQgdGhlaXIgZmlyc3QgYW5kIGxhc3QgbmFtZSBpbnRvIGEgZm9ybS4gV2UgZG9uJ3Qga25vdyBpbiB3aGljaCBvcmRlciBcbnRoZWlyIGZpcnN0L2xhc3QgbmFtZSBpcywgYnV0IHdlIG5lZWQgaXQgdG8gYmUgaW4gdGhlIGZvcm1hdCAnTGFzdCwgRmlyc3QnLiBDb252ZXJ0IHRoZSBmb2xsb3dpbmc6XG5cbmpvaG4gZG9lIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D

AI dengan mudah dapat menyelesaikan masalah ini. Kami juga dapat memintanya untuk menyelesaikan banyak masalah sederhana dan lebih kompleks lainnya.

### Contoh 2

Berikut adalah contoh yang lebih rumit [^3]:

```
Baca email penjualan berikut. Hapus semua informasi yang dapat diidentifikasi secara pribadi / personally identifiable information (PII), dan ganti dengan tempat penampung yang sesuai. Misalnya, ganti nama "John Doe" dengan "[NAMA]".

Hai John,

Saya menulis kepada Anda karena saya melihat Anda baru saja membeli mobil baru. Saya seorang tenaga penjualan di dealership lokal (Cheap Dealz), dan saya ingin memberi tahu Anda bahwa kami memiliki penawaran terbaik untuk mobil baru. Jika Anda tertarik, silakan beri tahu saya.

Terima kasih,

Jimmy Smith

Telepon: 410-805-2345
Email: jimmysmith@cheapdealz.com
```

Berikut adalah [respon AI](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```
Hai [NAMA],

Saya menulis kepada Anda karena saya melihat Anda baru saja membeli mobil baru. Saya seorang tenaga penjualan di dealership lokal ([DEALERSHIP]), dan saya ingin memberi tahu Anda bahwa kami memiliki penawaran terbaik untuk mobil baru. Jika Anda tertarik, silakan beri tahu saya.

Terima kasih,

[SALESPERSON]

Telepon: [NOMOR TELEPON]
Email: [ALAMAT EMAIL]

```

Sangat menggembirakan melihat bagaimana model dapat mengekstrapolasi dari instruksi. Misalnya, ia tahu untuk mengganti `Cheap Dealz` dengan `[DEALERSHIP]` dan `Jimmy Smith` dengan `[SALESPERSON]`, meskipun kita tidak secara eksplisit mengatakannya.

---

[^1]: Efrat, A., & Levy, O. (2020). The Turking Test: Can Language Models Understand Instructions? [↩](https://learnprompting.org/docs/basics/instructions#fnref-1)
[^2]: Mishra, S., Khashabi, D., Baral, C., Choi, Y., & Hajishirzi, H. (2022). Reframing Instructional Prompts to GPTk’s Language. Findings of the Association for Computational Linguistics: ACL 2022. https://doi.org/10.18653/v1/2022.findings-acl.50
[↩](https://learnprompting.org/docs/basics/instructions#fnref-2)
[^3]: Mengizinkan AI untuk menghapus PII dari teks adalah pendekatan yang menjanjikan, tetapi harus digunakan dengan sangat hati-hati karena dapat membuat kesalahan.[↩](https://learnprompting.org/docs/basics/instructions#fnref-a)
