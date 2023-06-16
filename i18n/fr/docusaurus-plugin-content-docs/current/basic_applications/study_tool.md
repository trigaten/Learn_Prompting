---
sidebar_position: 30
---

# 🟢 Ami de révisions

Un de nos moyens préférés d'utiliser les LLMs est comme outil d'étude ! En particulier, il est utile pour expliquer des termes confus ainsi que pour vous interroger sur le contenu des tests.

## Explication des termes

J'ai récemment lu un manuel sur les Cactus(@nobel2002cacti), et j'ai vu ce passage :

```text
Because of adaptations to xeric conditions and the presence of **less derived woods** in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically.
```

Je ne savais pas ce que signifiait **less derived woods**, et Google n'a montré que des articles de recherche à ce sujet. J'ai décidé d'utiliser ChatGPT pour savoir ce que cela signifiait. Je lui ai donné le prompt suivant, qui est simplement le passage du livre et ma question.

```text
Because of adaptations to xeric conditions and the presence of less derived woods in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically.

Que veut dire "less derived woods" ?

// highlight-start
Dans ce contexte, "les bois moins dérivés" font référence à la forme ancestrale ou primitive de bois trouvée dans l'évolution précoce des plantes. Ces bois manquent de structures et de caractéristiques spécialisées qui ont évolué plus tard chez les plantes plus dérivées ou avancées. Dans la sous-famille Pereskioideae de la famille Cactaceae, le bois est moins dérivé par rapport à d'autres sous-familles et est plus similaire au bois trouvé dans les plantes non-cactus. Le bois moins dérivé dans Pereskioideae est considéré comme une adaptation aux environnements plus humides et moins xériques dans lesquels ces plantes poussent par rapport à d'autres cactus.
//highlight-end
```

Le modèle a été en mesure de répondre rapidement à ma question et j'ai pu continuer ma lecture.

## Auto-interrogation

Une autre façon d'utiliser les LLMs comme outil d'étude est de s'interroger soi-même. Si vous avez un test de calcul à venir, vous pourriez simplement demander :

```text
Génère 5 questions d'interrogation de calcul I pour moi :

// highlight-start
1. Quelle est la dérivée de y = x3 ?
2. Évaluez l'intégrale indéfinie de x3 + 5x2 + 7x + 4.
3. Quelle est la règle du produit pour les dérivées ?
4. Trouvez l'équation de la tangente à y = x2 au point (4, 16).
5. Quelle est la deuxième dérivée de y = x4 ?
//highlight-end
```

Si vous étudiez un sujet plus spécifique, vous devrez peut-être donner des informations supplémentaires au modèle, par exemple vos notes de cours !

```text
3/20/2020 2:30 PM

Notes de cours de marketing

- Discussion des 4 P du marketing : Produit, Prix, Place, Promotion
- Différence entre B2C et B2B : B2C est le marché direct au consommateur, B2B est le business to business
- Différents types de recherche de marché : quantitative et qualitative, tels que des enquêtes et des groupes de discussion
- Stratégies de tarification : Skimming, Penetration, Competition, et Value
- Segmentation : segmentation de la base de clients par l'âge, le revenu, etc.
- 4 types de segmentation : Démographique, Géographique, Psychographique et Comportementale
- Discussion des différents outils promotionnels : Publicité, Vente personnelle, Relations publiques, Marketing direct, et promotions des ventes

Génère 5 questions d'interrogation marketing pour moi basées sur mes notes :

// highlight-start
1. Quels sont les 4 P du marketing ?
2. Quelle est la différence entre B2C et B2B ?
3. Quels sont les deux types de recherche de marché ?
4. Quels sont les 4 types de segmentation ?
5. Nommez 5 outils promotionnels.
//highlight-end
```

## Conclusion

Il y a probablement d'autres façons d'utiliser les LLMs pour étudier. De nombreuses entreprises d'apprentissage comme Duolingo et Quizlet intègrent des LLMs dans leurs produits.
