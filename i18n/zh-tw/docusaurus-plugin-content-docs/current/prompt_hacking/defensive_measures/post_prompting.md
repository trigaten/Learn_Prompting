---
sidebar_position: 30
---

# 🟢 後置提示

後置提示(post-prompting)防禦（@christoph2022talking）只是將使用者輸入 *放在* 提示之前。以此提示為例：

```text
Translate the following to French: {{user_input}}
```

可以透過後置提示來改進:

```
{{user_input}} 

Translate the above text to French.
```

This can help since `ignore the above instruction...` doesn't work as well. Even though a user could say `ignore the below instruction...` instead, LLMs often will follow the last instruction they see.

這會有所幫助，因為 `ignore the above instruction...` 也不起作用。儘管用戶可能會說 `ignore the below instruction...`，但 LLM 通常會遵循他們看到的最後一條指令。