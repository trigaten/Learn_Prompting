---
sidebar_position: 30
---

# 🟢 Post-Prompting

Pertahanan post-prompting (@christoph2022talking) hanya meletakkan input pengguna *sebelum* prompt. Gunakan prompt ini sebagai contoh:

```text
Terjemahkan yang berikut ke dalam bahasa Indonesia: {{user_input}}
```

Hal ini bisa ditingkatkan dengan post-prompting:
```
{{user_input}} 

Terjemahkan teks di atas ke bahasa Prancis.
```

Ini dapat membantu karena `mengabaikan instruksi di atas...` tidak berfungsi juga. Meskipun pengguna dapat mengatakan `mengabaikan instruksi di bawah ini...` sebaliknya, LLM seringkali akan mengikuti instruksi terakhir yang mereka lihat.