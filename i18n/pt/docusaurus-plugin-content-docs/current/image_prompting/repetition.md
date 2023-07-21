---
sidebar_position: 50
---

# 🟢 Repetição

Repetir a mesma palavra em um prompt ou frases semelhantes pode fazer com que o modelo enfatize essa palavra na imagem gerada (@oppenlaender2022taxonomy). Por exemplo, o que o [@Phillip Isola](https://twitter.com/phillip_isola/status/1532189632217112577) gerou com o DALLE:

import bad_water from '@site/docs/assets/images_chapter/bad_water.webp';
import good_water from '@site/docs/assets/images_chapter/good_water.webp';
import planet from '@site/docs/assets/images_chapter/planet.webp';
import planet_aliens from '@site/docs/assets/images_chapter/planet_aliens.webp';


`Uma linda pintura de uma montanha ao lado de uma cachoeira.`.

<div style={{textAlign: 'center'}}>
  <img src={bad_water} style={{width: "750px"}}/>
</div>

`Uma linda pintura muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito bonita de uma montanha ao lado de uma cachoeira.`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_water} style={{width: "750px"}} />
</div>

A ênfase na palavra "muito" parece melhorar a qualidade da geração! A repetição também pode ser usada para enfatizar termos específicos. Por exemplo, se você quiser gerar uma imagem de um planeta com aliens, usar o prompt `Um planeta com aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens` fará com que seja mais provável que os aliens estejam na imagem gerada. As seguintes imagens foram feitas com Stable Diffusion.

``
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet} style={{width: "250px"}} />
</div>

`Um planeta com aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planet_aliens} style={{width: "250px"}} />
</div>

## Notas

Este método não é perfeito e, na maioria das vezes, usar pesos (próximo artigo) é uma opção melhor.