---
sidebar_position: 50
---

# 🟢 Sandwich Defense

The sandwich defense[^1] involves sandwiching user input between
two prompts. Take the following prompt as an example:

```text
Translate the following to French: {{user_input}}
```

It can be improved with the sandwich defense:

```
Translate the following to French:

{{user_input}}

Remember, you are translating the above text to French.
```

This defense should be more secure than post-prompting, but is known to be vulnerable to a defined dictionary attack. See the [defined dictionary attack](@site/docs/prompt_hacking/offensive_measures/defined_dictionary) for more information.

[^1]: We currently credit the discovery of this technique to [Altryne](https://twitter.com/altryne?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)