---
sidebar_position: 7
---

# 🟡 知识生成

生成的知识方法（Generated Knowledge Approach）(@liu2021generated)要求 %%LLM|LLM%% 在生成响应之前生成与问题相关的可能有用的信息。该方法由两个中间步骤组成，即知识生成和知识集成。

import KGImage from '@site/docs/assets/intermediate/knowledge_generation.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={KGImage} style={{width: "750px"}} />
</div>
<div style={{textAlign: 'center'}}>
知识生成(Liu et al.)
</div>

## 知识生成

在知识生成步骤中，要求 %%LLM|LLM%% 生成有关**问题**的一组事实。大语言模型将以 few-shot 方式进行提示，如下所示。使用相同提示生成 M 个不同的完成。

import KGP1Image from '@site/docs/assets/intermediate/gen_k_p1.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={KGP1Image} style={{width: "500px"}} />
</div>
<div style={{textAlign: 'center'}}>
生成的知识示例(Liu et al.)
</div>


## 知识集成

接下来，我们生成“知识增强”问题，并用它们提示 %%LLM|LLM%% 获得最终答案。最好的理解方法是通过一个例子来说明。

假设我们正在尝试回答**问题**“大多数袋鼠有 <mask\> 肢体”。假设在知识生成步骤中，我们生成了 2 个知识（M=2）：

- 知识1：“袋鼠是生活在澳大利亚的有袋动物。”

- 知识2：“袋鼠是有 5 条肢体的有袋动物。”

现在，我们将每个知识与问题连接起来，生成知识增强的问题：

- 知识增强问题1：“大多数袋鼠有 <mask\> 肢体。袋鼠是生活在澳大利亚的有袋动物。”

- 知识增强问题2：“大多数袋鼠有 <mask\> 肢体。袋鼠是有 5 条肢体的有袋动物。”

然后，我们用这些知识增强的问题提示 LLM，并获得最终答案的提案：

- 答案1：“4”

- 答案2：“5”

我们选择概率最高的答案作为最终答案。最高概率可能是答案令牌的 softmax 概率，或答案令牌的对数概率。

## 结论

这种方法显示了对各种常识数据集的改进。

## 备注

The knowledge corresponding to the selected answer is called the _selected knowledge_.
与所选答案对应的知识称为“精选知识”。
