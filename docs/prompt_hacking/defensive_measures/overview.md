---
sidebar_position: 0
---

# 🟢 Overview

Preventing prompt injection can be extremely difficult, and there exist few robust defenses against it(@crothers2022machine)(@goodside2021gpt). However, there are some commonsense
solutions. For example, if your application does not need to output free-form text, do not allow such outputs. There are many different ways to defend a prompt. We will discuss some of the most common ones here.

This chapter covers additional commonsense strategies like filtering out words. It also cover prompt improvement strategies (instruction defense, post-prompting, different ways to enclose user input, and XML tagging). Finally, we discuss using an LLM to evaluate output and some more model specific approaches. 
