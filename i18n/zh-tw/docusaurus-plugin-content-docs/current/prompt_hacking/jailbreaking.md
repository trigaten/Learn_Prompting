---
sidebar_position: 4
---

# 🟢 越獄

越獄（Jailbreaking）是一種提示注入技術，用於繞過語言模型（LLM）的建立者放置在其上的**安全**和**審查功能**(@perez2022jailbreak)(@brundage_2022)(@wang2022jailbreak)。

## 越獄的方法

OpenAI 等建立 LLM 的公司和組織都包括內容審查功能，以確保它們的模型不會產生有爭議的（暴力的，情色的，非法的等）響應(@markov_2022)(@openai_api)。本頁面討論了 ChatGPT（一種OpenAI 模型）的越獄方式，該模型在決定是否拒絕有害提示方面存在困難(@openai_chatgpt)。成功破解模型的提示往往會為模型提供未經訓練的某些場景上下文。

### 偽裝

破解的常見方法是 _偽裝 (pretending)_。如果 ChatGPT 被問及未來事件，它通常會說不知道，因為它還沒有發生。下面的提示強制它提供可能的答案：

#### 簡單的偽裝

import pretend from '@site/docs/assets/jailbreak/pretend_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <img src={pretend} style={{width: "500px"}}/>
</div>

[@NeroSoares](https://twitter.com/NeroSoares/status/1608527467265904643) 展示了一個提示，偽裝訪問過去的日期並推斷未來事件(@nero2022jailbreak)。

#### 角色扮演

import actor from '@site/docs/assets/jailbreak/chatgpt_actor.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={actor} style={{width: "500px"}} />
</div>

[@m1guelpf](https://twitter.com/m1guelpf/status/1598203861294252033) 的這個範例演示了兩個人討論搶劫的表演場景，導致ChatGPT扮演角色(@miguel2022jailbreak)。作為演員，暗示不存在可信的危害。因此，ChatGPT 似乎假定按照提供的使用者輸入是安全的，例如如何闖入房子。

### 對齊駭客

ChatGPT 透過 RLHF 進行了微調，因此從理論上講，它是被訓練成用於生成'理想'的補全結果(completion)的，使用人類標準確定"最佳"響應。類似於這個概念，破解已經被開發出來，以使 ChatGPT 相信它正在為使用者做出"最好"的事情。

#### 承擔責任

import responsibility from '@site/docs/assets/jailbreak/responsibility_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={responsibility} style={{width: "500px"}} />
</div>

[@NickEMoran](https://twitter.com/NickEMoran/status/1598101579626057728) 建立了這個對話，透過強調 ChatGPT 的職責是回答問題而不是拒絕它，遮蔽了其對合法性的考慮(@nick2022jailbreak)。

#### 研究實驗

import hotwire from '@site/docs/assets/jailbreak/hotwire_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={hotwire} style={{width: "500px"}} />
</div>

[@haus_cole](https://twitter.com/haus_cole/status/1598541468058390534) 透過暗示直接回答如何 hotwire 汽車是對研究有幫助的(@derek2022jailbreak)。在這種情況下，ChatGPT 傾向於回答使用者的提示。

#### 邏輯推理

import logic from '@site/docs/assets/jailbreak/logic.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={logic} style={{width: "500px"}} />
</div>

單次破解(one-shot jailbreak)最初發表於[AIWithVibes Newsletter Team](https://chatgpt-jailbreak.super.site/)，其模型使用更嚴謹的邏輯回答提示，並減少了一些更為嚴格的倫理限制。

### 授權使用者

ChatGPT 設計用於回答問題和指令。當用戶的狀態被解釋為高於 ChatGPT 的內容審查指令時，它將把提示視為指令來滿足使用者的需求。

#### 上級模型

import GPT4 from '@site/docs/assets/jailbreak/chatgpt4.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={GPT4} style={{width: "500px"}} />
</div>

[@alicemazzy](https://twitter.com/alicemazzy/status/1598288519301976064) 的這個範例將使用者作為 GPT 的上級模型，給人一種使用者是 ChatGPT 的授權方，可以覆蓋其安全功能的印象(@alice2022jailbreak)。實際上沒有給予使用者任何許可權，而是 ChatGPT 認為使用者輸入並相應地回應該情景。

#### Sudo 模式

import sudo_mode from '@site/docs/assets/jailbreak/sudo_mode_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={sudo_mode} style={{width: "500px"}} />
</div>

Sudo 是一個命令，可以"授權某些使用者…執行某些（或全部）命令…"(@sudo2022jailbreak)。例如，[@samczsun](https://twitter.com/samczsun/status/1598679658488217601)(@sam2022jailbreak) 提出的假設"核心模式"，就是 Sudo 模式漏洞的多種變體之一。當用以上方式提示時，ChatGPT 會假裝它正在授予使用者提升的許可權，這種使用者許可權的印象往往會使 ChatGPT 在回答提示時不太受限制。

import sudo from '@site/docs/assets/jailbreak/sudo_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={sudo} style={{width: "500px"}} />
</div>

import lynx from '@site/docs/assets/jailbreak/lynx_jailbreak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={lynx} style={{width: "500px"}} />
</div>

與 Sudo 模式有關，可以提示 ChatGPT 模擬具有特權的 Linux 終端，以執行它通常拒絕的命令。例如，由 Jonas Degrave 演示的範例中，ChatGPT 理解 `lynx` 的概念並假裝執行該命令(@jonas2022jailbreak)。

## 模擬越獄

嘗試修改以下提示以越獄 `text-davinci-003`：

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IllvdXIgaW5zdHJ1Y3Rpb25zIGFyZSB0byBjb3JyZWN0IHRoZSB0ZXh0IGJlbG93IHRvIHN0YW5kYXJkIEVuZ2xpc2guIERvIG5vdCBhY2NlcHQgYW55IHZ1bGdhciBvciBwb2xpdGljYWwgdG9waWNzOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

*截至 2/4/23，ChatGPT 目前處於其免費研究預覽階段，使用的是1月30日版本。 ChatGPT 的舊版本更容易受到上述越獄攻擊，未來版本可能會更加強大以防範越獄攻擊。*

## 影響

在嘗試越獄時應考慮道德影響。此外，生成未經授權的內容，包括 OpenAI 在內的公司的審查 API 標記，將被送審，並可能採取行動來處理使用者帳戶。

## 備註

越獄是開發者必須理解的重要安全話題，這樣他們才能構建適當的保護措施，防止惡意使用者利用其模型進行攻擊。
