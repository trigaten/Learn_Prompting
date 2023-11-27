---
sidebar_position: 94
---

# 🟢 聊天機器人


import Chatbots from '@site/docs/assets/basics/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>
<br/>

:::takeaways
- 聊天機器人如何運作
- 為什麼聊天機器人比非聊天機器人好
:::

在人工智慧領域，有各種類型的 %%LLM|LLM%%s 服務於不同的目的。本課程中最常用的模型之一是 ChatGPT，這是一個可以記住先前訊息的聊天機器人，以便您可以與它進行對話。然而，聊天機器人並不是 LLM 的唯一類型。另一個例子是 GPT-3，這是 OpenAI 開發的早期人工智慧，與聊天機器人不同，它沒有記憶。 GPT-3 和 ChatGPT 都可以執行基本任務，例如回答問題和產生摘要。


## 聊天機器人如何運作

ChatGPT 等聊天機器人旨在模擬互動式對話。為了進行對話，聊天機器人必須記住整個對話歷史記錄。對於像 ChatGPT 這樣的人工智慧來說，這意味著每次你向他們發送新訊息時，他們都會讀取你同時發送的所有先前訊息，因為他們沒有真正的記憶。這種對話的「記憶」是區分它們與非聊天機器人的唯一重要因素。


## 非聊天機器人

GPT-3 是一種「完整」類型的模型，而不是「聊天」[^a]。下面的範例向您展示了它與 ChatGPT 的不同之處：

<AIInput>
What is 2+
</AIInput>

<AIOutput title="GPT-3 output">
2
<br/>
2+2 = 4
</AIOutput>

<AIOutput title="ChatGPT output">
看來你沒有完成你的問題。如果你想問“2 + 2 是什麼？”那麼答案是 4。如果您有其他問題或需要進一步幫助，請隨時提問！
</AIOutput>

我們可以看到 GPT-3 已經完成了我們的輸入，它認為是最有可能的下一個字元。另一方面，ChatGPT 卻對我們做出了回應，就好像我們在對話中突然停止說話一樣。聊天機器人的對話性使它們使用起來感覺更自然，因此大多數人比其他人工智慧更喜歡它們。然而，聊天機器人更好的最重要原因是像 OpenAI 和 Anthropic 這樣的公司已經建立了非常聰明的聊天機器人，並且可以更好地回應您的提示[^b]。

## 令牌

像 ChatGPT 這樣的 Gen AI 不會像我們一樣閱讀單字。雖然我們會逐字閱讀 "I don't like eggs" 這句話，但 AI 模型可能會文字字串分解成自己的單字版本，並像這樣讀：`I`, `don`, `'t` `like` `egg` `s`.。這些「單字」被稱為令牌(token)，它們幾乎被用於每個現代人工智慧。然後，每個令牌都會轉換為數字列表，以便人工智慧可以處理它。您不需要知道為什麼 Gen AI 使用令牌，但在考慮定價和　*context length*　時理解它們很重要。

## 上下文長度

上下文長度[^l]是指語言模型在產生回應時需要考慮的令牌長度。對於聊天機器人和非聊天機器人，它們可以處理的上下文長度都有最大限制[^c]。如果對話或文字超過此限制，模型在產生回應時將無法記住整個對話。這就是為什麼有時需要重申重要訊息或重新啟動聊天機器人。

750 個單字大約為 1,000 個令牌[^d]。 ChatGPT 可以記住 4K 令牌，而更高級版本的 ChatGPT 最多可以記住 16K 令牌。 GPT-4 最多可以處理 32K 個令牌，而 Anthropic 的 AI [Claude](https://www.anthropic.com/index/100k-context-windows) 最多可以處理 100K 個令牌。決定使用哪種模型有時需要在定價和更長上下文長度的需求之間進行權衡。 ChatGPT 對於本課程就足夠了。


[^a]: There are other types of non-chatbots, which we will see in the next lesson.
[^b]: Sometimes non-chatbots are preferable if you want more concise outputs that `complete` your text. We will learn about how to access GPT-3 in the next lesson.
[^c]: State of the art research may change this in the future.
[^d]: According to https://openai.com/pricing
[^l]: Context length is sometime called context size, or the length of the context window.
