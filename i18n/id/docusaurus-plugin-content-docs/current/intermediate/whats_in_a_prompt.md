---
sidebar_position: 7
---

# 🟢 Apa yang ada dalam Sebuah Prompt?

Kami telah mencoba beberapa strategi pengingat yang berbeda di halaman-halaman sebelumnya. Halaman ini akan menawarkan beberapa saran umum tentang apa yang sebenarnya penting dalam sebuah permintaan.


## "Ground Truth Matters Little"


Secara mengejutkan, ketika memberikan beberapa contoh %%exemplars|exemplars%% dalam permintaan, jawaban yang sesungguhnya (%%gold|gold_labels%%) dalam contoh tidak penting. Seperti yang ditunjukkan pada gambar di bawah ini, memberikan bels|labels%% acak %%lapada contoh hanya sedikit merusak kinerja (@min2022rethinking). "Demo" adalah sinonim dengan contoh dalam gambar ini.

import GoldUn from '@site/docs/assets/intermediate/gold_unimportant.webp';

<div style={{textAlign: 'center'}}>
  <img src={GoldUn} style={{width: "750px"}}/>
</div>

## Labelspace Matters

Meskipun label emas dalam contoh-contoh bukanlah hal yang penting,%labelspace|labelspace%%. Bahkan menyediakan label acak dari labelspace membantu LLM memahami labelspace dengan lebih baik, dan meningkatkan hasil. Selain itu, mewakili distribusi labelspace dengan baik pada contoh sangat penting. Daripada secara seragam mengambil sampel dari label pada contoh, lebih baik mengambil sampel sesuai dengan distribusi sebenarnya dari label-label.

## Format Matters

Mungkin bagian paling penting dari contoh adalah bagaimana mereka diformat. Format ini memberitahu LLM cara mengatur format jawabannya dengan benar sesuai dengan petunjuk.

Misalnya, pertimbangkan contoh-contoh berikut. Mereka menggunakan kata-kata kapital sebagai jawaban. Meskipun jawabannya benar-benar salah (2+2 bukan 50), GPT-3 dengan benar menjawab pertanyaan terakhir, dan mengikuti format yang lain.

```text
Apa hasil dari 2+2? 
LIMA PULUH
Berapakah 20+5?
EMPAT PULUH TIGA
Apakah 12+9?
// highlight-start
DUA PULUH SATU
// highlight-end
```

## Catatan

Antara 4-8 contoh adalah jumlah yang baik untuk digunakan sebagai permintaan tembakan sedikit (@min2022rethinking), tapi seringkali berguna untuk menambahkan sebanyak mungkin.
