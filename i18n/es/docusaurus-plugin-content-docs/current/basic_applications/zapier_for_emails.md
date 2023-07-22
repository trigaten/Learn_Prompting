---
sidebar_position: 600
---

# 🟢 Zapier para Correos Electrónicos

import Basic from '@site/docs/assets/basic_applications/Zapiermail/Basic.webp';
import Diagram from '@site/docs/assets/basic_applications/Zapiermail/Diagram.webp';
import Step1 from '@site/docs/assets/basic_applications/Zapiermail/Step1.webp';
import Step2 from '@site/docs/assets/basic_applications/Zapiermail/Step2.webp';
import Step3 from '@site/docs/assets/basic_applications/Zapiermail/Step3.webp';
import Step4 from '@site/docs/assets/basic_applications/Zapiermail/Step4.webp';
import Zap from '@site/docs/assets/basic_applications/Zapiermail/Zap.webp';

## Introducción

Ya hemos visto lo útil que puede ser GPT-3 cuando se trata de correos electrónicos. Puede ser aún más útil cuando lo combinas con herramientas **sin código** como [Zapier](https://zapier.com) o [Bubble.io](https://bubble.io).

Este artículo contendrá un ejemplo de lo que Zapier+GPT-3 puede hacer con solo una pequeña cantidad de tiempo de configuración. Este artículo se centra en un ejemplo particular, pero las posibilidades son mucho mayores. Daremos algunos otros ejemplos en el camino. Ten en cuenta que también puedes hacer esto en Bubble.io. Hay muchas otras herramientas sin código, pero en el momento de escribir esto, solo unas pocas permiten usar GPT-3.

En este artículo te mostraremos cómo configurar un sistema simple en Zapier en el que los **correos electrónicos se resumen y se almacenan**. ¿Tienes una reunión con alguien? Consulta rápidamente los resúmenes de los correos electrónicos que has intercambiado con esa persona. Configurar esto lleva unos 20 minutos.

:::caution
Es útil conocer Zapier de antemano para este artículo. Si no lo conoces, puedes revisar esto:[articulo](https://zapier.com/learn/).
:::

## Idea General

A continuación se muestra un diagrama de lo que haremos en Zapier. Cada vez que llegue un correo electrónico a su bandeja de entrada, se activará Zapier. Hay cuatro pasos (por ahora):

1.  El correo electrónico llega y activa Zapier
1.  Se formatea el contenido del correo electrónico (para eliminar el marcado HTML, por ejemplo).
1.  Se envía a GPT-3 para ser resumido.
1.  Se almacena la salida en una base de datos.

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}}/>
</div>

## Configuración en Zapier

Asegúrate de tener una [cuenta de Zapier](https://zapier.com/sign-up) (puedes obtener una gratuita). Configurarlo debería ser bastante sencillo. Después de crear tu cuenta, expande la siguiente sección para ver descripciones completas de cada acción de Zapier que necesitamos crear.

<details>
  <summary>Expanda para una vista más detallada de los pasos en Zapier</summary>
  <div>
  Así es como finalmente se verá el diagrama de acción de Zapier.
    <div><div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
      Paso 1: Disparador de Gmail en nuevos correos electrónicos entrantes (se utiliza Gmail aquí)
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <LazyLoadImage src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
       Paso 2: Formatter para el contenido del correo electrónico
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step2} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Paso 3: Solicitando el contenido del correo electrónico
        <br/>
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step3} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Paso 4: Agregarlo a una base de datos
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step4} style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>
Aquí hay una configuración en Zapier que le permite hacer un resumen muy básico como se muestra en el diagrama. Tiene sus limitaciones, pero hace el trabajo y puede construir una base de datos útil.

## Optimizando la consulta para obtener mejores resultados

Hay algunas formas sencillas de mejorar tus resultados. Agregar contexto y prompts de rol pueden mejorar la salida. Sin embargo, el tema y el contenido de tus correos electrónicos pueden abarcar una amplia gama de temas. Esto significa que las instrucciones generales funcionarán mejor que las muy específicas, que podrían confundir al modelo.

Por razones prácticas, es útil dar una instrucción, seguida de decirle a GPT-3 dónde comienza el correo electrónico en el prompt simplemente agregando "Email: " y terminando el prompt con ""Summary": ". Esto evita que GPT-3 responda con "¡Claro! Puedo resumirlo para ti...".

El prompt de rol también puede ser útil aquí. Pedirle a GPT-3 que actúe como asistente personal ayuda a aumentar la calidad del resumen. Si quieres resumir correos electrónicos de trabajo, simplemente agregar el rol que tienes le da a GPT-3 contexto para trabajar. Actúa como si asumiera cierto nivel de conocimiento por parte del lector, lo que ayuda a filtrar las partes no relevantes del correo electrónico.

A continuación, mostramos algunos ejemplos con correos electrónicos que un administrador de oficina podría recibir.

Puedes pedir que resuma un correo electrónico simple en viñetas, sin embargo, esto puede no ser muy útil dependiendo de cómo quieras usar el resumen. Para un examen rápido de intercambios de correo electrónico, quizás solo quieras que sea corto y conciso. Simplemente pedir esto en el prompt funciona bien. A continuación, se muestra un ejemplo de este prompt. Ajusta y experimenta con él para ver cómo cambia.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
La respuesta aquí es aceptable y sería útil. Sin embargo, con algunos ajustes adicionales se puede obtener un mejor resultado. Como lector de los resúmenes, no le importa que sea un correo electrónico y es posible que desee un nivel de detalle menor para el resumen. La información sobre el porqué es irrelevante, lo mismo ocurre con la última oración sobre preguntas e inquietudes. Al agregar simplemente que el objetivo del resumen es permitirle revisar rápidamente el contenido y que se eliminen las formalidades, se puede mejorar el resultado.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJBY3TDumEgY29tbyBtaSBhc2lzdGVudGUgcGVyc29uYWwuIFNveSB1biBhZG1pbmlzdHJhZG9yIGRlIG9maWNpbmEuIFJlc3VtZSBlbCBzaWd1aWVudGUgY29ycmVvIGVsZWN0csOzbmljbyBsbyBtw6FzIGNvbmNpc2FtZW50ZSBwb3NpYmxlLCBpZ25vcmFuZG8gZWwgZW5jYWJlemFkbywgcGllIGRlIHDDoWdpbmEgeSBjdWFscXVpZXIgY29ycmVvIGVsZWN0csOzbmljbyBhbnRlcmlvci4gUXVpZXJvIHVzYXIgZWwgcmVzdW1lbiBwYXJhIHJldmlzYXIgcsOhcGlkYW1lbnRlIGxvcyBjb3JyZW9zIGVsZWN0csOzbmljb3MuIEVsaW1pbmEgY3VhbHF1aWVyIGZvcm1hbGlkYWQuIFxuXG5Db3JyZW8gRWxlY3Ryw7NuaWNvOlNvbGljaXR1ZCBkZSBzdW1pbmlzdHJvcyBkZSBvZmljaW5hIGFkaWNpb25hbGVzIEVzdGltYWRvIEFkbWluaXN0cmFkb3IgZGUgT2ZpY2luYSwgTWUgZGlyaWpvIGEgdXN0ZWQgcGFyYSBzb2xpY2l0YXIgc3VtaW5pc3Ryb3MgZGUgb2ZpY2luYSBhZGljaW9uYWxlcyBwYXJhIG51ZXN0cm8gZXF1aXBvLiBDb21vIHNhYmUsIMO6bHRpbWFtZW50ZSBoZW1vcyBlc3RhZG8gZXhwZXJpbWVudGFuZG8gdW4gYWx0byB2b2x1bWVuIGRlIHRyYWJham8geSBoZW1vcyBlc3RhZG8gdXRpbGl6YW5kbyBudWVzdHJvcyBzdW1pbmlzdHJvcyBhIHVuIHJpdG1vIG3DoXMgcsOhcGlkbyBkZSBsbyBoYWJpdHVhbC4gQWdyYWRlY2Vyw61hbW9zIG11Y2hvIHNpIHB1ZGllcmEgcHJvcG9yY2lvbmFybm9zIGxvcyBzaWd1aWVudGVzIGVsZW1lbnRvczogUGFwZWwgZGUgaW1wcmVzb3JhIENhcnR1Y2hvcyBkZSB0aW50YSBwYXJhIGxhIGltcHJlc29yYSBIUCBlbiBsYSBzYWxhIGRlIGNvbmZlcmVuY2lhcyBOb3RhcyBhZGhlc2l2YXMgQ2xpcHMgZGUgY2FycGV0YSBNYXJjYWRvcmVzIFBvciBmYXZvciwgaMOhZ2Fub3Mgc2FiZXIgY3XDoW5kbyBwb2RlbW9zIGVzcGVyYXIgbGEgZW50cmVnYSBkZSBsb3Mgc3VtaW5pc3Ryb3MuIEdyYWNpYXMgcG9yIHN1IGF5dWRhLiBcblxuQXRlbnRhbWVudGUsIFR1IE5vbWJyZTpcbiIsIm91dHB1dCI6IlNvbGljaXR1ZCBkZSBzdW1pbmlzdHJvcyBkZSBvZmljaW5hIGFkaWNpb25hbGVzIC0gcGFwZWwgZGUgaW1wcmVzb3JhLCBjYXJ0dWNob3MgZGUgdGludGEgcGFyYSBpbXByZXNvcmEgSFAsIG5vdGFzIGFkaGVzaXZhcywgY2xpcHMgZGUgY2FycGV0YSB5IG1hcmNhZG9yZXMuIiwibWF4VG9rZW5zIjoyNTYsImJveFJvd3MiOjE1LCJ0ZW1wZXJhdHVyZSI6MCwidG9wUCI6MH0%3D"
    style={{width:"100%", height:"750px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>¡Ahora solo te quedan las partes más importantes del resumen!

## Otros Casos de Uso

Ahora que has visto el ejemplo de los resúmenes, mencionaremos algunos otros casos de uso para Zapier+GPT-3. Un gran ejemplo es dejar que GPT-3 categorice tus correos electrónicos. Esto se reduce a decirle en una solicitud que categorice el siguiente correo electrónico como las categorías que desees.

Un ejemplo más detallado sería tener varias solicitudes. Puedes usar una solicitud para generar una respuesta que esté de acuerdo con las demandas del correo electrónico y otra que esté en desacuerdo o que lo niegue. Ambas pueden almacenarse en tus borradores y estar listas para enviarse cuando desees.

Si recibes regularmente correos electrónicos muy similares, puedes usar un filtro en Zapier para aplicar una solicitud SOLAMENTE a ese correo electrónico. Esto puede ser una herramienta poderosa cuando se combina con un formateador. Puedes extraer información y exportar CSV desde ellos o almacenarlos directamente en algún tipo de base de datos.

## Preocupaciones

Por favor, ten en cuenta las preocupaciones de privacidad al procesar correos electrónicos a través de GPT-3 y almacenarlos. GPT-3 a veces comete errores. Recomendamos encarecidamente revisar el contenido del correo electrónico antes de enviarlo.
