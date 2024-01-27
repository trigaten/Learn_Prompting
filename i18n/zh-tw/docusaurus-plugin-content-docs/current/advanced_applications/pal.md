---
sidebar_position: 4
---

# 🟡 程式碼推理

[程式輔助語言模型（Program-aided Language Models, PAL）](https://reasonwithpal.com)(@gao2022pal) 是另一個 MRKL 系統的例子。給定一個問題，PAL 能夠編寫程式碼解決這個問題。它將程式碼傳送到程式設計執行時以獲得結果。PAL 的中間推理是程式碼，而 CoT 的是自然語言。

import image from '@site/docs/assets/advanced/pal.webp';

<div style={{textAlign: 'center'}}>
  <img src={image} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
PAL 範例 (Gao et al.)
</div>

需要注意的是，PAL 實際上交織了自然語言（NL）和程式碼。上面的圖片中，藍色的是 PAL 生成的自然語言推理。雖然圖中沒有顯示，PAL 實際上在每行自然語言推理前生成'\#'，以便程式設計執行時將其解釋為註釋。

## 範例

讓我們看一個 PAL 解決數學問題的例子。我使用了一個三樣本的提示，這是[這個提示](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal)的簡化版本。

我將使用 `langchain`，這是一個用於連結 LLM 功能的 Python 套件包。首先，需要安裝一些套件:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

然後，我們可以建立一個 GPT-3 `davinci-002` 的 `llm` 實例（當使用此物件時會進行 API 呼叫）：
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

這是提示:

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

現在我們可以將組合好的提示傳遞給 GPT-3。

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

輸出是：

<pre>
<span className="bluegreen-highlight">
"""Emma took a 60 minute plane ride to seattle. She then took a 2 hour train ride to portland, and then a 30 minute bus ride to vancouver. How long did it take her to get to vancouver?"""<br/>

plane_ride = 60<br/>
train_ride = 2 * 60  # 2 hours in minutes<br/>
bus_ride = 30<br/>
total_time = plane_ride + train_ride + bus_ride<br/>
result = total_time
</span>
</pre>

最後，我們可以將這段程式碼傳遞給 Python 執行時以獲得答案：

```python
exec(llm_out)
print(result)
```

輸出是 **210**，這是正確的答案。

可以在 Jupyter 筆記本檢視這個[例子](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb)。

## 更多

也可以看看 [PAL's colab example](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).