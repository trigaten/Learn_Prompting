---
sidebar_position: 4
---

# 🟢 Few shot prompting

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>

Une autre stratégie de prompting est le _prompting en few-shot_, qui consiste essentiellement à montrer au modèle quelques exemples (appelés "shots" en anglais) de ce que vous voulez qu'il fasse.

Considérons l'exemple ci-dessus, dans lequel nous essayons de classer/classifier les commentaires des clients comme positifs ou négatifs. Nous montrons au modèle 3 exemples de commentaires positifs/négatifs, puis nous lui montrons un nouveau commentaire qui n'a pas encore été classé (`Ça marche pas !:`). Le modèle voit que les 3 premiers exemples ont été classés comme étant `positifs` ou `négatifs`, et utilise ces informations pour classer le nouvel exemple comme `négatif`.

La façon dont nous structurons les exemples est très importante. Étant donné que nous avons structuré ces 3 exemples comme `entrée : classement/classification`, le modèle produit un seul mot après la dernière ligne, au lieu de dire une phrase complète comme `cette critique est positive`.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
Chaque paire entrée-sortie est appelée un _exemple_.
:::

## Plus sur la structure

Un cas d'utilisation clé pour la technique de prompting few-shot est lorsque vous avez besoin que la sortie soit **structurée de manière spécifique** qui est difficile à décrire au modèle. Pour comprendre cela, considérons un exemple pertinent : disons que vous devez compiler les noms et les professions de citoyens célèbres dans les villes voisines en analysant des articles de journaux locaux. Vous aimeriez que le modèle lise chaque article et produise une liste de noms et de professions au format `Nom, Prénom [PROFESSION]`. Pour amener le modèle à faire cela, vous pouvez lui montrer quelques exemples :

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Dans la ville animée de Emerald Hills, un groupe diversifié de personnes a marqué son empreinte. Sarah Martinez, une infirmière dévouée, était connue pour ses soins compatissants à l'hôpital local. David Thompson, un ingénieur logiciel innovant, travaillait sans relâche sur des projets révolutionnaires qui allaient transformer l'industrie technologique. Pendant ce temps, Emily Nakamura, une artiste et muraliste talentueuse, a peint des pièces vibrantes et provocantes qui ont orné les murs des bâtiments et des galeries. Enfin, Michael O'Connell, un entrepreneur ambitieux, a ouvert un café unique et écologique qui est rapidement devenu le lieu de rencontre préféré de la ville. Chacune de ces personnes a contribué à la riche tapisserie de la communauté d'Emerald Hills.\n1. Sarah Martinez [INFIRMIÈRE]\n2. David Thompson [INGÉNIEUR LOGICIEL]\n3. Emily Nakamura [ARTISTE]\n4. Michael O'Connell [ENTREPRENEUR]\n\nAu cœur de la ville, le chef Oliver Hamilton a transformé la scène culinaire avec son restaurant de la ferme à la table, Green Plate. La dédication d'Oliver à la recherche de produits locaux et biologiques a valu à l'établissement des critiques élogieuses de la part des critiques gastronomiques et des habitants.\n\nJuste en bas de la rue, vous trouverez la bibliothèque Riverside Grove, où la bibliothécaire en chef Elizabeth Chen a travaillé avec diligence pour créer un espace accueillant et inclusif pour tous. Ses efforts pour élargir les offres de la bibliothèque et établir des programmes de lecture pour les enfants ont eu un impact significatif sur les taux de littératie de la ville.\n\nEn vous promenant dans la charmante place de la ville, vous serez captivé par les beaux muraux qui ornent les murs. Ces chefs-d'œuvre sont l'œuvre de l'artiste renommée, Isabella Torres, dont le talent pour capturer l'essence de Riverside Grove a donné vie à la ville.\n\nLes réalisations sportives de Riverside Grove méritent également d'être mentionnées, grâce à l'ancien nageur olympique devenu entraîneur, Marcus Jenkins. Marcus a utilisé son expérience et sa passion pour former les jeunes de la ville, menant l'équipe de natation Riverside Grove à plusieurs championnats régionaux.\n1. Oliver Hamilton [CHEF]\n2. Elizabeth Chen [BIBLIOTHÉCAIRE]\n3. Isabella Torres [ARTISTE]\n4. Marcus Jenkins [ENTRAÎNEUR]\n\nOak Valley, une charmante petite ville, abrite un remarquable trio d'individus dont les compétences et le dévouement ont laissé une empreinte durable sur la communauté.\n\nAu marché fermier animé de la ville, vous trouverez Laura Simmons, une passionnée d'agriculture biologique connue pour ses produits délicieux et cultivés de manière durable. Son dévouement à la promotion d'une alimentation saine a inspiré la ville à adopter un mode de vie plus éco-responsable.\n\nDans le centre communautaire d'Oak Valley, Kevin Alvarez, un instructeur de danse expérimenté, a apporté la joie du mouvement à des personnes de tous âges. Ses cours de danse inclusifs ont favorisé un sentiment d'unité et d'expression de soi parmi les résidents, enrichissant la scène artistique locale.\n\nEnfin, Rachel O'Connor, une bénévole infatigable, consacre son temps à diverses initiatives caritatives. Son engagement à améliorer la vie des autres a été essentiel dans la création d'un fort sentiment de communauté à Oak Valley.\n\nGrâce à leurs talents uniques et leur dévouement indéfectible, Laura, Kevin et Rachel se sont inscrits dans le tissu d'Oak Valley, contribuant à créer une petite ville dynamique et prospère." initial-response="1. Laura Simmons [AGRICULTRICE]\n2. Kevin Alvarez [INSTRUCTEUR DE DANSE]\n3. Rachel O'Connor [BÉNÉVOLE]" max-tokens="616" box-rows="20" model-temp="0" top-p="0">
    <noscript>Impossible de charger Dyno Embed : JavaScript doit être activé</noscript>
</div>

En montrant des exemples de format de sortie corrects au modèle, il est capable de produire une sortie correcte pour de nouveaux articles.

:::note
Même si vous pourriez produire cette même sortie en utilisant une instruction prompt à la place, le prompt few-shot aide à rendre la sortie beaucoup plus _cohérente_.
:::

## Variantes de shot prompting (prompting avec des exemples)

Le mot anglais "shot" est synonyme de "exemple". En dehors du prompting à few-shot ("quelques exemples"), il existe deux autres types de prompting par exemple. N'y pensez pas trop ! La seule différence entre ces variantes réside dans le nombre d'exemples que vous montrez au modèle.

Variantes :

- Prompting à 0-shot : aucun exemple n'est montré au modèle.
- Prompting à 1-shot : 1 exemple est montré au modèle.
- Prompting à few-shot : 2 exemples ou plus sont montrés au modèle.

### Prompting à 0-shot

Le prompting à 0-shot est la forme la plus basique du prompting. Il s'agit simplement de montrer au modèle une instruction sans exemple et de lui demander de générer une réponse. Ainsi, tous les prompts de rôle et d'instructions que vous avez vus jusqu'à présent sont des prompts à 0-shot. Un exemple supplémentaire de prompt à 0-shot est :

```text
Ajouter 2+2 :
```

C'est un prompt à 0-shot car nous n'avons montré au modèle aucun exemple complet.

### Prompting à 1-shot

Le prompting 1-shot consiste à montrer au modèle un seul exemple. Par exemple, l'analogie 1-shot du prompt 0-shot `Add 2+2:` est :

```text
Add 3+3 : 6
Add 2+2 :
```

Nous avons montré au modèle un seul exemple complet (`Add 3+3: 6`), donc il s'agit d'un prompt à 1-shot.

### Prompting à few-shot

Le prompting few-shot consiste à montrer au modèle 2 ou plusieurs exemples. Tous les prompts au-dessus de cette section de variantes ont été des prompts few-shot. L'équivalent few-shot des deux prompts ci-dessus est :

```text
Ajouter 3+3 : 6
Ajouter 5+5 : 10
Ajouter 2+2 :
```

Ceci est le cas puisque nous avons montré au modèle au moins 2 exemples complets (`Ajouter 3+3 : 6` et `Ajouter 5+5 : 10`). Habituellement, plus vous montrez d'exemples au modèle, meilleure sera la sortie, donc le prompting few-shot est préférable au prompting à 0-shot ou 1-shot dans la plupart des cas.

## Conclusion

Le prompting few-shot est une technique puissante pour rendre le modèle produire une sortie précise et correctement formatée !
