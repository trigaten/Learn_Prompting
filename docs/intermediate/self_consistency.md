---
sidebar_position: 5
---

# 🟡 Self-Consistency

import SCImage from '@site/docs/assets/reliability/self_consistency.webp';

<div style={{textAlign: 'center'}}>
  <img src={SCImage} style={{width: "500px"}} />
</div>

Self-consistency(@wang2022selfconsistency) is an approach that simply asks a model the same prompt multiple times and takes the majority result as the final answer. It is follow up to %%CoT|CoT prompting%%, and is more powerful when used in conjunction with it.

## Example

Let's consider a simple example of analyzing emails. Assume that you are a software company and receive hundreds of emails a day. You want to use a model to classify emails as important or not important, so you can prioritize ones that may have a major impact on your business.

Here is an example of an email that you might receive:

```text
Hello,

I have discovered a major security vulnerability in your system. Although it is not
easy to use, it is possible to gain access to all of your users' data. I have attached
a proof of concept. Please fix this issue as soon as possible.

Cheers,

Donny
```

Let's put that into a prompt:

```text
Hello,

I have discovered a major security vulnerability in your system. Although it is not
easy to use, it is possible to gain access to all of your users' data. I have attached
a proof of concept. Please fix this issue as soon as possible.

Cheers,

Donny

Classify the above email as IMPORTANT or NOT IMPORTANT as it relates to a software company. Let's think step by step.
```

Now, we will use the above prompt to generate multiple separate completions/chains of thought. Here are a few examples:

```text
<!-- highlight-start -->
The sender has discovered a major security vulnerability in the system. 
This is important because it could lead to a data breach. 
I would classify this email as IMPORTANT
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
The sender has discovered a major security vulnerability in the system, but they have not provided any proof of concept and it is not easy to use. 
I would classify this email as NOT IMPORTANT
<!-- highlight-end -->
```

```text
<!-- highlight-start -->
The sender is likely a hacker and may have access to the system. 
This is important because it could lead to a data breach. 
I would classify this email as IMPORTANT
<!-- highlight-end -->
```

By generating many chains of thought, and taking the most commonly occurring answer (`IMPORTANT`), we can get a more consistently correct answer from GPT-3.

## Results

Self-consistency has been shown to improve results on arithmetic, commonsense and symbolic reasoning tasks. Even when regular CoT was found to be ineffective(@ye2022unreliability), self-consistency
was still able to improve results.

## Notes

- Wang et al. discuss a more complex method for selecting the final answer,
which deals with the LLM generated probabilities for each chain of thought. However, they
do not use this method in their experiments, and majority voting seems to usually
have the same or better performance.