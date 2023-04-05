---
sidebar_position: 4
---

# 🟢 Few shot prompting

import FewShot from '../assets/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>


Yet another prompting strategy is *few shot prompting*, which is basically just showing the model a few examples (called shots) of what you want it to do. 

Consider the above example, in which we are attempting to classify customer feedback as positive or negative. We show the model 3 examples of positive/negative feedback, then we show it a new piece of feedback that has not been classified yet (`It doesnt work!:`). The model sees that the first 3 examples were classified as either `positive` or `negative`, and uses this information to classify the new example as `negative`.

The way that we structure the examples is very important. Since we have structured these 3 examples as `input: classification`, the model outputs a single word after the final line, instead of saying a full sentence like `this review is positive`. 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Great product, 10/10: positive\nDidn't work very well: negative\nSuper helpful, worth it: positive\nIt doesnt work!:" initial-response="negative" max-tokens="256" box-rows="5" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

:::note
Each input-output pair is called an *exemplar*.
:::

## More on structure

A key use case for few shot prompting is when you need the output to be **structured in a specific way** that is difficult to describe to the model. To understand this, let's consider a relevant example: say you need to compile names and occupations of well known citizens in towns nearby by analyzing local newspaper articles. You would like the model to read each article and output a list of names and occupations in `Last, First [OCCUPATION]` format. In order to get the model to do this, you can show it a few examples:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="In the bustling town of Emerald Hills, a diverse group of individuals made their mark. Sarah Martinez, a dedicated nurse, was known for her compassionate care at the local hospital. David Thompson, an innovative software engineer, worked tirelessly on groundbreaking projects that would revolutionize the tech industry. Meanwhile, Emily Nakamura, a talented artist and muralist, painted vibrant and thought-provoking pieces that adorned the walls of buildings and galleries alike. Lastly, Michael O'Connell, an ambitious entrepreneur, opened a unique, eco-friendly cafe that quickly became the town's favorite meeting spot. Each of these individuals contributed to the rich tapestry of the Emerald Hills community.\n1. Sarah Martinez [NURSE]\n2. David Thompson [SOFTWARE ENGINEER]\n3. Emily Nakamura [ARTIST]\n4. Michael O'Connell [ENTREPRENEUR]\n\nAt the heart of the town, Chef Oliver Hamilton has transformed the culinary scene with his farm-to-table restaurant, Green Plate. Oliver's dedication to sourcing local, organic ingredients has earned the establishment rave reviews from food critics and locals alike.\n\nJust down the street, you'll find the Riverside Grove Library, where head librarian Elizabeth Chen has worked diligently to create a welcoming and inclusive space for all. Her efforts to expand the library's offerings and establish reading programs for children have had a significant impact on the town's literacy rates.\n\nAs you stroll through the charming town square, you'll be captivated by the beautiful murals adorning the walls. These masterpieces are the work of renowned artist, Isabella Torres, whose talent for capturing the essence of Riverside Grove has brought the town to life.\n\nRiverside Grove's athletic achievements are also worth noting, thanks to former Olympic swimmer-turned-coach, Marcus Jenkins. Marcus has used his experience and passion to train the town's youth, leading the Riverside Grove Swim Team to several regional championships.\n1. Oliver Hamilton [CHEF]\n2. Elizabeth Chen [LIBRARIAN]\n3. Isabella Torres [ARTIST]\n4. Marcus Jenkins [COACH]\n\nOak Valley, a charming small town, is home to a remarkable trio of individuals whose skills and dedication have left a lasting impact on the community.\n\nAt the town's bustling farmer's market, you'll find Laura Simmons, a passionate organic farmer known for her delicious and sustainably grown produce. Her dedication to promoting healthy eating has inspired the town to embrace a more eco-conscious lifestyle.\n\nIn Oak Valley's community center, Kevin Alvarez, a skilled dance instructor, has brought the joy of movement to people of all ages. His inclusive dance classes have fostered a sense of unity and self-expression among residents, enriching the local arts scene.\n\nLastly, Rachel O'Connor, a tireless volunteer, dedicates her time to various charitable initiatives. Her commitment to improving the lives of others has been instrumental in creating a strong sense of community within Oak Valley.\n\nThrough their unique talents and unwavering dedication, Laura, Kevin, and Rachel have woven themselves into the fabric of Oak Valley, helping to create a vibrant and thriving small town." initial-response="1. Laura Simmons [FARMER]\n2. Kevin Alvarez [DANCE INSTRUCTOR]\n3. Rachel O'Connor [VOLUNTEER]" max-tokens="616" box-rows="20" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

By showing the model examples of the correct output format, it is able to produce the correct output for new articles.

:::note
Even though you could produce this same output by using an instruction prompt instead, the few shot prompt helps the output be much more *consistent*. 
:::

## Variants of shot prompting

The word "shot" is synonymous with "example". Aside from few-shot prompting, there are two other types of shot prompting that exist. Do not overthink this! The only difference between these variants is how many examples you show the model.

Variants:
- 0 shot prompting: no examples are shown to the model
- 1 shot prompting: 1 example is shown to the model
- few shot prompting: 2+ examples are shown to the model

### 0-shot prompting

0-shot prompting is the most basic form of prompting. It is simply showing the model a prompt without examples and asking it to generate a response. As such, all of instruction and role prompts that you have seen so far are 0-shot prompts. An additional example of a 0-shot prompt is:

```text
Add 2+2:
```

It is 0-shot since we have not shown the model any complete examples.

### 1-shot prompting

1-shot prompting is when you show the model a single example. For example, the 1-shot analogue of the 0-shot prompt `Add 2+2:` is:
  
```text
Add 3+3: 6
Add 2+2:
```

We have shown the model only 1 complete example (`Add 3+3: 6`), so this is a 1-shot prompt.

### Few-shot prompting

Few-shot prompting is when you show the model 2 or more examples. All prompts above this variants section have been few-shot prompts. The few-shot analogue of the above two prompts is:

```text
Add 3+3: 6
Add 5+5: 10
Add 2+2:
```

This is the case since we have shown the model at least 2 complete examples (`Add 3+3: 6` and `Add 5+5: 10`). Usually, the more examples you show the model, the better the output will be, so few-shot prompting is preferred over 0-shot and 1-shot prompting in most cases.

## Conclusion

Few-shot prompting is a powerful technique for getting the model to produce accurate and properly formatted output!

 