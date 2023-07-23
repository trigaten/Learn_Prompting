---
sidebar_position: 60
---

# 🟢 Терміни із заданою значущістю

Деякі моделі (Stable Diffusion, Midjourney тощо) дозволяють задавати значущість терміну в запиті. Це можна використовувати для акценту на певних словах або фразах в отриманому зображенні. Його також можна використовувати, щоб зменшити акцент на певних словах або фразах в отриманому зображенні. Розглянемо простий приклад:

import mountains from '@site/docs/assets/images_chapter/mountains.webp';
import mountains_no_trees from '@site/docs/assets/images_chapter/mountains_no_trees.webp';
import planets from '@site/docs/assets/images_chapter/planets.webp';


# Наприклад

Ось кілька гір, отриманих за допомогою Stable Diffusion, за запитом `mountain`.

<div style={{textAlign: 'center'}}>
  <img src={mountains} style={{width: "350px"}}/>
</div>

Однак, якщо нам потрібні гори без дерев, ми можемо використати запит: `mountain | tree:-10`. Оскільки ми задали деревам дуже негативну значущість, їх немає на створеному зображенні.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={mountains_no_trees} style={{width: "350px"}} />
</div>

Терміни із заданою значущістю можна об’єднати в складніші запити, наприклад: `A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={planets} style={{width: "350px"}} />
</div>

## Примітки

Дізнайтеся більше про задання значущості в ресурсах у кінці цього розділу.