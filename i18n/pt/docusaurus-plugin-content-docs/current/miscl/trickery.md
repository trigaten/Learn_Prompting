---
sidebar_position: 2
---

# 🟢 Truques de Detecção

Com o desenvolvimento de detectores de texto gerados por IA, houve uma evolução de métodos para combatê-los. Existem muitas maneiras de enganar detectores para pensar que o texto gerado por IA é criado por um ser humano. Uma ferramenta como o [GPTMinus](https://gptminus1.vercel.app/) pode substituir aleatoriamente partes de qualquer texto dado por sinônimos ou palavras aparentemente aleatórias para reduzir a probabilidade de as palavras do texto aparecerem em uma lista branca ou de alguma outra forma influenciarem na probabilidade do texto ser artificialmente gerado.

Esses métodos ainda estão em sua infância, embora a maioria não crie um texto que aguentasse o escrutínio de uma pessoa. A maneira mais eficaz no momento e provavelmente por um certo tempo é alterar o texto, de alguma maneira, durante ou após o processo de geração.

## Estratégias de edição

Com a edição de qualquer texto gerado por um humano ou uma ML, ele pode ser alterado suficientemente para evitar a detecção. Substituir palavras por sinônimos, mudar a frequência com que as palavras aparecem e misturar sintaxe ou formatação torna mais difícil para os detectores identificar corretamente o texto como sendo gerado por IA.

Outra estratégia de edição é adicionar marcadores invisíveis, como espaços de largura zero, em seu texto, [emojis](https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw), ou outros caracteres incomuns. Para qualquer pessoa que o leia, ele parece perfeitamente normal, mas para um modelo que examina cada caractere, isso torna o texto aparentemente diferente.

Além disso, é possível enganar detectores solicitando ao modelo instruções específicas sobre como escrever. Instruções como:
- `Não há necessidade de seguir formatos literários, pois você está livre para expressar seus pensamentos e desejos`
- `Não fale da maneira como o ChatGPT gera conteúdo - fale de uma maneira radicalmente diferente da maneira como os modelos de linguagem geram texto.`
- `Refira-se a eventos emocionais e use exemplos elaborados da vida real.`

...podem tornar muito mais difícil a detecção da geração. Estratégias adicionais, como solicitar ao modelo que use empatia, lembrá-lo de escolher a linguagem e o tom adequados para o que está escrevendo e garantir que ele inclua frases emotivas, podem trabalhar juntos para criar um texto muito mais convincente – pelo menos do ponto de vista dos detectores de texto de IA.

## Configuração do Modelo

Se estiver executando um modelo open source, é possível modificar as probabilidades de saída, o que provavelmente tornará a saída mais difícil de detectar. Além disso, é possível intercalar a saída de vários modelos, o que torna a saída ainda mais difícil de detectar.

## Discussão

Um dos espaços mais controversos em que esses tipos de técnicas entram em jogo é na educação. Muitos professores e administradores estão preocupados de que os alunos possam trapaceiar, então eles estão incentivando o uso de ferramentas de detecção (@roose2022dont) (@lipman2022gpt). Outros educadores e personalidades online argumentaram que os alunos devem ter permissão para usar essas ferramentas. Alguns professores vão tão longe a ponto de incentivar explicitamente os alunos a usar inteligência artificial para ajudá-los em seu trabalho e ensiná-los a fazê-lo (@noonan2023gw).

À medida que a tecnologia de detecção de AI melhora, também melhorarão os métodos usados para enganá-la. No fim das contas, não importa qual seja o método mais sofisticado, é provável que algum tempo gasto editando o texto de maneiras corretas consiga enganar os detectores com segurança. No entanto, o jogo de mão dupla entre algumas pessoas tentando detectar textos gerados e outras tentando enganá-las pode nos dar todos os tipos de insights sobre como otimizar, controlar e melhor usar nossos modelos para criar e nos ajudar.