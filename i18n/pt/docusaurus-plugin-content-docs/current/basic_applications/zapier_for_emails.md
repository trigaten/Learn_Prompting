---
sidebar_position: 600
---

# 🟢 Usando o Zapier para Escrever E-mails

import Basic from '../assets/Zapiermail/Basic.png';
import Diagram from '../assets/Zapiermail/Diagram.png';
import Step1 from '../assets/Zapiermail/Step1.png';
import Step2 from '../assets/Zapiermail/Step2.png';
import Step3 from '../assets/Zapiermail/Step3.png';
import Step4 from '../assets/Zapiermail/Step4.png';
import Zap from '../assets/Zapiermail/Zap.png';

## Introdução

Já vimos como o GPT-3 pode ser útil quando se trata de e-mails. Mas ele pode ser ainda mais útil quando combinado com ferramentas nocode como o [Zapier](https://zapier.com) ou [Bubble.io](https://bubble.io).

Este artigo mostra um exemplo do que Zapier+GPT-3 podem fazer com apenas alguns minutos de configuração. Este artigo se concentra em um exemplo específico, mas as possibilidades são muito maiores. Daremos alguns outros exemplos ao longo do caminho. Lembre-se de que você também pode fazer isso no Bubble.io. Existem muitas outras ferramentas nocode, mas no momento da redação desse post, poucas permitem que você use o GPT-3.

Neste artigo, mostraremos como configurar um sistema simples no Zapier em que os e-mails são resumidos e armazenados. Tem uma reunião com alguém? Verifique rapidamente os resumos dos e-mails que você trocou com essa pessoa. Configurar isso leva cerca de 20 minutos.

:::caution
É aconselhável já conhecer o Zapier para entender esse artigo. Se você não conhece, confira primeiro [essa página - em Inglês](https://zapier.com/learn/).
:::


## Idéia Geral


Abaixo está um diagrama do que faremos no Zapier. Sempre que um e-mail chegar em sua caixa de entrada, ele acionará o Zapier. Existem quatro etapas (por enquanto):

1. O e-mail chega e aciona o Zapier
2. Formate o conteúdo do e-mail (para remover a marcação HTML, por exemplo).
3. Envie-o para o GPT-3 ser resumido
4. Armazene a saída em um banco de dados.

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}} />
</div>

## Configuração no Zapier


Crie uma [conta no Zapier](https://zapier.com/sign-up) (você pode criar uma conta grátias). A configuração é bem simples. Depois de criar sua conta, expanda a caixa abaixo para ver as descrições completas de cada ação do Zapier que precisamos criar. 


<details>
  <summary>Expandir para uma visão detalhada do passo-a-passo no Zapier</summary>
  <div>
  O seu diagrama de ação no Zapier eventualmente estará assim:
    <div><div style={{textAlign: 'left'}}>
  <img src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        Passo 1: Gatilho do Gmail para novo e-mail recebido (nesse exemplo usamos o Gmail).
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <img src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
       Passo 2: Formatando o conteúdo do e-mail
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step2} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Passo 3: Solicitando o conteúdo do e-mail
        <br/>
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step3} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Passo 4: Adicionando ao banco de dados
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step4} style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>

Aqui você aprendeu uma configuração no Zapier que permite fazer um resumo muito básico, como mostrado no diagrama. Ela tem suas limitações, mas funciona e pode criar um banco de dados útil.


## Otimizando seu prompt para resultados mais sofisticados

Existem algumas maneiras fáceis de melhorar seus resultados. Adicionar contexto e instruções para a AI desempenhar um certo papel podem melhorar a saída. No entanto, o tópico e o conteúdo dos seus e-mails podem cobrir uma ampla gama de temas. Isso significa que instruções gerais farão um trabalho melhor do que instruções muito específicas, que podem confundir o modelo.

Por razões práticas, é útil dar uma instrução, seguido da informação para o GPT-3 de onde o e-mail começa. Você pode fazer isso simplesmente adicionando "Email: " e terminando a prompt com ""Resumo": ". Isso evita que o GPT-3 responda com "Claro! Eu posso resumir para você...".

Pedir para o GPT-3 desempenhar um certo papel também pode sr útil. Por exemplo, pedir para GPT-3 agir como um assistente pessoal ajuda a aumentar a qualidade do resumo.
Se você quiser resumir e-mails de trabalho, simplesmente adicionando o papel que você deseja dá ao GPT-3 contexto para trabalhar. Ele age como se assumisse algum nível de conhecimento do leitor, o que ajuda a filtrar as partes não relevantes do e-mail. Abaixo, mostramos alguns exemplos de e-mails que um administrador de escritório pode receber.

Você pode pedir para resumir um e-mail simples em tópicos, no entanto, isso pode não ser muito útil dependendo de como você gostaria de usar o resumo. Para uma rápida leitura das trocas de e-mails, você pode querer algo que seja curto e conciso. Simplesmente pedir isso na prompt funciona bem. Abaixo está um exemplo desta prompt. Ajuste os exemplos e experimente para ver como isso muda a saída.


<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Atue como meu assistente pessoal. Eu sou um administrador de escritório. Resuma o seguinte email o mais concisamente possível, ignorando o cabeçalho e rodapé e quaisquer e-mails anteriores.\n\nEmail: Pedido de suprimentos adicionais para escritório\n
Prezado Administrador de Escritório,\nEspero que este email o encontre bem. Escrevo para solicitar suprimentos adicionais para nossa equipe. Como você sabe, temos experimentado um alto volume de trabalho ultimamente e temos usado nossos suprimentos em uma taxa mais rápida do que o normal. Agradeceríamos muito se você pudesse nos fornecer os seguintes itens: Papel de impressora Cartuchos de tinta para a impressora HP na sala de conferências Notas adesivas Clipes de binder Marcadores Destaque Por favor, informe-me se houver alguma dúvida ou preocupação, e quando podemos esperar que os suprimentos sejam entregues. Obrigado por sua ajuda.\nAtenciosamente,\nSeu nome\n\nResumo:" initial-response="Resumo: Pedido de suprimentos adicionais para equipe devido ao alto volume de trabalho. Itens solicitados: papel de impressora, cartuchos de tinta, notas adesivas, clipes de binder e marcadores. Sem perguntas ou preocupações." max-tokens="256" box-rows="15" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

A resposta aqui é aceitável e seria útil. No entanto, com um ajuste fino adicional, você pode obter um resultado melhor. Como leitor dos resumos, você não se importa que seja um e-mail, e pode querer um nível de detalhe menor para o resumo. Informações sobre o porquê são irrelevantes, o mesmo vale para a última frase sobre perguntas e preocupações. Apenas adicionando que o objetivo do resumo é para você ler rapidamente o conteúdo e que deseja as cortesias removidas, o resultado pode ser melhorado.


<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Atue como meu assistente pessoal. Eu sou um administrador de escritório. Resuma o seguinte email o mais concisamente possível, ignorando o cabeçalho e rodapé e quaisquer e-mails anteriores. Eu quero usar o resumo para navegar pelos e-mails. Remova qualquer gentileza.\n\nEmail: Pedido de suprimentos adicionais para escritório\nSolicitação de suprimentos adicionais para a equipe, devido ao alto volume de trabalho. Itens necessários: papel de impressora, cartuchos de tinta para a impressora HP, notas adesivas, clipes de binder e marcadores. Por favor, informe-me quando podemos esperar a entrega.\n\nResumo:\n" initial-response="Pedido de suprimentos adicionais de escritório. Solicita papel de impressora, cartuchos de tinta, notas adesivas, clipes de binder e marcadores." max-tokens="256" box-rows="15" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>


<br/>Agora você tem apenas as partes importantes no seu resumo!


## Outros casos de uso

Agora que você viu o exemplo dos resumos, mencionaremos alguns outros casos de uso do Zapier+GPT-3. Um ótimo exemplo é permitir que o GPT-3 categorize seus e-mails. Isso se resume a dizer a ele em uma prompt para categorizar o seguinte e-mail em quaisquer categorias que você desejar.

Um exemplo mais detalhado seria ter várias prompts. Você pode usar uma prompt para gerar uma resposta que concorda com as demandas do e-mail e outra que discorda ou nega. Ambas podem ser armazenadas em seus rascunhos e estar prontas para serem enviadas sempre que você quiser.

Se você recebe regularmente e-mails muito semelhantes, você pode usar um filtro no Zapier para aplicar uma prompt SOMENTE a esse e-mail. Isso pode ser uma ferramenta poderosa quando combinada com um formatador. Você pode extrair informações e exportar CSVs deles ou armazená-los diretamente em algum tipo de banco de dados.


## Preocupações

Tenha em mente as preocupações de privacidade ao executar e armazenar e-mails no GPT-3. O GPT-3 às vezes comete erros. Recomendamos enfaticamente verificar o conteúdo do e-mail antes de enviá-lo!