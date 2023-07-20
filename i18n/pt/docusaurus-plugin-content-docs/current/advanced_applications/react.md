---
sidebar_position: 3
---

# 🟡 LLMs que Raciocinam e Reagem

ReAct (@yao2022react) (razão, ação) é um paradigma que permite que modelos de linguagem resolvam tarefas complexas usando raciocínio em linguagem natural. O ReAct é projetado para tarefas em que o LLM pode realizar certas ações. Por exemplo, em um sistema MRKL, um LLM pode ser capaz de interagir com APIs externas para recuperar informações. Quando questionado, o LLM poderia escolher realizar uma ação para recuperar informações e, em seguida, responder à pergunta com base nas informações recuperadas.

Os sistemas ReAct podem ser considerados como sistemas MRKL, com a capacidade adicional de **raciocinar** sobre as ações que podem realizar.

Examine a imagem à seguir. A pergunta na caixa superior é proveniente do HotPotQA (@yang2018hotpotqa), um conjunto de dados de resposta a perguntas que requer raciocínio complexo. O ReAct é capaz de responder à pergunta, primeiro raciocinando sobre a pergunta (Pensamento 1) e depois realizando uma ação (Ação 1) para enviar uma consulta ao Google. Ele então recebe uma observação (Obs 1) e continua com esse ciclo de pensamento, ação e observação até chegar a uma conclusão (Ação 3).

import react_qa from '@site/docs/assets/advanced/react_qa.webp';

<div style={{textAlign: 'center'}}>
  <img src={react_qa} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
ReAct System (Yao et al.)
</div>

Leitores com conhecimento de aprendizado por reforço podem reconhecer este processo como semelhante ao clássico loop  RL de estado, ação, recompensa, estado,... ReAct fornece alguma formalização tal caso em seu artigo.

## Resultados

O Google usou o PaLM(@chowdhery2022palm) LLM em experimentos com ReAct. Comparações com prompts padrão (de apenas pergunta), Cadeia de Pensamento e outras abordagens mostram que o desempenho de ReAct é promissor para tarefas de raciocínio complexo. O Google também realiza estudos no conjunto de dados FEVER (@thorne2018fever), que abrange extração e verificação de fatos. 

import react_performance from '@site/docs/assets/advanced/react_performance.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={react_performance} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Resultados do ReAct (Yao et al.)
</div>