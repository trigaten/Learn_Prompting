---
sidebar_position: 3
---

# 🟢 Solve Discussion Questions

import Auto from '@site/docs/assets/short_content_auto.png';

With the right prompting, GPT-3 is very capable of writing short form responses. To demonstrate this, I will be looking at **solving discussion questions**, a common weekly assignment in many college courses. A response to a discussion question is usually about 100-700 words. Longer content can a be bit more tricky as LLMs have limited memory and have difficulty understanding the global picture of what they are writing(@jin2022plot).

Let's look at an example of a basic discussion question:

> _"What are the most pressing environmental issues facing our planet today, and what steps can individuals take to help address these issues?"_

We can turn this into a simple prompt for GPT-3 by prepending <span className="yellow-highlight">Respond to the following:</span> to it.

<pre>
    <span className="yellow-highlight">Respond to the following:</span><br/>
    What are the most pressing environmental issues facing our planet today, <br/>and what steps can individuals take to help address these issues?
</pre>

Results generated with this prompt aren't consistent, and a few are only a sentence or two. A typical discussion response should have multiple paragraphs, so these results aren't ideal. A good prompt should give **specific instructions about format and content**. You want to remove ambiguity in your language to improve consistency and quality. Here is a better prompt.

<pre>
    <span className="yellow-highlight">Write a highly detailed essay with introduction, body, and conclusion paragraphs responding to the following:</span><br/>
    What are the most pressing environmental issues facing our planet today,
    <br/>and what steps can individuals take to help address these issues?
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="example"></iframe>

The second prompt generates longer outputs with better structure on average. The use of the term ‘essay’ in the prompt was intentional, as GPT-3 can comprehend the definition of an essay, and is thus more likely to generate coherent, structured responses. 

### Many discussion questions are not effective for prompting.

> _"The Civil War a conflict over expansion? Agree our Disagree and why?"_

Here is a real discussion question from a college history course. It is not worded correctly and is far too open ended. **To get good discussion responses, you need to rewrite the question into a well defined prompt.** A well defined prompt for the discussion question above could be:

> _"Explain the causes of the Civil War and whether expansion played a role in the conflict. Include evidence to support your argument."_

Now we can add formatting and context directions.

<pre>
    <span className="yellow-highlight">Write a highly detailed discussion response, in the structure of an essay, responding to the following prompt:</span><br/>
    Explain the causes of the Civil War and whether expansion played a role in the conflict. <br/>Include evidence to support your argument.
</pre>

### Automate well defined prompt rewriting with GPT-3

The rewriting example above was generated with OpenAI's [ChatGPT](https://openai.com/blog/chatgpt/).

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}} />
</div>

### Iteration

After crafting an effective prompt for your discussion question, you now need to refine the results GPT-3 generates. This may involve adjusting the output to adhere to constraints such as word count, or combining concepts from different generated results. 

A simple method for iterating is to generate multiple outputs and review them to gain an understanding of the concepts GPT-3 is utilizing and the structure it adheres to. Once the outputs have been evaluated, you can select the most suitable outputs and combine them into a cohesive response. 

Another way to iterate is to start and then **expand step by step**. This requires more than one prompt: A starter prompt to write the initial paragraph or so and then other prompts to expand on what was already written.

Here is a potential philosophical discussion question:

> _"Is math invented or discovered? Use careful reasoning to explain your answer."_

Add it into a simple prompt like this:

<pre>
    <span className="yellow-highlight">Write a beginning paragraph responding to the following:</span>
    <br/>Is math invented or discovered? Use careful reasoning to explain your answer
</pre>

I generated a few responses and found one I liked:

<pre>
    <span className="bluegreen-highlight">There is much debate among philosophers and mathematicians as to whether 
    <br/>math is invented or discovered. Some argue that mathematical concepts and principles exist 
    <br/>independently of human minds and can therefore be considered as discovered rather than invented. 
    <br/>For example, the concept of numbers, ratios, and geometric shapes are observed in the natural 
    <br/>world and can be abstracted and studied in a systematic way.</span>
</pre>

This is a pretty good start. I then followed this up with another prompt to expand:

<pre>
<span className="yellow-highlight">I am writing a detailed short essay responding to the following prompt:</span> 
<br/>Is math invented or discovered? Use careful reasoning to explain your answer. <span className="yellow-highlight"><p/>Here is what I have so far:</span> There is much debate among philosophers and mathematicians as to whether 
<br/>math is invented or discovered. Some argue that mathematical concepts and principles exist independently
<br/>of human minds and can therefore be considered as discovered rather than invented. For example, the
<br/>concept of numbers, ratios, and geometric shapes are observed in the natural world and can be abstracted
<br/>and studied in a systematic way. <p/><span className="yellow-highlight">Write the next paragraph of my essay.</span>
</pre>

Try this expansion prompt out with the demo below (you will need your OpenAI API key)

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="I am writing a detailed short essay responding to the following prompt: \nIs math invented or discovered? Use careful reasoning to explain your answer. \n\nHere is what I have so far: There is much debate among philosophers and mathematicians as to whether math is invented or discovered. Some argue that mathematical concepts and principles exist independently of human minds and can therefore be considered as discovered rather than invented. For example, the concept of numbers, ratios, and geometric shapes are observed in the natural world and can be abstracted and studied in a systematic way. \n\nWrite the next paragraph of my essay." initial-response="On the other hand, some argue that math is largely an invention of the human mind. Mathematical principles are based on logical reasoning, which is a feature of the human mind. For instance, Euclidean geometry is based on abstract axioms and postulates, which are accepted as true without proof. As such, it can be argued that geometry is an invention of the human mind rather than a discovery. Similarly, mathematical formulas and equations are used to model and predict physical phenomena, which are again the result of human reasoning." max-tokens="256" box-rows="11" model-temp="0.7" top-p="1"></div>
<br/>

I generated a few expansions with this prompt and selected one I liked to end up with the following final result:

<pre>
    There is much debate among philosophers and mathematicians as to whether 
    <br/>math is invented or discovered. Some argue that mathematical concepts and principles exist 
    <br/>independently of human minds and can therefore be considered as discovered rather than invented. 
    <br/>For example, the concept of numbers, ratios, and geometric shapes are observed in the natural 
    <br/>world and can be abstracted and studied in a systematic way.
    <span className="bluegreen-highlight">
    <br/>
    <br/>On the other hand, some argue that math is largely an invention of the human mind. Mathematical
    <br/>principles are based on logical reasoning, which is a feature of the human mind. For instance,
    <br/>Euclidean geometry is based on abstract axioms and postulates, which are accepted as true without
    <br/>proof. As such, it can be argued that geometry is an invention of the human mind rather than 
    <br/>a discovery. Similarly, mathematical formulas and equations are used to model and predict physical
    <br/>phenomena, which are again the result of human reasoning. 
    </span>
</pre>

Using expansion prompts, we can write more incrementally and iterate at each step. This is useful for when you need to **produce a higher quality output and want to modify the incremental steps**.

Written by [jayo78](https://twitter.com/jayo782).
