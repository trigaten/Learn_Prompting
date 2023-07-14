# 🟢 Apa yang Ada di Dalam Prompt

Kita telah melalui beberapa strategi prompting yang berbeda pada halaman sebelumnya. Halaman ini akan menawarkan beberapa saran umum tentang apa yang sebenarnya penting dalam sebuah prompt.

## "Ground Truth Matters Little"

Mengejutkannya, ketika memberikan contoh (exemplar) few shot di dalam prompt, jawaban sebenarnya (label benar dari tugas yang diberikan = disebut *emas*) dalam exemplar tersebut itu tidak penting. Seperti yang ditunjukkan dalam gambar di bawah ini, memberikan label acak pada exemplar hampir tidak mempengaruhi kinerja[^1]. "Demo" memiliki arti yang sama dengan contoh dalam gambar.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/d5263a97-beef-46cc-a96e-bd536bec8e88)


## Labelspace Matters

Meskipun label emas dalam exemplar tidak penting, namun labelspace (semua label yang mungkin untuk sebuah tugas yang diberikan) itu penting. Bahkan memberikan label acak dari labelspace membantu LLM untuk memahami labelspace dengan lebih baik, dan meningkatkan hasil. Selain itu, mewakili distribusi labelspace dengan benar dalam contoh-contoh itu penting. Alih-alih secara merata mengambil sampel dari labelspace dalam contoh, lebih baik mengambil sampel sesuai dengan distribusi sebenarnya dari label.

## Format Matters

Mungkin bagian paling penting dari exemplar adalah bagaimana mereka diformat. Format ini menginstruksikan LLM untuk memformat jawabannya dengan benar pada pendorong.

Sebagai contoh, pertimbangkan contoh-contoh di bawah ini. Mereka menggunakan kata-kata huruf besar sebagai jawaban. Meskipun jawabannya sepenuhnya salah (2+2 bukan 50), GPT-3 dengan benar menjawab pertanyaan terakhir, dan mengikuti format dari yang lain.

```
Berapa 2+2?
LIMA PULUH
Berapa 20+5?
EMPAT PULUH-TIGA
Berapa 12+9?
DUA PULUH-SATU
```

## Catatan

Di antara 4-8 exemplar merupakan jumlah yang baik untuk digunakan pada few shot prompt[^1], tetapi seringkali berguna untuk menempatkannya sebanyak mungkin.

---

[^1]: Min, S., Lyu, X., Holtzman, A., Artetxe, M., Lewis, M., Hajishirzi, H., & Zettlemoyer, L. (2022). Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?
[↩](https://learnprompting.org/docs/intermediate/whats_in_a_prompt#fnref-1)
