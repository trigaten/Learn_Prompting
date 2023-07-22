---
sidebar_position: 2
---
# 🟢 Dando Instruções

Um dos métodos de *prompting* mais simples é apenas dar instruções. Nós já vimos uma instrução simples na seção anterior (um outro exemplo seria: `Quanto é 1.000.000 * 9.000? Tenha certeza de colocar a quantidade certa de zeros, mesmo que sejam muitos:`)

Abaixo, tem-se um exemplo interativo com o [*toolkit* Dyno](https://trydyno.com/). Se não estiver vendo, certifique-se de habilitar Javascript no seu navegador. Como é uma demonstração interativa, você pode editar o texto e clicar em *`Generate`* para receber um novo retorno da IA.

#### Exemplo 1

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Um usuário digitou o seu primeiro e o seu último nome em um formulário. Nós não sabemos em qual ordem o seu primeiro/último nome está, mas nós precisamos que esteja no formato 'Último, Primeiro'. Converta a seguir:\n\njonh doe" initial-response="Doe, Jonh" max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>
<br />

A IA é capaz de facilmente resolver este problema. Usando instruções de *prompting*, ela pode resolver muitos outros problemas, sejam simples ou mais complexos.

#### Exemplo 2

Aqui está um exemplo mais complicado[^1]:

```
Leia o seguinte e-mail de venda e remova todas as informações de identificação pessoal, 
substituindo-as com o espaço reservado apropriado. Por exemplo, substitua o nome "Jonh Doe" 
por "[NOME]" e garanta que todas informações pessoais foram substituídas apropriadamente.

Olá, Jonh!

Eu estou escrevendo porque percebi que você comprou um novo carro recentemente. 
Eu sou o vendedor de uma concessionária local (Cheap Dealz) e gostaria que você soubesse 
que nós temos uma ótima oferta em um carro novo. Se você tiver interesse, por favor, avise-me.

Atenciosamente,

Jimmy Smith

Telefone: 410-805-2345
E-mail: jimmysmith@cheapdealz.com
```

Aqui está a [resposta da IA](https://platform.openai.com/playground/p/6fy8vbdvGelrMlF190tLEE5n?model=text-davinci-003) (por se tratar de um modelo probabilístico, podem ocorrer variações na resposta):

```text
// highlight-start
Olá, [NOME]!

Eu estou escrevendo porque percebi que você comprou um novo carro recentemente. 
Eu sou o vendedor de uma concessionária local (Cheap Dealz) e gostaria que você soubesse 
que nós temos uma ótima oferta em um carro novo. Se você tiver interesse, por favor, avise-me.

Atenciosamente,

[NOME]

Telefone: [NÚMERO DE TELEFONE]
E-mail: [ENDEREÇO DE E-MAIL]
// highlight-end
```

É bem legal perceber como o modelo pode ir além das instruções. Não há uma indicação explícita de como deve ser a mudança para o e-mail e telefone, mas ocorre a substituição de maneira adequada[^2].

[^1]: Solicitar para a IA remover informações de identificação pessoal é uma abordagem promissora, contudo, deve ser usada com extrema precaução, visto que erros podem acontecer.
[^2]: Comparando-se com o [*prompt* original](https://learnprompting.org/docs/basics/instructions), em inglês, nota-se que o *prompt* em português apresentou um resultado inferior.


## Notes 

🚧 Esta página precisa de citações 🚧