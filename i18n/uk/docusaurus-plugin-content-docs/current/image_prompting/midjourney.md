---
sidebar_position: 99
---

# 🟢 Midjourney

[Midjourney](https://www.midjourney.com) – це генератор зображень на основі ШІ, який працює через інтерфейс бота в Discord або вебдодаток (планується також API-версія Midjourney). Процес створення зображень, використовуючи Midjourney, відбувається за тими самими основними принципами, що й лежать в основі інших генераторів ШІ, включно з написанням запитів для керування процесом створення.

Однією з унікальних характеристик Midjourney у порівнянні з іншими генераторами зображень на основі ШІ є його здатність створювати візуально привабливі зображення високого рівня художності. Це пояснюється спеціальним навчанням моделі, яке дає їй змогу створювати високоякісні зображення з конкретними художніми параметрами, докладніше про це в розділі «Розширені запити» > «Параметри»).

Ви можете експериментувати з ботом Midjourney на сервері [Learn Prompting у Discord](http://learnprompting.org/discord) або на [офіційному Discord-сервері Midjourney](https://discord.gg/midjourney).

import midjourney_astronaut from '@site/docs/assets/images_chapter/midjourney_astronaut.webp';
import midjourney_astronaut_params from '@site/docs/assets/images_chapter/midjourney_astronaut_params.webp';
import midjourney_astronaut_multi1 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi1.webp';
import midjourney_astronaut_multi2 from '@site/docs/assets/images_chapter/midjourney_astronaut_multi2.webp';
import midjourney_astronaut_ip2 from '@site/docs/assets/images_chapter/midjourney_astronaut_ip2.webp';

import midjourney_astronaut_params_a12 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a12.webp';
import midjourney_astronaut_params_a169 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_a169.webp';

import midjourney_astronaut_params_c20 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c20.webp';
import midjourney_astronaut_params_c80 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_c80.webp';

import midjourney_astronaut_params_q05 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q05.webp';
import midjourney_astronaut_params_q2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_q2.webp';

import midjourney_astronaut_params_s50 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s50.webp';
import midjourney_astronaut_params_s900 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_s900.webp';

import midjourney_astronaut_params_sameseed from '@site/docs/assets/images_chapter/midjourney_astronaut_params_sameseed.webp';
import midjourney_astronaut_params_seed123 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_seed123.webp';

import midjourney_astronaut_params_tile from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tile.webp';
import midjourney_astronaut_params_tilegrid from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilegrid.webp';
import midjourney_astronaut_params_tilecomplete from '@site/docs/assets/images_chapter/midjourney_astronaut_params_tilecomplete.webp';

import midjourney_astronaut_params_v1 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v1.webp';
import midjourney_astronaut_params_v2 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v2.webp';
import midjourney_astronaut_params_v3 from '@site/docs/assets/images_chapter/midjourney_astronaut_params_v3.webp';



# Базове застосування

Основна структура запитів у Midjourney — це `/imagine prompt: [IMAGE PROMPT] [--OPTIONAL PARAMETERS]`.

Приклад: `/imagine prompt: astronaut on a horse`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut} style={{width: "350px"}} />
</div>

Приклад із параметрами: `/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params} style={{width: "350px"}} />
</div>

У цьому базовому прикладі були використані такі параметри:


`--ar 3:2` встановлює співвідношення сторін зображення 3:2;

`--c 70` додає значення невизначеності 70, щоб дозволити Midjourney вільніше інтерпретувати запит (діапазон значень невизначеності: 0–100);

`--seed 100` встановлює довільне початкове значення, яке можна використати для повторного рендерингу або перероблення зображення пізніше.


(дізнайтеся більше про параметри Midjourney у розділі «Розширені запити» > «Параметри»)


# Розширені запити
Розширені запити в Midjourney використовують параметри та спеціальні методи запитів, які підтримуються алгоритмом Midjourney.

## Мультизапити
За замовчуванням Midjourney інтерпретує ваш запит комплексно. Використання подвійної двокрапки `::` наказує Midjourney інтерпретувати кожну частину запиту окремо.

Приклад:

```text
/imagine prompt: astronaut and horse
```

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_multi1} style={{width: "350px"}} />
</div>

```text
/imagine prompt: astronaut:: and horse
```

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_multi2} style={{width: "350px"}} />
</div>

## Запити-зображення
Завантаживши зображення в Discord і використовуючи його URL-адресу в запиті, ви можете дати вказівку Midjourney використовувати це зображення для впливу на вміст, стиль і композицію ваших результатів. Приклад: [Космонавт (Джерело: Вікіпедія)](https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).webp)

```text
/imagine prompt: [image URL], impressionist painting
```

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_ip2} style={{width: "350px"}} />
</div>

## Параметри (v4)

Наступні параметри підтримуються останньою моделлю Midjourney (v4).

### Співвідношення сторін

`--ar [ratio]` змінює співвідношення за замовчуванням (1:1) до нового співвідношення (наразі максимальне підтримуване співвідношення становить 2:1)

Приклад: `astronaut on a horse --ar 16:9` і `astronaut on a horse --ar 1:2`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_a169} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_a12} style={{width: "175px"}} />
</div>

### Значення невизначеності

`--c [value]` встановлює значення невизначеності, яке визначає, наскільки Midjourney змінює запит, що вище значення невизначеності, то більш незвичні та несподівані результати та композиції можна отримати (діапазон: 0–100)

Приклад: `astronaut on a horse --c20` і `astronaut on a horse --c 80`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_c20} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_c80} style={{width: "350px"}} />
</div>

### Якість

`--q [value]` визначає, скільки часу буде витрачено на створення зображення, таким чином підвищуючи якість. Значення за замовчуванням — «1». Вищі значення використовують більше GPU-хвилин вашої підписки (допускаються значення «.25», «.5», «1» і «2»)

Приклад: `astronaut on a horse --q .5` і `astronaut on a horse --q 2`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_q05} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_q2} style={{width: "350px"}} />
</div>

### Початкове значення:

`--seed [value]` встановлює початковий номер, який визначає початкову точку (шумове поле) для створення зображення. Початкові значення для кожного зображення генеруються випадковим чином, якщо не вказано параметр початкового значення. Використання того самого початкового значення та запиту створить подібні зображення.

Приклад: `astronaut on a horse --seed 123`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_seed123} style={{width: "350px"}} />
</div>

### Стилізація

`--stylize [value]` або `--s [value]` впливає на те, наскільки сильно Midjourney застосовує свій художній алгоритм.  Низькі значення створюють зображення, які точно відповідають запиту, високі значення створюють художні зображення, які менше відповідають тому, що описано у запиті. Значення за замовчуванням – 100, діапазон значень 0–1000. (Примітка: ви можете скористатися командою `/settings`, щоб змінити значення стилізації за замовчуванням із «🖌️ Стиль середній» (=`--s 100`) до «🖌️ Стиль низький» (=`--s 50`), «🖌️ Стиль високий» (=`--s 250`) або «🖌️ Стиль дуже високий» (=`--s 750`))

Приклад: `astronaut on a horse --s 50` і `astronaut on a horse --s 900`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_s50} style={{width: "350px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_s900} style={{width: "350px"}} />
</div>

### Версія
`--v [version number]`або `--version [version number]` дозволяє отримати доступ до попередніх моделей Midjourney (1–3)

Приклад: `--v 1`, `--v 2` та `--v 3`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_v1} style={{width: "220px"}} />
  &nbsp;
   <LazyLoadImage src={midjourney_astronaut_params_v2} style={{width: "220px"}} />
   &nbsp;
      <LazyLoadImage src={midjourney_astronaut_params_v3} style={{width: "220px"}} />
</div>

## Параметри (попередні моделі)

### Однакові початкові значення

`--sameseed`: у той час, як параметр `--seed` створює єдине шумове поле, застосоване до всіх зображень у початковій мережі, параметр sameseed застосовує той самий початковий шум до всіх зображень у початковій мережі, тому отримані зображення будуть дуже схожими.

Приклад: `astronaut on a horse --sameseed --v 3`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_sameseed} style={{width: "350px"}} />
</div>

### Клітинка

`--tile` створює зображення, які можна використовувати як повторювані клітинки для створення безшовних візерунків на тканині, шпалерах і текстурі (працює лише з моделями 1–3)

Приклад: `astronaut on a horse --tile --v 3`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={midjourney_astronaut_params_tilegrid} style={{width: "220px"}} />
  &nbsp;
  <LazyLoadImage src={midjourney_astronaut_params_tile} style={{width: "220px"}} />
  &nbsp;
  <LazyLoadImage src={midjourney_astronaut_params_tilecomplete} style={{width: "220px"}} />
</div>

### Відео

`--video` створює короткий відеоролик про те, як генерується сітка зображень. Реакція з емодзі ✉️ дозволяє боту Midjourney надіслати вам приватне повідомлення із посиланням на відео.

Приклад: `astronaut on a horse --video --v 3`

<div style={{textAlign: 'center'}}>
 <video width="320" height="240" autoplay muted>
  <source src="https://i.mj.run/27c89699-d96d-4834-b6fa-b022a453eb28/video.mp4" type="video/mp4">
</source>
</video>
</div>

## Посилання

[Офіційна документація Midjourney](https://docs.midjourney.com/)