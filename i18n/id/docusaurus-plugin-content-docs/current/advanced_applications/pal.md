---
sidebar_position: 4
---

# 🟡 Kode sebagai Penalaran

[Model Bahasa yang Didukung Program/Program-aided Language Models (PAL)](https://reasonwithpal.com)(@gao2022pal) adalah contoh lain dari sistem MRKL. Ketika diberikan pertanyaan, PAL dapat **menulis kode** yang menyelesaikan pertanyaan tersebut. Mereka mengirim kode ke runtime pemrograman untuk mendapatkan hasilnya. Mereka mengirimkan kode ke programmatic runtime untuk mendapatkan hasilnya. PAL bekerja berbeda dengan CoT; penalaran menengah PAL adalah kode, sedangkan CoT adalah bahasa alami.

import image from '@site/docs/assets/advanced/pal.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Contoh PAL (Gao et al.)
</div>

Satu hal penting yang perlu dicatat adalah bahwa PAL sebenarnya memadukan bahasa alami (NL) dan kode. Dalam gambar di atas, berwarna biru adalah reasoning bahasa alami yang dihasilkan oleh PAL. Meskipun itu tidak ditampilkan dalam gambar, PAL sebenarnya menghasilkan '\#' sebelum setiap baris penalaran NL, sehingga mereka diinterpretasikan sebagai komentar oleh runtime programmatic.

## Contoh

Mari kita lihat contoh penyelesaian PAL dalam menjawab pertanyaan matematika. Saya menggunakan pertanyaan 3-shot, yang merupakan versi yang disederhanakan dari [ini](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal).

Saya akan menggunakan langchain, sebuah paket Python untuk menggabungkan fungsionalitas LLM untuk ini. Pertama, beberapa instalasi diperlukan:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

Kemudian, kita dapat membuat sebuah instansi GPT-3 davinci-002 (pemanggilan API terjadi ketika kita menggunakan objek ini)
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

Berikut adalah few shot prompt:

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

Sekarang kita bisa meneruskan prompt gabungan ke GPT-3.

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

Hasilnya adalah:

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

Akhirnya, kita bisa meneruskan kode ini ke runtime Python untuk mendapatkan jawabannya:

```python
exec(llm_out)
print(result)
```

Keluaran adalah **210**, yang benar.

Lihat notebook Jupyter untuk contoh ini [di sini](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb).

## Lebih Banyak

Lihat juga contoh kolaborasi PAL's [](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).