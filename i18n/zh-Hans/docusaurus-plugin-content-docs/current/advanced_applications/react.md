---
sidebar_position: 3
---

# 🟡 具有推理和行动能力的LLMs

ReAct(@yao2022react)(reason, act)是一种使用自然语言推理解决复杂任务的语言模型范例。ReAct旨在用于允许LLM执行某些操作的任务。例如，在MRKL系统中，LLM可以与外部API交互以检索信息。当提出问题时，LLM可以选择执行操作以检索信息，然后根据检索到的信息回答问题。

ReAct系统可以被视为具有**推理和行动能力**的MRKL系统，。

请查看以下图像。顶部框中的问题来自HotPotQA(@yang2018hotpotqa)，这是一个需要复杂推理的问答数据集。 ReAct能够首先通过推理问题（Thought 1），然后执行一个动作（Act 1）来向Google发送查询来回答问题。然后它收到了一个观察（Obs 1），并继续进行这个思想，行动，观察循环，直到达到结论（Act 3）。

import react_qa from '@site/docs/assets/react_qa.png';

<div style={{textAlign: 'center'}}>
  <img src={react_qa} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
ReAct System (Yao et al.)
</div>

具有强化学习知识的读者可能会认为，这个过程类似于经典的RL循环：状态，行动，奖励，状态，...。ReAct在其论文中对此进行了一些规范化。

## 结论

谷歌在ReAct的实验中使用了PaLM(@chowdhery2022palm) LLM。与标准提示（仅问题）、CoT和其他配置进行比较表明，ReAct在复杂推理任务方面的表现是有希望的。谷歌还对涵盖事实提取和验证的Fever数据集(@thorne2018fever)进行了研究。

import react_performance from '@site/docs/assets/react_performance.png';

<div style={{textAlign: 'center'}}>
  <img src={react_performance} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
ReAct Results (Yao et al.)
</div>

