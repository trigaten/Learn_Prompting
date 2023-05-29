---
sidebar_position: 600
---

# 🟢 电子邮件的 Zapier

import Basic from '@site/docs/assets/Zapiermail/Basic.png';
import Diagram from '@site/docs/assets/Zapiermail/Diagram.png';
import Step1 from '@site/docs/assets/Zapiermail/Step1.png';
import Step2 from '@site/docs/assets/Zapiermail/Step2.png';
import Step3 from '@site/docs/assets/Zapiermail/Step3.png';
import Step4 from '@site/docs/assets/Zapiermail/Step4.png';
import Zap from '@site/docs/assets/Zapiermail/Zap.png';

## 介绍

我们已经看到 GPT-3 在电子邮件方面的用处。当您将它与 [Zapier](https://zapier.com) 或 [Bubble.io](https://bubble.io) 等 **无代码** 工具结合使用时，效果会更好。

本文将包含一个示例，用以说明 Zapier+GPT-3 仅需少量设置即可完成哪些工作。本文虽然着眼于一个特定的示例，但其想象空间是要大得多的。请记住，您也可以在 Bubble.io 中执行此操作。还有许多其他无代码工具，但在撰写本文时还只有极少数允许您使用 GPT-3。

在本文中，我们将向您展示如何在 Zapier 中设置一个简单的系统，在其中**汇总和存储电子邮件**。将要与某人会面了？快速查看您与此人往来的电子邮件摘要。这些设置大约需要 20 分钟。

:::caution
了解 Zapier 对本文很有帮助。如果不了解，可以查看这篇 [文章](https://zapier.com/learn/)。
:::


## 总体思路


下面是我们将在 Zapier 中执行的操作的图示。每当一封电子邮件进入您的收件箱时，它都会触发 Zapier 以下的四个步骤（至少目前是这样的）:

1. 收到电子邮件并触发 Zapier
1. 格式化电子邮件的内容（例如删除 HTML markdown） 
2. 发送到 GPT-3 进行总结
3. 将输出存储在数据库中

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}} />
</div>

## 设置 Zapier

首先确保拥有 [Zapier 帐户](https://zapier.com/sign-up)（您可以获得一个免费帐户）。设置它是比较简单的。创建帐户后，点击展开下面内容可以查看我们需要创建的每个 Zapier 操作的完整描述。

<details>
  <summary>展开以获取更多 Zapier 设置步骤的细节</summary>
  <div>
  这就是 Zapier 步骤图的样子。
    <div><div style={{textAlign: 'left'}}>
  <img src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        步骤 1: 收到电子邮件并触发 Zapier
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <img src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
       步骤 2: 格式化电子邮件的内容 
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step2} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        步骤 3: 和提示词一起发送到 GPT-3
        <br/>
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step3} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        步骤 4: 添加到数据库中
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step4} style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>
这是 zapier 中的一个设置，它允许您进行非常基本的总结，如图所示。它有它的局限性，但它确实可以完成任务并且建立一个有用的数据库。


## 优化提示以获得更好的结果

有几种简单的方法可以改善您的结果，像添加上下文和角色提示都可以改进输出。但是，您电子邮件的主题和内容可能涵盖广泛的范围。这意味着宽泛的说明会比非常具体的说明带来的效果更好。

出于实际原因，可以通过简单地添加“Email：”并以““Summary”：”结束的提示来告诉 GPT-3 的回答格式。这避免了 GPT-3 回答“当然！我可以为你总结一下......”这样的内容。

角色提示在这里也很有用。让 GPT-3 充当私人助理有助于提高摘要的质量。
如果您想总结工作电子邮件，只需添加您所需要的角色的特质描述即可为 GPT-3 提供工作的上下文。就好像假定读者具有一定程度的知识，这有助于过滤掉电子邮件中不相关的部分。
下面我们展示了一些办公室管理者可能收到的电子邮件示例。

您可以要求它以要点形式总结一封简单的电子邮件，但是，这可能不是很符合您的预期，具体取决于这份摘要的用途。为了快速浏览电子邮件，您可能只希望它简短明了。下面是此提示的示例，可以调整它并尝试一下，看看结果是如何变化的。

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

此处的回复看得出来是有效的。但是，通过进一步微调，您可以获得更好的结果。作为摘要的读者，您不关心它是一封电子邮件，您可能希望摘要的细节程度较低。关于为什么的信息是无关紧要的，有些问题和疑虑也是如此。通过简单地描述摘要的目标可以快速删除不需要的内容，进而改善结果。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as my personal assistant. I am an office administrator. Summarize the following email as concisely as you can, ignore the footer and header and any previous emails. I want to use the summary to skim emails. Remove any pleasantries. \n\nEmail: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. \n\nBest regards, Your Name Summary:\n" initial-response="Request for additional office supplies - printer paper, ink cartridges for HP printer, sticky notes, binder clips and highlighters." max-tokens="256" box-rows="15" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>


<br/>


## 其他用例

现在您已经看到了如何进行摘要的示例，我们将提及 Zapier+GPT-3 的其他一些用例。一个很好的例子是让 GPT-3 对您的电子邮件进行分类。这只需要在提示中告诉它将以下电子邮件分类为您喜欢的任何类别。

一个更深入的例子是使用多个提示。您可以使用提示来生成同意电子邮件要求的响应以及不同意的响应。这些都可以存储在您的草稿中，等待随时发送。

如果您经常收到非常相似的电子邮件，您可以使用 Zapier 中的过滤器来仅对该类型电子邮件应用提示。与格式化程序结合使用时，这可能是一个强大的工具。您可以从中提取信息并导出 CSV，或者直接将它们存储在某种形式的数据库中。


## 顾虑

通过 GPT-3 运行电子邮件并存储它们时，请务必牢记隐私问题。 GPT-3 有时会出错。我们强烈建议在发送前检查电子邮件内容。

By [gezilinll](https://github.com/gezilinll).