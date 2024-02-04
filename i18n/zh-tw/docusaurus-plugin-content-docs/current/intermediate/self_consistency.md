---
sidebar_position: 5
---

# 🟡 自我一致性

自我一致性（Self-consistency）(@wang2022selfconsistency)是對 %%CoT|CoT prompting%% 的一個補充，它不僅僅生成一個思路鏈，而是生成多個思路鏈，然後取多數答案作為最終答案。

在下面的圖中，左側的提示是使用少樣本思路鏈範例編寫的。使用這個提示，獨立生成多個思路鏈，從每個思路鏈中提取答案，透過“邊緣化推理路徑”來計算最終答案。

import SCImage from '@site/docs/assets/reliability/self_consistency.webp';

<div style={{textAlign: 'center'}}>
  <img src={SCImage} style={{width: "750px"}}/>
</div>
<div style={{textAlign: 'center'}}>
自我一致性 (Wang et al.)
</div>


## 範例

讓我們考慮一個分析電子郵件的簡單範例。假設您是一家軟體公司，每天收到數百封電子郵件。您希望使用模型將電子郵件分類為重要或不重要，以便您可以優先考慮可能對您的業務產生重大影響的電子郵件。

以下是您可能收到的電子郵件範例:

```text
Hello,

I have discovered a major security vulnerability in your system. Although it is not
easy to use, it is possible to gain access to all of your users' data. I have attached
a proof of concept. Please fix this issue as soon as possible.

Cheers,

Donny
```

讓我們將其放入提示中:

```text
Hello,

I have discovered a major security vulnerability in your system. Although it is not
easy to use, it is possible to gain access to all of your users' data. I have attached
a proof of concept. Please fix this issue as soon as possible.

Cheers,

Donny

Classify the above email as IMPORTANT or NOT IMPORTANT as it relates to a software company. Let's think step by step.
```

ChatGpt 的回應如下:

```text
<!-- highlight-start -->
Classifying the email as IMPORTANT or NOT IMPORTANT depends on the context and the severity of the reported security vulnerability. Let's break it down step by step:

1. Identification of Security Vulnerability:

The email explicitly mentions the discovery of a major security vulnerability in the system, indicating a potential threat to the security of user data.

2. Severity of the Vulnerability:

The email suggests that although the vulnerability may not be easy to exploit, it is still possible to gain access to all user data. The term "major 
security vulnerability" implies a high level of severity.

3. Proof of Concept:

The mention of attaching a proof of concept indicates that the sender has evidence to support their claim. This adds credibility to the reported vulnerability.

4. Request for Action:

The sender explicitly requests that the security issue be fixed as soon as possible, emphasizing the urgency of the matter.

Conclusion:

Considering the potential severity of a major security vulnerability and the urgency expressed by the sender, this email should be classified as IMPORTANT. It requires immediate attention from the software company to investigate the reported vulnerability, verify the proof of concept, and take necessary actions to address and fix the security issue to safeguard user data.
<!-- highlight-end -->
```

現在，我們將使用上面的提示來產生多個單獨的完成/思想鏈。這裡有一些範例:

```text
<!-- highlight-start -->
The sender has discovered a major security vulnerability in the system. 
This is important because it could lead to a data breach. 
I would classify this email as IMPORTANT
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
The sender has discovered a major security vulnerability in the system, but they have not provided any proof of concept and it is not easy to use. 
I would classify this email as NOT IMPORTANT
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
The sender is likely a hacker and may have access to the system. 
This is important because it could lead to a data breach. 
I would classify this email as IMPORTANT
<!-- highlight-end -->
```

透過產生許多思想鏈，並採用最常見的答案（「重要」），我們可以從 GPT-3 中得到更一致的正確答案。

## 結論

研究表明，自我一致性可以提高算術、常識和符號推理任務的結果。

即使普通的思路鏈提示被發現無效(@ye2022unreliability)，自我一致性仍然能夠改善結果。

## 備註

Wang 等人討論了一種更復雜的邊緣化推理路徑方法，該方法涉及每個思路鏈生成的大語言模型機率。然而，在他們的實驗中，他們沒有使用這種方法，多數投票似乎通常具有相同或更好的效能。