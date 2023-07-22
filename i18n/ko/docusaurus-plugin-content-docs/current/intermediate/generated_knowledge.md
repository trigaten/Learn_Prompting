---
sidebar_position: 7
---

# 🟡 지식 생성하기


"지식 생성하기"(@liu2021generated)는 최종 답을 생성하기 전에 LLM에 주어진 질문/프롬프트에 유용할만한 정보들을 생성하는 것입니다.

예를 들어 여러분이 [커모드 베어](https://en.wikipedia.org/wiki/Kermode_bear)와 같은 어떤 동물에 대한 짧은 블로그를 작성하려고 합니다. 먼저 블로그를 작성하기 전에 LLM에 커모드 베어에 대한 몇가지 사실들을 물어보는 것입니다. 이것은 LLM이 더 정보를 잘 제공하는 블로그를 작성할 수 있게 도와줄 것입니다. 여기 두가지 간단한 예제가 있습니다.

## 한 개의 프롬프트 사용

첫 번째 접근은 LLM이 지식을 생성하고 글을 쓰기까지 하나의 프롬프트에 작성하는 것입니다.

```text
Generate 4 facts about the Kermode bear, then use these facts to write a short blog post using the information:
// highlight-start
The Kermode bear, also known as the spirit bear, is a rare subspecies of the American black bear that is found in the coastal regions of British Columbia, Canada.

1. The Kermode bear is a unique subspecies of the American black bear, with approximately 10% of the population having white fur.

2. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal.

3. The Kermode bear is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest.

4. The Kermode bear is a protected species, and its population is monitored closely by the provincial government.

The Kermode bear is a unique and special animal that is found in the coastal regions of British Columbia, Canada. Approximately 10% of the population of this subspecies of the American black bear have white fur, making them a rare sight. The Kermode bear is a symbol of the First Nations people of British Columbia, and is seen as a spirit animal. It is an important part of the ecosystem, helping to disperse seeds and maintain the balance of the forest. The Kermode bear is a protected species, and its population is monitored closely by the provincial government. It is a beautiful and majestic animal, and it is important that we do our part to protect and conserve this species.
// highlight-end
```


## 두 개의 프롬프트 사용

이 접근법에서 첫 번째 프롬프트는 LLM에게 곰에 대한 사실을 생성하도록 만듭니다:

```text
Generate 10 facts about the Kermode bear:
// highlight-start
1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.

2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.

3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.

4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.
// highlight-end
```

그리고 우리는 다른 프롬프트에 이 정보들을 넣은 후 블로그를 작성하도록 만듭니다:

```text
1. The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada.

2. The Kermode bear has a unique white or cream-colored coat, which is caused by a recessive gene.

3. The Kermode bear is a symbol of hope and renewal for the First Nations people of British Columbia.

4. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada.

Use the above facts to write a one paragraph blog post about the Kermode bear:

// highlight-start

The Kermode bear, also known as the Spirit Bear, is a rare subspecies of the American black bear found in British Columbia, Canada. This unique bear has a white or cream-colored coat, caused by a recessive gene, and is a symbol of hope and renewal for the First Nations people of British Columbia. The Kermode bear is a protected species and is listed as a species of special concern by the Committee on the Status of Endangered Wildlife in Canada, making it an important part of the region's biodiversity.

// highlight-end
```

저는 더 길고 믿을 만한 컨텐츠를 제공하는 두 번째 접근법을 추천드립니다.

## 또 다른 예제

지식 생성하기 접근법은 실제로 어려운 문제에 답변하는 등의 완전히 다른 문제에도 사용가능합니다. 여기 GPT-3가 잘못 답변한 아래의 질문에 대해서 알아봅시다.

<iframe
    src="http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D"
    style={{width:"100%", height:"1250px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

만약 우리가 먼저 LLM에게 콩고나 남아프리카에 대한 사실을 생성하도록 질문했다면 우리는 질문에 대한 더 정확한 답을 위해 그 정보를 사용할 수 있을 것입니다. 이론적으로, 관련된 사실들을 이용해서 중간 질문들을 생성하고 있기 때문에 CoT와 비슷합니다.

*지식 생성* 단계를 시작해봅시다. 우리는 LLM에 콩고와 남아프리카에 대한 사실들을 생성하도록 질문할 수 있을 것입니다:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Generate some knowledge about the sizes of South Africa and Congo:" initial-response="South Africa is the 25th largest country in the world, with an area of 1,221,037 square kilometers (471,445 square miles). Congo, on the other hand, is the 11th largest country in the world, with an area of 2,344,858 square kilometers (905,567 square miles). South Africa is almost half the size of Congo, with a population of 57.7 million compared to Congo's population of 84.3 million. South Africa is the most populous country in the region, while Congo is the second most populous." max-tokens="256" box-rows="6" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

다음으로 지식을 이용해서 질문에 더 정확하게 답변할 수 있도록 만들어봅시다. 이것이 *지식 통합* 단계입니다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="South Africa is the 25th largest country in the world, with an area of 1,221,037 square kilometers (471,445 square miles). Congo, on the other hand, is the 11th largest country in the world, with an area of 2,344,858 square kilometers (905,567 square miles). South Africa is almost half the size of Congo, with a population of 57.7 million compared to Congo's population of 84.3 million. South Africa is the most populous country in the region, while Congo is the second most populous.\n\nWhich country is larger, Congo or South Africa?" initial-response="Congo is larger than South Africa." max-tokens="256" box-rows="15" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## 더 기술적인 토론

위의 예제들이 기존에 소개된 것들과 비슷함에도 불구하고 완전히 똑같지는 않습니다. 아래의 컨텐츠는 더 기술적인 부분을 보여줄 것입니다.
위에서 본 두가지 과정(지식 생성, 지식 통합)을 똑같이 이용할 것입니다.

import KGImage from '@site/docs/assets/intermediate/knowledge_generation.webp';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge (Liu et al.)
</div>

### 지식 생성

지식 생성단계에서 LLM은 **질문**에 대한 사실들을 생성하도록 질문 받습니다.
LLM은 퓨샷 스타일의 프롬프트를 받게 됩니다. M개의 각기 다른 답변들을 이 같은 프롬프트를 통해서 생성이 됩니다.(자기 일관성 접근법처럼)

import KGP1Image from '@site/docs/assets/intermediate/gen_k_p1.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge Example (Liu et al.)
</div>


### 지식 통합

다음으로 우리는 최종 답안을 얻기 위해서 "지식이 추가된" 프롬프트를 LLM에 넣게 됩니다.
이에 대한 쉬운 이해를 위해서 아래의 예제를 봅시다.

우리가 아래의 **질문**에 답변하고 있다고 가정해봅시다.
"Most Kangaroos have <mask\> limbs"
지식 생성 단계에서 우리가 2개의 지식을 생성했다고 가정합니다(M=2):


- Knowledge 1: `Kangaroos are marsupials that live in Australia.`

- Knowledge 2: `Kangaroos are marsupials that have 5 limbs.`

이제 우리는 각각의 지식과 질문을 합쳐 지식 증강 질문을 만들 것입니다:

- Knowledge Augmented Question 1: `Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that live in Australia.`

- Knowledge Augmented Question 2: `Most Kangaroos have <mask\> limbs. Kangaroos are marsupials that have 5 limbs.`

그리고 우리는 LLM에 지식 증강 질문을 넣고 최종 답안을 얻을 것입니다.

- Answer 1: `4`

- Answer 2: `5`

우리는 가장 가능성이 높은 답변을 최종답변으로 고를 것입니다.
가장 높은 확률은 "소프트 맥스 가능성"이나 "로그 가능성"이 될 것입니다.

## 암기-증강 언어 모델

암기-증강(@sun2022recitationaugmented) 접근법은 지식 생성하기와 굉장히 비슷합니다.(기본적으로는 같습니다)
하지만 정식적인 지식 생성하기 개발보다는 덜 복잡할 것입니다.


import RImage from '@site/docs/assets/intermediate/recitation.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={RImage} style={{width: "250px"}} />
</div>

아이디어는 퓨샷 프롬프트로 지식 생성과 답변을 같은 단계에서 실행하는 데 있습니다.
암기와 지식 생성하기 그리고 답변하기를 동시에 진행한다는 사실은 지식 생성하기 접근법과의 가장 큰 차이가 될것입니다.

반복하자면 이 접근법은 모델에게 여러 개의 (질문, 암송, 답변) 예제를 제공한 다음 질문을 한다. 저자들은 이 접근법이 자기 일관성 또는 여러 프롬프팅 방법과 결합될 수 있다는 점에 주목한다.


## 참고

- 지식 생성하기는 다양한 상식 데이터 셋에서 발전을 보여줍니다.

- 선택한 답에 맞는 지식은 _선택된 지식_이라고 불립니다.

- 예제에서 여러분은 최빈값은 최종 답안으로 고를 수 있을 것입니다.