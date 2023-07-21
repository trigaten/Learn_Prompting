---
sidebar_position: 100
---

# 🟢 Pengaturan LLM


import Temperature from '@site/docs/assets/basics/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

# Pendahuluan

Output LLM dapat dipengaruhi oleh *konfigurasi hyperparameter*, yang mengontrol berbagai aspek model, seperti seberapa 'acak' itu. Hyperparameter ini dapat disesuaikan untuk menghasilkan lebih banyak keluaran yang kreatif, beragam, dan menarik. Dalam bagian ini, kita akan membahas dua konfigurasi hyperparameter penting dan bagaimana mereka mempengaruhi keluaran LLM.

:::catatan
[untuk peneliti] Ini berbeda dengan hyperparameter biasa seperti tingkat pembelajaran, jumlah lapisan, ukuran tersembunyi, dll.
:::

## Temperatur

Temperatur adalah konfigurasi hyperparameter yang mengontrol keacak-an hasil model bahasa. Temperatur tinggi menghasilkan hasil yang lebih tidak terduga dan kreatif, sedangkan temperatur rendah menghasilkan output yang lebih umum dan konservatif. Sebagai contoh, jika Anda menyesuaikan temperatur menjadi 0.5, model biasanya akan menghasilkan teks yang lebih dapat diprediksi dan kurang kreatif dibandingkan jika Anda set temperatur menjadi 1.0.

## Top p

Top p, yang juga dikenal sebagai sampling inti, adalah konfigurasi hyperparameter lain yang mengontrol keacakan output model bahasa. Ia menetapkan probabilitas ambang batas dan memilih token teratas yang probabilitas kumulatifnya melebihi ambang batas. Model kemudian secara acak mengambil sampel dari himpunan token ini untuk menghasilkan output. Metode ini dapat menghasilkan keluaran yang lebih beragam dan menarik daripada metode tradisional yang secara acak memilih sampel dari seluruh kosakata. Misalnya, jika Anda mengatur puncak p menjadi 0,9, model hanya akan mempertimbangkan kata-kata yang paling mungkin yang membentuk 90% dari massa probabilitas.

## Hyperparameter lain yang relevan

Ada banyak hyperparameter lain yang dapat mempengaruhi kinerja model bahasa, seperti frekuensi dan presence penalties. Kita tidak membahas mereka di sini, tetapi mungkin akan dibahas di masa depan.

## Bagaimana hyperparameter ini mempengaruhi hasil keluaran

Temperatur dan top p keduanya dapat mempengaruhi output dari model bahasa dengan mengontrol derajat ketidakteraturan dan keberagaman dalam teks yang dihasilkan. Temperatur atau top p yang tinggi menghasilkan hasil yang lebih tidak terduga dan menarik, tetapi juga meningkatkan kemungkinan kesalahan atau teks yang tidak masuk akal. Temperatur atau top p rendah dapat menghasilkan hasil yang lebih konservatif dan dapat diprediksi, tetapi juga dapat menghasilkan teks yang berulang atau tidak menarik.

Untuk tugas menghasilkan teks, Anda mungkin ingin menggunakan temperatur yang tinggi atau nilai top p yang tinggi. Namun, untuk tugas-tugas di mana ketepatan sangat penting, seperti tugas penerjemahan atau menjawab pertanyaan, temperatur rendah atau nilai top p harus digunakan untuk meningkatkan ketepatan dan kebenaran faktual.

:::catatan
Terkadang keacakan lebih membantu dalam tugas-tugas di mana ketepatan diperlukan ketika dipadukan dengan [teknik pemberian petunjuk khusus](https://learnprompting.org/docs/intermediate/self_consistency).
:::




## Kesimpulan

Secara singkat, temperatur, top p, dan konfigurasi hyperparameter model lainnya adalah faktor kunci yang perlu dipertimbangkan saat bekerja dengan model bahasa. Dengan memahami hubungan antara hyperparameter ini dan output model, praktisi dapat mengoptimalkan instruksi mereka untuk tugas dan aplikasi tertentu.

:::peringatan
Beberapa model, seperti ChatGPT, **tidak** memungkinkan Anda untuk menyesuaikan hiperparameter konfigurasi ini (kecuali jika Anda menggunakan API).
:::

Oleh jackdickens382