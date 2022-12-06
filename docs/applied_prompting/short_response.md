---
sidebar_position: 2
---

# Solve Discussion Posts

import Auto from '../assets/short_content_auto.png';

With the right prompting, GPT-3 is very capable of writing short form responses. To demonstrate this, I will be looking at **solving discussion questions**, a common weekly assignment in many college courses. A response to a discussion question is usually about 100-700 words. Longer content can be bit more tricky as LLMs have limited memory and have difficulty understanding the global picture of what they are writing(@jin2022plot).

Let's look at an example of a basic discussion post question:

> _"What are the most pressing environmental issues facing our planet today, and what steps can individuals take to help address these issues?"_

A simple prompt for GPT3 could be prepending "Respond to the following:"

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Respond to the following:</span><br/>
    What are the most pressing environmental issues facing our planet today, <br/>and what steps can individuals take to help address these issues?
</pre>

Results generated with this prompt aren't that consistent and a few are only a sentence or two. Not what we want. Usually want 180-500 word responses and multiple paragraphs for a discussion question. A good prompt should give **specific instructions about format and content**. You want to remove ambiguity in your language to improve consistency and quality. Here is a better prompt.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Write a highly detailed essay with introduction, body, and conclusion paragraphs responding to the following:</span><br/>
    What are the most pressing environmental issues facing our planet today,
    <br/>and what steps can individuals take to help address these issues?
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="example"></iframe>

<!-- <div style={{width: "100%", height: 0, paddingBottom: "57%", position: "relative"}}>
    <iframe src="https://giphy.com/embed/khdUf3ZC5HYTnR1avI" width="100%" height="100%" style={{position: "absolute", frameBorder: "0", class: "giphy-embed"}}>
    </iframe>
</div> -->

On average, the results of the second prompt are longer in length and have better structure. I put the word essay in the prompt because GPT-3 can understand what an essay is and essays have good structure for the responses we want.

### Most discussion questions suck for prompting

> _"The Civil War a conflict over expansion? Agree our Disagree and why?"_

This is an old discussion question I got for a history class I took. Super open ended, not even worded correctly, barely English. **To get good discussion responses you need to rewrite the question into a well defined prompt.** A well defined prompt for the discussion question above could be:

> _"Explain the causes of the Civil War and whether expansion played a role in the conflict. Include evidence to support your argument."_

Now we can add formatting and context directions.

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Write a highly detailed discussion response, in the structure of an essay, responding to the following prompt:</span>
    <p>Expalin the causes of the Civil War and whether expansion played a role in the conflict. Include evidence to support your argument.</p>
</pre>

Overview: steps for generating optimal and consistent discussion posts:

- Reformat discussion question into a well defined prompt
- Add formatting directions
- Generate the post

### Automate well defined prompt rewriting with GPT3

The rewriting example above was generated with OpenAI's ChatGPT.

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}} />
</div>

So now the steps could be:

- Generate a reformat of the discussion question
- Add formatting directions
- Generate the post

You can also probably automate the second step.

### Iteration

After creating an optimal prompt for your discussion question, you still need to iterate on the results that GPT-3 generates. This could mean modifying to align with constrains like word count, or producing several results and stitching together concepts from each.

A simple approach to iteration is to just generate a bunch. You can then go through and get a gist of what concepts GPT-3 picks up on and the overall structure it conforms to. You can then **select different outputs and merge them into a single dicsussion response**.

Another way to iterate is to start and then **expand step by step**. This would require more than one prompt: A starter prompt to write the intitial paragraph or so and then other prompts to expand on what was already written.

Here is a potential philosophical discussion question:

> _"Is math invented or discovered? Use careful reasoning to explain your answer."_

Add it into a start prompt like this:

<pre>
    <span style={{backgroundColor: "#FFF2CC"}}>Write a beginning paragraph responding to the following:</span>
    <p>Is math invented or discovered? Use careful reasoning to explain your answer</p>
</pre>

I generated a few responses and found one I liked:

<pre>
    <span style={{backgroundColor: "#D2F4D3"}}>There is much debate among philosophers and mathematicians as to whether 
    <br/>math is invented or discovered. Some argue that mathematical concepts and principles exist 
    <br/>independently of human minds and can therefore be considered as discovered rather than invented. 
    <br/>For example, the concept of numbers, ratios, and geometric shapes are observed in the natural 
    <br/>world and can be abstracted and studied in a systematic way.</span>
</pre>

Pretty good start. I then followed this up with another prompt to expand:

<pre>
<span style={{backgroundColor: '#FFF2CC'}}>I am writing a detailed short essay responding to the following prompt:</span> 
<br/>Is math invented or discovered? Use careful reasoning to explain your answer. <span style={{backgroundColor: '#FFF2CC'}}><p/>Here is what I have so far:</span> There is much debate among philosophers and mathematicians as to whether 
<br/>math is invented or discovered. Some argue that mathematical concepts and principles exist independently
<br/>of human minds and can therefore be considered as discovered rather than invented. For example, the
<br/>concept of numbers, ratios, and geometric shapes are observed in the natural world and can be abstracted
<br/>and studied in a systematic way. <p/><span style={{backgroundColor: '#FFF2CC'}}>Write the next paragraph of my essay.</span>
</pre>

I generated a few expansions with this prompt and selected one I liked to end up with the following final result:

<pre>
    <p>
        There is much debate among philosophers and mathematicians as to whether 
        <br/>math is invented or discovered. Some argue that mathematical concepts and principles exist 
        <br/>independently of human minds and can therefore be considered as discovered rather than invented. 
        <br/>For example, the concept of numbers, ratios, and geometric shapes are observed in the natural 
        <br/>world and can be abstracted and studied in a systematic way.
        <span style={{backgroundColor: "#D2F4D3"}}>
        <br/>
        <br/>On the other hand, some argue that math is largely an invention of the human mind. Mathematical
        <br/>principles are based on logical reasoning, which is a feature of the human mind. For instance,
        <br/>Euclidean geometry is based on abstract axioms and postulates, which are accepted as true without
        <br/>proof. As such, it can be argued that geometry is an invention of the human mind rather than 
        <br/>a discovery. Similarly, mathematical formulas and equations are used to model and predict physical
        <br/>phenomena, which are again the result of human reasoning. 
        </span>
    </p>
</pre>

Using expansion prompts, we can write more incrementally and iterate at each step. This is useful for when you need to **produce a higher quality output and want to modify the incremental steps**.