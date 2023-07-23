---
sidebar_position: 0
---



# 🟢Pendahuluan

import Lock from '@site/static/img/lock.webp';

<div style={{textAlign: 'center'}}>
  <img src={Lock} style={{width:"30%"}}/>

</div>

Prompt hacking adalah istilah yang digunakan untuk menggambarkan jenis serangan yang mengeksploitasi kerentanan %%LLMs|LLM%%, dengan memanipulasi input atau prompt mereka. Berbeda dengan hacking tradisional, yang biasanya mengeksploitasi kerentanan perangkat lunak, prompt hacking bergantung pada pembuatan prompt dengan hati-hati untuk menipu LLM agar melakukan tindakan yang tidak disengaja.

Kami akan mencakup tiga jenis prompt hacking: injeksi prompt, prompt leaking, dan jailbreaking. Injeksi prompt melibatkan penambahan konten berbahaya atau tidak disengaja ke dalam prompt untuk mencuri keluaran model bahasa. Prompt leaking dan jailbreaking secara efektif adalah subset dari ini: Prompt leaking melibatkan ekstraksi informasi sensitif atau rahasia dari respon LLM, sedangkan jailbreaking melibatkan melewati fitur keamanan dan moderasi. Kita juga akan membahas teknik-teknik serangan khusus serta teknik-teknik pertahanan.

Untuk melindungi diri dari prompt hacking, langkah-langkah defensif harus diambil. Hal ini termasuk melaksanakan pertahanan yang berbasis prompt, secara rutin memantau perilaku dan output LLM untuk aktivitas yang tidak biasa, dan menggunakan penyetelan atau teknik lainnya. Secara keseluruhan, peretasan cepat menjadi kekhawatiran yang semakin meningkat untuk keamanan LLMs, dan penting untuk tetap waspada dan mengambil langkah proaktif untuk melindungi diri dari jenis serangan ini.