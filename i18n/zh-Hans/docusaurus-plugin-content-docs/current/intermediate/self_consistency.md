---
sidebar_position: 5
---

# 🟡 自洽性

自洽性（Self-consistency）(@wang2022selfconsistency)是对 %%CoT|CoT prompting%% 的一个补充，它不仅仅生成一个思路链，而是生成多个思路链，然后取多数答案作为最终答案。

在下面的图中，左侧的提示是使用少样本思路链范例编写的。使用这个提示，独立生成多个思路链，从每个思路链中提取答案，通过“边缘化推理路径”来计算最终答案。实际上，这意味着取多数答案。

import SCImage from '@site/docs/assets/reliability/self_consistency.webp';

<div style={{textAlign: 'center'}}>
  <img src={SCImage} style={{width: "750px"}}/>
</div>
<div style={{textAlign: 'center'}}>
自洽性 (Wang et al.)
</div>

## 结论

研究表明，自洽性可以提高算术、常识和符号推理任务的结果。

即使普通的思路链提示被发现无效(@ye2022unreliability)，自洽性仍然能够改善结果。

## 备注

Wang 等人讨论了一种更复杂的边缘化推理路径方法，该方法涉及每个思路链生成的大语言模型概率。然而，在他们的实验中，他们没有使用这种方法，多数投票似乎通常具有相同或更好的性能。