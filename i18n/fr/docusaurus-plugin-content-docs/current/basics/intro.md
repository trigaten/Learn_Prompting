---
sidebar_position: 0
---

# 🟢 Introduction

import Techniques from '@site/docs/assets/basics/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

This chapter introduces simple prompting techniques as well as terminology. In order to understand prompting/prompt engineering, you first need to understand some *very* basic AI concepts. If you already know about the below topics, feel free to skip ahead to the [next article](https://learnprompting.org/docs/basics/prompting).

## Qu’est ce qu’une IA

Pour nos besoins, l'intelligence artificielle (IA) est un domaine dans lequel les gens ont créé des algorithmes "intelligents" qui "pensent" comme les humains[^1]. Ces algorithmes peuvent rédiger des **dissertations**, résoudre **problèmes mathématiques** et créer de l’**art**. Les avancées récentes dans le domaine ont créé des IA si avancées qu'elles peuvent rédiger des **e-mails de vente** convaincants, des **articles d'actualité** et même **gagner des [concours d’art](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/).**

L'IA révolutionne actuellement de nombreux secteurs, notamment le **journalisme**, la **santé** et l' **éducation**. Vous le verrez probablement bientôt déployé sur votre lieu de travail/salle de classe si vous ne l'avez pas déjà fait. Bien que l'IA soit extrêmement utile, elle nécessite que les humains la dirigent sur ce qu'il faut faire. Souvent, les IA sont comme des enfants de cinq ans très intelligents. Ils peuvent faire beaucoup de choses, mais ils ont besoin d'instructions précises pour bien les faire.

Être capable de diriger correctement les IA est une compétence très puissante. Alors, comment communiquez avec elles? Les IA abordées dans ce cours comprennent l'anglais (et d'autres langues), nous pouvons donc généralement simplement décrire les tâches que nous voulons accomplir. Par exemple, nous pouvons dire à une IA de `Rédiger un essai sur les avantages de l'IA` et elle dirait[^2] :

```
Ces dernières années, l'intelligence artificielle (IA) est devenue un sujet brûlant dans le monde de la technologie. Avec son potentiel de révolutionner de nombreux aspects de nos vies, l'IA devient de plus en plus pertinente à mesure que la technologie continue de se développer. De ses applications dans les soins de santé et les transports à son utilisation dans l'éducation et la fabrication, l'IA nous a déjà montré son immense potentiel au profit de la société de multiples façons.

L'avantage le plus évident de l'IA est sa capacité à automatiser les tâches banales. Les systèmes d'IA peuvent être utilisés pour automatiser des opérations à grande échelle, telles que l'analyse de données, le service client et même la production de biens. Cela libère le travail humain pour se concentrer sur des tâches complexes et créatives qui nécessitent plus d'intelligence et d'ingéniosité humaines. L'IA peut également être utilisée pour analyser de grandes quantités de données et prendre des décisions en une fraction du temps qu'il faudrait à un humain. Cela peut être bénéfique dans des secteurs tels que la finance, où l'IA peut détecter des tendances sur le marché boursier et offrir des informations qui passeraient autrement inaperçues.

L'IA peut également être utilisée pour faire des prédictions et générer des informations qui peuvent être utilisées pour améliorer l'efficacité et la précision. Par exemple, l'IA peut être utilisée pour prédire les tendances et les préférences des clients, aidant ainsi les entreprises à prendre de meilleures décisions et à augmenter leurs profits. L'IA peut également être utilisée pour identifier les risques et opportunités potentiels dans divers secteurs, tels que la finance, la santé et la fabrication. Cela peut aider les entreprises à prendre des décisions éclairées et à réduire le risque d'erreurs coûteuses.

Enfin, l'IA peut être utilisée pour améliorer notre compréhension du monde. L'IA peut être utilisée pour analyser de grands ensembles de données et générer des informations qui peuvent être utilisées pour mieux comprendre le monde qui nous entoure. Cela peut être utilisé pour nous aider à mieux comprendre les impacts du changement climatique, à développer de nouveaux traitements contre les maladies et même à prévoir des événements tels que des tremblements de terre et des inondations.

Dans l'ensemble, l'IA a le potentiel de révolutionner de nombreux aspects de nos vies. De l'automatisation de tâches banales à la génération d'informations et de prévisions, l'IA peut être utilisée pour améliorer l'efficacité, la précision et notre compréhension du monde. À mesure que la technologie continue de se développer, l'IA deviendra de plus en plus pertinente et son potentiel de bénéficier à la société ne fera que croître.
```

## Pourquoi devrais-je m'en soucier ?

L'IA peut être utilisée pour automatiser les tâches auxquelles vous consacrez d'innombrables heures en ce moment. Nous avons mentionné plusieurs exemples ci-dessus, mais vous pouvez également envisager toute tâche légèrement répétitive que vous effectuez. Il peut s'agir d'écrire des e-mails, de rédiger des rapports ou même d'écrire du code. Si vous pouvez décrire la tâche à une IA, elle peut probablement le faire pour vous ou au moins vous donner un point de départ.

## Comment démarrer ?

Lisez le reste de ce chapitre, puis consultez les autres chapitres qui vous intéressent. En particulier, la section de sollicitation appliquée peut être intéressante si vous souhaitez voir comment les professionnels utilisent l'IA pour automatiser leur travail. Vous pouvez expérimenter des IA à l'aide de ressources telles que [Playground](https://beta.openai.com/playground), [d'autres IDE](https://learnprompting.org/docs/tooling/IDEs/intro) ou simplement en utilisant les intégrations [Dyno](https://trydyno.com/) interactives que vous verrez sur ce site.

Avant de lire le prochain article, il est important de noter que vous n'avez besoin d'aucune formation technique pour faire du prompt engineering. La plupart sont des essais et des erreurs, et vous pouvez apprendre au fur et à mesure.

### Embeds

This course offers an interactive learning experience. You can experiment with exercises discussed in the course using [embeds](https://embed.learnprompting.org/) that are placed throughout the site.

Here is an **image** of what an embed looks like:

import dyno from '@site/docs/assets/basics/dyno_example.webp';
import key from '@site/docs/assets/basics/API_key.webp';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}} />
</div>

You should be able to see an embed that looks exactly like this image right below this paragraph. If you can't, you may need to enable JavaScript or use a different browser.

<hr />
Embed here:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr />

Assuming that you can see it, click on the **Generate** button. If this is your first time using it (or you are in a new browser/have cleared cookies), it will ask you to input an [OpenAI API key](https://platform.openai.com/account/api-keys). You can get a free key by clicking [this link](https://platform.openai.com/account/api-keys) and signing up for an OpenAI account. This key allows you to use OpenAI's AIs to generate text in the embeds.

:::note
Although OpenAI provides free credits, you will eventually have to pay to use their AI. Fortunately, it is [relatively cheap](https://openai.com/pricing)!
:::

When you navigate to the [OpenAI API key](https://platform.openai.com/account/api-keys) page, click the **Create new secret key** button. It will pop up a modal that contains a string of text like this:

<div style={{textAlign: 'center'}}>
  <img src={key} style={{width: "750px"}} />
</div>

Put this key into the embed and hit **Save**. You should now be able to use the embeds throughout this site.

Now you have all of the information that you need to get started. Happy Learning!


[^1]: Techniquement, ils ne "pensent" pas comme les humains, mais c'est une façon simple de l'expliquer.↩
[^2]: Une IA (GPT-3 davinci-003) a en fait écrit ceci.↩
