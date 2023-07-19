---
sidebar_position: 1
---

# 🟢 Introdução

Descobrir o melhor prompt para criar uma imagem perfeita é um desafio particular.
A pesquisa sobre métodos para trabalhar com imagens não é tão desenvolvida quanto o prompting de texto. Isso pode ser devido aos desafios inerentes à criação de objetos que são fundamentalmente subjetivos e frequentemente não têm boas métricas de precisão. No entanto, não tenha medo, pois a comunidade de prompting de imagem(@parsons2022dalleprompt) fez grandes descobertas sobre como lidar vários modelos de imagem (@rombach2021highresolution)(@ramesh2022hierarchical).

Esta guia abrange técnicas básicas de prompting de imagem e recomendamos fortemente que você considere os grandes recursos no final do capítulo. Além disso, fornecemos um exemplo completo do processo de prompting de imagem abaixo.

## Exemplo

Aqui passarei por um exemplo de como criei as imagens para a página principal deste curso (ainda que provavelmente você está acessando essa artigo em uma versão nova do site).

Eu estava experimentando o estilo low poly para um projeto de campo de radiação de aprendizado de reforço profundo. Eu gostei do estilo low poly e queria usá-lo para as imagens deste curso. 

Minha ideia seria utilizar um astronauta, um foguete e um computador para as imagens da página principal.

Eu fiz uma série de pesquisas sobre como criar imagens low poly, no [r/StableDiffusion] (https://www.reddit.com/r/StableDiffusion/) e outros sites, mas não encontrei nada muito útil.

Então decidi começar com o DALLE e o prompt `Foguete branco e azul low poly disparado para a lua em frente de um campo esparso` e ver o que aconteceria.

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
  <img src={rockets1} style={{width: "750px"}} />
</div>


<div style={{textAlign: 'center'}}>
  <img src={rockets2} style={{width: "750px"}} />
</div>

Eu achei esses resultados bem decentes para uma primeira tentativa; eu gostei principalmente do foguete na parte de baixo à esquerda.

Então depois disso, eu criei um computador no mesmo estilo `Computador branco e azul no estilo low poly em um campo espaso`

<div style={{textAlign: 'center'}}>
  <img src={computer_1} style={{width: "750px"}} />
</div>

Finalmente, eu precisava de um astronauta! Para isso, eu criei o prompt: `Astronauta em azul e branco no estilo low poly sentado em um campo esparso verde no estilo low poly, com montanhas no fundo`. 

<div style={{textAlign: 'center'}}>
  <img src={astronaut_1} style={{width: "750px"}} />
</div>

Na minha opinião a segunda imagem está ok. 

Agora eu tinha um astronauta, um foguete e um computador. Eu estava feliz com o resultado, então eu coloquei as imagens na página inicial do site. Mas depois de alguns dias eu recebi o feedback de alguns amigos sobre a consistência das imagens 😔.

Depois de fazer algumas pesquisas sobre o [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/), eu vi algumas pessoas usando a palavra isométrica (isometric, em inglês). Eu decidi experimentar isso usando o Stable Diffusion em vez do DALLE. Eu também percebi que precisava adicionar mais modificadores ao meu prompt para restringir o estilo. Então eu tentei esse prompt:

`Um mundo low-poly, com um astronauta de terno branco e viseira azul sentado em um campo verde, com montanhas low-poly ao fundo. Alto detalhamento, isométrico, 4K.`

<div style={{textAlign: 'center'}}>
  <img src={astronaut_2} style={{width: "250px"}} />
</div>

Eu não gostei muito das imagens, então eu decidi começar com a nave.

`Um mundo low-poly, com uma nave branca e azul decolando de um campo verde, com montanhas low-poly ao fundo. Alto detalhamento, isométrico, 4K.`

<div style={{textAlign: 'center'}}>
  <img src={rocket_sd_1} style={{width: "250px"}} />
</div>


Esses também não estavam ótimos, mas depois de testar um pouco eu cheguei a esse resultado:

<div style={{textAlign: 'center'}}>
  <img src={rocket_final} style={{width: "250px"}} />
</div>

Então eu precisava de um laptop melhor.

`Um mundo low-poly, com um laptop branco e azul sentado em um campo verde, com montanhas low-poly ao fundo. O tela está toda azul. Alto detalhamento, isométrico, 4K.`

<div style={{textAlign: 'center'}}>
  <img src={laptop_sd_1} style={{width: "250px"}} />
</div>

Como você pode ver, eu obtive resultados bastante inconsistentes. Gostei do da parte de baixo da direita, mas decidi ir por outro caminho.

`Um mundo low-poly, com uma chama branca e azul magicamente flutuando no meio da tela, acima de um campo verde, com montanhas low-poly ao fundo. Alto detalhamento, isométrico, 4K.`

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_1} style={{width: "250px"}} />
</div>

Isso não estava bom o suficiente. Vamos tentar algo mais misterioso e brilhante:

`Um mundo low-poly, com uma pedra branca e azul brilhando magicamente flutuando no meio da tela, acima de um campo verde, com montanhas low-poly ao fundo. Alto detalhamento, isométrico, 4K.`

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_2} style={{width: "250px"}} />
</div>

Eu gostei desses, mas eu queria a pedra no meio da tela.

`Um mundo low-poly, com uma pedra azul brilhando magicamente flutuando no meio da tela, acima de um campo verde, com montanhas low-poly ao fundo. Alto detalhamento, isométrico, 4K.`

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_3} style={{width: "250px"}} />
</div>

Aqui, eu usei a capacidade do Stable Diffusion de ter uma imagem anterior como influencia para as próximas. E assim eu cheguei a esse resultado:

<div style={{textAlign: 'center'}}>
  <img src={focus_final} style={{width: "250px"}} />
</div>

Então, eu finalmente parti para o astronauta.

`Um mundo low poly, com um astronauta de terno branco e viseira azul sentado em um campo verde espaçoso com montanhas low poly no fundo. Altamente detalhada, isométrica, em 4K.`

<div style={{textAlign: 'center'}}>
  <img src={astronaut_final} style={{width: "250px"}} />
</div>

Neste ponto, eu estava suficientemente satisfeito com a consistência de estilo entre as minhas três imagens para usá-las no site. As minhas principais conclusões ao finalizar essa tarefa foram que esse foi um processo muito iterativo, pesado de pesquisa, e precisei modificar minhas expectativas e ideias conforme experimentei com diferentes prompts e modelos.
