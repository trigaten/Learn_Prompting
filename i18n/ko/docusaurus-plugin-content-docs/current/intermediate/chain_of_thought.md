---
sidebar_position: 3
locale: en-us
style: chicago
---

# 🟢 사고 사슬 프롬프팅

사고 사슬 (CoT) 프롬프팅 (@wei2022chain)은 최근에 개발된 방법입니다.
LLM에게 이유에 대해서 설명하도록 만드는 방법입니다. 
아래의 사진에서 (@wei2022chain) 퓨샷 표준 프롬프트(왼쪽)와 사고 사슬 프롬프팅(오른쪽)을 비교해 볼 수 있습니다.


import CoTExample from '@site/docs/assets/chain_of_thought_example.png';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
그냥 프롬프팅 vs CoT (Wei et al.)
</div>

COT의 메인 아이디어는 LLM에게 답이 나오는 과정에 대해서 설명한 %%표본|표본%%을 보여줌으로써 LLM이 프롬프트에 답할 때 똑같이 그에 대한 과정을 설명하도록 만드는 것입니다.
이유에 대한 설명은 종종 답을 더 정확하게 만듭니다.


## 예시

몇가지 예시가 있습니다. 먼저 GPT-3 (davinci-003)가 몇가지 간단한 단어 문제를 틀린 것을 볼 수 있습니다.
두 번째에서는 GPT-3(davinci-003)이 COT를 통해서 같은 문제를 맞은 것을 볼 수 있습니다.

#### Incorrect

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Which is a faster way to get to work?\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride." initial-response="Option 1 is a faster way to get to work." max-tokens="256" box-rows="7" model-temp="0" top-p="0"></div>

#### Correct

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Which is a faster way to get home?\nOption 1: Take an 10 minutes bus, then an 40 minute bus, and finally a 10 minute train.\nOption 2: Take a 90 minutes train, then a 45 minute bike ride, and finally a 10 minute bus.\nOption 1 will take 10+40+10 = 60 minutes.\nOption 2 will take 90+45+10=145 minutes.\nSince Option 1 takes 60 minutes and Option 2 takes 145 minutes, Option 1 is faster.\n\nWhich is a faster way to get to work?\nOption 1: Take a 1000 minute bus, then a half hour train, and finally a 10 minute bike ride.\nOption 2: Take an 800 minute bus, then an hour train, and finally a 30 minute bike ride." initial-response="Option 1 will take 1000+30+10 = 1040 minutes.
Option 2 will take 800+60+30 = 890 minutes.
Since Option 2 takes 890 minutes and Option 1 takes 1040 minutes, Option 2 is faster." max-tokens="256" box-rows="18" model-temp="0" top-p="0"></div>

## 결과

COT는 산술적, 상식적, 상징적 추론 과제(@wei2022chain)와 같은 일들에 더 효율적으로 나은 결과를 만들어 냈다.
특히 PaLM 540B(@chowdhery2022palm)는 GSM8K(@cobbe2021training)에서 57%의 정확도 향상을 보였다.

import PromptedPaLM from '@site/docs/assets/prompted_palm.png';

<div style={{textAlign: 'center'}}>
  <img src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparison of models on the GSM8K benchmark (Wei et al.)
</div>

## 제한

Wei 등에 따르면, "COT는 ~100B 파라미터 모델에서만 성능 향상을 보인다.". 더 작은 모델은 비논리적인 사고 사슬을 작성했고 이는 표준 프롬프트로 작성할 때 보다 더 부정확했다.
모델들은 보통 모델의 크기에 비례하는 방식으로 COT프롬프트에 따른 성능 향상을 보였다.

## 참고

이 챕터를 작성하는 과정에서 어떤 언어 모델도 다치지 않았답니다😊.