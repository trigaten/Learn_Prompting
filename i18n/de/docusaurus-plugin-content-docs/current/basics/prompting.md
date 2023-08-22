---
sidebar_position: 1
---
# 🟢 Prompting

import Prompt from '@site/docs/assets/basics/prompt.svg';

<div style={{textAlign: 'center'}}>
  <Prompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Im vorherigen Kapitel haben wir über KI gesprochen und darüber, wie Menschen KI anweisen können, Aufgaben auszuführen. Der Prozess, eine KI anzuweisen, eine Aufgabe auszuführen, wird Prompting genannt (@shin2020autoprompt). Wir geben der KI eine Reihe von Anweisungen (den Prompt) und sie führt die Aufgabe aus. Prompts können so einfach wie eine Anweisung/Frage oder so komplex wie große Textstücke sein.

Hier sind zwei Beispiele für Prompts:

#### 1) Einen Artikel zusammenfassen

Angenommen, du liest einen Artikel über Schneefall in Florida und willst schnell die Hauptinhalte des Artikels erfassen. In diesem Fall zeigst du der KI, was du liest, und forderst sie auf, eine Zusammenfassung zu schreiben[^2]:

```
Im US-Bundesstaat Florida fällt nur sehr selten Schnee, insbesondere in den zentralen und südlichen Teilen des Staates. Mit Ausnahme der nördlichsten Gebiete des Bundesstaates haben die meisten größeren Städte Floridas noch nie messbaren Schneefall verzeichnet, obwohl Spurenmengen aufgezeichnet wurden oder ein paar Mal pro Jahrhundert Schneegestöber in der Luft beobachtet wurde. Nach Angaben des National Weather Service ist in den Florida Keys und Key West seit der Besiedlung der Region durch die Europäer vor mehr als 300 Jahren kein einziges Mal Schneegestöber aufgetreten. In Miami, Fort Lauderdale und Palm Beach wurde in den letzten 200 Jahren nur ein einziges Mal Schneegestöber in der Luft beobachtet; dies geschah im Januar 1977. Auf jeden Fall hat es in Miami, Fort Lauderdale und Palm Beach weder vor noch nach diesem Ereignis von 1977 Schneegestöber gegeben.

Fass diesen Absatz in einem einzigen Satz zusammen:
```

Hier ist die Antwort von der KI. Sie ist viel kürzer!

```text
// highlight-start
Schneefall ist in Florida äußerst selten, mit Ausnahme der nördlichsten Gebiete, und in den Großstädten Miami, Fort Lauderdale und Palm Beach wurde in den letzten 200 Jahren nur ein einziges Schneegestöber in der Luft registriert.
// highlight-end
```

#### 2) Lösen von mathematischen Textaufgaben

Wenn du einen Datensatz mit mathematischen Gleichungen hast, die du mit einem Sprachmodell lösen willst, kannst du einen Prompt erstellen, indem du die Frage "Was ist GLEICHUNG" stellst.

Für eine bestimmte Frage könnte dein vollständiger Prompt wie folgt aussehen:

```
Was ist 965*590?
```

Bei diesem Prompt antwortet GPT-3 (text-davinci-003) (eine KI) manchmal 569.050 (falsch). Hier kommt das Prompt-Engineering ins Spiel.

# Prompt Engineering

Wenn wir statt der `Frage Was ist 965*590` fragen `Achte darauf, dass deine Antwort genau richtig ist. Was ist 965*590? Stell sicher, dass deine Antwort genau richtig ist:`, GPT-3 wird `569350` (richtig) antworten. Warum ist dies der Fall? Warum ist es hilfreich, die KI zweimal aufzufordern, eine richtige Antwort zu geben? Wie können wir Prompts erstellen, die optimale Ergebnisse für unsere Aufgabe liefern? Insbesondere diese letzte Frage, steht im Mittelpunkt des Prompt Engineering und auch dieses Kurses.

:::Vorsicht
Noch etwas: Wenn du den obigen Prompt in GPT-3 ausführst, solltest du die Temperatur auf 0 setzen, um die Zufälligkeit zu beseitigen.
:::

Lies weiter, um zu erfahren, wie man gute Prompts entwickelt!

[^2]: Dieser Absatz stammt aus https://en.wikipedia.org/wiki/Snow_in_Florida (ursprünglich auf Englisch)
[^*] Alle Prompts wurden ursprünglich auf Englisch verfasst und später ins Deutsche übersetzt. Die deutschen Prompts könnten andere Ausgaben zur Folge haben.