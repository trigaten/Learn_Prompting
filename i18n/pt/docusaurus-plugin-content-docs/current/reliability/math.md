---
sidebar_position: 70
---

# 🟡 Matemática

Durante este curso, vimos muitos métodos de prompt diferentes que podem ser usados ​​para melhorar a habilidade matemática de um %%LLM|LLM%%. Uma abordagem recente, MathPrompter(@imani2023mathprompter), une alguns desses métodos: (%%Cadeia de Pensamento|CoT prompting%%, %%PAL|PAL%%, etc.) em uma única técnica. A ideia principal é dividir uma questão matemática em termos algébricos e, em seguida, usar código Python para resolvê-la de maneiras diferentes.

import math from '@site/docs/assets/math.png';

<div style={{textAlign: 'center'}}>
  <img src={math} style={{width: "500px"}} />
</div>

O MathPrompter possui **quatro** etapas. Explicaremos as etapas usando o seguinte exemplo. O exemplo é retirado diretamente do artigo.


```text
P: Em um restaurante, cada refeição para adultos custa R$5 e as crianças comem de graça. Se um grupo de 15
pessoas entrasse e 8 fossem crianças, quanto isso custaria para o grupo comer?
```

## Passo 1: Gerar o modelo algébrico

A primeira etapa é atribuir uma variável a cada número na pergunta. Isso ajuda porque permite uma tradução mais fácil da pergunta para uma questão matemática abstrata, bem como para o código de programação.

Isso pode ser feito por meio de poucos prompts com exemplo:

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="P: Um zoológico cobra R$12 por ingresso para adultos e permite que as crianças com menos de 5 anos entrem de graça. Uma família de 4 adultos e 2 crianças com menos de 5 anos visitam o zoológico. Qual é o custo total para a família entrar?\nMa: Em um zoológico, cada ingresso para adultos custa $A e as crianças com menos de 5 anos podem entrar de graça. Se uma família de B adultos e C crianças com menos de 5 anos visitar o zoológico, qual é o custo total para a família entrar?\nMapeamento: {A: 12, B: 4, C: 2}\n\nP: Uma loja vende sapatos a $60 por par e meias a $8 por par. Se um cliente comprar 2 pares de sapatos e 3 pares de meias, qual é o custo total da compra?\nMa: Em uma loja, os sapatos custam $A por par e as meias custam $B por par. Se um cliente comprar C pares de sapatos e D pares de meias, qual é o custo total da compra?\nMapeamento: {A: 60, B: 8, C: 2, D: 3}\n\nP: Em um restaurante, cada refeição para adultos custa $5 e as crianças comem de graça. Se um grupo de 15\npessoas entrasse e 8 fossem crianças, quanto isso custaria para o grupo comer?" initial-response="Ma: Em um restaurante, cada refeição para adultos custa $A e as crianças comem de graça. Se um grupo de B pessoas entrar e C forem crianças, quanto isso custaria para o grupo comer?\nMapeamento: {A: 5, B: 15, C: 8}"" max-tokens="256" box-rows="14" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

## Passo 2: Prompts Matemáticos

O objetivo deste passo é formular o problema como uma declaração algébrica e como código Python. Este passo tem dois prompts simultâneos, que ajudam a dar representações diversas do problema.

### 2a: Declaração Algébrica

Podemos fazer o prompt de poucas amostras (few-shot) para que o LLM represente o problema matemático como uma declaração algébrica. Isso é feito pedindo ao LLM para gerar o formato da resposta, começando com "Resposta =".

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="P: Em um zoológico, cada ingresso de adulto custa $ A e crianças menores de 5 anos podem entrar de graça. Se uma família de B adultos e C crianças menores de 5 anos visitar o zoológico, qual é o custo total para a família entrar?\nMapeamento: {A: 12, B: 4, C: 2}\n\nEscreva uma equação matemática e gere o formato de resposta\ncomeçando com 'Resposta ='\n\nResposta = A * B\n\nP: Em uma loja, os sapatos custam $ A por par e as meias custam $ B por par. Se um cliente compra C pares de sapatos e D pares de meias, qual é o custo total da compra?\nMapeamento: {A: 60, B: 8, C: 2, D: 3}\n\nEscreva uma equação matemática e gere o formato de resposta\ncomeçando com 'Resposta ='\n\nResposta = A * C + B * D\n\nP: Em um restaurante, cada refeição para adulto custa $ A e as crianças comem de graça. Se um grupo de B pessoas entrou e C eram crianças, quanto custaria para o grupo comer?\nMapeamento: {A: 5, B: 15, C: 8}\n\nEscreva uma equação matemática e gere o formato de resposta\ncomeçando com 'Resposta ='"  initial-response="Resposta = A * B - A * C" max-tokens="256" box-rows="14" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

### 2b: Código em Python 

Também podemos pedir ao %%LLM|LLM%% que gere código Python que resolva o problema. Isso é feito pedindo ao LLM para gerar uma função Python.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Qt: Em um zoológico, cada ingresso adulto custa $ A e crianças menores de 5 anos podem entrar de graça. Se uma família de B adultos e C crianças menores de 5 anos visitar o zoológico, qual é o custo total para a família entrar?\nMapeamento: {A: 12, B: 4, C: 2}\n\nEscreva uma função Python que retorne a resposta.\n\ndef custo_zoo(A, B, C):\n  return A * B\n\n\nQt: Em uma loja, sapatos custam $ A por par e meias custam $ B por par. Se um cliente comprar C pares de sapatos e D pares de meias, qual é o custo total da compra?\n\nEscreva uma função Python que retorne a resposta.\n\ndef custo_loja(A, B, C, D):\n  return (A * C) + (B * D)\n\nQt: Em um restaurante, cada refeição adulta custa $ A e crianças comem de graça. Se um grupo de B pessoas entrou e C eram crianças, quanto custaria para o grupo comer?\n\nEscreva uma função Python que retorne a resposta." initial-response="def custo_restaurante(A, B, C):\n  return A * (B - C)" max-tokens="256" box-rows="14" model-temp="0" top-p="0">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

### Geração de Respostas

Agora, podemos usar o Mapeamento que geramos anteriormente para preencher automaticamente as variáveis.

```text
Mapeamento: {A: 5, B: 15, C: 8}
```

Algébrico: 
```text
Answer = 5 * 15 - 5 * 8
```

Código em Python:
```python
def custo_restaurante(A=5, B=15, C=8):
  return A * (B - C)
```

Podemos avaliar ambos usando Python.

Algébrico:

```python
>>> eval("5 * 15 - 5 * 8")
35
```

Código em Python:

```python
>>> custo_restaurante()
35
```

## Passo 4: Auto-Consistência
Finalmente, vamos aproveitar a %%Auto-Consistência|self_consistency%% para executar o processo acima várias vezes (~5), e então tomar a resposta da maioria.

## Conclusão

O MathPrompter relata 92,5% de precisão no conjunto de dados MultiArith(@roy-roth-2015-solving). O sucesso dessa técnica é um ótimo exemplo de como **você**, como um engenheiro de prompts, pode combinar métodos que aprendeu ao longo deste curso e combiná-los para lidar com problemas maiores.