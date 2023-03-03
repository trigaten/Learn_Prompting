---
sidebar_position: 3
---

# 🟢 Um Prompt "Padrão"

Nós já vimos alguns *prompts* de diferentes formatos até aqui.
Seguindo Kojima et al. (@kojima2022large), *prompts* que são constituídos apenas por perguntas serão referidos como *prompts* "padrão". Os *prompts* que são constiuídos apenas de perguntas e estão no formato PR (pergunta e resposta) também serão considerados como *prompts* "padrão". 

#### Por que eu deveria me importar?

Muitos artigos que são referenciados ao longo deste curso usam este termo.
Então, feita a definição formal, será possível constratar outros tipos de *prompts* em relação aos *prompts* "padrão".

### Dois exemplos de *prompts* "padrão":


_Prompt Padrão_
```
Qual é a capital da França?
```

_Prompt Padrão no formato PR (pergunta e resposta)_
```
P: Qual é a capital da França?
R:
```

## *Prompts Few Shot[^1]* Padrão

*Prompts Few Shot* padrão(@liu2021pretrain) são apenas *prompts* padrão que possuem **exemplares** neles. Ou seja, possuem exemplos no próprio *prompt* da tarefa que o *prompt* está tentando resolver (@brown2020language). Nas pesquisas acadêmicas, *prompts few shot* padrão são, algumas vezes, referidos simplesmente como *prompts* padrão (neste curso, isso será evitado).


### Dois exemplos de *prompts few shot* padrão:

_Prompt Few Shot Padrão_

```
Qual é a capital da Espanha?
Madrid
Qual é a capital da Itália?
Roma
Qual é a capital da França?
```

_Prompt Few Shot Padrão no formato PR (pergunta e resposta)_
```
P: Qual é a capital da Espanha?
R: Madrid
P: Qual é a capital da Itália?
R: Roma
P: Qual é a capital da França?
R:
```

*Prompts Few Shot* facilitam o aprendizado "few shot", também conhecido como aprendizado "contextualizado", que é a habilidade de aprender sem a atualização de parâmetros.

[^1]: Few Shot pode ser traduzido como "poucos exemplos". No contexto de engenharia de *prompt*, seria algo como "aprendizado com poucos exemplos".

