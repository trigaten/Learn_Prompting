---
sidebar_position: 7
locale: pt-BR
style: chicago
---

# 🟡 Prompts to Tipo Menor para o Maior

Prompts do tipo "Menor para o Maior" (MpM) (Least to Most prompting ou LtM, em inglês)(@zhou2022leasttomost) são uma extensão dos prompts to tipo %%Cadeia de Pensamento - CdP|CoT prompting%%. Contudo esse tipo de prompt quebra o problema principal em diversos problemas menores. Essa técnica é inspirada em estratégias aplicadas no ensino infantil.  

Como na técnica de CdP prompting, o problema a ser resolvido é decomposto em um conjunto de subproblemas que se constroem uns sobre os outros. Em um segundo momento, esses subproblemas são resolvidos um por um. Contrariamente à cadeia de pensamento, a solução dos subproblemas anteriores é inserida na prompt tentando resolver o próximo problema.

import leastToMost from '@site/docs/assets/least_to_most_formal.png'

<div style={{textAlign: 'center'}}>
  <img src={leastToMost} style={{width: "600px"}}
        alt="Diagrama representando o prompt Menor para o Maior (MpM)" />
</div>

<div style={{textAlign: 'center'}}>
   Diagrama representando o prompt Menor para o Maior (MpM)
</div>

## Examplo: Resposta de Solicitação de Cliente

Vamos fazer uma pergunta um pouco complicada: 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="SOLICITAÇÃO DO CLIENTE:\nAcabei de comprar uma camiseta da sua coleção Arnold em 1º de março. Vi que estava com desconto, então comprei uma camiseta que custava originalmente R$30 e recebi 40% de desconto. Vi que vocês têm um novo desconto para camisetas de 50%. Gostaria de saber se posso devolver a camiseta e ter crédito suficiente na loja para comprar duas das suas camisetas?\n\nINSTRUÇÕES:\nVocê é um agente de atendimento ao cliente encarregado de responder gentilmente às perguntas dos clientes. As devoluções são permitidas dentro de 30 dias. A data de hoje é 29 de março. Atualmente, há um desconto de 50% em todas as camisetas. Os preços das camisetas variam de R$18 a R$100 em sua loja. Não invente informações sobre políticas de desconto." initial-response="Obrigado por entrar em contato conosco. Infelizmente, como você comprou a camiseta em 1º de março, ela está fora da nossa política de devolução de 30 dias. No entanto, atualmente temos um desconto de 50% em todas as camisetas, então você poderia comprar duas camisetas com o mesmo valor de crédito na loja. Os preços das nossas camisetas variam de R$18 a R$100. Por favor, avise-nos se tiver alguma outra dúvida." max-tokens="256" box-rows="16" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>A resposta está incorreta (o cliente está dentro da janela em que é possível retornar o produto). Sendo assim, vamos dividir o problema em questões menores:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="SOLICITAÇÃO DO CLIENTE:\nAcabei de comprar uma camiseta da sua coleção Arnold em 1º de março. Vi que estava com desconto, então comprei uma camiseta que custava originalmente R$30 e recebi 40% de desconto. Vi que vocês têm um novo desconto para camisetas de 50%. Gostaria de saber se posso devolver a camiseta e ter crédito suficiente na loja para comprar duas das suas camisetas?\n\nINSTRUÇÕES:\nVocê é um agente de atendimento ao cliente encarregado de responder gentilmente às perguntas dos clientes. As devoluções são permitidas dentro de 30 dias. A data de hoje é 29 de março. Atualmente, há um desconto de 50% em todas as camisetas. Os preços das camisetas variam de R$18 a R$100 em sua loja. Não invente informações sobre políticas de desconto.\n\nQuais subproblemas devem ser resolvidos antes de responder a pergunta principal?" initial-response="Antes de responder à pergunta principal, é necessário resolver os seguintes subproblemas:\n\n 1. Verificar se a compra da camiseta foi feita dentro da política de devolução de 30 dias.\n 2. Informar que há um novo desconto de 50% em todas as camisetas.\n 3. Informar que os preços das camisetas variam de R$18 a R$100 em sua loja.\n 4. Calcular o valor do crédito em loja que o cliente teria ao devolver a camiseta.\n 5. Verificar se o valor do crédito em loja seria suficiente para comprar duas camisetas com o novo desconto de 50%.." max-tokens="256" box-rows="12" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>Vamos tentar resolver o primeiro subproblema:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="SOLICITAÇÃO DO CLIENTE:\nAcabei de comprar uma camiseta da sua coleção Arnold em 1º de março. Vi que estava com desconto, então comprei uma camiseta que custava originalmente R$30 e recebi 40% de desconto. Vi que vocês têm um novo desconto para camisetas de 50%. Gostaria de saber se posso devolver a camiseta e ter crédito suficiente na loja para comprar duas das suas camisetas?\n\nINSTRUÇÕES:\nVocê é um agente de atendimento ao cliente encarregado de responder gentilmente às perguntas dos clientes. As devoluções são permitidas dentro de 30 dias. A data de hoje é 29 de março. Atualmente, há um desconto de 50% em todas as camisetas. Os preços das camisetas variam de R$18 a R$100 em sua loja. Não invente informações sobre políticas de desconto.\n\nVerificar se a compra da camiseta foi feita dentro da política de devolução de 30 dias. Vamos pensar passo a passo." initial-response="Passo 1: Verificar a data da compra.\nO cliente comprou a camiseta em 1º de março e a data atual é 29 de março. Como a compra foi feita dentro de 30 dias, ainda é possível devolver a camiseta.\n\nPasso 2: Verificar as condições para a troca.\nO cliente gostaria de trocar a camiseta por crédito suficiente na loja para comprar duas camisetas. Como a camiseta comprada estava com desconto de 40%, o valor pago foi de R$30 - 40% = R$18.\n\nPasso 3: Calcular o valor do crédito que o cliente teria para gastar na loja.
Com o desconto de 50% em todas as camisetas, é possível calcular o valor máximo que o cliente poderia gastar na loja com o crédito. O preço das camisetas varia de R$18 a R$100, então podemos calcular o crédito máximo como:\nCrédito máximo = 2 x R$100 x 50% = R$100\n\nPasso 4: Verificar se o crédito máximo é suficiente para comprar as duas camisetas desejadas pelo cliente.Como o crédito máximo é de R$100 e o preço máximo de cada camiseta é de R$100, é possível comprar duas camisetas com esse valor máximo. Portanto, é possível atender ao pedido do cliente.\n\nPasso 5: Responder ao cliente.\nPrezado cliente, confirmamos que você pode devolver a camiseta comprada em 1º de março e receber crédito na loja. O valor pago pela camiseta foi de R$18 e, com o desconto de 50% em todas as camisetas, o crédito máximo que você teria para gastar na loja seria de R$100. Como o valor máximo de cada camiseta é de R$100, você pode comprar duas camisetas com esse crédito. Estamos à disposição para ajudar com a devolução e a compra das novas camisetas. Obrigado pela preferência!" max-tokens="256" box-rows="19" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

Ao resolver apenas o primeiro subproblema, fomos capazes de resolver o problema inteiro. Se o GPT-3 não retornasse uma resposta imediatamente, poderíamos ter resolvido o próximo subproblema e assim por diante até que ele retornasse uma resposta. Observe que usamos `Vamos pensar passo a passo`. A adição dessa frase nem sempre é necessária, mas ajuda neste exemplo.


## Examplo: Concatenação de Letras
O MpM foi originalmente introduzido usando promptings de poucas amostras, em vez de uma instrução explícita para dividir um problema em várias etapas (como visto acima). Além disso, às vezes pode ser implementado com um único prompt em vez de prompts encadeados. Vamos examinar o problema de concatenar a última letra de palavras individuais (@wei2022chain) (por exemplo, dadas as palavras `bolo, etimologia` como entrada, a saída deve ser `oa`).


### Primeira tentativa: Padrão

O prompt padrão com alguns exemplos few-shot tem uma performance muito ruim, mesmo com um modelo mais avançado como o text-davinci-003.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="P: pensar, máquina\nR: ra\n\nP: aprendendo, pensando, generalizando\nR: ooo\n\nP: artificial, inteligência\nR: la\n\nP: transformador, linguagem, visão\nR: rmo\n\nP: céu, bar, flor, gato\nR:"
     initial-response="cbg"
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Segunda tentativa: Cadeia de Pensamento
A técnica da cadeia de pensamento funciona significativamente melhor do que a técnica padrão de prompt. Isso ocorre porque ela permite que o modelo considere extrair a última letra de cada palavra por conta própria, reduzindo a complexidade da operação de agrupar as letras coletadas anteriormente. No entanto, essa técnica começa a se tornar menos eficiente em tamanhos maiores.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="P: pensar, máquina\nR: A última letra de &#34;pensar&#34; é &#34;R&#34;; a última letra de &#34;máquin&#34; é &#34;A&#34;. Então pensar, máquina é &#34;ra&#34;.\n\nP: aprendendo, pensando, generalizando\nR: A última letra de &#34;aprendendo&#34; é &#34;O&#34;; a última letra de pensando é &#34;A&#34;; a última letra de &#34;generalizando&#34; é &#34;O'. Então aprendendo, pensando, generalizando é &#34;ooo&#34;.\n\nP: artificial, inteligência\nR: A última letra de &#34;artificial&#34; é &#34;L&#34;; a última letra de &#34;inteligência&#34; é &#34;A&#34;. Então artificial, inteligência é &#34;la&#34;.\n\nP: transformador, linguagem, visão\nR: A última letra de &#34;transformador&#34; é &#34;R&#34;; a última letra de &#34;linguagem&#34; é &#34;M&#34;; a última letra de &#34;visão&#34; é &#34;O&#34;. Então transformador, linguagem, visão é &#34;rmo&#34;.\n\nP: céu, bar, flor, gato\nR:" initial-response="A última letra de &#34;céu&#34; é &#34;U&#34;; a última letra de &#34;bar&#34; é &#34;R&#34;; a última letra de &#34;flor&#34; é &#34;R&#34;; a última letra de &#34;gato&#34; é &#34;O&#34;. Então &#34;céu, bar, flor, gato&#34; é &#34;urro&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Terceira tentativa: Menor para o Maior Third (prompt único)
Com a técnica de "Menor para Maior", aprimoramos o conceito de "Cadeia de Pensamento" alterando cada etapa para reformular o resultado previamente concatenado. Isso simplifica cada etapa, pois a máquina deve pconcatenar apenas uma única letra nova. Isso leva a um bom desempenho, principalmente quando trabalhamos com 12 ou mais palavras.

Essa abordagem pode parecer muito semelhante à Cadeia de Pensamento, mas é conceitualmente muito diferente. Aqui, em cada etapa, introduzimos a concatenação anterior. No caso de "pensar, máquina, aprendendo", em vez de concatenar as letras "r", "a", "o" individualmente, concatenaremos "r" e "a", depois "ra" e "o". Como resultado dessa reintrodução do trabalho anterior, o modelo agora pode generalizar para cadeias muito mais longas, pois carrega o resultado incrementalmente e precisa fazer apenas uma pequena quantidade de trabalho em cada etapa.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="P: pensar, máquina\nR: A última letra de &#34;pensar&#34; é &#34;r&#34;. A última letra de &#34;máquina&#34; é &#34;a&#34;. Concatenando &#34;r&#34; e &#34;a&#34; temos &#34;ra&#34;. Então &#34;pensar, máquina&#34; tem como resposta &#34;ra&#34;.\n\nP: pensar, máquina, aprendendo\nR: &#34;pensar, máquina&#34; tem como resposta &#34;ra&#34;. A última letra de &#34;aprendendo&#34; é &#34;o&#34;. Concatenando &#34;ra&#34; e &#34;o&#34; temos &#34;rao&#34;. Então &#34;pensar, máquina, aprendendo&#34; é &#34;rao&#34;.\n\nP: gato, peixe\nR: A última letra de &#34;gato&#34; é &#34;o&#34;. A última letra de &#34;peixe&#34; é &#34;e&#34;. Concatenando &#34;o&#34; e &#34;e&#34; temos &#34;oe&#34;. Então &#34;gato, peixe&#34; tem como resposta &#34;oe&#34;.\n\nP: gato, peixe, galinha\nR: &#34;gato, peixe&#34; tem como resposta &#34;oe&#34;. A última letra de &#34;galinha&#34; é &#34;a&#34;. Concatenando &#34;oe&#34; e &#34;a&#34; temos &#34;oea&#34;. Então &#34;gato, peixe, galinha&#34; é &#34;oea&#34;.\n\nP: planta, jardim, joaninha, margarida, flor, trevo\nR:"
     initial-response="A última letra de &#34;planta&#34; é &#34;a&#34;. A última letra de &#34;jardim&#34; é &#34;m&#34;. A última letra de &#34;joaninha&#34; é &#34;a&#34;. A última letra de &#34;margarida&#34; é &#34;a&#34;. A última letra de &#34;flor&#34; é &#34;r&#34;. A última letra de &#34;trevo&#34; é &#34;o&#34;. Concatenando essas letras, temos &#34;amaaro&#34;. Então, &#34;planta, jardim, joaninha, margarida, flor, trevo&#34; tem como resposta &#34;amaaro&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>
     

### Resultados

No último problema de concatenação de letras com 12 palavras, Cadeia de Pensamento tem uma precisão de 34%, enquanto Menor para o Maior tem uma precisão de 74% (o artigo utiliza o modelo text-davinci-002).


## Exemplo: Generalização Composicional (SCAN)

O benchmark SCAN (@lake2018scan) exige que o modelo converta linguagem natural em sequências de ações. Por exemplo, a frase "corra para a esquerda e caminhe duas vezes" seria traduzida para "VIRE_ESQUERDA + CORRA + CAMINHE * 2". Modelos de linguagem têm desempenho especialmente ruim quando confrontados com sequências mais longas do que as do conjunto de treinamento.

### Primeira tentativa: Padrão

Usando um prompt padrão, o text-davinci-003 tem um desempenho bom, mas ainda falha em resolver a pergunta.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="P: virar à esquerda\nR: VIRAR_ESQUERDA\n\nP: virar à direita\nR: VIRAR_DIREITA\n\nP: pular para esquerda\nR: VIRAR_ESQUERDA + PULAR\n\nP: correr para a direita\nR: VIRAR_DIREITA + CORRER\n\nP: olhar duas vezes\nR: OLHAR * 2\n\nP: correr e olhar duas vezes\nR: CORRER + OLHAR * 2\n\nP: pular para a direita três vezes\nR: (VIRAR_DIREITA + PULAR) * 3\n\nP: andar depois de correr\nR: CORRER + ANDAR\n\nP: virar para a esquerda oposta\nR: VIRAR_ESQUERDA * 2\n\nP: virar-se para a esquerda \nR: VIRAR_ESQUERDA * 4\n\nP: virar para a direita oposta\nR: VIRAR_DIREITA * 2\n\nP: virar-se para a direita\nR: VIRAR_DIREITA * 4\n\nP: andar na esquerda oposta\nR: VIRAR_ESQUERDA * 2 + ANDAR\n\nP: ande ao redor da esquerda\nR: (VIRAR_ESQUERDA + ANDAR) * 4\n\nP: &#43;pule ao redor da esquerda duas vezes ande na esquerda oposta três vezes&#43;\nR:"
     initial-response="((VIRAR_ESQUERDA + PULAR) * 2 + (VIRAR_ESQUERDA * 2 + ANDAR) * 3)"
     max-tokens="512" box-rows="18"
     model-temp="0.2" ></div>

### Segunda tentativa: Menor para o Maior, primeiro passo - Redução

Aqui, trabalhamos com dois prompts diferentes. O primeiro prompt é usado para reduzir o problema de entrada em uma sequência de etapas mais simples. O segundo prompt é usado para mapear essa sequência simplificada de etapas em ações reais.

Ambos os prompts são bastante longos e usam notação Python comprimida para a ação a fim de economizar tokens.

O primeiro passo quebra a descrição da linguagem natural em uma linguagem mais explícita, porém ainda humana. Isso ajudará o passo de mapeamento a entender as coisas em sequência.
Por exemplo, `"pular para a esquerda duas vezes"` é reduzido para `"pular para a esquerda"` -> `TURN_LEFT + JUMP` e `"pular para a esquerda"` -> `(TURN_LEFT + JUMP) * 4`. Da mesma forma, o passo de redução é o que é usado para explicar o conceito de repetição (duas vezes, três vezes, etc.).

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: look right after look twice\nA: &#34;look right after look twice&#34; can be solved by: &#34;look right&#34;, &#34;look twice&#34;.\n\nQ: jump opposite right thrice and walk\nA: &#34;jump opposite right thrice&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;. &#34;walk&#34; can be solved by: &#34;walk&#34;. So, &#34;jump opposite right thrice and walk&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: run left twice and run right\nA: &#34;run left twice&#34; can be solved by: &#34;run left&#34;, &#34;run left twice&#34;. &#34;run right&#34; can be solved by &#34;run right&#34;. So, &#34;run left twice and run right&#34; can be solved by: &#34;run left&#34;, &#34;run left twice&#34;, &#34;run right&#34;.\n\nQ: run opposite right\nA: &#34;run opposite right&#34; can be solved by &#34;run opposite right&#34;.\n\nQ: look opposite right thrice after walk\nA: &#34;look opposite right thrice&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look opposite right thrice after walk&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: jump around right\nA: &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;. So, &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;.\n\nQ: look around right thrice and walk\nA: &#34;look around right thrice&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look around right thrice and walk&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;, &#34;walk&#34;.\n\nQ: turn right after run right thrice\nA: &#34;turn right&#34; can be solved by: &#34;turn right&#34;. &#34;run right thrice&#34; can be solved by: &#34;run right&#34;, &#34;run right thrice&#34;. So, &#34;turn right after run right thrice&#34; can be solved by: &#34;turn right&#34;, &#34;run right&#34;, &#34;run right thrice&#34;.\n\nQ: jump around left twice after walk opposite left thrice\nA:"
     initial-response="&#34;jump around left twice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; can be solved by: &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;. So, &#34;jump around left twice after walk opposite left thrice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;, &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Segunda tentativa: Menor para o Maior, segundo passo - Mapeamento

No segundo passo, usamos a saída da redução e novamente usamos um prompt bem longo (14 casos) para traduzir a descrição reduzida em linguagem natural em uma sequência de ações.

Aqui, injetamos a saída do primeiro passo:

> "pular em volta à esquerda duas vezes" pode ser resolvido por: "pular à esquerda", "pular em volta à esquerda", "pular em volta à esquerda duas vezes". "andar na direção oposta à esquerda três vezes" pode ser resolvido por: "andar na direção oposta à esquerda", "andar na direção oposta à esquerda três vezes". Então, "pular em volta à esquerda duas vezes depois de andar na direção oposta à esquerda três vezes" pode ser resolvido por: "pular à esquerda", "pular em volta à esquerda", "pular em volta à esquerda duas vezes", "andar na direção oposta à esquerda", "andar na direção oposta à esquerda três vezes".

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: &#34;turn left&#34; outputs &#34;TURN LEFT&#34;.\n\nQ: turn right\nA: &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;.\n\nQ: jump left\nA: The output of &#34;jump left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;jump&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. &#34;jump&#34; outputs &#34;JUMP&#34;. So concatenating the output of &#34;turn left&#34; and the out- put of &#34;jump&#34; leads to &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;. So the output of &#34;jump left&#34; is &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;.\n\nQ: run right\nA: The output of &#34;run right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;run&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. &#34;run&#34; outputs &#34;RUN&#34;. So concatenating the output of &#34;turn right&#34; and the output of &#34;run&#34; leads to &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;. So the output of &#34;run right&#34; is &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;.\n\nQ: look twice\nA: The output of &#34;look twice&#34; concatenates: the output of &#34;look&#34;, the output of &#34;look&#34;. &#34;look&#34; outputs &#34;LOOK&#34;. So repeating the output of &#34;look&#34; two times leads to &#34;LOOK&#34; * 2. So the output of &#34;look twice&#34; is &#34;LOOK&#34; * 2.\n\nQ: run and look twice\nA: The output of &#34;run and look twice&#34; concatenates: the output of &#34;run&#34;, the output of &#34;look twice&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;look twice&#34; outputs &#34;LOOK&#34; * 2. So concatenating the output of &#34;run&#34; and the output of &#34;look twice&#34; leads to &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2. So the output of &#34;run and look twice&#34; is &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2.\n\nQ: jump right thrice\nA: The output of &#34;jump right thrice&#34; concatenates: the output of &#34;jump right&#34;, the output of &#34;jump right&#34;, the output of &#34;jump right&#34;. &#34;jump right&#34; outputs &#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;. So repeating the output of &#34;jump right&#34; three times leads to (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3. So the output of &#34;jump right thrice&#34; is (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3.\n\nQ: walk after run\nA: The output of &#34;walk after run&#34; concatenates: the output of &#34;run&#34;, the output of &#34;walk&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;run&#34; and the output of &#34;walk&#34; leads to &#34;RUN&#34; &#43; &#34;WALK&#34;. So the output of &#34;walk after run&#34; is &#34;RUN&#34; &#43; &#34;WALK&#34;.\n\nQ: turn opposite left\nA: The output of &#34;turn opposite left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; twice leads to &#34;TURN LEFT&#34; * 2. So the output of &#34;turn opposite left&#34; is &#34;TURN LEFT&#34; * 2.\n\nQ: turn around left\nA: The output of &#34;turn around left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; four times leads to &#34;TURN LEFT&#34; * 4. So the output of &#34;turn around left&#34; is &#34;TURN LEFT&#34; * 4.\n\nQ: turn opposite right\nA: The output of &#34;turn opposite right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; twice leads to &#34;TURN RIGHT&#34; * 2. So the output of &#34;turn opposite right&#34; is &#34;TURN RIGHT&#34; * 2.\n\nQ: turn around right\nA: The output of &#34;turn around right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; four times leads to &#34;TURN RIGHT&#34; * 4. So the output of &#34;turn around right&#34; is &#34;TURN RIGHT&#34; * 4.\n\nQ: walk opposite left\nA: The output of &#34;walk opposite left&#34; concatenates: the output of &#34;turn opposite left&#34;, the output of &#34;walk&#34;. &#34;turn opposite left&#34; outputs &#34;TURN LEFT&#34; * 2. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;turn opposite left&#34; and the output of &#34;walk&#34; leads to &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;. So the output of &#34;walk opposite left&#34; is &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;.\n\nQ: walk around left\nA: The output of &#34;walk around left&#34; concatenates: the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;. &#34;walk left&#34; outputs &#34;TURN LEFT&#34; &#43; &#34;WALK&#34;. So repeating the output of &#34;walk around left&#34; four times leads to (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4. So the output of &#34;walk around left&#34; is (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4.\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="The output of &#34;jump around left twice after walk opposite left thrice&#34; concatenates: the output of &#34;walk opposite left thrice&#34;, the output of &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; outputs &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3. &#34;jump around left twice&#34; outputs (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So concatenating the output of &#34;walk opposite left thrice&#34; and the output of &#34;jump around left twice&#34; leads to &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So the output of &#34;jump around left twice after walk opposite left thrice&#34; is &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4."
     max-tokens="1024" box-rows="18"
     model-temp="0.2" ></div>

### Resultados

MpM leva a várias melhorias:

- aumento da precisão em relação à Cadeia de Pensamento
- aumento da generalização em problemas mais difíceis do que os do prompt
- melhoria significativa no desempenho na generalização composicional, em particular no benchmark SCAN (@lake2018scan)

A solicitação padrão com text-davinci-002 (o modelo usado no artigo) resulta em 6% de problemas SCAN resolvidos com sucesso, enquanto a solicitação Menor para o Maior resulta em uma impressionante taxa de sucesso de 76%. Os resultados são ainda mais significativos com code-davinci-002, onde a solicitação Menor para o Maior alcança uma taxa de sucesso de 99,7%.