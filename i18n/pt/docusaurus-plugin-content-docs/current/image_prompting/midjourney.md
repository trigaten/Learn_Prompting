---
sidebar_position: 99
---
# 🟢 Midjourney

[Midjourney](https://www.midjourney.com) é um gerador de imagens baseado em IA que opera através de uma interface de bot do Discord, bem como uma aplicação web (uma versão API de Midjourney está planejada). O processo para gerar imagens com Midjourney segue os mesmos princípios fundamentais de outros geradores de imagens de IA, incluindo o uso de prompts para guiar o processo de geração.

Um dos recursos únicos de Midjourney em comparação com outros geradores de imagens de IA é a sua capacidade de criar imagens visualmente atraentes e artisticamente compostas. Isso é atribuído ao treinamento especializado do modelo, que permite que ele produza imagens de alta qualidade com parâmetros artísticos específicos (saiba mais sobre isso em "Prompts Avançados" > "Parâmetros").

Você pode experimentar o Bot Midjourney no [Learn Prompting Discord](http://learnprompting.org/discord) ou no [servidor oficial do Discord Midjourney](https://discord.gg/midjourney).

import midjourney_astronaut from '@site/docs/assets/images_chapter/midjourney_astronaut.webp';
import midjourney_astronaut_params from '@site/docs/assets/images_chapter/midjourney_astronaut_params.webp';
import midjourney_astronaut_multi1 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi1.webp';
import midjourney_astronaut_multi2 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi2.webp';
import midjourney_astronaut_ip2 from '@site/docs/assets/images_chapter/midjourney_astronaut_ip2.webp';

import midjourney_astronaut_params_a12 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a12.webp';
import midjourney_astronaut_params_a169 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a169.webp';

import midjourney_astronaut_params_c20 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c20.webp';
import midjourney_astronaut_params_c80 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c80.webp';

import midjourney_astronaut_params_q05 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q05.webp';
import midjourney_astronaut_params_q2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q2.webp';

import midjourney_astronaut_params_s50 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s50.webp';
import midjourney_astronaut_params_s900 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s900.webp';

import midjourney_astronaut_params_sameseed from '@site/docs/assets/images_chapter/midjourney_astronaut_params_sameseed.webp';
import midjourney_astronaut_params_seed123 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_seed123.webp';

import midjourney_astronaut_params_tile from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tile.webp';
import midjourney_astronaut_params_tilegrid from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilegrid.webp';
import midjourney_astronaut_params_tilecomplete from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilecomplete.webp';

import midjourney_astronaut_params_v1 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v1.webp';
import midjourney_astronaut_params_v2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v2.webp';
import midjourney_astronaut_params_v3 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v3.webp';


# Uso Básico

A anatomia básica de prompts com o Midjourney é `/imagine prompt: [PROMPT PARA A IMAGEM] [--PARAMETROS OPCIONAIS]`. 

Por exemplo: `/imagine prompt: astronauta em um cavalo`


<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "350px"}} />
</div>


Exemplo com parâmetros: `/imagine prompt: astronauta em um cavalo --ar 3:2 --c 70 --q 2 --seed 1000 `

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params} style={{width: "350px"}} />
</div>

Neste exemplo básico, os seguintes parâmetros foram usados:


`--ar 3:2` define a proporção de aspecto da imagem para 3:2

`--c 70` adiciona um valor de caos de 70 para permitir que o Midjourney interprete o prompt de forma mais livre (intervalo de valor de caos: 0 - 100)

`--seed 100` define um valor de semente arbitrário que pode ser usado para re-renderizar ou re-trabalhar uma imagem mais tarde

(saiba mais sobre os parâmetros do Midjourney em "Prompts Avançados" > "Parâmetros")


# Prompts Avançados
Prompts avançados no Midjourney fazem uso de parâmetros e técnicas de solicitação especiais suportadas pelo algoritmo Midjourney.

## Prompts Múltiplos
O Midjourney interpreta seu prompt de forma holística por padrão. Usar dois pontos `::` diz ao Midjourney para interpretar cada parte de um prompt separadamente.

Exemplo:

```text
/imagine prompt: astronauta e cavalo
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi1} style={{width: "350px"}} />
</div>

```text
/imagine prompt: astronauta:: e cavalo
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi2} style={{width: "350px"}} />
</div>

## Usando imagens no seu prompt
Ao fazer o upload de uma imagem para o Discord e usar sua URL em um prompt, você pode instruir o Midjourney a usar essa imagem para influenciar o conteúdo, estilo e composição dos seus resultados. 
Exemplo:
[Astronauta (Fonte: Wikipedia)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).webp)

```text
/imagine prompt: [URL da imagem], pintura impressionista
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_ip2} style={{width: "350px"}} />
</div>


## Parâmetros (v4)

Os seguintes parâmetros são suportados pelo modelo mais recente do Midjourney (v4).

### Relação de Aspecto:

`--ar [ratio]` muda a relação padrão (1:1) para uma nova relação (atualmente, a relação máxima suportada é 2:1)

Exemplo: `astronauta no cavalo --ar 16:9` e `astronauta a cavalo --ar 1:2`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_a169} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_a12} style={{width: "175px"}} />
</div>


### Caos:

`--c [valor]` define um valor de caos que determina quanto o Midjourney varia o prompt; quanto maior o valor de caos, mais incomuns e inesperados serão os resultados e composições (intervalo: 0 - 100)

Exemplo: `astronauta no cavalo --c20` e `astronauta no cavalo --c 80`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_c20} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_c80} style={{width: "350px"}} />
</div>


### Qualidade:

`--q [valor]` define quanto tempo será gasto na geração da imagem, aumentando assim a qualidade. O ajuste padrão é "1". Valores mais altos usam mais minutos de GPU da assinatura (aceita os valores ".25", ".5" , "1" e "2")

Exemplo: `astronauta no cavalo --q .5` e `astronauta no cavalo --q 2`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_q05} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_q2} style={{width: "350px"}} />
</div>

### Semente:

`--seed [valor]` define um número de semente que define o ponto de partida (campo de ruído) para a geração de imagens. As sementes para cada imagem são geradas aleatoriamente quando não especificadas com o parâmetro de semente. Usar o mesmo número de semente e o prompt produzirá imagens semelhantes.

Exemplo: `astronauta no cavalo --seed 123`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
</div>

### Trabalhando com estilo:

`--stylize [valor]` ou `--s [valor]` influencia a força com que o Midjourney aplica seu algoritmo artístico. Valores baixos produzem imagens que seguem o prompt de perto, enquanto valores altos criam imagens muito artísticas e menos relacionadas ao prompt. O padrão é 100, o intervalo de valores é de 0 a 1000.
(Nota: você pode usar o comando `/settings` para alterar o valor padrão de "🖌️ Estilo Med" (=`--s 100`) para "🖌️ Estilo Baixo" (=`--s 50`), "🖌️ Estilo Alto" (=`--s 250`) ou "🖌️ Estilo Muito Alto" (=`--s 750`))

Exemplo: `astronauta no cavalo --s 50` e `astronauta no cavalo --s 900`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_s50} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_s900} style={{width: "350px"}} />
</div>


### Versão:
`--v [número da versão]` ou `--version [número da versão]` permite acessar modelos anteriores do Midjourney (1-3)

Exemplo: `--v 1`, `--v 2` e `--v 3`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_v1} style={{width: "220px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_v2} style={{width: "220px"}} />
   &nbsp;
      <img src={midjourney_astronaut_params_v3} style={{width: "220px"}} />
</div>

## Parâmetros (modelos anteriores)

### Same Seed

`--sameseed`: enquanto o parâmetro `--seed` produz um único campo de ruído aplicado a todas as imagens na grade inicial, o parâmetro sameseed aplica o mesmo ruído inicial a todas as imagens na grade inicial, produzindo imagens muito semelhantes.

Exemplo: `astronauta no cavalo --sameseed --v 3`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_sameseed} style={{width: "350px"}} />
</div>


### Telha

`--tile` gera imagens que podem ser usadas como telhas repetidas para criar padrões ininterruptos para tecidos, papéis de parede e texturas (funciona apenas com os modelos 1 - 3)

Exemplo: `astronauta no cavalo --tile --v 3`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_tilegrid} style={{width: "220px"}} />
  &nbsp;
  <img src={midjourney_astronaut_params_tile} style={{width: "220px"}} />
  &nbsp;
  <img src={midjourney_astronaut_params_tilecomplete} style={{width: "220px"}} />
</div>


### Vídeo

`--video` cria um curto filme da grade de imagem sendo gerada. Reagindo com o emoji ✉️ permite que o Bot Midjourney envie um DM com o link para o vídeo.

Exemplo: `astronauta no cavalo --video --v 3`

<div style={{textAlign: 'center'}}>
 <video width="320" height="240" autoplay muted>
  <source src="https://i.mj.run/27c89699-d96d-4834-b6fa-b022a453eb28/video.mp4" type="video/mp4">
</source>
</video>
</div>

## Links

[Documentação Oficial do Midjourney - em inglês](https://docs.midjourney.com/)