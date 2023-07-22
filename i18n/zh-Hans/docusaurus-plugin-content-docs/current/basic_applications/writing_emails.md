---
sidebar_position: 10
---

# 🟢 写邮件

撰写电子邮件可能是一项耗时的任务，特别是当你需要先阅读收到的邮件时。本节将涵盖了从简单的写邮件告诉老板你今天生病了，到更复杂场景的冷邮件（Cold Emails）的各种用例。

## 病假

想象一下，有一天你生病了，不能去上班（或者只是不想去😈）。这里有一个简单的提示，可以写一封电子邮件给你的老板，告诉他们你病了。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

这封电子邮件虽然没什么问题，但有点无聊。让我们加点料吧！

## 语言风格修改/指令

很容易就可以修改邮件的风格。例如，你可以要求 AI “幽默”，或指示它“包含一个有趣的理由”。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

这里是另一个更加严肃/专业的示例。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

## 回复邮件

想象一下，你收到了老板一封很长的电子邮件，内容很多。你需要回复这封邮件，但是没有时间阅读整个邮件。这时你就可以将邮件内容交给 AI，并要求它`生成摘要和任务项清单`（译注：中文场景由于邮件格式问题，加上写信人和收信人效果会更好）。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>
你可以使用这份摘要来撰写回复邮件。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>
请注意，你通常可以将这两个步骤合并为一个。你可以要求 AI 直接从你收到的电子邮件中生成一个回复邮件。

## 冷邮件（Cold Emails）

冷邮件是发给陌生人的电子邮件。由于很难从冷邮件中获得回复，因此发送定制性较高的邮件可能会有所更有效。让我们看看如何使用 GPT-3(@bonta2022how) 来实现这一点。

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

效果还可以，但是我们可以做的更好。让我们添加一些更多的信息到提示中。

### 使用非结构化信息

假设你已经拥有了你要发送邮件的收件人的 LinkedIn 账户，你可以将这些信息添加到邮件中，使邮件更具个性化。我们以 [Strive 的创始人](https://www.linkedin.com/in/snpranav/) 的 LinkedIn 账户为例子，从他的资料中复制一些信息并添加到邮件中。（译注：此处使用了完整的 LinkedIn 主页内容，翻译成中文后会超长，故保持原文。大概效果就是 GPT 会使用提供的信息，编写看起来是“量身定制”的邮件）

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

LLMs 非常有用，可以减少我们从 LinkedIn 复制的所有信息的混乱程度。通过从 LinkedIn 上抓取相关信息，这种冷启动过程也可以在更大范围内实现自动化。




## 总结

LLMs 可以帮助你撰写电子邮件！但在发送之前，请务必阅读他们所写的内容 😉


## 更多参考

- [Zapier](https://zapier.com/blog/use-openai-gpt-3-to-write-emails/)