---
sidebar_position: 90
---

# 🟢 大语言模型（LLMs）中的隐患

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"500px",height:"200px",verticalAlign:"top"}}/>
</div>

LLMs 十分强大但也並非完美，在使用的时候需注意一些隐患。

## 引用来源

LLMs 没有连接到网络且无法精确得知他们的信息来源，故大多数情况下**不能准确给出引用来源**。他们经常会产生一些看起来不错，但完全不准确的资料。

:::note
搜索特化型（能够搜索网络及其他来源）LLMs 能解决这个问题。
:::

## 偏见

LLMs 时常产生具有刻板印象的回应。即使有安全防护措施，他们有时也会生成性别歧视／种族歧视／同性恋歧视的内容。在面向消费者的应用中使用 LLMs 时要小心，即使在研究中也要小心（它们可能产生有偏见的结果）。

## 谵妄

当被问到一个不知道答案的问题时，LLMs 时常产生虚假的信息。有时他们会说不知道答案，但很多时候他们会自信地给出一个错误的答案。

## 数学

LLMs 不擅长逻辑计算。他们解决简单的数学问题也存在困难，对于更复杂的数学问题更是无从下手。

:::note
[工具增强型 LLMs](https://learnprompting.org/zh-Hans/docs/advanced_applications/mrkl) 在一定程度上能改善这个问题。
:::

## 提示词攻击

用户可以欺骗 LLMs 使其生成任何他们想要的内容。[阅读更多](https://learnprompting.org/zh-Hans/docs/category/-prompt-hacking)
