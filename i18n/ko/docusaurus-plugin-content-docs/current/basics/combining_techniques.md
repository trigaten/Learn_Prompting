---
sidebar_position: 6
locale: en-us
style: chicago
---

# 🟢 지금까지 배운 기술들 융합하기

import CombinedPrompt from '@site/docs/assets/basics/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

우리가 이전 페이지들에서 봤듯이 프롬프트는 다양한 포멧을 가지고 있고 또 복잡합니다. They can include context, instructions, and multiple input-output examples. However, thus far, we have only examined separate classes of prompts. 여러 개의 다른 프롬프트 기술을 동시에 적용함으로써 더 강력한 프롬프트를 만들 수 있을 것입니다.

여러 개의 예시, 문맥, 지시 등을 포함한 프롬프트에 대한 예시입니다:

```text
Twitter is a social media platform where users can post short messages called "tweets".
Tweets can be positive or negative, and we would like to be able to classify tweets as
positive or negative. Here are some examples of positive and negative tweets. Make sure
to classify the last tweet correctly.

Q: Tweet: "What a beautiful day!"
Is this tweet positive or negative?

A: positive

Q: Tweet: "I hate this class"
Is this tweet positive or negative?

A: negative

Q: Tweet: "I love pockets on jeans"

A:
```

맥락과 예시를 추가하면 다양한 작업에서 AI의 성능을 개선할 수 있습니다. 

