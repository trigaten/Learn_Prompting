---
sidebar_position: 4
---

# 🟢 Zero Shot Chain of Thought


Zero Shot Chain of Thought (Zero-shot-CoT) prompting (@kojima2022large) is a follow up to %%CoT prompting|CoT prompting%% (@wei2022chain), which introduces an incredibly simple zero shot prompt. They find that by appending the words "**Let's think step by step.**" to the end of a question, LLMs are able to generate a chain of thought that answers the question. From this chain of thought, they are able to extract more accurate answers.

import ZSImage from '@site/docs/assets/intermediate/zero_shot.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Zero Shot CoT (Kojima et al.)
</div>

Technically, the full Zero-shot-CoT process involves two separate prompts/completions. In the below image, the top bubble on the left generates a chain of thought, while the top bubble on the right takes in the output from the first prompt (including the first prompt itself), and extracts the answer from the chain of thought. This second prompt is a _self augmented_ prompt.

import ZSProcessImage from '@site/docs/assets/intermediate/zero_shot_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Full Zero Shot CoT Process (Kojima et al.)
</div>

## Example

Here are a few demos (which only perform reasoning extraction). This first demo shows GPT-3 (davinci-003) failing a simple math question, while the second demo uses a Zero-shot-CoT prompt and successfully solves the problem. Feel free to enter your OpenAI API key (Click Generate) and play around with the examples. Note how much simpler the Zero-shot-CoT prompt is compared to the CoT prompt.

#### Incorrect

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### Correct

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Results
Zero-shot-CoT was also effective in improving results on arithmetic, commonsense, and symbolic reasoning tasks. However, unsurprisingly, it was usually not as effective as CoT prompting. An important use case for Zero-shot-CoT is when obtaining few shot examples for CoT prompting is difficult.

## Ablations of Interest

Kojima et al. experiment with a number of different Zero-shot-CoT prompts (e.g. "Let’s solve this problem by splitting it into steps." or "Let’s think about this logically."), but they find that "Let's think step by step" is most effective for their chosen tasks.



## Notes

The extraction step often must be task specific, making Zero-Shot-CoT less generalizable than it appears at first.

Anecdotally, I've found that Zero-shot-CoT style prompts are sometimes effective in improving the length of completions for generative tasks. For example, consider the standard prompt `Write a story about a frog and a mushroom who become friends.` Appending the words `Let's think step by step.` to the end of this prompt leads to a much longer completion.

