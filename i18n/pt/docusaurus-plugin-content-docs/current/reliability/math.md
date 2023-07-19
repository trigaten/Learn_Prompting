---
sidebar_position: 70
---

# 🟡 Matemática

Durante este curso, vimos muitos métodos de prompt diferentes que podem ser usados ​​para melhorar a habilidade matemática de um %%LLM|LLM%%. Uma abordagem recente, MathPrompter(@imani2023mathprompter), une alguns desses métodos: (%%Cadeia de Pensamento|CoT prompting%%, %%PAL|PAL%%, etc.) em uma única técnica. A ideia principal é dividir uma questão matemática em termos algébricos e, em seguida, usar código Python para resolvê-la de maneiras diferentes.

import math from '@site/docs/assets/reliability/math.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={math} style={{width: "500px"}} />
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
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik1BOiBFbSB1bSByZXN0YXVyYW50ZSwgY2FkYSByZWZlaefjbyBwYXJhIGFkdWx0b3MgY3VzdGEgJEEgZSBhcyBjcmlhbudhcyBjb21lbSBkZSBncmHnYS4gU2UgdW0gZ3J1cG8gZGUgQiBwZXNzb2FzIGVudHJhciBlIEMgZm9yZW0gY3JpYW7nYXMsIHF1YW50byBpc3NvIGN1c3RhcmlhIHBhcmEgbyBncnVwbyBjb21lcj9NQVBFQU1FTlRPOiB7QTogNSwgQjogMTUsIEM6IDh9IiwicHJvbXB0IjoiUDogVW0gem9vbPNnaWNvIGNvYnJhIFIkMTIgcG9yIGluZ3Jlc3NvIHBhcmEgYWR1bHRvcyBlIHBlcm1pdGUgcXVlIGFzIGNyaWFu52FzIGNvbSBtZW5vcyBkZSA1IGFub3MgZW50cmVtIGRlIGdyYedhLiBVbWEgZmFt7WxpYSBkZSA0IGFkdWx0b3MgZSAyIGNyaWFu52FzIGNvbSBtZW5vcyBkZSA1IGFub3MgdmlzaXRhbSBvIHpvb2zzZ2ljby4gUXVhbCDpIG8gY3VzdG8gdG90YWwgcGFyYSBhIGZhbe1saWEgZW50cmFyP1xuTUE6IEVtIHVtIHpvb2zzZ2ljbywgY2FkYSBpbmdyZXNzbyBwYXJhIGFkdWx0b3MgY3VzdGEgJEEgZSBhcyBjcmlhbudhcyBjb20gbWVub3MgZGUgNSBhbm9zIHBvZGVtIGVudHJhciBkZSBncmHnYS4gU2UgdW1hIGZhbe1saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbudhcyBjb20gbWVub3MgZGUgNSBhbm9zIHZpc2l0YXIgbyB6b29s82dpY28sIHF1YWwg6SBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3tbGlhIGVudHJhcj9cbk1BUEVBTUVOVE86IHtBOiAxMiwgQjogNCwgQzogMn1cblxuUDogVW1hIGxvamEgdmVuZGUgc2FwYXRvcyBhICQ2MCBwb3IgcGFyIGUgbWVpYXMgYSAkOCBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYXIgMiBwYXJlcyBkZSBzYXBhdG9zIGUgMyBwYXJlcyBkZSBtZWlhcywgcXVhbCDpIG8gY3VzdG8gdG90YWwgZGEgY29tcHJhP1xuTUE6IEVtIHVtYSBsb2phLCBvcyBzYXBhdG9zIGN1c3RhbSAkQSBwb3IgcGFyIGUgYXMgbWVpYXMgY3VzdGFtICRCIHBvciBwYXIuIFNlIHVtIGNsaWVudGUgY29tcHJhciBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIOkgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5NQVBFQU1FTlRPOiB7QTogNjAsIEI6IDgsIEM6IDIsIEQ6IDN9XG5cblA6IEVtIHVtIHJlc3RhdXJhbnRlLCBjYWRhIHJlZmVp5%2BNvIHBhcmEgYWR1bHRvcyBjdXN0YSAkNSBlIGFzIGNyaWFu52FzIGNvbWVtIGRlIGdyYedhLiBTZSB1bSBncnVwbyBkZSAxNSBwZXNzb2FzIGVudHJhc3NlIGUgOCBmb3NzZW0gY3JpYW7nYXMsIHF1YW50byBpc3NvIGN1c3RhcmlhIHBhcmEgbyBncnVwbyBjb21lcj8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Passo 2: Prompts Matemáticos

O objetivo deste passo é formular o problema como uma declaração algébrica e como código Python. Este passo tem dois prompts simultâneos, que ajudam a dar representações diversas do problema.

### 2a: Declaração Algébrica

Podemos fazer o prompt de poucas amostras (few-shot) para que o LLM represente o problema matemático como uma declaração algébrica. Isso é feito pedindo ao LLM para gerar o formato da resposta, começando com "Resposta =".

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlJlc3Bvc3RhID0gQSAqIEIgLSBBICogQyIsInByb21wdCI6IlA6IEVtIHVtIHpvb2zzZ2ljbywgY2FkYSBpbmdyZXNzbyBkZSBhZHVsdG8gY3VzdGEgJCBBIGUgY3JpYW7nYXMgbWVub3JlcyBkZSA1IGFub3MgcG9kZW0gZW50cmFyIGRlIGdyYedhLiBTZSB1bWEgZmFt7WxpYSBkZSBCIGFkdWx0b3MgZSBDIGNyaWFu52FzIG1lbm9yZXMgZGUgNSBhbm9zIHZpc2l0YXIgbyB6b29s82dpY28sIHF1YWwg6SBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3tbGlhIGVudHJhcj9cbk1hcGVhbWVudG86IHtBOiAxMiwgQjogNCwgQzogMn1cblxuRXNjcmV2YSB1bWEgZXF1YefjbyBtYXRlbeF0aWNhIGUgZ2VyZSBvIGZvcm1hdG8gZGUgcmVzcG9zdGEgY29tZedhbmRvIGNvbSAnUmVzcG9zdGEgPSdcblJlc3Bvc3RhID0gQSAqIEJcblxuUDogRW0gdW1hIGxvamEsIG9zIHNhcGF0b3MgY3VzdGFtICQgQSBwb3IgcGFyIGUgYXMgbWVpYXMgY3VzdGFtICQgQiBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYSBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIOkgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FTWFwZWFtZW50bzoge0E6IDYwLCBCOiA4LCBDOiAyLCBEOiAzfVxuXG5Fc2NyZXZhIHVtYSBlcXVh5%2BNvIG1hdGVt4XRpY2EgZSBnZXJlIG8gZm9ybWF0byBkZSByZXNwb3N0YVxuY29tZedhbmRvIGNvbSAnUmVzcG9zdGEgPSdcblxuUmVzcG9zdGEgPSBBICogQyArIEIgKiBEXG5cblA6IEVtIHVtIHJlc3RhdXJhbnRlLCBjYWRhIHJlZmVp5%2BNvIHBhcmEgYWR1bHRvIGN1c3RhICQgQSBlIGFzIGNyaWFu52FzIGNvbWVtIGRlIGdyYedhLiBTZSB1bSBncnVwbyBkZSBCIHBlc3NvYXMgZW50cm91IGUgQyBlcmFtIGNyaWFu52FzLCBxdWFudG8gY3VzdGFyaWEgcGFyYSBvIGdydXBvIGNvbWVyP1xuTWFwZWFtZW50bzoge0E6IDUsIEI6IDE1LCBDOiA4fVxuXG5Fc2NyZXZhIHVtYSBlcXVh5%2BNvIG1hdGVt4XRpY2EgZSBnZXJlIG8gZm9ybWF0byBkZSByZXNwb3N0YSBjb21l52FuZG8gY29tICdSZXNwb3N0YSA9JyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### 2b: Código em Python 

Também podemos pedir ao %%LLM|LLM%% que gere código Python que resolva o problema. Isso é feito pedindo ao LLM para gerar uma função Python.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiBjdXN0b19yZXN0YXVyYW50ZShBLCBCLCBDKTpcbiAgcmV0dXJuIEEgKiAoQiAtIEMpIiwicHJvbXB0IjoiUXQ6IEVtIHVtIHpvb2zzZ2ljbywgY2FkYSBpbmdyZXNzbyBhZHVsdG8gY3VzdGEgJCBBIGUgY3JpYW7nYXMgbWVub3JlcyBkZSA1IGFub3MgcG9kZW0gZW50cmFyIGRlIGdyYedhLiBTZSB1bWEgZmFt7WxpYSBkZSBCIGFkdWx0b3MgZSBDIGNyaWFu52FzIG1lbm9yZXMgZGUgNSBhbm9zIHZpc2l0YXIgbyB6b29s82dpY28sIHF1YWwg6SBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3tbGlhIGVudHJhcj9cblxuTWFwZWFtZW50bzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Fc2NyZXZhIHVtYSBmdW7n428gUHl0aG9uIHF1ZSByZXRvcm5lIGEgcmVzcG9zdGEuXG5cbmRlZiBjdXN0b196b28oQSwgQiwgQyk6XG4gIHJldHVybiBBICogQlxuXG5cblF0OiBFbSB1bWEgbG9qYSwgc2FwYXRvcyBjdXN0YW0gJCBBIHBvciBwYXIgZSBtZWlhcyBjdXN0YW0gJCBCIHBvciBwYXIuIFNlIHVtIGNsaWVudGUgY29tcHJhciBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIOkgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5cbkVzY3JldmEgdW1hIGZ1bufjbyBQeXRob24gcXVlIHJldG9ybmUgYSByZXNwb3N0YS5cblxuZGVmIGN1c3RvX2xvamEoQSwgQiwgQywgRCk6XG4gIHJldHVybiAoQSAqIEMpICsgKEIgKiBEKVxuXG5cblF0OiBFbSB1bSByZXN0YXVyYW50ZSwgY2FkYSByZWZlaefjbyBhZHVsdGEgY3VzdGEgJCBBIGUgY3JpYW7nYXMgY29tZW0gZGUgZ3Jh52EuIFNlIHVtIGdydXBvIGRlIEIgcGVzc29hcyBlbnRyb3UgZSBDIGVyYW0gY3JpYW7nYXMsIHF1YW50byBjdXN0YXJpYSBwYXJhIG8gZ3J1cG8gY29tZXI%2FXG5cbkVzY3JldmEgdW1hIGZ1bufjbyBQeXRob24gcXVlIHJldG9ybmUgYSByZXNwb3N0YS4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
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