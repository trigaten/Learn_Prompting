---
sidebar_position: 4
---
# 🟢 Modificadores de Estilo

Los modificadores de estilo son simplemente descriptores que producen consistentemente ciertos estilos (por ejemplo, "tintado de rojo", "hecho de vidrio", "renderizado en Unity")(@oppenlaender2022taxonomy). Pueden combinarse para producir estilos aún más específicos. Pueden "incluir información sobre períodos, escuelas y estilos artísticos, pero también sobre materiales y medios artísticos, técnicas y artistas"(@oppenlaender2022taxonomy).

import pyramids from '@site/docs/assets/images_chapter/pyramids.webp';
import red_pyramids from '@site/docs/assets/images_chapter/red_pyramids.webp';

# Ejemplo

Aquí hay algunas pirámides generadas por DALLE, con la indicación "pirámide".

<div style={{textAlign: 'center'}}>
  <img src={pyramids} style={{width: "750px"}}/>
</div>

Aquí hay algunas pirámides generadas por DALLE, con la indicación "Una pirámide hecha de vidrio, renderizada en Unity y tintada de rojo", que utiliza 3 modificadores de estilo.

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={red_pyramids} style={{width: "750px"}} />
</div>

Aquí hay una lista de algunos modificadores de estilo útiles:

```text
fotorealista, de Greg Rutkowski, de Christopher Nolan, pintura, pintura digital, arte conceptual, renderizado con Octane, lente ancha, renderizado en 3D, iluminación cinematográfica, tendencia en ArtStation, tendencia en CGSociety, hiperrealista, foto, luz natural, grano de película
```

## Notas

Oppenlaender et al.(@oppenlaender2022taxonomy) describen el descriptor "renderizado en..." como un impulsor de calidad, pero nuestra definición de trabajo difiere, ya que ese modificador produce consistentemente el estilo específico de Unity (u otro motor de renderizado). Como tal, llamaremos a ese descriptor un modificador de estilo.