---
sidebar_position: 0
---

# 🟢 データの構造化

LLM のシンプルかつ面白いユースケースの1つは、データを表に整形することです。おそらくあなたは、多数のニュース記事やビジネスレポートがあり、重要なポイントをまとめた表を作成して、それをスプレッドシートやデータベースに入力したいと思っているかもしれません。ChatGPT のようなチャットボットはこれを手助けしてくれます。

以下のレポートから情報を抽出するには、`Generate a table containing this information:` (次の情報を含む表を生成してください:)と付け加えます。

(原文)

```text
In a recent business report presentation, the CEO of Zana Corp. highlighted their remarkable growth in the past fiscal year. She shared that the company experienced a 15% increase in revenue, reaching $50 million, with a 12% profit margin ($6 million in net profit). The report also showcased a 20% growth in their customer base, now totaling 100,000 customers. Additionally, the company's operating expenses went up by 10%, amounting to $10 million, while the employee headcount increased by 25%, resulting in a current workforce of 500 employees. 

Generate a table containing this information:
```

(日本語訳)

```
Zana Corp.のCEOは、最近のビジネスレポートのプレゼンテーションで、過去の会計年度の顕著な成長を強調しました。彼女は、会社の収益が15％増加し、5,000万ドルに達し、12％の利益率（純利益は600万ドル）に達したことを共有しました。また、このレポートは、顧客ベースの20％の成長を紹介し、現在は合計で100,000人の顧客を獲得しています。さらに、同社の営業費用は10％増加し、1,000万ドルに達しましたが、従業員の人員は25％増加し、現在の従業員は500人の従業員になりました。

次の情報を含む表を生成してください:
```

ChatGPTは、以下のような表を出力します。

(原文)

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

(日本語訳)

| メトリック | 値 |
|-------|------|
| 売上高 | $50 million |
| 利益率 | 12% |
| 純利益 | $6 million |
| 顧客基盤 | 100,000 |
| 運営費 | $10 million |
| 従業員数 | 500 |
| 売上高増加率 | 15% |
| 顧客基盤増加率 | 20% |
| 運営費増加率 | 10% |
| 従業員数増加率 | 25% |


Excel/Sheets や文書やパワーポイントに簡単に貼り付けられる形になりました！
