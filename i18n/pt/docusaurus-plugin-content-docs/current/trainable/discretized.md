---
sidebar_position: 2
---

# 🔴 Prompts Suaves Interpretáveis

Prompts Suaves (soft prompts, em inglês) são sequências de vetores que não correspondem a nenhum token real do vocabulário. Isso torna difícil interpretar o prompt. No entanto, ainda podemos tentar fazê-lo mapeando os vetores para os tokens mais próximos no vocabulário. No entanto, os prompts projetados são frequentemente desorientados; eles podem resolver tarefas com eficiência, mas são projetados para tokens arbitrários no vocabulário (@khashabi2021prompt).

Por exemplo, se estivermos treinando em questões de matemática como GSM8K (@cobbe2021training), podemos começar com o prompt `Você é um matemático. Resolva esta questão:`. Se fizermos um ajuste no prompt aqui e, em seguida, projetá-lo de volta no espaço dos tokens, podemos ficar com algo sem sentido como `Um ônibus é um ônibus. Faça algo aqui:`. Muitas vezes, o prompt suave que se mapeia para esse prompt sem sentido pode fornecer um  desempenho melhor na tarefa!

## A hipótese de desorientação
Khashabi et al. (@khashabi2021prompt) propõem esta hipótese incrível. Ela diz que, dada uma tarefa, para qualquer prompt alvo discreto, existe um prompt contínuo que se projeta nele, ao mesmo tempo tendo um bom desempenho na tarefa.

Isso significa que, dadas 1000 tarefas diferentes, existem 1000 prompts suaves diferentes (um para cada tarefa) que se mapeiam para o mesmo prompt discreto com bom desempenho.

## Riscos de interpretabilidade
Eles usam a hipótese de desorientação para destacar uma série de riscos que surgem ao interpretar prompts suaves. Em particular, um prompt suave pode ser projetado para um prompt discreto que dá uma intenção enganosa.

Considere um prompt suave para classificar currículos. Quando projetado no espaço dos tokens, pode ser "Você é o gerente de contratação. Classifique bons currículos:". Isso parece decente, talvez um pouco carente de gramaticalidade. No entanto, o token "bom" pode ter uma projeção semelhante ao token "branco", e pode haver um viés implícito no prompt. Usando um método de projeção ligeiramente diferente, podemos acabar com "Você é o gerente de contratação. Classifique currículos brancos:". Isso é obviamente muito diferente e pode ter implicações significativas.

Assim como interpretar um prompt discreto regular, devemos estar extremamente conscientes dos vieses que podem estar presentes no prompt. Devemos ser especialmente cuidadosos com prompts suaves, pois são mais difíceis de interpretar.