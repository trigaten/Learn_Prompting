# **📙 Referensi Kosakata**

Silakan merujuk ke halaman ini untuk daftar istilah dan konsep yang akan kita gunakan dalam kursus ini.

### Large Language Models (LLM), Pretrained Language Models (PLM)[^1], Language Models (LM), dan foundation models

Istilah-istilah ini merujuk pada hal yang sama: kecerdasan buatan besar (jaringan saraf), yang biasanya telah dilatih pada sejumlah besar teks.

### Masked Language Models (MLMs)

MLM adalah jenis model NLP, yang memiliki token khusus, biasanya `[MASK]`, yang digantikan dengan kata dari kosakata. Model kemudian memprediksi kata yang disembunyikan itu. Misalnya, jika kalimatnya adalah "Anjing itu [MASK] kucing", model akan memprediksi "mengejar" dengan probabilitas tinggi.

### Label

Konsep label paling baik dipahami dengan contoh.

Katakanlah kita ingin mengklasifikasikan beberapa tweet sebagai kasar atau tidak kasar. Jika kita memiliki daftar tweet dan label yang sesuai (kasar atau tidak kasar), kita dapat melatih model untuk mengklasifikasikan apakah tweet kasar atau tidak. Label umumnya hanya kemungkinan untuk tugas klasifikasi.

### Label Space

Semua label yang mungkin untuk tugas tertentu ('kasar' dan 'tidak kasar' untuk contoh di atas).

### Sentiment Analysis

Analisis sentimen adalah tugas mengklasifikasikan teks menjadi sentimen positif, negatif, atau lainnya.

### "Model" vs. "AI" vs. "LLM"

Istilah-istilah ini digunakan agak bergantian selama kursus ini, tetapi tidak selalu memiliki arti yang sama. LLM adalah jenis AI, seperti yang telah disebutkan di atas, tetapi tidak semua AI adalah LLM. Ketika kita menyebut model dalam kursus ini, kita merujuk pada model AI. Dengan demikian, dalam kursus ini, Anda dapat menganggap istilah "model" dan "AI" dapat dipertukarkan.

### Machine Learning (ML)

ML adalah bidang studi yang berfokus pada algoritma yang dapat belajar dari data. ML adalah subbidang AI.

### Verbalizer

Dalam pengaturan klasifikasi, verbalizer adalah pemetaan dari label ke kata-kata dalam kosakata model bahasa[^2]. Misalnya, pertimbangkan melakukan klasifikasi sentimen dengan prompt berikut:

```
Tweet: "I love hotpockets"
What is the sentiment of this tweet? Say 'pos' or 'neg'.
```

Di sini, verbalizer adalah pemetaan dari label konseptual `positif` dan `negatif` ke token `pos` dan `neg`.

### Reinforcement Learning from Human Feedback (RLHF)

RLHF adalah metode untuk menyetel ulang LLM menurut data preferensi manusia.

---

[^1]: Branch, H. J., Cefalu, J. R., McHugh, J., Hujer, L., Bahl, A., del Castillo Iglesias, D., Heichman, R., & Darwishi, R. (2022). Evaluating the Susceptibility of Pre-Trained Language Models via Handcrafted Adversarial Examples. [↩](https://learnprompting.org/docs/vocabulary#fnref-1)
[^2]: Schick, T., & Schütze, H. (2020). Exploiting Cloze Questions for Few Shot Text Classification and Natural Language Inference. [↩](https://learnprompting.org/docs/vocabulary#fnref-2)
