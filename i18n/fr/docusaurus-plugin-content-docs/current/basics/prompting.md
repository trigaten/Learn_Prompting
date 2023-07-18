---
sidebar_position: 1
---

# 🟢 Prompting

import Prompt from '@site/docs/assets/basics/prompt.svg';

<div style={{textAlign: 'center'}}>
  <Prompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Dans le chapitre précédent, nous avons discuté de l'IA et de la manière dont les humains peuvent demander aux IA d'effectuer des tâches. Le processus consistant à demander à une IA d'effectuer une tâche est appelé prompting[1](https://learnprompting.org/docs/basics/prompting#fn-1). Nous donnons à l'IA un ensemble d'instructions (le prompt) et elle exécute la tâche. Les prompts peuvent être aussi simples qu'une question ou aussi complexes que plusieurs paragraphes.

Pour illustrer, voici deux exemples de prompt :

#### 1) Résumer un article

Supposons que vous lisez un article sur les chutes de neige en Floride. Vous souhaitez obtenir rapidement les idées principales de l'article, vous montrez donc à l'IA ce que vous lisez et lui demandez un résumé [^2] :

```
Il est très rare que de la neige tombe dans l'État américain de Floride, en particulier dans les parties centrale et méridionale de l'État. state of Florida, especially in the central and southern portions of the state. À l'exception des régions de l'extrême nord de l'État, la plupart des grandes villes de Floride n'ont jamais enregistré de chutes de neige mesurables, bien que des traces aient été enregistrées, ou des rafales dans l'air observées quelques fois par siècle. Selon le National Weather Service, dans les Florida Keys et Key West, il n'y a pas d'occurrence connue d'averses de neige depuis la colonisation européenne de la région il y a plus de 300 ans. À Miami, Fort Lauderdale et Palm Beach, il n'y a eu qu'un seul rapport connu d'averses de neige observées dans l'air en plus de 200 ans; cela s'est produit en janvier 1977. Quoi qu'il en soit, Miami, Fort Lauderdale et Palm Beach n'ont pas connu d'averses de neige avant ou depuis cet événement de 1977.

Résumez ce paragraphe en une seule phrase :
```

Voici la réponse de l'IA. Une lecture beaucoup plus courte !

```text
Snowfall is extremely rare in Florida, with the exception of the far northern areas,
and only one instance of snow flurries in the air has been recorded in the major cities
of Miami, Fort Lauderdale, and Palm Beach in the last 200 years.
// highlight-end
```

#### 2) Résolution de problèmes mathématiques

Si vous avez un ensemble de données d'équations mathématiques que vous aimeriez qu'un modèle de langage résolve, vous pouvez créer un prompt en posant la question "Qu'est-ce que [EQUATION]".

Pour une question donnée, votre prompt complet pourrait ressembler à ceci :

```
What is 965*590?
```

Pour ce prompt, GPT-3 (text-davinci-002) (une IA) répond parfois 9 000 000 (incorrect). C'est là qu'intervient le prompt engineering.

# Prompt Engineering

If, instead of asking `What is 965*590?`, we ask `Make sure your answer is exactly correct. What is 965*590? Assurez-vous de mettre le bon nombre de zéros, même s'il y en a beaucoup :`, GPT-3 répondra 9 000 000 000 (correct). Alors, pourquoi est-ce le cas? Why is telling the AI twice to give a correct answer helpful? Comment pouvons-nous créer des prompts qui donnent des résultats optimaux sur notre tâche ? Cette dernière question, en particulier, est au centre du domaine du prompt engineering, ainsi que de ce cours.

:::caution
One more thing, if you are running the above prompt in GPT-3, you should set temperature to 0 to remove randomness.
:::

Lisez la suite pour apprendre à concevoir de bons prompts !

[^2]: Ce paragraphe vient de [https://en.wikipedia.org/wiki/Snow_in_Florida](https://en.wikipedia.org/wiki/Snow_in_Florida)[↩](https://learnprompting.org/docs/basics/prompting#fnref-2)
