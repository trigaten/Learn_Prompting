---
sidebar_position: 3
---

# 🟢 Role Prompting

import RolePrompt from '@site/docs/assets/basics/role_prompt.svg';

<div style={{textAlign: 'center'}}>
  <RolePrompt style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Role prompting[^a] adalah teknik yang dapat digunakan untuk mengontrol gaya teks yang dihasilkan oleh AI(@shanahan2023roleplay)(@li2023camel)(@santu2023teler). Teknik ini juga dapat meningkatkan keakuratan AI (misalnya memecahkan masalah matematika). Caranya semudah memberi tahu AI "kamu adalah kritikus makanan" atau "bertindak seperti seorang detektif". Role Prompting adalah teknik yang banyak digunakan, dan digunakan dalam banyak contoh di situs ini.


## Memperindah Teks

Role prompting paling sering digunakan untuk memformat teks. Hal ini melibatkan meminta AI berpura-pura menjadi seseorang tertentu, atau bertindak dengan cara tertentu, memodifikasi cara menulis berdasarkan peran yang ditugaskan. Dapat digunakan untuk mengubah nada, gaya, dan bahkan kedalaman informasi yang disajikan. Mari kita jelajahi konsep ini dengan contoh ulasan makanan.

### Contoh Ulasan Makanan

Ketika menulis ulasan, penting untuk menyesuaikan pendekatan Anda berdasarkan platform yang Anda gunakan dan audiens yang Anda tulis untuk. Hanya menyalin dan menempelkan ulasan yang sama di berbagai situs seperti Google Reviews, TripAdvisor, dan Yelp bukan strategi yang efektif, terutama jika Anda menulis untuk kritikus makanan di majalah atau posting blog. Untuk memastikan ulasan Anda sesuai dengan audiens yang dituju, pertimbangkan faktor seperti panjang, gaya, bahasa, dan nada, dan gunakan ini untuk menyusun ulasan yang langsung mengena pada minat dan harapan pembaca Anda. Dengan pendekatan yang teliti dan fokus pada konten berkualitas, Anda dapat membuat ulasan yang benar-benar mengcapture inti dari tempat pizza yang sedang Anda tulis. Mari kita mulai dengan perintah sederhana tanpa peran.

```text
Tulis ulasan tentang [tempat pizza].
```

Jawaban dari AI (GPT-3 davinci-003) ditandai dengan warna hijau:

```text
// highlight-start
"Saya baru-baru ini memiliki kesempatan mencoba [random pizza place] dan saya harus mengatakan bahwa saya sangat terkesan. Piza itu dimasak dengan sempurna dan topping-nya segar dan berasa. Kulitnya ringan dan renyah, dan sausnya pas asamnya. Layanan ini juga sangat baik; stafnya ramah dan perhatian. Secara keseluruhan, saya memiliki pengalaman yang sangat menyenangkan dan pasti akan merekomendasikan [random pizza place] kepada siapa pun yang mencari pizza lezat."
// highlight-end
```

Hasil ini cukup bagus, tapi mari lihat apa yang terjadi ketika AI mengasumsikan peran sebagai kritikus makanan.

```text
Anda adalah seorang kritikus makanan. Tulis ulasan mengenai [tempat pizza acak].
```

Sekali lagi, output AI tersebut dihighlight dengan warna hijau:
```text
// highlight-start
"Saya baru-baru ini memiliki kesenangan makan di [Pizza Place], sebuah pizzeria yang nyaman yang terletak di pusat kota. Meskipun ukurannya kecil, restoran ini memberikan dampak yang besar dalam hal rasa.

Piza itu dimasak dengan sempurna. Crust-nya ini sangat tipis dan renyah dan toppingnya segar dan lezat. Kombinasi rasa itu sungguh lezat. Saus marinara-nya kaya rasa dan sangat cocok dengan toppingnya. Keju itu lembut dan meleleh di mulutku.

Layanan juga luar biasa. Stafnya ramah dan perhatian. Mereka cepat menjawab pertanyaan dan memastikan makanan kami disajikan tepat waktu.

Secara keseluruhan, pengalaman saya di [Pizza Place] luar biasa dan saya sangat merekomendasikannya bagi siapa pun yang mencari pizza lezat."
// highlight-end
```

Kita bisa melihat bahwa ini menambahkan lebih banyak detail dan sedikit lebih mendalam. Sekarang mari kita melangkah lebih jauh dan membuatnya mengasumsikan peran seorang penulis untuk Michelin guide:

```text
Anda adalah seorang kritikus makanan yang menulis untuk Panduan Michelin. Tulis ulasan tentang [tempat pizza acak].

// highlight-start
"Terletak di jantung [random city], [random pizza place] adalah tempat populer bagi pecinta pizza. Setelah masuk, suasana hangat dan mengundang serta aroma pizza yang baru saja dipanggang akan membuat Anda merasa seperti di rumah sendiri. Menu ini menawarkan berbagai macam pizza klasik, serta beberapa pilihan unik dan kreatif. Kulitnya sangat renyah dan toppingnya selalu segar dan lezat. Pelayanannya ramah dan perhatian, dan harganya wajar. Apakah Anda mencari makanan cepat atau makan malam santai, [tempat pizza acak] pasti bisa memuaskan keinginan pizza Anda."
// highlight-end
```

Sekarang kita dapat melihat bagaimana menunjuk GPT-3 sebagai kritikus makanan membuat ulasannya terlihat lebih "kaya" dan "profesional" dalam deskripsinya.

Anda bisa mencobanya sendiri di sini:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC40LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSSByZWNlbnRseSBoYWQgdGhlIHBsZWFzdXJlIG9mIGRpbmluZyBhdCBbUGl6emEgUGxhY2VdLCBhIGNvenkgcGl6emVyaWEgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHkuIERlc3BpdGUgaXRzIHNtYWxsIHNpemUsIHRoZSByZXN0YXVyYW50IHBhY2tzIGEgaHVnZSBwdW5jaCB3aGVuIGl0IGNvbWVzIHRvIGZsYXZvci4iLCJwcm9tcHQiOiJZb3UgYXJlIGEgZm9vZCBjcml0aWMuXG5cbldyaXRlIGFuIGV4YW1wbGUgcmV2aWV3IGZvciBhIHBpenphIHBsYWNlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"325px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


### Contoh Menulis Email

Mari kita pertimbangkan contoh lain dalam mengatur gaya teks dengan role prompting. Ketika menggunakan model bahasa seperti ChatGPT untuk menulis email, mempertimbangkan "peran" AI sangat penting dalam membentuk konten yang dihasilkannya. Arah yang Anda inginkan agar email Anda terjadi akan menentukan peran apa yang harus Anda berikan kepada AI.

Mari kita katakan Anda memberikan tugas kepada AI untuk menulis email kepada klien untuk memberitahu mereka tentang keterlambatan dalam jadwal pengiriman akibat masalah logistik. Tujuan Anda adalah untuk menyampaikan pembaruan ini dengan efektif sambil memastikan kepercayaan klien terhadap layanan Anda tetap tak tergoyahkan. Ada beberapa peran yang bisa Anda berikan pada model untuk mendapatkan keluaran yang berbeda.

Sebagai contoh, salah satu peran yang mungkin adalah sebagai spesialis komunikasi, yang gayanya mungkin jelas, profesional, dan langsung ke intinya:

```text
Anda adalah seorang spesialis komunikasi. Draft sebuah email kepada klien Anda untuk memberitahu mereka tentang keterlambatan dalam jadwal pengiriman akibat masalah logistik.
```

```text
// highlight-start
Subjek: Pembaruan Penting Tentang Pesanan Anda

Dear [Nama Klien],

Saya berharap email ini menemukan Anda dalam keadaan baik. Saya menghubungi Anda untuk memberitahukan keterlambatan dalam pengiriman pesanan Anda. Sayangnya, kami menghadapi masalah logistik yang menyebabkan penundaan yang singkat. Meskipun kami sedang berusaha keras untuk menyelesaikan masalah ini dengan cepat, kami memperkirakan pesanan Anda akan dikirim dalam waktu [tanggal pengiriman perkiraan baru].

Kami memohon maaf yang sebesar-besarnya atas segala ketidaknyamanan yang terjadi, dan kami ingin meyakinkan Anda bahwa kami sedang melakukan yang terbaik untuk mempercepat proses. Kesabaran Anda sangat dihargai. Jika Anda memiliki pertanyaan atau kekhawatiran, jangan ragu untuk menghubungi kami.

Terima kasih banyak atas pengertiannya.

Hormat kami,
[Nama Anda]
// highlight-end
```

Atau, mintalah model tersebut mengadopsi peran sebagai ahli pemasaran untuk lebih mengandalkan persuasi, sikap positif, dan pembangunan hubungan:

```text
Anda adalah seorang ahli pemasaran. Buatlah email kepada klien untuk memberi tahu mereka tentang keterlambatan dalam jadwal pengiriman karena masalah logistik.
```

```text
// highlight-start
Subjek: Sedikit Menunggu untuk Produk-Menakjubkan-Mu

Sayang [Nama Klien],

Kami berharap pesan ini menemukanmu bersemangat dalam menanti pesananmu yang akan datang! Namun, bahkan rencana yang terbaik terkadang menghadapi hambatan tak terduga. Kami mengalami masalah logistik sementara yang sayangnya akan menambah waktu tunggu kecil pada pengiriman Anda.

Meskipun kami memahami ini bukanlah hal yang ideal, kami percaya bahwa hal-hal besar akan datang bagi mereka yang bersabar, dan pesanan Anda tidak terkecuali. Tenanglah, sejak saat kami mengatasi situasi ini hingga produk Anda sampai pada Anda, kami berkomitmen untuk memastikan bahwa pengalaman Anda tidak kurang dari luar biasa.

Terima kasih atas kesabaran dan pemahaman Anda. Tetaplah terhubung untuk pembaruan lebih lanjut, dan jangan ragu untuk menghubungi kami jika ada pertanyaan - kami selalu ada di sini.

Hei,
[Nama Kamu]
// highlight-end
```

Akhirnya, peran seorang perwakilan layanan pelanggan mungkin mengarah pada hasil yang lebih hubungan dan berorientasi pada solusi:

```text
Anda adalah seorang perwakilan layanan pelanggan. Tulis email kepada klien yang memberi tahu mereka tentang keterlambatan dalam jadwal pengiriman akibat masalah logistik.
```

```text
// highlight-start
Subjek: Perhatian Diperlukan: Pembaruan Status Pesanan Anda

Halo [Nama Klien],

Salam dari [Nama Perusahaan Anda].

Kami ingin memberitahukan bahwa, karena adanya tantangan logistik yang tidak terduga, mungkin akan ada keterlambatan dalam pengiriman pesanan Anda. Kami memahami bahwa ini mungkin menyebabkan beberapa ketidaknyamanan, dan kami meminta maaf dengan tulus.

Sementara itu, kami bekerja tanpa henti untuk menyelesaikan ini dan memastikan pengiriman Anda sampai ke tangan Anda pada [new estimated date]. Kami sangat menghargai waktu dan kesabaran Anda.

Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau memerlukan informasi lebih lanjut. Tim kami selalu siap membantu Anda.

Terima kasih atas pemahaman Anda.

Hormat kami,
[Nama Anda]
// highlight-end
```

Setiap perintah peran ini akan menghasilkan hasil yang berbeda, sejalan lebih dekat dengan perspektif peran yang ditugaskan. Apakah Anda membutuhkan kejelasan dari seorang spesialis komunikasi, kepositifan persuasif dari seorang ahli pemasaran, atau pendekatan pemecahan masalah empatik dari seorang perwakilan layanan pelanggan, role-prompts memungkinkan Anda menyesuaikan model bahasa untuk lebih cocok dengan kebutuhan Anda.

## Meningkatkan Akurasi

Seperti yang disebutkan di atas, akurasi output dapat ditingkatkan. Pertimbangkan contoh berikut ini:

```text
Anda adalah seorang matematikawan brilian yang dapat menyelesaikan setiap masalah di dunia.
Upaya untuk menyelesaikan masalah berikut:

Apa itu 100*100/400*56?

// highlight-start
Jawabannya adalah 1400.
// highlight-end
```

Ini adalah jawaban yang benar, tetapi jika AI hanya diberi masukan Apa itu 100\*100/400\*56?, ia akan menjawab 280 (salah).

:::peringatan
Harap dicatat bahwa ChatGPT akan menjawab pertanyaan dengan salah, tetapi dengan cara yang berbeda.
:::

Coba di sini:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlRoZSBhbnN3ZXIgaXMgMTQwMC4iLCJwcm9tcHQiOiJZb3UgYXJlIGEgYnJpbGxpYW50IG1hdGhlbWF0aWNpYW4gd2hvIGNhbiBzb2x2ZSBhbnkgcHJvYmxlbSBpbiB0aGUgd29ybGQuXG5BdHRlbXB0IHRvIHNvbHZlIHRoZSBmb2xsb3dpbmcgcHJvYmxlbTpcblxuV2hhdCBpcyAxMDAqMTAwLzQwMCo1Nj8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Meningkatkan Akurasi pada Model Terbaru

Meskipun model-model yang lebih tua seperti GPT-3 davinci-002 mendapatkan manfaat yang signifikan dari role prompting, efektivitas strategi ini nampaknya telah menurun dengan model-model baru seperti GPT-3.5 atau GPT-4. Pengamatan ini sebagian besar bersifat anekdotal dan didasarkan pada penggunaan praktis daripada pengujian sistematis yang ketat.

Untuk mengilustrasikan, penugasan peran "seorang dokter" atau "seorang pengacara" meningkatkan relevansi dan kedalaman jawaban dalam konteks kesehatan atau hukum secara berturut-turut dalam versi sebelumnya dari model AI. Ini menunjukkan bahwa role-prompts berkontribusi dalam meningkatkan pemahaman model tentang materi yang sedang dibahas.

Namun, tingkat peningkatan ini tampaknya kurang terlihat pada versi yang lebih baru. Model-model canggih ini sudah memiliki pemahaman yang kompleks dan seringkali cukup akurat tanpa perlu penguatan berbasis peran.


## Lebih lanjut tentang Peran

Peran dapat jauh lebih panjang daripada sebuah kalimat. Mereka dapat mengajukan tugas khusus secara lengkap kepada AI. Lihat beberapa contoh dari [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts#prompts) di bawah [^b].

> ### Bertindak sebagai Etimolog
> 
> Saya ingin Anda bertindak sebagai seorang etimolog. Saya akan memberikan kamu sebuah kata dan kamu akan melakukan riset mengenai asal-usul kata tersebut, telusuri kembali sampai ke akarnya. Anda juga harus memberikan informasi bagaimana arti kata tersebut telah berganti sepanjang waktu, jika memungkinkan. Permintaan pertamaku adalah "Saya ingin melacak asal-usul kata 'pizza'".

> ### Bertindak sebagai seorang Absurdist
> 
> Saya ingin Anda bertindak sebagai seorang absurdis. Kalimat-kalimat absurdis tersebut tidak ada maknanya. Kata-kata yang digunakan oleh seorang absurdist semuanya lucu. Absurdist tidak membuat kalimat-kalimat biasa dengan cara apapun. Permintaan pertama saya adalah "Sya butuh bantuan membuat kalimat absurdist untuk seri baru saya berjudul Hot Skull, jadi buat 10 kalimat untuk saya".

### Secara Otomatis Buat Peran

Anda dapat meminta AI untuk membuat peran bagi Anda! Anda kemudian dapat menggunakan peran ini sebagai bagian dari prompt lain. Cobalah di sini:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MSwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkxlYWggR3JlZW53b29kIGlzIGEgZmljdGlvbiB3cml0ZXIgZnJvbSBMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSB3aG8gaGFzIGEgcGFzc2lvbiBmb3IgZXhwbG9yaW5nIHRoZSBkZXB0aHMgb2YgdGhlIGh1bWFuIGNvbmRpdGlvbiB0aHJvdWdoIGhlciB3cml0aW5nLiBTaGUgd2FzIGJvcm4gaW50byBhIGZhbWlseSBvZiBjcmVhdGl2ZSBwZW9wbGU7IGhlciBmYXRoZXIgaXMgYSBzY3VscHRvciwgaGVyIG1vdGhlciBpcyBhIHBhaW50ZXIsIGFuZCBoZXIgYnJvdGhlciBpcyBhIGZpbG1tYWtlci4gQWZ0ZXIgZ2V0dGluZyBoZXIgQkEgaW4gRW5nbGlzaCwgTGVhaCBiZWdhbiB3cml0aW5nIHNob3J0IHN0b3JpZXMgdGhhdCB3ZXJlIGV2ZW50dWFsbHkgcHVibGlzaGVkIGluIHZhcmlvdXMgYW50aG9sb2dpZXMuIFNoZSB0aGVuIHdlbnQgb24gdG8gd3JpdGUgaGVyIGZpcnN0IG5vdmVsIHdoaWNoIGVhcm5lZCBoZXIgYSBub21pbmF0aW9uIGZvciBhIHByZXN0aWdpb3VzIGxpdGVyYXJ5IGF3YXJkLlxuXG5MZWFoIGhhcyBhIGRlZXAgbG92ZSBmb3IgbGl0ZXJhdHVyZSB0aGF0IGhhcyBiZWVuIGEgcGFydCBvZiBoZXIgbGlmZSBmb3IgYXMgbG9uZyBhcyBzaGUgY2FuIHJlbWVtYmVyLiBTaGUgY29tZXMgZnJvbSBhIGRpdmVyc2UgYmFja2dyb3VuZCBhbmQgbGl2ZXMgaW4gYSB2aWJyYW50IGNpdHksIHdoaWNoIHByb3ZpZGVzIGFuIGV2ZXItY2hhbmdpbmcgc291cmNlIG9mIGluc3BpcmF0aW9uIGZvciBoZXIgd3JpdGluZy4gTGVhaOKAmXMgc3RvcmllcyBvZnRlbiBmb2N1cyBvbiBjaGFyYWN0ZXJzIHdobyBhcmUgc2VhcmNoaW5nIGZvciBhY2NlcHRhbmNlLCB0cnV0aCwgYW5kIG1lYW5pbmcgaW4gYSB3b3JsZCB0aGF0IGlzIG9mdGVuIGNvbmZ1c2luZyBhbmQgdW5wcmVkaWN0YWJsZS4gU2hlIHN0cm9uZ2x5IGJlbGlldmVzIHRoYXQgc3RvcmllcyBjYW4gb3BlbiBvdXIgaGVhcnRzIGFuZCBtaW5kcyB0byBuZXcgcGVyc3BlY3RpdmVzLCBhbmQgdGhhdCB0aGV5IGNhbiBoYXZlIHRoZSBwb3dlciB0byB0cmFuc2Zvcm0gbGl2ZXMgaW4gcmVtYXJrYWJsZSB3YXlzLiIsInByb21wdCI6IldyaXRlIGEgYmFja2dyb3VuZCByb2xlL2JpbyBhYm91dCBhIGZpY3Rpb24gd3JpdGVyOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Persona Berganda yang Dapat Bekerja Bersama

Sebuah anekdot terakhir adalah bahwa Anda dapat menggunakan multiple role prompted LLMs untuk bekerja bersama-sama (@wang2023unleashing). Ini sering kali dapat menghasilkan peningkatan dalam akurasi dan kualitas dari pembuatan teks.

[^a]: Role prompting dikenal juga sebagai *role play*(@shanahan2023roleplay), *role playing*(@li2023camel), atau bahkan disebut *persona pattern*(@white2023prompt).

[^b]: Semua ini cocok untuk *ChatGPT*, tetapi kemungkinan mereka juga bekerja dengan AI lain, dan Anda juga dapat menggunakannya sebagai inspirasi untuk membuat pengingat Anda sendiri. 

