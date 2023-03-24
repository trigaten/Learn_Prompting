---
sidebar_position: 7
locale: en-us
style: chicago
---

# 🟡 최소 최대 프롬프트

최소 최대 프롬프트(LtM)(@zhou2022leasttomost)는 COT 프롬프팅에서 더 나아가 하나의 문제를 여러 개의 서브 문제들로 분할 후 각각을 해결하는 것입니다. 이 기술을 실제로 아이들을 위한 교육 전략에서 영감을 받아서 만들어졌습니다.

먼저 COT 프롬프팅에서 풀어야 할 문제는 각각 서로를 기반으로하는 서브 문제들로 이루어져 있습니다. 두번째로 이 서브 문제들은 한번에 하나씩 해결됩니다. 일반 COT와는 다르게 이전에 풀었던 서브 문제들은 다음 문제를 푸는데에 사용됩니다.   

import leastToMost from '@site/docs/assets/least_to_most_formal.png'

<div style={{textAlign: 'center'}}>
  <img src={leastToMost} style={{width: "600px"}}
        alt="A diagram of a least to most prompting" />
</div>

<div style={{textAlign: 'center'}}>
   최소 최대 프롬프팅 도표
</div>

## 예시: 소비자 연구 결과

조금 복잡한 소비자 서비스 질문을 해봅시다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="CUSTOMER INQUIRY:\nI just bought a T-shirt from your Arnold collection on March 1st. I saw that it was on discount, so bought a shirt that was originall $30, and got 40% off. I saw that you have a new discount for shirts at 50%. I'm wondering if I can return the shirt and have enough store credit to buy two of your shirts?\n\nINSTRUCTIONS:\nYou are a customer service agent tasked with kindly responding to customer inquiries. Returns are allowed within 30 days. Today's date is March 29th. There is currently a 50% discount on all shirts. Shirt prices range from $18-$100 at your store. Do not make up any information about discount policies." initial-response="Thank you for your inquiry. Unfortunately, since you purchased the shirt on March 1st, it is outside of our 30-day return policy. However, we do have a 50% discount on all shirts currently, so you could purchase two shirts with the same amount of store credit. Prices for our shirts range from $18-$100. Please let us know if you have any other questions." max-tokens="256" box-rows="16" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>실패입니다. 이제 서브 문제들로 나누어보는 과정을 진행해봅시다. 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="CUSTOMER INQUIRY:\nI just bought a T-shirt from your Arnold collection on March 1st. I saw that it was on discount, so bought a shirt that was originall $30, and got 40% off. I saw that you have a new discount for shirts at 50%. I'm wondering if I can return the shirt and have enough store credit to buy two of your shirts?\n\nINSTRUCTIONS:\nYou are a customer service agent tasked with kindly responding to customer inquiries. Returns are allowed within 30 days. Today's date is March 29th. There is currently a 50% discount on all shirts. Shirt prices range from $18-$100 at your store. Do not make up any information about discount policies.\nWhat subproblems must be solved before answering the inquiry?" initial-response="1. Determine if the customer is within the 30-day return window.\n2. Calculate the amount of store credit the customer would receive if they returned the shirt.\n3. Calculate the cost of two shirts at the current 50% discount.\n4. Determine if the customer has enough store credit to purchase two shirts." max-tokens="256" box-rows="12" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/> 첫번째 서브 문제를 풀어봅시다.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="CUSTOMER INQUIRY:\nI just bought a T-shirt from your Arnold collection on March 1st. I saw that it was on discount, so bought a shirt that was originally $30, and got 40% off. I saw that you have a new discount for shirts at 50%. I'm wondering if I can return the shirt and have enough store credit to buy two of your shirts?\n\nINSTRUCTIONS:\nYou are a customer service agent tasked with kindly responding to customer inquiries. Returns are allowed within 30 days. Today's date is March 29th. There is currently a 50% discount on all shirts. Shirt prices range from $18-$100 at your store. Do not make up any information about discount policies.\nDetermine if the customer is within the 30-day return window. Let's go step by step." initial-response="Yes, the customer is within the 30-day return window. The customer purchased the shirt on March 1st, and today's date is March 29th, which is within the 30-day return window. \n\nTherefore, the customer is eligible to return the shirt and receive store credit for the purchase. The customer can use the store credit to purchase two shirts at the current 50% discount." max-tokens="256" box-rows="19" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

첫번째 문제를 푸는 것 만으로도 우리는 문제 전체를 풀 수 있었습니다. 만약 GPT-3가 답을 즉각적으로 주지 못한다고 해도 답을 줄때까지 우리는 다음 문제를 풀 수 있었습니다. `Let's go step by step.`라는 문장을 사용하는 것을 참고하세요. 이 문장은 필수가 아니지만 최소한 이 예제에서는 도움이 되었습니다.

## 예제: 문자 연결

LtM은 문제를 여러 단계로 나누는데 명시적인 지시를 사용하는 것이 아니라 퓨샷 프롬프팅을 사용하는 것으로 위에서 설명이 되었습니다. 추가적으로 여러개의 프롬프트가 아니라 하나의 프롬프롬프트로 개발되는 경우도 종종 있습니다. 각 개별적인 단어들의 마지막 문자를 연결하는 문제를 풀어봅시다.

### 첫번째 시도: 표준

퓨샷을 사용하는 표준 프롬프트 예제는 제대로 작동하지 않습니다. 심지어 text-davinci-003같은 더 좋은 모델을 써도 그렇습니다.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: ke\n\nQ: learning, reasoning, generalization\nA: ggn\n\nQ: artificial, intelligence\nA: le\n\nQ: transformer, language, vision\nA: ren\n\nQ: foo,bar,baz,blip\nA:"
     initial-response="lip"
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### 두번째 시도: 사고 사슬 프롬프팅

사고 사슬 프롬프팅은 표준 프롬프트 보다는 낫습니다. 이제는 모델들이 단어의 마지막 문자를 추출하는 것이 가능해졌고 이전보다 문자들을 모으는 모으는 작업의 복잡성이 내려갔기 때문에 성능이 좋아질 수 밖에 없었습니다.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: The last letter of &#34;think&#34; is &#34;k&#34;. The last letter of &#34;machine&#34; is &#34;e&#34;. So &#34;think, machine&#34; is &#34;ke&#34;.\n\nQ: learning, reasoning, generalization\nA: The last letter of &#34;learning&#34; is &#34;g&#34;. The last letter of &#34;reasoning&#34; is &#34;n&#34;. The last letter of &#34;generalization&#34; is &#34;n&#34;. So &#34;learning, reasoning, generalization&#34; is &#34;ggn&#34;.\n\nQ: artificial, intelligence\nA: The last letter of &#34;artificial&#34; is &#34;l&#34;. The last letter of &#34;intelligence&#34; is &#34;e&#34;. So &#34;artificial, intelligence&#34; is &#34;le&#34;.\n\nQ: transformer, language, vision\nA: The last letter of &#34;transformer&#34; is &#34;r&#34;. The last letter of &#34;language&#34; is &#34;e&#34;. The last letter of &#34;vision&#34; is &#34;n&#34;. So &#34;transformer, language, vision&#34; is &#34;ren&#34;.\n\nQ: foo,bar,baz,blip\nA:"
     initial-response="The last letter of &#34;foo&#34; is &#34;o&#34;. The last letter of &#34;bar&#34; is &#34;r&#34;. The last letter of &#34;baz&#34; is &#34;z&#34;. The last letter of &#34;blip&#34; is &#34;p&#34;. So &#34;foo,bar,baz,blip&#34; is &#34;orzp&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### 세번째 시도: 최소 최대 프롬프팅(프롬프트 한 개)

최소 최대 프롬프팅을 통해서 우리는 이전에 연결된 결과를 다시 진술하기 위한 개별 단계를 재구성하여 사고 사슬 개념을 강화한다. 이 방법은 새로운 문자를 연결하는 각각의 과정들을 단순화한다. 그리고 이 방법은 단어가 12개 이상일 때의 성능을 향상시킨다. 

이 접근법은 그냥 사고 사슬 방식과 비슷해보일 수 있습니다. 하지만 실제로는 굉장히 다릅니다. 가장 다른 부분은 모든 단계에서 이전의 연결을 활용한다는 점입니다. "think, machine, learning"의 예를 들어봅시다, "k","e","g" 각각을 개별적으로 연결하는 것이 아니라 "k"와 "e"를 더해서 "ke"를 만들고 그 다음 "g"를 더하는 방식을 사용할 것입니다. 이 이전의 결과물을 활용하는 것으로 인해서 모델은 각각의 단계에서는 아주 조금의 작업만을 필요하기 때문에 더 긴 사슬을 형성할 수 있습니다.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: think, machine\nA: The last letter of &#34;think&#34; is &#34;k&#34;. The last letter of &#34;machine&#34; is &#34;e&#34;. Concatenating &#34;k&#34; and &#34;e&#34; gives &#34;ke&#34;. So &#34;think, machine&#34; output &#34;ke&#34;.\n\nQ: think, machine, learning\nA: &#34;think, machine&#34; outputs &#34;ke&#34;. The last letter of &#34;learning&#34; is &#34;g&#34;. Concatenating &#34;ke&#34; and &#34;g&#34; gives &#34;keg&#34;. So &#34;think, machine, learning&#34; is &#34;keg&#34;.\n\nQ: transformer, language\nA: The last letter of &#34;transformer&#34; is &#34;r&#34;. The last letter of &#34;language&#34; is &#34;e&#34;. Concatenating &#34;r&#34; and &#34;e&#34; gives &#34;re&#34;. So &#34;transformer, language&#34; is &#34;re&#34;.\n\nQ: transformer, language, vision\nA: &#34;transformer, language&#34; outputs &#34;re&#34;. The last letter of &#34;vision&#34; is &#34;n&#34;. Concatenating &#34;re&#34; and &#34;n&#34; gives &#34;ren&#34;. So &#34;transformer, language, vision&#34; is &#34;ren&#34;.\n\nQ: foo,bar,baz,blip,learn,prompting,world,shaking,event,dancefloor,prisma,giraffe\nA:"
     initial-response="The last letter of &#34;foo&#34; is &#34;o&#34;. The last letter of &#34;bar&#34; is &#34;r&#34;. Concatenating &#34;o&#34; and &#34;r&#34; gives &#34;or&#34;. The last letter of &#34;baz&#34; is &#34;z&#34;. Concatenating &#34;or&#34; and &#34;z&#34; gives &#34;orz&#34;. The last letter of &#34;blip&#34; is &#34;p&#34;. Concatenating &#34;orz&#34; and &#34;p&#34; gives &#34;orzp&#34;. The last letter of &#34;learn&#34; is &#34;n&#34;. Concatenating &#34;orzp&#34; and &#34;n&#34; gives &#34;orzpn&#34;. The last letter of &#34;prompting&#34; is &#34;g&#34;. Concatenating &#34;orzpn&#34; and &#34;g&#34; gives &#34;orzpng&#34;. The last letter of &#34;world&#34; is &#34;d&#34;. Concatenating &#34;orzpng&#34; and &#34;d&#34; gives &#34;orzpngd&#34;. The last letter of &#34;shaking&#34; is &#34;g&#34;. Concatenating &#34;orzpngd&#34; and &#34;g&#34; gives &#34;orzpngdg&#34;. The last letter of &#34;event&#34; is &#34;t&#34;. Concatenating &#34;orzpngdg&#34; and &#34;t&#34; gives &#34;orzpngdgt&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>
     

### 결론

12글자를 연결하는 지난 문제에서 사고 사슬은 34%의 정확도를 내었지만 최소 최대 프롬프팅에서는 74%의 정확도를 내었습니다.(text-davinci-002를 활용했을 때)

## 예제: 구성 일반화 (SCAN)

스캔 문제(@lake2018scan)은 모델이 자연어를 일련의 행동으로 바꾸는 과정을 요구 합니다. 예를 들어서, "run left and walk twice"라는 문장을 "TURN_LEFT + RUN + WALK * 2"로 바꾸는 것입니다. 언어 모델은 학습 데이터보다 더 긴 문장을 마주했을 때 특히 더 나쁜 성능을 보입니다.

### 첫번째 시도: 표준 프롬프팅

표준 프롬프팅을 사용했을 때 text-davinci-003은 인상적이지만 여전히 실패하고 있습니다.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: TURN LEFT\n\nQ: turn right\nA: TURN RIGHT\n\nQ: jump left\nA: TURN LEFT &#43; JUMP\n\nQ: run right\nA: TURN RIGHT &#43; RUN\n\nQ: look twice\nA: LOOK * 2\n\nQ: run and look twice\nA: RUN &#43; LOOK * 2\n\nQ: jump right thrice\nA: (TURN RIGHT &#43; JUMP) * 3\n\nQ: walk after run\nA: RUN &#43; WALK\n\nQ: turn opposite left\nA: TURN LEFT * 2\n\nQ: turn around left\nA: TURN LEFT * 4\n\nQ: turn opposite right\nA: TURN RIGHT * 2\n\nQ: turn around right\nA: TURN RIGHT * 4\n\nQ: walk opposite left\nA: TURN LEFT * 2 &#43; WALK\n\nQ: walk around left\nA: (TURN LEFT &#43; WALK) * 4\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="(TURN LEFT * 2 + WALK) * 3 + (TURN LEFT + JUMP) * 2"
     max-tokens="512" box-rows="18"
     model-temp="0.2" ></div>

### 두번째 시도: 최소 최대, 첫번째 단계 - 축소

우리는 2가지의 다른 프롬프트를 다룰 것입니다. 첫번째 프롬프트는 기존의 문제를 더 단순화된 단계로 바꾸는 데 사용됩니다. 두번째 프롬프트는 이러한 단순화된 단계를 합쳐 실제 행동으로 만드는 데 사용될 것입니다.

두 프롬프트는 모두 길고 그리고 토큰에 저장할 작업에 파이썬 압축 표기법을 사용할 것입니다.

첫번째 단계에서는 자연어 설명을 보다 명확하게 만듭니다.(여전히 인간 친화적인 언어로) 이것은 매핑 단계에서 순차적으로 상황을 파악하는 데 도움이 될 것입니다. 예를 들어서 "jump around left twice"는 "jump left" -> `TURN_LEFT + JUMP`, "jump around left" -> `(TURN_LEFT + JUMP) * 4로 축소됩니다. 또한 축소 단계는 반복의 개념을 설명하는 데에도 사용이됩니다.

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: look right after look twice\nA: &#34;look right after look twice&#34; can be solved by: &#34;look right&#34;, &#34;look twice&#34;.\n\nQ: jump opposite right thrice and walk\nA: &#34;jump opposite right thrice&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;. &#34;walk&#34; can be solved by: &#34;walk&#34;. So, &#34;jump opposite right thrice and walk&#34; can be solved by: &#34;jump opposite right&#34;, &#34;jump opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: run left twice and run right\nA: &#34;run left twice&#34; can be solved by: &#34;run left&#34;, &#34;run left twice&#34;. &#34;run right&#34; can be solved by &#34;run right&#34;. So, &#34;run left twice and run right&#34; can.be solved by: &#34;run left&#34;, &#34;run left twice&#34;, &#34;run right&#34;.\n\nQ: run opposite right\nA: &#34;run opposite right&#34; can be solved by &#34;run opposite right&#34;.\n\nQ: look opposite right thrice after walk\nA: &#34;look opposite right thrice&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look opposite right thrice after walk&#34; can be solved by: &#34;look opposite right&#34;, &#34;look opposite right thrice&#34;, &#34;walk&#34;.\n\nQ: jump around right\nA: &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;. So, &#34;jump around right&#34; can be solved by: &#34;jump right&#34;, &#34;jump around right&#34;.\n\nQ: look around right thrice and walk\nA: &#34;look around right thrice&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;. &#34;walk&#34; can be solved by &#34;walk&#34;. So, &#34;look around right thrice and walk&#34; can be solved by: &#34;look right&#34;, &#34;look around right&#34;, &#34;look around right thrice&#34;, &#34;walk&#34;.\n\nQ: turn right after run right thrice\nA: &#34;turn right&#34; can be solved by: &#34;turn right&#34;. &#34;run right thrice&#34; can be solved by: &#34;run right&#34;, &#34;run right thrice&#34;. So, &#34;turn right after run right thrice&#34; can be solved by: &#34;turn right&#34;, &#34;run right&#34;, &#34;run right thrice&#34;.\n\nQ: jump around left twice after walk opposite left thrice\nA:"
     initial-response="&#34;jump around left twice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; can be solved by: &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;. So, &#34;jump around left twice after walk opposite left thrice&#34; can be solved by: &#34;jump left&#34;, &#34;jump around left&#34;, &#34;jump around left twice&#34;, &#34;walk opposite left&#34;, &#34;walk opposite left thrice&#34;."
     max-tokens="256" box-rows="18"
     model-temp="0.2" ></div>

### 두번째 시도: 최소 최대, 두번째 단계 - 합치기

두번째 단계에서 우리는 축소된 결과물을 사용할 것이고 또 굉장히 긴 프롬프트를 사용해서 축소된 자연어 설명을 행동의 과정으로 만들 것입니다.

우리는 LLM에 첫번째 단계의 결과물을 삽입할 것입니다:

> "jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".

<div trydyno-embed="" openai-model="text-davinci-003"
     initial-prompt="Q: turn left\nA: &#34;turn left&#34; outputs &#34;TURN LEFT&#34;.\n\nQ: turn right\nA: &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;.\n\nQ: jump left\nA: The output of &#34;jump left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;jump&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. &#34;jump&#34; outputs &#34;JUMP&#34;. So concatenating the output of &#34;turn left&#34; and the out- put of &#34;jump&#34; leads to &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;. So the output of &#34;jump left&#34; is &#34;TURN LEFT&#34; &#43; &#34;JUMP&#34;.\n\nQ: run right\nA: The output of &#34;run right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;run&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. &#34;run&#34; outputs &#34;RUN&#34;. So concatenating the output of &#34;turn right&#34; and the output of &#34;run&#34; leads to &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;. So the output of &#34;run right&#34; is &#34;TURN RIGHT&#34; &#43; &#34;RUN&#34;.\n\nQ: look twice\nA: The output of &#34;look twice&#34; concatenates: the output of &#34;look&#34;, the output of &#34;look&#34;. &#34;look&#34; outputs &#34;LOOK&#34;. So repeating the output of &#34;look&#34; two times leads to &#34;LOOK&#34; * 2. So the output of &#34;look twice&#34; is &#34;LOOK&#34; * 2.\n\nQ: run and look twice\nA: The output of &#34;run and look twice&#34; concatenates: the output of &#34;run&#34;, the output of &#34;look twice&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;look twice&#34; outputs &#34;LOOK&#34; * 2. So concatenating the output of &#34;run&#34; and the output of &#34;look twice&#34; leads to &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2. So the output of &#34;run and look twice&#34; is &#34;RUN&#34; &#43; &#34;LOOK&#34; * 2.\n\nQ: jump right thrice\nA: The output of &#34;jump right thrice&#34; concatenates: the output of &#34;jump right&#34;, the output of &#34;jump right&#34;, the output of &#34;jump right&#34;. &#34;jump right&#34; outputs &#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;. So repeating the output of &#34;jump right&#34; three times leads to (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3. So the output of &#34;jump right thrice&#34; is (&#34;TURN RIGHT&#34; &#43; &#34;JUMP&#34;) * 3.\n\nQ: walk after run\nA: The output of &#34;walk after run&#34; concatenates: the output of &#34;run&#34;, the output of &#34;walk&#34;. &#34;run&#34; outputs &#34;RUN&#34;. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;run&#34; and the output of &#34;walk&#34; leads to &#34;RUN&#34; &#43; &#34;WALK&#34;. So the output of &#34;walk after run&#34; is &#34;RUN&#34; &#43; &#34;WALK&#34;.\n\nQ: turn opposite left\nA: The output of &#34;turn opposite left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; twice leads to &#34;TURN LEFT&#34; * 2. So the output of &#34;turn opposite left&#34; is &#34;TURN LEFT&#34; * 2.\n\nQ: turn around left\nA: The output of &#34;turn around left&#34; concatenates: the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;, the output of &#34;turn left&#34;. &#34;turn left&#34; outputs &#34;TURN LEFT&#34;. So repeating the output of &#34;turn left&#34; four times leads to &#34;TURN LEFT&#34; * 4. So the output of &#34;turn around left&#34; is &#34;TURN LEFT&#34; * 4.\n\nQ: turn opposite right\nA: The output of &#34;turn opposite right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; twice leads to &#34;TURN RIGHT&#34; * 2. So the output of &#34;turn opposite right&#34; is &#34;TURN RIGHT&#34; * 2.\n\nQ: turn around right\nA: The output of &#34;turn around right&#34; concatenates: the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;, the output of &#34;turn right&#34;. &#34;turn right&#34; outputs &#34;TURN RIGHT&#34;. So repeating the output of &#34;turn right&#34; four times leads to &#34;TURN RIGHT&#34; * 4. So the output of &#34;turn around right&#34; is &#34;TURN RIGHT&#34; * 4.\n\nQ: walk opposite left\nA: The output of &#34;walk opposite left&#34; concatenates: the output of &#34;turn opposite left&#34;, the output of &#34;walk&#34;. &#34;turn opposite left&#34; outputs &#34;TURN LEFT&#34; * 2. &#34;walk&#34; outputs &#34;WALK&#34;. So concatenating the output of &#34;turn opposite left&#34; and the output of &#34;walk&#34; leads to &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;. So the output of &#34;walk opposite left&#34; is &#34;TURN LEFT&#34; * 2 &#43; &#34;WALK&#34;.\n\nQ: walk around left\nA: The output of &#34;walk around left&#34; concatenates: the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;, the output of &#34;walk left&#34;. &#34;walk left&#34; outputs &#34;TURN LEFT&#34; &#43; &#34;WALK&#34;. So repeating the output of &#34;walk around left&#34; four times leads to (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4. So the output of &#34;walk around left&#34; is (&#34;TURN LEFT&#34; &#43; &#34;WALK&#34;) * 4.\n\nQ: &#34;jump around left twice after walk opposite left thrice&#34; \nA:"
     initial-response="The output of &#34;jump around left twice after walk opposite left thrice&#34; concatenates: the output of &#34;walk opposite left thrice&#34;, the output of &#34;jump around left twice&#34;. &#34;walk opposite left thrice&#34; outputs &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3. &#34;jump around left twice&#34; outputs (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So concatenating the output of &#34;walk opposite left thrice&#34; and the output of &#34;jump around left twice&#34; leads to &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4. So the output of &#34;jump around left twice after walk opposite left thrice&#34; is &#34;TURN LEFT&#34; * 2 + &#34;WALK&#34; * 3 + (&#34;TURN LEFT&#34; + &#34;JUMP&#34;) * 4."
     max-tokens="1024" box-rows="18"
     model-temp="0.2" ></div>

### 결론

LtM은 여러 장점이 있습니다:
- 사고 사슬보다 더 개선된 정확도
- 프롬프트안의 예시들 보다 더 복잡한 문제들을 일반화하는데 장점이 있다.
- 특히 SCAN같은 문제에서 구성 일반화에 굉장한 장점이 있다. 

text-davinci-002에 표준 프롬프트로 작성한 결과는 6%정도의 SCAN문제 정확도를 가지는데 최소 최대 프롬프팅의 결과는 76%의 정확도를 가진다. 게다가 code-davinci-002 모델에서는 더 뚜렷하게 나타나는데 최소 최대 프롬프팅은 무려 99.7%의 정확도를 가진다.