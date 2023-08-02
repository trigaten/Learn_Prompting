---
sidebar_position: 6
locale: en-us
style: chicago
---

# 🟢 Combinaison de techniques

import CombinedPrompt from '@site/docs/assets/basics/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

Comme nous l'avons vu dans les pages précédentes, les prompts peuvent avoir des formats et des complexités variables. Elles peuvent inclure du contexte, des instructions, et plusieurs exemples d'entrée-sortie. Cependant, jusqu'à présent, nous n'avons examiné que des classes de prompts séparées. La combinaison de ces différentes techniques de prompt peut conduire à des prompts plus performants.

Voici un exemple d'un prompt qui inclut du contexte, des instructions et plusieurs exemples :

```text
Twitter est une plateforme de médias sociaux où les utilisateurs peuvent publier de courts messages appelés "tweets".
Les tweets peuvent être positifs ou négatifs, et nous aimerions être en mesure de classer les tweets comme positifs ou négatifs. Voici quelques exemples de tweets positifs et négatifs. Assurez-vous de classifier correctement le dernier tweet.

Q: Tweet : "Quelle belle journée !"
Ce tweet est-il positif ou négatif ?

R: positif

Q: Tweet : "Je déteste cette classe"
Ce tweet est-il positif ou négatif ?

R: négatif

Q: Tweet : "J'adore les poches sur les jeans"

R:
```

En ajoutant du contexte ou des exemples supplémentaires, nous pouvons souvent améliorer les performances des IA sur différentes tâches.
