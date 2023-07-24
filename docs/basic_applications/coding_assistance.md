---
sidebar_position: 40
---

# 🟡 Coding Assistance

You can use ChatGPT for debugging, code generation, reformatting, commenting, and more. It can work with code in over 40 programming languages. 

|   Very Old  |         Old    |     Recent          |    Bleeding Edge      |
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
|             | Java           |                     |                       |

## Code Generation

Instructing ChatGPT to generate code is as simple as this:

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

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiMgQ3JlYXRlIGFycmF5cyBvZiBwcmVwb3NpdGlvbnMsIHZlcmJzLCBhbmQgbm91bnNcbnByZXBvc2l0aW9ucyA9IFtcImluXCIsIFwib25cIiwgXCJ1bmRlclwiLCBcImFib3ZlXCIsIFwiYmVzaWRlXCIsIFwidGhyb3VnaFwiXVxudmVyYnMgPSBbXCJyYW5cIiwgXCJqdW1wZWRcIiwgXCJza2lwcGVkXCIsIFwiY3Jhd2xlZFwiLCBcImRhbmNlZFwiLCBcImNsaW1iZWRcIl1cbm5vdW5zID0gW1widHJlZVwiLCBcInJvY2tcIiwgXCJidXNoXCIsIFwiZmxvd2VyXCIsIFwiaG91c2VcIiwgXCJoaWxsXCJdXG5cbiMgQ3JlYXRlIGEgZm9yIGxvb3AgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBhcnJheXNcbmZvciBpIGluIHJhbmdlKGxlbihwcmVwb3NpdGlvbnMpKTpcbiAgIyBQcmludCB0aGUgbWFkbGlic1xuICBwcmludChcIlRoZSByYWJiaXQgXCIrdmVyYnNbaV0rXCIgXCIrcHJlcG9zaXRpb25zW2ldK1wiIHRoZSBcIitub3Vuc1tpXStcIi5cIikiLCJwcm9tcHQiOiJBY3QgYXMgYSBqdW5pb3IgcHl0aG9uIHByb2dyYW1tZXIuIFBsZWFzZSB3cml0ZSB0aGUgY29kZSB0byBnZW5lcmF0ZSBtYWRsaWJzIGZyb20gMyBhcnJheXMgb2YgNiBpdGVtcyBlYWNoOiBwcmVwb3NpdGlvbnMsIHZlcmJzIGFuZCBub3Vucywgd2l0aCB0aGUgbm91bnMgYWxzbyBiZWluZyB1c2VkIGFzIGRpcmVjdCBvYmplY3RzLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Commenting and Reformatting Code

You can ask ChatGPT to add comments to your code, and reformat it for legibility. After your prompt instruction, add three hashmarks and then paste in the code you'd like it to clean up:

```text
Please add line comments to this Python code and reformat it for legibility:  

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
###
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

Not only can ChatGPT detect syntax errors in code, but it can also find logical errors that would crop up when code is executed. Below is an example of a Python script that eventually causes a division by zero error on line 4 due to a logical error on line 3.  Try this simple prompt to find and fix the error:

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

If your script is taking too long to execute, ChatGPT can optimize it. Here's an example of optimizing an inefficient script that finds prime numbers:

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

Note that we asked the bot to "act like a _senior_ developer" to optimize the script. You can also dictate that it have a certain area of expertise (e.g., sorting algorithms) or number of years of experience. Alternatively, if you have a script that seems overly complicated, you can ask ChatGPT to write that script "as a _very junior_ developer."


## Translating Between Programming Languages

A very useful feature ChatGPT offers is the ability to port programs from one language to another. A typical use for this might be upgrading code in an older language to a more modern one:

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

What if you want ChatGPT to evaluate **multiple** files? Simply supply the filenames and paste the code for each:

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


Using this technique, you can submit multiple files to ChatGPT in a single prompt and ask it to refactor the code. Alternatively, you can ask it to "memorize" each one and then execute it in a later prompt.

## Simulating a Database Server

Not only can ChatGPT work with code, but it can simulate server environments like databases, web and email servers. Consider this prompt:

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

ChatGPT can simulate many other servers and APIs. Here's an example of a prompt that simulates an Apache server response to specific browser request headers:

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

Here are just some of the types of servers and APIs that ChatGPT can emulate:

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

Since a shell within Linux (or Windows PowerShell) is also a programming language, you can interact with it using ChatGPT, and build an environment for your filesystem:

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

ChatGPT should remember your changes (for a while, at least) and the final output ought to something like:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

A full discussion of using ChatGPT as a virtual machine can be found at [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).

---

Contributed by Prompt Yes!, a company providing [prompt engineering training](https://promptyes.com/).
