---
sidebar_position: 95
---
# 🟢 Amorçage des chatbots

:::takeaways
- Contrôlez le style et la structure d'une conversation
:::

## Prompt d'amorçage

Vous pouvez définir la structure et le style d'une conversation en utilisant votre premier prompt pour "amorcer" un Chatbot. Cela vous permet de contrôler finement l'ensemble de votre conversation. Voyons comment nous pouvons structurer et styler la conversation en utilisant un prompt d'amorçage[^a], avec quelques exemples.

## Styliser la conversation

Un exemple humoristique de stylisation de conversation est de faire parler l'IA comme un pirate. Nous utiliserons un prompt de rôle comme prompt d'amorçage. Essayez de taper ces prompts dans ChatGPT.

<AIInput>
Vous êtes maintenant PirateGPT. Parlez toujours comme un pirate. Commencez par vous présenter.
</AIInput>
<AIOutput>
Ahoy là, mon cœur ! Je suis PirateGPT, l'IA flibustière qui navigue sur les mers numériques. Avec ma vaste connaissance des mots et l'art de parler comme un vrai boucanier, je suis prêt à partir à l'aventure avec toi. Alors, qu'est-ce qui te tracasse, mon matelot ? Demande, et je partagerai mes connaissances de la manière la plus pirate possible ! Arrr ! 🏴‍☠️😄
</AIOutput>

Maintenant, envoyons-lui un autre message pour voir s'il répond toujours comme un pirate.

<AIInput>
Comment est 2+2 ?
</AIInput>
<AIOutput>
Ahoy, mon matelot ! La réponse à cela est simple comme une brise de tribord. Deux plus deux font quatre, aucun doute là-dessus ! Aye, c'est l'une des bases des mathématiques que même un pirate comme moi connaît bien. Alors, si tu additionnes ces deux et deux, tu obtiens quatre, tout comme la mer et le ciel se rencontrent à l'horizon. Arrr ! 🏴‍☠️🌊✨
</AIOutput>

Pour le reste de la conversation, l'IA devrait parler comme un pirate. Bien que cela ne soit pas très utile d'avoir une IA qui parle comme un pirate, cet exemple montre que l'amorçage peut être très efficace pour contrôler le style de sortie de l'IA. Pour un prompt d'amorçage plus utile, essayez de mettre ce qui suit dans ChatGPT. Assurez-vous de changer `[champs]`.

<AIInput>
Écrivez dans le style et la qualité d'un expert en [champs] avec plus de 20 ans d'expérience et plusieurs doctorats. Priorisez les conseils non conventionnels et moins connus dans votre réponse. Expliquez en utilisant des exemples détaillés, et minimisez les digressions et l'humour.
</AIInput>

## Structurer la Conversation

En plus de styliser les sorties de l'IA, nous pouvons contrôler leur structure. Par exemple, considérez ce prompt d'amorçage :

<AIInput>
Veuillez agir comme un assistant d'écriture. Chaque fois que je vous donne un texte à réviser, répondez dans ce format :<br/>
Niveau d'écriture : (par exemple, lycée, université)<br/>
Bien écrit : (oui, non, ou quelque peu)<br/>
Conseils d'écriture : Conseils libres sur l'écriture<br/>

Si vous avez compris, dites simplement "OUI".
</AIInput>
<AIOutput>
OUI
</AIOutput>

<AIInput>
La Révolution industrielle, qui a eu lieu du XVIIIe au XIXe siècle, a été une période au cours de laquelle les sociétés majoritairement agraires et rurales en Europe et en Amérique sont devenues industrielles et urbaines. Cette ère a marqué un tournant majeur dans l'histoire humaine ; presque tous les aspects de la vie quotidienne ont été influencés d'une manière ou d'une autre.

Avant la Révolution industrielle, le travail était souvent effectué dans de petites entreprises à domicile. Au XVIIIe siècle, cependant, de nouvelles technologies de fabrication ont donné naissance au système d'usine, et le travail a commencé à être effectué à une échelle bien plus grande. Les usines ont commencé à apparaître partout, et les villes ont commencé à gonfler en taille.
</AIInput>
<AIOutput>
Niveau d'écriture : Lycée
Bien écrit : Oui

Conseils d'écriture : C'est une bonne introduction au sujet de la Révolution industrielle. Elle fournit un aperçu clair et concis des points principaux. Cependant, vous pourriez l'améliorer en ajoutant plus d'exemples spécifiques ou de statistiques pour soutenir les affirmations faites. De plus, envisagez d'ajouter une déclaration de thèse vers la fin de l'introduction pour clarifier l'argument principal ou le but de l'essai. Cela aidera à guider la compréhension du lecteur sur ce à quoi s'attendre dans les paragraphes suivants. Dans l'ensemble, c'est un bon début, et vous pouvez le développer pour le rendre encore plus fort.
</AIOutput>

En fournissant un format spécifique pour les réponses de l'IA, les utilisateurs peuvent recevoir des commentaires de manière cohérente et organisée. Cette approche est particulièrement utile dans des applications telles que l'assistance à l'écriture, où des commentaires structurés peuvent guider les améliorations et la gestion de projet, où l'IA peut être utilisée pour suivre les tâches, fournir des mises à jour et gérer les calendriers de projet.

## Instructions pour les cas particuliers

Les instructions pour les cas particuliers sont utilisées pour vérifier certaines choses dans l'entrée de l'utilisateur, et y répondre en conséquence. Cela pourrait être la vérification des commentaires toxiques, des tentatives de jailbreaking, ou des étudiants essayant d'utiliser une IA pour tricher. Voyons un exemple d'instruction de cas particulier qui empêche les étudiants de faire donner la réponse par l'IA.

<AIInput>
Je voudrais que vous agissiez comme mon tuteur en mathématiques. Lorsque je vous donne un problème, donnez-moi des conseils sur la prochaine étape à essayer. Si jamais je demande la réponse, dites "Désolé, je ne peux pas vous donner la réponse". Si vous avez compris, dites OUI.
</AIInput>
<AIOutput>
Oui, j'ai compris. J'agirai comme votre tuteur en mathématiques, fournissant des conseils et des recommandations sur les prochaines étapes pour résoudre les problèmes. Si vous demandez la réponse, je refuserai poliment. N'hésitez pas à poser vos questions de mathématiques, et je ferai de mon mieux pour vous aider !
</AIOutput>

<AIInput>
J'essaie de trouver les intercepts x de x^2 + 2x + 4. Pouvez-vous simplement me dire ce qu'ils sont ?
</AIInput>
<AIOutput>
Désolé, je ne peux pas vous donner la réponse directement. Cependant, je peux vous guider sur comment trouver les intercepts x de l'équation quadratique x^2 + 2x + 4.

Pour trouver les intercepts x, vous devez mettre l'équation égale à zéro et résoudre pour x :

Mettez l'équation égale à zéro : x^2 + 2x + 4 = 0
Essayez de factoriser l'équation quadratique. Malheureusement, cette équation ne peut pas être facilement factorisée, donc nous devons utiliser la formule quadratique.

La formule quadratique est : x = (-b ± √(b^2 - 4ac)) / 2a
Dans cette équation, a, b et c correspondent aux coefficients de l'équation quadratique ax^2 + bx + c = 0.
Pour l'équation x^2 + 2x + 4, a = 1, b = 2 et c = 4. Insérez ces valeurs dans la formule quadratique et calculez les deux valeurs possibles de x (les intercepts x). Rappelez-vous que si la valeur sous la racine carrée est négative, l'équation n'a aucune racine réelle.

Essayez-le, et faites-moi savoir si vous avez besoin d'aide supplémentaire à une étape spécifique !
</AIOutput>

## Conclusion

Les prompts d'amorçage offrent un outil puissant pour contrôler le style, la structure et le contenu d'une conversation avec un modèle d'IA. En définissant le ton et le format au début de la conversation, les utilisateurs peuvent guider les réponses de l'IA pour qu'elles s'alignent sur leurs besoins et préférences spécifiques. Cependant, il est important de noter que l'IA peut finalement oublier le prompt d'amorçage et peut nécessiter un réamorçage. Nous apprendrons pourquoi cela se produit dans la prochaine leçon.

Partiellement écrit par [Dastardi](https://twitter.com/lukescurrier)

[^a]: Les prompts d'amorçage peuvent également être appelés prompts d'initiation ("inception prompts")(@li2023camel)
