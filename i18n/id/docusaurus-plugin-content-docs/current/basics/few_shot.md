---
sidebar_position: 4
---

# 🟢 Few shot prompting

import FewShot from '@site/docs/assets/basics/few_shot.svg';

<div style={{textAlign: 'center'}}>
  <FewShot style={{width:"100%",height:"200px",verticalAlign:"top"}}/>
</div>

Strategi prompting lain adalah *few shot prompting*(@logan-iv-etal-2022-cutting)(@lake2015human), yang pada dasarnya hanya menunjukkan model beberapa contoh (yang disebut tembakan) tentang apa yang Anda inginkannya.

Pertimbangkan contoh di atas, di mana kita mencoba mengklasifikasikan umpan balik pelanggan sebagai positif atau negatif. Kami menampilkan model 3 contoh umpan balik positif/negatif, lalu kami menunjukkan umpan balik baru yang belum diklasifikasikan (`It doesnt work!:`). Model melihat bahwa 3 contoh pertama diklasifikasikan sebagai `positif` atau `negatif`, dan menggunakan informasi ini untuk mengklasifikasikan contoh baru sebagai `negatif`.

Cara kita mengatur contoh-contoh tersebut sangat penting. Karena kita telah melakukan strukturisasi 3 contoh ini sebagai `input: klasifikasi`, model menghasilkan satu kata setelah baris terakhir, bukan mengatakan kalimat lengkap seperti `ulasan ini positif`. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Im5lZ2F0aXZlIiwicHJvbXB0IjoiR3JlYXQgcHJvZHVjdCwgMTAvMTA6IHBvc2l0aXZlXG5EaWRuJ3Qgd29yayB2ZXJ5IHdlbGw6IG5lZ2F0aXZlXG5TdXBlciBoZWxwZnVsLCB3b3J0aCBpdDogcG9zaXRpdmVcbkl0IGRvZXNudCB3b3JrIToiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"350px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>

:::note
Setiap pasangan input-output disebut dengan *exemplar*.
:::

## Lebih lanjut tentang struktur

Use case kunci untuk few shot prompting adalah ketika Anda memerlukan output yang **terstruktur dengan cara tertentu** yang sulit dijelaskan pada model. Untuk memahami ini, mari kita pertimbangkan contoh yang relevan: katakanlah Anda perlu mengumpulkan nama dan pekerjaan warga terkenal di kota sekitarnya dengan menganalisis artikel surat kabar lokal. Anda ingin model membaca setiap artikel dan mengeluarkan daftar nama dan pekerjaan dalam `Pertama Terakhir [OCCUPATION]` format. Untuk mendapatkan model ini untuk melakukan hal ini, Anda dapat menunjukkan beberapa contoh padanya:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IjEuIExhdXJhIFNpbW1vbnMgW0ZBUk1FUl1cbjIuIEtldmluIEFsdmFyZXogW0RBTkNFIElOU1RSVUNUT1JdXG4zLiBSYWNoZWwgTydDb25ub3IgW1ZPTFVOVEVFUl0iLCJwcm9tcHQiOiJJbiB0aGUgYnVzdGxpbmcgdG93biBvZiBFbWVyYWxkIEhpbGxzLCBhIGRpdmVyc2UgZ3JvdXAgb2YgaW5kaXZpZHVhbHMgbWFkZSB0aGVpciBtYXJrLiBTYXJhaCBNYXJ0aW5leiwgYSBkZWRpY2F0ZWQgbnVyc2UsIHdhcyBrbm93biBmb3IgaGVyIGNvbXBhc3Npb25hdGUgY2FyZSBhdCB0aGUgbG9jYWwgaG9zcGl0YWwuIERhdmlkIFRob21wc29uLCBhbiBpbm5vdmF0aXZlIHNvZnR3YXJlIGVuZ2luZWVyLCB3b3JrZWQgdGlyZWxlc3NseSBvbiBncm91bmRicmVha2luZyBwcm9qZWN0cyB0aGF0IHdvdWxkIHJldm9sdXRpb25pemUgdGhlIHRlY2ggaW5kdXN0cnkuIE1lYW53aGlsZSwgRW1pbHkgTmFrYW11cmEsIGEgdGFsZW50ZWQgYXJ0aXN0IGFuZCBtdXJhbGlzdCwgcGFpbnRlZCB2aWJyYW50IGFuZCB0aG91Z2h0LXByb3Zva2luZyBwaWVjZXMgdGhhdCBhZG9ybmVkIHRoZSB3YWxscyBvZiBidWlsZGluZ3MgYW5kIGdhbGxlcmllcyBhbGlrZS4gTGFzdGx5LCBNaWNoYWVsIE8nQ29ubmVsbCwgYW4gYW1iaXRpb3VzIGVudHJlcHJlbmV1ciwgb3BlbmVkIGEgdW5pcXVlLCBlY28tZnJpZW5kbHkgY2FmZSB0aGF0IHF1aWNrbHkgYmVjYW1lIHRoZSB0b3duJ3MgZmF2b3JpdGUgbWVldGluZyBzcG90LiBFYWNoIG9mIHRoZXNlIGluZGl2aWR1YWxzIGNvbnRyaWJ1dGVkIHRvIHRoZSByaWNoIHRhcGVzdHJ5IG9mIHRoZSBFbWVyYWxkIEhpbGxzIGNvbW11bml0eS5cbjEuIFNhcmFoIE1hcnRpbmV6IFtOVVJTRV1cbjIuIERhdmlkIFRob21wc29uIFtTT0ZUV0FSRSBFTkdJTkVFUl1cbjMuIEVtaWx5IE5ha2FtdXJhIFtBUlRJU1RdXG40LiBNaWNoYWVsIE8nQ29ubmVsbCBbRU5UUkVQUkVORVVSXVxuXG5BdCB0aGUgaGVhcnQgb2YgdGhlIHRvd24sIENoZWYgT2xpdmVyIEhhbWlsdG9uIGhhcyB0cmFuc2Zvcm1lZCB0aGUgY3VsaW5hcnkgc2NlbmUgd2l0aCBoaXMgZmFybS10by10YWJsZSByZXN0YXVyYW50LCBHcmVlbiBQbGF0ZS4gT2xpdmVyJ3MgZGVkaWNhdGlvbiB0byBzb3VyY2luZyBsb2NhbCwgb3JnYW5pYyBpbmdyZWRpZW50cyBoYXMgZWFybmVkIHRoZSBlc3RhYmxpc2htZW50IHJhdmUgcmV2aWV3cyBmcm9tIGZvb2QgY3JpdGljcyBhbmQgbG9jYWxzIGFsaWtlLlxuXG5KdXN0IGRvd24gdGhlIHN0cmVldCwgeW91J2xsIGZpbmQgdGhlIFJpdmVyc2lkZSBHcm92ZSBMaWJyYXJ5LCB3aGVyZSBoZWFkIGxpYnJhcmlhbiBFbGl6YWJldGggQ2hlbiBoYXMgd29ya2VkIGRpbGlnZW50bHkgdG8gY3JlYXRlIGEgd2VsY29taW5nIGFuZCBpbmNsdXNpdmUgc3BhY2UgZm9yIGFsbC4gSGVyIGVmZm9ydHMgdG8gZXhwYW5kIHRoZSBsaWJyYXJ5J3Mgb2ZmZXJpbmdzIGFuZCBlc3RhYmxpc2ggcmVhZGluZyBwcm9ncmFtcyBmb3IgY2hpbGRyZW4gaGF2ZSBoYWQgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gdGhlIHRvd24ncyBsaXRlcmFjeSByYXRlcy5cblxuQXMgeW91IHN0cm9sbCB0aHJvdWdoIHRoZSBjaGFybWluZyB0b3duIHNxdWFyZSwgeW91J2xsIGJlIGNhcHRpdmF0ZWQgYnkgdGhlIGJlYXV0aWZ1bCBtdXJhbHMgYWRvcm5pbmcgdGhlIHdhbGxzLiBUaGVzZSBtYXN0ZXJwaWVjZXMgYXJlIHRoZSB3b3JrIG9mIHJlbm93bmVkIGFydGlzdCwgSXNhYmVsbGEgVG9ycmVzLCB3aG9zZSB0YWxlbnQgZm9yIGNhcHR1cmluZyB0aGUgZXNzZW5jZSBvZiBSaXZlcnNpZGUgR3JvdmUgaGFzIGJyb3VnaHQgdGhlIHRvd24gdG8gbGlmZS5cblxuUml2ZXJzaWRlIEdyb3ZlJ3MgYXRobGV0aWMgYWNoaWV2ZW1lbnRzIGFyZSBhbHNvIHdvcnRoIG5vdGluZywgdGhhbmtzIHRvIGZvcm1lciBPbHltcGljIHN3aW1tZXItdHVybmVkLWNvYWNoLCBNYXJjdXMgSmVua2lucy4gTWFyY3VzIGhhcyB1c2VkIGhpcyBleHBlcmllbmNlIGFuZCBwYXNzaW9uIHRvIHRyYWluIHRoZSB0b3duJ3MgeW91dGgsIGxlYWRpbmcgdGhlIFJpdmVyc2lkZSBHcm92ZSBTd2ltIFRlYW0gdG8gc2V2ZXJhbCByZWdpb25hbCBjaGFtcGlvbnNoaXBzLlxuMS4gT2xpdmVyIEhhbWlsdG9uIFtDSEVGXVxuMi4gRWxpemFiZXRoIENoZW4gW0xJQlJBUklBTl1cbjMuIElzYWJlbGxhIFRvcnJlcyBbQVJUSVNUXVxuNC4gTWFyY3VzIEplbmtpbnMgW0NPQUNIXVxuXG5PYWsgVmFsbGV5LCBhIGNoYXJtaW5nIHNtYWxsIHRvd24sIGlzIGhvbWUgdG8gYSByZW1hcmthYmxlIHRyaW8gb2YgaW5kaXZpZHVhbHMgd2hvc2Ugc2tpbGxzIGFuZCBkZWRpY2F0aW9uIGhhdmUgbGVmdCBhIGxhc3RpbmcgaW1wYWN0IG9uIHRoZSBjb21tdW5pdHkuXG5cbkF0IHRoZSB0b3duJ3MgYnVzdGxpbmcgZmFybWVyJ3MgbWFya2V0LCB5b3UnbGwgZmluZCBMYXVyYSBTaW1tb25zLCBhIHBhc3Npb25hdGUgb3JnYW5pYyBmYXJtZXIga25vd24gZm9yIGhlciBkZWxpY2lvdXMgYW5kIHN1c3RhaW5hYmx5IGdyb3duIHByb2R1Y2UuIEhlciBkZWRpY2F0aW9uIHRvIHByb21vdGluZyBoZWFsdGh5IGVhdGluZyBoYXMgaW5zcGlyZWQgdGhlIHRvd24gdG8gZW1icmFjZSBhIG1vcmUgZWNvLWNvbnNjaW91cyBsaWZlc3R5bGUuXG5cbkluIE9hayBWYWxsZXkncyBjb21tdW5pdHkgY2VudGVyLCBLZXZpbiBBbHZhcmV6LCBhIHNraWxsZWQgZGFuY2UgaW5zdHJ1Y3RvciwgaGFzIGJyb3VnaHQgdGhlIGpveSBvZiBtb3ZlbWVudCB0byBwZW9wbGUgb2YgYWxsIGFnZXMuIEhpcyBpbmNsdXNpdmUgZGFuY2UgY2xhc3NlcyBoYXZlIGZvc3RlcmVkIGEgc2Vuc2Ugb2YgdW5pdHkgYW5kIHNlbGYtZXhwcmVzc2lvbiBhbW9uZyByZXNpZGVudHMsIGVucmljaGluZyB0aGUgbG9jYWwgYXJ0cyBzY2VuZS5cblxuTGFzdGx5LCBSYWNoZWwgTydDb25ub3IsIGEgdGlyZWxlc3Mgdm9sdW50ZWVyLCBkZWRpY2F0ZXMgaGVyIHRpbWUgdG8gdmFyaW91cyBjaGFyaXRhYmxlIGluaXRpYXRpdmVzLiBIZXIgY29tbWl0bWVudCB0byBpbXByb3ZpbmcgdGhlIGxpdmVzIG9mIG90aGVycyBoYXMgYmVlbiBpbnN0cnVtZW50YWwgaW4gY3JlYXRpbmcgYSBzdHJvbmcgc2Vuc2Ugb2YgY29tbXVuaXR5IHdpdGhpbiBPYWsgVmFsbGV5LlxuXG5UaHJvdWdoIHRoZWlyIHVuaXF1ZSB0YWxlbnRzIGFuZCB1bndhdmVyaW5nIGRlZGljYXRpb24sIExhdXJhLCBLZXZpbiwgYW5kIFJhY2hlbCBoYXZlIHdvdmVuIHRoZW1zZWx2ZXMgaW50byB0aGUgZmFicmljIG9mIE9hayBWYWxsZXksIGhlbHBpbmcgdG8gY3JlYXRlIGEgdmlicmFudCBhbmQgdGhyaXZpbmcgc21hbGwgdG93bi4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Dengan menunjukkan contoh model format output yang benar, ia dapat menghasilkan output yang benar untuk artikel baru.

:::catatan
Meskipun Anda dapat menghasilkan output yang sama dengan menggunakan perintah instruksi, prompt few shot membantu output menjadi lebih *konsisten*.
:::

## Variasi shot prompting

Kata "shot" bermakna sama dengan "contoh". Selain few-shot prompting ada dua jenis shot prompt lainnya yang ada. Jangan terlalu memikirkan ini! Satu-satunya perbedaan antara varian ini adalah berapa banyak contoh yang Anda tunjukkan pada model.

Varian:
- 0 shot prompting: tidak ada contoh yang ditampilkan kepada model
- 1 shot prompting: 1 contoh yang ditampilkan kepada model
- few shot prompting: 2 contoh lebih yang ditampilkan kepada model

### 0-shot prompting

0-shot adalah bentuk prompting paling dasar. Ia hanya menunjukkan model sebuah prompt tanpa contoh dan meminta model untuk menghasilkan sebuah respons. Oleh karena itu, semua instruksi dan petunjuk peran yang telah Anda lihat sejauh ini adalah prompt 0-shot. Sebuah contoh tambahan dari satu 0-shot prompt adalah:

```text
Tambahkan 2+2:
```

Ini adalah 0-shot karena kita belum menunjukkan model kepada model contoh lengkap apapun.

### 1-shot prompting

1-shot prompting adalah ketika Anda menampilkan satu contoh pada model. Sebagai contoh, analogi 1-shot dari prompt 0-shot `Tambahkan 2+2:` adalah:

```text
Tambahkan 3+3: 6
Tambahkan 2+2:
```

Kita hanya menunjukkan model 1 contoh lengkap (`Tambah 3+3: 6`), jadi ini adalah satu-satunya perintah.

### Few-shot prompting

Few-shot prompting adalah ketika Anda menunjukkan model 2 atau lebih contoh. Semua prompt di atas bagian variasi ini telah menggunakan metode few-shot prompt. Analogi few-shot dari dua prompt di atas adalah:

```text
Tambahkan 3+3: 6
Tambahkan 5+5: 10
Tambahkan 2+2:
```

Pada kasus ini, kita telah menunjukkan model setidaknya 2 contoh lengkap (`Tambahkan 3+3: 6` dan `Tambahkan 5+5: 10`). Biasanya, semakin banyak contoh yang Anda tunjukkan pada model, hasilnya akan menjadi lebih baik, oleh karena itu, penggunaan metode beberapa contoh lebih disukai dibandingkan dengan metode 0-shot dan 1-shot dalam kebanyakan kasus.

## Kesimpulan

Few-shot prompting adalah teknik yang powerful untuk membuat model menghasilkan output yang akurat dan terformat dengan baik!

 