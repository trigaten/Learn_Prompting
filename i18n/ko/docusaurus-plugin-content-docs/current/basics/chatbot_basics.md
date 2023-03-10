---
sidebar_position: 80
---

# 🟢 챗봇 기초

프롬프팅을 효율적으로 하기 위한 가장 흔한 방법은 대중에게 공개된 수많은 챗봇들(예를 들면 [ChatGPT](http://chat.openai.com))을 상대로 대화해보는 것입니다. ChatGPT가 GPT-3와는 다르다는 것을 참고하시길 바랍니다. 가장 큰 차이점으로는 ChatGPT가 여러분의 대화 기록을 기억하고 있다는 점일 것입니다. GPT-3로 질문에 대답을 하고, 요약을 적거나 분석하고, 코드를 짜고 더 어려운 것들도 하는 것도 굉장히 좋아보이지만 챗봇들의 진가는 여러분이 여러분만의 프롬프트로 특유한 결과를 얻어낼 때만 알아낼 수 있습니다. 이 글에서 우리는 스타일 가이드, 디스크립터, 프라이밍 등의 챗봇을 더 잘 사용하는 기본적인 방법들에 대해서 탐구해볼 것입니다.

## 프롬프트 수정하기

### 스타일 가이드

import unguided_question from '@site/docs/assets/unguided_question.png';
import limerick_question from '@site/docs/assets/limerick_question.png';

스타일 가이드는 AI가 특정한 스타일로 대답할 수 있도록 질문하는 방법입니다. 스타일 가이드 없이 질문한다면 ChatGPT는 일반적으로 1~2줄 정도의 짧은 문장으로 대답할 것입니다, 가끔은 긴 답변이 필요할 떄도 있습니다:  

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}} />
</div>

적당히 형식적인 톤과 몇가지 세부 사항은 도움이 될 겁니다. 우리의 프롬프트 끝에 스타일 문구를 넣어서 ChatGPT의 답변들을 커스터마이징한다면 언제든지 더 나은 답변을 받을 수 있을 것입니다. 만약 대화같은 답변을 받고 싶다면 우리는 더 친근하고 비형식적인 톤으로 질문을 하면 됩니다. 만약 읽기 쉬운 포맷의 답변을 원한다면 우리는 같은 질문에 글머리 기호를 추가해서 질문하면 됩니다. 또한 유머러스한 답변을 달라고 질문을 하게 되면 즐거운 답변들을 받을 수 있을 것입니다.(개인적으로 가장 좋아하는 방법입니다)

<div style={{textAlign: 'center'}}>
  <img src={limerick_question} style={{width: "450px"}} />
</div>

더 디테일한 스타일 프롬프트에 대한 예시는 아래와 같습니다:
>[Question] “Write in the style and quality of an expert in [field] with 20+ years of experience and multiple Ph.D.'s. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.“ 
스타일 프롬프팅은 답변의 퀄리티를 굉장히 올려줄 것입니다.

### 디스크립터

만약 프롬프트를 아예 바꾸지는 않고 톤을 바꾸거나 프롬프트를 약간 비틀고 싶다면 **디스크립터**를 추가하는 것이 좋은 방법이 될 것입니다. 단순히 한두 단어를 프롬프트에 추가하는 것만으로도 챗봇이 여러분의 메시지를 다르게 해석할 수 있습니다. 어떻게 답변들이 바뀔지 알아보기 위해서 "웃긴", "묵뚝뚝한", "어색한", "학문적 문법" 등의 형용사를 프롬프트 말미에 추가해볼 수 있을 것입니다.  

## 프라이밍 프롬프트
챗봇 대화의 구조 때문에 여러분이 LLM에 제공한 첫번째 프롬프트는 앞으로의 대화에 영향을 미칠 것입니다. 예를 들면 추가적인 구조나 특이점을 추가하는 것 등이 허용될 것입니다.

예를 들어, 선생님과 학생의 대화를 얻을 수 있도록 시스템을 설정해 봅시다. 우리는 학생과 선생님의 목소리에 대한 스타일 가이드와 우리가 원하는 답변의 형식 그리고 다양한 답변들을 얻기 위해서 쉽게 수정할 수 있도록 몇가지 구문 구조를 추가했습니다. 

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
    
import unprimed_question from '@site/docs/assets/unprimed_question.png';
import primed_question from '@site/docs/assets/primed_question.png';

아래는 ChatGPT에 "철학에서 가장 흥미로운 분야"에 대한 프라이밍되지 않은 질문을 해본 것입니다. 리스트를 이용했고 일반적이고 냉정하고 특별하지 않은 답변을 했습니다.

<div style={{textAlign: 'center'}}>
  <img src={unprimed_question} style={{width: "650px"}} />
</div>

두 번째 예시는 ChatGPT에 프라이밍된 정확한 포맷의 질문을 전달한 결과입니다. 첫번쨰 답변과 몇가지의 비슷한 점이 있다는 것을 알 수 있을 것입니다. 예를 들어 다양한 분야에 대한 예시를 제공했다는 점은 비슷하지만 더 심화된 답변을 제공했습니다. 일상과 관련된 예시와 함께 일관성 있는 답변을 선호하며 리스트 포맷을 포기했습니다. 

<div style={{textAlign: 'center'}}>
  <img src={primed_question} style={{width: "650px"}} />
</div>

프롬프트에 프라이머를 추가하는 것은 챗봇과 상호작용하는 더 심화된 방법입니다. 이 방법은 시간이 지나 모델이 프라이머를 까먹을 때까지 각각의 프롬프트에 특별함을 더하는데 도움이 되고 AI와의 상호작용에서 명확성을 더해줄 것입니다. 


## 참고

이 페이지는 인용문이 필요합니다.


By [Dastardi](https://twitter.com/lukescurrier)