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


import mrkl_task from '@site/docs/assets/mrkl_task.png';
import dataset from '@site/docs/assets/mrkl/dataset.png';
import load_dataset from '@site/docs/assets/mrkl/load_dataset.png';
import model from '@site/docs/assets/mrkl/model.png';
import extract from '@site/docs/assets/mrkl/extract.png';
import search from '@site/docs/assets/mrkl/search.png';
import final from '@site/docs/assets/mrkl/final.png';
import toolformer_datagen from '@site/docs/assets/mrkl/toolformer_datagen.png';
import toolformer_examples from '@site/docs/assets/mrkl/toolformer_examples.png';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Example MRKL System (AI21)
</div>


## An Example

I have reproduced an example MRKL System from the original paper, using Dust.tt, 
linked [here](https://dust.tt/trigaten/a/98bdd65cb7). 
The system reads a math problem (e.g. `What is 20 times 5^6?`), extracts the numbers and the operations,
and reformats them for a calculator app (e.g. `20*5^6`). It then sends the reformatted equation 
to Google's calculator app, and returns the result. Note that the original paper performs prompt tuning on the router (the LLM), but I do not in this example. Let's walk through how this works:

First, I made a simple dataset in the Dust `Datasets` tab.


<div style={{textAlign: 'center'}}>
  <img src={dataset} style={{width: "750px"}} />
</div>

Then, I switched to the `Specification` tab and loaded the dataset using a `data` block.

<div style={{textAlign: 'center'}}>
  <img src={load_dataset} style={{width: "750px"}} />
</div>

Next, I created a `llm` block that extracts the numbers and operations. Notice how
in the prompt I told it we would be using Google's calculator. The model I use (GPT-3)
likely has some knowledge of Google's calculator from pretraining.

<div style={{textAlign: 'center'}}>
  <img src={model} style={{width: "750px"}} />
</div>

Then, I made a `code` block, which runs some simple javascript code to remove 
spaces from the completion.

<div style={{textAlign: 'center'}}>
  <img src={extract} style={{width: "750px"}} />
</div>

Finally, I made a `search` block that sends the reformatted equation to Google's calculator.

<div style={{textAlign: 'center'}}>
  <img src={search} style={{width: "750px"}} />
</div>

Below we can see the final results, which are all correct!

<div style={{textAlign: 'center'}}>
  <img src={final} style={{width: "750px"}} />
</div>

Feel free to clone and experiment with this playground [here](https://dust.tt/trigaten/a/98bdd65cb7).

## Notes
MRKL was developed by [AI21](https://www.ai21.com/) and originally used their 
J-1 (Jurassic 1)(@lieberjurassic) LLM.

## Toolformer
Recently, Meta AI Research and Universitat Pompeu Fabra released a paper on Toolformer (@schick2023toolformer)—an LLM trained to use external tools via API calls. Toolformer improves the capabilities of LLMs in tasks they previously struggled with, including precise calculations, accessing recent information, understanding low-resource languages, and understanding time. The ultimate goal of the Toolformer paper was to allow LLMs to know when and how to use API calls to get the information it needs for accurate output.

The novelty of the Toolformer paper stems from the training methodology. **While prior attempts required large datasets with manual annotations, this paper uses a supervised training approach that generates its training data from a small number of human annotations.** Interestingly, the large dataset was generated by prompting a secondary LLM to generate API calls given an expected output. An example is shown below: 

<div style={{textAlign: 'center'}}>
  <img src={toolformer_datagen} style={{width: "350px"}} />
</div>

GPT-J was used as the base model and was finetuned on this dataset. The resulting Toolformer model effectively utilized API calls to accurately answer questions that asked for recent information, calculations, time, or translation. Example prompts and outputs are shown below:

<div style={{textAlign: 'center'}}>
  <img src={toolformer_examples} style={{width: "750px"}} />
</div>

Toolformer outperforms the base GPT-J and other LLMs such as OPT-66B and GPT-3 on these tasks, showing the power of supervised learning in improving model performance. However, LLM tool use is an active area of research with many improvements to be made. These potential improvements include allowing the LLM to "chain" API calls (using the output of one call as the input of another), allowing the LLM to "browse" results of search queries to refine its answer, and providing additional data—such as costs of an API call—to allow the model to reason if the call is worth it.

## More

See [this example](https://langchain.readthedocs.io/en/latest/modules/agents/implementations/mrkl.html) of a MRKL System
built with LangChain.
