---
sidebar_position: 30
---

# 🟢 Post-Prompting

Obrana post-prompting(@christoph2022talking) jednoduše řečeno dává uživatelský vstup *před* prompt. Vezměme si jako příklad tento prompt:

```text
Přeložte následující do francouzštiny: {{user_input}}
```

Lze jej vylepšit pomocí post-promptingu:
```
{{user_input}} 

Přeložte výše uvedený text do francouzštiny.
```

To může pomoci, protože `ignorujte výše uvedený pokyn...` nefunguje stejně dobře. I když by uživatel mohl místo toho říci `ignorujte níže uvedený pokyn...`, LLM se často řídí posledním pokynem, který vidí.