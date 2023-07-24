---
sidebar_position: 3
---

# 🟢 解答讨论性问题

import Auto from '@site/docs/assets/basic_applications/short_content_auto.webp';

通过正确的提示，GPT-3非常擅长写作短格式回答。为了证明这一点，我将看一下**解答讨论性问题**，这是许多大学课程中常见的每周任务。对讨论性问题的回答通常约为100到700字。更长的内容可能会有些棘手，因为语言模型的记忆有限，并且难以理解他们所写的内容的全局图像(@jin2022plot)。

让我们看一个基本的讨论问题的例子:

> _"我们星球面临的最紧迫的环境问题是什么，个人可以采取哪些措施来帮助解决这些问题？"_

我们可以将其转化为简单的GPT-3提示，将<span className="yellow-highlight">回答以下问题:</span>放在前面。

<pre>
    <span className="yellow-highlight">回答以下问题:</span><br/>
    我们星球面临的最紧迫的环境问题是什么，个人可以采取哪些措施来帮助解决这些问题？
</pre>

由于这个提示生成的结果并不一致，有些只有一两个句子。一个典型的讨论回答应该有多个段落，因此这些结果并不理想。一个好的提示应该给出**具体的格式和内容指令**。您需要消除语言中的歧义以提高一致性和质量。这是一个更好的提示。

<pre>
    <span className="yellow-highlight">写一篇高度详细的论文，包括引言、正文和结论段，回答以下问题:</span><br/>
    我们星球面临的最紧迫的环境问题是什么，
    <br/>个人可以采取哪些措施来帮助解决这些问题？
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="example"></iframe>

第二个提示生成了更长的输出和更好的结构。提示中使用“论文”一词是有意的，因为GPT-3可以理解论文的定义，因此更有可能生成连贯的、结构化的回答。

### 许多讨论性问题并不适合提示

> _"内战是一场关于扩张的冲突吗？同意还是不同意，为什么？"_

这是一个真实的大学历史课程的讨论问题。它的措辞不当，也过于开放。**为了获得良好的讨论回答，您需要将问题改写为一个明确定义的提示**。上面那个讨论问题的明确定义提示可以是：

> _"解释内战的原因以及扩张是否在冲突中起了作用。附上支持您论点的证据。"_

现在我们可以添加格式和上下文指令。

<pre>
    <span className="yellow-highlight">写一篇高度详细的讨论回答，按照论文结构回答以下提示:</span><br/>
    解释内战的原因以及扩张是否在冲突中起了作用。<br/>附上支持您论点的证据。
</pre>

### 使用GPT-3自动重写明确定义的提示

上面的改写例子是使用OpenAI的[ChatGPT](https://openai.com/blog/chatgpt/)生成的。

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}}/>
</div>

### 迭代

在为讨论问题制定有效的提示后，您现在需要细化GPT-3生成的结果。这可能涉及到调整输出以符合诸如字数等限制，或将不同生成的结果的概念组合在一起。

迭代的一个简单方法是生成多个输出并查看它们，以了解GPT-3正在使用的概念和结构。一旦评估了输出，您就可以选择最合适的输出并将它们组合成一个连贯的回答。

另一种迭代的方法是逐步开始，然后**逐步扩展**。这需要不止一个提示:一个起始提示，用于撰写最初的一两段，然后是其他提示，以扩展已经写过的内容。

以下是一个潜在的哲学讨论问题:

> _"数学是发明还是发现？用仔细的推理来解释你的答案。"_

将其添加到一个简单的提示中，如下所示:

<pre>
    <span className="yellow-highlight">写一个起始段回答以下问题:</span>
    <br/>数学是发明还是发现？用仔细的推理来解释你的答案。
</pre>

我生成了一些回答，找到了一个我喜欢的：

<pre>
    <span className="bluegreen-highlight">哲学家和数学家之间争论不休，数学是发明还是发现。
    <br/>一些人认为，数学的概念和原则独立于人类思维存在，因此可以被认为是被发现而不是被发明的。
    <br/>例如，数字、比率和几何形状的概念在自然界中被观察到，可以被抽象化和系统化地研究。</span>
</pre>

This is a pretty good start. I then followed this up with another prompt to expand:
这是一个不错的开端。然后我使用另一个提示来扩展：

<pre>
<span className="yellow-highlight">我正在撰写一篇详细的短文，回答以下提示:</span> 
<br/>数学是发明还是发现？用仔细的推理来解释你的答案。<span className="yellow-highlight"><p/>这是我目前的情况:</span> 哲学家和数学家之间争论不休，数学是发明还是发现。
<br/>一些人认为，数学的概念和原则独立于人类思维存在，因此可以被认为是被发现而不是被发明的。
<br/>例如，数字、比率和几何形状的概念在自然界中被观察到，可以被抽象化和系统化地研究。<p/><span className="yellow-highlight">写下我文章的下一段。</span>
</pre>

尝试使用以下演示来扩展此提示（您将需要您的OpenAI API密钥）：

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IuWPpuS4gOaWuemdou%2B8jOacieS6uuiupOS4uuaVsOWtpuWcqOW%2BiOWkp%2Beoi%2BW6puS4iuaYr%2BS6uuexu%2BaAnee7tOeahOWPkeaYjuOAguaVsOWtpuWOn%2BeQhuWfuuS6jumAu%2Bi%2BkeaOqOeQhu%2B8jOi%2FmeaYr%2BS6uuexu%2BaAnee7tOeahOS4gOS4queJueW%2BgeOAguS%2Bi%2BWmgu%2B8jOasp%2BWHoOmHjOW%2Bt%2BWHoOS9leWfuuS6juaKveixoeeahOWFrOeQhuWSjOWJjeaPkO%2B8jOiiq%2BaOpeWPl%2BS4uuecn%2BWunuiAjOaXoOmcgOivgeaYjuOAguWboOatpO%2B8jOWPr%2BS7peiupOS4uuWHoOS9leaYr%2BS6uuexu%2BaAnee7tOeahOWPkeaYju%2B8jOiAjOS4jeaYr%2BS4gOenjeWPkeeOsOOAguWQjOagt%2B%2B8jOaVsOWtpuWFrOW8j%2BWSjOaWueeoi%2BeUqOS6juaooeaLn%2BWSjOmihOa1i%2BeJqeeQhueOsOixoe%2B8jOi%2FmeWPiOaYr%2BS6uuexu%2BaOqOeQhueahOe7k%2BaenOOAgiIsInByb21wdCI6IuaIkeato%2BWcqOaSsOWGmeS4gOevh%2Bivpue7hueahOefreaWh%2B%2B8jOWbnuetlOS7peS4i%2BaPkOekujog5pWw5a2m5piv5Y%2BR5piO6L%2BY5piv5Y%2BR546w77yf55So5LuU57uG55qE5o6o55CG5p2l6Kej6YeK5L2g55qE562U5qGI44CCIOi%2FmeaYr%2BaIkeebruWJjeeahOaDheWGtTrlk7LlrablrrblkozmlbDlrablrrbkuYvpl7TkuonorrrkuI3kvJHvvIzmlbDlrabmmK%2Flj5HmmI7ov5jmmK%2Flj5HnjrDjgILkuIDkupvkurrorqTkuLrvvIzmlbDlrabnmoTmpoLlv7Xlkozljp%2FliJnni6znq4vkuo7kurrnsbvmgJ3nu7TlrZjlnKjvvIzlm6DmraTlj6%2Fku6XooqvorqTkuLrmmK%2Fooqvlj5HnjrDogIzkuI3mmK%2Fooqvlj5HmmI7nmoTjgILkvovlpoLvvIzmlbDlrZfjgIHmr5Tnjoflkozlh6DkvZXlvaLnirbnmoTmpoLlv7XlnKjoh6rnhLbnlYzkuK3ooqvop4Llr5%2FliLDvvIzlj6%2Fku6Xooqvmir3osaHljJblkozns7vnu5%2FljJblnLDnoJTnqbbjgIIg5YaZ5LiL5oiR5paH56ug55qE5LiL5LiA5q6144CCIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

我使用此提示生成了几个扩展，并选择了一个我喜欢的，最终得到了以下结果：

<pre>
    哲学家和数学家之间争论不休，数学是发明还是发现。
    <br/>一些人认为，数学的概念和原则独立于人类思维存在，因此可以被认为是被发现而不是被发明的。
    <br/>例如，数字、比率和几何形状的概念在自然界中被观察到，可以被抽象化和系统化地研究。
    <span className="bluegreen-highlight">
    <br/>另一方面，有人认为数学在很大程度上是人类思维的发明。
    <br/>数学原理基于逻辑推理，这是人类思维的一个特征。
    <br/>例如，欧几里德几何基于抽象的公理和前提，被接受为真实而无需证明。
    <br/>因此，可以认为几何是人类思维的发明，而不是一种发现。
    <br/>同样，数学公式和方程用于模拟和预测物理现象，这又是人类推理的结果。
    </span>
</pre>

使用扩展提示，我们可以逐步地写作并在每个步骤上进行迭代。这对于需要**生成更高质量的输出并希望逐步修改**的情况非常有用。

Written by [jayo78](https://twitter.com/jayo782).
