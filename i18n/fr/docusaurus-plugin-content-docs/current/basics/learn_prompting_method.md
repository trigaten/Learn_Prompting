---
sidebar_position: 1000
---

# 🟢 Learn Prompting Method

:::takeaways
- Apprenez notre méthode pour l'IA générative (genAI) ou le Prompt Engineering
- Appliquez-la à une étude de cas
:::

La "Learn Prompting Method" (la méthode d'apprentissage du prompting) pour résoudre des problèmes avec l'IA générative est un cadre pour résoudre des problèmes dans l'espace de l'IA générative. Elle vous aide à décider si l'IA générative est la bonne solution, comment appliquer le Prompt Engineering, quels outils choisir, et plus encore.
Nous allons parcourir chacune des cinq étapes, puis fournir une étude de cas utilisant cette méthode.

## Les cinq étapes

### 1. Spécifiez votre problème

La première étape de la méthode d'apprentissage du prompting consiste à spécifier votre problème. Cela implique d'articuler clairement le problème auquel vous faites face, sans sauter aux solutions potentielles. Par exemple, "Nos clients ont des questions sur les fonctionnalités de notre produit qui doivent être abordées, car nous passons à côté de potentielles affaires".

### 2. Examinez les informations pertinentes

Après avoir défini votre problème, l'étape suivante consiste à examiner les informations pertinentes. Cela pourrait inclure la recherche de problèmes similaires et de leurs solutions, l'étude du contexte de votre problème ou l'analyse des données liées à votre problème. Cela inclut également la recherche de prompts pertinents et d'[outils d'IA générative](https://learnprompting.org/docs/category/-tooling). Cette étape est cruciale pour comprendre les nuances de votre problème et pour identifier les approches potentielles pour le résoudre. À ce stade, vous devriez savoir si l'IA générative convient à votre problème.

### 3. Proposez une solution

Une fois que vous avez examiné les informations pertinentes, vous devriez avoir une idée plus claire de la manière d'aborder votre problème. Il est maintenant temps de proposer une solution. Cela pourrait être un prompt, un nouvel outil ou une nouvelle façon d'utiliser un outil actuel. La solution doit être directement liée au problème que vous avez défini et aux informations que vous avez examinées.

### 4. Ajustez la solution

Une fois que vous avez choisi une solution, qui pourrait être un prompt ou un outil, l'étape suivante consiste à l'ajuster en fonction des commentaires et des tests. Cela pourrait impliquer de mettre en place des tests pour voir comment les utilisateurs interagissent avec le prompt, de recueillir des commentaires des utilisateurs, ou de faire des ajustements basés sur votre propre intuition et expertise. C'est là que le Prompt Engineering entre en jeu !

### 5. Lancez votre solution

La dernière étape de la méthode d'apprentissage du prompting consiste à lancer votre solution. Cela pourrait impliquer de l'intégrer dans votre produit, de la publier sur une plateforme, ou simplement de commencer à l'utiliser dans vos interactions avec les utilisateurs.

La méthode d'apprentissage du prompting est un cycle, et non un processus linéaire. Après avoir lancé votre solution, vous devriez continuer à surveiller ses performances et à faire des ajustements au besoin. Vous pouvez utiliser l'acronyme SEPAL pour vous souvenir de ces étapes !

## Étude de cas : Utilisation de la Learn Prompting Method pour créer un bot d'informations sur les chapeaux

Examinons une étude de cas sur la manière dont la méthode d'apprentissage du prompting pourrait être utilisée pour créer un chatbot à partir de zéro. Dans ce cas, nous avons une collection de questions d'utilisateurs sur les chapeaux.

1. **Spécifiez votre problème :** Nous avons un grand volume de questions d'utilisateurs sur de différents types de chapeaux, leur histoire et comment les porter. Nous devons faire quelque chose à ce sujet car nous perdons des affaires potentielles.

2. **Examinez les informations pertinentes :** Nous analysons les questions des utilisateurs que nous avons collectées. Nous remarquons que les questions les plus courantes concernent l'histoire de types spécifiques de chapeaux, comment les porter correctement et comment en prendre soin. Nous examinons également les chatbots existants, en étudiant leur longueur de contexte, leur prix et leur rapidité, ainsi que les outils d'IA générative qui pourraient potentiellement nous aider à résoudre notre problème.

3. **Proposez une solution :** Sur la base de notre analyse, nous décidons de créer un chatbot en utilisant ChatGPT qui peut répondre à ces trois types de questions. Nous rédigeons un prompt initial :

<AIInput>
Vous êtes un historien de chapeau compétent qui a étudié l'histoire, les styles et les manières appropriées de porter de divers types de chapeaux. Un utilisateur vous pose une question sur les chapeaux. Répondez à leur requête de manière utile et informative : USER_INPUT
</AIInput>

4. **Ajustez la solution :** Nous testons nos prompts initiaux avec un petit groupe d'utilisateurs et recueillons leurs commentaires. Sur la base de leurs commentaires, nous réalisons que nos prompts doivent être plus engageants et moins formels.

Nous ajustons nos prompts en conséquence :

<AIInput>
Vous êtes un passionné de chapeaux avec une connaissance approfondie de l'histoire, des styles et de l'étiquette du port de différents types de chapeaux. Un utilisateur est curieux des chapeaux et vous pose une question. Répondez à leur requête de manière amicale et informative."
</AIInput>

Nous faisons encore plus de tests avec les utilisateurs et réalisons que nous devons segmenter notre marché : les personnes intéressées par l'histoire des chapeaux préfèrent une approche plus formelle, tandis que celles intéressées par le style et le port du chapeau préféreraient un bot plus informel. Nous développons un prompt de routage initial qui décide quel type d'utilisateur ils sont en fonction de leur question :

<AIInput>
"Vous êtes une IA qui comprend les nuances des requêtes liées aux chapeaux. En fonction de la question de l'utilisateur, déterminez s'ils sont plus intéressés par l'histoire formelle des chapeaux ou par le style et le port informels des chapeaux. Répondez par 'Formel' pour les requêtes liées à l'histoire et par 'Informel' pour les requêtes liées au style et au port."
</AIInput>

Nous utilisons un [outil](https://learnprompting.org/docs/category/-tooling) comme Langchain, Voiceflow ou Dust pour connecter le prompt de routage aux deux autres.

5. **Lancez votre solution :** Nous lançons le chatbot sur notre site web. Nous continuons à surveiller les interactions des utilisateurs avec le bot et à apporter d'autres ajustements au besoin.

En suivant la méthode d'apprentissage du prompting, nous avons pu créer un chatbot qui répond efficacement aux questions des utilisateurs sur les chapeaux. Ce processus met en évidence l'importance de comprendre les besoins des utilisateurs, de tester et d'ajuster les solutions, et d'améliorer continuellement en fonction des commentaires des utilisateurs.
