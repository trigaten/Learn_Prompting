---
sidebar_position: 7
---

# 🟡 最少到最多提示过程

最少到最多提示过程 (Least to Most prompting, LtM)(@zhou2022leasttomost) 将 %%思维链提示过程 (CoT prompting)|CoT prompting%% 进一步发展，首先将问题分解为子问题，然后逐个解决。它是受到针对儿童的现实教育策略的启发而发展出的一种技术。

与思维链提示过程类似，需要解决的问题被分解成一组建立在彼此之上的子问题。在第二步中，这些子问题被逐个解决。与思维链不同的是，先前子问题的解决方案被输入到提示中，以尝试解决下一个问题。

import leastToMost from '@site/docs/assets/intermediate/least_to_most_formal.webp'

<div style={{textAlign: 'center'}}>
  <img src={leastToMost} style={{width: "600px"}} alt="LtM 的图示"/>
</div>

<div style={{textAlign: 'center'}}>
   LtM 的图示
</div>

## 示例：回复客户咨询

让我们问一个稍微复杂的客服问题：

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>这个回答是错误的（目前还在退货时间内），那我们来将问题分解为子问题试试：

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="客户咨询:\n我在3月1日购买了你们 Arnold 系列的一件T恤。我看到它有折扣，所以买了一件原价为 30 美元的衬衫，打了 6 折。我发现你们现在有一个新的T恤折扣活动，50% off。我想知道我是否可以退货，同时拥有足够的店内积分来购买两件你们的T恤？\n\n指令:\n你是一名客户服务代表，负责友好地回复客户的查询。退货在 30 天内允许。今天是 3 月 29 日。目前所有衬衫都有 50% 的折扣。你的店里衬衫价格在 18-100 美元之间。请勿编造任何关于折扣政策的信息。\n在回答这个问题之前，必须解决哪些子问题？" initial-response="1.客户购买衬衫的日期；\n2.当前的折扣活动；\n3.店内衬衫的价格范围；\n4.客户是否有足够的店内积分；\n5.客户退货的政策。" max-tokens="256" box-rows="12" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>让我们试着解决第一个子问题：

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="客户咨询:\n我在3月1日购买了你们 Arnold 系列的一件T恤。我看到它有折扣，所以买了一件原价为 30 美元的衬衫，打了 6 折。我发现你们现在有一个新的T恤折扣活动，50% off。我想知道我是否可以退货，同时拥有足够的店内积分来购买两件你们的T恤？\n\n指令:\n你是一名客户服务代表，负责友好地回复客户的查询。退货在 30 天内允许。今天是 3 月 29 日。目前所有衬衫都有 50% 的折扣。你的店里衬衫价格在 18-100 美元之间。请勿编造任何关于折扣政策的信息。\n确定客户是否在30天的退货期内。让我们一步一步来。" initial-response="尊敬的客户，非常感谢您对 Arnold 系列的支持！我们很高兴地向您提供服务。我们的退货政策是，客户可以在购买商品的 30 天内进行退货。由于您是在 3 月 1 日购买的，所以您仍然在退货期内，可以退货。\n\n此外，我们目前正在举行一个 50% 的折扣活动，您可以使用您的店内积分购买两件 Arnold 系列的 T 恤。我们的衬衫价格在 18-100 美元之间，您可以根据自己的需求选择合适的衬衫。\n\n如果您有任何其他问题，请随时与我们联系。我们将竭诚为您服务！" max-tokens="512" box-rows="19" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

仅仅通过解决第一个子问题，我们就能解决整个问题。如果 GPT-3 没有立即给出答案，我们可以解决下一个子问题，直到它返回答案。值得注意的是，我们使用 `让我们一步一步来` 的提示短语。这个提示不是必须的，但对于这个例子来说效果很好。


## 示例：字符连接

LtM 最初是使用 few-shot 提示的方式引入的，而不是显式指令将问题分解为多个步骤（如上所示）。除此之外，有时也可以使用单一提示而不是提示链来实现它。让我们来看看字符连接的尾字问题(@wei2022chain)，例如给定输入词语 `思考、机器`，则输出应为 `考器`。

### 第一次尝试：标准提示

即使使用更先进的模型（如 text-davinci-003），标准提示与 few-shot 示例的表现也非常糟糕。

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: 思考、机器\nA: 考器\n\nQ: 学习、推理、归纳\nA: 习理纳\n\nQ: 人工、智能\nA: 工能\n\nQ: 转化器、语言、视觉\nA: 器言觉\n\nQ: 张三、李四、手机、钱包\nA:"
     initial-response="三四手钱"
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### 第二次尝试：思维链

思维链的表现比标准提示好得多。这是因为它现在允许模型考虑自己提取每个单词的最后一个字母，将复杂性降低到分组已经收集的字母的行为。然而，这种方法在更长的输入下也可能慢慢出现问题。

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: 思考、机器\nA: '思考'的尾字是'考'，'机器'的尾字是'器'，所以答案是'考器'\n\nQ: 学习、推理、归纳\nA: '学习'的尾字是'习'，'推理'的尾字是'理'，'归纳'的尾字是'纳'，所以答案是'习理纳'\n\nQ: 转化器、语言、视觉\nA: '转化器'的尾字是'器'，'语言'的尾字是'言'，'视觉'的尾字是'觉'，所以答案是'器言觉'\n\nQ: 张三、李四、手机、钱包\nA: "
     initial-response="'张三'的尾字是'三'，'李四'的尾字是'四'，'手机'的尾字是'机'，'钱包'的尾字是'包'，所以答案是'三四机包'"
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### 第三次尝试：LtM（单一提示）

使用 LtM，我们通过重新表述先前串联的结果来增强思维链的概念。这种做法使得每个步骤变的简单，即每次只需要连接一个字符。这种方法带来了非常好的效果，12 个乃至更多的词都能得到正确结果。

这种方法看起来与思维链非常相似，但在概念上大有不同。在这里，每一步都引入了上一步连接的结果。例如，在“思考、机器、学习”的这个例子种，它不会单独连接字符“考”，“器”，“习”，而是连接“考”和“器”，然后连接“考器”和“习”。由于重新引入了上一步的结果，模型现在可以推广到更长的链，因为它每一步都带着增量结果，同时单步骤内只需要做很少的工作。

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: 思考|机器\nA: '思考'的最后一个字母是'考'，'机器'的最后一个字母是'器'。将'考'和'器'串联起来就得到'考器'。所以'思考|机器'的输出结果是'考器'。\n\nQ: 思考|机器|学习\nA: '思考|机器'输出结果是'考器'，'学习'的最后一个字母是'习'。将'考器'和'习'串联起来就得到'考器习'。所以'思考|机器|学习'的输出结果是'考器习'。\n\nQ: 转化器|语言\nA: '转化器'的最后一个字母是'器'，'语言'的最后一个字母是'言'。将'器'和'言'串联起来就得到'器言'。所以'转化器|语言'的输出结果是'器言'。\n\nQ: 转化器|语言|视觉\nA: '转化器|语言'的输出结果是'器言'，'视觉'的最后一个字母是'觉'。将'器言'和'觉'串联起来就得到'器言觉'。所以'转化器|语言|视觉'的输出结果是'器言觉'。\n\nQ: 张三|李四|手机|钱包|钥匙|房子|汽车|电脑|书|电视|可乐|雪碧|橘猫\nA: "
     initial-response="'张三|李四'的输出结果是'三四'，'手机|钱包'的输出结果是'机包'，'钥匙|房子'的输出结果是'匙子'，'汽车|电脑'的输出结果是'车脑'，'书|电视'的输出结果是'书视'，'可乐|雪碧'的输出结果是'乐碧'，'橘猫'的输出结果是'猫'。将这些输出结果串联起来就得到'三四机包匙子车脑书视乐碧猫'。所以'张三|李四|手机|钱包|钥匙|房子|汽车|电脑|书|电视|可乐|雪碧|橘猫'的输出结果是'三四机包匙子车脑书视乐碧猫'。"
     max-tokens="1024" box-rows="18"
     model-temp="0.2" ></div>
（译注：该例子使用了 '|' 而非 '，'，是因为中文的逗号经常不被识别为分隔符）。
     

### 结论

在具有 12 个词的字符问题上，思维链的准确率为 34％，而 LtM 的准确率为 74％（该论文使用 text-davinci-002 作为模型）（译注：上面的示例因为翻译成了中文，所以准确率与原文中的值应该不同）。


## 示例：组合泛化问题(compositional generalization) (SCAN)

SCAN 基准测试(@lake2018scan)要求模型将自然语言转换为动作序列。例如，句子 “run left and walk twice” 将被翻译为 “TURN_LEFT + RUN + WALK * 2”。当面对训练集中长度更长的序列时，语言模型的表现尤其差。

### 第一次尝试：标准提示

使用简单的标准提示，text-davinci-003 的表现非常出色，但仍然失败了。

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: TURN LEFT\n\nQ: turn right\nA: TURN RIGHT\n\nQ: jump left\nA: TURN LEFT &#43; JUMP\n\nQ: run right\nA: TURN RIGHT &#43; RUN\n\nQ: look twice\nA: LOOK * 2\n\nQ: run and look twice\nA: RUN &#43; LOOK * 2\n\nQ: jump right thrice\nA: (TURN RIGHT &#43; JUMP) * 3\n\nQ: walk after run\nA: RUN &#43; WALK\n\nQ: turn opposite left\nA: TURN LEFT * 2\n\nQ: turn around left\nA: TURN LEFT * 4\n\nQ: turn opposite right\nA: TURN RIGHT * 2\n\nQ: turn around right\nA: TURN RIGHT * 4\n\nQ: walk opposite left\nA: TURN LEFT * 2 &#43; WALK\n\nQ: walk around left\nA: (TURN LEFT &#43; WALK) * 4\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="(TURN LEFT * 2 + WALK) * 3 + (TURN LEFT + JUMP) * 2"
     max-tokens="512" box-rows="18"
     model-temp="0.2" ></div>

（译注：该示例如果翻译成中文，无法复现效果，因此保持原文）

### 第二次尝试：LtM，第一步 - 缩减

在这里，我们使用两个不同的提示。第一个提示用于将输入问题缩减为一个步骤序列。第二个提示用于将这个缩减后的步骤序列映射到实际的操作中。

这两个提示都相当长，因而使用压缩的 Python 符号表示操作，以节省标记（tokens）。

第一步将自然语言描述分解为更明确但仍类似人类的语言。这将有助于映射步骤按顺序解决问题。
例如，“jump around left twice” 被简化为 “jump left” -> TURN_LEFT + JUMP 和 “jump around left” -> (TURN_LEFT + JUMP) * 4。同样，减少步骤是用来解释重复概念（twice、thrice 等）的。

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: look right after look twice\nA: &#34;look right after look twice&#34; can be solved by: &#34;look right&#34;, &#34;look twice&#34;.\n\nQ: jump opposite right thrice and walk\nA: &#34;jump opposite right thrice&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;. &#34;walk&#34; can be solved by: &#34;walk&#34;. So, &#34;jump opposite right thrice and walk&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: run left twice and run right\nA: &#34;run left twice&#34; can be solved by: &#34;run left&#34;, &#34;run left twice&#34;. &#34;run right&#34; can be solved by &#34;run right&#34;. So, &#34;run left twice and run right&#34; can.be solved by: &#34;run left&#34;, &#34;run left twice&#34;, &#34;run right&#34;.\n\nQ: run opposite right\nA: &#34;run opposite right&#34; can be solved by &#34;run opposite right&#34;.\n\nQ: look opposite right thrice after walk\nA: &#34;look opposite right thrice&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look opposite right thrice after walk&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: jump around right\nA: &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;. So, &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;.\n\nQ: look around right thrice and walk\nA: &#34;look around right thrice&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look around right thrice and walk&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;, &#34;walk&#34;.\n\nQ: turn right after run right thrice\nA: &#34;turn right&#34; can be solved by: &#34;turn right&#34;. &#34;run right thrice&#34; can be solved by: &#34;run right&#34;, &#34;run right thrice&#34;. So, &#34;turn right after run right thrice&#34; can be solved by: &#34;turn right&#34;, &#34;run right&#34;, &#34;run right thrice&#34;.\n\nQ: jump around left twice after walk opposite left thrice\nA:"
     initial-response="&#34;jump around left twice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; can be solved by: &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;. So, &#34;jump around left twice after walk opposite left thrice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;, &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### 第二次尝试：LtM，第二步 - 映射

在第二步中，我们使用缩减过的结果，并再次使用相当长的提示（14个案例）将简化的自然语言描述转换为一系列操作。

在这里，我们注入第一步的输出：

> "jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".

到 LLM 中。

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: &#34;turn left&#34; outputs &#34;TURN LEFT&#34;.\n\nQ: turn right\nA: &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;.\n\nQ: jump left\nA: The output of &#34;jump left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;jump&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. &#34;jump&#34; outputs &#34;JUMP&#34;. So concatenating the output of &#34;turn left&#34; and the out- put of &#34;jump&#34; leads to &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;. So the output of &#34;jump left&#34; is &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;.\n\nQ: run right\nA: The output of &#34;run right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;run&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. &#34;run&#34; outputs &#34;RUN&#34;. So concatenating the output of &#34;turn right&#34; and the output of &#34;run&#34; leads to &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;. So the output of &#34;run right&#34; is &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;.\n\nQ: look twice\nA: The output of &#34;look twice&#34; concatenates: the output of &#34;look&#34;, the output of &#34;look&#34;. &#34;look&#34; outputs &#34;LOOK&#34;. So repeating the output of &#34;look&#34; two times leads to &#34;LOOK&#34; * 2. So the output of &#34;look twice&#34; is &#34;LOOK&#34; * 2.\n\nQ: run and look twice\nA: The output of &#34;run and look twice&#34; concatenates: the output of &#34;run&#34;, the output of &#34;look twice&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;look twice&#34; outputs &#34;LOOK&#34; * 2. So concatenating the output of &#34;run&#34; and the output of &#34;look twice&#34; leads to &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2. So the output of &#34;run and look twice&#34; is &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2.\n\nQ: jump right thrice\nA: The output of &#34;jump right thrice&#34; concatenates: the output of &#34;jump right&#34;, the output of &#34;jump right&#34;, the output of &#34;jump right&#34;. &#34;jump right&#34; outputs &#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;. So repeating the output of &#34;jump right&#34; three times leads to (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3. So the output of &#34;jump right thrice&#34; is (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3.\n\nQ: walk after run\nA: The output of &#34;walk after run&#34; concatenates: the output of &#34;run&#34;, the output of &#34;walk&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;run&#34; and the output of &#34;walk&#34; leads to &#34;RUN&#34; &#43; &#34;WALK&#34;. So the output of &#34;walk after run&#34; is &#34;RUN&#34; &#43; &#34;WALK&#34;.\n\nQ: turn opposite left\nA: The output of &#34;turn opposite left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; twice leads to &#34;TURN LEFT&#34; * 2. So the output of &#34;turn opposite left&#34; is &#34;TURN LEFT&#34; * 2.\n\nQ: turn around left\nA: The output of &#34;turn around left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; four times leads to &#34;TURN LEFT&#34; * 4. So the output of &#34;turn around left&#34; is &#34;TURN LEFT&#34; * 4.\n\nQ: turn opposite right\nA: The output of &#34;turn opposite right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; twice leads to &#34;TURN RIGHT&#34; * 2. So the output of &#34;turn opposite right&#34; is &#34;TURN RIGHT&#34; * 2.\n\nQ: turn around right\nA: The output of &#34;turn around right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; four times leads to &#34;TURN RIGHT&#34; * 4. So the output of &#34;turn around right&#34; is &#34;TURN RIGHT&#34; * 4.\n\nQ: walk opposite left\nA: The output of &#34;walk opposite left&#34; concatenates: the output of &#34;turn opposite left&#34;, the output of &#34;walk&#34;. &#34;turn opposite left&#34; outputs &#34;TURN LEFT&#34; * 2. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;turn opposite left&#34; and the output of &#34;walk&#34; leads to &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;. So the output of &#34;walk opposite left&#34; is &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;.\n\nQ: walk around left\nA: The output of &#34;walk around left&#34; concatenates: the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;. &#34;walk left&#34; outputs &#34;TURN LEFT&#34; &#43; &#34;WALK&#34;. So repeating the output of &#34;walk around left&#34; four times leads to (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4. So the output of &#34;walk around left&#34; is (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4.\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="The output of &#34;jump around left twice after walk opposite left thrice&#34; concatenates: the output of &#34;walk opposite left thrice&#34;, the output of &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; outputs &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3. &#34;jump around left twice&#34; outputs (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So concatenating the output of &#34;walk opposite left thrice&#34; and the output of &#34;jump around left twice&#34; leads to &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So the output of &#34;jump around left twice after walk opposite left thrice&#34; is &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4."
     max-tokens="1024" box-rows="18"
     model-temp="0.2" ></div>

### 结论

LtM 带来了多项提升：
- 相对于思维链提高了准确性
- 在难度高于提示的问题上提升了泛化能力
- 在组合泛化方面的性能得到了显著提高，特别是在SCAN基准测试(@lake2018scan)中

使用 text-davinci-002（论文中使用的模型）的标准提示解决了 6% 的 SCAN 问题，而 LtM 提示则取得了惊人的 76% 的成功率。在 code-davinci-002 中，结果更为显著，LtM 达到了 99.7% 的成功率。