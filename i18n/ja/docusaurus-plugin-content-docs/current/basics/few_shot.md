---
sidebar_position: 4
---

# 🟢 Few-shot プロンプト

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>

さらにもう 1 つのプロンプト戦略は *Few-shot プロンプト*です。これは基本的に、モデルに実行させたいことのいくつかの例 (shot と呼ばれます) を表示するだけです。

Few-shot の例を考えてみましょう。この例では、顧客からのフィードバックをポジティブまたはネガティブに分類しようとしています。ポジティブ/ネガティブの分類結果の例を 3 つ示してから、`It doesn't work!:` というまだ分類されていない新しい文を示します。モデルは、最初の 3 つの例が `positive` または `negative` に分類されたことを確認し、この情報を使用して新しい例を `negative` に分類します。

例を構成する方法は非常に重要です。これら 3 つの例を `入力: 分類結果` として構成したため、モデルは、`this review is positive` のような完全な文ではなく、最終行の後に 1 つの単語を出力します。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
各入出力ペアは *exemplar* (模範)と呼ばれます。
:::

## より詳細な構造を与える

Few-shot プロンプトの主な使用例は、出力をモデルに説明するのが難しい**特定の方法で構造化**する必要がある場合です。これを理解するために、関連する例を考えてみましょう。地元の新聞記事を分析して、近くの町の有名な市民の名前と職業をまとめる必要があるとします。モデルに各記事を読み込み、名前と職業のリストを `Last, First [OCCUPATION]` 形式で出力させたいとします。モデルにこれをさせるために、いくつかの例を示すことができます:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="In the bustling town of Emerald Hills, a diverse group of individuals made their mark. Sarah Martinez, a dedicated nurse, was known for her compassionate care at the local hospital. David Thompson, an innovative software engineer, worked tirelessly on groundbreaking projects that would revolutionize the tech industry. Meanwhile, Emily Nakamura, a talented artist and muralist, painted vibrant and thought-provoking pieces that adorned the walls of buildings and galleries alike. Lastly, Michael O'Connell, an ambitious entrepreneur, opened a unique, eco-friendly cafe that quickly became the town's favorite meeting spot. Each of these individuals contributed to the rich tapestry of the Emerald Hills community.\n1. Sarah Martinez [NURSE]\n2. David Thompson [SOFTWARE ENGINEER]\n3. Emily Nakamura [ARTIST]\n4. Michael O'Connell [ENTREPRENEUR]\n\nAt the heart of the town, Chef Oliver Hamilton has transformed the culinary scene with his farm-to-table restaurant, Green Plate. Oliver's dedication to sourcing local, organic ingredients has earned the establishment rave reviews from food critics and locals alike.\n\nJust down the street, you'll find the Riverside Grove Library, where head librarian Elizabeth Chen has worked diligently to create a welcoming and inclusive space for all. Her efforts to expand the library's offerings and establish reading programs for children have had a significant impact on the town's literacy rates.\n\nAs you stroll through the charming town square, you'll be captivated by the beautiful murals adorning the walls. These masterpieces are the work of renowned artist, Isabella Torres, whose talent for capturing the essence of Riverside Grove has brought the town to life.\n\nRiverside Grove's athletic achievements are also worth noting, thanks to former Olympic swimmer-turned-coach, Marcus Jenkins. Marcus has used his experience and passion to train the town's youth, leading the Riverside Grove Swim Team to several regional championships.\n1. Oliver Hamilton [CHEF]\n2. Elizabeth Chen [LIBRARIAN]\n3. Isabella Torres [ARTIST]\n4. Marcus Jenkins [COACH]\n\nOak Valley, a charming small town, is home to a remarkable trio of individuals whose skills and dedication have left a lasting impact on the community.\n\nAt the town's bustling farmer's market, you'll find Laura Simmons, a passionate organic farmer known for her delicious and sustainably grown produce. Her dedication to promoting healthy eating has inspired the town to embrace a more eco-conscious lifestyle.\n\nIn Oak Valley's community center, Kevin Alvarez, a skilled dance instructor, has brought the joy of movement to people of all ages. His inclusive dance classes have fostered a sense of unity and self-expression among residents, enriching the local arts scene.\n\nLastly, Rachel O'Connor, a tireless volunteer, dedicates her time to various charitable initiatives. Her commitment to improving the lives of others has been instrumental in creating a strong sense of community within Oak Valley.\n\nThrough their unique talents and unwavering dedication, Laura, Kevin, and Rachel have woven themselves into the fabric of Oak Valley, helping to create a vibrant and thriving small town." initial-response="1. Laura Simmons [FARMER]\n2. Kevin Alvarez [DANCE INSTRUCTOR]\n3. Rachel O'Connor [VOLUNTEER]" max-tokens="616" box-rows="20" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

(プロンプトの日本語訳)

    にぎやかなエメラルドヒルズの町では、さまざまな人々が活躍していました。献身的な看護師であるサラ・マルティネスは、地元の病院での思いやりのあるケアで知られていました。革新的なソフトウェアエンジニアであるデイヴィッド・トンプソンは、テクノロジー業界に革命をもたらす画期的なプロジェクトにたゆまぬ努力を重ねてきました。一方、才能あるアーティストであり壁画家であるエミリー・ナカムラは、建物やギャラリーの壁を同様に飾る活気に満ちた示唆に富む作品を描きました。最後に、野心的な起業家であるマイケル・オコンネルは、ユニークで環境に優しいカフェをオープンし、すぐに町のお気に入りの待ち合わせ場所になりました。これらの各個人は、エメラルドヒルズコミュニティの豊かなタペストリーに貢献しました。
    1. サラ・マルティネス [看護師]
    2. デイヴィッド・トンプソン [ソフトウェアエンジニア]
    3. エミリー・ナカムラ [アーティスト]
    4. マイケル・オコンネル [起業家]

    町の中心部で、シェフのオリバー・ハミルトンは、農場から食卓へのレストラン、グリーンプレートで料理シーンを一変させました。地元の有機食材を調達するというオリバーの献身は、食品評論家や地元の人々から絶賛されています。
    通りのすぐ下にはリバーサイドグローブライブラリーがあり、主任司書のエリザベスチェンが熱心に取り組んで、すべての人にとって居心地の良い包括的な空間を作り出しています。図書館の提供物を拡大し、子供向けの読書プログラムを確立するという彼女の努力は、町の識字率に大きな影響を与えました。
    魅力的な町の広場を散歩していると、壁を飾る美しい壁画に魅了されるでしょう。これらの傑作は、有名なアーティスト、イザベラ・トーレスの作品です。彼の才能は、リバーサイドグローブの本質を捉え、町に命を吹き込みました。
    元オリンピック水泳選手からコーチに転向したマーカス・ジェンキンスのおかげで、リバーサイド・グローブの運動成績も注目に値します。マーカスは彼の経験と情熱を使って町の若者を訓練し、リバーサイドグ・ローブ水泳チームをいくつかの地域選手権に導きました。
    1. オリバー・ハミルトン [シェフ]
    2. エリザベス・チェン [司書]
    3. イザベラ・トーレス [アーティスト]
    4. マーカス・ジェンキンス [コーチ]

    魅力的な小さな町であるオークバレーには、そのスキルと献身によってコミュニティに永続的な影響を与えてきた、注目に値する 3 人の個人が住んでいます。

    町のにぎやかなファーマーズマーケットでは、おいしい、持続可能な方法で栽培された農産物で知られる情熱的な有機農家、ローラ・シモンズを見つけることができます。彼女の健康的な食事の促進への献身は、町がより環境に配慮したライフスタイルを受け入れるように促しました。
    オークバレーのコミュニティセンターでは、熟練したダンスインストラクターであるケビン・アルバレスが、あらゆる年齢の人々に動きの喜びをもたらしました。彼のインクルーシブなダンスクラスは、住民の一体感と自己表現を育み、地元のアートシーンを豊かにしています。

    最後に、精力的なボランティアであるレイチェル・オコナーは、さまざまな慈善活動に時間を費やしています。他の人々の生活を改善するという彼女のコミットメントは、オークバレー内に強いコミュニティ意識を生み出すのに役立ちました。
    ユニークな才能と揺るぎない献身を通じて、ローラ、ケビン、レイチェルはオークバレーの構造に織り込まれ、活気に満ちた繁栄する小さな町の創造に貢献しています。

(出力の日本語訳)

    1. ローラ・シモンズ [農家]
    2. ケビン・アルバレス [ダンスインストラクター]
    3. レイチェル・オコナー [ボランティア]

正しい出力形式のモデル例を示すことで、新しい記事の正しい出力を生成できます。

:::note
代わりに命令プロンプトを使用してこの同じ出力を生成することもできますが、Few-shot プロンプトを使用すると、出力の*一貫性*が大幅に向上します。
:::

## ショットプロンプトのバリエーション

「ショット」という言葉は「例」と同義です。Few-shot プロンプトの他に、2 つのタイプのショットプロンプトが存在します。これを考えすぎないでください！これらのバリエーションの唯一の違いは、モデルを表示する例の数です。

バリエーション:
- 0-shot プロンプト: モデルに例が表示されない
- 1-shot プロンプト: モデルに 1 つの例を示します
- Few-shot プロンプト: 2 つ以上の例がモデルに表示されます

### 0-shot プロンプト

0-shot プロンプトは、プロンプトの最も基本的な形式です。モデルに例のないプロンプトを表示し、応答を生成するように求めているだけです。そのため、これまでに見たすべての指示と役割のプロンプトは 0-shot プロンプトです。0-shot プロンプトの追加の例は次のとおりです。

```text
Add 2+2:
```

モデルに完全な例を示していないため、0-shot です。

### 1-shot プロンプト

1-shot プロンプトは、モデルに 1 つの exemplar を表示する場合です。たとえば、0 ショット プロンプト `Add 2+2:` の 1 ショット アナログは次のとおりです。

```text
Add 3+3: 6
Add 2+2:
```

モデルは 1 つの完全な exemplar (`Add 3+3: 6`) のみを示したので、これは 1 回限りのプロンプトです。

### Few-shot プロンプト

Few-shot プロンプトは、モデルに 2 つ以上の exemplar を使用する場合のことを指します。このセクションより前のプロンプトはすべて Few-shot プロンプトです。Few-shot の例は次のとおりです。

```text
Add 3+3: 6
Add 5+5: 10
Add 2+2:
```

これは、2 つの完全な exemplar (`Add 3+3: 6` および `Add 5+5: 10`) をモデルに示しています。通常、モデルに表示する exemplar が多いほど、出力が向上するため、ほとんどの場合、0-shot および 1-shot プロンプトよりも Few-shot プロンプトの方が好ましいです。

## 結論

Few-shot プロンプトは、モデルが正確で適切にフォーマットされた出力を生成するための強力な手法です。
 
