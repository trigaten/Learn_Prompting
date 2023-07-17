---
sidebar_position: 600
---

# 🟢 Zapier for Emails

import Basic from '@site/docs/assets/basic_applications/Zapiermail/Basic.webp';
import Diagram from '@site/docs/assets/basic_applications/Zapiermail/Diagram.webp';
import Step1 from '@site/docs/assets/basic_applications/Zapiermail/Step1.webp';
import Step2 from '@site/docs/assets/basic_applications/Zapiermail/Step2.webp';
import Step3 from '@site/docs/assets/basic_applications/Zapiermail/Step3.webp';
import Step4 from '@site/docs/assets/basic_applications/Zapiermail/Step4.webp';
import Zap from '@site/docs/assets/basic_applications/Zapiermail/Zap.webp';

## 序章

私たちはすでに、GPT-3がどれほどメールに便利であるかを見てきました。それを [Zapier](https://zapier.com) や [Bubble.io](https://bubble.io) のようなノーコードツールと組み合わせるとさらに便利になります。

この記事では、少量のセットアップ時間で Zapier+GPT-3 が何をすることができるかの例を紹介します。この記事は特定の例に焦点を当てていますが、可能性ははるかに大きいです。途中で他の例もいくつか示します。Bubble.io でもこれを行うことができることを覚えておいてください。他にも多くのノーコードツールがありますが、執筆時点では GPT-3 を使用できるものは非常に少ないです。

この記事では、Zapier で**メールが要約され保存される**というシンプルなシステムを構築します。誰かと会議の予定がありますか？その人と交換したメールの要約をすばやく確認してみましょう。このタスクは約 20 分でできます。

:::caution
この記事を理解するには Zapier についてすでに知っていることが役立ちます。もし知らない場合は、この[記事](https://zapier.com/learn/)をチェックしてみてください。
:::


## 一般的な考え方

以下は、Zapier で行う作業のダイアグラムです。メールがあなたの受信トレイに届くたびに、それは Zapier をトリガーします。今のところは 4 つのステップがあります：

1. メールが届き、Zapier をトリガー
2. メールの内容をフォーマット（HTML マークダウンを削除するなど）
3. 要約するためにそれを GPT-3 に送る
4. 出力をデータベースに保存する

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}} />
</div>

## Zapier でのセットアップ

[Zapier のアカウント](https://zapier.com/sign-up)を作成しておく必要があります（無料のものを取得できます）。セットアップは非常に簡単です。アカウントを作成したら、以下のボックスを展開して、作成する必要がある各 Zapier アクションの詳細な説明を確認してください。

<details>
  <summary>より詳細なZapierのステップを確認するにはこちらを展開してください</summary>
  <div>
  これが最終的にZapierアクションダイアグラムがどのように見えるかです。
    <div><div style={{textAlign: 'left'}}>
  <img src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        ステップ 1: 新しい受信メールに対するGmailトリガー (ここではGmailを使用)
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <img src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
       ステップ 2: メール内容のフォーマッター
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step2} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        ステップ 3: メール内容の提示
        <br/>
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step3} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        ステップ 4: データベースに追加
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step4} style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>
以下に示すのは、ダイアグラムで示したような非常に基本的な要約を行う Zapier での設定です。制限がありますが、それはちゃんと動作し、有用なデータベースを構築することができます。


## 結果をより良くするためのプロンプトの最適化

結果を改善するためのいくつかの簡単な方法があります。コンテキストの追加やロールプロンプトを用いると、出力の改善が見込めます。しかし、あなたのメールの主題や内容は多岐にわたるかもしれません。これは、一般的な指示が非常に具体的な指示よりも良い結果をもたらし、モデルを混乱させる可能性があることを意味します。

実用的な理由から、指示を出すこと、そしてプロンプトでメールが開始する時点を GPT-3 に伝えることは有用です。これは単純に "Email: " を追加し、プロンプトを "Summary: " で終えることで達成できます。これにより、GPT-3 が "Sure! I can summarize it for you..." と返答するのを避けることができます。

ロールプロンプトもここで有用です。GPT-3 にパーソナルアシスタントとしての役割を果たすように求めると、要約の品質が向上します。職場のメールを要約したい場合は、単にあなたの役割を追加するだけで、GPT-3 はそれをコンテキストとして扱います。これは、読み手からある程度の知識を仮定するかのように機能し、メールの関連性のない部分をフィルタリングするのに役立ちます。以下に、オフィス管理者が受け取る可能性があるメールのいくつかの例を示します。

メールを要点で要約するように求めることもできますが、これがどの程度有用かは、要約の使用方法によります。メールの交換を素早く読み飛ばすためには、それが短くて簡潔であることが求められるかもしれません。これを単純にプロンプトで書くだけで上手く機能します。以下にこのプロンプトの一例を示します。それを調整したり、いろいろ試したりして、どのように変わるかを見てみてください。

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

ここでの応答は適切で、そして有用です。しかし、さらなる微調整により、より良い結果が得られます。要約の読者として、それがメールであることには関心がなく、要約の詳細度を下げたいかもしれません。なぜ情報が必要なのか、質問や懸念に関する最後の文は関連性がないでしょう。要約の目的がメールの内容を素早く読み飛ばすことであり、丁寧な表現を取り除きたいという要素を追加するだけで、結果は改善できます。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as my personal assistant. I am an office administrator. Summarize the following email as concisely as you can, ignore the footer and header and any previous emails. I want to use the summary to skim emails. Remove any pleasantries. \n\nEmail: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. \n\nBest regards, Your Name Summary:\n" initial-response="Request for additional office supplies - printer paper, ink cartridges for HP printer, sticky notes, binder clips and highlighters." max-tokens="256" box-rows="15" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

(プロンプト日本語訳)

```
私があなたのパーソナルアシスタントとして働きます。あなたはオフィス管理者です。以下のメールをできるだけ簡潔にまとめてください。フッターやヘッダー、以前のメールは無視してください。メールの要約を用いてメールをざっと見ることが目的です。礼儀正しい表現は削除してください。
メール: オフィス用品の追加リクエスト 親愛なるオフィス管理者の皆様、このメールが皆様にとってよいものとなることを願っております。私は、私たちのチームのための追加のオフィス用品をリクエストするために書いています。皆様がご存知の通り、最近は仕事量が多く、通常よりも早く用品を消費しています。次のアイテムを提供していただければ大変助かります: プリンター用紙 会議室のHPプリンター用のインクカートリッジ 付箋 バインダークリップ ハイライトペン 質問や懸念事項がありましたら、また、いつ頃用品を配送していただけるかを教えてください。ご協力いただきありがとうございます。敬具 あなたの名前 要約:
```

(出力日本語訳)

```
追加のオフィス用品の依頼 - プリンタ用紙、HPプリンタ用インクカートリッジ、付箋、バインダークリップ、蛍光ペン。
```

<br/>これで、要約の最も重要な部分だけが残されます！

## その他の利用ケース

要約の例を見ていただいたので、Zapier+GPT-3 の他の利用ケースについていくつか言及します。一つの優れた例は、GPT-3 にメールのカテゴリー分けをさせることです。これは、プロンプトで次のメールをあなたが好きなカテゴリーに分類するように指示するだけで実現できます。

さらに深く例を挙げると、複数のプロンプトを持つことが可能です。メールの要求に同意する応答を生成するプロンプトと、反対または否定する応答を生成するプロンプトを使用できます。どちらもドラフトに保存して、送信したい時にいつでも送ることができます。

定期的に非常に類似したメールを受け取る場合、Zapier のフィルターを使用してプロンプトをそのメールにのみ適用することができます。これは、フォーマッターと組み合わせると強力なツールとなります。情報を抽出して CSV にエクスポートしたり、何らかの形でデータベースに直接保存したりすることができます。

## 懸念点

GPT-3 を使ってメールを処理や保存をする際のプライバシーに関する懸念を忘れないでください。また、GPT-3 は時々間違えることがあります。メールの内容を送信する前に確認することを強く推奨します。