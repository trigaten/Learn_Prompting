---
sidebar_position: 4
---

# Dyno

[Dyno](https://trydyno.com/login) – це ІСР для інженерії запитів, яке зосереджено на ітерації одного запиту. Воно надає професійний вебінтерфейс з можливістю розділити запит на декілька областей перегляду для подальшої ітерації.

import Image from '@site/docs/assets/tooling/dyno.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}} />
</div>

## Характеристики

Dyno дозволяє створювати кілька проєктів. Редагування з кількома областями перегляду – найважливіша функція Dyno. Зараз воно підтримує GPT3 і потребує ключа OpenAI для використання.

Dyno також пропонує фантастичну вбудовану функцію:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?\n\nLet's think step by step." initial-response="John starts with 5 pears. He eats 2 pears, leaving him with 3 pears. He buys 5 more pears, giving him a total of 8 pears. He gives 3 pears to his friend, leaving him with only 5 pears." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>
