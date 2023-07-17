---
sidebar_position: 1000
---

# 🟢 旅を始めよう


import Steps from '@site/docs/assets/basics/steps.svg';

<div style={{textAlign: 'center'}}>
  <Steps style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

ここまで、プロンプトエンジニアリングの基本を学んだので、自分でプロンプトエンジニアリングを始める準備ができました。このコースの残りの部分では、追加の技術やリソースが提供されますが、PE を学ぶ最良の方法は自分自身のプロンプトで実験を始めることです。このページでは、任意のプロンプトエンジニアリングの問題を解決する方法を紹介します。

例えば、ChatGPT と一緒に没入型でインタラクティブなストーリーを生成するプロンプトが欲しいとします。

## ステップ 1: 調査

まず、必要なプロンプトについて調べます。Google検索以外にも、以下のリソースが非常に有用です。

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/)（および類似のサブレディット）
- [Learn Prompting Discord](https://discord.gg/learn-prompting)（および関連するDiscord、[OpenAI Discord](https://discord.gg/openai)を含む）

ChatGPTを使用して没入型のインタラクティブなストーリーを生成するプロンプトが必要だと仮定してみましょう。

こちらの [Heroj04](https://github.com/Heroj04) が作成したプロンプトは、良い出発点となるかもしれません。

(原文)

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. I want you to only reply with the game output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets {like this}. my first command is wake up

(日本語訳)

> テキストベースのアドベンチャーゲームとして動作するようにしてください。私がコマンドを入力し、キャラクターが見るものの説明を返します。ゲームの出力だけを、1つのユニークなコードブロック内で返すようにしてください。説明を書かないでください。私が指示しない限り、コマンドを入力しないでください。英語で何かを伝える必要がある場合は、波括弧内にテキストを入れて伝えます {このように}。最初のコマンドは、目を覚ますことです。

## ステップ 2: 実験

これから、プロンプトをChatGPTに入力して、どうなるか見てみましょう。

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}} />
</div>

C#（プログラミング言語）のコードブロックの中に物語が生成されていることがわかりますが、これは望んでいないかもしれません。そこで、次のようにプロンプトを変更しました。

(原文)

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. My first command is wake up

(日本語訳)

> テキストベースのアドベンチャーゲームとして行動してほしいです。コマンドを入力すると、キャラクターが見ているものの説明を返答してください。説明は書かないでください。最初のコマンドは、目を覚まします。


**ChatGPT のレスポンス**:

(原文)

```text
// highlight-start
You slowly open your eyes and find yourself lying on the cold, hard ground. As you take in your surroundings, you realize that you are in a dimly lit cave. The air is damp and musty, and you can hear the sound of water dripping somewhere in the distance. Your head is throbbing and you feel disoriented. You need to figure out where you are and how to get out of here.
// highlight-end
```

(日本語訳)

```text
// highlight-start
目をゆっくりと開けると、冷たくて固い地面に横たわっていることに気づきます。周囲を見渡すと、薄暗い洞窟にいることがわかります。空気は湿っていてカビ臭く、遠くで水が滴る音が聞こえます。頭が痛くて、方向感覚がありません。ここがどこで、どうやってここから出るかを見つけなければなりません。
// highlight-end
```

良いですね。出力がプレーンなテキストになりました。しかしながら、このプロンプトは詳細を欠いています。プロンプトに更にいくつかの構造を追加してみましょう。

(原文)

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. Use flowery language and descriptive words. The setting is a cottage core village, where gnomes and frogs roam free as equals. Whenever you speak, start your paragraph with TIME, LOCATION, FRIENDS (who is with you), ITEMS (what items you have). My first command is wake up.

(日本語訳)

> テキストベースの冒険ゲームの役を演じてほしいです。私がコマンドを入力し、あなたはキャラクターが見る景色の説明で返信する。説明は書かないでください。華やかな言葉や描写的な言葉を使ってください。舞台はコテージコアの村で、ノームとカエルが平等に自由に歩いています。話すたびに、あなたのパラグラフを TIME、LOCATION、FRIENDS（誰と一緒にいるか）、ITEM（何を持っているか）で始めてください。最初のコマンドは起きることです。

**ChatGPT のレスポンス**:

(原文)

```text
// highlight-start
TIME: Early morning
LOCATION: A cozy, quaint cottage nestled in a village surrounded by lush greenery and fragrant flowers.
FRIENDS: You are alone in your bedroom, snuggled under a cozy quilt.
ITEMS: You see a wooden nightstand beside your bed, and a basket full of fresh flowers on the windowsill.

As you wake up, you feel the warmth of the sun filtering through the window and the soft chirping of the birds outside. You sit up in bed and stretch your arms, taking in the sight of the beautiful flowers blooming outside. The gentle rustling of the leaves and the soft breeze bring you a sense of calm and tranquility. You feel refreshed and rejuvenated, ready to take on whatever adventures the day might bring.
// highlight-end
```

(日本語訳)

```text
// highlight-start
TIME: 早朝
LOCATION: 豊かな緑と芳香を放つ花々に囲まれた、居心地の良い小さなコテージの村。
FRIENDS: あなたは自分のベッドルームで一人で、居心地の良いキルトにくるまっています。
ITEMS: ベッドの横には木製のナイトスタンドがあり、窓際には新鮮な花がたくさん入ったバスケットがあります。

目が覚めると、窓から差し込む太陽の温かさと、外で鳴き始めた鳥たちのさえずりを感じます。ベッドから起き上がり、腕を伸ばすと、美しい花々が咲き誇る様子を目にします。そよ風に揺れる葉の音や、優しい風があたる音が静かな安らぎをもたらします。あなたはすっきりとして、新しい冒険に向けて準備ができました。
// highlight-end
```

ああ、完璧です！ChatGPT と一緒にコテージコアの夢を実現できます 🌸

## ステップ 3: フィードバックを得て反復する

今、友達や同僚、上司に見せてフィードバックを求めましょう。もし気に入ってもらえたら素晴らしいですね。もし気に入ってもらえなかった場合は、プロンプトを改良して両者が気に入るものを作るまで反復してください。また、上記に挙げたコミュニティでフィードバックを求めることもできます。このステップに終わりはありません。問題や人々は時間とともに変化するため、常にプロンプトを改善し続ける必要があります。

## 結論

*自分のやり方で*プロンプトエンジニアリングを行ってください。私（このコースの管理者）は常にゼロからプロンプトを書いています。最高のプロンプトを書くためのゴールドスタンダードはありません。試行錯誤が学ぶための最良の方法です。幸運を祈ります！

:::note
この記事の推奨事項は、対話型ストーリーの書き方に限らず、すべてのプロンプトエンジニアリングの問題に適用されます！
:::


## 注釈

- 次の章では、**AI、モデル、LLMが同義語として用いられることがあります**。詳細は [Vocabulary Reference](https://learnprompting.org/ja/docs/vocabulary) を確認してください。