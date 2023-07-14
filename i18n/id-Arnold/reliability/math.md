# 🟡 Matematika

Sepanjang kursus ini, kita telah melihat banyak metode yang berbeda untuk memperbaiki kemampuan matematika LLM. Pendekatan baru-baru ini, MathPrompter[^1], menggabungkan beberapa metode ini (CoT, PAL, dll.) menjadi satu teknik. Ide yang melandasi adalah memecah pertanyaan matematika menjadi istilah aljabar kemudian menggunakan kode Python untuk memecahkannya dengan cara yang berbeda.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/ad9a4783-4f10-42d3-9366-a91186406fac)

MathPrompter memiliki **empat** langkah. Kami akan menjelaskan mereka menggunakan contoh masalah berikut. Contoh ini diambil langsung dari makalah.

```
Q: Di restoran, setiap makanan dewasa berharga $5 dan anak-anak makan gratis. Jika sekelompok 15 orang datang dan 8 di antaranya anak-anak, berapa banyak biaya yang diperlukan untuk kelompok makan?
```

## Langkah 1: Menghasilkan Template Aljabar

Langkah pertama adalah menugaskan variabel untuk setiap angka dalam pertanyaan. Ini membantu karena memungkinkan mudah menerjemahkan pertanyaan menjadi pertanyaan matematika abstrak, serta menjadi kode pemrograman.

Ini dapat dilakukan melalui sedikit pemberitahuan yang diberikan:

## Langkah 2: Prompt Matematika

Tujuan dari langkah ini adalah merumuskan masalah sebagai pernyataan aljabar dan sebagai kode Python. Langkah ini memiliki dua prompt simultan, yang membantu memberikan representasi yang beragam dari masalah.

### 2a: Pernyataan Aljabar

Kita dapat meminta LLM merepresentasikan masalah matematika sebagai pernyataan aljabar dengan few shot prompt. Hal ini dilakukan dengan meminta LLM untuk menghasilkan format jawaban, dimulai dengan "Jawaban =".

### 2b: Kode Python

Kita juga dapat meminta LLM menghasilkan kode Python yang menyelesaikan masalah. Ini dilakukan dengan meminta LLM menghasilkan fungsi Python.

### Menghasilkan Jawaban

Sekarang, kita dapat menggunakan Pemetaan yang telah kita hasilkan sebelumnya untuk secara otomatis mengisi variabel.

```
Pemetaan: {A: 5, B: 15, C: 8}
```

Aljabar:

```
Jawaban = 5 * 15 - 5 * 8
```

Fungsi Python:

```python
def biaya_restoran(A=5, B=15, C=8):
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
>>> biaya_restoran()
35
```

## Langkah 4: Self-Consistency

Akhirnya, kita akan memanfaatkan konsep Self-Consistency untuk menjalankan proses di atas beberapa kali (~5), lalu mengambil jawaban mayoritas.

## Kesimpulan

MathPrompter melaporkan akurasi 92,5% pada dataset MultiArith[^2]. Keberhasilan teknik ini adalah contoh yang sangat baik tentang bagaimana **Anda** sebagai seorang prompt engineer dapat mengambil metode yang telah Anda pelajari sepanjang kursus ini dan menggabungkannya untuk menangani masalah yang lebih besar.

---

[^1]: Imani, S., Du, L., & Shrivastava, H. (2023). MathPrompter: Mathematical Reasoning using Large Language Models. [↩](https://learnprompting.org/docs/reliability/math#fnref-1)
[^2]: Roy, S., & Roth, D. (2015). Solving General Arithmetic Word Problems. Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, 1743-1752. https://doi.org/10.18653/v1/D15-1202 [↩](https://learnprompting.org/docs/reliability/math#fnref-2)
