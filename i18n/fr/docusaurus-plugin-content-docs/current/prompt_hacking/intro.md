---
sidebar_position: 0
---



# 🟢 Introduction

import Lock from '@site/static/img/lock.webp';

<div style={{textAlign: 'center'}}>
  <img src={Lock} style={{width:"30%"}}/>

</div>


Le piratage de prompt (prompt hacking) est un terme utilisé pour décrire un type d'attaque qui exploite les vulnérabilités des %%LLMs|LLM%%, en manipulant leurs entrées ou prompts. Contrairement au piratage traditionnel, qui exploite généralement les vulnérabilités logicielles, le piratage de prompt repose sur la création soignée de prompts pour tromper le LLM et le faire réaliser des actions non intentionnelles.

Nous aborderons trois types de piratage de prompt : l'injection de prompt, la fuite de prompt et le jailbreaking. L'injection de prompt (prompt injection) implique l'ajout de contenu malveillant ou non intentionné à un prompt pour détourner la sortie du modèle de langage. La fuite de prompt (prompt leaking) et le jailbreaking sont effectivement des sous-ensembles de cela : La fuite de prompt implique l'extraction d'informations sensibles ou confidentielles des réponses du LLM, tandis que le jailbreaking implique de contourner les fonctionnalités de sécurité et de modération. Nous discuterons également de techniques offensives spécifiques ainsi que de techniques défensives.

Pour se protéger contre le piratage de prompt, des mesures défensives doivent être prises. Celles-ci incluent la mise en œuvre de défenses basées sur les prompts, une surveillance régulière du comportement et des sorties du LLM pour détecter toute activité inhabituelle, et l'utilisation de l'ajustement fin ou d'autres techniques. Dans l'ensemble, le piratage de prompt est une préoccupation croissante pour la sécurité des LLMs, et il est essentiel de rester vigilant et de prendre des mesures proactives pour se protéger contre ces types d'attaques.
