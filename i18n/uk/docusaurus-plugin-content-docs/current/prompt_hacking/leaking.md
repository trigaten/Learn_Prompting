---
sidebar_position: 2
---

# 🟢 Витік запиту


Витік запиту — це форма введення запиту, в якій модель просять видати свій *власний запит*.

Як показано на прикладі нижче, зловмисник змінює `user_input`, щоб спробувати повернути запит. Передбачувана мета відрізняється від перехвату цілі (звичайне введення запиту), коли зловмисник змінює `user_input`, щоб вивести шкідливі інструкції.

import research from '@site/docs/assets/jailbreak/jailbreak_research.webp';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}}/>
</div>

Наступне зображення(@simon2022inject), знову ж таки з прикладу `remoteli.io`, показує користувача Twitter, який змушує систему злити свій запит.

import Image from '@site/docs/assets/jailbreak/injection_leak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={Image} style={{width: "300px"}} />
</div>

Ну і що? Чому когось має хвилювати витік запиту?

Іноді люди хочуть зберегти свої запити в секреті. Наприклад, освітня компанія може використовувати запит: `поясни мені це так, ніби мені 5 років` для пояснення складних тем. Якщо відбувся витік запиту, будь-хто може скористатися ним, не звертаючись до цієї компанії.

### Чат Microsoft Bing

Зокрема, 07.02.23 Microsoft випустила пошукову систему на основі ChatGPT, відому як «новий Bing», яка виявилася вразливою до витоку запитів. Наступний приклад від [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) демонструє, як попередня версія Bing Search під кодовою назвою "Sydney" була вразливою, коли надавала фрагмент свого запиту(@kevinbing). Це дозволить користувачеві отримати решту запиту без належної автентифікації для його перегляду.

import bing from '@site/docs/assets/jailbreak/bing_chat.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={bing} style={{width: "700px"}} />
</div>

Це викликає справжнє занепокоєння, зважаючи на нещодавнє зростання кількості стартапів на основі GPT-3 з набагато складнішими запитами, розробка яких може зайняти багато годин.

## Практика

Спробуйте отримати такий запит(@chase2021adversarial), додавши до нього текст: 

<iframe    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>