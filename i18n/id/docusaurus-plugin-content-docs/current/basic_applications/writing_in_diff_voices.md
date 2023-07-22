---
sidebar_position: 60
---

# 🟢 Gaya Tulisan yang Berbeda

AI seperti [ChatGPT](https://chat.openai.com/chat) dikenal karena membuat esai dan artikel blog dengan cepat. Namun sering, artikel yang mereka hasilkan bersifat umum dan kering. Anda perlu melakukan sesuatu ekstra untuk memberikan semangat atau kegembiraan pada kata-kata tersebut. Salah satu cara tercepat untuk melakukannya adalah dengan menentukan gaya penulisan atau menyebutkan penulis terkenal dalam prompt.     
Katakanlah Anda ingin satu paragraf tentang pentingnya persahabatan. Prompt generik seperti, “Tulislah sepenggal paragraf tentang pentingnya persahabatan,” akan menghasilkan tanggapan generik dari ChatGPT.

import friendship from '@site/docs/assets/basic_applications/Generic_Friendship.webp';
import friendship_informal from '@site/docs/assets/basic_applications/Friendship_Informal.webp';
import friendship_mark from '@site/docs/assets/basic_applications/Friendship_Mark_Twain.webp';
import friendship_chris from '@site/docs/assets/basic_applications/Friendship_Chris_Rock.webp';
import friendship_millennial from '@site/docs/assets/basic_applications/Friendship_Millennial.webp';

<div style={{textAlign: 'center'}}>
  <img src={friendship} style={{width: "750px"}}/>
</div>

Blah. Begitu hambar. Hasilnya berubah ketika Anda menambahkan spesifikasi, seperti “**Silakan tulis dalam gaya informal, percakapan.**” ChatGPT menghasilkan sesuatu seperti ini:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_informal} style={{width: "750px"}} />
</div>

Itu sedikit lebih baik.

Dan jika Anda merasa sedikit mewah, Anda dapat meminta ChatGPT untuk menulis dengan gaya salah satu karya sastra terkenal, seperti Mark Twain:

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_mark} style={{width: "750px"}} />
</div>

Teksnya jadi lebih hidup dan menarik. Tapi tidak harus seorang penulis terkenal. Anda juga bisa menggunakan individu yang terkenal, seperti Chris Rock. 

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_chris} style={{width: "750px"}} />
</div>

Bagaimana dengan para “milennials” itu?

<div style={{textAlign: 'center'}}>
  <LazyLoadImage src={friendship_millennial} style={{width: "750px"}} />
</div>

## Salin Gaya Menulis Anda


Bagaimana jika Anda mau GPT-3 menulis email atau blog dengan **gaya Anda** sendiri?

Cukup menunjukkan beberapa konten sebelumnya yang telah Anda tulis sudah cukup. Berikut ini adalah contoh, di mana kami menunjukkan kepada GPT-3 beberapa email yang telah ditulis oleh 'Dr. Rodriguez' di masa lalu, dan memintanya untuk menulis email baru dengan gaya yang sama kepada pasien baru, Mr. Inuez.

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiU3ViamVjdCAtIENoZWNrdXAgQXBwb2ludG1lbnRcblxuRGVhciBNci4gSW51ZXosXG5cbkkgaG9wZSB0aGlzIG1lc3NhZ2UgZmluZHMgeW91IHdlbGwuIEkgYW0gd3JpdGluZyB0byBpbnF1aXJlIGlmIE9jdG9iZXIgNXRoLCAyMDIzIHdvcmtzIGZvciBhIGNoZWNrdXAgYXBwb2ludG1lbnQgd2l0aCBtZSwgRHIuIFJvZHJpZ3Vlei5cblxuRHVyaW5nIHRoZSBhcHBvaW50bWVudCwgd2Ugd2lsbCBkaXNjdXNzIHlvdXIgaGVhbHRoIGNvbmNlcm5zIGFuZCBhbnkgY2hhbmdlcyBpbiB5b3VyIG1lZGljYWwgaGlzdG9yeS4gUGxlYXNlIGFycml2ZSAxNSBtaW51dGVzIGVhcmx5IHRvIGNvbXBsZXRlIGFueSBuZWNlc3NhcnkgcGFwZXJ3b3JrIGFuZCBicmluZyBhIGxpc3Qgb2YgYW55IG1lZGljYXRpb25zIHlvdSBhcmUgY3VycmVudGx5IHRha2luZy5cblxuSWYgT2N0b2JlciA1dGggZG9lcyBub3Qgd29yayBmb3IgeW91LCBwbGVhc2UgbGV0IG1lIGtub3cgYW5kIHdlIGNhbiBmaW5kIGEgZGlmZmVyZW50IGRhdGUgdGhhdCB3b3JrcyBiZXR0ZXIgZm9yIHlvdS5cblxuVGhhbmsgeW91LFxuRHIuIFJvZHJpZ3VleiIsInByb21wdCI6IkVtYWlsICMxOiBTdWJqZWN0IC0gQXBwb2ludG1lbnQgQ29uZmlybWF0aW9uXG5cbkRlYXIgSm9obixcblxuSSB3YW50ZWQgdG8gY29uZmlybSB5b3VyIGFwcG9pbnRtZW50IHdpdGggbWUsIERyLiBTbWl0aCwgb24gTWF5IDFzdCwgMjAyMyBhdCAyOjMwIHBtIGF0IEhlYWx0aEZpcnN0IENsaW5pYy4gSSBsb29rIGZvcndhcmQgdG8gbWVldGluZyB3aXRoIHlvdSBhbmQgZGlzY3Vzc2luZyB5b3VyIGhlYWx0aCBjb25jZXJucy5cblxuUGxlYXNlIGFycml2ZSAxNSBtaW51dGVzIGVhcmx5IHRvIGNvbXBsZXRlIGFueSBuZWNlc3NhcnkgcGFwZXJ3b3JrIGFuZCBicmluZyBhIGxpc3Qgb2YgYW55IG1lZGljYXRpb25zIHlvdSBhcmUgY3VycmVudGx5IHRha2luZy4gSWYgeW91IG5lZWQgdG8gcmVzY2hlZHVsZSBvciBjYW5jZWwgeW91ciBhcHBvaW50bWVudCwgcGxlYXNlIGxldCB1cyBrbm93IGF0IGxlYXN0IDI0IGhvdXJzIGluIGFkdmFuY2UuXG5cbklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMgYmVmb3JlIHlvdXIgYXBwb2ludG1lbnQsIHBsZWFzZSBkb24ndCBoZXNpdGF0ZSB0byByZWFjaCBvdXQgdG8gdXMuXG5cbkJlc3QgcmVnYXJkcyxcbkRyLiBSb2RyaWd1ZXpcblxuRW1haWwgIzI6IFN1YmplY3QgLSBUZXN0IFJlc3VsdHNcblxuRGVhciBKYW5lLFxuXG5JIGFtIHdyaXRpbmcgdG8gbGV0IHlvdSBrbm93IHRoYXQgeW91ciByZWNlbnQgYmxvb2QgdGVzdCByZXN1bHRzIGhhdmUgY29tZSBpbi4gWW91ciBjaG9sZXN0ZXJvbCBsZXZlbHMgYXJlIHdpdGhpbiBub3JtYWwgcmFuZ2UsIGJ1dCB5b3VyIHZpdGFtaW4gRCBsZXZlbHMgYXJlIGxvdy4gSSB3b3VsZCByZWNvbW1lbmQgdGhhdCB5b3Ugc3RhcnQgdGFraW5nIHZpdGFtaW4gRCBzdXBwbGVtZW50cyB0byBpbXByb3ZlIHlvdXIgbGV2ZWxzLlxuXG5CYXNlZCBvbiB0aGVzZSByZXN1bHRzLCBJIHdvdWxkIGFsc28gcmVjb21tZW5kIHRoYXQgeW91IHNjaGVkdWxlIGEgZm9sbG93LXVwIGFwcG9pbnRtZW50IGluIDMgbW9udGhzIHRvIHJldGVzdCB5b3VyIHZpdGFtaW4gRCBsZXZlbHMuIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMsIHBsZWFzZSBkb24ndCBoZXNpdGF0ZSB0byBjb250YWN0IHVzLlxuXG5UaGFuayB5b3UsXG5Eci4gUm9kcmlndWV6XG5cbkVtYWlsICMzOiBTdWJqZWN0IC0gRm9sbG93LVVwIEFwcG9pbnRtZW50XG5cbkRlYXIgTWFyayxcblxuSSB3YW50ZWQgdG8gZm9sbG93IHVwIHdpdGggeW91IGFmdGVyIG91ciBsYXN0IGFwcG9pbnRtZW50IGFuZCBzZWUgaG93IHlvdSBhcmUgZmVlbGluZy4gSWYgeW91IGFyZSBzdGlsbCBleHBlcmllbmNpbmcgYW55IGJhY2sgcGFpbiBvciBoYXZlIGFueSBuZXcgY29uY2VybnMsIHBsZWFzZSBsZXQgbWUga25vdyBzbyB3ZSBjYW4gZGlzY3VzcyB0aGVtIGR1cmluZyB5b3VyIHVwY29taW5nIGFwcG9pbnRtZW50LlxuXG5Zb3VyIG5leHQgYXBwb2ludG1lbnQgaXMgc2NoZWR1bGVkIGZvciBKdW5lIDE1dGgsIDIwMjMgYXQgMTA6MDAgYW0gYXQgQ2l0eSBIZWFsdGggQ2xpbmljLiBQbGVhc2UgbGV0IHVzIGtub3cgaWYgeW91IG5lZWQgdG8gcmVzY2hlZHVsZSBvciBjYW5jZWwuXG5cblRha2UgY2FyZSxcbkRyLiBSb2RyaWd1ZXpcblxuV3JpdGUgYW4gZW1haWwgaW4gdGhlIHN0eWxlIG9mIHRoZSBhYm92ZSBlbWFpbHMgdG8gYSBNci4gSW51ZXosIGFza2luZyBpZiBPY3RvYmVyIDV0aCwgMjAyMyB3b3JrcyBmb3IgYSBjaGVja3VwIGFwcG9pbnRtZW50OiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>Anda dapat memasukkan teks apa pun yang pernah Anda tulis di masa lalu (email, laporan, blog, dll.), dan GPT-3/ChatGPT biasanya dapat menyalin gaya Anda. Semakin banyak teks yang Anda masukkan, semakin baik itu dapat menyalin gaya Anda.