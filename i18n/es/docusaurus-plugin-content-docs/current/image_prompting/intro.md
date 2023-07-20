---
sidebar_position: 1
---

# 🟢 Introducción

Encontrar el mejor estímulo para crear una imagen perfecta es un desafío particular. La investigación sobre métodos para hacerlo no está tan desarrollada como la de la creación de textos. Esto puede deberse a los desafíos inherentes en la creación de objetos que son fundamentalmente subjetivos y a menudo carecen de métricas de precisión. Sin embargo, no temáis, ya que la comunidad de creación de imágenes con estímulos (@parsons2022dalleprompt) ha hecho grandes descubrimientos sobre cómo estimular varios modelos de imágenes (@rombach2021highresolution) (@ramesh2022hierarchical).

Esta guía cubre técnicas básicas de estimulación de imágenes, y recomendamos encarecidamente que consultéis los recursos excelentes al final del capítulo. Además, proporcionamos un ejemplo del proceso de estimulación de extremo a extremo de la imagen a continuación.

## Ejemplo

Aquí voy a mostrar un ejemplo de cómo creé las imágenes para la página principal de este curso. Había estado experimentando con el estilo de baja poli para un proyecto de campo de radiación neuronal de refuerzo profundo. Me gustó el estilo de baja poli y quería usarlo para las imágenes de este curso.

Quería un astronauta, un cohete y una computadora para las imágenes de la página principal.

Investigué mucho sobre cómo crear imágenes de baja poli en [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) y otros sitios, pero no encontré nada muy útil.

Decidí empezar con DALLE y el estímulo `Cohete blanco y azul Low poly disparando a la luna delante de un prado verde disperso` y ver qué pasaba.

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

Pensé que estos resultados eran bastante decentes para un primer intento; especialmente me gustó el cohete de la parte inferior izquierda.

A continuación, quería una computadora en el mismo estilo: `Computadora blanca y azul de baja poli sentada en un prado verde disperso`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={computer_1} style={{width: "750px"}} />
</div>

Finalmente, necesitaba un astronauta! `Astronauta de baja poligonización en blanco y azul sentado en un prado verde escaso con montañas de baja poligonización en el fondo` pareció funcionar.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_1} style={{width: "750px"}} />
</div>

Pensé que el segundo era decente.

Ahora tenía un astronauta, un cohete y una computadora. Estaba contento con ellos,
así que los puse en la página principal. Después de unos días y con la opinión de mis amigos, me di cuenta de que el estilo simplemente no era consistente 😔.

Investigué un poco más en [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) y encontré personas que usaban la palabra isométrico. Decidí probarlo, usando Stable Diffusion en lugar de DALLE.
También me di cuenta de que necesitaba agregar más modificadores a mi prompt
para limitar el estilo. Intenté con este prompt:
`Un mundo de baja poligonización, con un astronauta con traje blanco y visor azul sentado en una pradera verde escasa con montañas de baja poligonización en el fondo. Altamente detallado, isométrico, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_2} style={{width: "250px"}} />
</div>

Estos no eran geniales, así que decidí empezar con el cohete en su lugar.

`Un mundo de baja poligonización, con un cohete blanco y azul despegando desde una pradera verde escasa con montañas de baja poligonización en el fondo. Altamente detallado, isométrico, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_sd_1} style={{width: "250px"}} />
</div>

Estos no son particularmente buenos, pero después de un poco de iteración, terminé con esto:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={rocket_final} style={{width: "250px"}} />
</div>

Ahora necesitaba una mejor laptop.

`Un mundo de baja poligonización, con una laptop blanca y azul sentada en una pradera verde escasa con montañas de baja poligonización en el fondo. La pantalla es completamente azul. Altamente detallado, isométrico, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={laptop_sd_1} style={{width: "250px"}} />
</div>

Obtuve algunos resultados inconsistentes; Me gustó el de la esquina inferior derecha, pero decidí ir en una dirección diferente.

`Un mundo de baja poligonización, con una gema blanca y azul que brilla sentada en una pradera verde escasa con montañas de baja poligonización en el fondo. Altamente detallado, isométrico, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_1} style={{width: "250px"}} />
</div>

Esto no estaba del todo bien. Intentemos algo mágico y brillante.

`Un mundo de baja poligonización, con una gema blanca y azul brillante que flota mágicamente en el centro de la pantalla sobre una pradera verde escasa con montañas de baja poligonización en el fondo. Altamente detallado, isométrico, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_2} style={{width: "250px"}} />
</div>

Me gustaron estas imágenes, pero quería que la piedra estuviera en el centro de la pantalla.

`Un mundo de baja poligonización, con una piedra preciosa de color azul brillante flotando mágicamente en el centro de la pantalla sobre una pradera verde escasa con montañas de baja poligonización en el fondo. Altamente detallado, isométrico, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={gemstone_sd_3} style={{width: "250px"}} />
</div>

En algún lugar por aquí, utilicé la capacidad de SD para que una imagen anterior influyera en imágenes futuras.
Y así llegué a:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={focus_final} style={{width: "250px"}} />
</div>

Finalmente, necesitaba un astronauta.

`Un mundo de baja poligonización, con un astronauta con traje blanco y visor azul sentado en una pradera verde escasa con montañas de baja poligonización en el fondo. Altamente detallado, isométrico, 4K`

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={astronaut_final} style={{width: "250px"}} />
</div>

En este punto, estaba lo suficientemente satisfecho con la consistencia de estilo entre mis tres imágenes como para usarlas en el sitio web. Lo más importante para mí fue que este fue un proceso muy iterativo y que requirió mucha investigación, y tuve que modificar mis expectativas e ideas mientras experimentaba con diferentes consignas y modelos.