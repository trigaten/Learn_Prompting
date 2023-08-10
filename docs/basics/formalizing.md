---
sidebar_position: 90
---

# 🟢 Formalizing Prompts

import FormalPrompt from '@site/docs/assets/basics/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

:::takeaways
- Understand the basic parts of a prompt
:::


We have now covered multiple types of prompts, as well as ways to combine them. This lesson will provide you with terms to explain different types of prompts. Although there have been approaches to formalize discourse around prompt engineering(@white2023prompt), the field is ever changing, so we will provide you with just enough information to get started.

## Parts of a Prompt

There are a few different parts of a prompt that you will see over and over again. They are roughly:

- A role
- An instruction/task
- A question
- Context
- Examples (few-shot)

We have covered roles, instructions, and examples in previous lessons. A question is simply a question (E.g. `what is the capital of France?`). Context is any relevant information that you want the model to use when answering the question/performing the instruction.

Not all of these occur in every prompt, and when some do occur, there is no standard order for them. For example, the following two prompts, which each contain a role, an instruction, and context, will do roughly the same thing:

<AIInput>
You are a doctor. Read this medical history and predict risks for the patient.

January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.
</AIInput>

<AIInput>
January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.

You are a doctor. Read this medical history and predict risks for the patient.
</AIInput>

However, we prefer the second prompt, since the instruction is the last part of the prompt. This is preferable, since with the first prompt, the LLM might just start writing more context instead of following the instruction; if given the first prompt, the LLM might add a new line: `March 15, 2022: Follow-up appointment scheduled with neurologist to assess concussion recovery progress.`

## Conclusion

Understanding the structure and components of a prompt is crucial in effectively utilizing language models. The key parts of a prompt include a role, an instruction or task, a question, context, and examples. Not all prompts will contain all these elements, and their order can vary. However, it's generally preferable to place the instruction last to ensure the model focuses on executing the task rather than extending the context. As the field of prompt engineering continues to evolve, these principles provide a solid foundation for crafting effective prompts.