---
sidebar_position: 70
---

# 🟡 Математика

У цьому курсі ми бачили багато різних методів введення запитів, які можна використовувати для вдосконалення обчислювальних здібностей %%ВММ|ВММ%%. Один із останніх підходів, MathPrompter(@imani2023mathprompter), об’єднує деякі з цих методів (%%CoT|запити з покроковим поясненням рішень%%, %%ПМЛ|ПМЛ%% тощо) в одну техніку. Основна ідея полягає в тому, щоб розбити математичну задачу на алгебраїчні твердження, а потім використати код Python для її розв'язання різними способами.

import math from '@site/docs/assets/reliability/math.webp';

<div style={{textAlign: 'center'}}>
  <img src={math} style={{width: "500px"}} />
</div>

MathPrompter працює в **чотири** кроки. Ми пояснимо їх на прикладі задачі. Приклад взято безпосередньо зі статті.

```text
Задача: У ресторані кожна страва для дорослих коштує 5 доларів, для дітей – безкоштовно. Якби прийшла група з 15
людей, з яких 8 – діти, скільки коштувало б їхнє замовлення?
```

## Крок 1: Створіть алгебраїчний шаблон

Перший крок — присвоїти змінну кожному числу в задачі. Це допомагає, оскільки дозволяє легше перевести задачу в абстрактне математичне питання, а також у програмний код.

Це можна зробити за допомогою кількох запитів:

<iframe    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH0iLCJwcm9tcHQiOiJROiBBIHpvbyBjaGFyZ2VzICQxMiBwZXIgYWR1bHQgdGlja2V0IGFuZCBhbGxvd3MgY2hpbGRyZW4gdW5kZXIgNSB0byBlbnRlciBmb3IgZnJlZS4gQSBmYW1pbHkgb2YgNCBhZHVsdHMgYW5kIDIgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLiBXaGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuUXQ6IEF0IGEgem9vLCBlYWNoIGFkdWx0IHRpY2tldCBjb3N0cyAkQSBhbmQgY2hpbGRyZW4gdW5kZXIgNSBjYW4gZW50ZXIgZm9yIGZyZWUuIElmIGEgZmFtaWx5IG9mIEIgYWR1bHRzIGFuZCBDIGNoaWxkcmVuIHVuZGVyIDUgdmlzaXQgdGhlIHpvbywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBmb3IgdGhlIGZhbWlseSB0byBlbnRlcj9cbk1hcHBpbmc6IHtBOiAxMiwgQjogNCwgQzogMn1cblxuUTogQSBzdG9yZSBzZWxscyBzaG9lcyBhdCAkNjAgcGVyIHBhaXIgYW5kIHNvY2tzIGF0ICQ4IHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgMiBwYWlycyBvZiBzaG9lcyBhbmQgMyBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5ROiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkNSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiAxNVxucGVvcGxlIGNhbWUgaW4gYW5kIDggd2VyZSBraWRzLCBob3cgbXVjaCB3b3VsZCBpdCBjb3N0IGZvciB0aGUgZ3JvdXAgdG8gZWF0PyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Крок 2: Математичні запити

Суть цього кроку полягає в тому, щоб перетворити задачу на алгебраїчне твердження і на код Python. На цьому кроці вводиться два запити одночасно, що допомагає представити задачу різнобічно.

### 2a: Алгебраїчне твердження

Ми можемо здійснити запит ВММ на основі кількох ілюстрацій, щоб представити математичну задачу як алгебраїчне твердження. Це можна зробити, попросивши ВММ створити формат відповіді, починаючи з "Answer =".

<iframe    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkFuc3dlciA9IEEgKiBCIC0gQSAqIEMiLCJwcm9tcHQiOiJRdDogQXQgYSB6b28sIGVhY2ggYWR1bHQgdGlja2V0IGNvc3RzICRBIGFuZCBjaGlsZHJlbiB1bmRlciA1IGNhbiBlbnRlciBmb3IgZnJlZS4gSWYgYSBmYW1pbHkgb2YgQiBhZHVsdHMgYW5kIEMgY2hpbGRyZW4gdW5kZXIgNSB2aXNpdCB0aGUgem9vLCB3aGF0IGlzIHRoZSB0b3RhbCBjb3N0IGZvciB0aGUgZmFtaWx5IHRvIGVudGVyP1xuTWFwcGluZzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQlxuXG5RdDogQXQgYSBzdG9yZSwgc2hvZXMgY29zdCAkQSBwZXIgcGFpciBhbmQgc29ja3MgY29zdCAkQiBwZXIgcGFpci4gSWYgYSBjdXN0b21lciBidXlzIEMgcGFpcnMgb2Ygc2hvZXMgYW5kIEQgcGFpcnMgb2Ygc29ja3MsIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3Qgb2YgdGhlIHB1cmNoYXNlP1xuTWFwcGluZzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5Xcml0ZSBhIG1hdGhlbWF0aWNhbCBlcXVhdGlvbiBhbmQgZ2VuZXJhdGUgdGhlIGFuc3dlciBmb3JtYXRcbnN0YXJ0aW5nIHdpdGggJ0Fuc3dlciA9J1xuXG5BbnN3ZXIgPSBBICogQyArIEIgKiBEXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cbk1hcHBpbmc6IHtBOiA1LCBCOiAxNSwgQzogOH1cblxuV3JpdGUgYSBtYXRoZW1hdGljYWwgZXF1YXRpb24gYW5kIGdlbmVyYXRlIHRoZSBhbnN3ZXIgZm9ybWF0XG5zdGFydGluZyB3aXRoICdBbnN3ZXIgPSciLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 2b: Код Python

Ми також можемо попросити %%ВММ|ВММ%% створити код Python, який розв’яже задачу. Для цього можна зробити запит у ВММ згенерувати функцію Python.

<iframe    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiByZXN0YXVyYW50X2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogKEIgLSBDKSIsInByb21wdCI6IlF0OiBBdCBhIHpvbywgZWFjaCBhZHVsdCB0aWNrZXQgY29zdHMgJEEgYW5kIGNoaWxkcmVuIHVuZGVyIDUgY2FuIGVudGVyIGZvciBmcmVlLiBJZiBhIGZhbWlseSBvZiBCIGFkdWx0cyBhbmQgQyBjaGlsZHJlbiB1bmRlciA1IHZpc2l0IHRoZSB6b28sIHdoYXQgaXMgdGhlIHRvdGFsIGNvc3QgZm9yIHRoZSBmYW1pbHkgdG8gZW50ZXI%2FXG5NYXBwaW5nOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgem9vX2Nvc3QoQSwgQiwgQyk6XG4gIHJldHVybiBBICogQlxuXG5cblF0OiBBdCBhIHN0b3JlLCBzaG9lcyBjb3N0ICRBIHBlciBwYWlyIGFuZCBzb2NrcyBjb3N0ICRCIHBlciBwYWlyLiBJZiBhIGN1c3RvbWVyIGJ1eXMgQyBwYWlycyBvZiBzaG9lcyBhbmQgRCBwYWlycyBvZiBzb2Nrcywgd2hhdCBpcyB0aGUgdG90YWwgY29zdCBvZiB0aGUgcHVyY2hhc2U%2FXG5cbldyaXRlIGEgUHl0aG9uIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYW5zd2VyLlxuXG5kZWYgc3RvcmVfY29zdChBLCBCLCBDLCBEKTpcbiAgcmV0dXJuIChBICogQykgKyAoQiAqIEQpXG5cblF0OiBBdCBhIHJlc3RhdXJhbnQsIGVhY2ggYWR1bHQgbWVhbCBjb3N0cyAkQSBhbmQga2lkcyBlYXQgZnJlZS4gSWYgYSBncm91cCBvZiBCIHBlb3BsZSBjYW1lIGluIGFuZCBDIHdlcmUga2lkcywgaG93IG11Y2ggd291bGQgaXQgY29zdCBmb3IgdGhlIGdyb3VwIHRvIGVhdD9cblxuV3JpdGUgYSBQeXRob24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhbnN3ZXIuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Генерування відповідей

Тепер ми можемо використовувати отримані раніше результати зіставлення для автоматичного заповнення змінних.

```text
Зіставлення: {A: 5, B: 15, C: 8}
```

Алгебраїчні обчислення:
```text
Відповідь = 5 * 15 - 5 * 8
```

Функція Python:
```python
def restaurant_cost(A=5, B=15, C=8):
  return A * (B - C)
```

Ми можемо оцінити обидві функції за допомогою Python.

Алгебраїчні обчислення:
```python
>>> eval("5 * 15 - 5 * 8" )
35
```

Функція Python:
```python
>>> restaurant_cost()
35
```

## 🟡 Крок 4: Самоузгодженість

Зрештою, ми використаємо %%Самоузгодженість|самоузгодженість%%, щоб повторити вищевказаний процес кілька разів (~5), а потім оберемо результат, який отримували найчастіше.

## Висновок

За даними MultiArith(@roy-roth-2015-solving), точність MathPrompter становить 92,5%. Успіх цієї техніки – яскравий приклад того, яким чином **Ви**, як інженер запитів, можете використовувати вивчені на цьому курсі методи й поєднувати їх для розв'язання складніших задач.