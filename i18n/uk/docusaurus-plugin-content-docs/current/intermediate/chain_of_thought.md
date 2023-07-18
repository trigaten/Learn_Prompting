---
sidebar_position: 3
locale: uk
style: chicago
---

# 🟢 Ланцюг думок

Ланцюг думок (CoT) (@wei2022chain) — нещодавно розроблений метод запитів, що спонукає ВММ арґументувати свої твердження. На зображенні нижче (@wei2022chain) продемонстровано %%стандартний запит|few shot standard prompt%% (ліворуч) у порівнянні зі запитом на основі методу ланцюга думок (праворуч).


import CoTExample from '@site/docs/assets/basics/chain_of_thought_example.webp';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Звичайні запити проти CoT (Вей та ін.)
</div>

Основна ідея CoT полягає в тому, що, показуючи ВММ кілька прикладів %%зразки|exemplars%%‚ де за допомогою зразків пояснюється міркування, ВММ також покаже процес міркування під час відповіді на запит. Таке пояснення міркувань часто сприяє отриманню більш влучних результатів.

## Наприклад

Ось кілька демозаписів. Перший показує, що GPT-3 (davinci-003) не може розв’язати просту текстову задачу. На другому ж показано, як GPT-3 (davinci-003) успішно розв'язує цю ж проблему за допомогою підказок CoT.

#### Неправильно

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yay4iLCJwcm9tcHQiOiJXaGljaCBpcyBhIGZhc3RlciB3YXkgdG8gZ2V0IHRvIHdvcms%2FXG5PcHRpb24gMTogVGFrZSBhIDEwMDAgbWludXRlIGJ1cywgdGhlbiBhIGhhbGYgaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYmlrZSByaWRlLlxuT3B0aW9uIDI6IFRha2UgYW4gODAwIG1pbnV0ZSBidXMsIHRoZW4gYW4gaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAzMCBtaW51dGUgYmlrZSByaWRlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### Правильно

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIHdpbGwgdGFrZSAxMDAwKzMwKzEwID0gMTA0MCBtaW51dGVzLlxuT3B0aW9uIDIgd2lsbCB0YWtlIDgwMCs2MCszMCA9IDg5MCBtaW51dGVzLlxuU2luY2UgT3B0aW9uIDIgdGFrZXMgODkwIG1pbnV0ZXMgYW5kIE9wdGlvbiAxIHRha2VzIDEwNDAgbWludXRlcywgT3B0aW9uIDIgaXMgZmFzdGVyLiIsInByb21wdCI6IldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgaG9tZT9cbk9wdGlvbiAxOiBUYWtlIGFuIDEwIG1pbnV0ZXMgYnVzLCB0aGVuIGFuIDQwIG1pbnV0ZSBidXMsIGFuZCBmaW5hbGx5IGEgMTAgbWludXRlIHRyYWluLlxuT3B0aW9uIDI6IFRha2UgYSA5MCBtaW51dGVzIHRyYWluLCB0aGVuIGEgNDUgbWludXRlIGJpa2UgcmlkZSwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYnVzLlxuT3B0aW9uIDEgd2lsbCB0YWtlIDEwKzQwKzEwID0gNjAgbWludXRlcy5cbk9wdGlvbiAyIHdpbGwgdGFrZSA5MCs0NSsxMD0xNDUgbWludXRlcy5cblNpbmNlIE9wdGlvbiAxIHRha2VzIDYwIG1pbnV0ZXMgYW5kIE9wdGlvbiAyIHRha2VzIDE0NSBtaW51dGVzLCBPcHRpb24gMSBpcyBmYXN0ZXIuXG5cbldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yaz9cbk9wdGlvbiAxOiBUYWtlIGEgMTAwMCBtaW51dGUgYnVzLCB0aGVuIGEgaGFsZiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDEwIG1pbnV0ZSBiaWtlIHJpZGUuXG5PcHRpb24gMjogVGFrZSBhbiA4MDAgbWludXRlIGJ1cywgdGhlbiBhbiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDMwIG1pbnV0ZSBiaWtlIHJpZGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Результати

Було доведено, що CoT ефективно покращує результати в завданнях на обчислення, логіку та символьні міркування (@wei2022chain). Зокрема, запропонований PaLM 540B (@chowdhery2022palm) досягає 57% точності розв’язання на GSM8K (@cobbe2021training) (на той час SOTA).

import PromptedPaLM from '@site/docs/assets/intermediate/prompted_palm.webp';

<div style={{textAlign: 'center'}}>
  <img src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Порівняння моделей у бенчмарку GSM8K (Вей та ін.)
</div>

## Обмеження

Важливо зазначити, що, за словами Вей та ін., «CoT дає приріст продуктивності лише тоді, коли використовується з моделями параметрів ∼100B». Менші моделі будували нелогічні ланцюги думок, що спричиняло більше невідповідностей у порівнянні зі стандартними запитами. Моделі зазвичай отримують приріст продуктивності від запитів CoT пропорційно до розміру моделі.


## Примітки

Жодна мовна модель ~~не постраждала~~ під час написання цього розділу 😊.