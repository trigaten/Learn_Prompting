---
sidebar_position: 2
---

# 🟢 Надання вказівок

import InstructionPrompt from '@site/docs/assets/basics/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Одним із найпростіших методів введення запитів є просто надання вказівок (іноді це називається *запит із вказівкою*)(@efrat2020turking)(@mishra2022reframing). Ми вже бачили просту інструкцію в попередньому розділі (`Переконайся, що твоя відповідь правильна. Чому дорівнює 965*590? Переконайся, що твоя відповідь правильна:`). Однак сучасні ШІ можуть виконувати набагато складніші вказівки.

Нижче наведено наш перший [приклад](https://learnprompting.org/docs/basics/intro#embeds). Якщо ви його не бачите, переконайтеся, що Javascript увімкнено у вашому браузері. Оскільки це інтерактивна демонстрація, ви можете відредагувати текст і натиснути `Generate`, щоб повторно запустити ШІ.

#### Приклад 1

<iframe    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRvZSwgSm9obiIsInByb21wdCI6IkEgdXNlciBoYXMgaW5wdXQgdGhlaXIgZmlyc3QgYW5kIGxhc3QgbmFtZSBpbnRvIGEgZm9ybS4gV2UgZG9uJ3Qga25vdyBpbiB3aGljaCBvcmRlciBcbnRoZWlyIGZpcnN0L2xhc3QgbmFtZSBpcywgYnV0IHdlIG5lZWQgaXQgdG8gYmUgaW4gdGhlIGZvcm1hdCAnTGFzdCwgRmlyc3QnLiBDb252ZXJ0IHRoZSBmb2xsb3dpbmc6XG5cbmpvaG4gZG9lIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>ШІ легко вирішує це завдання. Ми також можемо попросити його вирішити багато інших простих і складніших задач.

#### Приклад 2

Ось складніший приклад[^A]:

```
Прочитай наведений нижче електронний лист про продажі. Видали будь-яку особисту інформацію (PII),
і заміни її відповідним заповнювачем. Наприклад, заміни ім'я "Анастасія"
на "[NAME]".

Вітаю, Анастасіє!

Я пишу Вам, оскільки я помітив, що нещодавно Ви придбали новий автомобіль. Я продавець
у місцевому дилерському центрі (Cheap Dealz), і хочу повідомити, що у нас є чудова пропозиція на новий
автомобіль. Якщо раптом Вас зацікавила пропозиція, будь ласка, дайте мені знати.

Дякую,
Шевченко Тарас

Телефон: +38(067) 123-4567
Електронна адреса: shevchenko@cheapdealz.com
```

Ось відповідь [ШІ](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Привіт [NAME],

Я пишу Вам, тому що помітив, що нещодавно Ви придбали новий автомобіль. Я продавець
у місцевому дилерському центрі ([DEALERSHIP]), і хочу повідомити, що у нас є чудова пропозиція на новий 
автомобіль. Якщо раптом Вас зацікавила пропозиція, будь ласка, дайте мені знати.

Дякую,
[SALESPERSON]

Телефон: [PHONE NUMBER]
Електронна адреса: [EMAIL ADDRESS]
// highlight-end
```

Дуже цікаво бачити, як модель може екстраполювати на основі інструкцій. Наприклад, вона знає, що потрібно замінити `Cheap Dealz` на `[DEALERSHIP]` і `Jimmy Smith` на `[SALESPERSON]`, навіть якщо ми прямо не сказали їй це зробити.

[^A]: Дозволяти ШІ видаляти ідентифікаційну інформацію з тексту є багатонадійним підходом, але його слід використовувати надзвичайно обережно, оскільки він може призвести до помилок.


