---
sidebar_position: 0
---

# 🟢 Structuration de Données

Un cas d'utilisation simple et passionnant pour les LLMs est l'organisation de données en tableaux. Peut-être avez-vous une série d'articles de presse ou de rapports commerciaux, et vous aimeriez que tous les points importants soient résumés dans un tableau que vous pourrez ensuite intégrer dans une feuille de calcul ou une base de données. Les chatbots tels que ChatGPT peuvent vous aider à le faire.

Nous pouvons extraire des informations du rapport suivant en y ajoutant `Générer un tableau contenant ces informations :`.

```text
Lors d'une récente présentation de rapport d'activité, la PDG de Zana Corp. a mis en évidence leur croissance remarquable au cours de la dernière année fiscale. Elle a partagé que l'entreprise a connu une augmentation de 15 % de son chiffre d'affaires, atteignant 50 millions de dollars, avec une marge bénéficiaire de 12 % (6 millions de dollars de bénéfice net). Le rapport a également mis en avant une croissance de 20 % de leur base de clients, qui totalise désormais 100 000 clients. De plus, les dépenses d'exploitation de l'entreprise ont augmenté de 10 %, s'élevant à 10 millions de dollars, tandis que l'effectif a augmenté de 25 %, ce qui porte l'effectif actuel à 500 employés.

Générer un tableau contenant ces informations :

```

ChatGPT produira un tableau comme celui-ci :

| Mesure                                   | Valeur                 |
| ---------------------------------------- | ---------------------- |
| Chiffre d'affaires                       | 50 millions de dollars |
| Marge bénéficiaire                       | 12 %                   |
| Bénéfice net                             | 6 millions de dollars  |
| Base de clients                          | 100 000                |
| Dépenses d'exploitation                  | 10 millions de dollars |
| Effectif                                 | 500                    |
| Augmentation du chiffre d'affaires       | 15 %                   |
| Augmentation du nombre de clients        | 20 %                   |
| Augmentation des dépenses d'exploitation | 10 %                   |
| Augmentation de l'effectif               | 25 %                   |

Vous pouvez ensuite le copier et le coller dans une feuille de calcul comme Excel/Sheets ou même dans des documents et des présentations powerpoint.
