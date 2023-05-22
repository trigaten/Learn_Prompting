---
sidebar_position: 4
---

# Dyno 

[Dyno](https://trydyno.com/login) je pohotové inženýrské IDE, které
se zaměřuje na iteraci jednoho podnětu. Poskytuje profesionální webové rozhraní
s možností rozdělit prompt na více zobrazení pro další iteraci.

import Image from '@site/docs/assets/tooling/dyno.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}} />
</div>

## Funkce

Dyno umožňuje vytvářet více projektů. Úprava více pohledů je v systému Dyno
největší funkcí. V současné době podporují GPT3 a k použití vyžadují klíč OpenAI.

Dyno také poskytuje fantastickou funkci vkládání:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Když má John 5 hrušek, pak sní 2 a koupí dalších 5, pak dá 3 kamarádovi, kolik má hrušek?" initial-response="John začíná s 5 hruškami. Sní 2 hrušky, takže mu zůstanou 3 hrušky. Koupí si dalších 5 hrušek, takže má celkem 8 hrušek. Dá 3 hrušky svému kamarádovi, takže mu zůstane pouze 5 hrušek." max-tokens="256" box-rows="5" model-temp="0.7" top-p="1"></div>
