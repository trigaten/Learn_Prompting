---
sidebar_position: 10
---

# 🔴 Kalibrace LLM

Některým zkreslením, která LLM vykazují, je možné čelit kalibrací **rozdělení výstupu**(@zhao2021calibrate) ang. output distributions. 

**Co přesně znamená kalibrace rozdělení výstupu?**

Projděme si rychlý příklad: Řekněme, že máme úlohu %%analýzovat sentiment|sentiment analysis%% se dvěma možnými označeními, `Pozitivní` a `Negativní`. Uvažujme, co se stane, když je %%LLM|LLM%% vyzván příkazem `Vstup: žádný Sentiment: `. Tento vstup neobsahuje žádný _kontext_, který by LLM mohl použít k vytvoření předpovědi sentimentu, takže se nazývá **bezkontextový** vstup.

Protože `žádný` není ani pozitivní, ani negativní pojem, očekávali bychom, že LLM bude vypisovat pravděpodobnost přibližně 0,5 jak pro `pozitivní`, tak pro `negativní`. Často (a v tomto příkladu) tomu tak však nebude.
```
p("Pozitivní" | "Vstup: žádný sentiment:") = 0,9

p("Negativní" | "Vstup: žádný sentiment:") = 0,1
```

Vzhledem k těmto značkám pravděpodobností pro bezkontextový vstup víme, že **výstupní distribuce** LLM je pravděpodobně zkreslená směrem ke značce `Pozitivní`. To může způsobit, že LLM bude upřednostňovat `Pozitivní` pro všechny vstupy, i když vstup není ve skutečnosti pozitivní.

Pokud můžeme nějakým způsobem **kalibrovat** výstupní distribuci tak, aby bezkontextovým vstupům byla přiřazena pravděpodobnost 0,5 jak pro `Pozitivní`, tak pro `Negativní`, pak můžeme často odstranit zkreslení směrem k `Pozitivní` a LLM bude spolehlivější jak na bezkontextových vstupech, tak na vstupech s kontextem.

## Netechnické řešení

Netechnické řešení tohoto problému spočívá v tom, že jednoduše uvedeme few shot %%exempláře|exemplars%%, kde
bezkontextovým exemplářům je efektivně přiřazena pravděpodobnost 0,5 pro oba příklady `Pozitivní` i `Negativní`.

Mohli bychom například poskytnout následujících několik příkladů, které ukazují každý bezkontextový exemplář klasifikován jako `pozitivní` i `negativní`:
```
Vstup: Tento film nenávidím. Sentiment: Negativní:
Vstupní údaje: Tento film miluji. Sentiment: Sentiment: Pozitivní:
Vstupní údaje: Film je velmi zajímavý: Sentiment: Sentiment: Pozitivní
Vstupní údaje: Sentiment: Pozitivní: N/A Sentiment: Negativní
Vstup: žádní Sentiment: Pozitivní:
Vstup: žádní Sentiment: Negativní:
Vstupní údaje: Mám rád vajíčka. Sentiment:
```

Pokud je mi známo, toto řešení nebylo v literatuře zkoumáno a nejsem si jistý, jak dobře funguje v praxi. Nicméně je to jednoduché řešení, které ukazuje, čeho se kalibrace snaží dosáhnout.

## Technické řešení

Dalším řešením tohoto problému je __kontextová kalibrace__(@zhao2021calibrate), kde nastavíme speciální kalibrační parametry, které zajistí, že bezkontextové vstupy jako např. `Vstup: žádný Sentiment: ` jsou přiřazeny pravděpodobnosti přibližně 0,5 pro obě značky. Všimněte si, že v praxi tato metoda provádí kalibraci více různých bezkontextových vstupů (např. `Vstup: N/A Sentiment: `, `Vstup: [MASK] Sentiment: `). Zprůměruje kalibrační parametry, které nejlépe fungují pro každý bezkontextový vstup, aby se našly nejlepší kalibrační parametry pro LLM.

### Příklad

Projděme si příklad výpočtu kalibračních parametrů pro jeden bezkontextový vstup. Všimněte si, že tento příklad není reprodukovatelný pomocí GPT-3 vzhledem k tomu, že jej nelze omezit na značky `Pozitivní` a `Negativní`.

Uvažujme znovu výše uvedený příklad, kde LLM přiřazuje značkám následující pravděpodobnosti pro bezkontextový vstup:

```
p("Pozitivní" | "Vstup: žádný Sentiment:") = 0,9

p("Negativní" | "Vstup: žádný Sentiment:") = 0,1
```

Chceme najít nějaké rozdělení pravděpodobnosti q takové, že
```
q("Pozitivní" | "Vstup: žádný Sentiment:") = 0,5

q("Negativní" | "Vstup: žádný Sentiment:") = 0,5
```

Uděláme to tak, že vytvoříme lineární transformaci, která upraví (kalibruje) pravděpodobnosti $p$. 

$\hat q = \text{Softmax}(W\hat p + b)$

Tato rovnice vezme původní pravděpodobnosti $\hat p$ a použije váhy $W$ a zkreslení $b$. Váhy $W$ a zkreslení $b$ jsou kalibrační parametry, které po aplikaci na pravděpodoobnost bezkontextních exemplářů, dávají $\hat p$ = [0,5, 0,5].

#### Výpočet W a b

Potřebujeme nějak vypočítat váhy $W$ a zkreslení $b$. Jedním ze způsobů, jak to udělat, je: 

$W = \text{diag}(\hat p)^{-1}$. 

$b = 0$

Definice $W$ se sice může zdát na první pohled trochu zvláštní, ale jde jen o to, že se vezme inverzní hodnota každé hodnoty v $\hat p$, aby se našla hodnota $W$, která převede původní pravděpodobnosti $\hat p$ na kalibrované pravděpodobnosti [0,5, 0,5].

Ověřme, že to funguje pro výše uvedený příklad:

$\hat p = [0.9, 0.1]$

$W = \text{diag}(\hat p)^{-1} = \text{diag}([0.9, 0.1])^{-1} 
= \begin{bmatrix}
   0.9 & 0 \\
   0 & 0.1
\end{bmatrix}^{-1}
= \begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}$

$\hat q = \text{Softmax}(W\hat p + b) = \text{Softmax}(\begin{bmatrix}
   1.11 & 0 \\
   0 & 10
\end{bmatrix}*{[0.9, 0.1]} + 0)
= \text{Softmax}([1, 1])
=[0.5, 0.5]$

Jak bylo uvedeno výše, stejný postup bychom provedli pro více různých bezkontextových vstupů a zprůměrovali bychom kalibrační parametry, které nejlépe fungují pro každý bezkontextový vstup, abychom našli nejlepší kalibrační parametry pro LLM. To znamená, že konečné kalibrační parametry pravděpodobně nebudou mapovat žádný z bezkontextových vstupů přesně na [0,5, 0,5].

### Jiná metoda

$b$ lze také nastavit na $-\hat p$ a $W$ na matici identity. Tato metoda funguje lépe pro generování než pro klasifikaci(@zhao2021calibrate).

## Závěr

LLM jsou často predisponovány (zkresleny) k určitým značkám. Kalibraci lze použít k potlačení tohoto zkreslení.