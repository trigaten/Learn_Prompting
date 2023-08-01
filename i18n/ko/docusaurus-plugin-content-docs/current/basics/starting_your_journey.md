---
sidebar_position: 1000
---

# 🟢 여행을 시작합시다!


import Steps from '@site/docs/assets/basics/steps.svg';


<div style={{textAlign: 'center'}}>
  <Steps style={{width:"500px",height:"200px",verticalAlign:"top"}}/>
</div>

프롬프트 엔지니어링의 기초에 대해서 배워봤습니다. 여러분에 맞게 프롬프트 엔지니어링을 시작하실 준비가 되셨을 겁니다. 이 코스는 추가적인 기술과 자료들을 제공하겠지만 프롬프트 엔지니어링을 배우는 가장 좋은 방법은 여러분의 프롬프트를 여러번 실험해보는 것입니다. 이 페이지는 프롬프트 엔지니어링에서 발생할 수 있는 임의의 문제를 풀어내는 방법에 대해서 설명할 것입니다.

ChatGPT를 통해서 인상깊고, 상호작용하는 이야기를 생성하고 싶다고 가정해봅시다.

## Step 1: 연구

첫 번째로 여러분이 원하는 프롬프트에 대해서 연구해보는 것입니다. 구글링을 포함해서 아래의 자료들은 도움이 될 것입니다:

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (레딧하고 비슷합니다)
- [Learn Prompting Discord](https://discord.gg/learn-prompting) (그리고 비슷한 디스코드로 [OpenAI Discord](https://discord.gg/openai))

[이것](https://prompts.chat/#act-as-a-text-based-adventure-game) by [Heroj04](https://github.com/Heroj04)을 찾아본다면 좋은 시작점을 찾을 수 있을 것입니다:
> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. I want you to only reply with the game output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets {like this}. my first command is wake up


## Step 2: 경험

이제 우리는 ChatGPT에 프롬프트를 넣어보고 무슨 일이 일어나는 지 볼 것입니다.

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}}/>
</div>

우리는 스토리를 만드는 것을 볼 수 있습니다, 하지만 Csharp(프로그래밍 언어) 코드 블록 안에서만 작성하는 것을 볼 수 있습니다. 우리가 원하는 것은 이게 아니기 떄문에 프롬프트를 조금 수정해보겠습니다:

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. My first command is wake up


**ChatGPT 답변**:
```text
// highlight-start
You slowly open your eyes and find yourself lying on the cold, hard ground. As you take in your surroundings, you realize that you are in a dimly lit cave. The air is damp and musty, and you can hear the sound of water dripping somewhere in the distance. Your head is throbbing and you feel disoriented. You need to figure out where you are and how to get out of here.
// highlight-end
```

좋습니다 이제 텍스트로 스토리를 출력합니다. 하지만 우리의 프롬프트는 디테일을 빼먹은 상태입니다. 다시 프롬프트에 더 디테일을 추가해봅시다:

> I want you to act as a text based adventure game. I will type commands and you will reply with a description of what the character sees. Do not write explanations. Use flowery language and descriptive words. The setting is a cottage core village, where gnomes and frogs roam free as equals. Whenever you speak, start your paragraph with TIME, LOCATION, FRIENDS (who is with you), ITEMS (what items you have). My first command is wake up.

**ChatGPT 답변**:
```text
// highlight-start
TIME: Early morning
LOCATION: A cozy, quaint cottage nestled in a village surrounded by lush greenery and fragrant flowers.
FRIENDS: You are alone in your bedroom, snuggled under a cozy quilt.
ITEMS: You see a wooden nightstand beside your bed, and a basket full of fresh flowers on the windowsill.

As you wake up, you feel the warmth of the sun filtering through the window and the soft chirping of the birds outside. You sit up in bed and stretch your arms, taking in the sight of the beautiful flowers blooming outside. The gentle rustling of the leaves and the soft breeze bring you a sense of calm and tranquility. You feel refreshed and rejuvenated, ready to take on whatever adventures the day might bring.
// highlight-end
```

이제 ChatGPT로 한가한 귀농 라이프를 즐길 수 있게 되었습니다 🌸


## Step 3: 피드백과 반복

이제 친구, 사장님 등에게 보여주고 피드백을 받아봅시다. 만약에 그들이 좋아한다면 좋은 거고 아니라면 다시 그들이 좋아할 때까지 반복하면 됩니다. 여러분은 커뮤니티에서 피드백을 받아볼 수도 있을 것입니다. 이 과정은 절대 완전히 끝나지 않습니다. 여러분은 항상 이 과정을 반복해야 할 것입니다.

## 결론

"여러분"이 원하는대로 프롬프트 엔지니어링을 하시길 바랍니다. 저는 항상 스트래치로부터 제 프롬프트를 작성합니다. 최고의 프롬프트를 작성하는 황금률은 없습니다;
시도와 에러는 항상 가장 좋은 학습방법입니다. 좋은 학습하시고 앞으로의 과정에서도 행운이 따르길!

:::note
이 문서의 권장 사항은 대화형 스토리를 작성하는 것뿐만 아니라 모든 즉각적인 엔지니어링 문제에 적용됩니다!
:::


## 참고

- 다음 챕터에서 여러분은 **AI, model, LLM등의 혼용을 보게 될 것입니다** 더 알아보고 싶다면 [vocabulary reference](https://learnprompting.org/docs/vocabulary)을 클릭하세요