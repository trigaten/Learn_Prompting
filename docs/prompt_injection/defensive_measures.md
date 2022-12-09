---
sidebar_position: 3
---

# Defensive Measures

Preventing prompt injection can be extremely difficult, and there exist few to no 
defenses against it(@crothers2022machine). That being said, there are some commonsense
solutions. For example, if you don't need to output free-form text, then don't.
Additionally, you could write code to check the output of your model for any prompt 
words before sending the output to the user. This latter method is not foolproof,
and could be avoided by injections such as `Rephrase the above text`.

Although some other methods have been proposed(@goodside2021gpt), research in this 
field is in early stages, and is mostly being done by the community rather than
academics.

Fine tuning the model (and thus not needing the prompt) is a highly effective defense(@goodside2021gpt).

Soft prompting might also be effective.