---
sidebar_position: 3
---

# 🟢 Hudební generace

Modely generování hudby jsou stále populárnější a nakonec budou mít velký dopad na hudební průmysl. 

Modely generování hudby mohou vytvářet akordy, melodie nebo celé skladby. Dokážou strukturovat a vytvářet hudbu v určitých žánrech a komponovat nebo improvizovat ve stylu konkrétních umělců.

Navzdory obrovskému potenciálu hudebních modelů je však v současné době obtížné je podněcovat. Generovaný výstup často není důkladně přizpůsobitelný pomocí podnětů, na rozdíl od modelů generování obrázků nebo textů.

## Riffusion
import riffusion from '@site/docs/assets/riffusion_phonk.png';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}} />
</div>

Riffusion(@Forsgren_Martiros_2022), vyladěná verze stabilní diffusion, lze ovládat pomocí výzev ke generování nástrojů a pseudostylů, ale má k dispozici omezený počet beatů.

## Mubert

[Mubert](https://mubert.com/) zřejmě interpretuje podněty pomocí analýzy sentimentu, která s podnětem spojuje vhodnou hudební stylistiku (detailní ovládání hudebních parametrů pomocí podnětů není možné). Není jasné, jak velkou část výsledného generování provádí umělá inteligence.

## Ostatní

Existují pokusy o použití GPT-3 jako nástroje Text-2-Music se skutečnými podněty pro hudební prvky na "mikroúrovni" not (namísto poněkud vágních podnětů-stylových analogií, které vytváří mubert & riffusion) (např. `napište noty pro lidovou píseň, která používá pouze A, B, C#, F# a G`). V současné době jsou však tyto pokusy omezeny na jednotlivé nástroje.

Mezi další přístupy patří modelový řetězec, který [převádí libovolný obrázek na zvuk, který jej reprezentuje](https://huggingface.co/spaces/fffiloni/img-to-music), a výzva ChatGPT ke generování kódu pro [knihovny Pythonu, které vytvářejí zvuk](https://twitter.com/teropa/status/1598713756074246145).

## Poznámky

Hudební podněty nejsou dobře propracované... zatím. MusicLM vypadá slibně, ale zatím není veřejně dostupný.
