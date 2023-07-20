---
sidebar_position: 3
---

# 🟢 Respondendo Questões de Discussão

import Auto from '@site/docs/assets/basic_applications/short_content_auto.webp';

Com a devida orientação, o GPT-3 é capaz de escrever respostas em formato curto. Para demonstrar isso, estarei examinando a **resolução de questões de discussão**, uma tarefa semanal comum em muitos cursos universitários. Uma resposta à uma pergunta de discussão geralmente tem entre 100 e 700 palavras. Conteúdo mais longo pode ser um pouco mais complicado, pois LLMs têm memória limitada e têm dificuldade em entender a imagem global do que estão escrevendo(@jin2022plot).

Vamos olhar um exemplo de uma pergunta básica de discussão:


> _"Quais são os problemas ambientais mais urgentes enfrentados pelo nosso planeta hoje, e que medidas os indivíduos podem tomar para ajudar a lidar com esses problemas?"_

Nós podemos tornar essa pergunta em um prompt para o GPT3 ao adicionar <span className="yellow-highlight">Responda o seguinte:</span>.

<pre>
    <span className="yellow-highlight">Responda o seguinte:</span>
<br/><br/>"Quais são os problemas ambientais mais urgentes enfrentados pelo nosso planeta hoje, e que medidas os indivíduos podem tomar para ajudar a lidar com esses problemas?
</pre>

Os resultados gerados com esta instrução não são consistentes e alguns são compostos por apenas uma ou duas frases. Uma resposta típica a uma discussão deve ter vários parágrafos, por isso esses resultados não são ideais. Uma boa instrução deve fornecer **instruções específicas sobre formato e conteúdo**. É necessário remover ambiguidades na linguagem para melhorar a consistência e qualidade dos resultados. Aqui está uma instrução melhor.

<pre>
    <span className="yellow-highlight">Escreva uma dissertação detalhada, incluindo introdução, corpo e conclusão respondendo à seguinte pergunta:</span>
    <br/><br/>Quais são os problemas ambientais mais urgentes enfrentados pelo nosso planeta hoje, e que medidas os indivíduos podem tomar para ajudar a lidar com esses problemas?
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="example"></iframe>

O segundo prompt gera respostas mais longas com uma estrutura melhor. O uso da palavra 'dissertação' no prompt foi intencional, já que o GPT-3 compreende a definição de uma dissertação, e é mais provável que assim gere respostas mais coerentes e estruturadas.


### Muitas questões de discussão não são eficazes para estimular uma boa resposta.

> _"A Guerra Civil foi um conflito sobre expansão? Concorda ou discorda e por quê?""_

Aqui está uma pergunta real de discussão de um curso de história universitário. Ela não está formulada corretamente e é muito aberta. **Para obter boas respostas de discussão, você precisa reescrever a pergunta em uma prompt bem definida**. Uma prompt bem definida para a pergunta de discussão acima poderia ser:

> _"Explique as causas da Guerra Civil e se a expansão desempenhou um papel no conflito. Inclua evidências para apoiar seu argumento."_

Agora podemos adicionar direções de formatação e contexto.

<pre>
    <span className="yellow-highlight">Escreva uma resposta detalhada para discussão, na estrutura de uma dissertação, em resposta ao seguinte prompt:</span>
    <br/><br/>Explique as causas da Guerra Civil e se a expansão desempenhou um papel no conflito. Inclua evidências para apoiar seu argumento.
</pre>

### Automatizando a reescrita de prompts
O exemplo de reescrita acima foi gerado com o OpenAI [ChatGPT](https://openai.com/blog/chatgpt/).

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}}/>
</div>

### Iteração

Após criar uma prompt efetiva para sua pergunta de discussão, agora é necessário refinar os resultados gerados pelo GPT-3. Isso pode envolver ajustar a saída para cumprir restrições como contagem de palavras, ou combinar conceitos de diferentes resultados gerados.

Um método simples para iterar é gerar várias saídas e revisá-las para obter uma compreensão dos conceitos que o GPT-3 está utilizando e a estrutura que ele segue. Depois que as saídas forem avaliadas, você pode selecionar as saídas mais adequadas e combiná-las em uma resposta coesa.

Outra maneira de iterar é começar e expandir passo a passo. Isso requer mais de uma prompt: uma prompt inicial para escrever o parágrafo inicial ou algo parecido e, em seguida, outras prompts para expandir o que já foi escrito.

Aqui está uma pergunta potencial de discussão filosófica:

> _"A matemática é inventada ou descoberta? Use um raciocínio cuidadoso para explicar sua resposta."_

Adicione a pergunta acima à um prompt simples como no exemplo abaixo:

<pre>
    <span className="yellow-highlight">Escreva um parágrafo de introdução respondendo à seguinte pergunta:</span>
    <br/><br/>A matemática é inventada ou descoberta? Use um raciocínio cuidadoso para explicar sua resposta.
</pre>

Eu gerei várias respostas e encontrei uma que gostei mais.

<pre>
    <span className="bluegreen-highlight">A questão se a matemática é inventada ou descoberta tem sido objeto de discussão há séculos. Algumas pessoas acreditam que a matemática é uma invenção humana que foi criada para nos ajudar a entender o mundo, enquanto outras acreditam que a matemática é uma descoberta que existe independentemente de nossa compreensão. Este é um tópico importante porque nossa resposta tem implicações significativas em relação ao que podemos conhecer sobre o mundo e sobre a natureza da matemática em si. Neste ensaio, examinarei essa questão com um raciocínio cuidadoso para oferecer minha resposta.
</span>
</pre>

Esse é um início decente. Então eu vou dar continuidade como outro prompt para expandir o texto.

<pre>
    <span className="yellow-highlight">Eu estou escrevendo uma dissertação curta para responder à seguinte pergunta:</span> 
    <br/><br/>A matemática é inventada ou descoberta? Use um raciocínio cuidadoso para explicar sua resposta. 
    <span className="yellow-highlight"><p/>Abaixo é o que eu tenho até agora:</span>
    <br/><br/>A questão se a matemática é inventada ou descoberta tem sido objeto de discussão há séculos. Algumas pessoas acreditam que a matemática é uma invenção humana que foi criada para nos ajudar a entender o mundo, enquanto outras acreditam que a matemática é uma descoberta que existe independentemente de nossa compreensão. Este é um tópico importante porque nossa resposta tem implicações significativas em relação ao que podemos conhecer sobre o mundo e sobre a natureza da matemática em si. Neste ensaio, examinarei essa questão com um raciocínio cuidadoso para oferecer minha resposta. 
    <p/><span className="yellow-highlight">Escreva o próximo parágrafo para a minha dissertação.</span>
</pre>

Experimente expandir esse prompt com o demo abaixo (você vai precisar da sua chave OpenAI)

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlBhcmEgZW50ZW5kZXIgc2UgYSBtYXRlbeF0aWNhIOkgaW52ZW50YWRhIG91IGRlc2NvYmVydGEsIOkgaW1wb3J0YW50ZSBwcmltZWlybyBkZWZpbmlyIG8gcXVlIHF1ZXJlbW9zIGRpemVyIGNvbSBlc3NlcyB0ZXJtb3MuIFNlIGFjcmVkaXRhbW9zIHF1ZSBhIG1hdGVt4XRpY2Eg6SB1bWEgaW52ZW7n428gaHVtYW5hLCBlc3RhbW9zIGFzc3VtaW5kbyBxdWUgb3MgY29uY2VpdG9zIGUgYXMgcmVncmFzIG1hdGVt4XRpY2FzIGZvcmFtIGNyaWFkb3MgcG9yIG7zcywgY29tIGJhc2UgZW0gbm9zc2FzIGV4cGVyaepuY2lhcyBlIG9ic2VydmHn9WVzIGRvIG11bmRvIGFvIG5vc3NvIHJlZG9yLiBQb3Igb3V0cm8gbGFkbywgc2UgYWNyZWRpdGFtb3MgcXVlIGEgbWF0ZW3hdGljYSDpIHVtYSBkZXNjb2JlcnRhLCBlc3RhbW9zIGFzc3VtaW5kbyBxdWUgYSBtYXRlbeF0aWNhIGrhIGV4aXN0aWEgaW5kZXBlbmRlbnRlbWVudGUgZGUgbm9zc2EgY29tcHJlZW5z428sIGUgcXVlIGVzdGFtb3Mgc2ltcGxlc21lbnRlIGRlc2NvYnJpbmRvIGUgZXhwbG9yYW5kbyBzdWFzIHByb3ByaWVkYWRlcy4gUGFyYSBkZWNpZGlyIHF1YWwgZGVzc2FzIHBlcnNwZWN0aXZhcyDpIG1haXMgcGxhdXPtdmVsLCBwcmVjaXNhbW9zIGV4YW1pbmFyIGEgbmF0dXJlemEgZGEgbWF0ZW3hdGljYSBlIGNvbW8gZWxhIOkgdXNhZGEuIiwicHJvbXB0IjoiRXUgZXN0b3UgZXNjcmV2ZW5kbyB1bWEgZGlzc2VydGHn428gY3VydGEgcGFyYSByZXNwb25kZXIg4CBzZWd1aW50ZSBwZXJndW50YTpcblxuQSBtYXRlbeF0aWNhIOkgaW52ZW50YWRhIG91IGRlc2NvYmVydGE%2FIFVzZSB1bSByYWNpb2PtbmlvIGN1aWRhZG9zbyBwYXJhIGV4cGxpY2FyIHN1YSByZXNwb3N0YS4gXG5cbkFiYWl4byDpIG8gcXVlIGV1IHRlbmhvIGF06SBhZ29yYTpcblxuQSBxdWVzdONvIHNlIGEgbWF0ZW3hdGljYSDpIGludmVudGFkYSBvdSBkZXNjb2JlcnRhIHRlbSBzaWRvIG9iamV0byBkZSBkaXNjdXNz428gaOEgc%2BljdWxvcy4gQWxndW1hcyBwZXNzb2FzIGFjcmVkaXRhbSBxdWUgYSBtYXRlbeF0aWNhIOkgdW1hIGludmVu5%2BNvIGh1bWFuYSBxdWUgZm9pIGNyaWFkYSBwYXJhIG5vcyBhanVkYXIgYSBlbnRlbmRlciBvIG11bmRvLCBlbnF1YW50byBvdXRyYXMgYWNyZWRpdGFtIHF1ZSBhIG1hdGVt4XRpY2Eg6SB1bWEgZGVzY29iZXJ0YSBxdWUgZXhpc3RlIGluZGVwZW5kZW50ZW1lbnRlIGRlIG5vc3NhIGNvbXByZWVuc%2BNvLiBFc3RlIOkgdW0gdPNwaWNvIGltcG9ydGFudGUgcG9ycXVlIG5vc3NhIHJlc3Bvc3RhIHRlbSBpbXBsaWNh5%2FVlcyBzaWduaWZpY2F0aXZhcyBlbSByZWxh5%2BNvIGFvIHF1ZSBwb2RlbW9zIGNvbmhlY2VyIHNvYnJlIG8gbXVuZG8gZSBzb2JyZSBhIG5hdHVyZXphIGRhIG1hdGVt4XRpY2EgZW0gc2kuIE5lc3RlIGVuc2FpbywgZXhhbWluYXJlaSBlc3NhIHF1ZXN0428gY29tIHVtIHJhY2lvY%2B1uaW8gY3VpZGFkb3NvIHBhcmEgb2ZlcmVjZXIgbWluaGEgcmVzcG9zdGEuIFxuXG5Fc2NyZXZhIG8gcHLzeGltbyBwYXLhZ3JhZm8gcGFyYSBhIG1pbmhhIGRpc3NlcnRh5%2BNvLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

Eu gerei algumas expansões com esse prompt e selecionei uma que eu gostei chegando ao resultado final a seguir:
I generated a few expansions with this prompt and selected one I liked to end up with the following final result:

<pre>
A Matemática é uma das mais antigas e mais importantes disciplinas científicas, sendo frequentemente descrita como "a língua da ciência". Esta disciplina tem sido objeto de debates entre matemáticos e outros pensadores há muitos séculos, particularmente em relação à questão se a matemática é inventada ou descoberta. Apesar de haver argumentos válidos de ambos os lados, a minha opinião é que a matemática é tanto uma invenção como uma descoberta. A matemática é inventada quando as pessoas constroem modelos abstratos matemáticos para explicar a realidade, enquanto a matemática é descoberta quando os matemáticos percebem padrões e relações nos dados existentes. Assim, a matemática é tanto inventada como descoberta.
    <span className="bluegreen-highlight">
    <br/>Os matemáticos têm um papel único em toda a ciência, usando sua capacidade de perceber padrões para desenvolver teorias e modelos para explicar o comportamento dos fenômenos. A matemática é especialmente importante na ciência, pois ajuda a entender o mundo que nos rodeia. Os matemáticos usam suas habilidades para desenvolver modelos para explicar a realidade, usando uma variedade de ferramentas e técnicas. O uso da matemática para descobrir padrões e relações também é essencial para a ciência, pois permite que os cientistas construam hipóteses e façam previsões. Assim, podemos dizer que a matemática é tanto uma invenção como uma descoberta.
    </span>
</pre>

Ao utilizar prompt de expansão podemos escrever incrementalmente e iterar a cada passo. Essa abordagem é útil quando você precisa **produzir respostas de alta qualidade e deseja modificar os passo incrementais **

Escrito por [jayo78](https://twitter.com/jayo782).
Traduzido por [gabi fonseca](https://imgabi.com)