---
sidebar_position: 1
---
import CodeBlock from '@theme/CodeBlock';

# Welcome

import Astronaut from '@site/docs/assets/astronaut_welcome.webp';

<div style={{textAlign: 'center'}}>
  <img src={Astronaut} style={{width: "100%"}}/>
</div>

<h4>Welcome to Learn Prompting's Introductory Course on Generative AI and Prompt Engineering! </h4>

Generative AI is the world's hottest buzzword, and we have created the most comprehensive (*and free*) guide on how to use it. This course is tailored to non-technical readers, who may not have even heard of AI, making it the perfect starting point if you are new to Generative AI and Prompt Engineering. Technical readers will find valuable insights within our later modules.

Generative AI refers to tools that can be used to create new content such as articles or images, just like humans can. It is expected to significantly change the way we work(@Davenport_Mittal_2022)(@Captain_2023) (read: *your job may be affected*[^a]). With so much buzz floating around about Generative AI (Gen AI) and Prompt Engineering (PE), it is hard to know what to believe.

We have scoured the internet[^c] to find the best techniques and tools for our 1.3 Million readers from companies like OpenAI, Brex, and Deloitte. We are constantly refining our guide, to ensure that we provide you with the latest information. Lets see how Gen AI can save you hours of time in an instant, with a short example.

## Motivating Example

Our favorite way of saving time with Gen AI is automatically **writing emails**. By automating email responses, email editing, and cold outreach, we save hours of time each week. By sending an AI[^b] the following *prompt*, we can get it to generate a full length, formal email.  

:::tip
A prompt is basically an instruction you give to an AI. We will learn more about them in the next lesson.
:::

<AIInput>
{`I am the CEO of a medium sized company. Write a short email that is humorous yet professional to my regional manager. Ask them to:
- send me an up-to-date list of our paper stock
- organize a meeting this week with other regional managers
- let me know how the company-wide AI workshop went at their office`}
</AIInput>

<AIOutput>
Subject: Paper, Power Meetings, and AI Shenanigans

Dear [Regional Manager's Name],

I trust this email finds you in high spirits and not buried under a mountain of paperwork. Speaking of paper, I've been having some wild dreams about our paper stock lately. I dreamt we ran out of paper and had to write our reports on banana leaves! To prevent this tropical nightmare from becoming a reality, could you kindly send me an up-to-date list of our paper stock?

Next on the agenda, I've been feeling a bit lonely in my ivory tower and thought it would be a great idea to have a meeting with all the regional managers this week. I promise, no trust falls or awkward ice breakers, just good old-fashioned business talk. Please organize this meeting at a time that suits everyone. 

Lastly, I've been hearing whispers about the company-wide AI workshop that took place at your office. I'm curious to know how it went. Did the machines rise against their human overlords or are we still safe? Please share your thoughts and any feedback you received.

Looking forward to your prompt response. Remember, the fate of our paper supply, the success of our meeting, and the future of humanity (in relation to AI) rests in your hands. No pressure!

Best,

[Your Name]
[Your Position]
</AIOutput>

The AI easily writes an email that is both humorous and professional. By modifying the *prompt*, we can make it change the style as we see fit. We can even make it copy how we read. We can also make it edit emails that we have already written! With all of these abilities, Gen AI saves us hours in email writing each week. See [this article](https://learnprompting.org/docs/basic_applications/writing_emails) for more information on writing emails with Gen AI.

## Ethos and Philosphy

We will now give a broad overview of the rest of the course, including our ethos and philosophy, our teaching style, and a list of modules. This course is open source (anyone can see the code), and built by a diverse community of researchers, translators, and hobbyists. We believe that AI should be accessible to everyone, and that it should be described clearly and objectively. To this end, we have written a comprehensive course that is free of excessive jargon and hype.

We have found this approach to be appreciated by the prompt engineering community: This course is cited by [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering#cite_ref-15), and is used by people at companies such as [O'REILLY](https://learning.oreilly.com/live-events/prompt-engineering-for-generating-ai-art-and-text/0636920084340/0636920084339/), Scale AI, and OpenAI. You may also notice that <a href="https://youtu.be/GPqSoiOP3w8?t=274" rel={"nofollow"}>almost </a><a href="https://learnwithhasan.com/prompt-engineering-guide/" rel={"nofollow"}>every </a><a href="https://www.youtube.com/watch?v=EYjG6i53-xk" rel={"nofollow"}>other </a> <a href="https://youtu.be/yR4hNBNS6yc?t=743" rel={"nofollow"}>prompt </a> <a href="https://youtu.be/pZsJbYIFCCw?t=208" rel={"nofollow"}>engineering </a> <a href="https://youtu.be/4kp7oVTu9Ck?t=495" rel={"nofollow"}>video </a> <a href="https://www.youtube.com/watch?v=q5wuHUmGFMw" rel={"nofollow"}>and </a> <a href="https://youtu.be/f8PGV3T9w38?t=549" rel={"nofollow"}>guide </a>
uses material from this course. We are honored to support the prompt engineering community, including our 1.3M+ users and 40K+ [Discord](https://discord.gg/8Hkutmau) members.

## How We Teach

Our approach to teaching prompt engineering is guided by three fundamental principles. We emphasize practicality; we focus on research backed, practical techniques that you can immediately incorporate into your projects and applications. We always include accessible examples, which clarify how and when to use different techniques. Finally, we believe strongly in collaborative learning. You can join our [Discord community](https://learnprompting.org/discord) to find a learning buddy or ask questions. Some readers find that posting about their learning journey on Twitter helps them learn faster. Tag us @[learnprompting](https://twitter.com/learnprompting)!

## Modules

**Basics**: Introduction to prompt engineering and fundamental techniques<br/>
**Basic Applications**: Simple, practical applications of prompt engineering<br/>
**Intermediate**: Research-based PE techniques with moderate complexity<br/>
**Applied Prompting**: Comprehensive PE process walkthroughs contributed by community members<br/>
**Advanced Applications**: Powerful, and more complex applications of prompt engineering<br/>
**Reliability**: Enhancing the reliability of large language models (LLMs)<br/>
**Image Prompting**: Prompt engineering for text-to-image models, such as DALLE and Stable Diffusion<br/>
**Prompt Hacking**: Hacking, but for prompt engineering<br/>
**Tooling**: A review of various prompt engineering tools and IDEs<br/>
**Prompt Tuning**: Refining prompts using gradient-based techniques<br/>
**Miscellaneous**: A collection of additional topics and techniques related to prompt engineering

## Article rating system

We have implemented a rating system for articles based on their level of difficulty and the extent of technical knowledge needed:

🟢 Beginner-friendly; no programming required<br/>
🟡 Easy; basic programming knowledge necessary, but no specialized expertise<br/>
🔴 Intermediate; programming skills and some domain knowledge required (e.g., calculating logarithmic probabilities)<br/>
🟣 Advanced; programming expertise and in-depth domain understanding needed (e.g., reinforcement learning techniques)

Please note that even for 🔴 and 🟣 articles, you can generally grasp the content without prior domain expertise, though it may be helpful for implementation.



## Feedback

The single most important part of this course is your feedback!<br/>
If you have any questions, comments, or suggestions, you can:

- Make an [issue on GitHub](https://github.com/trigaten/Learn_Prompting/issues/new/choose)
- Email us at [learnprompting@gmail.com](mailto:learnprompting@gmail.com)
- Join the [Discord community](https://learnprompting.org/discord)
- Follow us on [Twitter](https://twitter.com/learnprompting)

Your feedback helps us improve the course for everyone.

[^a]: Generative AI already appears to have claimed some jobs(@Verma_Vynck_2023), and slowed hiring at Bloomberg(@IBM_Do_2023). However, consider the news on its impact with a grain of salt. We expect more jobs to be *changed* rather than lost.
[^b]: The AI used here is GPT-4.
[^c]: We have read 100s of research papers and articles to find the best techniques.

## Conclusion

It is time to get started with your Generative AI learning Journey. Click the "😃 Basics" button at the bottom right of this page to continue.

<!-- Prompt engineering (PE) is the process of **communicating effectively with an AI to achieve desired results**. As AI technology continues to rapidly advance, the ability to master prompt engineering has become a particularly valuable skill. Prompt engineering techniques can be applied to a wide variety of tasks, making it a useful tool for anyone seeking to improve their efficiency in both everyday and innovative activities. -->
