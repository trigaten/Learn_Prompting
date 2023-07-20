---
sidebar_position: 2
---

# 🟡 Использование инструментов LLMs

Системы MRKL (@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, произносится как "miracle" ну или "чудо") 
представляют собой **нейро-символическую архитектуру**, которая объединяет LLM (нейронные вычисления) и внешние инструменты, такие как калькуляторы (символьные вычисления), для решения сложных задач. 

Система MRKL состоит из набора модулей (например, калькулятор, погодный API, база данных и т.д.) и маршрутизатора, который решает, как "направить" входящие запросы на естественном языке в соответствующий модуль.

Простым примером системы MRKL является LLM, который может 
использовать приложение калькулятор. Это одномодульная система, где LLM является маршрутизатором.
На вопрос `Сколько будет 100*100?`, LLM может выбрать извлечь числа из подсказки, а затем сказать системе MRKL использовать приложение калькулятора для вычисления результата. 
Это может выглядеть следующим образом:

<pre>
<p>Сколько будет 100*100?</p>

<span className="bluegreen-highlight">CALCULATOR[100*100]</span>
</pre>

Система MRKL увидит слово `CALCULATOR` и вставит `100*100` в приложение калькулятора.
Эта простая идея может быть легко распространена на различные инструменты символьных вычислений.

Рассмотрим следующие дополнительные примеры применения: 

- Чатбот, способный отвечать на вопросы о финансовой базе данных путем извлечения информации для формирования SQL-запроса из текста пользователя.

<pre>
<p>Какова сейчас цена акций Apple?</p>

<span className="bluegreen-highlight">Текущая цена - DATABASE[ВЫБРАТЬ цену ИЗ акций ГДЕ компания = "Apple" И время = "сейчас"].</span>
</pre>

- Чатбот, способный отвечать на вопросы о погоде, извлекая информацию из подсказки (prompt) и используя погодный API для получения информации. 

<pre>
<p>Какая погода (weather) в Нью-Йорке?</p>

<span className="bluegreen-highlight">Погода - WEATHER_API[Нью-Йорк].</span>
</pre>

- Или даже гораздо более сложные задачи, которые зависят от нескольких источников данных, например, следующие: 


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
Пример системы MRKL  (AI21)
</div>


## Пример

Я воспроизвел пример MRKL системы из оригинальной статьи, используя Dust.tt, 
ссылка [здесь](https://dust.tt/trigaten/a/98bdd65cb7). 
Система читает математическую задачу (например, `Сколько будет 20 раз по 5^6?`), извлекает числа и операции, и переформатирует их для приложения калькулятора (например, `20*5^6`). Затем он отправляет переформатированное уравнение в приложение-калькулятор Google и возвращает результат. Обратите внимание, что в оригинальной статье выполняется оперативная настройка маршрутизатора (LLM), но в данном примере я этого не делаю. Давайте рассмотрим, как это работает:

Сначала я создал простой набор данных (dataset) на вкладке Dust `Datasets`.


<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={dataset} style={{width: "750px"}} />
</div>

Затем я переключился на вкладку `Specification` и загрузил набор данных с помощью блока `data`.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={load_dataset} style={{width: "750px"}} />
</div>

Далее я создал блок `llm`, который извлекает числа и операции. Обратите внимание, что в подсказке я сообщил, что мы будем использовать калькулятор Google. Модель, которую я использую (GPT-3), вероятно, имеет некоторые знания о калькуляторе Google из предварительного обучения. 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={model} style={{width: "750px"}} />
</div>

Затем я создал блок `code`, который запускает простой код javascript для удаления пробелов из завершения.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={extract} style={{width: "750px"}} />
</div>

Наконец, я сделал блок `search`, который отправляет переформатированное уравнение в калькулятор Google.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={search} style={{width: "750px"}} />
</div>

Ниже мы видим окончательные результаты, которые все верны!

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={final} style={{width: "750px"}} />
</div>

Не стесняйтесь клонировать и экспериментировать с этой платформой [здесь] (https://dust.tt/trigaten/a/98bdd65cb7).

## Примечания
MRKL был разработан [AI21](https://www.ai21.com/) и первоначально использовал их J-1 (Jurassic 1)(@lieberjurassic) LLM. 

## Больше

Смотрите [этот пример](https://langchain.readthedocs.io/en/latest/modules/agents/implementations/mrkl.html) системы MRKL построенной с использованием LangChain.
