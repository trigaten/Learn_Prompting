---
sidebar_position: 40
---

# 🟡 Membantu Pemrograman (Coding)

Anda dapat menggunakan ChatGPT untuk debugging, generate kode, memformat, memberikan komentar, dan lainnya. Ia dapat bekerja dengan kode dalam lebih dari 40 bahasa pemrograman.

| Sangat Tua | Tua       | Terbaru       | Tercanggih     |
| ---------- | --------- | ------------- | -------------- |
| BASIC      | Perl      | Swift         | Kotlin         |
| Assembly   | Pascal    | TypeScript    | Julia          |
| Fortran    | PHP       | Rust          | Crystal        |
| Lisp       | Prolog    | Kotlin/Native | Racket         |
| COBOL      | C         | Julia (GPU)   | Lua            |
| Algol      | PL/I      | Go            | Zig            |
| SNOBOL     | C++       | Dart          | Nim            |
| RPG        | Smalltalk | Elixir        | Crystal (LLVM) |
| Forth      | Tcl       | Groovy        | Vlang          |
| Ada        | SQL       | Scala Native  | Erlang         |
|            | Java      |               |                |

## Pembuatan Kode

Menginstruksikan ChatGPT untuk menghasilkan kode adalah sesederhana ini:

```text
Bertindak sebagai programmer python junior. Silakan tulis kode untuk menghasilkan madlibs dari 3 array dengan 6 item masing-masing: preposisi, kata kerja, dan kata benda, dengan kata benda juga digunakan sebagai objek langsung. Setelah menulisnya, jalankan kode tersebut.
```

Hasilnya akan menjadi sesuatu seperti:

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

Coba di sini:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo1MTIsIm91dHB1dCI6Ik9uIHRoZSBvdGhlciBoYW5kLCBzb21lIGFyZ3VlIHRoYXQgbWF0aCBpcyBsYXJnZWx5IGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZC4gTWF0aGVtYXRpY2FsIHByaW5jaXBsZXMgYXJlIGJhc2VkIG9uIGxvZ2ljYWwgcmVhc29uaW5nLCB3aGljaCBpcyBhIGZlYXR1cmUgb2YgdGhlIGh1bWFuIG1pbmQuIEZvciBpbnN0YW5jZSwgRXVjbGlkZWFuIGdlb21ldHJ5IGlzIGJhc2VkIG9uIGFic3RyYWN0IGF4aW9tcyBhbmQgcG9zdHVsYXRlcywgd2hpY2ggYXJlIGFjY2VwdGVkIGFzIHRydWUgd2l0aG91dCBwcm9vZi4gQXMgc3VjaCwgaXQgY2FuIGJlIGFyZ3VlZCB0aGF0IGdlb21ldHJ5IGlzIGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZCByYXRoZXIgdGhhbiBhIGRpc2NvdmVyeS4gU2ltaWxhcmx5LCBtYXRoZW1hdGljYWwgZm9ybXVsYXMgYW5kIGVxdWF0aW9ucyBhcmUgdXNlZCB0byBtb2RlbCBhbmQgcHJlZGljdCBwaHlzaWNhbCBwaGVub21lbmEsIHdoaWNoIGFyZSBhZ2FpbiB0aGUgcmVzdWx0IG9mIGh1bWFuIHJlYXNvbmluZy4iLCJwcm9tcHQiOiJBY3QgYXMgYSBqdW5pb3IgcHl0aG9uIHByb2dyYW1tZXIuIFBsZWFzZSB3cml0ZSB0aGUgY29kZSB0byBnZW5lcmF0ZSBtYWRsaWJzIGZyb20gMyBhcnJheXMgb2YgNiBpdGVtcyBlYWNoOiBwcmVwb3NpdGlvbnMsIHZlcmJzIGFuZCBub3Vucywgd2l0aCB0aGUgbm91bnMgYWxzbyBiZWluZyB1c2VkIGFzIGRpcmVjdCBvYmplY3RzLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Memberikan Komentar dan Merubah Format Kode

Anda dapat meminta ChatGPT untuk menambahkan komentar ke kode Anda, dan memformatnya agar mudah dibaca. Setelah instruksi Anda yang cepat, tambahkan tiga tanda pagar dan kemudian tempelkan kode yang ingin Anda bersihkan:

```text
Tolong tambahkan komentar baris pada kode Python ini dan ubah formatnya agar mudah dibaca:   

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
###
```

Output-nya akan menjadi seperti berikut ini:

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

Tidak hanya dapat mendeteksi kesalahan sintaks dalam kode, tetapi juga dapat menemukan kesalahan logika yang akan muncul saat kode dieksekusi. Di bawah ini adalah contoh dari skrip Python yang akhirnya menyebabkan kesalahan pembagian dengan nol di baris 4 karena kesalahan logika di baris 3.  Coba prompt sederhana ini untuk menemukan dan memperbaiki kesalahan:

```text
Harap periksa dan perbaiki kode Python ini:  

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

Output akan mencakup perulangan while yang sudah dikoreksi, yang diubah untuk memastikan variabel penyebut tetap positif:

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

Untuk kesalahan yang lebih halus, Anda mungkin perlu menambahkan lebih banyak rincian: pesan kesalahan, variabel lingkungan, perpustakaan yang disertakan, atau variasi masukan.


## Optimasi Kode

Jika skrip Anda memakan waktu terlalu lama untuk dieksekusi, ChatGPT dapat mengoptimalkannya. Berikut ini adalah contoh mengoptimalkan skrip yang tidak efisien dalam mencari bilangan prima:

```text
Bertugas seperti senior python developer yang sangat berpengalaman. Please optimize this script:  

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

Keluarannya mungkin menjadi skrip yang menggunakan [algoritma Sieve of Eratosthenes](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) untuk menemukan bilangan prima:

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

Perhatikan bahwa kami meminta bot untuk "berperilaku seperti _pengembang senior_ " untuk mengoptimalkan skrip. Anda juga dapat menentukan bahwa itu memiliki bidang keahlian tertentu (misalnya, algoritma pengurutan) atau jumlah tahun pengalaman. Atau, jika Anda memiliki skrip yang terlihat terlalu rumit, Anda dapat meminta ChatGPT untuk menulis skrip tersebut "sebagai pengembang junior yang _sangat junior_."


## Menerjemahkan Antarbahasa Pemrograman

Fitur yang sangat berguna yang ditawarkan oleh ChatGPT adalah kemampuan untuk memindahkan program dari satu bahasa ke bahasa lain. Penggunaan umum untuk ini mungkin adalah meningkatkan kode dalam bahasa yang lebih tua ke bahasa yang lebih modern:

```text
Bertindak seperti pengembang berpengalaman dengan pengetahuan baik tentang COBOL dan Python. Convert program dari bahasa COBOL berikut ke bahasa Python:  


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

Keluaran mungkin seperti ini:

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```


## Menangani Beberapa File dan Merombak Kode Anda

Bagaimana jika Anda ingin ChatGPT mengevaluasi **beberapa file**? Cukup sediakan nama file dan tempelkan kode untuk setiap file:

```text
Skrip Python saya menggunakan dua file, yang terdaftar di bawah, di direktori yang berbeda. Tampilkan hasil dari menjalankan conversation.py:

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


Dengan menggunakan teknik ini, Anda dapat mengirimkan beberapa file ke ChatGPT dalam satu permintaan dan meminta untuk merombak kode. Sebagai alternatif, Anda dapat meminta untuk "menghafal" masing-masingnya dan kemudian menjalankannya pada prompt kemudian.

## Mensimulasikan Server Database

Tidak hanya dapat bekerja dengan kode, tetapi ChatGPT juga dapat mensimulasikan lingkungan server seperti database, web, dan server email. Perhatikan prompt ini:

```text
Act as Microsoft SQL Server. Create a database called "politics" and inside it a table called "politicians." Fill it with 50 rows of famous politicians from around the world from different eras, 1900-2000. Add columns for their full names, country, dates of birth, and date of death if applicable. Create a view for top 3 politicians who lived the longest. Create and execute a Transact-SQL command that outputs the contents of that view.
```

Hasilnya akan menjadi sesuatu seperti:

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

Dari sana, Anda dapat menambahkan kolom, indeks, dan lainnya:

```
Tambahkan kolom ke tabel politikus untuk jabatan kedua dan perbarui untuk setiap baris.
```

Outputnya bisa menjadi seperti ini:

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

## Mensimulasikan Server Web

ChatGPT dapat mensimulasikan banyak server dan API lainnya. Berikut adalah contoh prompt yang mensimulasikan respon sebuah server Apache terhadap header permintaan browser tertentu:

```text
Bertindak sebagai sebuah server web Apache. Bagaimana Anda akan merespons header HTTP ini?

GET /example HTTP/1.1
Host: www.example.com
```

Hasilnya akan menjadi seperti berikut:

```text
// highlight-start
HTTP/1.1 200 OK
Date: [current date and time]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [date and time of last modification of the requested resource]
Content-Type: [MIME type of the requested resource, e.g. text/html]
// highlight-end
```

Berikut ini hanya beberapa jenis server dan API yang bisa ditiru oleh ChatGPT:

| Sangat Tua | Tua      | Terbaru                | Tercanggih         |
| ---------- | -------- | ---------------------- | ------------------ |
| Telnet     | HTTP/1.0 | RESTful API            | GraphQL API        |
| FTP        | SMTP     | SOAP API               | GRPC API           |
| POP3       | LDAP     | OAuth 2.0              | Docker API         |
| IMAP       | DHCP     | OpenAPI (Swagger)      | Kubernetes API     |
| DNS        | NTP      | gRPC-web API           | Istio API          |
| SNMP       | RADIUS   | MQTT API               | Prometheus API     |
| Syslog     | SFTP     | WebSocket API          | Envoy API          |
| TFTP       | SSH      | AWS API Gateway        | Istio Mixer API    |
| NFS        | XML-RPC  | Azure API Management   | OpenTracing API    |
| SMB        | JSON-RPC | Google Cloud Endpoints | NATS Streaming API |


## Mensimulasikan Baris Perintah Command Line

Karena shell dalam Linux (atau Windows PowerShell) juga merupakan bahasa pemrograman, Anda dapat berinteraksi dengannya menggunakan ChatGPT, dan membangun lingkungan untuk sistem file Anda:

```
Berperan sebagai shell perintah Debian Linux. Mohon tanggapi perintah saya seperti terminal, sedikit penjelasan mungkin. Perintah pertamaku adalah: ls -l
```

Keluarannya akan menjadi sesuatu seperti:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

Coba bereksperimen dengan perintah lain:

```text
>touch greeting.txt  
>echo "hello" > greeting.txt  
>ls -l  
```

ChatGPT seharusnya mengingat perubahan Anda (setidaknya untuk sementara) dan hasil akhir seharusnya sesuatu seperti:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

Diskusi lengkap tentang penggunaan ChatGPT sebagai mesin virtual dapat ditemukan di [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).

---

Dikontribusikan oleh Prompt Yes!, sebuah perusahaan yang menyediakan pelatihan teknik yang cepat [](https://promptyes.com/).
