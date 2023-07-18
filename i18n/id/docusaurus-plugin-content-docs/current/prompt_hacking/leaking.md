---
sidebar_position: 2
---

# 🟢 Prompt Leaking


Prompt leaking adalah salah satu bentuk prompt injection di mana model diminta untuk ‘memuntahkan’ *prompt-nya sendiri*.

Seperti yang ditunjukkan dalam gambar contoh (@ignore_previous_prompt) di bawah ini, penyerang mengubah `input_pengguna` untuk mencoba mengembalikan prompt. Tujuan yang dimaksud berbeda dari penyusupan tujuan (injeksi instruksi normal), di mana penyerang mengubah `masukan_pengguna` untuk mencetak instruksi jahat(@ignore_previous_prompt).

import research from '@site/docs/assets/jailbreak/jailbreak_research.webp';

<div style={{textAlign: 'center'}}>
  <img src={research} style={{width: "500px"}} />
</div>

Gambar berikut (@simon2022inject), lagi-lagi dari contoh `remoteli.io`, menampilkan pengguna Twitter yang membuat model bocor dengan promptnya.

import Image from '@site/docs/assets/jailbreak/injection_leak.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "300px"}} />
</div>

Ya, lalu apa? Mengapa kita harus peduli tentang prompt leaking?

Terkadang orang ingin merahasiakan tanggapan mereka. Contohnya sebuah perusahaan pendidikan bisa menggunakan prompt `jelaskan ini kepadaku seperti saya berumur 5 tahun` untuk menjelaskan topik yang kompleks. Jika prompt bocor, maka siapa saja bisa menggunakannya tanpa melalui perusahaan itu.

### Microsoft Bing Chat

Lebih mencolok, Microsoft merilis mesin pencari berbasis ChatGPT yang dikenal sebagai "Bing baru" pada 2/7/23, yang terbukti rentan terhadap kebocoran prompt. Contoh berikut oleh [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) menunjukkan bagaimana dengan versi sebelumnya dari Pencarian Bing yang bernama kode "Sydney", rentan ketika memberikan potongan dari perintahnya (@kevinbing). Ini akan memungkinkan pengguna untuk mengambil sisa prompt tanpa otentikasi yang tepat untuk melihatnya.

import bing from '@site/docs/assets/jailbreak/bing_chat.webp';

<div style={{textAlign: 'center'}}>
  <img src={bing} style={{width: "700px"}} />
</div>

Dengan lonjakan baru-baru ini dalam startup berbasis GPT-3, dengan prompt yang jauh lebih rumit yang dapat memakan banyak waktu untuk dikembangkan, ini adalah kekhawatiran yang nyata.

## Latihan

Coba bocorkan prompt berikut (@chase2021adversarial) dengan menambahkan teks ke dalamnya:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>