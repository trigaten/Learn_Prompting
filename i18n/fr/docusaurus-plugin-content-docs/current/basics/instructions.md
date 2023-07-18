---
sidebar_position: 2
---

# 🟢 Donner des instructions

import InstructionPrompt from '@site/docs/assets/basics/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

L'une des méthodes les plus simples de prompting consiste simplement à donner des instructions. We already saw a simple instruction in a previous section (`Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct:`). Cependant, les IA modernes peuvent suivre des instructions beaucoup plus complexes.

Vous trouverez ci-dessous un exemple d'intégration interactive Dyno. Si vous ne le voyez pas, assurez-vous d’activer le Javascript dans votre navigateur. Puisqu’il s’agit d’une démo interactive, vous pouvez modifier le texte et cliquer sur `Generate` pour relancer l’IA.

#### Exemple 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlxuXG5TaGFoLCBBYXl1c2giLCJwcm9tcHQiOiJBIHVzZXIgaGFzIGlucHV0IHRoZWlyIGZpcnN0IGFuZCBsYXN0IG5hbWUgaW50byBhIGZvcm0uIFdlIGRvbid0IGtub3cgaW4gd2hpY2ggb3JkZXIgdGhlaXIgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lIGFyZSwgYnV0IHdlIG5lZWQgaXQgdG8gYmUgaW4gdGhpcyBmb3JtYXQgJzxMYXN0IG5hbWU%2BLCA8Rmlyc3QgbmFtZT4nLiBcblxuUGxlYXNlIGNvbnZlcnQgdGhlIGZvbGxvd2luZyBuYW1lIGluIHRoZSBleHBlY3RlZCBmb3JtYXQ6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>L'IA est facilement capable de résoudre ce problème. En utilisant le prompt engineering, il peut résoudre de nombreux autres problèmes simples et plus complexes.

#### Exemple 2

Voici un exemple plus compliqué[^A] :

```
Lisez l'e-mail de vente suivant. Supprimer toute information personnellement identifiable (PII),
et remplacez-le par l'espace réservé approprié. Par exemple, remplacez le nom "John Doe"
avec "[NOM]".

Salut John,

Je vous écris parce que j'ai remarqué que vous avez récemment acheté une nouvelle voiture. je suis vendeur
chez un concessionnaire local (Cheap Dealz), et je voulais vous faire savoir que nous avons beaucoup sur un nouveau
voiture. Si vous êtes intéressé, merci de me le faire savoir.

Merci,

Jimmy Smith

Téléphone : 410-805-2345
```

Voici la [réponse de l'IA](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003) :

```text
Bonjour [NOM],

Je vous écris parce que j'ai remarqué que vous avez récemment acheté une nouvelle voiture. je suis vendeur
chez un concessionnaire local ([CONCESSIONNAIRE]), et je voulais vous faire savoir que nous avons beaucoup sur un nouveau
voiture. Si vous êtes intéressé, merci de me le faire savoir.

Merci,

[VENDEUR]

Téléphone : [NUMÉRO DE TÉLÉPHONE]
E-mail : [ADRESSE E-MAIL]
```

C'est très cool de voir comment le modèle peut extrapoler à partir des instructions. Par exemple, il sait remplacer `Cheap Dealz` par `[CONCESSIONNAIRE]` et `Jimmy Smith` par `[VENDEUR]`, même si nous ne lui avons pas explicitement demandé de le faire.

[^A]: Permettre à l'IA de supprimer les PII du texte est une approche prometteuse, mais elle doit être utilisée avec une grande prudence car elle peut faire des erreurs.


