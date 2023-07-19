---
sidebar_position: 70
---

# 🟡 Matematika

Sepanjang kursus ini, kita telah melihat banyak metode penggerak yang berbeda yang dapat digunakan untuk meningkatkan kemampuan matematika %%LLM|LLM%%. Satu pendekatan terbaru, MathPrompter(@imani2023mathprompter), menyatukan beberapa metode ini (%%CoT|CoT prompting%%, %%PAL|PAL%%, dll.) menjadi satu teknik tunggal. Ide utama adalah memecah pertanyaan matematika menjadi istilah aljabar kemudian menggunakan kode Python untuk memecahkannya dengan cara yang berbeda.

import math from '@site/docs/assets/reliability/math.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={math} style={{width: "500px"}} />
</div>

MathPrompter memiliki **empat** langkah. Kami akan menjelaskannya menggunakan contoh masalah berikut. Contoh ini diambil langsung dari makalah.

```text
P: Di sebuah restoran, setiap makanan dewasa harganya $5 dan anak-anak makan gratis. Jika sekelompok 15 orang datang dan 8 di antaranya anak-anak, berapa banyak biaya yang diperlukan untuk kelompok makan?
```

## Langkah 1: Membuat Template Aljabar

Langkah pertama adalah menetapkan variabel untuk setiap angka dalam pertanyaan. Ini membantu karena memungkinkan terjemahan yang lebih mudah dari pertanyaan ke pertanyaan matematika abstrak, serta ke kode pemrograman.

Ini dapat dilakukan melalui prompt tembakan beberapa:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH0iLCJwcm9tcHQiOiJROiBBIHpvbyBjaGFyZ2VzICQxMiBwZXIgYWR1bHQgdGlja2V0IGFuZCBhbGxvd3MgY2hpbGRyZW4gdW5kZXIgNSB0byBlbnRlciBmb3IgZnJlZS4gQSBmYW1pbHkgb2YgNCBhZHVsdHMgYW5kIDIgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLiBXaGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuUXQ6IEF0IGEgem9vLCBlYWNoIGFkdWx0IHRpY2tldCBjb3N0cyAkQSBhbmQgY2hpbGRyZW4gdW5kZXIgNSBjYW4gZW50ZXIgZm9yIGZyZWUuIElmIGEgZmFtaWx5IG9mIEIgYWR1bHRzIGFuZCBDIGNoaWxkcmVuIHVuZGVyIDUgdmlzaXQgdGhlIHpvbywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBmb3IgdGhlIGZhbWlseSB0byBlbnRlcj9cbk1hcHBpbmc6IHtBOiAxMiwgQjogNCwgQzogMn1cblxuUTogQSBzdG9yZSBzZWxscyBzaG9lcyBhdCAkNjAgcGVyIHBhaXIgYW5kIHNvY2tzIGF0ICQ4IHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgMiBwYWlycyBvZiBzaG9lcyBhbmQgMyBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5ROiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkNSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiAxNVxucGVvcGxlIGNhbWUgaW4gYW5kIDggd2VyZSBraWRzLCBob3cgbXVjaCB3b3VsZCBpdCBjb3N0IGZvciB0aGUgZ3JvdXAgdG8gZWF0PyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Langkah 2: Petunjuk Matematika

Tujuan dari langkah ini adalah merumuskan masalah sebagai pernyataan aljabar dan sebagai kode Python. Langkah ini memiliki dua prompt bersamaan, yang membantu memberikan representasi yang beragam dari masalah.

### 2a: Pernyataan Aljabar

Kami dapat mendorong LLM untuk mewakili masalah matematika sebagai pernyataan aljabar. Ini dilakukan dengan meminta LLM untuk menghasilkan format jawaban, dimulai dari "Jawaban =".

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkFuc3dlciA9IEEgKiBCIC0gQSAqIEMiLCJwcm9tcHQiOiJRdDogQXQgYSB6b28sIGVhY2ggYWR1bHQgdGlja2V0IGNvc3RzICRBIGFuZCBjaGlsZHJlbiB1bmRlciA1IGNhbiBlbnRlciBmb3IgZnJlZS4gSWYgYSBmYW1pbHkgb2YgQiBhZHVsdHMgYW5kIEMgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLCB3aGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuTWFwcGluZzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQlxuXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQyArIEIgKiBEXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH1cblxuV3JpdGUgYSBtYXRoZW1hdGljYWwgZXF1YXRpb24gYW5kIGdlbmVyYXRlIHRoZSBhbnN3ZXIgZm9ybWF0XG5zdGFydGluZyB3aXRoICdBbnN3ZXIgPSciLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 2b: Kode Python

Kita juga bisa meminta %%LLM|LLM%% untuk menghasilkan kode Python yang memecahkan masalah itu. Ini dilakukan dengan meminta LLM untuk menghasilkan fungsi Python.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiByZXN0YXVyYW50X2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogKEIgLSBDKSIsInByb21wdCI6IlF0OiBBdCBhIHpvbywgZWFjaCBhZHVsdCB0aWNrZXQgY29zdHMgJEEgYW5kIGNoaWxkcmVuIHVuZGVyIDUgY2FuIGVudGVyIGZvciBmcmVlLiBJZiBhIGZhbWlseSBvZiBCIGFkdWx0cyBhbmQgQyBjaGlsZHJlbiB1bmRlciA1IHZpc2l0IHRoZSB6b28sIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3QgZm9yIHRoZSBmYW1pbHkgdG8gZW50ZXI%2FXG5NYXBwaW5nOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgem9vX2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogQlxuXG5cblF0OiBBdCBhIHN0b3JlLCBzaG9lcyBjb3N0ICRBIHBlciBwYWlyIGFuZCBzb2NrcyBjb3N0ICRCIHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgQyBwYWlycyBvZiBzaG9lcyBhbmQgRCBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgc3RvcmVfY29zdChBLCBCLCBDLCBEKTpcbiAgcmV0dXJuIChBICogQykgKyAoQiAqIEQpXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cblxuV3JpdGUgYSBQeXRob24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhbnN3ZXIuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Menghasilkan Jawaban

Sekarang, kita dapat menggunakan Pemetaan yang telah kita hasilkan sebelumnya untuk secara otomatis mengisi variabel-variabel tersebut.

```text
Pemetaan: {A: 5, B: 15, C: 8}
```

Aljabar:
```text
Jawaban = 5 * 15 - 5 * 8
```

Fungsi Python:
```python
def restaurant_cost(A=5, B=15, C=8):
  return A * (B - C)
```

Kita dapat mengevaluasi keduanya menggunakan Python.

Aljabar:
```python
>>> eval("5 * 15 - 5 * 8")
35
```

Fungsi Python:
```python
>>> restaurant_cost()
35
```

## Langkah 4: Self-Consistency

Akhirnya, kita akan memanfaatkan %%Self-Consistency|self_consistency%% untuk menjalankan ulang proses di atas beberapa kali (~5), kemudian mengambil jawaban mayoritas.

## Kesimpulan

MathPrompter melaporkan akurasi 92,5% pada dataset MultiArith(@roy-roth-2015-solving). Keberhasilan teknik ini adalah contoh bagus bagaimana **kamu** sebagai seorang insinyur prompt dapat mengambil metode-metode yang telah kamu pelajari sepanjang kursus ini dan menggabungkannya untuk menangani masalah yang lebih besar.