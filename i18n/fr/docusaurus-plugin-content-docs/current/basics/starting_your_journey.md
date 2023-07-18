---
sidebar_position: 1000
---

# 🟢 Commencer votre parcours


import Steps from '@site/docs/assets/basics/steps.svg';

<div style={{textAlign: 'center'}}>
  <Steps style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Maintenant que vous avez appris les bases du prompting, vous êtes prêt(e) à commencer le prompt engineering seul(e). Le reste de ce cours contient des techniques et des ressources supplémentaires, mais la meilleure façon d'apprendre le PE est de commencer à expérimenter avec vos propres prompts. Cette page vous montrera comment commencer à résoudre un problème de prompt engineering arbitraire.

Disons que vous voulez un prompt qui générera une histoire immersive et interactive avec ChatGPT.

## Étape 1 : Recherche

La première chose à faire est de rechercher le prompt que vous voulez. Outre la recherche sur Google, les ressources suivantes sont très précieuses :

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (et des sous-reddits similaires)
- [Learn Prompting Discord](https://discord.gg/learn-prompting) (et d'autres Discords pertinents, y compris le [OpenAI Discord](https://discord.gg/openai))

Vous pourriez trouver [celui-ci](https://prompts.chat/#act-as-a-text-based-adventure-game) par [Heroj04](https://github.com/Heroj04) comme un bon point de départ :
> je veux que vous agissiez comme un jeu d'aventure textuel. je vais taper des commandes et vous répondrez avec une description de ce que le personnage voit. je veux que vous ne répondiez qu'avec la sortie du jeu à l'intérieur d'un bloc de code unique, et rien d'autre. ne donnez pas d'explications. ne tapez pas de commandes à moins que je ne vous y invite. Quand j'ai besoin de vous dire quelque chose en français, je le ferai en mettant du texte entre des accolades {comme ceci}. Ma première commande est "réveille-toi".

## Étape 2 : Expérimentation

Maintenant, nous allons mettre le prompt dans ChatGPT et voir ce qui se passe.

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}} />
</div>

Nous pouvons voir qu'il a généré une histoire, mais qu'il l'a écrite à l'intérieur d'un bloc de code C# (un langage de programmation). Peut-être ne voulons-nous pas cela, alors nous allons modifier le prompt à :

> Je veux que vous agissiez comme un jeu d'aventure textuel. Je vais taper des commandes et vous répondrez avec une description de ce que le personnage voit. Ne donnez pas d'explications. Ma première commande est "réveille-toi".


**Réponse de ChatGPT** :
```text
// highlight-start
Vous ouvrez lentement les yeux et vous vous trouvez allongé sur le sol froid et dur. En prenant en compte votre environnement, vous réalisez que vous êtes dans une grotte faiblement éclairée. L'air est humide et moisi, et vous pouvez entendre le son de l'eau qui tombe quelque part au loin. Votre tête vous fait mal et vous vous sentez désorienté. Vous devez comprendre où vous êtes et comment sortir d'ici.
// highlight-end
```

Super, maintenant il affiche l'histoire sous forme de texte brut. Cependant, notre prompt manque de détails. Ajoutons donc une structure supplémentaire au prompt:

> Je veux que vous agissiez comme un jeu d'aventure textuel. Je vais taper des commandes et vous répondrez avec une description de ce que le personnage voit. Ne donnez pas d'explications. Utilisez un langage fleuri et descriptif. Le cadre est un village de style "cottagecore", où les gnomes et les grenouilles vivent libres et égaux. Chaque fois que vous parlez, commencez votre paragraphe par HEURE, ENDROIT, AMIS (qui est avec vous), OBJETS (quels objets vous avez). Ma première commande est "réveille-toi".

**Réponse de ChatGPT** :
```text
// highlight-start
HEURE: Tôt le matin
ENDROIT: Un cottage confortable et pittoresque niché dans un village entouré d'une végétation luxuriante et de fleurs parfumées.
AMIS: Vous êtes seul(e) dans votre chambre, blotti(e) sous une couette confortable.
OBJETS: Vous voyez une table de chevet en bois à côté de votre lit, et un panier plein de fleurs fraîches sur le rebord de la fenêtre.

Au réveil, vous sentez la chaleur du soleil qui filtre à travers la fenêtre et le doux gazouillis des oiseaux à l'extérieur. Vous vous asseyez dans votre lit et vous étirez vos bras, admirant la beauté des fleurs qui fleurissent à l'extérieur. Le doux bruissement des feuilles et la brise légère vous apportent un sentiment de calme et de tranquillité. Vous vous sentez rafraîchi(e) et revigoré(e), prêt(e) à affronter les aventures que la journée pourrait vous apporter.
// highlight-end
```

Ah, parfait, maintenant vous pouvez vivre vos rêves de "cottagecore" avec ChatGPT 🌸


## Étape 3 : Obtenir des commentaires et itérer

Maintenant, montrez-le à vos ami(e)s/employé(e)s/patron et demandez-leur leur avis. S'ils aiment ça, génial ! Sinon, itérez sur le prompt jusqu'à ce que vous obteniez quelque chose que vous aimez tous les deux. Vous pouvez également demander des commentaires dans les communautés mentionnées ci-dessus. Cette étape ne se termine jamais vraiment. Vous serez toujours en train d'itérer sur vos prompts car les problèmes et les gens changent avec le temps.

## Conclusion

Faites du prompt engineering comme _vous_ le souhaitez. Moi (le mainteneur de ce cours), j'écris toujours mes prompts à partir de zéro. Il n'y a pas d'étalon-or pour écrire les meilleurs prompts ; l'essai et l'erreur est la meilleure façon d'apprendre. Bon apprentissage et bonne chance dans la continuation de ce cours !

:::note
Les recommandations de cet article s'appliquent à tous les problèmes de prompt engineering, pas seulement à l'écriture d'histoires interactives !
:::


## Notes

- Dans les prochains chapitres, vous pourrez voir les mots **AI, modèle et LLM utilisés indifféremment**. Consultez la [référence de vocabulaire](https://learnprompting.org/fr/docs/vocabulary) pour plus d'informations.