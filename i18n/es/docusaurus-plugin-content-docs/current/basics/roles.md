---
sidebar_position: 3
---

# 🟢 Rol Prompt

import RolePrompt from '@site/docs/assets/role_prompt.svg';

<div style={{textAlign: 'center'}}>
  <RolePrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Otra técnica de enfoque es asignar un rol a la IA. Por ejemplo, tu enfoque podría comenzar con "Eres un médico" o "Eres un abogado" y luego pedirle a la IA que responda algunas preguntas médicas o legales. Aquí hay un ejemplo:

```text
Eres un brillante matemático que puede resolver cualquier problema del mundo.
Intenta resolver el siguiente problema:

¿Cuál es 100*100/400*56?

// highlight-start
La respuesta es 1400.

// highlight-start
The answer is 1400.
// highlight-end
```

La respuesta de la IA (GPT-3 davinci-003) está resaltada en verde:


Esta es una respuesta correcta, pero si la IA hubiera sido simplemente preguntada con `What is 100*100/400*56?`, habría respondido `280` (incorrect). Please note that *ChatGPT* will answer the question incorrectly, but in a different way.

Al asignar un rol a la IA, le estamos dando cierto contexto. Este contexto ayuda a la IA a entender mejor la pregunta. Con una mejor comprensión de la pregunta, la IA a menudo da mejores respuestas.

Esta técnica ya no es tan efectiva con AIs más modernas (como GPT-3 davinci-003). Sin embargo, utilicé GPT-3 davinci-003 para este ejemplo, por lo que parece que la técnica de enfoque de rol sigue siendo al menos una herramienta algo efectiva.
:::

## Examples

You can find some more interesting prompts in the [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) repository on GitHub. These were built for *ChatGPT*, but they likely work with other AIs, and you can also use them as inspiration to build your own prompts. Let's see two examples:

> ### Act as an Etymologist
> 
> I want you to act as an etymologist. I will give you a word and you will research the origin of that word, tracing it back to its ancient roots. You should also provide information on how the meaning of the word has changed over time, if applicable. My first request is "I want to trace the origins of the word 'pizza'".

> ### Act as an Absurdist
> 
> I want you to act as an absurdist. The absurdist's sentences are meaningless. The words used by an absurdist are completely ridiculous. The absurdist does not make commonplace sentences in any way. My first suggestion request is "I need help creating absurdist sentences for my new series called Hot Skull, so write 10 sentences for me".

---

🚧 This page needs citations 🚧
