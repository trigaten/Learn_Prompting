---
sidebar_position: 70
---

# 🟡 Matemática

Durante este curso, vimos muitos métodos de prompt diferentes que podem ser usados ​​para melhorar a habilidade matemática de um %%LLM|LLM%%. Uma abordagem recente, MathPrompter(@imani2023mathprompter), une alguns desses métodos: (%%Cadeia de Pensamento|CoT prompting%%, %%PAL|PAL%%, etc.) em uma única técnica. A ideia principal é dividir uma questão matemática em termos algébricos e, em seguida, usar código Python para resolvê-la de maneiras diferentes.

import math from '@site/docs/assets/reliability/math.webp';

<div style={{textAlign: 'center'}}>
  <img src={math} style={{width: "500px"}}/>
</div>

O MathPrompter possui **quatro** etapas. Explicaremos as etapas usando o seguinte exemplo. O exemplo é retirado diretamente do artigo.


```text
P: Em um restaurante, cada refeição para adultos custa R$5 e as crianças comem de graça. Se um grupo de 15
pessoas entrasse e 8 fossem crianças, quanto isso custaria para o grupo comer?
```

## Passo 1: Gerar o modelo algébrico

A primeira etapa é atribuir uma variável a cada número na pergunta. Isso ajuda porque permite uma tradução mais fácil da pergunta para uma questão matemática abstrata, bem como para o código de programação.

Isso pode ser feito por meio de poucos prompts com exemplo:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik1BOiBFbSB1bSByZXN0YXVyYW50ZSwgY2FkYSByZWZlacOnw6NvIHBhcmEgYWR1bHRvcyBjdXN0YSAkQSBlIGFzIGNyaWFuw6dhcyBjb21lbSBkZSBncmHDp2EuIFNlIHVtIGdydXBvIGRlIEIgcGVzc29hcyBlbnRyYXIgZSBDIGZvcmVtIGNyaWFuw6dhcywgcXVhbnRvIGlzc28gY3VzdGFyaWEgcGFyYSBvIGdydXBvIGNvbWVyP1xuXG5NQVBFQU1FTlRPOiB7QTogNSwgQjogMTUsIEM6IDh9IiwicHJvbXB0IjoiUDogVW0gem9vbMOzZ2ljbyBjb2JyYSBSJDEyIHBvciBpbmdyZXNzbyBwYXJhIGFkdWx0b3MgZSBwZXJtaXRlIHF1ZSBhcyBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyBlbnRyZW0gZGUgZ3Jhw6dhLiBVbWEgZmFtw61saWEgZGUgNCBhZHVsdG9zIGUgMiBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyB2aXNpdGFtIG8gem9vbMOzZ2ljby4gUXVhbCDDqSBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3DrWxpYSBlbnRyYXI%2FXG5NQTogRW0gdW0gem9vbMOzZ2ljbywgY2FkYSBpbmdyZXNzbyBwYXJhIGFkdWx0b3MgY3VzdGEgJEEgZSBhcyBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyBwb2RlbSBlbnRyYXIgZGUgZ3Jhw6dhLiBTZSB1bWEgZmFtw61saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyB2aXNpdGFyIG8gem9vbMOzZ2ljbywgcXVhbCDDqSBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3DrWxpYSBlbnRyYXI%2FXG5NQVBFQU1FTlRPOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cblA6IFVtYSBsb2phIHZlbmRlIHNhcGF0b3MgYSAkNjAgcG9yIHBhciBlIG1laWFzIGEgJDggcG9yIHBhci4gU2UgdW0gY2xpZW50ZSBjb21wcmFyIDIgcGFyZXMgZGUgc2FwYXRvcyBlIDMgcGFyZXMgZGUgbWVpYXMsIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5NQTogRW0gdW1hIGxvamEsIG9zIHNhcGF0b3MgY3VzdGFtICRBIHBvciBwYXIgZSBhcyBtZWlhcyBjdXN0YW0gJEIgcG9yIHBhci4gU2UgdW0gY2xpZW50ZSBjb21wcmFyIEMgcGFyZXMgZGUgc2FwYXRvcyBlIEQgcGFyZXMgZGUgbWVpYXMsIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5NQVBFQU1FTlRPOiB7QTogNjAsIEI6IDgsIEM6IDIsIEQ6IDN9XG5cblA6IEVtIHVtIHJlc3RhdXJhbnRlLCBjYWRhIHJlZmVpw6fDo28gcGFyYSBhZHVsdG9zIGN1c3RhICQ1IGUgYXMgY3JpYW7Dp2FzIGNvbWVtIGRlIGdyYcOnYS4gU2UgdW0gZ3J1cG8gZGUgMTUgcGVzc29hcyBlbnRyYXNzZSBlIDggZm9zc2VtIGNyaWFuw6dhcywgcXVhbnRvIGlzc28gY3VzdGFyaWEgcGFyYSBvIGdydXBvIGNvbWVyPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Passo 2: Prompts Matemáticos

O objetivo deste passo é formular o problema como uma declaração algébrica e como código Python. Este passo tem dois prompts simultâneos, que ajudam a dar representações diversas do problema.

### 2a: Declaração Algébrica

Podemos fazer o prompt de poucas amostras (few-shot) para que o LLM represente o problema matemático como uma declaração algébrica. Isso é feito pedindo ao LLM para gerar o formato da resposta, começando com "Resposta =".

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlJlc3Bvc3RhID0gQSAqIEIgLSBBICogQyIsInByb21wdCI6IlA6IEVtIHVtIHpvb2zDs2dpY28sIGNhZGEgaW5ncmVzc28gZGUgYWR1bHRvIGN1c3RhICQgQSBlIGNyaWFuw6dhcyBtZW5vcmVzIGRlIDUgYW5vcyBwb2RlbSBlbnRyYXIgZGUgZ3Jhw6dhLiBTZSB1bWEgZmFtw61saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbsOnYXMgbWVub3JlcyBkZSA1IGFub3MgdmlzaXRhciBvIHpvb2zDs2dpY28sIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBwYXJhIGEgZmFtw61saWEgZW50cmFyP1xuTWFwZWFtZW50bzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Fc2NyZXZhIHVtYSBlcXVhw6fDo28gbWF0ZW3DoXRpY2EgZSBnZXJlIG8gZm9ybWF0byBkZSByZXNwb3N0YSBjb21lw6dhbmRvIGNvbSAnUmVzcG9zdGEgPSdcblJlc3Bvc3RhID0gQSAqIEJcblxuUDogRW0gdW1hIGxvamEsIG9zIHNhcGF0b3MgY3VzdGFtICQgQSBwb3IgcGFyIGUgYXMgbWVpYXMgY3VzdGFtICQgQiBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYSBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIMOpIG8gY3VzdG8gdG90YWwgZGEgY29tcHJhP01hcGVhbWVudG86IHtBOiA2MCwgQjogOCwgQzogMiwgRDogM31cblxuRXNjcmV2YSB1bWEgZXF1YcOnw6NvIG1hdGVtw6F0aWNhIGUgZ2VyZSBvIGZvcm1hdG8gZGUgcmVzcG9zdGFcbmNvbWXDp2FuZG8gY29tICdSZXNwb3N0YSA9J1xuXG5SZXNwb3N0YSA9IEEgKiBDICsgQiAqIERcblxuUDogRW0gdW0gcmVzdGF1cmFudGUsIGNhZGEgcmVmZWnDp8OjbyBwYXJhIGFkdWx0byBjdXN0YSAkIEEgZSBhcyBjcmlhbsOnYXMgY29tZW0gZGUgZ3Jhw6dhLiBTZSB1bSBncnVwbyBkZSBCIHBlc3NvYXMgZW50cm91IGUgQyBlcmFtIGNyaWFuw6dhcywgcXVhbnRvIGN1c3RhcmlhIHBhcmEgbyBncnVwbyBjb21lcj9cbk1hcGVhbWVudG86IHtBOiA1LCBCOiAxNSwgQzogOH1cblxuRXNjcmV2YSB1bWEgZXF1YcOnw6NvIG1hdGVtw6F0aWNhIGUgZ2VyZSBvIGZvcm1hdG8gZGUgcmVzcG9zdGEgY29tZcOnYW5kbyBjb20gJ1Jlc3Bvc3RhID0nIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 2b: Código em Python

Também podemos pedir ao %%LLM|LLM%% que gere código Python que resolva o problema. Isso é feito pedindo ao LLM para gerar uma função Python.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiBjdXN0b19yZXN0YXVyYW50ZShBLCBCLCBDKTpcbiAgcmV0dXJuIEEgKiAoQiAtIEMpIiwicHJvbXB0IjoiUXQ6IEVtIHVtIHpvb2zDs2dpY28sIGNhZGEgaW5ncmVzc28gYWR1bHRvIGN1c3RhICQgQSBlIGNyaWFuw6dhcyBtZW5vcmVzIGRlIDUgYW5vcyBwb2RlbSBlbnRyYXIgZGUgZ3Jhw6dhLiBTZSB1bWEgZmFtw61saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbsOnYXMgbWVub3JlcyBkZSA1IGFub3MgdmlzaXRhciBvIHpvb2zDs2dpY28sIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBwYXJhIGEgZmFtw61saWEgZW50cmFyP1xuXG5NYXBlYW1lbnRvOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cbkVzY3JldmEgdW1hIGZ1bsOnw6NvIFB5dGhvbiBxdWUgcmV0b3JuZSBhIHJlc3Bvc3RhLlxuXG5kZWYgY3VzdG9fem9vKEEsIEIsIEMpOlxuICByZXR1cm4gQSAqIEJcblxuXG5RdDogRW0gdW1hIGxvamEsIHNhcGF0b3MgY3VzdGFtICQgQSBwb3IgcGFyIGUgbWVpYXMgY3VzdGFtICQgQiBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYXIgQyBwYXJlcyBkZSBzYXBhdG9zIGUgRCBwYXJlcyBkZSBtZWlhcywgcXVhbCDDqSBvIGN1c3RvIHRvdGFsIGRhIGNvbXByYT9cblxuRXNjcmV2YSB1bWEgZnVuw6fDo28gUHl0aG9uIHF1ZSByZXRvcm5lIGEgcmVzcG9zdGEuXG5cbmRlZiBjdXN0b19sb2phKEEsIEIsIEMsIEQpOlxuICByZXR1cm4gKEEgKiBDKSArIChCICogRClcblxuXG5RdDogRW0gdW0gcmVzdGF1cmFudGUsIGNhZGEgcmVmZWnDp8OjbyBhZHVsdGEgY3VzdGEgJCBBIGUgY3JpYW7Dp2FzIGNvbWVtIGRlIGdyYcOnYS4gU2UgdW0gZ3J1cG8gZGUgQiBwZXNzb2FzIGVudHJvdSBlIEMgZXJhbSBjcmlhbsOnYXMsIHF1YW50byBjdXN0YXJpYSBwYXJhIG8gZ3J1cG8gY29tZXI%2FXG5cbkVzY3JldmEgdW1hIGZ1bsOnw6NvIFB5dGhvbiBxdWUgcmV0b3JuZSBhIHJlc3Bvc3RhLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

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