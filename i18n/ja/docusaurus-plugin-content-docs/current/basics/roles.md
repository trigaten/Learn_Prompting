---
sidebar_position: 3
---

# 🟢 ロールプロンプティング

AI に役割を与えるプロンプティングテクニックもあります。
「あなたは医者です」または「あなたは法律家です」のような文を付け加えて、医学的な質問や法律的な質問をします。
例えば以下の様なものです。

```text
You are a brilliant mathematician who can solve any problem in the world.
Attempt to solve the following problem:

What is 100*100/400*56?

// highlight-start
The answer is 1400.
// highlight-end
```

緑にハイライトした部分が AI (GPT-3 davinci-003) の回答です。

このように役割を指定すると正解しますが、単純に `What is 100*100/400*56?` と質問すると AI は `280` と不正確な回答をします。
問い方によって *ChatGPT* は正解したり不正解したりするので注意してください。

AI に役割を指定するとき、何らかのコンテキストを与えています。
このコンテキストは AI が質問をより良く理解することに役立ちます。多くの場合において、AI はより適切に回答します。

## 注意

この手法は、GPT-3 davinci-003 などより現代的な AI にはもはや有効ではないと言われています。
しかし、今回の例で使用したのは GPT-3 davinci-003 です。ロールプロンプティングはまだある程度有効なツールのようです。

## 例

GitHubの [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) リポジトリには興味深いプロンプトがいくつもあります。これらは *ChatGPT* 用に作られたものですが、他のAIでも使えそうです。
それらを元に、オリジナルののプロンプトを作りましょう。それでは、2つの例を見てみましょう。

(原文)
> ### Act as an Etymologist
> I want you to act as an etymologist. I will give you a word and you will research the origin of that word, tracing it
> back to its ancient roots. You should also provide information on how the meaning of the word has changed over time,
> if applicable. My first request is "I want to trace the origins of the word 'pizza'".

(日本語訳)
> ### 語源学者として振る舞う
> 語源学者として振る舞ってほしいです。私が言葉を与えるので、あなたはその言葉の起源を研究し、それをたどってください。
> 古代のルーツに立ち返ってください。また、場合によってはその言葉の意味が時代とともにどのように変化してきたかについての情報も提供してください。
> 最初のリクエストは「"ピザ "の語源を辿りたい」です。

(原文)
> ### Act as a Lunatic
> I want you to act as a lunatic. The lunatic's sentences are meaningless. The words used by lunatic are completely
> arbitrary. The lunatic does not make logical sentences in any way. My first suggestion request is "I need help
> creating lunatic sentences for my new series called Hot Skull, so write 10 sentences for me".

(日本語訳)
> ### 狂人として振る舞う
> 狂人として振る舞ってほしいです。狂人の文章は無意味です。狂人の使う言葉は完全に恣意的です。狂人は論理的な文章を一切作りません。
> 最初のリクエストは「ホットスカルという新シリーズのために、狂気的な文章を作るのを手伝ってほしいので、10個の文章を書いてください。」です。

---

🚧 このページは引用が不足しています。 🚧
