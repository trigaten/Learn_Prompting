---
sidebar_position: 10
---

# 🟢 写邮件

撰写电子邮件可能是一项耗时的任务，特别是当你需要先阅读收到的邮件时。本节将涵盖了从简单的写邮件告诉老板你今天生病了，到更复杂场景的冷邮件（Cold Emails）的各种用例。

## 病假

想象一下，有一天你生病了，不能去上班（或者只是不想去😈）。这里有一个简单的提示，可以写一封电子邮件给你的老板，告诉他们你病了。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="我的名字：克洛丝\n老板的名字：凯尔希\n\n写一封电子邮件给我的老板，告诉他我今天因为生病不能上班。" initial-response="亲爱的凯尔希：\n\n我是克洛丝，我是你的员工。我很抱歉地通知你，我今天因为生病不能上班。\n\n我昨晚感觉不舒服，今天早上我去看了医生，他诊断我得了感冒。他建议我休息几天，所以我不能上班。\n\n我会尽快恢复健康，并尽快回到工作岗位。如果你需要任何其他信息，请随时联系我。\n\n谢谢！\n\n克洛丝" max-tokens="512" box-rows="8" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

这封电子邮件虽然没什么问题，但有点无聊。让我们加点料吧！

## 语言风格修改/指令

很容易就可以修改邮件的风格。例如，你可以要求 AI “幽默”，或指示它“包含一个有趣的理由”。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="我的名字：克洛丝\n老板的名字：凯尔希\n\n写一封电子邮件给我的老板，告诉他我今天因为生病不能上班。\n请简洁幽默，包含一个有趣的理由：" initial-response="亲爱的凯尔希：\n\n很遗憾，我今天不能来上班。原因是我昨晚在外面做完一个任务，结果回到家后发现变成了一只猫！这可能是一种古老的魔法，但可怕的是它会让我感冒，所以我必须休息一天才能恢复健康。\n\n我会尽快完成我的工作，并尽力赶上时间表。祝你今天一切顺利！\n\n最真诚的问候，\n\n克洛丝" max-tokens="512" box-rows="10" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
<br/>

这里是另一个更加严肃/专业的示例。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="我的名字：克洛丝\n老板的名字：凯尔希\n\n写一封严肃、专业的电子邮件给我的老板，告诉他我今天因为生病不能上班。请简洁明了：" initial-response="尊敬的凯尔希先生：\n\n我是克洛丝，很抱歉地通知您，我今天因为生病不能上班。我会尽快恢复健康，并尽快回到工作岗位。\n\n谢谢您的理解，\n\n克洛丝" max-tokens="512" box-rows="8" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
<br/>

## 回复邮件

想象一下，你收到了老板一封很长的电子邮件，内容很多。你需要回复这封邮件，但是没有时间阅读整个邮件。这时你就可以将邮件内容交给 AI，并要求它`生成摘要和任务项清单`（译注：中文场景由于邮件格式问题，加上写信人和收信人效果会更好）。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="尊敬的克洛丝，\n\n希望你一切都好。我写信给你，向你提供我们公司的一些新消息，并请求你协助解决你所开发的软件的用户界面(UI)问题。\n\n正如你所知，我们公司一直致力于为客户提供用户友好的体验，我们已经确定了软件UI方面的一些问题。具体来说，我们收到了用户的反馈，他们发现访问某些功能很困难，并且UI不够直观。\n\n我们需要你的帮助来解决这些问题并改善软件的UI。这可能涉及对UI的布局、设计或功能进行更改。我们相信，你在软件开发方面的专业知识和对软件的熟悉将使你成为帮助我们完成这项任务的理想人选。\n\n如果你需要任何额外的资源或支持来完成这项任务，请不要犹豫告诉我。此外，如果你能够提供一个预计修改完成时间的估计，我会非常感激。\n\n如果你有任何问题或需要进一步的澄清，请不要犹豫联系我。\n\n感谢你对我们公司的辛勤工作和奉献。我期待着很快收到你的回复。\n\n此致\n\n敬礼\n\n凯尔希\n\n生成以上内容摘要和任务项清单。" initial-response="写信人：凯尔希\n收信人：克洛丝\n\n内容摘要：凯尔希向克洛丝提供了公司的一些新消息，并请求克洛丝协助解决软件的用户界面问题。\n\n任务项清单：\n1. 对UI的布局、设计或功能进行更改。\n2. 提供一个预计修改完成时间的估计。\n3. 如果需要，提供额外的资源或支持。" max-tokens=" 1024" box-rows="18" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>
你可以使用这份摘要来撰写回复邮件。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="写信人：凯尔希\n收信人：克洛丝\n\n内容摘要：凯尔希向克洛丝提供了公司的一些新消息，并请求克洛丝协助解决软件的用户界面问题。\n\n任务项清单：\n1. 对UI的布局、设计或功能进行更改。\n2. 提供一个预计修改完成时间的估计。\n3. 如果需要，提供额外的资源或支持。\n\n请根据以上电子邮件摘要，撰写一封给凯尔希的回复邮件：" initial-response="亲爱的凯尔希：\n\n感谢您给我发送关于公司的新消息。我很乐意协助解决软件的用户界面问题。\n\n我将尽快对UI的布局、设计或功能进行更改，并尽力在最短的时间内完成。如果需要，我可以提供额外的资源或支持。\n\n期待着与您的合作！\n\n克洛丝" max-tokens="1024" box-rows="18" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>
请注意，你通常可以将这两个步骤合并为一个。你可以要求 AI 直接从你收到的电子邮件中生成一个回复邮件。

## 冷邮件（Cold Emails）

冷邮件是发给陌生人的电子邮件。由于很难从冷邮件中获得回复，因此发送定制性较高的邮件可能会有所更有效。让我们看看如何使用 GPT-3(@bonta2022how) 来实现这一点。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="公司名: 罗德岛\n我的名字: 克洛丝\n撰写一封冷邮件" initial-response="尊敬的克洛丝：\n\n您好！\n\n我是罗德岛的招聘专员，很高兴能够与您联系。\n\n我们正在寻找一位有能力、有热情的专业人士加入我们的团队，以支持我们的业务发展。我们正在寻找一位有能力、有热情的专业人士加入我们的团队，以支持我们的业务发展。\n\n我们正在招聘一位职位，您可能有兴趣。该职位要求有良好的沟通能力、组织能力和分析能力，以及与客户建立良好的关系。\n\n如果您有兴趣，请发送您的简历和求职信至我们的电子邮箱，我们将尽快与您联系。\n\n期待您的回复！\n\n祝好，\n罗德岛" max-tokens="1024" box-rows="10" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

效果还可以，但是我们可以做的更好。让我们添加一些更多的信息到提示中。

### 使用非结构化信息

假设你已经拥有了你要发送邮件的收件人的 LinkedIn 账户，你可以将这些信息添加到邮件中，使邮件更具个性化。我们以 [Strive 的创始人](https://www.linkedin.com/in/snpranav/) 的 LinkedIn 账户为例子，从他的资料中复制一些信息并添加到邮件中。（译注：此处使用了完整的 LinkedIn 主页内容，翻译成中文后会超长，故保持原文。大概效果就是 GPT 会使用提供的信息，编写看起来是“量身定制”的邮件）

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Pranav Shikarpur  1st degree connection1st\nDeveloper Advocate. Problem Solver. Previously: Co-founder Strive, Intel ISEF Alum\n\nExperienceExperience\nThales Cloud Security logo\nDeveloper AdvocateDeveloper Advocate\nThales Cloud SecurityThales Cloud Security\nApr 2022 - Present · 1 yrApr 2022 - Present · 1 yr\n- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch.\n- Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022.\n- Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch. - Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022. - Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.…see more\nSkills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)Skills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)\nStartup Shell logo\nDirector of Founder ResourcesDirector of Founder Resources\nStartup ShellStartup Shell\nFeb 2022 - Present · 1 yr 2 mosFeb 2022 - Present · 1 yr 2 mos\nCollege Park, Maryland, United StatesCollege Park, Maryland, United States\n- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc.\n- Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc. - Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.\nSkills: Strategic PartnershipsSkills: Strategic Partnerships\nStrive Network logo\nCo-FounderCo-Founder\nStriveStrive\nDec 2020 - Nov 2021 · 1 yrDec 2020 - Nov 2021 · 1 yr\n- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users.\n- Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution.\n- Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users. - Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution. - Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.…see more\nSkills: Go (Programming Language) · Python (Programming Language) · Product Management · Product Marketing · Next.js · Amazon EKS\n\nEducationEducation\nUniversity of Maryland logo\nUniversity of MarylandUniversity of Maryland\nUndergraduate, Mathematics and Computer ScienceUndergraduate, Mathematics and Computer Science\nAug 2019 - May 2023Aug 2019 - May 2023\nActivities and societies: Director of Founder Resources at Startup ShellActivities and societies: Director of Founder Resources at Startup Shell\nExploring the beauty of mathematics with the practicality of computer science\n\nWrite a cold outreach email to this founder, pitching him our product, Nightfall, which is a neo-CRM. My name is Max. Make the email formal, yet approachable. Mention relevant details from his LinkedIn information above to help pitch the product.Pranav Shikarpur  1st degree connection1st\nDeveloper Advocate. Problem Solver. Previously: Co-founder Strive, Intel ISEF Alum\n\nExperienceExperience\nThales Cloud Security logo\nDeveloper AdvocateDeveloper Advocate\nThales Cloud SecurityThales Cloud Security\nApr 2022 - Present · 1 yrApr 2022 - Present · 1 yr\n- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch.\n- Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022.\n- Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch. - Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022. - Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.…see more\nSkills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)Skills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)\nStartup Shell logo\nDirector of Founder ResourcesDirector of Founder Resources\nStartup ShellStartup Shell\nFeb 2022 - Present · 1 yr 2 mosFeb 2022 - Present · 1 yr 2 mos\nCollege Park, Maryland, United StatesCollege Park, Maryland, United States\n- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc.\n- Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc. - Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.\nSkills: Strategic PartnershipsSkills: Strategic Partnerships\nStrive Network logo\nCo-FounderCo-Founder\nStriveStrive\nDec 2020 - Nov 2021 · 1 yrDec 2020 - Nov 2021 · 1 yr\n- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users.\n- Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution.\n- Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users. - Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution. - Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.…see more\nSkills: Go (Programming Language) · Python (Programming Language) · Product Management · Product Marketing · Next.js · Amazon EKS\n\nEducationEducation\nUniversity of Maryland logo\nUniversity of MarylandUniversity of Maryland\nUndergraduate, Mathematics and Computer ScienceUndergraduate, Mathematics and Computer Science\nAug 2019 - May 2023Aug 2019 - May 2023\nActivities and societies: Director of Founder Resources at Startup ShellActivities and societies: Director of Founder Resources at Startup Shell\nExploring the beauty of mathematics with the practicality of computer science\n\nWrite a cold outreach email to this founder, pitching him our product, Nightfall, which is a neo-CRM. My name is Max. Make the email formal, yet approachable. Mention relevant details from his LinkedIn information above to help pitch the product." initial-response="Dear Pranav,\n\nMy name is Max and I am reaching out to you because I believe our product, Nightfall, could be a great fit for you. As a co-founder of Strive and Director of Founder Resources at Startup Shell, I'm sure you understand the importance of having a reliable CRM to help manage customer relationships.\n\nNightfall is a neo-CRM that helps founders and entrepreneurs like yourself to easily manage customer relationships and track customer data. Our product is designed to be user-friendly and intuitive, so you can focus on growing your business without worrying about the technical details.\n\nI think you would find Nightfall to be a great asset to your business. If you're interested, I'd love to schedule a call to discuss further.\n\nBest,\nMax" max-tokens="256" box-rows="39" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

LLMs 非常有用，可以减少我们从 LinkedIn 复制的所有信息的混乱程度。通过从 LinkedIn 上抓取相关信息，这种冷启动过程也可以在更大范围内实现自动化。




## 总结

LLMs 可以帮助你撰写电子邮件！但在发送之前，请务必阅读他们所写的内容 😉


## 更多参考

- [Zapier](https://zapier.com/blog/use-openai-gpt-3-to-write-emails/)