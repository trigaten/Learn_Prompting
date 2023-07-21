---
sidebar_position: 4
---

# 🟢 Ланцюг думок без ілюстрацій


Запит ланцюг думок без ілюстрацій (Zero-shot-CoT)(@kojima2022large) є доповненням до %%CoT|CoT prompting%% (@wei2022chain), який представляє неймовірно простий запит на основі 1 ілюстрації. Таким чином, додаючи слова "**Let's think step by step.**" до кінця запитання, ВММ можуть створити ланцюг думок, який відповідає на запитання. З цього ланцюга думок вони можуть отримати точніші відповіді.

import ZSImage from '@site/docs/assets/intermediate/zero_shot.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Ланцюг думок без ілюстрацій (Коджіма та ін.)
</div>

Технічно, повний процес Zero-shot-CoT включає два окремі запити/завершення. На зображенні нижче верхня бульбашка зліва створює ланцюг думок, а верхня бульбашка справа бере вихідні дані з першого запиту (включно з найпершим запитом) та вилучає відповідь із ланцюга думок. Цей другий запит є _самодоповненим_.

import ZSProcessImage from '@site/docs/assets/intermediate/zero_shot_example.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Процес ланцюга думок без ілюстрацій (Коджіма та ін.)
</div>

## Наприклад

Ось кілька демонстрацій (у яких лише виконується вилучення міркувань). Перша демонстрація показує, що GPT-3 (davinci-003) не може впоратися з простим математичним питанням, в той час, як друга демонстрація використовує запит Zero-shot-CoT та успішно розв'язує задачу. Ви можете ввести свій ключ OpenAI API (натиснути «Створити») і погратися з прикладами. Зверніть увагу, наскільки простішим є запит Zero-shot-CoT у порівнянні з запитом CoT.

#### Неправильно

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0Ijoi0KMg0JTQvNC40YLRgNCwIDgg0LPRgNGD0YguIiwicHJvbXB0Ijoi0K%2FQutGJ0L4g0YMg0JTQvNC40YLRgNCwINGUIDUg0LPRgNGD0YgsINCy0ZbQvSDQtyfRl9C00LDRlCAyLCDQutGD0L%2FRg9GUINGJ0LUgNSwg0LAg0L%2FQvtGC0ZbQvCDQstGW0LTQtNCw0ZQgMyDRgdCy0L7RlNC80YMg0LTRgNGD0LPRgywg0YHQutGW0LvRjNC60Lgg0LPRgNGD0Ygg0YMg0L3RjNC%2B0LPQviDQt9Cw0LvQuNGI0LjQu9C%2B0YHRjz8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### Правильно

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Результати
Zero-shot-CoT також був ефективним у покращенні результатів арифметичних задач, задач на логіку й символьне міркування. Однак, як не дивно, він зазвичай не був настільки ж ефективним, як запит CoT. Використання Zero-shot-CoT може бути доцільним тоді, коли важко отримати кілька зразків на основі кількох ілюстрацій для запиту CoT.

## Абляції вигоди

Коджіма та ін. експериментують з кількома різними запитами Zero-shot-CoT (наприклад, «Розв'яжімо цю задачу, розділивши її на кроки» або «Подумаймо про це логічно»), але вони вважають, що «Думаймо крок за кроком» є найефективнішим для вибраних ними завдань.



## Примітки

Етап вилучення часто має залежати від завдання, що робить Zero-Shot-CoT менш узагальненим, ніж здається на перший погляд.

До речі, я виявив, що запити в стилі Zero-shot-CoT іноді ефективні для покращення тривалості виконання генеративних завдань. Наприклад, розглянемо стандартний запит `Write a story about a frog and a mushroom who become friends.` Додавання слів `Let's think step by step.` до кінця цього запиту призводить до набагато довшого завершення.

