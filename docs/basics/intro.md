---
sidebar_position: 0
---

# 🟢 Introduction

import Techniques from '../assets/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>


Ce chapitre présente des techniques simples de créations d'invites ainsi que la terminologie du domaine. Pour comprendre l'ingénierie des invites, vous devez d'abord comprendre quelques concepts de base relatifs à l'intelligence artificielle. Si vous maîtrisez déjà les sujets ci-dessous, n'hésitez pas à passer directement au chapitre suivant. [next article](https://learnprompting.org/docs/basics/prompting).

## Qu'est-ce que l'IA ?

Pour ce qui nous concerne, l'intelligence artificielle (IA) est un domaine dans lequel 
des personnes ont créé des algorithmes "intelligents" qui "pensent" comme des humains[^1]. 
Ces algorithmes peuvent écrire des **exposés**, résoudre des **problèmes de mathématiques** 
et créer de **l'art**. Des avancées récentes dans ce domaine ont permis de créer des IA si 
avancées qu'elles peuvent écrire des **courriels de vente** convaincants, des **articles de presse**, 
et même **gagner des [concours d'art](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/)**.

L'IA révolutionne actuellement de nombreux secteurs, notamment le **journalisme**, la **santé** et l'**éducation**. Si ce n'est pas déjà le cas, vous la verrez probablement bientôt déployée sur votre lieu de travail ou dans votre salle de classe. Bien que l'IA soit extrêmement efficace, elle a néanmoins besoin de l'aide des humains pour déterminer ce qu'elle doit faire.
En général, les IA sont comparables à des enfants de cinq ans très intelligents. Elles sont capables de réaliser de nombreuses tâches, mais elles ont besoin d'instructions précises pour bien les accomplir.

Être capable de guider adéquatement les IA est une aptitude extrêmement précieuse. Alors, quelle est la marche à suivre pour bien communiquer avec elles ? 
Les IA dont il est question dans ce cours maîtrisent l'anglais (et d'autres langues),
nous pouvons donc généralement nous contenter de décrire les tâches que nous voulons accomplir en termes simples de la vie courrante. Par exemple, nous pouvons dire à une IA d'
`Écrire un exposé sur les avantages de l'IA` et elle répondra[^2] :

```
Au cours des dernières années, l'intelligence artificielle (IA) est devenue un thème porteur dans le monde de la technologie. Pouvant révolutionner de
nombreux aspects de notre vie, l'IA devient de plus en plus pertinente au fur et à mesure que la technologie évolue. Qu'il s'agisse d'applications dans
le domaine de la santé, des transports, de l'éducation ou de la production industrielle, l'IA a déjà démontré son immense potentiel pour le bénéfice de
la société, et ce de plusieurs manières.

L'avantage le plus évident de l'IA est sa capacité à automatiser des tâches courantes. Les systèmes d'IA peuvent être utilisés pour automatiser des 
opérations à grande échelle, telles que l'analyse de données, le service à la clientèle et même la production de biens. Le travail humain est ainsi
libéré et peut se concentrer sur des tâches complexes et créatives qui requièrent davantage d'intelligence et de génie humain. L'IA peut également être
utilisée pour analyser de grandes quantités de données et prendre des décisions en une fraction du temps nécessaire à un humain. Cela peut être très
utile dans des secteurs tels que la finance, où l'IA peut détecter des schémas dans le marché boursier et offrir des perspectives qui, autrement, passeraient inaperçues.

L'IA peut également être utilisée pour faire des prédictions et générer des informations qui peuvent être utilisées pour améliorer l'efficacité et la
précision. Par exemple, l'IA peut être utilisée pour prédire les tendances et les préférences des clients, ce qui permet aux entreprises de prendre de 
meilleures décisions et d'augmenter leurs bénéfices. L'IA peut également être utilisée pour identifier les risques et les opportunités potentiels dans 
différents secteurs, tels que la finance, les services de santé et l'industrie manufacturière. Les entreprises peuvent ainsi prendre des décisions 
éclairées et réduire le risque d'erreurs coûteuses.

Enfin, l'IA peut être utilisée pour améliorer notre compréhension du monde. Elle peut être utilisée pour analyser de vastes ensembles de données et 
générer des informations qui peuvent être utilisées pour mieux comprendre le monde qui nous entoure. Elle peut nous aider à mieux comprendre les effets 
du changement climatique, à mettre au point de nouveaux traitements pour les maladies et même à prédire des événements tels que les tremblements de 
terre et les inondations.

Dans l'ensemble, l'IA a le potentiel de révolutionner de nombreux aspects de notre vie. De l'automatisation de tâches courantes à la production 
d'informations et de prédictions, l'IA peut être utilisée pour améliorer l'efficacité, la précision et notre compréhension du monde. Au fur et à mesure
que la technologie se perfectionne, l'IA deviendra de plus en plus pertinente et son utilité pour la société ne fera que croître.
```

## Pourquoi devrais-je m'en préoccuper ?

L'IA peut être utilisée pour automatiser des tâches qui vous coûtent d'innombrables heures *en ce moment même*.
Nous avons mentionné plusieurs exemples ci-dessus, mais vous pouvez également envisager n'importe quelle tâche quelque peu répétitive de votre quotidien.
Il peut s'agir d'écrire des courriels, des rapports ou même du code. Si vous pouvez décrire cette tâche
à une IA, celle-ci pourra probablement la réaliser à votre place ou au moins vous donner des pistes de travail ou un point de départ.

## Par où commencer ?

Vous pouvez commencer par lire le reste de ce chapitre, puis consulter d'autres chapitres qui vous intéressent.
En particulier, la section sur les [invites appliquées] (https://learnprompting.org/docs/applied_prompting/overview) peut vous intéresser si vous souhaitez voir comment les professionnels utilisent l'IA pour automatiser leur travail. Vous pouvez expérimenter avec des IA en utilisant des ressources telles que [Playground](https://beta.openai.com/playground), [d'autres IDE](https://learnprompting.org/docs/tooling/IDEs/intro), ou simplement en utilisant les [Dyno embeds](https://learnprompting.org/docs/basics/intro#dyno-embeds) interactifs que vous verrez sur ce site.

Avant de lire le prochain article, il est important de noter qu'il n'est pas nécessaire d'avoir des connaissances techniques pour faire de l'ingénierie d'invite. La plupart du temps, il s'agit de procéder par tâtonnements et d'apprendre tout au long du processus.

### Dyno Embeds

Ce cours offre une expérience d'apprentissage interactive. Vous pouvez expérimenter les exercices abordés dans le cours en utilisant les éléments [Dyno](https://trydyno.com) qui sont placés un peu partout sur le site.

Voici une **illustration** de ce à quoi ressemble un Dyno Embed :

import dyno from '../assets/dyno_example.png';
import key from '../assets/API_key.png';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}} />
</div>

Vous devriez pouvoir voir un lien qui ressemble exactement à cette image juste en dessous de ce paragraphe. Si ce n'est pas le cas, il se peut que vous deviez activer Javascript sur votre navigateur ou que vous deviez changer de fureteur.

<hr/>
Embed here:
<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Generate a comma separated list of 10 ice cream flavors:" initial-response="Chocolate, Vanilla, Strawberry, Mint Chip, Rocky Road, Cookie Dough, Butter Pecan, Neapolitan, Coffee, Coconut" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
<hr/>

En supposant que vous puissiez le voir, cliquez sur le bouton **Generate**. Si c'est la première fois que vous l'utilisez (ou si vous utilisez un autre navigateur ou si vous avez effacé les cookies), il vous sera demandé d'entrer une [clé API OpenAI] (https://platform.openai.com/account/api-keys). Vous pouvez obtenir une clé gratuite en cliquant sur [ce lien] (https://platform.openai.com/account/api-keys) et en créant un compte OpenAI. Cette clé vous permet d'utiliser les IA d'OpenAI pour générer du texte dans les embeds Dyno sur ce site.

:::note
Bien qu'OpenAI fournisse des crédits gratuits, il vous faudra éventuellement payer pour utiliser leur IA une fois ces crédits épuisés. Heureusement, le prix d'utilisation est [relativement abordable] (https://openai.com/pricing) !
:::

Lorsque vous naviguez sur la page [OpenAI API key](https://platform.openai.com/account/api-keys), cliquez sur le bouton **Create new secret key**. Une fenêtre contextuelle s'ouvrira, contenant une chaîne de texte comme celle-ci :

<div style={{textAlign: 'center'}}>
  <img src={key} style={{width: "750px"}} />
</div>

Insérez cette clé dans le Dyno embed et cliquez sur **Save**. Vous devriez maintenant pouvoir utiliser les éléments Dyno sur l'ensemble de ce site.

Vous avez maintenant toutes les informations dont vous avez besoin pour démarrer votre aventure dans l'univers de l’ingénierie d’invites ! Bon apprentissage !


[^1] : Techniquement, les IA ne "pensent" pas comme les humains, mais c'est une façon simplifiée de l'expliquer.
[^2] : C'est une IA (GPT-3 davinci-003) qui a écrit ce texte.
