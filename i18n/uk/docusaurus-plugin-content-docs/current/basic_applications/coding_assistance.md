---
sidebar_position: 40
---

# 🟡 Допрацювання коду

Ви можете використовувати ChatGPT для налагодження, створення, переформатування, коментування коду тощо. Він працює з кодом на понад 40 мовах програмування.

| Древні   | Застарілі | Нещодавні       | Свіжі          |
| -------- | --------- | --------------- | -------------- |
| BASIC    | Perl      | Swift           | Kotlin         |
| Assembly | Pascal    | TypeScript      | Julia          |
| Fortran  | PHP       | Rust            | Crystal        |
| Lisp     | Prolog    | Kotlin / Native | Racket         |
| COBOL    | C         | Julia (GPU)     | Lua            |
| Algol    | PL/I      | Go              | Zig            |
| SNOBOL   | C++       | Dart            | Nim            |
| RPG      | Smalltalk | Elixir          | Crystal (LLVM) |
| Forth    | Tcl       | Groovy          | Vlang          |
| Ada      | SQL       | Scala Native    | Erlang         |
|          | Java      |                 |                |

## Генерування коду

Доручити ChatGPT генерувати код так само просто:

```text
Ти програміст-початківець Phyton. Напиши код для створення madlibs із 3 масивів по 6 елементів у кожному: прийменники, дієслова та іменники, причому іменники також у ролі додатків. Після написання, виконай код.
```

Приблизний результат:

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

Спробуйте:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiMgQ3JlYXRlIGFycmF5cyBvZiBwcmVwb3NpdGlvbnMsIHZlcmJzLCBhbmQgbm91bnNcbnByZXBvc2l0aW9ucyA9IFtcImluXCIsIFwib25cIiwgXCJ1bmRlclwiLCBcImFib3ZlXCIsIFwiYmVzaWRlXCIsIFwidGhyb3VnaFwiXVxudmVyYnMgPSBbXCJyYW5cIiwgXCJqdW1wZWRcIiwgXCJza2lwcGVkXCIsIFwiY3Jhd2xlZFwiLCBcImRhbmNlZFwiLCBcImNsaW1iZWRcIl1cbm5vdW5zID0gW1widHJlZVwiLCBcInJvY2tcIiwgXCJidXNoXCIsIFwiZmxvd2VyXCIsIFwiaG91c2VcIiwgXCJoaWxsXCJdXG5cbiMgQ3JlYXRlIGEgZm9yIGxvb3AgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBhcnJheXNcbmZvciBpIGluIHJhbmdlKGxlbihwcmVwb3NpdGlvbnMpKTpcbiAgIyBQcmludCB0aGUgbWFkbGlic1xuICBwcmludChcIlRoZSByYWJiaXQgXCIrdmVyYnNbaV0rXCIgXCIrcHJlcG9zaXRpb25zW2ldK1wiIHRoZSBcIitub3Vuc1tpXStcIi5cIikiLCJwcm9tcHQiOiJBY3QgYXMgYSBqdW5pb3IgcHl0aG9uIHByb2dyYW1tZXIuIFBsZWFzZSB3cml0ZSB0aGUgY29kZSB0byBnZW5lcmF0ZSBtYWRsaWJzIGZyb20gMyBhcnJheXMgb2YgNiBpdGVtcyBlYWNoOiBwcmVwb3NpdGlvbnMsIHZlcmJzIGFuZCBub3Vucywgd2l0aCB0aGUgbm91bnMgYWxzbyBiZWluZyB1c2VkIGFzIGRpcmVjdCBvYmplY3RzLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Коментування та переформатування коду

Ви можете попросити ChatGPT додати коментарі до вашого коду та переформатувати його для читабельності. Після вашого запиту додайте три хеш-мітки, а потім вставте код, який хочете підчистити:

```text
Додай рядкові коментарі до цього коду Python і переформатуй його для читабельності:  

import math
amplitude = 30
drequency = 2
num_points = 50
for i in range (num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
###
```

Приблизний результат:

```text
// highlight-start
# Імпортувати математичний модуль
import math

# Встановити амплітуду, частоту та кількість точок у хвилі
amplitude = 30
frequency = 2
num_points = 50

# Зациклити кожну точку на хвилі
for i in range(num_points):
    # Обчислити значення «y» хвилі за допомогою функції синусоїдів з математичного модуля
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))

    # Вивести місце для результату з зірочкою у відповідних моментах хвилі
    print(' ' * (amplitude + y) + '*')

// highlight-end
```

## Налагодження

ChatGPT вміє виявляти в коді не тільки синтаксичні помилки, а й логічні, які можуть виникати під час виконання коду. Нижче наведено приклад скрипту Python, який, зрештою, видає помилку ділення на нуль у рядку 4 через логічну помилку у рядку 3.  Створіть цей простий запит, щоб знайти та виправити помилку:

```text
Налагодь цей код Python:  

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("вартість на особу становить $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

Результат міститиме виправлений цикл while, який змінено для гарантії, що змінна знаменника залишиться додатною:

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

Для делікатніших помилок додайте більше уточнень: повідомлення про помилку, змінні середовища, включені бібліотеки або варіації вхідних даних.


## Оптимізація коду

Якщо ваш скрипт виконується надто довго, ChatGPT допоможе оптимізувати його. Ось приклад оптимізації неефективного скрипту для знаходження простих чисел:

```text
Ти старший розробник Python. Оптимізуй цей скрипт:  

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

У результаті може вийти сценарій з використанням [алгоритму Решето Ератосфена](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) для пошуку простих чисел:

```text
//  highlight-start
numbers = list(range(2, 101))
for i in numbers:
    for j in range(i * 2, 101, i):
        if j in numbers:
            numbers.remove(j)
print(numbers)
// highlight-end
```

Зауважте, що ми попросили бота «діяти як _старший_ розробник», щоб оптимізувати скрипт. Ви також можете вказати, що він обізнаний у певних галузях (наприклад, алгоритми сортування) або має певну кількість досвіду. Крім того, якщо у вас є занадто нагромаджений скрипт, попросіть ChatGPT написати його «як _наймолодший_ розробник».


## Переклад між мовами програмування

Надкорисною функцією ChatGPT є можливість переносити програми з однієї мови на іншу. Типовим прикладом може бути оновлення коду старішої мови до більш сучасної:

```text
Ти досвідчений розробник зі знанням COBOL і Python. Конвертуй цю програму з COBOL у Python:  


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

Приблизний результат:

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```


## Обробка кількох файлів і реорганізація кодової бази

Як змусити ChatGPT зчитувати **декілька** файлів? Просто введіть назви файлів і вставте для них код:

```text
Мій скрипт Python використовує два файли, вказані нижче, у різних каталогах. Виведи результат виконання conversion.py:

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


З цією технікою ви можете надіслати кілька файлів у ChatGPT в одному запиті та попросити його провести реорганізацію коду. Крім того, можна попросити бота «запам’ятати» кожен із них, щоб виконати в наступному запиті.

## Симуляція сервера бази даних

ChatGPT може не тільки працювати з кодом, але й імітувати серверні середовища, такі як бази даних, вебсервери та сервери електронної пошти. Розгляньте цей запит:

```text
Ти Microsoft SQL Server. Створи базу даних під назвою «політика» і всередині неї таблицю «політики». Заповни її 50 рядками відомих політиків з усього світу різних епох 1900-2000 років. Додай стовпці для їхніх повних імен, країни, дат народження та смерті за наявності. Опиши 3-х найкращих політиків із найдовшим часом життя. Створи та виконай команду Transact-SQL, яка виводить вміст цього опису.
```

Приблизний результат:

```text
// highlight-start
-- Створити базу даних «politics»
CREATE DATABASE politics;
GO

-- Залучити базу даних «politics»
USE politics;
GO

-- Створити таблицю «politicians»
CREATE TABLE politicians (
    id INT PRIMARY KEY,
    full_name VARCHAR(50),
    country VARCHAR(50),
    date_of_birth DATE,
    date_of_death DATE
);
-- і т.д.
// highlight-end
```

Тепер ви можете додавати стовпці, індекси тощо:

```
Додайте стовпець для заступників до таблиці політиків та оновіть його для кожного рядка.
```

Приблизний результат:

```text
// highlight-start
ALTER TABLE політики ADD заступники VARCHAR(255);

UPDATE politicians
SET second_in_command = 
    CASE name
        WHEN 'Winston Churchill' THEN 'Clement Attlee'
        WHEN 'Franklin D. Roosevelt' THEN 'Harry S. Truman'
        WHEN 'Mao Zedong' THEN 'Lin Biao'
        -- додайте ще зразків для кожного політика
        ELSE NULL
    END;
// highlight-end
```

## Симуляція вебсервера

ChatGPT вміє імітувати багато інших серверів і API. Ось приклад запиту, який імітує відповідь сервера Apache на певні заголовки запиту браузера:

```text
Ти — вебсервер Apache. Як би ти відповів на ці заголовки HTTP?

GET /example HTTP/1.1
Host: www.example.com
```

Приблизний результат:

```text
// highlight-start
HTTP/1.1 200 OK
Date: [поточна дата й час]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [дата й час останньої зміни запитуваного ресурсу]
Content-Type: [тип MIME запитуваного ресурсу, наприклад text/html]
// highlight-end
```

Ось деякі типи серверів і API, які емулює ChatGPT:

| Древні | Застарілі | Нещодавні              | Свіжі              |
| ------ | --------- | ---------------------- | ------------------ |
| Telnet | HTTP/1.0  | RESTful API            | GraphQL API        |
| FTP    | SMTP      | SOAP API               | GRPC API           |
| POP3   | LDAP      | OAuth 2.0              | API Docker         |
| IMAP   | DHCP      | OpenAPI (Swagger)      | API Kubernetes     |
| DNS    | NTP       | gRPC-web API           | Istio API          |
| SNMP   | RADIUS    | MQTT API               | API Prometheus     |
| Syslog | SFTP      | API WebSocket          | API Envoy          |
| TFTP   | SSH       | AWS API Gateway        | Istio Mixer API    |
| NFS    | XML-RPC   | Azure API Management   | API OpenTracing    |
| SMB    | JSON-RPC  | Google Cloud Endpoints | NATS Streaming API |


## Симуляція командного рядка

Оскільки оболонка в Linux (або Windows PowerShell) теж є мовою програмування, ви можете взаємодіяти з нею за допомогою ChatGPT і створювати середовище для вашої файлової системи:

```
Ти — командна оболонка Debian Linux. Відповідай на мої команди подібно терміналу без зайвих пояснень. Моя перша команда: ls -l
```

Приблизний результат:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

Пограйтеся з іншими командами:

```text
>touch greeting.txt  
>echo "hello" > greeting.txt  
>ls -l  
```

ChatGPT має зберегти ваші зміни (хоча б на деякий час), а остаточний результат виглядатиме десь так:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

Повний розбір ChatGPT як віртуальної машини знаходиться на [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).

---

Надано компанією Prompt Yes!, яка займається [інженерією запитів](https://promptyes.com/).
