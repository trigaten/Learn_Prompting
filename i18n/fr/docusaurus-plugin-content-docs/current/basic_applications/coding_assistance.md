---
sidebar_position: 40
---

# 🟡 Assistance en programmation

Vous pouvez utiliser ChatGPT pour le débogage, la génération de code, le reformatage, les commentaires, et plus encore. Il peut travailler avec du code dans plus de 40 langages de programmation.

| Très ancien | Ancien    | Récent        | De pointe      |
| ----------- | --------- | ------------- | -------------- |
| BASIC       | Perl      | Swift         | Kotlin         |
| Assembleur  | Pascal    | TypeScript    | Julia          |
| Fortran     | PHP       | Rust          | Crystal        |
| Lisp        | Prolog    | Kotlin/Native | Racket         |
| COBOL       | C         | Julia (GPU)   | Lua            |
| Algol       | PL/I      | Go            | Zig            |
| SNOBOL      | C++       | Dart          | Nim            |
| RPG         | Smalltalk | Elixir        | Crystal (LLVM) |
| Forth       | Tcl       | Groovy        | Vlang          |
| Ada         | SQL       | Scala Native  | Erlang         |

## Génération de code

Demander à ChatGPT de générer du code est aussi simple que cela :

```text
Agissez comme un junior programmeur en Python. Veuillez écrire le code pour générer des madlibs à partir de 3 tableaux de 6 éléments chacun : les prépositions, les verbes et les noms, les noms étant également utilisés comme compléments directs. Après l'avoir écrit, exécutez le code.
```

Le résultat sera quelque chose comme :

```text
// highlight-start
import random

prepositions = ['à', 'dans', 'sur', 'avec', 'sous', 'sur']
verbes = ['cours', 'saute', 'danse', 'chante', 'ris', 'pleure']
noms = ['chat', 'chien', 'arbre', 'fleur', 'livre', 'ordinateur']

preposition = random.choice(prepositions)
verbe = random.choice(verbes)
nom = random.choice(noms)

madlib = f"Je {verbe} {préposition} quelque {nom}."

print(madlib)
// highlight-end
```

Essayez-le ici :

<div 
trydyno-embed="" 
openai-model="text-davinci-003" 
initial-prompt="Agissez comme un junior programmeur en Python. Veuillez écrire le code pour générer des madlibs à partir de 3 tableaux de 6 éléments chacun : les prépositions, les verbes et les noms, les noms étant également utilisés comme compléments directs." 
initial-response="" 
max-tokens="512" 
box-rows="5" 
model-temp="0.0" 
top-p="0">
    <noscript>Impossible de charger Dyno Embed : JavaScript doit être activé</noscript>
</div>

## Commentaires et reformatage de code

Vous pouvez demander à ChatGPT d'ajouter des commentaires à votre code et de le reformater pour plus de lisibilité. Après votre instruction de prompt, ajoutez trois dièses puis collez le code que vous souhaitez nettoyer :

```text
Veuillez ajouter des commentaires de ligne à ce code Python et le reformater pour plus de lisibilité :

import math
amplitude = 30
frequency = 2
num_points = 50
for i in range(num_points):
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))
    print(' ' * (amplitude + y) + '*')
###
```

Le résultat sera quelque chose comme :

```text
// highlight-start
# Importation du module math
import math

# Définition de l'amplitude, de la fréquence et du nombre de points dans la courbe
amplitude = 30
frequency = 2
num_points = 50

# Boucle sur chaque point
for i in range(num_points):
    # Calcul de la valeur y de la courbe en utilisant la fonction sinus du module math
    y = int(round(amplitude * math.sin(2 * math.pi * frequency * i / num_points)))

    # Impression d'un espace pour le remplissage, suivi d'une étoile à la position appropriée sur la courbe
    print(' ' * (amplitude + y) + '*')

// highlight-end
```

## Débogage

ChatGPT peut non seulement détecter les erreurs de syntaxe dans le code, mais également trouver les erreurs logiques qui apparaîtraient lors de l'exécution du code. Voici un exemple de script Python qui finit par provoquer une erreur de division par zéro à la ligne 4 en raison d'une erreur logique à la ligne 3. Essayez cette simple invitation pour trouver et corriger l'erreur :

```text
Veuillez déboguer ce code Python :

1. pizza_cost = 100
2. partygoers = 10
3. while partygoers = 0:
4.    cost_per_person = pizza_cost / partygoers
5.    print("the cost per person is $", "{:.2f}".format(cost_per_person))
6.    partygoers -= 2
```

Le résultat inclura la boucle while corrigée, qui est modifiée pour que la variable dénominateur reste positive :

```text
// highlight-start
3. while partygoers > 0:
// highlight-end
```

Pour des erreurs plus nuancées, vous devrez peut-être ajouter plus de détails : le message d'erreur, les variables d'environnement, les bibliothèques incluses ou les variations d'entrées.

## Optimisation de code

Si votre script prend trop de temps à s'exécuter, ChatGPT peut l'optimiser. Voici un exemple d'optimisation d'un script inefficace qui trouve des nombres premiers :

```text
Agissez comme un développeur Python très expérimenté. Veuillez optimiser ce script :

for num in range(1, 101):
    if num  1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print(num)
```

Le résultat pourrait être un script qui utilise [l'algorithme du crible d'Eratosthène](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) pour trouver les nombres premiers :

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

Notez que nous avons demandé au bot d'agir comme un développeur _très expérimenté_ pour optimiser le script. Vous pouvez également dicter qu'il ait un certain domaine d'expertise (par exemple, les algorithmes de tri) ou un certain nombre d'années d'expérience. Alternativement, si vous avez un script qui semble trop compliqué, vous pouvez demander à ChatGPT d'écrire ce script "en tant que _très junior_ développeur".

## Traduction entre les langages de programmation

Une fonctionnalité très utile offerte par ChatGPT est la possibilité de porter des programmes d'un langage à un autre. Une utilisation typique de ceci pourrait être la mise à niveau du code dans un langage plus ancien vers un langage plus moderne :

```text
Agissez comme un développeur expérimenté ayant des connaissances en COBOL et en Python. Veuillez convertir ce programme COBOL en Python :


IDENTIFICATION DIVISION.
PROGRAM-ID. CALCULATE-SS-TAX.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 SALARY PIC 9(7)V99.
01 SS-TAX PIC 9(7)V99.

PROCEDURE DIVISION.
DISPLAY "Entrez le salaire de l'employé : ".
ACCEPT SALARY.

COMPUTE SS-TAX = SALARY * 0.062.

DISPLAY "La taxe de sécurité sociale est de : $", SS-TAX.
STOP RUN.
```

Le résultat pourrait ressembler à ceci :

```text
// highlight-start
salary = float(input("Entrez le salaire de l'employé : "))
ss_tax = salary * 0.062

print("La taxe de sécurité sociale est de : $", round(ss_tax, 2))
// highlight-end
```

## Gestion de plusieurs fichiers et refactorisation de votre base de code

Et si vous voulez que ChatGPT évalue **plusieurs** fichiers ? Fournissez simplement les noms de fichiers et collez le code pour chacun :

```text
Mon script Python utilise deux fichiers, énumérés ci-dessous, dans des répertoires différents. Veuillez afficher la sortie de l'exécution de conversation.py :

DÉBUT DU FICHIER 1 : ./phrases/entrant_et_sortant.py
def salut(name):
   print(f"Salut, {name} !")
def aurevoir(name):
   print(f"Au revoir, {name} !")

DÉBUT DU FICHIER 2 : ./conversation.py
from phrases.entrant_et_sortant import salut, aurevoir
salut("Jean")
aurevoir("Jean")

// highlight-start
Salut, Jean!
Au revoir, Jean!
// highlight-end
```

En utilisant cette technique, vous pouvez soumettre plusieurs fichiers à ChatGPT dans un seul prompt et lui demander de refactoriser le code. Sinon, vous pouvez lui demander de "mémoriser" chacun d'eux et de l'exécuter dans un prompt ultérieur.

## Simulation d'un serveur de base de données

ChatGPT peut non seulement travailler avec du code, mais également simuler des environnements de serveur tels que des bases de données, des serveurs Web et des serveurs de courrier électronique. Considérez ce prompt :

```text
Agissez comme Microsoft SQL Server. Créez une base de données appelée "politique" et à l'intérieur une table appelée "politiciens". Remplissez-la de 50 lignes de politiciens célèbres du monde entier de différentes époques, 1900-2000. Ajoutez des colonnes pour leurs noms complets, leur pays, leur date de naissance et leur date de décès le cas échéant. Créez une vue pour les 3 meilleurs politiciens qui ont vécu le plus longtemps. Créez et exécutez une commande Transact-SQL qui affiche le contenu de cette vue.
```

Le résultat sera quelque chose comme :

```text
// highlight-start
-- Création de la base de données "politique"
CREATE DATABASE politique;
GO

-- Utilisation de la base de données "politique"
USE politique;
GO

-- Création de la table "politiciens"
CREATE TABLE politiciens (
    id INT PRIMARY KEY,
    nom_complet VARCHAR(50),
    pays VARCHAR(50),
    date_de_naissance DATE,
    date_de_deces DATE
);
-- etc.
// highlight-end
```

À partir de là, vous pouvez ajouter des colonnes, des index et plus encore :

```text
Ajoutez une colonne à la table des politiciens pour le commandant en second et mettez-la à jour pour chaque ligne.
```

Le résultat pourrait ressembler à ceci :

```text
// highlight-start
ALTER TABLE politiciens ADD commandant_en_second VARCHAR(255);

UPDATE politiciens
SET commandant_en_second =
    CASE nom
        WHEN 'Winston Churchill' THEN 'Clement Attlee'
        WHEN 'Franklin D. Roosevelt' THEN 'Harry S. Truman'
        WHEN 'Mao Zedong' THEN 'Lin Biao'
        -- ajouter plus de cas pour chaque politicien
        ELSE NULL
    END;
// highlight-end
```

## Simulation d'un serveur Web

ChatGPT peut simuler de nombreux autres serveurs et API. Voici un exemple d'un prompt qui simule une réponse de serveur Apache à des en-têtes de demande de navigateur spécifiques :

```text
Agissez comme un serveur Web Apache. Comment répondriez-vous à ces en-têtes HTTP ?

GET /exemple HTTP/1.1
Host: www.exemple.com
```

Le résultat sera quelque chose comme :

```text
// highlight-start
HTTP/1.1 200 OK
Date: [date et heure actuelles]
Server: Apache/2.4.41 (Ubuntu)
Last-Modified: [date et heure de la dernière modification de la ressource demandée]
Content-Type: [type MIME de la ressource demandée, par exemple text/html]
// highlight-end
```

Voici quelques-uns des types de serveurs et d'API que ChatGPT peut émuler :

| Très ancien | Ancien   | Récent                 | De pointe          |
| ----------- | -------- | ---------------------- | ------------------ |
| Telnet      | HTTP/1.0 | API RESTful            | API GraphQL        |
| FTP         | SMTP     | API SOAP               | API GRPC           |
| POP3        | LDAP     | OAuth 2.0              | API Docker         |
| IMAP        | DHCP     | OpenAPI (Swagger)      | API Kubernetes     |
| DNS         | NTP      | API gRPC-web           | API Istio          |
| SNMP        | RADIUS   | API MQTT               | API Prometheus     |
| Syslog      | SFTP     | API WebSocket          | API Envoy          |
| TFTP        | SSH      | API AWS Gateway        | API Istio Mixer    |
| NFS         | XML-RPC  | Gestion API Azure      | API OpenTracing    |
| SMB         | JSON-RPC | Google Cloud Endpoints | API NATS Streaming |

---

## Simulation d'une ligne de commande

Puisqu'un shell dans Linux (ou Windows PowerShell) est également un langage de programmation, vous pouvez interagir avec celui-ci en utilisant ChatGPT, et construire un environnement pour votre système de fichiers :

```text
Agissez comme un shell de commande Debian Linux. Veuillez répondre à mes commandes comme le ferait le terminal, avec le moins d'explication possible. Ma première commande est : ls -l
```

Le résultat sera quelque chose comme :

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
// highlight-end
```

Essayez d'expérimenter avec d'autres commandes :

```text
>touch greeting.txt
>echo "hello" > greeting.txt
>ls -l
```

ChatGPT devrait se souvenir de vos modifications (pendant un certain temps, du moins) et la sortie finale devrait ressembler à quelque chose comme :

```text
// highlight-start
-rw-r--r--  1 user  group   2048 Mar  3 14:23 file1.txt
drwxr-xr-x  2 user  group   4096 Feb 28 09:12 directory1
-rwx------  1 user  group  16384 Feb 25 19:41 executable1
-rw-r--r--  1 user  group      6 Mar  4 16:15 greeting.txt
// highlight-end
```

Une discussion complète sur l'utilisation de ChatGPT en tant que machine virtuelle peut être trouvée sur [engraved.blog](https://www.engraved.blog/building-a-virtual-machine-inside/).

---

Contribué par Prompt Yes !, une entreprise fournissant de la [formation en prompt engineering](https://promptyes.com/).
