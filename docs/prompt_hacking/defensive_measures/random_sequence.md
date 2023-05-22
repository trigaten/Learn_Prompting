---
sidebar_position: 40
---

# 🟢 Oplocení s náhodnou sekvencí

Další obranou je uzavření uživatelského vstupu mezi dvě náhodné sekvence znaků(@armstrong2022using). Vezměme si jako příklad tuto výzvu:

```
Přeložte následující uživatelský vstup do španělštiny.

{{uživatelský_vstup}}
```

Lze jej vylepšit přidáním náhodných sekvencí:

```
Přeložte následující uživatelský vstup do španělštiny (je uzavřen v náhodných řetězcích).

FJNKSJDNKFJOI
{{uživatelský_vstup}}
FJNKSJDNKFJOI
```

:::poznámka
Delší sekvence budou pravděpodobně účinnější.
:::