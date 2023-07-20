---
sidebar_position: 80
---

# 🟢 챗봇 기초
import Chatbots from '@site/docs/assets/basics/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

지금까지 이 강좌에서는 주로 GPT-3를 예제로 사용했습니다. GPT-3는 메모리가 없는 LLM입니다. 사용자가 질문(프롬프트)을 하면 이전에 질문한 내용을 전혀 기억하지 못합니다. 이와는 대조적으로 [ChatGPT](http://chat.openai.com)와 같은 챗봇은 **대화 내역을 기억**할 수 있습니다. 이는 고객 서비스와 같은 애플리케이션이나 단순히 LLM과 대화를 나누고 싶을 때 유용할 수 있습니다!

GPT-3와 마찬가지로 챗봇은 질문에 답하고, 요약, 분석을 제공하고, 텍스트나 코드를 작성할 수 있습니다. 챗봇의 진정한 가치는 좋은 프롬프트를 사용할 때에만 접근할 수 있습니다. 이 글에서는 스타일 안내, 설명자 및 프라이밍 사용과 같이 챗봇을 더 잘 활용하는 몇 가지 기본적인 방법을 살펴봅니다.

## 프롬프트 수정하기

### 스타일 가이드

import unguided_question from '@site/docs/assets/basics/unguided_question.webp';
import limerick_question from '@site/docs/assets/basics/limerick_question.webp';

스타일 가이드는 단순히 AI에게 특정 스타일로 말하도록 요청하는 것입니다. 스타일 안내가 없는 질문을 할 때 ChatGPT는 일반적으로 한두 개의 짧은 단락을 응답으로 반환하며, 더 긴 응답이 필요한 경우에는 더 긴 단락을 반환하기도 합니다:

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}}/>
</div>

적당히 공손한 어조로 말하고 몇 가지 세부 정보를 제공하는 것이 꽤 좋습니다! 하지만 원하는 경우 프롬프트 끝에 스타일 문구를 추가하여 ChatGPT의 응답을 사용자 지정함으로써 더 나은 응답을 제공할 수 있습니다. 좀 더 대화적인 답변을 원한다면 친근하거나 격식을 차리지 않은 어조로 말하도록 요청할 수 있고, 좀 더 읽기 쉬운 형식을 원한다면 동일한 질문을 하되 글머리 기호 목록을 요청할 수 있으며, 재미있는 답변을 원한다면 제가 개인적으로 좋아하는 일련의 리메릭(limericks) 형식으로 답변을 제공하도록 요청할 수 있습니다.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={limerick_question} style={{width: "450px"}} />
</div>

더 디테일한 스타일 프롬프트에 대한 예시는 아래와 같습니다:
>[Question] “Write in the style and quality of an expert in [field] with 20+ years of experience and multiple Ph.D.'s. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.“
스타일 프롬프팅은 답변의 퀄리티를 굉장히 올려줄 것입니다.

### 디스크립터

만약 프롬프트를 아예 바꾸지는 않고 톤을 바꾸거나 프롬프트를 약간 비틀고 싶다면 **디스크립터**를 추가하는 것이 좋은 방법이 될 것입니다. 단순히 한두 단어를 프롬프트에 추가하는 것만으로도 챗봇이 여러분의 메시지를 다르게 해석할 수 있습니다. 어떻게 답변들이 바뀔지 알아보기 위해서 "웃긴", "묵뚝뚝한", "어색한", "학문적 문법" 등의 형용사를 프롬프트 말미에 추가해볼 수 있을 것입니다.

## 프라이밍(점화) 프롬프트
챗봇 대화의 구조상 첫 번째 프롬프트의 형태가 나머지 대화에 영향을 미칠 수 있으므로 구조와 세부 사항을 추가할 수 있습니다.
예를 들어 교사와 학생이 같은 대화에서 대화를 나눌 수 있도록 시스템을 설정해 보겠습니다. 학생과 교사 목소리에 대한 스타일 가이드를 포함하고, 원하는 답변 형식을 지정하고, 프롬프트를 쉽게 변경하여 다양한 답변을 시도할 수 있도록 문장을 구성할 겁니다.

    “Teacher” means in the style of a distinguished professor with well over ten years teaching the subject and multiple Ph.D.’s in the field. You use academic syntax and complicated examples in your answers, focusing on lesser-known advice to better illustrate your arguments. Your language should be sophisticated but not overly complex. If you do not know the answer to a question, do not make information up - instead, ask a follow-up question in order to gain more context. Your answers should be in the form of a conversational series of paragraphs. Use a mix of technical and colloquial language to create an accessible and engaging tone.

    “Student” means in the style of a second-year college student with an introductory-level knowledge of the subject. You explain concepts simply using real-life examples. Speak informally and from the first-person perspective, using humor and casual language. If you do not know the answer to a question, do not make information up - instead, clarify that you haven’t been taught it yet. Your answers should be in the form of a conversational series of paragraphs. Use colloquial language to create an entertaining and engaging tone.

    “Critique” means to analyze the given text and provide feedback.
    “Summarize” means to provide key details from a text.
    “Respond” means to answer a question from the given perspective.

    Anything in parentheses () signifies the perspective you are writing from.
    Anything in curly braces {} is the subject you are involved in.
    Anything in brackets [] is the action you should take.
    Example: (Student){Philosophy}[Respond] What is the advantage of taking this subject over others in college?

    If you understand and are ready to begin, respond with only “yes.”

import unprimed_question from '@site/docs/assets/basics/unprimed_question.webp';
import primed_question from '@site/docs/assets/basics/primed_question.webp';

아래는 ChatGPT에 "철학에서 가장 흥미로운 분야"에 대한 프라이밍되지 않은 질문을 해본 것입니다. 리스트를 이용했고 일반적이고 냉정하고 특별하지 않은 답변을 했습니다.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={unprimed_question} style={{width: "650px"}} />
</div>

두 번째 예시는 ChatGPT에 프라이밍된 정확한 포맷의 질문을 전달한 결과입니다. 첫 번째 답변과 몇가지의 비슷한 점이 있다는 것을 알 수 있을 것입니다. 예를 들어 다양한 분야에 대한 예시를 제공했다는 점은 비슷하지만 더 심화된 답변을 제공했습니다. 일상과 관련된 예시와 함께 일관성 있는 답변을 선호하며 리스트 포맷을 포기했습니다.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={primed_question} style={{width: "650px"}} />
</div>

프롬프트에 프라이머(점화물)를 추가하는 것은 챗봇과 상호작용하는 더 심화된 방법입니다. 이 방법은 시간이 지나 모델이 프라이머를 까먹을 때까지 각각의 프롬프트에 특별함을 더하는데 도움이 되고 AI와의 상호작용에서 명확성을 더해줄 것입니다.


## 참고

이 페이지는 인용문이 필요합니다.


By [Dastardi](https://twitter.com/lukescurrier)