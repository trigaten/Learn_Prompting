---
sidebar_position: 4
---

# 🟢 퓨샷 프롬프팅

import FewShot from '@site/docs/assets/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>


또 다른 프롬프팅 전략에는 샷이라고 불리는 몇가지 예시를 모델에 기본적으로 제공하는 방식인 *퓨샷 프롬프팅*이 있습니다.

위의 예제에서 우리는 고객의 피드백이 긍정적인지 부정적인지 구분하려고 합니다. 우리는 모델에게 긍적/부정의 3가지 예제를 제공했고 그리고 아직 구분되지 않은 피드백을 보여주었습니다(`It doesnt work!:`과 함께). 모델은 먼저 `긍정`과 `부정`으로 구분되어 있는 3가지 예제를 보고 이 정보를 이용해서 주어진 새로운 예제를 `부정`으로 구분했습니다.

예제를 구조화하는 것은 상당히 중요합니다. `input: classification`을 통해서 3개의 예제를 구조화 했기 때문에 모델은 `this review is positive`와 같은 문장 전체로 답변하는 게 아니라 마지막 라인에 한 개의 단어로 답변하게 되었습니다. 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Great product, 10/10: positive\nDidn't work very well: negative\nSuper helpful, worth it: positive\nIt doesnt work!:" initial-response="negative" max-tokens="256" box-rows="5" model-temp="0.0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

:::참고
각 입력-출력 쌍은 *exemplar*라고 불립니다.
:::

## 구조에 대해 더 알아보기

퓨샷 프롬프팅의 주요 사용처는 모델에게 설명하기 어려운 **특별한 방법으로 구조화된** 출력을 요구할 때입니다. 이것을 이해하기 위해서 관련된 예제를 알아봅시다: 지역 신문 기사를 분석하여 인근 마을에서 잘 알려진 시민의 이름과 직업을 편집해야 한다고 가정합시다. 여러분은 모델에게 각 기사를 읽고 그리고 `Last, First [OCCUPATION]` 포맷의 리스트를 출력하도록 해야합니다. 이를 실행하기 위해서 여러분은 모델에 몇가지 예제를 제공할 수 있을 것입니다:
 
<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="In the bustling town of Emerald Hills, a diverse group of individuals made their mark. Sarah Martinez, a dedicated nurse, was known for her compassionate care at the local hospital. David Thompson, an innovative software engineer, worked tirelessly on groundbreaking projects that would revolutionize the tech industry. Meanwhile, Emily Nakamura, a talented artist and muralist, painted vibrant and thought-provoking pieces that adorned the walls of buildings and galleries alike. Lastly, Michael O'Connell, an ambitious entrepreneur, opened a unique, eco-friendly cafe that quickly became the town's favorite meeting spot. Each of these individuals contributed to the rich tapestry of the Emerald Hills community.\n1. Sarah Martinez [NURSE]\n2. David Thompson [SOFTWARE ENGINEER]\n3. Emily Nakamura [ARTIST]\n4. Michael O'Connell [ENTREPRENEUR]\n\nAt the heart of the town, Chef Oliver Hamilton has transformed the culinary scene with his farm-to-table restaurant, Green Plate. Oliver's dedication to sourcing local, organic ingredients has earned the establishment rave reviews from food critics and locals alike.\n\nJust down the street, you'll find the Riverside Grove Library, where head librarian Elizabeth Chen has worked diligently to create a welcoming and inclusive space for all. Her efforts to expand the library's offerings and establish reading programs for children have had a significant impact on the town's literacy rates.\n\nAs you stroll through the charming town square, you'll be captivated by the beautiful murals adorning the walls. These masterpieces are the work of renowned artist, Isabella Torres, whose talent for capturing the essence of Riverside Grove has brought the town to life.\n\nRiverside Grove's athletic achievements are also worth noting, thanks to former Olympic swimmer-turned-coach, Marcus Jenkins. Marcus has used his experience and passion to train the town's youth, leading the Riverside Grove Swim Team to several regional championships.\n1. Oliver Hamilton [CHEF]\n2. Elizabeth Chen [LIBRARIAN]\n3. Isabella Torres [ARTIST]\n4. Marcus Jenkins [COACH]\n\nOak Valley, a charming small town, is home to a remarkable trio of individuals whose skills and dedication have left a lasting impact on the community.\n\nAt the town's bustling farmer's market, you'll find Laura Simmons, a passionate organic farmer known for her delicious and sustainably grown produce. Her dedication to promoting healthy eating has inspired the town to embrace a more eco-conscious lifestyle.\n\nIn Oak Valley's community center, Kevin Alvarez, a skilled dance instructor, has brought the joy of movement to people of all ages. His inclusive dance classes have fostered a sense of unity and self-expression among residents, enriching the local arts scene.\n\nLastly, Rachel O'Connor, a tireless volunteer, dedicates her time to various charitable initiatives. Her commitment to improving the lives of others has been instrumental in creating a strong sense of community within Oak Valley.\n\nThrough their unique talents and unwavering dedication, Laura, Kevin, and Rachel have woven themselves into the fabric of Oak Valley, helping to create a vibrant and thriving small town." initial-response="1. Laura Simmons [FARMER]\n2. Kevin Alvarez [DANCE INSTRUCTOR]\n3. Rachel O'Connor [VOLUNTEER]" max-tokens="616" box-rows="20" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

모델에게 몇가지 정확한 출력 포멧을 제공하는 것으로, 새로운 글에서도 정확한 출력을 제공할 수 있을 것입니다.
:::참고
그냥 명령 프롬프트를 통해서도 같은 출력을 만들 수 있지만 퓨샷 프롬프트는 더 *일관성*있는 출력을 제공할 것입니다.
:::

## 다양한 퓨샷 프롬프트

"샷"은 "예제"와 같은 뜻입니다. 퓨샷 프롬프팅 외에 두가지 종류의 샷 프롬프팅이 존재합니다. 이것을 너무 어렵게 생각하지 마십지오! 이 종류들 사이에 다른 것이라고는 예제를 제공하는 개수밖에 없습니다.

종류:
- 제로샷 프롬프팅: 모델에게 예제를 제공하지 않음
- 1샷 프롬프팅: 모델에게 한 개의 예제를 제공함
- 퓨샷 프롬프팅: 2개 이상의 모델을 제공함 

### 제포샷 프롬프팅

제로샷 프롬프팅은 가장 기본적인 프롬프팅입니다. 예시 없는 프롬프트를 모델에 제공해서 결과를 생성합니다. 이와 같이, 지금까지 봤던 모든 명령이나 역할 프롬프트는 제로샷 프롬프트라고 볼 수 있습니다. 추가적으로 제로샷 프롬프트의 예시는 다음과 같습니다:

```text
Add 2+2:
```

모델에게 어떤 예제도 제공하지 않았기 때문에 제로샷 프롬프트입니다.

### 1샷 프롬프트

1샷 프롬프트는 모델에게 1개의 예시만 제공합니다. `Add 2+2:`을 물어보고 싶을 떄:
   
```text
Add 3+3: 6
Add 2+2:
```

우리는 모델에 하나의 완성된 예시(`Add 3+3: 6`)를 제공습니다. 그렇기 떄문에 1샷 프롬프트입니다.

### 퓨샷 프롬프팅

퓨샷 프롬프팅은 2개 이상의 예제를 제공합니다. 위의 섹션의 모든 프롬프트는 퓨샷 프롬프트였습니다. 위 예제의 퓨샷 프롬프트 버전은 다음과 같습니다:

```text
Add 3+3: 6
Add 5+5: 10
Add 2+2:
```

모델에 두 개의 완성된 예제(`Add 3+3: 6` and `Add 5+5: 10`)를 제공했습니다. 보통 더 많은 예시가 모델에게 제공되면 더 나은 결과가 출력됩니다. 그래서 보통 퓨샷 프롬프팅이 제로샷 프롬프팅이나 1샷 프롬프팅보다 선호됩니다.

## 결론

퓨샷 프롬프팅은 모델에게 정확하고 구조화된 출력을 생성하게 하는 아주 강력한 기술입니다.

 