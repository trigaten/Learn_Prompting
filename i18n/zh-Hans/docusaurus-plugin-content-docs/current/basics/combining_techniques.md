---
sidebar_position: 6
locale: zh-Hans
style: chicago
---

# 🟢 组合提示

import CombinedPrompt from '@site/docs/assets/combined_prompt.svg';


<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

正如我们在前面的教程中所看到的，面向模型的提示具有不同的格式和其复杂性。它们可以包括上下文、指令式的提示词和多个输入-输出的示例。然而，到目前为止，我们只研究了独立的提示类别。将这些不同的技巧组合起来可以产生更强大的提示。

以下是一个包含上下文、指令以及多示例提示的例子：

```text
Twitter是一个社交媒体平台，用户可以发布称为“推文”的短消息。推文可以是积极的或消极的，我们希望能够将推文分类为积极或消极。以下是一些积极和消极推文的例子。请确保正确分类最后一个推文。

Q: 推文: "今天真是美好的一天！"
这条推文是积极的还是消极的？

A: 积极的

Q: 推文: 我讨厌这个班级"
这条推文是积极的还是消极的？

A: 消极的

Q: 推文: "我喜欢牛仔裤上的口袋"

A:
```

通过添加额外的上下文和示例，我们通常可以提高人工智能在不同任务上的表现。

By [gezilinll](https://github.com/gezilinll).