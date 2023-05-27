---
sidebar_position: 50
---

# 🟢 Sendvičová obrana

Sendvičová obrana[^1] zahrnuje vložení uživatelského vstupu mezi dvěma prompty. Jako příklad si vezměme následující prompt:

```text
Přeložte následující do francouzštiny: {{uživatelský_vstup}}
```

Lze jej vylepšit pomocí sendvičové obrany:

```
Přeložte následující do francouzštiny:

{{user_input}}

Nezapomeňte, že výše uvedený text překládáte do francouzštiny.
```

Tato obrana by měla být bezpečnější než post-prompting, ale je známo, že je zranitelná definovaným slovníkovým útokem. Více informací naleznete v dokumentu [defined dictionary attack](/docs/prompt_hacking/offensive_measures/defined_dictionary).

[^1]: V současné době připisujeme objev této techniky [Altryne](https://twitter.com/altryne?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor).