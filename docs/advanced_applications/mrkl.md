---
sidebar_position: 2
---

# 🟡 LLM pomocí nástrojů

MRKL Systems(@karpas2022mrkl) (Modular Reasoning, Knowledge and Language, vyslovováno "miracle" neboli zázrak). 
jsou **neuro-symbolickou architekturou**, která kombinuje LLM (neuronové výpočty) a externí 
nástroje, jako jsou kalkulačky (symbolický výpočet), k řešení složitých problémů. 

Systém MRKL se skládá ze sady modulů (např. kalkulačka, rozhraní API pro počasí, databáze atd.) a směrovače, který rozhoduje o tom, jak "směrovat" příchozí dotazy v přirozeném jazyce na příslušný modul.

Jednoduchým příkladem systému MRKL je LLM, který může 
používat aplikaci kalkulačky. Jedná se o systém s jedním modulem, kde LLM je směrovačem.
Na dotaz: "Kolik je 100*100?" může LLM zvolit, že
vyjmout čísla z výzvy a pak říct systému MRKL, aby použil kalkulačku. 
aplikaci k výpočtu výsledku. To může vypadat následovně:

<pre>
<p>Kolik je 100*100?</p>

<span className="bluegreen-highlight">CALCULATOR[100*100]</span>
</pre>

Systém MRKL by viděl slovo `CALCULATOR` a zapojil by `100*100` do aplikace kalkulačka.
Tento jednoduchý nápad lze snadno rozšířit na různé nástroje pro symbolické výpočty.

Uvažujme následující další příklady aplikací: 

- Chatbot, který je schopen odpovídat na dotazy týkající se finanční databáze tím, že 
extrahování informací pro vytvoření dotazu SQL z uživatelova textu.

<pre>
<p>Jaká je nyní cena akcií společnosti Apple?</p>

<span className="bluegreen-highlight">Aktuální cena je DATABASE[SELECT price FROM stock WHERE company = "Apple" AND time = "now"].</span>
</pre>

- Chatbot, který je schopen odpovídat na dotazy týkající se počasí extrahováním
informací z dotazu a pomocí rozhraní API pro počasí tyto informace získá.

<pre>
<p>Jaké je počasí v New Yorku?</p>

<span className="bluegreen-highlight">Počasí je WEATHER_API[New York].</span>
</pre>

- Nebo i mnohem složitější úlohy, které závisí na více datových zdrojích, jako např.
následující:


import mrkl_task from '@site/docs/assets/mrkl_task.png';
import dataset from '@site/docs/assets/mrkl/dataset.png';
import load_dataset from '@site/docs/assets/mrkl/load_dataset.png';
import model from '@site/docs/assets/mrkl/model.png';
import extract from '@site/docs/assets/mrkl/extract.png';
import search from '@site/docs/assets/mrkl/search.png';
import final from '@site/docs/assets/mrkl/final.png';

<div style={{textAlign: 'center'}}>
  <img src={mrkl_task} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Příklad systému MRKL (AI21)
</div>


## Příklad

Reprodukoval jsem příklad systému MRKL z původního článku s použitím souboru Dust.tt, 
odkaz [zde](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7). 
Systém načte matematickou úlohu (např. `Co je 20 krát 5^6?`), extrahuje čísla a operace,
a přeformátuje je pro aplikaci kalkulačky (např. `20*5^6`). Poté odešle přeformátovanou rovnici 
do aplikace kalkulačky Google a vrátí výsledek. Všimněte si, že původní článek provádí promptní ladění směrovače (LLM), ale já to v tomto příkladu nedělám. Projděme si, jak to funguje:

Nejprve jsem vytvořil jednoduchou datovou sadu v záložce Dust `Datasets`.


<div style={{textAlign: 'center'}}>
  <img src={dataset} style={{width: "750px"}} />
</div>

Poté jsem se přepnul na kartu `Specifikace` a načetl datovou sadu pomocí bloku `input`.

<div style={{textAlign: 'center'}}>
  <img src={load_dataset} style={{width: "750px"}} />
</div>

Dále jsem vytvořil blok `llm`, který extrahuje čísla a operace. Všimněte si, jak
jsem ve výzvě sdělil, že budeme používat kalkulačku Google. Model, který používám (GPT-3)
má pravděpodobně určité znalosti o kalkulačce Google z předtrénování.

<div style={{textAlign: 'center'}}>
  <img src={model} style={{width: "750px"}} />
</div>

Poté jsem vytvořil blok `code`, který spustí jednoduchý javascriptový kód pro odstranění 
mezery z doplnění.

<div style={{textAlign: 'center'}}>
  <img src={extract} style={{width: "750px"}} />
</div>

Nakonec jsem vytvořil blok `search`, který přeformátovanou rovnici odešle do kalkulačky Google.

<div style={{textAlign: "center"}}>
  <img src={search} style={{width: "750px"}} />
</div>

Níže vidíme konečné výsledky, které jsou všechny správné!

<div style={{textAlign: 'center'}}>
  <img src={final} style={{width: "750px"}} />
</div>

Neváhejte si toto hřiště naklonovat a experimentovat s ním [zde](https://dust.tt/w/ddebdfcdde/a/98bdd65cb7).

## Poznámky
MRKL byl vyvinut společností [AI21](https://www.ai21.com/) a původně používal jejich 
J-1 (Jurassic 1)(@lieberjurassic) LLM.

## Více

Viz [tento příklad](https://python.langchain.com/en/latest/modules/agents/agents/examples/mrkl.html) systému MRKL.
vytvořeného pomocí LangChain.
