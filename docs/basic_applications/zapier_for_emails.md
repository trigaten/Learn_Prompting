---
sidebar_position: 600
---

# 🟢 Zapier pro e-maily

import Basic from '@site/docs/assets/Zapiermail/Basic.png';
import Diagram from '@site/docs/assets/Zapiermail/Diagram.png';
import Step1 from '@site/docs/assets/Zapiermail/Step1.png';
import Step2 from '@site/docs/assets/Zapiermail/Step2.png';
import Step3 from '@site/docs/assets/Zapiermail/Step3.png';
import Step4 from '@site/docs/assets/Zapiermail/Step4.png';
import Zap from '@site/docs/assets/Zapiermail/Zap.png';

## Úvod

Již jsme viděli, jak užitečný může být GPT-3, pokud jde o e-maily. Může být ještě užitečnější, když jej zkombinujete s **no-code** nástroji, jako je [Zapier](https://zapier.com) nebo [Bubble.io](https://bubble.io).

Tento článek bude obsahovat příklad toho, co Zapier+GPT-3 dokáže jen s malým množstvím času na nastavení. Tento článek se zaměřuje na konkrétní příklad, ale možnosti jsou mnohem větší. V průběhu článku uvedeme několik dalších příkladů. Mějte na paměti, že to můžete dělat také v Bubble.io. Existuje mnoho dalších nástrojů pro nocode, ale v době psaní tohoto článku jen velmi málo z nich umožňuje používat GPT-3. 


V tomto článku si ukážeme, jak v Zapieru nastavit jednoduchý systém, ve kterém se **shrnují a ukládají e-maily**. Máte s někým schůzku? Rychle zkontrolujte souhrny e-mailů, které jste si s danou osobou vyměnili. Nastavení této funkce zabere asi 20 minut.

:::warning
Pro tento článek je užitečné již znát Zapier. Pokud ne, můžete se podívat na tento [článek](https://zapier.com/learn/).
:::


## Obecná myšlenka


Níže je uvedeno schéma toho, co zde budeme v Zapieru dělat. Kdykoli vám do schránky přijde e-mail, spustí se Zapier. Jedná se o čtyři kroky (prozatím):

1. Přijde e-mail a spustí Zapier
1. Zformátuje obsah e-mailu (například pro odstranění značek HTML). 
2. Odešlete jej do GPT-3, aby byl shrnut.
3. Uložit výstup do databáze

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}} />
</div>

## Nastavení v Zapieru


Ujistěte se, že máte účet [Zapier](https://zapier.com/sign-up) (můžete jej získat zdarma). Nastavení by mělo být poměrně jednoduché. Po vytvoření účtu rozbalte níže uvedený rámeček, abyste viděli úplný popis jednotlivých akcí Zapier, které musíme vytvořit. 


<details>
  <summary>Rozbalením získáte podrobnější zobrazení kroků v nástroji Zapier</summary>.
  <div>
  Takto bude nakonec vypadat diagram akcí Zapier.
    <div><div style={{textAlign: 'left'}}>
  <img src={Zap} style={{šířka: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        Krok 1: Spouštěč Gmailu při novém příchozím e-mailu (zde se používá Gmail).
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <img src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
       Krok 2: Formátovač obsahu e-mailu. 
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step2} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Krok 3: Prompting obsahu emailu
        <br/>
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step3} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        Krok 4: Přidání do databáze
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <img src={Step4} style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>
Zde je nastavení v Zapieru, které umožňuje provést velmi základní shrnutí, jak je znázorněno na obrázku. Má svá omezení, ale svou práci odvede a dokáže vytvořit užitečnou databázi.


## Optimalizace promptu pro lepší výsledky

Existuje několik snadných způsobů, jak zlepšit výsledky. Přidání kontextových a rolových výzev může zlepšit výstup. Téma a obsah vašich e-mailů však může zahrnovat širokou škálu témat. To znamená, že obecné pokyny odvedou lepší práci než velmi specifické, které by mohly model rozhodit. 

Z praktických důvodů je užitečné zadat instrukci, po které následuje sdělení GPT-3, kdy e-mail začíná v promptu prostým přidáním "Email: " a výzvu ukončíte slovem "Shrnutí: ". Tím se vyhnete tomu, aby GPT-3 odpověděl větou "Jistě! Mohu vám to shrnout...".

I zde může být užitečná výzva s rolí. Požádat GPT-3, aby se choval jako osobní asistent, pomáhá zvýšit kvalitu shrnutí.
Pokud chcete shrnout pracovní e-maily, stačí přidat roli, kterou máte, a GPT-3 získá kontext, se kterým může pracovat. Chová se, jako by předpokládal určitou úroveň znalostí čtenáře, což pomáhá odfiltrovat nepodstatné části e-mailu. 
Níže uvádíme několik příkladů s e-maily, které může obdržet office administrator. 

Můžete jej požádat, aby shrnul jednoduchý e-mail v bodech, což však nemusí být až tak užitečné v závislosti na tom, jak chcete shrnutí použít. Pro rychlé prolistování výměny e-mailů možná budete chtít, aby byl jen krátký a stručný. Jednoduchý požadavek na to ve výzvě funguje dobře. Níže je uveden příklad této výzvy. Upravte ji a pohrajte si s ní, abyste viděli, jak se změní. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Odpověď zde je přijatelná a byla by užitečná. Nicméně dalším doladěním můžete dosáhnout lepšího výsledku. Jako čtenáři souhrnů je vám jedno, že se jedná o e-mail, možná budete chtít nižší úroveň podrobnosti souhrnu. Informace o tom, proč, jsou irelevantní, totéž platí pro poslední větu o otázkách a obavách. Jednoduchým doplněním, že cílem shrnutí je, abyste obsah přelétli a že chcete odstranit příjemné věci, lze výsledek zlepšit. 

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as my personal assistant. I am an office administrator. Summarize the following email as concisely as you can, ignore the footer and header and any previous emails. \n\nEmail: Request for Additional Office Supplies Dear Office Administrator, I hope this email finds you well. I am writing to request additional office supplies for our team. As you know, we have been experiencing a high volume of work lately and have been using our supplies at a faster rate than usual. We would greatly appreciate it if you could provide us with the following items: Printer paper Ink cartridges for the HP printer in the conference room Sticky notes Binder clips Highlighters Please let me know if there are any questions or concerns, and when we can expect the supplies to be delivered. Thank you for your help. \n\nBest regards, Your Name Summary:\n" initial-response="" max-tokens="256" box-rows="15" model-temp="0" top-p="0"> </div>



<br/>Teď máte jen nejdůležitější části shrnutí.


## Další případy použití

Nyní, když jste viděli příklad souhrnů, zmíníme několik dalších případů použití Zapier+GPT-3. Jedním ze skvělých příkladů je nechat GPT-3 kategorizovat vaše e-maily. To spočívá pouze v tom, že mu v promptu řeknete, aby následující e-mail zařadil do libovolné kategorie.

Důkladnějším příkladem by bylo mít více promptů. Můžete použít prompt k vygenerování odpovědi, která souhlasí s požadavky e-mailu, a odpovědi, která s nimi nesouhlasí nebo je popírá. Obě můžete uložit do návrhů a mít je připravené k odeslání, kdykoli je budete chtít odeslat. 

Pokud pravidelně dostáváte velmi podobné e-maily, můžete pomocí filtru v Zapieru použít prompt POUZE na tento e-mail. V kombinaci s formátovačem to může být mocný nástroj. Můžete z nich extrahovat informace a exportovat CSV nebo je přímo ukládat do nějaké formy databáze. 


## Obavy

Při spouštění e-mailů přes GPT-3 a jejich ukládání mějte na paměti obavy o ochranu osobních údajů. GPT-3 se někdy dopouští chyb. Důrazně doporučujeme zkontrolovat obsah e-mailu před odesláním.