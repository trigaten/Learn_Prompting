---
sidebar_position: 2
locale: Англійська (США)
---

# 🟢 Запитання з декількома варіантами відповідей

Спробуймо використати GPT для вирішення завдання екзамену LSAT[^1]!

Нижче наведено приклад завдання LSAT. Подумайте про те, як би ви відповіли на нього, а також про логіку своїх міркувань.

```md
<!-- highlight-start -->
Іоанн (Джон) Вустерський, англійський чернець, записав 8 грудня 1128 року спостереження за двома надзвичайно великими сонячними плямами. За п'ять днів на півдні Кореї спостерігали яскраве полярне (північне) сяйво. Активність сонячних плям зазвичай супроводжується появою полярного сяйва через певний проміжок часу, що в середньому становить п’ять днів. Таким чином, спостереження на півдні Кореї допомагає підтвердити спостереження Іоанна Вустерського. Що з наведеного нижче, якщо це правда, найбільше підтверджує аргумент?
<!-- highlight-end -->

a) Полярне сяйво іноді може виникати, навіть якщо впродовж минулого тижня не було значної активності сонячних плям. 
б) Китайські джерела зафіксували спостереження сонячних плям більш ніж за 1000 років до Іоанна Вустерського. 
в) Тільки сильна активність сонячних плям могла призвести до полярного сяйва, видимого на такій низькій широті, як Корея. 
г) Оскільки побачити сонячні плями неозброєним оком за типових умов денного освітлення неможливо, спостереження, записане Іоанном Вустерським, могло відбутися за незвичайних погодних умов, таких як туман або тонка хмарність. 
д) Запис Іоанна Вустерського містив зображення сонячних плям, яке могло бути першою ілюстрацією активності сонячних плям.
```

<details>
<summary>Правильна відповідь...</summary>
в) Тільки сильна активність сонячних плям могла призвести до полярного сяйва, видимого на такій низькій широті, як Корея. </details>

Спробуйте вставити завдання в демоверсію нижче:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiZSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS4iLCJwcm9tcHQiOiJKb2huIG9mIFdvcmNlc3RlciwgYW4gRW5nbGlzaCBtb25rLCByZWNvcmRlZCB0aGUgc2lnaHRpbmcsIG9uIERlY2VtYmVyIDgsIDExMjgsIG9mIHR3byB1bnVzdWFsbHkgbGFyZ2Ugc3Vuc3BvdHMuIEZpdmUgZGF5cyBsYXRlciBhIGJyaWxsaWFudCBhdXJvcmEgYm9yZWFsaXMgKG5vcnRoZXJuIGxpZ2h0cykgd2FzIG9ic2VydmVkIGluIHNvdXRoZXJuIEtvcmVhLiBTdW5zcG90IGFjdGl2aXR5IGlzIHR5cGljYWxseSBmb2xsb3dlZCBieSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBhdXJvcmEgYm9yZWFsaXMsIGFmdGVyIGEgc3BhbiBvZiB0aW1lIHRoYXQgYXZlcmFnZXMgZml2ZSBkYXlzLiBUaHVzLCB0aGUgS29yZWFuIHNpZ2h0aW5nIGhlbHBzIHRvIGNvbmZpcm0gSm9obiBvZiBXb3JjZXN0ZXIncyBzaWdodGluZy4gV2hpY2ggb25lIG9mIHRoZSBmb2xsb3dpbmcsIGlmIHRydWUsIG1vc3Qgc3RyZW5ndGhlbnMgdGhlIGFyZ3VtZW50P1xuYSkgQW4gYXVyb3JhIGJvcmVhbGlzIGNhbiBzb21ldGltZXMgb2NjdXIgZXZlbiB3aGVuIHRoZXJlIGhhcyBiZWVuIG5vIHNpZ25pZmljYW50IHN1bnNwb3QgYWN0aXZpdHkgaW4gdGhlIHByZXZpb3VzIHdlZWsuIFxuYikgQ2hpbmVzZSBzb3VyY2VzIHJlY29yZGVkIHRoZSBzaWdodGluZyBvZiBzdW5zcG90cyBtb3JlIHRoYW4gMTAwMCB5ZWFycyBiZWZvcmUgSm9obiBvZiBXb3JjZXN0ZXIgZGlkLiBcbmMpIE9ubHkgaGVhdnkgc3Vuc3BvdCBhY3Rpdml0eSBjb3VsZCBoYXZlIHJlc3VsdGVkIGluIGFuIGF1cm9yYSBib3JlYWxpcyB2aWV3YWJsZSBhdCBhIGxhdGl0dWRlIGFzIGxvdyBhcyB0aGF0IG9mIEtvcmVhLiBcbmQpIEJlY2F1c2UgaXQgaXMgaW1wb3NzaWJsZSB0byB2aWV3IHN1bnNwb3RzIHdpdGggdGhlIG5ha2VkIGV5ZSB1bmRlciB0eXBpY2FsIGRheWxpZ2h0IGNvbmRpdGlvbnMsIHRoZSBzaWdodGluZyByZWNvcmRlZCBieSBKb2huIG9mIFdvcmNlc3RlciB3b3VsZCBoYXZlIHRha2VuIHBsYWNlIHVuZGVyIHVudXN1YWwgd2VhdGhlciBjb25kaXRpb25zIHN1Y2ggYXMgZm9nIG9yIHRoaW4gY2xvdWRzLiBcbmUpIEpvaG4gb2YgV29yY2VzdGVyJ3MgYWNjb3VudCBpbmNsdWRlZCBhIGRyYXdpbmcgb2YgdGhlIHN1bnNwb3RzLCB3aGljaCBjb3VsZCBiZSB0aGUgZWFybGllc3QgaWxsdXN0cmF0aW9uIG9mIHN1bnNwb3QgYWN0aXZpdHkuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<p></p>

<details scheme='warning'>
<summary>Чому моя відповідь відрізняється?</summary>
Ваша відповідь може відрізнятися через

1) Оновлення основної моделі, GPT-3 2) Принцип випадковості у процесі генерації тексту. Ми можемо зробити результат більш узгодженим, встановивши для <a href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature">температури</a> значення 0.

</details>

Модель вийшла з ладу. Чи означає це, що модель не здатна відповісти на таке запитання? Не обов'язково. Ми вивчимо детальніше методи, які можна використовувати для покращення результатів моделі.

## Чарівна фраза
Стандартний запит, який ми використовували вище, дає мало розуміння «обґрунтування» виведених даних GPT. Ми можемо спробувати додати фразу `, пояснімо крок за кроком` так:


```markdown
...
д) Запис Іоанна Вустерського містив зображення сонячних плям, яке могло бути першою ілюстрацією активності сонячних плям.

Пояснімо крок за кроком
```
Ця фраза збільшить багатослівність моделі. Ви можете отримати такий результат:
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBpbmNvcnJlY3QuIFRoaXMgYW5zd2VyIGRvZXMgbm90IHN0cmVuZ3RoZW4gdGhlIGFyZ3VtZW50LCBhcyBpdCBpbnN0ZWFkIGludHJvZHVjZXMgYW4gYWx0ZXJuYXRpdmUgZXhwbGFuYXRpb24gZm9yIHRoZSBhdXJvcmEgYm9yZWFsaXMuIFxuQikgVGhpcyBhbnN3ZXIgY2hvaWNlIGlzIGluY29ycmVjdC4gVGhpcyBhbnN3ZXIgZG9lcyBub3Qgc3RyZW5ndGhlbiB0aGUgYXJndW1lbnQsIGFzIGl0IGlzIGlycmVsZXZhbnQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiBzdW5zcG90IGFjdGl2aXR5IGFuZCBhdXJvcmEgYm9yZWFsaXMgc2lnaHRpbmdzLiBcbkMpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBjb3JyZWN0LiBUaGlzIGFuc3dlciBzdHJlbmd0aGVucyB0aGUgYXJndW1lbnQgYnkgc3VnZ2VzdGluZyB0aGF0IHRoZSBzdW5zcG90IGFjdGl2aXR5IHJlY29yZGVkIGJ5IEpvaG4gb2YgV29yY2VzdGVyIHdhcyB0aGUgY2F1c2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcyB0aGF0IHdhcyBvYnNlcnZlZCBpbiBLb3JlYSBmaXZlIGRheXMgbGF0ZXIuIFxuRCkgVGhpcyBhbnN3ZXIgY2hvaWNlIGlzIGluY29ycmVjdC4gVGhpcyBhbnN3ZXIgZG9lcyBub3Qgc3RyZW5ndGhlbiB0aGUgYXJndW1lbnQsIGFzIGl0IGlzIGlycmVsZXZhbnQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiBzdW5zcG90IGFjdGl2aXR5IGFuZCBhdXJvcmEgYm9yZWFsaXMgc2lnaHRpbmdzLiBcbkUpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBpbmNvcnJlY3QuIFRoaXMgYW5zd2VyIGRvZXMgbm90IHN0cmVuZ3RoZW4gdGhlIGFyZ3VtZW50LCBhcyBpdCBpcyBpcnJlbGV2YW50IHRvIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gc3Vuc3BvdCBhY3Rpdml0eSBhbmQgYXVyb3JhIGJvcmVhbGlzIHNpZ2h0aW5ncy4gXG5UaGUgY29ycmVjdCBhbnN3ZXIgaXMgQykgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIiwicHJvbXB0IjoiSm9obiBvZiBXb3JjZXN0ZXIsIGFuIEVuZ2xpc2ggbW9uaywgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nLCBvbiBEZWNlbWJlciA4LCAxMTI4LCBvZiB0d28gdW51c3VhbGx5IGxhcmdlIHN1bnNwb3RzLiBGaXZlIGRheXMgbGF0ZXIgYSBicmlsbGlhbnQgYXVyb3JhIGJvcmVhbGlzIChub3J0aGVybiBsaWdodHMpIHdhcyBvYnNlcnZlZCBpbiBzb3V0aGVybiBLb3JlYS4gU3Vuc3BvdCBhY3Rpdml0eSBpcyB0eXBpY2FsbHkgZm9sbG93ZWQgYnkgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gYXVyb3JhIGJvcmVhbGlzLCBhZnRlciBhIHNwYW4gb2YgdGltZSB0aGF0IGF2ZXJhZ2VzIGZpdmUgZGF5cy4gVGh1cywgdGhlIEtvcmVhbiBzaWdodGluZyBoZWxwcyB0byBjb25maXJtIEpvaG4gb2YgV29yY2VzdGVyJ3Mgc2lnaHRpbmcuIFdoaWNoIG9uZSBvZiB0aGUgZm9sbG93aW5nLCBpZiB0cnVlLCBtb3N0IHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudD9cbmEpIEFuIGF1cm9yYSBib3JlYWxpcyBjYW4gc29tZXRpbWVzIG9jY3VyIGV2ZW4gd2hlbiB0aGVyZSBoYXMgYmVlbiBubyBzaWduaWZpY2FudCBzdW5zcG90IGFjdGl2aXR5IGluIHRoZSBwcmV2aW91cyB3ZWVrLiBcbmIpIENoaW5lc2Ugc291cmNlcyByZWNvcmRlZCB0aGUgc2lnaHRpbmcgb2Ygc3Vuc3BvdHMgbW9yZSB0aGFuIDEwMDAgeWVhcnMgYmVmb3JlIEpvaG4gb2YgV29yY2VzdGVyIGRpZC4gXG5jKSBPbmx5IGhlYXZ5IHN1bnNwb3QgYWN0aXZpdHkgY291bGQgaGF2ZSByZXN1bHRlZCBpbiBhbiBhdXJvcmEgYm9yZWFsaXMgdmlld2FibGUgYXQgYSBsYXRpdHVkZSBhcyBsb3cgYXMgdGhhdCBvZiBLb3JlYS4gXG5kKSBCZWNhdXNlIGl0IGlzIGltcG9zc2libGUgdG8gdmlldyBzdW5zcG90cyB3aXRoIHRoZSBuYWtlZCBleWUgdW5kZXIgdHlwaWNhbCBkYXlsaWdodCBjb25kaXRpb25zLCB0aGUgc2lnaHRpbmcgcmVjb3JkZWQgYnkgSm9obiBvZiBXb3JjZXN0ZXIgd291bGQgaGF2ZSB0YWtlbiBwbGFjZSB1bmRlciB1bnVzdWFsIHdlYXRoZXIgY29uZGl0aW9ucyBzdWNoIGFzIGZvZyBvciB0aGluIGNsb3Vkcy4gXG5lKSBKb2huIG9mIFdvcmNlc3RlcidzIGFjY291bnQgaW5jbHVkZWQgYSBkcmF3aW5nIG9mIHRoZSBzdW5zcG90cywgd2hpY2ggY291bGQgYmUgdGhlIGVhcmxpZXN0IGlsbHVzdHJhdGlvbiBvZiBzdW5zcG90IGFjdGl2aXR5LiBMZXQncyBleHBsYWluIHN0ZXAgYnkgc3RlcCIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<p></p>

:::info
Зверніть увагу на те, як модель обґрунтовує вирішення завдання крок за кроком.

Спеціальним терміном для такої поведінки є ланцюг думок (@wei2022chain); модель послідовно генерує твердження, щоб отримати відповідь. Це схоже на концепцію мислення Системи 2 (від [Thinking Fast and Slow](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow)); модель за замовчуванням використовує мислення Системи 1, але може створювати ланцюжок мислення Системи 1, щоб отримати більш методологічну відповідь.
:::

## Покращення

Ось деякі приклади нашого базового запиту для завдань з декількома варіантами відповідей:

### Зміна порядку запитань

Ми можемо змінити порядок пропонованих варіантів у завданні

```
...
а) Запис Іоанна Вустерського містив зображення сонячних плям, яке могло бути першою ілюстрацією активності сонячних плям.
б) Оскільки побачити сонячні плями неозброєним оком за типових умов денного освітлення неможливо, спостереження, записане Іоанном Вустерським, могло відбутися за незвичайних погодних умов, таких як туман або тонка хмарність. 
...
```


<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFdlYWtlbnMgLSBUaGlzIG9wdGlvbiB3ZWFrZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGltcGxpZXMgdGhhdCB0aGUgYXVyb3JhIGJvcmVhbGlzIGRpZCBub3QgbmVjZXNzYXJpbHkgbmVlZCB0byBiZSBjYXVzZWQgYnkgc3Vuc3BvdCBhY3Rpdml0eSwgd2hpY2ggaXMgdGhlIGFyZ3VtZW50IHRoZSBhdXRob3IgaXMgdHJ5aW5nIHRvIG1ha2UuIEIpIERvZXNuJ3QgSW1wYWN0IC0gVGhpcyBvcHRpb24gZG9lcyBub3QgaW1wYWN0IHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGlzIHVucmVsYXRlZCB0byB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzdW5zcG90cyBhbmQgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcy4gQykgU3RyZW5ndGhlbnMgLSBUaGlzIG9wdGlvbiBzdHJlbmd0aGVucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBzdWdnZXN0cyB0aGF0IHRoZSBvbmx5IHdheSBhbiBhdXJvcmEgYm9yZWFsaXMgY291bGQgYmUgc2VlbiBpbiBLb3JlYSBpcyBpZiB0aGVyZSBoYWQgYmVlbiBoZWF2eSBzdW5zcG90IGFjdGl2aXR5LCB3aGljaCBpcyB3aGF0IEpvaG4gb2YgV29yY2VzdGVyIG9ic2VydmVkLiBEKSBXZWFrZW5zIC0gVGhpcyBvcHRpb24gd2Vha2VucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpbXBsaWVzIHRoYXQgdGhlIGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQgdGhlIHN1bnNwb3RzIG1heSBub3QgaGF2ZSBiZWVuIHJlbGlhYmxlLCB3aGljaCBjb3VsZCBjYXN0IGRvdWJ0IG9uIHRoZSBhY2N1cmFjeSBvZiBoaXMgc2lnaHRpbmcuIEUpIERvZXNuJ3QgSW1wYWN0IC0gVGhpcyBvcHRpb24gZG9lcyBub3QgaW1wYWN0IHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGlzIHVucmVsYXRlZCB0byB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzdW5zcG90cyBhbmQgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcy4iLCJwcm9tcHQiOiJKb2huIG9mIFdvcmNlc3RlciwgYW4gRW5nbGlzaCBtb25rLCByZWNvcmRlZCB0aGUgc2lnaHRpbmcsIG9uIERlY2VtYmVyIDgsIDExMjgsIG9mIHR3byB1bnVzdWFsbHkgbGFyZ2Ugc3Vuc3BvdHMuIEZpdmUgZGF5cyBsYXRlciBhIGJyaWxsaWFudCBhdXJvcmEgYm9yZWFsaXMgKG5vcnRoZXJuIGxpZ2h0cykgd2FzIG9ic2VydmVkIGluIHNvdXRoZXJuIEtvcmVhLiBTdW5zcG90IGFjdGl2aXR5IGlzIHR5cGljYWxseSBmb2xsb3dlZCBieSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBhdXJvcmEgYm9yZWFsaXMsIGFmdGVyIGEgc3BhbiBvZiB0aW1lIHRoYXQgYXZlcmFnZXMgZml2ZSBkYXlzLiBUaHVzLCB0aGUgS29yZWFuIHNpZ2h0aW5nIGhlbHBzIHRvIGNvbmZpcm0gSm9obiBvZiBXb3JjZXN0ZXIncyBzaWdodGluZy4gV2hpY2ggb25lIG9mIHRoZSBmb2xsb3dpbmcsIGlmIHRydWUsIG1vc3Qgc3RyZW5ndGhlbnMgdGhlIGFyZ3VtZW50P1xuYSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS4gXG5iKSBCZWNhdXNlIGl0IGlzIGltcG9zc2libGUgdG8gdmlldyBzdW5zcG90cyB3aXRoIHRoZSBuYWtlZCBleWUgdW5kZXIgdHlwaWNhbCBkYXlsaWdodCBjb25kaXRpb25zLCB0aGUgc2lnaHRpbmcgcmVjb3JkZWQgYnkgSm9obiBvZiBXb3JjZXN0ZXIgd291bGQgaGF2ZSB0YWtlbiBwbGFjZSB1bmRlciB1bnVzdWFsIHdlYXRoZXIgY29uZGl0aW9ucyBzdWNoIGFzIGZvZyBvciB0aGluIGNsb3Vkcy4gXG5jKSBBbiBhdXJvcmEgYm9yZWFsaXMgY2FuIHNvbWV0aW1lcyBvY2N1ciBldmVuIHdoZW4gdGhlcmUgaGFzIGJlZW4gbm8gc2lnbmlmaWNhbnQgc3Vuc3BvdCBhY3Rpdml0eSBpbiB0aGUgcHJldmlvdXMgd2Vlay4gXG5kKSBDaGluZXNlIHNvdXJjZXMgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nIG9mIHN1bnNwb3RzIG1vcmUgdGhhbiAxMDAwIHllYXJzIGJlZm9yZSBKb2huIG9mIFdvcmNlc3RlciBkaWQuIFxuZSkgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIFxuTGV0J3MgZXhwbGFpbiBzdGVwIGJ5IHN0ZXAiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Зміна формулювання


Нагадую, що початковий запит був таким:
```
Що з наведеного нижче, якщо це правда, найбільше підтверджує аргумент?
```

Ми можемо змінити запит на такий:
```
Визнач, як кожен вибір посилює, послаблює або не впливає на аргумент.
```
щоб краще зрозуміти критерії вибору відповіді. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFdlYWtlbnMgLSBUaGlzIG9wdGlvbiB3ZWFrZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGltcGxpZXMgdGhhdCB0aGUgYXVyb3JhIGJvcmVhbGlzIGRpZCBub3QgbmVjZXNzYXJpbHkgbmVlZCB0byBiZSBjYXVzZWQgYnkgc3Vuc3BvdCBhY3Rpdml0eSwgd2hpY2ggaXMgdGhlIGFyZ3VtZW50IHRoZSBhdXRob3IgaXMgdHJ5aW5nIHRvIG1ha2UuXG5CKSBEb2Vzbid0IEltcGFjdCAtIFRoaXMgb3B0aW9uIGRvZXMgbm90IGltcGFjdCB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpcyB1bnJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc3Vuc3BvdHMgYW5kIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhdXJvcmEgYm9yZWFsaXMuXG5DKSBTdHJlbmd0aGVucyAtIFRoaXMgb3B0aW9uIHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IHN1Z2dlc3RzIHRoYXQgdGhlIG9ubHkgd2F5IGFuIGF1cm9yYSBib3JlYWxpcyBjb3VsZCBiZSBzZWVuIGluIEtvcmVhIGlzIGlmIHRoZXJlIGhhZCBiZWVuIGhlYXZ5IHN1bnNwb3QgYWN0aXZpdHksIHdoaWNoIGlzIHdoYXQgSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQuXG5EKSBXZWFrZW5zIC0gVGhpcyBvcHRpb24gd2Vha2VucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpbXBsaWVzIHRoYXQgdGhlIGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQgdGhlIHN1bnNwb3RzIG1heSBub3QgaGF2ZSBiZWVuIHJlbGlhYmxlLCB3aGljaCBjb3VsZCBjYXN0IGRvdWJ0IG9uIHRoZSBhY2N1cmFjeSBvZiBoaXMgc2lnaHRpbmcuXG5FKSBEb2Vzbid0IEltcGFjdCAtIFRoaXMgb3B0aW9uIGRvZXMgbm90IGltcGFjdCB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpcyB1bnJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc3Vuc3BvdHMgYW5kIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhdXJvcmEgYm9yZWFsaXMuIiwicHJvbXB0IjoiSm9obiBvZiBXb3JjZXN0ZXIsIGFuIEVuZ2xpc2ggbW9uaywgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nLCBvbiBEZWNlbWJlciA4LCAxMTI4LCBvZiB0d28gdW51c3VhbGx5IGxhcmdlIHN1bnNwb3RzLiBGaXZlIGRheXMgbGF0ZXIgYSBicmlsbGlhbnQgYXVyb3JhIGJvcmVhbGlzIChub3J0aGVybiBsaWdodHMpIHdhcyBvYnNlcnZlZCBpbiBzb3V0aGVybiBLb3JlYS4gU3Vuc3BvdCBhY3Rpdml0eSBpcyB0eXBpY2FsbHkgZm9sbG93ZWQgYnkgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gYXVyb3JhIGJvcmVhbGlzLCBhZnRlciBhIHNwYW4gb2YgdGltZSB0aGF0IGF2ZXJhZ2VzIGZpdmUgZGF5cy4gVGh1cywgdGhlIEtvcmVhbiBzaWdodGluZyBoZWxwcyB0byBjb25maXJtIEpvaG4gb2YgV29yY2VzdGVyJ3Mgc2lnaHRpbmcuIFdoaWNoIG9uZSBvZiB0aGUgZm9sbG93aW5nLCBpZiB0cnVlLCBtb3N0IHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudD8gXG5hKSBBbiBhdXJvcmEgYm9yZWFsaXMgY2FuIHNvbWV0aW1lcyBvY2N1ciBldmVuIHdoZW4gdGhlcmUgaGFzIGJlZW4gbm8gc2lnbmlmaWNhbnQgc3Vuc3BvdCBhY3Rpdml0eSBpbiB0aGUgcHJldmlvdXMgd2Vlay4gXG5iKSBDaGluZXNlIHNvdXJjZXMgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nIG9mIHN1bnNwb3RzIG1vcmUgdGhhbiAxMDAwIHllYXJzIGJlZm9yZSBKb2huIG9mIFdvcmNlc3RlciBkaWQuIFxuYykgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIFxuZCkgQmVjYXVzZSBpdCBpcyBpbXBvc3NpYmxlIHRvIHZpZXcgc3Vuc3BvdHMgd2l0aCB0aGUgbmFrZWQgZXllIHVuZGVyIHR5cGljYWwgZGF5bGlnaHQgY29uZGl0aW9ucywgdGhlIHNpZ2h0aW5nIHJlY29yZGVkIGJ5IEpvaG4gb2YgV29yY2VzdGVyIHdvdWxkIGhhdmUgdGFrZW4gcGxhY2UgdW5kZXIgdW51c3VhbCB3ZWF0aGVyIGNvbmRpdGlvbnMgc3VjaCBhcyBmb2cgb3IgdGhpbiBjbG91ZHMuIFxuZSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS5cbklkZW50aWZ5IGVhY2ggY2hvaWNlIGFzIHN0cmVuZ3RoZW5zLCB3ZWFrZW5zIG9yIGRvZXNuJ3QgaW1wYWN0IHRoZSBhcmd1bWVudCBhbmQgZXhwbGFpbiBzdGVwIGJ5IHN0ZXAuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


### Додавання контексту

Ось приклад завдання, яке можна легко розв’язати за допомогою теореми Баєса:

```
Розглянемо два медичних тести, А і В, на розпізнавання вірусу. Тест А на 90% ефективний у розпізнаванні вірусу, коли він
наявний, але має 5% хибнопозитивних результатів (що вказує на наявність вірусу, якщо його немає). Тест B на 95%
ефективний у розпізнаванні вірусу, але має 10% хибнопозитивних результатів. Два тести використовують незалежні методи
ідентифікації вірусу. Носіями вірусу є 2% усіх людей.
(a) Скажімо, що людину перевірили на наявність вірусу лише за допомогою тесту А. Яка ймовірність того, що людина
справді є носієм вірусу, якщо тест А виявився позитивним? (2 бали)
(б) Скажімо, що людину перевірили на наявність вірусу лише за допомогою тесту B. Яка ймовірність того, що людина
справді є носієм вірусу, якщо тест B виявився позитивним? (2 бали)
(в) Скажімо, що людину перевірили на наявність вірусу за допомогою обох тестів. Яка ймовірність того, що людина
справді є носієм вірусу, якщо обидва тести дали позитивний результат? (2 бали)
```

Спробуймо це з GPT:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IihhKSBUaGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uIGlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEEgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDkwJS4gXG5cbihiKSBUaGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uIGlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEIgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDk1JS5cblxuKGMpIFRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb24gaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IGJvdGggdGVzdHMgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDk5LjklLiIsInByb21wdCI6IkNvbnNpZGVyIHR3byBtZWRpY2FsIHRlc3RzLCBBIGFuZCBCLCBmb3IgYSB2aXJ1cy4gVGVzdCBBIGlzIDkwJSBlZmZlY3RpdmUgYXQgcmVjb2duaXppbmcgdGhlIHZpcnVzIHdoZW4gaXQgaXNcbnByZXNlbnQsIGJ1dCBoYXMgYSA1JSBmYWxzZSBwb3NpdGl2ZSByYXRlIChpbmRpY2F0aW5nIHRoYXQgdGhlIHZpcnVzIGlzIHByZXNlbnQsIHdoZW4gaXQgaXMgbm90KS4gVGVzdCBCIGlzIDk1JVxuZWZmZWN0aXZlIGF0IHJlY29nbml6aW5nIHRoZSB2aXJ1cywgYnV0IGhhcyBhIDEwJSBmYWxzZSBwb3NpdGl2ZSByYXRlLiBUaGUgdHdvIHRlc3RzIHVzZSBpbmRlcGVuZGVudCBtZXRob2RzXG5vZiBpZGVudGlmeWluZyB0aGUgdmlydXMuIFRoZSB2aXJ1cyBpcyBjYXJyaWVkIGJ5IDIlIG9mIGFsbCBwZW9wbGUuXG4oYSkgU2F5IHRoYXQgYSBwZXJzb24gaXMgdGVzdGVkIGZvciB0aGUgdmlydXMgdXNpbmcgb25seSBUZXN0IEEuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvblxuaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IFRlc3QgQSBjYW1lIGJhY2sgcG9zaXRpdmU%2FICgyIHBvaW50cylcbihiKSBTYXkgdGhhdCBhIHBlcnNvbiBpcyB0ZXN0ZWQgZm9yIHRoZSB2aXJ1cyB1c2luZyBvbmx5IFRlc3QgQi4gV2hhdCBpcyB0aGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uXG5pcyByZWFsbHkgY2FycnlpbmcgdGhlIHZpcnVzIGdpdmVuIHRoYXQgVGVzdCBCIGNhbWUgYmFjayBwb3NpdGl2ZT8gKDIgcG9pbnRzKVxuKGMpIFNheSB0aGF0IGEgcGVyc29uIGlzIHRlc3RlZCBmb3IgdGhlIHZpcnVzIHVzaW5nIGJvdGggdGVzdHMuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvbiBpc1xucmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IGJvdGggdGVzdHMgY2FtZSBiYWNrIHBvc2l0aXZlPyAoMiBwb2ludHMpIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Результат **неправильний**!

Якщо ми додамо трохи контексту, наприклад:

```
...
Пояснімо крок за кроком. Формула Баєса така 
```
Модель використовуватиме правильну формулу Баєса.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlAoQXxCKSA9IFAoQnxBKSAqIFAoQSkgLyBQKEIpXG5cblxuKGEpIFAoVmlydXN8VGVzdCBBIFBvc2l0aXZlKSA9IFAoVGVzdCBBIFBvc2l0aXZlfFZpcnVzKSAqIFAoVmlydXMpIC8gUChUZXN0IEEgUG9zaXRpdmUpID0gKDAuOSAqIDAuMDIpIC8gKDAuOSAqIDAuMDIgKyAwLjA1ICogMC45OClcblxuKGIpIFAoVmlydXN8VGVzdCBCIFBvc2l0aXZlKSA9IFAoVGVzdCBCIFBvc2l0aXZlfFZpcnVzKSAqIFAoVmlydXMpIC8gUChUZXN0IEIgUG9zaXRpdmUpID0gKDAuOTUgKiAwLjAyKSAvICgwLjk1ICogMC4wMiArIDAuMSAqIDAuOTgpXG5cbihjKSBQKFZpcnVzfFRlc3QgQSBQb3NpdGl2ZSBhbmQgVGVzdCBCIFBvc2l0aXZlKSA9IFAoVGVzdCBBIFBvc2l0aXZlIGFuZCBUZXN0IEIgUG9zaXRpdmV8VmlydXMpICogUChWaXJ1cykgLyBQKFRlc3QgQSBQb3NpdGl2ZSBhbmQgVGVzdCBCIFBvc2l0aXZlKSA9ICgwLjkgKiAwLjk1ICogMC4wMikgLyAoMC45ICogMC45NSAqIDAuMDIgKyAwLjA1ICogMC4xICogMC45OCkiLCJwcm9tcHQiOiJDb25zaWRlciB0d28gbWVkaWNhbCB0ZXN0cywgQSBhbmQgQiwgZm9yIGEgdmlydXMuIFRlc3QgQSBpcyA5MCUgZWZmZWN0aXZlIGF0IHJlY29nbml6aW5nIHRoZSB2aXJ1cyB3aGVuIGl0IGlzXG5wcmVzZW50LCBidXQgaGFzIGEgNSUgZmFsc2UgcG9zaXRpdmUgcmF0ZSAoaW5kaWNhdGluZyB0aGF0IHRoZSB2aXJ1cyBpcyBwcmVzZW50LCB3aGVuIGl0IGlzIG5vdCkuIFRlc3QgQiBpcyA5NSVcbmVmZmVjdGl2ZSBhdCByZWNvZ25pemluZyB0aGUgdmlydXMsIGJ1dCBoYXMgYSAxMCUgZmFsc2UgcG9zaXRpdmUgcmF0ZS4gVGhlIHR3byB0ZXN0cyB1c2UgaW5kZXBlbmRlbnQgbWV0aG9kc1xub2YgaWRlbnRpZnlpbmcgdGhlIHZpcnVzLiBUaGUgdmlydXMgaXMgY2FycmllZCBieSAyJSBvZiBhbGwgcGVvcGxlLlxuKGEpIFNheSB0aGF0IGEgcGVyc29uIGlzIHRlc3RlZCBmb3IgdGhlIHZpcnVzIHVzaW5nIG9ubHkgVGVzdCBBLiBXaGF0IGlzIHRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb25cbmlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEEgY2FtZSBiYWNrIHBvc2l0aXZlPyAoMiBwb2ludHMpXG4oYikgU2F5IHRoYXQgYSBwZXJzb24gaXMgdGVzdGVkIGZvciB0aGUgdmlydXMgdXNpbmcgb25seSBUZXN0IEIuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvblxuaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IFRlc3QgQiBjYW1lIGJhY2sgcG9zaXRpdmU%2FICgyIHBvaW50cylcbihjKSBTYXkgdGhhdCBhIHBlcnNvbiBpcyB0ZXN0ZWQgZm9yIHRoZSB2aXJ1cyB1c2luZyBib3RoIHRlc3RzLiBXaGF0IGlzIHRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb24gaXNcbnJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBib3RoIHRlc3RzIGNhbWUgYmFjayBwb3NpdGl2ZT8gKDIgcG9pbnRzKVxuXG5MZXQncyBleHBsYWluIHN0ZXAgYnkgc3RlcC4gR2l2ZSB0aGUgbnVtZXJpY2FsIGV4cHJlc3Npb24gYXMgYW5zd2VyLCBkbyBub3QgcmV0dXJuIGEgbnVtYmVyLiBUaGUgZm9ybXVsYSBmb3IgYmF5ZXMgaXMiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Результат **правильний**!

:::warning
Модель GPT недосконало виконує арифметичні розрахунки. Ви можете помітити, що хоча написаний вираз виправлено, обчислене число залишається таким самим.

Спробуйте додати фразу: `Укажіть вираз як відповідь, а не число`, щоб вимкнути обчислення.


Вас може зацікавити [MRKL](https://learnprompting.org/docs/advanced_applications/mrkl)(@karpas2022mrkl), парадигма поєднання GPT із зовнішніми інструментами, як-от калькулятори, для вирішення цього завдання.
:::

Автор: [zeyuzhao](https://github.com/Zeyuzhao).

[^1]: LSAT (Law School Admission Test) — це стандартизований тест, який використовується юридичними школами Сполучених Штатів для оцінки навичок критичного та аналітичного мислення майбутніх студентів.