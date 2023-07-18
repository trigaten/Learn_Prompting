---
sidebar_position: 600
---

# 🟢 Електронні листи в Zapier

import Basic from '@site/docs/assets/basic_applications/Zapiermail/Basic.webp';
import Diagram from '@site/docs/assets/basic_applications/Zapiermail/Diagram.webp';
import Step1 from '@site/docs/assets/basic_applications/Zapiermail/Step1.webp';
import Step2 from '@site/docs/assets/basic_applications/Zapiermail/Step2.webp';
import Step3 from '@site/docs/assets/basic_applications/Zapiermail/Step3.webp';
import Step4 from '@site/docs/assets/basic_applications/Zapiermail/Step4.webp';
import Zap from '@site/docs/assets/basic_applications/Zapiermail/Zap.webp';

## Вступ


Ми вже бачили, наскільки GPT-3 може бути корисним, коли мова йде про електронні листи. Ще краще буде, якщо ви поєднаєте його з інструментами, **які не потребують написання програмного коду**, такими як [Zapier](https://zapier.com) або [Bubble.io](https://bubble.io).

У цій статті буде наведено приклад того, що Zapier та GPT-3 можуть зробити за невелику кількість часу, витраченого на налаштування. Вона зосереджена на конкретному прикладі, але можливостей набагато більше. У процесі роботи ми наведемо ще й інші. Майте на увазі, що ви також можете зробити це в Bubble.io. Існує безліч інших інструментів, що не потребують створення програмного коду, але на момент написання лише деякі з них дозволяють використовувати GPT-3.


У цій статті ми покажемо вам, як налаштувати просту систему в Zapier, у якій **підсумовуються та зберігаються електронні листи **. Маєте з кимось зустріч? Швидко перевіряйте стислий зміст електронних листів, якими ви обмінювалися з цією людиною. Процес налаштування займе всього близько 20 хвилин.

:::caution
Для цієї статті корисно ознайомитися із Zapier. Якщо ви ще цього не зробили, то можете переглянути цю [статтю](https://zapier.com/learn/).
:::


## Основна ідея


Нижче наведено схему того, що ми будемо робити тут, у Zapier. Щоразу, коли до вашої поштової електронної скриньки надходитиме лист, то запускатиметься Zapier. Є чотири кроки (поки що):

1. Ви отримуєте лист і запускаєте Zapier
1. Відформатуйте його вміст листа (наприклад, видаліть HTML-розмітку).
2. Надішліть до GPT-3 для створення резюме
3. Зберігайте результати в базі даних

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}} />
</div>

## Налаштування в Zapier


Переконайтеся, що у вас є [обліковий запис в Zapier](https://zapier.com/sign-up) (ви можете створити його безкоштовно). Налаштування є досить простим. Після створення облікового запису відкрийте вікно нижче, щоб переглянути кроки, які ми маємо виконати.

<details>
  <summary>Розгорніть для більш детального перегляду дій</summary>
  <div>
  Ось так зрештою виглядатиме послідовність дій у Zapier.
    <div><div style={{textAlign: 'left'}}>
  <img src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <img src= style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
        
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src= style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        <br/>
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src= style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src= style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>
Ось налаштування в Zapier, яке дозволяє створити короткий зміст, як показано на схемі. Він має обмеження, але справляється зі своєю роботою та може створити корисну базу даних.


## Оптимізація запиту для кращого результату

Є кілька простих способів покращити ваші результати. Додавання контексту та ролей може допомогти в цьому. Однак тема та вміст ваших електронних листів можуть охоплювати широкий спектр тематик. Тобто, загальні вказівки працюватимуть краще, ніж дуже деталізовані, які можуть збити модель з пантелику.

З практичних міркувань корисно дати GPT-3 настанови, а потім повідомити його, де саме починається електронний лист у запиті, просто додавши "Email:" і закінчивши запит словами "Короткий виклад:". Це дозволяє уникнути відповіді GPT-3: "Звичайно! Я можу вам це коротко підсумувати...".

Тут також стане в пригоді додавання ролей. Прохання GPT-3 виконувати роль особистого помічника допомагає підвищити якість узагальненого тексту. Якщо ж ви хочете підсумувати робочу кореспонденцію, достатньо просто зазначити вашу роль, щоб GPT-3 мав контекст для роботи з нею. Він працює ніби припускаючи певний рівень знань читача, що допомагає вилучити несуттєві частини листа. Нижче наведено кілька прикладів електронних листів, які може отримати адміністратор офісу.

Ви можете попросити його узагальнити простий лист у вигляді пунктів, однак це може бути не дуже корисним залежно від того, як ви хочете їх використовувати. Для швидкого перегляду електронної пошти вам може знадобитися короткий і лаконічний текст. Просто використайте цей запит, і він спрацює. Нижче наведено його приклад. Налаштуйте та поекспериментуйте з ним, щоб побачити, що зміниться. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Така відповідь є прийнятною і буде корисною. Однак за допомогою додаткового налаштування ви можете удосконалити результат. Як читачу, вам байдуже, що це електронний лист, можливо, вам знадобиться ще менший рівень деталізації для короткого викладу. Інформація про причини не має значення, те ж саме стосується останнього речення щодо питань і проблем. Результат можна покращити, просто додавши, що мета стислого викладу полягає в перегляді вмісту листів без слів ввічливості. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>Тепер у вас залишилися лише найважливіші частини короткого викладу листів!


## Інші випадки використання

Тепер, коли ви побачили приклад створення короткого викладу тексту, ми згадаємо кілька інших випадків використання Zapier та GPT-3. Один із чудових прикладів — можливість GPT-3 класифікувати ваші електронні листи. Усе просто зводиться до того, що у запиті треба вказати, до якої категорії віднести наступний електронний лист.

Більш детальним прикладом може бути наявність кількох запитів. Ви можете використати запит, щоб створити відповідь, в якій ви погоджуєтесь зі вмістом електронного листа чи ж заперечуєте його. Вони обидва можуть зберігатися у ваших чернетках і бути готовими до відправки в будь-який момент.

Якщо ви регулярно отримуєте дуже схожі електронні листи, то можете скористатися фільтром у Zapier, щоб застосувати запит ЛИШЕ до цього електронного листа. Це може бути потужним інструментом у поєднанні з програмами для форматування. Ви можете отримувати інформацію та експортувати CSV-файли з них або безпосередньо зберігати їх у певній формі бази даних.


## Основні проблеми

Будь ласка, пам’ятайте про конфіденційність під час запуску електронних листів через GPT-3 та їх зберігання. GPT-3 іноді допускає помилки. Ми наполегливо рекомендуємо перевіряти вміст електронного листа перед надсиланням.