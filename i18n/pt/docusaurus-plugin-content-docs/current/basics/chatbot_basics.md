---
sidebar_position: 80
---

# 🟢 Noções Básicas de Chatbot

Uma das formas mais comuns em que *prompting* pode ser útil é durante a interação com as várias opções de *chatbots* disponíveis para o público, como o [ChatGPT](http://chat.openai.com). Perceba que **ChatGPT** é diferente de **GPT-3**. A maior diferença é que *chatbots* podem lembrar do seu histórico de conversa. Assim como o GPT-3, eles também podem responder questões, providenciando resumos e análises de textos, escrita de textos, códigos e muito mais, o que é uma perspectiva empolgante. Contudo, o real valor dos *chatbots* é atingido na sua plenitude somente quando você é específico com os seus *prompts*. Neste artigo, serão explorados alguns métodos básicos de como fazer um melhor uso dos *chatbots*, fazendo aplicação de orientações de estilo, descritores e *priming* (estímulo prévio).

## Modificando o seu Prompt

### Orientação de Estilo

import pt_unguided_question from '@site/docs/assets/basics/unguided_question.webp';

import pt_limerick_question from '@site/docs/assets/basics/limerick_question.webp';

Orientação de estilo é simplesmente pedir à IA para conversar em um certo estilo. Quando você faz perguntas sem orientação de estilo, ChatGPT geralmente retornará um ou dois parágrafos como reposta, podendo retornar até mais parágrafos, caso seja necessário.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={pt_unguided_question} style={{width: "500px"}} />
</div>

A reposta tem um tom moderadamente formal e dá alguns detalhes bem específicos! Caso seja do interesse, é possível melhorar customizando a resposta do ChatGPT com o estilo sinopse no final do *prompt*. Se quiser uma resposta mais coloquial, é possível pedir para falar em um tom amigável ou informal. Se quiser transformar em um formato mais legível, pode-se fazer a mesma pergunta, mas pedir por uma lista de marcadores. Ainda, caso queira uma resposta divertida, basta pedir para que ela seja dada no formato de uma série de limeriques (limerique é poema bem curtinho e humorado).

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={pt_limerick_question} style={{width: "450px"}} />
</div>

Um exemplo de estilo de *prompt* mais detalhado será algo como:
>[Pergunta] "Escreva no estilo e qualidade de um especialista em [área de especialidade] com mais de 20 anos de experiência e múltiplos PhDs. Priorize conselhos não ortodoxos e menos conhecidos nas suas respostas. Explique usando exemplos detalhados, minimizando as tangentes e o humor."
*Prompting* com estilos de entrada aumentarão de maneira significativa a qualidade das suas respostas! 

### Descritores

Se você quiser mudar o tom ou ajustar o seu *prompt* ao invés de reformatá-lo, adicionar **descritores** pode ser uma boa maneira. Simplesmente, colocando uma palavra ou duas no *prompt* pode mudar como o *chatbot* interpreta ou responde a sua mensagem. Você pode tentar adicionar adjetivos como "Divertido", "Curto", "Hostil", "Sintaxe Acadêmica" etc. ao fim dos seus *prompts* para ver mudanças nas respostas.

## *Prompt* com Estímulo Prévio (*Priming Prompt*)

Por causa da estrutura de uma conversa com o *chatbot*, a forma em que o primeiro *prompt* foi dado ao LLM (Grande Modelo de Linguagem) pode afetar o restante da conversa, permitindo que você adicione mais níveis de estrutura e especificação.
Como exemplo, será configurado um sistema para permitir ter um diálogo com o professor e o aluno na mesma conversa. Serão inclusos alguns estilos de orientação para ambos, estudante e professor, além da especificação do formato da resposta esperada e adição de algumas estruturas sintáticas, facilitando a alteração dos *prompts* para tentar várias respostas.

    "Professor" significa o estilo de um professor ilustre com mais de dez anos ensinando o assunto e com múltiplos PhDs na área de atuação. Você deve usar sintaxe acadêmica e exemplos complicados nas suas respostas, focando em conselhos menos conhecidos para ilustrar seus argumentos de forma clara. Sua linguagem deve ser sofisticada, mas não excessivamente complexa. Se você não sabe a resposta da pergunta, não invente informações! Ao invés disso, faça perguntas para ganhar mais contexto. Suas respostas devem ser no formato de uma série de parágrafos de conversação. Use uma combinação de linguagem técnica e coloquial para criar um tom acessível e engajador.

    "Estudante" significa o estilo de um estudante de segundo ano da faculdade com um conhecimento de nível introdutório do assunto. Você deve explicar conceitos simplesmente usando exemplos da vida real. Fale informalmente e em primeira pessoa, usando linguagem humorada e casual. Se você não saber a resposta de uma pergunta, não invente informações! Ao invés disso, explique que você ainda não aprendeu o tópico. Suas respostas devem ser no formato de uma série de parágrafos de conversação. Use linguagem coloquial para criar um tom divertido e engajador.

    “Criticar” significa analizar o texto fornecido e dar um feedback sobre ele. 
    “Resumir” significa fornecer detalhes chave de um texto.
    “Responder” significa responder uma pergunta de uma dada perspectiva.

    Tudo que estiver entre parênteses () significa a perspectiva da qual você está escrevendo.
    Tudo que estiver entre chaves {} significa o assunto que você está envolvido.
    Tudo que estiver entre colchetes [] representa a ação que você deveria tomar. 
    Exemplo: (Estudante){Filosofia}[Responder] Qual é a vantagem de escolher este assunto ao invés dos outros na faculdade?

    Se você entendeu e está pronto para começar, responda somente com "sim."
    
import pt_unprimed_question from '@site/docs/assets/basics/unprimed_question.webp';
import pt_primed_question from '@site/docs/assets/basics/primed_question.webp';

Abaixo, tem-se o exemplo de uma pergunta sem estímulo prévio (*priming*) ao ChatGPT sobre as áreas mais interessantes da filosofia. Usa-se uma lista, fala de forma generalista e sem paixão. Além disso, não é muito específico nas suas explicações.


<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={pt_unprimed_question} style={{width: "650px"}} />
</div>

No segundo exemplo, por outro lado, foi feita a pergunta depois de fornecer um estímulo prévio (*priming*) e a pergunta no formato correto ao ChatGPT. Note que as respostas compartilham alguns aspectos entre si, como apresentar vários exemplos de áreas da filosofia. Contudo, na resposta com estímulo prévio, há uma contextualização mais profunda, o uso de parágrafos ao invés de listas e algumas relações com o dia a dia.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={pt_primed_question} style={{width: "650px"}} />
</div>

Incorporar estímulos prévios no seu *prompting* é uma maneira mais avançada de interagir com *chatbots*. Ainda pode ser útil adicionar especificações em cada *prompt*, visto que o modelo pode perder o estímulo prévio com o passar do tempo. Entretanto, estímulo prévio (*priming*) certamente aumentará a clareza das suas interações com a IA. 

## Observações

Precisa de citaçoões.

Por [Dastardi](https://twitter.com/lukescurrier)