---
sidebar_position: 5
---

# 🟢 Quality Boosters

Quality boosters(@oppenlaender2022taxonomy) are terms added to a prompt to improve certain non-style-specific qualities of the generated image. For example "amazing", "beautiful", and "good quality" are all quality boosters that can be used to improve the quality of the generated image.

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import special_pyramids from '@site/docs/assets/images_chapter/special_pyramids.webp';

# Example

Recall from the other page the pyramids generated with DALLE, and the prompt `pyramid`.

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}} />
</div>

Now take at pyramids generated with this prompt: `A beautiful, majestic, incredible pyramid, 4K`

<div style={{textAlign: 'center'}}>
  <img src={special_pyramids} style={{width: "750px"}} />
</div>

These are much more scenic and impressive!

Here is a list of a number of quality boosters:
```text
High resolution, 2K, 4K, 8K, clear, good lighting, detailed, extremely detailed, sharp focus, intricate, beautiful, realistic+++, complementary colors, high quality, hyper detailed, masterpiece, best quality, artstation, stunning
```

## Notes

Similar to the note on the previous page, our working definition of quality boosters differs from Oppenlaender et al.(@oppenlaender2022taxonomy). This being said, it is sometimes difficult to exactly distinguish between quality boosters and style modifiers.