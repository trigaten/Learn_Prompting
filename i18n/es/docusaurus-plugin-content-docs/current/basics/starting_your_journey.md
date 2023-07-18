---
sidebar_position: 1000
---

# 🟢 Comienza tu viaje


import Steps from '@site/docs/assets/basics/steps.svg';

<div style={{textAlign: 'center'}}>
  <Steps style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Ahora que ha aprendido los fundamentos de la ingeniería de prompting, está listo para empezar a hacer ingeniería de prompting por su cuenta. El resto de este curso contendrá técnicas y recursos adicionales, pero la mejor manera de aprender PE es empezar a experimentar con tus propios prompt. Esta página te mostrará cómo empezar a resolver un problema arbitrario de ingeniería de prompting.

Supongamos que desea un prompt que genere una historia inmersiva e interactiva con ChatGPT.

## Paso 1: Investigación

Lo primero que hay que hacer es investigar sobre el tema que se desea. Además de Googlear, los siguientes recursos son muy valiosos:

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (y subreddits similares)
- [Learn Prompting Discord](https://discord.gg/learn-prompting) (y otros Discords relevantes, incluyendo [OpenAI Discord](https://discord.gg/openai))

Puedes encontrar [este](https://prompts.chat/#act-as-a-text-based-adventure-game) de [Heroj04](https://github.com/Heroj04) como un buen punto de partida:
> Quiero que actúes como un juego de aventuras basado en texto. Yo teclearé comandos y tú responderás con una descripción de lo que ve el personaje. Quiero que solo respondas con la salida del juego dentro de un bloque de codigo unico, y nada mas. no escribas explicaciones. no escribas comandos a menos que yo te lo indique. cuando necesite decirte algo en español, lo hare poniendo texto dentro de llaves {como esto}. mi primer comando es despierta

## Paso 2: Experimentar

Ahora, vamos a poner un prompt en ChatGPT y ver qué pasa.

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}} />
</div>

Podemos ver que ha generado una historia, pero que la ha escrito dentro de un bloque de código csharp (un lenguaje de programación). Quizás no queramos esto, así que modificaremos el prompt a:

> Quiero que actúes como un juego de aventuras basado en texto. Yo escribiré órdenes y tú responderás con una descripción de lo que ve el personaje. No escribas explicaciones. Mi primer comando es despierta


**Respuesta de ChatGPT**:
```text
// highlight-start
You slowly open your eyes and find yourself lying on the cold, hard ground. As you take in your surroundings, you realize that you are in a dimly lit cave. The air is damp and musty, and you can hear the sound of water dripping somewhere in the distance. Your head is throbbing and you feel disoriented. You need to figure out where you are and how to get out of here.
// highlight-end
```

Bien, ahora sale la historia como texto plano. Sin embargo, a nuestro texto le faltan detalles. Vamos a añadir un poco más de estructura al prompt:

> Quiero que actúes como un juego de aventuras basado en texto. Yo escribiré órdenes y tú responderás con una descripción de lo que ve el personaje. No escribas explicaciones. Utiliza un lenguaje florido y palabras descriptivas. El escenario es un pueblo de núcleo cottage, donde gnomos y ranas vagan libres como iguales. Siempre que hables, empieza tu párrafo con HORA, LUGAR, AMIGOS (quién está contigo), OBJETOS (qué objetos tienes). Mi primer comando es despierta.

**Respuesta de ChatGPT**:
```text
// highlight-start
HORA: La mañana acaba de empezar, el sol se levanta y los pájaros cantan suavemente. LUGAR: Estás en una pequeña casa de campo con techo de paja, rodeada de hermosas flores de colores brillantes.
AMIGOS: Estás solo en tu habitación, pero escuchas el croar de una rana y el gorjeo de un pájaro a lo lejos.
ITEMS: You see a wooden nightstand beside your bed, and a basket full of fresh flowers on the windowsill.

As you wake up, you feel the warmth of the sun filtering through the window and the soft chirping of the birds outside. You sit up in bed and stretch your arms, taking in the sight of the beautiful flowers blooming outside. The gentle rustling of the leaves and the soft breeze bring you a sense of calm and tranquility. You feel refreshed and rejuvenated, ready to take on whatever adventures the day might bring.
// highlight-end
```

Ah, perfecto, ahora puedes vivir tus sueños de núcleo de cabaña con ChatGPT 🌸.


## Paso 3: Obtenga Retroalimentación e Itere

Ahora, enséñaselo a tus amigos, empleados, jefe y pídeles su opinión. Si les gusta, ¡genial! Si no, repite el proceso hasta que consigas algo que les guste a los dos. If not, iterate on the prompt until you get something you both like. También puedes pedir opiniones en las comunidades antes mencionadas. Este paso no termina nunca. Siempre estarás iterando sobre tus indicaciones, ya que los problemas y las personas cambian con el tiempo.

## Conclusión

Haz ingeniería prompts como quieras. Yo (el mantenedor de este curso) siempre escribo mis prompts desde cero. No hay un estándar de oro sobre cómo escribir los mejores prompts; el ensayo y error es la mejor manera de aprender. Feliz aprendizaje y buena suerte con el resto del curso.

:::note
¡Las recomendaciones de este artículo se aplican a todos los problemas de ingeniería, no sólo a la escritura de historias interactivas¡
:::
:::


## Notas

- En los próximos capítulos, es posible que las palabras **IA, modelo y LLM se utilicen indistintamente**. Consulte la [referencia de vocabulario](https://learnprompting.org/es/docs/vocabulary) para más información.