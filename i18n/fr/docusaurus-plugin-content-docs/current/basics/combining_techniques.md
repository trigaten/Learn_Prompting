---
sidebar_position: 6
locale: en-us
style: chicago
---

# 🟢 Combiner plusieurs techniques

import CombinedPrompt from '@site/docs/assets/assets/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

Comme nous l'avons vu dans les pages précédentes, les prompts peuvent avoir différents formats et être plus ou moins complexes.
Elles peuvent inclure un contexte, des instructions et de multiples exemples de saisie et de sortie. 
Toutefois, jusqu'à présent, nous n'avons examiné que des catégories individuelles de prompts. 
La combinaison de ces différentes techniques de prompting peut conduire à des prompts plus performantes. 

Voici un exemple de prompt qui inclut un contexte, des instructions et plusieurs exemples :

```text
Twitter est une plateforme de médias sociaux sur laquelle les utilisateurs peuvent publier de courts messages appelés "tweets".
Les tweets peuvent être positifs ou négatifs, et nous aimerions pouvoir classer les tweets comme étant
positifs ou négatifs. Voici quelques exemples de tweets positifs et négatifs. Assurez-vous de classer correctement le dernier tweet.

Q: Tweet: "Quelle belle journée !"
Ce tweet est-il positif ou négatif ?

A: positif

Q: Tweet: "Je déteste cette classe"
Ce tweet est-il positif ou négatif ?

A: negatif

Q: Tweet: "J'aime les poches sur les jeans"
Ce tweet est-il positif ou négatif ?

A:
```

En ajoutant des contextes/exemples supplémentaires, nous pouvons souvent améliorer les performances des IA
sur différentes tâches. 
