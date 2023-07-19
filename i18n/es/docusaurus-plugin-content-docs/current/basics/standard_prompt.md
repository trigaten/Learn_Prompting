---
sidebar_position: 3
---

# 🟢 Un Prompt "Estándar"

Hasta ahora hemos escuchado sobre varios formatos de prompts.
Siguiendo a Kojima et al. (@kojima2022large), nos referimos a los prompts que consisten
únicamente en una pregunta como "Standard prompts". También consideramos como "Standard prompts"
a aquellos que consisten únicamente en una pregunta y que se presentan en el formato de QA.

#### ¿Por qué debería importarme?

Muchos artículos que citamos usan este término. Lo estamos definiendo para poder discutir
nuevos tipos de prompts en contraste con los Standard prompts. 

### Two examples of standard prompts:


_Standard Prompt_
```
¿Cuál es la capital de Francia?
```

_Standard Prompt in QA format_
```
Q: ¿Cuál es la capital de Francia?

A:
```

## Few Shot Standard Prompts

Few shot standard prompts (@liu2021pretrain) son simplemente prompts estándar que tienen ejemplos (exemplars) en ellos. Los exemplars son ejemplos de la tarea que el prompt está tratando de resolver, que se incluyen en el propio prompt (@brown2020language). En la investigación, few shot standard prompts a veces se refieren simplemente como standard prompts (aunque intentamos no hacerlo en esta guía).

### Dos ejemplos de Standard Prompts de "few shot"::

_Few Shot Standard Prompt_

```
¿Cuál es la capital de España?
Madrid
¿Cuál es la capital de Italia?
Roma
¿Cuál es la capital de Francia?
```

_Few Shot Standard Prompt in QA format_
```
Q: ¿Cuál es la capital de España?
A: Madrid
Q: ¿Cuál es la capital de Italia?
A: Roma
Q: ¿Cuál es la capital de Francia?
A:
```

Los prompts de "few shot" facilitan el aprendizaje en contexto, que es la capacidad de aprender sin actualizaciones de parámetros (@zhao2021calibrate).

