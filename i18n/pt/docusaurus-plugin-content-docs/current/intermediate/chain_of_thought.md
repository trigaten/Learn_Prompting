---
sidebar_position: 3
locale: pt-br
style: chicago
---

# 🟢 Prompting com Cadeia de Pensamento

Prompting com Cadeia de Pensamento (CdP) (@wei2022chain) é um método de *prompting* recente, que encoraja o *LLM* (Grande Modelo de Linguagem) a explicar o seu raciocínio. A imagem abaixo (@wei2022chain) mostra um *prompt few shot* padrão (esquerda) comparado ao *prompt com Cadeia de Pensamento* (direita).


import CoTExample from '@site/i18n/pt/docusaurus-plugin-content-docs/assets/intermediate/chain_of_thought_example.png';

<div style={{textAlign: 'center'}}>
  <img src={CoTExample} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Prompt comum x Cadeia de Pensamento (Wei et al.) [em ingês]
</div>

A principal ideia da Cadeia de Pensamento (CdP) é mostrar ao *LLM* alguns exemplares *few shot* em que o processo de raciocínio é explicado, fazendo com que o *LLM* faça o mesmo quando der uma resposta ao *prompt*. A explicação do raciocínio frequentemente produz resultados mais apurados.

## Exemplo

Aqui estão algumas demonstrações. A primeira mostra o GPT-3 (davinci-003) falhando ao resolver um problema simples. A segunda, por sua vez, mostra o GPT-3 (davinci-003)
obtendo êxito na resolução do mesmo problema, com o uso da técnica de Cadeia de Pensamento (CdP).

#### Incorreto

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9ww6fDo28gMS4iLCJwcm9tcHQiOiJDb25zaWRlcmFuZG8gYXMgb3DDp8O1ZXMgYWJhaXhvLCBxdWFsIMOpIGEgZm9ybWEgbWFpcyByw6FwaWRhIGRlIGNoZWdhciBhbyB0cmFiYWxobz9cblxuT3DDp8OjbyAxOiBwZWd1ZSB1bSDDtG5pYnVzIGRlIDEwMDAgbWludXRvcywgZGVwb2lzIHVtIHRyZW0gZGUgbWVpYSBob3JhIGUsIGZpbmFsbWVudGUsIHVtIHBhc3NlaW8gZGUgYmljaWNsZXRhIGRlIDEwIG1pbnV0b3MuXG5cbk9ww6fDo28gMjogcGVndWUgdW0gw7RuaWJ1cyBkZSA4MDAgbWludXRvcywgZGVwb2lzIHVtYSBob3JhIGRlIHRyZW0gZSwgZmluYWxtZW50ZSwgdW0gcGFzc2VpbyBkZSBiaWNpY2xldGEgZGUgMzAgbWludXRvcy4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### Correto

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEgb3DDp8OjbyAxIGxldmFyw6EgMTAwMCszMCsxMCA9IDEwNDAgbWludXRvcy5cbkEgb3DDp8OjbyAyIGxldmFyw6EgODAwKzYwKzMwID0gODkwIG1pbnV0b3MuXG5Db21vIGEgb3DDp8OjbyAyIGxldmEgODkwIG1pbnV0b3MgZSBhIG9ww6fDo28gMSBsZXZhIDEuMDQwIG1pbnV0b3MsIGEgb3DDp8OjbyAyIMOpIG1haXMgcsOhcGlkYS4iLCJwcm9tcHQiOiJDb25zaWRlcmFuZG8gYXMgb3DDp8O1ZXMgYWJhaXhvLCBxdWFsIMOpIGEgZm9ybWEgbWFpcyByw6FwaWRhIGRlIGNoZWdhciBhbyB0cmFiYWxobz9cblxuT3DDp8OjbyAxOiBwZWd1ZSB1bSDDtG5pYnVzIGRlIDEwIG1pbnV0b3MsIGRlcG9pcyB1bSDDtG5pYnVzIGRlIDQwIG1pbnV0b3MgZSwgZmluYWxtZW50ZSwgdW0gdHJlbSBkZSAxMCBtaW51dG9zLlxuXG5PcMOnw6NvIDI6IHBlZ3VlIHVtIHRyZW0gZGUgOTAgbWludXRvcywgZGVwb2lzIHVtIHBhc3NlaW8gZGUgYmljaWNsZXRhIGRlIDQ1IG1pbnV0b3MgZSwgZmluYWxtZW50ZSwgdW0gw7RuaWJ1cyBkZSAxMCBtaW51dG9zLlxuXG5BIG9ww6fDo28gMSBsZXZhcsOhIDEwKzQwKzEwPTYwIG1pbnV0b3MuIEEgb3DDp8OjbyAyIGxldmFyw6EgOTArNDUrMTA9MTQ1IG1pbnV0b3MuXG5Db21vIGEgb3DDp8OjbyAxIGxldmEgNjAgbWludXRvcyBlIGEgb3DDp8OjbyAyIGxldmEgMTQ1IG1pbnV0b3MsIGEgb3DDp8OjbyAxIMOpIG1haXMgcsOhcGlkYS5cblxuQ29uc2lkZXJhbmRvIGFzIG9ww6fDtWVzIGFiYWl4bywgcXVhbCDDqSBhIGZvcm1hIG1haXMgcsOhcGlkYSBkZSBzZSBjaGVnYXIgYW8gdHJhYmFsaG8%2FXG5cbk9ww6fDo28gMTogcGVndWUgdW0gw7RuaWJ1cyBkZSAxMDAwIG1pbnV0b3MsIGRlcG9pcyB1bSB0cmVtIGRlIG1laWEgaG9yYSBlLCBmaW5hbG1lbnRlLCB1bSBwYXNzZWlvIGRlIGJpY2ljbGV0YSBkZSAxMCBtaW51dG9zLlxuXG5PcMOnw6NvIDI6IHBlZ3VlIHVtIMO0bmlidXMgZGUgODAwIG1pbnV0b3MsIGRlcG9pcyB1bWEgaG9yYSBkZSB0cmVtIGUsIGZpbmFsbWVudGUsIHVtIHBhc3NlaW8gZGUgYmljaWNsZXRhIGRlIDMwIG1pbnV0b3MuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Resultados

A Cadeia de Pensamento (CdP) mostrou ser efetiva em melhorar os resultados em tarefas de aritmética, senso comum e racicínio simbólico (@wei2022chain).
Em particular, *prompted* PaLM 540B(@chowdhery2022palm) atinge 57% de precisão na resolução dos problemas de matemática da coleção de dados GSM8K(@cobbe2021training) (Estado da Arte, na época).

import PromptedPaLM from '@site/docs/assets/intermediate/prompted_palm.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={PromptedPaLM} style={{width: "300px"}} />
</div>

<div style={{textAlign: 'center'}}>
Comparação de modelos no benchmark GSM8K (Wei et al.) [em inglês]
</div>

## Limitações

É importante ressaltar que, de acordo com Wei et al., "A técnica de Cadeia de Pensamento (CdP) só produz ganhos no desempenho quando usada em modelos de ~100B de parâmetros". Modelos menores escrevem cadeias de pensamentos ilógicas, o que leva a uma piora na precisão quando comparado ao *prompt* padrão. Comumente, as melhoras obtidas nos *prompts* usando a técnica de CdP são proporcionais ao tamanho do modelo.


## Observações

Nenhum modelo de linguagem foi ~ferido~ (leia-se: tunelado) no processo de escrita deste capítulo 😊.