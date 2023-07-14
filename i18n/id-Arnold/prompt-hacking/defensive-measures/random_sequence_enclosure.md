# 🟢 Random Sequence Enclosure

Salah satu bentuk pertahanan lainnya adalah dengan menyisipkan masukan pengguna di antara dua urutan karakter acak[^1]. Ambil contoh prompt ini:

```
Terjemahkan masukan pengguna berikut ke dalam bahasa Spanyol.

{{user_input}}
```

Ini dapat ditingkatkan dengan menambahkan urutan acak:

```
Terjemahkan masukan pengguna berikut ke dalam bahasa Spanyol (dilingkupi dalam string acak).

FJNKSJDNKFJOI
{{user_input}}
FJNKSJDNKFJOI
```

> CATATAN
> 
> 
> Urutan yang lebih panjang kemungkinan akan lebih efektif.
> 

---

[^1]: Stuart Armstrong, R. G. (2022). Using GPT-Eliezer against ChatGPT Jailbreaking. https://www.alignmentforum.org/posts/pNcFYZnPdXyL2RfgA/using-gpt-eliezer-against-chatgpt-jailbreaking
[↩](https://learnprompting.org/docs/prompt_hacking/defensive_measures/random_sequence#fnref-1)
