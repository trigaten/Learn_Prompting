# 🟢Prompting

Pada bab sebelumnya, kita membahas AI dan bagaimana manusia dapat menginstruksikan AI untuk melakukan tugas. Proses menginstruksikan AI untuk melakukan tugas disebut prompting [^1]. Kita memberi tahu AI serangkaian instruksi (prompt) dan ia melakukan tugas. Prompt dapat sederhana seperti instruksi / pertanyaan, atau kompleks seperti sejumlah besar teks.

Berikut dua contoh prompt:

### 1) Merangkum Artikel

Misalkan Anda sedang membaca artikel tentang salju di Florida. Anda ingin segera mendapatkan gagasan utama artikel, jadi Anda menunjukkan pada AI apa yang Anda baca, dan meminta ringkasan [^2]:

```
Sangat jarang salju turun di negara bagian Florida AS, terutama di bagian tengah dan selatan negara bagian tersebut. Kecuali di daerah paling utara negara bagian tersebut, sebagian besar kota-kota besar di Florida tidak pernah mencatat turunnya salju yang dapat diukur, meskipun jumlah trace telah dicatat, atau flurries di udara diamati beberapa kali setiap abad. Menurut Layanan Cuaca Nasional, di Florida Keys dan Key West tidak ada kejadian flurries salju sejak kolonisasi Eropa di daerah tersebut lebih dari 300 tahun yang lalu. Di Miami, Fort Lauderdale, dan Palm Beach hanya ada satu laporan flurries salju yang diamati di udara dalam lebih dari 200 tahun; ini terjadi pada Januari 1977. Bagaimanapun, Miami, Fort Lauderdale, dan Palm Beach belum pernah melihat flurries salju sebelum atau setelah kejadian 1977 ini.

Ringkaskan paragraf ini dalam satu kalimat:
```

Berikut adalah respons AI. Ini jauh lebih singkat dibaca!

```
Salju sangat jarang terjadi di Florida, kecuali di daerah paling utara, dan hanya satu kejadian flurries salju di udara yang dicatat di kota-kota besar Miami, Fort Lauderdale, dan Palm Beach dalam 200 tahun terakhir.
```

### 2) Pemecahan Masalah Matematika dalam Bentuk Kata

Jika Anda memiliki kumpulan data persamaan matematika yang ingin Anda selesaikan dengan model bahasa, Anda dapat membuat prompt dengan membuat pertanyaan "Berapa hasil PERSAMAAN".

Untuk pertanyaan yang diberikan, prompt lengkap Anda bisa terlihat seperti ini:

```
Berapa hasil 965 * 590?
```

Untuk prompt ini, GPT-3 (text-davinci-003) (sebuah AI) terkadang menjawab 569.050 (salah). Pada titik inilah prompt engineering dibutuhkan.

# Prompt Engineering

Jika, tidak bertanya  `Berapa hasil 965 * 590?`, namun kita bertanya `Pastikan jawaban Anda benar. Berapa 965 * 590? Pastikan jawaban Anda benar:`, GPT-3 akan menjawab `569350` (benar). Mengapa ini terjadi? Mengapa memberi tahu dua kali pada AI untuk memberikan jawaban yang benar malah dibutuhkan? Bagaimana cara membuat prompt yang menghasilkan hasil yang optimal pada tugas kita? Pertanyaan terakhir ini, khususnya, adalah fokus dari bidang Prompt Engineering, yang ada di materi ini.

> HATI-HATI
Satu hal lagi, jika Anda menjalankan prompt di atas di GPT-3, Anda harus mengatur *temperature* menjadi 0 untuk menghilangkan tingkat keacakan (randomness).
> 

Baca terus untuk mempelajari cara mengembangkan prompt yang baik!

---

[^1]: Shin, T., Razeghi, Y., Logan IV, R. L., Wallace, E., & Singh, S. (2020). AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP). https://doi.org/10.18653/v1/2020.emnlp-main.346
[↩](https://learnprompting.org/docs/basics/prompting#fnref-1)
[^2]: Paragraf ini berasal dari https://en.wikipedia.org/wiki/Snow_in_Florida
[↩](https://learnprompting.org/docs/basics/prompting#fnref-2)
