---
sidebar_position: 99
---
# 🟢 Midjourney

Unlike Stable Diffusion, [Midjourney](www.midjourney.com) uses Discord for AI image generation. While image prompting with the Midjourney Bot follows the same basic principles, there are a slight differences in prompt structuring as well as some midjourney-specific parameters that can be used.

import midjourney_astronaut from '../assets/midjourney_astronaut.png';
import midjourney_astronaut_params from '../assets/midjourney_astronaut_params.png';

# Basic Usage

The basic prompt anatomy with Midjourney is `/imagine prompt: [IMAGE PROMPT] [--OPTIONAL PARAMETERS]`. For example:

```text
/imagine prompt: astronaut on a horse
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "750px"}} />
</div>

The available image prompt parameters are:

```text
--ar to set Aspect Ratio
--chaos or -c to set Chaos value
--quality or -q to set Quality value
--seed to set a Seed Number
--sytlize to set a Stylize value
```

Example:

```text
/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000 
```

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params} style={{width: "750px"}} />
</div>

## Notes

Oppenlaender et al.(@oppenlaender2022taxonomy) describe the `rendered in ...` descriptor 
as a quality booster, but our working definition differs, since that modifier does consistently generate the specific Unity (or other render engine) style. As such, we will call that descriptor a style modifier.