---
sidebar_position: 3
---

# 🟡 LLM, které uvažují (React) a jednají (Act)

ReAct(@yao2022react)(reason, act) je paradigma umožňující jazykovým modelům řešit komplexní 
úloh pomocí uvažování v přirozeném jazyce. ReAct je určen pro úlohy, v nichž je LLM 
je povoleno provádět určité akce. Například jako v systému MRKL může být LLM schopen 
komunikovat s externími rozhraními API za účelem získání informací. Když je LLM položena otázka, může
mohl rozhodnout, že provede akci pro získání informací, a poté na otázku odpovědět
na základě získaných informací.

Systémy ReAct si lze představit jako systémy MRKL s přidanou schopností **důvodu
o** akcích, které mohou provádět.

Podívejte se na následující obrázek. Otázka v horním rámečku pochází ze serveru HotPotQA(@yang2018hotpotqa),
datové sady pro zodpovídání otázek, která vyžaduje komplexní uvažování. ReAct je schopen odpovědět na otázku tak, že
nejprve o otázce uvažuje (Myšlenka 1) a poté provede akci (Činnost 1) a odešle dotaz. 
Googlu. Poté obdrží pozorování (Observation 1) a pokračuje v této myšlence, akci, pozorování
dokud nedojde k závěru (Act 3). 


import react_qa from '@site/docs/assets/react_qa.png';

<div style={{textAlign: 'center'}}>
  <img src={react_qa} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
ReAct System (Yao et al.)
</div>

<div style={{textAlign: 'center'}}>
ReAct System (Yao et al.)
</div>

Čtenáři se znalostí posilovacího učení možná rozpoznají, že tento proces je podobný klasickému
RL smyčce stav, akce, odměna, stav,... Systém ReAct poskytuje určitou formalizaci pro 
ve svém článku.


## Výsledky

Společnost Google při experimentech s programem ReAct použila LLM PaLM(@chowdhery2022palm). 
Srovnání se standardním podnětem (pouze otázka), CoT a dalšími konfiguracemi.
ukazují, že výkon ReAct je slibný pro komplexní úlohy uvažování. Google 
provádí také studie na datové sadě FEVER(@thorne2018fever), která zahrnuje např.
extrakci a ověřování faktů. 

import react_performance from '@site/docs/assets/react_performance.png';

<div style={{textAlign: 'center'}}>
  <img src={react_performance} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
ReAct Results (Yao et al.)
</div>