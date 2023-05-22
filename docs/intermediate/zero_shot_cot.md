---
sidebar_position: 4
---

# 🟢 Myšlenkový řetězec s nulovým počtem výstřelů


Zero Shot Chain of Thought (Zero-shot-CoT) je prompt (@kojima2022large). 
navazuje na %%CoT prompting|CoT prompting%% (@wei2022chain), který zavádí neuvěřitelný 
simple zero shot prompt. Zjistí, že přidáním slov "**Přemýšlejme krok za krokem.**" na konec otázky, jsou LLM schopni generovat řetězec, který odpovídá na otázku. Na základě tohoto myšlenkového řetězce jsou schopni
získat přesnější odpovědi.

import ZSImage from '@site/docs/assets/zero_shot.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Zero Shot CoT (Kojima et al.)
</div>

Technicky vzato zahrnuje celý proces Zero-shot-CoT dvě samostatné výzvy/doplnění. 
Na následujícím obrázku horní bublina vlevo generuje řetězec myšlenek, zatímco horní bublina na
vpravo přebírá výstup z první výzvy (včetně první výzvy samotné),
a z tohoto řetězce myšlenek získá odpověď. Tato druhá výzva je _sama o sobě rozšířená_ výzva.

import ZSProcessImage from '@site/docs/assets/zero_shot_example.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Full Zero Shot CoT Process (Kojima et al.)
</div>

## Příklad

Zde je několik ukázek (které provádějí pouze extrakci odůvodnění). Tento první
ukázka ukazuje, jak GPT-3 (davinci-003) selhává při řešení jednoduché matematické otázky, zatímco druhá ukázka využívá 
Zero-shot-CoT a úspěšně vyřeší problém. Neváhejte a zadejte své
OpenAI API klíč (klikněte na tlačítko Generovat) a pohrajte si s ukázkami. Všimněte si, o kolik jednodušší
je výzva Zero-shot-CoT jednodušší než výzva CoT.

#### Nesprávné

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### Správně

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Výsledky
Zero-shot-CoT byl také účinný při zlepšování výsledků v aritmetice, commonsense, 
a symbolickém uvažování. Nepřekvapivě však většinou nebyl stejně 
účinnější než podněty CoT. Důležitým případem použití Zero-shot-CoT je získání
několik příkladů pro CoT prompting je obtížné. 

## Odebrírání zájmu

Kojima a kol. experimentují s řadou různých Zero-shot-CoT výzev. 
(např. "Vyřešíme tento problém tak, že ho rozdělíme na jednotlivé kroky." nebo "Přemýšlejme o tom logicky."), ale zjistili, že "Přemýšlejme krok za krokem" je nejefektivnější pro jejich
vybrané úlohy.



## Poznámky

Krok extrakce musí být často specifický pro danou úlohu, což činí Zero-Shot-CoT méně
zobecnitelný, než se na první pohled zdá.

Anekdoticky jsem zjistil, že podněty ve stylu Zero-Shot-CoT jsou někdy účinné. 
při zlepšování délky dokončení generativních úloh. Vezměme si například
standardní výzvu `Napsat příběh o žábě a houbě, které se spřátelí`.
Připojení slov `Přemýšlejme krok za krokem.` na konec této výzvy vede k tomu, že
k mnohem delšímu dokončení.
