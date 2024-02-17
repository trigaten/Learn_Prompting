---
sidebar_position: 40
---

# 🟡 کوڈنگ اسسٹنس

آپ LLMs کو ڈیبگنگ، کوڈ جنریشن، ری فارمیٹنگ، تبصرہ کرنے اور مزید بہت کچھ کے لیے استعمال کر سکتے ہیں۔ ایک مشہور چیٹ بوٹ کا دعویٰ ہے کہ یہ 40 سے زیادہ پروگرامنگ زبانوں میں کوڈ کے ساتھ کام کر سکتا ہے۔


|   بہت پرانا  |         پرانا    |     حالیہ          |    مکمل نیا       |
|-------------|----------------|---------------------|-----------------------|
| BASIC       | Perl           | Swift               | Kotlin                |
| Assembly    | Pascal         | TypeScript          | Julia                 |
| Fortran     | PHP            | Rust                | Crystal               |
| Lisp        | Python         | Kotlin/Native       | Racket                |
| COBOL       | C              | Julia (GPU)         | Lua                   |
| Algol       | C++            | Go                  | Zig                   |
| SNOBOL      | Java           | Dart                | Nim                   |
| RPG         | Smalltalk      | Elixir              | Crystal (LLVM)        |
| Forth       | Tcl            | Groovy              | Vlang                 |
| Ada         | SQL            | Scala Native        | Erlang                |

## کوڈ جنریشن

چیٹ جی پی ٹی، یا کسی دوسرے ایل ایل ایم پر مبنی AI چیٹ بوٹ کو کوڈ تیار کرنے کی ہدایت دینا اتنا ہی آسان ہے:

```text
جونیئر ازگر پروگرامر کے طور پر کام کریں۔ براہ کرم 6 آئٹمز کی 3 صفوں سے مدلیبز بنانے کے لیے کوڈ لکھیں: سابقہ، فعل اور اسم، اسم کو بھی براہ راست اشیاء کے طور پر استعمال کیا جا رہا ہے۔ اسے لکھنے کے بعد، کوڈ پر عمل کریں۔
```

آؤٹ پٹ کچھ اس طرح ہوگی:

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

اسے یہاں آزمائیں:

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

## تبصرہ اور ری فارمیٹنگ کوڈ

آپ بوٹ سے اپنے کوڈ میں تبصرے شامل کرنے کے لیے کہہ سکتے ہیں اور اسے درستگی کے لیے دوبارہ فارمیٹ کر سکتے ہیں۔ آپ کی فوری ہدایات کے بعد، اپنے پرامپٹ کو اس کوڈ سے الگ کرنے کے لیے تین ہیش مارکس شامل کریں جسے آپ صاف کرنا چاہتے ہیں:

```text
براہ کرم اس Python کوڈ میں لائن کے تبصرے شامل کریں اور اسے قابل قبول ہونے کے لیے دوبارہ فارمیٹ کریں:
###
import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
```

آؤٹ پٹ کچھ اس طرح ہوگی:

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

## ڈیبگنگ

ایل ایل ایم پر مبنی اے آئی چیٹ بوٹس نہ صرف کوڈ میں نحوی غلطیوں کا پتہ لگاسکتے ہیں، بلکہ وہ منطقی غلطیاں بھی تلاش کرسکتے ہیں جو کوڈ پر عمل درآمد ہونے پر پیدا ہوجائیں گی۔ ذیل میں ایک Python اسکرپٹ کی مثال دی گئی ہے جو آخر کار لائن 3 پر منطقی غلطی کی وجہ سے صفر کی غلطی سے ایک لائن 4 میں تقسیم کا سبب بنتی ہے۔ غلطی کو تلاش کرنے اور اسے ٹھیک کرنے کے لیے اس سادہ پرامپٹ کو آزمائیں:

```text
براہ کرم اس ازگر کوڈ کو ڈیبگ کریں:

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

آؤٹ پٹ میں درست جبکہ لوپ کو شامل کیا جائے گا، جو کہ ڈینومینیٹر متغیر کو مثبت رہنے کو یقینی بنانے کے لیے تبدیل کیا جاتا ہے:

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

مزید چھوٹی غلطیوں کے لیے، آپ کو مزید تفصیلات شامل کرنے کی ضرورت ہو سکتی ہے: غلطی کا پیغام، ماحولیاتی متغیرات، شامل لائبریریاں یا ان پٹ میں تغیرات۔


## کوڈ کو بہتر بنانا

اگر آپ کی اسکرپٹ کو عمل میں لانے میں بہت زیادہ وقت لگ رہا ہے، تو ایک AI چیٹ بوٹ جیسا کہ ChatGPT اسے بہتر بنا سکتا ہے۔ یہاں ایک غیر موثر اسکرپٹ کو بہتر بنانے کی ایک مثال ہے جو بنیادی نمبر تلاش کرتی ہے:

```text
ایک بہت ہی سینئر ازگر ڈویلپر کی طرح کام کریں۔ براہ کرم اس اسکرپٹ کو بہتر بنائیں:

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

آؤٹ پٹ ایک اسکرپٹ ہو سکتا ہے جو بنیادی نمبر تلاش کرنے کے لیے [Sieve of Eratosthenes algorithm](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) کا استعمال کرتا ہے:

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

نوٹ کریں کہ ہم نے بوٹ سے اسکرپٹ کو بہتر بنانے کے لیے "ایک _سینئر_ڈیولپر کی طرح کام کرنے" کو کہا۔ آپ یہ بھی حکم دے سکتے ہیں کہ اس کے پاس مہارت کا ایک خاص شعبہ ہے (مثلاً الگورتھم چھانٹنا) یا سالوں کا تجربہ۔ متبادل طور پر، اگر آپ کے پاس کوئی اسکرپٹ ہے جو حد سے زیادہ پیچیدہ معلوم ہوتا ہے، تو آپ بوٹ سے اس اسکرپٹ کو "بطور _very junior_ ڈویلپر" لکھنے کے لیے کہہ سکتے ہیں۔


## پروگرامنگ زبانوں کے درمیان ترجمہ کرنا

AI چیٹ بوٹس کی پیشکش ایک بہت ہی مفید خصوصیت پروگراموں کو ایک زبان سے دوسری زبان میں پورٹ کرنے کی صلاحیت ہے۔ اس کے لیے ایک عام استعمال پرانی زبان میں کوڈ کو زیادہ جدید میں اپ گریڈ کرنا ہو سکتا ہے:

```text
COBOL اور Python دونوں کے علم کے ساتھ ایک تجربہ کار ڈویلپر کی طرح کام کریں۔ براہ کرم اس COBOL پروگرام کو ازگر میں تبدیل کریں:  


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

آؤٹ پٹ کچھ اس طرح ہو سکتا ہے:

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```


## ایک سے زیادہ فائلوں کو ہینڈل کرنا اور اپنے کوڈ بیس کو ری فیکٹر کرنا

اگر آپ AI چیٹ بوٹ **متعدد** فائلوں کا جائزہ لینا چاہتے ہیں تو کیا ہوگا؟ بس فائل نام فراہم کریں اور ہر ایک کے لیے کوڈ چسپاں کریں:

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


اس تکنیک کا استعمال کرتے ہوئے، آپ ایک ہی پرامپٹ میں بوٹ میں متعدد فائلیں جمع کر سکتے ہیں اور اس سے کوڈ کو ری ایکٹر کرنے کے لیے کہہ سکتے ہیں۔ متبادل طور پر، آپ اس سے ہر ایک کو "حافظ" کرنے کے لیے کہہ سکتے ہیں اور پھر اسے بعد کے پرامپٹ میں انجام دے سکتے ہیں۔

## ڈیٹا بیس سرور کی نقل کرنا

زیادہ تر AI چیٹ بوٹس کوڈ کے ساتھ کام کرتے ہیں، لیکن کچھ سرور کے ماحول جیسے ڈیٹا بیس، ویب اور ای میل سرورز کی نقل بھی کر سکتے ہیں۔ اس پرامپٹ پر غور کریں:

```text
Microsoft SQL سرور کے طور پر کام کریں۔ "سیاست" کے نام سے ایک ڈیٹا بیس بنائیں اور اس کے اندر "سیاستدان" کے نام سے ایک میز بنائیں۔ اسے مختلف ادوار، 1900-2000 کے دنیا بھر کے مشہور سیاستدانوں کی 50 قطاروں سے پُر کریں۔ اگر قابل اطلاق ہو تو ان کے مکمل نام، ملک، تاریخ پیدائش، اور تاریخ وفات کے کالم شامل کریں۔ سب سے طویل عرصے تک زندہ رہنے والے ٹاپ 3 سیاست دانوں کے لیے ایک نظریہ بنائیں۔ ایک Transact-SQL کمانڈ بنائیں اور اس پر عمل کریں جو اس منظر کے مواد کو آؤٹ پٹ کرتا ہے۔
```

آؤٹ پٹ کچھ اس طرح ہوگی:

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

وہاں سے، آپ کالم، اشاریہ جات اور مزید شامل کر سکتے ہیں:

```
سیکنڈ ان کمانڈ کے لیے سیاست دانوں کی میز پر ایک کالم شامل کریں اور ہر قطار کے لیے اسے اپ ڈیٹ کریں۔
```

آؤٹ پٹ کچھ اس طرح ہو سکتا ہے:

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

## ویب سرور کی تقلید

کچھ AI چیٹ بوٹس بہت سے دوسرے سرورز اور APIs کی تقلید کر سکتے ہیں۔ یہاں ایک پرامپٹ کی ایک مثال ہے جو مخصوص براؤزر کی درخواست کے ہیڈر پر اپاچی سرور کے جواب کی تقلید کرتا ہے۔

```text
اپاچی ویب سرور کے طور پر کام کریں۔ آپ ان HTTP ہیڈرز کا کیا جواب دیں گے؟

GET /example HTTP/1.1
Host: www.example.com
```

آؤٹ پٹ کچھ اس طرح ہوگی:

```text
// highlight-start
HTTP/1.1 200 OK
Date: [current date and time]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [date and time of last modification of the requested resource]
Content-Type: [MIME type of the requested resource, e.g. text/html]
// highlight-end
```

یہاں سرورز اور APIs کی صرف کچھ اقسام ہیں جن کو ایک مشہور چیٹ بوٹ نقل کر سکتا ہے:

|   بہت پرانا	  |     پرانا        |        حالیہ          |    مکمل نیا     |
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


## کمانڈ لائن کی نقل کرنا

چونکہ لینکس (یا ونڈوز پاور شیل) کے اندر ایک شیل بھی ایک پروگرامنگ لینگویج ہے، اس لیے آپ AI چیٹ بوٹ کا استعمال کرتے ہوئے اس کے ساتھ بات چیت کر سکتے ہیں، اور اپنے فائل سسٹم کے لیے ماحول بنا سکتے ہیں:

```
ڈیبین لینکس کمانڈ شیل کے طور پر کام کریں۔ براہ کرم میرے حکموں کا جواب دیں جیسا کہ ٹرمینل کرے گا، جتنا ممکن ہو کم وضاحت کے ساتھ۔ میرا پہلا حکم ہے: ls -l
```

آؤٹ پٹ کچھ اس طرح ہوگی:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

دوسرے حکموں کے ساتھ تجربہ کرنے کی کوشش کریں:

```text
>touch greeting.txt  
>echo "hello" > greeting.txt  
>ls -l  
```

اس کے سیاق و سباق کی ونڈو کے سائز پر منحصر ہے، بوٹ کو آپ کی تبدیلیاں یاد رکھنی چاہئیں (کم از کم تھوڑی دیر کے لیے) اور حتمی آؤٹ پٹ کو کچھ ایسا ہونا چاہیے:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

AI چیٹ بوٹس کو ورچوئل مشین کے طور پر استعمال کرنے کی مکمل بحث [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/) پر مل سکتی ہے۔

## یونٹ ٹیسٹ تیار کرنا

LLMs پر بنائے گئے AI چیٹ بوٹس یونٹ ٹیسٹ بنانے کے وقت لینے والے کام کے لیے مثالی ہیں۔ ٹیکس کیلکولیشن پروگرام کے لیے یونٹ ٹیسٹ کی ایک سیریز بنانے کے لیے اس پرامپٹ پر غور کریں:

```text
ازگر سافٹ ویئر ٹیسٹ انجینئر کے طور پر کام کریں۔ اس ٹیکس تخمینہ کار Python پروگرام کے calculate_tax فنکشن کے لیے یونٹ ٹیسٹ لکھیں:
###
def get_user_inputs():
  total_income = float(input('Enter your income (wages, tips, etc.): $'))
  dependent_care_expenses = float(input('Enter your dependent care expenses: $'))
  return total_income, dependent_care_expenses

def calculate_tax(total_income, dependent_care_expenses):
  deduction = 12500   # Standard deduction for single filers in 2020 
  ...
  etc.
```

آؤٹ پٹ کچھ اس طرح ہو سکتا ہے:

```text
// highlight-start
import unittest

def calculate_tax(total_income, dependent_care_expenses):
    # ... (your existing code here)

class TestCalculateTax(unittest.TestCase):

    def test_low_income_no_expenses(self):
        self.assertEqual(calculate_tax(10000, 0), 0)

    def test_mid_income_no_expenses(self):
        self.assertEqual(calculate_tax(50000, 0), 4476.0)

    def test_high_income_no_expenses(self):
        self.assertEqual(calculate_tax(100000, 0), 14776.0)

    def test_low_income_with_expenses(self):
        self.assertEqual(calculate_tax(10000, 2000), -400.0)
	...
	etc.

if __name__ == '__main__':
    unittest.main()
// highlight-end
```

---

_[Prompt Yes!](https://promptyes.com)_ کے ذریعے تعاون کیا گیا، جو کہ [ChatGPT](https://promptyes.com/classes/productivity/) اور [Midjourney](https://promptyes.com/classes/productivity/) میں انسٹرکٹر کی زیر قیادت کورسز پیش کرتی ہے۔ ://promptyes.com/classes/midjourney/)۔