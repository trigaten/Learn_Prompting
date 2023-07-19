---
sidebar_position: 7
---

# 🟢 O que há em um Prompt?

Nas páginas anteriores, passamos por algumas estratégias de prompt diferentes. Esta página oferecerá alguns conselhos gerais sobre o que é realmente importante em um prompt.


## "A Verdade Fundamental Tem Pouca Importância"


Surpreendentemente, ao fornecer %%exemplos|exemplars%% em um prompt, as respostas reais (%%gold|gold_labels%%) nos exemplos não são importantes. Como mostrado na figura abaixo, fornecer %%rótulos aleatórios (random labels)|labels%%  nos exemplos praticamente não afeta o seu desempenho (@min2022rethinking). "Demo" é sinônimo de exemplar/exemplo na imagem abaixo.

import GoldUn from '@site/docs/assets/intermediate/gold_unimportant.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={GoldUn} style={{width: "750px"}} />
</div>

## O Espaço de Rótulos (ou Categorias) (labelspace) importam!

Embora os rótulos ou respostas corretas nos exemplos não sejam importantes, o espaço de rótulos ou categorias é %%(labelspace)|labelspace%%. Mesmo quando você fornece rótulos aleatórios da categoria no seu exemplo, ainda assim isso ajuda o LLM a entender melhor as categorias e a melhorar os resultados. Além disso, é importante representar adequadamente a distribuição das categorias nos exemplos. A melhor prática nesse caso seria detalhar a amostra de acordo com a verdadeira distribuição dos rótulos.

## O Formato Importa

Talvez a parte mais importante dos exemplos seja a forma como são formatados. Essa formatação instrui o LLM sobre como formatar corretamente a resposta em relação a sua solicitação.

Considere os exemplos abaixo. Eles usam palavras em letras maiúsculas como respostas. Embora as respostas estejam completamente erradas (2 + 2 não é 50), o GPT-3 responde corretamente à última pergunta e segue o formato dos exemplos.

```text
Quanto é 2+2? 
Quanto is 20+5?
Quanto is 12+9?
// highlight-start VINTE E TRÊS
// highlight-end
```

## Notas

Entre 4 e 8 exemplares é um bom número para usar em prompts de few-shot(@min2022rethinking), mas muitas vezes pode ser útil colocar o maior número de exemplares possível.
