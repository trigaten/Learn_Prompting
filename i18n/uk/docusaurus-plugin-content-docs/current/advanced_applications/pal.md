---
sidebar_position: 4
---

# 🟡 Код як міркування

[Програмовані мовні моделі (PAL)](https://reasonwithpal.com)(@gao2022pal) є ще одним прикладом системи MRKL. Отримавши запитання, PAL можуть **написати код**, який вирішить його. Код надсилається до програмного середовища виконання для отримання результату. PAL і CoT працюють по-різному; проміжним міркуванням PAL є код, тоді як у CoT — природна мова.

import image from '@site/docs/assets/advanced/pal.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Приклад PAL (Ґао та ін.)
</div>

Важливо зауважити, що PAL поєднує природну мову (NL - natural language) і код. На наведеному вище зображенні синім кольором показано міркування природною мовою, які створює PAL. Хоча тут цього і не видно, проте PAL генерує '\#' перед кожним рядком міркування природною мовою, так що програмне середовище виконання інтерпретує їх як коментарі.

## Наприклад

Давайте розглянемо приклад вирішення математичної задачі за допомогою PAL. Маю запит з трьох питань, що є спрощеною версією [цього](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal).

Для цього я буду використовувати langchain, пакет Python для об'єднання в ланцюг функціональності ВМM. По-перше, потрібно виконати кілька налаштувань:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

Потім ми можемо створити копію GPT-3 davinci-002 (коли це буде зроблено, відбудеться виклик API)
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

Ось кілька прикладів запиту:

```python
MATH_PROMPT = '''
Q: There were nine computers in the server room. Five more computers were installed each day, from monday to thursday. How many computers are now in the server room?

# solution in Python:
"""There were nine computers in the server room. Five more computers were installed each day, from monday to thursday. How many computers are now in the server room?"""
computers_initial = 9
computers_per_day = 5
num_days = 4  # 4 days between monday and thursday
computers_added = computers_per_day * num_days
computers_total = computers_initial + computers_added
result = computers_total
return result


Q: Shawn has five toys. For Christmas, he got two toys each from his mom and dad. How many toys does he have now?

# solution in Python:
"""Shawn has five toys. For Christmas, he got two toys each from his mom and dad. How many toys does he have now?"""
toys_initial = 5
mom_toys = 2
dad_toys = 2
total_received = mom_toys + dad_toys
total_toys = toys_initial + total_received
result = total_toys


Q: Jason had 20 lollipops. He gave Denny some lollipops. He gave Denny some lollipops. How many lollipops did Jason give to Denny?

# solution in Python:
"""Jason had 20 lollipops. He gave Denny some lollipops. He gave Denny some lollipops. How many lollipops did Jason give to Denny?"""
jason_lollipops_initial = 20
jason_lollipops_after = 12
denny_lollipops = jason_lollipops_initial - jason_lollipops_after
result = denny_lollipops

Q: {question}

# solution in Python:
'''
```

Тепер ми можемо надіслати GPT-3 комбінований запит.

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

Результат:

<pre>
<span className="bluegreen-highlight">
Emma took a 60 minute plane ride to seattle. She then took a 2 hour train ride to portland, and then a 30 minute bus ride to vancouver. How long did it take her to get to vancouver?<br/><br/>

plane_ride = 60<br/>
train_ride = 2 * 60  # 2 hours in minutes<br/>
bus_ride = 30<br/>
total_time = plane_ride + train_ride + bus_ride<br/>
result = total_time
</span>
</pre>

Нарешті, цей код можна передати до середовища виконання Python, щоб отримати відповідь:

```python
exec(llm_out)
print(result)
```

Результат: **210**, і це правильно.

Перегляньте блокнот Jupyter для цього прикладу [тут](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb).

## Додаткова інформація

Також перегляньте [приклад PAL's colab ](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).