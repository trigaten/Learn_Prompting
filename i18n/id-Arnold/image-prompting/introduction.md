# 🟢 Pendahuluan

Menemukan prompt terbaik untuk membuat gambar yang sempurna adalah tantangan yang khusus. Penelitian tentang metode untuk melakukannya belum sepenuhnya dikembangkan seperti prompt teks. Ini mungkin disebabkan oleh tantangan yang melekat dalam membuat objek yang pada dasarnya subjektif dan seringkali tidak memiliki metrik akurasi yang baik. Namun, jangan khawatir, komunitas prompt gambar[^1] telah membuat penemuan hebat tentang cara memicu berbagai model gambar [^2][^3].

Panduan ini mencakup teknik prompting gambar dasar, dan kami sangat mendorong Anda untuk melihat sumber daya yang besar di akhir bab. Selain itu, kami memberikan contoh proses prompting gambar end-to-end di bawah ini.

## Contoh

Di sini saya akan menjelaskan contoh bagaimana saya membuat gambar untuk halaman depan dari kursus ini. Saya telah bereksperimen dengan gaya low poly untuk proyek deep reinforcement learning neural radiance field. Saya menyukai gaya low poly dan ingin menggunakannya untuk gambar kursus ini.

Saya ingin menggambar astronot, roket, dan komputer untuk gambar di halaman depan.

Saya melakukan banyak penelitian tentang cara membuat gambar low poly, di [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) dan situs lain, tetapi tidak menemukan sesuatu yang sangat membantu.

Saya memutuskan untuk memulai dengan DALLE dan prompt `Low poly white and blue rocket shooting to the moon in front of a sparse green meadow` dan lihatlah apa yang terjadi.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/46c7f3f9-7d1b-48ca-b055-710512e0ebf5)

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/0fdb05bb-d1f1-4032-bf68-b873affa4af0)

Saya pikir hasilnya cukup bagus untuk percobaan pertama; saya khususnya menyukai roket di kiri bawah.

Selanjutnya, saya ingin komputer dalam gaya yang sama: `Low poly white and blue computer sitting in a sparse green meadow`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/755409f6-075f-4cf3-a21b-343682402e95)

Akhirnya, saya membutuhkan astronot! `Low poly white and blue astronaut sitting in a sparse green meadow with low poly mountains in the background` terlihat berhasil.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/0fb386a3-d69d-4ee0-b82c-ff05fcdd70bc)


Saya pikir yang kedua cukup bagus.

Sekarang saya memiliki astronot, roket, dan komputer. Saya senang dengan mereka, jadi saya menempatkannya di halaman depan. Setelah beberapa hari dan masukan dari teman-teman saya, saya menyadari bahwa gaya itu tidak konsisten 😔.

Saya melakukan lebih banyak penelitian di [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) dan menemukan orang-orang yang menggunakan kata isometrik. Saya memutuskan untuk mencobanya, menggunakan Stable Diffusion daripada DALLE. Saya juga menyadari bahwa saya perlu menambahkan lebih banyak modifier / pengubah terhadap prompt saya untuk membatasi gaya. Saya mencoba prompt ini: `A low poly world, with an astronaut in white suit and blue visor sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/fb5b3a87-2cdd-4bab-ad8c-a817173f3047)

Ini tidak bagus, jadi saya memutuskan untuk memulai dengan roket terlebih dahulu.

`A low poly world, with a white and blue rocket blasting off from a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/63ce1395-c7ac-4320-b7b5-e582e103031a)

Ini tidak terlalu bagus, tetapi setelah beberapa kali iterasi, saya akhirnya mendapatkan

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/52f17712-3a12-49e8-86be-f11734a83f6e)

Sekarang saya membutuhkan laptop yang lebih baik.

`A low poly world, with a white and blue laptop sitting in sparse green meadow with low poly mountains in the background. The screen is completely blue. Highly detailed, isometric, 4K`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/0ac706c0-a67d-4939-9cc0-0eafeac02773)


Saya mendapatkan hasil yang tidak konsisten; saya suka yang di kanan bawah, tetapi saya memutuskan untuk membuatnya ke arah yang berbeda.

`A low poly world, with a glowing white and blue gemstone sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/c27972e0-0310-417a-a601-9017caab4b7d)


Hasilnya belum cukup tepat. Mari kita mencoba sesuatu yang ajaib dan bersinar.

`A low poly world, with a glowing white and blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/9f351cc5-cffc-41fd-b416-9148937e9aaa)

Saya suka ini, tetapi ingin batu di tengah layar.

`A low poly world, with a glowing blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/9926ca08-4ca9-4097-b3c4-ee901aeac9d7)

Di sekitar sini, saya menggunakan kemampuan SD untuk memiliki gambar sebelumnya memberikan pengaruh pada gambar masa depan. Dan dengan demikian saya memutuskan:

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/6c44b4d1-8636-4361-863d-4fbe2c681384)


Akhirnya, saya beralih ke astronot.

`A low poly world, with an astronaut in white suite and blue visor is sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/1c6c5ccb-9928-4854-b541-4bb2fbd5c92e)


Pada saat ini, saya sudah cukup puas dengan konsistensi gaya antara tiga gambar saya untuk menggunakannya di situs web. Hal utama bagi saya adalah bahwa ini adalah proses yang sangat iteratif dan memerlukan banyak penelitian, dan saya harus memodifikasi harapan dan ide saya saat saya bereksperimen dengan prompt dan model yang berbeda.

---

[^1]: Parsons, G. (2022). The DALLE 2 Prompt Book. https://dallery.gallery/the-dalle-2-prompt-book/
[↩](https://learnprompting.org/docs/Images/intro#fnref-1)
[^2]: Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2021). High-Resolution Image Synthesis with Latent Diffusion Models. [↩](https://learnprompting.org/docs/Images/intro#fnref-2)
[^3]: Ramesh, A., Dhariwal, P., Nichol, A., Chu, C., & Chen, M. (2022). Hierarchical Text-Conditional Image Generation with CLIP Latents. [↩](https://learnprompting.org/docs/Images/intro#fnref-3)
