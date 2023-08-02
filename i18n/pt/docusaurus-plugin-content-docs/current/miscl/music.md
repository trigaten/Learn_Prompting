---
sidebar_position: 3
---

# 🟢 Criando Música

A criação de música por modelos está se tornando cada vez mais popular e, eventualmente, terá um grande impacto na indústria musical.

Os modelos de geração de música podem criar progressões de acordes, melodias ou músicas completas. Eles podem estruturar e criar música em gêneros específicos e compor ou improvisar no estilo de artistas específicos.

No entanto, apesar do enorme potencial dos modelos de música, atualmente é difícil criar prompts para eles. A saída gerada muitas vezes não é completamente personalizável através do prompt, ao contrário de modelos de geração de imagens ou texto.

## Riffusion
import riffusion from '@site/docs/assets/miscl/riffusion_phonk.webp';

<div style={{textAlign: 'center'}}>
  <img src={riffusion} style={{width: "500px"}}/>
</div>

Riffusion(@Forsgren_Martiros_2022), uma versão refinada do Stable Diffusion, pode ser controlada com prompts para gerar instrumentos e pseudoestilos, mas tem um número limitado de batidas disponíveis.

## Mubert

[Mubert](https://mubert.com/) interpreta os comandos através da análise de sentimentos que associa estilos musicais apropriados ao comando (não é possível controlar os parâmetros musicais em detalhes através dos comandos). Contudo não está claro quanto da geração resultante é feita por IA.

## Outros

Existem tentativas de usar o GPT-3 como uma ferramenta Text-2-Music com prompts reais para elementos musicais no "micro-nível" de notas (ao invés das sugestões de estilo de prompt vagos, como no caso do Mubert e Riffusion)(por exemplo,  `escreva notas para uma música pop que só use  A, B, C#, F#, and G`). No entanto, atualmente essas tentativas estão limitadas a instrumentos individuais.

Outras abordagens incluem uma cadeia de modelos que [converte qualquer imagem em um som que a represente](https://huggingface.co/spaces/fffiloni/img-to-music) e utilizando o ChatGPT para gerar código para [bibliotecas Python que criam som](https://twitter.com/teropa/status/1598713756074246145).

## Notas

A criação de música por prompt ainda não está bem desenvolvida... ainda. O MusicLM parece promissor, mas ainda não está disponível para o público.