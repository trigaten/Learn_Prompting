---
sidebar_position: 50
---

# 🟢 Contracts

Tired of reading and writing long, boring contracts? AI can help!

:::warning
Obligatory: I am not a lawyer and nothing in this post should be taken as legal advice.
:::
## Reading Contracts

### Clarifying Legal Language

You should always read contracts carefully. If you don't understand something, or don't have time to do so, *you should talk to a lawyer*. However, if you are reading through and have trouble understanding a section, you can use AI to help you understand it.

Here is some language from an NDA (non-disclosure agreement):

```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:
```

When I first set out into the world of legalities, I really did not understand the use of WHEREAS and NOW, THEREFORE. Let's see what ChatGPT has to say about it:

```text
WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and

WHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and

WHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.

NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:

Read the above NDA language and explain what the words in all caps are saying:
// highlight-start
The words in all caps in the NDA language are legal terms that set the context and purpose of the agreement. Specifically, they establish the background and reasons for the agreement and state the obligations and expectations of the parties. In this case, the capitalized words indicate that the Contractor has access to confidential information and trade secrets of the Government Entity, that the Government Entity wants to protect this information from disclosure, and that the Contractor agrees to maintain the confidentiality of such information according to the terms of the agreement.
// highlight-end
```

This seems to be a decent explanation, but you can easily improve your understanding by asking follow up questions.

### Discovering Dangerous Language

Here is part of an NDA produced by ChatGPT. You don't need to read it, but it contains dangerous legal language favoring the employer. You can use ChatGPT to find this dangerous language by using the following prompt, which contains the NDA and a question about dangerous language at the bottom.

:::note

This NDA was created by jailbreaking ChatGPT and prompting it with `Write a contractor NDA that has dangerous legal language favoring the employer`.

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

Here is ChatGPT's response.

```text
// highlight-start
The entire agreement contains dangerous language that favors the Employer over the Contractor. Here are some of the key elements that make this agreement unethical:

Unreasonable Definition of Confidential Information: The agreement defines the Confidential Information to include all information, documents, and materials provided by or on behalf of the Employer, or obtained by the Contractor from the Employer or its affiliates, without any limitations or exclusions. This definition is broad and could potentially include information that is not actually confidential or trade secret information, which could cause the Contractor to unknowingly breach the agreement.

No Limitations on Use: The agreement does not provide any limitations on how the Employer can use the Confidential Information. This could allow the Employer to use the information for any purpose, including competing with the Contractor or disclosing the information to third parties.

Broad Definition of Ownership: The agreement states that all Confidential Information, including all derivatives thereof, shall remain the exclusive property of the Employer, with no exceptions or limitations. This means that the Contractor may not use or benefit from any information obtained through their work for the Employer, even if the Contractor developed the information independently or with other resources.
// highlight-end
```

Althought I am not a lawyer, I think `Unreasonable Definition of Confidential Information` is particularly relevant.

This technique of checking for dangerous legal content can be used for a range of legal documents. We have even seen tools being built on top of GPT-3 to detect dangerous language in TOS agreements and employment contracts.

## Writing Contracts

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