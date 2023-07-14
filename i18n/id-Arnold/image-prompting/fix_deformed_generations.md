# 🟢 Memperbaiki Hasil yang Cacat

Hasil yang cacat, terutama pada bagian tubuh manusia (misalnya tangan, kaki), adalah masalah umum pada banyak model. Hal ini dapat diatasi sebagian dengan prompt negatif yang baik.[^1] Contoh berikut diadaptasi dari [posting Reddit ini](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/).

## Contoh

Dengan menggunakan Stable Diffusion v1.5 dan prompt berikut, kami menghasilkan gambar yang bagus dari Brad Pitt, kecuali untuk tangannya tentu saja!

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/6bf63598-dac7-48d7-a415-c07f03534242)


Menggunakan prompt negatif yang kuat, kita dapat menghasilkan tangan yang lebih meyakinkan.

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6 | disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5`

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b5f6fac9-c2df-4a5d-9bc2-b471793c69ef)


Menggunakan prompt negatif serupa dapat membantu dengan bagian tubuh lainnya juga. Sayangnya, teknik ini tidak konsisten, sehingga Anda mungkin perlu mencoba beberapa percobaan sebelum mendapatkan hasil yang baik. Di masa depan, jenis prompting seperti ini seharusnya tidak diperlukan karena model akan meningkat. Namun, saat ini ini adalah teknik yang sangat berguna.

# Catatan

Model yang lebih baik seperti [Protogen](https://civitai.com/models/3666/protogen-x34-official-release) seringkali lebih baik dengan tangan, kaki, dan sebagainya.

---

[^1]: Blake. (2022). With the right prompt, Stable Diffusion 2.0 can do hands. https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/ [↩]
