---
sidebar_position: 2000
---

# 🟢 Outras Abordagens

Embora as abordagens anteriores possam ser muito robustas, algumas outras abordagens, utilizando um modelo diferente, incluindo ajuste fino, estímulo suave e restrições de comprimento, também podem ser eficazes.

## Utilizando um Modelo Diferente

Modelos mais modernos, como o GPT-4, são mais robustos contra a injeção de prompt. Além disso, modelos que não foram ajustados para instruções podem ser mais difíceis de serem manipulados com prompt injection.


## Ajuste Fino (Fine Tunning)

O ajuste fino do modelo é uma defesa altamente eficaz (@goodside2021gpt), pois durante a inferência não há prompt envolvido, exceto a entrada do usuário. Essa é provavelmente a defesa preferível em qualquer situação que possua grande importância, pois é uma abordagem bastante robusta. No entanto, ela requer uma grande quantidade de dados e pode ser custosa, o que explica por que essa defesa não é implementada com frequência.

## Estímulo Suave (Soft Prompting)

O estímulo suave também pode ser eficaz, pois não possui um prompt discretamente definido (além da entrada do usuário). O estímulo suave requer efetivamente um ajuste fino, portanto, possui muitos dos mesmos benefícios, mas provavelmente será mais barato, em termos de processamento. No entanto, o estímulo suave não é tão bem estudado quanto o ajuste fino, então não está claro o quão eficaz ele é.


## Restrições de Comprimento

Por fim, incluir restrições de comprimento na entrada do usuário (@selvi2022exploring) ou limitar o comprimento das conversas do chatbot, como o Bing faz, pode evitar alguns ataques, como prompts enormes no estilo DAN ou ataques de virtualização, respectivamente.