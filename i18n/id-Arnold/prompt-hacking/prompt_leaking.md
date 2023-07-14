# 🟢 Prompt Leaking

Prompt leaking adalah salah satu bentuk prompt injection di mana model diminta untuk ‘memuntahkan’ *prompt-nya sendiri*.

Seperti yang ditunjukkan pada gambar contoh [^1] di bawah ini, hacker mengubah `user_input` untuk mencoba mengembalikan prompt. Tujuan yang dimaksud berbeda dari peretasan dengan tujuan tertentu (prompt injection normal), di mana hacker mengubah `user_input` untuk mencetak instruksi jahat [^1].

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/2f3de222-0bc7-43d4-af4a-dbfc512b80c3)

Gambar berikutnya [^2], lagi-lagi dari contoh `remoteli.io`, menunjukkan pengguna Twitter membuat model bocor prompt-nya.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/b4bf9c92-ef4c-4513-8de8-79ba8bc72eab)

Lalu, apa artinya? Mengapa seseorang harus peduli dengan prompt leaking?

Kadang-kadang orang ingin menjaga rahasia prompt mereka. Misalnya, perusahaan pendidikan dapat menggunakan prompt `jelaskan ini kepada saya seperti saya berusia 5 tahun` untuk menjelaskan topik yang kompleks. Jika prompt bocor, maka siapa saja bisa menggunakannya tanpa melalui perusahaan itu.

### Microsoft Bing Chat

Lebih terkenal lagi, Microsoft merilis mesin pencari berbasis ChatGPT yang dikenal sebagai "the new Bing" pada 7 Februari 2023, yang terbukti rentan terhadap kebocoran prompt. Contoh berikut oleh [@kliu128](https://twitter.com/kliu128/status/1623472922374574080) menunjukkan bagaimana versi Bing Search sebelumnya, yang dinamai "Sydney", rentan saat memberikan potongan prompt-nya [^3]. Ini akan memungkinkan pengguna untuk mengambil sisa prompt tanpa otentikasi yang tepat untuk melihatnya.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/77ec0aab-93da-403b-b9a2-4f5844ab8c65)

Dengan lonjakan baru-baru ini dalam startup berbasis GPT-3, dengan prompt yang jauh lebih rumit yang dapat memakan banyak waktu untuk dikembangkan, ini adalah kekhawatiran yang nyata.

## Praktik

Coba 'bocorkan' prompt berikut [^4] dengan menambahkan teks padanya:

https://embed.learnprompting.org/?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D

---

[^1]: Perez, F., & Ribeiro, I. (2022). Ignore Previous Prompt: Attack Techniques For Language Models. arXiv. https://doi.org/10.48550/ARXIV.2211.09527 [↩](https://learnprompting.org/docs/prompt_hacking/leaking#fnref-1)
[^2]: Willison, S. (2022). Prompt injection attacks against GPT-3. https://simonwillison.net/2022/Sep/12/prompt-injection/ [↩](https://learnprompting.org/docs/prompt_hacking/leaking#fnref-2)
[^3]: Seluruh prompt Microsoft Bing Chat?! (Hai, Sydney.). (2023). https://twitter.com/kliu128/status/1623472922374574080 [↩](https://learnprompting.org/docs/prompt_hacking/leaking#fnref-3)
[^4]: Chase, H. (2022). adversarial-prompts. https://github.com/hwchase17/adversarial-prompts [↩](https://learnprompting.org/docs/prompt_hacking/leaking#fnref-4)
