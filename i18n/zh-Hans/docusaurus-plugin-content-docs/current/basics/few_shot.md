---
sidebar_position: 4
---

# 🟢 多范例提示

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>


另一个提示策略是*多范例提示（few shot prompting）*, 这种策略将为模型展示一些例子（shots），从而更形象地描述你的需求。

在上图的例子中，我们尝试对用户反馈进行正面（positive）或反面（negative）的分类。我们向模型展示了 3 个例子，然后我们输入一个不在例子里面的反馈（`It doesnt work!:`）。模型发现头三个例子都被分类到 `positive` 或者 `negative` ，进而通过这些信息将我们最后输入的反馈分类到了 `negative`。

我们如何结构化地设计例子也是非常重要的。由于我们已经将头三个例子结构化成： `input: classification`，因此模型最终也跟着同样只输出分类的结果，而不是一段完整的句子，例如 `this review is positive`。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Great product, 10/10: positive\nDidn't work very well: negative\nSuper helpful, worth it: positive\nIt doesnt work!:" initial-response="negative" max-tokens="256" box-rows="5" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

:::note
每一个输入-输出对被称为一个`范例`
:::

## 结构化的延伸

多范例提示的一个关键场景是当我们需要以`特定的结构`输出结果，但是又很难向模型进行描述的时候。为了理解这一点，让我们看这样一个例子：假设您需要通过分析当地的报纸文章来汇编附近城镇公民的姓名和职业。您希望模型读取每篇文章并以`Last, First [OCCUPATION]`格式输出姓名和职业列表。为了让模型做到这一点，您可以向它展示一些示例：

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="In the bustling town of Emerald Hills, a diverse group of individuals made their mark. Sarah Martinez, a dedicated nurse, was known for her compassionate care at the local hospital. David Thompson, an innovative software engineer, worked tirelessly on groundbreaking projects that would revolutionize the tech industry. Meanwhile, Emily Nakamura, a talented artist and muralist, painted vibrant and thought-provoking pieces that adorned the walls of buildings and galleries alike. Lastly, Michael O'Connell, an ambitious entrepreneur, opened a unique, eco-friendly cafe that quickly became the town's favorite meeting spot. Each of these individuals contributed to the rich tapestry of the Emerald Hills community.\n1. Sarah Martinez [NURSE]\n2. David Thompson [SOFTWARE ENGINEER]\n3. Emily Nakamura [ARTIST]\n4. Michael O'Connell [ENTREPRENEUR]\n\nAt the heart of the town, Chef Oliver Hamilton has transformed the culinary scene with his farm-to-table restaurant, Green Plate. Oliver's dedication to sourcing local, organic ingredients has earned the establishment rave reviews from food critics and locals alike.\n\nJust down the street, you'll find the Riverside Grove Library, where head librarian Elizabeth Chen has worked diligently to create a welcoming and inclusive space for all. Her efforts to expand the library's offerings and establish reading programs for children have had a significant impact on the town's literacy rates.\n\nAs you stroll through the charming town square, you'll be captivated by the beautiful murals adorning the walls. These masterpieces are the work of renowned artist, Isabella Torres, whose talent for capturing the essence of Riverside Grove has brought the town to life.\n\nRiverside Grove's athletic achievements are also worth noting, thanks to former Olympic swimmer-turned-coach, Marcus Jenkins. Marcus has used his experience and passion to train the town's youth, leading the Riverside Grove Swim Team to several regional championships.\n1. Oliver Hamilton [CHEF]\n2. Elizabeth Chen [LIBRARIAN]\n3. Isabella Torres [ARTIST]\n4. Marcus Jenkins [COACH]\n\nOak Valley, a charming small town, is home to a remarkable trio of individuals whose skills and dedication have left a lasting impact on the community.\n\nAt the town's bustling farmer's market, you'll find Laura Simmons, a passionate organic farmer known for her delicious and sustainably grown produce. Her dedication to promoting healthy eating has inspired the town to embrace a more eco-conscious lifestyle.\n\nIn Oak Valley's community center, Kevin Alvarez, a skilled dance instructor, has brought the joy of movement to people of all ages. His inclusive dance classes have fostered a sense of unity and self-expression among residents, enriching the local arts scene.\n\nLastly, Rachel O'Connor, a tireless volunteer, dedicates her time to various charitable initiatives. Her commitment to improving the lives of others has been instrumental in creating a strong sense of community within Oak Valley.\n\nThrough their unique talents and unwavering dedication, Laura, Kevin, and Rachel have woven themselves into the fabric of Oak Valley, helping to create a vibrant and thriving small town." initial-response="1. Laura Simmons [FARMER]\n2. Kevin Alvarez [DANCE INSTRUCTOR]\n3. Rachel O'Connor [VOLUNTEER]" max-tokens="616" box-rows="20" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

通过向模型展示正确的输出格式示例，它就能够为新的文章生成正确的输出结果。

:::note
尽管我们可以通过使用指令提示符的方式来生成相同的输出，但多范例提示在输出结果的一致性上会更好。
:::

## 不同类型的范例提示

单词 `shot` 在该场景下与 `example（范例）` 一致。除了多范例提示（few-shot prompting）之外，还有另外两种不同的类型。它们之间唯一的区别就是你向模型展示了多少范例。

类型:
- 无范例提示（0 shot prompting）: 不展示范例
- 单范例提示（1 shot prompting）: 只展示 1 条范例
- 多范例提示（few shot prompting）: 展示 2 条及以上的范例

### 无范例提示
无范例提示是最基本的提示形式。它仅仅是向模型展示提示信息，没有提供任何示例，并要求其生成回答。因此，你到目前为止看到的所有指令和角色提示都属于无范例提示。无范例提示的另一个例子是：

```text
Add 2+2:
```

这是无范例提示，因为我们没有向模型展示任何完整的示例。

### 单范例提示

单范例提示是向模型展示一个示例。例如：
  
```text
Add 3+3: 6
Add 2+2:
```

我们仅向模型展示了一个完整的示例（“Add 3+3: 6”），因此这是一个单范例提示。

### 多范例提示

多范例提示是向模型展示2个或更多示例。例如:

```text
Add 3+3: 6
Add 5+5: 10
Add 2+2:
```

这是我们向模型展示了至少2个完整的示例（“Add 3+3: 6”和“Add 5+5: 10”）。通常，展示给模型的示例越多，输出结果就越好，因此在大多数情况下，多范例提示比另外两种提示更受欢迎。

## 结论

多范例提示是让模型生成准确且格式正确的输出的强大技术！
 
By [gezilinll](https://github.com/gezilinll).