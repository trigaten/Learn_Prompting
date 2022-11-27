---
sidebar_position: 2
---

# MRKL

MRKL Systems(@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, pronounced "miracle") 
are a **neuro-symbolic architecture** that combine LLMs (neural computation) and external 
tools like calculators (symbolic computation) 
to solve complex problems. 

A simple example of a MRKL system is a LLM that can 
use a calculator app. When asked, "What is 100*100?", the LLM can choose to
extract the numbers from the prompt, and then use the calculator app to compute
the result. This might look like the following:

```
Q: What is 100*100?

A: CALCULATOR[100*100]
```

The MRKL system would see the word `CALCULATOR` and plug `100*100` into the calculator app.
This simple idea could easily be expanded to various symbolic computing tools (Calculator, Weather API, Database, etc.).

Consider the following additional examples of applications: 

- A chatbot that is able to respond to questions about a financial database by 
extracting information to form a SQL query from a users' text.

```
Q: What is the price of Apple stock right now?

A: DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"]
```

- A chatbot that is able to respond to questions about the weather by extracting
information from the prompt and using a weather API to retrieve the information.

```
Q: What is the weather like in New York?

A: WEATHER API[New York]
```

- Or even much more complex tasks that depend on multiple datasources such as the
following:


import mrkl_task from '../assets/mrkl_task.png';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}} />
</div>


## Notes
MRKL was developed by [AI21](https://www.ai21.com/) and originally used their 
J-1 (Jurassic 1)(@lieberjurassic) LLM.


## An Example





## More

See [this example](https://langchain.readthedocs.io/en/latest/examples/agents/mrkl.html) of a MRKL System
built with LangChain.
