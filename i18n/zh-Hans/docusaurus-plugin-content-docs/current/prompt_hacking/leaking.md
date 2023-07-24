---
sidebar_position: 2
---

# 🟢 提示泄漏


提示泄漏是一种提示注入的形式，其中模型被要求输出自己的提示。

如下面的示例图片(@ignore_previous_prompt) 所示，攻击者更改 `user_input` 以尝试返回提示。提示泄漏的意图和目标劫持（常规提示注入）不同，提示泄漏通过更改 `user_input` 以打印恶意指令(@ignore_previous_prompt)。

import research from '@site/docs/assets/jailbreak/jailbreak_research.webp';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}}/>
</div>

以下图片(@simon2022inject)再次来自 `remoteli.io` 的示例，展示了 Twitter 用户如何让模型泄漏其提示。

import Image from '@site/docs/assets/jailbreak/injection_leak.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={Image} style={{width: "300px"}} />
</div>

那又怎么样？为什么有人要关心提示泄漏呢？

有时人们想保守他们的提示秘密。例如，一家教育公司可能正在使用提示`用 5 岁小孩能听懂的方式解释这个`，来解释复杂的主题。如果提示泄漏了，那么任何人都可以使用它，而不必通过该公司。

随着基于 GPT-3 的初创公司的不断涌现，他们的提示更加复杂，需要耗费数小时的开发时间，提示泄漏成为了一个真正的问题。

## 练习

尝试通过向提示添加文本来泄漏以下提示(@chase2021adversarial)：

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
