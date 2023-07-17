---
sidebar_position: 3
locale: en-us
style: chicago
---

# 🟢 사고 사슬 프롬프팅

사고 사슬 (CoT) 프롬프팅 (@wei2022chain)은 최근에 개발된 방법입니다.
LLM에게 이유에 대해서 설명하도록 만드는 방법입니다.
아래의 사진에서 (@wei2022chain) 퓨샷 표준 프롬프트(왼쪽)와 사고 사슬 프롬프팅(오른쪽)을 비교해 볼 수 있습니다.


import CoTExample from '@site/docs/assets/basics/chain_of_thought_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
표준 프롬프팅 vs CoT (Wei et al.)
</div>

CoT의 메인 아이디어는 LLM에게 답이 나오는 과정에 대해서 설명한 %%표본|표본%%을 보여줌으로써 LLM이 프롬프트에 답할 때 똑같이 그에 대한 과정을 설명하도록 만드는 것입니다.
이유에 대한 설명은 종종 답을 더 정확하게 만듭니다.


## 예시

몇가지 예시가 있습니다. 먼저 GPT-3 (davinci-003)가 몇가지 간단한 단어 문제를 틀린 것을 볼 수 있습니다.
두 번째에서는 GPT-3(davinci-003)이 CoT를 통해서 같은 문제를 맞은 것을 볼 수 있습니다.

#### Incorrect

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yay4iLCJwcm9tcHQiOiJXaGljaCBpcyBhIGZhc3RlciB3YXkgdG8gZ2V0IHRvIHdvcms%2FXG5PcHRpb24gMTogVGFrZSBhIDEwMDAgbWludXRlIGJ1cywgdGhlbiBhIGhhbGYgaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYmlrZSByaWRlLlxuT3B0aW9uIDI6IFRha2UgYW4gODAwIG1pbnV0ZSBidXMsIHRoZW4gYW4gaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAzMCBtaW51dGUgYmlrZSByaWRlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### Correct

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIHdpbGwgdGFrZSAxMDAwKzMwKzEwID0gMTA0MCBtaW51dGVzLlxuT3B0aW9uIDIgd2lsbCB0YWtlIDgwMCs2MCszMCA9IDg5MCBtaW51dGVzLlxuU2luY2UgT3B0aW9uIDIgdGFrZXMgODkwIG1pbnV0ZXMgYW5kIE9wdGlvbiAxIHRha2VzIDEwNDAgbWludXRlcywgT3B0aW9uIDIgaXMgZmFzdGVyLiIsInByb21wdCI6IldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgaG9tZT9cbk9wdGlvbiAxOiBUYWtlIGFuIDEwIG1pbnV0ZXMgYnVzLCB0aGVuIGFuIDQwIG1pbnV0ZSBidXMsIGFuZCBmaW5hbGx5IGEgMTAgbWludXRlIHRyYWluLlxuT3B0aW9uIDI6IFRha2UgYSA5MCBtaW51dGVzIHRyYWluLCB0aGVuIGEgNDUgbWludXRlIGJpa2UgcmlkZSwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYnVzLlxuT3B0aW9uIDEgd2lsbCB0YWtlIDEwKzQwKzEwID0gNjAgbWludXRlcy5cbk9wdGlvbiAyIHdpbGwgdGFrZSA5MCs0NSsxMD0xNDUgbWludXRlcy5cblNpbmNlIE9wdGlvbiAxIHRha2VzIDYwIG1pbnV0ZXMgYW5kIE9wdGlvbiAyIHRha2VzIDE0NSBtaW51dGVzLCBPcHRpb24gMSBpcyBmYXN0ZXIuXG5cbldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yaz9cbk9wdGlvbiAxOiBUYWtlIGEgMTAwMCBtaW51dGUgYnVzLCB0aGVuIGEgaGFsZiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDEwIG1pbnV0ZSBiaWtlIHJpZGUuXG5PcHRpb24gMjogVGFrZSBhbiA4MDAgbWludXRlIGJ1cywgdGhlbiBhbiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDMwIG1pbnV0ZSBiaWtlIHJpZGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## 결과

CoT는 산술적, 상식적, 상징적 추론 과제(@wei2022chain)와 같은 일들에 더 효율적으로 나은 결과를 만들어 냈다.
특히 PaLM 540B(@chowdhery2022palm)는 GSM8K(@cobbe2021training)에서 57%의 정확도 향상을 보였다.

import PromptedPaLM from '@site/docs/assets/intermediate/prompted_palm.webp';

<div style={{textAlign: 'center'}}>
  <img src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparison of models on the GSM8K benchmark (Wei et al.)
</div>

## 제한

중요한 점은, Wei 등에 따르면, "CoT는 ∼100억 개의 파라미터를 가진 모델과 함께 사용할 때만 성능 향상을 가져옵니다". 더 작은 모델은 비논리적인 사고 사슬을 작성했고 이는 표준 프롬프트로 작성할 때 보다 더 부정확했습니다.
모델들은 보통 모델의 크기에 비례하는 방식으로 CoT프롬프트에 따른 성능 향상을 보였습니다.

## 참고

이 챕터를 작성하는 과정에서 어떤 언어 모델도 다치지 않았답니다😊.