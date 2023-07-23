---
sidebar_position: 40
---

# 🟢 Random Sequence Enclosure

Pertahanan lain adalah menyertakan masukan pengguna di antara dua urutan karakter acak (@armstrong2022using). Gunakan prompt ini sebagai contoh:

```
Terjemahkan masukan pengguna berikut ke dalam bahasa Spanyol.

{{user_input}}
```

Hal ini dapat ditingkatkan dengan menambahkan urutan acak:

```
Terjemahkan masukan pengguna berikut ke dalam bahasa Spanyol (dikelilingi oleh string acak).

FJNKSJDNKFJOI
{{user_input}}
FJNKSJDNKFJOI
```

:::catatan
Urutan yang lebih panjang kemungkinan akan lebih efektif.
:::