---
sidebar_position: 1
---

# 🟢 Introduction

Ce chapitre couvre comment rendre les complétions plus fiables, ainsi que la manière d'implémenter des contrôles pour assurer la fiabilité des résultats.

Dans une certaine mesure, la plupart des techniques précédemment abordées ont pour but d'améliorer la précision des complétions, et donc leur fiabilité, en particulier l'auto-consistance(@wang2022selfconsistency). Cependant, il existe un certain nombre d'autres techniques qui peuvent être utilisées pour améliorer la fiabilité, au-delà des stratégies de prompting de base.

Les %%LLMs|LLM%% se sont révélés être plus fiables que ce que nous pourrions attendre en interprétant ce qu'un prompt *essaie* de dire lorsqu'ils répondent à des prompts mal orthographiés, mal formulés ou même activement trompeurs(@webson2023itscomplicated). Malgré cette capacité, ils présentent encore divers problèmes, y compris des hallucinations(@ye2022unreliability), des explications erronées avec les méthodes de %%CoT|CoT prompting%%(@ye2022unreliability), et de multiples biais, y compris le biais de l'étiquette majoritaire, le biais de récence et le biais de jeton commun(@zhao2021calibrate). De plus, le CoT en zero-shot peut être particulièrement biaisé lorsqu'il traite de sujets sensibles(@shaikh2022second).

Parmi les solutions courantes à certains de ces problèmes figurent les calibrateurs pour éliminer les biais _a priori_, et les vérificateurs pour évaluer les complétions, ainsi que la promotion de la diversité dans les complétions.
