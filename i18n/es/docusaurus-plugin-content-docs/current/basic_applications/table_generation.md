---
sidebar_position: 0
---

# 🟢 Estructuración de Datos

Un caso de uso sencillo y emocionante para los LLMs es la organización de datos en tablas. Quizás tenga una gran cantidad de artículos de noticias o informes comerciales, y le gustaría que todos los puntos importantes se resuman en una tabla que luego pueda poner en una hoja de cálculo o base de datos. Los chatbots como ChatGPT pueden ayudarlo a hacer esto.

Podemos extraer información del siguiente informe añadiendo `Generar una tabla que contenga esta información:` al final del mismo.

```text
En una presentación de negocios reciente, la CEO de Zana Corp. destacó su notable crecimiento en el último año fiscal. Compartió que la empresa experimentó un aumento del 15% en los ingresos, llegando a $50 millones, con un margen de beneficio del 12% ($6 millones en beneficio neto). El informe también mostró un crecimiento del 20% en su base de clientes, llegando a un total de 100.000 clientes. Además, los gastos operativos de la empresa aumentaron un 10%, alcanzando los $10 millones, mientras que la cantidad de empleados aumentó un 25%, lo que resultó en una fuerza laboral actual de 500 empleados. 

Generar una tabla que contenga esta información:
```

ChatGPT generará una tabla como la siguiente:

| Métrica                          | Valor        |
| -------------------------------- | ------------ |
| Ingresos                         | $50 millones |
| Margen de beneficio              | 12%          |
| Beneficio neto                   | $6 millones  |
| Clientes Base                    | 100,000      |
| Gastos operativos                | $10 millones |
| Cantidad de empleados            | 500          |
| Aumento de Ingresos              | 15%          |
| Aumento de Clientes              | 20%          |
| Aumento de Gastos Operativos     | 10%          |
| Aumento de Cantidad de Empleados | 25%          |

Luego puede copiar y pegarla en una hoja de cálculo como Excel/Sheets o incluso en documentos y presentaciones.