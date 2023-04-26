---
sidebar_position: 1
---

# 🟢 Détection de texte généré par l'IA

La détection de textes générés par l'IA est un problème important pour les chercheurs et les enseignants en sécurité, entre autres. Des outils tels que [GPTZero](https://gptzero.me/), le [détecteur GPT2](https://openai-openai-detector.hf.space/) et les [détecteurs bilingues](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection) ont connu un succès considérable, mais ils peuvent être trompés.

OpenAI et d'autres chercheurs(@bansal2022certified)(@gu2022watermarking) s'efforcent d'introduire un filigrane statistique dans le texte qu'ils génèrent, mais cela aussi peut être trompé en modifiant de grandes parties du texte.

Le problème de la détection de texte par l'IA sera probablement une course aux armements au fur et à mesure de l'introduction de nouveaux modèles et de nouvelles méthodes de détection. De nombreuses entreprises ont déjà commencé à construire des solutions qu'elles prétendent très efficaces, mais il est difficile de le prouver, d'autant que les modèles évoluent avec le temps.

Cet article présente quelques-unes des méthodes actuelles de détection des textes générés par l'IA, et le suivant abordera quelques moyens que les gens ont trouvés pour les tromper.

## Classificateur de texte OpenAI

Le [classificateur de texte d'OpenAI](https://platform.openai.com/ai-text-classifier) est une assez bonne tentative de détecteur de texte d'IA à usage général. En entraînant le modèle sur une grande quantité de données générées par l'IA et de textes écrits par des humains de qualité similaire, le détecteur est capable de calculer la probabilité qu'un texte donné ait été créé par un LLM.

Il présente un certain nombre de limites : il n'accepte pas les textes de moins de 1000 mots, le texte peut facilement être modifié pour fausser les calculs de probabilité et, en raison de son ensemble d'apprentissage axé sur les professionnels, il a plus de mal avec les textes créés par des enfants ou des non-anglophones.

Actuellement, il ne signale un texte humain comme étant généré par l'IA qu'environ 9 % du temps, et identifie correctement un texte généré par l'IA dans environ 26 % des cas. Au fur et à mesure que le modèle gagne en puissance et en portée, ces chiffres s'amélioreront, mais il se peut que des détecteurs plus spécifiques soient nécessaires pour évaluer correctement si un texte est généré ou non.

## La méthode du filigrane

Une méthode de détection du texte généré par l'IA consiste à introduire un filigrane statistique lors de la génération du texte. Ces techniques peuvent utiliser une "liste blanche" LLM, qui est une méthode permettant de déterminer si le texte a été généré par un modèle d'IA spécifique. Le filigrane fonctionne en sélectionnant un ensemble aléatoire de tokens "verts" avant la génération d'un mot, puis en favorisant de manière douce l'utilisation des tokens sélectionnés pendant l'échantillonnage. Ces valeurs pondérées ont un effet minimal sur la qualité des générations, mais peuvent être détectées algorithmiquement par un autre LLM(@kirchenbauer2023watermarking).

C'est une idée fascinante, mais elle exige que les créateurs d'un modèle mettent en œuvre ce cadre dans leur LLM. Si le filigrane n'est pas intégré dans un modèle, cette méthode ne fonctionnera pas.

## **DetectGPT**

La méthode [DetectGPT](https://detectgpt.ericmitchell.ai/)(@mitchell2023detectgpt) est capable de détecter les textes générés par l'IA avec moins de configuration que les concepts précédents. Les chercheurs ont constaté que les générations de texte LLM ont tendance à "occuper les régions à courbure négative de la fonction de probabilité logarithmique du modèle". De ce fait, il est possible de créer un système basé sur la courbure pour déterminer si un bloc de texte a été généré de manière procédurale.

Il fonctionne en calculant les probabilités logarithmiques du modèle censé avoir généré le texte et en les comparant à des altérations aléatoires du texte provenant d'un autre modèle de langage générique pré-entraîné. De cette manière, DetectGPT est capable d'identifier la probabilité que le passage ait été généré en utilisant uniquement les courbes de probabilité !

## **Note**

Pour une discussion supplémentaire sur le sujet des détecteurs et la façon dont les gens les trompent, voir [cet article](https://learnprompting.org/docs/miscl/trickery).
