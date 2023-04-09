---
sidebar_position: 600
---

# 🟢 Zapier for Emails

import Basic from '../assets/Zapiermail/Basic.png';
import Diagram from '../assets/Zapiermail/Diagram.png';
import Step1 from '../assets/Zapiermail/Step1.png';
import Step2 from '../assets/Zapiermail/Step2.png';
import Step3 from '../assets/Zapiermail/Step3.png';
import Step4 from '../assets/Zapiermail/Step4.png';
import Zap from '../assets/Zapiermail/Zap.png';

## Introduction


We have already seen how useful GPT-3 can be when it comes to emails. It can be even more so when you combine it with **nocode** tools like [Zapier](https://zapier.com) or [Bubble.io](https://bubble.io).

This article will contain an example of what Zapier+GPT-3 can do with only a small amount of setup time. This article focuses on a particular example, but the possibilities are much greater. We'll give some other examples along the way. Keep in mind you can also do this in Bubble.io. There are many other nocode tools, but at the time of writing only very few allow you to use GPT-3. 


In this article we will show you how to set up a simple system in Zapier in which **e-mails are summarized and stored**. Have a meeting with someone? Quickly check the summaries of emails you've exchanged with that person. Setting this up takes about 20 minutes.

:::caution
It is helpful to already know Zapier for this article. If you don't, you can check out this [article](https://zapier.com/learn/).
:::


## General Idea


Below is a diagram of what we will be doing here in Zapier. Whenever an email comes into your inbox, it will trigger Zapier. There are four steps (for now):

1. Email comes in and trigger Zapier
1. Format the content of the email (to remove HTML markdown, for example). 
2. Send it to GPT-3 to be summarized
3. Store the output in a database

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}} />
</div>

## Set-up in Zapier


Make sure to have a [Zapier account](https://zapier.com/sign-up) (you can get a free one). Setting it up should be fairly straightforward. After making your account, expand the below box to see full descriptions of each Zapier action we need to create. 


<details>
  <summary>Expand for a more detailed view of the steps in Zapier</summary>
  <div>
  This is what the Zapier action diagram will eventually look like.
    <div><div style={{textAlign: 'left'}}>
  <img src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        Step 1: Gmail trigger on new incoming email (Gmail is used here).
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <img src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
       Step 2: Formatter for E-mail content. 
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step2} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Step 3: Prompting the Email content
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
        Step 4: Adding it to a database
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step4} style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>
Here is a set-up in zapier that allows you to do a very basic summary as shown in the diagram. It has it’s limitation, but it does do the job and can build up a useful database.


## Optimizing the prompt for better results

There are a few easy ways to improve your results. Adding context and role prompting can improve the output. However, the topic and contents of your emails might cover a wide range of topics. This means that general instructions will do a better job than very specific ones, which might throw the model off. 

For practical reasons, it is useful to give an instruction, followed by telling GPT-3 when the email starts in the prompt by simply adding "Email: " and ending the prompt with ""Summary": ". This avoids GPT-3 answering with "Sure! I can summarize it for you...".

Role prompting can be useful here as well. Asking GPT-3 to act as a personal assistant helps increase the quality of the summary.
If you want to summarize work emails, simply adding the role you have gives GPT-3 context to work with. It acts as if it assumes some level of knowledge from the reader, which helps filter out the non-relevant parts of the email. 
Below we show some examples with emails an office administrator might receive. 

You can ask it to summarize a simple email in bullet points, however, this might not be all that useful depending on how you would like to use the summary. For quick skimming of email exchanges you might just want it to be short and concise. Simply asking for this in the prompt works well. Below is an example of this prompt. Adjust it and play around with it to see how it changes. 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as my personal assistant. I am an office administrator. Summarize the following email as concisely as you can, ignore the footer and header and any previous emails. \n\nEmail: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. \n\nBest regards, Your Name Summary:\n" initial-response="Request for additional office supplies due to high workload. List of requested items: printer paper, ink cartridges for HP printer in conference room, sticky notes, binder clips, and highlighters. Requesting delivery information and if there are any questions or concerns." max-tokens="256" box-rows="15" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

The response here is acceptable, and would be useful. However, with some further finetuning you can get a better result. As the reader of the summaries you don't care that it's an email, you might want a lower level of detail for the summary. Information about the why is irrelevant, same goes for the last sentence about questions and concerns. By simply adding that the goal of the summary is for you to skim the contents and that you want pleasantries removed, the result can be improved. 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as my personal assistant. I am an office administrator. Summarize the following email as concisely as you can, ignore the footer and header and any previous emails. I want to use the summary to skim emails. Remove any pleasantries. \n\nEmail: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. \n\nBest regards, Your Name Summary:\n" initial-response="Request for additional office supplies - printer paper, ink cartridges for HP printer, sticky notes, binder clips and highlighters." max-tokens="256" box-rows="15" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>


<br/>Now you're left with only the most important parts of the summary!


## Other usecases

Now that you've seen the example of summaries, We will mention a few other use cases for Zapier+GPT-3. One great example is letting GPT-3 categorize your emails. This just comes down to telling it in a prompt to categorize the following email as whatever categories you like.

A more in depth example would be having multiple prompts. You can use a prompt to generate a response that agrees with the demands of the email and one that disagrees or denies. Both can be stored in your drafts and be ready to go whenever you want to send it. 

If you regularly receive very similar emails, you can use a filter in Zapier to apply a prompt ONLY to that email. This can be a powerful tool when combined with a formatter. You can extract information and export CSV's from them or directly store them in some form of a database. 


## Concerns

Please do keep in mind privacy concerns when running emails through GPT-3 and storing them. GPT-3 sometimes makes mistakes. We highly recommend checking email content before sending.