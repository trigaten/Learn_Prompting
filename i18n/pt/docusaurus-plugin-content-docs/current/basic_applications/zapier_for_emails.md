---
sidebar_position: 600
---

# 🟢 Usando o Zapier para Escrever E-mails

import Basic from '@site/docs/assets/basic_applications/Zapiermail/Basic.webp';
import Diagram from '@site/docs/assets/basic_applications/Zapiermail/Diagram.webp';
import Step1 from '@site/docs/assets/basic_applications/Zapiermail/Step1.webp';
import Step2 from '@site/docs/assets/basic_applications/Zapiermail/Step2.webp';
import Step3 from '@site/docs/assets/basic_applications/Zapiermail/Step3.webp';
import Step4 from '@site/docs/assets/basic_applications/Zapiermail/Step4.webp';
import Zap from '@site/docs/assets/basic_applications/Zapiermail/Zap.webp';

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
  <img src={Diagram} style={{width: "500px"}}/>
</div>

## Configuração no Zapier


Crie uma [conta no Zapier](https://zapier.com/sign-up) (você pode criar uma conta grátias). A configuração é bem simples. Depois de criar sua conta, expanda a caixa abaixo para ver as descrições completas de cada ação do Zapier que precisamos criar.


<details>
  <summary>Expandir para uma visão detalhada do passo-a-passo no Zapier</summary>
  <div>
  O seu diagrama de ação no Zapier eventualmente estará assim:
    <div><div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        Passo 1: Gatilho do Gmail para novo e-mail recebido (nesse exemplo usamos o Gmail).
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <LazyLoadImage src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
       Passo 2: Formatando o conteúdo do e-mail
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step2} style={{width: "500px"}} />
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
  <LazyLoadImage src={Step3} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Passo 4: Adicionando ao banco de dados
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step4} style={{width: "500px"}} />
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


<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiIFNvbGljaXRhbmRvIHN1cHJpbWVudG9zIGFkaWNpb25haXMgcGFyYSBlcXVpcGUgZGV2aWRvIGEgdW0gYWx0byB2b2x1bWUgZGUgdHJhYmFsaG86IHBhcGVsIGRlIGltcHJlc3NvcmEsIGNhcnR1Y2hvcyBkZSB0aW50YSBwYXJhIEhQLCBub3RhcyBhZGVzaXZhcywgY2xpcHMgZGUgYmluZGVyLCBtYXJjYWRvcmVzLiBQb3IgZmF2b3IsIGluZm9ybWFyIHNlIGhvdXZlciBhbGd1bWEgZMO6dmlkYSBvdSBwcmVvY3VwYcOnw6NvLlxuIiwicHJvbXB0IjoiQXR1ZSBjb21vIG1ldSBhc3Npc3RlbnRlIHBlc3NvYWwuIEV1IHNvdSB1bSBhZG1pbmlzdHJhZG9yIGRlIGVzY3JpdMOzcmlvLiBSZXN1bWEgbyBzZWd1aW50ZSBlbWFpbCBvIG1haXMgY29uY2lzbyBwb3Nzw612ZWwsIGlnbm9yYW5kbyBvIGNhYmXDp2FsaG8gZSByb2RhcMOpIGUgcXVhaXNxdWVyIGUtbWFpbHMgYW50ZXJpb3Jlcy5cblxuLS0tLVxuRW1haWw6IFBlZGlkbyBkZSBzdXByaW1lbnRvcyBhZGljaW9uYWlzIHBhcmEgZXNjcml0w7NyaW9cblxuUHJlemFkbyBBZG1pbmlzdHJhZG9yIGRlIEVzY3JpdMOzcmlvLFxuXG5Fc3Blcm8gcXVlIGVzdGUgZW1haWwgbyBlbmNvbnRyZSBiZW0uIEVzY3Jldm8gcGFyYSBzb2xpY2l0YXIgc3VwcmltZW50b3MgYWRpY2lvbmFpcyBwYXJhIG5vc3NhIGVxdWlwZS4gQ29tbyB2b2PDqiBzYWJlLCB0ZW1vcyBleHBlcmltZW50YWRvIHVtIGFsdG8gdm9sdW1lIGRlIHRyYWJhbGhvIHVsdGltYW1lbnRlIGUgdGVtb3MgdXNhZG8gbm9zc29zIHN1cHJpbWVudG9zIGVtIHVtYSB0YXhhIG1haXMgcsOhcGlkYSBkbyBxdWUgbyBub3JtYWwuIEFncmFkZWNlcsOtYW1vcyBtdWl0byBzZSB2b2PDqiBwdWRlc3NlIG5vcyBmb3JuZWNlciBvcyBzZWd1aW50ZXMgaXRlbnM6IFxuKiBQYXBlbCBkZSBpbXByZXNzb3JhIENhcnR1Y2hvcyBkZSB0aW50YSBwYXJhIGEgaW1wcmVzc29yYSBIUCBuYSBzYWxhIGRlIGNvbmZlcsOqbmNpYXNcbiogTm90YXMgYWRlc2l2YXMgXG4qIENsaXBlcyBkZSBiaW5kZXIgXG4qIE1hcmNhZG9yZXMgXG5cblBvciBmYXZvciwgaW5mb3JtZS1tZSBzZSBob3V2ZXIgYWxndW1hIGTDunZpZGEgb3UgcHJlb2N1cGHDp8OjbywgZSBxdWFuZG8gcG9kZW1vcyBlc3BlcmFyIHF1ZSBvcyBzdXByaW1lbnRvcyBzZWphbSBlbnRyZWd1ZXMuIE9icmlnYWRvIHBvciBzdWEgYWp1ZGEuXG5cbkF0ZW5jaW9zYW1lbnRlLFxuUGF1bGluaG9cblxuLS0tLVxuXG5SZXN1bW86IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

A resposta aqui é aceitável e seria útil. No entanto, com um ajuste fino adicional, você pode obter um resultado melhor. Como leitor dos resumos, você não se importa que seja um e-mail, e pode querer um nível de detalhe menor para o resumo. Informações sobre o porquê são irrelevantes, o mesmo vale para a última frase sobre perguntas e preocupações. Apenas adicionando que o objetivo do resumo é para você ler rapidamente o conteúdo e que deseja as cortesias removidas, o resultado pode ser melhorado.


<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiU29saWNpdGHDp8OjbyBkZSBzdXByaW1lbnRvcyBhZGljaW9uYWlzIHBhcmEgYSBlcXVpcGU6IHBhcGVsIGRlIGltcHJlc3NvcmEsIGNhcnR1Y2hvcyBkZSB0aW50YSBIUCwgbm90YXMgYWRlc2l2YXMsIGNsaXBlcyBkZSBiaW5kZXIgZSBtYXJjYWRvcmVzLiBEYXRhIGRlIGVudHJlZ2EgbmVjZXNzw6FyaWEuXG4iLCJwcm9tcHQiOiJBdHVlIGNvbW8gbWV1IGFzc2lzdGVudGUgcGVzc29hbC4gRXUgc291IHVtIGFkbWluaXN0cmFkb3IgZGUgZXNjcml0w7NyaW8uIFJlc3VtYSBvIHNlZ3VpbnRlIGVtYWlsIG8gbWFpcyBjb25jaXNhbWVudGUgcG9zc8OtdmVsLCBpZ25vcmFuZG8gbyBjYWJlw6dhbGhvIGUgcm9kYXDDqSBlIHF1YWlzcXVlciBlLW1haWxzIGFudGVyaW9yZXMuIEV1IHF1ZXJvIHVzYXIgbyByZXN1bW8gcGFyYSBuYXZlZ2FyIHBlbG9zIGUtbWFpbHMuIFJlbW92YSBxdWFscXVlciBnZW50aWxlemEuXG5cbkVtYWlsOiBQZWRpZG8gZGUgc3VwcmltZW50b3MgYWRpY2lvbmFpcyBwYXJhIGVzY3JpdMOzcmlvLlxuU29saWNpdGHDp8OjbyBkZSBzdXByaW1lbnRvcyBhZGljaW9uYWlzIHBhcmEgYSBlcXVpcGUsIGRldmlkbyBhbyBhbHRvIHZvbHVtZSBkZSB0cmFiYWxoby4gXG5JdGVucyBuZWNlc3PDoXJpb3M6IHBhcGVsIGRlIGltcHJlc3NvcmEsIGNhcnR1Y2hvcyBkZSB0aW50YSBwYXJhIGEgaW1wcmVzc29yYSBIUCwgbm90YXMgYWRlc2l2YXMsIGNsaXBlcyBkZSBiaW5kZXIgZSBtYXJjYWRvcmVzLiBQb3IgZmF2b3IsIGluZm9ybWUtbWUgcXVhbmRvIHBvZGVtb3MgZXNwZXJhciBhIGVudHJlZ2EuXG5cblJlc3VtbzpcblxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>Agora você tem apenas as partes importantes no seu resumo!


## Outros casos de uso

Agora que você viu o exemplo dos resumos, mencionaremos alguns outros casos de uso do Zapier+GPT-3. Um ótimo exemplo é permitir que o GPT-3 categorize seus e-mails. Isso se resume a dizer a ele em uma prompt para categorizar o seguinte e-mail em quaisquer categorias que você desejar.

Um exemplo mais detalhado seria ter várias prompts. Você pode usar uma prompt para gerar uma resposta que concorda com as demandas do e-mail e outra que discorda ou nega. Ambas podem ser armazenadas em seus rascunhos e estar prontas para serem enviadas sempre que você quiser.

Se você recebe regularmente e-mails muito semelhantes, você pode usar um filtro no Zapier para aplicar uma prompt SOMENTE a esse e-mail. Isso pode ser uma ferramenta poderosa quando combinada com um formatador. Você pode extrair informações e exportar CSVs deles ou armazená-los diretamente em algum tipo de banco de dados.


## Preocupações

Tenha em mente as preocupações de privacidade ao executar e armazenar e-mails no GPT-3. O GPT-3 às vezes comete erros. Recomendamos enfaticamente verificar o conteúdo do e-mail antes de enviá-lo!