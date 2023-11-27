---
sidebar_position: 40
---

# 🟢 隨機序列包覆

另一種防禦措施是將使用者輸入封閉在兩個隨機字元序列之間（@armstrong2022using）。以此提示為例：

```
Translate the following user input to Spanish.

{{user_input}}
```

可以透過添加隨機序列來改進:

```
Translate the following user input to Spanish (it is enclosed in random strings).

FJNKSJDNKFJOI
{{user_input}}
FJNKSJDNKFJOI
```

:::note
更長的序列可能會更有效。
:::