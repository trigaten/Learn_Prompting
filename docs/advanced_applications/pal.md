---
sidebar_position: 4
---

# 🟡 Code as Reasoning

[Program-aided Language Models (PAL)](https://reasonwithpal.com)(@gao2022pal) are another example of a MRKL system.
When given a question, PALs are able to **write code** that solves this question. They send the
code to a programmatic runtime to get the result. PAL works in contrast to CoT; PAL's intermediate 
reasoning is code, while CoT's is natural language.

import image from '@site/docs/assets/advanced/pal.webp';

<div style={{textAlign: 'center'}}>
  <img src={image} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
PAL Example (Gao et al.)
</div>


One important thing to note it that PAL actually interleaves natural language (NL) and code.
In the above image, in blue are natural language reasoning that PAL generates. Although it
is not shown in the image, PAL actually generates '\#' before each line of NL reasoning, so
that they are interpreted as comments by the programmatic runtime.

## Example

Let's look at an example of PAL solving a math question. I use a 3-shot prompt, 
which is a simplified version of [this one](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal). 

I will use langchain, a Python package for chaining LLM functionality for this. First, a few installations are needed:

```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"
```

Then, we can create an instance of GPT-3 davinci-002 (an API call happens when we use this object)
```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

Here is the few shot prompt:

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

Now we can pass the combined prompt to GPT-3.

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

The output is:

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

Finally, we can pass this code to a Python runtime to get the answer:

```python
exec(llm_out)
print(result)
```

The output is **210**, which is correct.

See the Jupyter notebook for this example [here](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb).

## More

Also see [PAL's colab example](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).