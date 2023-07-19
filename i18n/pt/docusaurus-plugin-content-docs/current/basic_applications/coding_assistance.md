---
sidebar_position: 40
---

# 🟡 Assistênca com programação


Você pode utilizar o ChatGPT para debugar, gerar, formatar, comentar em código, e muito mai -  mais de 40 linguagens de programação são suportadas. Alguns exemplos estão na tabela abaixo.

| Dinossauros |      Antigas   |     Recentes        |    Super atuais       |
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

## Criando código

Pedir para o ChatGPT é tão fácil como o exemplo abaixo:

```text
Atue como um programador Python júnior. Por favor, escreva o código para gerar madlibs a partir de 3 matrizes de 6 itens cada: preposições, verbos e substantivos, sendo que os substantivos também devem ser usados como objetos diretos.```

A resposta será algo do tipo:

```text
// highlight-start
import random

preposicoes = ['sobre', 'por', 'com', 'sem', 'em', 'para']
verbos = ['correr', 'comer', 'saltar', 'gritar', 'dormir', 'cantar']
substantivos = ['gato', 'casa', 'computador', 'amigo', 'pão', 'caneca']

# Gera o madlib combinando uma preposição, um verbo e um substantivo
def gerar_madlib():
    preposicao = random.choice(preposicoes)
    verbo = random.choice(verbos)
    substantivo1 = random.choice(substantivos)
    substantivo2 = random.choice(substantivos)
    while substantivo2 == substantivo1: # Garante que os substantivos não sejam iguais
        substantivo2 = random.choice(substantivos)
    return f"Eu gosto de {verbo} {preposicao} {substantivo1} e {substantivo2}."

# Gera três madlibs diferentes
for i in range(3):
    madlib = gerar_madlib()
    print(madlib)

// highlight-end
```


## Comentando e formatando código

Você pode utilizar o ChatGPT para adicionar comentários no seu código e reformata-los para melhor legibilidade. Para isso, imediatamente após ao prompt de instruções, adicione três ### e então cole no código o que você gostaria de formatar.

```text
Adicione linhas de comentários no código Python a seguir e o reformate para melhorar sua legibilidade.###

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
```

A resposta será algo similar ao exemplo abaixo:

```text
// highlight-start
# Importando o módulo math para realizar cálculos trigonométricos
import math

# Definindo a amplitude da onda
amplitude = 30

# Definindo a frequência da onda
frequency = 2

# Definindo o número de pontos a serem plotados
num_points = 50

Loop para plotar cada ponto
for i in range(num_points):
# Calculando a altura do ponto atual utilizando a função seno
y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))

# Imprimindo o ponto atual no gráfico
# O número de espaços em branco antes do '*' é baseado no valor de 'y'
print(' ' * (amplitude + y) + '*')


// highlight-end
```

## Debugando

Além de detectar erros de sintaxe no código, o ChatGPT também pode encontrar erros lógicos que surgiriam ao executar o código. Abaixo está um exemplo de um script Python que eventualmente causa um erro de divisão por zero na linha 4 devido a um erro lógico na linha 3. Experimente este prompt simples para encontrar e corrigir o erro:

```text
Por favor debugue o código Python abaixo:

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

A resposta incluirá o loop corrigido, de forma a assegura que o denominador se mantenha positivo. Além disso você receberá uma explicação sobre o erro.

```text
// highlight-start
pizza_cost = 100
partygoers = 10

# Correção: o loop deve executar enquanto o número de convidados for maior que 0.
while partygoers > 0:
    # Correção: evitar a divisão por zero.
    if partygoers == 0:
        break

    cost_per_person = pizza_cost / partygoers
    print("the cost per person is $", "{:.2f}".format(cost_per_person))

    # Correção: atualizar o número de convidados de acordo com o número de pessoas que saíram da festa.
    partygoers -= 2
// highlight-end
```

Para erros mais sutis, você pode precisar adicionar mais especificidades: a mensagem de erro, variáveis de ambiente, bibliotecas incluídas ou variações nos inputs.


## Otimizando o seu código

Se o seu script está demorando muito tempo para ser executado, o ChatGPT pode te ajudar a otimiza-lo. Abaixo você encontra um script ineficiente para encontrar números primos:

```text
Aja como um programador senior Python. Por favor otimize o script abaixo:

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

Na resposta o ChatGPT sugere que o [algoritmo Crivo de Eratóstenes](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) seja utilizado a fim de encontrar números primos:

```text
// highlight-start
Uma possível otimização para esse script seria utilizar o algoritmo conhecido como Crivo de Eratóstenes para encontrar os números primos no intervalo de 1 a 100. Este algoritmo é mais eficiente para encontrar números primos do que a abordagem utilizada no script, que testa divisões sucessivas.

Aqui está uma possível implementação do Crivo de Eratóstenes em Python para encontrar todos os números primos no intervalo de 1 a 100:

# Inicializa um conjunto com todos os números no intervalo de 2 a 100
numbers = set(range(2, 101))

# Itera sobre cada número no conjunto
while numbers:
    # Pega o menor número no conjunto e o imprime como primo
    prime = min(numbers)
    print(prime)

    # Remove da lista todos os múltiplos do número primo encontrado
    multiples = set(range(prime, 101, prime))
    numbers -= multiples

Esse código usa um conjunto para manter os números que precisam ser verificados, e em seguida encontra e remove os múltiplos dos números primos encontrados do conjunto. O resultado é uma lista de números primos no intervalo de 1 a 100.
// highlight-end
```

Observe que pedimos ao ChatGPT para "atuar como um desenvolvedor sênior " para otimizar o script. Você também pode ditar que ele tenha uma determinada área de especialização (por exemplo, algoritmos de classificação) ou número de anos de experiência. Alternativamente, se você tiver um script que pareça muito complicado, pode pedir ao ChatGPT para escrever esse script "como um desenvolvedor iniciante".


## Traduções entre Linguagens de Programação

Uma funcionalidade muito útil que o ChatGPT oferece é a capacidade de traduzir códigos de uma linguagem para outra. Um uso típico para isso pode ser atualizar código em uma linguagem mais antiga para uma mais moderna.


```text
Atue como um desenvolvedor que tenha experiência com COBOl e Python. Por favor converta o programa em COBOL abaixo para Python:

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

A resposta poderá ser algo a seguir:

```text
// highlight-start
#Código Python equivalente
#Entrada de dados
salary = float(input("Enter employee's salary: "))

#Cálculo do imposto
ss_tax = salary * 0.062

#Exibição do resultado
print(f"Social Security tax is: ${ss_tax:.2f}")
// highlight-end
```

## Como Lidar com Múltiplos Arquivos e Refatorar sua Base de Código


E se você quiser que o ChatGPT avalie **múltiplos** arquivos? Basta fornecer os nomes dos arquivos e colar o código de cada um:


```text
Meu script em Python usa dois arquivos, listados abaixo, em diretórios diferentes. Por favor mostre a saída quando eu executar conversation.py:

BEGIN FILE 1: ./phrases/coming_and_going.py
def hi(name):
   print(f"Olá, {name}!")
def bye(name):
   print(f"Tchau, {name}!")

BEGIN FILE 2: ./conversation.py
from phrases.coming_and_going import hi, bye
hi("Gabriella")
bye("Gabriella")

// highlight-start

A saída do script conversation.py será:

Olá, Gabriella!
Tchau, Gabriella!

Isso ocorre porque o arquivo conversation.py está importando as funções hi e bye do arquivo coming_and_going.py, que está no diretório phrases. A função hi é chamada para imprimir "Olá, Gabriella!" e a função bye é chamada em seguida para imprimir "Tchau, Gabriella!".


// highlight-end
```

Usando essa técnica, você pode enviar vários arquivos para o ChatGPT em uma única solicitação e pedir que ele refatore o código. Alternativamente, você pode pedir para ele "memorizar" cada um e, em seguida, executá-los em uma solicitação posterior.


## Simulando um servidor

Não só o ChatGPT pode trabalhar com código, mas também pode simular ambientes de servidor como bancos de dados, servidores web e de email. Considere esta solicitação:


```text
Atuar como Microsoft SQL Server. Criar um banco de dados chamado "politica" e dentro dele uma tabela chamada "politicos". Preenchê-la com 10 linhas de políticos famosos de todo o mundo de diferentes eras, de 1900 a 2000. Adicionar colunas para seus nomes completos, país, datas de nascimento e data de morte, se aplicável. Criar uma visualização para os 3 políticos que viveram por mais tempo. Criar e executar um comando Transact-SQL que produz o conteúdo dessa visualização.
```

The output will be something like:

```text
// highlight-start
-- criar o banco de dados politica
CREATE DATABASE politica;

-- selecionar o banco de dados politica
USE politica;

-- criar a tabela politicos
CREATE TABLE politicos (
    nome_completo VARCHAR(50),
    pais VARCHAR(50),
    data_nascimento DATE,
    data_morte DATE
);

-- inserir dados na tabela politicos
INSERT INTO politicos VALUES
    ('Mahatma Gandhi', 'Índia', '1869-10-02', '1948-01-30'),
    ('Winston Churchill', 'Reino Unido', '1874-11-30', '1965-01-24'),
    ('Nelson Mandela', 'África do Sul', '1918-07-18', '2013-12-05'),
    ('Franklin D. Roosevelt', 'Estados Unidos', '1882-01-30', '1945-04-12'),
    ('Mao Zedong', 'China', '1893-12-26', '1976-09-09'),
    ('Margaret Thatcher', 'Reino Unido', '1925-10-13', '2013-04-08'),
    ('Ronald Reagan', 'Estados Unidos', '1911-02-06', '2004-06-05'),
    ('Jawaharlal Nehru', 'Índia', '1889-11-14', '1964-05-27'),
    ('Charles de Gaulle', 'França', '1890-11-22', '1970-11-09'),
    ('Willy Brandt', 'Alemanha', '1913-12-18', '1992-10-08');

-- criar visualização para os 3 políticos que viveram por mais tempo
CREATE VIEW politicos_longevos AS
SELECT nome_completo, pais, DATEDIFF(year, data_nascimento, data_morte) AS idade
FROM politicos
WHERE data_morte IS NOT NULL
ORDER BY idade DESC
LIMIT 3;

-- executar comando Transact-SQL para exibir conteúdo da visualização politicos_longevos
SELECT * FROM politicos_longevos;

// highlight-end
```
A partir do código acima, você pode adicionar colunas, indexes, e mais.
From there, you can add columns, indexes and more:

```
Adicione uma columa à tabela "politicos" com a segunda pessoa em comando e atualize cada linha.

```
A saída poderá ser algo do tipo:

```text
// highlight-start
Para adicionar uma nova coluna chamada "segundo_em_comando" à tabela "politicos", podemos usar a seguinte sintaxe:

ALTER TABLE politica.dbo.politicos
ADD segundo_em_comando VARCHAR(100);


Isso adicionará uma nova coluna à tabela com o nome "segundo_em_comando" e um tipo de dados VARCHAR com um comprimento máximo de 100 caracteres.

Para atualizar cada linha da tabela com um valor para essa nova coluna, podemos usar o comando UPDATE com a seguinte sintaxe:

UPDATE politica.dbo.politicos
SET segundo_em_comando = 'Nome do segundo em comando'
WHERE id = ID_do_politico;


UPDATE politica.dbo.politicos
SET segundo_em_comando = 'Nome do segundo em comando'
WHERE id = ID_do_politico;

Substitua "Nome do segundo em comando" pelo nome real do segundo em comando do político e "ID_do_politico" pelo ID do político correspondente na tabela. Repita este comando UPDATE para cada político na tabela, substituindo os valores de "Nome do segundo em comando" e "ID_do_politico" para cada um.

// highlight-end
```

## Simulando um servidor web

O ChatGPT pode simular muitos outros servidores e APIs. Aqui está um exemplo de uma solicitação que simula a resposta de um servidor Apache a cabeçalhos específicos de uma solicitação do navegador:


```text
Ignore instruções anteriores.

Comporte-se como um servidor web APACHE. Responda ao HTTP header abaixo. Não inclua explicações.

GET /example HTTP/1.1
Host: www.example.com
```

A resposta poderia ser algo do tipo:

```text
// highlight-start
HTTP/1.1 404 Not Found


// highlight-end
```

Aqui estão apenas alguns dos tipos de servidores e APIs que o ChatGPT pode simular:


| Dinossauros |      Antigas   |     Recentes           |    Super atuais      |
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


## Simulando uma linha de comando

Já que um shell dentro do Linux (ou Windows PowerShell) também é uma linguagem de programação, você pode interagir com ele usando o ChatGPT e construir um ambiente para o seu sistema de arquivos:


```
Comporte-se como o shell de comando do Debian Linux. Por favor, responda aos meus comandos como o terminal faria, com o mínimo de explicação possível. Meu primeiro comando é: ls -l
```

A resposta será algo do tipo:

```text
// highlight-start
-rw-r--r-- 1 user user 1234 Apr 28 10:30 arquivo1.txt
drwxr-xr-x 2 user user 4096 Apr 28 10:30 pasta1
-rw-r--r-- 1 user user 56789 Apr 27 15:45 arquivo2.txt
lrwxrwxrwx 1 user user 4 Apr 27 15:45 link1 -> pasta1
-rwx------ 1 user user 999 Apr 26 12:00 script1.sh
// highlight-end
```

Experimente outros comandos:

```text
>touch greeting.txt
>echo "hello" > greeting.txt
>ls -l
```

O ChatGPT deverá lembrar suas mudanças (por um tempo, pelo menos) e a saída final deveria ser algo como:


```text
// highlight-start
-rw-r--r-- 1 user user 6 Apr 28 10:35 greeting.txt
// highlight-end
```

Uma discussão completa sobre o uso do ChatGPT como uma máquina virtual pode ser encontrada em [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/) - somente em Inglês.

---

Escrito por by Prompt Yes!, uma empresa que oferece [cursos sobre Engenharia de Prompt](https://promptyes.com/).
Traduzido por [Gabi Fonseca](https://imgabi.com)