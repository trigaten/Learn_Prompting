---
sidebar_position: 7
---

# 🟢 プロンプトの形式化

import FormalPrompt from '@site/docs/assets/basics/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


ここまで、複数のタイプのプロンプトとそれらを組み合わせる方法を学習してきました。このページでは、さまざまな種類のプロンプトを説明するための用語について解説します。プロンプトエンジニアリング周辺の議論を形式化する種々のアプローチ（@white2023prompt）がありますが、この分野は常に変化しているため、まずは学習を開始するのに十分な情報を提供します。

## プロンプトのパーツ

プロンプトには、よく登場するパーツがいくつかあります。

- A role - 役割
- An instruction/task - 指示
- A question - 質問
- Context - 文脈、コンテキスト
- Examples (few shot) - 例示

私達はこれまでに、役割、指示、および例示について学びました。質問はそのまま質問という意味です！（例: `フランスの首都は何ですか？`）。コンテキストとは、質問をしたり、命令を実行するときにモデルに与える周辺情報です。

これらすべてが必ずプロンプトの中に出てくるわけではありません。また、決まった順序もありません。例えば、次の2つのプロンプトはどちらも役割、命令、およびコンテキストを含み、ほぼ同じことを行います。


```text
You are a doctor. Read this medical history and predict risks for the patient:

January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.
```

```text
January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.

You are a doctor. Read this medical history and predict risks for the patient:
```

ただし、指示が最後に来ているという点で、後者のプロンプトの方がより良い出力を生む可能性が高いです。このような書き方は LLM が単にコンテキストを繰り返すような出力をすることを防ぐため良いでしょう。前者のプロンプトが与えられた場合、LLM は続きの新しい行

`March 15, 2022: Follow-up appointment scheduled with neurologist to assess concussion recovery progress.`

を追加する可能性が高いです。

## 「標準」のプロンプト

これまでにいくつかの形式のプロンプトについて学んできました。今一度初心に立ち返り「標準」プロンプトを定義してみましょう。
コジマ氏（@kojima2022large）に倣い、質問のみで構成されるプロンプトを「標準」プロンプトと定義します。
また、QA 形式の質問のみで構成されるプロンプトも「標準」プロンプトと定義します。

#### なぜ「標準」を定義すべきか？

私たちが参照する多くの記事/論文でも「標準」という言葉を使用しています。また、新しいタイプのプロンプトについて議論するためにも、「標準」を定義する必要があります。

### 標準プロンプトの 2 つの例：


_標準プロンプト_
```
What is the capital of France?
```

_QA 形式の標準プロンプト_
```
Q: What is the capital of France?

A:
```

## Few-shot 標準プロンプト

Few-shot 標準プロンプト（@liu2021pretrain）は、_exemplars（模範）_ が含まれている標準プロンプトのことです。模範とは、プロンプトが解決しようとしているタスクの例のことを指します。（@Brown2020Language）
研究のレポートの中では Few-shot 標準プロンプトを単に標準プロンプトと呼ぶことがしばしばあります。（本ガイドではそうしないようにします。）

### Few-shot 標準プロンプトの 2 つの例：

_Few-shot 標準プロンプト_

```
What is the capital of Spain?
Madrid
What is the capital of Italy?
Rome
What is the capital of France?
```

_QA 形式の Few-shot 標準プロンプト_
```
Q: What is the capital of Spain?
A: Madrid
Q: What is the capital of Italy?
A: Rome
Q: What is the capital of France?
A:
```

Few-shot プロンプトは、コンテキストを与えることでパラメータの更新なしに学習することができる能力と言えます。
