---
sidebar_position: 90
---
# 🟢 Oprava deformovaných generací

Deformované generace, zejména na částech lidského těla (např. ruce, nohy), jsou častým problémem mnoha modelů. To lze do jisté míry řešit dobrými negativními prompty(@blake2022with). Následující příklad je převzat z [tohoto příspěvku na Redditu](https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/).

## Příklad

import good_pitt from '@site/docs/assets/images_chapter/good_pitt.png';
import bad_pitt from '@site/docs/assets/images_chapter/bad_pitt.png';

Pomocí Stable Diffusion v1.5 a následujícího promptu vygenerujeme pěkný obrázek Brada Pitta, samozřejmě až na jeho ruce!

`studiový střední portrét Brada Pitta mávajícího rukama, detailní, film, studiové osvětlení, 90mm objektiv, autor: Martin Schoeller:6`

<div style={{textAlign: 'center'}}>
  <img src={bad_pitt} style={{width: "250px"}} />
</div>

Pomocí robustního negativního promptu můžeme generovat mnohem přesvědčivější ruce.

`Studiový střední portrét Brada Pitta mávajícího rukama, detailní, film, studiové osvětlení, 90mm objektiv, autor: Martin Schoeller:6 | znetvořené, deformované ruce, rozmazané, zrnité, rozbité, šilhající, nemrtvé, upravené photoshopem, přeexponované, podexponované, nízké rozlišení, špatná anatomie, špatné ruce, číslice navíc, méně číslic, špatné číslice, špatné uši, špatné oči, špatný obličej, oříznuté: -5`.
<div style={{textAlign: 'center'}}>
  <img src={good_pitt} style={{width: "250px"}} />
</div>

Použití podobného negativního promptu může pomoci i u jiných částí těla. Bohužel tato technika není konzistentní, takže se možná budete muset pokusit o více generací než dosáhnete dobrého výsledku. V budoucnu by tento typ promptu neměl být nutný, protože modely se budou zlepšovat. V současné době se však jedná o velmi užitečnou techniku.


# Poznámky

Vylepšené modely, jako je [Protogen](https://civitai.com/models/3666/protogen-x34-official-release), mají často lepší ruce, nohy atd.