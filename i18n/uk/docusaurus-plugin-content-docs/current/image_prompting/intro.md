---
sidebar_position: 1
---

# 🟢 Вступ

Написати якомога кращий запит для створення ідеального зображення – є насправді складним завданням. На відміну від запитів, які зосереджені на створенні тексту, методи написання запитів для генерування зображень все ще не достатньо вивчені та сформовані. Причиною цього можуть бути постійні труднощі під час створення об’єктів, які є переважно суб’єктивними та часто не мають критеріїв, за якими їх можна було б оцінити. Однак не лякайтеся, оскільки спільнота, яка займається написанням запитів для створення зображень, (@parsons2022dalleprompt) провела кілька експериментів, у яких дослідила, як правильно робити запити в певних моделях, щоб отримати гарний результат (@rombach2021highresolution) (@ramesh2022hierarchical).

У цьому посібнику висвітлено основні методики написання запитів для зображень, і ми наполегливо рекомендуємо переглянути добірку корисних ресурсів в кінці розділу. Крім того, нижче ми надаємо покроковий опис процесу написання запитів для зображень.


## Приклад

Ось приклад того, як я створив зображення для першої сторінки цього курсу. Я експериментував із низькополігональним стилем у рамках проєкту глибокого навчання з використанням нейронної мережі, що може відтворювати різні ракурси складних 3D-об'єктів на основі 2D-зображення (Neural radiance field, NeRF). Мені сподобався низькополігональний стиль, тому я використав його, щоб створити зображення для цього курсу.

Для зображень на першій сторінці я обрав космонавта, ракету та комп’ютер.

Я прочитав велику кількість інформації про те, як створити низькополігональні зображення, на сайті [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) та інших, але не міг знайти нічого корисного.

Таким чином, я вирішив розпочати з запиту до моделі DALLE: `Low poly white and blue rocket shooting to the moon in front of a sparse green meadow` і подивитися, що з того вийде.

import rockets1 from '@site/docs/assets/images_chapter/rockets_dalle_1.webp';
import rockets2 from '@site/docs/assets/images_chapter/rockets_dalle_2.webp';
import computer_1 from '@site/docs/assets/images_chapter/computer_dalle_1.webp';
import astronaut_1 from '@site/docs/assets/images_chapter/astronaut_dalle_1.webp';
import astronaut_2 from '@site/docs/assets/images_chapter/astronaut_sd_1.webp';
import rocket_sd_1 from '@site/docs/assets/images_chapter/rocket_sd_1.webp';
import rocket_final from '@site/static/img/rocket.webp';
import laptop_sd_1 from '@site/docs/assets/images_chapter/laptop_sd_1.webp';
import gemstone_sd_1 from '@site/docs/assets/images_chapter/gemstone_sd_1.webp';
import gemstone_sd_2 from '@site/docs/assets/images_chapter/gemstone_sd_2.webp';
import gemstone_sd_3 from '@site/docs/assets/images_chapter/gemstone_sd_3.webp';
import focus_final from '@site/static/img/computer.webp';
import astronaut_final from '@site/static/img/astronaut.webp';

<div style={{textAlign: 'center'}}>
  <img src={rockets1} style={{width: "750px"}}/>
</div>

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rockets2} style={{width: "750px"}} />
</div>

Як для першої спроби результат був досить непоганий, мені, зокрема, сподобалася нижня ракета зліва.

Також я захотів, щоб комп’ютер був у такому самому стилі: `Low poly white and blue computer sitting in a sparse green meadow`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={computer_1} style={{width: "750px"}} />
</div>

Зрештою, мені потрібен ще й космонавт! Запит: `Low poly white and blue astronaut sitting in a sparse green meadow with low poly mountains in the background`, здається, підходить.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_1} style={{width: "750px"}} />
</div>

Результат цього запиту теж досить гарний.

Тепер у мене є космонавт, ракета, та комп’ютер. Я був задоволений тими зображеннями, які отримав, тому розмістив їх на першій сторінці. Після декількох днів та відгуків, які я отримав від моїх друзів, я зрозумів, що стиль зображень відрізняється😔.


Я знову вирішив почитати про запити на сайті [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) і побачив, що дехто використовує слово «ізометричний». Тому я вирішив спробувати іншу модель, а саме Stable Diffusion, а не DALLE. Я також дійшов висновку, що мені потрібно додати більше модифікаторів до мого запиту, щоб окреслити стиль. Отже, мій наступний запит мав такий вигляд: `A low poly world, with an astronaut in white suit and blue visor sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_2} style={{width: "250px"}} />
</div>

Зображення вийшли не таким чудовими, як я очікував, тож я вирішив натомість почати з ракети:

`A low poly world, with a white and blue rocket blasting off from a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_sd_1} style={{width: "250px"}} />
</div>

Не надто якісно, але після декількох спроб у мене вийшло це: 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_final} style={{width: "250px"}} />
</div>

Тепер мені потрібен потужніший ноутбук:

`A low poly world, with a white and blue laptop sitting in sparse green meadow with low poly mountains in the background. The screen is completely blue. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={laptop_sd_1} style={{width: "250px"}} />
</div>

Я отримав досить різні результати, з цих чотирьох зображень найбільше мені подобається правий нижній, однак, на цьому я не зупинився і вирішив спробувати дещо інше:

`A low poly world, with a glowing white and blue gemstone sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_1} style={{width: "250px"}} />
</div>

Це було не зовсім те, чого я хотів, тому я додав трішки чогось магічного та яскравого:

`A low poly world, with a glowing white and blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_2} style={{width: "250px"}} />
</div>

Мені сподобався результат цього запиту, але я хотів, щоб камінь був чітко посередині зображення:

`A low poly world, with a glowing blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_3} style={{width: "250px"}} />
</div>

Ось тут я використав стандартну роздільну здатність 720 на 576 пікселів (Standart Definition, SD), щоб результат попередніх зображень був відчутний на наступних. І таким чином я отримав ось це:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={focus_final} style={{width: "250px"}} />
</div>

Нарешті я почав працювати над космонавтом:

`A low poly world, with an astronaut in white suite and blue visor is sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_final} style={{width: "250px"}} />
</div>

На цьому етапі я був достатньо задоволений однаковим стилем усіх трьох зображень, тому зміг використати їх на вебсайті. Головний висновок, якого я дійшов, полягав у тому, що написання запиту для створення потрібного мені зображення – це складний багатоетапний процес, що вимагає аналізу великої кількості інформації, а також те, що мені довелося змінити свої очікування та побажання, експериментуючи з різними запитами та моделями.
