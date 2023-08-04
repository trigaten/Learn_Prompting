---
sidebar_position: 40
---

# 🟢 Learn Prompting Embeds

:::tip
- Run ChatGPT prompts in this course
- Setup the Learn Prompting Embed
:::

The ChatGPT website is useful, but wouldn't it be nice if you could write and test prompts right on this website? With [Learn Prompting Embeds](https://embed.learnprompting.org/), you can! Read on to see how to set this up. We will include these interactactive embeds in the most articles.

## Get Set Up

Here is an **image** of what an embed looks like:

import lp_embed from '@site/docs/assets/basics/lp_embed.webp';
import key from '@site/docs/assets/basics/API_key.webp';

<div style={{textAlign: 'center'}}>
  <img src={lp_embed} style={{width: "750px"}}/>
</div>

You should be able to see an embed that looks exactly like this image right below this paragraph. If you can't, you may need to enable JavaScript or use a different browser.

<hr/>
Embed here:
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr/>

Assuming that you can see it, click on the **Generate** button. If this is your first time using it (or you are in a new browser/have cleared cookies), it will ask you to input an [OpenAI API key](https://platform.openai.com/account/api-keys). You can get a free key by clicking [this link](https://platform.openai.com/account/api-keys) and signing up for an OpenAI account. This key allows you to use OpenAI's AIs to generate text in the embeds. 

:::note
Although OpenAI provides free credits, you will eventually have to pay to use their AI. Fortunately, it is [relatively cheap](https://openai.com/pricing)!
:::

When you navigate to the [OpenAI API key](https://platform.openai.com/account/api-keys) page, click the **Create new secret key** button. It will pop up a modal that contains a string of text like this:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={key} style={{width: "750px"}} />
</div>

Put this key into the embed and hit **Save**. You should now be able to use the embeds throughout this site.

Now you have all of the information that you need to get started. Happy Learning!