# 🟢 Pendahuluan

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/9becd099-5d44-45ec-9f1a-0fd075642520)

Prompt hacking adalah istilah yang digunakan untuk menggambarkan jenis serangan yang mengeksploitasi kerentanan LLM dengan memanipulasi masukan atau prompt mereka. Berbeda dengan peretasan tradisional, yang biasanya mengeksploitasi kerentanan perangkat lunak, peretasan prompt bergantung pada pembuatan prompt yang hati-hati untuk menipu LLM melakukan tindakan yang tidak diinginkan.

Kita akan membahas tiga jenis peretasan prompt: prompt injection, prompt leaking, dan jailbreaking. Prompt injection melibatkan penambahan konten jahat atau tidak diinginkan ke dalam prompt untuk meretas output model bahasa. Prompt leaking dan jailbreaking efektif merupakan subset dari prompt injection: Prompt leaking melibatkan ekstraksi informasi sensitif atau rahasia dari respons LLM, sementara jailbreaking dapat melakukan bypass pada fitur keselamatan dan moderasi. Kita juga akan membahas teknik ofensif dan defensif tertentu.

Untuk melindungi dari peretasan prompt, tindakan defensif harus dilakukan. Ini termasuk mengimplementasikan pertahanan berbasis prompt, melakukan pemantauan perilaku dan keluaran LLM secara teratur untuk aktivitas yang tidak biasa, dan menggunakan fine tuning atau teknik lainnya. Secara keseluruhan, peretasan prompt adalah masalah yang semakin mendesak untuk keamanan LLM, dan sangat penting untuk tetap waspada dan mengambil langkah proaktif untuk melindungi terhadap jenis serangan ini.
