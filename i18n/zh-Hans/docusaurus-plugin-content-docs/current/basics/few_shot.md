---
sidebar_position: 4
---

# 🟢 多范例提示

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>


另一个提示策略是*多范例提示（few shot prompting）*, 这种策略将为模型展示一些例子（shots），从而更形象地描述你的需求。

在上图的例子中，我们尝试对用户反馈进行正面（positive）或反面（negative）的分类。我们向模型展示了 3 个例子，然后我们输入一个不在例子里面的反馈（`It doesnt work!:`）。模型发现头三个例子都被分类到 `positive` 或者 `negative` ，进而通过这些信息将我们最后输入的反馈分类到了 `negative`。

我们如何结构化地设计例子也是非常重要的。由于我们已经将头三个例子结构化成： `input: classification`，因此模型最终也跟着同样只输出分类的结果，而不是一段完整的句子，例如 `this review is positive`。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
每一个输入-输出对被称为一个`范例`
:::

## 结构化的延伸

多范例提示的一个关键场景是当我们需要以`特定的结构`输出结果，但是又很难向模型进行描述的时候。为了理解这一点，让我们看这样一个例子：假设您需要通过分析当地的报纸文章来汇编附近城镇公民的姓名和职业。您希望模型读取每篇文章并以`Last, First [OCCUPATION]`格式输出姓名和职业列表。为了让模型做到这一点，您可以向它展示一些示例：

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

通过向模型展示正确的输出格式示例，它就能够为新的文章生成正确的输出结果。

:::note
尽管我们可以通过使用指令提示符的方式来生成相同的输出，但多范例提示在输出结果的一致性上会更好。
:::

## 不同类型的范例提示

单词 `shot` 在该场景下与 `example（范例）` 一致。除了多范例提示（few-shot prompting）之外，还有另外两种不同的类型。它们之间唯一的区别就是你向模型展示了多少范例。

类型:
- 无范例提示（0 shot prompting）: 不展示范例
- 单范例提示（1 shot prompting）: 只展示 1 条范例
- 多范例提示（few shot prompting）: 展示 2 条及以上的范例

### 无范例提示
无范例提示是最基本的提示形式。它仅仅是向模型展示提示信息，没有提供任何示例，并要求其生成回答。因此，你到目前为止看到的所有指令和角色提示都属于无范例提示。无范例提示的另一个例子是：

```text
Add 2+2:
```

这是无范例提示，因为我们没有向模型展示任何完整的示例。

### 单范例提示

单范例提示是向模型展示一个示例。例如：
  
```text
Add 3+3: 6
Add 2+2:
```

我们仅向模型展示了一个完整的示例（“Add 3+3: 6”），因此这是一个单范例提示。

### 多范例提示

多范例提示是向模型展示2个或更多示例。例如:

```text
Add 3+3: 6
Add 5+5: 10
Add 2+2:
```

这是我们向模型展示了至少2个完整的示例（“Add 3+3: 6”和“Add 5+5: 10”）。通常，展示给模型的示例越多，输出结果就越好，因此在大多数情况下，多范例提示比另外两种提示更受欢迎。

## 结论

多范例提示是让模型生成准确且格式正确的输出的强大技术！
 
By [gezilinll](https://github.com/gezilinll).