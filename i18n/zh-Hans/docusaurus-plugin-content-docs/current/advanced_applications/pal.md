---
sidebar_position: 4
---

# 🟡 代码推理

[程序辅助语言模型（Program-aided Language Models, PAL）](https://reasonwithpal.com)(@gao2022pal) 是另一个MRKL系统的例子。给定一个问题，PAL能够编写代码解决这个问题。它将代码发送到编程运行时以获得结果。PAL的中间推理是代码，而CoT的是自然语言。

import image from '@site/docs/assets/advanced/pal.webp';

<div style={{textAlign: 'center'}}>
  <img src={image} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
PAL 示例 (Gao et al.)
</div>

需要注意的是，PAL实际上交织了自然语言（NL）和代码。上面的图片中，蓝色的是PAL生成的自然语言推理。虽然图中没有显示，PAL实际上在每行自然语言推理前生成'\#'，以便编程运行时将其解释为注释。

## 示例

让我们看一个PAL解决数学问题的例子。我使用了一个三样本的提示，这是[这个提示](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal)的简化版本。

我将使用`langchain`，这是一个用于链接LLM功能的Python包。首先，需要安装一些程序：

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

然后，我们可以创建一个GPT-3 davinci-002实例（当使用此对象时会进行API调用）：
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

这是提示：

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

现在我们可以将组合好的提示传递给GPT-3。

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

输出是：

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

最后，我们可以将这段代码传递给 Python 运行时以获得答案：

```python
exec(llm_out)
print(result)
```

输出是 **210**，这是正确的答案。

可以在Jupyter 笔记本查看这个[例子](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb)。
## 更多

也可以看看 [PAL's colab example](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).