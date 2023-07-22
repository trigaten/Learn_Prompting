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

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Gran producto, 10 de 10: positivo\nNo funcionó muy bien: negativo\nSuper útil, vale la pena: positivo\n¡No funciona!:" initial-response="negativo" max-tokens="256" box-rows="5" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

:::note
Cada par entrada-salida se denomina *ejemplar*.
:::

## Más sobre estructura

Un caso clave en el que se pueden utilizar algunas sugerencias es cuando se necesita que la salida esté estructurada de una forma específica que sea difícil de describir al modelo. Para entender esto, consideremos un ejemplo relevante: supongamos que necesita recopilar nombres y ocupaciones de ciudadanos conocidos en ciudades cercanas analizando artículos de periódicos locales. Le gustaría que el modelo leyera cada artículo y generara una lista de nombres y ocupaciones en formato `Apellido, Nombre [OCUPACIÓN]`. Para conseguir que el modelo haga esto, puede mostrarle algunos ejemplos:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="En la bulliciosa ciudad de Emerald Hills, un grupo diverso de personas dejó su huella. Sarah Martínez, una enfermera entregada a su trabajo, era conocida por sus cuidados compasivos en el hospital local. David Thompson, un innovador ingeniero de software, trabajaba incansablemente en proyectos pioneros que revolucionarían la industria tecnológica. Por su parte, Emily Nakamura, artista y muralista de talento, pintó obras vibrantes y sugerentes que adornaron las paredes de edificios y galerías por igual. Por último, Michael O'Connell, un ambicioso empresario, abrió una cafetería única y respetuosa con el medio ambiente que se convirtió rápidamente en el punto de encuentro favorito de la ciudad. Cada una de estas personas contribuyó al rico tapiz de la comunidad de Emerald Hills.\n1. Sarah Martinez [ENFERMERA]\n2. David Thompson [INGENIERO DE SOFTWARE]\n3. Emily Nakamura [ARTISTA]\n4. Michael O'Connell [EMPRENDEDOR]\n\nEn el corazón de la ciudad, el chef Oliver Hamilton ha transformado la escena culinaria con su restaurante de la granja a la mesa, Green Plate. La dedicación de Oliver a la búsqueda de ingredientes locales y ecológicos le ha valido críticas muy favorables tanto de los críticos gastronómicos como de los lugareños.\n\nJusto al final de la calle se encuentra la Biblioteca Riverside Grove, donde la bibliotecaria Elizabeth Chen ha trabajado con diligencia para crear un espacio acogedor e integrador para todos. Sus esfuerzos por ampliar la oferta de la biblioteca y establecer programas de lectura para niños han tenido un impacto significativo en los índices de alfabetización de la ciudad.\n\nMientras paseas por la encantadora plaza del pueblo, quedarás cautivado por los hermosos murales que adornan las paredes. Estas obras maestras son obra de la renombrada artista Isabella Torres, cuyo talento para capturar la esencia de Riverside Grove ha dado vida a la ciudad.\n\nLos logros deportivos de Riverside Grove también son dignos de mención, gracias al ex nadador olímpico reconvertido en entrenador Marcus Jenkins. Marcus ha utilizado su experiencia y pasión para entrenar a los jóvenes del pueblo, llevando al equipo de natación de Riverside Grove a varios campeonatos regionales.\n1. Oliver Hamilton [CHEF]\n2. Elizabeth Chen [BIBLIOTECARIA]\n3. Isabella Torres [ARTISTA]\n4. Marcus Jenkins [ENTRENADOR]\n\nOak Valley, un pueblo pequeño y encantador, es el hogar de un trío notable de personas cuyas habilidades y dedicación han dejado un impacto duradero en la comunidad.\n\nEn el bullicioso mercado de agricultores de la ciudad, encontrarás a Laura Simmons, una granjera orgánica apasionada conocida por sus deliciosos productos cultivados de manera sostenible. Su dedicación a la promoción de una alimentación saludable ha inspirado a la ciudad a adoptar un estilo de vida más consciente del medio ambiente.\n\nEn el centro comunitario de Oak Valley, Kevin Alvarez, un hábil instructor de baile, ha llevado la alegría del movimiento a personas de todas las edades. Sus clases de danza inclusivas han fomentado un sentido de unidad y autoexpresión entre los residentes, enriqueciendo la escena artística local.\n\nPor último, Rachel O'Connor, una incansable voluntaria, dedica su tiempo a diversas iniciativas benéficas. Su compromiso de mejorar la vida de los demás ha sido fundamental para crear un fuerte sentido de comunidad dentro de Oak Valley.\n\nA través de sus talentos únicos y dedicación inquebrantable, Laura, Kevin y Rachel se han entretejido en la estructura de Oak Valley, ayudando a crear una pequeña ciudad vibrante y próspera." initial-response="1. Laura Simmons [AGRICULTORA]\n2. Kevin Alvarez [PROFESOR DE BAILE]\n3. Rachel O'Connor [VOLUNTARIA]" max-tokens="616" box-rows="20" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

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

 