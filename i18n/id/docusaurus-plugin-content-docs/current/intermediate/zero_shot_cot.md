---
sidebar_position: 4
---

# 🟢 Zero Shot Chain of Thought


Zero Shot Chain of Thought (Zero-shot-CoT) memicu (@kojima2022large) adalah sebuah langkah lanjutan dari %%CoT prompting|CoT prompting%% (@wei2022chain), yang memperkenalkan sebuah zero shot prompt yang sangat sederhana. Mereka menemukan bahwa dengan menambahkan kata-kata "**Mari kita berpikir langkah demi langkah.**" di akhir pertanyaan, LLM dapat menghasilkan rangkaian pemikiran yang menjawab pertanyaan. Dari chain of thought ini, mereka mampu mengambil jawaban yang lebih akurat.

import ZSImage from '@site/docs/assets/intermediate/zero_shot.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Zero Shot CoT (Kojima et al.)
</div>

Secara teknis, proses Zero-shot-CoT lengkap melibatkan dua masukan/pesanan yang terpisah. Pada gambar di bawah ini, kotak atas di sebelah kiri menghasilkan chain of thought, sementara kotak atas di sebelah kanan mendapatkan output dari prompt pertama (termasuk prompt pertama itu sendiri), dan mengekstrak jawaban dari chin of thought. Prompt kedua ini adalah prompt yang bersifat self augmented. Prompt kedua ini adalah _self augmented_ prompt.

import ZSProcessImage from '@site/docs/assets/intermediate/zero_shot_example.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Proses CoT Zero Shot Seluruhnya (Kojima et al.)
</div>

## Contoh

Berikut adalah beberapa demo (yang hanya melakukan ekstraksi penalaran). Demo pertama ini menunjukkan GPT-3 (davinci-003) gagal dalam sebuah pertanyaan matematika sederhana, sementara demo kedua menggunakan prompt Zero-shot-CoT dan berhasil memecahkan masalah. Anda bisa masukkan kunci API OpenAI Anda (Klik Generate) dan bermain-main dengan contohnya. Perhatikan betapa lebih sederhana prompt Zero-shot-CoT dibandingkan dengan prompt CoT.

#### Salah

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### Benar

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Hasil
Zero-shot-CoT juga efektif dalam meningkatkan hasil pada tugas aritmatika, berpikir common sense, dan simbolik. Namun, tidak mengherankan, biasanya tidak seefektif CoT prompting. Kasus penggunaan yang penting untuk Zero-shot-CoT adalah ketika mendapatkan beberapa contoh shot untuk CoT permintaan sulit.

## Ablasi Minat

Kojima et al. bereksperimen dengan beberapa prompt Zero-shot-CoT yang berbeda (misalnya "Mari kita selesaikan masalah ini dengan membaginya menjadi langkah-langkah." atau "Mari kita pikirkan ini secara logis."), tetapi mereka menemukan bahwa "Mari kita pikirkan langkah demi langkah" adalah yang paling efektif untuk tugas yang mereka pilih.



## Catatan

Langkah ekstraksi sering kali harus khusus sesuai tugas, membuat Zero-Shot-CoT kurang dapat digeneralisasikan dibandingkan yang seolah-olah pada awalnya.

Menurut pengalaman saya, saya telah menemukan bahwa Zero-shot-CoT gaya rangsangan kadang-kadang efektif dalam meningkatkan panjang penyelesaian tugas generatif. Misalnya, pertimbangkan prompt standar `Tulis sebuah cerita tentang katak dan seekor jamur yang menjadi teman.` Menambahkan kata-kata `Mari kita berpikir langkah demi langkah.` di akhir prompt ini mengarah pada hasil yang lebih panjang.

