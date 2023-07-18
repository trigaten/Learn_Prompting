---
sidebar_position: 200000
---

# 🔥 Hot Topics

## GPT-4

GPT-4(@openai2023gpt4) is the next LLM in OpenAI's GPT series. It improves upon GPT-3 in a number of ways, including better reasoning and longer context length. Currently, we do not directly cover it in this course since 1) not everyone has access to it yet and 2) most of the prompting strategies we cover in this website work for GPT-4 as well. We encourage you to read the [OpenAI page](https://openai.com/research/gpt-4) on GPT-4 for more details.

## Agents

Agents are AI systems that can take actions and perform tasks, which often include the use of tools.

### Auto-GPT
Imagine having a personal assistant that can do anything you want with the power of AI. Auto-GPT is that, an open-source application that uses OpenAI’s GPT-4 to perform autonomous tasks. Created by Toran Bruce Richards, it works by breaking down a given goal into sub-tasks and then using the internet and other tools to complete those sub-tasks(@richards2023). For example, if you ask Auto-GPT to ''write a blog post about the latest news in artificial intelligence,” it will first find the latest news articles about artificial intelligence, read them, and then write a blog post about what it learned. To use Auto-GPT, you need to follow the setup instructions [here](https://significant-gravitas.github.io/Auto-GPT/setup/). Once you have installed Auto-GPT, you can start using it by typing a goal into the prompt bar. Auto-GPT will then try to achieve that goal.

### Baby AGI
BabyAGI is an AI-powered task management system created by Yohei Nakajima(@nakajima2023). The system uses OpenAI and Pinecone APIs to create and execute tasks based on the priority and difficulty of previous tasks and a predefined objective. BabyAGI works by running a loop that does the following steps:
1. Pulls the first task from the task list.
2. Sends the task to the execution agent, which uses OpenAI's API to complete the task based on the context.
3. Enriches the result and stores it in Chroma.
4. Creates new tasks and reprioritizes the task list based on the objective and the result of the previous task.

### AgentGPT
Reworkd’s [AgentGPT](https://agentgpt.reworkd.ai/) is a platform that unleashes users to craft and deploy self-reliant AI agents, ranging from customer service to data analysis(@reworkd2023). It educates an AI agent on a distinct task and then endows it to accomplish a preordained goal. Agents can exploit diverse APIs to access and process real-world information, and they can also converse with humans and other agents. To use AgentGPT, users need to register and select a goal for their agent. Then, they can instruct their agent by supplying it data and instructions.
