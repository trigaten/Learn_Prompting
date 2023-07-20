---
sidebar_position: 99
---
# 🟢 Midjourney

[Midjourney](https://www.midjourney.com) is an AI image generator that operates through a Discord bot interface as well as a web app (an API version of Midjourney is planned). The process for generating images with Midjourney follows the same fundamental principles as other AI image generators, including the use of prompts to guide the generation process. 

One of the unique features of Midjourney compared to other AI image generators is its ability to create visually striking and artistically composed images. This is attributed to the model's specialized training, which enables it to produce high-quality images with specific artistic parameters (more about this in "Advanced Prompts" > "Parameters").

You can experiment with the Midjourney Bot in the [Learn Prompting Discord](http://learnprompting.org/discord) or in the [official Midjourney Discord server](https://discord.gg/midjourney).

import midjourney_astronaut from '@site/docs/assets/images_chapter/midjourney_astronaut.webp';
import midjourney_astronaut_params from '@site/docs/assets/images_chapter/midjourney_astronaut_params.webp';
import midjourney_astronaut_multi1 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi1.webp';
import midjourney_astronaut_multi2 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi2.webp';
import midjourney_astronaut_ip2 from '@site/docs/assets/images_chapter/midjourney_astronaut_ip2.webp';

import midjourney_astronaut_params_a12 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a12.webp';
import midjourney_astronaut_params_a169 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a169.webp';

import midjourney_astronaut_params_c20 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c20.webp';
import midjourney_astronaut_params_c80 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c80.webp';

import midjourney_astronaut_params_q05 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q05.webp';
import midjourney_astronaut_params_q2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q2.webp';

import midjourney_astronaut_params_s50 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s50.webp';
import midjourney_astronaut_params_s900 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s900.webp';

import midjourney_astronaut_params_sameseed from '@site/docs/assets/images_chapter/midjourney_astronaut_params_sameseed.webp';
import midjourney_astronaut_params_seed123 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_seed123.webp';

import midjourney_astronaut_params_tile from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tile.webp';
import midjourney_astronaut_params_tilegrid from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilegrid.webp';
import midjourney_astronaut_params_tilecomplete from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilecomplete.webp';

import midjourney_astronaut_params_v1 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v1.webp';
import midjourney_astronaut_params_v2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v2.webp';
import midjourney_astronaut_params_v3 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v3.webp';



# Basic Usage

The basic prompt anatomy with Midjourney is `/imagine prompt: [IMAGE PROMPT] [--OPTIONAL PARAMETERS]`. 

For example: `/imagine prompt: astronaut on a horse`


<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "350px"}}/>
</div>


Example with parameters: `/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000 `

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params} style={{width: "350px"}} />
</div>

In this basic example the following parameters have been used:


`--ar 3:2` sets the aspect ratio of the image to 3:2

`--c 70` adds a chaos value of 70 to allow Midjourney to interpret the prompt more freely(chaos value range: 0 - 100)

`--seed 100` sets an arbitrary seed value which can be used to re-render or re-work an image later


(learn more about Midjourney parameters in "Advanced Prompts" > "Parameters")


# Advanced Prompts
Advanced prompts in Midjourney make use of parameters and special prompting techniques supported by the Midjourney algorithm.

## Multi Prompts
Midjourney interprets your prompt holistically by default. Using a double colon `::` tells Midjourney to interpret each part of a prompt separately.

Example:

```text
/imagine prompt: astronaut and horse
```
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_multi1} style={{width: "350px"}} />
</div>

```text
/imagine prompt: astronaut:: and horse
```
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_multi2} style={{width: "350px"}} />
</div>


## Image Prompts
By uploading an image to Discord and using its URL in a prompt, you can instruct Midjourney to use that image to influence the content, style and composition of your results. 
Example:
[Astronaut (Source: Wikipedia)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).webp)

```text
/imagine prompt: [image URL], impressionist painting
```
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_ip2} style={{width: "350px"}} />
</div>

## Parameters (v4)

The following parameters are supported by Midjourney's latest model (v4).

### Aspect Ratio:

`--ar [ratio]` changes the default ratio (1:1) to a new ratio (currently the max. supported ratio is 2:1)

Example: `astronaut on a horse --ar 16:9` and `astronaut on a horse --ar 1:2`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_a169} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_a12} style={{width: "175px"}} />
</div>


### Chaos:

`--c [value]` sets a chaos value that determines how much Midjourney varies the prompt; the higher the chaos value the more unusual and unexpected the results and compositions (range: 0 - 100)

Example: `astronaut on a horse --c20` and `astronaut on a horse --c 80`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_c20} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_c80} style={{width: "350px"}} />
</div>


### Quality:

`--q [value]` defines how much time will be spend generating the image, thus increasing the quality. The default setting is "1". Higher values use more of your subscription's GPU minutes (accepts values ".25", ".5" , "1" and "2")

Example: `astronaut on a horse --q .5` and `astronaut on a horse --q 2`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_q05} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_q2} style={{width: "350px"}} />
</div>


### Seed:

`--seed [value]` sets a seed number which defines the starting point (noise field) for the image generation. The seeds for each image are generated randomly when not specified with the seed parameter. Using the same seed number and prompt will produce similar images.

Example: `astronaut on a horse --seed 123`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
</div>


### Stylize:

`--stylize [value]` or `--s [value]` influences how strongly Midjourney applies its artistic algorithm.  Low values produce images that closely match the prompt, high values create very artistic images that are less connected to the prompt. The default is 100, value range is 0 - 1000.
(Note: you can use the `/settings`command to change the default stylize value from "🖌️ Style Med" (=`--s 100`) to "🖌️ Style Low" (=`--s 50`), "🖌️ Style High"(=`--s 250`) or "🖌️ Style Very High" (=`--s 750`))

Example: `astronaut on a horse --s 50` and `astronaut on a horse --s 900`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_s50} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_s900} style={{width: "350px"}} />
</div>


### Version:
`--v [version number]`or `--version [version number]` let you access earlier Midjourney models (1-3)

Example: `--v 1`, `--v 2`, and `--v 3`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_v1} style={{width: "220px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_v2} style={{width: "220px"}} />
   &nbsp;
      <LazyLoadImage src={midjourney_astronaut_params_v3} style={{width: "220px"}} />
</div>


## Parameters (previous models)

### Same Seed

`--sameseed`: while the `--seed` parameter produces a single noise field applied across all images in the initial grid, the sameseed parameter applies the same starting noise to all images in the initial grid so it will produce very similar images.

Example: `astronaut on a horse --sameseed --v 3`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_sameseed} style={{width: "350px"}} />
</div>


### Tile

`--tile` generates images that can be used as repeating tiles to create seamless patterns for fabrics, wallpapers and textures (only works with models 1 - 3)

Example: `astronaut on a horse --tile --v 3`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_tilegrid} style={{width: "220px"}} />
  &nbsp;
  <LazyLoadImage src={midjourney_astronaut_params_tile} style={{width: "220px"}} />
  &nbsp;
  <LazyLoadImage src={midjourney_astronaut_params_tilecomplete} style={{width: "220px"}} />
</div>


### Video

`--video` creates a short movie of the image grid being generated. Reacting with the ✉️ emoji lets the Midjourney Bot send you a DM with the link to the video.

Example: `astronaut on a horse --video --v 3`

<div style={{textAlign: 'center'}}>
 <video width="320" height="240" autoplay muted>
  <source src="https://i.mj.run/27c89699-d96d-4834-b6fa-b022a453eb28/video.mp4" type="video/mp4">
</source>
</video>
</div>



## Links

[Official Midjourney Documentation](https://docs.midjourney.com/)