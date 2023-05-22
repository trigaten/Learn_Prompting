---
sidebar_position: 0
---

# 🟢 Úvod

import Techniques from '@site/docs/assets/techniques.svg';

<div style={{textAlign: 'center'}}>
 <Techniques style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>


V této kapitole jsou představeny jednoduché techniky výzev a také terminologie. Abyste porozuměli technice výzvy/podnětu, musíte nejprve pochopit některé *velmi* základní pojmy umělé inteligence. Pokud již znáte níže uvedená témata, neváhejte přeskočit na [další článek](https://learnprompting.org/docs/basics/prompting).

## Co je to umělá inteligence?

Pro naše účely je umělá inteligence (AI) obor, v němž lidé vytvořili
"chytré" algoritmy, které "myslí" jako lidé[^1]. Tyto algoritmy mohou psát **esej**, 
řešit **matematické problémy** a vytvářet **umění**. Nedávné pokroky v tomto oboru vytvořily umělou inteligenci.
tak pokročilé, že dokáží psát přesvědčivé **prodejní e-maily**, **novinové články**, a dokonce i **zprávy**. 
**vyhrávat [umělecké soutěže](https://impakter.com/art-made-by-ai-wins-fine-arts-competition/)**.

Umělá inteligence v současné době přináší revoluci do mnoha odvětví, včetně **žurnalistiky**, **zdravotnictví** a dalších.
**vzdělávání**. Je pravděpodobné, že se s jejím nasazením brzy setkáte i na svém pracovišti/ve třídě, pokud jste ji dosud nepoužili.
ještě ne. Přestože je umělá inteligence nesmírně užitečná, vyžaduje, aby ji člověk řídil, co má dělat.
Umělé inteligence jsou často jako velmi chytré pětileté děti. Dokážou spoustu věcí, ale potřebují. 
pečlivé instrukce, aby je dělaly dobře.

Umět umělou inteligenci správně řídit je velmi silná dovednost. Jak s nimi tedy komunikujete? 
Umělé inteligence, o kterých pojednává tento kurz, rozumí angličtině (a dalším jazykům),
takže obvykle stačí popsat úkoly, které chceme provést. Umělé inteligenci můžeme například říci, aby
`Napsat esej o výhodách umělé inteligence` a ono řekne [^2]:

```
V posledních letech se umělá inteligence (AI) stala horkým tématem v technologickém světě. Díky svému potenciálu způsobit revoluci v mnoha aspektech našeho života se AI stává stále aktuálnější s tím, jak se technologie neustále vyvíjejí. Od jejích aplikací ve zdravotnictví a dopravě až po její využití ve vzdělávání a výrobě nám AI již ukázala svůj obrovský potenciál, který může být pro společnost přínosem v mnoha směrech.

Nejzřejmějším přínosem AI je její schopnost automatizovat všední úkoly. Systémy AI lze využít k automatizaci rozsáhlých operací, jako je analýza dat, obsluha zákazníků, a dokonce i výroba zboží. Tím se uvolní lidská pracovní síla, která se může soustředit na složité, kreativní úkoly vyžadující více lidské inteligence a vynalézavosti. Umělou inteligenci lze také využít k analýze velkého množství dat a rozhodování ve zlomku času, který by potřeboval člověk. To může být výhodné v odvětvích, jako je finančnictví, kde AI dokáže odhalit vzorce na akciovém trhu a nabídnout poznatky, které by jinak zůstaly nepovšimnuty.

Umělou inteligenci lze také využít k vytváření předpovědí a generování poznatků, které lze využít ke zvýšení efektivity a přesnosti. AI lze například využít k předvídání trendů a preferencí zákazníků, což pomáhá podnikům činit lepší rozhodnutí a zvyšovat zisky. AI lze také využít k identifikaci potenciálních rizik a příležitostí v různých odvětvích, jako jsou finance, zdravotnictví a výroba. To může firmám pomoci přijímat informovaná rozhodnutí a snížit riziko nákladných chyb.

V neposlední řadě lze AI využít ke zlepšení našeho porozumění světu. AI lze využít k analýze velkých souborů dat a generování poznatků, které lze využít k lepšímu pochopení světa kolem nás. To nám může pomoci lépe pochopit dopady změny klimatu, vyvinout nové způsoby léčby nemocí, a dokonce předpovídat události, jako jsou zemětřesení a povodně.

Celkově má umělá inteligence potenciál způsobit revoluci v mnoha aspektech našeho života. Od automatizace všedních úkolů až po generování poznatků a předpovědí - AI lze využít ke zlepšení efektivity, přesnosti a našeho porozumění světu. S dalším rozvojem technologií bude AI stále důležitější a její potenciál být přínosem pro společnost bude jen růst.
```

## Proč by mě to mělo zajímat?

Umělou inteligenci lze využít k automatizaci úkolů, jejichž řešením *právě teď* trávíte nespočet hodin.
Výše jsme uvedli několik příkladů, ale můžete vzít v úvahu i jakýkoli mírně se opakující úkol, který děláte.
Může to být psaní e-mailů, sestav nebo dokonce psaní kódu. Pokud dokážete úkol popsat
umělé inteligenci, pravděpodobně ho udělá za vás nebo vám alespoň poskytne výchozí bod. 

## Jak začít?

Přečtěte si zbytek této kapitoly a pak se podívejte na další kapitoly, které vás zajímají.
Zejména kapitola [applied prompting](https://learnprompting.org/docs/applied_prompting/overview) by vás mohla zajímat, pokud byste chtěli
vidět, jak profesionálové používají umělou inteligenci k automatizaci své práce. S UI můžete experimentovat
pomocí zdrojů, jako je [Playground](https://beta.openai.com/playground), [jiné IDE](https://learnprompting.org/docs/tooling/IDEs/intro), nebo jednoduše pomocí interaktivních [embedů](https://learnprompting.org/docs/basics/intro#embeds), které uvidíte na celé této stránce.

Než si přečtete další článek, je důležité poznamenat, že k tomu, abyste se mohli věnovat promptnímu inženýrství, nepotřebujete žádné technické zázemí. Většinou se jedná o metodu pokusů a omylů a můžete se učit za pochodu.

### Vložení

Tento kurz nabízí interaktivní výuku. Můžete experimentovat s cvičeními probíranými v kurzu pomocí [embeds](https://embed.learnprompting.org/), které jsou umístěny po celém webu.

Zde je **obrázek**, jak vypadá vložený soubor:

import dyno from '@site/docs/assets/basics/dyno_example.png';
import key from '@site/docs/assets/API_key.png';

<div style={{textAlign: 'center'}}>
  <img src={dyno} style={{width: "750px"}} />
</div>

Hned pod tímto odstavcem byste měli vidět vložený obrázek, který vypadá přesně jako tento. Pokud tomu tak není, možná budete muset povolit JavaScript nebo použít jiný prohlížeč.

<hr/>
Vkládání zde:
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width: "100%", height: "280px", border: "0", borderRadius: "4px", overflow: "hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<hr/>

Za předpokladu, že jej vidíte, klikněte na tlačítko **Generate**. Pokud jej používáte poprvé (nebo jste v novém prohlížeči/vymazali jste soubory cookie), bude po vás požadováno zadání klíče [OpenAI API key](https://platform.openai.com/account/api-keys). Bezplatný klíč získáte kliknutím na [tento odkaz](https://platform.openai.com/account/api-keys) a registrací účtu OpenAI. Tento klíč vám umožní používat umělou inteligenci OpenAI ke generování textu v embedech. 

:::poznámka
Přestože OpenAI poskytuje bezplatné klíče, za používání jejich UI budete muset nakonec zaplatit. Naštěstí je to [relativně levné](https://openai.com/pricing)!
:::

Když přejdete na stránku [OpenAI API key](https://platform.openai.com/account/api-keys), klikněte na tlačítko **Vytvořit nový tajný klíč**. Zobrazí se modální okno, které obsahuje řetězec textu, jako je tento:

<div style={{textAlign: 'center'}}>
  <img src={key} style={{widtha: "750px"}} />
</div>

Vložte tento klíč do vloženého textu a stiskněte tlačítko **Uložit**. Nyní byste měli být schopni používat embedy na celém webu.

Nyní máte všechny informace, které potřebujete, abyste mohli začít. Šťastné učení!


[^1]: Technicky vzato "nemyslí" jako lidé, ale takto jednoduše se to dá vysvětlit.
[^2]: Toto skutečně napsala umělá inteligence (GPT-3 davinci-003).
