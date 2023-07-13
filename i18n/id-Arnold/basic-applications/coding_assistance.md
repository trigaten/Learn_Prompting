# 🟡 Membantu Pemrograman (Coding)

Anda dapat menggunakan ChatGPT untuk debugging, pembuatan kode, reformatting, memberikan komentar, dan banyak lagi. Ini dapat bekerja dengan kode dalam lebih dari 40 bahasa pemrograman.

| Bahasa Pemrograman Sangat Tua | Bahasa Pemrograman Tua | Bahasa Pemrograman Terbaru | Bahasa Pemrograman Tercanggih |
| --- | --- | --- | --- |
| BASIC | Perl | Swift | Kotlin |
| Assembly | Pascal | TypeScript | Julia |
| Fortran | PHP | Rust | Crystal |
| Lisp | Prolog | Kotlin/Native | Racket |
| COBOL | C | Julia (GPU) | Lua |
| Algol | PL/I | Go | Zig |
| SNOBOL | C++ | Dart | Nim |
| RPG | Smalltalk | Elixir | Crystal (LLVM) |
| Forth | Tcl | Groovy | Vlang |
| Ada | SQL | Scala Native | Erlang |

## Pembuatan Kode

Memberi instruksi pada ChatGPT untuk membuat kode adalah seperti ini:

```
Bertindak sebagai junior python programmer. Silakan tulis kode untuk menghasilkan madlibs dari 3 array dengan masing-masing 6 item: preposisi, kata kerja, dan kata benda, dengan kata benda juga digunakan sebagai objek langsung. Setelah menulisnya, jalankan kode tersebut.
```

Keluarannya akan seperti ini:

```
import random

prepositions = ['at', 'in', 'on', 'with', 'under', 'over']
verbs = ['run', 'jump', 'dance', 'sing', 'laugh', 'cry']
nouns = ['cat', 'dog', 'tree', 'flower', 'book', 'computer']

preposition = random.choice(prepositions)
verb = random.choice(verbs)
noun = random.choice(nouns)

madlib = f"Saya {verb} {preposition} {noun}."

print(madlib)
```

Coba di sini:

## Memberikan Komentar dan Merubah Format Kode

Anda dapat meminta ChatGPT untuk menambahkan komentar pada kode Anda, dan merubahnya untuk lebih mudah dibaca. Setelah instruksi prompt Anda, tambahkan tiga tanda pagar dan kemudian tempelkan kode yang ingin Anda bersihkan:

```
Silakan tambahkan komentar baris pada kode Python ini dan ubah formatnya agar mudah dibaca:

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
###
```

Keluarannya akan seperti ini:

```
# Impor module matematika
import math

# Tetapkan amplitudo, frekuensi, dan jumlah titik pada gelombang
amplitude = 30
frequency = 2
num_points = 50

# Loop melalui setiap titik pada gelombang
for i in range(num_points):
    # Hitung nilai y dari gelombang menggunakan fungsi sinus dari modul matematika
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))

    # Cetak spasi untuk pembatas, diikuti dengan tanda bintang pada posisi yang sesuai pada gelombang
    print(' ' * (amplitude + y) + '*')
```

## Debugging

Tidak hanya dapat mendeteksi kesalahan sintaks dalam kode, tetapi ChatGPT juga dapat menemukan kesalahan logis yang akan muncul saat kode dijalankan. Ini adalah contoh script Python yang pada akhirnya menyebabkan error pembagian dengan nol di baris 4 karena kesalahan logis di baris 3. Coba prompt sederhana ini untuk menemukan dan memperbaiki kesalahan:

```
Silakan debug kode Python ini:

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

Keluarannya akan mencakup loop while yang diperbaiki, yang berubah agar variabel penyebut selalu positif:

```
3. while partygoers > 0:
```

Untuk kesalahan yang lebih detail, Anda mungkin perlu menambahkan detail: pesan kesalahan, variabel lingkungan, library yang terlibat, atau variasi masukan.

## Optimasi Kode

Jika skrip Anda memakan waktu terlalu lama untuk dieksekusi, ChatGPT dapat mengoptimalkannya. Berikut adalah contoh mengoptimalkan skrip yang tidak efisien dalam menemukan bilangan prima:

```
Bertindak seperti pengembang python senior. Tolong optimalkan skrip ini:

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

Keluarannya mungkin menjadi skrip yang menggunakan [algoritma Sieve of Eratosthenes](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) untuk menemukan bilangan prima:

```
numbers = list(range(2, 101))
for i in numbers:
    for j in range(i * 2, 101, i):
        if j in numbers:
            numbers.remove(j)
print(numbers)
```

Perhatikan bahwa kita meminta bot untuk "bertindak seperti pengembang *senior*" untuk mengoptimalkan skrip. Anda juga dapat menentukan bahwa bot memiliki area keahlian tertentu (misalnya, algoritma pengurutan) atau jumlah tahun pengalaman. Atau, jika Anda memiliki skrip yang tampak terlalu rumit, Anda dapat meminta ChatGPT untuk menulis skrip itu "sebagai pengembang *junior*."

## Menerjemahkan Antarbahasa Pemrograman

Fitur yang sangat berguna yang ditawarkan oleh ChatGPT adalah kemampuan untuk memindahkan program dari satu bahasa ke bahasa lain. Penggunaan khas untuk ini mungkin adalah memperbarui kode dalam bahasa pemograman yang tua ke bahasa yang lebih modern:

```
Bertindak seperti pengembang berpengalaman dengan pengetahuan COBOL dan Python. Silakan konversi program COBOL ini ke Python:

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

Keluarannya mungkin seperti ini:

```
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
```

## Menangani Beberapa Berkas dan Refactoring Basis Kode Anda

Bagaimana jika Anda ingin ChatGPT mengevaluasi beberapa berkas? Cukup berikan nama file dan tempelkan kode untuk masing-masing:

```
Skrip Python saya menggunakan dua berkas, yang tercantum di bawah ini, dalam direktori yang berbeda. Silakan tampilkan output dari mengeksekusi conversation.py:

BEGIN FILE 1: ./phrases/coming_and_going.py
def hi(name):
   print(f"Hello, {name}!")
def bye(name):
   print(f"Goodbye, {name}!")

BEGIN FILE 2: ./conversation.py
from phrases.coming_and_going import hi, bye
hi("John")
bye("John")

Hello, John!
Goodbye, John!
```

Dengan menggunakan teknik ini, Anda dapat mengirimkan beberapa file ke ChatGPT dalam satu prompt dan memintanya untuk memperbarui kode. Atau, Anda dapat memintanya untuk "mengingat" masing-masing dan kemudian mengeksekusinya dalam prompt lain.

## Mensimulasikan Server Database

Tidak hanya dapat bekerja dengan kode, tetapi ChatGPT juga dapat mensimulasikan lingkungan server seperti database, server web, dan email. Pertimbangkan prompt ini:

```
Bertindak sebagai Microsoft SQL Server. Buat database bernama "politik" dan di dalamnya tabel bernama "politisi." Isilah dengan 50 baris politisi terkenal dari seluruh dunia dari era yang berbeda, 1900-2000. Tambahkan kolom untuk nama lengkap, negara, tanggal lahir, dan tanggal kematian jika ada. Buat tampilan untuk 3 politisi teratas yang pernah hidup. Buat dan jalankan perintah Transact-SQL yang menghasilkan isi tampilan itu.
```

Keluarannya akan seperti ini:

```
-- Buat database "politik"
CREATE DATABASE politik;
GO

-- Gunakan database "politik"
USE politik;
GO

-- Buat tabel "politisi"
CREATE TABLE politisi (
    id INT PRIMARY KEY,
    full_name VARCHAR(50),
    country VARCHAR(50),
    date_of_birth DATE,
    date_of_death DATE
);
-- dsb.
```

Dari sana, Anda dapat menambahkan kolom, indeks, dan lain-lain:

```
Tambahkan kolom ke tabel politisi untuk jabatan kedua dan perbarui untuk setiap baris.
```

Keluarannya mungkin seperti ini:

```
ALTER TABLE politisi ADD second_in_command VARCHAR(255);

UPDATE politisi
SET second_in_command =
    CASE name
        WHEN 'Winston Churchill' THEN 'Clement Attlee'
        WHEN 'Franklin D. Roosevelt' THEN 'Harry S. Truman'
        WHEN 'Mao Zedong' THEN 'Lin Biao'
        -- tambahkan lebih banyak kasus untuk setiap politisi
        ELSE NULL
    END;
```

## Mensimulasikan Server Web

ChatGPT dapat mensimulasikan banyak server dan API lainnya. Berikut adalah contoh prompt yang mensimulasikan respon server Apache terhadap header permintaan browser tertentu:

```
Bertindak sebagai server web Apache. Bagaimana Anda merespons header HTTP ini?

GET /example HTTP/1.1
Host: www.example.com
```

Keluarannya akan seperti ini:

```
HTTP/1.1 200 OK
Date: [tanggal dan waktu saat ini]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [tanggal dan waktu terakhir modifikasi sumber daya yang diminta]
Content-Type: [jenis MIME dari sumber daya yang diminta, mis. text/html]
```

Berikut hanya beberapa jenis server dan API yang dapat disimulasikan oleh ChatGPT:

| Server Sangat Tua | Server Tua | Server Terbaru | Server Tercanggih |
| --- | --- | --- | --- |
| Telnet | HTTP/1.0 | RESTful API | GraphQL API |
| FTP | SMTP | SOAP API | GRPC API |
| POP3 | LDAP | OAuth 2.0 | Docker API |
| IMAP | DHCP | OpenAPI (Swagger) | Kubernetes API |
| DNS | NTP | gRPC-web API | Istio API |
| SNMP | RADIUS | MQTT API | Prometheus API |
| Syslog | SFTP | WebSocket API | Envoy API |
| TFTP | SSH | AWS API Gateway | Istio Mixer API |
| NFS | XML-RPC | Azure API Management | OpenTracing API |
| SMB | JSON-RPC | Google Cloud Endpoints | NATS Streaming API |

## Mensimulasikan Command Line

Karena shell dalam Linux (atau Windows PowerShell) juga merupakan bahasa pemrograman, Anda dapat berinteraksi dengannya menggunakan ChatGPT, dan membangun lingkungan untuk sistem file Anda:

```
Bertindak sebagai Debian Linux command shell. Tolong tanggapi perintah saya seperti terminal, dengan sedikit penjelasan mungkin. Perintah pertama saya adalah: ls -l
```

Keluarannya akan seperti ini:

```
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28
```
Coba bereksperimen dengan perintah lainnya:
```
>touch greeting.txt
>echo "hello" > greeting.txt
>ls -l
```
ChatGPT seharusnya mengingat perubahan yang Anda lakukan (setidaknya sementara) dan hasil akhir kira-kira seperti ini:
```
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
```


Sebuah diskusi lengkap mengenai penggunaan ChatGPT sebagai mesin virtual dapat ditemukan di [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).

---

Kontribusi oleh Prompt Yes!, sebuah perusahaan yang menyediakan [pelatihan prompt engineering](https://promptyes.com/).
