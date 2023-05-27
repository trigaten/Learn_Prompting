---
sidebar_position: 7
---

# 🟡 Generované znalosti


Myšlenkou přístupu generovaných znalostí(@liu2021generated) je požádat %%LLM|LLM%% o vygenerování potenciálně užitečných informací o dané otázce/promptu před vygenerováním konečné odpovědi.

Řekněme například, že chcete napsat malý příspěvek na blog o nějakém zvířeti, například [Medvědím duchovi](https://cs.wikipedia.org/wiki/Baribal_b%C3%ADl%C3%BD). Než požádáte %%LLM|LLM%% o napsání příspěvku na blog, můžete jej požádat, aby vygeneroval některá fakta o medvědím duchovi. To pomůže LLM napsat informativnější příspěvek na blog. Existují dva jednoduché způsoby, jak na to.

## Přístup založený na jednom promptu (single prompt)

První přístup požádá LLM, aby vygeneroval znalosti a poté napsal příspěvek, a to vše pomocí jediného promptu.

```text
Vygenerujte 4 fakta o medvědím duchovi a poté na základě těchto faktů napište krátký příspěvek na blog:
// highlight-start
Medvěd kermodský, známý také jako medvědí duch, je vzácný poddruh amerického medvěda černého, který se vyskytuje v pobřežních oblastech Britské Kolumbie v Kanadě. 

1. Medvěd kermodský je unikátní poddruh amerického černého medvěda, jehož přibližně 10 % populace má bílou srst. 

2. Medvěd kermodský je symbolem prvních národů Britské Kolumbie a je považován za duchovní zvíře. 

3. Medvěd kermodský je důležitou součástí ekosystému, pomáhá roznášet semena a udržovat rovnováhu lesa. 

4. Medvěd kermodský je chráněným druhem a jeho populace je pečlivě sledována vládou provincie.

Medvěd kermodský je jedinečné a zvláštní zvíře, které se vyskytuje v pobřežních oblastech Britské Kolumbie v Kanadě. Přibližně 10 % populace tohoto poddruhu amerického medvěda černého má bílou srst, což z nich dělá vzácnou podívanou. Medvěd kermodský je symbolem prvních národů Britské Kolumbie a je považován za duchovní zvíře. Je důležitou součástí ekosystému, pomáhá roznášet semena a udržovat rovnováhu lesa. Medvěd kermodský je chráněným druhem a jeho populace je pečlivě sledována provinční vládou. Je to krásné a majestátní zvíře a je důležité, abychom se podíleli na ochraně a zachování tohoto druhu.
// highlight-end
```


## Duální prompt

V tomto přístupu nejprve vyzveme %%LLM|LLM%% k vytvoření faktů o medvědovi:
  
```text
Vygenerujte 10 faktů o medvědovi kermodském:
// highlight-start
1. Medvěd kermodský, známý také jako medvědí duch, je vzácný poddruh amerického medvěda černého, který se vyskytuje v Britské Kolumbii v Kanadě.

2. Medvěd kermodský má jedinečnou bílou nebo krémově zbarvenou srst, která je způsobena recesivním genem.

3. Medvěd kermodský je pro obyvatele prvních národů Britské Kolumbie symbolem naděje a obnovy.

4. Medvěd kermodský je chráněným druhem a Výbor pro stav ohrožených druhů volně žijících živočichů v Kanadě jej zařadil na seznam zvláště chráněných druhů.
// highlight-end
```

Poté tyto informace vložíme do dalšího promptu k napsání příspěvku na blog:

```text
1. Medvěd kermodský, známý také jako medvědí duch, je vzácný poddruh amerického medvěda černého, který se vyskytuje v Britské Kolumbii v Kanadě.

2. Medvěd kermodský má jedinečnou bílou nebo krémovou srst, která je způsobena recesivním genem.

3. Medvěd kermodský je pro obyvatele prvních národů Britské Kolumbie symbolem naděje a obnovy.

4. Medvěd kermodský je chráněným druhem a Výbor pro stav ohrožených druhů volně žijících živočichů v Kanadě jej zařadil na seznam zvláště chráněných druhů.

Na základě výše uvedených faktů napište příspěvek o medvědu kermodském v rozsahu jednoho odstavce na blog:

// highlight-start

Medvěd kermodský, známý také jako medvědí duch, je vzácný poddruh amerického medvěda černého, který se vyskytuje v Britské Kolumbii v Kanadě. Tento jedinečný medvěd má bílou nebo krémově zbarvenou srst, což je způsobeno recesivním genem, a je symbolem naděje a obnovy pro první národy Britské Kolumbie. Medvěd kermodský je chráněným druhem a Výbor pro stav ohrožených druhů volně žijících živočichů v Kanadě ho zařadil na seznam zvláště chráněných druhů, takže je důležitou součástí biologické rozmanitosti regionu.

// highlight-end
```

Doporučuji tento druhý přístup, protože dokáže spolehlivěji vytvářet delší obsah.

## Další případ použití

Přístup generovaných znalostí byl ve skutečnosti zaveden pro zcela jiný úkol, a to pro zodpovídání obtížných otázek. Vezměme si následující otázku, na kterou GPT-3 odpovídá nesprávně: 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIGxhcmdlciB0aGFuIENvbmdvLiIsInByb21wdCI6IldoaWNoIGNvdW50cnkgaXMgbGFyZ2VyLCBDb25nbyBvciBTb3V0aCBBZnJpY2E%2FIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"200px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::note
Tento příklad nemusí být přesný. Pracujeme na jeho revizi.
:::

<br/>

Pokud nejprve požádáme %%LLM|LLM%% o vytvoření faktů o Kongu a Jihoafrické republice, můžeme tyto informace použít ke správnému zodpovězení otázky. Teoreticky je to podobné jako %%CoT|Chain of Thought Prompting%%, protože tím vlastně přimějeme LLM, aby vygeneroval zprostředkující úvahy v podobě souvisejících faktů.

Začněme prvním krokem, *generováním znalostí*. Můžeme požádat %%LLM|LLM%%, aby generoval fakta o Kongu a Jižní Africe:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy4iLCJwcm9tcHQiOiJHZW5lcmF0ZSBzb21lIGtub3dsZWRnZSBhYm91dCB0aGUgc2l6ZXMgb2YgU291dGggQWZyaWNhIGFuZCBDb25nbzoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

Dále využijeme tyto znalosti ke správnému zodpovězení otázky. Toto je krok *integrace znalostí*.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiQ29uZ28gaXMgbGFyZ2VyIHRoYW4gU291dGggQWZyaWNhLlxuIiwicHJvbXB0IjoiU291dGggQWZyaWNhIGlzIHRoZSAyNXRoIGxhcmdlc3QgY291bnRyeSBpbiB0aGUgd29ybGQsIHdpdGggYW4gYXJlYSBvZiAxLDIyMSwwMzcgc3F1YXJlIGtpbG9tZXRlcnMgKDQ3MSw0NDUgc3F1YXJlIG1pbGVzKS4gQ29uZ28sIG9uIHRoZSBvdGhlciBoYW5kLCBpcyB0aGUgMTF0aCBsYXJnZXN0IGNvdW50cnkgaW4gdGhlIHdvcmxkLCB3aXRoIGFuIGFyZWEgb2YgMiwzNDQsODU4IHNxdWFyZSBraWxvbWV0ZXJzICg5MDUsNTY3IHNxdWFyZSBtaWxlcykuIFNvdXRoIEFmcmljYSBpcyBhbG1vc3QgaGFsZiB0aGUgc2l6ZSBvZiBDb25nbywgd2l0aCBhIHBvcHVsYXRpb24gb2YgNTcuNyBtaWxsaW9uIGNvbXBhcmVkIHRvIENvbmdvJ3MgcG9wdWxhdGlvbiBvZiA4NC4zIG1pbGxpb24uIFNvdXRoIEFmcmljYSBpcyB0aGUgbW9zdCBwb3B1bG91cyBjb3VudHJ5IGluIHRoZSByZWdpb24sIHdoaWxlIENvbmdvIGlzIHRoZSBzZWNvbmQgbW9zdCBwb3B1bG91cy5cblxuV2hpY2ggY291bnRyeSBpcyBsYXJnZXIsIENvbmdvIG9yIFNvdXRoIEFmcmljYT8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Techničtější diskuse

Ačkoli výše uvedený případ použití byl podobný způsobu, jakým byly původně zavedeny generované znalosti, není úplně stejný. Níže uvedený obsah se týká více technického kontextu, ve kterém byl tento přístup představen. Řídí se vzorem dvou mezikroků (generování znalostí a integrace znalostí), který jsme viděli výše.

import KGImage from '@site/docs/assets/knowledge_generation.png';

<div style={{textAlign: 'center'}}>
  <img src={KGImage} style={{width: "750px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge (Liu et al.)
</div>

### Generování znalostí

V kroku generování znalostí je %%LLM|LLM%% požádán, aby vygeneroval sadu faktů o **otázce**. LLM je vyzván několikanásobným způsobem, jak je vidět níže. Pomocí této výzvy je vygenerováno M různých doplnění (podobně jako u přístupu založeného na vlastní konzistenci).

import KGP1Image from '@site/docs/assets/gen_k_p1.png';

<div style={{textAlign: 'center'}}>
  <img src={KGP1Image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Generated Knowledge Příklad (Liu et al.)
</div>


### Integrace znalostí

Dále vygenerujeme "znalostně rozšířené" otázky a vyzveme jimi %%LLM|LLM%% a získáme konečné odpovědi. Nejjednodušší způsob, jak to pochopit, je projít si příklad.

Předpokládejme, že se pokoušíme odpovědět na **otázku** "Většina klokanů má <mask\> končetin". Předpokládejme, že v kroku generování znalostí jsme vygenerovali 2 znalosti (M=2):

- Znalost 1: `Klokani jsou vačnatci, kteří žijí v Austrálii.`

- Znalost 2: `Klokani jsou vačnatci, kteří mají 5 končetin.`

Nyní spojíme každou znalost s otázkou a vytvoříme otázky rozšířené o znalosti:

- Otázka s rozšířenou znalostí 1: `Většina klokanů má <mask\> končetin. Klokani jsou vačnatci, kteří žijí v Austrálii.`

- Otázka s rozšířenou znalostí 2: `Většina klokanů má <mask\> končetin. Klokani jsou vačnatci, kteří mají 5 končetin.`

Poté zadáme LLM tyto rozšířené znalostní otázky a získáme konečné návrhy odpovědí:

- Odpověď 1: `4`

- Odpověď 2: `5`

Jako konečnou odpověď vybereme odpověď s nejvyšší pravděpodobností. Nejvyšší pravděpodobnost může být měkká maximální pravděpodobnost tokenu odpovědi (ang. softmax probability of the answer token), nebo logaritmická pravděpodobnost tokenu(ů) odpovědi (ang. log probability of the answer token(s)).

## Jazykové modely rozšířené o recitaci

Přístup recitation-augmented(@sun2022recitationaugmented) je podobný generovaným znalostem (v podstatě stejný). Je však mnohem méně složitý než formální implementace generovaných znalostí.


import RImage from '@site/docs/assets/recitation.png';

<div style={{textAlign: 'center'}}>
  <img src={RImage} style={{width: "250px"}} />
</div>

Jde o to, %%aby několik shotů|few shot standard prompt%% vyzvalo LLM ke generování informací *a* odpovědi ve *stejném* kroku. Skutečnost, že ve stejném kroku recituje/generuje znalosti a odpovídá na otázku, je hlavním rozdílem oproti přístupu s generovanými znalostmi.

Zopakujme, že tento přístup podněcuje model pomocí několika příkladů (otázka, recitace, odpověď) a poté položí otázku. Autoři poznamenávají, že tento přístup lze kombinovat s sebekonzistencí nebo vícenásobnými cestami doplňování (ang. multiple completion paths).



## Poznámky

- Generované znalosti vykazují zlepšení na různých datasetech zdravého rozumu.

- Znalost odpovídající vybrané odpovědi se nazývá _vybraná znalost_ (ang. selected knowledge).

- V praxi lze za konečnou odpověď považovat tu, která se vyskytuje nejčastěji.