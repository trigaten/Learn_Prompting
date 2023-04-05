# Apprendre le "Prompting"

[![Twitter](https://img.shields.io/twitter/url?label=Follow%20%40learnprompting&style=social&url=https%3A%2F%2Ftwitter.com%2Flearnprompting)](https://twitter.com/learnprompting)
[![](https://dcbadge.vercel.app/api/server/7enStJXQzD?compact=true&style=flat)](https://discord.gg/7enStJXQzD)
![Website](https://img.shields.io/website?down_message=offline%20%3A%28&up_message=learnprompting.org&url=https%3A%2F%2Flearnprompting.org)


https://learnprompting.org

Ce portail est un guide gratuit et libre accès sur l'ingénierie d'invites. Les contributions sont les bienvenues !
Les critiques acerbes sont également les bienvenues !

## Directives relatives aux contributions

Nous acceptons les contributions sous toutes leurs formes.

Nous recherchons activement :

- Des suggestions de contenu
- Des contributions au contenu et à l'art
- Correction des fautes de frappe :)

## Développement local

Commencez par installer [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) et [node](https://nodejs.org/en/download/).

Assurez-vous que vous utilisez Node 18.0.0 ou une version plus récente (`node -v`). Ensuite, lancez les commandes suivantes dans un terminal :
```
# télécharger le code du site web avec git
git clone https://github.com/trigaten/Learn_Prompting.git
# saisir le répertoire du projet
cd Learn_Prompting
# installer les modules de node
npm i
# exécuter le site web localement
npm start
```

Si vous obtenez une erreur liée à la version de node, vous utilisez probablement une version plus ancien de ce dernier.

Assurez-vous que la version la plus récente apparaît plus haut dans votre arborescence que les versions plus anciennes. 

Alternativement, vous pouvez utiliser [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) pour installer la dernière version de node. Installez nvm, puis procédez comme suit :
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install-latest-npm
```


`npm start` démarre un serveur de développement local et ouvre une fenêtre de navigateur. La plupart des changements sont répercutés en direct sans qu'il soit nécessaire de redémarrer le serveur.

## Merci à tous les contributeurs ❤

 <a href = "https://github.com/trigaten/Learn_Prompting/graphs/contributors">
   <img src = "https://contrib.rocks/image?repo=trigaten/Learn_Prompting"/>
 </a>

## Cite

Utilisez la citation GitHub fournie dans ce dépôt.
