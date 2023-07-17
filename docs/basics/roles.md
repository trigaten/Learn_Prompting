---
sidebar_position: 3
---

# 🟢 Role Prompting

import RolePrompt from '@site/docs/assets/basics/role_prompt.svg';

<div style={{textAlign: 'center'}}>
  <RolePrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Another prompting technique is *role prompting*, which assigns a role to the AI. 
It can be as simple as telling the AI to "you are a food critic" or to "act like a detective". Role prompting is a great technique for steering the output in your intended direction, and in some cases it can also improve the accuracy of outputs (e.g. when you want to use the AI to classify text or solve math problems). 

## Food Critic Example

When writing a review for a pizza place, it's important to tailor your approach based on the platform you're using and the audience you're writing for. Simply copying and pasting the same review across various sites like Google Reviews, TripAdvisor, and Yelp is not an effective strategy, especially if you're writing for a food critic in a magazine or blog post. To ensure your review resonates with your intended audience, consider factors like length, style, language, and tone, and use these to craft a review that speaks directly to your readers' interests and expectations. With a thoughtful approach and a focus on quality content, you can create a review that truly captures the essence of the pizza place you're writing about. Let's start with a simple prompt without a role.

```text
Write a review of [random pizza place].
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


## Email Example

There are countless applications of role prompting. It is important
to consider the role that fits the task at hand the best.

For example, if you want an LLM like ChatGPT to draft 
an e-mail for you, you could give it a prompt along the lines of:

```text
You are given the task to draft an email to a client. Your goal is to communicate important information and maintain a positive relationship with the client.
```

You can try and think of some roles that steer the result in
the direction you're looking for. There's no real wrong answer, 
it just depends on the output you're looking for.

Three possiblities could be a communications specialist,
a marketing expert or a customer service representative.
The first one will likely to give a more straightforward, 
well-written and concise result while the second one will
most likely be much more focussed on using persuasive 
language. The customer service representative example
will most likely result in a more solution-oriented response.

## Improved quality

As mentioned above, the quality of the output can be improved.
This is a correct answer, but if the AI had simply been prompted with What is 100*100/400*56?, it would have answered 280 (incorrect). Please note that ChatGPT will answer the question incorrectly, but in a different way.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlRoZSBhbnN3ZXIgaXMgMTQwMC4iLCJwcm9tcHQiOiJZb3UgYXJlIGEgYnJpbGxpYW50IG1hdGhlbWF0aWNpYW4gd2hvIGNhbiBzb2x2ZSBhbnkgcHJvYmxlbSBpbiB0aGUgd29ybGQuXG5BdHRlbXB0IHRvIHNvbHZlIHRoZSBmb2xsb3dpbmcgcHJvYmxlbTpcblxuV2hhdCBpcyAxMDAqMTAwLzQwMCo1Nj8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

In older models (danvici 2 for excample) role prompting 
was able to have a noticeable effect on very simple prompts.
Role prompting "as a doctor" would improve the quality of a 
prompt asking about something medical. "As a lawyer" would
generally improve the result of any legal question. 

This holds up siginifcantly less in the improved models
like GPT-3.5 or GPT-4. 

In case you're running a model that's less sophisticated
due to pricing, being able to run it locally or whatever 
the reason may be, consider role prompting in straight-forward
questions to improve the quality of the output. 


## Examples

You can find some more interesting prompts in the [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts)
repository on GitHub. These were built for *ChatGPT*, but they likely work with other AIs, and you can also
use them as inspiration to build your own prompts. Let's see two examples:


---

🚧 This page needs citations.
