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

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Qual país é maior, o Congo ou a África do Sul?" initial-response="A África do Sul é maior que o Congo." max-tokens="256" box-rows="3" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>
Caso peçamos primeiramente para o %%LLM|LLM%% gerar fatos sobre o Congo e sobre a África do Sul, então poderemos usar as informações geradas para responder a pergunta corretamente. Em teoria, esse processo é similar à abordagem da  %%Cadeia de Pensamento%%, já que estaremos influenciando a LMM a gerar um raciocínio intermediário na forma de fatos relacionados.

Vamos começar com o primeiro passo, *gerando conhecimento*. Nós podemos pedir para a %%LLM|LLM%% gerar fatos sobre o Congo e sobre a África do Sul.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Gere alguns fatos sobre o tamanho do Congo e da África do Sul:" initial-response="
Aqui estão alguns fatos sobre o tamanho do Congo e da África do Sul:1.O Congo é o segundo maior país da África, em termos de área, com uma extensão territorial de cerca de 2,3 milhões de km².\n2. A África do Sul é o 24º maior país do mundo, com uma área de aproximadamente 1,22 milhão de km².\n3. O Congo tem uma fronteira comum com nove países, incluindo a República Centro-Africana, Sudão do Sul, Uganda, Ruanda, Burundi, Tanzânia, Zâmbia, Angola e a República Democrática do Congo.\n4. A África do Sul tem uma fronteira comum com seis países, incluindo a Namíbia, Botsuana, Zimbabwe, Moçambique, Eswatini e Lesoto.\n5. A maior cidade do Congo é a capital Kinshasa, com uma população de mais de 11 milhões de habitantes.\n6. A maior cidade da África do Sul é Johanesburgo, com uma população de mais de 5 milhões de habitantes.\n7. A população total do Congo é de aproximadamente 105 milhões de pessoas, enquanto a população da África do Sul é de cerca de 60 milhões de pessoas.\n 8. A economia da África do Sul é a segunda maior da África, enquanto o Congo é uma das economias menos desenvolvidas do continente." max-tokens="256" box-rows="6" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

Agora vamos usar essa informação para responder a pergunta corretamente. Esse passo é chamado de *integração do conhecimento*!

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="O Congo é o segundo maior país da África, em termos de área, com uma extensão territorial de cerca de 2,3 milhões de km². A África do Sul é o 24º maior país do mundo, com uma área de aproximadamente 1,22 milhão de km².\n\nQual país é maior, o Congo ou a África do Sul?" initial-response="Desculpe, houve um erro na minha resposta anterior. Na verdade, o Congo é maior do que a África do Sul. A África do Sul tem uma área de aproximadamente 1,22 milhão de km², enquanto o Congo tem uma área de aproximadamente 2,3 milhões de km², tornando-o o 11º maior país do mundo em área territorial." max-tokens="256" box-rows="15" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## Uma discussão mais técnica

Embora o caso de uso acima tenha sido semelhante à forma como o conhecimento gerado foi originalmente introduzido, não é exatamente o mesmo processo. O conteúdo abaixo aborda o contexto mais técnico em que a abordagem foi introduzida. Ele segue o padrão de duas etapas intermediárias (geração de conhecimento e integração de conhecimento) que vimos acima.

import KGImage from '@site/docs/assets/PT-knowledge_generation.png';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Conhecimento Gerado / Generated Knowledge (Liu et al.)
</div>

### Conhecimento Gerado

Na etapa de geração de conhecimento, o %%LLM|LLM%% é solicitado a gerar um *conjunto de fatos sobre a pergunta*. O LLM é acionado de forma few-shot, como demonstrado exemplo abaixo. N etapas diferentes são gerados usando a mesma prompt (semelhante à abordagem de autoconsistência).

import KGP1Image from '@site/docs/assets/PT_gen_k_p1.png';

<div style={{textAlign: 'center'}}>
  <img src={KGP1Image} style={{width: "500px"}} />
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

Selecionamos a resposta com a maior probabilidade como resposta final. A maior probabilidade pode ser a probabilidade softmax do token de resposta ou a probabilidade logarítmica do(s) 

## Modelos de Linguagem Aprimorados por Recitação

A abordagem de recitação-aumentada (@sun2022recitationaugmented) é semelhante à geração de conhecimento (basicamente a mesma coisa). No entanto, é muito menos complexa do que a implementação formal de geração de conhecimento.

import RImage from '@site/docs/assets/PT_recitation.png';

<div style={{textAlign: 'center'}}>
  <img src={RImage} style={{width: "250px"}} />
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