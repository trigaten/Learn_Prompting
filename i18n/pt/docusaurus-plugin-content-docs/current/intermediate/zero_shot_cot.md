---
sidebar_position: 4
---

# 🟢 Cadeia de Pensamento Zero Shot

Prompts do tipo Cadeia de Pensamento Zero Shot (ou Zero Shot Chain of Thought - Zero-shot-CoT, em inglês)(@kojima2022large) são uma "evolução" do prompt do tipo %%Cadeia de Pensamento|CoT prompting%% (@wei2022chain), com o introdução de um passo adicional muito simples. Pesquisadores descobriram que ao adicionar as palavras "Vamos pensar passo a passo" ao final de uma pergunta, as LLMs são capazes de gerar uma cadeia de pensamento que responde à pergunta. A partir desta cadeia de pensamento, eles são capazes de extrair respostas mais precisas.

import ZSImage from '@site/docs/assets/zero_shot.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Cadeia de Pensamento Zero Shot. Exemplo adaptado. (Kojima et al.)
</div>

Tecnicamente, o processo completo de Cadeia de Pensamento Zero Shot envolve duas solicitações separadas. Na imagem abaixo, a bolha superior à esquerda gera uma cadeia de pensamento, enquanto a bolha superior à direita recebe a saída da primeira solicitação (incluindo a própria primeira solicitação) e extrai a resposta da cadeia de pensamento. Essa segunda solicitação é uma _solicitação auto-aumentada_ ou _auto-enriquecida_.

import ZSProcessImage from '@site/docs/assets/zero_shot_example.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Processo completo da Cadeia de Pensamento Zero Shot. Exemplo adaptado. (Kojima et al.)
</div>

## Exemplo

Abaixo estão alguns demos (que apenas realizam extração de raciocínio). Este primeiro demo mostra o GPT-3 (davinci-003) falhando em uma questão simples de matemática, enquanto o segundo demo usa um prompt Zero-shot-CoT e resolve o problema com sucesso. Sinta-se à vontade para inserir sua chave de API da OpenAI (clique em Gerar) e brincar com os exemplos. Observe como o prompt Zero-shot-CoT é muito mais simples em comparação com o prompt CoT.

#### Incorreto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Se João tem 5 peras, come 2 e compra mais 5, depois dá 3 ao seu amigo, quantas peras ele tem agora?" initial-response="O João tem oito peras." max-tokens="256" box-rows="3" model-temp="0.7" top-p="1"></div>


#### Correto

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Se João tem 5 peras, come 2 e compra mais 5, depois dá 3 ao seu amigo, quantas peras ele tem agora?\n\nVamos pensar passo a passo." initial-response="João tem 5 peras, come 2, então sobram 5 - 2 = 3 peras. Depois ele compra mais 5, então ele tem 3 + 5 = 8 peras. Mas em seguida ele dá 3 peras ao amigo, portanto agora ele tem 8 - 3 = 5 peras. João tem 5 peras agora." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>

## Resultados

Zero-shot-CoT também foi efetivo em melhorar os resultados em tarefas de aritmética, raciocínio comum e simbólico. No entanto, não é surpreendente que geralmente essa abordagem não seja tão efetiva quanto o CoT prompting. Um caso de uso importante para o Zero-shot-CoT é ser uma alternativa eficaz quando é difícil obter exemplos de poucas amostras utilizando o CoT.

## Interessante
Kojima et al. experimentaram com vários prompts de Zero-shot-CoT (por exemplo, "Vamos resolver esse problema dividindo-o em etapas." ou "Vamos pensar sobre isso logicamente."), mas eles demonstraram que "Vamos pensar passo a passo" é o mais eficaz para os testes realizadas.


## Notas

A etapa de extração muitas vezes precisa ser específica para a tarefa, tornando o Zero-Shot-CoT menos generalizável do que parece à primeira vista.

Anecdotamente, descobri que prompts no estilo Zero-shot-CoT são às vezes eficazes em tarefas generativas a fim de diminuir o número de saídas necessárias. Por exemplo, considere o prompt padrão `Escreva uma história sobre um sapo e um cogumelo que se tornam amigos`. Adicionar as palavras `Vamos pensar passo a passo.` no final deste prompt leva a uma saída muito mais longa.