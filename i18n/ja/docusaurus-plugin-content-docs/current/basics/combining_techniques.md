---
sidebar_position: 6
locale: en-us
style: chicago
---

# 🟢 テクニックを組み合わせる

import CombinedPrompt from '@site/docs/assets/basics/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"500px",height:"300px",verticalAlign:"top"}}/>
</div>

ここまでに見て来たように、プロンプトにはさまざまな形式や複雑さのものがあることが分かりました。そしてそれらは、コンテキストや、指示、複数の入出力例 (Few-shot) を含めることができます。

ただし、紹介したものは、単一のテクニックを使った方法に過ぎません。これらのテクニックは組み合わせることで、さらなる力を発揮します。

コンテキスト、指示、および複数の入出力例を組み合わせたプロンプトの例を次に示します。

```text
Twitter is a social media platform where users can post short messages called "tweets".
Tweets can be positive or negative, and we would like to be able to classify tweets as
positive or negative. Here are some examples of positive and negative tweets. Make sure 
to classify the last tweet correctly.

Q: Tweet: "What a beautiful day!"
Is this tweet positive or negative?

A: positive

Q: Tweet: "I hate this class"
Is this tweet positive or negative?

A: negative

Q: Tweet: "I love pockets on jeans"

A:
```

コンテキストや複数の入出力例を追加することで、さまざまなタスクで AI のパフォーマンスを向上させることができます。
