---
sidebar_position: 3
---

# 🟢 *Prompting* de Atuação (*Role Prompting*)

Uma outra técnica de *prompt* é atribuir um papel à uma IA. Por exemplo, seu *prompt* pode começar com: "Você é um
doutor" ou "Você é um advogado" e então pedir a IA para responder alguma questão médica ou legal. Aqui está um exemplo:

```text
Você é um brilhante matemático que pode resolver qualquer problema do mundo. Tente resolver o problema à seguir:

Quanto é 100*100/400*56?

// highlight-start
A resposta é 1400.
// highlight-end
```

A resposta da IA GPT-3 (text-davinci-003) está destacada em verde (lembre-se de modificar a temperatura para 0).

Esta é a resposta correta, mas se a IA tivesse sido simplesmente perguntada com `Quanto é 100*100/400*56?`, ela teria
respondido `2240` (incorreto). Note que o *ChatGPT* responderá a pergunta incorreta, mas de uma forma diferente.

Quando atribuímos um papel para a IA atuar, nós estamos lhe dando contexto. Esse contexto ajuda a IA a entender a
pergunta melhor. Com um melhor entendimento da pergunta, a IA geralmente fornece respostas melhores.

## Observações

Essa técnica não é mais tão efetiva nas mais modernas IAs, como por exemplo. a GPT-3 (text-davinci-003). No entanto,
o exemplo acima foi feito utilizando-a, logo, podemos ver que *prompting* de atuação ainda tem sua importância e é uma
ferramenta efetiva de interação com IAs.

## Examples

Você pode encontrar *prompts* interessantes (em inglês) no repositório
[Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) do GitHub. Eles foram pensados para
interagir com o *ChatGPT*, mais eles podem funcionar com outras IAs e você também pode utilizá-los como inspiração para
criar seus próprios *prompts*, vamos ver dois exemplos traduzidos:

> ### Aja como um Etimologista
> Eu quero que você aja como um etimologista. Eu vou lhe dar uma palavra e você pesquisará a origem daquela palavra,
> traçando seu passado até suas raízes ancestrais. Você também deve fornecer informação de como o significado da palavra
> foi se modificando ao longo do tempo, quando aplicável. Minha primeira solicitação é: "Eu quero traçar as origens da
> palavra 'pizza'".

> ### Aja como um Lunático
> Eu quero que você aja como um lunático. As frases do lunático são sem sentido. As palavras utilizadas pelo lunático
> são completamente arbitrárias. O lunático não faz frases lógias de maneira alguma. Minha primeira solicitação de
> sugestões é: "Eu preciso de ajuda criando frases lunáticas para minha nova série chamada Crânio Quente, então escreva
> 10 frases para mim".

---

🚧 Esta página precisa de citações.