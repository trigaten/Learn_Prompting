---
sidebar_position: 0
---

# 🟢 Einführung

import Techniques from '@site/docs/assets/techniques.svg';

<div style={{textAlign: 'center'}}>
  <Techniques style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


In diesem Kapitel werden einfache Prompting-Techniken und die Terminologie vorgestellt. Um Prompting/Prompt Engineering zu verstehen, müssen Sie zunächst einige *sehr* grundlegende AI-Konzepte verstehen. Wenn Sie mit den unten aufgeführten Themen bereits vertraut sind, können Sie gerne zum [nächsten Artikel](https://learnprompting.org/docs/basics/prompting) übergehen.

## Was ist KI?

Für unsere Zwecke ist künstliche Intelligenz (KI) (engl. artificial intelligence (AI)) ein Bereich, in dem Menschen "intelligente" Algorithmen entwickelt haben, die wie Menschen "denken"[^1]. Diese Algorithmen können **Aufsätze** schreiben, **mathematische Probleme** lösen und **Kunst** schaffen. Jüngste Fortschritte auf diesem Gebiet haben KIs hervorgebracht die so weit fortgeschritten sind, dass sie überzeugende **Verkaufs-E-Mails** und **Nachrichtenartikel** schreiben und sogar **Kunstwettbewerbe](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/)** gewinnen können.

Die KI revolutioniert derzeit viele Branchen, darunter **Journalismus**, **Gesundheitswesen** und **Bildung**. Wahrscheinlich werden Sie sie bald an Ihrem Arbeitsplatz/im Klassenzimmer einsetzen, wenn Sie es nicht schon längst getan haben. Obwohl KI äußerst nützlich ist, braucht sie Menschen, die ihr sagen, was sie tun soll. Oft sind KIs wie sehr schlaue fünfjährige Kinder. Sie können eine Menge Dinge tun, aber sie brauchen sorgfältige Anleitung, um sie gut zu machen.

In der Lage zu sein, KIs richtig zu lenken, ist eine sehr mächtige Fähigkeit. Wie kommuniziert man also mit ihnen? Die KI, um die es in diesem Kurs geht, versteht Englisch (und andere Sprachen), so dass wir in der Regel einfach Aufgaben beschreiben können, die wir erledigt haben wollen. Wir können einer KI zum Beispiel sagen, `Schreib einen Aufsatz über die Vorteile der KI`, und sie würde sagen[^2]:

```
In den letzten Jahren ist die Künstliche Intelligenz (KI) zu einem heißen Thema in der Tech-Welt geworden. Mit ihrem Potenzial, viele Aspekte unseres Lebens zu revolutionieren, gewinnt KI mit der weiteren Entwicklung der Technologie zunehmend an Bedeutung. Von ihren Anwendungen im Gesundheitswesen und im Transportwesen bis hin zu ihrem Einsatz im Bildungswesen und in der Produktion hat uns KI bereits ihr immenses Potenzial gezeigt, der Gesellschaft auf vielfältige Weise zu nutzen.

Der offensichtlichste Vorteil der KI ist ihre Fähigkeit, alltägliche Aufgaben zu automatisieren. KI-Systeme können zur Automatisierung umfangreicher Vorgänge eingesetzt werden, z.B. bei der Datenanalyse, im Kundendienst und sogar bei der Produktion von Waren. Dadurch wird menschliche Arbeitskraft frei, die sich auf komplexe, kreative Aufgaben konzentrieren kann, die mehr menschliche Intelligenz und Einfallsreichtum erfordern. Mithilfe von KI lassen sich auch große Datenmengen analysieren und Entscheidungen in einem Bruchteil der Zeit treffen, die ein Mensch dafür benötigen würde. Dies kann in Branchen wie dem Finanzwesen von Vorteil sein, wo KI Muster auf dem Aktienmarkt erkennen und Erkenntnisse liefern kann, die sonst unbemerkt bleiben würden.

KI kann auch dazu verwendet werden, Vorhersagen zu treffen und Erkenntnisse zu gewinnen, die zur Verbesserung der Effizienz und Genauigkeit genutzt werden können. So kann KI beispielsweise Kundentrends und -präferenzen vorhersagen und Unternehmen helfen, bessere Entscheidungen zu treffen und ihre Gewinne zu steigern. KI kann auch eingesetzt werden, um potenzielle Risiken und Chancen in verschiedenen Branchen wie dem Finanzwesen, dem Gesundheitswesen und der Produktion zu erkennen. Dies kann Unternehmen helfen, fundierte Entscheidungen zu treffen und das Risiko kostspieliger Fehler zu verringern.

Und schließlich kann KI dazu dienen, unser Verständnis der Welt zu verbessern. Mithilfe von KI können große Datensätze analysiert und Erkenntnisse gewonnen werden, die uns helfen, die Welt um uns herum besser zu verstehen. Dies kann uns helfen, die Auswirkungen des Klimawandels besser zu verstehen, neue Behandlungsmethoden für Krankheiten zu entwickeln und sogar Ereignisse wie Erdbeben und Überschwemmungen vorherzusagen.

Insgesamt hat die KI das Potenzial, viele Aspekte unseres Lebens zu revolutionieren. Von der Automatisierung alltäglicher Aufgaben bis hin zur Generierung von Erkenntnissen und Vorhersagen kann KI eingesetzt werden, um die Effizienz, die Genauigkeit und unser Verständnis der Welt zu verbessern. Mit der weiteren Entwicklung der Technologie wird KI zunehmend an Bedeutung gewinnen, und ihr Potenzial, der Gesellschaft zu nutzen, wird nur noch wachsen.
```

## Warum sollte mich das interessieren??

KI kann zur Automatisierung von Aufgaben eingesetzt werden, die Sie *jetzt* unzählige Stunden lang erledigen. Wir haben oben einige Beispiele genannt, aber Sie können auch jede sich leicht wiederholende Aufgabe in Betracht ziehen. Das kann das Schreiben von E-Mails sein, das Schreiben von Berichten oder sogar das Schreiben von Code. Wenn Sie einer KI die Aufgabe beschreiben können, kann eine KI diese Aufgabe wahrscheinlich entweder für Sie erledigen oder Ihnen zumindest einen Ansatzpunkt liefern.

## Wie fange ich an?

Lesen Sie den Rest dieses Kapitels und sehen Sie sich dann andere Kapitel an, die Sie interessieren. Insbesondere der Abschnitt [Angewandtes Prompting](https://learnprompting.org/docs/applied_prompting/overview) könnte für Sie interessant sein, wenn Sie wissen möchten möchten, wie Fachleute KI zur Automatisierung ihrer Arbeit einsetzen. Sie können mit KI experimentieren, indem Sie Ressourcen wie [Playground](https://beta.openai.com/playground), [andere IDEs](https://learnprompting.org/docs/tooling/IDEs/intro) oder einfach die interaktiven [Einbettungen](https://learnprompting.org/docs/basics/intro#embeds) verwenden, die Sie überall auf dieser Website sehen werden.

Bevor Sie den nächsten Artikel lesen, sollten Sie wissen, dass Sie keine technischen Vorkenntnisse brauchen, um Prompt Engineering zu betreiben. Das meiste ist Trial-and-Error (Versuch und Irrtum), und Sie lernen während Sie es ausprobieren.

### Einbettung

Dieser Kurs bietet eine interaktive Lernerfahrung. Sie können mit den im Kurs besprochenen Übungen experimentieren, indem Sie [Einbettungen](https://embed.learnprompting.org/) verwenden, die überall auf der Website zu finden sind.

Hier ist ein **Bild**, das zeigt, wie eine Einbettung aussieht:

import dyno from '@site/docs/assets/basics/dyno_example.png';
import key from '@site/docs/assets/API_key.png';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}} />
</div>

Sie sollten eine Einbettung sehen können, die genau wie dieses Bild direkt unter diesem Absatz aussieht. Wenn das nicht der Fall ist, müssen Sie möglicherweise JavaScript aktivieren oder einen anderen Browser verwenden.

<hr/>
Einbettung hier:
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"280px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr/>

Wenn Sie die Einbettung sehen können, klicken Sie auf die Schaltfläche **Erstellen**. Wenn Sie die Seite zum ersten Mal benutzen (oder einen neuen Browser verwenden oder die Cookies gelöscht haben), werden Sie aufgefordert, einen [OpenAI API-Schlüssel](https://platform.openai.com/account/api-keys) einzugeben. Sie können einen kostenlosen Schlüssel erhalten, indem Sie auf [diesen Link](https://platform.openai.com/account/api-keys) klicken und sich für ein OpenAI-Konto anmelden. Mit diesem Schlüssel können Sie die KI von OpenAI verwenden, um Text in den Einbettungen zu erzeugen.

:::Hinweis
Obwohl OpenAI kostenlose Credits zur Verfügung stellt, müssen Sie letztendlich für die Nutzung der KI bezahlen. Zum Glück ist sie [relativ günstig](https://openai.com/pricing)!
:::

Wenn Sie zur Seite [OpenAI API-Schlüssel](https://platform.openai.com/account/api-keys) navigieren, klicken Sie auf die Schaltfläche **Create new secret key**. Es öffnet sich ein Modal Screen, der eine Zeichenfolge wie diese enthält:

<div style={{textAlign: 'center'}}>
  <img src={key} style={{width: "750px"}} />
</div>

Geben Sie diesen Schlüssel in die Einbettung ein und klicken Sie auf **Save**. Sie sollten nun in der Lage sein, die Einbettungen auf dieser Website zu verwenden.

Jetzt haben Sie alle Informationen, die Sie brauchen, um loszulegen. Viel Spaß beim Lernen!


[^1]: Technisch gesehen "denken" sie nicht wie Menschen, aber das ist eine einfache Art, es zu erklären.
[^2]: Eine KI (GPT-3 davinci-003) hat dies tatsächlich geschrieben. (Ursprünglich auf Englisch)
