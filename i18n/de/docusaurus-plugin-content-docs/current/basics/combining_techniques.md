---
sidebar_position: 6
locale: de
style: chicago
---

# 🟢 Techniken Kombinieren

import CombinedPrompt from '@site/docs/assets/basics/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


Wie wir auf den vorhergehenden Seiten gesehen haben, können Promts unterschiedliche Formate und Komplexität haben. Sie können Kontext, Anweisungen und mehrere Eingabe-/Ausgabebeispiele enthalten. Bislang haben wir jedoch nur einzelne Klassen von Prompts untersucht. Die Kombination dieser verschiedenen Prompting-Techniken kann zu leistungsfähigeren Prompts führen. 

Hier ist ein Beispiel für einen Promt, der Kontext, Anweisungen und mehrere Beispiele enthält:

```text
Twitter ist eine Plattform für soziale Medien, auf der Nutzer kurze Nachrichten, sogenannte "Tweets", veröffentlichen können.
Tweets können positiv oder negativ sein, und wir möchten in der Lage sein, die Tweets als positiv oder negativ zu klassifizieren. Hier sind einige Beispiele für positive und negative Tweets. Achte darauf, dass du den letzten Tweet korrekt einordnest.

Q: Tweet: "Was für ein schöner Tag!"
Ist dieser Tweet positiv oder negativ?

A: positiv

Q: Tweet: "Ich hasse diese Klasse"
Ist dieser Tweet positiv oder negativ?

A: negativ

Q: Tweet: "Ich liebe Taschen an Jeans"

A:
```

Durch das Hinzufügen von zusätzlichem Kontext/Beispielen können wir die Leistung von KIs
bei verschiedenen Aufgaben verbessern.

