---
sidebar_position: 90
---

# 📙 Referensi Kosakata

Silakan merujuk ke halaman ini untuk daftar istilah dan konsep yang akan kami gunakan dalam kursus ini.

#### Large Language Models (LLMs), Pretrained Language Models (PLMs)(@branch2022evaluating), Language Models (LMs), dan model dasar

Semua istilah ini merujuk lebih kurang pada hal yang sama: Kecerdasan Buatan besar (jaringan saraf), yang biasanya telah dilatih pada jumlah teks yang sangat besar.

#### Masked Language Models (MLMs)

MLM adalah jenis model NLP, yang memiliki token khusus, biasanya `[MASK]`, yang digantikan dengan kata-kata dari kamus. Model kemudian memprediksi kata yang telah disembunyikan. Misalnya, jika kalimatnya adalah "Anjing [MASK] kucing", model akan memprediksi "mengejar" dengan probabilitas tinggi.

#### Label

Konsep label lebih dapat dipahami jika diberikan contoh.

Katakanlah kita ingin mengklasifikasikan beberapa Tweet sebagai kasar atau tidak kasar. Jika kita memiliki daftar Tweet dan _label_ yang sesuai (kasar atau tidak kasar), kita dapat melatih model untuk mengklasifikasikan apakah tweet kasar atau tidak. Label umumnya hanya merupakan kemungkinan untuk tugas klasifikasi.

#### Label Space

Semua label yang mungkin untuk tugas tertentu ('kasar' dan 'tidak kasar' untuk contoh di atas).

#### Sentiment Analysis

Sentiment analysis adalah tugas mengklasifikasikan teks menjadi sentimen positif, negatif, atau lainnya.

#### "Model" vs. "AI" vs. "LLM"

Istilah-istilah ini digunakan agak bergantian selama kursus ini, tetapi tidak selalu memiliki arti yang sama. LLMs adalah jenis AI, seperti yang disebutkan di atas, tetapi tidak semua AI adalah LLMs. Ketika kita menyebutkan model dalam kursus ini, kami merujuk pada model AI. Oleh karena itu, dalam kursus ini, Anda dapat menganggap istilah "model" dan "AI" dapat saling dipertukarkan.

#### Machine Learning (ML)

ML adalah bidang studi yang berfokus pada algoritma-algoritma yang dapat belajar dari data. ML adalah subbidang AI.

#### Verbalizer

Pada pengaturan klasifikasi, verbalizer adalah pemetaan dari label ke kata-kata dalam kosakata(@schick2020exploiting). Sebagai contoh, pertimbangkan melakukan klasifikasi sentimen dengan prompt berikut:

```text
Tweet: "Saya suka hotpockets"
Apa sentimen dari tweet ini? Katakan 'pos' atau 'neg'.
```

Di sini, verbalizer adalah pemetaan dari label konseptual dari `positif` dan `negatif` ke token `pos` dan `neg`.

#### Reinforcement Learning from Human Feedback (RLHF)

RLHF adalah metode untuk menyetel ulang LLM menurut data preferensi manusia.

<!-- %%RemarkAutoGlossary::list_all%% -->
