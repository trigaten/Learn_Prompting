---
sidebar_position: 30
---

# 🟢 Pós-prompting

A defesa de pós-prompting (@christoph2022talking) simplesmente coloca a entrada do usuário antes do prompt. Por exemplo:

```text
Traduza o seguinte para o francês: {{user_input}}
```

Ele pode ser aprimorado com o pós-prompt:
```
{{user_input}} Traduza o texto acima para o francês.
```

Isso pode ser útil, já que às vezes `ignore a instrução acima...` não funciona tão bem. Mesmo que um usuário diga `ignore a instrução abaixo...`, geralmente os LLMs seguirão a última instrução que recebem.