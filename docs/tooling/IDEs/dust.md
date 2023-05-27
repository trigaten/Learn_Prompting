---
sidebar_position: 3
---

# Dust 

[Dust](https://dust.tt/) je nástroj pro vytváření promptů, který slouží k řetězení promptů. Poskytují webové rozhraní pro psaní promptů a jejich řetězení. 

V současné době má v porovnání s ostatními vývojovými prostředími pro prompt inženýrství strmou křivku učení.

import Image from '@site/docs/assets/tooling/dust.png';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "750px"}} />
</div>

## Funkce

Dust poskytuje robustní nástroje v podobě řady složitelných "bloků" pro funkce, jako je querying %%LLM|LLM%%, úryvky kódu a vyhledávání na internetu. Dust také podporuje používání datasetů a automatické testování dotazů na základě datových sad.

Současné funkce Dustu se zaměřují na řetězení promptů spíše než na iteraci jediného promptu.

Dust podporuje více poskytovatelů modelů: (OpenAI, Cohere) a plánuje podporu pro HuggingFace a Replicate. Pro všechny poskytovatele jsou vyžadovány klíče API.

Aplikace LLM vytvořené v systému Dust můžete deployovat.

## Poznámky

Aplikace Dust nedávno dosáhla počtu 1 000 aktivních uživatelů.
