---
sidebar_position: 3
---

# Dust 

[Dust](https://dust.tt/) is a prompt engineering tool built for chaining prompts together. They provide 
a web interface for writing prompts and chaining them together. 

At the moment, it has a steep learning curve compared to other prompt engineering
IDEs.

import Image from '@site/docs/assets/tooling/dust.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}}/>
</div>

## Features

Dust provides robust tooling in the form of a number of composable "blocks", for 
functions like LLM querying, code snippets, and internet searches. Dust also supports 
the use of datasets and automatically testing prompts against datasets. 

Current Dust functionality focuses on chaining prompts rather than iterating on a single prompt.

Dust supports multiple model providers: (OpenAI, Cohere), and has planned support for HuggingFace and Replicate. API keys are required for all providers.

You can deploy LLM apps built in Dust.

## Notes

Dust has recently reached 1,000 active users.

