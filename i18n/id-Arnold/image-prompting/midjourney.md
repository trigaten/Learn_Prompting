# 🟢 Midjourney

[Midjourney](https://www.midjourney.com/) adalah generator gambar AI yang beroperasi melalui antarmuka bot Discord serta aplikasi web (versi API Midjourney telah direncanakan). Proses untuk menghasilkan gambar dengan Midjourney mengikuti prinsip-prinsip dasar yang sama dengan generator gambar AI lainnya, termasuk penggunaan prompt untuk memandu proses untuk menghasilkan gambar.

Salah satu fitur unik dari Midjourney dibandingkan dengan generator gambar AI lainnya adalah kemampuannya untuk menciptakan gambar yang menarik secara visual dan artistik dalam komposisi. Ini disebabkan oleh pelatihan khusus model, yang memungkinkan untuk menghasilkan gambar berkualitas tinggi dengan parameter artistik tertentu (lebih lanjut tentang hal ini di "Advanced Prompts" > "Parameters").

Anda dapat bereksperimen dengan Bot Midjourney di [Learn Prompting Discord](http://learnprompting.org/discord) atau di [server Midjourney resmi](https://discord.gg/midjourney).

# Penggunaan Dasar

Anatomi prompt dasar dengan Midjourney adalah `/imagine prompt: [IMAGE PROMPT] [--PARAMETER OPSIONAL]`.

Sebagai contoh: `/imagine prompt: astronaut on a horse`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b354b8e6-c5a2-4ffd-a0b6-0e269c18afb1)

Contoh dengan parameter: `/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/2178dc31-69ab-45e7-bfbe-a3a098756eae)


Dalam contoh dasar ini, parameter berikut telah digunakan:

- `--ar 3:2` menetapkan rasio aspek gambar menjadi 3:2
- `--c 70` menambahkan chaos value senilai 70 untuk memungkinkan Midjourney menginterpretasikan prompt dengan lebih bebas (rentang chaos value: 0 - 100)
- `--seed 100` menetapkan nilai seed sembarang yang dapat digunakan untuk me-render atau memperbaiki gambar nanti

(pelajari lebih lanjut tentang parameter Midjourney di "Advanced Prompts" > "Parameters")

# Prompt Lanjutan

Prompt lanjutan di Midjourney menggunakan parameter dan teknik prompting khusus yang didukung oleh algoritma Midjourney.

## Multi-Prompt

Midjourney secara default menginterpretasikan prompt Anda secara holistik. Menggunakan tanda `::` memberitahu Midjourney untuk menginterpretasikan setiap bagian prompt secara terpisah.

Contoh:

```
/imagine prompt: astronaut and horse
```
![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b928daae-0193-481e-a548-586ae2e77187)

```
/imagine prompt: astronaut:: and horse
```

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/dfde1432-bdc8-40b5-94dc-e3f0a0d19db2)

## Prompt Gambar

Dengan mengunggah gambar ke Discord dan menggunakan URL-nya dalam prompt, Anda dapat menginstruksikan Midjourney untuk menggunakan gambar tersebut untuk mempengaruhi konten, gaya, dan komposisi hasil Anda. Contoh: Astronot (Sumber: Wikipedia)

```
/imagine prompt: [URL gambar], impressionist painting
```

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/305d7459-f5ca-4b55-83e3-4d9ed5e03961)

## Parameter (v4)

Parameter berikut didukung oleh model terbaru Midjourney (v4).

### Rasio Aspek:

`--ar [rasio]` mengubah rasio default (1:1) menjadi rasio baru (saat ini rasio maksimal yang didukung adalah 2:1)

Contoh: `astronaut on a horse --ar 16:9` dan `astronaut on a horse --ar 1:2`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/43db2c92-4108-4a10-8faf-f9d54a640be3)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/93ac98a4-e016-40a7-991c-9f200f838a7d)


### Chaos:

`--c [nilai]` menetapkan chaos value yang menentukan seberapa banyak Midjourney bervariasi pada prompt; semakin tinggi chaos value, semakin tidak biasa dan tidak terduga hasil dan komposisi (rentang chaos value: 0 - 100)

Contoh: `astronaut on a horse --c20` dan `astronaut on a horse --c 80`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/17f4b1cd-d09b-40e8-adf1-5813188a7231)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/51d0a306-958a-4999-8c7a-849283ca1ce0)

### Kualitas:

`--q [nilai]` menentukan seberapa banyak waktu yang akan dihabiskan untuk menghasilkan gambar, sehingga meningkatkan kualitas. Pengaturan default adalah "1". Nilai yang lebih tinggi menggunakan lebih banyak kinerja GPU Anda (Midjourney menerima nilai ".25", ".5", "1", dan "2")

Contoh: `astronaut on a horse --q .5` dan `astronaut on a horse --q 2`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/4dfe5bfd-d198-4086-b8a0-89089800c9dc)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/9c1555e6-5815-4084-a4b7-54a29b401536)

### Seed:

`--seed [nilai]` menetapkan jumlah seed yang mendefinisikan titik awal (noise field) untuk gambar yang dihasilkan. Seed untuk setiap gambar dihasilkan secara acak ketika tidak ditentukan dengan parameter seed. Menggunakan seed dan prompt yang sama akan menghasilkan gambar yang serupa.

Contoh: `astronaut on a horse --seed 123`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/eb4ae64c-0726-49b2-a3ee-e5369d0fe724)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/69719d94-9ff2-4a48-bd9d-5afa5a20dbbe)

### Stylize:

`--stylize [nilai]` atau `--s [nilai]` mempengaruhi seberapa kuat Midjourney menerapkan algoritma artistiknya. Nilai rendah menghasilkan gambar yang sangat cocok dengan prompt, nilai tinggi menciptakan gambar yang sangat artistik yang kurang terhubung dengan prompt. Defaultnya adalah 100, rentang nilai adalah 0 - 1000. (Catatan: Anda dapat menggunakan perintah `/settings` untuk mengubah nilai default stylize dari "🖌️ Style Med" (= `--s 100`) menjadi "🖌️ Style Low" (= `--s 50`), "🖌️ Style High" (= `--s 250`) atau "🖌️ Style Very High" (= `--s 750`))

Contoh: `astronaut on a horse --s 50` dan `astronaut on a horse --s 900`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/400b4a91-925e-410f-8457-7e6fb6e68414)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/499d48db-cda9-4aa1-b00a-a4cec51755a8)

### Versi:

`--v [nomor versi]` atau `version [nomor versi]` memungkinkan Anda mengakses model Midjourney sebelumnya (1-3)

Contoh: `--v 1`, `--v 2`, dan `--v 3`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/1e55bb98-7dc3-40d8-9458-f1960bd01f33)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/94204304-3519-4221-9c65-8f9d499af371)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/60ee300e-e884-4618-a1cc-bd884ac51da2)

## Parameter (model sebelumnya)

### Same Seed

`--sameseed`: ketika parameter `--seed` menghasilkan noise field tunggal yang diterapkan pada semua gambar dalam grid awal, parameter sameseed menerapkan noise awal yang sama pada semua gambar dalam grid awal sehingga akan menghasilkan gambar yang sangat serupa.

Contoh: `astronaut on a horse --sameseed --v 3`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b3a03c4a-afb0-4209-b775-e4db132c6efe)

### Tile

`--tile` menghasilkan gambar yang dapat digunakan seperti ubin berulang untuk membuat pola yang mulus untuk kain, wallpaper, dan tekstur (hanya berfungsi dengan model 1-3)

Contoh: `astronaut on a horse --tile --v 3`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/4d6595c7-6286-4e59-8c29-d9512e569d6c)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/401d503a-0414-45ec-95f5-63f2e51bef89)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/14e8fa5a-e77a-4e85-b85a-6ab9f443c494)

### Video

`--video` membuat film pendek dari grid gambar yang dihasilkan. Dengan emoji ✉️ memungkinkan Bot Midjourney mengirimkan DM dengan tautan ke video.

Contoh: `astronaut on a horse --video --v 3`

https://i.mj.run/27c89699-d96d-4834-b6fa-b022a453eb28/video.mp4
## Tautan

[Dokumentasi Midjourney resmi](https://docs.midjourney.com/)
