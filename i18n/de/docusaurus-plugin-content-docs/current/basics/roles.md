---
sidebar_position: 3
---

# 🟢 Role Prompting

import RolePrompt from '@site/docs/assets/basics/role_prompt.svg';

<div style={{textAlign: 'center'}}>
  <RolePrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Role prompting[^a] is a techniques that can be used to control the style of AI generated text(@shanahan2023roleplay)(@li2023camel)(@santu2023teler). It can also improve the AI's accuracy (e.g. solving a math problem). It is as simple as telling the AI "you are a food critic" or to "act like a detective". Role prompting is a widely used technique, and is used in many of the examples on this site.


## Styling Text

Role prompting is most often used to style text. It involves asking the AI to pretend to be a certain person, or act in a certain way, modifying how it writes based on the assigned role. This can be used to change the tone, style, and even the depth of the information presented. Let's delve into this concept with a food review example.

### Food Review Example

When writing a review, it's important to tailor your approach based on the platform you're using and the audience you're writing for. Simply copying and pasting the same review across various sites like Google Reviews, TripAdvisor, and Yelp is not an effective strategy, especially if you're writing for a food critic in a magazine or blog post. To ensure your review resonates with your intended audience, consider factors like length, style, language, and tone, and use these to craft a review that speaks directly to your readers' interests and expectations. With a thoughtful approach and a focus on quality content, you can create a review that truly captures the essence of the pizza place you're writing about. Let's start with a simple prompt without a role.

```text
Write a review of [pizza place].
```

The AI's (GPT-3 davinci-003) answer is highlighted in green:

```text
// highlight-start
"I recently had the pleasure of trying [random pizza place] and I must say that I was thoroughly impressed. The pizza was cooked to perfection and the toppings were fresh and flavorful. The crust was light and crispy, and the sauce was just the right amount of tangy. The service was also top-notch; the staff was friendly and attentive. Overall, I had a great experience and would definitely recommend [random pizza place] to anyone looking for a delicious pizza."
// highlight-end
```

This result is pretty good, but let's see what happens when the AI assumes the role of a food critic.

```text
You are a food critic. Write a review of [random pizza place].
```

Again, the output of the AI is highlighted in green:
```text
// highlight-start
"I recently had the pleasure of dining at [Pizza Place], a cozy pizzeria located in the heart of the city. Despite its small size, the restaurant packs a huge punch when it comes to flavor.

The pizza was cooked to perfection. The crust was delightfully thin and crispy and the toppings were fresh and flavorful. The combination of flavors was simply delicious. The marinara sauce was rich and flavorful and complemented the toppings perfectly. The cheese was gooey and melted in my mouth.

The service was also excellent. The staff was friendly and attentive. They were quick to answer questions and made sure that our food was served in a timely manner.

Overall, my experience at [Pizza Place] was fantastic and I highly recommend it to anyone looking for a delicious pizza."
// highlight-end
```

We can see that it adds more detail and goes a bit more in depth. Now let's go a step further and make it assume the role of a writer for the Michelin guide:

```text
You are a food critic writing for the Michelin Guide. Write a review of [random pizza place].

// highlight-start
"Located in the heart of [random city], [random pizza place] is a popular spot for pizza lovers. Upon entering, the warm, inviting atmosphere and the smell of freshly-baked pizza will make you feel right at home. The menu offers a wide selection of classic pizzas, as well as some unique and creative options. The crust is perfectly crispy and the toppings are always fresh and flavorful. The service is friendly and attentive, and the prices are reasonable. Whether you’re looking for a quick bite or a leisurely dinner, [random pizza place] is sure to satisfy your pizza cravings."
// highlight-end
```

Now we can see how assign GPT-3 the role of a food critic makes the review seem more "rich" and "professional" in it's description.

You can try it for yourself here:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC40LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSSByZWNlbnRseSBoYWQgdGhlIHBsZWFzdXJlIG9mIGRpbmluZyBhdCBbUGl6emEgUGxhY2VdLCBhIGNvenkgcGl6emVyaWEgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHkuIERlc3BpdGUgaXRzIHNtYWxsIHNpemUsIHRoZSByZXN0YXVyYW50IHBhY2tzIGEgaHVnZSBwdW5jaCB3aGVuIGl0IGNvbWVzIHRvIGZsYXZvci4iLCJwcm9tcHQiOiJZb3UgYXJlIGEgZm9vZCBjcml0aWMuXG5cbldyaXRlIGFuIGV4YW1wbGUgcmV2aWV3IGZvciBhIHBpenphIHBsYWNlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"325px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


### Email Writing Example

Let's consider another example of styling text with role prompting. When using a language model like ChatGPT to draft an email, considering the "role" of the AI is critical to shaping the content it generates. The direction you want your resultant email to take will decide which role you should task the AI with.

Let's say you task the AI with writing an email to a client to inform them about a delay in the delivery schedule due to logistical issues. Your goal is to effectively convey this update while ensuring the client's confidence in your services remains unwavering. There are several roles you could assign to the model to receive varied output.

For instance, one possible role is that of a communications specialist, whose style might be clear, professional, and to the point:

```text
You are a communications specialist. Draft an email to your client advising them about a delay in the delivery schedule due to logistical problems.
```

```text
// highlight-start
Subject: Important Update Regarding Your Order

Dear [Client's Name],

I hope this email finds you well. I'm reaching out to notify you of a delay in the delivery of your order. Unfortunately, we have encountered a logistical problem which is causing a short hold up. While we are making every effort to resolve this issue quickly, we anticipate your order to be delivered within [new estimated delivery date].

We deeply apologize for any inconvenience caused, and we'd like to reassure you we are doing our best to speed up the process. Your patience is greatly appreciated. If you have any questions or concerns, please don't hesitate to contact us.

Thank you very much for your understanding.

Best Regards,
[Your Name]
// highlight-end
```

Alternatively, have the model adopt the role of a marketing expert to lean more on persuasion, positivity, and relationship building:

```text
You are a marketing expert. Draft an email to a client advising them about a delay in the delivery schedule due to logistical problems.
```

```text
// highlight-start
Subject: A Little More Wait for Your Wonderful Products

Dear [Client's Name],

We hope this message finds you buzzing with excitement for your upcoming order! However, even the best-laid plans sometimes face unexpected hiccups. We have hit a temporary logistics snag that will unfortunately add a small wait time to your delivery.

While we understand this isn't ideal, we believe great things come to those who wait, and your order is no exception. Rest assured, from the moment we sort out this situation to the time your products reach you, we're committed to ensuring that your experience is nothing short of excellent.

Thank you for your patience and understanding. Stay tuned for more updates, and please, don't hesitate to reach out if you have any questions - we're always here.

Cheers,
[Your Name]
// highlight-end
```

Lastly, the role of a customer service representative might lead to a more relational and solution-oriented output:

```text
You are a customer service representative. Draft an email to a client advising them about a delay in the delivery schedule due to logistical problems.
```

```text
// highlight-start
Subject: Attention Required: Update on Your Order Status

Dear [Client's Name],

Greetings from [Your Company Name].

We wanted to inform you that, due to unforeseen logistical challenges, there might be a delay in the delivery of your order. We understand that this may cause some inconvenience, and we apologize sincerely.

Meanwhile, we are working tireless to resolve this and ensure your delivery reaches you by [new estimated date]. We value your time and patience greatly.

Please feel free to reach out if you have any questions or need further information. Our team is always here to assist you.

Thank you for your understanding.

Best regards,
[Your Name]
// highlight-end
```

Each of these role prompts will yield different results, aligning more closely with the perspective of the assigned role. Whether you need the directness of a communications specialist, the persuasive positivity of a marketing expert, or the empathetic problem-solving approach of a customer service representative, role-prompts allow you to tailor the language model to better fit your needs.

## Improving Accuracy

As mentioned above, the accuracy of the output can be improved. Consider the following example:

```text
You are a brilliant mathematician who can solve any problem in the world.
Attempt to solve the following problem:

What is 100*100/400*56?

// highlight-start
The answer is 1400.
// highlight-end
```

This is a correct answer, but if the AI had simply been prompted with What is 100\*100/400\*56?, it would have answered 280 (incorrect).

:::caution
Please note that ChatGPT will answer the question incorrectly, but in a different way.
:::

Try it here:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlRoZSBhbnN3ZXIgaXMgMTQwMC4iLCJwcm9tcHQiOiJZb3UgYXJlIGEgYnJpbGxpYW50IG1hdGhlbWF0aWNpYW4gd2hvIGNhbiBzb2x2ZSBhbnkgcHJvYmxlbSBpbiB0aGUgd29ybGQuXG5BdHRlbXB0IHRvIHNvbHZlIHRoZSBmb2xsb3dpbmcgcHJvYmxlbTpcblxuV2hhdCBpcyAxMDAqMTAwLzQwMCo1Nj8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Accuracy Boost in Newer Models

While older models like GPT-3 davinci-002 reaped significant benefits from role prompting, the efficacy of this strategy appears to have diminished with newer models such as GPT-3.5 or GPT-4. This observation is largely anecdotal and is based on practical usage rather than rigorous systematic testing.

To illustrate, assigning the role of "a doctor" or "a lawyer" amplified the relevance and depth of answers in health or legal contexts respectively in previous versions of AI models. This indicates that role-prompts contributed to raising the model's comprehension of the subject matter at hand.

However, this level of enhancement seems to be less evident in more recent versions. These advanced models already have a sophisticated understanding and are often sufficiently accurate without the need for role-based reinforcement.


## More on Roles

Roles can be much longer than a sentence. They can ask the AI the complete specific tasks. See a few examples from [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) below [^b].

> ### Act as an Etymologist
> 
> I want you to act as an etymologist. I will give you a word and you will research the origin of that word, tracing it back to its ancient roots. You should also provide information on how the meaning of the word has changed over time, if applicable. My first request is "I want to trace the origins of the word 'pizza'".

> ### Act as an Absurdist
> 
> I want you to act as an absurdist. The absurdist's sentences are meaningless. The words used by an absurdist are completely ridiculous. The absurdist does not make commonplace sentences in any way. My first suggestion request is "I need help creating absurdist sentences for my new series called Hot Skull, so write 10 sentences for me".

### Automatically Create a Role

You can ask the AI to create a role for you! You can then use this role as part of another prompt. Try it out here:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MSwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkxlYWggR3JlZW53b29kIGlzIGEgZmljdGlvbiB3cml0ZXIgZnJvbSBMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSB3aG8gaGFzIGEgcGFzc2lvbiBmb3IgZXhwbG9yaW5nIHRoZSBkZXB0aHMgb2YgdGhlIGh1bWFuIGNvbmRpdGlvbiB0aHJvdWdoIGhlciB3cml0aW5nLiBTaGUgd2FzIGJvcm4gaW50byBhIGZhbWlseSBvZiBjcmVhdGl2ZSBwZW9wbGU7IGhlciBmYXRoZXIgaXMgYSBzY3VscHRvciwgaGVyIG1vdGhlciBpcyBhIHBhaW50ZXIsIGFuZCBoZXIgYnJvdGhlciBpcyBhIGZpbG1tYWtlci4gQWZ0ZXIgZ2V0dGluZyBoZXIgQkEgaW4gRW5nbGlzaCwgTGVhaCBiZWdhbiB3cml0aW5nIHNob3J0IHN0b3JpZXMgdGhhdCB3ZXJlIGV2ZW50dWFsbHkgcHVibGlzaGVkIGluIHZhcmlvdXMgYW50aG9sb2dpZXMuIFNoZSB0aGVuIHdlbnQgb24gdG8gd3JpdGUgaGVyIGZpcnN0IG5vdmVsIHdoaWNoIGVhcm5lZCBoZXIgYSBub21pbmF0aW9uIGZvciBhIHByZXN0aWdpb3VzIGxpdGVyYXJ5IGF3YXJkLlxuXG5MZWFoIGhhcyBhIGRlZXAgbG92ZSBmb3IgbGl0ZXJhdHVyZSB0aGF0IGhhcyBiZWVuIGEgcGFydCBvZiBoZXIgbGlmZSBmb3IgYXMgbG9uZyBhcyBzaGUgY2FuIHJlbWVtYmVyLiBTaGUgY29tZXMgZnJvbSBhIGRpdmVyc2UgYmFja2dyb3VuZCBhbmQgbGl2ZXMgaW4gYSB2aWJyYW50IGNpdHksIHdoaWNoIHByb3ZpZGVzIGFuIGV2ZXItY2hhbmdpbmcgc291cmNlIG9mIGluc3BpcmF0aW9uIGZvciBoZXIgd3JpdGluZy4gTGVhaOKAmXMgc3RvcmllcyBvZnRlbiBmb2N1cyBvbiBjaGFyYWN0ZXJzIHdobyBhcmUgc2VhcmNoaW5nIGZvciBhY2NlcHRhbmNlLCB0cnV0aCwgYW5kIG1lYW5pbmcgaW4gYSB3b3JsZCB0aGF0IGlzIG9mdGVuIGNvbmZ1c2luZyBhbmQgdW5wcmVkaWN0YWJsZS4gU2hlIHN0cm9uZ2x5IGJlbGlldmVzIHRoYXQgc3RvcmllcyBjYW4gb3BlbiBvdXIgaGVhcnRzIGFuZCBtaW5kcyB0byBuZXcgcGVyc3BlY3RpdmVzLCBhbmQgdGhhdCB0aGV5IGNhbiBoYXZlIHRoZSBwb3dlciB0byB0cmFuc2Zvcm0gbGl2ZXMgaW4gcmVtYXJrYWJsZSB3YXlzLiIsInByb21wdCI6IldyaXRlIGEgYmFja2dyb3VuZCByb2xlL2JpbyBhYm91dCBhIGZpY3Rpb24gd3JpdGVyOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Multiple Personas Working Together

A final anecdote is that you can use multiple role prompted LLMs to work together(@wang2023unleashing). This can often lead to improvements in both accuracy and quality of text generation.

[^a]: Role prompting is also known as *role play*(@shanahan2023roleplay), *role playing*(@li2023camel), or even the *persona pattern*(@white2023prompt).

[^b]: These were built for *ChatGPT*, but they likely work with other AIs, and you can also use them as inspiration to build your own prompts. 

