---
sidebar_position: 0
---

# 🟢 Strukturování dat

Jedním z jednoduchých a zajímavých případů použití LLM je uspořádání dat do tabulek. Možná máte několik novinových článků nebo obchodních zpráv a rádi byste všechny důležité body shrnuli do tabulky, kterou pak můžete vložit do tabulkového procesoru nebo databáze. Chatovací boti, jako je ChatGPT, vám s tím mohou pomoci.

Informace z následující zprávy můžeme získat tak, že k ní připojíme příkaz `Vytvořit tabulku obsahující tyto informace:`.

```text
V nedávné prezentaci obchodní zprávy vyzdvihl generální ředitel společnosti Zana Corp. její pozoruhodný růst v uplynulém fiskálním roce. Sdělila, že společnost zaznamenala 15% nárůst tržeb, které dosáhly 50 milionů dolarů, při 12% ziskové marži (6 milionů dolarů čistého zisku). Zpráva také ukázala 20% nárůst jejich zákaznické základny, která nyní čítá 100 000 zákazníků. Kromě toho se provozní náklady společnosti zvýšily o 10 % a dosáhly 10 milionů dolarů, zatímco počet zaměstnanců se zvýšil o 25 %, takže v současné době zaměstnává 500 lidí. 

Vytvořte tabulku obsahující tyto informace:
```

ChatGPT vygeneruje následující tabulku:

| Metrika | Hodnota |
|-------|------|
| Příjmy | 50 milionů dolarů |
| Zisková marže | 12% |
| Čistý zisk | 6 milionů dolarů |
| Zákaznická základna | 100 000 |
| Provozní náklady | 10 milionů dolarů |
| Počet zaměstnanců | 500 |
| Nárůst tržeb | 15% |
| Nárůst počtu zákazníků | 20% |
| Nárůst provozních nákladů | 10% |
| Nárůst počtu zaměstnanců | 25% |

Poté je můžete zkopírovat a vložit do tabulky, jako je Excel/Sheets, nebo dokonce do dokumentů a powerpointů.