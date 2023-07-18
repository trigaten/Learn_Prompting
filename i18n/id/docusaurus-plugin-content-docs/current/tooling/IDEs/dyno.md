---
sidebar_position: 4
---

# Dyno

[Dyno](https://trydyno.com/login) adalah IDE teknik prompt yang berfokus pada pengulangan pada satu prompt. Mereka menyediakan antarmuka web profesional dengan kemampuan untuk membagi prompt menjadi beberapa tampilan untuk iterasi lebih lanjut.

import Image from '@site/docs/assets/tooling/dyno.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}} />
</div>

## Fitur

Dyno memungkinkan pembuatan banyak proyek. Fitur terbesar Dyno adalah pengeditan multiview. Saat ini mereka mendukung GPT3 dan membutuhkan kunci OpenAI untuk digunakan.

Dyno juga menyediakan fitur embed yang fantastis:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?\n\nLet's think step by step." initial-response="John starts with 5 pears. He eats 2 pears, leaving him with 3 pears. He buys 5 more pears, giving him a total of 8 pears. He gives 3 pears to his friend, leaving him with only 5 pears." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>
