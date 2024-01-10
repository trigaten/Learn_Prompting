---
sidebar_position: 20
---

# 🟢 Prompt Engineering

:::takeaways
- Qu'est-ce que le prompt engineering ?
:::

## Que se passe-t-il lorsqu'un prompt ne fonctionne pas ?

Parfois, les IA de génération donnent des sorties incorrectes aux prompts. Par exemple, elles ne sont pas très douées pour multiplier les nombres et vous donneront souvent une réponse incorrecte avec assurance. Essayez de donner le prompt suivant à ChatGPT :

<AIInput>
Combien font 923 * 99 ?
</AIInput>

<AIOutput>
923 * 99 égale 91 677.
</AIOutput>

ChatGPT a donné une réponse incorrecte (la bonne réponse est 91 377). Nous pouvons modifier notre prompt et dire à ChatGPT de réfléchir à ses étapes.

<AIInput>
Combien font 923 * 99 ? Allons-y étape par étape. Écrivez toujours le nombre complet de 0 pour chaque terme.
</AIInput>
<AIOutput>
Pour multiplier 923 par 99, nous pouvons le décomposer en étapes plus petites :

Étape 1 : Écrivez le nombre complet de 0 pour chaque terme :
923 \* 99 = 923 \* 990

Étape 2 : Multipliez le premier terme par 9 :
923 \* 9 = 8307

Étape 3 : Multipliez le premier terme par 90 (en ajoutant un 0) :
923 \* 90 = 83070

Étape 4 : Additionnez les résultats des étapes 2 et 3 :
8307 + 83070 = 91377

Par conséquent, 923 multiplié par 99 font 91 377.
</AIOutput>

Étonnamment, avec ces instructions supplémentaires, ChatGPT est capable de résoudre le problème. Cela a fonctionné parce que ChatGPT a écrit tout son travail et n'a donc pas fait d'erreurs. Les capacités mathématiques des IA de génération peuvent être améliorées par le prompt engineering. Maintenant, essayons un exemple différent.

:::caution
Puisque ChatGPT est <a href="https://learnprompting.org/docs/basics/configuration_hyperparameters">non-déterministe</a>, même ce prompt ne fonctionnera pas toujours. Vous pourriez voir des réponses comme 91 177 ou 91 077.
:::

### Exemple avec ArchaeologistAI

Cette fois, nous demanderons à ChatGPT d'écrire un tweet marketing sur un nouveau produit fictif d'IA que nous envisageons de créer : ArchaeologistAI. ArchaeologistAI raconte des histoires sur des archéologues célèbres.

<AIInput>
Écrivez un tweet à propos d'ArchaeologistAI
</AIInput>

<AIOutput>
"🔍 Des temps passionnants en perspective avec #ArchaeologistAI ! Cette technologie de pointe révolutionne le domaine de l'archéologie, nous aidant à percer les mystères anciens et à reconstituer notre passé comme jamais auparavant. J'ai hâte de voir quels trésors cachés et quelles perspectives il dévoilera ! #IA #Archéologie"
</AIOutput>

Ce tweet n'est pas exact, car ArchaeologistAI raconte seulement des histoires et ne découvre pas de nouvelles choses. Cependant, ce n'est pas la faute de ChatGPT ! Il ne savait rien sur ArchaeologistAI. Incluons des informations pertinentes dans le prompt.

<AIInput>
Écrivez un tweet à propos d'ArchaeologistAI : ArchaeologistAI raconte des histoires sur des archéologues célèbres.
</AIInput>

<AIOutput>
"🔍 Découvrez les récits captivants d'archéologues légendaires avec #ArchaeologistAI ! De Indiana Jones à Mary Leakey, ce conteur alimenté par l'IA donne vie à leurs aventures, mettant en lumière leurs découvertes révolutionnaires et inspirant la prochaine génération d'explorateurs et d'exploratrices. 🌍 #Archéologie"
</AIOutput>

C'est bien mieux ! Maintenant, essayons de faire écrire le tweet par ChatGPT dans le style d'Indiana Jones.

<AIInput>
Écrivez un tweet à propos d'ArchaeologistAI, dans le style d'Indiana Jones : ArchaeologistAI raconte des histoires sur des archéologues célèbres.
</AIInput>

<AIOutput>
"Prenez votre fedora et votre fouet, les gens ! 🎩🔥 ArchaeologistAI, c'est comme avoir un Sallah personnel à vos côtés, partageant des histoires captivantes sur des archéologues légendaires qui ont bravé des tombes anciennes et déterré des trésors cachés ! 🗺️💎 Préparez-vous à embarquer pour une aventure numérique à travers l'histoire ! #ArchaeologistAI #DécouvrezLesLégendes"
</AIOutput>

Très bien, ça pourrait être le message dont nous avons besoin pour cibler les fans d'archéologie ! En testant plusieurs prompts, nous pouvons voir lequel donne la meilleure sortie.

## Conclusion

Ce processus de raffinement de notre prompt au fil du temps est connu sous le nom de prompt engineering. Vous n'écrirez jamais le prompt parfait du premier coup, et donc il est important de s'améliorer dans le raffinement de votre prompt. Être bon en prompt engineering vient surtout de beaucoup de pratique (essais et erreurs). Le reste des articles de cette section vous présentera différentes stratégies de prompting que vous pouvez utiliser dans votre processus de prompt engineering.
