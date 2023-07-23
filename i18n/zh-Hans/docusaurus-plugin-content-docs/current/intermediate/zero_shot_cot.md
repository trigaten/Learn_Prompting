---
sidebar_position: 4
---

# 🟢 零样本思维链

零样本思维链（Zero Shot Chain of Thought，Zero-shot-CoT）提示过程(@kojima2022large)是对 %%CoT prompting|CoT prompting%% (@wei2022chain) 的后续研究，引入了一种非常简单的零样本提示。他们发现，通过在问题的结尾附加“**让我们一步步思考。**”这几个词，大语言模型能够生成一个回答问题的思维链。从这个思维链中，他们能够提取更准确的答案。

import ZSImage from '@site/docs/assets/intermediate/zero_shot.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}}/>
</div>
<div style={{textAlign: 'center'}}>
零样本思维链(Kojima et al.)
</div>

从技术上讲，完整的零样本思维链过程涉及两个单独的提示/补全结果。在下面的图像中，左侧的顶部气泡生成一个思维链，而右侧的顶部气泡接收来自第一个提示（包括第一个提示本身）的输出，并从思维链中提取答案。这个第二个提示是一个 _自我增强_ 的提示。

import ZSProcessImage from '@site/docs/assets/intermediate/zero_shot_example.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={ZSProcessImage} style={{width: "500px"}} />
</div>
<div style={{textAlign: 'center'}}>
完整的零样本思维链过程(Kojima et al.)
</div>

## 示例

以下是一些演示（仅执行推理提取）。这个演示展示了GPT-3（davinci-003）无法解决一个简单的数学问题，而第二个演示使用了零样本思维链提示，并成功地解决了这个问题。随意输入您的OpenAI API密钥（点击生成），并在示例中进行操作。请注意，与思维链提示相比，零样本思维链提示要简单得多。

#### 错误示例

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### 正确示例

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiLlpoLmnpwgSm9obiDmnIkgNSDkuKrmoqjlrZDvvIzlkIPkuoYgMiDkuKrvvIzlj4jkubDkuoYgNSDkuKrvvIznhLblkI7mioogMyDkuKrnu5nkuobku5bnmoTmnIvlj4vvvIzku5bov5jliankuIvlpJrlsJHkuKrmoqjlrZDvvJ9cblxu6K6p5oiR5Lus5LiA5q2l5LiA5q2l5Zyw5oCd6ICD44CCIiwib3V0cHV0IjoiSm9obiDotbfliJ3mnIkgNSDkuKrmoqjlrZDjgILku5blkIPkuoYgMiDkuKrmoqjlrZDvvIzov5jliankuIsgMyDkuKrmoqjlrZDjgILku5blj4jkubDkuoYgNSDkuKrmoqjlrZDvvIzkuIDlhbHmnIkgOCDkuKrmoqjlrZDjgILku5bmioogMyDkuKrmoqjlrZDnu5nkuobku5bnmoTmnIvlj4vvvIzku5bnjrDlnKjlj6rliankuIsgNSDkuKrmoqjlrZDjgIIiLCJtYXhUb2tlbnMiOjI1NiwiYm94Um93cyI6NSwidGVtcGVyYXR1cmUiOjAuNywidG9wUCI6MX0%3D"
    style={{width:"100%", height:"250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 结论
零样本思维链也有效地改善了算术、常识和符号推理任务的结果。然而，毫不奇怪的是，它通常不如思维链提示过程有效。，在获取思维链提示的少量示例有困难的时候，零样本思维链可以派上用场。

## 有趣的消融实验

Kojima等人尝试了许多不同的零样本思维链提示（例如“让我们按步骤解决这个问题。”或“让我们逻辑思考一下。”），但他们发现“让我们一步一步地思考”对于他们选择的任务最有效。

## 备注

提取步骤通常必须针对特定任务，使得零样本思维链的泛化能力不如它一开始看起来的那样强。

从个人经验来看，零样本思维链类型的提示有时可以有效地提高生成任务完成的长度。例如，请考虑标准提示`写一个关于青蛙和蘑菇成为朋友的故事`。在此提示的末尾附加`让我们一步一步地思考`会导致更长的补全结果。