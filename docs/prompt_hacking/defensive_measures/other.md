---
sidebar_position: 2000
---

# 🟢 Other Approaches 

Although the previous approaches can be very robust, a few other approaches, such as using a different model, including fine tuning, soft prompting, and length restrictions, can also be effective.

## Using a Different Model

More modern models such as GPT-4 are more robust against prompt injection. Additionally, non-instruction tuned models may be difficult to prompt inject. 

## Fine Tuning

Fine tuning the model is a highly effective defense(@goodside2021gpt), since at inference time there is no prompt involved, except the user input. This is likely the preferable defense in any high value situation, since it is so robust. However, it requires a large amount of data and may be costly, which is why this defense is not frequently implemented.


## Soft Prompting

Soft prompting might also be effective, since it does not have a clearly defined discrete prompt (other than user input). Soft prompting effectively requires fine tuning, so it has many of the same benefits, but it will likely be cheaper. However, soft prompting is not as well studied as fine tuning, so it is unclear how effective it is.

## Length Restrictions

Finally, including length restrictions on user input(@selvi2022exploring) or limiting the length of chatbot coversations as Bing does can prevent some attacks such as huge DAN-style prompts or virtualization attacks respectively.