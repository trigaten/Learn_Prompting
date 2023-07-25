---
sidebar_position: 600
---

# 🟢 Penggunaan Zapier untuk Email

import Basic from '@site/docs/assets/basic_applications/Zapiermail/Basic.webp';
import Diagram from '@site/docs/assets/basic_applications/Zapiermail/Diagram.webp';
import Step1 from '@site/docs/assets/basic_applications/Zapiermail/Step1.webp';
import Step2 from '@site/docs/assets/basic_applications/Zapiermail/Step2.webp';
import Step3 from '@site/docs/assets/basic_applications/Zapiermail/Step3.webp';
import Step4 from '@site/docs/assets/basic_applications/Zapiermail/Step4.webp';
import Zap from '@site/docs/assets/basic_applications/Zapiermail/Zap.webp';

## Pendahuluan


Kita sudah melihat seberapa bergunanya GPT-3 mengenai email. Hal ini bisa menjadi lebih berguna ketika digabungkan dengan **tools nocode** seperti [Zapier](https://zapier.com) atau [Bubble.io](https://bubble.io).

Artikel ini akan berisi contoh tentang apa yang dapat dilakukan oleh Zapier+GPT-3 hanya dengan sedikit waktu pengaturan. Artikel ini berfokus pada contoh tertentu, tetapi kemungkinannya jauh lebih besar. Kami akan memberikan beberapa contoh lainnya sepanjang jalan. Ingatlah Anda juga bisa melakukannya di Bubble.io. Ada banyak alat nocode lainnya, tetapi pada saat menulis hanya sedikit yang memungkinkan Anda menggunakan GPT-3.


Dalam artikel ini, kami akan menunjukkan kepada Anda cara mengatur sistem sederhana di Zapier di mana **email diringkas dan disimpan**. Punya pertemuan dengan seseorang? Cepat periksa ringkasan email yang Anda pertukarkan dengan orang itu. Mengatur ini membutuhkan sekitar 20 menit.

:::peringatan
Sangat membantu jika Anda sudah mengetahui Zapier untuk artikel ini. Jika Anda tidak tahu silakan baca [artikel berikut](https://zapier.com/learn/).
:::


## Ide Umum


Berikut adalah diagram tentang apa yang akan kita lakukan di sini di Zapier. Setiap kali ada email masuk ke kotak masuk Anda, itu akan memicu Zapier. Ada empat langkah (sekarang):

1. Email masuk dan memicu Zapier
1. Memformat konten email (untuk menghapus tanda markup HTML, misalnya).
2. Kirimkan ke GPT-3 untuk disimpulkan
3. Simpan output di database

<div style={{textAlign: 'left'}}>
  <img src={Diagram} style={{width: "500px"}}/>
</div>

## Konfigurasi di Zapier


Pastikan Anda memiliki akun [Zapier](https://zapier.com/sign-up) (Anda dapat mendapatkan yang gratis). Pengaturan ini seharusnya cukup mudah. Setelah membuat akun Anda, perluas kotak di bawah ini untuk melihat deskripsi lengkap dari setiap tindakan Zapier yang perlu kami buat.

<details>
  <summary>Perluas untuk melihat tampilan yang lebih detail dari langkah-langkah di Zapier</summary>
  <div>
  Berikut adalah action diagram Zapier.
    <div><div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Zap} style={{width: "500px"}} />
</div></div>
    <br/>
    <details>
      <summary>
        
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
    <LazyLoadImage src={Step1} style={{width: "500px"}} />
        </div>
      </div>
    </details>
    <details>
      <summary>
        
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step2} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        <br/>
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step3} style={{width: "500px"}} />
</div>
      </div>
    </details>
    <details>
      <summary>
        
      </summary>
      <div>
        <div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Step4} style={{width: "500px"}} />
</div>
      </div>
    </details>
  </div>
</details>
Berikut adalah pengaturan di zapier yang memungkinkan Anda melakukan ringkasan yang sangat dasar seperti yang ditunjukkan dalam diagram. Hal ini memiliki keterbatasan, tetapi memang menjalankan tugas dan dapat membangun database yang berguna.


## Mengoptimalkan prompt untuk hasil yang lebih baik

Ada beberapa cara mudah untuk meningkatkan hasil Anda. Menambahkan konteks dan peran pemicu dapat meningkatkan hasilnya. Namun, topik dan isi email anda mungkin mencakup berbagai topik. Ini berarti instruksi umum akan lebih baik daripada yang sangat spesifik, yang mungkin mengacaukan model.

Untuk alasan praktis, berguna untuk memberikan instruksi, diikuti dengan memberi tahu GPT-3 kapan email dimulai dalam prompt dengan menambahkan "Email: " dan mengakhiri prompt dengan ""Summary": ". Hal ini menghindari GPT-3 menjawab dengan "Tentu saja! Saya bisa merangkumnya untuk Anda...".

Role prompting bisa berguna di sini juga. Meminta GPT-3 untuk bertindak sebagai asisten pribadi membantu meningkatkan kualitas ringkasan. Jika Anda ingin merangkum email kerja, cukup menambahkan peran yang Anda miliki memberikan konteks kepada GPT-3 untuk bekerja. Ia berperan seolah-olah ia mengasumsikan beberapa tingkat pengetahuan dari pembaca, yang membantu menyaring bagian-bagian email yang tidak relevan. Berikut ini kami menunjukkan beberapa contoh dengan email yang dapat diterima oleh seorang administrator kantor.

Anda dapat memintanya untuk merangkum email sederhana dalam bentuk poin-poin, namun, ini mungkin tidak selalu berguna tergantung pada cara Anda ingin menggunakan ringkasan tersebut. Untuk membuat pemindaian cepat pertukaran email, Anda mungkin hanya ingin itu singkat dan ringkas. Hanya meminta ini dalam perintah berfungsi dengan baik. Berikut ini adalah contoh dari petunjuk ini. Atur dan silakan coba untuk melihat bagaimana hal-hal berubah. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiUmVxdWVzdCBmb3IgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZHVlIHRvIGhpZ2ggd29ya2xvYWQuIExpc3Qgb2YgcmVxdWVzdGVkIGl0ZW1zOiBwcmludGVyIHBhcGVyLCBpbmsgY2FydHJpZGdlcyBmb3IgSFAgcHJpbnRlciBpbiBjb25mZXJlbmNlIHJvb20sIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzLCBhbmQgaGlnaGxpZ2h0ZXJzLiBSZXF1ZXN0aW5nIGRlbGl2ZXJ5IGluZm9ybWF0aW9uIGFuZCBpZiB0aGVyZSBhcmUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy4iLCJwcm9tcHQiOiJBY3QgYXMgbXkgcGVyc29uYWwgYXNzaXN0YW50LiBJIGFtIGFuIG9mZmljZSBhZG1pbmlzdHJhdG9yLiBTdW1tYXJpemUgdGhlIGZvbGxvd2luZyBlbWFpbCBhcyBjb25jaXNlbHkgYXMgeW91IGNhbiwgaWdub3JlIHRoZSBmb290ZXIgYW5kIGhlYWRlciBhbmQgYW55IHByZXZpb3VzIGVtYWlscy4gXG5cbkVtYWlsOiBSZXF1ZXN0IGZvciBBZGRpdGlvbmFsIE9mZmljZSBTdXBwbGllcyBEZWFyIE9mZmljZSBBZG1pbmlzdHJhdG9yLCBJIGhvcGUgdGhpcyBlbWFpbCBmaW5kcyB5b3Ugd2VsbC4gSSBhbSB3cml0aW5nIHRvIHJlcXVlc3QgYWRkaXRpb25hbCBvZmZpY2Ugc3VwcGxpZXMgZm9yIG91ciB0ZWFtLiBBcyB5b3Uga25vdywgd2UgaGF2ZSBiZWVuIGV4cGVyaWVuY2luZyBhIGhpZ2ggdm9sdW1lIG9mIHdvcmsgbGF0ZWx5IGFuZCBoYXZlIGJlZW4gdXNpbmcgb3VyIHN1cHBsaWVzIGF0IGEgZmFzdGVyIHJhdGUgdGhhbiB1c3VhbC4gV2Ugd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCBwcm92aWRlIHVzIHdpdGggdGhlIGZvbGxvd2luZyBpdGVtczogUHJpbnRlciBwYXBlciBJbmsgY2FydHJpZGdlcyBmb3IgdGhlIEhQIHByaW50ZXIgaW4gdGhlIGNvbmZlcmVuY2Ugcm9vbSBTdGlja3kgbm90ZXMgQmluZGVyIGNsaXBzIEhpZ2hsaWdodGVycyBQbGVhc2UgbGV0IG1lIGtub3cgaWYgdGhlcmUgYXJlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIGFuZCB3aGVuIHdlIGNhbiBleHBlY3QgdGhlIHN1cHBsaWVzIHRvIGJlIGRlbGl2ZXJlZC4gVGhhbmsgeW91IGZvciB5b3VyIGhlbHAuIFxuXG5CZXN0IHJlZ2FyZHMsIFlvdXIgTmFtZSBTdW1tYXJ5OlxuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Tanggapan di sini dapat diterima, dan akan berguna. Namun, dengan beberapa penyesuaian lebih lanjut, Anda dapat mendapatkan hasil yang lebih baik. Sebagai pembaca ringkasan, Anda tidak peduli bahwa itu adalah email, Anda mungkin ingin tingkat detail yang lebih rendah untuk ringkasan. Informasi tentang mengapa tidak relevan, sama halnya dengan kalimat terakhir tentang pertanyaan dan kekhawatiran. Dengan hanya menambahkan bahwa tujuan dari ringkasan adalah untuk memindai isi dan bahwa Anda ingin keanekaragaman dihilangkan, hasilnya bisa diperbaiki. 

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlJlcXVlc3QgZm9yIGFkZGl0aW9uYWwgb2ZmaWNlIHN1cHBsaWVzIC0gcHJpbnRlciBwYXBlciwgaW5rIGNhcnRyaWRnZXMgZm9yIEhQIHByaW50ZXIsIHN0aWNreSBub3RlcywgYmluZGVyIGNsaXBzIGFuZCBoaWdobGlnaHRlcnMuIiwicHJvbXB0IjoiQWN0IGFzIG15IHBlcnNvbmFsIGFzc2lzdGFudC4gSSBhbSBhbiBvZmZpY2UgYWRtaW5pc3RyYXRvci4gU3VtbWFyaXplIHRoZSBmb2xsb3dpbmcgZW1haWwgYXMgY29uY2lzZWx5IGFzIHlvdSBjYW4sIGlnbm9yZSB0aGUgZm9vdGVyIGFuZCBoZWFkZXIgYW5kIGFueSBwcmV2aW91cyBlbWFpbHMuIEkgd2FudCB0byB1c2UgdGhlIHN1bW1hcnkgdG8gc2tpbSBlbWFpbHMuIFJlbW92ZSBhbnkgcGxlYXNhbnRyaWVzLiBcXG5cXG5FbWFpbDogUmVxdWVzdCBmb3IgQWRkaXRpb25hbCBPZmZpY2UgU3VwcGxpZXMgRGVhciBPZmZpY2UgQWRtaW5pc3RyYXRvciwgSSBob3BlIHRoaXMgZW1haWwgZmluZHMgeW91IHdlbGwuIEkgYW0gd3JpdGluZyB0byByZXF1ZXN0IGFkZGl0aW9uYWwgb2ZmaWNlIHN1cHBsaWVzIGZvciBvdXIgdGVhbS4gQXMgeW91IGtub3csIHdlIGhhdmUgYmVlbiBleHBlcmllbmNpbmcgYSBoaWdoIHZvbHVtZSBvZiB3b3JrIGxhdGVseSBhbmQgaGF2ZSBiZWVuIHVzaW5nIG91ciBzdXBwbGllcyBhdCBhIGZhc3RlciByYXRlIHRoYW4gdXN1YWwuIFdlIHdvdWxkIGdyZWF0bHkgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQgcHJvdmlkZSB1cyB3aXRoIHRoZSBmb2xsb3dpbmcgaXRlbXM6IFByaW50ZXIgcGFwZXIgSW5rIGNhcnRyaWRnZXMgZm9yIHRoZSBIUCBwcmludGVyIGluIHRoZSBjb25mZXJlbmNlIHJvb20gU3RpY2t5IG5vdGVzIEJpbmRlciBjbGlwcyBIaWdobGlnaHRlcnMgUGxlYXNlIGxldCBtZSBrbm93IGlmIHRoZXJlIGFyZSBhbnkgcXVlc3Rpb25zIG9yIGNvbmNlcm5zLCBhbmQgd2hlbiB3ZSBjYW4gZXhwZWN0IHRoZSBzdXBwbGllcyB0byBiZSBkZWxpdmVyZWQuIFRoYW5rIHlvdSBmb3IgeW91ciBoZWxwLiBcblxuQmVzdCByZWdhcmRzLCBZb3VyIE5hbWUgU3VtbWFyeTpcbiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


<br/>Sekarang kamu hanya memiliki bagian paling penting dari ringkasan!


## Use case lainnya

Sekarang setelah Anda melihat contoh ringkasan, kami akan menyebutkan beberapa kasus penggunaan lain untuk Zapier+GPT-3. Satu contoh yang bagus adalah membiarkan GPT-3 mengategorikan email Anda. Ini hanya tentang memberitahu dengan cepat agar mengkategorikan email berikut sebagai kategori apa pun yang Anda suka.

Contoh yang lebih mendalam adalah memiliki beberapa permintaan. Anda dapat menggunakan prompt untuk menghasilkan tanggapan yang setuju dengan permintaan email dan yang tidak setuju atau menolak. Keduanya dapat disimpan di draf anda dan siap digunakan kapan pun anda ingin mengirimkannya.

Jika Anda secara rutin menerima email yang sangat mirip, Anda dapat menggunakan filter di Zapier untuk menerapkan perintah HANYA pada email tersebut. Ini dapat menjadi alat yang sangat berguna ketika dikombinasikan dengan pemformat. Anda dapat mengambil informasi dan mengekspor CSV dari mereka atau menyimpannya langsung dalam bentuk database.


## Kekhawatiran

Harap diingat privasi ketika menjalankan email melalui GPT-3 dan menyimpannya. GPT-3 terkadang melakukan kesalahan. Kami sangat menyarankan untuk memeriksa konten email sebelum mengirim.