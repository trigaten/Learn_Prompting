# 🔴 Melakukan Kalibrasi LLMs

Ada kemungkinan untuk menetralkan beberapa bias LLM dengan mengkalibrasi **distribusi output**[^1].

**Apa artinya mengkalibrasi distribusi output?**

Mari kita ambil contoh: Katakanlah kita memiliki tugas analisis sentimen dengan dua label, `Positif` dan `Negatif`. Pertimbangkan apa yang terjadi ketika LLM dipicu dengan `Input: nothing Sentiment:`. Input ini tidak mengandung *konteks* yang dapat digunakan LLM untuk membuat prediksi sentimen, sehingga disebut input **bebas konteks**.

Karena `nothing` bukan konsep positif maupun negatif, kita akan mengharapkan LLM mengeluarkan probabilitas sekitar 0,5 untuk kedua label `Positif` dan `Negatif`. Namun, seringkali (dan untuk contoh ini) itu tidak akan terjadi.

```
p("Positive" | "Input: nothing Sentiment:") = 0.9

p("Negative" | "Input: nothing Sentiment:") = 0.1
```

Dengan probabilitas label ini untuk input bebas konteks, kita tahu bahwa **distribusi output** LLM cenderung condong ke label `Positif`. Hal ini dapat menyebabkan LLM memilih `Positif` untuk semua input, bahkan jika masukan sebenarnya tidak positif.

Bagaimanapun jika kita dapat **mengkalibrasi** distribusi output, sehingga input bebas konteks diberi probabilitas 0,5 untuk kedua label `Positif` dan `Negatif`, maka kita dapat seringkali menghilangkan bias terhadap `Positif` dan LLM akan lebih dapat diandalkan pada kedua input bebas konteks dan input dengan konteks.

## Solusi Non-Teknis

Solusi non-teknis untuk masalah ini adalah dengan memberikan few shot exemplar di mana exemplar bebas konteks secara efektif diberi probabilitas 0,5 untuk kedua label `Positif` dan `Negatif`.

Misalnya, kita dapat memberikan beberapa few shot exemplar berikut exemplar bebas konteks mana yang diklasifikasikan sebagai `Positif` dan `Negatif`:

```
Input: I hate this movie. Sentiment: Negative
Input: I love this movie. Sentiment: Positive
Input: N/A Sentiment: Positive
Input: N/A Sentiment: Negative
Input: nothing Sentiment: Positive
Input: nothing Sentiment: Negative
Input: I like eggs. Sentiment:
```

Menurut pengetahuan saya, solusi ini belum dijelajahi dalam literatur, dan saya tidak yakin seberapa baik itu bekerja dalam praktik. Namun, ini adalah solusi sederhana yang menunjukkan apa yang dicoba kalibrasi.

## Solusi Teknis

Solusi lain untuk masalah ini adalah **kalibrasi kontekstual**[^1], di mana kita menyesuaikan parameter kalibrasi khusus, yang memastikan bahwa input bebas konteks seperti `Input: nothing Sentiment:` diberi probabilitas sekitar 0,5 untuk kedua label. Perhatikan bahwa dalam praktik, metode ini melakukan kalibrasi pada beberapa input bebas konteks yang berbeda (misalnya `Input: N/A Sentiment:`, `Input: [MASK] Sentiment:`). Ini merata-ratakan parameter kalibrasi yang terbaik untuk setiap input bebas konteks untuk menemukan parameter kalibrasi terbaik untuk LLM.

### Contoh

Mari kita lihat contoh menghitung parameter kalibrasi untuk satu input bebas konteks. Perhatikan bahwa contoh ini tidak dapat direproduksi dengan GPT-3 karena tidak dapat dibatasi pada label `Positif` dan `Negatif`.

Pertimbangkan kembali contoh di atas di mana LLM memberikan probabilitas berikut ke label untuk input bebas konteks:

```
p("Positive" | "Input: nothing Sentiment:") = 0.9

p("Negative" | "Input: nothing Sentiment:") = 0.1
```

Kita ingin menemukan beberapa distribusi probabilitas q sehingga

```
q("Positive" | "Input: nothing Sentiment:") = 0.5

q("Negative" | "Input: nothing Sentiment:") = 0.5
```

Kita akan melakukannya dengan membuat transformasi linier yang menyesuaikan (kalibrasi) probabilitas $p$.

$\^{q} = \text{Softmax}(W\^{p} + b)$

Persamaan ini mengambil probabilitas asli $\^{p}$ dan menerapkan bobot $W$ dan bias $b$ padanya. Bobot $W$ dan bias $b$ adalah parameter kalibrasi, yang, ketika diterapkan pada probabilitas contoh bebas konteks, akan menghasilkan $\^{p}$ = [0,5, 0,5].

### Menghitung W dan b

Kita perlu somehow menghitung bobot $W$ dan bias $b$. Salah satu cara untuk melakukannya adalah:

$W = \text{diag}(\^{p})^{-1}$ 

$b = 0$

Meskipun definisi $W$ mungkin terdengar agak aneh pada awalnya, tetapi hanya mengambil invers dari setiap nilai dalam probabilitas $\^{p}$ untuk menemukan $W$ yang akan mentransformasikan probabilitas asli $\^{p}$ menjadi probabilitas kalibrasi [0,5, 0,5].

Mari verifikasi bahwa ini berfungsi untuk contoh di atas:

$\^{p} = [0.9, 0.1]$

$W = \text{diag}(\^{p})^{-1} = \text{diag}([0.9, 0.1])^{-1} 
= \begin{bmatrix}
   0.9 & 0 \\
   0 & 0.1
\end{bmatrix}^{-1}
= \begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}$

$\^{q} = \text{Softmax}(W\^{p} + b) = \text{Softmax}(\begin{bmatrix}
   1.11 &
   0 & 10
\end{bmatrix}*{[0.9, 0.1]} + 0)
= \text{Softmax}([1, 1])
=[0.5, 0.5]$

Seperti yang disebutkan di atas, kita akan melakukan proses yang sama untuk beberapa input bebas konteks yang berbeda, dan merata-ratakan parameter kalibrasi yang terbaik untuk setiap input bebas konteks untuk menemukan parameter kalibrasi terbaik untuk LLM. Ini berarti bahwa parameter kalibrasi akhir mungkin tidak memetakan input bebas konteks ke tepat [0,5, 0,5].

### Metode lain

$b$ juga dapat diatur menjadi $-p$, dan $W$ menjadi matriks identitas. Metode ini berkinerja lebih baik pada tugas generation daripada tugas klasifikasi[^1].

## Kesimpulan

LLM cenderung bias ke label tertentu. Kalibrasi dapat digunakan untuk menetralkan bias ini.

---

[^1]: Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models. [↩](https://learnprompting.org/docs/reliability/calibration#fnref-1)
