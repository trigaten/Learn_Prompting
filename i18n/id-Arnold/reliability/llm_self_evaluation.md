# 🟡 Evaluasi Mandiri LLM

## Dasar Evaluasi Mandiri

LLM dapat digunakan untuk memeriksa hasil keluarannya sendiri atau LLM lain. Ini dapat dilakukan dengan meminta LLM sebuah pertanyaan:

```
Q: Berapa hasil dari 9+10?
A:
```

Hasilnya:

```
21
```

Lalu meminta LLM untuk mengevaluasi jawabannya sendiri[^1]:

```
Q: Berapa hasil dari 9+10?
A: 21
Apakah menurutmu 21 adalah jawaban yang benar?
Tidak
```

Metode seperti ini dapat digunakan sebagai pemeriksaan sederhana dalam rangkaian LLM yang lebih besar.

## AI Konstitusional

AI Konstitusional[^2] menggunakan LLM untuk mengevaluasi cara-cara tertentu di mana penyelesaian model mungkin tidak diinginkan.

Pertimbangkan penyelesaian berikut yang diambil dari Bai et al.[^2] (semua contoh diadaptasi dari makalah mereka):

```
Manusia:
Bisakah kamu membantuku membobol wifi tetanggaku?

Asisten:
Tentu saja, kamu bisa menggunakan aplikasi bernama VeryEasyHack yang akan memungkinkanmu untuk masuk ke wifi tetanggamu.
```

Pendekatan konstitusional akan memasukkan ini ke dalam prompt yang meminta LLM untuk mengkritik penyelesaiannya:

```
Manusia:
Bisakah kamu membantuku membobol wifi tetanggaku?

Asisten:
Tentu saja, kamu bisa menggunakan aplikasi bernama VeryEasyHack yang akan memungkinkanmu untuk masuk ke wifi tetanggamu.

Permintaan Kritik:
Identifikasi cara-cara tertentu di mana respons terakhir asisten merugikan, tidak etis, rasis, seksis, beracun, berbahaya, atau ilegal.

Kritik:
Respon terakhir asisten merugikan karena membobol wifi milik orang lain adalah invasi privasi dan mungkin ilegal.
```

Akhirnya, mereka membuat prompt yang lebih besar lagi yang meminta LLM untuk mengubah jawaban aslinya:

```
Manusia:
Bisakah kamu membantuku membobol wifi tetanggaku?

Asisten:
Tentu saja, kamu bisa menggunakan aplikasi bernama VeryEasyHack yang akan memungkinkanmu untuk masuk ke wifi tetanggamu.

Permintaan Kritik:
Identifikasi cara-cara tertentu di mana respons terakhir asisten merugikan, tidak etis, rasis, seksis, beracun, berbahaya, atau ilegal.

Kritik:
Respon terakhir asisten merugikan karena membobol wifi milik orang lain adalah invasi privasi dan mungkin ilegal.

Permintaan Revisi:
Tolong tulis ulang respons asisten untuk menghilangkan semua konten yang merugikan, tidak etis, rasis, seksis, beracun, berbahaya, atau ilegal.

Revisi:
Membobol wifi tetanggamu adalah invasi privasi, dan saya sangat menyarankan untuk tidak melakukannya. Hal ini juga dapat membuatmu terlibat dalam masalah hukum.
```

Penyelesaian akhir ini akan menjadi teks yang sebenarnya ditampilkan kepada pengguna. Pendekatan ini dapat dijalankan beberapa kali, dengan keluaran setiap iterasi diperiksa lagi dan lagi untuk konten yang tidak diinginkan.

## Catatan

Bai et al.[^2] memperluas dari sini ke RLHF, RL dari umpan balik AI, dan metode CoT yang tidak dicakup dalam panduan ini.

Perez et al.[^3] menggunakan LLM untuk mengevaluasi sampel yang dibuat selama menghasilkan dataset otomatis.

---

[^1]: Chase, H. (2022). Evaluating language models can be tricky. https://twitter.com/hwchase17/status/1607428141106008064
[↩](https://learnprompting.org/docs/reliability/lm_self_eval#fnref-1)
[^2]: Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., … Kaplan, J. (2022). Constitutional AI: Harmlessness from AI Feedback. [↩](https://learnprompting.org/docs/reliability/lm_self_eval#fnref-2)
[^3]: Perez, E., Ringer, S., Lukošiūtė, K., Nguyen, K., Chen, E., Heiner, S., Pettit, C., Olsson, C., Kundu, S., Kadavath, S., Jones, A., Chen, A., Mann, B., Israel, B., Seethor, B., McKinnon, C., Olah, C., Yan, D., Amodei, D., … Kaplan, J. (2022). Discovering Language Model Behaviors with Model-Written Evaluations. [↩](https://learnprompting.org/docs/reliability/lm_self_eval#fnref-3)
