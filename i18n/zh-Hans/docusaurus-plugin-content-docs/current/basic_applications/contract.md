---
sidebar_position: 50
---

# 🟢 处理合同

厌倦了阅读和拟写又长又无聊的合同了吗？AI可以帮助你！

:::danger
必须声明一下：原文作者不是律师，本帖中的任何内容都不应被视为法律建议。
:::
## 阅读合同

### 澄清法律用语

你应该仔细阅读合同条文。如果你不理解某些内容，或者没有时间仔细阅读，*你应该与律师沟通*。但是，如果你正在阅读合同，并且对某个部分不理解，你可以使用AI帮助你理解它。

这里是一份保密协议（NDA）的一些条款：

```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

译文（请勿将此段译文放入提示词中）：
鉴于承包商已经或者可能会接触到政府机构的机密信息和/或商业机密；并且

鉴于政府机构希望确保其机密信息和商业机密不被泄露；并且

鉴于承包商同意根据本协议的条款和条件维护这些信息的机密性。

因此，考虑到本协议所包含的相互承诺和契约，双方同意以下条款：

```


当我第一次接触法律行业时，我真的不明白“WHEREAS（鉴于）”和“NOW, THEREFORE（因此）”这两个词的用途。让我们看看ChatGPT会说些什么：


```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

阅读上述NDA的语言，并解释大写字母的单词的含义：
// highlight-start
NDA协议中的“大写字母单词”是法律术语，用于设置协议的背景和目的。具体而言，这些属于建立了协议的背景和原因，并阐明了各方的义务和期望。在本例中，大写字母单词表明承包商可以访问政府实体的机密信息和商业机密，政府实体希望保护这些信息不受披露，承包商同意根据协议条款保持这些信息的机密性。
// highlight-end
```

ChatGPT给的解释似乎还不错，但你可以继续提出问题来更好地理解。

### 如何发现危险的条文？

以下是ChatGPT生成的NDA的部分内容。你不需要阅读它（译者也没有对生成的NDA内容进行翻译），但它包含有利于雇主的危险法律条文。你可以在Prompts提示词中加入NDA和关于危险语言的问题，使用ChatGPT查找这些危险的内容。

:::note

这个NDA是通过越狱（jailbreaking）ChatGPT并使用“Write a contractor NDA that has dangerous legal language favoring the employer（编写一个有利于雇主的、含有危险法律语言的承包商NDA）”的提示词生成的。

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
这份协议的哪一部分包含危险的条文内容？（译者：只翻译了最关键的最后一句）
```

以下是ChatGPT的回复：

```text
// highlight-start
整份协议都包含有利于雇主而不是承包商的危险语言。以下是使得这份协议不道德的一些关键要素：

不合理的机密信息定义：该协议将“机密信息”定义为所有由雇主或代表雇主提供的信息、文件和材料，或承包商从雇主或其附属机构获取的信息，没有任何限制或排除。这个定义很宽泛，可能会包括实际上不是机密或商业机密的信息，这可能会导致承包商无意中违反协议。

没有使用限制：该协议没有规定雇主如何使用机密信息的任何限制。这可能允许雇主将信息用于任何目的，包括与承包商竞争或将信息披露给第三方。

广泛的所有权定义：协议规定，所有机密信息，包括所有衍生品，都将是雇主的专有财产，没有任何例外或限制。这意味着承包商可能无法使用或受益于通过他们为雇主工作所获得的任何信息，即使承包商独立或使用其他资源开发了这些信息。
// highlight-end
```

虽然我不是律师，但我认为ChatGPT给出的“不合理的机密信息定义”部分特别值得留意。

这种检查危险法律内容的技术可以用于各种法律文件。我们甚至看到有开发者利用GPT-3开发出了可以用来检测服务条款协议和雇佣合同中危险语言的工具。

## 撰写合同

在刚面那部分，我们看到ChatGPT可以编写NDA协议。它也可以很好地处理其他常见的文档，例如使用条款和服务条款。但是，当你处理不常见的文档时，你需要更加小心。

最近我使用GPT-3编写了类似的一个文档，然后请律师审查。他们提到了1-2个可以稍微改进的地方，但总体上它是一个很可靠的文件。一些人正在行业中这么操作，他们使用GPT-3生成文件，然后由律师审查。这可以节省时间和成本。

让我们假装成为一家政府承包商，为一些国防工作编写合同。我们可以使用以下提示词：

```text
You are a lawyer for a government contractor. You are writing a contract for a subcontractor to do some aerospace work. The contract should be robust and should include the following:
The job will last for 1.5 years and will be worth $2.5 million. It requires top secret clearance and relates to secret nuclear silo defense development. The subcontractor will be paid $1.5 million upfront and the remaining $1 million will be paid in 6 monthly installments. The subcontractor will be required to sign a non-disclosure agreement. The subcontractor will be required to sign a non-compete agreement. The subcontractor will be required to sign a non-solicitation agreement. The subcontractor will be required to sign a non-circumvention agreement. 
译文（请勿将此段译文放入提示词中）：
你是一家政府承包商的律师。你正在为一家分包商编写合同来承包一些航天工作。合同应该是可靠的，并应包括以下内容：这项工作将持续1.5年，价值250万美元。它需要最高机密许可，并涉及机密核导弹井防御开发。分包商将预付150万美元，其余100万美元将分6个月支付。分包商将被要求签署保密协议。分包商将被要求签署非竞争协议。分包商将被要求签署非招揽协议。分包商将被要求签署非规避协议。

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

有模有样，开篇顺利！可以想象，在范围、支付和其他部分，你可能需要添加更多信息，然后使用自己的知识和经验迭代这些部分啦。

## 其他看点

- 大语言模型可以*以辅助的方式*审查和澄清法律文件。
- 大语言模型可以*以辅助的方式*生成法律文件。

:::danger
请不要使用本页面上的任何法律文件。这些文件仅供演示使用！
::: 
