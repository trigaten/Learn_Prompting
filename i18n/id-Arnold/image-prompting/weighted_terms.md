# 🟢 Menggunakan Bobot

Beberapa model (Stable Diffusion, Midjourney, dll.) memungkinkan Anda memberikan bobot pada kata dalam prompt. Ini dapat digunakan untuk menekankan kata atau frasa tertentu dalam gambar yang dihasilkan. Ini juga dapat digunakan untuk mengurangi penekanan pada kata atau frasa tertentu dalam gambar yang dihasilkan. Mari kita pertimbangkan contoh sederhana:

# Contoh

Berikut adalah beberapa gunung yang dihasilkan oleh Stable Diffusion, dengan prompt `mountain`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/5389db46-8e06-4dff-9a9e-1920a2079cc6)


Namun, jika kita ingin gunung tanpa pohon, kita dapat menggunakan prompt `mountain | tree:-1`. Karena kami memberikan bobot negatif yang tinggi pada kata pohon, maka pohon tidak muncul dalam gambar yang dihasilkan.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/7f001e71-9e34-436f-8840-048148531c73)


Kata yang diberi bobot dapat digabungkan menjadi prompt yang lebih rumit, seperti `A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/e56f3c12-6c76-47b2-8c57-de1d5496f62c)


## Catatan

Baca lebih lanjut tentang pemberian bobot pada beberapa sumber daya di akhir bab ini.
