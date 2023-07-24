---
sidebar_position: 4
---

# 🟢 퓨샷 프롬프팅

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"800px",height:"300px",verticalAlign:"top"}}/>
</div>


또 다른 프롬프트 전략은 *퓨샷 프롬프팅 (few shot prompting)*(@logan-iv-etal-2022-cutting)(@lake2015human)으로, 기본적으로 모델에 원하는 작업의 몇 가지 예시(보통 줄여서 shot이라고 함)를 제시합니다.

위의 예제에서 우리는 고객의 피드백이 긍정적인지 부정적인지 구분하려고 합니다. 우리는 모델에게 긍적/부정의 3가지 예제를 제공했고 그리고 아직 구분되지 않은 피드백을 보여주었습니다(`It doesnt work!:`과 함께). 모델은 먼저 `긍정`과 `부정`으로 구분되어 있는 3가지 예제를 보고 이 정보를 이용해서 주어진 새로운 예제를 `부정`으로 구분했습니다.

예제를 구조화하는 것은 상당히 중요합니다. `input: classification`을 통해서 3개의 예제를 구조화 했기 때문에 모델은 `this review is positive`와 같은 문장 전체로 답변하는 게 아니라 마지막 라인에 한 개의 단어로 답변하게 되었습니다.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Im5lZ2F0aXZlIiwicHJvbXB0IjoiR3JlYXQgcHJvZHVjdCwgMTAvMTA6IHBvc2l0aXZlXFxuRGlkbid0IHdvcmsgdmVyeSB3ZWxsOiBuZWdhdGl2ZVxcblN1cGVyIGhlbHBmdWwsIHdvcnRoIGl0OiBwb3NpdGl2ZVxcbkl0IGRvZXNudCB3b3JrIToiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
각 입력-출력 쌍은 *exemplar*라고 불립니다.
:::

## 구조에 대해 더 알아보기

퓨샷 프롬프팅의 주요 사용처는 모델에게 설명하기 어려운 **특별한 방법으로 구조화된** 출력을 요구할 때입니다. 이것을 이해하기 위해서 관련된 예제를 알아봅시다: 지역 신문 기사를 분석하여 인근 마을에서 잘 알려진 시민의 이름과 직업을 편집해야 한다고 가정합시다. 여러분은 모델에게 각 기사를 읽고 그리고 `First Last [OCCUPATION]` 포맷의 리스트를 출력하도록 해야합니다. 이를 실행하기 위해서 여러분은 모델에 몇가지 예제를 제공할 수 있을 것입니다:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IjEuIExhdXJhIFNpbW1vbnMgW0ZBUk1FUl1cbjIuIEtldmluIEFsdmFyZXogW0RBTkNFIElOU1RSVUNUT1JdXG4zLiBSYWNoZWwgTydDb25ub3IgW1ZPTFVOVEVFUl0iLCJwcm9tcHQiOiJJbiB0aGUgYnVzdGxpbmcgdG93biBvZiBFbWVyYWxkIEhpbGxzLCBhIGRpdmVyc2UgZ3JvdXAgb2YgaW5kaXZpZHVhbHMgbWFkZSB0aGVpciBtYXJrLiBTYXJhaCBNYXJ0aW5leiwgYSBkZWRpY2F0ZWQgbnVyc2UsIHdhcyBrbm93biBmb3IgaGVyIGNvbXBhc3Npb25hdGUgY2FyZSBhdCB0aGUgbG9jYWwgaG9zcGl0YWwuIERhdmlkIFRob21wc29uLCBhbiBpbm5vdmF0aXZlIHNvZnR3YXJlIGVuZ2luZWVyLCB3b3JrZWQgdGlyZWxlc3NseSBvbiBncm91bmRicmVha2luZyBwcm9qZWN0cyB0aGF0IHdvdWxkIHJldm9sdXRpb25pemUgdGhlIHRlY2ggaW5kdXN0cnkuIE1lYW53aGlsZSwgRW1pbHkgTmFrYW11cmEsIGEgdGFsZW50ZWQgYXJ0aXN0IGFuZCBtdXJhbGlzdCwgcGFpbnRlZCB2aWJyYW50IGFuZCB0aG91Z2h0LXByb3Zva2luZyBwaWVjZXMgdGhhdCBhZG9ybmVkIHRoZSB3YWxscyBvZiBidWlsZGluZ3MgYW5kIGdhbGxlcmllcyBhbGlrZS4gTGFzdGx5LCBNaWNoYWVsIE8nQ29ubmVsbCwgYW4gYW1iaXRpb3VzIGVudHJlcHJlbmV1ciwgb3BlbmVkIGEgdW5pcXVlLCBlY28tZnJpZW5kbHkgY2FmZSB0aGF0IHF1aWNrbHkgYmVjYW1lIHRoZSB0b3duJ3MgZmF2b3JpdGUgbWVldGluZyBzcG90LiBFYWNoIG9mIHRoZXNlIGluZGl2aWR1YWxzIGNvbnRyaWJ1dGVkIHRvIHRoZSByaWNoIHRhcGVzdHJ5IG9mIHRoZSBFbWVyYWxkIEhpbGxzIGNvbW11bml0eS5cbjEuIFNhcmFoIE1hcnRpbmV6IFtOVVJTRV1cbjIuIERhdmlkIFRob21wc29uIFtTT0ZUV0FSRSBFTkdJTkVFUl1cbjMuIEVtaWx5IE5ha2FtdXJhIFtBUlRJU1RdXG40LiBNaWNoYWVsIE8nQ29ubmVsbCBbRU5UUkVQUkVORVVSXVxuXG5BdCB0aGUgaGVhcnQgb2YgdGhlIHRvd24sIENoZWYgT2xpdmVyIEhhbWlsdG9uIGhhcyB0cmFuc2Zvcm1lZCB0aGUgY3VsaW5hcnkgc2NlbmUgd2l0aCBoaXMgZmFybS10by10YWJsZSByZXN0YXVyYW50LCBHcmVlbiBQbGF0ZS4gT2xpdmVyJ3MgZGVkaWNhdGlvbiB0byBzb3VyY2luZyBsb2NhbCwgb3JnYW5pYyBpbmdyZWRpZW50cyBoYXMgZWFybmVkIHRoZSBlc3RhYmxpc2htZW50IHJhdmUgcmV2aWV3cyBmcm9tIGZvb2QgY3JpdGljcyBhbmQgbG9jYWxzIGFsaWtlLlxuXG5KdXN0IGRvd24gdGhlIHN0cmVldCwgeW91J2xsIGZpbmQgdGhlIFJpdmVyc2lkZSBHcm92ZSBMaWJyYXJ5LCB3aGVyZSBoZWFkIGxpYnJhcmlhbiBFbGl6YWJldGggQ2hlbiBoYXMgd29ya2VkIGRpbGlnZW50bHkgdG8gY3JlYXRlIGEgd2VsY29taW5nIGFuZCBpbmNsdXNpdmUgc3BhY2UgZm9yIGFsbC4gSGVyIGVmZm9ydHMgdG8gZXhwYW5kIHRoZSBsaWJyYXJ5J3Mgb2ZmZXJpbmdzIGFuZCBlc3RhYmxpc2ggcmVhZGluZyBwcm9ncmFtcyBmb3IgY2hpbGRyZW4gaGF2ZSBoYWQgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gdGhlIHRvd24ncyBsaXRlcmFjeSByYXRlcy5cblxuQXMgeW91IHN0cm9sbCB0aHJvdWdoIHRoZSBjaGFybWluZyB0b3duIHNxdWFyZSwgeW91J2xsIGJlIGNhcHRpdmF0ZWQgYnkgdGhlIGJlYXV0aWZ1bCBtdXJhbHMgYWRvcm5pbmcgdGhlIHdhbGxzLiBUaGVzZSBtYXN0ZXJwaWVjZXMgYXJlIHRoZSB3b3JrIG9mIHJlbm93bmVkIGFydGlzdCwgSXNhYmVsbGEgVG9ycmVzLCB3aG9zZSB0YWxlbnQgZm9yIGNhcHR1cmluZyB0aGUgZXNzZW5jZSBvZiBSaXZlcnNpZGUgR3JvdmUgaGFzIGJyb3VnaHQgdGhlIHRvd24gdG8gbGlmZS5cblxuUml2ZXJzaWRlIEdyb3ZlJ3MgYXRobGV0aWMgYWNoaWV2ZW1lbnRzIGFyZSBhbHNvIHdvcnRoIG5vdGluZywgdGhhbmtzIHRvIGZvcm1lciBPbHltcGljIHN3aW1tZXItdHVybmVkLWNvYWNoLCBNYXJjdXMgSmVua2lucy4gTWFyY3VzIGhhcyB1c2VkIGhpcyBleHBlcmllbmNlIGFuZCBwYXNzaW9uIHRvIHRyYWluIHRoZSB0b3duJ3MgeW91dGgsIGxlYWRpbmcgdGhlIFJpdmVyc2lkZSBHcm92ZSBTd2ltIFRlYW0gdG8gc2V2ZXJhbCByZWdpb25hbCBjaGFtcGlvbnNoaXBzLlxuMS4gT2xpdmVyIEhhbWlsdG9uIFtDSEVGXVxuMi4gRWxpemFiZXRoIENoZW4gW0xJQlJBUklBTl1cbjMuIElzYWJlbGxhIFRvcnJlcyBbQVJUSVNUXVxuNC4gTWFyY3VzIEplbmtpbnMgW0NPQUNIXVxuXG5PYWsgVmFsbGV5LCBhIGNoYXJtaW5nIHNtYWxsIHRvd24sIGlzIGhvbWUgdG8gYSByZW1hcmthYmxlIHRyaW8gb2YgaW5kaXZpZHVhbHMgd2hvc2Ugc2tpbGxzIGFuZCBkZWRpY2F0aW9uIGhhdmUgbGVmdCBhIGxhc3RpbmcgaW1wYWN0IG9uIHRoZSBjb21tdW5pdHkuXG5cbkF0IHRoZSB0b3duJ3MgYnVzdGxpbmcgZmFybWVyJ3MgbWFya2V0LCB5b3UnbGwgZmluZCBMYXVyYSBTaW1tb25zLCBhIHBhc3Npb25hdGUgb3JnYW5pYyBmYXJtZXIga25vd24gZm9yIGhlciBkZWxpY2lvdXMgYW5kIHN1c3RhaW5hYmx5IGdyb3duIHByb2R1Y2UuIEhlciBkZWRpY2F0aW9uIHRvIHByb21vdGluZyBoZWFsdGh5IGVhdGluZyBoYXMgaW5zcGlyZWQgdGhlIHRvd24gdG8gZW1icmFjZSBhIG1vcmUgZWNvLWNvbnNjaW91cyBsaWZlc3R5bGUuXG5cbkluIE9hayBWYWxsZXkncyBjb21tdW5pdHkgY2VudGVyLCBLZXZpbiBBbHZhcmV6LCBhIHNraWxsZWQgZGFuY2UgaW5zdHJ1Y3RvciwgaGFzIGJyb3VnaHQgdGhlIGpveSBvZiBtb3ZlbWVudCB0byBwZW9wbGUgb2YgYWxsIGFnZXMuIEhpcyBpbmNsdXNpdmUgZGFuY2UgY2xhc3NlcyBoYXZlIGZvc3RlcmVkIGEgc2Vuc2Ugb2YgdW5pdHkgYW5kIHNlbGYtZXhwcmVzc2lvbiBhbW9uZyByZXNpZGVudHMsIGVucmljaGluZyB0aGUgbG9jYWwgYXJ0cyBzY2VuZS5cblxuTGFzdGx5LCBSYWNoZWwgTydDb25ub3IsIGEgdGlyZWxlc3Mgdm9sdW50ZWVyLCBkZWRpY2F0ZXMgaGVyIHRpbWUgdG8gdmFyaW91cyBjaGFyaXRhYmxlIGluaXRpYXRpdmVzLiBIZXIgY29tbWl0bWVudCB0byBpbXByb3ZpbmcgdGhlIGxpdmVzIG9mIG90aGVycyBoYXMgYmVlbiBpbnN0cnVtZW50YWwgaW4gY3JlYXRpbmcgYSBzdHJvbmcgc2Vuc2Ugb2YgY29tbXVuaXR5IHdpdGhpbiBPYWsgVmFsbGV5LlxuXG5UaHJvdWdoIHRoZWlyIHVuaXF1ZSB0YWxlbnRzIGFuZCB1bndhdmVyaW5nIGRlZGljYXRpb24sIExhdXJhLCBLZXZpbiwgYW5kIFJhY2hlbCBoYXZlIHdvdmVuIHRoZW1zZWx2ZXMgaW50byB0aGUgZmFicmljIG9mIE9hayBWYWxsZXksIGhlbHBpbmcgdG8gY3JlYXRlIGEgdmlicmFudCBhbmQgdGhyaXZpbmcgc21hbGwgdG93bi4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


모델에게 몇가지 정확한 출력 포멧을 제공하는 것으로, 새로운 글에서도 정확한 출력을 제공할 수 있을 것입니다.

:::note
그냥 명령 프롬프트를 통해서도 같은 출력을 만들 수 있지만 퓨샷 프롬프트는 더 *일관성*있는 출력을 제공할 것입니다.

:::

## 다양한 퓨샷 프롬프트

"샷"(shot)은 "예제"와 같은 뜻입니다. 퓨샷 프롬프팅 외에 두 가지 종류의 샷 프롬프팅이 존재합니다. 이것을 너무 어렵게 생각하지 마십지오! 이 종류들 사이에 다른 것이라고는 예제를 제공하는 개수밖에 없습니다.

종류:
- 제로 샷(0 shot) 프롬프팅: 모델에게 예제를 제공하지 않음
- 원 샷(1 shot) 프롬프팅: 모델에게 한 개의 예제를 제공함
- 퓨샷 프롬프팅: 2개 이상의 모델을 제공함

### 제로 샷(0-shot) 프롬프팅

제로 샷 프롬프팅은 가장 기본적인 프롬프팅입니다. 예시 없는 프롬프트를 모델에 제공해서 결과를 생성합니다. 이와 같이, 지금까지 봤던 모든 명령이나 역할 프롬프트는 제로 샷 프롬프트라고 볼 수 있습니다. 추가적으로 제로 샷 프롬프트의 예시는 다음과 같습니다:

```text
Add 2+2:
```

모델에게 어떤 예제도 제공하지 않았기 때문에 제로 샷 프롬프트입니다.

### 원 샷(1-shot) 프롬프트

원 샷(1-shot) 프롬프트는 모델에게 1개의 예시만 제공합니다. `Add 2+2:`을 물어보고 싶을 떄:

```text
Add 3+3: 6
Add 2+2:
```

우리는 모델에 하나의 완성된 예시(`Add 3+3: 6`)를 제공습니다. 그렇기 떄문에 원 샷(1-shot) 프롬프트입니다.

### 퓨샷 프롬프팅

퓨샷 프롬프팅은 2개 이상의 예제를 제공합니다. 위의 섹션의 모든 프롬프트는 퓨샷 프롬프트였습니다. 위 예제의 퓨샷 프롬프트 버전은 다음과 같습니다:

```text
Add 3+3: 6
Add 5+5: 10
Add 2+2:
```

모델에 두 개의 완성된 예제(`Add 3+3: 6` and `Add 5+5: 10`)를 제공했습니다. 보통 더 많은 예시가 모델에게 제공되면 더 나은 결과가 출력됩니다. 그래서 보통 퓨샷 프롬프팅이 제로 샷 프롬프팅이나 1샷 프롬프팅보다 선호됩니다.

## 결론

퓨샷 프롬프팅(Few-shot prompting)은 모델에게 정확하고 구조화된 출력을 생성하게 하는 아주 강력한 기술입니다.

