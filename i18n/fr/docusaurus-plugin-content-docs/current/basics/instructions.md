---
sidebar_position: 2
---

# 🟢 Donner des instructions

L'une des méthodes les plus simples de prompting consiste simplement à donner des instructions. Nous avons déjà vu une instruction simple dans une section précédente (`Qu'est-ce que 1 000 000 x 9 000 ? Assurez-vous de mettre le bon nombre de zéros, même s'il y en a beaucoup :`). Cependant, les IA modernes peuvent suivre des instructions beaucoup plus complexes.

Vous trouverez ci-dessous un exemple d'intégration interactive Dyno. Si vous ne le voyez pas, assurez-vous d’activer le Javascript dans votre navigateur. Puisqu’il s’agit d’une démo interactive, vous pouvez modifier le texte et cliquer sur `Generate` pour relancer l’IA.

### Exemple 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlNtaXRoLCBKb2huIiwicHJvbXB0IjoiVW4gdXRpbGlzYXRldXIgYSBlbnRyw6kgc29uIHByw6lub20gZXQgc29uIG5vbSBkZSBmYW1pbGxlIGRhbnMgdW4gZm9ybXVsYWlyZS4gTm91cyBuZSBzYXZvbnMgcGFzIGRhbnMgcXVlbCBvcmRyZSBzb250IHNvbiBwcsOpbm9tIGV0IHNvbiBub20gZGUgZmFtaWxsZSwgbWFpcyBub3VzIGF2b25zIGJlc29pbiBxdSdpbCBzb2l0IGRhbnMgY2UgZm9ybWF0ICc8Tm9tIGRlIGZhbWlsbGU%2BLCA8UHLDqW5vbT4nLiBcblxuVmV1aWxsZXogY29udmVydGlyIGxlIG5vbSBzdWl2YW50IGRhbnMgbGUgZm9ybWF0IGF0dGVuZHUgOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

L'IA est facilement capable de résoudre ce problème. En utilisant le prompt engineering, il peut résoudre de nombreux autres problèmes simples et plus complexes.

### Exemple 2

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

```
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
