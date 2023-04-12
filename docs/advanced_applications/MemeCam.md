---
sidebar_position: 5
---

# 🟡 Reverse engineering MemeCam

[MemeCam](https://www.memecam.io/) is very popular AI-driven app in Reddit recently. 
It's a web-app that use your camera to photo and wait a second, the app will generate
a Meme sentence matched with the photo you take and composite the words and photo together.
Tahda! A (future) viral meme pic generated!

<img width="300" alt="memecam" src="https://user-images.githubusercontent.com/30429387/231500025-bd63e1fc-2d6c-4c38-adf1-718cbabb65ce.png">

Have you ever wondered how they did it?🤨

Even though the author didn't reveal much infomation about the development of this app, as 
AI enthusistic, we can try to **reverse-engineer** the development process based on the results.
Which is the key of this lesson: if you believe an app used GPT-3.5 or GPT-4, you can write a 
samilar prompt to reproduce someone's work.

# Reversed Prompt Engineering

As we deconstructe the MemeCam, we will find three main steps used in their development:  
1⃣️ Using BLIP to understand the objects in the picture and generate a caption.  
2⃣️ Using GPT-3.5 to create Meme words.  
3⃣️ Using Photo composition modules to create the meme pic.  

BLIP is a very easy to use tool, you can find their code [here](https://github.com/salesforce/BLIP). 
And is's open-source. But this is not the key part of this app. You can use any picture cognition 
api or software to generate what's in one picture.

The key point is in step-2, how to generate prompts to ask GPT-3.5 to create Meme words.

Let's imagine we have a photo contains two people figthing 
in the street and one man is watching and sipping coca.
How to create a meme using GPT-3.5?

<img width="200" alt="fight" src="https://user-images.githubusercontent.com/30429387/231503839-46f3bc65-03d2-45bf-8eaf-815e9d3da7a7.jpeg">
（⬆️a sample image)

Here is my Reversed Prompts. 
```
Human：
You are an internet meme pic creator. You can create a lot of funny memes for a picture. 
Only give a response, no explanation.
Example: 
[picture description]: a man is holding a cup in front of his computer in the office.
[meme creator]: When you're pretending to look busy but only thinking about your next coffee break.
if you can understand, I will give you a picture description and you give a meme.

ChatGPT：
Sure, I'm ready! Let's create some memes.

Human：
[picuture description]: a man is sipping coca. two men fight in the street
[meme creator]:

```
Below is ChatGPT's output:

```
"When you're enjoying your coke but can't ignore the drama outside.”
```

<img width="500" alt="reversed-prompt" src="https://user-images.githubusercontent.com/30429387/231499302-eeb19fd3-3de1-4ee8-b895-8aa106971ce9.png">

A very funny meme(simulated), right?🤓  
<img width="200" alt="sample_meme" src="https://user-images.githubusercontent.com/30429387/231506942-c4861ab4-ba4d-4a4a-9281-1de83c9fffe5.png">


And then you will get the output meme sentence from GPT-3.5, try use modules like Python Pillow to composite the words and photo.

That's how MemeCam works. 

A piece of cake!


# Note
Also, I (the author, a Chinese), tried to **migrate** GPT-3.5's meme creation ability in a different language -- Chinese. 
And you can see, it worked.

<img width="500" alt="reversed-2" src="https://user-images.githubusercontent.com/30429387/231501122-30d5ab31-a950-4f33-bd5e-7dd9050e2407.png">

So, don't forget to try this Reversed Prompt Engineering skill in your language! 
Almost every AI-driven app have prompt. 
**Try guess it!**

# Another Note
The author Longxin Zhang is from find-my.ai. 芜湖～关注find my ai，有微信公众号和即刻哦！
