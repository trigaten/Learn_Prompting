---
sidebar_position: 100
---

# 🟢 Paramètres LLM

import Temperature from '@site/docs/assets/basics/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

# Introduction

La sortie des LLM peut être affectée par des _hyperparamètres de configuration_, qui contrôlent de divers aspects du modèle, tels que son caractère "aléatoire". Ces hyperparamètres peuvent être ajustés pour produire une sortie plus créative, diverse et intéressante. Dans cette section, nous discuterons de deux hyperparamètres de configuration importants et de leur impact sur la sortie des LLM.

:::note
[pour les chercheurs] Ceux-ci sont différents des hyperparamètres réguliers tels que le taux d'apprentissage, le nombre de couches, la taille cachée, etc.
:::

## Température

La température est un hyperparamètre de configuration qui contrôle le caractère aléatoire de la sortie du modèle de langage. Une température élevée produit des résultats plus imprévisibles et créatifs, tandis qu'une température basse produit une sortie plus commune et conservatrice. Par exemple, si vous réglez la température sur 0,5, le modèle générera généralement un texte plus prévisible et moins créatif que si vous réglez la température sur 1,0.

## Top p

Top p, également connu sous le nom de nucleus sampling (échantillonnage de noyau), est un autre hyperparamètre de configuration qui contrôle le caractère aléatoire de la sortie du modèle de langage. Il fixe une probabilité seuil et sélectionne les meilleurs tokens dont la probabilité cumulative dépasse le seuil. Le modèle échantillonne ensuite au hasard dans cet ensemble de tokens pour générer une sortie. Cette méthode peut produire une sortie plus diversifiée et intéressante que les méthodes traditionnelles qui échantillonnent au hasard tout le vocabulaire. Par exemple, si vous fixez le top p à 0,9, le modèle ne considérera que les mots les plus probables qui représentent 90 % de la masse de probabilité.

## Autres hyperparamètres pertinents

Il existe de nombreux autres hyperparamètres qui peuvent affecter les performances du modèle de langage, tels que les pénalités de fréquence et de présence. Nous ne les couvrons pas ici, mais peut-être le ferons-nous à l'avenir.

## Comment ces hyperparamètres affectent la sortie

La température et le top p peuvent tous deux affecter la sortie d'un modèle de langage en contrôlant le degré d'aléatoire et de diversité dans le texte généré. Une valeur élevée de température ou de top p produit des résultats plus imprévisibles et intéressants, mais augmente également la probabilité d'erreurs ou de texte absurde. Une valeur basse de température ou de top p peut produire des résultats plus conservateurs et prévisibles, mais peut également entraîner un texte répétitif ou peu intéressant.

Pour les tâches de génération de texte, vous voudrez peut-être utiliser une valeur élevée de température ou de top p. Cependant, pour les tâches où l'exactitude est importante, telles que les tâches de traduction ou de réponse aux questions, une valeur basse de température ou de top p doit être utilisée pour améliorer l'exactitude et l'exactitude factuelle.

:::note
Parfois, plus d'aléatoire peut être utile pour les tâches où l'exactitude est nécessaire lorsqu'il est associé à [des techniques de prompting spéciales](https://learnprompting.org/docs/intermediate/self_consistency).
:::

## Conclusion

En résumé, la température, le top p et les autres hyperparamètres de configuration du modèle sont des facteurs clés à prendre en compte lors de l'utilisation de modèles de langage. En comprenant la relation entre ces hyperparamètres et la sortie du modèle, les praticiens peuvent optimiser leurs prompts pour des tâches et des applications spécifiques.

:::warning
Certains modèles, comme ChatGPT, ne vous permettent **pas** d'ajuster ces hyperparamètres de configuration.
:::

Par jackdickens382
