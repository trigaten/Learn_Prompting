---
sidebar_position: 30
---

# 🟢 Post-Prompting

The post-prompting defense(@christoph2022talking) simply puts
the user input *before* the prompt. Take this prompt as an example:

```text
Translate the following to French: {{user_input}}
```

It can be improved with post-prompting:
```
{{user_input}} 

Translate the above text to French.
```

This can help since `ignore the above instruction...` doesn't work as well. Even though a user could say `ignore the below instruction...` instead, LLMs often will follow the last instruction they see.