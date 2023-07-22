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

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

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
