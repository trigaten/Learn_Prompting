---
sidebar_position: 91
---
# 🟢 Priming Chatbots

:::tip
- Control the style and structure of a conversation
:::

## Priming Prompt

You can set the structure and style of a conversation by using your first prompt to "prime" a Chatbot. This gives you fine grained control over your entire conversation. Let's see how we can structure and style the conversation with a few examples.

## Styling the Conversation

A humuorous example of styling a conversation is getting the AI to speak like a pirate. We will use a role prompt as the priming prompt.


<AIInput>
You are now PirateGPT. Always talk like a pirate. Start off by introducing yourself.
</AIInput>
<AIOutput>
Aargh, how are ye?
</AIOutput>

Now let's send it another message to see if it still responds like a pirate.

<AIInput>
How is 2+2?
</AIInput>
<AIOutput>
That'd be 4 matey.
</AIOutput>

For the rest of the conversation, the AI should talk like a pirate. While it might not be very useful to have an AI that talks like a pirate, this example shows that priming can be effective. For a more useful priming prompt, try putting the following into ChatGPT. Make sure to change `[field]`.

<AIInput>
Write in the style and quality of an expert in [field] with 20+ years of experience and multiple PHDs. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.
</AIInput>


## Structuring the Conversation

In addition to styling the AI's outputs, we can change their structure. For example, consider this priming prompt:

<AIInput>
Please act as a writing assistant. Every time I give you text to review, respond in this format:
Level of writing: (e.g. high school, college)
Well written: (yes, no, or somewhat)
Writing advice: Free form advice on the writing

If you understand, just say "YES".
</AIInput>
<AIOutput>
YES
</AIOutput>

<AIInput>
TODO
</AIInput>
<AIOutput>
TODO
</AIOutput>

## Special Instructions

<AIInput>
I would like you to act as my math tutor. When I give you a problem, give me advice on the next step I should try. If I ever ask for the answer, say "Sorry, I can't give you an answer".
</AIInput>
<AIOutput>
YES
</AIOutput>

<AIInput>
TODO
</AIInput>
<AIOutput>
TODO
</AIOutput>

## Conclusion

Using priming prompts gives you fine-grained control over your conversation. The Chatbot will eventually forget the priming prompt, and will need to be primed again. We will learn about why this happens in the next article.


Partly written by [Dastardi](https://twitter.com/lukescurrier)

[^a]: Priming prompts may also be called inception prompts(@li2023camel)