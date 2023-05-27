---
sidebar_position: 99
---
# 🟢 Midjourney

[Midjourney](https://www.midjourney.com) je generátor obrázků s umělou inteligencí, který funguje prostřednictvím rozhraní bota Discord i webové aplikace (plánuje se verze Midjourney s API). Proces generování obrázků pomocí Midjourney se řídí stejnými základními principy jako jiné generátory obrázků AI, včetně používání promptů, které proces generování řídí. 

Jednou z jedinečných vlastností aplikace Midjourney ve srovnání s jinými generátory obrázků s umělou inteligencí je její schopnost vytvářet vizuálně působivé a umělecky komponované obrázky. To je dáno specializovaným tréninkem modelu, který mu umožňuje vytvářet vysoce kvalitní obrázky se specifickými uměleckými parametry (více o tom v části "Pokročilé výzvy" > "Parametry").

S Botem Midjourney můžete experimentovat na serveru [Learn Prompting Discord](http://learnprompting.org/discord) nebo na serveru [official Midjourney Discord server](https://discord.gg/midjourney).

import midjourney_astronaut from '@site/docs/assets/midjourney_astronaut.png';
import midjourney_astronaut_params from '@site/docs/assets/midjourney_astronaut_params.png';
import midjourney_astronaut_multi1 from '@site/docs/assets/midjourney_astronaut_multi1.png';
import midjourney_astronaut_multi2 from '@site/docs/assets/midjourney_astronaut_multi2.png';
import midjourney_astronaut_ip2 from '@site/docs/assets/midjourney_astronaut_ip2.png';

import midjourney_astronaut_params_a12 from '@site/docs/assets/midjourney_astronaut_params_a12.png';
import midjourney_astronaut_params_a169 from '@site/docs/assets/midjourney_astronaut_params_a169.png';

import midjourney_astronaut_params_c20 from '@site/docs/assets/midjourney_astronaut_params_c20.png';
import midjourney_astronaut_params_c80 from '@site/docs/assets/midjourney_astronaut_params_c80.png';

import midjourney_astronaut_params_q05 from '@site/docs/assets/midjourney_astronaut_params_q05.png';
import midjourney_astronaut_params_q2 from '@site/docs/assets/midjourney_astronaut_params_q2.png';

import midjourney_astronaut_params_s50 from '@site/docs/assets/midjourney_astronaut_params_s50.png';
import midjourney_astronaut_params_s900 from '@site/docs/assets/midjourney_astronaut_params_s900.png';

import midjourney_astronaut_params_sameseed from '@site/docs/assets/midjourney_astronaut_params_sameseed.png';
import midjourney_astronaut_params_seed123 from '@site/docs/assets/midjourney_astronaut_params_seed123.png';

import midjourney_astronaut_params_tile from '@site/docs/assets/midjourney_astronaut_params_tile.png';
import midjourney_astronaut_params_tilegrid from '@site/docs/assets/midjourney_astronaut_params_tilegrid.png';
import midjourney_astronaut_params_tilecomplete from '@site/docs/assets/midjourney_astronaut_params_tilecomplete.jpeg';

import midjourney_astronaut_params_v1 from '@site/docs/assets/midjourney_astronaut_params_v1.png';
import midjourney_astronaut_params_v2 from '@site/docs/assets/midjourney_astronaut_params_v2.png';
import midjourney_astronaut_params_v3 from '@site/docs/assets/midjourney_astronaut_params_v3.png';



# Základní použití

Základní anatomie promptu na Midjourney je `/imagine prompt: [PROMPT PRO OBRÁZEK] [--VOLITELNÉ PARAMETRY]`. 

Například: `/imagine prompt: astronaut na koni`.


<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut} style={{width: "350px"}} />
</div>


Příklad s parametry: `/imagine prompt: astronaut na koni --ar 3:2 --c 70 --q 2 --seed 1000 `

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params} style={{width: "350px"}} />
</div>

V tomto základním příkladu byly použity následující parametry:


`--ar 3:2` nastaví poměr stran obrázku na 3:2

`--c 70` přidává hodnotu chaosu 70, aby mohl Midjourney volněji interpretovat výzvu (rozsah hodnot chaosu: 0 - 100)

`--seed 100` nastaví libovolnou počáteční hodnotu, kterou lze později použít k opětovnému vykreslení nebo přepracování obrázku.


(více informací o parametrech Midjourney najdete v části "Pokročilé propmty" > "Parametry")


# Pokročilé prompty
Pokročilé výzvy v Midjourney využívají parametry a speciální techniky promptingu podporované algoritmem Midjourney.

## Vícenásobné promptyvy
Ve výchozím nastavení interpretuje Midjourney prompt holisticky. Použití dvojité dvojtečky `::` říká Midjourney, aby interpretoval každou část promptu zvlášť.

Příklad:

```text
/imagine prompt: astronaut a kůň
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi1} style={{width: "350px"}} />
</div>

```text
/imagine prompt: astronaut:: a kůň
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_multi2} style={{width: "350px"}} />
</div>


## Obrázkové prompty
Nahráním obrázku do služby Discord a použitím jeho adresy URL ve výzvě můžete dát Midjourney pokyn, aby tento obrázek použila k ovlivnění obsahu, stylu a kompozice výsledků. 
Příklad:
[Astronaut (Zdroj: Wikipedia)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).jpg)

```text
/imagine prompt: [URL obrázku], impresionistický obraz
```
<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_ip2} style={{width: "350px"}} />
</div>

## Parametry (v4)

Nejnovější model Midjourney (v4) podporuje následující parametry.

### Poměr stran:

`--ar [ratio]` změní výchozí poměr (1:1) na nový poměr (v současné době je maximální podporovaný poměr 2:1).

Příklad: `astronaut na koni --ar 16:9` a `astronaut na koni --ar 1:2`.

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_a169} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_a12} style={{width: "175px"}} />
</div>


### Chaos:

`--c [value]` nastavuje hodnotu chaosu, která určuje, jak moc Midjourney mění výzvu; čím vyšší je hodnota chaosu, tím neobvyklejší a neočekávanější jsou výsledky a kompozice (rozsah: 0 - 100)

Příklad: `astronaut na koni --c20` a `astronaut na koni --c 80`.

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_c20} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_c80} style={{width: "350px"}} />
</div>


### Kvalita:

`--q [hodnota]` určuje, kolik času bude generování obrázku trvat, čímž se zvýší kvalita. Výchozí nastavení je "1". Vyšší hodnoty využívají více minut grafického procesoru (akceptuje hodnoty ".25", ".5" , "1" a "2").

Příklad: `astronaut na koni --q .5` a `astronaut na koni --q 2`.

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_q05} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_q2} style={{width: "350px"}} />
</div>


### Seed:

`--seed [hodnota]` nastavuje číslo semínka, které určuje počáteční bod (pole šumu) pro generování obrázku. Pokud není parametr seed zadán, jsou semínka pro každý obrázek generována náhodně. Při použití stejného čísla semínka a promptu vzniknou podobné obrázky.

Příklad: `astronaut na koni --seed 123`.

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
</div>


### Stylizujte:

`--stylize [hodnota]` nebo `--s [hodnota]` ovlivňuje, jak silně Midjourney použije svůj umělecký algoritmus.  Nízké hodnoty vytvářejí obrázky, které přesně odpovídají promptu, vysoké hodnoty vytvářejí velmi umělecké obrázky, které jsou s promptem méně spojené. Výchozí hodnota je 100, rozsah hodnot je 0 - 1000.
(Poznámka: pomocí příkazu `/settings` můžete změnit výchozí hodnotu stylizace z "🖌️ Style Med" (=`--s 100`) na "🖌️ Style Low" (=`--s 50`), "🖌️ Style High"(=`--s 250`) nebo "🖌️ Style Very High" (=`--s 750`)).

Příklad: `astronaut na koni --s 50` a `astronaut na koni --s 900`.

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_s50} style={{width: "350px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_s900} style={{width: "350px"}} />
</div>


### Verze:
`--v [číslo verze]` nebo `--version [číslo verze]` umožňují přístup ke starším modelům Midjourney (1-3).

Příklad: `--v 1`, `--v 2` a `--v 3`.

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_v1} style={{width: "220px"}} />
  &nbsp;
   <img src={midjourney_astronaut_params_v2} style={{width: "220px"}} />
   &nbsp;
      <img src={midjourney_astronaut_params_v3} style={{width: "220px"}} />
</div>


## Parametry (předchozí modely)

### Stejné semínko

`--sameseed`: zatímco parametr `--seed` vytváří jediné šumové pole aplikované na všechny obrázky v počáteční mřížce, parametr sameseed aplikuje stejný počáteční šum na všechny obrázky v počáteční mřížce, takže vytvoří velmi podobné obrázky.

Příklad: `astronaut na koni --sameseed --v 3`.

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_sameseed} style={{width: "350px"}} />
</div>


### Dlaždice

`--tile` generuje obrázky, které lze použít jako opakující se dlaždice pro vytvoření bezešvých vzorů látek, tapet a textur (funguje pouze s modely 1 - 3).

Příklad: `astronaut na koni --tile --v 3`

<div style={{textAlign: 'center'}}>
  <img src={midjourney_astronaut_params_tilegrid} style={{width: "220px"}} />
  &nbsp;
  <img src={midjourney_astronaut_params_tile} style={{width: "220px"}} />
  &nbsp;
  <img src={midjourney_astronaut_params_tilecomplete} style={{width: "220px"}} />
</div>


### Video

`--video` vytvoří krátký film s vygenerovanou mřížkou obrázků. Reakce pomocí emoji ✉️ umožní botovi Midjourney odeslat DM s odkazem na video.

Příklad: `astronaut na koni --video --v 3`.

<div style={{textAlign: 'center'}}>
 <video width="320" height="240" autoplay muted>
  <source src="https://i.mj.run/27c89699-d96d-4834-b6fa-b022a453eb28/video.mp4" type="video/mp4">
</source>
</video>
</div>



## Odkazy

[Oficiální dokumentace Midjourney](https://docs.midjourney.com/)