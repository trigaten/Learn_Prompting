---
sidebar_position: 3
---

# 🟢 Rollen Prompting

import RolePrompt from '@site/docs/assets/basics/role_prompt.svg';

<div style={{textAlign: 'center'}}>
  <RolePrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Eine weitere Promting Technik ist die Zuweisung einer Rolle an die KI. Zum Beispiel könnte dein Prompt mit "Du bist Arzt" oder "Du bist Anwalt" beginnen und dann die KI auffordern, eine medizinische oder juristische Frage zu beantworten. Hier ist ein Beispiel:

```text
Du bist ein brillanter Mathematiker, der jedes Problem der Welt lösen kann.
Versuche, die folgende Aufgabe zu lösen:

Wie viel ist 100*100/400*56?

// highlight-start
Die Antwort ist 1400.
// highlight-end
```

Die Antwort der KI (GPT-3 davinci-003) ist grün hervorgehoben:


Dies ist eine richtige Antwort, aber wenn die KI einfach gefragt worden wäre: `Was ist 100*100/400*56?`, hätte sie `280` (falsch) geantwortet. Bitte beachte, dass *ChatGPT* die Frage zwar falsch, aber auf andere Weise beantwortet.

Wenn wir der KI eine Rolle zuweisen, geben wir ihr einen Kontext. Dieser Kontext hilft der KI, die Frage besser zu verstehen. Wenn sie die Frage besser versteht, gibt die KI oft bessere Antworten.

:::Hinweis
Diese Technik ist bei moderneren KIs (z.B. GPT-3 davinci-003) nicht mehr so effektiv. Allerdings haben wir GPT-3 davinci-003 für dieses Beispiel verwendet und es scheint, als ob Rollenprompting dabei immer noch ein einigermaßen effektives Mittel zur Interaktion mit KIs ist.
:::

## Beispiele

Du kannst einige weitere interessante Prompts im [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts)
Repository auf GitHub finden. Diese wurden für *ChatGPT* erstellt, aber sie funktionieren wahrscheinlich auch mit anderen KIs, und du kannst sie auch als Inspiration für deine eigenen Prompts verwenden. Sehen wir uns zwei Beispiele an:

> ### Als Etymologe handeln
> Ich will, dass du als Etymologe handelst. Ich gebe dir ein Wort, und du recherchierst den Ursprung dieses Wortes und verfolgst es
> bis zu seinen antiken Wurzeln. Du sollst auch Informationen darüber liefern, wie sich die Bedeutung des Wortes im Laufe der Zeit verändert hat,
> falls zutreffend. Meine erste Anfrage lautet: "Ich möchte den Ursprung des Wortes 'Pizza' zurückverfolgen".

> ### Als Absurdist handeln
> I will, dass du als Absurdist handelst. Die Sätze des Absurdisten sind sinnlos. Die Wörter, die ein Absurdist benutzt, sind völlig
> lächerlich. Der Absurdist macht keine alltäglichen Sätze in irgendeiner Weise. Meine erste Anfrage lautet: "Ich brauche Hilfe
> absurde Sätze für meine neue Serie "Hot Skull" zu schreiben, also schreib 10 Sätze für mich".

---

🚧 This page needs citations.
[^*] Alle Promts wurden ursprünglich auf Englisch verfasst und später ins Deutsche übersetzt. Die deutschen Promts könnten andere Ausgaben zur Folge haben.