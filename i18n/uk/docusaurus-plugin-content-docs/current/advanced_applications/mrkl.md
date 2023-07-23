---
sidebar_position: 2
---

# 🟡 Використання інструментів ВММ

Системи MRKL (@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, вимовляється як "miracle" (міракл), в перекладі «чудо») — це **нейро-символьна архітектура**, яка поєднує ВММ (нейронні обчислення) і зовнішні інструменти, такі як калькулятори (символьні обчислення), для вирішення складних задач.

Система MRKL складається з набору модулів (наприклад: калькулятор, API погоди, база даних тощо) і маршрутизатора, який вирішує, як «направити» вхідні запити природною мовою до відповідного модуля.

Простим прикладом системи MRKL є ВММ, що може використовувати програму калькулятор. Це одномодульна система, де ВММ є маршрутизатором. На питання: `What is 100*100?`, ВММ може вилучити числа із запиту і надіслати їх системі MRKL для обчислення результату за допомогою програми калькулятора. Це виглядатиме приблизно так:

<pre>
<p>What is 100*100?</p>

<span className="bluegreen-highlight">CALCULATOR[100*100]</span>
</pre>

Система MRKL побачить слово `CALCULATOR` і вставить `100*100` у відповідну програму. Цю просту ідею можна легко використовувати в різних інструментах символьних обчислень.

Розглянемо наступні додаткові приклади застосування:

- Чат-бот, який може відповідати на запитання про фінансову базу даних, вилучаючи інформацію для формування SQL-запиту з тексту користувача.

<pre>
<p>What is the price of Apple stock right now?</p>

<span className="bluegreen-highlight">The current price is DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"].</span>
</pre>

- Чат-бот, який може відповідати на запитання про погоду, вилучаючи інформацію із запиту та використовуючи API погоди.

<pre>
<p>What is the weather like in New York?</p>

<span className="bluegreen-highlight">The weather is WEATHER_API[New York].</span>
</pre>

- Або навіть набагато складніші завдання, які залежать від кількох джерел даних, як-от:


import mrkl_task from '@site/docs/assets/advanced/mrkl_task.webp';
import dataset from '@site/docs/assets/advanced/mrkl/dataset.webp';
import load_dataset from '@site/docs/assets/advanced/mrkl/load_dataset.webp';
import model from '@site/docs/assets/advanced/mrkl/model.webp';
import extract from '@site/docs/assets/advanced/mrkl/extract.webp';
import search from '@site/docs/assets/advanced/mrkl/search.webp';
import final from '@site/docs/assets/advanced/mrkl/final.webp';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Приклад системи MRKL (AI21)
</div>

## Приклад

Я відтворив приклад системи MRKL з оригінальної статті, використовуючи Dust.tt (посилання [тут](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7)). Система читає математичну задачу (наприклад, `What is 20 times 5^6?`), вилучає числа та математичні операції, і переформатовує їх для програми калькулятора (наприклад, `20*5^6`). Потім вона надсилає переформатоване рівняння до програми калькулятора Google і видає результат. Зауважте, що в оригінальній статті виконується налаштування запитів маршрутизатора (ВММ), але тут я цього не роблю. Розглянемо, як це працює:

Спочатку я створив простий набір даних (dataset) на вкладці Dust `Datasets`.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={dataset} style={{width: "750px"}} />
</div>

Потім перейшов на вкладку `Specification` і завантажив набір даних за допомогою блоку `input`.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={load_dataset} style={{width: "750px"}} />
</div>

Згодом створив блок `llm`, який вилучає числа та математичні операції. Зверніть увагу, що у запиті я вказав, що ми будемо використовувати калькулятор Google. Модель, яку я застосовую (GPT-3), ймовірно, має певні знання про калькулятор Google із попереднього навчання.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={model} style={{width: "750px"}} />
</div>

Потім я створив блок `code`, який запускає простий код JavaScript для видалення пробілів із результату задачі.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={extract} style={{width: "750px"}} />
</div>

Зрештою, я створив блок `search`, який надсилає переформатоване рівняння до калькулятора Google.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={search} style={{width: "750px"}} />
</div>

Нижче ми можемо побачити остаточні результати, які, безперечно, правильні!

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={final} style={{width: "750px"}} />
</div>

Не соромтеся копіювати та експериментувати з цією платформою [тут](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7).

## Примітки
MRKL був розроблений [AI21](https://www.ai21.com/) та спочатку використовував їхні ВММ J-1 (Jurassic 1)(@lieberjurassic).

## Додаткова інформація

Перегляньте [цей приклад](https://python.langchain.com/docs/modules/agents/how_to/mrkl) системи MRKL, створеного за допомогою LangChain.
