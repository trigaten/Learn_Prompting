---
sidebar_position: 7
---

# 🟢 프롬프트 공식화

import FormalPrompt from '@site/docs/assets/basics/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

이제 우리는 다양한 프롬프트들을 알게 되었고 또 각각을 융합하는 방법도 알고 있습니다. 이 페이지는 다양한 프롬프트들을 설명하기 위한 단어를 여러분에게 제공할 것입니다. 프롬프트 엔지니어링 공식화에 대한 담론이 꾸준히 있었음에도 이 부분은 계속 바뀌어왔습니다. 그래서 우리는 여러분에게 시작하기에 알맞은 정도의 정보만을 제공할 것입니다.

## Parts of a Prompt

There are a few different parts of a prompt that you will see over and over again. They are roughly:

- 역할(role)
- 지시(instruction/task)
- 질문(question)
- 문맥(Context)
- 예시(few shot)

우리는 이전 페이지들에서 역할, 지시, 예시를 이미 살펴보았습니다. A question is simply a question! (E.g. 질문은 단순히 질문입니다!(예를 들어 `what is the capital of France?`). Context is any relevant information that you want the model to use when answering the question/performing the instruction.

Not all of these occur in every prompt, and when some do occur, there is no standard order for them. 예를 들어서 역할, 지시, 문맥이 포함된 아래 두 프롬프트는 서로 순서가 다르지만 똑같이 작동합니다.

```text
You are a doctor. Read this medical history and predict risks for the patient:

January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.
```

```text
January 1, 2000: Fractured right arm playing basketball. Treated with a cast.
February 15, 2010: Diagnosed with hypertension. Prescribed lisinopril.
September 10, 2015: Developed pneumonia. Treated with antibiotics and recovered fully.
March 1, 2022: Sustained a concussion in a car accident. Admitted to the hospital and monitored for 24 hours.

You are a doctor. Read this medical history and predict risks for the patient:
```

하지만 지시가 프롬프트의 마지막 부분이므로 두 번째 프롬프트의 형태가 조금 더 선호됩니다. LLM이 지시를 따르는 것 대신에 의도치 않은 글을 작성할 가능성이 적어지기 때문에 더 좋은 방법이 될 것입니다. 예를 들어서, 첫 번째 프롬프트에서 LLM은 `March 15, 2022: Follow-up appointment scheduled with neurologist to assess concussion recovery progress.`과 같은 추가적인 문장을 작성할 수 도 있다.


## "표준" 프롬프트

우리는 지금까지 몇 가지 다양한 프롬프트 포맷에 대해서 살펴보았습니다. 처음으로 돌아가서 "표준" 프롬프트를 정의해볼 것입니다. Kojima et al에 따라(@kojima2022large), 우리는 질문으로만 이루어진 프롬프트를 "표준" 프롬프트로 바꿔볼 것입니다. 또한 우리는 QA 포맷으로 되어있는 질문을 "표준" 프롬프트로 바꿔볼 것입니다.

#### 왜 알아둬야 할까?

우리가 참조했던 많은 논문들에서 이 용어를 사용하는 것을 볼 수 있었습니다. 앞으로 표준 프롬프트와 대조되는 새로운 유형의 프롬프트에 대해 논의할 수 있도록 이를 미리 정의하고 있습니다.

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

퓨샷(Few Shot) 표준 프롬프트들은(@liu2021pretrain) _표본들_ 이 포함된 표준 프롬프트입니다. 표본은 프롬프트가 해결해줬으면 하는 일들에 대한 몇몇의 예시를 우리가 미리 제공하는 것입니다. 연구에 따르면, 퓨샷(Few Shot) 표준 프롬프트는 종종 그냥 표준 프롬프트로 불리곤합니다.(이 가이드에서 추천하지 않음에도 불구하고)

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
