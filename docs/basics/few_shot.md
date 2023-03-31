---
sidebar_position: 3
---

# 🟢 Few shot prompting

import FewShot from '../assets/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>


Yet another prompting strategy is *few shot prompting*, which is basically just showing the model a few examples of what you want it to do. 

Here is

### Two examples of standard prompts:


_Standard Prompt_
```
What is the capital of France?
```

_Standard Prompt in QA format_
```
Q: What is the capital of France?

A:
```

## Few Shot Standard Prompts

Few shot standard prompts(@liu2021pretrain) are just standard prompts that have _exemplars_
in them. Exemplars are examples of the task that the prompt is trying to solve, 
which are included in the prompt itself (@brown2020language). In research, few shot standard prompts 
are sometimes referred to simply as standard prompts (though we attempt not to do so in this guide).

### Two examples of few shot standard prompts:

_Few Shot Standard Prompt_

```
What is the capital of Spain?
Madrid
What is the capital of Italy?
Rome
What is the capital of France?
```

_Few Shot Standard Prompt in QA format_
```
Q: What is the capital of Spain?
A: Madrid
Q: What is the capital of Italy?
A: Rome
Q: What is the capital of France?
A:
```

Few shot prompts facilitate "few shot" AKA "in context" learning, which is the 
ability to learn without parameter updates(@zhao2021calibrate).

