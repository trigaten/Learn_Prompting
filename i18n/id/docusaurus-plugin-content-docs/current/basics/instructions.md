---
sidebar_position: 2
---

# 🟢 Memberikan Instruksi

import InstructionPrompt from '@site/docs/assets/basics/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Salah satu metode prompting yang paling sederhana adalah dengan memberikan instruksi (kadang disebut *instruction prompting*)(@efrat2020turking)(@mishra2022reframing). Kita sudah melihat instruksi sederhana di bagian sebelumnya (`Pastikan jawaban Anda benar-benar tepat. Apa hasil dari 965*590? Pastikan jawaban Anda benar secara tepat:`). Namun, AI modern dapat mengikuti instruksi yang jauh lebih kompleks.

Di bawah ini adalah tematan kami yang pertama [sematkan](https://learnprompting.org/docs/basics/intro#embeds). Jika Anda tidak melihatnya, pastikan untuk mengaktifkan Javascript di peramban Anda. Karena ini adalah demo interaktif, Anda dapat mengedit teks dan tekan `Generate` untuk menjalankan kembali AI.

#### Contoh 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlxuXG5Kb2huIFNtaXRoXG5cblNtaXRoLCBKb2huIiwicHJvbXB0IjoiQSB1c2VyIGhhcyBpbnB1dCB0aGVpciBmaXJzdCBhbmQgbGFzdCBuYW1lIGludG8gYSBmb3JtLiBXZSBkb24ndCBrbm93IGluIHdoaWNoIG9yZGVyIHRoZWlyIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZSBhcmUsIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIGluIHRoaXMgZm9ybWF0ICc8TGFzdCBuYW1lPiwgPEZpcnN0IG5hbWU%2BJy4gXG5cblBsZWFzZSBjb252ZXJ0IHRoZSBmb2xsb3dpbmcgbmFtZSBpbiB0aGUgZXhwZWN0ZWQgZm9ybWF0OiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>AI dengan mudah dapat menyelesaikan masalah ini. Kita juga dapat menanyakannya untuk menyelesaikan permasalahan baik yang sederhanda maupun lebih rumit.

#### Contoh 2

Berikut adalah contoh yang lebih rumit[^a][^b]:

```
Baca email penjualan berikut ini. Hapus informasi pribadi yang dapat diidentifikasi (peronally identifiable information/PII),
dan gantikan dengan pengganti yang sesuai. Sebagai contoh, ganti nama "John Doe"
dengan "[NAME]".

Halo John,

Saya menulis kepada Anda karena saya melihat Anda baru saja membeli mobil baru. Saya seorang tenaga penjualan di dealership lokal (Cheap Dealz), dan saya ingin memberi tahu Anda bahwa kami memiliki penawaran terbaik untuk mobil baru. Jika Anda tertarik, tolong beri tahu saya.

Terima kasih,

Jimmy Smith

Telepon: 410-805-2345
Email: jimmysmith@cheapdealz.com
```

Berikut adalah respons AI [](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Hai [NAME],

Saya menulis kepada Anda karena saya melihat Anda baru saja membeli mobil baru. Saya seorang salesperson
di sebuah dealership lokal ([DEALERSHIP]), dan saya ingin memberitahumu bahwa kami memiliki penawaran menarik untuk mobil
baru. Jika Anda tertarik, tolong beri tahu saya.

Terima kasih,

[SALESPERSON]

Telepon: [NOMOR TELEPON]
Email: [ALAMAT EMAIL]
// highlight-end
```

Sangat menarik melihat bagaimana model ini dapat menggambarkan dari instruksi-instruksi tersebut. Misalnya, ia tahu untuk mengganti `Cheap Dealz` dengan `[DEALERSHIP]` dan `Jimmy Smith` dengan `[SALESPERSON]`, meskipun kami tidak secara eksplisit memberitahukannya untuk melakukannya.

[^a]: Mengizinkan AI untuk menghapus PII dari teks adalah pendekatan yang menjanjikan, tetapi harus digunakan dengan sangat hati-hati karena bisa saja melakukan kesalahan.
[^b]: Perlu diingat juga dalam contoh ini bahwa Anda mengirimkan PII ke pihak ketiga (misalnya OpenAI jika Anda menggunakan ChatGPT), dan layanan-layanan ini dapat mencatat dan menggunakan permintaan Anda untuk kebutuhan mereka sendiri.

