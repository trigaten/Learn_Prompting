---
sidebar_position: 3
---

# 🟡 LLMs that Reason and Act

ReAct(@yao2022react)(reason, act) is a paradigm for enabling language models to solve complex 
tasks using natural language reasoning. ReAct is designed for tasks in which the LLM is 
allowed to perform certain actions. For example, as in a MRKL system, a LLM may be able 
to interact with external APIs to retrieve information. When asked a question, the LLM
could choose to perform an action to retrieve information, and then answer the question
based on the retrieved information.

ReAct Systems can be thought of as MRKL systems, with the added ability to **reason
about** the actions they can perform.

Examine the following image. The question in the top box is sourced from HotPotQA(@yang2018hotpotqa),
a question answering dataset that requires complex reasoning. ReAct is able to answer the question by
first reasoning about the question (Thought 1), and then performing an action (Act 1) to send a query 
to Google. It then receives an observation (Obs 1), and continues with this thought, action, observation
loop until it reaches a conclusion (Act 3). 


import react_qa from '@site/docs/assets/advanced/react_qa.webp';

<div style={{textAlign: 'center'}}>
  <img src={react_qa} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
ReAct System (Yao et al.)
</div>


Readers with knowledge of reinforcement learning may recognize this process as similar to the classic
RL loop of state, action, reward, state,... ReAct provides some formalization for 
this in their paper.


## Results

Google used the PaLM(@chowdhery2022palm) LLM in experiments with ReAct. 
Comparisons to standard prompting (question only), CoT, and other configurations
show that ReAct's performance is promising for complex reasoning tasks. Google 
also performs studies on the FEVER dataset(@thorne2018fever), which covers
fact extraction and verification. 

import react_performance from '@site/docs/assets/advanced/react_performance.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={react_performance} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
ReAct Results (Yao et al.)
</div>

