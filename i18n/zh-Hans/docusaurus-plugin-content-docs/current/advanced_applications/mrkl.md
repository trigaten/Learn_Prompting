---
sidebar_position: 2
---

# 🟡 LLMs使用工具

MRKL系统(@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, pronounced "miracle") 是一种**神经符号结构**，结合了LLMs（神经计算）和像计算器（符号计算）这样的外部工具，用于解决复杂问题。

MRKL系统由一组模块（例如计算器、天气API、数据库等）和一个路由器组成，决定如何将自然语言查询“路由”到适当的模块。

一个简单的MRKL系统示例是一个可以使用计算器应用程序的LLM。 这是一个单模块系统，其中LLM是路由器。 当被问到`100*100是多少？ `时，LLM可以选择从提示中提取数字，然后告诉MRKL系统使用计算器应用程序计算结果。 这可能如下所示：

<pre>
<p>100*100是多少？</p>

<span className="bluegreen-highlight">CALCULATOR [100*100]</span>
</pre>

MRKL系统将看到单词`CALCULATOR`，并将`100*100`插入计算器应用程序中。 这个简单的想法可以很容易地扩展到各种符号计算工具。

考虑以下其他应用示例：

- 一个聊天机器人，能够从用户的文本中提取信息，形成SQL查询，回答有关金融数据库的问题。

<pre>
<p>苹果公司股票现在的价格是多少？</p>

<span className="bluegreen-highlight">当前价格为DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"]。</span>
</pre>

- 一个聊天机器人，能够从提示中提取信息，使用天气API检索信息回答有关天气的问题。

<pre>
<p>纽约的天气怎么样？</p>

<span className="bluegreen-highlight">天气是WEATHER_API[New York]。</span>
</pre>

- 或者更复杂的依赖多个数据源的任务，例如下面这个例子：


import mrkl_task from '@site/docs/assets/advanced/mrkl_task.webp';
import dataset from '@site/docs/assets/advanced/mrkl/dataset.webp';
import load_dataset from '@site/docs/assets/advanced/mrkl/load_dataset.webp';
import model from '@site/docs/assets/advanced/mrkl/model.webp';
import extract from '@site/docs/assets/advanced/mrkl/extract.webp';
import search from '@site/docs/assets/advanced/mrkl/search.webp';
import final from '@site/docs/assets/advanced/mrkl/final.webp';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
示例MRKL系统(AI21)
</div>

## 示例

我使用Dust.tt复现了原始论文中的一个示例MRKL系统，链接在[这里](https://dust.tt/trigaten/a/98bdd65cb7)。 该系统可以读取数学问题（例如`20乘以5^6等于多少？ `），提取数字和运算符号，并将其格式化为计算器应用(例如 `20 * 5^6`）。 然后它将重新格式化的方程式发送给Google的计算器应用程序，并返回结果。 请注意，原始论文对路由器（LLM）进行了提示调整，但是我在这个例子中没有进行提示调整。 让我们来看看这是如何工作的：

首先，我在Dust的`数据集`选项卡中制作了一个简单的数据集。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={dataset} style={{width: "750px"}} />
</div>

然后，我切换到`Specification`选项卡，并使用`data`块加载了数据集。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={load_dataset} style={{width: "750px"}} />
</div>

接下来，我创建了一个`llm`块，用于提取数字和运算符号。 请注意，在提示中，我告诉它我们将使用Google的计算器。 我使用的模型（GPT-3）可能已经预先训练了一些关于Google计算器的知识。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={model} style={{width: "750px"}} />
</div>

然后，我创建了一个`code`块，其中运行一些简单的JavaScript代码来删除补全结果(completion)中的空格。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={extract} style={{width: "750px"}} />
</div>

最后，我创建了一个`search`块，将重新格式化的方程式发送给Google的计算器。

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={search} style={{width: "750px"}} />
</div>

下面我们可以看到最终的结果，全部都是正确的！

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={final} style={{width: "750px"}} />
</div>

请随意尝试并进行实验，这是演练场(playground)的[链接](https://dust.tt/trigaten/a/98bdd65cb7).

## 备注
MRKL由[AI21](https://www.ai21.com/)开发，最初使用了他们的J-1 (Jurassic 1)(@lieberjurassic) LLM。

## 更多内容

请参见 [此示例](https://langchain.readthedocs.io/en/latest/modules/agents/implementations/mrkl.html) MRKL系统，该系统是使用LangChain构建的。
