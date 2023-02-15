---
sidebar_position: 5
locale: en-us
style: chicago
---

# 🟢 Least to Most Prompting

Least to Most Prompting (@zhou2022leasttomost) builds upon the idea of Chain-of-Thought prompting and takes it a step further. It is a technique inspired by real-world educational strategies for children.  

As in CoT-Prompting, the problem to be solved is decomposed in a set of subproblems that build upon each other. In a second step, these subproblems are solved individually and in sequence. However, contrary to chain of thought, the solution of previous subproblems is fed into the next question.

This leads to multiple improvements:
- improved accuracy over Chain of Thought
- increased generalization on problems harder than those in the prompt

## Example: letter concatenation

Let's examine the problem of concatenating the last letter of individual words (for example, given "cake, etymology" as input words, the output should be "ey").

### First attempt: Standard 

The standard prompt with few-shot examples performs very poorly, even with a more advanced model such as text-davinci-003.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: ke\n\nQ: learning, reasoning, generalization\nA: ggn\n\nQ: artificial, intelligence\nA: le\n\nQ: transformer, language, vision\nA: ren\n\nQ: foo,bar,baz,blip\nA:"
     initial-response="lip"
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Second attempt: Chain of Thought
Chain of Thought is significantly better. This is because it now allows the model
to consider extracting the last letter of each word on its own, reducing the complexity down to the operation of grouping letters it has previously collected. However, this starts to break down at larger sizes.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: The last letter of &#34;think&#34; is &#34;k&#34;. The last letter of &#34;machine&#34; is &#34;e&#34;. So &#34;think, machine&#34; is &#34;ke&#34;.\n\nQ: learning, reasoning, generalization\nA: The last letter of &#34;learning&#34; is &#34;g&#34;. The last letter of &#34;reasoning&#34; is &#34;n&#34;. The last letter of &#34;generalization&#34; is &#34;n&#34;. So &#34;learning, reasoning, generalization&#34; is &#34;ggn&#34;.\n\nQ: artificial, intelligence\nA: The last letter of &#34;artificial&#34; is &#34;l&#34;. The last letter of &#34;intelligence&#34; is &#34;e&#34;. So &#34;artificial, intelligence&#34; is &#34;le&#34;.\n\nQ: transformer, language, vision\nA: The last letter of &#34;transformer&#34; is &#34;r&#34;. The last letter of &#34;language&#34; is &#34;e&#34;. The last letter of &#34;vision&#34; is &#34;n&#34;. So &#34;transformer, language, vision&#34; is &#34;ren&#34;.\n\nQ: foo,bar,baz,blip\nA:"
     initial-response="The last letter of &#34;foo&#34; is &#34;o&#34;. The last letter of &#34;bar&#34; is &#34;r&#34;. The last letter of &#34;baz&#34; is &#34;z&#34;. The last letter of &#34;blip&#34; is &#34;p&#34;. So &#34;foo,bar,baz,blip&#34; is &#34;orzp&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Third attempt: Least to Most

With Least to Most prompting, we augment the Chain of Thought concept by reducing the steps to concatenating a single new letter to all the previously concatenated letters. This leads to good performance all the way to word 12 or more words.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: The last letter of &#34;think&#34; is &#34;k&#34;. The last letter of &#34;machine&#34; is &#34;e&#34;. Concatenating &#34;k&#34; and &#34;e&#34; gives &#34;ke&#34;. So &#34;think, machine&#34; output &#34;ke&#34;.\n\nQ: think, machine, learning\nA: &#34;think, machine&#34; outputs &#34;ke&#34;. The last letter of &#34;learning&#34; is &#34;g&#34;. Concatenating &#34;ke&#34; and &#34;g&#34; gives &#34;keg&#34;. So &#34;think, machine, keg&#34; is &#34;keg&#34;.\n\nQ: transformer, language\nA: The last letter of &#34;transformer&#34; is &#34;r&#34;. The last letter of &#34;language&#34; is &#34;e&#34;. Concatenating &#34;r&#34; and &#34;e&#34; gives &#34;re&#34;. So &#34;transformer, language&#34; is &#34;re&#34;.\n\nQ: transformer, language, vision\nA: &#34;transformer, language&#34; outputs &#34;re&#34;. The last letter of &#34;vision&#34; is &#34;n&#34;. Concatenating &#34;re&#34; and &#34;n&#34; gives &#34;ren&#34;. So &#34;transformer, language, vision&#34; is &#34;ren&#34;.\n\nQ: foo,bar,baz,blip,learn,prompting,world,shaking,event,dancefloor,prisma,giraffe\nA:"
     initial-response="The last letter of &#34;foo&#34; is &#34;o&#34;. The last letter of &#34;bar&#34; is &#34;r&#34;. Concatenating &#34;o&#34; and &#34;r&#34; gives &#34;or&#34;. The last letter of &#34;baz&#34; is &#34;z&#34;. Concatenating &#34;or&#34; and &#34;z&#34; gives &#34;orz&#34;. The last letter of &#34;blip&#34; is &#34;p&#34;. Concatenating &#34;orz&#34; and &#34;p&#34; gives &#34;orzp&#34;. The last letter of &#34;learn&#34; is &#34;n&#34;. Concatenating &#34;orzp&#34; and &#34;n&#34; gives &#34;orzpn&#34;. The last letter of &#34;prompting&#34; is &#34;g&#34;. Concatenating &#34;orzpn&#34; and &#34;g&#34; gives &#34;orzpng&#34;. The last letter of &#34;world&#34; is &#34;d&#34;. Concatenating &#34;orzpng&#34; and &#34;d&#34; gives &#34;orzpngd&#34;. The last letter of &#34;shaking&#34; is &#34;g&#34;. Concatenating &#34;orzpngd&#34; and &#34;g&#34; gives &#34;orzpngdg&#34;. The last letter of &#34;event&#34; is &#34;t&#34;. Concatenating &#34;orzpngdg&#34; and &#34;t&#34; gives &#34;orzpngdgt&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>
     
### Results

While Chain of Thought breaks down to an accuracy of 34% word 12 words, Least to Most prompting manages to keep performance up at 74%.

## Example: compositional generalization (SCAN)

The SCAN benchmark requires the model to convert natural language to sequences of actions. For example, the sentence "run left and walk twice" would be translated to "TURN_LEFT + RUN + WALK * 2." Language models perform especially poorly when confronted with sequences that are longer than those in the training set.

### First attempt: Standard prompting

Using simple standard prompts, text-davinci-002 gets impressively far, but still fails.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: TURN LEFT\n\nQ: turn right\nA: TURN RIGHT\n\nQ: jump left\nA: TURN LEFT &#43; JUMP\n\nQ: run right\nA: TURN RIGHT &#43; RUN\n\nQ: look twice\nA: LOOK * 2\n\nQ: run and look twice\nA: RUN &#43; LOOK * 2\n\nQ: jump right thrice\nA: (TURN RIGHT &#43; JUMP) * 3\n\nQ: walk after run\nA: RUN &#43; WALK\n\nQ: turn opposite left\nA: TURN LEFT * 2\n\nQ: turn around left\nA: TURN LEFT * 4\n\nQ: turn opposite right\nA: TURN RIGHT * 2\n\nQ: turn around right\nA: TURN RIGHT * 4\n\nQ: walk opposite left\nA: TURN LEFT * 2 &#43; WALK\n\nQ: walk around left\nA: (TURN LEFT &#43; WALK) * 4\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="(TURN LEFT * 2 + WALK) * 3 + (TURN LEFT + JUMP) * 2"
     max-tokens="512" box-rows="18"
     model-temp="0.2" ></div>

### Second attempt: Least to Most, first step - Reduction

Here, we work with 2 different prompts. The first prompt is used to reduce the input problem into a simpler sequence of steps. The second prompt is used to map this simplified sequence of steps into actual actions.

Both prompts are pretty long, and use compressed python notation for the action to save on tokens.

The first step breaks the natural language description down in a more explicit, yet still human like language. This will help the mapping step figure things out in sequence.
For example, "jump around left twice" is reduced to "jump left" -> `TURN_LEFT + JUMP` and "jump around left" -> `(TURN_LEFT + JUMP) * 4`. Similarly, the reduction step is what is used to explain the concept of repetition (twice, thrice, etc...).

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: look right after look twice\nA: &#34;look right after look twice&#34; can be solved by: &#34;look right&#34;, &#34;look twice&#34;.\n\nQ: jump opposite right thrice and walk\nA: &#34;jump opposite right thrice&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;. &#34;walk&#34; can be solved by: &#34;walk&#34;. So, &#34;jump opposite right thrice and walk&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: run left twice and run right\nA: &#34;run left twice&#34; can be solved by: &#34;run left&#34;, &#34;run left twice&#34;. &#34;run right&#34; can be solved by &#34;run right&#34;. So, &#34;run left twice and run right&#34; can.be solved by: &#34;run left&#34;, &#34;run left twice&#34;, &#34;run right&#34;.\n\nQ: run opposite right\nA: &#34;run opposite right&#34; can be solved by &#34;run opposite right&#34;.\n\nQ: look opposite right thrice after walk\nA: &#34;look opposite right thrice&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look opposite right thrice after walk&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: jump around right\nA: &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;. So, &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;.\n\nQ: look around right thrice and walk\nA: &#34;look around right thrice&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look around right thrice and walk&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;, &#34;walk&#34;.\n\nQ: turn right after run right thrice\nA: &#34;turn right&#34; can be solved by: &#34;turn right&#34;. &#34;run right thrice&#34; can be solved by: &#34;run right&#34;, &#34;run right thrice&#34;. So, &#34;turn right after run right thrice&#34; can be solved by: &#34;turn right&#34;, &#34;run right&#34;, &#34;run right thrice&#34;.\n\nQ: jump around left twice after walk opposite left thrice\nA:"
     initial-response="&#34;jump around left twice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; can be solved by: &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;. So, &#34;jump around left twice after walk opposite left thrice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;, &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### Second attempt: Least to Most, second step - Mapping

In the second step, we use the output of the reduction, and again use a fairly long prompt (14 cases) to translate the reduced natural language description into a sequence of actions.

Here, we inject the output of the first step:

> "jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".

into the LLM.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: &#34;turn left&#34; outputs &#34;TURN LEFT&#34;.\n\nQ: turn right\nA: &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;.\n\nQ: jump left\nA: The output of &#34;jump left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;jump&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. &#34;jump&#34; outputs &#34;JUMP&#34;. So concatenating the output of &#34;turn left&#34; and the out- put of &#34;jump&#34; leads to &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;. So the output of &#34;jump left&#34; is &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;.\n\nQ: run right\nA: The output of &#34;run right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;run&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. &#34;run&#34; outputs &#34;RUN&#34;. So concatenating the output of &#34;turn right&#34; and the output of &#34;run&#34; leads to &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;. So the output of &#34;run right&#34; is &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;.\n\nQ: look twice\nA: The output of &#34;look twice&#34; concatenates: the output of &#34;look&#34;, the output of &#34;look&#34;. &#34;look&#34; outputs &#34;LOOK&#34;. So repeating the output of &#34;look&#34; two times leads to &#34;LOOK&#34; * 2. So the output of &#34;look twice&#34; is &#34;LOOK&#34; * 2.\n\nQ: run and look twice\nA: The output of &#34;run and look twice&#34; concatenates: the output of &#34;run&#34;, the output of &#34;look twice&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;look twice&#34; outputs &#34;LOOK&#34; * 2. So concatenating the output of &#34;run&#34; and the output of &#34;look twice&#34; leads to &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2. So the output of &#34;run and look twice&#34; is &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2.\n\nQ: jump right thrice\nA: The output of &#34;jump right thrice&#34; concatenates: the output of &#34;jump right&#34;, the output of &#34;jump right&#34;, the output of &#34;jump right&#34;. &#34;jump right&#34; outputs &#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;. So repeating the output of &#34;jump right&#34; three times leads to (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3. So the output of &#34;jump right thrice&#34; is (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3.\n\nQ: walk after run\nA: The output of &#34;walk after run&#34; concatenates: the output of &#34;run&#34;, the output of &#34;walk&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;run&#34; and the output of &#34;walk&#34; leads to &#34;RUN&#34; &#43; &#34;WALK&#34;. So the output of &#34;walk after run&#34; is &#34;RUN&#34; &#43; &#34;WALK&#34;.\n\nQ: turn opposite left\nA: The output of &#34;turn opposite left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; twice leads to &#34;TURN LEFT&#34; * 2. So the output of &#34;turn opposite left&#34; is &#34;TURN LEFT&#34; * 2.\n\nQ: turn around left\nA: The output of &#34;turn around left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; four times leads to &#34;TURN LEFT&#34; * 4. So the output of &#34;turn around left&#34; is &#34;TURN LEFT&#34; * 4.\n\nQ: turn opposite right\nA: The output of &#34;turn opposite right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; twice leads to &#34;TURN RIGHT&#34; * 2. So the output of &#34;turn opposite right&#34; is &#34;TURN RIGHT&#34; * 2.\n\nQ: turn around right\nA: The output of &#34;turn around right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; four times leads to &#34;TURN RIGHT&#34; * 4. So the output of &#34;turn around right&#34; is &#34;TURN RIGHT&#34; * 4.\n\nQ: walk opposite left\nA: The output of &#34;walk opposite left&#34; concatenates: the output of &#34;turn opposite left&#34;, the output of &#34;walk&#34;. &#34;turn opposite left&#34; outputs &#34;TURN LEFT&#34; * 2. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;turn opposite left&#34; and the output of &#34;walk&#34; leads to &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;. So the output of &#34;walk opposite left&#34; is &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;.\n\nQ: walk around left\nA: The output of &#34;walk around left&#34; concatenates: the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;. &#34;walk left&#34; outputs &#34;TURN LEFT&#34; &#43; &#34;WALK&#34;. So repeating the output of &#34;walk around left&#34; four times leads to (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4. So the output of &#34;walk around left&#34; is (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4.\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="The output of &#34;jump around left twice after walk opposite left thrice&#34; concatenates: the output of &#34;walk opposite left thrice&#34;, the output of &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; outputs &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3. &#34;jump around left twice&#34; outputs (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So concatenating the output of &#34;walk opposite left thrice&#34; and the output of &#34;jump around left twice&#34; leads to &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So the output of &#34;jump around left twice after walk opposite left thrice&#34; is &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4."
     max-tokens="1024" box-rows="18"
     model-temp="0.2" ></div>

### Results

Standard prompting with text-davinci-002 results in 6% of successful SCAN problems solved, while Least to Most prompting results in an impressive 76% success rate. The results are event more significant with code-davinci-002, where Least to Most prompting achieves a 99.7% success rate.
