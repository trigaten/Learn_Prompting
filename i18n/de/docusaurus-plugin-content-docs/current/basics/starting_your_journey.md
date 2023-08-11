---
sidebar_position: 1000
---

# 🟢 Starte Deine Reise


import Steps from '@site/docs/assets/basics/steps.svg';

<div style={{textAlign: 'center'}}>
  <Steps style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Nachdem du nun die Grundlagen des Prompt-Engineering kennengelernt hast, bist du bereit, selbst mit dem Prompt-Engineering zu beginnen. Der Rest dieses Kurses wird zusätzliche Techniken und Ressourcen enthalten, aber der beste Weg, PE zu lernen, ist, mit eigenen Prompts zu experimentieren. Diese Seite zeigt dir, wie du mit der Lösung eines beliebigen Prompt-Engineering-Problems beginnen kannst.

Nehmen wir an, du möchtest einen Prompt schreiben, der eine fesselnde, interaktive Geschichte mit ChatGPT erzeugt.

## Step 1: Recherche

Als Erstes solltest du dich über den von dir gewünschten Prompt informieren. Neben dem Googeln sind auch die folgenden Quellen sehr nützlich:

- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (Und andere Subreddits)
- [Learn Prompting Discord](https://discord.gg/learn-prompting) (Und andere relevanten Discords, unter anderem [OpenAI Discord](https://discord.gg/openai))

Vielleicht ist [das hier](https://prompts.chat/#act-as-a-text-based-adventure-game) von [Heroj04](https://github.com/Heroj04) ein guter Ausgangspunkt:
> Ich möchte, dass du als ein textbasiertes Abenteuerspiel agierst. Ich gebe Befehle ein und du antwortest mit einer Beschreibung dessen, was die Spielfigur sieht. Ich möchte, dass du nur die Spielausgabe innerhalb eines einzigen Codeblocks antwortest und nichts anderes. Schreibe keine Erklärungen. Gib keine Befehle ein, es sei denn, ich weise dich an, dies zu tun. Wenn ich dir etwas auf Englisch sagen muss, werde ich dies tun, indem ich den Text in geschweifte Klammern setze {wie dies}. mein erster Befehl lautet Aufwachen.

## Step 2: Experimentieren
i18n/de/docusaurus-plugin-content-docs/current/basics/roles.md
Jetzt werden wir den Prompt in ChatGPT eingeben und sehen, was passiert.

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}}/>
</div>

Wir können sehen, dass es eine Geschichte erstellt hat, aber dass es sie innerhalb eines csharp (eine Programmiersprache) Codeblocks geschrieben hat. Vielleicht wollen wir das nicht, also ändern wir den Prompt zu:

> Ich möchte, dass du als ein textbasiertes Abenteuerspiel agierst. Ich gebe Befehle ein und du antwortest mit einer Beschreibung dessen, was die Figur sieht. Schreib keine Erklärungen. Mein erster Befehl lautet Aufwachen.


**ChatGPT Antwort**:
```text
// highlight-start
Du öffnest langsam die Augen und findest dich auf dem kalten, harten Boden liegend wieder. Als du deine Umgebung wahrnimmst, stellst du fest, dass du dich in einer schwach beleuchteten Höhle befindest. Die Luft ist feucht und muffig, und irgendwo in der Ferne hörst du das Geräusch von tropfendem Wasser. Dein Kopf pocht und du fühlst dich desorientiert. Du musst herausfinden, wo du bist und wie du von hier wegkommst.
// highlight-end
```

Schön, jetzt gibt es die Geschichte als reinen Text aus. Unserem Prompt fehlt es jedoch an Details. Fügen wir dem Prompt etwas mehr Struktur hinzu:

> Ich möchte, dass du als ein textbasiertes Abenteuerspiel agierst. Ich gebe Befehle ein und du antwortest mit einer Beschreibung dessen, was die Figur sieht. Schreibe keine Erklärungen. Verwende eine blumige Sprache und beschreibende Worte. Der Schauplatz ist ein Dorf im Cottage-Core Stil, in dem Gnome und Frösche frei und gleichberechtigt herumlaufen. Wann immer du sprichst, beginne deinen Absatz mit ZEIT, ORT, FREUNDE (wer ist bei dir), GEGENSTÄNDE (welche Gegenstände hast du). Mein erster Befehl lautet Aufwachen.

**ChatGPT **ChatGPT Antwort**:
**:
```text
// highlight-start
ZEIT: Früher Morgen
ORT: Ein gemütliches, malerisches Häuschen in einem Dorf, umgeben von üppigem Grün und duftenden Blumen.
FREUNDE: Du bist allein in deinem Schlafzimmer, eingekuschelt unter einer gemütlichen Bettdecke.
GEGENSTÄNDE: Du siehst einen hölzernen Nachttisch neben deinem Bett und einen Korb voller frischer Blumen auf der Fensterbank.

Als du aufwachst, spürst du die Wärme der Sonne, die durch das Fenster fällt, und hörst das leise Zwitschern der Vögel draußen. Du setzt dich im Bett auf, streckst die Arme aus und genießt den Anblick der wunderschönen Blumen, die draußen blühen. Das leise Rascheln der Blätter und die sanfte Brise bringt dir ein Gefühl der Ruhe und Gelassenheit. Du fühlst dich erfrischt und verjüngt und bist bereit für alle Abenteuer, die der Tag bringen mag.
// highlight-end
```

Ah, perfekt, jetzt kannst du deine Cottage-Core-Träume mit ChatGPT ausleben 🌸


## Step 3: Feedback einholen und verbessern

Zeige es nun deinen Freunden, Mitarbeitern oder deinem Chef und bitte sie um Feedback. Wenn es ihnen gefällt, großartig! Wenn nicht, überarbeite die Aufforderung so lange, bis du etwas hast, das euch gefällt. Du kannst auch in den oben erwähnten Communities nach Feedback fragen. Dieser Schritt hört nie wirklich auf. Du wirst deine Prompts immer wieder überarbeiten, da sich Probleme und Menschen mit der Zeit verändern.

## Fazit

Mach Prompt-Engineering so, wie *du* es willst. Ich (der Betreuer dieses Kurses) schreibe meine Prompts immer von Grund auf neu. Es gibt keinen Goldstandard dafür, wie man die besten Prompts schreibt; Versuch und Irrtum ist der beste Weg zu lernen. Viel Spaß beim Lernen und viel Erfolg mit dem Rest des Kurses!

:::Anmerkung
Die Empfehlungen in diesem Artikel gelten für alle Prompt-Engineering-Probleme, nicht nur für das Schreiben interaktiver Geschichten!
:::


## Anmerkungen

- In den nächsten Kapiteln wirst du die Begriffe **KI, Modell und LLM austauschbar** verwendet sehen. Sieh die [Vokabel-Referenz](https://learnprompting.org/docs/vocabulary) für mehr Informationen.

[^*] Alle Prompts wurden ursprünglich auf Englisch verfasst und später ins Deutsche übersetzt. Die deutschen Prompts könnten andere Ausgaben zur Folge haben.