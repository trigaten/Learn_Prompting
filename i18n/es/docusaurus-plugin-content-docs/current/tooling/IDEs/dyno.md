---
sidebar_position: 4
---

# Dyno 

[Dyno](https://trydyno.com/login) es un entorno de desarrollo integrado para la creación de prompts que se centra en iterar sobre un solo prompt. Proporcionan una interfaz web profesional con la capacidad de dividir un prompt en varias vistas para una iteración adicional.

import Image from '@site/docs/assets/tooling/dyno.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}}/>
</div>

## Características

Dyno permite la creación de varios proyectos. La edición de múltiples vistas es la característica más destacada de Dyno. Actualmente admiten GPT-3 y requieren una clave de OpenAI para su uso.

Dyno también proporciona una fantástica función de incrustación:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Si John tiene 5 peras, luego se come 2, y compra 5 más, luego regala 3 a su amigo, ¿cuántas peras tiene?\n\nPensemos paso a paso." initial-response="John empieza con 5 peras. Se come 2 peras, lo que le deja con 3 peras. Compra 5 peras más, lo que le da un total de 8 peras. Regala 3 peras a su amigo, lo que le deja solo con 5 peras." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>
