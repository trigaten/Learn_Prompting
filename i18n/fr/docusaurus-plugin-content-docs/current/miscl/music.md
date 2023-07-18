---
sidebar_position: 3
---

# 🟢 Génération musicale

Les modèles de génération musicale sont de plus en plus populaires et finiront par avoir un impact important sur l'industrie de la musique.

Les modèles de génération musicale peuvent créer des progressions d'accords, des mélodies ou des chansons complètes. Ils peuvent structurer et créer de la musique dans des genres spécifiques et composer ou improviser dans le style d'artistes particuliers.

Cependant, malgré l'énorme potentiel des modèles musicaux, ils sont actuellement difficiles à guider. La sortie générée n'est souvent pas entièrement personnalisable par des invites, contrairement aux modèles de génération d'images ou de textes.

## Riffusion
import riffusion from '@site/docs/assets/miscl/riffusion_phonk.webp';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}} />
</div>

Riffusion(@Forsgren_Martiros_2022), une version affinée de Stable Diffusion, peut être contrôlée à l'aide d'invites pour générer des instruments et des pseudo styles, mais elle dispose d'un nombre limité de battements.

## Mubert

[Mubert](https://mubert.com/) semble interpréter les invites par le biais d'une analyse des sentiments qui associe une stylistique musicale appropriée à l'invite (il n'est pas possible de contrôler les paramètres musicaux en détail via les invites). La part de l'IA dans la génération du résultat n'est pas claire.

## Autre

Il y a des tentatives d'utiliser GPT-3 comme un outil de Text-2-Music avec des invites réelles pour les éléments musicaux au "micro-niveau" des notes (au lieu des analogies de style d'invite plutôt vagues que produisent Mubert et Riffusion). However, at present those attempts are limited to single instruments.

Other approaches include a model chain that [converts any image into sound that represents it](https://huggingface.co/spaces/fffiloni/img-to-music) and prompting ChatGPT to generate code for [Python libraries that create sound](https://twitter.com/teropa/status/1598713756074246145).

## Notes

Music prompting is not well built out... yet. MusicLM looks promising, but it is not yet available to the public.
