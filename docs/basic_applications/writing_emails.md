---
sidebar_position: 2
---

# 🟢 Writing An Email

Writing emails can be a time consuming task, especially when you need to read through an email you received first. This section will cover use cases ranging from a simple email telling your boss you are sick today to more complex cold lead emails.

## Sick Day Email

Imagine that you wake up sick one day and can't go into work (or just don't want to 😈). Here is a simple prompt that writes an email to your boss telling them you are sick.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="My Name: Zach\nBoss's name: John\n\nWrite a humorous yet professional email to my boss saying that I will be out of office today since I am sick. \nBe concise and funny. Include a funny reason:" initial-response="Dear John,\n\nI'm writing to let you know that I will be out of office today. I know I'm supposed to be working, but I just couldn't resist the call of the siren song of the local donut shop. I'm sure you understand.\n\nI'll be back in the office tomorrow and will make up the time.\n\nThanks,\nZach" max-tokens="256" box-rows="10" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## Fixing prompts

### Overly-generic prompt

```
write an email
```

The results from this prompt is inconsistent. Try running the prompt several times and see what you get. You will get emails on different topics with different lengths. Here's an example:

```
Subject: Follow-up on our Meeting

Dear [Name],

I hope this email finds you well. I wanted to follow up on our meeting yesterday and thank you again for your time and insights. I really appreciate the information you provided and found our conversation to be incredibly valuable.
I'm excited to move forward with our project, and I'm confident that the strategies we discussed will be successful. I'm looking forward to continuing to work together!

Please let me know if you have any questions and I'll be happy to help.

Thanks again,
[Your Name]
```

### Missing information

```
Write out of office email


Subject: Out of Office

Hello,

I am currently out of the office and will be returning on [date]. I will have limited access to email during this time.

If you need an immediate response, please contact [name] at [email address].

Thank you for your understanding.

Regards,
[Your name]
```

This is an improvement over the generic email prompt. We are missing key info - such as the names of the sender and receiver. To address this problem, we can either fill the content manually ourselves, OR, add additional information in the context of the prompt.
### Extra information

There is also the possibility of GPT generating more content than is expected. See the following example:

```
write an email from zach to john, out of office

Subject: Out of Office

Dear John,

I am writing to let you know that I will be out of the office for the rest of the week. I will return on Monday, October 5.

If you need anything while I'm away, please contact [name] at [email] or [phone number].

I apologize for any inconvenience this may cause.

Sincerely,

Zach
```

Try experimenting with keywords like "concise" to shorten the sentences. However, even with keywords, you still need to review the results from GPT.

### Adding Directions
GPT is quite receptive to specific directions. For example, try adding different keywords such as "casually" or "professional" to the prompt. These keywords can modify the results of the prompt. 

```
write an email from zach to john, out of office. casually.


Hey John,

Hope you're doing well. Just wanted to let you know that I'm out of office for the day - had a few personal errands to run.

I'm available by email if anything urgent comes up, and I'll be back in the office tomorrow morning.

Take care,

Zach

```

### Conclusion

LLMs perform well when they have the right context of information. For example, if we specify the topic, sending & receiving parties, the LLMs will output a more relevent email.

LLMs aren't reliable decision makers, especially for more specialized concepts. The reason is that language models are limited by the training data it receives.

