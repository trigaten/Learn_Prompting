# 🟢 Penggunaan Zapier untuk Email

## Pengantar

Kita telah melihat seberapa bergunanya GPT-3 ketika berurusan dengan email. Hal ini bisa menjadi lebih berguna ketika digabungkan dengan tools nocode seperti [Zapier](https://zapier.com/) atau [Bubble.io](https://bubble.io/).

Artikel ini akan berisi contoh tentang apa yang bisa dilakukan oleh Zapier+GPT-3 hanya dengan waktu pengaturan yang singkat. Artikel ini berfokus pada contoh tertentu, namun kemungkinannya jauh lebih besar. Kami akan memberikan beberapa contoh lain di sepanjang jalan. Ingatlah bahwa Anda juga dapat melakukannya di [Bubble.io](http://bubble.io/). Ada banyak alat nocode lainnya, namun pada saat penulisan hanya sedikit yang memungkinkan Anda menggunakan GPT-3.

Dalam artikel ini, kami akan menunjukkan cara mengatur sistem sederhana di Zapier di mana **email diringkas dan disimpan**. Memiliki pertemuan dengan seseorang? Cek ringkasan email yang pernah Anda pertukarkan dengan orang tersebut. Menyiapkannya hanya membutuhkan sekitar 20 menit.

> PERINGATAN
> 
> 
> Untuk artikel ini, sangat membantu jika Anda telah mengenal Zapier. Jika belum, Anda bisa membaca artikel ini [di sini](https://zapier.com/learn/).
> 

## Ide Umum

Di bawah ini adalah diagram tentang apa yang akan kita lakukan di Zapier. Setiap kali email masuk ke kotak masuk Anda, itu akan memicu Zapier. Ada empat langkah (sampai saat ini):

1. Email masuk dan memicu Zapier
2. Format konten email (untuk menghapus tanda HTML markdown, misalnya).
3. Kirim ke GPT-3 untuk diringkas
4. Simpan keluaran dalam database

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/9fa7174b-ccbd-4138-80ad-42d490564217)

## Pengaturan di Zapier

Pastikan Anda memiliki [akun Zapier](https://zapier.com/sign-up) (Anda bisa mendapatkannya secara gratis). Menyiapkannya seharusnya cukup mudah. Setelah membuat akun Anda, perluas kotak di bawah ini untuk melihat deskripsi lengkap dari setiap tindakan Zapier yang perlu kita buat.

- Expand untuk melihat deskripsi lebih detail tentang langkah-langkah di Zapier
    
    Berikut ini adalah action diagram Zapier
    
    ![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/5905b308-029d-4d41-bdd2-5f462732678c)

    

Berikut adalah pengaturan di Zapier yang memungkinkan Anda melakukan ringkasan yang sangat dasar seperti yang ditunjukkan dalam diagram. Memiliki keterbatasan, tetapi memang menjalankan tugas dan dapat membangun database yang berguna.

## Mengoptimalkan prompt untuk hasil yang lebih baik

Ada beberapa cara mudah untuk meningkatkan hasil Anda. Menambahkan konteks dan role prompting dapat meningkatkan hasil. Namun, topik dan isi email Anda mungkin mencakup berbagai topik. Ini berarti bahwa instruksi umum akan lebih baik daripada yang sangat spesifik, yang mungkin membuat model menjadi salah.

Agar praktis, mulailah memberikan instruksi, diikuti dengan memberitahu GPT-3 kapan email dimulai di prompt dengan hanya menambahkan "Email: " dan mengakhiri prompt dengan ""Summary": ". Ini menghindari GPT-3 menjawab dengan "Tentu! Saya bisa merangkumnya untuk Anda...".

Role prompting juga bisa jadi berguna di sini. Meminta GPT-3 untuk bertindak sebagai asisten pribadi untuk membantu meningkatkan kualitas ringkasan. Jika Anda ingin merangkum email pekerjaan, dengan hanya menambahkan peran yang Anda miliki memberikan konteks kepada GPT-3 untuk bekerja. Hal ini bertindak seolah-olah ia mengasumsikan beberapa tingkat pengetahuan dari pembaca, yang membantu menyaring bagian-bagian email yang tidak relevan. Di bawah ini kami tunjukkan beberapa contoh dengan email yang mungkin diterima oleh administrator kantor.

Anda dapat memintanya merangkum email sederhana dalam bentuk poin-poin, namun ini mungkin tidak begitu berguna tergantung pada bagaimana Anda ingin menggunakan ringkasan. Untuk memeriksa cepat (skimming) pertukaran email, Anda mungkin hanya menginginkannya singkat dan padat. Hanya dengan memintanya di prompt, hal ini akan berhasil dilakukan. Di bawah ini adalah contoh prompt tersebut. Sesuaikan untuk melihat bagaimana perubahan.

Responnya dapat diterima dan berguna. Namun, dengan penyesuaian lebih lanjut, Anda dapat mendapatkan hasil yang lebih baik. Sebagai pembaca ringkasan, Anda tidak peduli bahwa itu adalah email, Anda mungkin menginginkan tingkat detail yang lebih rendah untuk ringkasan. Informasi tentang mengapa tidak relevan, sama halnya dengan kalimat terakhir tentang pertanyaan dan concern. Hanya dengan menambahkan bahwa tujuan ringkasan adalah agar Anda memeriksa konten dan bahwa Anda ingin basa-basi dihapus, hasilnya bisa ditingkatkan.

Sekarang Anda hanya memiliki bagian-bagian yang paling penting dari ringkasan!

## Penggunaan Lainnya

Sekarang setelah melihat contoh ringkasan, kami akan menyebutkan beberapa penggunaan lain untuk Zapier+GPT-3. Contoh yang sangat bagus adalah membuat GPT-3 melakukan kategorisasi email Anda. Hal ini hanya tergantung cara kita memberitahunya dalam prompt untuk melakukan kategorisasi email berikutnya sebagai kategori apa pun yang Anda suka.

Contoh yang lebih dalam adalah memiliki beberapa prompt. Anda dapat menggunakan prompt untuk menghasilkan respons yang sejalan dengan permintaan email dan satu yang tidak sejalan atau menolak. Keduanya dapat disimpan dalam draf Anda dan siap digunakan kapan saja Anda ingin mengirimkannya.

Jika Anda secara teratur menerima email yang sangat mirip, Anda dapat menggunakan filter di Zapier untuk menerapkan prompt HANYA (ONLY) pada email tersebut. Ini dapat menjadi tools yang bagus ketika digabungkan dengan formatter. Anda dapat mengekstrak informasi dan mengekspor CSV dari mereka atau langsung menyimpannya dalam beberapa bentuk database.

## Perhatian

Harap diingat mengenai privasi saat menjalankan email melalui GPT-3 dan menyimpannya. GPT-3 kadang-kadang membuat kesalahan. Kami sangat menyarankan untuk memeriksa konten email sebelum mengirimkannya.
