---
sidebar_position: 7
---

# 🟡 Criando conhecimento (Generated Knowledge)

A ideia por trás de criar conhecimento(@liu2021generated) se refere ao ato de pedir para que a %%LLM|LLM%% gere informações que potencialmente podem ser utilizadas (sobre uma certa pergunta ou tópico) antes de produzir a resposta final.

Por exemplo, se você quiser escrever um artigo sobre um animal, como [onças pintadas](https://pt.wikipedia.org/wiki/Panthera_onca). Antes de pedir para o %%LLM|LLM%% escrever um blog sobre onças, você pode pedir a ele que gere alguns fatos sobre onças-pintadas. Esse passo ajudará a LMM a escrever um post mais rico em informações. Existem duas maneiras fáceis para atingir esse objetivo.


## Abordagem de solicitação única

A primeira forma seria pedir ao LLM para gerar conhecimento e então escrever o post, tudo em um único comando.

```text
Gere 4 fatos sobre onças pintadas. Em seguida, use esses fatos para escrever um post de blog curto breve usando as informações criadas.
// highlight-start
1. As onças pintadas são os maiores felinos das Américas, podendo chegar a pesar até 135 kg.
2. Elas têm uma pelagem com manchas em formato de rosetas, que ajudam a camuflar-se na floresta e facilitam a sua caça.
3. As onças pintadas são animais solitários e territoriais, vivendo em média de 12 a 15 anos na natureza.
4. A espécie é considerada vulnerável pela União Internacional para a Conservação da Natureza (IUCN), devido à caça ilegal e à perda de habitat.

Post de blog:

As onças pintadas são animais impressionantes, sendo os maiores felinos das Américas. Elas têm uma pelagem com manchas em formato de rosetas, que as ajudam a camuflar-se na floresta e facilitam a sua caça. No entanto, as onças pintadas são animais solitários e territoriais, vivendo em média de 12 a 15 anos na natureza.

Infelizmente, a espécie é considerada vulnerável pela União Internacional para a Conservação da Natureza (IUCN), devido à caça ilegal e à perda de habitat. A destruição das florestas tropicais, especialmente na América do Sul, está ameaçando a sobrevivência desses animais incríveis. Por isso, é importante que medidas de conservação sejam tomadas para proteger as onças pintadas e seu habitat natural.

A conservação das onças pintadas é importante não apenas para a sobrevivência da espécie em si, mas também para a preservação de ecossistemas inteiros. Como predadores no topo da cadeia alimentar, as onças pintadas têm um papel crucial na regulação das populações de suas presas e na manutenção do equilíbrio dos ecossistemas.

Portanto, é crucial que governos, organizações não governamentais e indivíduos trabalhem juntos para proteger as onças pintadas e seus habitats naturais. A adoção de práticas sustentáveis e a criação de reservas naturais podem ajudar a garantir que as onças pintadas tenham um futuro seguro na natureza.
// highlight-end
```


## Abordagem com duas solicitações

Nessa abordagem, primeiramente pediremos para a %%LLM|LLM%% gerar fatos sobre a onça:

```text
Gere 10 fatos sobre onças pintadas.

// highlight-start
1. As onças pintadas são nativas das Américas, habitando desde a Argentina até o sul dos Estados Unidos.
2. Elas são os maiores felinos das Américas, podendo chegar a medir 1,90 metros de comprimento e pesar até 135 kg.
3. A pelagem das onças pintadas é composta por manchas em formato de rosetas, o que as torna facilmente identificáveis.
4. As onças pintadas são animais solitários e territoriais, preferindo viver sozinhas em vez de em grupos.
5. Elas são consideradas predadores de topo, ocupando o topo da cadeia alimentar e desempenhando um papel importante na regulação das populações de suas presas.
6. As onças pintadas são caçadoras habilidosas e podem abater animais com mais do que o dobro do seu tamanho.
7. A espécie é capaz de adaptar-se a diferentes habitats, desde florestas tropicais até áreas de cerrado e pastagens.
8. As onças pintadas têm visão noturna excepcional, o que lhes permite caçar durante a noite.
9. Elas se comunicam por meio de vocalizações, como rugidos e grunhidos, além de marcas de urina e arranhões em árvores.
10. A destruição do habitat natural das onças pintadas é uma das maiores ameaças para a espécie, colocando-a em risco de extinção.
// highlight-end
```

Depois disso, usamos a informação gerada em um outro comando para escrever o post de blog: 

```text
1. As onças pintadas são nativas das Américas, habitando desde a Argentina até o sul dos Estados Unidos.
2. Elas são os maiores felinos das Américas, podendo chegar a medir 1,90 metros de comprimento e pesar até 135 kg.
3. A pelagem das onças pintadas é composta por manchas em formato de rosetas, o que as torna facilmente identificáveis.
4. As onças pintadas são animais solitários e territoriais, preferindo viver sozinhas em vez de em grupos.
5. Elas são consideradas predadores de topo, ocupando o topo da cadeia alimentar e desempenhando um papel importante na regulação das populações de suas presas.

Use os fatos acima para escrever um parágrafo sobre as onças pintadas.

// highlight-start

As onças pintadas são um dos felinos mais impressionantes do mundo. Esses animais nativos das Américas têm um tamanho impressionante, podendo chegar a medir 1,90 metros de comprimento e pesar até 135 kg. Com sua pelagem marcada por manchas em formato de rosetas, as onças pintadas são facilmente identificáveis. Elas são animais solitários e territoriais, preferindo viver sozinhas em vez de em grupos. Como predadores de topo, elas desempenham um papel crucial na regulação das populações de suas presas e são essenciais para a manutenção do equilíbrio dos ecossistemas.

// highlight-end
```
Eu recomendo utilizar essa segunda abordagem, já que ela poderá produzir conteúdos mais longos e confiáveis.


## Outro caso de uso

A abordagem de gerar conhecimento foi introduzida para um tipo de tarefa completamente diferente: responder perguntas difíceis. Considere a próxima pergunta, que o GPT-3 responde incorretamente.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQSDDgWZyaWNhIGRvIFN1bCDDqSBtYWlvciBxdWUgbyBDb25nby4iLCJwcm9tcHQiOiJRdWFsIHBhw61zIMOpIG1haW9yLCBvIENvbmdvIG91IGEgw4FmcmljYSBkbyBTdWw%2FIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>
Caso peçamos primeiramente para o %%LLM|LLM%% gerar fatos sobre o Congo e sobre a África do Sul, então poderemos usar as informações geradas para responder a pergunta corretamente. Em teoria, esse processo é similar à abordagem da  %%Cadeia de Pensamento%%, já que estaremos influenciando a LMM a gerar um raciocínio intermediário na forma de fatos relacionados.

Vamos começar com o primeiro passo, *gerando conhecimento*. Nós podemos pedir para a %%LLM|LLM%% gerar fatos sobre o Congo e sobre a África do Sul.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQ2xhcm8hIEFiYWl4byBlc3TDo28gYWxndW5zIGZhdG9zIHNvYnJlIG8gdGFtYW5obyBkbyBDb25nbyBlIGRhIMOBZnJpY2EgZG8gU3VsOlxuXG5Db25nbzpcblxuTyBDb25nbyDDqSBvIHNlZ3VuZG8gbWFpb3IgcGHDrXMgZGEgw4FmcmljYSBlbSB0ZXJtb3MgZGUgw6FyZWEgdG90YWwuXG5TdWEgw6FyZWEgw6kgZGUgYXByb3hpbWFkYW1lbnRlIDIuMzQ0Ljg1OCBxdWlsw7RtZXRyb3MgcXVhZHJhZG9zLlxuTyBDb25nbyBjb21wYXJ0aWxoYSBmcm9udGVpcmFzIGNvbSBub3ZlIHBhw61zZXM6IFJlcMO6YmxpY2EgQ2VudHJvLUFmcmljYW5hLCBTdWTDo28gZG8gU3VsLCBVZ2FuZGEsIFJ1YW5kYSwgQnVydW5kaSwgVGFuesOibmlhLCBaw6JtYmlhLCBBbmdvbGEgZSBSZXDDumJsaWNhIERlbW9jcsOhdGljYSBkbyBDb25nby5cbk8gQ29uZ28gdGVtIHVtYSBwb3B1bGHDp8OjbyBkaXZlcnNhLCBjb20gbWFpcyBkZSAyMDAgZ3J1cG9zIMOpdG5pY29zIGRpZmVyZW50ZXMuXG7DgWZyaWNhIGRvIFN1bDpcblxuQSDDgWZyaWNhIGRvIFN1bCDDqSBvIDI1wrogbWFpb3IgcGHDrXMgZG8gbXVuZG8gZW0gdGVybW9zIGRlIMOhcmVhLlxuU3VhIMOhcmVhIMOpIGRlIGNlcmNhIGRlIDEuMjIxLjAzNyBxdWlsw7RtZXRyb3MgcXVhZHJhZG9zLlxuQSDDgWZyaWNhIGRvIFN1bCDDqSBjb25oZWNpZGEgcG9yIHN1YSBkaXZlcnNpZGFkZSBjdWx0dXJhbCwgY29tIDExIGzDrW5ndWFzIG9maWNpYWlzLCBpbmNsdWluZG8gbyB6dWx1LCB4aG9zYSwgYWZyaWPDom5lciBlIGluZ2zDqnMuXG5PIHBhw61zIHBvc3N1aSB1bWEgbGluaGEgY29zdGVpcmEgcXVlIHNlIGVzdGVuZGUgcG9yIGNlcmNhIGRlIDIuNzk4IHF1aWzDtG1ldHJvcyBhbyBsb25nbyBkb3Mgb2NlYW5vcyBBdGzDom50aWNvIGUgw41uZGljby5cbkEgw4FmcmljYSBkbyBTdWwgZmF6IGZyb250ZWlyYSBjb20gc2VpcyBwYcOtc2VzOiBOYW3DrWJpYSwgQm90c3VhbmEsIFppbWLDoWJ1ZSwgTW%2FDp2FtYmlxdWUsIFN1YXppbMOibmRpYSBlIExlc290by5cbkVzc2VzIHPDo28gYXBlbmFzIGFsZ3VucyBmYXRvcyBzb2JyZSBvIHRhbWFuaG8gZG8gQ29uZ28gZSBkYSDDgWZyaWNhIGRvIFN1bCwgZG9pcyBwYcOtc2VzIG5vdMOhdmVpcyBubyBjb250aW5lbnRlIGFmcmljYW5vLCBjYWRhIHVtIGNvbSBzdWFzIHByw7NwcmlhcyBjYXJhY3RlcsOtc3RpY2FzIGRpc3RpbnRhcyBlIHJpY2EgaGlzdMOzcmlhLiIsInByb21wdCI6IkdlcmUgYWxndW5zIGZhdG9zIHNvYnJlIG8gdGFtYW5obyBkbyBDb25nbyBlIGRhIMOBZnJpY2EgZG8gU3VsOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/> <br/>

Agora vamos usar essa informação para responder a pergunta corretamente. Esse passo é chamado de *integração do conhecimento*!

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiRGVzY3VscGUsIGhvdXZlIHVtIGVycm8gbmEgbWluaGEgcmVzcG9zdGEgYW50ZXJpb3IuIE8gQ29uZ28gw6kgbWFpb3IgZG8gcXVlIGEgw4FmcmljYSBkbyBTdWwuXG5cbiIsInByb21wdCI6Ik8gQ29uZ28gw6kgbyBzZWd1bmRvIG1haW9yIHBhw6FzIGRhIMOBZnJpY2EsIGVtIHRlcm1vcyBkZSDDoXJlYSwgY29tIHVtYSBleHRlbnPDo28gdGVycml0b3JpYWwgZGUgY2VyY2EgZGUgMiwzIG1pbGjDtWVzIGRlIGttcy4gQSDDgWZyaWNhIGRvIFN1bCDDqSBvIDI0IG1haW9yIHBhw6FzIGRvIG11bmRvLCBjb20gdW1hIMOhcmVhIGRlIGFwcm94aW1hZGFtZW50ZSAxLDIyIG1pbGjDtWVzIGRlIGttcy5cblxuUXVhbCBwYcOtcyDDqSBtYWlvciwgbyBDb25nbyBvdSBhIMOBZnJpY2EgZG8gU3VsP1xuV2hpY2ggY291bnRyeSBpcyBsYXJnZXIsIENvbmdvIG9yIFNvdXRoIEFmcmljYT8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Uma discussão mais técnica

Embora o caso de uso acima tenha sido semelhante à forma como o conhecimento gerado foi originalmente introduzido, não é exatamente o mesmo processo. O conteúdo abaixo aborda o contexto mais técnico em que a abordagem foi introduzida. Ele segue o padrão de duas etapas intermediárias (geração de conhecimento e integração de conhecimento) que vimos acima.

import KGImage from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/intermediate/knowledge_generation.png';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Conhecimento Gerado / Generated Knowledge (Liu et al.)
</div>

### Conhecimento Gerado

Na etapa de geração de conhecimento, o %%LLM|LLM%% é solicitado a gerar um *conjunto de fatos sobre a pergunta*. O LLM é acionado de forma few-shot, como demonstrado exemplo abaixo. N etapas diferentes são gerados usando a mesma prompt (semelhante à abordagem de autoconsistência).

import KGP1Image from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/intermediate/gen_k_p1.png';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Exemplo de Conhecimento Gerado, baseado na pesquisa de (Liu et al.)
</div>


### Conhecimento Integrado

Em seguida, geramos perguntas "enriquecidas pelo conhecimento" e solicitamos ao %%LLM|LLM%% que as responda para obter as respostas finais. A maneira mais fácil de entender isso é passando por um exemplo.

Vamos supor que estamos tentando responder à *pergunta*
"A maioria dos cangurus têm <mask\> membros". Suponha que no passo de geração de conhecimento, geramos 2 conhecimentos (M=2):

- Conhecimento 1: `Cangurus são marsupiais que vivem na Austrália.`

- Conhecimento 2: `Cangurus são marsupiais que possuem cinco membros.`

Agora nós integramos os dois conhecimentos com a pergunta a fim de gerar "perguntas enriquecidas pelo conhecimento":

- Pergunta enriquecida 1: `A maioria dos cangurus possuem <mask\> membros. Cangurus são marsupiais que vivem na Austrália.`

- Pergunta enriquecida 2: `A maioria dos cangurus possuem <mask\> membros. Cangurus são marsupiais que possuem cinco membros.`


Em seguida, solicitamos que o LLM responda a estas perguntas enriquecidas com conhecimento e obtemos as propostas de resposta finais:

Resposta 1: 4

Resposta 2: 5

Selecionamos a resposta com a maior probabilidade como resposta final. A maior probabilidade pode ser a probabilidade softmax do token de resposta ou a probabilidade logarítmica dos ttokens de resposta.

## Modelos de Linguagem Aprimorados por Recitação

A abordagem de recitação-aumentada (@sun2022recitationaugmented) é semelhante à geração de conhecimento (basicamente a mesma coisa). No entanto, é muito menos complexa do que a implementação formal de geração de conhecimento.

import RImage from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/intermediate/recitation.png';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={RImage} style={{width: "250px"}} />
</div>

<div style={{textAlign: 'center'}}>
Exemplo de Conhecimento Aprimorado por Recitação
</div>

A ideia aqui é promptear o LLM em poucos exemplos para gerar informações e respostas ao mesmo tempo. O fato de estar recitando/gerando conhecimento e respondendo à pergunta na mesma etapa é a principal diferença em relação à abordagem de conhecimento gerado.

Para reiterar, essa abordagem promptea o modelo com vários exemplos de (pergunta, recitação, resposta), e em seguida, faz a pergunta. Os autores observam que essa abordagem pode ser combinada com autoconsistência ou múltiplos caminhos de completamento.

## Notas

- A abordagem de conhecimento gerado apresenta melhorias em vários conjuntos de dados de senso comum.

- O conhecimento correspondente à resposta selecionada é chamado de _conhecimento selecionado_.

- Na prática, você pode considerar a resposta mais frequente como a final.