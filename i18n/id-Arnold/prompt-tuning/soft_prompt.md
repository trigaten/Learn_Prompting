# 🔴 Soft Prompt

Prompt tuning[^1], sebuah alternatif dari penyempurnaan model[^2], membekukan bobot model dan memperbarui parameter dari sebuah prompt. Prompt yang dihasilkan adalah 'soft prompt'.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/98ab92f3-198f-4ae2-9892-955c5e22e00f)

Model Tuning vs Prompt Tuning (Lester et al.)

Gambar di atas membandingkan penyetelan model dengan penyetelan prompt. Dalam penyetelan model, Anda menyetel ulang model yang sama pada tugas yang berbeda. Ini memberi Anda beberapa model yang berbeda, dengan mana Anda tidak selalu dapat memproses input secara mudah.

Di sisi lain, penyetelan prompt memungkinkan Anda menggunakan model yang sama untuk semua tugas. Anda hanya perlu menambahkan prompt yang sesuai pada waktu inferensi, yang membuat pengelompokan berbagai tugas lebih mudah. Ini hampir sama dengan keuntungan yang dimiliki oleh prompting biasa. Selain itu, soft prompt yang dilatih untuk satu model di beberapa tugas sering kali memiliki panjang token yang sama.

## Cara Kerjanya

Untuk memahami logika dasar di balik soft prompting, mari kita pikirkan tentang bagaimana **inferensi model** bekerja pada prompt tertentu: `Berapa 2+2?`.

1. Prompt tersebut dapat diberi token sebagai `Berapa, 's, 2, +, 2, ?`.
2. Kemudian, setiap token akan dikonversi menjadi vektor nilai.
3. Vektor nilai ini dapat dianggap sebagai parameter model. Model dapat dilatih lebih lanjut, hanya menyesuaikan bobot dari prompt ini.

Perhatikan bahwa segera setelah kita mulai memperbarui bobot ini, vektor token tidak lagi sesuai dengan embedding aktual dari kosa kata.

# Hasil

Penyetelan prompt berkinerja lebih baik dengan model yang lebih besar. Model yang lebih besar juga memerlukan sedikit token soft prompt. Terlepas dari itu, lebih dari 20 token tidak menghasilkan peningkatan kinerja yang signifikan.

---

[^1]: Lester, B., Al-Rfou, R., & Constant, N. (2021). The Power of Scale for Parameter-Efficient Prompt Tuning. [↩](https://learnprompting.org/docs/trainable/soft_prompting#fnref-1)
[^2]: Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts. [↩](https://learnprompting.org/docs/trainable/soft_prompting#fnref-2)
