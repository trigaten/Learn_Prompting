---
sidebar_position: 4
---

# 🟢 Модифікатори стилю

Модифікатори стилю — це звичайні дескриптори, які послідовно створюють певні стилі (наприклад, «червоного кольору», «зроблено зі скла», «зарендерено на платформі Unity») (@oppenlaender2022taxonomy). Їх можна комбінувати, щоб створювати точніші стилі. Вони можуть «містити інформацію про періоди мистецтва, школи та стилі, а також художні матеріали, форми, техніки та художників» (@oppenlaender2022taxonomy).

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import red_pyramids from '@site/docs/assets/images_chapter/red_pyramids.webp';

# Наприклад

Ось кілька пірамід, згенерованих моделлю DALLE, за запитом: `pyramid`.

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}}/>
</div>

Ось декілька пірамід, згенерованих DALLE за запитом `A pyramid made of glass, rendered in Unity and tinted red`, який використовує 3 модифікатори стилю.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={red_pyramids} style={{width: "750px"}} />
</div>

Ось список деяких корисних модифікаторів стилю:

```text
photorealistic, by greg rutkowski, by christopher nolan, painting, digital painting, concept art, octane render, wide lens, 3D render, cinematic lighting, trending on ArtStation, trending on CGSociety, hyper realist, photo, natural light, film grain
```

## Примітки

Йонас Оппенлендер та інші (@oppenlaender2022taxonomy) описують дескриптор `rendered in ...` як підсилювач якості, але наше визначення відрізняється, оскільки цей модифікатор постійно генерує певний стиль платформи Unity (або іншої системи рендерингу). Таким чином, ми будемо називати цей дескриптор модифікатором стилю.