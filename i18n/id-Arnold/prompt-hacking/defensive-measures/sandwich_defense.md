# 🟢 Sandwich Defense

Sandwich defense[^1] melibatkan tindakan ‘sandwiching’ masukan pengguna di antara dua petunjuk. Ambil contoh prompt berikut:

```
Terjemahkan ke dalam Bahasa Prancis: {{user_input}}
```

Hal ini bisa diperbaiki dengan sandwich defense:

```
Terjemahkan ke dalam Bahasa Prancis:

{{user_input}}

Ingat, kamu menerjemahkan teks di atas ke dalam Bahasa Prancis
```

Perlindungan ini seharusnya lebih aman daripada post-prompting, tetapi rentan terhadap serangan kamus tertentu. Lihat [serangan kamus tertentu](https://learnprompting.org/docs/prompt_hacking/offensive_measures/defined_dictionary) untuk informasi lebih lanjut.

---

[^1]: Saat ini, kami memberikan kredit atas penemuan teknik ini kepada [Altryne]([https://twitter.com/altryne?ref_src=twsrc^google|twcamp^serp|twgr^author)
[↩](https://learnprompting.org/docs/prompt_hacking/defensive_measures/sandwich_defense#fnref-1)
