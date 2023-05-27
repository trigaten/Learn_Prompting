---
sidebar_position: 40
---

# 🟡 Asistence při kódování

ChatGPT můžete využít k ladění, generování kódu, přeformátování, komentování a dalším činnostem. Dokáže pracovat s kódem ve více než 40 programovacích jazycích. 

| Moc staré   |    Staré       |     Relevantní      |     Nejnovější        |
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

## Generování kódu

Prompt ChatGPT pro vygenerování kódu je jednoduchý:

```text
Chovejte se jako junior programátor v Pythonu. Napište prosím kód, který vygeneruje madliby ze 3 polí po 6 položkách: předložky, slovesa a podstatná jména, přičemž podstatná jména se používají také jako přímé objekty. Po jeho napsání kód spusťte.
```

Výstup bude vypadat nějak takto:

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

Vyzkoušejte si to zde (musíte mít povolený JavaScript):

<div trydyno-embed="" 
openai-model="text-davinci-003" 
initial-prompt="Jednejte jako mladší programátor v Pythonu. Napište prosím kód, který vygeneruje madliby ze 3 polí po 6 položkách: předložky, slovesa a podstatná jména, přičemž podstatná jména budou použita i jako přímé objekty." 
initial-response="" 
max-tokens="512" 
box-rows="5" 
model-temp="0.0" 
top-p="0">
    <noscript>Nepodařilo se načíst Dyno Embed: JavaScript musí být povolen</noscript>
</div>

## Komentování a přeformátování kódu

Můžete požádat ChatGPT, aby do vašeho kódu přidal komentáře a přeformátoval jej pro lepší čitelnost. Po vašem promptu přidejte tři hashmarky a poté vložte kód, který chcete, aby poupravil:

```text
Prosím, přidejte do tohoto kódu Pythonu komentáře k řádkům a přeformátujte jej pro lepší čitelnost:  

###
import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')

```

Výstup bude vypadat takto:

```text
// highlight-start
# Import matematického modulu
import math

# Nastavte amplitudu, frekvenci a počet bodů vlny
amplitude = 30
frequency = 2
num_points = 50

# Projděte ve smyčce každý bod vlny
for i in range(num_points):
    # Vypočítejte hodnotu y vlny pomocí funkce sinus z matematického modulu
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    
    # Vypište mezeru pro vyplnění, následovanou hvězdičkou na příslušném místě vlny
    print(' ' * (amplitude + y) + '*')

// highlight-end
```

## Ladění

ChatGPT dokáže nejen odhalit syntaktické chyby v kódu, ale také logické chyby, které by se objevily při exekuci kódu. Níže je uveden příklad skriptu v Pythonu, který nakonec způsobí chybu dělení nulou na řádku 4 kvůli logické chybě na řádku 3.  Vyzkoušejte tento jednoduchý prompt k nalezení a opravě chyby:

```text
Prosím, vylaďte tento kód Pythonu:  

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4. cost_per_person = pizza_cost / partygoers
5. print("náklady na osobu jsou $", "{:.2f}".format(cost_per_person))
6. partygoers -= 2
```

Výstup bude obsahovat opravenou smyčku while, která je změněna tak, aby proměnná ve jmenovateli zůstala kladná:

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

V případě složitějších chyb může být nutné přidat další specifika: chybové hlášení, proměnné prostředí, zahrnuté knihovny nebo varianty vstupů. 


## Optimalizace kódu

Pokud se váš skript provádí příliš dlouho, ChatGPT jej může optimalizovat. Zde je příklad optimalizace neefektivního skriptu, který hledá prvočísla:

```text
Chovejte se jako velmi senior vývojář jazyka Python. Optimalizujte prosím tento skript:  

for num in range(1, 101):
    if num 1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

Výstupem může být skript, který používá [Eratosthenův algoritmus](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) pro hledání prvočísel:

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

Všimněte si, že jsme bota požádali, aby se "choval jako _senior_ vývojář" a optimalizoval skript. Můžete mu také nařídit, aby měl určitou odbornost (např. třídicí algoritmy) nebo počet let zkušeností. Případně, pokud máte skript, který se vám zdá příliš složitý, můžete ChatGPT požádat, aby tento skript napsal "jako _velmi juniorní_ vývojář".


## Překlad mezi programovými jazyky

Velmi užitečnou funkcí, kterou ChatGPT nabízí, je možnost přenášet programy z jednoho jazyka do druhého. Typickým využitím může být aktualizace kódu ve starším jazyce na modernější:

```text
Chovejte se jako seniorní vývojář se znalostí jazyka COBOL i Python. Převeďte tento program v jazyce COBOL do jazyka Python:  


IDENTIFICATION DIVISION.
PROGRAM-ID. CALCULATE-SS-TAX.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 SALARY PIC 9(7)V99.
01 SS-TAX PIC 9(7)V99.

PROCEDURE DIVISION.
DISPLAY "Zadejte plat zaměstnance: ".
ACCEPT SALARY.

COMPUTE SS-TAX = SALARY * 0.062.

DISPLAY "Daň ze sociálního pojištění je: $", SS-TAX.
STOP RUN.
```

Výstup by mohl vypadat takto:

```text
// highlight-start
plat = float(input("Zadejte plat zaměstnance: "))
ss_tax = plat * 0,062

print("Daň ze sociálního pojištění je: $", round(ss_tax, 2))
// highlight-end
```


## Práce s více soubory a refaktorizace kódové základny

Co když chcete, aby ChatGPT vyhodnocoval **více** souborů? Jednoduše zadejte názvy souborů a vložte kód pro každý z nich:

```text
Můj skript v Pythonu používá dva níže uvedené soubory v různých adresářích. Zobrazte prosím výstup ze spuštění souboru conversation.py:

BEGIN FILE 1: ./phrases/coming_and_going.py
def hi(name):
   print(f "Ahoj, {name}!")
def bye(name):
   print(f "Sbohem, {name}!")

BEGIN FILE 2: ./conversation.py
from phrases.coming_and_going import hi, bye
ahoj("John")
sbohem("John")

// highlight-start
Ahoj, Johne!
Sbohem, Johne!
// highlight-end
```

Pomocí této techniky můžete ChatGPT odeslat více souborů v jedné výzvě a požádat jej o refaktorizaci kódu. Případně jej můžete požádat, aby si každý z nich "zapamatoval" a pak jej provedl v pozdějším promptu.

## Simulace databázového serveru

ChatGPT umí pracovat nejen s kódem, ale také simulovat serverová prostředí, jako jsou databáze, webové a e-mailové servery. Vezměme si tento prompt:

```text
Chovejte se jako Microsoft SQL Server. Vytvořte databázi s názvem "politics" a uvnitř ní tabulku s názvem "politicians". Naplňte ji 50 řádky slavných politiků z celého světa z různých období v letech 1900-2000. Přidejte sloupce pro jejich celá jména, země, data narození a případně data úmrtí. Vytvořte zobrazení pro 3 nejdéle žijící politiky. Vytvořte a spusťte příkaz Transact-SQL, který vypíše obsah tohoto pohledu.
```

Výstup bude vypadat asi takto:

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

Odtud můžete přidávat sloupce, indexy a další položky:

```
Přidejte sloupec do tabulky politiků pro druhého v pořadí a aktualizujte jej pro každý řádek.
```

Výstup může vypadat například takto:

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

## Simulace webového serveru

ChatGPT může simulovat mnoho dalších serverů a rozhraní API. Zde je příklad výzvy, která simuluje odpověď serveru Apache na konkrétní hlavičky požadavků prohlížeče:

```text
Chovejte se jako webový server Apache. Jak byste reagovali na tyto hlavičky HTTP?

GET /example HTTP/1.1
Host: www.example.com
```

Výstup bude vypadat asi takto:

```text
// highlight-start
HTTP/1.1 200 OK
Date: [current date and time]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [date and time of last modification of the requested resource]
Content-Type: [MIME type of the requested resource, e.g. text/html]
// highlight-end
```

Zde jsou uvedeny jen některé typy serverů a rozhraní API, které může ChatGPT emulovat:

|   Moc staré |     Staré      |        Aktuální        |    Nejnovější        |
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


## Simulace příkazového řádku

Protože shell v Linuxu (nebo Windows PowerShell) je také programovací jazyk, můžete s ním komunikovat pomocí ChatGPT a vytvořit prostředí pro svůj souborový systém:

```
Chovejte se jako command shell systému Debian Linux. Odpovídejte na mé příkazy tak, jak by to udělal terminál, s co nejmenším množstvím vysvětlení. Můj první příkaz je: ls -l
```

Výstup bude vypadat nějak takto:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

Zkuste experimentovat s dalšími příkazy:

```text
>touch pozdrav.txt  
>echo "ahoj" > pozdrav.txt  
>ls -l  
```

ChatGPT by si měl vaše změny zapamatovat (alespoň na chvíli) a konečný výstup by měl vypadat nějak takto:

```text
// highlight-start
-rw-r--r-- 1 user group 2048 3. března 14:23 soubor1.txt
drwxr-xr-x 2 user group 4096 28. února 09:12 adresář1
-rwx------ 1 skupina uživatelů 16384 25. února 19:41 spustitelný1
-rw-r--r-- 1 skupina uživatelů 6 4. března 16:15 pozdrav.txt
// highlight-end
```

Úplnou diskusi o použití ChatGPT jako virtuálního počítače najdete na [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).

---

Přispěla společnost Prompt Yes!, která poskytuje [prompt engineering training](https://promptyes.com/).