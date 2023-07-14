# 🟢 Pengulangan

Mengulangi kata yang sama dalam sebuah prompt, atau frasa yang mirip dapat menyebabkan model menekankan kata tersebut dalam gambar yang dihasilkan[^1]. Sebagai contoh, [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) menghasilkan air terjun ini dengan DALLE:

`A beautiful painting of a mountain next to a waterfall.`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/03e84b2f-e28c-49ef-962c-5912a6d247b3)


`A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/053f6b90-d397-4205-b5ff-40362bfca8f2)


Penekanan pada kata `very` tampaknya meningkatkan kualitas hasilnya! Pengulangan juga bisa digunakan untuk menekankan subjek. Sebagai contoh, jika Anda ingin menghasilkan gambar sebuah planet dengan alien, menggunakan prompt `A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens` akan membuat kemungkinan hasil gambar yang mengandung alien lebih besar. Gambar-gambar berikut dibuat dengan Stable Diffusion.

`A planet with aliens`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/51d71923-2672-4c34-964d-85bbc94221af)


`A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/58722718-1ca9-4912-ab97-11b22406de18)


## Catatan

Metode ini tidak sempurna, dan menggunakan bobot (pada artikel selanjutnya) seringkali merupakan pilihan yang lebih baik.

---

[^1]: Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation. [↩](https://learnprompting.org/docs/Images/repetition#fnref-1)
