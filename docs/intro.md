---
sidebar_position: 1
---
import CodeBlock from '@theme/CodeBlock';

# Welcome

import Techniques from '@site/docs/assets/astronaut_welcome.webp';

<div style={{textAlign: 'center'}}>
  <img src={Techniques} style={{width: "100%"}}/>
</div>

<h4>Welcome to Learn Prompting's Introductory Course on Generative AI and Prompt Engineering! </h4>

Generative AI is the world's hottest buzzword, and we have created the most comprehensive (*and free*) guide on how to use it. This course is tailored to non-technical readers, who may not have even heard of AI, making it the perfect starting point if you are new to Generative AI and Prompt Engineering. Technical readers will find valuable insights within our later chapters.

Generative AI refers to AIs that can be used to create new content such as articles or images, just like humans can. It is


It is expected to signifigantly change the way we work(@Davenport_Mittal_2022)(@Captain_2023) (read: *your job may be at risk*[^a]) 
<!-- With 1.2 Million users from companies like OpenAI, Brex, Deloitte, and more,  -->

## Motivating Example

With so much buzz floating around about Generative AI (Gen AI) and Prompt Engineering (PE), it is hard to know where to start! Gen AI refers to AI tools used to create things, while Prompt Engineering refers to the process of interacting with Generative AI. We will define them more formally in the next page. For now, let's consider a common application of Gen AI: **writing emails**!

By sending an AI[^b] the following prompt, we can get it to generate a full length, formal email. This 

<AIInput>
I am the CEO of a medium sized company. Write a short email that is humorous yet professional to my regional manager. Ask them to:
- send me an up-to-date list of our paper stock
- organize a meeting this week with other regional managers
- let me know how the company-wide AI workshop went at their office
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



Prompt engineering (PE) is the process of **communicating effectively with an AI to achieve desired results**. As AI technology continues to rapidly advance, the ability to master prompt engineering has become a particularly valuable skill. Prompt engineering techniques can be applied to a wide variety of tasks, making it a useful tool for anyone seeking to improve their efficiency in both everyday and innovative activities.

## Ethos and Philosophy

This course is open source, and built by a diverse community of researchers, translators, and hobbyists. We believe that AI should be accessible to everyone, and that it should be described clearly and objectively. To this end, we strive to produce a comprehensive and unbiased course that is free of excessive jargon and hype.

We have found this approach to be appreciated by the PE community: This course is cited by [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering#cite_ref-15), and is used by people at companies such as [O'REILLY](https://learning.oreilly.com/live-events/prompt-engineering-for-generating-ai-art-and-text/0636920084340/0636920084339/), Scale AI, and OpenAI. You may also notice that <a href="https://youtu.be/GPqSoiOP3w8?t=274" rel={"nofollow"}>almost </a><a href="https://learnwithhasan.com/prompt-engineering-guide/" rel={"nofollow"}>every </a><a href="https://www.youtube.com/watch?v=EYjG6i53-xk" rel={"nofollow"}>other </a> <a href="https://youtu.be/yR4hNBNS6yc?t=743" rel={"nofollow"}>prompt </a> <a href="https://youtu.be/pZsJbYIFCCw?t=208" rel={"nofollow"}>engineering </a> <a href="https://youtu.be/4kp7oVTu9Ck?t=495" rel={"nofollow"}>video </a> <a href="https://www.youtube.com/watch?v=q5wuHUmGFMw" rel={"nofollow"}>and </a> <a href="https://youtu.be/f8PGV3T9w38?t=549" rel={"nofollow"}>guide </a>
uses material from this course. We are honored to support the prompt engineering community, including our 1M+ users and 40K [Discord](https://discord.gg/learn-prompting) members.

### How we teach

Our approach to teaching prompt engineering is guided by the following principles:

**Quick Iterations**—Since new PE content is published almost daily, we'll keep this course up-to-date with frequent, concise articles about emerging techniques. Please tell us what topics you'd like us to explore further!

**Emphasis on Practicality**—Our focus is on applied, practical techniques that you can immediately incorporate into your projects and applications.

**Accessible Examples**—To help you grasp the techniques quickly, we'll provide clear, relevant examples throughout the articles.

**Collaborative Learning**—We believe in learning from each other. If you come across something that you don't quite understand or find a mistake, please let us know by creating an [issue on GitHub](https://github.com/trigaten/Learn_Prompting/issues/new/choose). Your feedback helps us improve the course for everyone.

:::note
This course is under heavy development. We are working hard to improve the learning experience and add more content. If you have any suggestions, please let us know!
:::

## How to read

There's no need to read all chapters in order; feel free to explore what interests you! If you're new to AI, machine learning, and programming, we suggest starting with the [Basics](https://learnprompting.org/docs/category/-basics) section and the [Instructions](https://learnprompting.org/docs/basics/intro) guide. For those already familiar with these concepts, the [Intermediate](https://learnprompting.org/docs/category/%EF%B8%8F-intermediate) section is a great place to dive in and expand your knowledge.

### Article rating system

We've implemented a rating system for articles based on their level of difficulty and the extent of programming knowledge needed:

🟢 Beginner-friendly; no programming required

🟡 Easy; basic programming knowledge necessary, but no specialized expertise

🔴 Intermediate; programming skills and some domain knowledge required (e.g., calculating logarithmic probabilities)

🟣 Advanced; programming expertise and in-depth domain understanding needed (e.g., reinforcement learning techniques)

Please note that even for 🔴 and 🟣 articles, you can generally grasp the content without prior domain expertise, though it may be helpful for implementation.

### Chapters

Below is a brief overview of each chapter:

**Basics**: Introduction to prompt engineering and fundamental techniques

**Basic Applications**: Simple, practical applications of prompt engineering

**Intermediate**: Research-based PE techniques with moderate complexity

**Applied Prompting**: Comprehensive PE process walkthroughs contributed by community members

**Advanced Applications**: Powerful, and more complex applications of prompt engineering

**Reliability**: Enhancing the reliability of large language models (LLMs)

**Image Prompting**: Prompt engineering for text-to-image models, such as DALLE and Stable Diffusion

**Prompt Hacking**: Hacking, but for prompt engineering

**Tooling**: A review of various prompt engineering tools and IDEs

**Prompt Tuning**: Refining prompts using gradient-based techniques

**Miscellaneous**: A collection of additional topics and techniques related to prompt engineering

## Feedback

The single most important part of this course is your feedback!

If you have any questions, comments, or suggestions, you can:

- Make an [issue on GitHub](https://github.com/trigaten/Learn_Prompting/issues/new/choose)
- Email us at [learnprompting@gmail.com](mailto:learnprompting@gmail.com)
- Join the [Discord community](https://learnprompting.org/discord)
- Follow us on [Twitter](https://twitter.com/learnprompting)
- Join the HackAPrompt Competition until May 26 [Twitter](https://www.aicrowd.com/challenges/hackaprompt-2023)

Even the smallest amount of feedback is very helpful!

[^a]: Generative AI already appears to have claimed some jobs(@Verma_Vynck_2023), and slowed hiring at Bloomberg(@IBM_Do_2023). However, consider the news on its impact with a grain of salt. We expect more jobs to be *changed* rather than lost.
[^b]: The AI used here is GPT-4.