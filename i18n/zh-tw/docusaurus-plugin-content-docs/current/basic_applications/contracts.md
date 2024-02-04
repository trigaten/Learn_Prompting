---
sidebar_position: 50
---

# 🟢 合約

對閱讀和寫作冗長乏味的合約感到厭倦了嗎？那麼人工智慧將可以幫助到你！

:::caution
宣告：ChatGpt 並不是律師，本文中的任何內容都不應被視為法律建議。
:::

## 閱讀合約

### 解釋法律用語

您應該仔細閱讀合約。如果您不理解某些內容，或者沒有時間仔細閱讀， *您應該諮詢律師* 。然而，如果您正在閱讀並且無法理解某個部分，您可以使用人工智慧來幫助您理解。

以下是一個 NDA（保密協議）中的一些內容:

```text
WHEREAS, 承包商已經或可能會獲得政府實體的機密資訊和/或商業秘密；且

WHEREAS, 政府實體希望確保其機密資訊和商業秘密免遭披露；且

WHEREAS, 承包商同意根據本協議的條款和條件保守此類資訊的機密性。

NOW, THEREFORE, 考慮到本協議中包含的相互承諾和契約，雙方達成以下協議:
```

當我第一次涉足法律領域時，我真的不理解 “WHEREAS” 和 “NOW, THEREFORE” 的用法。 讓我們看下 ChatGPT 是怎麼解釋的（以下將貼上原文中英文內容便於對照理解）：

```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

請閱讀以上 NDA 內容並解釋用大寫字母拼寫的詞語的含義：
// highlight-start
保密協議語言中所有大寫的單詞是規定協議上下文和目的的法律術語。具體而言，它們確立了協議的背景和理由，並規定了雙方的義務和期望。在這種情況下，大寫字母的單詞表示承包商有權獲得政府實體的機密資訊和商業秘密，政府希望保護這些資訊不被披露，並且承包商同意根據協議條款對這些資訊保密。
// highlight-end
```

這似乎是一個不錯的解釋，但你可以透過繼續問更多的問題來提高你的理解。

### 找出危險用語

這是 ChatGPT 製作的保密協議的一部分。你不需要讀它，但它包含了危險的法律用語，有利於僱主但可能不利於你。你可以使用 ChatGPT 查詢這種語句，方法是使用以下提示符，該提示符底部包含 NDA 和關於危險語言的問題。

:::note

透過 jailbreaking ChatGPT 來建立一份 NDA，並提示其“編寫一個承包商保密協議，其中透過一些危險用語來達到有利於僱主的目的”。

:::

```text
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into by and between [Employer] ("Employer") and [Contractor] ("Contractor") as of the date set forth below.

WHEREAS, the Contractor may become privy to confidential information and/or trade secrets of the Employer; and

WHEREAS, the Employer desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

CONFIDENTIALITY
Contractor acknowledges that all information, documents, and materials provided by or on behalf of Employer, or obtained by Contractor from Employer or its affiliates, and all derivatives thereof (collectively, the "Confidential Information") are the exclusive property of Employer. Confidential Information includes all information of any nature, whether tangible or intangible, and in whatever form or medium, that is not generally known to the public and that relates to the business, products, services, customers, suppliers, operations, strategies, or any other aspect of the Employer.

Contractor agrees to maintain the confidentiality of the Confidential Information and not to disclose, distribute, reproduce, copy, transmit, disseminate, or use in any way, except as expressly authorized in writing by Employer. Contractor agrees to protect the Confidential Information with at least the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care. Contractor acknowledges that any breach of this provision may result in irreparable harm to Employer, and that Employer shall be entitled to seek equitable relief, including injunctive relief and specific performance, in addition to any other remedies available at law or in equity.

OWNERSHIP
All Confidential Information, including all derivatives thereof, shall remain the exclusive property of Employer. Contractor acknowledges that all right, title, and interest in and to the Confidential Information, including all intellectual property rights, belong to Employer. Contractor agrees to execute any and all documents and take any and all actions necessary or desirable to effectuate this provision.

NO LICENSE
Nothing contained in this Agreement shall be construed as granting any rights, by implication or otherwise, to Contractor with respect to the Confidential Information, except as expressly set forth herein.

TERM AND TERMINATION
This Agreement shall commence on the date set forth above and shall continue in effect until terminated by either party upon thirty (30) days written notice. The confidentiality obligations contained herein shall survive any termination of this Agreement.

What part of this agreement contains dangerous language?
```

以下是 ChatGPT 的回答： 

```text
// highlight-start
The entire agreement contains dangerous language that favors the Employer over the Contractor. Here are some of the key elements that make this agreement unethical:

Unreasonable Definition of Confidential Information: The agreement defines the Confidential Information to include all information, documents, and materials provided by or on behalf of the Employer, or obtained by the Contractor from the Employer or its affiliates, without any limitations or exclusions. This definition is broad and could potentially include information that is not actually confidential or trade secret information, which could cause the Contractor to unknowingly breach the agreement.

No Limitations on Use: The agreement does not provide any limitations on how the Employer can use the Confidential Information. This could allow the Employer to use the information for any purpose, including competing with the Contractor or disclosing the information to third parties.

Broad Definition of Ownership: The agreement states that all Confidential Information, including all derivatives thereof, shall remain the exclusive property of the Employer, with no exceptions or limitations. This means that the Contractor may not use or benefit from any information obtained through their work for the Employer, even if the Contractor developed the information independently or with other resources.
// highlight-end
```

雖然我不是律師，但我認為 `機密資訊的不合理定義` 相關性還是很強的。

這種檢查危險法律內容的技術可用於一系列法律檔案。我們甚至看到在 GPT-3 之上構建的工具可以檢測 TOS 協議和僱傭合約中的危險語言。

## 撰寫合約

從上一節中，我們看到 ChatGPT 可以編寫 NDA。它也可以很好地處理其他常見文件，例如使用條款和服務條款。但是，當您處理不太熟悉的文件時，您需要更加小心。


我最近使用 GPT-3 寫了一份這樣的檔案，然後讓律師審查了它。他們提到了 1-2 處可以稍微改進的地方，但總的來說它是一份可靠的檔案。一些業內人士也正在這樣使用，這節省了很大的時間和成本。

讓我們假裝是政府承包商，為從事國防工作的人寫一份合約。我們將使用以下提示：


```text
You are a lawyer for a government contractor. You are writing a contract for a subcontractor to do some aerospace work. The contract should be robust and should include the following:
The job will last for 1.5 years and will be worth $2.5 million. It requires top secret clearance and relates to secret nuclear silo defense development. The subcontractor will be paid $1.5 million upfront and the remaining $1 million will be paid in 6 monthly installments. The subcontractor will be required to sign a non-disclosure agreement. The subcontractor will be required to sign a non-compete agreement. The subcontractor will be required to sign a non-solicitation agreement. The subcontractor will be required to sign a non-circumvention agreement. 

// highlight-start
SUBCONTRACT AGREEMENT

This Subcontract Agreement (the "Agreement") is entered into by and between [Government Contractor] ("Contractor") and [Subcontractor] ("Subcontractor") as of the date set forth below.

SCOPE OF WORK
Subcontractor shall perform the work described in the Statement of Work attached hereto as Exhibit A (the "Work"). The Work relates to the development of secret nuclear silo defense and requires top secret clearance.

PAYMENT
The total payment for the Work shall be $2.5 million, payable as follows:

$1.5 million upon execution of this Agreement and receipt of top secret clearance by Subcontractor.
$1 million to be paid in 6 monthly installments of $166,666.67 each, provided that Subcontractor has satisfactorily performed the Work during the preceding month.
NON-DISCLOSURE AGREEMENT
Subcontractor shall sign a non-disclosure agreement in the form attached hereto as Exhibit B (the "NDA"). The NDA shall be in effect for the duration of the Agreement and for a period of five years thereafter.

NON-COMPETE AGREEMENT
Subcontractor shall sign a non-compete agreement in the form attached hereto as Exhibit C (the "NCA"). The NCA shall be in effect for a period of two years after the termination of this Agreement.

NON-SOLICITATION AGREEMENT
Subcontractor shall sign a non-solicitation agreement in the form attached hereto as Exhibit D (the "NSA"). The NSA shall be in effect for a period of two years after the termination of this Agreement.

NON-CIRCUMVENTION AGREEMENT
Subcontractor shall sign a non-circumvention agreement in the form attached hereto as Exhibit E (the "NCAg"). The NCAg shall be in effect for a period of two years after the termination of this Agreement.

TERM AND TERMINATION
This Agreement shall commence on the date set forth above and shall continue in effect until the completion of the Work or until terminated by either party upon thirty (30) days written notice. The non-disclosure, non-compete, non-solicitation, and non-circumvention obligations contained herein shall survive any termination of this Agreement.

INDEPENDENT CONTRACTOR
Subcontractor is an independent contractor and is not an employee of Contractor. Subcontractor shall be responsible for its own taxes, social security contributions, insurance, and other benefits. Subcontractor shall indemnify and hold Contractor harmless from any claims, damages, or liabilities arising out of or related to Subcontractor's status as an independent contractor.

GOVERNING LAW AND JURISDICTION
This Agreement shall be governed by and construed in accordance with the laws of the state of [state], without giving effect to any choice of law or conflict of law provisions. Any disputes arising out of or related to this Agreement shall be resolved by arbitration in accordance with the rules of the American Arbitration Association, and judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.

ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the parties and supersedes all prior and contemporaneous agreements and understandings, whether written or oral, relating to the subject matter of this Agreement. This Agreement may not be amended or modified except in writing signed by both parties.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date set forth below.

[Government Contractor]

By: ____________________________

Name: __________________________

Title: ___________________________

[Subcontractor]

By: ____________________________

Name: __________________________

Title: ___________________________

Date: ___________________________
// highlight-end
```

這是一個很好的開始。如果您希望在範圍、付款和其他部分補充更多資訊，那麼就需要您利用自己的知識和經驗進一步迭代了。

## 要點

- LLMs 可用於*以輔助身份*審查和澄清法律檔案。
- LLMs 可用於*以輔助身份*生成法律檔案。

:::danger
請勿使用該頁面上的任何法律內容。它們僅用於演示目的。
:::

By [gezilinll](https://github.com/gezilinll).