---
sidebar_position: 3
---

# 🟢 解答討論性問題

import Auto from '@site/docs/assets/basic_applications/short_content_auto.webp';

透過正確的提示，GPT-3 非常擅長寫作短格式回答。為了證明這一點，我將看一下**解答討論性問題**，這是許多大學課程中常見的每週任務。對討論性問題的回答通常約為100到700字。更長的內容可能會有些棘手，因為語言模型的記憶有限，並且難以理解他們所寫的內容的整體情況(@jin2022plot)。

讓我們看一個基本的討論問題的例子:

> _"我們星球面臨的最緊迫的環境問題是什麼，個人可以採取哪些措施來幫助解決這些問題？"_

我們可以將其轉化為簡單的 GPT-3 提示，將<span className="yellow-highlight">回答以下問題:</span>放在前面。

<pre>
    <span className="yellow-highlight">回答以下問題:</span><br/>
    我們星球面臨的最緊迫的環境問題是什麼，個人可以採取哪些措施來幫助解決這些問題？
</pre>

由於這個提示生成的結果並不一致，有些只有一兩個句子。一個典型的討論回答應該有多個段落，因此這些結果並不理想。一個好的提示應該給出**具體的格式和內容指令**。您需要消除語言中的歧義以提高一致性和質量。這是一個更好的提示。

<pre>
    <span className="yellow-highlight">寫一篇高度詳細的論文，包括引言、正文和結論段，回答以下問題:</span><br/>
    我們星球面臨的最緊迫的環境問題是什麼，
    <br/>個人可以採取哪些措施來幫助解決這些問題？
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="example"></iframe>

第二個提示生成了更長的輸出和更好的結構。提示中使用“論文”一詞是有意的，因為GPT-3可以理解論文的定義，因此更有可能生成連貫的、結構化的回答。

### 許多討論性問題並不適合提示

> _"內戰是一場關於擴張的衝突嗎？同意還是不同意，為什麼？"_

這是一個真實的大學歷史課程的討論問題。它的措辭不當，也過於開放。**為了獲得良好的討論回答，您需要將問題改寫為一個明確定義的提示**。上面那個討論問題的明確定義提示可以是：

> _"解釋內戰的原因以及擴張是否在衝突中起了作用。附上支援您論點的證據。"_

現在我們可以新增格式和上下文指令。

<pre>
    <span className="yellow-highlight">寫一篇高度詳細的討論回答，按照論文結構回答以下提示:</span><br/>
    解釋內戰的原因以及擴張是否在衝突中起了作用。<br/>附上支援您論點的證據。
</pre>

### 使用GPT-3自動重寫明確定義的提示

上面的改寫例子是使用OpenAI的[ChatGPT](https://openai.com/blog/chatgpt/)生成的。

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}}/>
</div>

### 迭代

在為討論問題制定有效的提示後，您現在需要細化 GPT-3 生成的結果。這可能涉及到調整輸出以符合諸如字數等限制，或將不同生成的結果的概念組合在一起。

迭代的一個簡單方法是生成多個輸出並檢視它們，以瞭解 GPT-3 正在使用的概念和結構。一旦評估了輸出，您就可以選擇最合適的輸出並將它們組合成一個連貫的回答。

另一種迭代的方法是逐步開始，然後**逐步擴充套件**。這需要不止一個提示:一個起始提示，用於撰寫最初的一兩段，然後是其他提示，以擴充套件已經寫過的內容。

以下是一個潛在的哲學討論問題:

> _"數學是發明還是發現？用仔細的推理來解釋你的答案。"_

將其新增到一個簡單的提示中，如下所示:

<pre>
    <span className="yellow-highlight">寫一個起始段回答以下問題:</span>
    <br/>數學是發明還是發現？用仔細的推理來解釋你的答案。
</pre>

我生成了一些回答，找到了一個我喜歡的：

<pre>
    <span className="bluegreen-highlight">哲學家和數學家之間爭論不休，數學是發明還是發現。
    <br/>一些人認為，數學的概念和原則獨立於人類思維存在，因此可以被認為是被發現而不是被髮明的。
    <br/>例如，數字、比率和幾何形狀的概念在自然界中被觀察到，可以被抽象化和系統化地研究。</span>
</pre>

This is a pretty good start. I then followed this up with another prompt to expand:
這是一個不錯的開端。然後我使用另一個提示來擴充套件：

<pre>
<span className="yellow-highlight">我正在撰寫一篇詳細的短文，回答以下提示:</span> 
<br/>數學是發明還是發現？用仔細的推理來解釋你的答案。<span className="yellow-highlight"><p/>這是我目前的情況:</span> 哲學家和數學家之間爭論不休，數學是發明還是發現。
<br/>一些人認為，數學的概念和原則獨立於人類思維存在，因此可以被認為是被發現而不是被髮明的。
<br/>例如，數字、比率和幾何形狀的概念在自然界中被觀察到，可以被抽象化和系統化地研究。<p/><span className="yellow-highlight">寫下我文章的下一段。</span>
</pre>

嘗試使用以下演示來擴充套件此提示（您將需要您的OpenAI API金鑰）：

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IuWPpuS4gOaWuemdou%2B8jOacieS6uuiupOS4uuaVsOWtpuWcqOW%2BiOWkp%2Beoi%2BW6puS4iuaYr%2BS6uuexu%2BaAnee7tOeahOWPkeaYjuOAguaVsOWtpuWOn%2BeQhuWfuuS6jumAu%2Bi%2BkeaOqOeQhu%2B8jOi%2FmeaYr%2BS6uuexu%2BaAnee7tOeahOS4gOS4queJueW%2BgeOAguS%2Bi%2BWmgu%2B8jOasp%2BWHoOmHjOW%2Bt%2BWHoOS9leWfuuS6juaKveixoeeahOWFrOeQhuWSjOWJjeaPkO%2B8jOiiq%2BaOpeWPl%2BS4uuecn%2BWunuiAjOaXoOmcgOivgeaYjuOAguWboOatpO%2B8jOWPr%2BS7peiupOS4uuWHoOS9leaYr%2BS6uuexu%2BaAnee7tOeahOWPkeaYju%2B8jOiAjOS4jeaYr%2BS4gOenjeWPkeeOsOOAguWQjOagt%2B%2B8jOaVsOWtpuWFrOW8j%2BWSjOaWueeoi%2BeUqOS6juaooeaLn%2BWSjOmihOa1i%2BeJqeeQhueOsOixoe%2B8jOi%2FmeWPiOaYr%2BS6uuexu%2BaOqOeQhueahOe7k%2BaenOOAgiIsInByb21wdCI6IuaIkeato%2BWcqOaSsOWGmeS4gOevh%2Bivpue7hueahOefreaWh%2B%2B8jOWbnuetlOS7peS4i%2BaPkOekujog5pWw5a2m5piv5Y%2BR5piO6L%2BY5piv5Y%2BR546w77yf55So5LuU57uG55qE5o6o55CG5p2l6Kej6YeK5L2g55qE562U5qGI44CCIOi%2FmeaYr%2BaIkeebruWJjeeahOaDheWGtTrlk7LlrablrrblkozmlbDlrablrrbkuYvpl7TkuonorrrkuI3kvJHvvIzmlbDlrabmmK%2Flj5HmmI7ov5jmmK%2Flj5HnjrDjgILkuIDkupvkurrorqTkuLrvvIzmlbDlrabnmoTmpoLlv7Xlkozljp%2FliJnni6znq4vkuo7kurrnsbvmgJ3nu7TlrZjlnKjvvIzlm6DmraTlj6%2Fku6XooqvorqTkuLrmmK%2Fooqvlj5HnjrDogIzkuI3mmK%2Fooqvlj5HmmI7nmoTjgILkvovlpoLvvIzmlbDlrZfjgIHmr5Tnjoflkozlh6DkvZXlvaLnirbnmoTmpoLlv7XlnKjoh6rnhLbnlYzkuK3ooqvop4Llr5%2FliLDvvIzlj6%2Fku6Xooqvmir3osaHljJblkozns7vnu5%2FljJblnLDnoJTnqbbjgIIg5YaZ5LiL5oiR5paH56ug55qE5LiL5LiA5q6144CCIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

我使用此提示生成了幾個擴充套件，並選擇了一個我喜歡的，最終得到了以下結果：

<pre>
    哲學家和數學家之間爭論不休，數學是發明還是發現。
    <br/>一些人認為，數學的概念和原則獨立於人類思維存在，因此可以被認為是被發現而不是被髮明的。
    <br/>例如，數字、比率和幾何形狀的概念在自然界中被觀察到，可以被抽象化和系統化地研究。
    <span className="bluegreen-highlight">
    <br/>另一方面，有人認為數學在很大程度上是人類思維的發明。
    <br/>數學原理基於邏輯推理，這是人類思維的一個特徵。
    <br/>例如，歐幾里德幾何基於抽象的公理和前提，被接受為真實而無需證明。
    <br/>因此，可以認為幾何是人類思維的發明，而不是一種發現。
    <br/>同樣，數學公式和方程用於模擬和預測物理現象，這又是人類推理的結果。
    </span>
</pre>

使用擴充套件提示，我們可以逐步地寫作並在每個步驟上進行迭代。這對於需要**生成更高質量的輸出並希望逐步修改**的情況非常有用。

Written by [jayo78](https://twitter.com/jayo782).
