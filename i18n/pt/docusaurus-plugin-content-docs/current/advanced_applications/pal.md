---
sidebar_position: 4
---

# 🟡 Código como Raciocínio


Os Modelos de Linguagem Auxiliados por Programa [(Program-aided Language Models - PALs)](https://reasonwithpal.com)(@gao2022pal) são outro exemplo de um sistema de MRKL. Quando uma pergunta é feita, os PALs são capazes de escrever código que resolve essa pergunta. Eles enviam o código para uma execução programática para obter o resultado. O PAL funciona em contraste com a Cadeia de Pensamento; o raciocínio intermediário do PAL é código, enquanto o do CdP é linguagem natural.

import image from '@site/docs/assets/advanced/pal.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={image} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
PAL Example (Gao et al.)
</div>


Uma coisa importante a notar é que o PAL, na verdade, intercala linguagem natural (NL) e código. Na imagem acima, em azul, estão os raciocínios em linguagem natural que o PAL gera. Embora isso não seja mostrado na imagem, o PAL, na verdade, gera um '#' antes de cada linha de raciocínio em NL, para que sejam interpretados como comentários pela execução programática.

## Exemplo

Vamos ver um exemplo de PAL resolvendo uma questão de matemática. Eu uso um prompt de 3 disparos, que é uma versão simplificada [deste aqui](https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py)(@gao2022pal). 

Usarei o LangChain, um pacote Python para encadear a funcionalidade do LLM. Primeiro, são necessárias algumas instalações:


```python
!pip install langchain==0.0.26
!pip install openai
from langchain.llms import OpenAI
import os
os.environ["OPENAI_API_KEY"] = "sk-SUA_CHAVE_AQUI"
```

Então, podemos criar uma instância do GPT-3 davinci-002 (uma chamada de API acontece quando usamos esse objeto)

```
llm = OpenAI(model_name='text-davinci-002', temperature=0)
```

Aqui está o prompt de poucos disparos:


```python
MATH_PROMPT = '''
Q: Havia nove computadores na sala do servidor. Cinco computadores foram instalados a cada dia, de segunda a quinta-feira. Quantos computadores há agora na sala do servidor?

# solução em Python:
"""Havia nove computadores na sala do servidor. Cinco computadores foram instalados a cada dia, de segunda a quinta-feira. Quantos computadores há agora na sala do servidor?"""
computador_inicio = 9
computador_por_dia = 5
num_dias = 4  # 4 dias entre segunda e quinta
computadores_adicionados = computador_por_dia * num_dias
computadores_total = computador_inicio + computadores_adicionados
resultado = computadores_total
return resultado


Q: Dani tem cinco brinquedos. Para o Natal, ela ganhou dois brinquedos de seu pai e dois da sua mãe. Quantos brinquedos ela tem agora?

# solução em Python:
"""Dani tem cinco brinquedos. Para o Natal, ela ganhou dois brinquedos de seu pai e dois da sua mãe. Quantos brinquedos ela tem agora?"""
brinquedos_inicio = 5
mae_brinquedos = 2
pai_brinquedos = 2
brinquedos_recebidos= mae_brinquedos + pai_brinquedos
total_brinquedos= brinquedos_inicio + brinquedos_recebidos
resultado = total_brinquedos
return resultado


Q: Jason tinha 20 pirulitos. Ele deu alguns para o Denny. Agora Jason tem 12 pirulitos. Quantos pirulitos ele deu para o Denny?

# solução em Python:
"""Jason tinha 20 pirulitos. Ele deu alguns para o Denny. Agora Jason tem 12 pirulitos. Quantos pirulitos ele deu para o Denny?"""
jason_pirulitos_inicio = 20
jason_pirulitos_fim = 12
denny_pirulitos = jason_pirulitos_inicio - jason_pirulitos_fim
resultado = denny_pirulitos
return resultado


Q: {pergunta}

# solução em Python:
'''
```

Agora podemos passar esse prompt combinado para o GPT-3.

```
llm_out = llm(MATH_PROMPT.format(question=question))
print(llm_out)
```

A saída é:

<pre>
<span className="bluegreen-highlight">
Emma levou uma viagem de avião de 60 minutos para Minas Gerais. Ela então pegou um trem de 2 horas para Ouro Preto, e então um ônibus de 30 minutos para Ouro Branco. Quanto tempo ela levou para chegar a Ouro Branco?
<br/><br/>

viagem_aviao = 60<br/>
viagem_trem = 2 * 60  # 2 horas em minutos<br/>
viagem_onibus = 30<br/>
total_tempo = viagem_aviao + viagem_trem + viagem_onibus<br/>
resultado = total_time
</span>
</pre>

Finalmente, podemos passar esse código para um runtime no Python e obter a resposta:


```python
exec(llm_out)
print(result)
```

A saída é **210**, o que é correta.

Veja o notebook Jupyter para esse exemplo [here](https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb).

## More

Confira também [esse exemplo](https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V).