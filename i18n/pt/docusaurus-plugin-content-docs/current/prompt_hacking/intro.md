---
sidebar_position: 0
---

# 🟢 Introduction

import Lock from '@site/static/img/lock.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={Lock} style={{width:"30%"}}/>

</div>

Hackeamento de prompts é um termo usado para descrever um tipo de ataque que explora as vulnerabilidades dos %%LLMs|LLM%%, manipulando suas entradas ou prompts. Ao contrário do hacking tradicional, que geralmente explora vulnerabilidades de software, o prompt hacking depende da criação cuidadosa de prompts para enganar o LLM a executar ações não intencionais.

Nas próxima páginas abordaremos três tipos de prompt hacking: injeção de prompt, vazamento de prompt e jailbreaking. A injeção de prompt envolve adicionar conteúdo malicioso ou não intencional a um prompt para influenciar a saída do modelo de linguagem. O vazamento de prompt e o jailbreaking são efetivamente subconjuntos disso: o vazamento de prompt envolve a extração de informações sensíveis ou confidenciais das respostas do LLM, enquanto o jailbreaking envolve a violação de recursos de segurança e moderação. Também discutiremos técnicas ofensivas e defensivas específicas.

Para se proteger contra o prompt hacking, medidas defensivas devem ser tomadas. Isso inclui a implementação de defesas baseadas em prompt, a monitorização regular do comportamento e das saídas do LLM em busca de atividades incomuns e o uso de ajustes finos ou outras técnicas. No geral, o prompt hacking é uma preocupação crescente para a segurança dos LLMs e é essencial permanecer vigilante e tomar medidas proativas para se proteger contra esses tipos de ataques.