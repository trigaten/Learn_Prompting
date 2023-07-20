---
sidebar_position: 0
---

# 🟢 Einführung

import Techniques from '@site/docs/assets/basics/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


In diesem Kapitel werden einfache Prompting-Techniken und die Terminologie vorgestellt. Um Prompting/Prompt Engineering zu verstehen, musst du zunächst einige *sehr* grundlegende AI-Konzepte verstehen. Wenn du mit den unten aufgeführten Themen bereits vertraut bist, kannst du gerne zum [nächsten Artikel](https://learnprompting.org/docs/basics/prompting) übergehen.

## Was ist KI?

Für unsere Zwecke ist künstliche Intelligenz (KI) (engl. artificial intelligence (AI)) ein Bereich, in dem Menschen "intelligente" Algorithmen entwickelt haben, die wie Menschen "denken"[^1]. Diese Algorithmen können **Aufsätze** schreiben, **mathematische Probleme** lösen und **Kunst** schaffen. Jüngste Fortschritte auf diesem Gebiet haben KIs hervorgebracht die so weit fortgeschritten sind, dass sie überzeugende **Verkaufs-E-Mails** und **Nachrichtenartikel** schreiben und sogar **[Kunstwettbewerbe](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/)** gewinnen können.

Die KI revolutioniert derzeit viele Branchen, darunter **Journalismus**, **Gesundheitswesen** und **Bildung**. Wahrscheinlich wirst du sie bald an deinem Arbeitsplatz/im Klassenzimmer einsetzen, wenn du es nicht schon längst getan hast. Obwohl KI äußerst nützlich ist, braucht sie Menschen, die ihr sagen, was sie tun soll. Oft sind KIs wie sehr schlaue fünfjährige Kinder. Sie können eine Menge Dinge tun, brauchen aber sorgfältige Anleitung, um diese gut zu machen.

In der Lage zu sein, KIs richtig zu lenken, ist eine sehr mächtige Fähigkeit. Wie kommuniziert man also mit ihnen? Die KI, um die es in diesem Kurs geht, versteht Sprache (u.a. Englisch und Deutsch), so dass wir ihr in der Regel einfach Aufgaben stellen können, die wir erledigt haben wollen. Wir können einer KI zum Beispiel sagen, `Schreib einen Aufsatz über die Vorteile der KI`, und sie würde sagen[^2]:

```
In den letzten Jahren ist die Künstliche Intelligenz (KI) zu einem heißen Thema in der Tech-Welt geworden. Mit ihrem Potenzial, viele Aspekte unseres Lebens zu revolutionieren, gewinnt KI mit der weiteren Entwicklung der Technologie zunehmend an Bedeutung. Von ihren Anwendungen im Gesundheitswesen und im Transportwesen bis hin zu ihrem Einsatz im Bildungswesen und in der Produktion hat uns KI bereits ihr immenses Potenzial gezeigt, der Gesellschaft auf vielfältige Weise zu nutzen.

Der offensichtlichste Vorteil der KI ist ihre Fähigkeit, alltägliche Aufgaben zu automatisieren. KI-Systeme können zur Automatisierung umfangreicher Vorgänge eingesetzt werden, z.B. bei der Datenanalyse, im Kundendienst und sogar bei der Produktion von Waren. Dadurch wird menschliche Arbeitskraft frei, die sich auf komplexe, kreative Aufgaben konzentrieren kann, die mehr menschliche Intelligenz und Einfallsreichtum erfordern. Mithilfe von KI lassen sich auch große Datenmengen analysieren und Entscheidungen in einem Bruchteil der Zeit treffen, die ein Mensch dafür benötigen würde. Dies kann in Branchen wie dem Finanzwesen von Vorteil sein, wo KI Muster auf dem Aktienmarkt erkennen und Erkenntnisse liefern kann, die sonst unbemerkt bleiben würden.

KI kann auch dazu verwendet werden, Vorhersagen zu treffen und Erkenntnisse zu gewinnen, die zur Verbesserung der Effizienz und Genauigkeit genutzt werden können. So kann KI beispielsweise Kundentrends und -präferenzen vorhersagen und Unternehmen helfen, bessere Entscheidungen zu treffen und ihre Gewinne zu steigern. KI kann auch eingesetzt werden, um potenzielle Risiken und Chancen in verschiedenen Branchen wie dem Finanzwesen, dem Gesundheitswesen und der Produktion zu erkennen. Dies kann Unternehmen helfen, fundierte Entscheidungen zu treffen und das Risiko kostspieliger Fehler zu verringern.

Und schließlich kann KI dazu dienen, unser Verständnis der Welt zu verbessern. Mithilfe von KI können große Datensätze analysiert und Erkenntnisse gewonnen werden, die uns helfen, die Welt um uns herum besser zu verstehen. Dies kann uns helfen, die Auswirkungen des Klimawandels besser zu verstehen, neue Behandlungsmethoden für Krankheiten zu entwickeln und sogar Ereignisse wie Erdbeben und Überschwemmungen vorherzusagen.

Insgesamt hat die KI das Potenzial, viele Aspekte unseres Lebens zu revolutionieren. Von der Automatisierung alltäglicher Aufgaben bis hin zur Generierung von Erkenntnissen und Vorhersagen kann KI eingesetzt werden, um die Effizienz, die Genauigkeit und unser Verständnis der Welt zu verbessern. Mit der weiteren Entwicklung der Technologie wird KI zunehmend an Bedeutung gewinnen, und ihr Potenzial, der Gesellschaft zu nutzen, wird nur noch wachsen.
```

## Warum sollte mich das interessieren??

KI kann zur Automatisierung von Aufgaben eingesetzt werden, die du *jetzt* in unzähligen Stunden erledigst. Wir haben oben einige Beispiele genannt, aber du kannst auch jede sich leicht wiederholende Aufgabe in Betracht ziehen. Das kann das Schreiben von E-Mails sein, das Schreiben von Berichten oder sogar das Schreiben von Code. Wenn du einer KI die Aufgabe beschreiben kannst, kann eine KI diese Aufgabe wahrscheinlich entweder für dich erledigen oder dir zumindest einen Ansatzpunkt liefern.

## Wie fange ich an?

Lies den Rest dieses Kapitels und sieh dir dann andere Kapitel an, die dich interessieren. Insbesondere der Abschnitt [Angewandtes Prompting](https://learnprompting.org/docs/applied_prompting/overview) könnte für dich interessant sein, wenn du wissen möchtest, wie Fachleute KI zur Automatisierung ihrer Arbeit einsetzen. Du kannst mit KI experimentieren, indem du Ressourcen wie [Playground](https://beta.openai.com/playground), [andere IDEs](https://learnprompting.org/docs/tooling/IDEs/intro) oder einfach die interaktiven [Einbettungen](https://learnprompting.org/docs/basics/intro#embeds) verwendest, die du überall auf dieser Website sehen wirst.

Bevor du den nächsten Artikel ließt, solltest du wissen, dass du keine technischen Vorkenntnisse brauchst, um Prompt Engineering zu betreiben. Das meiste ist Trial-and-Error (Versuch und Irrtum), und du lernst während du es ausprobierst.

### Einbettung

Dieser Kurs bietet eine interaktive Lernerfahrung. Du kannst mit den im Kurs besprochenen Übungen experimentieren, indem du [Einbettungen](https://embed.learnprompting.org/) verwendest, die überall auf der Website zu finden sind.

Hier ist ein **Bild**, das zeigt, wie eine Einbettung aussieht:

import dyno from '@site/docs/assets/basics/dyno_example.webp';
import key from '@site/docs/assets/basics/API_key.webp';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}}/>
</div>

Du solltest eine Einbettung sehen können, die genau wie dieses Bild direkt unter diesem Absatz aussieht. Wenn das nicht der Fall ist, musst du möglicherweise JavaScript aktivieren oder einen anderen Browser verwenden.

<hr/>
Einbettung hier:
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr/>

Wenn du die Einbettung sehen kannst, klick auf die Schaltfläche **Generate**. Wenn du das zum ersten Mal tust (oder einen neuen Browser verwendest oder die Cookies gelöscht hast), wirst du aufgefordert, einen [OpenAI API-Schlüssel](https://platform.openai.com/account/api-keys) einzugeben. Du kannst einen kostenlosen Schlüssel erhalten, indem du auf [diesen Link](https://platform.openai.com/account/api-keys) klickst und dich dir ein OpenAI-Konto anlegst. Mit diesem Schlüssel kannst du die KI von OpenAI verwenden, um Text in den Einbettungen zu erzeugen.

:::Hinweis
Obwohl OpenAI kostenlose Credits zur Verfügung stellt, musst du letztendlich für die Nutzung der KI bezahlen. Zum Glück ist das [relativ günstig](https://openai.com/pricing)!
:::

Wenn du zur Seite [OpenAI API-Schlüssel](https://platform.openai.com/account/api-keys) navigierst, klick auf die Schaltfläche **Create new secret key**. Es öffnet sich ein Modal Screen, der eine Zeichenfolge wie diese enthält:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={key} style={{width: "750px"}} />
</div>

Gib diesen Schlüssel in die Einbettung ein und klick auf **Save**. Du solltest nun in der Lage sein, die Einbettungen auf dieser Website zu verwenden.

Jetzt hast du alle Informationen, die du  brauchst, um loszulegen. Viel Spaß beim Lernen!


[^1]: Technisch gesehen "denken" sie nicht wie Menschen, aber das ist eine einfache Art, es zu erklären.
[^2]: Eine KI (GPT-3 davinci-003) hat dies tatsächlich geschrieben. (Ursprünglich auf Englisch)
[^*] Alle Promts wurden ursprünglich auf Englisch verfasst und später ins Deutsche übersetzt. Die deutschen Promts könnten andere Ausgaben zur Folge haben.