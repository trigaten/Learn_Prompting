---
sidebar_position: 30
---

# 🟢 공부 도우미

LLM을 이용하는 방법 중에는 공부 도구로써의 방법이 있습니다. 특히, 테스트에서 여러분을 헷갈리게 하는 단어를 설명하는데 상당히 유용합니다.

## 단어 설명

최근에 나는 선인장에 관한 책을 읽고 있었습니다. 그리고 아래의 문장을 보게 되었습니다:

```text
Because of adaptations to xeric conditions and the presence of **less derived woods** in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically.
```


저는 **less derived woods**가 무엇을 의미하는 지 몰랐고 구글은 그냥 연구 논문들만 알려줄 뿐이었습니다. 저는 ChatGPT를 통해서 무슨 뜻인지 알아보기로 결정했습니다. 그래서 책에 있는 간단한 문장과 질문으로 이루어진 아래의 프롬프트를 넣기로 했습니다.

```text
Because of adaptations to xeric conditions and the presence of less derived woods in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically.

What do less derived woods mean?

// highlight-start
In this context, "less derived woods" refers to the ancestral or primitive form of wood found in the early evolution of plants. These woods lack specialized structures and features that evolved later in more derived or advanced plants. In the Pereskioideae subfamily of the Cactaceae family, the wood is less derived compared to other subfamilies and is more similar to the wood found in non-cactus plants. The less derived wood in Pereskioideae is thought to be an adaptation to the more humid and less xeric environments in which these plants grow compared to other cacti.
//highlight-end
```

모델은 빠르게 제 질문에 대해서 답변했고 저는 다시 책을 읽을 수 있게 되었습니다.

## 스스로 질문하기

LLM을 공부 도구로써 사용하는 또다른 방법은 스스로 질문하는 것입니다. 만약 계산법 시험이 가까워 오고 있다면 여러분은 이렇게 질문하면 됩니다:

```text
Generate 5 calculus I quiz questions for me:

// highlight-start
1. What is the derivative of y = x3?
2. Evaluate the indefinite integral of x3 + 5x2 + 7x + 4.
3. What is the product rule for derivatives?
4. Find the equation of the line tangent to y = x2 at the point (4, 16).
5. What is the second derivative of y = x4?
//highlight-end
```

만약 좀더 특수한 주제를 공부하고 있따면 여러분은 모델에게 여러분의 필기내용과 같은 추가적인 정보를 제공할 필요가 있습니다.

```text
3/20/2020 2:30 PM

Marketing Class Notes

- Discussed 4 P's of marketing: Product, Price, Place, Promotion
- Difference between B2C and B2B: B2C is direct consumer market, B2B is business to business
- Different types of market research: Quantitative and Qualitative, such as surveys and focus groups
- Pricing Strategies: Skimming, Penetration, Competition, and Value
- Segmentation: segmenting customer base by age, income, etc.
- 4 types of segmentation: Demographic, Geographic, Psychographic, and Behavioral
- Discussed different promotional tools: Advertising, Personal Selling, Public Relations, Direct Marketing, and Sales Promotions

Generate 5 marketing quiz questions for me based on my notes:

// highlight-start
1. What are the 4 P's of marketing?
2. What is the difference between B2C and B2B?
3. What are two types of market research?
4. What are 4 types of segmentation?
5. Name 5 promotional tools.
//highlight-end
```

## 결론

LLM을 공부에 활용하는 다른 방법들도 있을 것입니다. Duolingo 와 Quizlet같은 많은 교육 기업들이 그들의 제품에 LLM을 적용하는 방법을 개발하고 있습니다.