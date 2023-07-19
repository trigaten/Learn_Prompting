---
sidebar_position: 40
---

# 🟡 コーディングの補助

ChatGPT を使用すると、デバッグ、コード生成、再フォーマット、コメントなどができます。40以上のプログラミング言語でコードを扱うことができます。

|   非常に古い  |        古い    |     新しい            |         最新          |
|-------------|----------------|---------------------|-----------------------|
| BASIC       | Perl           | Swift               | Kotlin                |
| Assembly    | Pascal         | TypeScript          | Julia                 |
| Fortran     | PHP            | Rust                | Crystal               |
| Lisp        | Prolog         | Kotlin/Native       | Racket                |
| COBOL       | C              | Julia (GPU)         | Lua                   |
| Algol       | PL/I           | Go                  | Zig                   |
| SNOBOL      | C++            | Dart                | Nim                   |
| RPG         | Smalltalk      | Elixir              | Crystal (LLVM)        |
| Forth       | Tcl            | Groovy              | Vlang                 |
| Ada         | SQL            | Scala Native        | Erlang                |

## コード生成

チャットGPTにコード生成を指示するのは、次のように簡単です。

(日本語訳)

```text
ジュニアの Python プログラマーとして行動してください。6 つの項目を持つ 3 つの配列（前置詞、動詞、名詞）から madlibs (指定された文の一部に、欠けている単語をプレイヤーが自分で埋めることができる遊びのこと) を生成するコードを書いて、名詞も直接目的語として使用します。それを書いたら、コードを実行してください。
```
　
出力結果は以下のようになります。

```text
// highlight-start
import random

prepositions = ['at', 'in', 'on', 'with', 'under', 'over']
verbs = ['run', 'jump', 'dance', 'sing', 'laugh', 'cry']
nouns = ['cat', 'dog', 'tree', 'flower', 'book', 'computer']

preposition = random.choice(prepositions)
verb = random.choice(verbs)
noun = random.choice(nouns)

madlib = f"I {verb} {preposition} the {noun}."

print(madlib)
// highlight-end
```

## コメントと再フォーマット

ChatGPT に、コードにコメントを追加し、可読性を高めるように依頼することができます。下記のプロンプトに従って、ハッシュマーク 3 つを追加し、整理してほしいコードを貼り付けてください。

(日本語訳)

```text
この Python のコードにコメントを追加し、可読性を高めるためにフォーマットしてください。 

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
###
```

出力結果は以下のようになります。

(日本語訳)

```text
// highlight-start
# mathモジュールをインポート
import math

# 波の振幅、周波数、点の数を設定
amplitude = 30
frequency = 2
num_points = 50

# 波の各点をループ処理
for i in range(num_points):
    # math モジュールの sin 関数を用いて、波の y 座標を計算。
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    
    # 波の適切な位置に Padding のためのスペースとアスタリスクを出力。
    print(' ' * (amplitude + y) + '*')

// highlight-end
```

## デバッグ

ChatGPTは、コード内の構文エラーだけでなく、実行時に発生する論理エラーも検出できます。以下は、Python スクリプトの例であり、3 行目の論理エラーにより、4 行目でゼロ除算エラーが発生します。このエラーを見つけて修正するために、次の簡単なプロンプトを試してください。

(日本語訳)

```text
この Python コードをデバッグしてください。

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

出力には、分母変数が正の値に保たれるように変更された while ループが含まれています。

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

より微妙なエラーを解決するには、エラーメッセージや環境変数、含まれるライブラリ、入力の変化など、さらに詳細な情報が必要になる場合があります。


## コードの最適化

スクリプトの実行に時間がかかりすぎる場合、ChatGPT で最適化することができます。効率の悪い、素数を見つけるスクリプトの最適化の例を示します。

(日本語訳)

```python
最上級の Python 開発者のように振る舞ってください。このスクリプトを最適化してください。

for num in range(2, 101):
    for i in range(2, int(num**0.5)+1):
        if (num % i) == 0:
            break
    else:
        print(num)
```

出力は、素数を見つけるための [Eratosthenes の篩のアルゴリズム](https://www.geeksforgeeks.org/sieve-of-eratosthenes/)を使用するスクリプトになる場合があります。

```text
// highlight-start
numbers = list(range(2, 101))
for i in numbers:
    for j in range(i * 2, 101, i):
        if j in numbers:
            numbers.remove(j)
print(numbers)
// highlight-end
```

注意して欲しいのは、私たちは ChatGPT にこのスクリプトを最適化するために「上級開発者のように振る舞う」ように要求したということです。また、特定の専門分野 (例: ソートアルゴリズム) や経験年数を持っていることを指示することもできます。代替案として、スクリプトが複雑すぎる場合は、「超初心者の開発者として」そのスクリプトを書くように ChatGPT に依頼することができます。


## プログラミング言語間の翻訳

ChatGPT が提供する非常に便利な機能の 1 つは、プログラムを 1 つの言語から別の言語への書き換えです。これによって、古い言語で書かれたコードをより現代的なものにアップグレードするといった典型的な用途があります。

(日本語訳)

```text
COBOL と Python 両方の知識を持った経験豊富な開発者のように振る舞ってください。COBOL のプログラムを Python に変換してください。

IDENTIFICATION DIVISION.
PROGRAM-ID. CALCULATE-SS-TAX.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 SALARY PIC 9(7)V99.
01 SS-TAX PIC 9(7)V99.

PROCEDURE DIVISION.
DISPLAY "Enter employee's salary: ".
ACCEPT SALARY.

COMPUTE SS-TAX = SALARY * 0.062.

DISPLAY "Social Security tax is: $", SS-TAX.
STOP RUN.
```

出力は次のようになるはずです。

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```


## 複数のファイルをまたいだリファクタリング

ChatGPT に複数のファイルを評価させたい場合はどうすればよいでしょうか？
簡単です。ファイル名を提供し、次のように各コードを貼り付けてください。

(日本語訳)

```text
私のPythonスクリプトは、異なるディレクトリにある以下の2つのファイルを使用しています。conversation.py を実行した際の出力を表示してください。

ファイル 1: ./phrases/coming_and_going.py
def hi(name):
   print(f"Hello, {name}!")
def bye(name):
   print(f"Goodbye, {name}!")

ファイル 2: ./conversation.py
from phrases.coming_and_going import hi, bye
hi("John")
bye("John")

// highlight-start
Hello, John!
Goodbye, John!
// highlight-end
```

このテクニックを使用すると、1 つのプロンプトで複数のファイルを ChatGPT に送信し、コードをリファクタリングすることができます。 または、それぞれを「覚えさせて」、後で別のプロンプトで実行するように依頼することもできます。

## データベースサーバーのシミュレーション

ChatGPT はコードだけでなく、データベース、Web サーバー、および電子メールサーバーなどのサーバー環境をシミュレートすることもできます。 以下のプロンプトを参考にしてください。

(日本語訳)

```text
Microsoft SQL Server として機能してください。「politics」という名前のデータベースを作成し、その中に「politicians」というテーブルを作成してください。異なる時代から世界中の有名な政治家 50 人のデータを入力してください。出身国、生年月日、必要に応じて死亡日のための列を追加してください。最も長生きした 3 人の政治家のビューを作成してください。そのビューの内容を出力する Transact-SQL コマンドを作成して実行してください。
```

出力は次のようになります。

(日本語訳)

```text
// highlight-start
-- 「politics」データベースを作成
CREATE DATABASE politics;
GO

-- 「politics」データベースを使用
USE politics;
GO

-- 「politicians」テーブルを作成
CREATE TABLE politicians (
    id INT PRIMARY KEY,
    full_name VARCHAR(50),
    country VARCHAR(50),
    date_of_birth DATE,
    date_of_death DATE
);
-- 省略
// highlight-end
```

そこから、列やインデックスなどを追加することができます。

(日本語訳)

```
politicians テーブルに second_in_command (補佐官) という列を追加し、各行の情報を更新してください。
```

以下は、出力例です。

(日本語訳)

```text
// highlight-start
ALTER TABLE politicians ADD second_in_command VARCHAR(255);

UPDATE politicians
SET second_in_command = 
    CASE name
        WHEN 'Winston Churchill' THEN 'Clement Attlee'
        WHEN 'Franklin D. Roosevelt' THEN 'Harry S. Truman'
        WHEN 'Mao Zedong' THEN 'Lin Biao'
        -- 各政治家について分岐を追加する
        ELSE NULL
    END;
// highlight-end
```

## ウェブサーバーのシミュレーション

ChatGPT は、他の多くのサーバーやAPIをシミュレートすることができます。以下は、特定のブラウザリクエストヘッダーに対するApacheサーバーのレスポンスをシミュレートするプロンプトの例です。

(日本語訳)

```text
Apache ウェブサーバーとして動作します。これらの HTTP ヘッダーにどのように応答しますか？

GET /example HTTP/1.1
Host: www.example.com
```

出力は次のようになります。

(日本語訳)

```text
// highlight-start
HTTP/1.1 200 OK
Date: [現在の日付と時刻]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [要求されたリソースの最終変更日時]
Content-Type: [要求されたリソースの MIME タイプ、例えば text/html]
// highlight-end
```

ChatGPT が模擬できるサーバーやAPIの種類の一部を以下に示します。

|   非常に古い  |        古い    |     新しい            |         最新          |
|-------------|----------------|------------------------|----------------------|
| Telnet      | HTTP/1.0       | RESTful API            | GraphQL API          |
| FTP         | SMTP           | SOAP API               | GRPC API             |
| POP3        | LDAP           | OAuth 2.0              | Docker API           |
| IMAP        | DHCP           | OpenAPI (Swagger)      | Kubernetes API       |
| DNS         | NTP            | gRPC-web API           | Istio API            |
| SNMP        | RADIUS         | MQTT API               | Prometheus API       |
| Syslog      | SFTP           | WebSocket API          | Envoy API            |
| TFTP        | SSH            | AWS API Gateway        | Istio Mixer API      |
| NFS         | XML-RPC        | Azure API Management   | OpenTracing API      |
| SMB         | JSON-RPC       | Google Cloud Endpoints | NATS Streaming API   |


## コマンドラインのシミュレーション

Linux（または Windows PowerShell）内のシェルはプログラミング言語でもあるため、ChatGPT を使用して対話し、ファイルシステムの環境を構築することができます。

```
Debian Linux コマンドシェルとして振る舞ってください。説明は最小限にし、ターミナルのように応答してください。最初のコマンドは次のとおりです: ls -l
```

出力は次のようになります。

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

他のコマンドを試してみてください。

```text
>touch greeting.txt  
>echo "hello" > greeting.txt  
>ls -l  
```

ChatGPT はあなたの変更を（少なくともしばらくの間）覚えているので最終出力は次のようになるはずです。

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

Chat GPT を仮想マシンとして使用する方法の詳細については、[engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/) を参照してください。

---

このセクションは [prompt engineering training](https://promptyes.com/) を提供する Prompt Yes! の貢献によるものです。
