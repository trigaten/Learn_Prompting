---
sidebar_position: 90
---

# 🟢 Kelemahan LLM

import Pitfalls from '@site/docs/assets/basics/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

LLM sangat kuat, tetapi mereka tidak sempurna. Ada banyak jebakan yang harus Anda waspadai saat menggunakannya.

## Mengutip Sumber

LLM untuk sering kali **tidak dapat mengutip sumber dengan akurat**. Ini karena mereka tidak memiliki akses ke Internet, dan tidak tepat ingat dari mana informasi mereka berasal. Mereka akan sering menghasilkan sumber yang terlihat bagus, tetapi benar-benar tidak akurat.

:::catatan
Strategi seperti LLM yang diperkuat oleh pencarian (LLM yang dapat mencari Internet dan sumber lainnya) sering dapat memperbaiki masalah ini
:::

## Bias

LLM sering memiliki kecenderungan untuk menghasilkan respons stereotip. Meskipun ada perlindungan, terkadang mereka mengatakan hal-hal seksis/rasis/homofobia. Hati-hati saat menggunakan LLMs dalam aplikasi yang berhubungan dengan konsumen, dan juga hati-hati saat menggunakannya dalam penelitian (mereka dapat menghasilkan hasil yang bias).

## Halusinasi

LLMs sering kali menghasilkan kebohongan ketika ditanya pertanyaan yang mereka tidak tahu jawabannya. Terkadang mereka akan menyatakan bahwa mereka tidak tahu jawabannya, tapi sebagian besar waktu mereka akan dengan yakin memberikan jawaban yang salah.

## Matematika

LLM seringkali buruk dalam matematika. Mereka kesulitan dalam memecahkan masalah matematika sederhana, dan sering tidak dapat menyelesaikan masalah matematika yang lebih kompleks.

:::catatan
Masalah ini dapat diperbaiki sejauh ini dengan menggunakan alat augmented LLM [](https://learnprompting.org/docs/advanced_applications/mrkl).
:::

## Prompt Hacking

Pengguna sering kali dapat memperdaya LLM untuk menghasilkan konten apa pun yang mereka inginkan. Baca lebih lanjut tentang ini [di sini](https://learnprompting.org/docs/category/-prompt-hacking).