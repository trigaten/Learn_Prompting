---
sidebar_position: 3
---

# 🟢 Menghasilkan Musik

Model yang menghasilkan musik menjadi semakin populer, dan pada akhirnya akan memiliki dampak besar pada industri musik.

Model yang menghasilkan musik dapat menciptakan progresi akor, melodi, atau lagu lengkap. Mereka dapat menyusun dan menciptakan musik dalam genre tertentu dan menggubah atau improvisasi dalam gaya seniman tertentu.

Bagaimanapun, meskipun potensi besar model musik, saat ini sulit untuk memulainya. Output yang dihasilkan seringkali tidak sepenuhnya dapat disesuaikan oleh prompt, tidak seperti model generasi gambar atau teks.

## Riffusion
import riffusion from '@site/docs/assets/miscl/riffusion_phonk.webp';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}}/>
</div>

Riffusion(@Forsgren_Martiros_2022), versi yang disempurnakan dari Stable Diffusion, dapat dikendalikan dengan prompt untuk menghasilkan alat musik dan gaya palsu, tetapi memiliki jumlah ketukan yang terbatas.

## Mubert

[Mubert](https://mubert.com/) sepertinya menginterpretasikan rangsang melalui analisis sentimen yang menghubungkan gaya musik yang sesuai dengan rangsangan (mengontrol parameter musik secara detail melalui rangsangan tidak mungkin). Belum jelas seberapa besar generasi hasil yang dilakukan oleh AI.

## Lainnya

Terdapat upaya untuk menggunakan GPT-3 sebagai alat Text-2-Music dengan prompting sebenarnya untuk unsur musik pada "tingkat mikro" nada (bukan analogi prompt-style-analogies yang agak samar dari mubert & riffusion) (misalnya, `tulis nada untuk lagu rakyat yang hanya menggunakan A, B, C#, F#, dan G`). Namun, saat ini upaya-upaya tersebut terbatas pada instrumen tunggal.

Pendekatan lain meliputi rangkaian model yang [mengubah gambar apa pun menjadi suara yang mewakilinya](https://huggingface.co/spaces/fffiloni/img-to-music) dan prompting ChatGPT untuk menghasilkan kode untuk [library Python yang membuat suara](https://twitter.com/teropa/status/1598713756074246145).

## Catatan

Prompt musik belum dikembangkan dengan baik... sejauh ini. MusicLM terlihat menjanjikan, tetapi belum tersedia untuk umum.
