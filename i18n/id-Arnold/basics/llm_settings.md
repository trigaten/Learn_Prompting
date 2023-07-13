# 🟢 Pengaturan LLM

## Pengantar

Output dari LLM dapat dipengaruhi oleh *konfigurasi hyperparameter*, yang mengontrol berbagai aspek dari model, seperti seberapa 'acak' hal tersebut. Hyperparameter ini dapat disesuaikan untuk menghasilkan keluaran yang lebih kreatif, beragam, dan menarik. Dalam bagian ini, kita akan membahas dua konfigurasi hyperparameter penting dan bagaimana mereka mempengaruhi output LLM.

> CATATAN
> 
> 
> [untuk peneliti] Ini berbeda dari hyperparameter biasa seperti tingkat pembelajaran, jumlah layer, hidden size, dll.
> 

## Temperatur

Temperatur adalah konfigurasi hyperparameter yang mengontrol keacakan output model bahasa. Temperatur tinggi menghasilkan hasil yang lebih tidak terduga dan kreatif, sedangkan temperatur rendah menghasilkan output yang lebih umum dan konservatif. Misalnya, jika Anda menyesuaikan temperatur menjadi 0.5, model biasanya akan menghasilkan teks yang lebih mudah ditebak dan kurang kreatif daripada jika Anda mengatur suhu menjadi 1.0.

## Top p

Top p, juga dikenal sebagai nucleus sampling, adalah konfigurasi hyperparameter lain yang mengontrol keacakan output model bahasa. Top p menetapkan probabilitas ambang batas dan memilih token teratas yang probabilitas kumulatifnya melebihi ambang batas. Model kemudian secara acak memilih dari kumpulan token ini untuk menghasilkan output. Metode ini dapat menghasilkan output yang lebih beragam dan menarik daripada metode tradisional yang secara acak memilih seluruh kosakata. Misalnya, jika Anda menetapkan top p menjadi 0,9, model hanya akan mempertimbangkan kata-kata yang paling mungkin yang membentuk 90% dari massa probabilitas.

## Hyperparameter relevan lainnya

Ada banyak hyperparameter lain yang dapat mempengaruhi kinerja model bahasa, seperti frequency penalties dan presence penalties. Kami tidak membahasnya di sini, tetapi mungkin akan melakukannya di masa depan.

## Bagaimana hiperparameter ini mempengaruhi output

Temperatur dan top p dapat mempengaruhi output model bahasa dengan mengontrol tingkat keacakan dan keragaman dalam teks yang dihasilkan. Nilai temperatur atau top p yang tinggi menghasilkan hasil yang lebih tidak terduga dan menarik, tetapi juga meningkatkan kemungkinan kesalahan atau teks yang tidak masuk akal. Nilai temperatur atau top p yang rendah dapat menghasilkan hasil yang lebih konservatif dan mudah ditebak, tetapi juga dapat menghasilkan teks yang repetitif atau tidak menarik.

Untuk tugas menghasilkan teks, Anda mungkin ingin menggunakan nilai temperatur atau top p yang tinggi. Namun, untuk tugas di mana akurasi penting, seperti tugas terjemahan atau menjawab pertanyaan, nilai suhu atau top p yang rendah harus digunakan untuk meningkatkan akurasi dan kebenaran fakta.

> CATATAN
> 
> 
> Kadang-kadang keacakan yang lebih tinggi dapat membantu pada tugas di mana akurasi diperlukan ketika dipasangkan dengan [teknik prompting khusus](https://learnprompting.org/docs/intermediate/self_consistency).
> 

## Kesimpulan

Secara ringkas, temperatur, top p, dan konfigurasi hyperparameter model lainnya adalah faktor kunci yang perlu dipertimbangkan saat bekerja dengan model bahasa. Dengan memahami hubungan antara hiperparameter ini dan output model, praktisi dapat mengoptimalkan prompt mereka untuk tugas dan aplikasi tertentu.

> PERINGATAN!
> 
> 
> Beberapa model, seperti ChatGPT, **tidak** memungkinkan Anda menyesuaikan konfigurasi hyperparameter ini (kecuali Anda menggunakan API).
> 

By jackdickens382
