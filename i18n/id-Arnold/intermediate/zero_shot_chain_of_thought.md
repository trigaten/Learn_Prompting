# 🟢 Zero Shot Chain of Thought

Zero Shot Chain of Thought (Zero-shot-CoT) prompting[^1] adalah tindak lanjut dari CoT prompting[^2], yang menggunakan zero shot prompt yang sangat sederhana. Mereka menemukan bahwa dengan menambahkan kata-kata "**Mari kita berpikir langkah demi langkah.**" di akhir sebuah pertanyaan, LLM dapat menghasilkan chain of thought yang menjawab pertanyaan tersebut. Dari chain of thought ini, mereka dapat mengambil jawaban yang lebih akurat.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/be4393ff-fae2-4aa6-b685-abbbe74cbc03)

Zero Shot CoT (Kojima et al.)

Secara teknis, proses Zero-shot-CoT lengkap melibatkan dua prompt/isian terpisah. Pada gambar di bawah ini, kotak atas di sebelah kiri menghasilkan chain of thought, sementara kotak atas di sebelah kanan mendapatkan output dari prompt pertama (termasuk prompt pertama itu sendiri), dan mengekstrak jawaban dari chin of thought. Prompt kedua ini adalah prompt yang bersifat *self augmented*.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b1afd1f7-0ccf-41c6-81a8-b2f1c4eadfc6)

Proses Zero Shot CoT Lengkap (Kojima et al.)

## Contoh

Berikut adalah beberapa demo (yang hanya melakukan ekstraksi penalaran). Demo pertama ini menunjukkan GPT-3 (davinci-003) gagal dalam sebuah pertanyaan matematika sederhana, sementara demo kedua menggunakan prompt Zero-shot-CoT dan berhasil memecahkan masalah. Silakan masukkan API key OpenAI Anda (Klik Generate) dan bereksperimen dengan contoh. Perhatikan betapa sederhananya prompt Zero-shot-CoT dibandingkan dengan prompt CoT.

### Salah

https://embed.learnprompting.org/?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9

### Benar

https://embed.learnprompting.org/?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D

## Hasil

Zero-shot-CoT juga efektif dalam meningkatkan hasil pada tugas penalaran aritmatika, common sense, dan simbolik. Namun, tidak mengherankan, biasanya tidak seefektif CoT prompting. Use case penting untuk Zero-shot-CoT adalah ketika mendapatkan contoh few shot untuk CoT prompting merpukan hal sulit.

## Ablasi yang Menarik

Kojima et al. bereksperimen dengan beberapa prompt Zero-shot-CoT yang berbeda (misalnya "Mari kita selesaikan masalah ini dengan membaginya menjadi beberapa langkah." atau "Mari kita berpikir tentang ini secara logis."), tetapi mereka menemukan bahwa "Mari kita berpikir langkah demi langkah" adalah yang paling efektif untuk tugas yang mereka tentukan.

## Catatan

Tahap ekstraksi seringkali harus spesifik untuk tugas tertentu, membuat Zero-Shot-CoT kurang umum daripada yang terlihat pada awalnya.

Lucunya, saya menemukan bahwa gaya Zero-shot-CoT prompt kadang-kadang efektif dalam meningkatkan panjang penyelesaian untuk tugas generatif. Misalnya, pertimbangkan prompt standar `Tulis sebuah cerita tentang seekor katak dan sebuah jamur yang menjadi teman.` Menambahkan kata-kata `Mari kita berpikir langkah demi langkah.` di akhir prompt ini mengarah pada penyelesaian yang jauh lebih panjang.

---

[^1]: Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.
[↩](https://learnprompting.org/docs/intermediate/zero_shot_cot#fnref-1)
[^2]: Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.
[↩](https://learnprompting.org/docs/intermediate/zero_shot_cot#fnref-2)
