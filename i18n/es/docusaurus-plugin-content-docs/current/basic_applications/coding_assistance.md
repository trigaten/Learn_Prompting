---
sidebar_position: 40
---


# 🟢 Asistencia de código


Puedes usar ChatGPT para depurar, generar código, reformatear, comentar y más. Puede trabajar con código en más de 40 lenguajes de programación.

| Muy antiguo | Antiguo   | Reciente      | Última generación |
| ----------- | --------- | ------------- | ----------------- |
| BASIC       | Perl      | Swift         | Kotlin            |
| Assembly    | Pascal    | TypeScript    | Julia             |
| Fortran     | PHP       | Rust          | Crystal           |
| Lisp        | Prolog    | Kotlin/Native | Racket            |
| COBOL       | C         | Julia (GPU)   | Lua               |
| Algol       | PL/I      | Go            | Zig               |
| SNOBOL      | C++       | Dart          | Nim               |
| RPG         | Smalltalk | Elixir        | Crystal (LLVM)    |
| Forth       | Tcl       | Groovy        | Vlang             |
| Ada         | SQL       | Scala Native  | Erlang            |

## Generación de código

Instruir a ChatGPT para generar código es tan sencillo como esto:

```text
Actúa como un programador junior de Python. Por favor, escribe el código para generar "madlibs" a partir de 3 arreglos de 6 elementos cada uno: preposiciones, verbos y sustantivos, siendo los sustantivos también utilizados como objetos directos. Después de escribirlo, ejecuta el código.
```

La salida será algo como:

```text
// highlight-start
import random

preposiciones = ['a', 'ante', 'bajo', 'con', 'contra', 'de']
verbos = ['correr', 'saltar', 'bailar', 'cantar', 'reir', 'llorar']
sustantivos = ['gato', 'perro', 'árbol', 'flor', 'libro', 'computador']

preposiciones = random.choice(preposiciones)
verbos = random.choice(verbos)
sustantivos = random.choice(sustantivos)

madlib = f"I {verbos} {preposiciones} the {sustantivos}."

print(madlib)
// highlight-end
```

Pruébalo aquí:

<div 
trydyno-embed="" 
openai-model="text-davinci-003" 
initial-prompt="Actúa como un programador junior de Python. Por favor escribe el código para generar madlibs a partir de 3 arreglos de 6 elementos cada uno: preposiciones, verbos y sustantivos, siendo los sustantivos también utilizados como objetos directos." 
initial-response="" 
max-tokens="512" 
box-rows="5" 
model-temp="0.0" 
top-p="0">
    <noscript>No se pudo cargar Dyno Embed: JavaScript debe estar habilitado.</noscript>
</div>

## Comentar y reformatear código

Puedes pedirle a ChatGPT que agregue comentarios a tu código y que lo reformatee para que sea legible. Después de tus instrucciones, agrega tres signos de numeral (#) y luego pega el código que te gustaría que se limpie:

```text
Por favor, agrega comentarios de línea a este código de Python y reformatea para que sea legible:

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
```

La salida será algo como:

```text
// highlight-start
# Import the math module
import math

# Establece la amplitud, frecuencia y número de puntos en la onda.
amplitude = 30
frequency = 2
num_points = 50

# Hacer un bucle sobre cada punto en la onda.
for i in range(num_points):
    # Calcular el valor y de la onda utilizando la función seno del módulo math.
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))

    # Imprimir un espacio para el relleno, seguido de un asterisco en la posición adecuada en la onda.
    print(' ' * (amplitude + y) + '*')

// highlight-end
```

## Depuración

No sólo puede ChatGPT detectar errores de sintaxis en el código, sino que también puede encontrar errores lógicos que surgirían cuando se ejecuta el código. A continuación, se muestra un ejemplo de un script de Python que eventualmente causa un error de división por cero en la línea 4 debido a un error lógico en la línea 3. Intenta con este simple comando para encontrar y solucionar el error:

```text
Por favor, depura este codigo de Python:

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

La salida incluirá el bucle while corregido, que se ha modificado para asegurarse de que la variable del denominador permanezca positiva:

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

Para errores más detallados, es posible que necesites agregar más especificaciones: el mensaje de error, variables de entorno, bibliotecas incluidas o variaciones en las entradas.

## Optimizando Código

Si tu script tarda demasiado en ejecutarse, ChatGPT puede optimizarlo. Aquí tienes un ejemplo de cómo optimizar un script ineficiente que encuentra números primos:

```text
Actúa como un desarrollador de Python muy experimentado, por favor optimiza este script:

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

El resultado podría ser un script que utiliza el [Sieve of Eratosthenes algorithm](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) para encontrar números primos:

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

Ten en cuenta que pedimos al bot que "actúe como un desarrollador _senior_" para optimizar el script. También puedes indicar que tenga cierta área de especialización (por ejemplo, algoritmos de ordenamiento) o cantidad de años de experiencia. Alternativamente, si tienes un script que parece demasiado complicado, puedes pedirle a ChatGPT que lo escriba "como un desarrollador _muy junior_".

## Traduciendo entre lenguajes de programación

Una característica muy útil que ofrece ChatGPT es la capacidad de portar programas de un lenguaje a otro. Un uso típico de esto podría ser actualizar el código de un lenguaje antiguo a uno más moderno:

```text
Actúa como un desarrollador experimentado con conocimientos en COBOL y Python. Por favor, convierte este programa de COBOL a Python:


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

La salida podría ser algo como esto:

```text
// highlight-start
salary = float(input("Enter employee's salary: "))
ss_tax = salary * 0.062

print("Social Security tax is: $", round(ss_tax, 2))
// highlight-end
```

## Manejo de múltiples archivos y refactorización de su código base

¿Qué pasa si deseas que ChatGPT evalúe **múltiples** archivos? Simplemente proporciona los nombres de archivo y pega el código de cada uno:

```text
Mi script de Python utiliza dos archivos, que se enumeran a continuación, en diferentes directorios. Por favor, muestra la salida de la ejecución de conversation.py:

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

Utilizando esta técnica, puedes enviar múltiples archivos a ChatGPT en una sola solicitud y pedirle que refactorice el código. Alternativamente, puedes pedirle que "memorice" cada uno y luego ejecutarlo en una solicitud posterior.

## Simulando un Servidor de Base de Datos

No solo ChatGPT puede trabajar con código, sino que también puede simular entornos de servidor como bases de datos, servidores web y de correo electrónico. Considera esta solicitud:

```text
Actúa como Microsoft SQL Server. Crea una base de datos llamada "politics" y dentro de ella una tabla llamada "politicians". Llénala con 50 filas de políticos famosos de todo el mundo de diferentes épocas, de 1900 a 2000. Agrega columnas para sus nombres completos, país, fechas de nacimiento y fecha de fallecimiento si corresponde. Crea una vista para los 3 principales políticos que vivieron más tiempo. Crea y ejecuta un comando Transact-SQL que muestre el contenido de esa vista.
```

La salida será algo como:

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

A partir de ahí, puedes agregar columnas, índices y más:

```
Agrega una columna a la tabla de políticos para el segundo al mando y actualiza su valor para cada fila.
```

La salida será algo como:

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

## Simulando un servidor web

ChatGPT puede simular muchos otros servidores y APIs. Aquí hay un ejemplo de una solicitud que simula una respuesta del servidor Apache a encabezados de solicitud específicos del navegador:

```text
Actúa como un servidor web Apache. ¿Cómo responderías a estos encabezados HTTP?

GET /example HTTP/1.1
Host: www.example.com
```

La salida será algo como:

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

| Muy antiguo | Antiguo  | Reciente               | Última generación  |
| ----------- | -------- | ---------------------- | ------------------ |
| Telnet      | HTTP/1.0 | RESTful API            | GraphQL API        |
| FTP         | SMTP     | SOAP API               | GRPC API           |
| POP3        | LDAP     | OAuth 2.0              | Docker API         |
| IMAP        | DHCP     | OpenAPI (Swagger)      | Kubernetes API     |
| DNS         | NTP      | gRPC-web API           | Istio API          |
| SNMP        | RADIUS   | MQTT API               | Prometheus API     |
| Syslog      | SFTP     | WebSocket API          | Envoy API          |
| TFTP        | SSH      | AWS API Gateway        | Istio Mixer API    |
| NFS         | XML-RPC  | Azure API Management   | OpenTracing API    |
| SMB         | JSON-RPC | Google Cloud Endpoints | NATS Streaming API |

## Simulando una línea de comandos

Dado que una consola dentro de Linux (o Windows PowerShell) también es un lenguaje de programación, puedes interactuar con ella usando ChatGPT y construir un entorno para tu sistema de archivos:

```
Actúa como la terminal de comandos de Debian Linux. Por favor, responde a mis comandos como lo haría la terminal, con la menor explicación posible. Mi primer comando es: ls -l
```

La salida será algo como:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

Intenta experimentar con otros comandos:

```text
>touch greeting.txt
>echo "hello" > greeting.txt
>ls -l
```

ChatGPT debería recordar tus cambios (al menos por un tiempo) y la salida final debería ser algo como:

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

Se puede encontrar una discusión completa sobre el uso de ChatGPT como una máquina virtual en: [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).

---

Contribuido por Prompt Yes!, una empresa que proporciona [prompt engineering training](https://promptyes.com/).
