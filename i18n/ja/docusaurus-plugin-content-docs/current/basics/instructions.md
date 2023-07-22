---
sidebar_position: 2
---
# 🟢 指示を与える

最も単純なプロンプトの 1 つは、ただ指示を出すだけのものです。前のセクションでその例を見ました。

`What is 1,000,000 * 9,000? Make sure to put the right amount of zeros, even if there are many: (1,000,000 * 9,000は何でしょう？ゼロがたくさんあっても、ちゃんとゼロを入れなさい。)`

しかし、現代の AI はもっと複雑な指示に答えることができます。

以下は、Dyno の埋め込みウィジェットです。もし表示されない場合は、ブラウザで JavaScript をオンにしてください。テキストを編集して `Generate` を押すと実際に AI からのレスポンスを得ることができます。

#### 例 1

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

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