---
sidebar_position: 2
---
# 🟢 Anweisungen geben

import InstructionPrompt from '@site/docs/assets/basics/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>


Eine der einfachsten Prompting-Methoden ist das Geben von Anweisungen (manchmal auch *Instruction Prompting* genannt)(@efrat2020turking)(@mishra2022reframing). Wir haben bereits in einem früheren Abschnitt eine einfache Anweisung gesehen (`Stell sicher, dass deine Antwort genau richtig ist. Was ist 965*590? Stell sicher, dass deine Antwort genau richtig ist:`). Allerdings, können moderne KIs viel komplexere Anweisungen befolgen. 

Unten siehst du unsere erste [Einbettung](https://learnprompting.org/docs/basics/intro#embeds). Wenn du sie nicht siehst, stell sicher, dass du Javascript in deinem Browser aktiviert hast. Da es sich um eine interaktive Demo handelt, kannst du den Text bearbeiten und auf `Generate` klicken, um die KI erneut zu starten.

#### Example 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRvZSwgSm9obiIsInByb21wdCI6IkEgdXNlciBoYXMgaW5wdXQgdGhlaXIgZmlyc3QgYW5kIGxhc3QgbmFtZSBpbnRvIGEgZm9ybS4gV2UgZG9uJ3Qga25vdyBpbiB3aGljaCBvcmRlciBcbnRoZWlyIGZpcnN0L2xhc3QgbmFtZSBpcywgYnV0IHdlIG5lZWQgaXQgdG8gYmUgaW4gdGhlIGZvcm1hdCAnTGFzdCwgRmlyc3QnLiBDb252ZXJ0IHRoZSBmb2xsb3dpbmc6XG5cbmpvaG4gZG9lIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>Die KI ist problemlos in der Lage, dieses Problem zu lösen. Wir können sie auch mit der Lösung vieler anderer einfachen und komplexen Probleme beauftragen.

#### Example 2

Hier ist ein komplizierteres Beispiel[^A]:

```
Lies die folgende Verkaufs-E-Mail. Entferne alle persönlich identifizierbaren Informationen (PII),
und ersetze sie durch den entsprechenden Platzhalter. Ersetze zum Beispiel den Namen "John Doe"
durch "[NAME]".

Hallo John,

Ich schreibe Ihnen, weil ich gesehen habe, dass Sie kürzlich ein neues Auto gekauft haben. Ich bin ein Verkäufer bei einem örtlichen Autohaus (Cheap Dealz), und ich wollte Ihnen mitteilen, dass wir ein tolles Angebot für ein neues Auto haben. Wenn Sie interessiert sind, lassen Sie es mich bitte wissen.

Danke!

Jimmy Smith

Telefon: 410-805-2345
E-Mail: jimmysmith@cheapdealz.com
```

Hier ist die [Antwort der KI](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Hallo [NAME],

Ich schreibe Ihnen, weil ich gesehen habe, dass Sie kürzlich ein neues Auto gekauft haben. Ich bin ein Verkäufer bei einem örtlichen Autohaus ([Autohaus]), und ich wollte Ihnen mitteilen, dass wir ein tolles Angebot für ein neues Auto haben. Wenn Sie interessiert sind, lassen Sie es mich bitte wissen.

Danke!

[Verkäufer*in]

Telefon: [Telefonnummer]
E-Mail: [E-Mail Adresse]
```

Es ist sehr spannend zu sehen, wie das Modell von den Anweisungen aus extrapolieren kann. Zum Beispiel weiß es, dass es `Cheap Dealz` mit `[Autohaus]` und `Jimmy Smith` mit `[Verkäufer*in]` ersetzen soll, obwohl wir ihm nicht ausdrücklich gesagt haben, dies zu tun.

[^A]: KI zu erlauben, personenbezogene Daten aus Texten zu entfernen, ist ein vielversprechender Ansatz, sollte aber mit äußerster Vorsicht eingesetzt werden, da sie Fehler machen kann.
[^*] Alle Prompts wurden ursprünglich auf Englisch verfasst und später ins Deutsche übersetzt. Die deutschen Prompts könnten andere Ausgaben zur Folge haben.
