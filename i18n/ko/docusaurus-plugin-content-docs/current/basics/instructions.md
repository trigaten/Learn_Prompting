---
sidebar_position: 2
---
# 🟢 지시 하기

지시하기는 가장 쉬운 프롬프트 방법 중 하나입니다. 우리는 이전 섹션에서 이미 간단한 지시들을 봤습니다(`What is 1,000,000 * 9,000? Make sure to put the right amount of zeros, even if there are many:`). 하지만 현대의 AI들은 더 복잡한 지시도 따를 수 있습니다.

아래는 Dyno interactive embed 예제입니다. 만약 예제가 안 보이신다면 브라우저에서 Javascript를 허용으로 바꿔야 합니다.
상호작용 가능한 데모이기 때문에 수정이 가능하고 `Generate`를 누르면 AI를 다시 실행시길 수 있습니다.

#### 예제 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRvZSwgSm9obiIsInByb21wdCI6IkEgdXNlciBoYXMgaW5wdXQgdGhlaXIgZmlyc3QgYW5kIGxhc3QgbmFtZSBpbnRvIGEgZm9ybS4gV2UgZG9uJ3Qga25vdyBpbiB3aGljaCBvcmRlciB0aGVpciBmaXJzdC9sYXN0IG5hbWUgaXMsIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIGluIHRoZSBmb3JtYXQgJ0xhc3QsIEZpcnN0Jy4gQ29udmVydCB0aGUgZm9sbG93aW5nOlxuXG5qb2huIGRvZSIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>AI는 이 문제를 쉽게 해결할 수 있습니다. 지시 프롬프팅을 사용해서 다른 쉬운 문제나 더 어려운 문제를 해결 할 수 있을 것입니다.

#### 예제 2

더 복잡한 문제가 여기 있습니다[^1]:

```
Read the following sales email. Remove any personally identifiable information (PII),
and replace it with the appropriate placeholder. For example, replace the name "John Doe"
with "[NAME]".

Hi John,

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

Jimmy Smith

Phone: 410-805-2345
Email: jimmysmith@cheapdealz.com
```

[AI의 답변](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003)입니다:

```text
// highlight-start
Hi [NAME],

I'm writing to you because I noticed you recently purchased a new car. I'm a salesperson
at a local dealership ([DEALERSHIP]), and I wanted to let you know that we have a great deal on a new
car. If you're interested, please let me know.

Thanks,

[SALESPERSON]

Phone: [PHONE NUMBER]
Email: [EMAIL ADDRESS]
// highlight-end
```

모델이 지시로부터 어떻게 추론하는 지를 보는 것은 매우 멋진 일입니다. 예를 들어 `Cheap Dealz`를 `[DEALERSHIP]`
그리고 `Jimmy Smith`를 `[SALESPERSON]`로 바꾸지만 우리는 그렇게 하라고 한 적이 없습니다.


[^1]: AI가 PII를 없앨 수 있도록 허용되는 것은 예견된 일입니다. 하지만 많은 실수를 하게 될 것이기 때문에 더 엄청난 주의가 필요해질 것입니다.

## 참고

🚧 이 페이지는 인용문이 필요합니다 🚧