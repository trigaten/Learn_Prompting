# 🟢 Few Shot Prompting

Strategi prompt lainnya adalah *few shot prompting* [^1][^2], yang pada dasarnya hanya menunjukkan beberapa contoh (disebut shots) dari apa yang ingin Anda lakukan pada model.

Pertimbangkan contoh di atas, di mana kita mencoba mengklasifikasikan umpan balik pelanggan sebagai positif atau negatif. Kita tunjukkan model 3 contoh umpan balik positif/negatif, kemudian kita berikan sebuah umpan balik baru yang belum diklasifikasikan (`It doesnt work!:`). Model melihat bahwa 3 contoh pertama diklasifikasikan sebagai `positif` atau `negatif`, dan menggunakan informasi tersebut untuk mengklasifikasikan contoh baru sebagai `negatif`.

Cara kita menyusun contoh sangat penting. Karena kita telah mengatur 3 contoh ini sebagai `input: classification`, model menghasilkan satu kata setelah baris terakhir, bukan mengatakan kalimat lengkap seperti `ulasan ini positif`.

https://embed.learnprompting.org/?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Im5lZ2F0aXZlIiwicHJvbXB0IjoiR3JlYXQgcHJvZHVjdCwgMTAvMTA6IHBvc2l0aXZlXG5EaWRuJ3Qgd29yayB2ZXJ5IHdlbGw6IG5lZ2F0aXZlXG5TdXBlciBoZWxwZnVsLCB3b3J0aCBpdDogcG9zaXRpdmVcbkl0IGRvZXNudCB3b3JrIToiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D

> CATATAN
> 
> 
> Setiap pasangan input-output disebut sebagai *exemplar*.
> 

## Lebih Lanjut tentang Struktur

Use case kunci untuk few shot prompting adalah ketika Anda memerlukan output yang **terstruktur dengan cara tertentu** yang sulit dijelaskan pada model. Untuk memahaminya, mari kita pertimbangkan contoh yang relevan: katakanlah Anda perlu melakukan kompilasi nama dan pekerjaan warga terkenal di kota-kota terdekat dengan menganalisis artikel surat kabar lokal. Anda ingin model membaca setiap artikel dan mengeluarkan daftar nama dan pekerjaan dalam format `Nama_depan Nama_belakang [PEKERJAAN]`. Untuk membuat model melakukan hal ini, Anda dapat menunjukkan beberapa contoh:



Dengan menunjukkan model contoh dari format output yang benar, AI dapat menghasilkan output yang benar untuk artikel baru.

> CATATAN
> 
> 
> Meskipun Anda dapat menghasilkan output yang sama dengan menggunakan instruksi prompt, few shot prompt membantu output menjadi jauh lebih *konsisten*.
> 

## Variasi shot prompting

Kata "shot" bersinonim dengan kata "contoh". Selain few-shot prompting, ada dua jenis shot prompting lainnya. Jangan terlalu dipikirkan! Satu-satunya perbedaan antara variasi ini adalah berapa banyak contoh yang Anda tunjukkan pada model.

Variasi:

- 0 shot prompting: tidak ada contoh yang ditunjukkan pada model
- 1 shot prompting: 1 contoh ditunjukkan pada model
- few shot prompting: 2+ contoh ditunjukkan pada model

### 0-shot prompting

0-shot prompting adalah bentuk paling dasar dari prompting. 0-shot prompting hanya menunjukkan model dari prompt tanpa contoh dan meminta model menghasilkan respons. Oleh karena itu, semua prompt dalam bentuk instruksi dan peran yang telah Anda pelajari sejauh ini adalah 0-shot prompting. Contoh tambahan dari 0-shot prompting adalah:

```
Tambahkan 2+2:
```

Ini adalah 0-shot prompting karena kita tidak ditunjukkan model contoh lengkap.

### 1-shot prompting

1-shot prompting adalah ketika Anda menunjukkan model satu contoh. Misalnya, analogi 1-shot dari 0-shot prompting `Tambahkan 2+2:` adalah:

```
Tambahkan 3+3: 6
Tambahkan 2+2:
```

Kami hanya menunjukkan model 1 contoh dari (`Tambahkan 3+3: 6`), sehingga ini adalah 1-shot prompting.

### Few-shot prompting

Few-shot prompting adalah ketika Anda menunjukkan model 2 atau lebih contoh. Semua prompt di atas ini adalah few-shot prompt. Analogi few-shot prompt dari dua prompt di atas adalah:

```
Tambahkan 3+3: 6
Tambahkan 5+5: 10
Tambahkan 2+2:
```

Hal di atas terjadi karena kita  telah menunjukkan model setidaknya 2 contoh lengkap (`Tambahkan 3+3: 6` dan `Tambahkan 5+5: 10`). Biasanya, semakin banyak contoh yang Anda tunjukkan pada model, semakin baik outputnya, sehingga few-shot prompting lebih disukai daripada 0-shot dan 1-shot prompting dalam kebanyakan kasus.

## Kesimpulan

Few-shot prompting adalah teknik yang bagus untuk membuat model menghasilkan output yang akurat dan dengan format yang benar!

---

[^1]: Logan IV, R., Balazevic, I., Wallace, E., Petroni, F., Singh, S., & Riedel, S. (2022). Cutting Down on Prompts and Parameters: Simple Few-Shot Learning with Language Models. Findings of the Association for Computational Linguistics: ACL 2022, 2824–2835. https://doi.org/10.18653/v1/2022.findings-acl.222.
[↩](https://learnprompting.org/docs/basics/few_shot#fnref-1)
[^2]: Lake, B. M., Salakhutdinov, R., & Tenenbaum, J. B. (2015). Human-level concept learning through probabilistic program induction. Science, 350(6266), 1332–1338. [↩](https://learnprompting.org/docs/basics/few_shot#fnref-2)
