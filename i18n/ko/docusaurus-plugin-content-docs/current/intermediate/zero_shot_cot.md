---
sidebar_position: 4
---

# 🟢 제로 샷(Zero Shot) 사고 사슬 프롬프팅


제로 샷 사고 사슬 프롬프팅(제로 샷 CoT)는 아주 간단한 제로 샷 프롬프팅 기술이면서 CoT 프롬프팅(@wei2022chain)의 후속 기술이다. ""**Let's think step
by step.**""을 질문의 마지막에 넣게 되면 LLM은 질문에 대한 사고 사슬을 생성하게 되고 이 사고 사슬을 이용해서 더 정확한 답변을 추출해낼 수 있다.

import ZSImage from '@site/docs/assets/intermediate/zero_shot.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
제로 샷(Zero Shot) CoT (Kojima et al.)
</div>

기술적으로 제로 샷 CoT 과정은 두 가지의 개별적인 프롬프트/답변으로 이루어져있다.
아래의 이미지를 보면 왼쪽 위의 상자에서는 사고 사슬을 생성하고 오른쪽 상자에서는 첫 번째 프롬프트에서 나온 답변을 이용해서 답변을 추출한다.
그래서 두 번째 프롬프트는 하나의 _자기 강화_ 프롬프트가 된다.

import ZSProcessImage from '@site/docs/assets/intermediate/zero_shot_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
전체 제로 샷(Zero Shot) CoT 과정 (Kojima et al.)
</div>

## 예시

여기 추론에 대한 몇가지 예시가 있습니다.
첫 번째 데모는 GPT-3(davinci-003)이 간단한 수학 문제를 푸는데 실패하는 것을 보여주고
두 번째 데모는 제로 샷 CoT 프롬프트를 이요해서 성공적으로 문제를 푸는 것을 보여줍니다.
여러분의 OpenAI API 키를 넣어서 예시들을 실행시켜보세요.
제로 샷 CoT가 기존의 CoT 프롬프트보다 훨씬 더 간단하다는 것을 알 수 있을 것입니다.

#### 실패

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### 성공

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 결과

제로 샷 CoT(Zero-shot-CoT) 또한 산수, 상식 및 상징적 추론 작업에서 더 나은 결과를 내는데 효과적입니다.
하지만 당연하게도 기존의 CoT보다는 덜 효과적입니다. 제로 샷 CoT는 CoT 프롬프트의 퓨샷 예제를 얻기가 어려울 때 가장 효과적인 대안이 될 것입니다.

## 선택지 줄이기

Kojima 등, 많은 제로 샷 CoT(Zero-shot-CoT) 프롬프트 연구에 따르면
"Let’s solve this problem by splitting it into steps." or "Let’s think about this logically."등 다양한 어구들이 있지만
"Let's think step by step"가 가장 효과적이였습니다.



## 참고

추출 단계는 종종 작업에 따라 달라야져야 하므로 제로 샷 CoT(Zero-Shot-CoT)을 처음에 보이는 것보다 더 특수하게 사용할 수 있습니다.

일례로 저는 생성 작업에서 답변의 길이를 늘리는 데에서 제로 샷 CoT가 효과적이라는 것을 발견했습니다.
예를 들어서, 답변의 길이를 늘리기 위해서
단순히 `Write a story about a frog and a mushroom who become friends.`보다는 `Let's think step by step.`를 말미에 추가하는 것을 고려해볼 필요가 있습니다.
