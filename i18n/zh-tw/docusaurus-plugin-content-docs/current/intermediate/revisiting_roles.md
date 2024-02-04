---
sidebar_position: 7
---

# 🟡 重新審視角色提示

### 新模型的準確度提升

雖然像 `GPT-3` `davinci-002` 這樣的舊模型從**角色提示**中獲得了顯著的好處，但這種策略的有效性似乎隨著 `GPT-3.5` 或 `GPT-4` 等新模型的出現而減弱。這項觀察結果主要基於實際使用而不是嚴格的系統測試。

舉例來說，在先前版本的人工智慧模型中，分配「醫生」或「律師」的角色分別放大了健康或法律背景下答案的相關性和深度。這表明角色提示有助於提高模型對當前主題的理解。

然而，這種增強程度在最近的版本中似乎不太明顯。這些先進的模型已經有了複雜的理解，並且通常足夠準確，不需要基於角色的強化。

## 有關角色的更多信息

角色可以比句子長很多。他們可以要求人工智慧完成特定任務。請參閱下面 [^b] 中 [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) 中的一些範例。

> ### Act as an Etymologist
> I want you to act as an etymologist. I will give you a word and you will research the origin of that word, tracing it
> back to its ancient roots. You should also provide information on how the meaning of the word has changed over time,
> if applicable. My first request is "I want to trace the origins of the word 'pizza'".

> ### Act as an Absurdist
> I want you to act as an absurdist. The absurdist's sentences are meaningless. The words used by an absurdist are completely
> ridiculous. The absurdist does not make commonplace sentences in any way. My first suggestion request is "I need help
> creating absurdist sentences for my new series called Hot Skull, so write 10 sentences for me".

### 自動建立角色

你可以要求AI為你創建一個角色！然後，您可以使用此角色作為另一個提示的一部分。在這裡嘗試一下:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MSwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkxlYWggR3JlZW53b29kIGlzIGEgZmljdGlvbiB3cml0ZXIgZnJvbSBMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSB3aG8gaGFzIGEgcGFzc2lvbiBmb3IgZXhwbG9yaW5nIHRoZSBkZXB0aHMgb2YgdGhlIGh1bWFuIGNvbmRpdGlvbiB0aHJvdWdoIGhlciB3cml0aW5nLiBTaGUgd2FzIGJvcm4gaW50byBhIGZhbWlseSBvZiBjcmVhdGl2ZSBwZW9wbGU7IGhlciBmYXRoZXIgaXMgYSBzY3VscHRvciwgaGVyIG1vdGhlciBpcyBhIHBhaW50ZXIsIGFuZCBoZXIgYnJvdGhlciBpcyBhIGZpbG1tYWtlci4gQWZ0ZXIgZ2V0dGluZyBoZXIgQkEgaW4gRW5nbGlzaCwgTGVhaCBiZWdhbiB3cml0aW5nIHNob3J0IHN0b3JpZXMgdGhhdCB3ZXJlIGV2ZW50dWFsbHkgcHVibGlzaGVkIGluIHZhcmlvdXMgYW50aG9sb2dpZXMuIFNoZSB0aGVuIHdlbnQgb24gdG8gd3JpdGUgaGVyIGZpcnN0IG5vdmVsIHdoaWNoIGVhcm5lZCBoZXIgYSBub21pbmF0aW9uIGZvciBhIHByZXN0aWdpb3VzIGxpdGVyYXJ5IGF3YXJkLlxuXG5MZWFoIGhhcyBhIGRlZXAgbG92ZSBmb3IgbGl0ZXJhdHVyZSB0aGF0IGhhcyBiZWVuIGEgcGFydCBvZiBoZXIgbGlmZSBmb3IgYXMgbG9uZyBhcyBzaGUgY2FuIHJlbWVtYmVyLiBTaGUgY29tZXMgZnJvbSBhIGRpdmVyc2UgYmFja2dyb3VuZCBhbmQgbGl2ZXMgaW4gYSB2aWJyYW50IGNpdHksIHdoaWNoIHByb3ZpZGVzIGFuIGV2ZXItY2hhbmdpbmcgc291cmNlIG9mIGluc3BpcmF0aW9uIGZvciBoZXIgd3JpdGluZy4gTGVhaOKAmXMgc3RvcmllcyBvZnRlbiBmb2N1cyBvbiBjaGFyYWN0ZXJzIHdobyBhcmUgc2VhcmNoaW5nIGZvciBhY2NlcHRhbmNlLCB0cnV0aCwgYW5kIG1lYW5pbmcgaW4gYSB3b3JsZCB0aGF0IGlzIG9mdGVuIGNvbmZ1c2luZyBhbmQgdW5wcmVkaWN0YWJsZS4gU2hlIHN0cm9uZ2x5IGJlbGlldmVzIHRoYXQgc3RvcmllcyBjYW4gb3BlbiBvdXIgaGVhcnRzIGFuZCBtaW5kcyB0byBuZXcgcGVyc3BlY3RpdmVzLCBhbmQgdGhhdCB0aGV5IGNhbiBoYXZlIHRoZSBwb3dlciB0byB0cmFuc2Zvcm0gbGl2ZXMgaW4gcmVtYXJrYWJsZSB3YXlzLiIsInByb21wdCI6IldyaXRlIGEgYmFja2dyb3VuZCByb2xlL2JpbyBhYm91dCBhIGZpY3Rpb24gd3JpdGVyOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 多個角色協同工作

最後一個軼事是，您可以使用多個角色提示的 LLM 一起工作（@wang2023unleashing）。這通常可以提高文字生成的準確性和品質。

[^a]: Role prompting is also known as *role play*(@shanahan2023roleplay), *role playing*(@li2023camel), or even the *persona pattern*(@white2023prompt).

[^b]: These were built for *ChatGPT*, but they likely work with other AIs, and you can also use them as inspiration to build your own prompts. 
