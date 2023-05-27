---
sidebar_position: 30
---

# 🟢 Studijní kamarád

Jedním z našich nejoblíbenějších způsobů, jak využít LLM, je studijní pomůcka! Hodí se zejména pro vysvětlení matoucích pojmů a také pro kvízy z obsahu testu.

## Vysvětlení pojmů

Nedávno jsem četl učebnici o kaktusech(@nobel2002cacti) a uviděl jsem tuto pasáž:

```text
Vzhledem k adaptacím na xerické podmínky a přítomnosti **méně odvozených dřevin** v čeledi Pereskioideae je čeleď Cactaceae jednou z anatomicky i morfologicky nejzajímavějších čeledí. 
```

Neměl jsem tušení, co **méně odvozené dřeviny** znamenají, a Google mi o tom ukázal pouze výzkumné články. Rozhodl jsem se použít ChatGPT, abych zjistil, co to znamená. Zadal jsem mu následující prompt z úryvku z knihy a mé otázky.

```text
Vzhledem k adaptacím na xerické podmínky a přítomnosti méně odvozených dřevin v čeledi Pereskioideae je čeleď Cactaceae jednou z anatomicky i morfologicky nejzajímavějších čeledí. 

Co znamenají méně odvozené dřeviny?

// highlight-start
V tomto kontextu "méně odvozené dřeviny" označují předky nebo primitivní formu dřeva, která se vyskytovala v rané evoluci rostlin. Tato dřeva postrádají specializované struktury a znaky, které se vyvinuly později u odvozenějších nebo pokročilejších rostlin. V podčeledi Pereskioideae čeledi Cactaceae je dřevo ve srovnání s ostatními podčeleděmi méně odvozené a více se podobá dřevu, které se vyskytuje u nekaktusovitých rostlin. Předpokládá se, že méně odvozené dřevo u Pereskioideae je adaptací na vlhčí a méně xerické prostředí, ve kterém tyto rostliny rostou ve srovnání s ostatními kaktusy.
//highlight-end
```

Model dokázal rychle odpovědět na mou otázku a já mohl pokračovat ve čtení.

## Kvízování sebe sama

Dalším způsobem, jak využít LLM jako studijní pomůcku, je kvízovat se. Pokud vás čeká nadcházející test z matematiky, můžete se jednoduše zeptat:

```text
Vygenerujte mi 5 kvízových otázek z kalkulu I:

// highlight-start
1. Jaká je derivace vztahu y = x3?
2. Vyhodnoťte neurčitý integrál ze vztahu x3 + 5x2 + 7x + 4. Jaký je výsledek?
3. Jaké je součinové pravidlo pro derivace?
4. Najděte rovnici přímky tečné k y = x2 v bodě (4, 16).
5. Jaká je druhá derivace y = x4?
//highlight-end
```

Pokud se učíte specifičtější téma, může být nutné uvést k modelu další informace, například poznámky z hodiny!

```text
20/3/2020 14:30

Poznámky ke kurzu marketingu

- Probírány 4 P marketingu: Produkt, cena, místo, propagace.
- Rozdíl mezi B2C a B2B: B2C je přímý spotřebitelský trh, B2B je business to business.
- Různé typy průzkumu trhu: Kvantitativní a kvalitativní, např. průzkumy a cílové skupiny
- Cenové strategie: Skimming, Penetrace, Konkurence a Hodnota
- Segmentace: Segmentace zákaznické základny podle věku, příjmů atd.
- Čtyři typy segmentace: Demografická, geografická, psychografická a behaviorální segmentace.
- Diskuse o různých propagačních nástrojích: Reklama, osobní prodej, vztahy s veřejností, přímý marketing a podpora prodeje.

Vygenerujte pro mě 5 otázek marketingového kvízu na základě mých poznámek:

// highlight-start
1. Jaké jsou 4 P marketingu?
2. Jaký je rozdíl mezi B2C a B2B?
3. Jaké jsou dva typy průzkumu trhu?
4. Jaké jsou 4 typy segmentace?
5. Vyjmenujte 5 nástrojů propagace.
//highlight-end
```

## Závěr

Pravděpodobně existují i další způsoby, jak využít LLM ke studiu. Mnoho vzdělávacích společností, jako je Duolingo a Quizlet, implementuje LLM do svých produktů.