---
sidebar_position: 3
---

# 🟢 역할 프롬프팅

다른 프롬프팅 기술로는 AI에게 하나의 역할을 부여하는 것이 있습니다. 예를 들어,
"너는 의사야" 또는 "너는 판사야"로 프롬프트를 시작하고 AI에게 의학적인 또는 법적인 질문을 할 수 있을 것입니다.
여기 예제가 있습니다:

```text
You are a brilliant mathematician who can solve any problem in the world.
Attempt to solve the following problem:

What is 100*100/400*56?

// highlight-start
The answer is 1400.
// highlight-end
```

AI (GPT-3 davinci-003)의 답변은 초록색으로 강조되어 있습니다:

이것은 정답입니다 하지만 AI가 단순히 `What is 100*100/400*56?`라는 프롬프트를 받았다면 `280`이라는 틀린 답을 내놓았을 것입니다.
*ChatGPT*가 질문에 다른 방식으로 잘못 대답할 수도 있다는 것을 알아두시길 바랍니다.

만약 AI에게 역할을 부여할 때 우리는 어떤 맥락을 제공합니다.
이 맥락은 AI가 문제를 더 잘 이해하는 데 도움이 됩니다.
질문에 대한 더 나은 이해를 바탕으로 AI는 종종 더 좋은 답변을 합니다.

## 참고

이 기술은 현대의 AI들(예를 들어 GPT-3 davinci-003)에는 더이상 효과적이지 않습니다.
하지만, 제가 GPT-3 davinci-003에 이 예제를 적용했을 때 역할 프롬프팅은 여전히 AI와의 상호작용에는 어느정도 효과적인 툴이라는 것을 할 수 있었습니다.

## 예시

[Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) 깃허브 레포지토리에서 몇 가지 흥미로운 프롬프트들을 찾을 수 있었습니다.
이것들은 *ChatGPT*를 위해서 만들어져 있기는 하지만 다른 AI들에도 잘 작동할 것입니다.
그리고 다른 여러분만의 프롬프트를 만드는 데 참고할 수도 있을 것입니다.

> ### 어원학자처럼
> I want you to act as an etymologist. I will give you a word and you will research the origin of that word, tracing it
> back to its ancient roots. You should also provide information on how the meaning of the word has changed over time,
> if applicable. My first request is "I want to trace the origins of the word 'pizza'".

> ### 미친놈처럼
> I want you to act as a lunatic. The lunatic's sentences are meaningless. The words used by lunatic are completely
> arbitrary. The lunatic does not make logical sentences in any way. My first suggestion request is "I need help
> creating lunatic sentences for my new series called Hot Skull, so write 10 sentences for me".

---

🚧 이 페이지는 인용문이 필요합니다.
