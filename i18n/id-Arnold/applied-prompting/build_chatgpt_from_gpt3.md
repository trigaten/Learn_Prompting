# 🟢 Membuat ChatGPT dari GPT-3

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/f5feb26f-66fc-435f-a5c3-39ab391ff45a)


## Pendahuluan

[ChatGPT](https://chat.openai.com/chat) telah menjadi populer dalam beberapa bulan terakhir, dengan mendapatkan sejuta pengguna hanya dalam seminggu. Hal yang mengejutkan bahwa model dasarnya, GPT-3 memiliki debut pada tahun 2020 dan dirilis untuk akses publik [lebih dari setahun yang lalu!](https://openai.com/blog/api-no-waitlist/)

Bagi yang tidak tahu, ChatGPT adalah model bahasa baru dari OpenAI yang disempurnakan dari GPT-3 untuk dioptimalkan untuk percakapan[^1]. Ia memiliki antarmuka obrolan yang ramah pengguna (user-friendly), di mana Anda dapat memberikan masukan dan mendapatkan respons dari asisten AI. Cek di [chat.openai.com](https://chat.openai.com/chat).

Meskipun versi awal GPT-3 tidak sebaik seri GPT-3.5 saat ini, tetap saja versi GPT-3 cukup mengesankan. Model-model ini telah tersedia melalui API dan [antarmuka web UI playground](https://beta.openai.com/playground) yang memungkinkan Anda menyetel beberapa hyperparameter konfigurasi dan menguji prompt. GPT-3 mendapatkan daya tarik yang signifikan, tetapi tidak se-viral ChatGPT.

Apa yang membuat ChatGPT begitu sukses dibandingkan dengan GPT-3 adalah aksesibilitasnya sebagai asisten AI yang mudah dipahami untuk orang biasa, terlepas dari pengetahuan mereka tentang ilmu data, model bahasa, atau AI.

Dalam artikel ini, saya akan menjelaskan bagaimana chatbot seperti ChatGPT dapat diimplementasikan menggunakan model bahasa besar seperti GPT-3.

## Motivasi

Artikel ini ditulis sebagian karena tweet oleh [Riley Goodside](https://twitter.com/goodside), yang mencatat bagaimana ChatGPT dapat diimplementasikan.

> How to make your own knock-off ChatGPT using GPT‑3 (text‑davinci‑003) — where you can customize the rules to your needs, and access the resulting chatbot over an API. pic.twitter.com/9jHrs91VHW
> 
> 
> — Riley Goodside (@goodside) [26 Desember 2022](https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw)
> 

Seperti model lain dalam seri GPT-3.5, ChatGPT dilatih menggunakan [RLHF](https://huggingface.co/blog/rlhf), tetapi sebagian besar efektivitasnya berasal dari penggunaan **prompt yang baik**.

## Prompt

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/1095dab6-11d1-4e99-98cf-3fa0a197ee89)


Prompt chatbot Skippy dari tajuk artikel

[Prompting adalah proses menginstruksikan AI untuk melakukan sesuatu.](https://learnprompting.org/docs/basics/prompting) Seperti yang mungkin telah Anda lihat dalam contoh ChatGPT online, Anda dapat meminta ia melakukan hampir apa saja. Kasus penggunaan umum adalah merangkum teks, menulis konten berdasarkan deskripsi, atau membuat hal-hal seperti puisi, resep, dan banyak lagi.

ChatGPT adalah model bahasa dan antarmuka pengguna. Masukan prompt oleh pengguna ke antarmuka sebenarnya dimasukkan ke dalam prompt yang lebih besar yang berisi seluruh percakapan antara pengguna dan ChatGPT. Ini memungkinkan model bahasa dasar untuk memahami konteks percakapan dan merespons dengan tepat.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/37859f93-dbb0-40e7-8dfa-48c617971ac8)


*Contoh penyisipan prompt pengguna sebelum dikirim ke model*

Model bahasa menyelesaikan prompt dengan mencari tahu kata-kata apa yang akan datang berdasarkan probabilitas yang dipelajari selama fase pre-training[^2].

GPT-3 dapat 'belajar' dari instruksi sederhana atau beberapa contoh dalam prompt. Yang terakhir disebut few-shot, atau pembelajaran dalam konteks[^3]. Dalam prompt chatbot di atas, saya membuat chatbot fiktif bernama Skippy, dan menginstruksikannya untuk memberikan respons kepada pengguna. GPT-3 mengambil format back-and-forth, `USER: {user input}` dan `SKIPPY: {skippy response}`. GPT-3 memahami bahwa Skippy adalah chatbot dan pertukaran sebelumnya adalah percakapan, sehingga ketika kita memberikan masukan pengguna berikutnya, "Skippy" akan merespons.

### Memorisasi

Pertukaran terdahulu antara Skippy dan pengguna ditambahkan ke prompt berikutnya. Setiap kali kita memberikan lebih banyak masukan pengguna dan mendapatkan lebih banyak output chatbot, prompt berkembang untuk mencakup pertukaran baru ini. Inilah bagaimana chatbot seperti Skippy dan ChatGPT dapat **mengingat input terdahulu.** Namun, ada batas untuk seberapa banyak chatbot GPT-3 dapat mengingat.

Prompt dapat menjadi besar setelah beberapa pertukaran, terutama jika kita menggunakan chatbot untuk menghasilkan respons yang panjang seperti tulisan pada blog. Prompt yang dikirim ke GPT-3 dikonversi menjadi token, yang merupakan kata-kata individu atau bagian dari mereka. Ada batas token sebesar [4097 token (sekitar 3000 kata)](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) untuk prompt gabungan dan respons yang dihasilkan untuk model GPT-3, termasuk ChatGPT.

### Beberapa Contoh

Ada banyak kasus penggunaan yang berbeda dari prompt chatbot yang menyimpan percakapan sebelumnya. ChatGPT dimaksudkan untuk menjadi asisten umum yang serba guna dan dalam pengalaman saya, ia jarang menanyakan tindak lanjut.

************************************************************************************************Therapy chatbot yang bertanya mengenai kabar Anda selama seharian beraktivitas************************************************************************************************

Dapat membantu untuk memiliki chatbot yang secara aktif bertanya dan mendapatkan masukan dari pengguna. Berikut adalah contoh prompt chatbot terapi yang akan menanyakan pertanyaan dan tindak lanjut untuk membantu pengguna memikirkan tentang hari mereka.

![image](https://github.com/trigaten/Learn_Prompting/assets/4091265/9bd7e07c-a978-4564-80bf-cd7912b75eac)


### Berbicara dengan diri Anda yang lebih muda menggunakan diary atau jurnal lama Anda

[Michelle Huang](https://twitter.com/michellehuang42) menggunakan GPT-3 untuk bertukar pikiran dengan dirinya yang lebih muda. Prompt menggunakan beberapa konteks, dalam kasus ini entri jurnal lama, dipasangkan dengan format back and forth pada gaya chatbot. GPT-3 dapat meniru kepribadian berdasarkan entri ini.

> i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my "inner child"
> 
> 
> some reflections below:
> 
> [27 November 2022](https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw)
> 

Prompt dari Tweet:

```
Percakapan berikut adalah dengan Michelle saat ini (usia [dihapus]) dan Michelle saat masih muda (usia 14 tahun).

Michelle muda telah menulis entri jurnal berikut:
[entri jurnal di sini]

Michelle saat ini: [ketik pertanyaan Anda di sini]
```

Penulis mencatat bahwa entri jurnal dapat mencapai batas token. Dalam kasus ini, Anda dapat memilih beberapa entri atau mencoba merangkum beberapa entri.

## Implementasi

Saya akan menjelaskan cara memprogram chatbot dengan GPT-3 sederhana menggunakan Python. Termasuk GPT-3 dalam aplikasi yang Anda bangun sangat mudah menggunakan API OpenAI. Anda perlu membuat akun di OpenAI dan mendapatkan API key. Lihat dokumentasi OpenAI [di sini.](https://beta.openai.com/docs/introduction)

Berikut adalah gambaran tentang apa yang perlu kita lakukan:

1. Format masukan pengguna menjadi prompt chatbot untuk GPT-3
2. Dapatkan respons chatbot sebagai penyelesaian dari GPT-3
3. Perbarui prompt dengan masukan pengguna dan respons chatbot
4. Loop

Berikut adalah prompt yang akan saya gunakan. Kita dapat menggunakan python untuk mengganti <conversation history> dan <user input> dengan nilai sebenarnya.

```
chatbot_prompt = """
    Sebagai chatbot canggih, tujuan utama Anda adalah membantu pengguna sebaik mungkin. Ini mungkin melibatkan menjawab pertanyaan, memberikan informasi yang membantu, atau menyelesaikan tugas berdasarkan masukan pengguna. Untuk efektif membantu pengguna, penting untuk detail dan teliti dalam respons Anda. Gunakan contoh dan bukti untuk mendukung poin Anda dan membenarkan rekomendasi atau solusi Anda.

    <conversation history>

    Pengguna: <user input>
    Chatbot:"""
```

Saya melacak kedua hal, yaitu inputan pengguna berikutnya dan percakapan sebelumnya. Input/output baru antara chatbot dan pengguna ditambahkan setiap loop.

```
import openai

openai.api_key = "API KEY ANDA DI SINI"
model_engine = "text-davinci-003"
chatbot_prompt = """
Sebagai chatbot canggih, tujuan utama Anda adalah membantu pengguna sebaik mungkin. Ini mungkin melibatkan menjawab pertanyaan, memberikan informasi yang membantu, atau menyelesaikan tugas berdasarkan masukan pengguna. Untuk efektif membantu pengguna, penting untuk detail dan teliti dalam respons Anda. Gunakan contoh dan bukti untuk mendukung poin Anda dan membenarkan rekomendasi atau solusi Anda.

<conversation history>

Pengguna: <user input>
Chatbot:"""

def get_response(conversation_history, user_input):
    prompt = chatbot_prompt.replace(
        "<conversation history>", conversation_history).replace("<user input>", user_input)

    # Dapatkan respons dari GPT-3
    response = openai.Completion.create(
        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)

    # Ekstrak respons dari objek respons
    response_text = response["choices"][0]["text"]

    chatbot_response = response_text.strip()

return chatbot_response

def main():
    conversation_history = ""

while True:
        user_input = input("> ")
if user_input == "exit":
break
        chatbot_response = get_response(conversation_history, user_input)
print(f"Chatbot: {chatbot_response}")
        conversation_history += f"Pengguna: {user_input}\\nChatbot: {chatbot_response}\\n"

main()
```

[Ini adalah tautan](https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d) ke kode lengkap untuk chatbot sederhana.

Sekarang yang tersisa adalah membangun antarmuka depan yang bagus yang dapat diinteraksi oleh pengguna!

Ditulis oleh [jayo78](https://twitter.com/jayo782).

---

[^1]: OpenAI. (2022). ChatGPT: Optimizing Language Models for Dialogue. https://openai.com/blog/chatgpt/. https://openai.com/blog/chatgpt/
[↩](https://learnprompting.org/docs/applied_prompting/build_chatgpt#fnref-1)
[^2]: Jurafsky, D., & Martin, J. H. (2009). Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics and Speech Recognition. Prentice Hall. [↩](https://learnprompting.org/docs/applied_prompting/build_chatgpt#fnref-2)
[^3]: Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., … Amodei, D. (2020). Language Models are Few-Shot Learners. [↩](https://learnprompting.org/docs/applied_prompting/build_chatgpt#fnref-3)
