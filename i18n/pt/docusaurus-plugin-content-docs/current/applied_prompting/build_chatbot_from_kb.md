---
sidebar_position: 40
---

# 🟢 Chatbot + Base de Conhecimento

import ImageIntents from '@site/docs/assets/basic_applications/chatbot_from_kb_intents.webp'
import ImageGPT3 from '@site/docs/assets/basic_applications/chatbot_from_kb_gpt3.webp'
import ImageGPT3Organized from '@site/docs/assets/basic_applications/chatbot_from_kb_gpt3_organized.webp'
import ImagePrompt from '@site/docs/assets/basic_applications/chatbot_from_kb_prompt.webp'
import ImageLogin from '@site/docs/assets/basic_applications/chatbot_from_kb_login.webp'


Os avanços recentes em grandes modelos de linguagem (LLMs), como o [GPT-3](https://arxiv.org/abs/2005.14165) e o [ChatGPT](https://chat.openai.com/chat), criaram muito buzz na indústria de tecnologia. Esses modelos são incrivelmente poderosos para geração de conteúdo, mas também têm algumas desvantagens, como bias(@nadeem-etal-2021-stereoset) e alucinações(@Ji_2022). Uma área em que esses LLMs podem ser particularmente úteis é o desenvolvimento de chatbots.

## Chatbots Baseados em Intenções

Os chatbots tradicionais são geralmente baseados em intenções, o que significa que são projetados para responder a intenções específicas do usuário. Cada intenção é composta por um conjunto de perguntas de amostra e uma resposta associada. Por exemplo, a intenção "Tempo" pode incluir perguntas de amostra como "Como está o tempo hoje?" ou "Vai chover hoje?" e uma resposta como "Hoje vai ser ensolarado". Quando um usuário faz uma pergunta, o chatbot compara a pergunta com a intenção e com as perguntas de amostra mais semelhantes, retornando a resposta associada.


<div style={{textAlign: 'left'}}>
  <img src={ImageIntents} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Como um chatbox tradicional funciona. Imagem produzida pela tradutora (adaptação do autor).</p>
</div>

No entanto, os chatbots baseados em intenção têm seu próprio conjunto de problemas. Um problema é que eles exigem um grande número de intenções específicas para fornecer respostas específicas. Por exemplo, as expressões do usuário como "Não consigo fazer login", "Esqueci minha senha" ou "Erro de login" podem precisar de três respostas diferentes e, portanto, três intenções diferentes, embora sejam todas bastante semelhantes.

## Como o GPT-3 pode ajudar
Aqui é onde o GPT-3 pode ser especialmente útil. Em vez de ter muitas intenções muito específicas, cada intenção pode ser mais ampla e aproveitar um documento de sua [Base de Conhecimento](https://en.wikipedia.org/wiki/Knowledge_base). Uma Base de Conhecimento (BC) é informação armazenada como dados estruturados e não estruturados, prontos para serem usados para análise ou inferência. Sua BC pode ser composta por uma série de documentos explicando como usar seus produtos.

Dessa forma, cada intenção está associada a um documento em vez de uma lista de perguntas e uma resposta específica, por exemplo, uma intenção para "problemas de login", uma intenção para "como se inscrever", etc. Quando um usuário faz uma pergunta sobre login, podemos passar o documento "problemas de login" para o GPT-3 como informações de contexto e gerar uma resposta específica para a pergunta do usuário.

<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Chatbox com Banco do Conhecimento + GPT-3. Imagem produzida pela tradutora (adaptação do autor).</p>
</div>

Esta abordagem reduz o número de intenções que precisam ser gerenciadas e permite respostas que são melhor adaptadas a cada pergunta. Além disso, se o documento associado à intenção descrever processos diferentes (por exemplo, um processo para "fazer login no site" e outro para "fazer login no aplicativo móvel"), o GPT-3 pode automaticamente solicitar esclarecimentos ao usuário antes de fornecer a resposta final.

## Por que não podemos passar toda a base de conhecimento para o GPT-3?

Hoje, LLMs como o GPT-3 têm um tamanho máximo de prompt de cerca de 4.000 tokens (para o modelo [`text-davinci-003`](https://beta.openai.com/docs/models/gpt-3)), o que é muito, mas não o suficiente para alimentar toda a base de conhecimento em um único prompt. Os LLMs têm um tamanho máximo de prompt por razões computacionais, já que a geração de texto com eles envolve uma série de cálculos que aumentam rapidamente à medida que o tamanho do prompt aumenta.

LLMs futuros podem não ter essa limitação, mantendo as capacidades de geração de texto. No entanto, por enquanto, precisamos projetar uma solução em torno disso.

## Como um chatbot com GPT-3 poderia funcionar
A sequência do chatbot pode ser composta por duas etapas:

1.Primeiro, precisamos selecionar a intenção apropriada para a pergunta do usuário, ou seja, precisamos recuperar o documento correto de nossa base de conhecimento.
2. Em seguida, uma vez que temos o documento correto, podemos aproveitar o GPT-3 para gerar uma resposta apropriada para o usuário. Ao fazê-lo, precisamos criar um prompt adequado.

A primeira etapa é essencialmente resolvida por uma [busca semântica](https://en.wikipedia.org/wiki/Semantic_search). Podemos usar modelos pré-treinados da biblioteca [sentence-transformers](https://www.sbert.net/examples/applications/semantic-search/README.html) e atribuir facilmente uma pontuação para cada documento. O documento com a pontuação mais alta é aquele que será usado para gerar a resposta do chatbot.

<div style={{textAlign: 'left'}}>
  <img src={ImageGPT3Organized} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Como um chatbot que usa o GPT-3 poderia funcionar. O GPT-3 poderia ser usado para gerar uma resposta apropriada aproveitando as informações dos documentos da base de conhecimento. Imagem produzida pela tradutora (adaptação do autor).</p>
</div>

## Gerando Respostas com o GPT-3
Uma vez que temos o documento certo, precisamos criar um prompt adequado para ser usado com o GPT-3 na geração da resposta. Nos experimentos seguintes, sempre usaremos o modelo `text-davinci-003` com uma temperatura de `0.7`.

Para criar o prompt, vamos experimentar usando:

- [**Role-prompting**](https://learnprompting.org/docs/basics/roles): uma técnica heurística que atribui uma função específica para a AI.
- **Informações relevantes da base de conhecimento**, ou seja, o documento recuperado na etapa de busca semântica.
- **As últimas mensagens trocadas entre o usuário e o chatbot**. Elas são úteis para mensagens enviadas pelo usuário onde todo o contexto não é especificado. Veremos um exemplo disso mais tarde. Dê uma olhada [neste exemplo](https://learnprompting.org/docs/applied_prompting/build_chatgpt) para ver como gerenciar conversas com o GPT-3.
- Por último, **a pergunta do usuário**.

<div style={{textAlign: 'left'}}>
  <img src={ImagePrompt} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Informação usada para criar o prompt para o GPT-3. Imagem produzida pela tradutora (adaptação do autor)</p>
</div>

Vamos começar nosso prompt usando a técnica <span className="yellow-highlight">role-prompting</span>.

<pre>
    <span className="yellow-highlight">Considere que você é um chatbot avançado chamado SKIPPY, e seu objetivo principal é ajudar usuários da melhor maneira possível.</span>
</pre>

Em seguida, suponha que a etapa de busca semântica extrai o seguinte documento da nossa base de conhecimento. Todos os documentos descrevem como o produto VideoGram funciona, que é um produto imaginário semelhante ao Instagram, mas apenas para vídeos.

<div style={{textAlign: 'left'}}>
  <img src={ImageLogin} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>A document explaining how login to VideoGram works. Image by the author.</p>
</div>

Nós podemos adicionar <span className="yellow-highlight">o seu conteúdo</span> dentro do prompt da seguinte forma:

<pre>
    Considere que você é um chatbot avançado chamado SKIPPY, e seu objetivo principal é ajudar usuários da melhor maneira possível<br/><br/>

    <span className="yellow-highlight">
    INÍCIO DO CONTEXTO<br/>Login no VideoGram pelo website:<br/>
    1. Abra o seu navegador e vá para o site do VideoGram.<br/>
    2. Clique no botão "Login" localizado no canto superior direito da página.<br/>
    3. Na página de login, digite seu nome de usuário e senha do VideoGram.<br/>
    4. Depois de inserir suas credenciais, clique no botão "Login".<br/>
    5. Você agora deverá estar conectado à sua conta do VideoGram.<br/>
    6. Login no VideoGram pelo aplicativo móvel:<br/>
    <br/>

    1. Abra o aplicativo VideoGram em seu dispositivo móvel.<br/>
    2. Na página principal, toque no botão "Login" localizado no canto inferior direito.<br/>
    3. Na página de login, digite seu nome de usuário e senha do VideoGram.<br/>
    4. Depois de inserir suas credenciais, toque no botão "Login".<br/>
    5. Você agora deverá estar conectado à sua conta do VideoGram.<br/>
    FIM DO CONTEXTO<br/>
    </span>
</pre>

Por último, precisamos incluir <span className="yellow-highlight">a conversa e a pergunta do usuário</span> no fim do prompt, como fizemos no último exemplo.

<pre>
    Considere que você é um chatbot avançado chamado SKIPPY, e seu objetivo principal é ajudar usuários da melhor maneira possível<br/><br/>
    <span className="yellow-highlight">
    INÍCIO DO CONTEXTO<br/>Login no VideoGram pelo website:<br/>
    1. Abra o seu navegador e vá para o site do VideoGram.<br/>
    2. Clique no botão "Login" localizado no canto superior direito da página.<br/>
    3. Na página de login, digite seu nome de usuário e senha do VideoGram.<br/>
    4. Depois de inserir suas credenciais, clique no botão "Login".<br/>
    5. Você agora deverá estar conectado à sua conta do VideoGram.<br/>
    6. Login no VideoGram pelo aplicativo móvel:<br/>
    <br/>
    1. Abra o aplicativo VideoGram em seu dispositivo móvel.<br/>
    2. Na página principal, toque no botão "Login" localizado no canto inferior direito.<br/>
    3. Na página de login, digite seu nome de usuário e senha do VideoGram.<br/>
    4. Depois de inserir suas credenciais, toque no botão "Login".<br/>
    5. Você agora deverá estar conectado à sua conta do VideoGram.<br/>
    FIM DO CONTEXTO<br/>
    </span>
    <span className="yellow-highlight">SKIPPY: Oi, eu sou o Skippy. Como posso te ajudar?<br/>
    USER: Eu não consigo encontrar o botão de login.<br/>
    SKIPPY:</span><br/>
</pre>

Passando esse prompt para o GPT-3, eu recebi a resposta a seguir:

<pre>
    <span className="bluegreen-highlight">Olá, entendo que você não consegue encontrar o botão de login. Está tentando acessar o VideoGram a partir de um navegador ou de um aplicativo móvel?
</span>
</pre>

Note que a informação gerada vem da base de conhecimento. 

## Disambiguando perguntas com GPT-3

Vamos tentar uma pergunta mais vaga, por exemplo <span className="yellow-highlight">“não dá para fazer login”</span>. Abaixo o prompt completo:

<pre>
    Considere que você é um chatbot avançado chamado SKIPPY, e seu objetivo principal é ajudar usuários da melhor maneira possível<br/><br/>
    <span className="yellow-highlight">
    INÍCIO DO CONTEXTO<br/>Login no VideoGram pelo website:<br/>
    1. Abra o seu navegador e vá para o site do VideoGram.<br/>
    2. Clique no botão "Login" localizado no canto superior direito da página.<br/>
    3. Na página de login, digite seu nome de usuário e senha do VideoGram.<br/>
    4. Depois de inserir suas credenciais, clique no botão "Login".<br/>
    5. Você agora deverá estar conectado à sua conta do VideoGram.<br/>
    6. Login no VideoGram pelo aplicativo móvel:<br/>
    <br/>
    1. Abra o aplicativo VideoGram em seu dispositivo móvel.<br/>
    2. Na página principal, toque no botão "Login" localizado no canto inferior direito.<br/>
    3. Na página de login, digite seu nome de usuário e senha do VideoGram.<br/>
    4. Depois de inserir suas credenciais, toque no botão "Login".<br/>
    5. Você agora deverá estar conectado à sua conta do VideoGram.<br/>
    FIM DO CONTEXTO<br/>
    </span>
    <span className="yellow-highlight">SKIPPY: Oi, eu sou o Skippy. Como posso te ajudar?<br/>
    USER: Não dá pra fazer login.<br/>
    SKIPPY:</span><br/>
</pre>

A primeira resposta que recebi foi a seguinte:
<pre>
    <span className="bluegreen-highlight">Desculpe por ouvir isso. Você está tentando fazer login no VideoGram? Se sim, aqui estão algumas instruções para ajudá-lo a fazer login. 

1. Abra o seu navegador e vá para o site do VideoGram.
2. Clique no botão "Login" localizado no canto superior direito da página.
3. Na página de login, digite seu nome de usuário e senha do VideoGram.
4. Depois de inserir suas credenciais, clique no botão "Login".
5. Você agora deverá estar conectado à sua conta do VideoGram.

ou 

1. Abra o aplicativo VideoGram em seu dispositivo móvel.
2. Na página principal, toque no botão "Login" localizado no canto inferior direito.
3. Na página de login, digite seu nome de usuário e senha do VideoGram.
4. Depois de inserir suas credenciais, toque no botão "Login".
5. Você agora deverá estar conectado à sua conta do VideoGram.

Espero que isso te ajude. Se você ainda tiver alguma dúvida, por favor, volte a me perguntar.</span>
</pre>

Mas podemos continuar com a conversa. O prompt completo foi removido no próximo exemplo a fim de melhorar a visibilidade dessa página.
<pre>
    USER: Não dá pra fazer login no celular.<br/>
    <span className="bluegreen-highlight">SKIPPY: Desculpe por ouvir isso. Você está tentando fazer login no VideoGram no celular? Se sim, aqui está o procedimento para ajudá-lo a fazer login:

    1. Abra o aplicativo VideoGram em seu dispositivo móvel.
    2. Na página principal, toque no botão "Login" localizado no canto inferior direito.
    3. Na página de login, digite seu nome de usuário e senha do VideoGram.
    4. Depois de inserir suas credenciais, toque no botão "Login".
    5. Você agora deverá estar conectado à sua conta do VideoGram.

    Espero que isso te ajude. Se você ainda tiver alguma dúvida, por favor, volte a me perguntar.</span>
</pre>

GPT-3 pode gerenciar a desambiguação, desde que tenha as informações contextuais corretas.

## Problemas ao Gerar Respostas com GPT-3

Os exemplos anteriores funcionaram bem. No entanto, há várias maneiras pelas quais esse chatbot pode falhar.

Se perguntarmos "O aplicativo móvel é gratuito?" para o GPT-3, passando o documento de login como contexto, muitas vezes obteremos uma resposta como "Sim, o aplicativo móvel VideoGram é gratuito para baixar e usar", mesmo que essa informação não esteja contida nas informações de contexto. Gerar informações falsas é muito ruim para chatbots de atendimento ao cliente!

GPT-3 raramente gera informações falsas quando a resposta à pergunta do usuário pode ser encontrada no contexto. Como as perguntas do usuário são frequentemente textos curtos e ambíguos, não podemos confiar na etapa de busca semântica para sempre recuperar um documento correto, e portanto, sempre estamos vulneráveis ​​à geração de informações falsas.

## Conclusão

GPT-3 é muito útil para criar chatbots conversacionais e é capaz de responder a uma série de perguntas específicas com base nas informações contextuais inseridas no prompt. No entanto, é difícil fazer o modelo produzir respostas aproveitando apenas as informações do contexto, já que o modelo tende a alucinar (ou seja, gerar novas informações, potencialmente falsas). Gerar informações falsas é um problema de gravidade diferente dependendo do caso de uso.

Escrito por [Fabio Chiusano](https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/).
Traduzido por [Gabi Fonseca](https://imgabi.com).