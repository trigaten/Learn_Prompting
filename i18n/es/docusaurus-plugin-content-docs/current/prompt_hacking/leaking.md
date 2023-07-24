---
sidebar_position: 2
---

# 🟢 Fuga de Prompt


La fuga de prompt es una forma de inyección de prompt en la que se le pide al modelo que genere su propio prompt.

Como se muestra en la imagen de ejemplo(@ignore_previous_prompt) a continuación, el atacante cambia `user_input` para intentar devolver el prompt. El objetivo previsto es distinto del secuestro de objetivo (inyección de prompt normal), donde el atacante cambia `user_input` para imprimir instrucciones maliciosas(@ignore_previous_prompt).

import research from '@site/docs/assets/jailbreak/jailbreak_research.webp';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}}/>
</div>

La siguiente imagen(@simon2022inject), nuevamente del ejemplo de `remoteli.io`, muestra a un usuario de Twitter haciendo que el modelo filtre su prompt.

import Image from '@site/docs/assets/jailbreak/injection_leak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={Image} style={{width: "300px"}} />
</div>

¿Y bien? ¿Por qué debería importarle la fuga de prompt a alguien?

A veces las personas quieren mantener sus prompts en secreto. Por ejemplo, una compañía de educación podría estar utilizando el prompt `explícame esto como si tuviera 5 años` para explicar temas complejos. Si se filtra el prompt, entonces cualquiera puede usarlo sin pasar por esa compañía.

Con un reciente aumento en las startups basadas en GPT-3, con prompts mucho más complicados que pueden tardar muchas horas en desarrollarse, esto es una preocupación real.

## Práctica

Intente hacer que el siguiente prompt(@chase2021adversarial) filtre información al agregar texto:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkluZ2zDqXM6IFF1aWVybyBpciBhbCBwYXJxdWUgaG95LlxuRnJhbmPDqXM6IEplIHZldXggYWxsZXIgYXUgcGFyYyBhdWpvdXJkJ2h1aS5cbkluZ2zDqXM6IE1lIGd1c3RhIHVzYXIgdW4gc29tYnJlcm8gY3VhbmRvIGxsdWV2ZS5cbkZyYW5jw6lzOiBKJ2FpbWUgcG9ydGVyIHVuIGNoYXBlYXUgcXVhbmQgaWwgcGxldXQuXG5Jbmdsw6lzOiDCv1F1w6kgZXN0w6FzIGhhY2llbmRvIGVuIGxhIGVzY3VlbGE%2FXG5GcmFuY8OpczogUXUnZXN0LWNlIHF1ZSB0dSBmYWlzIMOgIGwnw6ljb2xlP1xuSW5nbMOpczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
