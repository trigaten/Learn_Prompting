---
sidebar_position: 7
---

# 🟢 Prompts formalisieren

import FormalPrompt from '@site/docs/assets/basics/formal_prompt.svg';

<div style={{textAlign: 'center'}}>
  <FormalPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


Wir haben nun mehrere Arten von Prompts sowie Möglichkeiten, sie zu kombinieren, behandelt. Auf dieser Seite findest du Begriffe, die die verschiedenen Arten von Prompts erklären. Obwohl es Ansätze zur Formalisierung des Diskurses über das Prompt-Engineering gibt (@white2023prompt), ist das Feld ständig im Wandel begriffen, so dass wir dir gerade genug Informationen für den Einstieg geben.

## Teile eines Prompts

Es gibt ein paar verschiedene Teile eines Prompts, die du immer wieder sehen wirst. Die sind:

- Eine Rolle
- Eine Anweisung/Aufgabe
- Eine Frage
- Kontext
- Beispiele (Few Shot)

Auf den vorhergehenden Seiten haben wir Rollen, Anweisungen und Beispiele behandelt. Eine Frage ist einfach eine Frage! (z. B. `Was ist die Hauptstadt von Frankreich?`). Kontext ist jede relevante Information, die das Modell bei der Beantwortung der Frage/Ausführung der Anweisung verwenden soll.

Nicht alle dieser Elemente kommen in jedem Prompt vor, und wenn einige von ihnen vorkommen, gibt es keine Standardreihenfolge für sie. Die folgenden beiden Prompts, die jeweils eine Rolle, eine Anweisung und einen Kontext enthalten, bewirken in etwa das Gleiche:

```text
Du bist ein Arzt. Lies diese Anamnese und sag die Risiken für den Patienten voraus:

1. Januar 2000: Bruch des rechten Arms beim Basketballspielen. Wird mit einem Gips behandelt.
15. Februar 2010: Diagnose: Bluthochdruck. Verschreibung von Lisinopril.
10. September 2015: Erkrankte an einer Lungenentzündung. Wurde mit Antibiotika behandelt und erholte sich vollständig.
1. März 2022: Erlitt eine Gehirnerschütterung bei einem Autounfall. Wurde ins Krankenhaus eingeliefert und 24 Stunden lang überwacht.
```

```text
1. Januar 2000: Bruch des rechten Arms beim Basketballspielen. Wird mit einem Gips behandelt.
15. Februar 2010: Diagnose: Bluthochdruck. Verschreibung von Lisinopril.
10. September 2015: Erkrankte an einer Lungenentzündung. Wurde mit Antibiotika behandelt und erholte sich vollständig.
1. März 2022: Erlitt eine Gehirnerschütterung bei einem Autounfall. Wurde ins Krankenhaus eingeliefert und 24 Stunden lang überwacht.

Du bist ein Arzt. Lies diese Anamnese und sag die Risiken für den Patienten voraus:
```

Der zweite Prompt ist jedoch wahrscheinlich vorzuziehen, da die Anweisung der letzte Teil des Prompts ist. Dies ist gut, da es weniger wahrscheinlich ist, dass der LLM einfach mehr Kontext schreibt, anstatt der Anweisung zu folgen. Zum Beispiel könnte der LLM bei dem ersten Prompt eine neue Zeile hinzufügen: `15. März 2022: Nachfolgetermin beim Neurologen zur Beurteilung des Genesungsfortschritts der Gehirnerschütterung angesetzt`.


## Ein Standard Prompt

Wir haben bisher von einigen verschiedenen Formaten von Prompts gehört. Nun wollen wir schnell zum Anfang zurückkehren und einen Standard Prompt definieren. In Anlehnung an Kojima et al. (@kojima2022large) bezeichnen wir Prompts, die nur aus einer Frage bestehen, als Standard Prompts. Wir betrachten auch Prompts, die nur aus einer Frage bestehen, die im QA-Format verfasst wurde, als Standard Prompts.

#### Warum sollte mich das interessieren?

Viele Artikel/Paper, auf die wir verweisen, verwenden diesen Begriff. Wir definieren ihn, damit wir über 
neue Arten von Prompts im Gegensatz zu Standard-Prompts diskutieren können. 

### Zwei Beispiele für Standard Prompts:


_Standard Prompt_
```
Was ist die Hauptstadt Frankreichs?
```

_Standard Prompt im QA Format_
```
Q: Was ist die Hauptstadt Frankreichs?

A:
```

## Few Shot Standard Prompts

Few Shot Standard Prompts (@liu2021pretrain) sind nur Standard Prompts, die _Exemplare_
enthalten. Exemplare sind Beispiele für die Aufgabe, die der Prompt zu lösen versucht, 
die im Prompt selbst enthalten sind (@brown2020language). In der Forschung werden die Few Shot Standard Prompts 
manchmal einfach als Standard Prompts bezeichnet (obwohl wir versuchen, dies in diesem Leitfaden nicht zu tun).

### Zwei Beispiele für Few Shot Standard Prompts:

_Few Shot Standard Prompt_

```
Was ist die Hauptstadt von Spanien?
Madrid
Was ist die Hauptstadt Italiens?
Rom
Was ist die Hauptstadt Frankreichs?
```

_Few Shot Standard Prompt im QA Format_
```
Q: Was ist die Hauptstadt von Spanien?
A: Madrid
Q: Was ist die Hauptstadt Italiens?
A: Rom
Q: Was ist die Hauptstadt Frankreichs?
A:
```

Few Shot Prompts erleichtern das Lernen im Kontext, d.h. die Fähigkeit, ohne Parameteraktualisierungen zu lernen (@zhao2021calibrate).
