---
sidebar_position: 3
---

# 🟡 LLM yang Melakukan Penalaran dan Aksi (Reason and Act)

ReAct(@yao2022react)(reason, act) adalah paradigma yang memungkinkan model bahasa untuk menyelesaikan tugas kompleks menggunakan penalaran bahasa alami. ReAct dirancang untuk tugas di mana LLM diizinkan untuk melakukan tindakan tertentu. Sebagai contoh, seperti pada sistem MRKL, LLM dapat berinteraksi dengan API eksternal untuk mengambil informasi. Ketika ditanya sebuah pertanyaan, LLM dapat memilih untuk melakukan tindakan untuk mengambil informasi, dan kemudian menjawab pertanyaan berdasarkan informasi yang diperoleh.

ReAct Systems dapat dianggap sebagai sistem MRKL, dengan kemampuan tambahan untuk **berpikir tentang** tindakan yang dapat mereka lakukan.

Periksa gambar berikut. Pertanyaan dalam kotak atas bersumber dari HotPotQA(@yang2018hotpotqa), dataset yang membutuhkan penalaran kompleks. ReAct dapat menjawab pertanyaan dengan pertama-tama memikirkan tentang pertanyaan (Thought 1), dan kemudian melakukan tindakan (Act 1) untuk mengirim kueri ke Google. Kemudian, ia menerima pengamatan (Obs 1), dan melanjutkan dengan lingkaran pikiran, tindakan, dan pengamatan ini sampai ia mencapai kesimpulan (Act 3).


import react_qa from '@site/docs/assets/advanced/react_qa.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={react_qa} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Sistem ReAct (Yao et al.)
</div>

Pembaca yang memiliki pengetahuan tentang reinforcement learning mungkin mengenali proses ini sebagai mirip dengan lingkaran RL klasik dari keadaan, tindakan, penghargaan, keadaan,... ReAct memberikan beberapa formalisasi untuk hal ini dalam makalah mereka.


## Hasil

Google menggunakan PaLM(@chowdhery2022palm) LLM dalam percobaan dengan ReAct. Perbandingan dengan peringatan standar (pertanyaan saja), CoT, dan konfigurasi lainnya menunjukkan bahwa kinerja ReAct menjanjikan untuk tugas penalaran kompleks. Google juga melakukan studi pada kumpulan data FEVER(@thorne2018fever), yang mencakup ekstraksi dan verifikasi fakta.

import react_performance from '@site/docs/assets/advanced/react_performance.webp';

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={react_performance} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Hasil ReAct (Yao et al.)
</div>

