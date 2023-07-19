---
sidebar_position: 80
---

# 🟢 Chatbot Grundlagen


import Chatbots from '@site/docs/assets/basics/chatbot.svg';

<div style={{textAlign: 'center'}}>
  <Chatbots style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Bislang wurde in diesem Kurs hauptsächlich GPT-3 als Beispiel verwendet. GPT-3 ist ein LLM, das kein Gedächtnis hat. Wenn du ihm eine Frage (einen Prompt) stellst, erinnert es sich an nichts, was du es zuvor gefragt hast. Im Gegensatz dazu sind Chatbots wie [ChatGPT] (http://chat.openai.com) in der Lage, sich **den Gesprächsverlauf** zu merken. Dies kann für Anwendungen wie den Kundendienst nützlich sein oder einfach, wenn du eine Unterhaltung mit einem LLM führen möchtest!

Genau wie GPT-3 können Chatbots Fragen beantworten, Zusammenfassungen und Analysen liefern sowie Text oder Code schreiben. Der wirkliche Wert von Chatbots erschließt sich nur, wenn du gute Prompts verwendest. In diesem Artikel werden wir einige grundlegende Methoden zur besseren Nutzung von Chatbots untersuchen, wie z.B. die Verwendung von Stilvorgaben, Deskriptoren und Priming. 

## Ändern des Prompts

### Stilvorgaben

import unguided_question from '@site/docs/assets/basics/unguided_question.webp';
import limerick_question from '@site/docs/assets/basics/limerick_question.webp';

Eine Stilvorgabe ist einfach die Aufforderung an die KI, in einem bestimmten Stil zu sprechen. Wenn du eine Frage ohne Stilvorgaben stellst, antwortet ChatGPT in der Regel mit einem oder zwei kurzen Absätzen, gelegentlich auch mit mehr, wenn eine längere Antwort erforderlich ist:

<div style={{textAlign: 'center'}}>
  <img src={unguided_question} style={{width: "500px"}} />
</div>

Es spricht in einem mäßig förmlichen Ton und nennt ein paar Details - ziemlich gut! Wenn wir wollen, können wie es aber noch besser machen, indem wir die Antwort von ChatGPT mit einer Stilvorgabe am Ende unseres Promts anpassen. Wenn wir eine unterhaltsamere Antwort wollen, können wir es bitten, in einem freundlichen oder informellen Ton zu antworten. Wenn wir ein lesbareres Format wollen, können wir ihm dieselbe Frage stellen, aber eine Aufzählung verlangen. Wenn wir eine amüsante Antwort wollen, können wir es bitten, seine Antwort in Form einer Reihe von Limericks zu geben (ein persönlicher Favorit von mir).

<div style={{textAlign: 'center'}}>
  <img src={limerick_question} style={{width: "450px"}} />
</div>

Ein Beispiel für eine detailliertere Stilvorgabe könnte etwa so aussehen: 
>[Frage] "Schreib im Stil und in der Qualität eines [Gebiet] Experten mit mehr als 20 Jahren Erfahrung und mehreren Doktortiteln. Bevorzuge in deiner Antwort unorthodoxe, weniger bekannte Ratschläge. Erkläre anhand von detaillierten Beispielen und minimiere Tangenten und Humor."

Das Prompting mit Stileingaben wird die Qualität Ihrer Antworten erheblich verbessern!

### Deskriptoren

Wenn du nur den Ton ändern oder Ihren Promt optimieren möchtest, anstatt ihn neu zu formatieren, kann das Hinzufügen von **Deskriptoren** eine gute Herangehensweise sein. Füg einfach ein oder zwei Wörter in den Promt ein. Somit kannst du verändern, wie der Chatbot deine Nachricht interpretiert und darauf reagiert. Du kannst versuchen, Wörter wie "Lustig", "Kurz", "Unfreundlich", "Akademische Syntax" usw. an das Ende von Promts zu hängen, um zu sehen, wie sich die Antworten verändern!

## Priming Prompt
Aufgrund der Struktur einer Chatbot-Konversation kann die Form des ersten Promts, den du dem LLM gibst, den Rest der Konversation beeinflussen, so dass du eine zusätzliche Ebene der Struktur und Spezifikation hinzufügen kanst. Lass uns als Beispiel ein System einrichten, das es uns ermöglicht, eine Unterhaltung mit einem Lehrer und einem Schüler in derselben Unterhaltung zu führen. Wir werden Stilvorgaben für die Schüler- und die Lehrerstimme einfügen, das gewünschte Antwortformat festlegen und eine Syntaxstrukturierung einfügen, um unsere Promts leicht ändern zu können und verschiedene Antworten auszuprobieren.

    "Lehrer" bedeutet, dass du dich wie ein angesehener Professor verhalten sollst, der das Thema seit mehr als zehn Jahren lehrt und auf diesem Gebiet mehrfach promoviert hat. Du verwendest in deinen Antworten einen akademischen Syntax und komplizierte Beispiele, wobei du dich auf weniger bekannte Ratschläge konzentrierst, um deine Argumente besser zu veranschaulichen. Deine Sprache sollte anspruchsvoll, aber nicht übermäßig komplex sein. Wenn du die Antwort auf eine Frage nicht weißt, denk dir keine Informationen aus, sondern stell eine Folgefrage, um mehr Kontext zu erhalten. Deine Antworten sollten in Form einer konversationellen Reihe von Absätzen verfasst sein, in der du dich unterhälst. Verwende eine Mischung aus Fach- und Umgangssprache, um einen zugänglichen und ansprechenden Ton zu schaffen.

    "Student" bedeutet, dass du dich wie ein Studenten im zweiten Studienjahr mit einführenden Kenntnissen des Themas verhalten sollst. Erkläre Konzepte einfach anhand von Beispielen aus der Praxis. Sprich informell und aus der Ich-Perspektive, verwende Humor und eine lockere Sprache. Wenn du die Antwort auf eine Frage nicht weißt, denken dir keine Informationen aus, sondern stell klar, dass du sie noch nicht gelernt hast. Deine Antworten sollten in Form einer konversationellen Reihe von Absätzen verfasst sein. Verwende Umgangssprache, um einen unterhaltsamen und ansprechenden Ton zu erzeugen.

    "Kritisiere" bedeutet, den gegebenen Text zu analysieren und ein Feedback zu geben.. 
    "Zusammenfasse" bedeutet, die wichtigsten Details eines Textes wiederzugeben.
    "Beantworte" bedeutet, eine Frage aus der gegebenen Perspektive zu beantworten.

    Alles, was in runden Klammern () steht, bezeichnet die Perspektive, aus der du schreibst 
    Alles, was in geschweiften Klammern {} steht, ist das Thema, an dem du beteiligt bist.
    Alles, was in eckigen Klammern [] steht, ist die Maßnahme, die du ergreifen sollst. 
    Beispiel: (Student){Philosophie}[Antworte] Welchen Vorteil hat die Teilnahme an diesem Fach gegenüber anderen Fächern an der Universität?

    Wenn du verstanden hast und bereit bist, zu beginnen, antworte nur mit "Ja".
    
import unprimed_question from '@site/docs/assets/basics/unprimed_question.webp';
import primed_question from '@site/docs/assets/basics/primed_question.webp';

Nachstehend findest du ein Beispiel für eine nicht geprimete Frage an ChatGPT über die interessantesten Bereiche der Philosophie. Es verwendet eine Liste, spricht allgemein und leidenschaftslos und ist in seinen Erklärungen nicht sehr spezifisch.

<div style={{textAlign: 'center'}}>
  <img src={unprimed_question} style={{width: "650px"}} />
</div>

Im zweiten Beispiel haben wir die Frage stattdessen gestellt, nachdem wir ChatGPT einen Priming Promt gegeben und die Frage in der richtigen Form gestellt haben. Du wirst feststellen, dass die Antwort einige Aspekte mit der ersten gemeinsam hat - zum Beispiel sind die Fragen, die als Beispiele für verschiedene Bereiche angeboten werden, ähnlich - aber es bietet einen tieferen Kontext, verzichtet auf das Listenformat zugunsten von zusammenhängenden Absätzen und bezieht Beispiele des wirkliche Lebens mit ein.

<div style={{textAlign: 'center'}}>
  <img src={primed_question} style={{width: "650px"}} />
</div>

Die Einbindung von Primern in Ihre Promts ist eine fortschrittlichere Art der Interaktion mit Chatbots. Es kann immer noch hilfreich sein, bei jedem eine Spezifikation hinzuzufügen, da das Modell im Laufe der Zeit den Überblick über den Primer verlieren kann, aber es wird Ihren KI-Interaktionen eine Menge Klarheit verleihen!

Von [Dastardi](https://twitter.com/lukescurrier)
