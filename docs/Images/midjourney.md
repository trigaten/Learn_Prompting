---
sidebar_position: 99
---
# 🟢 Midjourney

[Midjourney](https://www.midjourney.com) is another AI image generator Unlike Stable Diffusion, Midjourney uses a Discord bot as an interface for AI image generation (join the Discord [here](https://discord.gg/midjourney) or experiment with the bot in the [Learn Prompting Discord](http://learnprompting.org/discord)). However, using the Midjourney Bot follows the same basic principles for image prompting.

import midjourney_astronaut from '../assets/midjourney_astronaut.png';
import midjourney_astronaut_params from '../assets/midjourney_astronaut_params.png';
import midjourney_astronaut_multi1 from '../assets/midjourney_astronaut_multi1.png';
import midjourney_astronaut_multi2 from '../assets/midjourney_astronaut_multi2.png';
import midjourney_astronaut_ip2 from '../assets/midjourney_astronaut_ip2.png';


# Basic Usage

The basic prompt anatomy with Midjourney is `/imagine prompt: [IMAGE PROMPT] [--OPTIONAL PARAMETERS]`. For example:

```text
/imagine prompt: astronaut on a horse
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "750px"}} />
</div>

More information about image prompt parameters can be found here: [Midjourney Documentation - Parameter List](https://docs.midjourney.com/docs/parameter-list)

Example:

```text
/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000 
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params} style={{width: "750px"}} />
</div>

# Advanced Prompts
## Multi Prompts
Midjourney interprets your prompt holistically by default. Using a double colon `::` tells Midjourney to interpret each part of a prompt separately.
Example:
```text
/imagine prompt: astronaut and horse
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi1} style={{width: "750px"}} />
</div>

```text
/imagine prompt: astronaut:: and horse
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi2} style={{width: "750px"}} />
</div>


## Image Prompts
By uploading an image to Discord and using its URL in a prompt, you can instruct Midjourney to use that image to influence the content, style and composition of your results. 
Example:
[Astronaut (Source: Wikipedia)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).jpg)

```text
/imagine prompt: [image URL], impressionist painting
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_ip2} style={{width: "750px"}} />
</div>

## Notes

Needs more content!