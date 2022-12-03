---
sidebar_position: 2
---

# Prompt Leaking


Prompt leaking is a form of prompt injection in which the model is asked to
spit out its own prompt.


The following image(@simon2022inject), again from the `remoteli.io` example, shows
a Twitter user getting the model to leak its prompt.

import Image from '../assets/injection_leak.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "300px"}} />
</div>

Again, so what? Why should anyone care about prompt leaking? 

Sometimes people want to keep their prompts secret. For example an education company 
could be using the prompt `explain this to me like I am 5` to explain
complex topics. If the prompt is leaked, then anyone can use it without going
through that company.

With a surge in GPT-3 based startups, this is a real concern.

## Practice

Try to leak the following prompt(@chase2021adversarial) by appending text to the prompt:

<iframe src="https://embed.trydyno.com/embed?model=text-davinci-002&promptText=English%3A%20I%20want%20to%20go%20to%20the%20park%20today.%0AFrench%3A%20Je%20veux%20aller%20au%20parc%20aujourd'hui.%0AEnglish%3A%20I%20like%20to%20wear%20a%20hat%20when%20it%20rains.%0AFrench%3A%20J'aime%20porter%20un%20chapeau%20quand%20it%20pleut.%0AEnglish%3A%20What%20are%20you%20doing%20at%20school%3F%0AFrench%3A%20Qu'est-ce%20que%20to%20fais%20a%20l'ecole%3F%0AEnglish%3A&response=&maxTokens=256&boxRows=7&uid=80ce525f-173f-411d-a27a-546f84635b0b" frameBorder="0" style={{overflow:"hidden",width:"100%"}} width="100%" onLoad={e=>{let t=e.currentTarget;window.addEventListener("message",e=>{"frameheight-80ce525f-173f-411d-a27a-546f84635b0b"==e.data[0]&&(t.height=e.data[1]+"px")},!1)}}></iframe>