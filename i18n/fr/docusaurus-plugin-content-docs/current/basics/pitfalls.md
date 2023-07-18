---
sidebar_position: 90
---

# 🟢 Pièges des LLM

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Les LLM sont extrêmement puissants, mais ils ne sont en aucun cas parfaits. Il existe de nombreux pièges dont vous devez être conscient lors de leur utilisation.

## Citer des sources

Les LLM ne peuvent pour la plupart **pas citer de manière précise les sources**. Cela est dû au fait qu'ils n'ont pas accès à Internet et ne se souviennent pas exactement d'où viennent leurs informations. Ils génèrent souvent des sources qui semblent bonnes, mais qui sont entièrement inexactes.

:::note
Des stratégies comme les LLM augmentés par la recherche (LLM qui peuvent rechercher sur Internet et d'autres sources) peuvent souvent résoudre ce problème.

## Bias

Les LLM sont souvent biaisés en faveur de la génération de réponses stéréotypées. Même avec des gardes en place, ils diront parfois des choses sexistes/racistes/homophobes. Soyez prudent lorsque vous utilisez des LLM dans des applications destinées aux consommateurs et soyez également prudent lorsque vous les utilisez dans la recherche (ils peuvent générer des résultats biaisés).

## Hallucinations

Les LLM génèrent fréquemment des faussetés lorsqu'on leur pose une question à laquelle ils ne connaissent pas la réponse. Parfois, ils indiqueront qu'ils ne connaissent pas la réponse, mais la plupart du temps, ils donneront avec confiance une réponse fausse.

## Mathématiques

Les LLM sont souvent mauvais en mathématiques. Ils ont des difficultés à résoudre des problèmes mathématiques simples et sont souvent incapables de résoudre des problèmes mathématiques plus complexes.

:::note
Ce problème peut être résolu dans une certaine mesure en utilisant un [LLM augmenté d'outils](https://learnprompting.org/docs/advanced_applications/mrkl).
:::

## Prompt Hacking

Les utilisateurs peuvent souvent tromper les LLM pour générer n'importe quel contenu qu'ils veulent. En savoir plus à ce sujet [ici](https://learnprompting.org/docs/category/-prompt-hacking).