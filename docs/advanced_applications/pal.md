---
sidebar_position: 4
---

# 🟡 Code as Reasoning

Dalším příkladem systému MRKL jsou [Program-aided Language Models (PAL)](https://reasonwithpal.com)(@gao2022pal).
Když je jim zadána otázka, %%PALy|PAL%% jsou schopny **napsat kód**, který tuto otázku vyřeší. Odesílají kód do programového runtime, aby získaly výsledek. PAL pracuje na jinak než %%CoT|Chain of Thought Prompting%%; PALův meziprodukt uvažování je kód, zatímco u CoT je to přirozený jazyk.

import image from '@site/docs/assets/pal.png';

<div style={{textAlign: 'center'}}>
  <img src={image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Příklad PAL (Gao a kol.)
</div>


Je třeba si uvědomit jednu důležitou věc: PAL ve skutečnosti prolíná přirozený jazyk (Natural Language – NL) a kód. Na výše uvedeném obrázku jsou modře vyznačeny úvahy v přirozeném jazyce, které PAL generuje. Ačkoli není na obrázku zobrazen, PAL ve skutečnosti generuje '\#' před každým řádkem úvahy NL, aby je programový runtime interpretoval jako komentáře.

## Příklad

Podívejme se na příklad, jak PAL řeší matematickou otázku. Používám prompt se třemi shoty (a 3-shot prompt), který je zjednodušenou verzí [tohoto promptu](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal). 

Použiji k tomu langchain, balíček jazyka Python pro řetězení funkcí LLM. Nejprve je potřeba provést několik instalací:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

Poté můžeme vytvořit instanci GPT-3 davinci-002 (API call se uskuteční, když použijeme tento objekt)
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

Zde je %%few shot prompt|few shot standard prompt%%:

```python
MATH_PROMPT = '''
Q: V serverovně bylo devět počítačů. Každý den od pondělí do čtvrtka bylo instalováno dalších pět počítačů. Kolik počítačů je nyní v serverovně?

# řešení v jazyce Python:
"""V serverovně bylo devět počítačů. Každý den, od pondělí do čtvrtka, bylo nainstalováno dalších pět počítačů. Kolik počítačů je nyní v serverovně?"""
computers_initial = 9
omputers_per_day = 5
num_days = 4 # 4 dny od pondělí do čtvrtka
computers_added = computers_per_day * num_days
computers_total = computers_initial + computers_added
result = computers_total
return result


Otázka: Shawn má pět hraček. K Vánocům dostal od maminky a tatínka po dvou hračkách. Kolik hraček má nyní?

# řešení v Pythonu:
"""Shawn má pět hraček. K Vánocům dostal od maminky a tatínka po dvou hračkách. Kolik hraček má nyní?"""
toys_initial = 5
mom_toys = 2
dad_toys = 2
total_received = mom_toys + dad_toys
total_toys = toys_initial + total_received
result = total_toys


Otázka: Jason měl 20 lízátek. Dal Dennymu několik lízátek. Nyní má Jason 12 lízátek. Kolik lízátek dal Jason Dennymu?

# řešení v Pythonu:
"""Jason měl 20 lízátek. Dal Dennymu několik lízátek. Nyní má Jason 12 lízátek. Kolik lízátek dal Jason Dennymu?"""
jason_lollipops_initial = 20
jason_lollipops_after = 12
denny_lollipops = jason_lollipops_initial - jason_lollipops_after
result = denny_lollipops

Otázka: {otázka}

# řešení v Pythonu:
'''
```

Nyní můžeme kombinovaný prompt předat GPT-3.

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

Výstup je následující:

<pre>
<span className="bluegreen-highlight">
Emma letěla 60 minut letadlem do Seattlu. Poté jela 2 hodiny vlakem do Portlandu a následně 30 minut autobusem do Vancouveru. Jak dlouho jí trvala cesta do vancouveru?<br/><br/>?

plane_ride = 60<br/>
train_ride = 2 * 60  # 2 hodiny v minutách<br/>
bus_ride = 30<br/>
total_time = plane_ride + train_ride + bus_ride<br/>
result = total_time
</span>
</pre>

Nakonec můžeme tento kód předat Python runtime a získat odpověď:

```python
exec(llm_out)
print(result)
```

Výsledek je **210**, což je správně.

Viz zápisník Jupyter pro tento příklad [zde](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb).

## Více

Podívejte se také na příklad [PAL's colab example](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).