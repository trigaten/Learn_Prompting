---
sidebar_position: 4
---

# 🟡 کوڈ بطور استدلال

[پروگرام کی مدد سے لینگویج ماڈلز (PAL)](https://reasonwithpal.com)(@gao2022pal) MRKL سسٹم کی ایک اور مثال ہیں۔
جب کوئی سوال دیا جاتا ہے، PALs **کوڈ لکھنے کے قابل ہوتے ہیں** جو اس سوال کو حل کرتا ہے۔ وہ بھیجتے ہیں۔
نتیجہ حاصل کرنے کے لیے پروگرامی رن ٹائم کا کوڈ۔ PAL CoT کے برعکس کام کرتا ہے۔ PAL کا انٹرمیڈیٹ
استدلال کوڈ ہے، جبکہ CoT قدرتی زبان ہے۔


ایک اہم بات یہ نوٹ کرنا ہے کہ PAL دراصل قدرتی زبان (NL) اور کوڈ کو آپس میں جوڑتا ہے۔
مندرجہ بالا تصویر میں، نیلے رنگ میں قدرتی زبان کے استدلال ہیں جو PAL تیار کرتا ہے۔ اگرچہ یہ
تصویر میں نہیں دکھایا گیا ہے، PAL دراصل NL استدلال کی ہر سطر سے پہلے '\#' پیدا کرتا ہے، لہذا
کہ ان کی تشریح پروگرامیٹک رن ٹائم کے ذریعے تبصروں سے کی جاتی ہے۔

## مثال

آئیے PAL کی ریاضی کے سوال کو حل کرنے کی ایک مثال دیکھیں۔ میں 3 شاٹ پرامپٹ استعمال کرتا ہوں،
جو کہ [اس والا](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal) کا ایک آسان ورژن ہے۔

میں اس کے لیے LLM فعالیت کو زنجیر بنانے کے لیے langchain، ایک Python پیکیج استعمال کروں گا۔ سب سے پہلے، چند تنصیبات کی ضرورت ہے:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

پھر، ہم GPT-3 davinci-002 کی ایک مثال بنا سکتے ہیں (جب ہم اس آبجیکٹ کو استعمال کرتے ہیں تو ایک API کال ہوتی ہے)
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

یہاں چند شاٹ پرامپٹ ہیں:

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


Q: Jason had 20 lollipops. He gave Denny some lollipops. Now Jason has 12 lollipops. How many lollipops did Jason give to Denny?

# solution in Python:
"""Jason had 20 lollipops. He gave Denny some lollipops. Now Jason has 12 lollipops. How many lollipops did Jason give to Denny?"""
jason_lollipops_initial = 20
jason_lollipops_after = 12
denny_lollipops = jason_lollipops_initial - jason_lollipops_after
result = denny_lollipops

Q: {question}

# solution in Python:
'''
```

اب ہم مشترکہ پرامپٹ کو GPT-3 پر منتقل کر سکتے ہیں۔

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

آؤٹ پٹ ہے:

<pre>
<span className="bluegreen-highlight">
ایما نے سیٹل کے لیے 60 منٹ کی ہوائی جہاز کی سواری کی۔ اس کے بعد اس نے پورٹ لینڈ کے لیے 2 گھنٹے کی ٹرین کی سواری کی، اور پھر وینکوور کے لیے 30 منٹ کی بس کی سواری کی۔ اسے وینکوور پہنچنے میں کتنا وقت لگا؟<br/><br/>

plane_ride = 60<br/>
train_ride = 2 * 60  # 2 hours in minutes<br/>
bus_ride = 30<br/>
total_time = plane_ride + train_ride + bus_ride<br/>
result = total_time
</span>
</pre>

آخر میں، ہم جواب حاصل کرنے کے لیے اس کوڈ کو ازگر کے رن ٹائم میں منتقل کر سکتے ہیں:

```python
exec(llm_out)
print(result)
```

آؤٹ پٹ **210** ہے، جو درست ہے۔

اس مثال کے لیے Jupyter نوٹ بک دیکھیں [یہاں](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb)۔

## مزید

[PAL کی کولاب کی مثال](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V) بھی دیکھیں۔