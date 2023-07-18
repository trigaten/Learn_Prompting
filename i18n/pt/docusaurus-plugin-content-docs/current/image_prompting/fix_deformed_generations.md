---
sidebar_position: 90
---
# 🟢 Consertando Deformações

Deformações em geração de imagens, particularmente em partes do corpo humano (e.g. mãos, pés), são um problema comum em muitos modelos. Isso pode ser tratado até certo ponto com bons prompts negativos (@blake2022with). O seguinte exemplo é adaptado deste post do Reddit (https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/).

## Exemplo

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.webp';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.webp';

Usando o Stable Diffusion v1.5 e o seguinte prompt, geramos uma imagem legal do Brad Pitt, com exceção das mãos, é claro!

`retrato médio do Brad Pitt, acenando com as mãos, detalhado, filme, iluminação de estúdio, lente de 90mm, por Martin Schoeller:6`

<div style={{textAlign: 'center'}}>
  <img src={bad_pitt} style={{width: "250px"}} />
</div>

Usando um prompt robusto e negativo, podemos gerar mãos muito mais convincentes.

`retrato médio do Brad Pitt acenando com as mãos, detalhado, filme, iluminação de estúdio, lente de 90mm, por Martin Schoeller:6 | desfigurado, membros deformados, borrado, granulado, quebrado, olho de pombo, morto-vivo, photoshopped, sobreexposto, subexposto, baixa resolução, má anatomia, mãos ruins, dedos a mais, dedos a menos, dedo ruim, orelha ruim, olho ruim, rosto ruim, cortado: -5`
<div style={{textAlign: 'center'}}>
  <img src={good_pitt} style={{width: "250px"}} />
</div>

Usando um prompt semelhante, também é possível ajudar com outras partes do corpo. Infelizmente, essa técnica não é consistente, então você pode precisar de tentar várias gerações antes de obter um bom resultado.
No futuro, esse tipo de promessa não será necessário, pois os modelos melhorarão. No entanto, atualmente é uma técnica muito útil.

# Notas

Modelos melhorados, como o [Protogen](https://civitai.com/models/3666/protogen-x34-official-release) são geralmente melhores com mãos, pés, etc.