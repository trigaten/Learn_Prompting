---
sidebar_position: 0
---

# 🟢 Introducción

import Techniques from '@site/docs/assets/basics/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

This chapter introduces simple prompting techniques as well as terminology. In order to understand prompting/prompt engineering, you first need to understand some *very* basic AI concepts. If you already know about the below topics, feel free to skip ahead to the [next article](https://learnprompting.org/docs/basics/prompting).

## ¿Qué es la IA?

Para nuestros propósitos, la inteligencia artificial (IA) es un campo en el que las personas han creado algoritmos "inteligentes" que "piensan" como humanos[^1]. Estos algoritmos pueden escribir **ensayos**, resuelve **problemas matemáticos** y crea **arte**. Los avances recientes en el campo han creado IA tan avanzados que pueden escribir convincentes **correos electrónicos de ventas**, **artículos de noticias** e incluso **ganar [concursos de arte](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/)**.

AI actualmente está revolucionando muchas industrias, incluyendo **periodismo**, **salud** y **educación**. Es probable que pronto lo vea en su lugar de trabajo/aula si no lo ha hecho ya. Aunque la IA es extremadamente útil, requiere que los humanos la dirijan. A menudo, las IA son como niños muy inteligentes de cinco años. Pueden hacer muchas cosas, pero necesitan instrucciones cuidadosas para hacerlas bien.

Ser capaz de dirigir correctamente las IA es una habilidad muy poderosa. Pero, ¿cómo te comunicas con ellas? Las IA que se analizan en este curso entienden inglés (y otros idiomas), por lo que, por lo general, solo podemos describir las tareas que queremos que se realicen. Por ejemplo, podemos decirle a una IA que `Escriba un ensayo sobre los beneficios de la IA` y diría[^2]:

```
En los últimos años, la Inteligencia Artificial (IA) se ha convertido en un tema candente en el mundo de la tecnología. Con su potencial para revolucionar muchos aspectos de nuestras vidas, la IA se está volviendo cada vez más relevante a medida que la tecnología continúa desarrollándose. Desde sus aplicaciones en el cuidado de la salud y el transporte hasta su uso en la educación y la fabricación, la IA ya nos ha demostrado su inmenso potencial para beneficiar a la sociedad de múltiples maneras.

El beneficio más obvio de la IA es su capacidad para automatizar tareas mundanas. Los sistemas de IA se pueden utilizar para automatizar operaciones a gran escala, como el análisis de datos, el servicio al cliente e incluso la producción de bienes. Esto libera el trabajo humano para centrarse en tareas complejas y creativas que requieren más inteligencia e ingenio humano. La IA también se puede utilizar para analizar grandes cantidades de datos y tomar decisiones en una fracción del tiempo que le llevaría a un ser humano. Esto puede ser beneficioso en industrias como la financiera, donde la IA puede detectar patrones en el mercado de valores y ofrecer información que de otro modo pasaría desapercibida.

La IA también se puede usar para hacer predicciones y generar información que se puede usar para mejorar la eficiencia y la precisión. Por ejemplo, la IA se puede utilizar para predecir las tendencias y preferencias de los clientes, lo que ayuda a las empresas a tomar mejores decisiones y aumentar las ganancias. La IA también se puede utilizar para identificar riesgos y oportunidades potenciales en diversas industrias, como finanzas, atención médica y fabricación. Esto puede ayudar a las empresas a tomar decisiones informadas y reducir el riesgo de errores costosos.

Finalmente, la IA se puede utilizar para mejorar nuestra comprensión del mundo. La IA se puede utilizar para analizar grandes conjuntos de datos y generar conocimientos que se pueden utilizar para comprender mejor el mundo que nos rodea. Esto se puede usar para ayudarnos a comprender mejor los impactos del cambio climático, desarrollar nuevos tratamientos para enfermedades e incluso predecir eventos como terremotos e inundaciones.

En general, la IA tiene el potencial de revolucionar muchos aspectos de nuestras vidas. Desde la automatización de tareas mundanas hasta la generación de conocimientos y predicciones, la IA se puede utilizar para mejorar la eficiencia, la precisión y nuestra comprensión del mundo. A medida que la tecnología continúa desarrollándose, la IA se volverá cada vez más relevante y su potencial para beneficiar a la sociedad solo crecerá.
```

## ¿Por qué debería interesarme?

La IA se puede utilizar para automatizar tareas en las que dedica incontables horas *ahora mismo*. Mencionamos varios ejemplos arriba, pero también puedes considerar cualquier tarea ligeramente repetitiva que hagas. Podría ser escribir correos electrónicos, escribir informes o incluso escribir código. Si puedes describir la tarea. a una IA, es probable que pueda hacerlo por usted o al menos darle un punto de partida.

## ¿Cómo comenzar?

Lea el resto de este capítulo, luego consulte otros capítulos que le interesen. En particular, la sección de indicaciones aplicadas puede ser de su interés si desea para ver cómo los profesionales utilizan la IA para automatizar su trabajo. Puedes experimentar con IA usando recursos como [Playground](https://beta.openai.com/playground), [otros IDE](https://learnprompting.org/docs/IDEs/intro), o simplemente usando las interacciones embebidas de [Dyno](https://trydyno.com) que verá en este sitio.

Antes de leer el siguiente artículo, es importante tener en cuenta que no necesita conocimientos técnicos para realizar PE. La mayor parte es prueba y error, y puedes aprender sobre la marcha.

### Embeds

This course offers an interactive learning experience. You can experiment with exercises discussed in the course using [embeds](https://embed.learnprompting.org/) that are placed throughout the site.

Here is an **image** of what an embed looks like:

import dyno from '@site/docs/assets/basics/dyno_example.webp';
import key from '@site/docs/assets/basics/API_key.webp';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}} />
</div>

You should be able to see an embed that looks exactly like this image right below this paragraph. If you can't, you may need to enable JavaScript or use a different browser.

<hr />
Embed here:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr />

Assuming that you can see it, click on the **Generate** button. If this is your first time using it (or you are in a new browser/have cleared cookies), it will ask you to input an [OpenAI API key](https://platform.openai.com/account/api-keys). You can get a free key by clicking [this link](https://platform.openai.com/account/api-keys) and signing up for an OpenAI account. This key allows you to use OpenAI's AIs to generate text in the embeds.

:::note
Although OpenAI provides free credits, you will eventually have to pay to use their AI. Fortunately, it is [relatively cheap](https://openai.com/pricing)!
:::

When you navigate to the [OpenAI API key](https://platform.openai.com/account/api-keys) page, click the **Create new secret key** button. It will pop up a modal that contains a string of text like this:

<div style={{textAlign: 'center'}}>
  <img src={key} style={{width: "750px"}} />
</div>

Put this key into the embed and hit **Save**. You should now be able to use the embeds throughout this site.

Now you have all of the information that you need to get started. Happy Learning!


[^1]: Técnicamente, no están "pensando" como humanos, pero esta es una forma sencilla de explicarlo.
[^2]: Una IA (GPT-3 davinci-003) de hecho escribió esto.
