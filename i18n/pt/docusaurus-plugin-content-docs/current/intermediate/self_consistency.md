---
sidebar_position: 5
---

# 🟡 Autoconsistência

import SCImage from '@site/docs/assets/reliability/self_consistency.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={SCImage} style={{width: "500px"}} />
</div>

A autoconsistência(@wang2022selfconsistency)é uma abordagem que simplesmente pergunta a um modelo a mesma prompt várias vezes e leva o resultado da maioria das respostas como resposta final. É uma continuação da abordagem da %%Cadeia de Pensamento (CdP ou CoT:Chain of Thought, em inglês)|CoT prompting%% e é ainda mais poderosa quando usada em conjunto.

## Exemplo

Vamos considerar um exemplo simples de análise de e-mails. Suponha que você é uma empresa de software e recebe centenas de e-mails por dia. Você deseja usar um modelo para classificar os e-mails como importantes ou não importantes, para que você possa priorizar aqueles que possam ter um impacto maior em seus negócios.

Abaixo um exemplo de um e-mail que você pode receber:

```text
Olá,

Eu descobri uma grande vulnerabilidade de segurança em seu sistema. Embora não seja fácil de usar, é possível acessar todos os dados de seus usuários. Eu anexei uma prova do problema. Por favor, corrija esse problema o mais rápido possível.

Saudações,

Donny
```
Vamos colocar isso em um prompt:

```text
Olá,

Eu descobri uma grande vulnerabilidade de segurança em seu sistema. Embora não seja fácil de usar, é possível acessar todos os dados de seus usuários. Eu anexei uma prova do problema. Por favor, corrija esse problema o mais rápido possível.

Saudações,

Donny

Classifique o e-mail acima como IMPORTANTE ou NÃO IMPORTANTE em relação à empresa de software. Vamos pensar passo a passo.

```

Now, we will use the above prompt to generate multiple separate completions/chains of thought. Here are a few examples:

```text
<!-- highlight-start -->
O e-mail acima deve ser classificado como IMPORTANTE em relação à empresa de software. Ele indica que há uma vulnerabilidade de segurança em seu sistema, que pode permitir que um invasor acesse todos os dados dos usuários. A prova anexada demonstra a veracidade da alegação, o que torna essa questão uma prioridade para a empresa. Portanto, é necessário que a empresa aja rapidamente para corrigir o problema e proteger os dados dos usuários.
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
O remetente descobriu uma grande vulnerabilidade de segurança no sistema, mas não forneceu nenhuma prova de conceito e não é fácil de usar. Eu classificaria este e-mail como NÃO IMPORTANTE.
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
Este e-mail é IMPORTANTE em relação à empresa de software, pois relata uma grande vulnerabilidade de segurança em seu sistema e inclui uma prova do problema. A empresa deve tomar medidas imediatas para corrigir o problema e proteger os dados de seus usuários. Ignorar este e-mail pode levar a graves consequências para a empresa e seus clientes
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
Esse e-mail deve ser considerado IMPORTANTE em relação à empresa de software, pois menciona uma possível vulnerabilidade de segurança que pode permitir acesso não autorizado aos dados de seus usuários. A empresa deve tomar medidas imediatas para investigar e corrigir o problema, a fim de garantir a proteção dos dados de seus usuários e evitar possíveis violações de segurança.
<!-- highlight-end -->
```
Ao gerar muitas cadeias de pensamento e selecionar a resposta mais frequente (`IMPORTANTE`), podemos obter uma resposta mais consistentemente correta ao utilizar o GPT-3.

## Resultados

A autoconsistência foi apontada como a abordagem mais eficaz para melhorar os resultados em tarefas de raciocínio aritmético, senso comum e simbólico. Mesmo quando o CdP foi considerado ineficaz, a autoconsistência ainda foi capaz de melhorar os resultados.

## Notas
Wang et al. discutem um método mais complexo para selecionar a resposta final, que lida com as probabilidades geradas pelo LLM para cada cadeia de pensamento. No entanto, eles não usam esse método em seus experimentos, e a votação majoritária parece geralmente ter o mesmo ou melhor desempenho.