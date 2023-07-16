---
sidebar_position: 2
---
# 🟢 Giving Instructions

import InstructionPrompt from '@site/docs/assets/basics/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


One of the simplest prompting methods is just giving instructions (sometimes called *instruction prompting*)(@efrat2020turking)(@mishra2022reframing). We already saw a simple instruction
in a previous section (`Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct:`). However,
modern AIs can follow much more complex instructions. 

Below is our first [embed](https://learnprompting.org/docs/basics/intro#embeds). If you do not see it, make sure to turn Javascript on in your browser. Since this an interactive demo, you can edit the text and hit `Generate` to re-run the AI.

#### Example 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlxuXG5TaGFoLCBBYXl1c2giLCJwcm9tcHQiOiJBIHVzZXIgaGFzIGlucHV0IHRoZWlyIGZpcnN0IGFuZCBsYXN0IG5hbWUgaW50byBhIGZvcm0uIFdlIGRvbid0IGtub3cgaW4gd2hpY2ggb3JkZXIgdGhlaXIgZmlyc3QgbmFtZSBhbmQgbGFzdCBuYW1lIGFyZSwgYnV0IHdlIG5lZWQgaXQgdG8gYmUgaW4gdGhpcyBmb3JtYXQgJzxMYXN0IG5hbWU%2BLCA8Rmlyc3QgbmFtZT4nLiBcblxuUGxlYXNlIGNvbnZlcnQgdGhlIGZvbGxvd2luZyBuYW1lIGluIHRoZSBleHBlY3RlZCBmb3JtYXQ6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>The AI is easily able to solve this problem. We can also ask it to solve many other
simple and more complex problems.

#### Example 2

Here is a more complicated example[^A]:

```
Read the following sales email. Remove any personally identifiable information (PII),
and replace it with the appropriate placeholder. For example, replace the name "John Doe"
with "[NAME]".

Hi John,

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

Jimmy Smith

Phone: 410-805-2345
Email: jimmysmith@cheapdealz.com
```

Here is the [AI's response](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Hi [NAME],

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership ([DEALERSHIP]), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

[SALESPERSON]

Phone: [PHONE NUMBER]
Email: [EMAIL ADDRESS]
// highlight-end
```

It is very exciting to see how the model can extrapolate from the instructions. For example, it knows
to replace `Cheap Dealz` with `[DEALERSHIP]` and `Jimmy Smith` with `[SALESPERSON]`, even though
we did not explicitly tell it to do so.

[^A]: Allowing AI to remove PII from text is a promising approach, but it should be used with extraordinary caution as it may make mistakes.


