---
sidebar_position: 105
---
# 🟢 Wie KIs Denken


import Brain from '@site/docs/assets/basics/brain.svg';

<div style={{textAlign: 'center'}}>
  <Brain style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


Es gibt ein paar einfache Dinge, die du über die verschiedenen KIs und ihre Funktionsweise wissen solltest, bevor du den Rest des Kurses liest.


## Unterschiedliche KIs

Es gibt Tausende, wenn nicht Millionen von KIs. Einige sind besser als andere. Verschiedene KIs können [Bilder](https://openai.com/product/dall-e-2), [Musik](https://google-research.github.io/seanet/musiclm/examples/), [Text](https://platform.openai.com/playground) und sogar [Videos](https://makeavideo.studio/) produzieren. Beachte, dass dies alles *generative* KIs sind, also KIs, die Dinge *erzeugen*. Es gibt auch *klassifizierende* KIs. Man kann zum Beispiel einen Bildklassifikator verwenden, um festzustellen, ob es sich bei einem Bild um eine Katze oder einen Hund handelt. In diesem Kurs werden wir keine diskriminierenden KIs verwenden.


Nur wenige generative KIs sind derzeit so weit fortgeschritten, dass sie für das Prompt Engineering besonders nützlich sind. In diesem Kurs verwenden wir hauptsächlich GPT-3 und ChatGPT. Wie wir zuvor erwähnt haben, ist ChatGPT ein Chatbot, während GPT-3 keiner ist. **Sie werden in der Regel unterschiedliche Antworten geben, wenn ihnen die gleiche Frage gestellt wird**. Wenn du ein Entwickler bist, empfehle ich dir GPT-3, da es reproduzierbarer ist. Wenn du kein Entwickler bist, empfehle ich die Verwendung von [ChatGPT](https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting), da es einfacher zu benutzen ist. Die meisten Techniken in diesem Kurs können auf beide KIs angewendet werden. Einige von ihnen sind jedoch nur auf GPT-3 anwendbar, so dass wir dir empfehlen, GPT-3 zu verwenden, wenn du alle Techniken in diesem Kurs nutzen möchtest.

Wir werden auch [Stabile Diffusion](https://beta.dreamstudio.ai/home) und [DALLE](https://openai.com/product/dall-e-2) im Abschnitt über die Bilderzeugung verwenden. Weitere relevante AIs findest du [hier](https://learnprompting.org/docs/products#chatbots).

## Wie diese KIs funktionieren

In diesem Abschnitt werden Aspekte der populären generativen **Text**-KIs beschrieben. Diese KIs haben Gehirne, die aus Milliarden von künstlichen Neuronen bestehen. Die Art und Weise, wie diese Neuronen strukturiert sind, wird als Transformerarchitektur bezeichnet. Es handelt sich um eine ziemlich komplexe Art von neuronalem Netz. Was du verstehen solltest, ist:

1. Diese KIs sind nur mathematische Funktionen. Anstelle von $f(x) = x^2$ sind sie eher wie f(Tausende von Variablen) = Tausende von möglichen Ausgaben.
2. Diese KIs verstehen Sätze, indem sie sie in Wörter/Unterwörter, so genannte Tokens, zerlegen (z.B. könnte die KI `Ich will keine` als `"I", "ch", " will", " ke", "ine"` lesen). Jeder Token wird dann in eine Liste von Zahlen umgewandelt, damit die KI es verarbeiten kann.
3. Diese KIs sagen das nächste Wort/Token im Satz auf der Grundlage der vorhergehenden Wörter/Tokens voraus (z.B. könnte die KI `Äpfel` nach `Ich will keine` vorhersagen). Jeder Token, den sie schreiben, basiert auf den vorherigen Token, die sie gesehen und geschrieben haben. Jedes Mal, wenn sie einen neuen Token schreiben, machen sie eine Pause, um darüber nachzudenken, was der nächste Token sein sollte.
4. Diese KIs sehen sich alle Token gleichzeitig an. Sie lesen nicht von links nach rechts oder von rechts nach links, wie es Menschen tun.

Bitte verstehen Sie, dass die Worte "denken", "Gehirn" und "Neuron" Zoomorphismen sind, die im Wesentlichen Metaphern für das sind, was das Modell tatsächlich tut. Diese Modelle denken nicht wirklich, sie sind nur mathematische Funktionen. Sie sind nicht wirklich Gehirne, sondern nur künstliche neuronale Netze. Es handelt sich nicht um biologische Neuronen, sondern nur um Zahlen.

Dies ist ein Bereich, in dem aktiv geforscht und philosophiert wird. Diese Beschreibung ist eher zynisch und soll die in den Medien verbreitete Darstellung von KIs als Wesen, die wie Menschen denken/handeln, mildern. Wenn du aber die KI vermenschlichen willst, nur zu! Es scheint, dass die meisten Menschen dies tun, und es kann sogar hilfreich für das Lernen sein.


## Anmerkungen

- [d2l.ai](https://www.d2l.ai) ist eine gute Quelle, um zu erfahren, wie KI funktioniert

- Bitte beachte, dass die Autoren in der Tat Äpfel mögen. Sie sind köstlich.
