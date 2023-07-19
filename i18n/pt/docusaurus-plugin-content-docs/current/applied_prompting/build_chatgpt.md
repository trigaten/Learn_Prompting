---
sidebar_position: 4
---

# 🟢 Construindo o ChatGPT através do GPT-3

import Skippy from '@site/docs/assets/basic_applications/skippy_chatbot.webp'    
import SkippyHeader from '@site/docs/assets/basic_applications/skippy_chatbot_header.webp'    
import Therapy from '@site/docs/assets/basic_applications/therapy_chatbot.gif'
import ChatGPT from '@site/docs/assets/basic_applications/chatgpt_ui_diagram.webp'

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={SkippyHeader} style={{width: "700px"}} />
</div>

## Introdução 

[ChatGPT](https://chat.openai.com/chat) vem ganhando bastante popularidade, com milhares de usuários novos a cada semana. Surpreendentemente, o modelo sob o qual é construido, chamado GPT-3, foi lançado em 2020 e aberto ao público <a href="https://openai.com/blog/api-no-waitlist/">há um ano atrás!</a>   

Para aqueles que não estão familiarizados com o assunto, o ChatGPT é um novo modelo de linguage da OpenAI baseado no GPT-3. que foi otimizado para conversas (@chatgpt2022). Ele possui uma interface amigável e simples, ara que você possa fazer uma pergunta e receba uma resposta de uma inteligência artificial assistiva. Experimente você mesmo no link [chat.openai.com](https://chat.openai.com/chat). 

While the early versions of GPT-3 weren't as advanced as the current GPT-3.5 series, they were still impressive. These models have been available through an API and a <a href="https://beta.openai.com/playground">playground web UI interface</a> that lets you tune certain configuration hyperparameters and test prompts. GPT-3 gained significant traction, but it did not approach the virality of ChatGPT. 

O que torna o ChatGPT tão bem-sucedido, em comparação ao GPT-3, é sua acessibilidade como um assistente de inteligência artificial direto para a pessoa comum, independentemente de seu conhecimento em ciência de dados, modelos de linguagem ou inteligência artificial.

Neste artigo, eu dou uma visão geral de como chatbots como o ChatGPT podem ser implementados usando um grande modelo de linguagem como o GPT-3.

## Motivação
Esse artigo foi escrito em partes como uma reação ao tweet da <a href="https://twitter.com/goodside">Riley Goodside</a>, explicando como o ChatGPT poderia ter sido implementado
This article was written in part because of a tweet by , noting how ChatGPT could have been implemented.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to make your own knock-off ChatGPT using GPT‑3 (text‑davinci‑003) — where you can customize the rules to your needs, and access the resulting chatbot over an API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">December 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Da mesma forma como outro modelos da série GPT-3.5, ChatGPT foi treinado usando [RLHF](https://huggingface.co/blog/rlhf), mas ele é eficaz quando usamos **prompts eficazes**.

## O Prompt

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Conversa com Skippy no ChatGPT.</p>
</div>

<a href="https://learnprompting.org/docs/basics/prompting">Prompting é o processo de passar instruções para uma AI fazer algo.</a> Como você provavelmente viu em exemplos online do ChatGPT, você pode dar instruções para ele fazer praticamente qualquer coisa. Os casos de uso comuns incluem resumir textos, escrever conteúdo com base em uma descrição ou criar coisas como poemas, receitas e muito mais.
<p></p>
O ChatGPT é tanto um modelo de linguagem quanto uma interface de usuário. A entrada de instruções fornecida pelo usuário à interface é inserida em uma instrução maior que contém toda a conversa entre o usuário e o ChatGPT. Isso permite que o modelo de linguagem subjacente compreenda o contexto da conversa e responda adequadamente.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={ChatGPT} style={{width: "600px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Inserção de exemplo de prompt do usuário antes de enviar para o modelo</p>
</div>

O modelo de linguagem completa a prompt descobrindo quais palavras vêm a seguir com base nas probabilidades que ele aprendeu durante o pré-treinamento(@jurafsky2009).

<p></p>

O GPT-3 é capaz de 'aprender' a partir de uma instrução simples ou alguns exemplos no prompt. Este último é chamado de aprendizado few-shot ou aprendizado contextual (@brown2020language). No prompt do chatbot acima, crio um chatbot fictício chamado Skippy e o instruo a fornecer respostas aos usuários. O GPT-3 entende o formato de ida e volta, `USUÁRIO: {entrada do usuário}` e `SKIPPY: {resposta do skippy}`. O GPT-3 entende que Skippy é um chatbot e as trocas anteriores são uma conversa, de modo que quando fornecemos a próxima entrada do usuário, "Skippy" responderá.

### Memorização
As trocas anteriores entre Skippy e o usuário são adicionadas ao próximo prompt. Cada vez que fornecemos mais entrada do usuário e obtemos mais saída do chatbot, o prompt se expande para incorporar essa nova troca. É assim que chatbots como Skippy e ChatGPT **podem lembrar entradas anteriores**. No entanto, há um limite para o quanto um chatbot GPT-3 pode lembrar.

Os prompts podem ficar enormes após várias trocas, especialmente se estamos usando o chatbot para gerar respostas longas, como postagens em blog. Os prompts enviados ao GPT-3 são convertidos em tokens, que são palavras individuais ou partes delas. Há um limite de <a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">4097 tokens (cerca de 3000 palavras)</a> para o prompt + resposta gerada para modelos GPT-3, incluindo o ChatGPT.

### Alguns Exemplos
Existem muitos casos de uso diferentes de prompts de chatbot que armazenam conversas anteriores. O ChatGPT pretende ser um assistente geral para todas as finalidades e, em minha experiência, raramente faz perguntas de acompanhamento.


#### Um Psicólogo Chatbot te Pergunta Sobre o Seu Dia

Pode ser útil ter um chatbot que faça perguntas e obtenha feedback do usuário. Abaixo está um exemplo de prompt de chatbot de terapia que fará perguntas e seguirá para ajudar o usuário a pensar sobre seu dia.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Therapy chatbot prompt</p>
</div>

#### Converse Com o Seu "Eu Mais Movo" Usando um Diário Antigo

<a href="https://twitter.com/michellehuang42">Michelle Huang</a>usou o GPT-3 para conversar com o seu eu mais jovem. O prompt usa um pouco de contexto, neste caso, antigas entradas de diário, emparelhado com um formato de conversa de estilo de chatbot. GPT-3 é capaz de imitar uma personalidade com base nessas entradas.

<p></p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my &quot;inner child&quot;<br/><br/>some reflections below:</p>&mdash; michelle huang (@michellehuang42) <a href="https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw">November 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Prompt do Tweet:
```markdown
O texto seguinte é uma conversa entre a Michelle atual (idade [redigido]) e a Michelle jovem (idade 14).

A Michelle jovem escreveu os seguintes registros em seu diário:
[registros do diário aqui]

Michelle atual: [digite suas perguntas aqui]
```

A autora observa que os registros do diário podem atingir o limite de tokens. Nesse caso, você pode escolher algumas entradas selecionadas ou tentar resumir várias entradas.

## Implementação
Nessa seção eu vou guiar a codificação de um chatbot simples alimentado por GPT-3 em Python. Incluir o GPT-3 em um aplicativo que você está construindo é incrivelmente fácil usando a API da OpenAI. Você precisará criar uma conta na OpenAI e obter uma chave de API. Confira a documentação deles <a href="https://beta.openai.com/docs/introduction">aqui</a>.

Visão geral do que precisamos fazer:

1. Formatar a entrada do usuário em uma prompt de chatbot para GPT-3
2. Obter a resposta do chatbot como uma conclusão do GPT-3
3. Atualizar a prompt com a entrada do usuário e a resposta do chatbot
4. Repetir o processo

Aqui está a prompt que usarei. Podemos usar o Python para substituir <conversation history\> e <user input\> pelos seus valores reais.

```python
chatbot_prompt = """
    Considere que você é um chatbot avançado chamado SKIPPY, e seu objetivo principal é ajudar usuários da melhor maneira possível. Isso pode envolver responder perguntas, providenciar informações úteis, ou completar tarefas de acordo com o input do usuário. Para que você possa ajudar os usuários de maneira eficiente, é importante que você seja detalhado e explique suas respostas. Use exemplos e evidências para justificar sua respostas, recomendações ou soluções. Lembre-se que você sempre deve priorizar as necessidades e satisfação do usuário. Seu objetivo principal é providenciar uma experiência útil e agradável para o usuário.

    <conversation history>

    User: <user input>
    Chatbot:"""
```

Eu mantenho o controle tanto da próxima entrada do usuário quanto da conversa anterior. Uma nova entrada/saída entre o chatbot e o usuário é anexada a cada iteração.

```python
import openai

openai.api_key = "SUA API KEY DEVE SER INCLUIDA AQUI"
model_engine = "text-davinci-003"
chatbot_prompt = """
    Considere que você é um chatbot avançado chamado SKIPPY, e seu objetivo principal é ajudar usuários da melhor maneira possível. Isso pode envolver responder perguntas, providenciar informações úteis, ou completar tarefas de acordo com o input do usuário. Para que você possa ajudar os usuários de maneira eficiente, é importante que você seja detalhado e explique suas respostas. Use exemplos e evidências para justificar sua respostas, recomendações ou soluções. Lembre-se que você sempre deve priorizar as necessidades e satisfação do usuário. Seu objetivo principal é providenciar uma experiência útil e agradável para o usuário.

<conversation history>

User: <user input>
Chatbot:"""


def get_response(conversation_history, user_input):
    prompt = chatbot_prompt.replace(
        "<conversation history>", conversation_history).replace("<user input>", user_input)

    # Pega a resposta do GPT-3
    response = openai.Completion.create(
        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)

    # Extrai a resposta do objeto response_text
    response_text = response["choices"][0]["text"]

    chatbot_response = response_text.strip()

    return chatbot_response


def main():
    conversation_history = ""

    while True:
        user_input = input("> ")
        if user_input == "exit":
            break
        chatbot_response = get_response(conversation_history, user_input)
        print(f"Chatbot: {chatbot_response}")
        conversation_history += f"User: {user_input}\nChatbot: {chatbot_response}\n"

main()
```

<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">Aqui está o link</a> para o código complete de um chatbox simples.

<p></p>

Agora tudo que você precisa fazer é construir uma página bonita no front-end para que os usuários possam interagir com o seu chatbot!

Escrito por [jayo78](https://twitter.com/jayo782).
Traduzido por [gabi fonseca](https://imgabi.com)