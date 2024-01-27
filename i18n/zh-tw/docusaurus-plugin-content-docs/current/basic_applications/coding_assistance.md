---
sidebar_position: 40
---

# 🟡 寫程式小幫手

你可以使用 ChatGPT 進行除錯、程式碼生成、重構、註釋等操作。它可以處理40多種程式語言的程式碼。  

|   上古語言   |     早期語言    |      近期語言         |       先鋒語言          |
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

## 程式碼生成

指導 ChatGPT 生成程式碼，就像呼吸一樣簡單：:

```text
Act as a junior python programmer. Please write the code to generate madlibs from 3 arrays of 6 items each: prepositions, verbs and nouns, with the nouns also being used as direct objects. After writing it, execute the code.
```

輸出結果可能像下面一樣:

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

試試這個Dyno外掛的功能:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiMgQ3JlYXRlIGFycmF5cyBvZiBwcmVwb3NpdGlvbnMsIHZlcmJzLCBhbmQgbm91bnNcbnByZXBvc2l0aW9ucyA9IFtcImluXCIsIFwib25cIiwgXCJ1bmRlclwiLCBcImFib3ZlXCIsIFwiYmVzaWRlXCIsIFwidGhyb3VnaFwiXVxudmVyYnMgPSBbXCJyYW5cIiwgXCJqdW1wZWRcIiwgXCJza2lwcGVkXCIsIFwiY3Jhd2xlZFwiLCBcImRhbmNlZFwiLCBcImNsaW1iZWRcIl1cbm5vdW5zID0gW1widHJlZVwiLCBcInJvY2tcIiwgXCJidXNoXCIsIFwiZmxvd2VyXCIsIFwiaG91c2VcIiwgXCJoaWxsXCJdXG5cbiMgQ3JlYXRlIGEgZm9yIGxvb3AgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBhcnJheXNcbmZvciBpIGluIHJhbmdlKGxlbihwcmVwb3NpdGlvbnMpKTpcbiAgIyBQcmludCB0aGUgbWFkbGlic1xuICBwcmludChcIlRoZSByYWJiaXQgXCIrdmVyYnNbaV0rXCIgXCIrcHJlcG9zaXRpb25zW2ldK1wiIHRoZSBcIitub3Vuc1tpXStcIi5cIikiLCJwcm9tcHQiOiJBY3QgYXMgYSBqdW5pb3IgcHl0aG9uIHByb2dyYW1tZXIuIFBsZWFzZSB3cml0ZSB0aGUgY29kZSB0byBnZW5lcmF0ZSBtYWRsaWJzIGZyb20gMyBhcnJheXMgb2YgNiBpdGVtcyBlYWNoOiBwcmVwb3NpdGlvbnMsIHZlcmJzIGFuZCBub3Vucywgd2l0aCB0aGUgbm91bnMgYWxzbyBiZWluZyB1c2VkIGFzIGRpcmVjdCBvYmplY3RzLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 程式碼註釋與程式碼重構

你可以要求 ChatGPT 為你的程式碼添加註釋，並對其進行格式化以便閱讀。在你的提示詞指令之後，新增三個 `#` 號，然後貼上你想要它清理的程式碼:

```text
Please add line comments to this Python code and reformat it for legibility:  

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
```

輸出結果可能像下面一樣:

```text
// highlight-start
# Import the math module
import math

# Set the amplitude, frequency, and number of points in the wave
amplitude = 30
frequency = 2
num_points = 50

# Loop over each point in the wave
for i in range(num_points):
    # Calculate the y value of the wave using the sine function from the math module
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    
    # Print a space for padding, followed by an asterisk at the appropriate position on the wave
    print(' ' * (amplitude + y) + '*')

// highlight-end
```

## Debug 程式碼

ChatGPT 不僅可以檢測程式碼中的語法錯誤，還可以找到執行程式碼時會出現的邏輯錯誤。下面是一個 Python 指令碼的例子，由於第3行的邏輯錯誤，在第4行最終會導致“除以零”錯誤。嘗試使用以下簡單的提示詞來查詢並修復錯誤:

```text
Please debug this Python code:  

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

ChatGPT 的輸出結果將包括已更正的 while 迴圈，它已更改以確保分母變數保持為正數：

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

對於更細微的錯誤，你可能需要新增更多的具體資訊：錯誤訊息、環境變數、包含的庫或輸入變化等。


## 程式碼最佳化

如果你的指令碼執行時間過長，ChatGPT 可以對其進行最佳化。以下是最佳化效率低下的“查詢質數”指令碼的範例:

```text
Act like a very senior python developer. Please optimize this script:  

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

輸出可能是一個使用[埃拉託斯特尼篩法演算法](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) 來查詢質數的指令碼:

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

請注意，我們要求機器人 “act like a _senior_ developer(表現得像一位資深開發人員)” 來最佳化指令碼。你還可以指定它具有某個特定的專業領域（例如排序演算法）或工作年限。另外，如果你有一個看起來過於複雜的指令碼，你可以要求 ChatGPT 以 “as a _very junior_ developer(非常初級開發人員)” 的身份編寫該指令碼。


## 多程式語言轉譯

ChatGPT 提供的一個非常有用的功能，它能夠將程式程式碼從一種語言轉換到另一種語言。這種功能的典型用途可能是將舊語言中的程式碼升級到更現代化的程式語言:

```text
Act like an experienced developer with knowledge of both COBOL and Python. Please convert this COBOL program to Python:  


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

輸出結果可能像下面一樣:

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```


## 處理多個檔案和重構程式碼庫

如果你想讓 ChatGPT 評估**多個**檔案怎麼辦？只需提供每個檔案的檔名並貼上相應的程式碼即可:

```text
My Python script uses two files, listed below, in different directories. Please display the output from executing conversation.py:

BEGIN FILE 1: ./phrases/coming_and_going.py
def hi(name):
   print(f"Hello, {name}!")
def bye(name):
   print(f"Goodbye, {name}!")

BEGIN FILE 2: ./conversation.py
from phrases.coming_and_going import hi, bye
hi("John")
bye("John")

// highlight-start
Hello, John!
Goodbye, John!
// highlight-end
```


掌握這個技術，你可以在單個提示詞中向 ChatGPT 提交多個檔案，並要求它重構程式碼。或者，你可以要求它“記住”每個檔案，然後在稍後的提示詞中執行它們。

## 模擬資料庫伺服器

ChatGPT 不僅可以處理程式碼，還可以模擬像資料庫、Web 伺服器和電子郵件伺服器等伺服器環境。考慮以下提示詞:

```text
Act as Microsoft SQL Server. Create a database called "politics" and inside it a table called "politicians." Fill it with 50 rows of famous politicians from around the world from different eras, 1900-2000. Add columns for their full names, country, dates of birth, and date of death if applicable. Create a view for top 3 politicians who lived the longest. Create and execute a Transact-SQL command that outputs the contents of that view.
```

輸出結果可能像下面一樣:

```text
// highlight-start
-- Create the "politics" database
CREATE DATABASE politics;
GO

-- Use the "politics" database
USE politics;
GO

-- Create the "politicians" table
CREATE TABLE politicians (
    id INT PRIMARY KEY,
    full_name VARCHAR(50),
    country VARCHAR(50),
    date_of_birth DATE,
    date_of_death DATE
);
-- etc.
// highlight-end
```

在這，你可以新增列、索引等:

```
Add a column to the politicians table for the second-in-command and update it for each row.
```

輸出結果可能像下面一樣:

```text
// highlight-start
ALTER TABLE politicians ADD second_in_command VARCHAR(255);

UPDATE politicians
SET second_in_command = 
    CASE name
        WHEN 'Winston Churchill' THEN 'Clement Attlee'
        WHEN 'Franklin D. Roosevelt' THEN 'Harry S. Truman'
        WHEN 'Mao Zedong' THEN 'Lin Biao'
        -- add more cases for each politician
        ELSE NULL
    END;
// highlight-end
```

## 模擬網頁伺服器

ChatGPT 可以模擬許多其他伺服器型別和對應的 API。以下是一個模擬 Apache 伺服器響應特定瀏覽器請求（header）的提示詞示例:

```text
Act as an Apache web server. How would you respond to these HTTP headers?

GET /example HTTP/1.1
Host: www.example.com
```

輸出結果可能像下面一樣:

```text
// highlight-start
HTTP/1.1 200 OK
Date: [current date and time]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [date and time of last modification of the requested resource]
Content-Type: [MIME type of the requested resource, e.g. text/html]
// highlight-end
```

這裡列出了 ChatGPT 可以模擬的一些伺服器和 API 的型別：

|      很老    |     有點老      |       近期的            |      遙遙領先         |
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


## 模擬命令列

由於 Linux 中的 Shell（或 Windows PowerShell）也是一種程式語言，因此你可以使用 ChatGPT 與其互動，並構建檔案系統的環境:

```
Act as Debian Linux command shell. Please respond to my commands as the terminal would, with as little explanation as possible. My first command is: ls -l
```

輸出結果可能像下面一樣:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

可以嘗試與其他命令列進行互動:

```text
>touch greeting.txt  
>echo "hello" > greeting.txt  
>ls -l  
```

ChatGPT 應該可以記住你的更改（至少一段時間），最終輸出應該類似於:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

在[engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/)部落格中可以找到使用 ChatGPT 作為虛擬機器的完整討論。

---

本文內容由**Prompt Yes!**貢獻, 這是一個提供 [提示詞工程訓練](https://promptyes.com/)的網站。
