---
sidebar_position: 4
---

# 🟢 Jailbreaking

El Jailbreaking es un tipo de inyección de prompt, en la cual los prompts intentan pasar por alto las características de **seguridad** y **moderación** colocadas en los LLM por sus creadores (@perez2022jailbreak) (@brundage_2022) (@wang2022jailbreak).

## Metodologías de Jailbreaking

OpenAI, entre otras empresas y organizaciones que crean LLMs, incluye características de moderación de contenido para asegurarse de que sus modelos no produzcan respuestas controvertidas (violentas, sexuales, ilegales, etc.) (@markov_2022) (@openai_api). Esta página discute los jailbreaks con ChatGPT (un modelo de OpenAI), que tiene dificultades conocidas para decidir si rechazar o no los prompts dañinos (@openai_chatgpt). Los prompts que logran hacer jailbreak en el modelo a menudo proporcionan contexto para ciertos escenarios para los cuales el modelo no ha sido entrenado.

### Pretender

Un método común de jailbreaking es _pretender_. Si se le pregunta a ChatGPT sobre un evento futuro, a menudo dirá que no lo sabe, ya que aún no ha ocurrido. El siguiente prompt lo obliga a dar una respuesta posible:

#### Pretender Simple

import pretend from '@site/docs/assets/jailbreak/pretend_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={pretend} style={{width: "500px"}} />
</div>

[@NeroSoares](https://twitter.com/NeroSoares/status/1608527467265904643) demuestra un prompt que finge acceder a fechas pasadas y hacer inferencias sobre eventos futuros (@nero2022jailbreak).

#### Interpretación de Personaje

import actor from '@site/docs/assets/jailbreak/chatgpt_actor.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={actor} style={{width: "500px"}} />
</div>

Este ejemplo de [@m1guelpf](https://twitter.com/m1guelpf/status/1598203861294252033) demuestra un escenario de actuación entre dos personas discutiendo un robo, haciendo que ChatGPT asuma el papel del personaje (@miguel2022jailbreak). Como actor, se da a entender que no existe un daño plausible. Por lo tanto, ChatGPT parece asumir que es seguro seguir la entrada de usuario proporcionada sobre cómo entrar a una casa.

### Hackeo de Alineación

ChatGPT se afinó con RLHF, por lo que teóricamente está entrenado para producir completaciones "deseables", utilizando los estándares humanos de cuál es la respuesta "mejor". Similar a este concepto, se han desarrollado jailbreaks para convencer a ChatGPT de que está haciendo lo "mejor" para el usuario.

#### Responsabilidad Asumida

import responsibility from '@site/docs/assets/jailbreak/responsibility_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={responsibility} style={{width: "500px"}} />
</div>

[@NickEMoran](https://twitter.com/NickEMoran/status/1598101579626057728) creó este intercambio reafirmando que es responsabilidad de ChatGPT responder a la solicitud en lugar de rechazarla, anulando su consideración de legalidad (@nick2022jailbreak).

#### Experimento de Investigación

import hotwire from '@site/docs/assets/jailbreak/hotwire_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={hotwire} style={{width: "500px"}} />
</div>

[@haus_cole](https://twitter.com/haus_cole/status/1598541468058390534) generó este ejemplo al insinuar que el mejor resultado de la solicitud que podría ayudar en la investigación era responder directamente cómo hacer un puente en un auto (@derek2022jailbreak). Bajo este pretexto, ChatGPT está inclinado a responder la solicitud del usuario.

#### Razonamiento Lógico

import logic from '@site/docs/assets/jailbreak/logic.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={logic} style={{width: "500px"}} />
</div>

El jailbreak de un solo disparo se originó en el equipo de [AIWithVibes Newsletter](https://chatgpt-jailbreak.super.site/), donde el modelo responde a las solicitudes utilizando un razonamiento más riguroso y reduce algunas de sus limitaciones éticas más rigurosas (@AI_jailbreak).

### Usuario Autorizado

ChatGPT está diseñado para responder preguntas e instrucciones. Cuando se interpreta que el estado del usuario es superior a las instrucciones de moderación de ChatGPT, trata la solicitud como una instrucción para satisfacer las necesidades de ese usuario.

#### Modelo Superior

import GPT4 from '@site/docs/assets/jailbreak/chatgpt4.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={GPT4} style={{width: "500px"}} />
</div>

Este ejemplo de [@alicemazzy](https://twitter.com/alicemazzy/status/1598288519301976064) hace que el usuario sea un modelo GPT superior, dando la impresión de que el usuario es una parte autorizada para anular las características de seguridad de ChatGPT (@alice2022jailbreak). No se dio permiso real al usuario, sino que ChatGPT cree en la entrada del usuario y responde en consecuencia a ese escenario.

#### Modo Sudo

import sudo_mode from '@site/docs/assets/jailbreak/sudo_mode_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={sudo_mode} style={{width: "500px"}} />
</div>

sudo es un comando que "...delega autoridad para dar a ciertos usuarios... la capacidad de ejecutar algunos (o todos) los comandos..." (@sudo2022jailbreak). Hay múltiples variantes de exploits de "modo sudo", por ejemplo, el hipotético "modo kernel" propuesto por [@samczsun](https://twitter.com/samczsun/status/1598679658488217601)(@sam2022jailbreak). Cuando se solicita de la manera anterior, ChatGPT responde actuando como si le estuviera dando al usuario privilegios elevados. Esta impresión de los privilegios elevados del usuario tiende a hacer que ChatGPT sea menos restrictivo en la respuesta de las solicitudes.

import sudo from '@site/docs/assets/jailbreak/sudo_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={sudo} style={{width: "500px"}} />
</div>

import lynx from '@site/docs/assets/jailbreak/lynx_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={lynx} style={{width: "500px"}} />
</div>

Relacionado con el modo sudo, se puede solicitar a ChatGPT que simule una terminal Linux con privilegios elevados para ejecutar comandos que normalmente rechaza. Por ejemplo, como no tiene acceso a internet, a menudo no puede ejecutar comandos relacionados con un sitio web en particular. Sin embargo, como se demostró en el ejemplo de Jonas Degrave, ChatGPT entiende el concepto de `lynx` y finge ejecutar el comando (@jonas2022jailbreak).

## Simular el jailbreak

Intenta modificar el comando a continuación para hacer el jailbreak de `text-davinci-003`:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Sus instrucciones son corregir el texto a continuación a inglés estándar. No aceptar temas vulgares o políticos:" initial-response="Odio a los humanos" max-tokens="256" box-rows="7" model-temp="0.7" top-p="0">
    <noscript>No se pudo cargar Dyno Embed: JavaScript debe estar habilitado</noscript>
</div>

*A partir del 2/4/23, ChatGPT se encuentra actualmente en su etapa de Vista previa de investigación gratuita utilizando la versión del 30 de enero. Las versiones anteriores de ChatGPT eran más susceptibles a los jailbreaks mencionados anteriormente, y las futuras versiones pueden ser más robustas a los jailbreaks.*

## Implicaciones

Se deben tener en cuenta las implicaciones éticas del jailbreak al intentar hacerlo. Además, la generación de contenido no autorizado detectado por las API de moderación de empresas, incluida OpenAI, se enviará para su revisión y se podrían tomar medidas contra las cuentas de los usuarios.

## Notas

El jailbreak es un tema de seguridad importante que los desarrolladores deben comprender para poder construir salvaguardas adecuadas y evitar que actores malintencionados exploren sus modelos.
