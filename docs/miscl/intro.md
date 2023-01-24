---
sidebar_position: 1
---

# 🟢 Detecting AI Generated Text

Detecting AI generated text is a big problem for safety researchers and educators,
among others. Tools like [GPTZero](https://gptzero.me) have seen siginificant success,
However, they can [be tricked](https://twitter.com/goodside/status/1610552172038737920?ref_src=twsrc%5Etfw). Additionally, by running an open source model and modifying it's
output probabilities, text will likely be much harder to detect.

Companies like OpenAI are working to introduce statistical watermarking into their
generated text, but this too can be fooled by modifying large portions of the text.

The problem of AI text detection will likely be an arms race as new models and 
new detection methods are introduced. Many companies have already started to 
build solutions which they claim are very effective, but it is difficult to prove
this, especially over time.

## Philosophy

Educators are very interested in this technology to prevent cheating, but some 
Internet commenters and other educators have expressed that they believe students
should be allowed to use these tools. 

https://www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html
https://time.com/6246574/schools-shouldnt-ban-access-to-chatgpt/

## Prompting Music Generation Models

Music generation models are becoming increasingly popular and are expected to have a huge impact on the music industry in the future. These models are already extremely powerful and can be used to generate any musical content from chord progressions to melodies or full songs, to structure and create music in a specific genre and to compose or improivise in the style of a particular artist.

However, despite the enormous potential of music models, it is currently difficult to find those that let us apply real prompt craft. Rather, most of the available music models are predefined in one way or another which means that the generated output is not customizable by prompts to the extent we know it from image or text generation models.
The web app Riffusion, for example, which is based on stable diffusion, can be controlled with prompts to generate instruments and pseudo styles, but uses a rigid and immutable 4/4 backbeat. Mubart, on the other hand, allows extensive prompts but seems to interpret them more in terms of a sentiment analysis that links appropriate musical stylistics to it (controlling the musical parameters in detail via prompts is not possible). 
In addition to these, there are attempts to use GPT-3 as a Text-2-Music tool with actual prompting for musical elements on the "micro-level" of notes (instead of the rather vague prompt-style-analogies mubart & riffusion produe). However, at present those attempts are limited  to single instruments.