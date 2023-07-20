---
sidebar_position: 2
---

# 🟡 LLMs Using Tools

MRKL Systems(@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, pronounced "miracle") 
are a **neuro-symbolic architecture** that combine LLMs (neural computation) and external 
tools like calculators (symbolic computation), to solve complex problems. 

A MRKL system is composed of a set of modules (e.g. a calculator, weather API, database, etc.) and a router that decides how to 'route' incoming natural language queries to the appropriate module.

A simple example of a MRKL system is a LLM that can 
use a calculator app. This is a single module system, where the LLM is the router.
When asked, `What is 100*100?`, the LLM can choose to
extract the numbers from the prompt, and then tell the MRKL System to use a calculator 
app to compute the result. This might look like the following:

<pre>
<p>What is 100*100?</p>

<span className="bluegreen-highlight">CALCULATOR[100*100]</span>
</pre>

The MRKL system would see the word `CALCULATOR` and plug `100*100` into the calculator app.
This simple idea can easily be expanded to various symbolic computing tools.

Consider the following additional examples of applications: 

- A chatbot that is able to respond to questions about a financial database by 
extracting information to form a SQL query from a users' text.

<pre>
<p>What is the price of Apple stock right now?</p>

<span className="bluegreen-highlight">The current price is DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"].</span>
</pre>

- A chatbot that is able to respond to questions about the weather by extracting
information from the prompt and using a weather API to retrieve the information.

<pre>
<p>What is the weather like in New York?</p>

<span className="bluegreen-highlight">The weather is WEATHER_API[New York].</span>
</pre>

- Or even much more complex tasks that depend on multiple datasources, such as the
following:


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
Example MRKL System (AI21)
</div>


## An Example

I have reproduced an example MRKL System from the original paper, using Dust.tt, 
linked [here](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7). 
The system reads a math problem (e.g. `What is 20 times 5^6?`), extracts the numbers and the operations,
and reformats them for a calculator app (e.g. `20*5^6`). It then sends the reformatted equation 
to Google's calculator app, and returns the result. Note that the original paper performs prompt tuning on the router (the LLM), but I do not in this example. Let's walk through how this works:

First, I made a simple dataset in the Dust `Datasets` tab.


<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={dataset} style={{width: "750px"}} />
</div>

Then, I switched to the `Specification` tab and loaded the dataset using an `input` block.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={load_dataset} style={{width: "750px"}} />
</div>

Next, I created a `llm` block that extracts the numbers and operations. Notice how
in the prompt I told it we would be using Google's calculator. The model I use (GPT-3)
likely has some knowledge of Google's calculator from pretraining.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={model} style={{width: "750px"}} />
</div>

Then, I made a `code` block, which runs some simple javascript code to remove 
spaces from the completion.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={extract} style={{width: "750px"}} />
</div>

Finally, I made a `search` block that sends the reformatted equation to Google's calculator.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={search} style={{width: "750px"}} />
</div>

Below we can see the final results, which are all correct!

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={final} style={{width: "750px"}} />
</div>

Feel free to clone and experiment with this playground [here](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7).

## Notes
MRKL was developed by [AI21](https://www.ai21.com/) and originally used their 
J-1 (Jurassic 1)(@lieberjurassic) LLM.

## More

See [this example](https://python.langchain.com/docs/modules/agents/how_to/mrkl) of a MRKL System
built with LangChain.
