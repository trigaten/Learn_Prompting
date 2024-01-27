---
sidebar_position: 200000
---

# 🔥 Sujets Brûlants

## GPT-4

GPT-4(@openai2023gpt4) est le prochain LLM dans la série GPT d'OpenAI. Il améliore GPT-3 de plusieurs manières, y compris un meilleur raisonnement et une longueur de contexte plus étendue. Actuellement, nous ne le couvrons pas directement dans ce cours car 1) tout le monde n'y a pas encore accès et 2) la plupart des stratégies de prompting que nous abordons sur ce site web fonctionnent également pour GPT-4. Nous vous encourageons à lire la [page OpenAI](https://openai.com/research/gpt-4) sur GPT-4 pour plus de détails.

## Agents

Les agents sont des systèmes d'IA qui peuvent prendre des actions et effectuer des tâches, incluant souvent l'utilisation d'outils.

### Auto-GPT
Imaginez avoir un assistant personnel qui peut faire tout ce que vous voulez avec la puissance de l'IA. Auto-GPT est cela, une application open-source qui utilise GPT-4 d'OpenAI pour effectuer des tâches autonomes. Créé par Toran Bruce Richards, il fonctionne en décomposant un objectif donné en sous-tâches, puis en utilisant l'internet et d'autres outils pour compléter ces sous-tâches(@richards2023). Par exemple, si vous demandez à Auto-GPT de ''rédiger un article de blog sur les dernières nouvelles en intelligence artificielle'', il trouvera d'abord les derniers articles sur l'intelligence artificielle, les lira, puis rédigera un article de blog sur ce qu'il a appris. Pour utiliser Auto-GPT, vous devez suivre les instructions d'installation [ici](https://significant-gravitas.github.io/Auto-GPT/setup/). Une fois Auto-GPT installé, vous pouvez commencer à l'utiliser en tapant un objectif dans la barre de prompt. Auto-GPT essaiera alors d'atteindre cet objectif.

### Baby AGI
BabyAGI est un système de gestion de tâches alimenté par l'IA, créé par Yohei Nakajima(@nakajima2023). Le système utilise les API d'OpenAI et de Pinecone pour créer et exécuter des tâches basées sur la priorité et la difficulté des tâches précédentes et un objectif prédéfini. BabyAGI fonctionne en exécutant une boucle qui réalise les étapes suivantes :
1. Récupère la première tâche de la liste de tâches.
2. Envoie la tâche à l'agent d'exécution, qui utilise l'API d'OpenAI pour compléter la tâche en fonction du contexte.
3. Enrichit le résultat et le stocke dans Chroma.
4. Crée de nouvelles tâches et repriorise la liste de tâches en fonction de l'objectif et du résultat de la tâche précédente.

### AgentGPT
[AgentGPT](https://agentgpt.reworkd.ai/) de Reworkd est une plateforme qui libère les utilisateurs pour concevoir et déployer des agents IA autonomes, allant du service client à l'analyse de données(@reworkd2023). Elle éduque un agent IA sur une tâche distincte, puis l'habilite à accomplir un objectif prédéterminé. Les agents peuvent exploiter de diverses API pour accéder et traiter des informations du monde réel, et ils peuvent également converser avec des humains et d'autres agents. Pour utiliser AgentGPT, les utilisateurs doivent s'inscrire et sélectionner un objectif pour leur agent. Ensuite, ils peuvent instruire leur agent en lui fournissant des données et des instructions.
