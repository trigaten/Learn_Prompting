---
sidebar_position: 3
locale: pt-br
style: chicago
---

# 🟢 Prompting com Cadeia de Pensamento

Prompting com Cadeia de Pensamento (CdP) (@wei2022chain) é um método de *prompting* recente, que encoraja ao *LLM* (Grande Modelo de Linguagem) a explicar o seu raciocínio. A imagem abaixo (@wei2022chain) mostra um *prompt few shot* padrão (esquerda) comparado ao *prompt* com Cadeia de Pensamento (direita).


import CoTExample from '@site/docs/assets/chain_of_thought_example.png';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Prompt comum x Cadeia de Pensamento (Wei et al.) [em ingês]
</div>

A principal ideia da Cadeia de Pensamento (CdP) é mostrar ao *LLM* alguns exemplares *few shot* em que o processo de raciocínio é explicado, fazendo com que o *LLM* faça o mesmo quando der uma resposta ao *prompt*. A explicação do raciocínio frequentemente produz resultados mais apurados.

## Exemplo

Aqui estão algumas demonstrações. A primeira mostra o GPT-3 (davinci-003) falhando ao resolver um problema simples. A segunda, por sua vez, mostra o GPT-3 (davinci-003)
obtendo êxito na resolução do mesmo problema, com o uso da técnica de Cadeia de Pensamento (CdP).
#### Incorreto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Considerando as opções abaixo, qual é a forma mais rápida de chegar ao trabalho?\nOpção 1: pegue um ônibus de 1000 minutos, depois um trem de meia hora e, finalmente, um passeio de bicicleta de 10 minutos.\nOpção 2: pegue um ônibus de 800 minutos, depois uma hora de trem e, finalmente, um passeio de bicicleta de 30 minutos." initial-response="Opção 1." max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

#### Correto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Considerando as opções abaixo, qual é a forma mais rápida de chegar ao trabalho?\nOpção 1: pegue um ônibus de 10 minutos, depois um ônibus de 40 minutos e, finalmente, um trem de 10 minutos.\nOpção 2: pegue um trem de 90 minutos, depois um passeio de bicicleta de 45 minutos e, finalmente, um ônibus de 10 minutos.\nA opção 1 levará 10+40+10=60 minutos. A opção 2 levará 90+45+10=145 minutos.\nComo a opção 1 leva 60 minutos e a opção 2 leva 145 minutos, a opção 1 é mais rápida.\n\nConsiderando as opções abaixo, qual é a forma mais rápida de chegar ao trabalho?\nOpção 1: pegue um ônibus de 1000 minutos, depois um trem de meia hora e, finalmente, um passeio de bicicleta de 10 minutos.\nOpção 2: pegue um ônibus de 800 minutos, depois uma hora de trem e, finalmente, um passeio de bicicleta de 30 minutos." initial-response="A opção 1 levará 1000+30+10 = 1040 minutos.
A opção 2 levará 800+60+30 = 890 minutos.
Como a Opção 2 leva 890 minutos e a Opção 1 leva 1.040 minutos, a Opção 2 é mais rápida." max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

## Resultados

A Cadeia de Pensamento (CdP) mostrou ser efetiva em melhorar os resultados em tarefas de aritmética, senso comum e racicínio simbólico (@wei2022chain).
Em particular, *prompted* PaLM 540B(@chowdhery2022palm) atinge 57% de precisão na resolução dos problemas de matemática da coleção de dados GSM8K(@cobbe2021training) (Estado da Arte, na época).

import PromptedPaLM from '@site/docs/assets/prompted_palm.png';

<div style={{textAlign: 'center'}}>
  <img src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparação de modelos no benchmark GSM8K (Wei et al.) [em inglês]
</div>

## Limitações

É importante ressaltar que, de acordo com Wei et al., "A técnica de Cadeia de Pensamento (CdP) só produz ganhos no desempenho quando usada em modelos de ~100B de parâmetros". Modelos menores escrevem cadeias de pensamentos ilógicas, o que leva a uma piora na precisão quando comparado ao *prompt* padrão. Comumente, as melhoras obtidas nos *prompts* usando a técnica de CdP são proporcionais ao tamanho do modelo.


## Observações

Nenhum modelo de linguagem foi ~ferido~ (leia-se: tunelado) no processo de escrita deste capítulo 😊.