---
sidebar_position: 40
---

# 🟡 代码辅助

你可以使用ChatGPT进行调试、代码生成、重构、注释等操作。它可以处理40多种编程语言的代码。  

|   上古语言   |     早期语言    |      近期语言         |       先锋语言          |
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

## 代码生成

指导ChatGPT生成代码，就像呼吸一样简单：:

```text
Act as a junior python programmer. Please write the code to generate madlibs from 3 arrays of 6 items each: prepositions, verbs and nouns, with the nouns also being used as direct objects. After writing it, execute the code.
```

输出结果可能像下面一样:

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

试试这个Dyno插件的功能:

<div 
trydyno-embed="" 
openai-model="text-davinci-003" 
initial-prompt="Act as a junior python programmer. Please write the code to generate madlibs from 3 arrays of 6 items each: prepositions, verbs and nouns, with the nouns also being used as direct objects." 
initial-response="" 
max-tokens="512" 
box-rows="5" 
model-temp="0.0" 
top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## 代码注释与代码重构

你可以要求ChatGPT为你的代码添加注释，并对其进行格式化以便阅读。在你的提示词指令之后，添加三个#号，然后粘贴你想要它清理的代码:

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

输出结果可能像下面一样:

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

## Debug代码

ChatGPT不仅可以检测代码中的语法错误，还可以找到执行代码时会出现的逻辑错误。下面是一个Python脚本的例子，由于第3行的逻辑错误，在第4行最终会导致“除以零”错误。尝试使用以下简单的提示词来查找并修复错误:

```text
Please debug this Python code:  

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

ChatGPT的输出结果将包括已更正的while循环，它已更改以确保分母变量保持为正数：

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

对于更细微的错误，你可能需要添加更多的具体信息：错误消息、环境变量、包含的库或输入变化等。


## 优化Code

如果你的脚本执行时间过长，ChatGPT可以对其进行优化。以下是优化效率低下的“查找质数”脚本的示例:

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

输出可能是一个使用[埃拉托斯特尼筛法算法](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) 来查找质数的脚本:

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

请注意，我们要求机器人“ act like a _senior_ developer(表现得像一位资深开发人员)”来优化脚本。你还可以指定它具有某个特定的专业领域（例如排序算法）或工作年限。另外，如果你有一个看起来过于复杂的脚本，你可以要求ChatGPT以“as a _very junior_ developer(非常初级开发人员)”的身份编写该脚本。


## 多编程语言转译

ChatGPT提供的一个非常有用的功能，它能够将程序代码从一种语言转换到另一种语言。这种功能的典型用途可能是将旧语言中的代码升级到更现代化的编程语言:

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

输出结果可能像下面一样:

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```


## 处理多个文件和重构代码库

如果你想让ChatGPT评估**多个**文件怎么办？只需提供每个文件的文件名并粘贴相应的代码即可:

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


掌握这个技术，你可以在单个提示词中向ChatGPT提交多个文件，并要求它重构代码。或者，你可以要求它“记住”每个文件，然后在稍后的提示词中执行它们。

## 模拟数据库服务器

ChatGPT不仅可以处理代码，还可以模拟像数据库、Web服务器和电子邮件服务器等服务器环境。考虑以下提示词:

```text
Act as Microsoft SQL Server. Create a database called "politics" and inside it a table called "politicians." Fill it with 50 rows of famous politicians from around the world from different eras, 1900-2000. Add columns for their full names, country, dates of birth, and date of death if applicable. Create a view for top 3 politicians who lived the longest. Create and execute a Transact-SQL command that outputs the contents of that view.
```

输出结果可能像下面一样:

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

在这，你可以添加列、索引等:

```
Add a column to the politicians table for the second-in-command and update it for each row.
```

输出结果可能像下面一样:

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

## 模拟网页服务器

ChatGPT可以模拟许多其他服务器类型和对应的API。以下是一个模拟Apache服务器响应特定浏览器请求（header）的提示词示例:

```text
Act as an Apache web server. How would you respond to these HTTP headers?

GET /example HTTP/1.1
Host: www.example.com
```

输出结果可能像下面一样:

```text
// highlight-start
HTTP/1.1 200 OK
Date: [current date and time]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [date and time of last modification of the requested resource]
Content-Type: [MIME type of the requested resource, e.g. text/html]
// highlight-end
```

这里列出了ChatGPT可以模拟的一些服务器和API的类型：

|      很老    |     有点老      |       近期的            |      遥遥领先         |
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


## 模拟命令行

由于Linux中的Shell（或Windows PowerShell）也是一种编程语言，因此你可以使用ChatGPT与其交互，并构建文件系统的环境:

```
Act as Debian Linux command shell. Please respond to my commands as the terminal would, with as little explanation as possible. My first command is: ls -l
```

输出结果可能像下面一样:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

可以尝试与其他命令行进行互动:

```text
>touch greeting.txt  
>echo "hello" > greeting.txt  
>ls -l  
```

ChatGPT应该可以记住你的更改（至少一段时间），最终输出应该类似于:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

在[engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/)博客中可以找到使用ChatGPT作为虚拟机的完整讨论。

---

本文内容由**Prompt Yes!**贡献, 这是一个提供 [提示词工程训练](https://promptyes.com/)的网站。
