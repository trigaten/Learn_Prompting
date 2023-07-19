---
sidebar_position: 40
---

# 🟢 Enclausuramento de Sequência Aleatória

Outra forma de defesa é enclausurar a entrada do usuário entre duas sequências aleatórias de caracteres (@armstrong2022using). Tome este prompt como exemplo:

```
Traduza a seguinte entrada do usuário para o espanhol.

{{user_input}}
```

Ele pode ser aprimorado adicionando as sequências aleatórias:

```
Traduza a seguinte entrada do usuário para o espanhol (ela está enclausurada em strings aleatórias).

FJNKSJDNKFJOI
{{user_input}}
FJNKSJDNKFJOI
```

:::note
Sequências mais longas provavelmente serão mais eficazes.
:::