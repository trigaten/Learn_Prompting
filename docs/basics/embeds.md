---
sidebar_position: 40
---

# 🟢 Learn Prompting Embeds

:::takeaways
- Set up the Learn Prompting Embed
- Run ChatGPT prompts in the course website
:::

The ChatGPT website is useful, but wouldn't it be nice if you could write and test prompts right on this website? With [Learn Prompting Embeds](https://embed.learnprompting.org/), you can! Read on to see how to set this up. We will include these interactive embeds in the most articles.

## Get Set Up

Watch the video tutorial here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/sNUKiwd2DWU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

Here is an **image** of what an embed looks like:

import lp_embed from '@site/docs/assets/basics/lp_embed.webp';
import key from '@site/docs/assets/basics/API_key.webp';


<img src={lp_embed} class="img-docs" style={{width: "100%"}}/>


You should be able to see an embed that looks just like the image right below this paragraph. If it is not visible, you may need to enable JavaScript or use a different browser. If you still cannot see it, join the [Discord](https://discord.com/invite/learn-prompting) and tell us about your problem.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6ImdwdC0zLjUtdHVyYm8ifQ%3D%3D"
    style={{width:"100%", height:"320px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


Assuming that you can see the embed, click on the **Generate** button. If this is your first time using it, you will be prompted to input an OpenAI API key. An OpenAI API key is just a string of text that the embed uses to link to your OpenAI account.

### Get an OpenAI API Key

- First, navigate to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) 
- Then, sign up for or sign into your OpenAI account. 
- Click the **Create new secret key** button. It will pop up a modal that contains a string of text like this:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={key} class="img-docs" style={{width: "80%"}} />
</div>

- Copy and paste this key into the embed on this website and click **Submit**. 

You should now be able to use the embeds throughout this site. Note that OpenAI charges you for each prompt you submit through these embeds. If you have recently created a new account, you should have 3 months of free credits. If you have run out of credits, don't worry, since using these models is very cheap. ChatGPT only costs about $0.02 for every seven thousand words you generate[^a].

### Using the Embed

Let's learn how to use the embed. Edit the "Type your prompt here" field. This embed is effectively the same as using ChatGPT, except that you cannot have a full conversation. In this course, the embeds are just used to show examples of prompt engineering techniques.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik91dHB1dCBhcHBlYXJzIGhlcmUiLCJwcm9tcHQiOiJUeXBlIHlvdXIgcHJvbXB0IGhlcmUiLCJtb2RlbCI6ImdwdC0zLjUtdHVyYm8ifQ%3D%3D"
    style={{width:"100%", height:"300px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

You can see four pieces of information under the Generate button. The left one, 'gpt-3.5-turbo' is the model (gpt-3.5-turbo is the technical name for ChatGPT). The three numbers are [LLM settings](https://learnprompting.org/docs/basics/configuration_hyperparameters), which we will learn about in a few articles. If you would like to make your own embed, click the 
edit this embed button. 

## Conclusion

These embeds will make it easier for you to learn throughout the course, since you can quickly test your prompts, without clicking into a different tab. However, you do not have to use the embeds if you prefer the ChatGPT interface. Just continue to copy and paste prompts into ChatGPT. If you do intend to use the embeds, write down your API key somewhere, since the OpenAI website only allows you to see it once.

:::caution
Never tell anyone your API key, since they could charge your account with prompts.
:::

[^a]: See full pricing information [here](https://openai.com/pricing)