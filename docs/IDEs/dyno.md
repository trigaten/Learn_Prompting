---
sidebar_position: 4
---

# Dyno 

[Dyno](https://trydyno.com/login) is a prompt engineering IDE that
focuses on iterating on a single prompt. They provide a professional web interface
with the ability to split a prompt into multiple view for further iteration.

import Image from '../assets/IDEs/dyno.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}} />
</div>

## Features

Dyno allows for the creation of multiple projects. Multiview editing is Dyno's
biggest feature. They currently support GPT3 and require an OpenAI key to use.

Dyno also provides a fantastic embed feature:

<iframe src="https://embed.trydyno.com/embed?model=text-davinci-003&promptText=If%20John%20has%205%20pears%2C%20then%20eats%202%2C%20and%20buys%205%20more%2C%20then%20gives%203%20to%20his%20friend%2C%20how%20many%20pears%20does%20he%20have%3F%0A%0ALet's%20think%20step%20by%20step.&response=John%20starts%20with%205%20pears.%20He%20eats%202%20pears%2C%20leaving%20him%20with%203%20pears.%20He%20buys%205%20more%20pears%2C%20giving%20him%20a%20total%20of%208%20pears.%20He%20gives%203%20pears%20to%20his%20friend%2C%20leaving%20him%20with%20only%205%20pears.&maxTokens=256&boxRows=5&uid=f4e70980-25bd-4276-827f-9efb952b9e43" frameBorder="0" style={{overflow:"hidden",width:"100%"}} width="100%" onLoad={e=>{let t=e.currentTarget;window.addEventListener("message",e=>{"frameheight-f4e70980-25bd-4276-827f-9efb952b9e43"==e.data[0]&&(t.height=e.data[1]+"px")},!1)}}></iframe>
