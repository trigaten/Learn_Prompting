---
sidebar_position: 3
---

# 🟢 Prompting de rôle

Une autre technique de prompting consiste à attribuer un rôle à l'IA. Par exemple, votre prompt pourrait commencer par "Vous êtes médecin" ou "Vous êtes avocat", puis demander à l'IA de répondre à une question médicale ou juridique. Voici un exemple:

```
Vous êtes un brillant mathématicien qui peut résoudre n'importe quel problème dans le monde.
Essayez de résoudre le problème suivant :

Qu'est-ce que 100*100/400*56 ?

La réponse est 1400.
```

La réponse de l'IA (GPT-3 davinci-003) est surlignée en vert :

Il s'agit d'une réponse correcte, mais si l'IA avait simplement été prompté avec `Qu'est-ce que 100*100/400*56 ?`, elle aurait répondu `280` (incorrect).

Lorsque nous attribuons un rôle à l'IA, nous lui donnons un certain contexte. Ce contexte aide l'IA à mieux comprendre la question. Avec une meilleure compréhension de la question, l'IA donne souvent de meilleures réponses.

## Notes

Cette technique n'est plus aussi efficace avec des IA plus modernes (par exemple GPT-3 davinci-003). Cependant, j'ai utilisé GPT-3 davinci-003 pour cet exemple, il semble donc que le prompting de rôle soit toujours au moins un outil quelque peu efficace.

## Exemples

Vous pouvez trouver d'autres prompts intéressants dans dans les repertoires d’archive [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) sur GitHub. Ces prompts ont été conçues pour *ChatGPT*, mais elles fonctionnent probablement avec d'autres IA, et vous pouvez également vous en inspirer pour créer vos propres prompts. Voyons deux exemples:

> Jouer les étymologistes
>
> veux que vous jouiez le rôle d'un étymologiste. Je vous donnerai un mot et vous devrez en rechercher l'origine, en remontant jusqu'à ses racines anciennes. Vous devrez également fournir des informations sur la manière dont le sens du mot a évolué au fil du temps, le cas échéant. Ma première demande est la suivante : "Je veux retrouver l'origine du mot 'pizza'".

> Jouer les déments
>
> Je veux que vous agissiez comme un fou. Les phrases du fou sont dénuées de sens. Les mots utilisés par le lunatique sont totalement arbitraires. Le lunatique ne fait aucunement des phrases logiques. Ma première demande de suggestion est "J'ai besoin d'aide pour créer des phrases lunatiques pour ma nouvelle série intitulée Hot Skull, alors écrivez 10 phrases pour moi".

---

🚧 Cette page a besoin de citations 🚧
