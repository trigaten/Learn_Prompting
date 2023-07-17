---
sidebar_position: 80
---

# 🟢 チャットボットの基本

プロンプトが役立つ最も一般的な方法の 1 つは、[ChatGPT](http://chat.openai.com) など、一般に公開されている多数のチャットボットと対話する場合です。 ChatGPT は GPT-3 とは異なることに注意してください。主な違いは、チャットボットが会話履歴を記憶できることです。 GPT-3 と同じように、質問に答えたり、要約や分析を書いたり、テキストやコードを書いたりすることもできます。とても期待が持てそうですが、自分のプロンプトを具体的に理解して初めてチャットボットの真価が発揮されます。この記事では、スタイルガイダンス、記述子、プライミングの使用など、チャットボットをより有効に活用するための基本的な方法について説明します。

## プロンプトの改善

### スタイルガイダンス

import unguided_question from '@site/docs/assets/basics/unguided_question.webp';
import limerick_question from '@site/docs/assets/basics/limerick_question.webp';

スタイルガイダンスは、AIに特定のスタイルで話すように求めるだけです。スタイル ガイダンスのない質問をすると、ChatGPT は通常、応答として 1 つまたは 2 つの短い段落を返します。より長い応答が必要な場合は、さらに多くの段落を返します。

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}} />
</div>

それは適度にフォーマルな口調で話し、いくつかの詳細をかなり良い精度で提供します。ただし、必要に応じて、プロンプトの最後でスタイルを指定して ChatGPT の応答をカスタマイズすることでさらに良いものにできます。より会話的な応答が必要な場合は、フレンドリーな、または非公式な口調で話すように指示します。より読みやすい形式が必要な場合は、箇条書きのリストで回答するように指示します。おもしろい応答が必要な場合は、一連のリメリック (詩の形式の 1 つ。五行戯詩とも呼ばれる。私の個人的なお気に入り。) の形で答えを出すように指示します。

<div style={{textAlign: 'center'}}>
  <img src={limerick_question} style={{width: "450px"}} />
</div>

より詳細な回答形式を指定したプロンプトの例は次のようになります。

(原文)
>[Question] “Write in the style and quality of an expert in [field] with 20+ years of experience and multiple Ph.D.'s. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.“ 

(日本語訳)
>[質問] 「20 年以上の経験と複数の博士号を持つ [分野] の専門家のスタイルと品質で書いてください。回答では、非正統的であまり知られていないアドバイスを優先してください。詳細な例を使用して説明し、話題の脱線とユーモアは最小限に抑えてください。

形式に沿った入力を促すことで、回答の質が大幅に向上します!

### 記述子

形式を変更するのではなく、単にトーンを変更したり、プロンプトを微調整したりしたい場合は、**記述子**を追加することを推奨します。プロンプトに 1 つか 2 つの単語を貼り付けるだけで、チャットボットがメッセージを解釈または応答する方法を変更できます。プロンプトの最後に「おもしろい」「素っ気ない」「無愛想」「アカデミックな構文」などの形容詞を追加して、応答がどのように変化するかを確認してみてください。

## プライミングプロンプト

プロンプト全体がチャットボットとの会話構造になっているため、最初のプロンプトの形式が会話の残りの部分に影響を与える可能性があり、高レベルな構造と仕様を与えることが可能になります。この最初のプロンプトのことをプライミングプロンプトと呼びます。

例として、同じ会話で教師と生徒と会話できるようにシステムを設定してみましょう。生徒と教師の両方の声のスタイルガイドを含め、回答の形式を指定し、プロンプトを簡単に変更してさまざまな回答を試すことができるようにいくつかの構文構造を含めます。

(原文)

    “Teacher” means in the style of a distinguished professor with well over ten years teaching the subject and multiple Ph.D.’s in the field. You use academic syntax and complicated examples in your answers, focusing on lesser-known advice to better illustrate your arguments. Your language should be sophisticated but not overly complex. If you do not know the answer to a question, do not make information up - instead, ask a follow-up question in order to gain more context. Your answers should be in the form of a conversational series of paragraphs. Use a mix of technical and colloquial language to create an accessible and engaging tone.  

    “Student” means in the style of a second-year college student with an introductory-level knowledge of the subject. You explain concepts simply using real-life examples. Speak informally and from the first-person perspective, using humor and casual language. If you do not know the answer to a question, do not make information up - instead, clarify that you haven’t been taught it yet. Your answers should be in the form of a conversational series of paragraphs. Use colloquial language to create an entertaining and engaging tone. 

    “Critique” means to analyze the given text and provide feedback. 
    “Summarize” means to provide key details from a text.
    “Respond” means to answer a question from the given perspective. 

    Anything in parentheses () signifies the perspective you are writing from. 
    Anything in curly braces {} is the subject you are involved in. 
    Anything in brackets [] is the action you should take. 
    Example: (Student){Philosophy}[Respond] What is the advantage of taking this subject over others in college?

    If you understand and are ready to begin, respond with only “yes.”

(日本語訳)

    「教師」とは、その分野で 10 年以上にわたって教鞭をとっており、その分野で複数の博士号を取得している著名な教授のスタイルを意味します。回答ではアカデミックな構文と複雑な例を使用し、あまり知られていないアドバイスに焦点を当てて、議論をより適切に説明します。言語は洗練されている必要がありますが、過度に複雑であってはなりません。質問に対する答えがわからない場合は、情報をでっち上げないでください。代わりに、より多くのコンテキストを得るためにフォローアップの質問をしてください。回答は、一連の会話形式の段落の形式にする必要があります。技術的な言葉と口語的な言葉を組み合わせて、親しみやすく魅力的なトーンを作成します。

    「学生」とは、科目の入門レベルの知識を持つ大学 2 年生のスタイルを意味します。実際の例を使用して概念を簡単に説明します。ユーモアとカジュアルな言葉を使って、カジュアルに一人称視点で話します。質問に対する答えがわからない場合は、情報をでっち上げないでください。代わりに、まだ教えられていないことを明確にしてください。回答は、一連の会話形式の段落の形式にする必要があります。口語的な言葉を使って、楽しく魅力的な口調を作りましょう。

    「批評」とは、与えられたテキストを分析し、フィードバックを提供することを意味します。
    「要約」とは、テキストから重要な詳細を提供することを意味します。
    「答える」とは、与えられた視点から質問に答えるという意味です。

    括弧 () 内は、あなたが書いている視点を意味します。
    中括弧 {} で囲まれたものは、あなたが関与している主題です。
    角括弧 [] 内は、実行する必要があるアクションです。
    例: (学生){哲学}[回答] 大学で他の科目よりもこの科目を履修する利点は何ですか?

    理解し、開始する準備ができている場合は、「はい」とだけ答えてください。

import unprimed_question from '@site/docs/assets/basics/unprimed_question.webp';
import primed_question from '@site/docs/assets/basics/primed_question.webp';

以下は、哲学の最も興味深い分野について、ChatGPT へのプライミングのない質問の例です。リストを使用し、一般的かつ冷静に話し、説明はあまり具体的ではありません。

<div style={{textAlign: 'center'}}>
  <img src={unprimed_question} style={{width: "650px"}} />
</div>

(日本語訳)

    哲学の最も興味深い分野は何ですか?

    哲学は広く多様な分野であり、多くの魅力的な研究分野があります。哲学の最も興味深い分野には次のようなものがあります。
    1. 認識論: 知識、信念、および正当化の研究。哲学のこの分野は、次のような質問をします: 知識とは何か? どうやって入手するの?  私たちは自分の信念をどのように正当化しますか?
    2. 形而上学: 現実の性質の研究。哲学のこの領域は、次のような問いを投げかけます: 存在の性質とは何か? 心と体の関係とは? 因果関係の性質は何ですか?
    3. 倫理: 道徳的価値と原則の研究。哲学のこの分野は、次のような質問をします。生きるための最良の方法は何ですか? 人生の意味とは?
    4. ロジック: 推論と議論の研究。哲学のこの分野では、次のような質問をします。推論のルールは何ですか? 言葉と思考の関係とは?
    5. 美学: 美と芸術の研究。哲学のこの分野は、次のような質問をします。美の本質とは何か? アートと真実の関係とは? 人間の経験における芸術の役割は何ですか?
    
    これらは、哲学の多くの魅力的な分野のほんの一例です。各分野には独自の疑問、理論、調査方法があり、哲学者はこれらの疑問を探求し続け、世界と私たち自身についての理解を深めています。

2 番目の例では、ChatGPT にプライミングプロンプトを提供し、その中で定義した形式に沿って質問をしました。回答が最初の例といくつかの点で似ていることに気付くでしょう。例えば、さまざまな分野の例として提供されている質問は似ていますが、より深い文脈を提供し、リスト形式ではなく一貫した段落を優先し、例を実生活に関連付けています。

<div style={{textAlign: 'center'}}>
  <img src={primed_question} style={{width: "650px"}} />
</div>

(日本語訳)

    (先生){哲学}[回答] 哲学の最も興味深い分野は何ですか?

    私の経験では、哲学の最も興味深い分野は、現実、存在、知識、倫理、および人間の経験の性質に関する基本的な問題について批判的かつ深く考えるよう私たちに挑戦する分野です。

    私が特に魅力的だと思う分野の 1 つは形而上学です。これは、現実の性質と存在についての問題を扱います。たとえば、時間の性質は何ですか？自由意志は存在しますか？心と体の関係とは？これらの質問は当惑する可能性があり、首尾一貫した回答を作成するには慎重に検討する必要があります。

    私が魅力的だと思う哲学のもう 1 つの分野は認識論です。認識論は、知識、信念、および正当化に関する問題に関係しています。次のような質問に答えようとしています。知識とは何ですか? 私たちはどのようにして知識を獲得するのでしょうか？信念が正当化されるかどうかをどのように判断しますか? これらは、批判的思考や首尾一貫した世界観の構築に関心のある人にとって重要な質問です。

    最後に、倫理は、多くの人々にとって非常に興味深い哲学のもう 1 つの分野です。倫理学は、何が正しくて何が間違っているか、善と悪、そして私たちがどのように振る舞うべきかについての質問に答えようとします。哲学のこの分野は、私たちが直面する倫理的問題の多くが複雑で、慎重な思考と分析を必要とする現代社会において特に重要です。

    もちろん、これらは私が魅力的だと思う哲学の多くの分野のほんの一部です。最終的に、哲学の最も興味深い分野は、個人の興味や関心に依存します。

プロンプトにプライマーを組み込むことは、チャットボットとやり取りするより高度な方法です。現時点では、モデルは時間の経過とともにプライマーを追跡できなくなる可能性があるため、各プロンプトに仕様を追加することは有効です。それだけでなく、AI とのやり取りをより明確にできます。

## 注釈

引用が必要です。

By [Dastardi](https://twitter.com/lukescurrier)
