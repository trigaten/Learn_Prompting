# 🟡 Self-Consistency

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/85d5e4ab-e2fa-40bf-9317-5e704defba03)

Self-consistency[^1] adalah pendekatan yang hanya meminta model menjawab prompt yang sama beberapa kali dan mengambil hasil mayoritas sebagai jawaban akhir. Ini adalah tindak lanjut dari CoT, dan lebih kuat ketika digunakan bersamaan dengan CoT.

## Contoh

Mari pertimbangkan contoh sederhana dalam menganalisis email. Anggap saja Anda adalah perusahaan perangkat lunak dan menerima ratusan email setiap hari. Anda ingin menggunakan model untuk mengklasifikasikan email sebagai penting atau tidak penting, sehingga Anda dapat memprioritaskan email yang mungkin memiliki dampak besar pada bisnis Anda.

Berikut adalah contoh email yang mungkin Anda terima:

```
Halo,

Saya telah menemukan kerentanan keamanan besar di sistem Anda. Meskipun tidak mudah digunakan, memungkinkan untuk mengakses data semua pengguna Anda. Saya telah melampirkan bukti konsep. Harap perbaiki masalah ini secepat mungkin.

Salam,

Donny
```

Mari buat prompt:

```
Halo,

Saya telah menemukan kerentanan keamanan besar di sistem Anda. Meskipun tidak mudah digunakan, memungkinkan untuk mengakses data semua pengguna Anda. Saya telah melampirkan bukti konsep. Harap perbaiki masalah ini secepat mungkin.

Salam,

Donny

Klasifikasikan email di atas sebagai PENTING atau TIDAK PENTING terkait dengan perusahaan perangkat lunak. Mari kita pikirkan satu per satu.
```

Sekarang, kita akan menggunakan prompt di atas untuk menghasilkan beberapa completions/chains of thought. Berikut adalah beberapa contoh:

```
Pengirim telah menemukan kerentanan keamanan besar dalam sistem.
Ini penting karena dapat menyebabkan pelanggaran data.
Saya akan mengklasifikasikan email ini sebagai PENTING

```

```
Pengirim telah menemukan kerentanan keamanan besar dalam sistem, tetapi mereka tidak memberikan bukti konsep dan tidak mudah digunakan.
Saya akan mengklasifikasikan email ini sebagai TIDAK PENTING

```

```
Pengirim kemungkinan adalah peretas dan mungkin memiliki akses ke sistem.
Ini penting karena dapat menyebabkan pelanggaran data.
Saya akan mengklasifikasikan email ini sebagai PENTING

```

Dengan menghasilkan banyak CoT, dan mengambil jawaban yang paling umum terjadi (`PENTING`), kita dapat mendapatkan jawaban yang lebih konsisten dan benar dari GPT-3.

## Hasil

Telah terbukti bahwa self-consistency meningkatkan hasil pada tugas aritmatika, common sense, dan simbolik. Bahkan ketika CoT biasa dianggap tidak efektif[^2], self-consistency masih dapat meningkatkan hasil.

## Catatan

- Wang et al. membahas metode yang lebih kompleks untuk memilih jawaban akhir, yang menangani probabilitas yang dihasilkan oleh LLM untuk setiap pikiran. Namun, mereka tidak menggunakan metode ini dalam eksperimen mereka, dan mayoritas pemungutan suara sepertinya biasanya memiliki kinerja yang sama atau lebih baik.

---

[^1]: Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models. [↩](https://learnprompting.org/docs/intermediate/self_consistency#fnref-1)
[^2]: Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning. [↩](https://learnprompting.org/docs/intermediate/self_consistency#fnref-2)
