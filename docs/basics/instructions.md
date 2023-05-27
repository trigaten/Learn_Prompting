---
sidebar_position: 2
---
# 🟢 Instrukce

import InstructionPrompt from '@site/docs/assets/instruction_prompt.svg';

<div style={{textAlign: 'center'}}>
  <InstructionPrompt style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>


Jednou z nejjednodušších metod promptingu je pouhé zadávání pokynů (někdy nazývané *instruction prompting*)(@efrat2020turking)(@mishra2022reframing). Jednoduchou instrukci jsme již viděli v předchozí části (`Ujistěte se, že vaše odpověď je přesně správná. Kolik je 965*590? Ujistěte se, že vaše odpověď je přesně správná:`).
Moderní umělé inteligence se mohou řídit mnohem složitějšími instrukcemi. 

Níže je náš první [embed](/Learn_Prompting_CAI/docs/basics/intro#embeds). Pokud se vám nezobrazí, ujistěte se, že máte v prohlížeči zapnutý Javascript. Protože se jedná o interaktivní ukázku, můžete text upravit a stisknutím tlačítka `Generate` AI znovu spustit.

#### Příklad 1

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRvZSwgSm9obiIsInByb21wdCI6IkEgdXNlciBoYXMgaW5wdXQgdGhlaXIgZmlyc3QgYW5kIGxhc3QgbmFtZSBpbnRvIGEgZm9ybS4gV2UgZG9uJ3Qga25vdyBpbiB3aGljaCBvcmRlciBcbnRoZWlyIGZpcnN0L2xhc3QgbmFtZSBpcywgYnV0IHdlIG5lZWQgaXQgdG8gYmUgaW4gdGhlIGZvcm1hdCAnTGFzdCwgRmlyc3QnLiBDb252ZXJ0IHRoZSBmb2xsb3dpbmc6XG5cbmpvaG4gZG9lIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width: "100%", height: "350px", border: "0", borderRadius: "4px", overflow: "hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>Umělá inteligence je schopna tento problém snadno vyřešit. Můžeme ji také požádat, aby vyřešila mnoho dalších jednoduchých i složitějších problémů.

#### Příklad 2

Zde je složitější příklad[^A]:

```
Přečtěte si následující prodejní e-mail. Odstraňte všechny informace umožňující identifikaci osob (PII), a nahraďte je příslušným zástupným znakem. Nahraďte například jméno "John Doe" za "[JMÉNO]".

Dobrý den, Johne,

Píši vám, protože jsem si všiml, že jste si nedávno koupil nové auto. Jsem prodejce v místním autosalonu (Cheap Dealz) a chtěl jsem vám dát vědět, že máme skvělou nabídku na nová auta. Pokud máte zájem, dejte mi prosím vědět.

Děkuji,

Jimmy Smith

Telefon: 410-805-2345
E-mail: jimmysmith@cheapdealz.com
```

Zde je odpověď [AI](https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003):

```text
// highlight-start
Dobrý den, [JMÉNO],

Píšu vám, protože jsem si všiml, že jste si nedávno koupil nové auto. Jsem prodejce v místním autosalonu ([DEALERSHIP]) a chtěl jsem vám dát vědět, že máme skvělou nabídku na nové vozy. Pokud máte zájem, dejte mi prosím vědět.

Děkuji,

[PRODEJCE]

Telefon: [TELEFONNÍ ČÍSLO]
E-mail: [E-MAILOVÁ ADRESA]
// highlight-end
```

Je velmi zajímavé sledovat, jak model dokáže extrapolovat z pokynů. Například umí
nahradit `Cheap Dealz` za `[DEALERSHIP]` a `Jimmy Smith` za `[SALESPERSON]`, i když
že jsme mu to výslovně neřekli.

[^A]: Umožnit umělé inteligenci odstranit z textu osobní údaje je slibný přístup, ale měla by být používána s mimořádnou opatrností, protože se může dopustit chyb.

