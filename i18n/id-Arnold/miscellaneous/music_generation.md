# 🟢 Menghasilkan Music

Model yang digunakan untuk menghasilkan musik semakin populer, dan pada akhirnya akan memiliki dampak besar pada industri musik.

Model yang digunakan untuk menghasilkan musik dapat membuat progresi chord, melodi, atau lagu lengkap. Mereka dapat membangun dan menciptakan musik dalam genre tertentu dan mengkomposisi atau mengimprovisasi dalam gaya artis tertentu.

Namun, meskipun potensi besar dari model musik, saat ini sulit untuk menghasilkan model tersebut. Output yang dihasilkan seringkali tidak sepenuhnya dapat disesuaikan oleh model, tidak seperti model generation pada gambar atau teks.

## Riffusion

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/95171dbf-da63-4ade-a9e9-ed29cef84efc)

Riffusion[^1, versi yang disesuaikan dari Stable Diffusion, dapat dikendalikan dengan prompt untuk menghasilkan instrumen dan gaya semu, tetapi memiliki jumlah ketersediaan beats yang terbatas.

## Mubert

[Mubert](https://mubert.com/) tampaknya menginterpretasikan prompt melalui analisis sentimen yang menghubungkan gaya musik yang sesuai dengan prompt (mengontrol parameter musik secara detail melalui prompt tidak dapat dilakukan). Belum jelas seberapa banyak hasil generation yang dilakukan oleh AI.

## Lainnya

Terdapat upaya untuk menggunakan GPT-3 sebagai alat Text-2-Music dengan prompting sebenarnya untuk unsur musik pada "tingkat mikro" nada (bukan analogi prompt-style-analogies yang agak samar dari mubert & riffusion) (misalnya, `tulis nada untuk lagu rakyat yang hanya menggunakan A, B, C#, F#, dan G`). Namun, saat ini upaya-upaya tersebut terbatas pada instrumen tunggal.

Pendekatan lain meliputi rangkaian model yang [mengubah gambar apa pun menjadi suara yang mewakili itu](https://huggingface.co/spaces/fffiloni/img-to-music) dan prompting ChatGPT untuk menghasilkan kode untuk [perpustakaan Python yang membuat suara](https://twitter.com/teropa/status/1598713756074246145).

## Catatan

Music prompting belum dibangun dengan baik ... namun. MusicLM terlihat menjanjikan, tetapi belum tersedia untuk publik.

---

[^1]: Forsgren, S., & Martiros, H. (2022). Riffusion - Stable diffusion for real-time music generation. https://riffusion.com/about
[↩](https://learnprompting.org/docs/miscl/music#fnref-1)
