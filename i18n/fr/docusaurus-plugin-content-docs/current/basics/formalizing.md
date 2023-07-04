---
sidebar_position: 7
---

# 🟢 Formalisation des Prompts

import FormalPrompt from '@site/docs/assets/basics/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>

Nous avons maintenant couvert plusieurs types de prompts, ainsi que des façons de les combiner. Cette page vous fournira des termes pour expliquer les différents types de prompts. Bien qu'il y ait eu des approches pour formaliser le discours autour du Prompt Engineering(@white2023prompt), le domaine est en constante évolution, nous vous fournirons donc juste assez d'informations pour commencer.

## Parties d'un Prompt

Il y a quelques parties différentes d'un prompt que vous verrez encore et encore. Ils sont approximativement :

- Un rôle
- Une instruction/tâche
- Une question
- Un contexte
- Des exemples (few shot)

Nous avons couvert les rôles, les instructions et les exemples dans les pages précédentes. Une question est simplement une question ! (Par exemple, `quelle est la capitale de la France ?`). Le contexte est toute information pertinente que vous voulez que le modèle utilise lorsqu'il répond à la question ou effectue l'instruction.

Tous ces éléments ne se trouvent pas dans chaque prompt, et lorsqu'ils s'y trouvent, il n'y a pas d'ordre standard pour eux. Par exemple, les deux prompts suivants, qui contiennent chacun un rôle, une instruction et un contexte, feront à peu près la même chose :

```text
Vous êtes médecin. Lisez cet historique médical et prédisez les risques pour le patient :

1 janvier 2000 : bras droit fracturé en jouant au basket. Traitement avec un plâtre.
15 février 2010 : diagnostic d'hypertension. Prescrit du lisinopril.
10 septembre 2015 : développe une pneumonie. Traitée avec des antibiotiques et récupérée complètement.
1 mars 2022 : a subi une commotion cérébrale dans un accident de voiture. Admis à l'hôpital et surveillé pendant 24 heures.
```

```text
1 janvier 2000 : bras droit fracturé en jouant au basket. Traitement avec un plâtre.
15 février 2010 : diagnostic d'hypertension. Prescrit du lisinopril.
10 septembre 2015 : développe une pneumonie. Traitée avec des antibiotiques et récupérée complètement.
1 mars 2022 : a subi une commotion cérébrale dans un accident de voiture. Admis à l'hôpital et surveillé pendant 24 heures.

Vous êtes médecin. Lisez cet historique médical et prédisez les risques pour le patient :
```

Cependant, le deuxième prompt est probablement préférable car l'instruction est la dernière partie du prompt. C'est bien parce que le LLM est moins susceptible d'écrire simplement plus de contexte au lieu de suivre l'instruction. Par exemple, si on donne le premier prompt, le LLM pourrait ajouter une nouvelle ligne : `15 mars 2022 : rendez-vous de suivi prévu avec le neurologue pour évaluer la progression de la récupération de la commotion cérébrale.`

## Un Prompt "Standard"

Nous avons entendu parler de quelques formats de prompts jusqu'à présent. Maintenant, nous allons rapidement revenir au début et définir un prompt "standard". Suivant Kojima et al. (@kojima2022large), nous considérons comme prompts "standard" ceux qui consistent uniquement en une question. Nous considérons également les prompts qui consistent uniquement en une question qui sont dans le format Q&R comme des prompts "standard".

### Pourquoi devrais-je m'en soucier ?

De nombreux articles / papiers que nous référençons utilisent ce terme. Nous le définissons donc pour que nous puissions discuter de nouveaux types de prompts en contraste avec les prompts standard.

### Deux exemples de prompts standards :

_Prompt Standard_

```
Quelle est la capitale de la France ?
```

_Prompt standard dans le format Q&R_

```
Q: Quelle est la capitale de la France ?

R:
```

## Prompts few-shot standards

Les prompts few-shot standards(@liu2021pretrain) sont simplement des prompts standards qui contiennent des _exemplaires_. Les exemplaires sont des exemples de la tâche que le prompt essaye de résoudre, qui sont inclus dans le prompt lui-même(@brown2020language). Dans la recherche, les prompts few-shot standards sont parfois simplement appelés prompts standards (bien que nous essayons de ne pas le faire dans ce guide).

### Deux exemples de prompts few-shot standards :

_Prompt few-shot standard_

```
Quelle est la capitale de l'Espagne ?
Madrid
Quelle est la capitale de l'Italie ?
Rome
Quelle est la capitale de la France ?
```

_Prompt few-shot standard dans le format Q&R_

```
Q: Quelle est la capitale de l'Espagne ?
R: Madrid
Q: Quelle est la capitale de l'Italie ?
R: Rome
Q: Quelle est la capitale de la France ?
R:
```

Les prompts few-shot facilitent l'apprentissage "few-shot", alias "dans context", qui est la capacité à apprendre sans mise à jour des paramètres(@zhao2021calibrate).
