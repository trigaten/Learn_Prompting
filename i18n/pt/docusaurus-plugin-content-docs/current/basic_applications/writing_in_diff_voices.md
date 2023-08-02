---
sidebar_position: 60
---

# 🟢 Escrevendo em estilos diferentes

AIs como o [ChatGPT](https://chat.openai.com/chat) são conhecidas por criar textos e artigos de blog em questão de segundos. Mas muitas vezes, os artigos que elas produzem são genéricos e sem graça. Você precisa fazer algo extra para dar às palavras algum espírito ou animação. Uma das maneiras mais rápidas de fazer isso é especificar um estilo de escrita ou nomear um autor famoso na solicitação. Digamos que você queira um parágrafo sobre a importância da amizade. Uma solicitação genérica como `Escreva um parágrafo sobre a importância da amizade` produzirá uma resposta genérica do ChatGPT.

import friendship from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/basic_applications/PT_Generic_Friendship.webp';
import friendship_informal from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/basic_applications/PT_Friendship_Informal.webp';
import friendship_mark from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/basic_applications/PT_Friendship_Carlos_Drummond_Andrade.webp';
import friendship_chris from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/basic_applications/PT_Friendship_Whindersson.webp';
import friendship_millennial from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/basic_applications/PT_Friendship_Mineiro.webp';


<div style={{textAlign: 'center'}}>
  <img src={friendship} style={{width: "750px"}}/>
</div>

Blah. É tão sem graça.
Os resultados mudam quando você adiciona especificações, como `**Por favor, escreva em um estilo informal e conversacional.**` O ChatGPT retorna algo assim:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_informal} style={{width: "750px"}} />
</div>

Bom, já melhorou.

Se você quiser uma coisa mais aprimorada, você pode pedir ao ChatGPT para escrever no estilo de um escritor famoso, como o Carlos Drummond de Andrade.


<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_mark} style={{width: "750px"}} />
</div>

Agora o texto está tomando vida!
Mas não precisa ser como um escritor famoso. Você pode utilizar qualquer pessoa conhecida, como o Whindersson Nunes.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_chris} style={{width: "750px"}} />
</div>

Quer um jeitinho mais "mineirinho"?

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_millennial} style={{width: "750px"}} />
</div>

## Copiando o seu Estilo de Escrever


E se você quiser que o GPT-3 escreva um e-mail ou blog no **seu estilo**?

Simplesmente mostrando a ele algum conteúdo anterior que você tenha escrito é suficiente! Aqui está um exemplo, onde mostramos ao GPT-3 alguns e-mails que o 'Dr. Donizete' escreveu no passado e pedimos que ele escreva um novo e-mail no mesmo estilo para um novo paciente, o Sr. João.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUHJlemFkbyBKb8Ojbyxcbkdvc3RhcmlhIGRlIHNhYmVyIHNlIHZvY8OqIGVzdMOhIGRpc3BvbsOtdmVsIHBhcmEgYWdlbmRhciB1bWEgY29uc3VsdGEgZGUgY2hlY2stdXAgbm8gZGlhIDUgZGUgb3V0dWJybyBkZSAyMDIzLCDDoHMgMTRoMDAgbmEgQ2zDrW5pY2EgU2HDumRlIGVtIERpYS4gRXN0b3UgYW5zaW9zbyBwYXJhIGVuY29udHLDoS1sbyBlIGRpc2N1dGlyIHN1YSBzYcO6ZGUuXG5cblBvciBmYXZvciwgY2hlZ3VlIGNvbSAxNSBtaW51dG9zIGRlIGFudGVjZWTDqm5jaWEgcGFyYSBwcmVlbmNoZXIgcXVhbHF1ZXIgZm9ybXVsw6FyaW8gbmVjZXNzw6FyaW8uIFNlIHByZWNpc2FyIHJlbWFyY2FyIG91IGNhbmNlbGFyIHN1YSBjb25zdWx0YSwgYXZpc2Utbm9zIGNvbSBwZWxvIG1lbm9zIDI0IGhvcmFzIGRlIGFudGVjZWTDqm5jaWEuXG5cblNlIHRpdmVyIGFsZ3VtYSBkw7p2aWRhIG91IHByZW9jdXBhw6fDo28gYW50ZXMgZGEgc3VhIGNvbnN1bHRhLCBuw6NvIGhlc2l0ZSBlbSBlbnRyYXIgZW0gY29udGF0byBjb25vc2NvLlxuXG5BdGVuY2lvc2FtZW50ZSxcbkRyLiBEb25pemV0ZSIsInByb21wdCI6IkVtYWlsICMxOiBBc3N1bnRvIC0gQ29uZmlybWHDp8OjbyBkZSBjb25zdWx0YVxuXG5QcmV6YWRvIEtldmluaG8sXG5Hb3N0YXJpYSBkZSBjb25maXJtYXIgc3VhIGNvbnN1bHRhIGNvbWlnbywgRHIuIERvbml6ZXRlLCBubyBkaWEgMcK6IGRlIG1haW8gZGUgMjAyMywgw6BzIDE0aDMwLCBuYSBDbMOtbmljYSBTYcO6ZGUgZW0gRGlhLiBFc3RvdSBhbnNpb3NvIHBhcmEgZW5jb250csOhLWxvIGUgZGlzY3V0aXIgc3VhcyBwcmVvY3VwYcOnw7VlcyBjb20gYSBzYcO6ZGUuXG5cblBvciBmYXZvciwgY2hlZ3VlIGNvbSAxNSBtaW51dG9zIGRlIGFudGVjZWTDqm5jaWEgcGFyYSBwcmVlbmNoZXIgcXVhbHF1ZXIgZm9ybXVsw6FyaW8gbmVjZXNzw6FyaW8gZSB0cmFnYSB1bWEgbGlzdGEgZGUgcXVhaXNxdWVyIG1lZGljYW1lbnRvcyBxdWUgZXN0ZWphIHRvbWFuZG8gYXR1YWxtZW50ZS4gU2UgcHJlY2lzYXIgcmVtYXJjYXIgb3UgY2FuY2VsYXIgc3VhIGNvbnN1bHRhLCBhdmlzZS1ub3MgY29tIHBlbG8gbWVub3MgMjQgaG9yYXMgZGUgYW50ZWNlZMOqbmNpYS5cblxuU2UgdGl2ZXIgYWxndW1hIGTDunZpZGEgb3UgcHJlb2N1cGHDp8OjbyBhbnRlcyBkYSBzdWEgY29uc3VsdGEsIG7Do28gaGVzaXRlIGVtIGVudHJhciBlbSBjb250YXRvIGNvbm9zY28uXG5cbkF0ZW5jaW9zYW1lbnRlLFxuRHIuIERvbml6ZXRlXG5cbkVtYWlsICMyOiBBc3N1bnRvIC0gUmVzdWx0YWRvcyBkZSBleGFtZXNcblxuUHJlemFkYSBTZWJhc3RpYW5hLFxuRXNjcmV2byBwYXJhIGluZm9ybcOhLWxhIHF1ZSBzZXVzIHJlc3VsdGFkb3MgcmVjZW50ZXMgZGUgZXhhbWUgZGUgc2FuZ3VlIGNoZWdhcmFtLiBTZXVzIG7DrXZlaXMgZGUgY29sZXN0ZXJvbCBlc3TDo28gZGVudHJvIGRhIGZhaXhhIG5vcm1hbCwgbWFzIHNldXMgbsOtdmVpcyBkZSB2aXRhbWluYSBEIGVzdMOjbyBiYWl4b3MuIEV1IHJlY29tZW5kYXJpYSBxdWUgdm9jw6ogY29tZWNlIGEgdG9tYXIgc3VwbGVtZW50b3MgZGUgdml0YW1pbmEgRCBwYXJhIG1lbGhvcmFyIHNldXMgbsOtdmVpcy5cblxuQ29tIGJhc2UgbmVzc2VzIHJlc3VsdGFkb3MsIHRhbWLDqW0gcmVjb21lbmRvIHF1ZSB2b2PDqiBhZ2VuZGUgdW1hIGNvbnN1bHRhIGRlIGFjb21wYW5oYW1lbnRvIGVtIDMgbWVzZXMgcGFyYSByZS10ZXN0YXIgc2V1cyBuw612ZWlzIGRlIHZpdGFtaW5hIEQuIFNlIHRpdmVyIGFsZ3VtYSBkw7p2aWRhIG91IHByZW9jdXBhw6fDo28sIG7Do28gaGVzaXRlIGVtIG5vcyBjb250YXRhci5cblxuT2JyaWdhZG8sXG5Eci4gRG9uaXpldGVcblxuRW1haWwgIzM6IEFzc3VudG8gLSBDb25zdWx0YSBkZSBhY29tcGFuaGFtZW50b1xuUHJlemFkbyBGYXVzdMOjbyxcbkdvc3RhcmlhIGRlIGZhemVyIHVtIGFjb21wYW5oYW1lbnRvIGFww7NzIGEgbm9zc2Egw7psdGltYSBjb25zdWx0YSBlIHZlciBjb21vIHZvY8OqIGVzdMOhIHNlIHNlbnRpbmRvLiBTZSBhaW5kYSBlc3RpdmVyIHNlbnRpbmRvIGRvciBuYXMgY29zdGFzIG91IHRpdmVyIGFsZ3VtYSBub3ZhIHByZW9jdXBhw6fDo28sIGluZm9ybWUtbWUgcGFyYSBxdWUgcG9zc2Ftb3MgZGlzY3V0aXIgZHVyYW50ZSBzdWEgcHLDs3hpbWEgY29uc3VsdGEuXG5cblN1YSBwcsOzeGltYSBjb25zdWx0YSBlc3TDoSBhZ2VuZGFkYSBwYXJhIDE1IGRlIGp1bmhvIGRlIDIwMjMgw6BzIDEwaDAwIG5hIFNhw7pkZSBCZW0gRXN0YXIuIEluZm9ybWUtbm9zIHNlIHByZWNpc2FyIHJlbWFyY2FyIG91IGNhbmNlbGFyLlxuXG5BdGVuY2lvc2FtZW50ZSxcbkRyLiBEb25pemV0ZVxuXG5Fc2NyZXZhIHVtIGVtYWlsIG5vIGVzdGlsbyBkb3MgZS1tYWlscyBhY2ltYSBwYXJhIG8gU3IuIEpvw6NvLCBwZXJndW50YW5kbyBzZSBlbGUgZXN0w6EgZGlzcG9uw612ZWwgcGFyYSB1bSBjaGVjay11cCBubyBkaWEgNSBkZSBPdXR1YnJvIMOgcyAxNDowMC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>Você pode inserir qualquer texto que tenha escrito no passado (e-mails, relatórios, blogs, etc.), e o GPT-3/ChatGPT geralmente será capaz de copiar seu estilo. Quanto mais texto você inserir, melhor ele pode copiar seu estilo.