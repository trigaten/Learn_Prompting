---
sidebar_position: 200
---

# 🟢 Entender la mente de la IA


import Brain from '@site/docs/assets/basics/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Hay algunas cosas simples que deberías saber acerca de los diferentes tipos de inteligencia artificial y cómo funcionan antes de continuar leyendo el resto del curso.


## Diferentes IA

Existen miles, si no millones, de IA. Algunas son mejores que otras. Diferentes IAs pueden producir [imágenes](https://openai.com/product/dall-e-2), [música](https://google-research.github.io/seanet/musiclm/examples/), [texto](https://platform.openai.com/playground), e incluso [vídeos](https://makeavideo.studio/). Ten en cuenta que todas estas son IAs _generativas_, básicamente IAs que _hacen_ cosas. También hay IAs _discriminativas_, que son IAs que _clasifican_ cosas. Por ejemplo, puedes utilizar un clasificador de imágenes para saber si una imagen es un gato o un perro. En este curso no utilizaremos ninguna IA discriminativa.


Sólo unas pocas IAs generativas son actualmente lo suficientemente avanzadas como para ser especialmente útiles para la ingeniería de avisos. En este curso utilizamos principalmente GPT-3 y ChatGPT. Como mencionamos en la última página, ChatGPT es un bot de chat, mientras que GPT-3 no lo es. **Normalmente producirán respuestas diferentes cuando se les haga la misma pregunta**. Si usted es un desarrollador, le recomiendo que utilice GPT-3, ya que es más reproducible. Si no eres desarrollador, te recomiendo que utilices [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), ya que es más fácil de usar. La mayoría de las técnicas de este curso pueden aplicarse a ambas IAs. Sin embargo, algunas de ellas serán sólo para GPT-3, por lo que te animamos a usar GPT-3 si quieres utilizar todas las técnicas de este curso.

También utilizaremos [Stable Diffusion](https://beta.dreamstudio.ai/home) y [DALLE](https://openai.com/product/dall-e-2) en la sección de generación de imágenes. Ver más IAs relevantes [aquí](https://learnprompting.org/docs/products#chatbots).

## Cómo funcionan estas IAs

En esta sección se describen aspectos de las IAs generativas de **texto** más populares. Estas IAs tienen cerebros formados por miles de millones de neuronas artificiales. La forma en que están estructuradas estas neuronas se denomina arquitectura transformadora. Se trata de un tipo de red neuronal bastante compleja. Lo que debes entender es:

1. Estas IAs son sólo funciones matemáticas. En lugar de $f(x) = x^2$, son más como f(miles de variables) = miles de posibles salidas.
2. Estas IAs entienden las frases dividiéndolas en palabras/subpalabras llamadas tokens (por ejemplo, la IA puede leer "no me gusta" como "yo", "no", "no" "gustar"). A continuación, cada token se convierte en una lista de números para que la IA pueda procesarlo.
3. Estas IAs predicen la siguiente palabra/token de la frase basándose en las palabras/tokens anteriores (por ejemplo, la IA podría predecir "manzanas" después de "no me gusta"). Cada ficha que escriben se basa en las fichas anteriores que han visto y escrito; cada vez que escriben una nueva ficha, hacen una pausa para pensar cuál debería ser la siguiente.
4. Estas IAs miran todas las fichas al mismo tiempo. No leen de izquierda a derecha ni de derecha a izquierda como hacen los humanos.

Por favor, comprenda que las palabras "pensar", "cerebro" y "neurona" son zoomorfismos, que son esencialmente metáforas de lo que el modelo está haciendo realmente. Estos modelos no piensan realmente, son sólo funciones matemáticas. No son cerebros, sino redes neuronales artificiales. No son neuronas biológicas, son sólo números.

Se trata de un campo de investigación activa y de filosofar. Esta descripción es bastante cínica sobre su naturaleza y pretende matizar la popular descripción mediática de las IA como seres que piensan/actúan como humanos. Dicho esto, si quieres antropomorfizar la IA, ¡adelante! Parece que la mayoría de la gente lo hace e incluso puede ser útil para el aprendizaje. It seems that most people do this and it may even be helpful for learning.


## Notas

- [d2l.ai](https://www.d2l.ai) es un buen recurso para aprender cómo funciona la IA.

- Tenga en cuenta que a los autores, de hecho, les gustan las manzanas. Son deliciosas.
