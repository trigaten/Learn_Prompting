---
sidebar_position: 4
---

# 🟢 Few shot prompting

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>

Une autre stratégie de prompting est le _prompting en few-shot_, qui consiste essentiellement à montrer au modèle quelques exemples (appelés "shots" en anglais) de ce que vous voulez qu'il fasse.

Considérons l'exemple ci-dessus, dans lequel nous essayons de classer/classifier les commentaires des clients comme positifs ou négatifs. Nous montrons au modèle 3 exemples de commentaires positifs/négatifs, puis nous lui montrons un nouveau commentaire qui n'a pas encore été classé (`Ça marche pas !:`). Le modèle voit que les 3 premiers exemples ont été classés comme étant `positifs` ou `négatifs`, et utilise ces informations pour classer le nouvel exemple comme `négatif`.

La façon dont nous structurons les exemples est très importante. Étant donné que nous avons structuré ces 3 exemples comme `entrée : classement/classification`, le modèle produit un seul mot après la dernière ligne, au lieu de dire une phrase complète comme `cette critique est positive`.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
Chaque paire entrée-sortie est appelée un _exemple_.
:::

## Plus sur la structure

Un cas d'utilisation clé pour la technique de prompting few-shot est lorsque vous avez besoin que la sortie soit **structurée de manière spécifique** qui est difficile à décrire au modèle. Pour comprendre cela, considérons un exemple pertinent : disons que vous devez compiler les noms et les professions de citoyens célèbres dans les villes voisines en analysant des articles de journaux locaux. Vous aimeriez que le modèle lise chaque article et produise une liste de noms et de professions au format `Nom, Prénom [PROFESSION]`. Pour amener le modèle à faire cela, vous pouvez lui montrer quelques exemples :

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJEYW5zIGxhIHZpbGxlIGFuaW3DqWUgZGUgRW1lcmFsZCBIaWxscywgdW4gZ3JvdXBlIGRpdmVyc2lmacOpIGRlIHBlcnNvbm5lcyBhIG1hcnF1w6kgc29uIGVtcHJlaW50ZS4gU2FyYWggTWFydGluZXosIHVuZSBpbmZpcm1pw6hyZSBkw6l2b3XDqWUsIMOpdGFpdCBjb25udWUgcG91ciBzZXMgc29pbnMgY29tcGF0aXNzYW50cyDDoCBsJ2jDtHBpdGFsIGxvY2FsLiBEYXZpZCBUaG9tcHNvbiwgdW4gaW5nw6luaWV1ciBsb2dpY2llbCBpbm5vdmFudCwgdHJhdmFpbGxhaXQgc2FucyByZWzDomNoZSBzdXIgZGVzIHByb2pldHMgcsOpdm9sdXRpb25uYWlyZXMgcXVpIGFsbGFpZW50IHRyYW5zZm9ybWVyIGwnaW5kdXN0cmllIHRlY2hub2xvZ2lxdWUuIFBlbmRhbnQgY2UgdGVtcHMsIEVtaWx5IE5ha2FtdXJhLCB1bmUgYXJ0aXN0ZSBldCBtdXJhbGlzdGUgdGFsZW50dWV1c2UsIGEgcGVpbnQgZGVzIHBpw6hjZXMgdmlicmFudGVzIGV0IHByb3ZvY2FudGVzIHF1aSBvbnQgb3Juw6kgbGVzIG11cnMgZGVzIGLDonRpbWVudHMgZXQgZGVzIGdhbGVyaWVzLiBFbmZpbiwgTWljaGFlbCBPJ0Nvbm5lbGwsIHVuIGVudHJlcHJlbmV1ciBhbWJpdGlldXgsIGEgb3V2ZXJ0IHVuIGNhZsOpIHVuaXF1ZSBldCDDqWNvbG9naXF1ZSBxdWkgZXN0IHJhcGlkZW1lbnQgZGV2ZW51IGxlIGxpZXUgZGUgcmVuY29udHJlIHByw6lmw6lyw6kgZGUgbGEgdmlsbGUuIENoYWN1bmUgZGUgY2VzIHBlcnNvbm5lcyBhIGNvbnRyaWJ1w6kgw6AgbGEgcmljaGUgdGFwaXNzZXJpZSBkZSBsYSBjb21tdW5hdXTDqSBkJ0VtZXJhbGQgSGlsbHMuXG4xLiBTYXJhaCBNYXJ0aW5leiBbSU5GSVJNScOIUkVdXG4yLiBEYXZpZCBUaG9tcHNvbiBbSU5Hw4lOSUVVUiBMT0dJQ0lFTF1cbjMuIEVtaWx5IE5ha2FtdXJhIFtBUlRJU1RFXVxuNC4gTWljaGFlbCBPJ0Nvbm5lbGwgW0VOVFJFUFJFTkVVUl1cblxuQXUgY8WTdXIgZGUgbGEgdmlsbGUsIGxlIGNoZWYgT2xpdmVyIEhhbWlsdG9uIGEgdHJhbnNmb3Jtw6kgbGEgc2PDqG5lIGN1bGluYWlyZSBhdmVjIHNvbiByZXN0YXVyYW50IGRlIGxhIGZlcm1lIMOgIGxhIHRhYmxlLCBHcmVlbiBQbGF0ZS4gTGEgZMOpZGljYXRpb24gZCdPbGl2ZXIgw6AgbGEgcmVjaGVyY2hlIGRlIHByb2R1aXRzIGxvY2F1eCBldCBiaW9sb2dpcXVlcyBhIHZhbHUgw6AgbCfDqXRhYmxpc3NlbWVudCBkZXMgY3JpdGlxdWVzIMOpbG9naWV1c2VzIGRlIGxhIHBhcnQgZGVzIGNyaXRpcXVlcyBnYXN0cm9ub21pcXVlcyBldCBkZXMgaGFiaXRhbnRzLlxuXG5KdXN0ZSBlbiBiYXMgZGUgbGEgcnVlLCB2b3VzIHRyb3V2ZXJleiBsYSBiaWJsaW90aMOocXVlIFJpdmVyc2lkZSBHcm92ZSwgb8O5IGxhIGJpYmxpb3Row6ljYWlyZSBlbiBjaGVmIEVsaXphYmV0aCBDaGVuIGEgdHJhdmFpbGzDqSBhdmVjIGRpbGlnZW5jZSBwb3VyIGNyw6llciB1biBlc3BhY2UgYWNjdWVpbGxhbnQgZXQgaW5jbHVzaWYgcG91ciB0b3VzLiBTZXMgZWZmb3J0cyBwb3VyIMOpbGFyZ2lyIGxlcyBvZmZyZXMgZGUgbGEgYmlibGlvdGjDqHF1ZSBldCDDqXRhYmxpciBkZXMgcHJvZ3JhbW1lcyBkZSBsZWN0dXJlIHBvdXIgbGVzIGVuZmFudHMgb250IGV1IHVuIGltcGFjdCBzaWduaWZpY2F0aWYgc3VyIGxlcyB0YXV4IGRlIGxpdHTDqXJhdGllIGRlIGxhIHZpbGxlLlxuXG5FbiB2b3VzIHByb21lbmFudCBkYW5zIGxhIGNoYXJtYW50ZSBwbGFjZSBkZSBsYSB2aWxsZSwgdm91cyBzZXJleiBjYXB0aXbDqSBwYXIgbGVzIGJlYXV4IG11cmF1eCBxdWkgb3JuZW50IGxlcyBtdXJzLiBDZXMgY2hlZnMtZCfFk3V2cmUgc29udCBsJ8WTdXZyZSBkZSBsJ2FydGlzdGUgcmVub21tw6llLCBJc2FiZWxsYSBUb3JyZXMsIGRvbnQgbGUgdGFsZW50IHBvdXIgY2FwdHVyZXIgbCdlc3NlbmNlIGRlIFJpdmVyc2lkZSBHcm92ZSBhIGRvbm7DqSB2aWUgw6AgbGEgdmlsbGUuXG5cbkxlcyByw6lhbGlzYXRpb25zIHNwb3J0aXZlcyBkZSBSaXZlcnNpZGUgR3JvdmUgbcOpcml0ZW50IMOpZ2FsZW1lbnQgZCfDqnRyZSBtZW50aW9ubsOpZXMsIGdyw6JjZSDDoCBsJ2FuY2llbiBuYWdldXIgb2x5bXBpcXVlIGRldmVudSBlbnRyYcOubmV1ciwgTWFyY3VzIEplbmtpbnMuIE1hcmN1cyBhIHV0aWxpc8OpIHNvbiBleHDDqXJpZW5jZSBldCBzYSBwYXNzaW9uIHBvdXIgZm9ybWVyIGxlcyBqZXVuZXMgZGUgbGEgdmlsbGUsIG1lbmFudCBsJ8OpcXVpcGUgZGUgbmF0YXRpb24gUml2ZXJzaWRlIEdyb3ZlIMOgIHBsdXNpZXVycyBjaGFtcGlvbm5hdHMgcsOpZ2lvbmF1eC5cbjEuIE9saXZlciBIYW1pbHRvbiBbQ0hFRl1cbjIuIEVsaXphYmV0aCBDaGVuIFtCSUJMSU9USMOJQ0FJUkVdXG4zLiBJc2FiZWxsYSBUb3JyZXMgW0FSVElTVEVdXG40LiBNYXJjdXMgSmVua2lucyBbRU5UUkHDjk5FVVJdXG5cbk9hayBWYWxsZXksIHVuZSBjaGFybWFudGUgcGV0aXRlIHZpbGxlLCBhYnJpdGUgdW4gcmVtYXJxdWFibGUgdHJpbyBkJ2luZGl2aWR1cyBkb250IGxlcyBjb21ww6l0ZW5jZXMgZXQgbGUgZMOpdm91ZW1lbnQgb250IGxhaXNzw6kgdW5lIGVtcHJlaW50ZSBkdXJhYmxlIHN1ciBsYSBjb21tdW5hdXTDqS5cblxuQXUgbWFyY2jDqSBmZXJtaWVyIGFuaW3DqSBkZSBsYSB2aWxsZSwgdm91cyB0cm91dmVyZXogTGF1cmEgU2ltbW9ucywgdW5lIHBhc3Npb25uw6llIGQnYWdyaWN1bHR1cmUgYmlvbG9naXF1ZSBjb25udWUgcG91ciBzZXMgcHJvZHVpdHMgZMOpbGljaWV1eCBldCBjdWx0aXbDqXMgZGUgbWFuacOocmUgZHVyYWJsZS4gU29uIGTDqXZvdWVtZW50IMOgIGxhIHByb21vdGlvbiBkJ3VuZSBhbGltZW50YXRpb24gc2FpbmUgYSBpbnNwaXLDqSBsYSB2aWxsZSDDoCBhZG9wdGVyIHVuIG1vZGUgZGUgdmllIHBsdXMgw6ljby1yZXNwb25zYWJsZS5cblxuRGFucyBsZSBjZW50cmUgY29tbXVuYXV0YWlyZSBkJ09hayBWYWxsZXksIEtldmluIEFsdmFyZXosIHVuIGluc3RydWN0ZXVyIGRlIGRhbnNlIGV4cMOpcmltZW50w6ksIGEgYXBwb3J0w6kgbGEgam9pZSBkdSBtb3V2ZW1lbnQgw6AgZGVzIHBlcnNvbm5lcyBkZSB0b3VzIMOiZ2VzLiBTZXMgY291cnMgZGUgZGFuc2UgaW5jbHVzaWZzIG9udCBmYXZvcmlzw6kgdW4gc2VudGltZW50IGQndW5pdMOpIGV0IGQnZXhwcmVzc2lvbiBkZSBzb2kgcGFybWkgbGVzIHLDqXNpZGVudHMsIGVucmljaGlzc2FudCBsYSBzY8OobmUgYXJ0aXN0aXF1ZSBsb2NhbGUuXG5cbkVuZmluLCBSYWNoZWwgTydDb25ub3IsIHVuZSBiw6luw6l2b2xlIGluZmF0aWdhYmxlLCBjb25zYWNyZSBzb24gdGVtcHMgw6AgZGl2ZXJzZXMgaW5pdGlhdGl2ZXMgY2FyaXRhdGl2ZXMuIFNvbiBlbmdhZ2VtZW50IMOgIGFtw6lsaW9yZXIgbGEgdmllIGRlcyBhdXRyZXMgYSDDqXTDqSBlc3NlbnRpZWwgZGFucyBsYSBjcsOpYXRpb24gZCd1biBmb3J0IHNlbnRpbWVudCBkZSBjb21tdW5hdXTDqSDDoCBPYWsgVmFsbGV5LlxuXG5HcsOiY2Ugw6AgbGV1cnMgdGFsZW50cyB1bmlxdWVzIGV0IGxldXIgZMOpdm91ZW1lbnQgaW5kw6lmZWN0aWJsZSwgTGF1cmEsIEtldmluIGV0IFJhY2hlbCBzZSBzb250IGluc2NyaXRzIGRhbnMgbGUgdGlzc3UgZCdPYWsgVmFsbGV5LCBjb250cmlidWFudCDDoCBjcsOpZXIgdW5lIHBldGl0ZSB2aWxsZSBkeW5hbWlxdWUgZXQgcHJvc3DDqHJlLiIsIm91dHB1dCI6IjEuIExhdXJhIFNpbW1vbnMgW0FHUklDVUxUUklDRV1cbjIuIEtldmluIEFsdmFyZXogW0lOU1RSVUNURVVSIERFIERBTlNFXVxuMy4gUmFjaGVsIE8nQ29ubm9yIFtCw4lOw4lWT0xFXSIsIm1heFRva2VucyI6NjE2LCJib3hSb3dzIjoyMCwidGVtcGVyYXR1cmUiOjAsInRvcFAiOjB9"
    style={{width:"100%", height:"1000px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

En montrant des exemples de format de sortie corrects au modèle, il est capable de produire une sortie correcte pour de nouveaux articles.

:::note
Même si vous pourriez produire cette même sortie en utilisant une instruction prompt à la place, le prompt few-shot aide à rendre la sortie beaucoup plus _cohérente_.
:::

## Variantes de shot prompting (prompting avec des exemples)

Le mot anglais "shot" est synonyme de "exemple". En dehors du prompting à few-shot ("quelques exemples"), il existe deux autres types de prompting par exemple. N'y pensez pas trop ! La seule différence entre ces variantes réside dans le nombre d'exemples que vous montrez au modèle.

Variantes :

- Prompting à 0-shot : aucun exemple n'est montré au modèle.
- Prompting à 1-shot : 1 exemple est montré au modèle.
- Prompting à few-shot : 2 exemples ou plus sont montrés au modèle.

### Prompting à 0-shot

Le prompting à 0-shot est la forme la plus basique du prompting. Il s'agit simplement de montrer au modèle une instruction sans exemple et de lui demander de générer une réponse. Ainsi, tous les prompts de rôle et d'instructions que vous avez vus jusqu'à présent sont des prompts à 0-shot. Un exemple supplémentaire de prompt à 0-shot est :

```text
Ajouter 2+2 :
```

C'est un prompt à 0-shot car nous n'avons montré au modèle aucun exemple complet.

### Prompting à 1-shot

Le prompting 1-shot consiste à montrer au modèle un seul exemple. Par exemple, l'analogie 1-shot du prompt 0-shot `Add 2+2:` est :

```text
Add 3+3 : 6
Add 2+2 :
```

Nous avons montré au modèle un seul exemple complet (`Add 3+3: 6`), donc il s'agit d'un prompt à 1-shot.

### Prompting à few-shot

Le prompting few-shot consiste à montrer au modèle 2 ou plusieurs exemples. Tous les prompts au-dessus de cette section de variantes ont été des prompts few-shot. L'équivalent few-shot des deux prompts ci-dessus est :

```text
Ajouter 3+3 : 6
Ajouter 5+5 : 10
Ajouter 2+2 :
```

Ceci est le cas puisque nous avons montré au modèle au moins 2 exemples complets (`Ajouter 3+3 : 6` et `Ajouter 5+5 : 10`). Habituellement, plus vous montrez d'exemples au modèle, meilleure sera la sortie, donc le prompting few-shot est préférable au prompting à 0-shot ou 1-shot dans la plupart des cas.

## Conclusion

Le prompting few-shot est une technique puissante pour rendre le modèle produire une sortie précise et correctement formatée !
