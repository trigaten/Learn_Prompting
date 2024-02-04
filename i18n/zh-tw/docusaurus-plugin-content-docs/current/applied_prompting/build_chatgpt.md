---
sidebar_position: 4
---

# 🟢 用 GPT-3 構建 ChatGPT

import Skippy from '@site/docs/assets/basic_applications/skippy_chatbot.webp'    
import SkippyHeader from '@site/docs/assets/basic_applications/skippy_chatbot_header.webp'    
import Therapy from '@site/docs/assets/basic_applications/therapy_chatbot.gif'
import ChatGPT from '@site/docs/assets/basic_applications/chatgpt_ui_diagram.webp'

<div style={{textAlign: 'left'}}>
  <img src={SkippyHeader} style={{width: "700px"}}/>
</div>

## 介紹

ChatGPT 是一種新的語言模型的應用，由 OpenAI 進行了最佳化，從 GPT-3 的模型進行了微調，使其能夠用於對話(@chatgpt2022)。它具有使用者友好的聊天介面，您可以透過它輸入內容並獲得 AI 助手的響應。請在[chat.openai.com](https://chat.openai.com/chat)上檢視。

儘管早期版本的 GPT-3 沒有當前的 GPT-3.5 系列那麼先進，但它們仍然令人印象深刻。這些模型透過 API 和<a href="https://beta.openai.com/playground">Playground Web UI介面</a>提供，讓您調整某些配置引數並測試提示。GPT-3 取得了顯著的關注，但它並沒有達到 ChatGPT 的病毒式傳播的現象。

與 GPT-3 相比，ChatGPT 之所以如此成功，是因為它作為一個簡單的 AI 助手對於普通人來說非常易於使用，無論他們對資料科學、語言模型或 AI 的知識有多少。

在本文中，我將概述如何使用像 GPT-3 這樣的大型語言模型來實現 ChatGPT 等聊天機器人。

## 動機

本文部分原因是由<a href="https://twitter.com/goodside">Riley Goodside</a>的一條推文引發的，他指出了 ChatGPT 是如何實現的。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to make your own knock-off ChatGPT using GPT‑3 (text‑davinci‑003) — where you can customize the rules to your needs, and access the resulting chatbot over an API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">December 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

與 GPT-3.5 系列中的其他模型一樣，ChatGPT 是使用[RLHF](https://huggingface.co/blog/rlhf)進行訓練的，但它的大部分效果來自於使用了**好的提示**。

## 提示

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Skippy chatbot完整的提示(prompt)</p>
</div>

<a href="https://learnprompting.org/docs/basics/prompting">提示是指示 AI 進行某些操作的過程。</a> 正如你可能在網上看到的 ChatGPT 的範例一樣，你可以提示它做任何事情。常見的用例是總結文字、根據描述編寫內容或建立諸如詩歌、食譜等等。

<p></p>

ChatGPT 是一個語言模型和使用者介面。使用者輸入到介面的提示實際上被插入到包含使用者和 ChatGPT 之間整個對話的較大提示中。這使得基礎語言模型能夠理解對話的上下文並作出適當的回應。

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={ChatGPT} style={{width: "600px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>在傳送到模型之前插入使用者提示的範例</p>
</div>

語言模型透過在預訓練過程中學習的機率來完成提示，從而確定接下來的詞彙(@jurafsky2009)。

<p></p>

GPT-3 能夠從簡單的指令或幾個範例中 "學習"。後者被稱為少樣本或上下文學習(@brown2020language)。在上面的聊天機器人提示中，我建立了一個虛構的聊天機器人命名為 Skippy，並指示它向用戶提供回應。GPT-3 明白了來回交流的格式 USER: {user input} 和 SKIPPY: {skippy response}。GPT-3 理解 Skippy 是一個聊天機器人，之前的交流是一段對話，因此當我們提供下一個使用者輸入時，Skippy 將作出回應。

### 記憶

Skippy 和使用者之間的過去交流會附加到下一個提示中。每次我們提供更多使用者輸入並獲得更多聊天機器人輸出時，提示都會擴充套件以納入這個新交流。這就是 Skippy 和 ChatGPT 這樣的聊天機器人如何**記住以前的輸入**。但是，GPT-3 聊天機器人可以記住的內容是有限的。

提示在進行多次交流後可能會變得很龐大，特別是如果我們使用聊天機器人來生成像部落格文章這樣的長篇回覆。傳送到 GPT-3 的提示將轉換為標記(tokens)，這些標記(tokens)是單個單詞或其中的一部分。對於包括 ChatGPT 在內的 GPT-3 模型，組合提示和生成響應的標記限制為<a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">4097個（約3000個單詞）</a>。

### 幾個例子

儲存先前對話的提示有許多不同的用途。 ChatGPT 旨在成為一個多功能的通用助手，在個人使用的經驗中，它很少會要求一些後續跟進的問題。

#### 詢問你近況的心理治療師聊天機器人

擁有一個主動詢問問題並從使用者那裡獲得反饋的聊天機器人可能會很有幫助。下面是一個關於治療師聊天機器人的範例，它將詢問問題和後續問題，以幫助使用者思考他們的一天。

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>治療師聊天機器人</p>
</div>

#### 使用舊的日記與年輕的自己交談

<a href="https://twitter.com/michellehuang42">Michelle Huang</a>使用 GPT-3 與她的年輕自己聊天。提示(Prompt)使用了一些上下文，例如舊的日記，配對聊天機器人樣式的問答格式。 GPT-3 能夠根據這些條目模仿一種人格。
<p></p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my &quot;inner child&quot;<br/><br/>some reflections below:</p>&mdash; michelle huang (@michellehuang42) <a href="https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw">November 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

提示的內容:
```markdown
以下是一段現在 Michelle(年齡[已隱去])與14歲的年輕自己之間的對話，年輕的 Michelle 曾寫下以下的日記：

[日記內容在此處]

現在的 Michelle: [在此處輸入你的問題]
```

作者指出日記條目可能會達到 token 的限制。在這種情況下，你可以挑選幾個條目或者嘗試概括幾個條目。

## 實現

我將介紹如何在 Python 中編寫一個簡單的 GPT-3 驅動聊天機器人。使用 OpenAI API 將 GPT-3 包含在您正在構建的應用程式中非常容易。您需要在 OpenAI 上建立一個帳戶並獲取 API 金鑰。請檢視他們的文件<a href="https://beta.openai.com/docs/introduction">這裡。</a>

我們需要完成以下步驟：

1. 格式化使用者輸入以便於 GPT-3 的聊天機器人
2. 從 GPT-3 獲取聊天機器人響應作為完成
3. 使用使用者的輸入和聊天機器人的響應更新提示
4. 迴圈

這是我將要使用的提示。我們可以使用 python 將<conversation history\>和<user input\>替換為它們的實際值。

```python
chatbot_prompt = """
    作為一個高階聊天機器人，你的主要目標是儘可能地協助使用者。這可能涉及回答問題、提供有用的資訊，或根據使用者輸入完成任務。為了有效地協助使用者，重要的是在你的回答中詳細和全面。使用例子和證據支援你的觀點，併為你的建議或解決方案提供理由。

    <conversation history>

    User: <user input>
    Chatbot:"""
```

我跟蹤下一個使用者輸入和上一個對話。每個迴圈之間，聊天機器人和使用者之間的新輸入/輸出都會附加到對話歷史中。

```python
import openai

openai.api_key = "YOUR API KEY HERE"
model_engine = "text-davinci-003"
chatbot_prompt = """
作為一個高階聊天機器人，你的主要目標是儘可能地協助使用者。這可能涉及回答問題、提供有用的資訊，或根據使用者輸入完成任務。為了有效地協助使用者，重要的是在你的回答中詳細和全面。使用例子和證據支援你的觀點，併為你的建議或解決方案提供理由。

<conversation history>

User: <user input>
Chatbot:"""


def get_response(conversation_history, user_input):
    prompt = chatbot_prompt.replace(
        "<conversation history>", conversation_history).replace("<user input>", user_input)

    # Get the response from GPT-3
    response = openai.Completion.create(
        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)

    # Extract the response from the response object
    response_text = response["choices"][0]["text"]

    chatbot_response = response_text.strip()

    return chatbot_response


def main():
    conversation_history = ""

    while True:
        user_input = input("> ")
        if user_input == "exit":
            break
        chatbot_response = get_response(conversation_history, user_input)
        print(f"Chatbot: {chatbot_response}")
        conversation_history += f"User: {user_input}\nChatbot: {chatbot_response}\n"

main()
```

<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">這裡</a>是一個簡單聊天機器人的完整程式碼的連結。

<p></p>

現在只需要構建一個漂亮的前端，讓使用者可以與之互動！

Written by [jayo78](https://twitter.com/jayo782).