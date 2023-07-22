---
sidebar_position: 4
---

# 🟢 Few shot prompting

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>

Otra estrategia es la de los *few shot prompting*, que consiste básicamente en mostrar al modelo algunos ejemplos (llamados shots) de lo que quieres que haga.

Consideremos el ejemplo anterior, en el que intentamos clasificar las opiniones de los clientes como positivas o negativas. Mostramos al modelo 3 ejemplos de retroalimentación positiva/negativa y, a continuación, le mostramos una nueva retroalimentación que aún no ha sido clasificada (`¡No funciona!:`). El modelo ve que los 3 primeros ejemplos fueron clasificados como `positivos` o `negativos`, y utiliza esta información para clasificar el nuevo ejemplo como `negativo`.

La forma en que estructuramos los ejemplos es muy importante. Como hemos estructurado estos 3 ejemplos como `entrada: clasificación`, el modelo emite una sola palabra después de la última línea, en lugar de decir una frase completa como `esta reseña es positiva`.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
Cada par entrada-salida se denomina *ejemplar*.
:::

## Más sobre estructura

Un caso clave en el que se pueden utilizar algunas sugerencias es cuando se necesita que la salida esté estructurada de una forma específica que sea difícil de describir al modelo. Para entender esto, consideremos un ejemplo relevante: supongamos que necesita recopilar nombres y ocupaciones de ciudadanos conocidos en ciudades cercanas analizando artículos de periódicos locales. Le gustaría que el modelo leyera cada artículo y generara una lista de nombres y ocupaciones en formato `Apellido, Nombre [OCUPACIÓN]`. Para conseguir que el modelo haga esto, puede mostrarle algunos ejemplos:

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJFbiBsYSBidWxsaWNpb3NhIGNpdWRhZCBkZSBFbWVyYWxkIEhpbGxzLCB1biBncnVwbyBkaXZlcnNvIGRlIHBlcnNvbmFzIGRlasOzIHN1IGh1ZWxsYS4gU2FyYWggTWFydMOtbmV6LCB1bmEgZW5mZXJtZXJhIGVudHJlZ2FkYSBhIHN1IHRyYWJham8sIGVyYSBjb25vY2lkYSBwb3Igc3VzIGN1aWRhZG9zIGNvbXBhc2l2b3MgZW4gZWwgaG9zcGl0YWwgbG9jYWwuIERhdmlkIFRob21wc29uLCB1biBpbm5vdmFkb3IgaW5nZW5pZXJvIGRlIHNvZnR3YXJlLCB0cmFiYWphYmEgaW5jYW5zYWJsZW1lbnRlIGVuIHByb3llY3RvcyBwaW9uZXJvcyBxdWUgcmV2b2x1Y2lvbmFyw61hbiBsYSBpbmR1c3RyaWEgdGVjbm9sw7NnaWNhLiBQb3Igc3UgcGFydGUsIEVtaWx5IE5ha2FtdXJhLCBhcnRpc3RhIHkgbXVyYWxpc3RhIGRlIHRhbGVudG8sIHBpbnTDsyBvYnJhcyB2aWJyYW50ZXMgeSBzdWdlcmVudGVzIHF1ZSBhZG9ybmFyb24gbGFzIHBhcmVkZXMgZGUgZWRpZmljaW9zIHkgZ2FsZXLDrWFzIHBvciBpZ3VhbC4gUG9yIMO6bHRpbW8sIE1pY2hhZWwgTydDb25uZWxsLCB1biBhbWJpY2lvc28gZW1wcmVzYXJpbywgYWJyacOzIHVuYSBjYWZldGVyw61hIMO6bmljYSB5IHJlc3BldHVvc2EgY29uIGVsIG1lZGlvIGFtYmllbnRlIHF1ZSBzZSBjb252aXJ0acOzIHLDoXBpZGFtZW50ZSBlbiBlbCBwdW50byBkZSBlbmN1ZW50cm8gZmF2b3JpdG8gZGUgbGEgY2l1ZGFkLiBDYWRhIHVuYSBkZSBlc3RhcyBwZXJzb25hcyBjb250cmlidXnDsyBhbCByaWNvIHRhcGl6IGRlIGxhIGNvbXVuaWRhZCBkZSBFbWVyYWxkIEhpbGxzLlxuMS4gU2FyYWggTWFydGluZXogW0VORkVSTUVSQV1cbjIuIERhdmlkIFRob21wc29uIFtJTkdFTklFUk8gREUgU09GVFdBUkVdXG4zLiBFbWlseSBOYWthbXVyYSBbQVJUSVNUQV1cbjQuIE1pY2hhZWwgTydDb25uZWxsIFtFTVBSRU5ERURPUl1cblxuRW4gZWwgY29yYXrDs24gZGUgbGEgY2l1ZGFkLCBlbCBjaGVmIE9saXZlciBIYW1pbHRvbiBoYSB0cmFuc2Zvcm1hZG8gbGEgZXNjZW5hIGN1bGluYXJpYSBjb24gc3UgcmVzdGF1cmFudGUgZGUgbGEgZ3JhbmphIGEgbGEgbWVzYSwgR3JlZW4gUGxhdGUuIExhIGRlZGljYWNpw7NuIGRlIE9saXZlciBhIGxhIGLDunNxdWVkYSBkZSBpbmdyZWRpZW50ZXMgbG9jYWxlcyB5IGVjb2zDs2dpY29zIGxlIGhhIHZhbGlkbyBjcsOtdGljYXMgbXV5IGZhdm9yYWJsZXMgdGFudG8gZGUgbG9zIGNyw610aWNvcyBnYXN0cm9uw7NtaWNvcyBjb21vIGRlIGxvcyBsdWdhcmXDsW9zLlxuXG5KdXN0byBhbCBmaW5hbCBkZSBsYSBjYWxsZSBzZSBlbmN1ZW50cmEgbGEgQmlibGlvdGVjYSBSaXZlcnNpZGUgR3JvdmUsIGRvbmRlIGxhIGJpYmxpb3RlY2FyaWEgRWxpemFiZXRoIENoZW4gaGEgdHJhYmFqYWRvIGNvbiBkaWxpZ2VuY2lhIHBhcmEgY3JlYXIgdW4gZXNwYWNpbyBhY29nZWRvciBlIGludGVncmFkb3IgcGFyYSB0b2Rvcy4gU3VzIGVzZnVlcnpvcyBwb3IgYW1wbGlhciBsYSBvZmVydGEgZGUgbGEgYmlibGlvdGVjYSB5IGVzdGFibGVjZXIgcHJvZ3JhbWFzIGRlIGxlY3R1cmEgcGFyYSBuacOxb3MgaGFuIHRlbmlkbyB1biBpbXBhY3RvIHNpZ25pZmljYXRpdm8gZW4gbG9zIMOtbmRpY2VzIGRlIGFsZmFiZXRpemFjacOzbiBkZSBsYSBjaXVkYWQuXG5cbk1pZW50cmFzIHBhc2VhcyBwb3IgbGEgZW5jYW50YWRvcmEgcGxhemEgZGVsIHB1ZWJsbywgcXVlZGFyw6FzIGNhdXRpdmFkbyBwb3IgbG9zIGhlcm1vc29zIG11cmFsZXMgcXVlIGFkb3JuYW4gbGFzIHBhcmVkZXMuIEVzdGFzIG9icmFzIG1hZXN0cmFzIHNvbiBvYnJhIGRlIGxhIHJlbm9tYnJhZGEgYXJ0aXN0YSBJc2FiZWxsYSBUb3JyZXMsIGN1eW8gdGFsZW50byBwYXJhIGNhcHR1cmFyIGxhIGVzZW5jaWEgZGUgUml2ZXJzaWRlIEdyb3ZlIGhhIGRhZG8gdmlkYSBhIGxhIGNpdWRhZC5cblxuTG9zIGxvZ3JvcyBkZXBvcnRpdm9zIGRlIFJpdmVyc2lkZSBHcm92ZSB0YW1iacOpbiBzb24gZGlnbm9zIGRlIG1lbmNpw7NuLCBncmFjaWFzIGFsIGV4IG5hZGFkb3Igb2zDrW1waWNvIHJlY29udmVydGlkbyBlbiBlbnRyZW5hZG9yIE1hcmN1cyBKZW5raW5zLiBNYXJjdXMgaGEgdXRpbGl6YWRvIHN1IGV4cGVyaWVuY2lhIHkgcGFzacOzbiBwYXJhIGVudHJlbmFyIGEgbG9zIGrDs3ZlbmVzIGRlbCBwdWVibG8sIGxsZXZhbmRvIGFsIGVxdWlwbyBkZSBuYXRhY2nDs24gZGUgUml2ZXJzaWRlIEdyb3ZlIGEgdmFyaW9zIGNhbXBlb25hdG9zIHJlZ2lvbmFsZXMuXG4xLiBPbGl2ZXIgSGFtaWx0b24gW0NIRUZdXG4yLiBFbGl6YWJldGggQ2hlbiBbQklCTElPVEVDQVJJQV1cbjMuIElzYWJlbGxhIFRvcnJlcyBbQVJUSVNUQV1cbjQuIE1hcmN1cyBKZW5raW5zIFtFTlRSRU5BRE9SXVxuXG5PYWsgVmFsbGV5LCB1biBwdWVibG8gcGVxdWXDsW8geSBlbmNhbnRhZG9yLCBlcyBlbCBob2dhciBkZSB1biB0csOtbyBub3RhYmxlIGRlIHBlcnNvbmFzIGN1eWFzIGhhYmlsaWRhZGVzIHkgZGVkaWNhY2nDs24gaGFuIGRlamFkbyB1biBpbXBhY3RvIGR1cmFkZXJvIGVuIGxhIGNvbXVuaWRhZC5cblxuRW4gZWwgYnVsbGljaW9zbyBtZXJjYWRvIGRlIGFncmljdWx0b3JlcyBkZSBsYSBjaXVkYWQsIGVuY29udHJhcsOhcyBhIExhdXJhIFNpbW1vbnMsIHVuYSBncmFuamVyYSBvcmfDoW5pY2EgYXBhc2lvbmFkYSBjb25vY2lkYSBwb3Igc3VzIGRlbGljaW9zb3MgcHJvZHVjdG9zIGN1bHRpdmFkb3MgZGUgbWFuZXJhIHNvc3RlbmlibGUuIFN1IGRlZGljYWNpw7NuIGEgbGEgcHJvbW9jacOzbiBkZSB1bmEgYWxpbWVudGFjacOzbiBzYWx1ZGFibGUgaGEgaW5zcGlyYWRvIGEgbGEgY2l1ZGFkIGEgYWRvcHRhciB1biBlc3RpbG8gZGUgdmlkYSBtw6FzIGNvbnNjaWVudGUgZGVsIG1lZGlvIGFtYmllbnRlLlxuXG5FbiBlbCBjZW50cm8gY29tdW5pdGFyaW8gZGUgT2FrIFZhbGxleSwgS2V2aW4gQWx2YXJleiwgdW4gaMOhYmlsIGluc3RydWN0b3IgZGUgYmFpbGUsIGhhIGxsZXZhZG8gbGEgYWxlZ3LDrWEgZGVsIG1vdmltaWVudG8gYSBwZXJzb25hcyBkZSB0b2RhcyBsYXMgZWRhZGVzLiBTdXMgY2xhc2VzIGRlIGRhbnphIGluY2x1c2l2YXMgaGFuIGZvbWVudGFkbyB1biBzZW50aWRvIGRlIHVuaWRhZCB5IGF1dG9leHByZXNpw7NuIGVudHJlIGxvcyByZXNpZGVudGVzLCBlbnJpcXVlY2llbmRvIGxhIGVzY2VuYSBhcnTDrXN0aWNhIGxvY2FsLlxuXG5Qb3Igw7psdGltbywgUmFjaGVsIE8nQ29ubm9yLCB1bmEgaW5jYW5zYWJsZSB2b2x1bnRhcmlhLCBkZWRpY2Egc3UgdGllbXBvIGEgZGl2ZXJzYXMgaW5pY2lhdGl2YXMgYmVuw6lmaWNhcy4gU3UgY29tcHJvbWlzbyBkZSBtZWpvcmFyIGxhIHZpZGEgZGUgbG9zIGRlbcOhcyBoYSBzaWRvIGZ1bmRhbWVudGFsIHBhcmEgY3JlYXIgdW4gZnVlcnRlIHNlbnRpZG8gZGUgY29tdW5pZGFkIGRlbnRybyBkZSBPYWsgVmFsbGV5LlxuXG5BIHRyYXbDqXMgZGUgc3VzIHRhbGVudG9zIMO6bmljb3MgeSBkZWRpY2FjacOzbiBpbnF1ZWJyYW50YWJsZSwgTGF1cmEsIEtldmluIHkgUmFjaGVsIHNlIGhhbiBlbnRyZXRlamlkbyBlbiBsYSBlc3RydWN0dXJhIGRlIE9hayBWYWxsZXksIGF5dWRhbmRvIGEgY3JlYXIgdW5hIHBlcXVlw7FhIGNpdWRhZCB2aWJyYW50ZSB5IHByw7NzcGVyYS4iLCJvdXRwdXQiOiIxLiBMYXVyYSBTaW1tb25zIFtBR1JJQ1VMVE9SQV1cbjIuIEtldmluIEFsdmFyZXogW1BST0ZFU09SIERFIEJBSUxFXVxuMy4gUmFjaGVsIE8nQ29ubm9yIFtWT0xVTlRBUklBXSIsIm1heFRva2VucyI6NjE2LCJib3hSb3dzIjoyMCwidGVtcGVyYXR1cmUiOjAsInRvcFAiOjB9"
    style={{width:"100%", height:"1000px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Al mostrar los ejemplos del modelo del formato de salida correcto, puede producir la salida correcta para nuevos artículos.

:::note
Aunque podría producir este mismo resultado usando un prompt, el few-shot prompt ayuda a que el resultado sea mucho más *consistente*.
:::

## Variantes del shot prompting

La palabra "shot" es sinónimo de "ejemplo". Además del few-shot prompting, existen otros dos tipos de shot prompting. ¡No lo pienses tanto! La única diferencia entre esas variantes es cuantos ejemplos le muestras al modelo.

Variantes:
- 0 shot prompting: Sin mostrar ejemplos al modelo
- 1 shot prompting: 1 ejemplo mostrado al modelo
- few shot prompting: 2+ ejemplos mostrados al modelo

### 0-shot prompting

0-shot prompting es la forma mas básica de prompting. Este simplemente muestra al modelo un mensaje sin ejemplos y le pide que genere una respuesta. Como tal, todas las instrucciones y prompts de rol que has visto hasta ahora son 0-shot prompts. Un ejemplo adicional de un 0-shot prompt es:

```text
Suma 2+2:
```

Este es 0-shot ya que no le hemos mostrado al modelo ningún ejemplo completo.

### 1-shot prompting

1-shot prompting es cuando le muestras al modelo un solo ejemplo. Por ejemplo, el análogo 1-shot del prompt 0-shot `Suma 2+2:` es:
  
```text
Suma 3+3: 6
Suma 2+2:
```

Hemos mostrado al modelo un solo ejemplo completo (`Suma 3+3: 6`), así que este es un 1-shot prompt.

### Few-shot prompting

Few-shot prompting es cuando le muestras al modelo 2 o más ejemplos. Todos los prompts por encima de esta sección de variantes han sido few-shot prompts. El análogo few-shot de los dos prompts de arriba es:

```text
Suma 3+3: 6
Suma 5+5: 10
Suma 2+2:
```

Este es el caso ya que hemos mostrado al modelo al menos 2 ejemplos completos (`Suma 3+3: 6` y `Suma 5+5: 10`). Por lo general, cuantos más ejemplos se muestren al modelo, mejor será el resultado, por lo que en la mayoría de los casos es preferible usar few-shot prompting a 0-shot y 1-shot prompting en la mayoría de los casos.


## Conclusión

¡Few-shot prompting es una técnica poderosa para hacer que el modelo produzca resultados precisos y en el formato adecuado!

 