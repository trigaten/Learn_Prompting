---
sidebar_position: 4
---

# Dyno

[Dyno](https://trydyno.com/login) is a prompt engineering IDE that focuses on iterating on a single prompt. They provide a professional web interface with the ability to split a prompt into multiple view for further iteration.

import Image from '@site/docs/assets/tooling/dyno.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}} />
</div>

## Features

Dyno allows for the creation of multiple projects. Multiview editing is Dyno's biggest feature. They currently support GPT3 and require an OpenAI key to use.

Dyno also provides a fantastic embed feature:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="If John has 5 pears, then eats 2, and buys 5 more, then gives 3 to his friend, how many pears does he have?\n\nLet's think step by step." initial-response="John starts with 5 pears. He eats 2 pears, leaving him with 3 pears. He buys 5 more pears, giving him a total of 8 pears. He gives 3 pears to his friend, leaving him with only 5 pears." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>
