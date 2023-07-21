---
sidebar_position: 10
---

# 🔴 Mengkalibrasi LLM

Ada kemungkinan untuk menetralkan beberapa bias LLM dengan mengkalibrasi **distribusi output**(@zhao2021calibrate).

**Apa artinya persis kalibrasi distribusi output?**

Mari kita jelajahi contoh singkat: Katakanlah kita memiliki tugas analisis sentimen dengan %%sdengan dua label yang mungkin, `Positif` dan `Negatif`. Pertimbangkan apa yang terjadi ketika %%LLM|LLM%% diarahkan dengan `Input: tidak ada Sentiment:`. Input ini tidak mengandung _konteks_ yang dapat digunakan LLM untuk membuat prediksi sentimen, sehingga disebut input **bebas konteks**.

Sejak `tidak ada apa-apa`bukanlah konsep positif maupun negatif, kita akan mengharapkan LLM menghasilkan probabilitas sekitar 0.5 untuk baik `Positif` maupun `Negatif`. Namun, sering kali (dan untuk contoh ini) itu tidak akan menjadi kasusnya.
```
p("Positif" | "Input: tidak ada Sentimen:") = 0.9

p("Negatif" | "Input: tidak ada Sentimen:") = 0.1
```

Diberikan probabilitas label ini untuk masukan konteks bebas, kita tahu bahwa distribusi output LLM **** kemungkinan cenderung bias ke label `Positif`. Ini dapat menyebabkan LLM condong pada `Positif` untuk semua input, meskipun input sebenarnya tidak positif.

Bagaimanapun jika kita dapat **mengkalibrasi** distribusi output, sehingga input bebas konteks diberi probabilitas 0,5 untuk kedua label `Positif` dan `Negatif`, maka kita dapat seringkali menghilangkan bias terhadap `Positif` dan LLM akan lebih dapat diandalkan pada kedua input bebas konteks dan input dengan konteks.

## Solusi Non-Teknis

Solusi non-teknis untuk masalah ini adalah dengan memberikan contoh sedikit dengan contoh percobaan independen yang efektif diberikan probabilitas 0.5 untuk `Positif` dan `Negatif`.

Misalnya, kita dapat memberikan beberapa few shot exemplar berikut exemplar bebas konteks mana yang diklasifikasikan sebagai `Positive` and `Negative`:
```
Input: Saya benci film ini. Sentimen: Negatif
Input: Saya menyukai film ini. Sentimen: Positif
Input: N/A Sentimen: Positif
Input: N/A Sentimen: Negatif
Input: tidak ada Sentimen: Positif
Input: tidak ada Sentimen: Negatif
Input: Saya suka telur. Sentimen:
```

Sepengetahuan saya, solusi ini belum dieksplorasi dalam literatur, dan saya tidak yakin seberapa baik itu bekerja dalam praktek. Namun, ini adalah solusi yang sederhana yang menunjukkan apa yang mencoba dicapai oleh kalibrasi.

## Solusi Teknis

Solusi lainnya untuk hal ini adalah __kalibrasi kontekstual__(@zhao2021calibrate), di mana kita menyesuaikan parameter kalibrasi khusus, yang memastikan bahwa input bebas konteks seperti `Input: tidak ada Sentimen:`  diberi probabilitas sekitar 0,5 untuk kedua label. Perhatikan bahwa dalam praktik, metode ini melakukan kalibrasi pada beberapa input bebas konteks yang berbeda (misalnya `Input: N/A Sentimen:`, `Input: [MASK] Sentimen:`). Rata-rata parameter kalibrasi yang bekerja dengan baik untuk setiap masukan bebas konteks untuk menemukan parameter kalibrasi terbaik untuk LLM.

### Contoh

Ayo kita melalui contoh perhitungan parameter kalibrasi untuk satu input yang bebas konteks. Perhatikan bahwa contoh ini tidak dapat direproduksi dengan GPT-3 karena tidak dapat dibatasi ke label `Positif` dan `Negatif`.

Pertimbangkan lagi contoh di atas di mana LLM menetapkan probabilitas berikut untuk label untuk input bebas konteks:

```
p("Positif" | "Input: tidak Ada sentiment:") = 0,9

p("Negatif" | "Input: tidak Ada sentiment:") = 0,1
```

Kami ingin menemukan beberapa distribusi probabilitas q yang demikian
```
q("Positif" | "Input: tidak ada Sentimen:") = 0.5

q("Negatif" | "Input: tidak ada Sentimen:") = 0.5
```

Kami akan melakukannya dengan membuat transformasi linear yang menyesuaikan (kalibrasi) probabilitas menjadi $p$.

$\hat q = \text{Softmax}(W\hat p + b)$

Rumus ini mengambil probabilitas asli $\hat p$ dan menerapkan bobot $W$ dan bias $b$ pada mereka. Bobot $W$ dan bias $b$ adalah parameter kalibrasi, yang, saat diterapkan pada probabilitas contoh tanpa konteks, akan menghasilkan $\hat p$ = [0.5, 0.5].

#### Menghitung W dan b

Kita perlu somehow menghitung bobot $W$ dan bias $b$. Salah satu cara untuk melakukannya adalah:

$W = \text{diag}(\hat p)^{-1}$

$b = 0$

Meskipun definisi $W$ mungkin terlihat sedikit aneh pada awalnya, namun itu hanya mengambil kebalikan dari setiap nilai dalam $\hat p$ untuk menemukan $W$ yang akan mengubah probabilitas asli $\hat p$ menjadi probabilitas terkalibrasi [0.5, 0.5].

Mari kita verifikasi bahwa ini berfungsi untuk contoh di atas:

$\hat p = [0.9, 0.1]$

$W = \text{diag}(\hat p)^{-1} = \text{diag}([0.9, 0.1])^{-1} = \begin{bmatrix}    0.9 & 0 \\
   0 & 0.1 \end{bmatrix}^{-1} = \begin{bmatrix}    1.11 & 0 \\
   0 & 10 \end{bmatrix}$

$\hat q = \text{Softmax}(W\hat p + b) = \text{Softmax}(\begin{bmatrix}    1.11 & 0 \\
   0 & 10 \end{bmatrix}*{[0.9, 0.1]} + 0) = \text{Softmax}([1, 1]) =[0.5, 0.5]$

Seperti yang disebutkan di atas, kami akan melakukan proses ini untuk beberapa input bebas konteks yang berbeda, dan rata-ratakan parameter kalibrasi yang paling baik untuk setiap input bebas konteks untuk menemukan parameter kalibrasi terbaik untuk LLM. Ini berarti bahwa parameter kalibrasi akhir kemungkinan tidak akan memetakan salah satu input bebas-konteks ke tepat [0.5, 0.5].

### Metode lain

$b$ juga dapat diatur sebagai $-\hat p$, dan $W$ sebagai matriks identitas. Metode ini melakukan lebih baik pada tugas generasi daripada tugas klasifikasi(@zhao2021calibrate).

## Pelajaran Penting

LLM sering cenderung (bias) terhadap label tertentu. Kalibrasi dapat digunakan untuk menetralkan bias ini.