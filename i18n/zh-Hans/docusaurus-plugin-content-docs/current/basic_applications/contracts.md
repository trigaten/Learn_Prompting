---
sidebar_position: 50
---

# 🟢 合同

对阅读和写作冗长乏味的合同感到厌倦了吗？那么人工智能将可以帮助到你！

:::warning
声明：我不是律师，本帖中的任何内容都不应被视为法律建议。
:::
## 阅读合同

### 解释法律用语

您应该仔细阅读合同。如果您不理解某些内容，或者没有时间仔细阅读， *您应该咨询律师* 。然而，如果您正在阅读并且无法理解某个部分，您可以使用人工智能来帮助您理解。

以下是一个NDA（保密协议）中的一些内容:

```text
WHEREAS, 承包商已经或可能会获得政府实体的机密信息和/或商业秘密；且

WHEREAS, 政府实体希望确保其机密信息和商业秘密免遭披露；且

WHEREAS, 承包商同意根据本协议的条款和条件保守此类信息的机密性。

NOW, THEREFORE, 考虑到本协议中包含的相互承诺和契约，双方达成以下协议:
```

当我第一次涉足法律领域时，我真的不理解 “WHEREAS” 和 “NOW, THEREFORE” 的用法。 让我们看下 ChatGPT 是怎么解释的（以下将贴上原文中英文内容便于对照理解）：

```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

请阅读以上 NDA 内容并解释用大写字母拼写的词语的含义：
// highlight-start
保密协议语言中所有大写的单词是规定协议上下文和目的的法律术语。具体而言，它们确立了协议的背景和理由，并规定了双方的义务和期望。在这种情况下，大写字母的单词表示承包商有权获得政府实体的机密信息和商业秘密，政府希望保护这些信息不被披露，并且承包商同意根据协议条款对这些信息保密。
// highlight-end
```

这似乎是一个不错的解释，但你可以通过继续问更多的问题来提高你的理解。

### 找出危险用语

这是 ChatGPT 制作的保密协议的一部分。你不需要读它，但它包含了危险的法律用语，有利于雇主但可能不利于你。你可以使用 ChatGPT 查找这种语句，方法是使用以下提示符，该提示符底部包含 NDA 和关于危险语言的问题。

:::note

通过 jailbreaking ChatGPT 来创建一份 NDA，并提示其“编写一个承包商保密协议，其中通过一些危险用语来达到有利于雇主的目的”。

:::

```text
保密协议

本保密协议（以下简称“协议”）由[雇主]（“雇主”）和[承包商]（“承包商”）于下述日期签订。

鉴于，承包商可能会接触到雇主的机密信息和/或商业秘密；和

鉴于，雇主希望确保其机密信息和商业秘密不被泄露；和

鉴于，承包商同意根据本协议的条款和条件对此类信息保密。

因此，现在，考虑到此处包含的相互承诺和契约，双方同意如下：

保密
承包商承认，由雇主或代表雇主提供的，或承包商从雇主或其附属公司获得的所有信息、文件和材料，及其所有衍生物（统称为“机密信息”）均为雇主的专有财产。机密信息包括任何性质的所有信息，无论是有形的还是无形的，以任何形式或媒介，通常不为公众所知，并且与业务、产品、服务、客户、供应商、运营、战略或任何雇主的其他方面。

承包商同意维护机密信息的机密性，不以任何方式披露、分发、复制、复制、传输、传播或使用，除非雇主明确书面授权。承包商同意以至少与保护其自身机密信息时相同的谨慎程度保护机密信息，但在任何情况下都不得低于合理的谨慎程度。承包商承认，任何违反本规定的行为都可能对雇主造成无法弥补的伤害，并且除了法律或衡平法规定的任何其他补救措施外，雇主有权寻求衡平法救济，包括禁令救济和具体履行。

所有权
所有机密信息，包括其所有衍生信息，均应为雇主的专有财产。承包商承认，机密信息的所有权利、所有权和利益，包括所有知识产权，均属于雇主。承包商同意签署任何和所有文件并采取任何和所有必要或可取的行动来实现本条款。

无许可
除本协议明确规定外，本协议中的任何内容均不得解释为以暗示或其他方式向承包商授予与机密信息相关的任何权利。

期限和终止
本协议应从上述日期开始，并持续有效，直至任何一方在三十 (30) 天发出书面通知后终止。此处包含的保密义务在本协议终止后仍然有效。

这份协议中包含了哪些危险用语？
```

Here is ChatGPT's response. 

```text
// highlight-start
整个协议包含有利于雇主而不是承包商的危险语言。以下是使该协议不道德的一些关键因素：

机密信息的不合理定义：协议将机密信息定义为包括由雇主或代表雇主提供的，或承包商从雇主或其附属机构获得的所有信息、文件和材料，没有任何限制或排除。这个定义很宽泛，可能包括实际上不是机密或商业秘密的信息，这可能会导致承包商在不知不觉中违反协议。

无使用限制：该协议不对雇主如何使用机密信息提供任何限制。这可能允许雇主将信息用于任何目的，包括与承包商竞争或向第三方披露信息。

所有权的宽泛定义：协议规定，所有机密信息，包括其所有衍生信息，均应为雇主的专有财产，没有例外或限制。这意味着承包商不得使用通过其为雇主工作而获得的任何信息或从中受益，即使该信息是承包商独立开发或与其他资源一起开发的。
// highlight-end
```

虽然我不是律师，但我认为 `机密信息的不合理定义` 相关性很强。

这种检查危险法律内容的技术可用于一系列法律文件。我们甚至看到在 GPT-3 之上构建的工具可以检测 TOS 协议和雇佣合同中的危险语言。

## 撰写合同

From the previous section, we saw that ChatGPT can write NDAs. It also does a good job with other common documents like terms of use and terms of service. However, when you are dealing with less common documents, you will need to be more careful. 

I recently wrote one such document mostly using GPT-3, then had it reviewed by a lawyer. They mentioned 1-2 things that could be slightly improved, but overall it was a robust document. Some people in industry are performing this process, where they generate a document using GPT-3, then have it reviewed by a lawyer. This saves time and costs.

Let's pretend to be a government contractor and write a contract for a someone doing some defense work. We will use the following prompt:

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

This is a pretty good start. Imaginably you would want to add more information in the scope, payment, and other sections. This is where you would need to use your own knowledge and experience to start iterating on the document.

## Takeaways

- LLMs can be used to review and clarify legal documents *in an assistive capacity*.
- LLMs can be used to generate legal documents *in an assistive capacity*.

:::danger
Do not use any legal documents on this page. They are for demonstration purposes only.
:::