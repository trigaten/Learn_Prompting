---
sidebar_position: 3
---

# 🟢 "표준" 프롬프트

우리는 지금까지 몇 가지 다양한 프롬프트 포맷에 대해서 살펴보았습니다.
Kojima et al에 따라(@kojima2022large), 우리는 그저 질문으로만 이루어진 프롬프트를 "표준" 프롬프트로 바꿔볼 것입니다.
또한 우리는 QA 포맷으로 되어있는 질문을 "표준" 프롬프트로 바꿔볼 것입니다.

#### 왜 알아둬야 할까?

우리가 참조했던 많은 논문들에서 이 용어를 사용하는 것을 볼 수 있었습니다.
표준 프롬프트와 대조되는 새로운 유형의 프롬프트에 대해 논의할 수 있도록 이를 미리 정의하고 있습니다.

### 표준 프롬프트에 대한 두가지 예시:


_표준 프롬프트_
```
What is the capital of France?
```

_QA 포맷의 표준 프롬프트_
```
Q: What is the capital of France?

A:
```

## 퓨샷(Few Shot) 표준 프롬프트들

퓨샷(Few Shot) 표준 프롬프트들은(@liu2021pretrain) _표본들_ 이 포함된 표준 프롬프트입니다.
표본은 프롬프트가 해결해줬으면 하는 일들에 대한 몇몇의 예시를 우리가 미리 제공하는 것입니다.
연구에 따르면, 퓨샷(Few Shot) 표준 프롬프트는 종종 그냥 표준 프롬프트로 불리곤합니다.(이 가이드에서 추천하지 않음에도 불구하고)

### 퓨삿(Few Shot) 표준 프롬프트에 대한 두가지 예시:

_퓨삿(Few Shot) 표준 프롬프트_

```
What is the capital of Spain?
Madrid
What is the capital of Italy?
Rome
What is the capital of France?
```

_QA 포맷의 퓨삿(Few Shot) 표준 프롬프트_
```
Q: What is the capital of Spain?
A: Madrid
Q: What is the capital of Italy?
A: Rome
Q: What is the capital of France?
A:
```

퓨삿(Few Shot) 표준 프롬프트는 파라미터 업데이트를 필요로 하지 않는 "문맥 상(in context)" 학습을 용이하게 합니다.

