---
sidebar_position: 1
---

# 🟢 APE

Automatic Prompt Engineering (APE)(@zhou2022large) is an approach to automating the generation and
selection of prompts. The basic idea of APE is to give a LLM a prompt containing
a few shot exemplars, and ask it generate a prompt that would create these exemplars.

## Example

For example, if we give the LLM the following prompt:

```text
Is a banana a fruit?
Yes
Is a tomato a fruit?
No
Is a fish a fruit?
No

What would be a good prompt to generate an answer to the above questions?
```

```text
banana
Yes

tomato
No

fish
No

watermelon
Yes

What would be a good prompt to generate an answer to the above questions?
// highlight-start
Is the following item a fruit:
// highlight-end
```

## Notes

Another simple automatic prompt engineering strategy is to simply give GPT-3 your prompt and ask GPT-3 to improve it.