---
sidebar_position: 0
---

# 🟢 소개

import Techniques from '@site/docs/assets/basics/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

This chapter introduces simple prompting techniques as well as terminology. In order to understand prompting/prompt engineering, you first need to understand some *very* basic AI concepts. If you already know about the below topics, feel free to skip ahead to the [next article](https://learnprompting.org/docs/basics/prompting).

## AI란 무엇인가?

우리의 목적에 따르면 AI는 사람처럼 "생각"하도록 만든 "똑똑한" 알고리즘 한 분야입니다. 이 알고리즘들은 **에세이**, **수학 문제 해결**, **예술품** 만들기가 가능합니다. 최근 이 분야의 발전으로 AI들은 설득력있는 **판매 독려 이메일**, **뉴스 기사** 쓰기 그리고 심지어 **[예술 경진대회](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/) 우승** 정도의 발전을 이루었습니다.

AI는 최근에 **저널리즘**, **헬스케어** 그리고 **교육**을 포함한 많은 산업에 혁신을 일으키고 있습니다. 지금은 아니더라도 곧 여러분의 일자리와 교실에 배포되는 AI를 만나볼 수 있을 것입니다. AI가 엄청나게 유용함에도 불구하고, 어떤 것을 해야할 지는 여전히 인간에게 달려있습니다. 종종 AI들은 아주 똑똑한 5살 애기처럼 보입니다. 많은 것들을 할 수 있지만 잘하기 위해서는 조심스러운 설명이 필요합니다.

인공지능을 제대로 지휘할 수 있다는 것은 매우 강력한 기술입니다. 그렇다면, 어떻게 그들과 의사소통을 할 수 있을까? 인공지능은 영어(및 다른 언어)를 이해할 수 있습니다. 그렇기 때문에 우리는 보통 우리가 하고 싶은 일을 그냥 설명할 겁니다. 예를 들어, 우리는 인공지능에게 `AI의 이점에 대한 에세이를 써라` 그러면 다음과 같은 말이 나올 것입니다: [^2]:

```
최근 몇 년 동안, 인공지능(AI)은 기술계 사이에서 화제가 되었다. 우리 삶의 많은 측면에 혁명을 일으킬 수 있는 잠재력으로, AI는 기술이 계속 발전함에 따라 점점 더 관련성이 높아지고 있다. 인공지능은 의료 및 교통 분야의 응용에서부터 교육 및 제조 분야에서의 사용에 이르기까지 다양한 방식으로 사회에 이익을 줄 수 있는 엄청난 잠재력을 이미 보여주었다.

인공지능의 가장 분명한 이점은 일상적인 작업을 자동화하는 능력이다. AI 시스템은 데이터 분석, 고객 서비스, 심지어 상품 생산과 같은 대규모 작업을 자동화하는 데 사용될 수 있다. 이것은 더 많은 인간의 지능과 독창성을 필요로 하는 복잡하고 창의적인 작업에 집중할 수 있도록 인간의 노동력을 자유롭게 해준다. 인공지능은 또한 많은 양의 데이터를 분석하고 인간이 걸리는 시간의 몇 분의 1로 의사 결정을 내리는 데 사용될 수 있다. 이것은 AI가 주식 시장의 패턴을 감지하고 그렇지 않으면 주목받지 못할 통찰력을 제공할 수 있는 금융과 같은 산업에서 유익할 수 있다.

AI는 또한 효율성과 정확성을 향상시키는 데 사용될 수 있는 예측과 통찰력을 생성하는 데 사용될 수 있다. 예를 들어, AI는 고객 동향과 선호도를 예측하는 데 사용되어 기업이 더 나은 의사 결정을 내리고 수익을 높일 수 있다. AI는 또한 금융, 의료, 제조와 같은 다양한 산업에서 잠재적인 위험과 기회를 식별하는 데 사용될 수 있다. 이를 통해 기업은 정보에 입각한 의사 결정을 내리고 비용이 많이 드는 실수의 위험을 줄일 수 있습니다.

마지막으로, 인공지능은 세상에 대한 우리의 이해를 향상시키는 데 사용될 수 있다. AI는 대규모 데이터 세트를 분석하고 우리 주변의 세상을 더 잘 이해하는 데 사용할 수 있는 통찰력을 생성하는 데 사용될 수 있다. 이것은 우리가 기후 변화의 영향을 더 잘 이해하고, 질병에 대한 새로운 치료법을 개발하고, 심지어 지진과 홍수와 같은 사건을 예측하는 데도 사용될 수 있다.

전반적으로, AI는 우리 삶의 많은 측면에 혁명을 일으킬 수 있는 잠재력을 가지고 있다. 일상적인 작업 자동화에서 통찰력과 예측 생성에 이르기까지 AI는 효율성, 정확성 및 세계에 대한 우리의 이해를 향상시키는 데 사용될 수 있다. 기술이 계속 발전함에 따라 AI는 점점 더 관련성이 높아지고 사회에 이익을 줄 수 있는 잠재력은 더욱 커질 것이다.
```

## 왜 우리가 신경써야 하는가?

AI는 여러분이 수많은 시간을 들여서 하는 일을 **즉시** 자동화하곤 합니다. 위에서 언급한 다양한 예시들처럼 여러분 또한 여러분이 하고 있는 약간의 반복적인 작업들을 맡길 생각을 하고 있을 수도 있습니다. 이메일 쓰기, 레포트 작성하기 또는 코드 작성하기 등이 될 수 있을 것입니다. 만약 여러분이 AI에게 그 작업을 설명할 수만 있다면, AI는 아마 여러분 대신에 전부 해버리거나 아니라면 적어도 시작점은 제공할 것입니다.

## 어떻게 시작할까?

Read the rest of this chapter, then check out other chapters that interest you. In particular, the [applied prompting](https://learnprompting.org/docs/applied_prompting/overview) section may be of interest if you would like to see how professionals use AI to automate their work. [OpenAI 놀이터](https://beta.openai.com/playground), [다른 IDE들](https://learnprompting.org/docs/tooling/IDEs/intro) 혹은 간단하게 [Dyno](https://trydyno.com) 등을 이용해서 실험을 해볼 수도 있을 것입니다.

다음 기사를 읽기 전에, 프롬프트 엔지니어링에 대한 기술적 배경이 필요하지 않다는 점을 알아두시면 좋을 것 같습니다. 대부분은 시도와 실패 그리고 실행으로부터 배울 것입니다.

### Embeds

This course offers an interactive learning experience. You can experiment with exercises discussed in the course using [embeds](https://embed.learnprompting.org/) that are placed throughout the site.

Here is an **image** of what an embed looks like:

import dyno from '@site/docs/assets/basics/dyno_example.webp';
import key from '@site/docs/assets/basics/API_key.webp';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}} />
</div>

You should be able to see an embed that looks exactly like this image right below this paragraph. If you can't, you may need to enable JavaScript or use a different browser.

<hr />
Embed here:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr />

Assuming that you can see it, click on the **Generate** button. If this is your first time using it (or you are in a new browser/have cleared cookies), it will ask you to input an [OpenAI API key](https://platform.openai.com/account/api-keys). You can get a free key by clicking [this link](https://platform.openai.com/account/api-keys) and signing up for an OpenAI account. This key allows you to use OpenAI's AIs to generate text in the embeds.

:::note
Although OpenAI provides free credits, you will eventually have to pay to use their AI. Fortunately, it is [relatively cheap](https://openai.com/pricing)!
:::

When you navigate to the [OpenAI API key](https://platform.openai.com/account/api-keys) page, click the **Create new secret key** button. It will pop up a modal that contains a string of text like this:

<div style={{textAlign: 'center'}}>
  <img src={key} style={{width: "750px"}} />
</div>

Put this key into the embed and hit **Save**. You should now be able to use the embeds throughout this site.

Now you have all of the information that you need to get started. Happy Learning!


[^1]: Technically, they are not "thinking" like humans, but this is a simple way to explain it.
[^2]: AI (GPT-3 davinci-003)가 실제로 작성한 것입니다.
