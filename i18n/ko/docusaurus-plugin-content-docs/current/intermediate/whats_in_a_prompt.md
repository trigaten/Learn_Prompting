---
sidebar_position: 7
---

# 🟢 프롬프트 안에는 무엇이 있는가?

이전의 페이지에서 몇가지 다른 프롬프팅 기술에 대해서 알아보았습니다.
이 페이지는 프롬프트에 무엇이 실제로 중요한지에 대한 몇가지 일반적인 조언을 제공할 것입니다.


## "Ground Truth Matters Little"


놀랍게도 프롬프트에 퓨샷 표본들을 제공할 떄 표본의 실제 답변(gold)은 별로 중요하지 않다. 아래의 표가 보여주듯이 랜덤한 라벨의 표본을 제공하는 것은 거의 성능을 저하시키지 않는다.
"Demo"는 이 이미지의 예시와 동의어입니다.

import GoldUn from '@site/docs/assets/intermediate/gold_unimportant.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={GoldUn} style={{width: "750px"}} />
</div>

## Labelspace Matters

표본의 골드 라벨들은 중요하지 않음에도 불구하고 라벨 공간(라벨이 나올 수 있는 범위)은 중요합니다.
라벨 공간의 랜덤한 라벨을 넣는 것은 심지어 라벨 공간에대한 LLM의 이해도나 결과를 개선시킨다. 게다가 라벨 공간에대한 표본의 분포는 상당히 중요합니다.
그냥 동일한 확률로 라벨을 뽑는 것보다 실제 라벨들이 나올 수 있는 확률 분포를 따르는 것이 더 도움이 됩니다.

## Format Matters

아마도 표본을 넣는데 가장 중요한 부분은 포맷일 것입니다. 포맷은 LLM에게 어떻게 답변할지에 대한 지시를 내리는 것과 같습니다.

예를 들어서 아래의 표본을 넣을 때, 모델들은 답변으로 대문자만을 출력할 것이고 완전히 틀린 표본을 넣었음에도 GPT-3는 아래의 문제를 제대로 해결하고 포맷까지 잘 따릅니다.

```text
What is 2+2?
FIFTY
What is 20+5?
FORTY-THREE
What is 12+9?
// highlight-start
TWENTY-ONE
// highlight-end
```

## 참고

4-8개의 표본이 퓨샷 프롬프팅(@min2022rethinking)에서 가장 적당한 개수입니다. 하지만 더 많이 넣는 것이 종종 도움이 되곤 합니다.

[^labelspace]: [vocabulary reference](https://learnprompting.org/docs/vocabulary#labels)를 눌러 더 많은 정보를 알아보세요.
