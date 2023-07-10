---
sidebar_position: 0
---

# 🟢 Estruturando Dados

Um caso de uso simples e empolgante para os LLMs é a organização de dados em tabelas. Talvez você tenha um monte de artigos de notícias ou relatórios de negócios, e gostaria que todos os pontos importantes fossem resumidos em uma tabela que você possa então colocar em uma planilha ou banco de dados. Chat bots como ChatGPT podem ajudá-lo a fazer isso.

Podemos extrair informações do seguinte relatório ao adicionar `Gerar uma tabela contendo essas informações:`.


```text
Em uma apresentação de relatório de negócios recente, a CEO da Conga Conga destacou seu notável crescimento no último ano fiscal. Ela compartilhou que a empresa teve um aumento de 15% na receita, atingindo R$ 50 milhões, com uma margem de lucro de 12% (R$ 6 milhões em lucro líquido). O relatório também mostrou um crescimento de 20% em sua base de clientes, totalizando agora 100.000 clientes. Além disso, as despesas operacionais da empresa aumentaram 10%, totalizando R$ 10 milhões, enquanto o número de funcionários aumentou 25%, resultando em uma força de trabalho atual de 500 funcionários.

Gerar uma tabela contendo essas informações:
```

A resposta será algo semelhante:

| Informação | Valor |
|-------|------|
| Receita | R$ 50 milhões |
| Margem de Lucro | 12% |
| Lucro Líquido | R$ 6 milhões |
| Base de clientes	 | 100,000 |
| Despesas operacionais | R$ 10 milhões |
| Número de funcionários	| 500 |
| Aumento da receita	 | 15% |
| Aumento da base de clientes	 | 20% |
| Aumento das despesas operacionais	 | 10% |
| Aumento do número de funcionários	 | 25% |

Você pode então copiar e colar em uma planilha como Excel/Sheets ou até mesmo em documentos e apresentações.