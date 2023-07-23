---
sidebar_position: 90
---

# 🟢 Виправлення деформацій у зображеннях

У деформованих зображеннях, особливо вигляд частин людського тіла, наприклад, рук, ніг є типовою проблемою багатьох моделей. З цим можна впоратися певною мірою за допомогою гарно написаних негативних запитів (@blake2022with). Наступний приклад взято з [цієї публікації на сайті Reddit](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/).

## Наприклад

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.webp';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.webp';

Використовуючи модель Stable Diffusion v1.5 та наступний запит, ми створюємо гарне зображення Бреда Пітта, за винятком його рук, звичайно!

`studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6`

<div style={{textAlign: 'center'}}>
  <img src={bad_pitt} style={{width: "250px"}}/>
</div>

Однак, за допомогою чітко написаного негативного запиту, ми можемо створити набагато реалістичніше зображення рук.

``
<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={good_pitt} style={{width: "250px"}} />
</div>

Використовуючи подібний негативний запит, також можна отримати якісні зображення й інших частин тіла. На жаль, цей метод не завжди дає гарні результати, тому вам доведеться спробувати декілька разів, перш ніж ви отримаєте гарне зображення. У майбутньому цей тип запитів стане непотрібним, оскільки моделі ставатимуть ще кращі. Однак нині, він є дуже корисним методом для виправлення деформацій.


# Примітки

Удосконалені моделі, такі як [Protogen](https://civitai.com/models/3666/protogen-x34-official-release), часто краще підходять для зображення рук, ніг тощо.