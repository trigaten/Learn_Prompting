---
sidebar_position: 3
---

# 🟢 「標準」プロンプト

ここまで学んできたことからも分かるように、プロンプトにはいくつかの形式がありそうです。
Kojima (@kojima2022large) らに倣って、質問のみで構成されたプロンプトを「標準」プロンプトと呼ぶことにします。
また、QA 形式の質問のみで構成されたプロンプトも「標準」プロンプトと見なします。

#### なぜ「標準」と呼ぶ？

私たちが参考にする多くの記事で、この言葉が使われています。
標準的なプロンプトと対比して、新しいタイプのプロンプトを議論できるように、この用語を定義しています。

### 2 つの標準プロンプトの例

_標準プロンプト_
```
What is the capital of France?
```

_QA 形式の標準プロンプト_
```
Q: What is the capital of France?

A:
```

## 数発の標準プロンプト

数発の標準プロンプト (原文: Few Shot Standard Prompts, @liu2021pretrain) は、標準プロンプトの中に「例示」が入っているだけのものです。
例示とは、プロンプトが解決しようとしている課題の例のことで、プロンプト自体に含まれているものです (@brown2020language)。
研究においては、数発の標準プロンプトを単に標準プロンプトと呼ぶことがあります (ただし、このガイドではそうしないようにしています)。

### 2 つの「数発の標準プロンプト」例:

_数発の標準プロンプト_

```
What is the capital of Spain?
Madrid
What is the capital of Italy?
Rome
What is the capital of France?
```

_QA 形式の数発の標準プロンプト_
```
Q: What is the capital of Spain?
A: Madrid
Q: What is the capital of Italy?
A: Rome
Q: What is the capital of France?
A:
```

数発のプロンプトは、"in context" つまりコンテキストの中での学習を促進し、パラメータの更新をせずにに学習する能力です (@zhao2021calibrate)。
