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
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRlcG9pcyBkZSBleGFtaW5hciBvcyBhcmd1bWVudG9zIGRlIGFtYm9zIG9zIGxhZG9zLCBhY3JlZGl0byBxdWUgYSBtYXRlbcOhdGljYSBmb2kgZGVzY29iZXJ0YSwgbsOjbyBpbnZlbnRhZGEuIElzc28gcG9ycXVlIGEgbWF0ZW3DoXRpY2Egw6kgYmFzZWFkYSBlbSBwcmluY8OtcGlvcyB1bml2ZXJzYWlzIHF1ZSBzw6NvIGluZGVwZW5kZW50ZXMgZGUgbm9zc2EgY29tcHJlZW5zw6NvLiBQb3IgZXhlbXBsbywgYSBsZWkgZGEgZ3JhdmlkYWRlIMOpIHVtYSBsZWkgbWF0ZW3DoXRpY2EgcXVlIGZvaSBkZXNjb2JlcnRhIHBvciBJc2FhYyBOZXd0b24sIG1hcyBxdWUgZXhpc3RpYSBhbnRlcyBkZSBlbGUgZGVzY29icmktbGEuIEFsw6ltIGRpc3NvLCBhIG1hdGVtw6F0aWNhIMOpIHVzYWRhIHBhcmEgZXhwbGljYXIgZmVuw7RtZW5vcyBuYXR1cmFpcywgY29tbyBhIMOzcmJpdGEgZG9zIHBsYW5ldGFzLCBvIHF1ZSBzdWdlcmUgcXVlIGVsYSDDqSBiYXNlYWRhIGVtIHByaW5jw61waW9zIHVuaXZlcnNhaXMuIFBvcnRhbnRvLCBhY3JlZGl0byBxdWUgYSBtYXRlbcOhdGljYSBmb2kgZGVzY29iZXJ0YSwgbsOjbyBpbnZlbnRhZGEuIiwicHJvbXB0IjoiRXUgZXN0b3UgZXNjcmV2ZW5kbyB1bWEgZGlzc2VydGHDp8OjbyBjdXJ0YSBwYXJhIHJlc3BvbmRlciDDoCBzZWd1aW50ZSBwZXJndW50YTpcblxuQSBtYXRlbcOhdGljYSBmb2kgaW52ZW50YWRhIG91IGRlc2NvYmVydGE%2FIFVzZSB1bSByYWNpb2PDrW5pbyBjdWlkYWRvc28gcGFyYSBleHBsaWNhciBzdWEgcmVzcG9zdGEuIFxuXG5BYmFpeG8gw6kgbyBxdWUgZXUgdGVuaG8gYXTDqSBhZ29yYTpcblxuQSBxdWVzdMOjbyBzZSBhIG1hdGVtw6F0aWNhIGZvaSBpbnZlbnRhZGEgb3UgZGVzY29iZXJ0YSB0ZW0gc2lkbyBvYmpldG8gZGUgZGlzY3Vzc8OjbyBow6Egc8OpY3Vsb3MuIEFsZ3VtYXMgcGVzc29hcyBhY3JlZGl0YW0gcXVlIGEgbWF0ZW3DoXRpY2Egw6kgdW1hIGludmVuw6fDo28gaHVtYW5hIHF1ZSBmb2kgY3JpYWRhIHBhcmEgbm9zIGFqdWRhciBhIGVudGVuZGVyIG8gbXVuZG8sIGVucXVhbnRvIG91dHJhcyBhY3JlZGl0YW0gcXVlIGEgbWF0ZW3DoXRpY2Egw6kgdW1hIGRlc2NvYmVydGEgcXVlIGV4aXN0ZSBpbmRlcGVuZGVudGVtZW50ZSBkZSBub3NzYSBjb21wcmVlbnPDo28uIEVzdGUgw6kgdW0gdMOzcGljbyBpbXBvcnRhbnRlIHBvcnF1ZSBub3NzYSByZXNwb3N0YSB0ZW0gaW1wbGljYcOnw7VlcyBzaWduaWZpY2F0aXZhcyBlbSByZWxhw6fDo28gYW8gcXVlIHBvZGVtb3MgY29uaGVjZXIgc29icmUgbyBtdW5kbyBlIHNvYnJlIGEgbmF0dXJlemEgZGEgbWF0ZW3DoXRpY2EgZW0gc2kuIE5lc3RlIHRleHRvLCBleGFtaW5hcmVpIGVzc2EgcXVlc3TDo28gY29tIHVtIHJhY2lvY8OtbmlvIGN1aWRhZG9zbyBwYXJhIG9mZXJlY2VyIG1pbmhhIHJlc3Bvc3RhLiBcblxuRXNjcmV2YSBvIHByw7N4aW1vIHBhcsOhZ3JhZm8gcGFyYSBhIG1pbmhhIGRpc3NlcnRhw6fDo28uIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

Eu gerei algumas expansões com esse prompt e selecionei uma que eu gostei chegando ao resultado final a seguir:

<pre>
A Matemática é uma das mais antigas e mais importantes disciplinas científicas, sendo frequentemente descrita como "a língua da ciência". Esta disciplina tem sido objeto de debates entre matemáticos e outros pensadores há muitos séculos, particularmente em relação à questão se a matemática é inventada ou descoberta. Apesar de haver argumentos válidos de ambos os lados, a minha opinião é que a matemática é tanto uma invenção como uma descoberta. A matemática é inventada quando as pessoas constroem modelos abstratos matemáticos para explicar a realidade, enquanto a matemática é descoberta quando os matemáticos percebem padrões e relações nos dados existentes. Assim, a matemática é tanto inventada como descoberta.
    <span className="bluegreen-highlight">
    <br/>Os matemáticos têm um papel único em toda a ciência, usando sua capacidade de perceber padrões para desenvolver teorias e modelos para explicar o comportamento dos fenômenos. A matemática é especialmente importante na ciência, pois ajuda a entender o mundo que nos rodeia. Os matemáticos usam suas habilidades para desenvolver modelos para explicar a realidade, usando uma variedade de ferramentas e técnicas. O uso da matemática para descobrir padrões e relações também é essencial para a ciência, pois permite que os cientistas construam hipóteses e façam previsões. Assim, podemos dizer que a matemática é tanto uma invenção como uma descoberta.
    </span>
</pre>

Ao utilizar prompt de expansão podemos escrever incrementalmente e iterar a cada passo. Essa abordagem é útil quando você precisa **produzir respostas de alta qualidade e deseja modificar os passo incrementais **

Escrito por [jayo78](https://twitter.com/jayo782).
Traduzido por [gabi fonseca](https://imgabi.com)