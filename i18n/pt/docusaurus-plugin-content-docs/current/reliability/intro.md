---
sidebar_position: 1
---

# 🟢 Introdução

Este capítulo aborda como tornar os resultados de prompt podem ser mais confiáveis e como implementar verificações para garantir que essas saídas sejam confiáveis.

Até certo ponto, a maioria dos técnicas abordadas anteriormente têm a ver com a melhoria da precisão da saída e, portanto, da confiabilidade, especialmente da autoconsistência (@wang2022selfconsistency). No entanto, existem outras técnicas que podem ser usadas para melhorar a confiabilidade, além de estratégias de engenharia de prompt básicas.

Os modelos de linguagem comuns (%%LLMs|LLM%%) foram considerados mais confiáveis do que esperávamos na interpretação do que uma prompt está tentando dizer, mesmo quando ela contém erros de ortografia, frases mal formuladas ou até mesmo informações enganosas (@webson2023itscomplicated). Apesar dessa capacidade, ainda apresentam vários problemas, incluindo alucinações (@ye2022unreliability), explicações falhas com métodos de prompt Cadeia de Pensamento (CdP) (@ye2022unreliability) e vieses múltiplos, incluindo viés de rótulo majoritário, viés de recenticidade e viés de token comum (@zhao2021calibrate). Além disso, a técnica de CdP sem o uso de amostras pode ser particularmente tendenciosa ao lidar com tópicos sensíveis (@shaikh2022second).

Soluções comuns para alguns desses problemas incluem calibradores para remover os viés _a priori_, verificadores para avaliar as conclusões, bem como promover a diversidade nas conclusões.