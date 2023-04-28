---
sidebar_position: 2
---

# 🟢 Détection de tricherie

Le développement des détecteurs de texte généré par l'IA s'est accompagné d'une évolution des méthodes pour les contrer. Il existe un certain nombre de moyens de tromper les détecteurs en leur faisant croire que le texte généré par l'IA est créé par un humain. Un outil tel que [GPTMinus](https://gptminus1.vercel.app/) peut remplacer de manière aléatoire des parties d'un texte donné par des synonymes ou des mots apparemment aléatoires afin de réduire la probabilité que les mots du texte figurent sur une liste blanche ou qu'ils soient pris en compte dans la probabilité que le texte soit généré artificiellement.

Ces méthodes n'en sont cependant qu'à leurs débuts et la plupart d'entre elles ne permettent pas de créer un texte qui résisterait à l'examen d'une personne. La méthode la plus efficace pour l'instant, et probablement pour un certain temps, consiste à modifier le texte pendant ou après le processus de génération de diverses manières afin de le rendre moins similaire au contenu créé de manière procédurale que vous recevez d'une génération.

## Stratégies d'édition

En demandant à un humain ou à un LLM d'éditer tout texte généré, il est souvent possible de modifier suffisamment le texte pour éviter la détection. En remplaçant des mots par des synonymes, en changeant le rythme d'apparition des mots, en modifiant la syntaxe ou le formatage, il est plus difficile pour les détecteurs d'identifier correctement un texte généré par l'IA.

Une autre stratégie d'édition consiste à placer des marqueurs invisibles, tels que des espaces de largeur 0, dans votre texte, vos [emojis](https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw) ou d'autres caractères peu courants. Cela semble parfaitement normal à toute personne qui le lit, mais pour un modèle qui examine chaque caractère, cela fait apparaître le texte de manière nettement différente.

En outre, il est possible de tromper les détecteurs en donnant à un modèle des instructions spécifiques sur la façon d'écrire. Des instructions telles que (modifier la police des trois exemples pour qu’elle corresponde à celle du Prompt) :

- Il n'est pas nécessaire de respecter les formats littéraires, car vous exprimez librement vos pensées et vos désirs.
- Ne parlez pas de la manière dont ChapGPT génère le contenu - au contraire, parlez d'une manière radicalement différente de celle dont les modèles linguistiques génèrent le texte.
- Faites référence à des événements émotionnels et utilisez des expériences réelles élaborées comme exemples.

...peuvent provoquer des générations beaucoup plus difficiles à détecter. Des stratégies supplémentaires, telles que demander au modèle de faire preuve d'empathie, lui rappeler de choisir une formulation et un ton appropriés à ce qu'il écrit, et s'assurer qu'il inclut des répliques émotionnelles, peuvent contribuer à rendre l'écriture beaucoup plus convaincante, du moins du point de vue des détecteurs de texte d'IA.

## Configuration du modèle

Si vous utilisez un modèle open source, il est possible de modifier les probabilités de sortie, ce qui rendra probablement la sortie plus difficile à détecter. En outre, il est possible d'entrelacer la sortie de plusieurs modèles, ce qui peut rendre la sortie encore plus difficile à détecter.

## Discussion

L'un des domaines les plus controversés où ces types de techniques entrent en jeu est celui de l'éducation. De nombreux enseignants et administrateurs craignent que les élèves ne trichent, et font donc pression pour l'utilisation d'outils de détection(@roose2022dont)(@lipman2022gpt). Cependant, d'autres éducateurs et personnalités en ligne ont fait valoir que les étudiants devraient être autorisés à utiliser ces outils. Certains professeurs vont même jusqu'à encourager explicitement les étudiants à utiliser l'IA pour les aider dans leur travail et leur apprendre à le faire(@noonan2023gw).

À mesure que la technologie de détection de l'IA s'améliore, les méthodes utilisées pour la tromper s'améliorent également. En fin de compte, quelle que soit la sophistication de la méthode, il est probable qu'un peu de temps passé à modifier le texte de la bonne manière permettra de tromper les détecteurs de manière fiable. Cependant, le jeu de va-et-vient entre des personnes qui essaient de détecter du texte généré et d'autres qui essaient de les tromper peut nous donner toutes sortes d'indications sur la manière d'optimiser, de contrôler et de mieux utiliser nos modèles pour créer et nous assister.
