---
sidebar_position: 5
---

# 🟡 Self-Consistency

import SCImage from '@site/docs/assets/reliability/self_consistency.webp';

<div style={{textAlign: 'center'}}>
  <img src={SCImage} style={{width: "500px"}}/>
</div>

Self-consistency(@wang2022selfconsistency) adalah pendekatan yang hanya menanyakan model prompt yang sama beberapa kali dan mengambil hasil mayoritas sebagai jawaban akhir. Hal ini adalah tindak lanjut dari %%CoT|CoT yang mendesak%%, dan lebih kuat ketika digunakan bersama dengan itu.

## Contoh

Mari kita pertimbangkan contoh sederhana dalam menganalisis email. Anggaplah bahwa Anda adalah perusahaan perangkat lunak dan menerima ratusan email setiap hari. Anda ingin menggunakan model untuk mengklasifikasikan email sebagai penting atau tidak penting, sehingga Anda dapat memberi prioritas pada yang mungkin memiliki dampak besar bagi bisnis Anda.

Berikut contoh email yang mungkin Anda terima:

```text
Halo,

Saya telah menemukan kerentanan keamanan utama dalam sistem Anda. Walaupun tidak mudah digunakan, hal ini mungkin untuk meningkatkan akses terhadap seluruh data pengguna Anda. Saya telah melampirkan
bukti konsep. Silakan perbaiki masalah ini secepat mungkin.

Halo,

Donny
```

Mari kita masukkan itu ke dalam prompt:

```text
Halo,

Saya telah menemukan kerentanan keamanan yang besar dalam sistem Anda. Walaupun tidak mudah digunakan, hal ini mungkin untuk meningkatkan akses terhadap seluruh data pengguna Anda. Saya telah melampirkan
sebuah bukti konsep. Silakan perbaiki masalah ini secepat mungkin.

Cheers,

Donny

Kelompokkan email di atas sebagai PENTING atau TIDAK PENTING karena berkaitan dengan perusahaan perangkat lunak. Mari kita berpikir langkah demi langkah.
```

Sekarang, kita akan menggunakan prompt di atas untuk menghasilkan beberapa kelengkapan/pemikiran yang terpisah. Berikut adalah beberapa contoh:

```text
<!-- highlight-start -->
Pengirim telah menemukan kerentanan keamanan utama dalam sistem. 
Ini penting karena ini dapat menyebabkan pelanggaran data. 
Saya akan mengklasifikasikan email ini sebagai PENTING
<!-- highlight-end -->
```

```text
<!- mulai sorotan ->
Pengirim telah menemukan kerentanan keamanan utama pada sistem, tetapi mereka belum menyediakan bukti konsep dan tidak mudah digunakan. 
Saya akan mengklasifikasikan email ini sebagai TIDAK PENTING
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
Pengirim kemungkinan adalah seorang peretas dan mungkin memiliki akses ke sistem. 
Ini penting karena dapat menyebabkan pelanggaran data. 
Aku akan mengklasifikasikan email ini sebagai PENTING
<!-- highlight-end -->
```

Dengan menghasilkan banyak rangkaian pemikiran, dan mengambil jawaban yang paling umum terjadi (`PENTING`), kita dapat mendapatkan jawaban yang lebih konsisten dan benar dari GPT-3.

## Hasil

Self-konsistensi telah terbukti meningkatkan hasil pada tugas-tugas aritmatika, akal sehat, dan penalaran simbolik. Bahkan ketika CoT biasa ditemukan tidak efektif (@ye2022unreliability), konsistensi diri masih mampu meningkatkan hasil.

## Catatan

- Wang et al. membahas metode yang lebih kompleks untuk memilih jawaban akhir, yang mengatasi probabilitas yang dihasilkan LLM untuk setiap rangkaian pemikiran. Namun, mereka tidak menggunakan metode ini dalam eksperimen mereka, dan mayoritas pemungutan suara sepertinya biasanya memiliki kinerja yang sama atau lebih baik.