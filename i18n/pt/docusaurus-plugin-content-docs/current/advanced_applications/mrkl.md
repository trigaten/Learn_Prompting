---
sidebar_position: 2
---

# 🟡 Usando Ferramentas de LLM

Os sistemas MRKL (@karpas2022mrkl) (Raciocínio Modular, Conhecimento e Linguagem, ou Modular Reasoning, Knowledge and Language, em inglês) são uma **arquitetura neuro-simbólica** que combinam LLMs (computação neural) e ferramentas externas como calculadoras (computação simbólica) para resolver problemas complexos.

Um sistema MRKL é composto por um conjunto de módulos (por exemplo, uma calculadora, API de clima, banco de dados, etc.) e um roteador que decide como "rotear" as consultas em linguagem natural para o módulo apropriado.

Um exemplo simples de um sistema MRKL é um LLM que pode usar um aplicativo de calculadora. Este é um sistema de módulo único, onde o LLM é o roteador. Quando perguntado, `Quanto é 100*100?`, o LLM pode escolher extrair os números da solicitação e, em seguida, informar ao sistema MRKL para usar um aplicativo de calculadora para calcular o resultado. Isso pode parecer o seguinte:

<pre>
<p>Quanto é 100*100?</p>

<span className="bluegreen-highlight">CALCULADORA[100*100]</span>
</pre>

O sistema MRKL veria a palavra CALCULADORA e inseriria 100*100 na calculadora.
Essa ideia simples pode ser facilmente expandida para várias ferramentas de computação simbólica.

Considere os seguintes exemplos adicionais de aplicativos:

- Um chatbot capaz de responder a perguntas sobre um banco de dados financeiro,
extraindo informações para formar uma consulta SQL a partir do texto dos usuários.

<pre>
<p>Qual o preço do stock da Apple nesse exato momento?</p>

<span className="bluegreen-highlight">O preço do stock da Apple nesse momento é DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"].</span>
</pre>

- Um chatbot capaz de responder a perguntas sobre o tempo extraindo
informações do prompt e usando uma API meteorológica para recuperar as informações.

<pre>
<p>Como é o clima em Nova York?</p>

<span className="bluegreen-highlight">O clima é WEATHER_API[New York].</span>
</pre>

- Ou até realizar tarefas muito mais complexas incluidno vários bancos de dados, como nos exemplos a seguir:

import mrkl_task from '@site/docs/assets/advanced/mrkl_task.webp';
import dataset from '@site/docs/assets/advanced/mrkl/dataset.webp';
import load_dataset from '@site/docs/assets/advanced/mrkl/load_dataset.webp';
import model from '@site/docs/assets/advanced/mrkl/model.webp';
import extract from '@site/docs/assets/advanced/mrkl/extract.webp';
import search from '@site/docs/assets/advanced/mrkl/search.webp';
import final from '@site/docs/assets/advanced/mrkl/final.webp';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Exemplo de um Systema MRKL (AI21)
</div>


## Um Exemplo

Eu reproduzi um exemplo de Sistema MRKL do artigo original, usando o Dust.tt, disponível [aqui](https://dust.tt/w/f3fa61f0aa/a/17501cd008).
O sistema lê um problema matemático (por exemplo, `Qual é o resultado de 20 vezes 5^6?`), extrai os números e as operações,
e os formata a fim de que possam ser utilizados em  uma calculadora (por exemplo, `20*5^6`). Em seguida, ele envia a equação reformatada para a calculadora do Google e retorna o resultado. Observe que o artigo original faz um ajuste fino na consulta (no roteador, que é o LLM), mas eu não faço isso neste exemplo. Vamos ver como isso funciona:

Primeiro, eu criei um dataset simples na aba `Datasets` do Dust.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={dataset} style={{width: "750px"}} />
</div>

Depois, eu mudei para a aba `Specification` e inclui o dataset acima usando um bloco do tipo `input`. 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={load_dataset} style={{width: "750px"}} />
</div>

Em seguida, criei um bloco do tipo `lmm` que extrai os números e operações matemática. Note que quando eu crio o promt eu passo que estou usando a calculadora do Google. O modelo que eu usei (GPT-3) provavelmente tem algum conhecimento da calculadora do Google devido ao seu pré-treinamento.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={model} style={{width: "750px"}} />
</div>

Então eu criei um block do tipo `code`, no qual incluí um código em javascript bem simples para remover os espaços da resposta.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={extract} style={{width: "750px"}} />
</div>

Finalmente, eu criei um bloco do tipo `search` que manda a equação formatada para a calculadora do Google.
** Importante **: Nessa etapa tive que mandar as instruções em inglês mesmo, já que perguntando "Quanto é..." a busca não retorna uma calculadora (ou "rich snippet"). 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={search} style={{width: "750px"}} />
</div>

Abaixo você pode ver os resultando, que estão todos corretos!

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={final} style={{width: "750px"}} />
</div>

Fique à vontade para copiar e brincar com esse código [aqui](https://dust.tt/w/f3fa61f0aa/a/17501cd008).

## Notas
MRKL foi desenvolvido por [AI21](https://www.ai21.com/), o qual originalmente usaram o LMM
J-1 (Jurassic 1)(@lieberjurassic).

## Mais

Confira [esse exemplo](https://python.langchain.com/en/latest/modules/agents/agents/examples/mrkl.html) de um sistemas MRKL construído com LangChain.