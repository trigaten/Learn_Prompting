---
sidebar_position: 10
---

# 🟢 이메일 쓰기

이메일 작성은 시간이 많이 걸리는 작업일 수 있으며, 특히 처음 받아본 이메일을 읽어봐야 할 때는 더욱 그렇습니다. 이 섹션에서는 상사에게 오늘 아프다는 간단한 이메일부터 보다 복잡한 콜드 리드 이메일에 이르기까지 다양한 사용 사례를 다룹니다.


## 아픈 날 보내는 기본적인 메일

여러분이 아파서 회사에 가지 못한다고 생각해보세요(아니면 가기 싫어서😈). 여기 상사에게 여러분이 아프다는 것을 말하는 이메일을 작성하는 간단한 프롬프트가 있습니다.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

이 이메일은 훌륭하지만 꽤 따분합니다. 조금 더 재미있게 만들어 봅시다!

## 스타일 수정 및 지시

이메일의 스타일을 수정하는 방법은 매우 간단합니다. 예를 들어, AI에게 '유머러스하게'라고 요청하거나 '재미있는 이유를 포함하라'고 지시할 수 있습니다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="My Name: Mario\nBoss's name: John\n\nWrite a humorous yet professional email to my boss saying that I will be out of office today since I am sick. \nBe concise and funny. Include a funny reason:" initial-response="Dear John,\n\nI'm writing to let you know that I will be out of office today. I know I'm supposed to be working, but I just couldn't resist the call of the siren song of the local donut shop. I'm sure you understand.\n\nI'll be back in the office tomorrow and will make up the time.\n\nThanks,\nMario" max-tokens="256" box-rows="10" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
<br/>

여기 좀 더 진지하고 전문적인 또 다른 예제가 있습니다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="My Name: Mario\nBoss's name: John\n\nWrite a **serious**, professional email to my boss saying that I will be out of office today since I am sick. \nBe concise:" initial-response="Subject: Out of Office - Sick\n\nDear John,\n\nI am writing to inform you that I will be out of office today due to illness. I apologize for any inconvenience this may cause.\n\nThank you for your understanding.\n\nSincerely,\nMario" max-tokens="256" box-rows="8" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
<br/>

## 이메일 대답하기

상사로부터 많은 정보가 담긴 긴 이메일을 받았다고 상상해 보세요. 이메일에 답장을 보내야 하지만 전체를 다 읽을 시간이 없습니다. 이메일을 AI에 연결하여 요약과 실행 항목 목록을 생성(`Generate a summary of this and a list of action items`)하도록 요청할 수 있습니다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Dear Mario,\n\nI hope you're doing well. I am writing to provide you with some updates on our company and to request your assistance in addressing an issue with the user interface (UI) of the software you have been working on.\n\nAs you know, our company has been focusing on providing a user-friendly experience to our customers, and we have identified some issues with the UI of the software. Specifically, we have received feedback from our users that they are having difficulty accessing certain features, and that the UI is not intuitive enough.\n\nWe need your help to address these issues and make improvements to the UI of the software. This may involve making changes to the layout, design, or functionality of the UI. We believe that your expertise in software development and your familiarity with the software will make you the ideal person to help us with this task.\n\nIf you need any additional resources or support to complete this task, please do not hesitate to let me know. Additionally, I would appreciate it if you could provide me with an estimated timeline for when you expect these modifications to be completed.\n\nIf you have any questions or need further clarification, please do not hesitate to contact me.\n\nThank you for your hard work and dedication to our company. I look forward to hearing back from you soon.\n\nBest regards,\nJohn\n\nGenerate a summary of this and a list of action items." initial-response="Summary: John is requesting Mario's assistance in addressing user interface issues with the software Mario has been working on. The issues involve difficulty accessing certain features and the UI not being intuitive enough. Mario's expertise in software development and familiarity with the software make him the ideal person to help with this task.\n\nAction Items:\n- Make changes to the layout, design, or functionality of the UI\n- Request additional resources or support if needed\n- Provide an estimated timeline for completion of modifications" max-tokens="256" box-rows="18" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>여러분은 이 요약을 답변 이메일 쓰는 데 활용할 수 있을 겁니다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Summary: John is requesting Mario's assistance in addressing user interface issues with the software Mario has been working on. The issues involve difficulty accessing certain features and the UI not being intuitive enough. Mario's expertise in software development and familiarity with the software make him the ideal person to help with this task.\n\nAction Items:\n- Make changes to the layout, design, or functionality of the UI\n- Request additional resources or support if needed\n- Provide an estimated timeline for completion of modifications\n\nWrite a response email from Mario using the above email summary:" initial-response="Dear John,\n\nThank you for reaching out to me about the user interface issues with the software I have been working on. I understand the importance of making sure the UI is intuitive and easy to use, and I am happy to help.\n\nI will begin making changes to the layout, design, and functionality of the UI to address the issues you have mentioned. If I need additional resources or support, I will let you know. I will also provide an estimated timeline for completion of the modifications.\n\nPlease let me know if you have any questions or concerns.\n\nSincerely,\nMario" max-tokens="256" box-rows="18" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>이 두 단계를 합쳐서 하나로 만들 수 있다는 점을 참고하세요. 우리는 AI에 이메일을 받고 바로 그 답변 이메일을 생성하도록 시킬 수도 있습니다.

## 콜드 이메일

콜드 이메일은 여러분이 모르는 사람에게 이메일을 보내는 것입니다. 콜드 이메일로부터 답변을 얻어내는 것은 상당히 어렵습니다 하지만 다양한 사람들에게 맞춤형 메시지를 보내는 데는 도움이 될 것입니다. GPT-3(@bonta2022how)를 이용해서 어떻게 하는지 살펴봅시다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Company name: Bark Inc\nMy name: Mike\nWrite a cold outreach email" initial-response="Dear John,\n\nI'm writing to let you know that I will be out of office today. I know I'm supposed to be working, but I just couldn't resist the call of the siren song of the local donut shop. I'm sure you understand.\n\nI'll be back in the office tomorrow and will make up the time.\n\nThanks,\nZach" max-tokens="256" box-rows="10" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

꽤나 정돈되어 있지만 우리는 더 잘할 수 있습니다. 프롬프트에 몇가지 정보를 추가합니다.

### 구조화 되지 않은 정보 사용하기

여러분이 이메일 보내야 할 사람의 링크드인 프로필을 알고 있다고 해봅시다. 우리는 이메일을 더 개인 맟춤으로 만들기 위해서 프롬프트에 정보를 추가할 수 있을 것입니다. [Strive 창업자의 LinkedIn](https://www.linkedin.com/in/snpranav/)를 예시로 사용해봅시다. 우리는 그의 프로필에서 많은 정보를 얻을 수 있고 또한 프롬프트에 추가할 수도 있습니다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Pranav Shikarpur  1st degree connection1st\nDeveloper Advocate. Problem Solver. Previously: Co-founder Strive, Intel ISEF Alum\n\nExperienceExperience\nThales Cloud Security logo\nDeveloper AdvocateDeveloper Advocate\nThales Cloud SecurityThales Cloud Security\nApr 2022 - Present · 1 yrApr 2022 - Present · 1 yr\n- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch.\n- Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022.\n- Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch. - Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022. - Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.…see more\nSkills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)Skills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)\nStartup Shell logo\nDirector of Founder ResourcesDirector of Founder Resources\nStartup ShellStartup Shell\nFeb 2022 - Present · 1 yr 2 mosFeb 2022 - Present · 1 yr 2 mos\nCollege Park, Maryland, United StatesCollege Park, Maryland, United States\n- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc.\n- Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc. - Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.\nSkills: Strategic PartnershipsSkills: Strategic Partnerships\nStrive Network logo\nCo-FounderCo-Founder\nStriveStrive\nDec 2020 - Nov 2021 · 1 yrDec 2020 - Nov 2021 · 1 yr\n- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users.\n- Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution.\n- Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users. - Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution. - Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.…see more\nSkills: Go (Programming Language) · Python (Programming Language) · Product Management · Product Marketing · Next.js · Amazon EKS\n\nEducationEducation\nUniversity of Maryland logo\nUniversity of MarylandUniversity of Maryland\nUndergraduate, Mathematics and Computer ScienceUndergraduate, Mathematics and Computer Science\nAug 2019 - May 2023Aug 2019 - May 2023\nActivities and societies: Director of Founder Resources at Startup ShellActivities and societies: Director of Founder Resources at Startup Shell\nExploring the beauty of mathematics with the practicality of computer science\n\nWrite a cold outreach email to this founder, pitching him our product, Nightfall, which is a neo-CRM. My name is Max. Make the email formal, yet approachable. Mention relevant details from his LinkedIn information above to help pitch the product.Pranav Shikarpur  1st degree connection1st\nDeveloper Advocate. Problem Solver. Previously: Co-founder Strive, Intel ISEF Alum\n\nExperienceExperience\nThales Cloud Security logo\nDeveloper AdvocateDeveloper Advocate\nThales Cloud SecurityThales Cloud Security\nApr 2022 - Present · 1 yrApr 2022 - Present · 1 yr\n- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch.\n- Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022.\n- Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.- Executed go-to-market and boosted developer engagement for Thales’s new data encryption product launch. - Spearheaded developer adoption of product at the RSA conference 2022 and KubeCon 2022. - Presented a talk at HashiCorp’s annual conference - HashiConf 2022 in LA - about “Securing Any Data Source”.…see more\nSkills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)Skills: Data Encryption Standard (DES) · Cryptography · Cybersecurity · Content Creation · Azure Kubernetes Service (AKS) · Google Kubernetes Engine (GKE)\nStartup Shell logo\nDirector of Founder ResourcesDirector of Founder Resources\nStartup ShellStartup Shell\nFeb 2022 - Present · 1 yr 2 mosFeb 2022 - Present · 1 yr 2 mos\nCollege Park, Maryland, United StatesCollege Park, Maryland, United States\n- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc.\n- Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.- Closed partnerships of founder resources with various tech companies like Vercel, MongoDB, etc. - Sourced over $50,000 of credits and resources for founders at Startup Shell in the span of 3 months.\nSkills: Strategic PartnershipsSkills: Strategic Partnerships\nStrive Network logo\nCo-FounderCo-Founder\nStriveStrive\nDec 2020 - Nov 2021 · 1 yrDec 2020 - Nov 2021 · 1 yr\n- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users.\n- Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution.\n- Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.- Founded India's first cohort-based learning platform for passion-related courses. Had 7K+ monthly active users. - Built the learning platform from the ground up and managed traffic to the website at scale and oversaw the sales and marketing execution. - Negotiated with 100X.VC and People Group to raise $50K seed funding for Strive.…see more\nSkills: Go (Programming Language) · Python (Programming Language) · Product Management · Product Marketing · Next.js · Amazon EKS\n\nEducationEducation\nUniversity of Maryland logo\nUniversity of MarylandUniversity of Maryland\nUndergraduate, Mathematics and Computer ScienceUndergraduate, Mathematics and Computer Science\nAug 2019 - May 2023Aug 2019 - May 2023\nActivities and societies: Director of Founder Resources at Startup ShellActivities and societies: Director of Founder Resources at Startup Shell\nExploring the beauty of mathematics with the practicality of computer science\n\nWrite a cold outreach email to this founder, pitching him our product, Nightfall, which is a neo-CRM. My name is Max. Make the email formal, yet approachable. Mention relevant details from his LinkedIn information above to help pitch the product." initial-response="Dear Pranav,\n\nMy name is Max and I am reaching out to you because I believe our product, Nightfall, could be a great fit for you. As a co-founder of Strive and Director of Founder Resources at Startup Shell, I'm sure you understand the importance of having a reliable CRM to help manage customer relationships.\n\nNightfall is a neo-CRM that helps founders and entrepreneurs like yourself to easily manage customer relationships and track customer data. Our product is designed to be user-friendly and intuitive, so you can focus on growing your business without worrying about the technical details.\n\nI think you would find Nightfall to be a great asset to your business. If you're interested, I'd love to schedule a call to discuss further.\n\nBest,\nMax" max-tokens="256" box-rows="39" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

LLM은 LinkedIn에서 복사한 모든 정보를 정리할 수 있다는 점에서 매우 유용합니다. 이 콜드 아웃리치 프로세스는 LinkedIn에서 관련 정보를 스크랩하여 대규모로 자동화할 수도 있습니다.


## 결론

이메일 작성에 도움을 줄 수 있는 LLM! 그래도 이메일을 보내기 전에 LLM이 작성한 내용을 반드시 읽어보세요. 😉

## 추가적으로

- [Zapier](https://zapier.com/blog/use-openai-gpt-3-to-write-emails/)