---
sidebar_position: 90
---

# 📙 Référence de vocabulaire

Veuillez vous référer à cette page pour une liste de termes et de concepts que nous utiliserons tout au long de ce cours.

#### Les grands modèles de langue (LLMs), les modèles de langue pré-entraînés (PLMs)(@branch2022evaluating), les modèles de langue (LMs) et les modèles fondamentaux

Ces termes font tous plus ou moins référence à la même chose : de grandes intelligences artificielles (réseaux neuronaux), qui ont généralement été entraînées sur une énorme quantité de texte.

#### Les modèles de langage masqués (MLMs)

Les MLMs sont un type de modèle NLP, qui ont un jeton ("token") spécial, généralement `[MASK]`, qui est remplacé par un mot du vocabulaire. Le modèle prédit alors le mot qui a été masqué. Par exemple, si la phrase est "Le chien [MASK] le chat", le modèle prédit "chasse" avec une forte probabilité.

#### Les étiquettes ("labels")

Le concept d'étiquettes est mieux compris avec un exemple.

Supposons que nous voulions classifier certains tweets comme méchants ou non méchants. Si nous avons une liste de tweets et leur _étiquette_ correspondante (méchants ou non méchants), nous pouvons entraîner un modèle à classer si les tweets sont méchants ou non. Les étiquettes ne sont généralement que des possibilités pour la tâche de classification.

#### L'espace d'étiquettes

Toutes les étiquettes possibles pour une tâche donnée ('méchants' et 'non méchants' pour l'exemple ci-dessus).

#### L'analyse de sentiment

L'analyse de sentiment est la tâche de classer le texte en sentiments positifs, négatifs ou autres.

#### "Modèle" vs "AI" vs "LLM"

Ces termes sont utilisés de manière quelque peu interchangeable tout au long de ce cours, mais ils ne signifient pas toujours la même chose. Les LLM sont un type d'IA, comme mentionné ci-dessus, mais toutes les IA ne sont pas des LLM. Lorsque nous mentionnons des modèles dans ce cours, nous faisons référence à des modèles d'IA. En tant que tel, dans ce cours, vous pouvez considérer les termes "modèle" et "IA" comme interchangeables.

#### L'apprentissage automatique (ML, machine learning)

Le ML est un domaine d'étude qui se concentre sur les algorithmes capables d'apprendre à partir de données. Le ML est une sous-catégorie de l'IA.

#### Le verbaliseur ("Verbalizer")

Dans le cadre de la classification, les verbaliseurs sont des mappages des étiquettes aux mots du vocabulaire d'un modèle de langage (@schick2020exploiting). Par exemple, considérez la classification de sentiment avec le prompt suivant:

```text
Tweet: "J'aime les hotpockets"
Quel est le sentiment de ce tweet ? Dites 'pos' ou 'neg'.
```

Ici, le verbaliseur est le mappage des étiquettes conceptuelles de `positif` et `négatif` aux jetons `pos` et `neg`.

#### L'apprentissage par renforcement à partir des commentaires humains (RLHF, Reinforcement Learning from Human Feedback)

Le RLHF est une méthode de fine-tuning des LLMs selon les données de préférence humaine.

<!-- %%RemarkAutoGlossary::list_all%% -->
