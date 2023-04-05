---
sidebar_position: 4
---

# 🟢 Le "Few shot prompting"

import FewShot from '../assets/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>

Une autre stratégie de prompting est le *few shot prompting*, qui consiste simplement à montrer au modèle quelques exemples (appelés shots) de ce que vous voulez qu'il fasse.

Prenons l'exemple ci-dessus, où nous essayons de classer les retours des clients en positifs ou négatifs. Nous montrons au modèle 3 exemples de retours positifs/négatifs, puis nous lui montrons un nouveau retour qui n'a pas encore été classé (`It doesnt work!:`). Le modèle voit que les 3 premiers exemples ont été classés comme `positive` ou `negative`, et utilise cette information pour classer le nouvel exemple comme `negative`.

La manière dont nous structurons les exemples est très importante. Puisque nous avons structuré ces 3 exemples comme `input: classification`, le modèle produit un seul mot après la dernière ligne, au lieu de dire une phrase complète comme `this review is positive`.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Great product, 10/10: positive\nDidn't work very well: negative\nSuper helpful, worth it: positive\nIt doesnt work!:" initial-response="negative" max-tokens="256" box-rows="5" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

:::note
Chaque paire entrée-sortie (input-output) est appelée un *exemplaire*.
:::

## Plus sur la structure

Un cas d'utilisation clé pour le few shot prompting est lorsque vous avez besoin que la sortie soit **structurée d'une manière spécifique**  qui est difficile à décrire au modèle. Pour comprendre cela, prenons un exemple pertinent : disons que vous devez compiler les noms et les professions de citoyens bien connus dans les villes voisines en analysant les articles de journaux locaux. Vous aimeriez que le modèle lise chaque article et produise une liste de noms et de professions au format `Last, First [OCCUPATION]`. Pour amener le modèle à faire cela, vous pouvez lui montrer quelques exemples.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="In the bustling town of Emerald Hills, a diverse group of individuals made their mark. Sarah Martinez, a dedicated nurse, was known for her compassionate care at the local hospital. David Thompson, an innovative software engineer, worked tirelessly on groundbreaking projects that would revolutionize the tech industry. Meanwhile, Emily Nakamura, a talented artist and muralist, painted vibrant and thought-provoking pieces that adorned the walls of buildings and galleries alike. Lastly, Michael O'Connell, an ambitious entrepreneur, opened a unique, eco-friendly cafe that quickly became the town's favorite meeting spot. Each of these individuals contributed to the rich tapestry of the Emerald Hills community.\n1. Sarah Martinez [NURSE]\n2. David Thompson [SOFTWARE ENGINEER]\n3. Emily Nakamura [ARTIST]\n4. Michael O'Connell [ENTREPRENEUR]\n\nAt the heart of the town, Chef Oliver Hamilton has transformed the culinary scene with his farm-to-table restaurant, Green Plate. Oliver's dedication to sourcing local, organic ingredients has earned the establishment rave reviews from food critics and locals alike.\n\nJust down the street, you'll find the Riverside Grove Library, where head librarian Elizabeth Chen has worked diligently to create a welcoming and inclusive space for all. Her efforts to expand the library's offerings and establish reading programs for children have had a significant impact on the town's literacy rates.\n\nAs you stroll through the charming town square, you'll be captivated by the beautiful murals adorning the walls. These masterpieces are the work of renowned artist, Isabella Torres, whose talent for capturing the essence of Riverside Grove has brought the town to life.\n\nRiverside Grove's athletic achievements are also worth noting, thanks to former Olympic swimmer-turned-coach, Marcus Jenkins. Marcus has used his experience and passion to train the town's youth, leading the Riverside Grove Swim Team to several regional championships.\n1. Oliver Hamilton [CHEF]\n2. Elizabeth Chen [LIBRARIAN]\n3. Isabella Torres [ARTIST]\n4. Marcus Jenkins [COACH]\n\nOak Valley, a charming small town, is home to a remarkable trio of individuals whose skills and dedication have left a lasting impact on the community.\n\nAt the town's bustling farmer's market, you'll find Laura Simmons, a passionate organic farmer known for her delicious and sustainably grown produce. Her dedication to promoting healthy eating has inspired the town to embrace a more eco-conscious lifestyle.\n\nIn Oak Valley's community center, Kevin Alvarez, a skilled dance instructor, has brought the joy of movement to people of all ages. His inclusive dance classes have fostered a sense of unity and self-expression among residents, enriching the local arts scene.\n\nLastly, Rachel O'Connor, a tireless volunteer, dedicates her time to various charitable initiatives. Her commitment to improving the lives of others has been instrumental in creating a strong sense of community within Oak Valley.\n\nThrough their unique talents and unwavering dedication, Laura, Kevin, and Rachel have woven themselves into the fabric of Oak Valley, helping to create a vibrant and thriving small town." initial-response="1. Laura Simmons [FARMER]\n2. Kevin Alvarez [DANCE INSTRUCTOR]\n3. Rachel O'Connor [VOLUNTEER]" max-tokens="616" box-rows="20" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

En montrant au modèle des exemples du format de sortie correct, il est capable de produire la sortie correcte pour les nouveaux articles.

:::note
Bien que vous puissiez obtenir cette même sortie en utilisant un prompt d'instruction à la place, le prompt few shot aide à ce que la sortie soit beaucoup plus cohérente:::


## Variantes dans la famille du shot prompting

Le mot "shot" est synonyme de "example". En dehors du few-shot prompting, il existe deux autres types de shot prompting. Ne vous laissez pas impressionner ! La seule différence entre ces variantes est le nombre d'exemples que vous montrez au modèle.

Variantes :
- 0 shot prompting : aucun exemple n'est montré au modèle
- 1 shot prompting : 1 exemple est montré au modèle
- few shot prompting : 2+ exemples sont montrés au modèle


### 0-shot prompting

Le 0-shot prompting est la forme la plus basique du prompting. Il s'agit simplement de montrer au modèle un prompt sans exemples et de lui demander de générer une réponse. Ainsi, toutes les instructions et les role prompts que vous avez vus jusqu'à présent sont des 0-shot prompts. Un autre exemple de 0-shot prompt est :

```text
Add 2+2:
```

Il s'agit d'un 0-shot prompting car nous n'avons montré aucun exemple complet au modèle.

### 1-shot prompting

Le 1-shot prompting consiste à montrer au modèle un seul exemple. Par exemple, l'analogue 1-shot du 0-shot prompt `Add 2+2:` est :
  
```text
Add 3+3: 6
Add 2+2:
```

Nous avons montré au modèle seulement 1 exemple complet (`Add 3+3: 6`), donc il s'agit d'un 1-shot prompting.

### Few-shot prompting

Le few-shot prompting correspond à la situation dans laquelle vous montrez au modèle 2 exemples ou plus. Tous les prompts au-dessus de cette section de variantes ont été des few-shot prompts. L'analogue few-shot des deux prompts ci-dessus est :

```text
Add 3+3: 6
Add 5+5: 10
Add 2+2:
```

Il s'agit d'un few-shot prompting puisque nous avons montré au modèle au moins 2 exemples complets (`Add 3+3: 6` et `Add 5+5: 10`). Habituellement, plus vous montrez d'exemples au modèle, meilleure sera la sortie, donc le few-shot prompting est préféré au 0-shot et 1-shot prompting dans la plupart des cas.

## Conclusion

Le few shot prompting est une technique puissante pour amener le modèle à produire des résultats précis et correctement formatés !
 
