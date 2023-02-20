---
sidebar_position: 6
---

# Simplifying Email Management with GPT-3

import Basic from '../assets/Zapiermail/Basic.png';
import Diagram from '../assets/Zapiermail/Diagram.png';
import Step1 from '../assets/Zapiermail/Step1.png';
import Step2 from '../assets/Zapiermail/Step2.png';
import Step3 from '../assets/Zapiermail/Step3.png';
import Step4 from '../assets/Zapiermail/Step4.png';
import Zap from '../assets/Zapiermail/Zap.png';

## Introduction


ChatGPT has shown some of the incredible potential of what LLM's can do. While potential is great, I would like to introduce some ways we can actually leverage the power of a LLM as a layman with no programming knowledge. This article will contain an example of what a **nocode** tool like Zapier, combined with GPT-3 can do for you with a short amount of setup time. While this article focuses on a particular example, the possibilities are much greater. I’ll give some examples along the way. Keep in mind you can also do this in Bubble.io. There are other nocode tools, but at the time of writing only very few allow you to use GPT-3. 


In this article I will show you how to set up a simple system in Zapier in which e-mails are summarized and stored. Have a meeting with someone? Quickly check the summaries of emails you've exchanged (or in which you've CC'd) that person. Setting it up takes about 20 minutes to get a basic version working. 




## General Idea


Below is a diagram of what we are doing here in Zapier. Whenever an email comes into your inbox, it will trigger Zapier. There are four steps (for now), contents of the email will be formatted if needed (to remove HTML markdown, for example). That gets send to GPT-3 with a pre-written prompt, the output will then be stored along with some of the original content and information included in the e-mail. 

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}} />
</div>

## Set-up in Zapier


There's a free account available in Zapier. It does have a limited amount of uses, but you can use it for free. Setting up should be fairly straightforward, same goes for a Zap. All the steps are listed below, with images for each of the 4 required steps. 


<details>
  <summary>Expand for a more detailed view of the steps in Zapier</summary>
  <div>
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

There are a few easy ways to get the result that you want. 

For practical reasons, it is useful to give instruction, followed by telling GPT-3 when the email follows by simply adding "Email: " and ending with ""Summary": ". This avoids GPT-3 answering with "Sure! I can summarize it for you".
Role prompting can come in useful here as well. Asking GPT-3 to act as a personal assistant helps increase the quality of the summary.
Simply adding the role you have gives GPT-3 context to work with. It acts as if it assumes some level of knowledge from the reader, which helps filtering out the non-relevant parts. 
As to how extensive you want it to be is up to you, and you can simply request it in the prompt.  

You can ask it to summarize a simple email in bullet points, which already does a decent enough job. However, this might not be all that useful depending on how you would like to use it. For quick skimming of email exchanges you might want it to be short and concise. Simply asking so in the prompt already does a good job. Below is an example of this prompt. 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as my personal assistant. I am an office administrator. Summarize the following email as concise as you can, ignore the footer and header and any previous emails. Email: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. Best regards, Your Name Summary:" initial-response="The email requests additional office supplies including printer paper, ink cartridges, sticky notes, binder clips, and highlighters, due to high workload. They ask for delivery time and express appreciation for the help." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>


The response here is acceptable, and would be useful. However, with some further finetuning you can get a better result. As the reader of the summaries you don't care that it's an email, and you don't care about appreciation. By simply adding that the goal of the summary is for you to skim the contents, it removes those unnessecary parts.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as my personal assistant. I am an office administrator. Summarize the following email as concise as you can, ignore the footer and header and any previous emails. I want to use the summary to skim emails. Email: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual.We would greatly appreciate it if you could provide us with the Following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. Best regards, [Your Name] Summary:" initial-response="Request for additional office supplies including printer paper, ink cartridges, sticky notes, binder clips, and highlighters due to high volume of work. Asks for information on delivery timeline and any concerns." max-tokens="256" box-rows="10" model-temp="0" top-p="1" padding='1'></div>

Now you're left with only the most important parts of the summary.


## Other usecases

Now that you've seen the example of summaries, I want to mention a few other examples that you could use this for. One great example is letting GPT-3 categorize your emails. Simply tell it in a prompt to categorize the following email as whatever categories you like, and have it tag those on. 

A more in depth example would be having multiple prompt. You can use a prompt to generate a response that agrees and/or confirms with the demands of the email and one that disagrees or denies. Both can be stored in your concepts and be ready to go whenever you want to send it. 

## Concerns

Please do keep in mind privacy concerns when running emails through GPT-3 and storing them. GPT-3 might also sometimes mess up. Since we aren't fact-checking this is less of a concern. I highly recommend checking back on the original contents whenever unsure. 