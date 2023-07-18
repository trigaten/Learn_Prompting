---
sidebar_position: 4
---

# 🟢 Modificadores de Estilo

Os modificadores de estilo são simples descritores que produzem de forma consistente certos estilos (por exemplo, 'tinta vermelha', 'feito de vidro', 'renderizado em Unity')(@oppenlaender2022taxonomy). Eles podem ser combinados para produzirem estilos ainda mais específicos. Eles podem "incluir informações sobre períodos, escolas e estilos de arte, mas também materiais e meios de arte, técnicas e artistas"(@oppenlaender2022taxonomy).

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import red_pyramids from '@site/docs/assets/images_chapter/red_pyramids.webp';

# Exemplo

Aqui estão algumas pirâmides geradas pelo DALLE, com o comando `pirâmide`.

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}} />
</div>

Aqui estão algumas pirâmides geradas pelo DALLE, com o comando `Uma pirâmide feita de vidro, renderizada em Unity e tinta vermelha`, que usa 3 modificadores de estilo.

<div style={{textAlign: 'center'}}>
  <img src={red_pyramids} style={{width: "750px"}} />
</div>

Aqui está uma lista de alguns modificadores de estilo úteis:

```text
fotorealista, por Greg Rutkowski, por Christopher Nolan, pintura, pintura digital, arte de conceito, renderização Octane, lente grande angular, renderização 3D, iluminação cinematográfica, tendência no ArtStation, tendência no CGSociety, hiper realista, foto, luz natural, grãos de filme
```

## Notas

Oppenlaender et al.(@oppenlaender2022taxonomy) descrevem o descritor `renderizado em ...` como um booster de qualidade, mas nossa definição de trabalho difere, já que esse modificador gera de forma consistente o estilo específico do Unity (ou outro mecanismo de renderização). Com isso, chamaremos esse descritor de modificador de estilo.