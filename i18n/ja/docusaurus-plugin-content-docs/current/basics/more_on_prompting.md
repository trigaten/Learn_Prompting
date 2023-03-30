---
sidebar_position: 10
locale: en-us
style: chicago
---

# 🟢 さらなるプロンプティング

前のページで見てきたように、プロンプトには複雑さの異なるさまざまな形式があります。
コンテキスト、指示、複数の質問と回答の例、さらには他のプロンプトを含める (?!) こともできます。

コンテキスト、指示、および複数の例を含むプロンプトの例を次に示します。

(原文)
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

(日本語)
```text
Twitter は、ユーザーが「つぶやき」と呼ばれる短いメッセージを投稿できるソーシャル メディア プラットフォームです。
ツイートにはポジティブなものもネガティブなものもあります。
ツイートを次のようにポジティブまたはネガティブに分類できるようにしたいと考えています。
以下は、ポジティブなツイートとネガティブなツイートの例です。確実に最後のツイートを正しく分類してください。

Q: ツイート: 「なんて美しい日だ!」
このツイートはポジティブですか、それともネガティブですか?

A：ポジティブ

Q: ツイート: 「私はこのクラスが嫌いです」
このツイートはポジティブですか、それともネガティブですか?

A：ネガティブ

Q: ツイート: 「ジーンズのポケットが大好き」

A:
```

コンテキストや例を追加することで、さまざまなタスクで AI のパフォーマンスを向上させることができます。
次の章では、もう少し高度なプロンプト手法について説明します。

## 注釈

次の章では、**AI、モデル、および LLM という単語が同じ意味で使用されている場合があります**。
詳細については、[語彙リファレンス](https://learnprompting.org/docs/vocabulary)を参照してください。

プロンプト内のプロンプト、または自己拡張プロンプト (@kojima2022large) については、今後の複数のセクションで説明します。
