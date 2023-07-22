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
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
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

 