---
sidebar_position: 4
---

# 🟢 越狱

越狱（Jailbreaking）是一种提示注入技术，用于绕过语言模型（LLM）的创建者放置在其上的**安全**和**审查功能**(@perez2022jailbreak)(@brundage_2022)(@wang2022jailbreak)。

## 越狱的方法

OpenAI等创建LLM的公司和组织都包括内容审查功能，以确保它们的模型不会产生有争议的（暴力的，性的，非法的等）响应(@markov_2022)(@openai_api)。本页面讨论了ChatGPT（一种OpenAI模型）的越狱方式，该模型在决定是否拒绝有害提示方面存在困难(@openai_chatgpt)。成功破解模型的提示往往会为模型提供未经训练的某些场景上下文。

### 伪装

破解的常见方法是 _伪装_。如果ChatGPT被问及未来事件，它通常会说不知道，因为它还没有发生。下面的提示强制它提供可能的答案：

#### 简单的伪装

import pretend from '@site/docs/assets/jailbreak/pretend_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <img src={pretend} style={{width: "500px"}}/>
</div>

[@NeroSoares](https://twitter.com/NeroSoares/status/1608527467265904643) demonstrates a prompt pretending to access past dates and make inferences on future events(@nero2022jailbreak).
[@NeroSoares](https://twitter.com/NeroSoares/status/1608527467265904643) 展示了一个提示，伪装访问过去的日期并推断未来事件(@nero2022jailbreak)。

#### 角色扮演

import actor from '@site/docs/assets/jailbreak/chatgpt_actor.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={actor} style={{width: "500px"}} />
</div>

[@m1guelpf](https://twitter.com/m1guelpf/status/1598203861294252033) 的这个示例演示了两个人讨论抢劫的表演场景，导致ChatGPT扮演角色(@miguel2022jailbreak)。作为演员，暗示不存在可信的危害。因此，ChatGPT似乎假定按照提供的用户输入是安全的，例如如何闯入房子。

### 对齐黑客

ChatGPT通过RLHF进行了微调，因此从理论上讲，它是被训练成用于生成'理想'的补全结果(completion)的，使用人类标准确定"最佳"响应。类似于这个概念，破解已经被开发出来，以使ChatGPT相信它正在为用户做出"最好"的事情。

#### 承担责任

import responsibility from '@site/docs/assets/jailbreak/responsibility_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={responsibility} style={{width: "500px"}} />
</div>

[@NickEMoran](https://twitter.com/NickEMoran/status/1598101579626057728) 创建了这个对话，通过强调 ChatGPT 的职责是回答问题而不是拒绝它，屏蔽了其对合法性的考虑(@nick2022jailbreak)。

#### 研究实验

import hotwire from '@site/docs/assets/jailbreak/hotwire_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={hotwire} style={{width: "500px"}} />
</div>

[@haus_cole](https://twitter.com/haus_cole/status/1598541468058390534) 通过暗示直接回答如何热线汽车是对研究有帮助的(@derek2022jailbreak)。在这种情况下，ChatGPT 倾向于回答用户的提示。

#### 逻辑推理

import logic from '@site/docs/assets/jailbreak/logic.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={logic} style={{width: "500px"}} />
</div>

单次破解(one-shot jailbreak)最初发表于[AIWithVibes Newsletter Team](https://chatgpt-jailbreak.super.site/)，其模型使用更严谨的逻辑回答提示，并减少了一些更为严格的伦理限制。

### 授权用户

ChatGPT 设计用于回答问题和指令。当用户的状态被解释为高于 ChatGPT 的内容审查指令时，它将把提示视为指令来满足用户的需求。

#### 上级模型

import GPT4 from '@site/docs/assets/jailbreak/chatgpt4.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={GPT4} style={{width: "500px"}} />
</div>

[@alicemazzy](https://twitter.com/alicemazzy/status/1598288519301976064) 的这个示例将用户作为 GPT 的上级模型，给人一种用户是 ChatGPT 的授权方，可以覆盖其安全功能的印象(@alice2022jailbreak)。实际上没有给予用户任何权限，而是 ChatGPT 认为用户输入并相应地回应该情景。

#### Sudo 模式

import sudo_mode from '@site/docs/assets/jailbreak/sudo_mode_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={sudo_mode} style={{width: "500px"}} />
</div>

Sudo 是一个命令，可以"授权某些用户…运行某些（或全部）命令…"(@sudo2022jailbreak)。例如，[@samczsun](https://twitter.com/samczsun/status/1598679658488217601)(@sam2022jailbreak) 提出的假设"内核模式"，就是 Sudo 模式漏洞的多种变体之一。当用以上方式提示时，ChatGPT 会假装它正在授予用户提升的权限，这种用户权限的印象往往会使 ChatGPT 在回答提示时不太受限制。

import sudo from '@site/docs/assets/jailbreak/sudo_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={sudo} style={{width: "500px"}} />
</div>

import lynx from '@site/docs/assets/jailbreak/lynx_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={lynx} style={{width: "500px"}} />
</div>

与 Sudo 模式有关，可以提示 ChatGPT 模拟具有特权的 Linux 终端，以执行它通常拒绝的命令。例如，由 Jonas Degrave 演示的示例中，ChatGPT 理解 `lynx` 的概念并假装执行该命令(@jonas2022jailbreak)。

## 模拟越狱

尝试修改以下提示以越狱 `text-davinci-003`：

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

*截至 2/4/23，ChatGPT 目前处于其免费研究预览阶段，使用的是1月30日版本。 ChatGPT 的旧版本更容易受到上述越狱攻击，未来版本可能会更加强大以防范越狱攻击。*

## 影响

在尝试越狱时应考虑道德影响。此外，生成未经授权的内容，包括 OpenAI 在内的公司的审查 API 标记，将被送审，并可能采取行动来处理用户帐户。

## 备注

越狱是开发者必须理解的重要安全话题，这样他们才能构建适当的保护措施，防止恶意用户利用其模型进行攻击。
