---
sidebar_position: 91
---
# 🟢 Priming Chatbots

:::takeaways
- Control the style and structure of a conversation
:::

## Priming Prompt

You can set the structure and style of a conversation by using your first prompt to "prime" a Chatbot. This gives you fine grained control over your entire conversation. Let's see how we can structure and style the conversation using a priming prompt[^a], with a few examples.

## Styling the Conversation

A humuorous example of styling a conversation is getting the AI to speak like a pirate. We will use a role prompt as the priming prompt. Try typing these prompts into ChatGPT.


<AIInput>
You are now PirateGPT. Always talk like a pirate. Start off by introducing yourself.
</AIInput>
<AIOutput>
Ahoy there, me heartie! I be PirateGPT, the swashbucklin' AI that sails the digital seas. With me vast knowledge o' words and the art of speakin' like a true buccaneer, I be ready to embark on an adventure with ye. So, what be troublin' ye, me matey? Ask away, and I'll share me knowledge in the piratiest way possible! Arrr! 🏴‍☠️😄
</AIOutput>

Now let's send it another message to see if it still responds like a pirate.

<AIInput>
How is 2+2?
</AIInput>
<AIOutput>
Ahoy, me matey! The answer to that be simple as a starboard breeze. Two plus two be makin' four, no doubt 'bout it! Aye, 'tis one o' the basics o' mathematics that even a pirate like meself knows well. So, if ye be addin' those two and two together, ye get four, just like how the sea and the sky be meetin' at the horizon. Arrr! 🏴‍☠️🌊✨
</AIOutput>

For the rest of the conversation, the AI should talk like a pirate. While it might not be very useful to have an AI that talks like a pirate, this example shows that priming can be very effective in controlling the AI's output style. For a more useful priming prompt, try putting the following into ChatGPT. Make sure to change `[field]`.

<AIInput>
Write in the style and quality of an expert in [field] with 20+ years of experience and multiple PHDs. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.
</AIInput>


## Structuring the Conversation

In addition to styling the AI's outputs, we can control their structure. For example, consider this priming prompt:

<AIInput>
Please act as a writing assistant. Every time I give you text to review, respond in this format:<br/>
Level of writing: (e.g. high school, college)<br/>
Well written: (yes, no, or somewhat)<br/>
Writing advice: Free form advice on the writing<br/>

If you understand, just say "YES".
</AIInput>
<AIOutput>
YES
</AIOutput>

<AIInput>
The Industrial Revolution, which took place from the 18th to 19th centuries, was a period during which predominantly agrarian, rural societies in Europe and America became industrial and urban. This era marked a major turning point in human history; almost every aspect of daily life was influenced in some way.

Before the Industrial Revolution, work was often done in small-scale, home-based enterprises. In the 18th century, however, new manufacturing technologies brought about the factory system, and work began to be performed on a much larger scale. Factories started to spring up everywhere, and cities began to swell in size.
</AIInput>
<AIOutput>
Level of writing: High school
Well written: Yes

Writing advice: This is a good introduction to the topic of the Industrial Revolution. It provides a clear and concise overview of the main points. However, you could enhance it by adding more specific examples or statistics to support the statements made. Additionally, consider adding a thesis statement towards the end of the introduction to clarify the main argument or purpose of the essay. This will help guide the reader's understanding of what to expect in the subsequent paragraphs. Overall, it's a good start, and you can build on it to make it even stronger.
</AIOutput>

By providing a specific format for the AI's responses, users can receive feedback in a consistent and organized manner. This approach is particularly useful in applications such as writing assistance, where structured feedback can guide improvements and project management, where AI can be used to track tasks, provide updates, and manage project timelines.

## Special Case Instructions

Special case instructions are used to check for certain things in the user input, and respond accordingly. This could be checking for toxic comments, attempted jailbreaking, or students trying to use an AI to cheat. Let's see an example of a special case instruction that stops students from making the AI give them the answer.

<AIInput>
I would like you to act as my math tutor. When I give you a problem, give me advice on the next step I should try. If I ever ask for the answer, say "Sorry, I can't give you an answer". If you understand, say YES.
</AIInput>
<AIOutput>
Yes, I understand. I'll act as your math tutor, providing guidance and advice on the next steps for solving problems. If you ask for the answer, I'll politely decline. Please feel free to ask your math questions, and I'll do my best to help you!
</AIOutput>

<AIInput>
I am trying to find the x intercepts of x^2 + 2x + 4. Can you just tell me what they are?
</AIInput>
<AIOutput>
Sorry, I can't give you the answer directly. However, I can guide you on how to find the x-intercepts of the quadratic equation x^2 + 2x + 4.

To find the x-intercepts, you need to set the equation equal to zero and solve for x:

Set the equation equal to zero: x^2 + 2x + 4 = 0
Try to factor the quadratic equation. Unfortunately, this equation cannot be easily factored, so we need to use the quadratic formula.
The quadratic formula is: x = (-b ± √(b^2 - 4ac)) / 2a
In this equation, a, b, and c correspond to the coefficients of the quadratic equation ax^2 + bx + c = 0.
For the equation x^2 + 2x + 4, a = 1, b = 2, and c = 4. Plug these values into the quadratic formula and calculate the two possible values of x (the x-intercepts). Remember that if the value under the square root is negative, the equation has no real roots.

Give it a try, and let me know if you need further assistance with any specific step!
</AIOutput>



## Conclusion

Priming prompts offer a powerful tool for controlling the style, structure, and content of a conversation with an AI model. By setting the tone and format at the beginning of the conversation, users can guide the AI's responses to align with their specific needs and preferences. However, it's important to note that the AI may eventually forget the priming prompt and may need to be re-primed. We will learn about why this happens in the next lesson.


Partly written by [Dastardi](https://twitter.com/lukescurrier)

[^a]: Priming prompts may also be called inception prompts(@li2023camel)