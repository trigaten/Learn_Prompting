---
sidebar_position: 90
---

# 🟢 LLM의 함정

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"500px",height:"200px",verticalAlign:"top"}}/>
</div>

LLM은 굉장히 강력하지만 이것이 완벽함을 의미하지는 않습니다. 이것들을 사용하는데 신경써야할 함정들이 상당히 많습니다.

## 출처 인용

LLM들은 **출처를 정확하게** 알 수 없습니다. 그들이 인터넷에 접속할 수 없기 때문이기도 하고 정보를 어디서 얻었는 지 기억할 수도 없기 때문이기도 합니다. LLM은 꽤 좋아보이는 정보를 생성하지만 완전히 틀렸을 수도 있습니다.

:::note
탐색 증강된 LLM(인터넷과 다른 자료들을 탐색할 수 있는 LLM)을 이용하면 이러한 문제를 종종 해결할 수 있습니다
:::

## 편향

LLM은 종종 틀에박힌 답변을 생성하도록 편향됩니다. 심지어 세이프 가드가 있음에도 성적, 인종차별적, 동성애차별적 답변을 할 수도 있습니다. 고객 대응을 위한 LLM을 사용할 떄는 주의가 필요합니다. 그리고 연구에 사용할 때 또한 주의가 필요합니다.(편향된 답변을 낼 수도 있습니다)

## 환각

LLM은 우리가 그들이 잘 모르는 것에 대해 질문했을 때 거짓을 생성하곤 한다. 때때로 그들은 답을 모른다고 말할 것이지만 대부분의 경우 그들은 자신 있게 잘못된 대답을 할 것입니다.

## 수학

LLM은 수학을 잘 못합니다. 그들은 간단한 수학문제를 푸는 것에 어려움을 느끼고 그리고 복잡한 수학 문제는 아예 풀지도 못할 때가 많습니다.

:::note
이 문제는 [증강된 LLM](https://learnprompting.org/docs/advanced_applications/mrkl)을 통해서 해결할 수 있습니다.
:::

## 프롬프트 해킹

사용자들이 LLM이 그들이 원하는 컨텐츠를 생성하도록 속임수를 사용할 때가 있습니다. 더 알고 싶다면 [여기](https://learnprompting.org/docs/category/-prompt-hacking)를 클릭해주세요.