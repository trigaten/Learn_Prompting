---
sidebar_position: 0
---

# 🟢 Structuring Data

One simple and exciting use case for LLMs is organizing data into tables. Perhaps you have a bunch of news articles or business reports, and you would like all of the important points to be summarized in a table that you can then put into a spreadsheet or database. Chat bots like ChatGPT can help you do this.

We can extract information from the following report by appending `Generate a table containing this information:` to it.

```text
In a recent business report presentation, the CEO of Zana Corp. highlighted their remarkable growth in the past fiscal year. She shared that the company experienced a 15% increase in revenue, reaching $50 million, with a 12% profit margin ($6 million in net profit). The report also showcased a 20% growth in their customer base, now totaling 100,000 customers. Additionally, the company's operating expenses went up by 10%, amounting to $10 million, while the employee headcount increased by 25%, resulting in a current workforce of 500 employees. 

Generate a table containing this information:
```

ChatGPT will output a table like the following:

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

You can then copy and paste it into a spreadsheet like Excel/Sheets or even documents and powerpoints.