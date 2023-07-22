---
sidebar_position: 2
---
# 🟢 指示を与える

最も単純なプロンプトの 1 つは、ただ指示を出すだけのものです。前のセクションでその例を見ました。

`What is 1,000,000 * 9,000? Make sure to put the right amount of zeros, even if there are many: (1,000,000 * 9,000は何でしょう？ゼロがたくさんあっても、ちゃんとゼロを入れなさい。)`

しかし、現代の AI はもっと複雑な指示に答えることができます。

以下は、Dyno の埋め込みウィジェットです。もし表示されない場合は、ブラウザで JavaScript をオンにしてください。テキストを編集して `Generate` を押すと実際に AI からのレスポンスを得ることができます。

#### 例 1

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="A user has input their first and last name into a form. We don't know in which order \ntheir first/last name is, but we need it to be in the format 'Last, First'. Convert the following:\n\njohn doe" initial-response="Doe, John" max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

<br/>AI は簡単にこの問題を解けます。そしてプロンプティングすることで、より複雑な問題をも解くことができます。

#### 例 2

以下はより複雑な例です。[^1]

```
Read the following sales email. Remove any personally identifiable information (PII),
and replace it with the appropriate placeholder. For example, replace the name "John Doe"
with "[NAME]".

Hi John,

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

Jimmy Smith

Phone: 410-805-2345
Email: jimmysmith@cheapdealz.com
```

これが[AI のレスポンス](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003)です。

```text
// highlight-start
Hi [NAME],

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership ([DEALERSHIP]), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

[SALESPERSON]

Phone: [PHONE NUMBER]
Email: [EMAIL ADDRESS]
// highlight-end
```

モデルが与えられた指示からどのように推定するかを観察するのは非常に面白いです。
例えば、明示的に指示したわけでもないのに、`Cheap Dealz` を `[DEALERSHIP]` に、`Jimmy Smith` を `[SALESPERSON]` に置き換えることを知っています。

[^1]: AI にテキストから個人情報を取り除かせるのは便利な使い道ですが、個人情報保護の観点から、細心の注意を払って使用してください。

## 注釈

🚧 このページは引用が不足しています。 🚧