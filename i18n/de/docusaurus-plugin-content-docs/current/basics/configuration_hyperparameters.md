---
sidebar_position: 100
---

# 🟢 LLM Einstellungen


import Temperature from '@site/docs/assets/basics/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

# Einleitung

Die Ausgabe von LLMs kann durch *Konfigurations-Hyperparameter* beeinflusst werden, die verschiedene Aspekte des Modells steuern, z.B. wie ’zufällig’ es ist. Diese Hyperparameter können angepasst werden, um kreativere, vielfältigere und interessantere Ergebnisse zu erzielen. In diesem Abschnitt werden zwei wichtige Konfigurations-Hyperparameter besprochen und wie sie die Ausgabe von LLMs beeinflussen.

:::Hinweis
[Für Forscher] Diese unterscheiden sich von regulären Hyperparametern wie Lernrate, Anzahl der Schichten, Größe der versteckten Ebenen usw.
:::

## Temperatur

Die Temperatur ist ein Konfigurations-Hyperparameter, der die Zufälligkeit der Sprachmodellausgabe steuert. Eine hohe Temperatur führt zu unvorhersehbareren und kreativeren Ergebnissen, während eine niedrige Temperatur eine gewöhnlichere und konservativere Ausgabe erzeugt. Wenn du z.B. die Temperatur auf 0,5 einstellst, erzeugt das Modell in der Regel Text, der vorhersehbarer und weniger kreativ ist, als wenn du die Temperatur auf 1,0 einstellst.

## Top p

Top p, auch bekannt als Nukleus-Sampling, ist ein weiterer Konfigurations-Hyperparameter, der die Zufälligkeit der Sprachmodellausgabe steuert. Er legt eine Schwellenwahrscheinlichkeit fest und wählt die Top-Token aus, deren kumulative Wahrscheinlichkeit den Schwellenwert überschreitet. Das Modell zieht dann zufällig Stichproben aus dieser Menge von Token, um die Ausgabe zu erzeugen. Diese Methode kann zu vielfältigeren und interessanteren Ergebnissen führen als herkömmliche Methoden, bei denen das gesamte Vokabular nach dem Zufallsprinzip ausgewählt wird. Wenn du z.B. top p auf 0,9 setzt, berücksichtigt das Modell nur die wahrscheinlichsten Wörter, die 90 % der Wahrscheinlichkeitsmasse ausmachen..

## Andere relevante Hyperparameter

Es gibt viele andere Hyperparameter, die die Leistung des Sprachmodells beeinflussen können, wie z.B. Häufigkeits- und Anwesenheitsstrafen. Wir behandeln sie hier nicht, werden dies aber vielleicht in Zukunft tun.

## Wie diese Hyperparameter das Ergebnis beeinflussen

Sowohl Temperatur als auch top p können die Ausgabe eines Sprachmodells beeinflussen, indem sie den Grad der Zufälligkeit und Vielfalt im generierten Text steuern. Eine hohe Temperatur oder ein hoher top p-Wert führt zu unvorhersehbareren und interessanteren Ergebnissen, erhöht aber auch die Wahrscheinlichkeit von Fehlern oder Nonsense-Text. Eine niedrige Temperatur oder ein niedriger top p-Wert kann konservativere und vorhersehbarere Ergebnisse liefern, aber auch zu sich wiederholenden oder uninteressanten Texten führen.

Bei Aufgaben zur Texterstellung solltest du eine hohe Temperatur oder einen hohen top p-Wert verwenden. Bei Aufgaben, bei denen die Genauigkeit wichtig ist, wie z.B. bei Übersetzungsaufgaben oder der Beantwortung von Fragen, sollte jedoch eine niedrige Temperatur oder ein niedriger top p-Wert verwendet werden, um die Genauigkeit und sachliche Richtigkeit zu verbessern.

:::Hinweis
Manchmal kann auch mehr Zufälligkeit bei Aufgaben hilfreich sein, die Genauigkeit erfordern, wenn man sie mit [Speziellen Prompt Techniken](https://learnprompting.org/docs/intermediate/self_consistency) verbinded.
:::




## Fazit

Zusammenfassend lässt sich sagen, dass Temperatur, top p und andere Hyperparameter der Modellkonfiguration wichtige Faktoren sind, die bei der Arbeit mit Sprachmodellen zu berücksichtigen sind. Wenn man die Beziehung zwischen diesen Hyperparametern und der Modellausgabe versteht, können Anwender ihre Prompts für bestimmte Aufgaben und Anwendungen optimieren.

:::Warunung
Bei einigen Modellen, wie z. B. ChatGPT, kannst du diese Konfigurationshyperparameter **nicht** anpassen (es sei denn, du verwendest die API).
:::

Von jackdickens382