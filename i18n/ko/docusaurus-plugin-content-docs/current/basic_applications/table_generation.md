---
sidebar_position: 0
---

# 🟢 데이터 구조화

LLM들을 사용하는 다양한 방법 중 하나는 데이터를 테이블로 정리하는 것입니다. 여러분은 많은 비즈니스 리포트나 뉴스 기사들을 가지고 있고 이것들을 요약해서 스프레드시트나 데이터베이스에 넣고 싶을 것입니다. ChatGPT같은 챗봇들이 도와줄 수 있을 것입니다.

우리는 `Generate a table containing this information:`를 추가함으로써 아래 리포트의 정보를 추출 할 수 있을 것입니다.

```text
In a recent business report presentation, the CEO of Zana Corp. highlighted their remarkable growth in the past fiscal year. She shared that the company experienced a 15% increase in revenue, reaching $50 million, with a 12% profit margin ($6 million in net profit). The report also showcased a 20% growth in their customer base, now totaling 100,000 customers. Additionally, the company's operating expenses went up by 10%, amounting to $10 million, while the employee headcount increased by 25%, resulting in a current workforce of 500 employees.

Generate a table containing this information:
```

ChatGPT는 아마도 아래와 같은 테이블을 출력할 것입니다:

| Metric | Value |
|-------|------|
| Revenue | $50 million |
| Profit Margin | 12% |
| Net Profit | $6 million |
| Customer Base | 100,000 |
| Operating Expenses | $10 million |
| Employee Headcount | 500 |
| Revenue Increase | 15% |
| Customer Increase | 20% |
| Operating Expenses Increase | 10% |
| Employee Headcount Increase | 25% |

이것들을 엑셀이나 파워포인트 등의 스프레드시트에 복사하고 붙여넣을 수 있을 것입니다.