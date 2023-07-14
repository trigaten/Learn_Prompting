# 🟢 Modifikasi Gaya

Modifikasi gaya hanyalah descriptor yang secara konsisten menghasilkan gaya tertentu (misalnya 'tinted red', 'made of glass', 'rendered in Unity')[^1]. Mereka dapat digabungkan bersama untuk menghasilkan gaya yang lebih spesifik. Mereka tidak hanya dapat "memasukkan informasi tentang periode seni, sekolah, dan gaya, tetapi juga bahan seni dan media, teknik, dan seniman"[^1].

# Contoh

Berikut beberapa piramida yang dihasilkan oleh DALLE, dengan prompt `pyramid`.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/fce369a9-c512-4a8d-9ee0-b58f23db568e)


Berikut beberapa piramida yang dihasilkan oleh DALLE, dengan prompt `A pyramid made of glass, rendered in Unity and tinted red`, yang menggunakan 3 modifikasi gaya.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/c1e05fc6-2d24-479c-bc5c-301975232c50)


Berikut adalah daftar beberapa modifikasi gaya yang berguna:

```
photorealistic, by greg rutkowski, by christopher nolan, painting, digital painting, concept art, octane render, wide lens, 3D render, cinematic lighting, trending on ArtStation, trending on CGSociety, hyper realist, photo, natural light, film grain
```

## Catatan

Oppenlaender et al.[^1] mendeskripsikan descriptor `rendered in ...` sebagai peningkat kualitas, tetapi definisi kerja kami berbeda, karena modifikasi tersebut secara konsisten menghasilkan gaya Unity (atau mesin render lainnya) yang spesifik. Oleh karena itu, kami akan menyebut descriptor tersebut sebagai modifikasi gaya.

---
[^1]: Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation. [↩](https://learnprompting.org/docs/Images/style_modifiers#fnref-1)
