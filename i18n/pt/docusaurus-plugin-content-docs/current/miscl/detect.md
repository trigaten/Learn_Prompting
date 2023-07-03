---
sidebar_position: 1
---

# 🟢 Detectando Texto Gerado por IA

Detectar texto gerado por inteligência artificial é um grande problema para pesquisadores e educadores de segurança, entre outros. Ferramentas como [GPTZero](https://gptzero.me), [GPT2 detector](https://openai-openai-detector.hf.space), and [detectores bilíngues](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection) tiveram um sucesso significativo. No entanto, eles podem ser enganados.

OpenAI e outros pesquisadores (@bansal2022certified) (@gu2022watermarking) estão trabalhando para introduzir a marca d'água estatística em nos textos gerado, mas isso também pode ser enganado pela modificação de grandes partes do texto.

O problema de detecção de texto gerado por IA provavelmente será uma corrida armamentista à medida que novos modelos e novos métodos de detecção forem introduzidos. Muitas empresas já começaram a desenvolver soluções que afirmam ser muito eficazes, mas é difícil provar isso, especialmente à medida que os modelos mudam ao longo do tempo.

Este artigo abordará alguns dos métodos atuais para detectar texto gerado por IA, e o próximo discutirá algumas maneiras que as pessoas encontraram para enganá-los.


## Classificador de Texto da OpenAI

O [Classificador de Texto da OpenAI](https://platform.openai.com/ai-text-classifier) é uma tentativa razoavelmente boa de detector de texto de IA. Ao treinar o modelo em uma grande quantidade de dados gerados por IA e texto escrito por humanos de qualidade semelhante, o detector é capaz de calcular a probabilidade de que qualquer texto dado tenha sido criado por um LLM.

Ele tem várias limitações: não aceita textos de menos de 1000 palavras, o texto pode ser facilmente editado para interferir nos cálculos de probabilidade e, devido ao seu conjunto de treinamento focado em profissionais, ele tem mais dificuldade com o texto criado por crianças ou pessoas que não falam inglês.

## O Método de Marca D'água

Um dos métodos para detectar textos gerados por IA requer a introdução de uma marca d'água estatística durante a geração do texto. Essas técnicas podem usar uma "lista branca" de LLM, que é um método para determinar se um texto foi gerado por um modelo de IA específico. A marca d'água funciona selecionando um conjunto aleatório de tokens "verdes" antes que uma palavra seja gerada e, em seguida, promovendo suavemente o uso dos tokens selecionados durante a amostragem. Esses valores ponderados têm um efeito mínimo na qualidade das gerações, mas podem ser detectados algoritmicamente por outro LLM (@kirchenbauer2023watermarking).

## DetectGPT

O método [DetectGPT](https://detectgpt.ericmitchell.ai/)(@mitchell2023detectgpt) é capaz de detectar textos gerados por IA com menos configuração do que os conceitos anteriores. Pesquisadores descobriram que as gerações de texto de modelos de linguagem de grande escala tendem a "ocupar regiões de curvatura negativa da função de probabilidade logarítmica do modelo". Por causa disso, é possível criar um sistema baseado em curvatura para determinar se um bloco de texto foi gerado de forma procedural.

O sistema funciona computando probabilidades logarítmicas do modelo que se acredita ter gerado o texto e comparando-os com alterações aleatórias do texto de outro modelo de linguagem genérico pré-treinado. Dessa forma, o DetectGPT é capaz de identificar a probabilidade de um trecho de texto ter sido gerado usando apenas curvas de probabilidade!

## Nota
Para uma discussão adicional sobre o tópico de detectores e como as pessoas estão enganando-os, consulte [este artigo](https://learnprompting.org/docs/miscl/trickery).