---
sidebar_position: 6
locale: en-us
style: chicago
---

# 🟢 Menggabungkan Beberapa Teknik

import CombinedPrompt from '@site/docs/assets/basics/combined_prompt.svg';

<div style={{textAlign: 'center'}}>
  <CombinedPrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Seperti yang telah kita lihat di halaman sebelumnya, prompt dapat memiliki format dan kompleksitas yang bervariasi. Mereka dapat mencakup konteks, instruksi, dan beberapa contoh input-output. Namun, sejauh ini, kita hanya mempelajari teknik-teknik prompting yang terpisah. Menggabungkan teknik-teknik prompting yang berbeda ini dapat menghasilkan prompt yang lebih baik.

Berikut adalah contoh dari sebuah petunjuk yang mencakup konteks, instruksi, dan beberapa contoh:

```text
Twitter adalah platform media sosial di mana pengguna dapat memposting pesan singkat yang disebut "tweet".
Tweets bisa positif atau negatif, dan kami ingin bisa mengklasifikasikan tweet sebagai
positif atau negatif. Berikut adalah beberapa contoh tweet positif dan negatif. Pastikan 
mengklasifikasikan tweet terakhir dengan benar.

Q: Tweet: "Hari yang indah!"
Apakah tweet ini positif atau negatif?

A: positif

Q: Tweet: "Saya benci kelas ini"
Apakah tweet ini positif atau negatif?

A: negatif

Q: Tweet: "Saya suka saku di jeans"

A:
```

Dengan menambahkan konteks/contoh tambahan, kita sering dapat meningkatkan kinerja AI pada tugas-tugas yang berbeda. 

