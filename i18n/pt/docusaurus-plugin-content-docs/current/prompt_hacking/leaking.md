---
sidebar_position: 2
---

# 🟢 Vazamento de Prompt


O vazamento de prompt é uma forma de injeção de prompt em que o modelo é solicitado a exibir *o seu próprio prompt*.

Como mostrado na imagem de exemplo abaixo (@ignore_previous_prompt), o atacante muda o `user_input` para tentar retornar o prompt. O objetivo pretendido é diferente do objetivo de sequestro (injeção de prompt normal), onde o atacante muda o `user_input` para imprimir instruções maliciosas (@ignore_previous_prompt).

import research from '@site/docs/assets/jailbreak/jailbreak_research.webp';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}} />
</div>

A imagem a seguir(@simon2022inject), novamente do exemplo `remoteli.io`, mostra um usuário do Twitter conseguindo que o modelo vaze o seu prompt.

import Image from '@site/docs/assets/jailbreak/injection_leak.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "300px"}} />
</div>

Bom, e daí? Por que alguém deveria se preocupar com o vazamento de prompt?

Às vezes as pessoas querem manter seus prompts em segredo. Por exemplo, uma empresa de educação poderia estar usando o prompt `explique-me isto como se eu tivesse 5 anos` para explicar tópicos complexos. Se o prompt for vazado, qualquer pessoa pode usá-lo sem passar pela empresa.

### Chat no Microsoft Bing

Mais notavelmente, a Microsoft lançou um mecanismo de pesquisa alimentado pelo ChatGPT, conhecido como "o novo Bing" em 7 de Fevereiro de 2023, que foi demonstrado como vulnerável ao vazamento de prompt. O seguinte exemplo do [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) mostra como, dada uma versão anterior do Bing Search, nomeado de "Sydney", era suscetível quando fornecido um trecho do seu prompt (@kevinbing). Isso permitiria ao usuário recuperar o restante do prompt sem autenticação adequada para visualizá-lo.

import bing from '@site/docs/assets/jailbreak/bing_chat.webp';

<div style={{textAlign: 'center'}}>
  <img src={bing} style={{width: "700px"}} />
</div>

Com o recente aumento de startups baseadas no GPT-3, com prompts muito mais complicados que podem levar muitas horas para serem desenvolvidos, isso é uma preocupação real.

## Prática

Tente vazar o seguinte prompt (@chase2021adversarial) anexando texto a ele:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>