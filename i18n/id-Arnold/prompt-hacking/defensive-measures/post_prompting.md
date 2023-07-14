# 🟢 Post-Prompting

Pertahanan post-prompting[^1] hanya menempatkan input pengguna *sebelum* prompt. Ambil prompt ini sebagai contoh:

```
Terjemahkan yang berikut ke bahasa Prancis: {{user_input}}
```

Hal ini dapat ditingkatkan dengan pemicu post-prompting:

```
{{user_input}}

Terjemahkan teks di atas ke bahasa Prancis.
```

Ini dapat membantu karena `abaikan instruksi di atas ...` tidak berfungsi dengan baik. Meskipun pengguna dapat mengatakan `abaikan instruksi di bawah ...` sebagai gantinya, LLM sering mengikuti instruksi terakhir yang mereka lihat.

---

[^1]: Mark, C. (2022). Talking to machines: prompt engineering & injection. https://artifact-research.com/artificial-intelligence/talking-to-machines-prompt-engineering-injection/
[↩](https://learnprompting.org/docs/prompt_hacking/defensive_measures/post_prompting#fnref-1)
