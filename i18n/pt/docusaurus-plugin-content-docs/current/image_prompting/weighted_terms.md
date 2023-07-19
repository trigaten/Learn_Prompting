---
sidebar_position: 60
---

# 🟢 Ponderando termos

Alguns modelos (Stable Diffusion, Midjourney, etc.) permitem que você dê pesos diferentes para diferentes termos em um prompt. Isso pode ser usado para enfatizar certas palavras ou frases na imagem gerada. Também pode ser usado para desenfatizar certas palavras ou frases na imagem gerada. Vamos considerar um exemplo simples:

import mountains from '@site/docs/assets/images_chapter/mountains.webp';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.webp';
import planets from '@site/docs/assets/images_chapter/planets.webp';

# Exemplo

Aqui estão algumas montanhas geradas pelo Stable Diffusion, com o prompt `montanha`.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains} style={{width: "350px"}} />
</div>

No entanto, se quisermos montanhas sem árvores, podemos usar o prompt `montanha | árvore:-10`. Como pesamos a árvore muito negativamente, elas não aparecem na imagem gerada.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains_no_trees} style={{width: "350px"}} />
</div>

Os termos ponderados podem ser combinados em prompts mais complicados, como 
`Um planeta no espaço:10 | cheio de cores vermelho, azul e roxo:4 | alienígenas:-10 | 4K, alta qualidade`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planets} style={{width: "350px"}} />
</div>

## Notas

Leia mais sobre ponderar em alguns dos recursos no final deste capítulo.