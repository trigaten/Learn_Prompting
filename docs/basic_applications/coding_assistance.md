---
sidebar_position: 40
---

# 🟡 Coding Assistance

You can use LLMs for debugging, code generation, reformatting, commenting, and more. One popular chatbot claims it can work with code in over 40 programming languages. 

|   Very Old  |         Old    |     Recent          |    Bleeding Edge      |
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

## Code Generation

Instructing ChatGPT, or any other LLM-based AI chatbot, to generate code is as simple as this:

```text
Act as a junior python programmer. Please write the code to generate madlibs from 3 arrays of 6 items each: prepositions, verbs and nouns, with the nouns also being used as direct objects. After writing it, execute the code.
```

The output will be something like:

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

Try it here:

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

## Commenting and Reformatting Code

You can ask the bot to add comments to your code and reformat it for legibility. After your prompt instruction, add three hashmarks to separate your prompt from the code you'd like it to clean up:

```text
Please add line comments to this Python code and reformat it for legibility:  
###
import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
```

The output will be something like:

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

## Debugging

Not only can LLM-based AI chatbots detect syntax errors in code, but they can also find logical errors that would crop up when code is executed. Below is an example of a Python script that eventually causes a division by zero error one line 4 due to a logical error on line 3.  Try this simple prompt to find and fix the error:

```text
Please debug this Python code:  

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

The output will include the corrected while loop, which is changed to ensure the denominator variable stays positive:

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

For more nuanced errors, you may need to add more specifics: the error message, environment variables, included libraries or variations in inputs. 


## Optimizing Code

If your script is taking too long to execute, an AI chatbot like ChatGPT can optimize it. Here's an example of optimizing an inefficient script that finds prime numbers:

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

The output might be a script that uses the [Sieve of Eratosthenes algorithm](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) for finding prime numbers:

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

Note that we asked the bot to "act like a _senior_ developer" to optimize the script. You can also dictate that it have a certain area of expertise (e.g., sorting algorithms) or number of years of experience. Alternatively, if you have a script that seems overly complicated, you can ask the bot to write that script "as a _very junior_ developer."


## Translating Between Programming Languages

A very useful feature AI chatbots offer is the ability to port programs from one language to another. A typical use for this might be upgrading code in an older language to a more modern one:

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

The output might be something like this:

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```


## Handling Multiple Files and Refactoring your Codebase

What if you want an AI chatbot to evaluate **multiple** files? Simply supply the filenames and paste the code for each:

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


Using this technique, you can submit multiple files to the bot in a single prompt and ask it to refactor the code. Alternatively, you can ask it to "memorize" each one and then execute it in a later prompt.

## Simulating a Database Server

Most AI chatbots work with code, but some can even simulate server environments like databases, web and email servers. Consider this prompt:

```text
Act as Microsoft SQL Server. Create a database called "politics" and inside it a table called "politicians." Fill it with 50 rows of famous politicians from around the world from different eras, 1900-2000. Add columns for their full names, country, dates of birth, and date of death if applicable. Create a view for top 3 politicians who lived the longest. Create and execute a Transact-SQL command that outputs the contents of that view.
```

The output will be something like:

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

From there, you can add columns, indexes and more:

```
Add a column to the politicians table for the second-in-command and update it for each row.
```

The output might be something like:

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

## Simulating a Web Server

Some AI chatbots can simulate many other servers and APIs. Here's an example of a prompt that simulates an Apache server response to specific browser request headers:

```text
Act as an Apache web server. How would you respond to these HTTP headers?

GET /example HTTP/1.1
Host: www.example.com
```

The output will be something like:

```text
// highlight-start
HTTP/1.1 200 OK
Date: [current date and time]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [date and time of last modification of the requested resource]
Content-Type: [MIME type of the requested resource, e.g. text/html]
// highlight-end
```

Here are just some of the types of servers and APIs that one popular chatbot can emulate:

|   Very Old  |     Old        |        Recent          |    Bleeding Edge     |
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


## Simulating a Command Line

Since a shell within Linux (or Windows PowerShell) is also a programming language, you can interact with it using an AI chatbot, and build an environment for your filesystem:

```
Act as Debian Linux command shell. Please respond to my commands as the terminal would, with as little explanation as possible. My first command is: ls -l
```

The output will be something like:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

Try experimenting with other commands:

```text
>touch greeting.txt  
>echo "hello" > greeting.txt  
>ls -l  
```

Depending on the size of its context window, the bot should remember your changes (for a while, at least) and the final output ought to something like:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

A full discussion of using AI chatbots as a virtual machines can be found at [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).


## Generating Unit Tests

AI chatbots built on LLMs are ideal for the time-consuming task of creating unit tests. Consider this prompt to build a series of unit tests for a tax calculating program:

```text
Act as a Python software test engineer. Write unit tests for the calculate_tax function of this tax estimator Python program:
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

The output might be something like:

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

Contributed by _[Prompt Yes!](https://promptyes.com)_, a company offering instructor-led courses in [ChatGPT](https://promptyes.com/classes/productivity/) and [Midjourney](https://promptyes.com/classes/midjourney/).
