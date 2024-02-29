---
sidebar_position: 1
---

# 🟢 Introduction

Déterminer le meilleur prompt pour créer une image parfaite est un défi particulier. La recherche sur les méthodes pour y parvenir n'est pas aussi avancée que le prompting textuel. Cela peut être dû aux défis inhérents à la création d'objets qui sont fondamentalement subjectifs et qui manquent souvent de bons indicateurs de précision. Cependant, n'ayez crainte, car la communauté de prompting d'images(@parsons2022dalleprompt) a réalisé de grandes découvertes sur la manière de prompter divers modèles d'image(@rombach2021highresolution)(@ramesh2022hierarchical).

Ce guide couvre les techniques de base de prompting d'image, et nous vous encourageons vivement à consulter les excellentes ressources à la fin de ce chapitre. De plus, nous fournissons un exemple du processus de prompting d'image de bout en bout ci-dessous.

## Exemple

Ici, je vais vous montrer un exemple de la manière dont j'ai créé les images pour la page d'accueil de ce cours. J'avais expérimenté avec le style low poly pour un projet de champ de radiance neuronal d'apprentissage par renforcement profond. J'aimais le style low poly, et je voulais l'utiliser pour les images de ce cours.

Je voulais un astronaute, une fusée et un ordinateur pour les images de la page d'accueil.

J'ai fait beaucoup de recherches sur la création d'images low poly, sur [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) et d'autres sites, mais je n'ai rien trouvé de vraiment utile.

J'ai décidé de commencer avec DALLE et le prompt suivant, pour voir ce qui se passerait.

 <AIInput>Fusée low poly blanche et bleue filant vers la lune devant une prairie verte clairsemée</AIInput>

import rockets1 from '@site/docs/assets/images_chapter/rockets_dalle_1.webp';
import rockets2 from '@site/docs/assets/images_chapter/rockets_dalle_2.webp';
import computer_1 from '@site/docs/assets/images_chapter/computer_dalle_1.webp';
import astronaut_1 from '@site/docs/assets/images_chapter/astronaut_dalle_1.webp';
import astronaut_2 from '@site/docs/assets/images_chapter/astronaut_sd_1.webp';
import rocket_sd_1 from '@site/docs/assets/images_chapter/rocket_sd_1.webp';
import rocket_final from '@site/static/img/rocket.webp';
import laptop_sd_1 from '@site/docs/assets/images_chapter/laptop_sd_1.webp';
import gemstone_sd_1 from '@site/docs/assets/images_chapter/gemstone_sd_1.webp';
import gemstone_sd_2 from '@site/docs/assets/images_chapter/gemstone_sd_2.webp';
import gemstone_sd_3 from '@site/docs/assets/images_chapter/gemstone_sd_3.webp';
import focus_final from '@site/static/img/computer.webp';
import astronaut_final from '@site/static/img/astronaut.webp';

<div style={{textAlign: 'center'}}>
  <img src={rockets1} className="img-docs"  style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rockets2} className="img-docs"  style={{width: "750px"}} />
</div>

Je trouvais ces résultats assez bons pour un premier essai ; j'aimais particulièrement la fusée en bas à gauche.

Ensuite, je voulais un ordinateur dans le même style : <AIInput>Ordinateur low poly blanc et bleu posé dans une prairie verte clairsemée</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={computer_1} className="img-docs"  style={{width: "750px"}} />
</div>

Enfin, il me fallait un astronaute ! Ce prompt semblait faire l'affaire :

<AIInput>Astronaute low poly blanc et bleu assis dans une prairie verte clairsemée avec des montagnes low poly en arrière-plan</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={astronaut_1} style={{width: "750px"}} />
</div>

Je trouvais le deuxième assez correct.

Maintenant, j'avais un astronaute, une fusée et un ordinateur. J'en étais satisfait, alors je les ai mis sur la page d'accueil. Après quelques jours et des commentaires de mes amis, je me suis rendu compte que le style n'était tout simplement pas cohérent 😔.

J'ai fait davantage de recherches sur [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) et j'ai trouvé des gens utilisant le mot isométrique. J'ai décidé d'essayer cela, en utilisant Stable Diffusion au lieu de DALLE. J'ai aussi réalisé que je devais ajouter plus de modificateurs à mon prompt pour contraindre le style. J'ai essayé ce prompt :

<AIInput>Un monde low poly, avec un astronaute en combinaison blanche et visière bleue assis dans une prairie verte clairsemée avec des montagnes low poly en arrière-plan. Très détaillé, isométrique, 4K</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={astronaut_2} style={{width: "250px"}} />
</div>

Ces images n'étaient pas géniales, alors j'ai décidé de commencer par la fusée

<AIInput>Un monde low poly, avec une fusée blanche et bleue décollant d'une prairie verte clairsemée avec des montagnes low poly en arrière-plan. Très détaillé, isométrique, 4K</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={rocket_sd_1} style={{width: "250px"}} />
</div>

Celles-ci n'étaient pas particulièrement bonnes, mais après un peu d'itération ici, je suis arrivé à

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={rocket_final} style={{width: "250px"}} />
</div>

Maintenant, j'avais besoin d'un meilleur ordinateur portable :

<AIInput>Un monde low poly, avec un ordinateur portable blanc et bleu posé dans une prairie verte clairsemée avec des montagnes low poly en arrière-plan. L'écran est complètement bleu. Très détaillé, isométrique, 4K</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={laptop_sd_1} style={{width: "250px"}} />
</div>

J'ai obtenu des résultats incohérents ; j'aimais celui en bas à droite, mais j'ai décidé de prendre une direction différente.

<AIInput>Un monde low poly, avec une gemme blanche et bleue lumineuse posée dans une prairie verte clairsemée avec des montagnes low poly en arrière-plan. Très détaillé, isométrique, 4K</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={gemstone_sd_1} style={{width: "250px"}} />
</div>

Ce n'était pas tout à fait juste. Essayons quelque chose de magique et lumineux.

<AIInput>Un monde low poly, avec une gemme blanche et bleue lumineuse flottant magiquement au milieu de l'écran au-dessus d'une prairie verte clairsemée avec des montagnes low poly en arrière-plan. Très détaillé, isométrique, 4K</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={gemstone_sd_2} style={{width: "250px"}} />
</div>

Ces images me plaisaient, mais je voulais la pierre au milieu de l'écran.

<AIInput>Un monde low poly, avec une gemme bleue lumineuse flottant magiquement au milieu de l'écran au-dessus d'une prairie verte clairsemée avec des montagnes low poly en arrière-plan. Très détaillé, isométrique, 4K</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={gemstone_sd_3} style={{width: "250px"}} />
</div>

À peu près à ce moment-là, j'ai utilisé la capacité de SD à influencer les images futures à partir d'images précédentes. Et ainsi, je suis arrivé à :

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs"  src={focus_final} style={{width: "250px"}} />
</div>

Enfin, je suis passé à l'astronaute.

<AIInput>Un monde low poly, avec un astronaute en combinaison blanche et visière bleue assis dans une prairie verte clairsemée avec des montagnes low poly en arrière-plan. Très détaillé, isométrique, 4K</AIInput>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage className="img-docs" src={astronaut_final} style={{width: "250px"}} />
</div>

À ce stade, j'étais suffisamment satisfait de la cohérence de style entre mes trois images pour les utiliser sur le site web. Les principales leçons pour moi étaient que c'était un processus très itératif, nécessitant beaucoup de recherche, et j'ai dû modifier mes attentes et idées en expérimentant avec différents prompts et modèles.