---
sidebar_position: 10
locale: en-us
style: chicago
---

# 🟢 Plus sur les invites


Comme nous l'avons vu dans les pages précédentes, les invites peuvent avoir des formats et des complexités variées. Elles peuvent inclure du contexte, des instructions, plusieurs questions-exemples de réponses, et même d'autres invites (quoi !?).


Voici un exemple d'une invite qui inclut du contexte, des instructions et plusieurs exemples :


```text
Twitter est une plateforme de médias sociaux où les utilisateurs peuvent publier de courtes messages appelées "tweets".
Les tweets peuvent être positifs ou négatifs, et nous aimerions être en mesure de classifier les tweets comme 
positifs ou négatifs. Voici quelques exemples de tweets positifs et négatifs. Assurez-vous de classifier correctement 
le dernier tweet.

Q: Tweet: "Quelle belle journée!"
Ce tweet est-il positif ou négatif?

R: positif

Q: Tweet: "Je déteste cette classe."
Ce tweet est-il positif ou négatif?

R: négatif

Q: Tweet: "J'adore les poches des jeans."

R:
```

En ajoutant du contexte/des exemples supplémentaires, nous pouvons souvent améliorer les performances des
IA sur différentes tâches. Le prochain chapitre couvre des techniques d'invites légèrement plus avancées.


## Notes

Dans les prochains chapitres, vous pouvez voir les mots IA, modèle et LLM 
utilisés de manière interchangeable. Consultez la [référence de vocabulaire](https://learnprompting.org/docs/vocabulary) pour plus d'informations.


Les invites à l'intérieur d'invites, ou les invites auto-augmentées (@kojima2022large), seront 
abordées dans les prochaines sections.