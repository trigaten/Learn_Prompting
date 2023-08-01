---
sidebar_position: 5
---

# 🟡 자기 일관성

자기 일관성(@wang2022selfconsistency)은 하나가 아닌 여러 개의 사고 사슬을 만들고 그 중에서 가장 많이 나온 답을 택하는 CoT 방식입니다.

아래의 그림을 보면 왼쪽의 프롬프트는 퓨샷 CoT 패러다임을 사용해서 쓰여졌습니다. 이 하나의 프롬프트를 이용해서 여러개의 독립적인 사고 사슬이 생성되었습니다.
답변은 각 항목들로부터 추출되었고 그 결과 최종 답안은 "marginalizing out reasoning paths"가 되었습니다.
이 예제에서는 단순히 가장 많이 나온 답을 선택한 것 뿐입니다.

import SCImage from '@site/docs/assets/reliability/self_consistency.webp';

<div style={{textAlign: 'center'}}>
  <img src={SCImage} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
자기 일관성 (Wang et al.)
</div>

## 예제

이메일 분석에 대한 간단한 예제에 대해서 알아보겠습니다. 여러분이 소프트웨어 회사에 다니고 매일 몇 백 통의 이메일을 받는다고 가정해봅시다. 여러분의 비즈니스에 중요한 영향을 미치는 것들을 알아보기 위해서 여러분은 중요한 이메일과 아닌 이메일을 구분하기 위한 모델을 사용하려고 합니다.

여기에 여러분이 받을 이메일에 대한 예시가 있습니다:

```text
Hello,

I have discovered a major security vulnerability in your system. Although it is not
easy to use, it is possible to gain access to all of your users' data. I have attached
a proof of concept. Please fix this issue as soon as possible.

Cheers,

Donny
```

프롬프트에 넣어봅시다:

```text
Hello,

I have discovered a major security vulnerability in your system. Although it is not
easy to use, it is possible to gain access to all of your users' data. I have attached
a proof of concept. Please fix this issue as soon as possible.

Cheers,

Donny

Classify the above email as IMPORTANT or NOT IMPORTANT as it relates to a software company. Let's think step by step.
```

이제, 우리는 위의 프롬프트를 통해서 여러 개의 독립적인 사고 사슬을 만들 것입니다. 여기에 그 몇가지 예제가 있습니다:

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

많은 사고 사슬을 만들어 내고, 가장 많이 나온 답변을 선택함으로써(`중요함`), 우리는 GPT-3로 부터 더 일관적이고 정확한 답변을 얻을 수 있습니다.

## 결론

자기 일관성은 산술적, 상식적, 상징적 추론 과제에서 결과를 더 개선했습니다.

심지어 기본 CoT가 효과적이지 않을 때도 자기 일관성은 여전히 도움이 된다는 것도 알 수 있었습니다.

## 참고

Wang et al. 답을 도출하는 더 복잡한 방법에 대해서 고민해봅시다. 사고 사슬에 대한 LLM의 생성 확률에 대해서 생각해 볼 수 있을 것입니다.
하지만 최빈값 투표가 보통 더 나은 답을 제공하기 때문에 연구에서는 이러한 방법들을 사용하지 않습니다.