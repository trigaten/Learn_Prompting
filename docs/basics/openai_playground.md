---
sidebar_position: 97
---

# 🟢 OpenAI Playground

import Playground from '@site/docs/assets/basics/openai_playground.webp';

<div style={{textAlign: 'center'}}>
    <img src={Playground} className="img-docs" style={{width: "80%"}}/>
</div>

:::takeaways
- Set up the OpenAI Playground
- Learn about basic Playground configuration
:::



OpenAI provides another interface, besides the ChatGPT website, for prompting. It is called OpenAI Playground, and gives you even more control over ChatGPT. It also allows you to access other AIs, including different versions of ChatGPT, GPT-4, and older models like GPT-3.

:::note
OpenAI Playground is the tool that the maintainer of this course uses most frequently.
:::

## Get Set Up

- Go to [http://platform.openai.com](http://platform.openai.com)
- Sign in, and start testing prompts!

Or watch this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/6OD14rpokRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## The Interface

At first, this interface seems very complex. There are many drop downs and sliders that allow you to configure models. We will cover System Prompts, Mode, and Model selection in this video. We will cover the rest in the next lesson.

### System Prompts

The first thing that you may notice is the SYSTEM area on the left side of the page. So far, we have seen two types of messages, USER messages, which are just the messages you send to the chatbot, and ASSISTANT messages, which are the chatbot's replies. There is a third type of message, the system prompt, that can be used to configure how the AI responds. This is the best place to put a priming prompt.

### Mode

import Mode from '@site/docs/assets/basics/openai_mode.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
    Click the Mode dropdown on the top right of the page. This dropdown allows you to change the type of model that you are using. OpenAI has three different Modes: <code>Chat</code>, <code>Complete</code>, and <code>Edit</code>. We have already learned about the first two; <code>Edit</code> models modify the prompt you give them to, for example, fix typos. We will only use <code>Chat</code> and occasionally <code>Complete</code> models in this course.
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Mode} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

### Model

import Model from '@site/docs/assets/basics/openai_model.webp';

<div className="flex flex-col sm:flex-row justify-between">
  <div>
    Click the Model dropdown on the right of the page. This dropdown allows you to change the model that you are using. Each mode has multiple models, but we will focus on the chat ones. This list appears to be very complicated (*what does gpt-3.5-turbo mean?*), but these are just technical names for different models. Anything that starts with gpt-3.5-turbo is a version of ChatGPT, while anything that starts with gpt-4 is a version of GPT-4.

  </div>
  <div className="mt-4 sm:mt-0 sm:ml-auto">
    <img src={Model} className="img-docs w-20 sm:w-auto" />
  </div>
</div>

:::note
You may not see GPT-4 versions in your interface.
:::

The numbers like 16K or 32K in the model names represent the context length. If it's not specified, the default context length is 4K. OpenAI regularly updates both ChatGPT (gpt-3.5-turbo) and GPT-4, and older versions are kept available on the platform for a limited period. These older models have additional numbers at the end of their name, such as "0613". For instance, the model "gpt-3.5-turbo-16k-0613" is a ChatGPT model with a 16K context length, released on June 13th, 2023. However, it's recommended to use the most recent versions of models, which don't contain any date information. A comprehensive list of model versions can be found [here](https://platform.openai.com/docs/models/gpt-4).

## Conclusion

The OpenAI Playground is a powerful tool that provides a more advanced interface for interacting with ChatGPT and other AI models. It offers a range of configuration options, including the ability to select different models and modes. We will learn about the rest of the settings in the next lesson. The Playground also supports system prompts, which can be used to guide the AI's responses. While the interface may seem complex at first, with practice, it becomes a valuable resource for exploring the capabilities of OpenAI's models. Whether you're using the latest versions of ChatGPT or GPT-4, or exploring older models, the Playground offers a flexible and robust platform for AI interaction and experimentation.