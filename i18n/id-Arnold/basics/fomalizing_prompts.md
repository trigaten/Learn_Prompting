# 🟢 Merumuskan Prompt

Kita telah membahas beberapa jenis prompt, serta cara untuk menggabungkannya. Halaman ini akan memberikan Anda istilah untuk menjelaskan berbagai jenis prompt. Meskipun telah ada pendekatan untuk merumuskan percakapan seputar prompt engineering[^1], bidang ini terus berkembang, sehingga kami akan memberikan Anda informasi yang cukup untuk memulai.

## Bagian Prompt

Ada beberapa bagian prompt yang akan Anda lihat berulang kali. Kurang lebih seperti berikut ini:

- Role (Peran)
- Instruction (Instruksi/tugas)
- Question (Pertanyaan)
- Context (Konteks)
- Few shot (Contoh)

Kita telah membahas peran, instruksi, dan contoh pada halaman sebelumnya. Sebuah pertanyaan hanyalah sebuah pertanyaan! (Misalnya. `Apa ibukota Prancis?`). Konteks adalah informasi yang relevan yang Anda inginkan agar model menggunakannya saat menjawab pertanyaan/melakukan instruksi.

Tidak semuanya muncul di setiap prompt, dan ketika beberapa di antaranya muncul, tidak ada urutan standar untuk mereka. Misalnya, dua prompt berikut, yang masing-masing mengandung peran, instruksi, dan konteks, akan melakukan hal yang sama:

```
Anda adalah seorang dokter. Baca riwayat medis ini dan prediksi risiko bagi pasien:

1 Januari 2000: Lengan kanan patah saat bermain bola basket. Diobati dengan gips.
15 Februari 2010: Didapatkan hipertensi. Diresepkan lisinopril.
10 September 2015: Mengalami pneumonia. Diobati dengan antibiotik dan pulih sepenuhnya.
1 Maret 2022: Mengalami gegar otak dalam kecelakaan mobil. Masuk ke rumah sakit dan dipantau selama 24 jam.
```

```
1 Januari 2000: Lengan kanan patah saat bermain bola basket. Diobati dengan gips.
15 Februari 2010: Didapatkan hipertensi. Diresepkan lisinopril.
10 September 2015: Mengalami pneumonia. Diobati dengan antibiotik dan pulih sepenuhnya.
1 Maret 2022: Mengalami gegar otak dalam kecelakaan mobil. Masuk ke rumah sakit dan dipantau selama 24 jam.

Anda adalah seorang dokter. Baca riwayat medis ini dan prediksi risiko bagi pasien:
```

Namun, prompt kedua kemungkinan lebih disukai karena instruksi berada pada bagian terakhir dari prompt. Hal ini bagus karena LLM lebih tidak mungkin hanya menulis konteks tambahan daripada mengikuti instruksi. Misalnya, jika diberi prompt pertama, LLM mungkin menambahkan baris baru: `15 Maret 2022: Jadwal tindak lanjut dengan ahli saraf direncanakan untuk menilai kemajuan pemulihan gegar otak.`

## Prompt "Standar"

Kita telah mendengar beberapa format prompt yang berbeda sejauh ini. Sekarang, kita akan kembali dengan cepat ke awal dan mendefinisikan prompt "standar". Mengikuti Kojima et al. [^2], kita akan merujuk pada prompt yang semata-mata terdiri dari sebuah pertanyaan sebagai prompt "standar". Kita juga menganggap prompt yang semata-mata terdiri dari sebuah pertanyaan atau berformat Q&A sebagai prompt "standar".

### Mengapa saya harus peduli?

Banyak artikel/makalah yang kami referensikan menggunakan istilah ini. Kami mendefinisikannya sehingga kami dapat membahas jenis prompt baru berlawanan dengan prompt standar.

### Dua contoh prompt standar:

*Prompt Standar*

```
 Apa ibukota Prancis?
```

*Prompt Standar dalam format Q&A*

```
Q: Apa ibukota Prancis?
A:
```

## Few Shot Prompts yang Standar

Few shot prompts yang standar[^3] adalah prompt standar yang memiliki *pemberi contoh* di dalamnya. Pemberi contoh adalah contoh tugas yang prompt coba selesaikan, yang dimasukkan ke dalam prompt itu sendiri[^4]. Dalam penelitian, few shot prompts yang standar terkadang disebut sebagai prompt standar (meskipun kita tidak akan mencoba melakukannya dalam kursus ini).

### Dua contoh few shot prompts yang standar:

*Few Shot Prompt yang Standar*

```
Apa ibukota Spanyol?
Madrid
Apa ibukota Italia?
Roma
Apa ibukota Prancis?
```

*Few Shot Prompt yang Standar dalam Format Q&A*

```
Q: Apa ibukota Spanyol?
A: Madrid
Q: Apa ibukota Italia?
A: Roma
Q: Apa ibukota Prancis?
A:
```

Few shot prompts memfasilitasi pembelajaran "few shot" alias pembelajaran "in context", yaitu kemampuan untuk belajar tanpa pembaruan parameter[^5].

---

[^1]: White, J., Fu, Q., Hays, S., Sandborn, M., Olea, C., Gilbert, H., Elnashar, A., Spencer-Smith, J., & Schmidt, D. C. (2023). A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT. [↩](https://learnprompting.org/docs/basics/formalizing#fnref-1)
[^2]: Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners. [↩](https://learnprompting.org/docs/basics/formalizing#fnref-2)
[^3]: Liu, P., Yuan, W., Fu, J., Jiang, Z., Hayashi, H., & Neubig, G. (2022). Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing. ACM Computing Surveys. https://doi.org/10.1145/3560815
[↩](https://learnprompting.org/docs/basics/formalizing#fnref-3)
[^4]: Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., … Amodei, D. (2020). Language Models are Few-Shot Learners. [↩](https://learnprompting.org/docs/basics/formalizing#fnref-4)
[^5]: Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models. [↩](https://learnprompting.org/docs/basics/formalizing#fnref-5)
