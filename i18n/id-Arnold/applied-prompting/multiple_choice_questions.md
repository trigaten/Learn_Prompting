# 🟢 Pertanyaan Pilihan Berganda

Marilah kita menggunakan GPT untuk menyelesaikan sebuah pertanyaan Law School Admission Test (LSAT)[^1]!

Berikut adalah contoh pertanyaan LSAT. Pertimbangkan bagaimana Anda akan menjawabnya, serta reasoning Anda.

```
John of Worcester, seorang biarawan Inggris, mencatat pengamatan, pada tanggal 8 Desember 1128, dari dua bintik matahari yang luar biasa besar. Lima hari kemudian aurora borealis (cahaya utara) yang cemerlang diamati di Korea Selatan. Aktivitas bintik matahari biasanya diikuti oleh munculnya aurora borealis, setelah rentang waktu yang rata-rata lima hari. Dengan demikian, pengamatan Korea membantu mengkonfirmasi pengamatan John of Worcester. Yang mana dari berikut ini, jika benar, paling memperkuat argumen tersebut?

a) Aurora borealis kadang-kadang dapat terjadi bahkan ketika tidak ada aktivitas bintik matahari yang signifikan dalam seminggu sebelumnya.
b) Sumber-sumber Cina mencatat pengamatan bintik matahari lebih dari 1000 tahun sebelum John of Worcester melakukannya.
c) Hanya aktivitas bintik matahari yang berat yang dapat menghasilkan aurora borealis yang dapat dilihat pada lintang Korea Selatan yang rendah.
d) Karena tidak mungkin melihat bintik matahari dengan mata telanjang dalam kondisi cahaya matahari biasa, pengamatan yang dicatat oleh John of Worcester akan terjadi di bawah kondisi cuaca yang tidak biasa seperti kabut atau awan tipis.
e) Akun John of Worcester termasuk gambaran bintik matahari, yang bisa menjadi ilustrasi awal aktivitas bintik matahari.
```

- Jawaban yang benar adalah ...
    
    c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea.
    

Coba tempelkan masalah ini ke demo di bawah ini:

- Mengapa jawaban saya berbeda?
    
    Jawaban Anda mungkin berbeda karena
    
    1) Pembaharuan model dasar, GPT-3 2)-Tingkat keacakan (randomness) dalam pembuatan teks. Kita dapat membuat output yang lebih konsisten dengan membuat [temperature](https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature) bernilai 0.
    

Model gagal. Apakah itu berarti model tidak mampu menjawab jenis pertanyaan ini? Tidak selalu. Kita akan masuk ke teknik yang dapat kita gunakan untuk meningkatkan hasil model.

## Frase Ajaib

Prompt standar yang kami gunakan di atas memberikan sedikit wawasan tentang "reasoning" untuk output GPT. Kita bisa mencoba menambahkan frasa `tolong jelaskan langkah demi langkah` seperti ini:

```
...
e) Akun John of Worcester termasuk gambaran bintik matahari, yang bisa menjadi ilustrasi awal aktivitas bintik matahari.

Tolong jelaskan langkah demi langkah
```

Frasa ini akan meningkatkan keberbicaraan model. Anda mungkin mendapatkan output seperti ini:

> INFO
> 
> 
> Perhatikan bagaimana model memilikik reason melalui masalah langkah-demi-langkah.
> 
> Istilah khusus untuk perilaku ini adalah Chain of Thought[^1]; model secara berurutan menghasilkan pernyataan untuk mencapai jawaban. Ini mirip dengan konsep System 2 Thinking (dari [Berpikir Cepat dan Lambat](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)); model default ke System 1 Thinking, tetapi dapat menghubungkan sistem 1 berpikir untuk mencapai jawaban yang lebih metodologis.
> 

## Peningkatan (Improvement)

Berikut adalah beberapa variasi pada prompt dasar kami untuk pertanyaan pilihan ganda:

### Mengurutkan Item Pertanyaan

Kita bisa mengurutkan item dalam pertanyaan

```
...
a) Akun John of Worcester termasuk gambaran bintik matahari, yang bisa menjadi ilustrasi awal aktivitas bintik matahari.
b) Karena tidak mungkin melihat bintik matahari dengan mata telanjang dalam kondisi cahaya matahari biasa, pengamatan yang dicatat oleh John of Worcester akan terjadi di bawah kondisi cuaca yang tidak biasa seperti kabut atau awan tipis.
...
```

### Mengubah Pertanyaan

Ingatlah prompt asli adalah ini:

```
Yang mana dari berikut ini, jika benar, paling memperkuat argumen tersebut?
```

Kita dapat mengubah prompt menjadi ini:

```
Identifikasi setiap pilihan apakah memperkuat, melemahkan atau tidak mempengaruhi argumen.
```

untuk mendapatkan wawasan lebih lanjut tentang pilihan jawaban.

### Tambahkan Konteks Tambahan

Ini adalah contoh masalah yang dapat dengan mudah dipecahkan dengan menggunakan teorema Bayes:

```
Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is
present, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%
effective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods
of identifying the virus. The virus is carried by 2% of all people.
(a) Say that a person is tested for the virus using only Test A. What is the probability that the person
is really carrying the virus given that Test A came back positive? (2 points)
(b) Say that a person is tested for the virus using only Test B. What is the probability that the person
is really carrying the virus given that Test B came back positive? (2 points)
(c) Say that a person is tested for the virus using both tests. What is the probability that the person is
really carrying the virus given that both tests came back positive? (2 points)
```

Mari coba dengan GPT:

Output-nya **salah**!

Jika kami menambahkan sedikit konteks, seperti ini:

```
...
Mari kita jelaskan langkah demi langkah. Rumus untuk bayes adalah
```

Model akan menggunakan rumus yang benar, Bayes.

Ini yang **benar!**

> DANGER
> 
> 
> Model GPT tidak melakukan operasi aritmatika dengan baik. Anda mungkin memperhatikan bahwa meskipun ekspresi yang ditulis dikoreksi, angka yang dihitung tidak.
> 
> Coba tambahkan frasa: `Berikan ekspresi sebagai jawaban, bukan angka` untuk menonaktifkan perhitungan.
> 
> Anda mungkin tertarik pada [MRKL](https://learnprompting.org/docs/advanced_applications/mrkl)[^2], paradigma menggabungkan GPT dengan alat eksternal seperti kalkulator, untuk memecahkan masalah ini.
> 

Ditulis oleh [zeyuzhao](https://github.com/Zeyuzhao).

---

[^1]: LSAT (Ujian Masuk Sekolah Hukum) adalah tes standar yang digunakan oleh sekolah hukum di Amerika Serikat untuk menilai kemampuan berpikir kritis dan analitis dari calon mahasiswa.[↩](https://learnprompting.org/docs/applied_prompting/mc_tutorial#fnref-1)
[^2]: Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022). Sistem MRKL: arsitektur neuro-simbolik modular yang menggabungkan model bahasa besar, sumber pengetahuan eksternal, dan penalaran diskrit. [↩](https://learnprompting.org/docs/applied_prompting/mc_tutorial#fnref-2)
