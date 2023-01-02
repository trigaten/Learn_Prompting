---
sidebar_position: 10
---

# APE

Automatic Prompt Engineering (APE)(@zhou2022large) is an approach to automating the generation and
selection of prompts. The basic idea of APE is to give a LLM a prompt containing
a few shot exemplars, and ask it generate a prompt that would create these exemplars.

## Example

For example, if we give the LLM the following prompt:

```
Is a banana a fruit?
Yes
Is a tomato a fruit?
No
Is a fish a fruit?
No

What would be a good prompt to generate an answer to the above questions?

```

<pre>
banana
Yes

tomato
No

fish
No

watermelon
Yes

What would be a good prompt to generate an answer to the above questions?

    <span style={{backgroundColor: "#D2F4D3"}}>
    Is the following item a fruit:
    </span>
</pre>