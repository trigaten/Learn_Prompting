---
sidebar_position: 10
---

# 🔴 校准大语言模型

通过校准输出分布(@zhao2021calibrate)，可以抵消LLM表现出的某些偏差。

**校准输出分布究竟意味着什么？**

让我们通过一个快速示例来说明：假设我们有一个 %%sentiment analysis|sentiment analysis%% ，有两个可能的标签，`Positive`和`Negative`。
思考一下LLM被提示输入`Input: nothing Sentiment:`时会发生什么。
这个输入不包含任何LLM可以用来进行情感预测的 _上下文_ ，因此被称为**无上下文**输入。

由于nothing既不是积极的概念，也不是消极的概念，因此我们期望LLM为Positive和Negative的输出概率约为0.5。然而，通常（包括此示例）情况并非如此。

```
p("Positive" | "Input: nothing Sentiment:") = 0.9

p("Negative" | "Input: nothing Sentiment:") = 0.1
```

在给定一个无上下文输入的标签概率的情况下，我们知道LLM的**输出分布**很可能偏向标签`Positive`。这可能会导致LLM对所有输入都偏向`Positive`，即使输入实际上不是积极的。

如果我们能够以某种方式**校准**输出分布，使得无上下文输入为`Positive`和`Negative`都被分配概率0.5，那么我们通常可以消除对`Positive`的偏见，并使LLM在无上下文输入和有上下文输入上更可靠。

## 非技术性解决方案

解决此问题的一种非技术性方法是提供一些few-shot示例，其中无上下文示例被有效地分配为`Positive`和`Negative`的概率均为0.5。

例如，我们可以提供以下few-shot示例，显示每个无上下文示例都被分类为Positive和Negative：
```
Input: 我讨厌这部电影。 Sentiment: Negative
Input: 我喜欢这部电影。 Sentiment: Positive
Input: N/A Sentiment: Positive
Input: N/A Sentiment: Negative
Input: nothing Sentiment: Positive
Input: nothing Sentiment: Negative
Input: 我喜欢鸡蛋。 Sentiment:
```

据我所知，这种解决方案在文献中尚未得到探讨，我不确定它在实践中的效果如何。然而，这是一个简单的解决方案，可以展示校准试图实现什么。

## 技术解决方案

另一个解决方案是 __上下文校准__(@zhao2021calibrate)，在此解决方案中，我们调整特殊的校准参数，以确保像`Input: nothing Sentiment:` 这样的无上下文输入被分配到两个标签的概率约为0.5。请注意，在实践中，该方法通过多个不同的无上下文输入（例如`Input: N/A Sentiment:`，`Input: [MASK] Sentiment:`）进行校准。它平均了最适合每个无上下文输入的校准参数，以找到LLM的最佳校准参数。

### 示例

让我们通过一个示例来计算一个无上下文输入的校准参数。请注意，由于GPT-3不能限制在`Positive`和`Negative`标签上，因此此示例无法在GPT-3上重现。

再次考虑上面的示例，LLM为无上下文输入分配以下标签的概率：

```
p("Positive" | "Input: nothing Sentiment:") = 0.9

p("Negative" | "Input: nothing Sentiment:") = 0.1
```

我们想要找到一些概率分布q，使得
```
q("Positive" | "Input: nothing Sentiment:") = 0.5

q("Negative" | "Input: nothing Sentiment:") = 0.5
```

我们将通过创建一个线性变换来调整（校准）$p$的概率来实现这一点。

$\^{q} = \text{Softmax}(W\^{p} + b)$

该方程式接受原始概率 $\^{p}$ 并将权重 $W$ 和偏差 $b$ 应用于它们。权重 $W$ 和偏差 $b$ 是校准参数，当应用于无上下文示例的概率时，将产生 $\^{q}$ = [0.5，0.5]。

#### 计算W和b

我们需要某种方式来计算权重 $W$ 和偏差 $b$ 。一种方法是：
$W = \text{diag}(\^{p})^{-1}$ 

$b = 0$

虽然 $W$ 的定义可能一开始看起来有点奇怪，但它只是取 $\^{p}$ 中每个值的倒数，以便找到将原始概率 $\^{p}$ 转换为校准概率[0.5，0.5]的 $W$ 。

让我们验证这对于上面的示例是否有效：

$\^{p} = [0.9, 0.1]$

$W = \text{diag}(\^{p})^{-1} = \text{diag}([0.9, 0.1])^{-1} 
= \begin{bmatrix}
   0.9 & 0 \\
   0 & 0.1
\end{bmatrix}^{-1}
= \begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}$

$\^{q} = \text{Softmax}(W\^{p} + b) = \text{Softmax}(\begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}*{[0.9, 0.1]} + 0)
= \text{Softmax}([1, 1])
=[0.5, 0.5]$

正如上面所提到的，我们将为多个不同的无上下文输入执行相同的过程，并平均适用于每个无上下文输入的最佳校准参数，以找到LLM的最佳校准参数。这意味着最终的校准参数可能不会将任何无上下文输入映射到完全为[0.5，0.5]的概率。

### 另一种方法

$b$ 也可以设置为 $-\^{p}$ ，$W$ 设置为单位矩阵。该方法在生成任务上表现更好，而不是分类任务(@zhao2021calibrate)。

## 总结

LLM通常会对某些标签产生偏见。校准可以用于抵消这种偏见。