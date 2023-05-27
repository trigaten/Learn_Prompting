---
sidebar_position: 100
---

# 🟢 Nastavení LLM


import Temperature from '@site/docs/assets/temperature.svg';

<div style={{textAlign: 'center'}}>
  <Temperature style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>

# Úvod

Výstup LLM lze ovlivnit *konfiguračními hyperparametry*, které řídí různé aspekty modelu, například to, jak "náhodný" je. Tyto hyperparametry lze upravit tak, aby byl výstup kreativnější, rozmanitější a zajímavější. V této části se budeme zabývat dvěma důležitými konfiguračními hyperparametry a tím, jak ovlivňují výstup LLM.

:::note
[Pro výzkumníky] Tyto parametry se liší od běžných hyperparametrů, jako je rychlost učení, počet vrstev, velikost skrytých vrstev atd. 
:::

## Teplota

Teplota je konfigurační hyperparametr, který řídí náhodnost výstupu jazykového modelu. Vysoká teplota vytváří nepředvídatelnější a kreativnější výsledky, zatímco nízká teplota vytváří běžnější a konzervativnější výstup. Pokud například nastavíte teplotu na 0,5, model bude obvykle generovat text, který je více předvídatelný a méně kreativní, než když nastavíte teplotu na 1,0.

## Top p

Top p, známý také jako vzorkování jádra (nucleus sampling), je další konfigurační hyperparametr, který řídí náhodnost výstupu jazykového modelu. Nastavuje prahovou pravděpodobnost a vybírá top tokeny, jejichž kumulativní pravděpodobnost je vyšší než prahová hodnota. Z této množiny tokenů pak model náhodně vzorkuje výstup. Tato metoda může vytvářet rozmanitější a zajímavější výstupy než tradiční metody, které náhodně vzorkují celou slovní zásobu. Pokud například nastavíte top p na hodnotu 0,9, model bude brát v úvahu pouze nejpravděpodobnější slova, která tvoří 90 % pravděpodobnostní masy.

## Další důležité hyperparametry

Existuje mnoho dalších hyperparametrů, které mohou ovlivnit výkonnost jazykového modelu, například penalizace za frekvenci a přítomnost. Zde se jimi nezabýváme, ale možná se jimi budeme zabývat v budoucnu.

## Jak tyto hyperparametry ovlivňují výstupy

Teplota a top p mohou ovlivnit výstup jazykového modelu tím, že řídí míru náhodnosti a rozmanitosti generovaného textu. Vysoká teplota nebo hodnota top p vytváří nepředvídatelnější a zajímavější výsledky, ale také zvyšuje pravděpodobnost výskytu chyb nebo nesmyslného textu. Nízká teplota nebo top p může produkovat konzervativnější a předvídatelnější výsledky, ale může také vést k opakujícímu se nebo nezajímavému textu.

Pro úlohy generování textu můžete chtít použít vysokou teplotu nebo vysoká hodnota top p. Pro úlohy, kde je důležitá přesnost, jako jsou překladové úlohy nebo odpovědi na otázky, by však měla být použita nízká teplota nebo nízká hodnota top p, aby se zlepšila přesnost a věcná správnost.

:::note
Někdy může být v úlohách, kde je nutná přesnost, užitečná větší náhodnost ve spojení se [speciálními technikami napovídání](/Learn_Prompting_CAI/docs/intermediate/self_consistency).
:::




## Závěr

Závěrem lze říci, že teplota, top p a další hyperparametry konfigurace modelu jsou klíčovými faktory, které je třeba při práci s jazykovými modely zvážit. Pochopením vztahu mezi těmito hyperparametry a výstupem modelu mohou odborníci z praxe optimalizovat své výzvy pro konkrétní úlohy a aplikace.

:::warning
Některé modely, jako například ChatGPT, **neumožňují** tyto konfigurační hyperparametry upravovat (pokud nepoužijete rozhraní API).
:::

Od jackdickens382