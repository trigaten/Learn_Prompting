---
sidebar_position: 4
---

# 🟢 Membangun ChatGPT dari GPT-3

import Skippy from '@site/docs/assets/basic_applications/skippy_chatbot.webp'    
import SkippyHeader from '@site/docs/assets/basic_applications/skippy_chatbot_header.webp'    
import Therapy from '@site/docs/assets/basic_applications/therapy_chatbot.gif'
import ChatGPT from '@site/docs/assets/basic_applications/chatgpt_ui_diagram.webp'

<div style={{textAlign: 'left'}}>
  <img src={SkippyHeader} style={{width: "700px"}}/>
</div>

## Pendahuluan

[ChatGPT](https://chat.openai.com/chat) telah meledak dalam sebulan terakhir, mendapatkan sejuta pengguna hanya dalam seminggu. Hal yang mengejutkan bahwa model dasarnya, GPT-3 memiliki debut pada tahun 2020 dan dirilis untuk akses publik <a href="https://openai.com/blog/api-no-waitlist/">lebih dari setahun yang lalu!</a>   

Bagi mereka yang belum tahu, ChatGPT adalah model bahasa baru dari OpenAI yang telah ditingkatkan dari GPT-3 menjadi dioptimalkan untuk percakapan (@chatgpt2022). Ini memiliki antarmuka obrolan yang mudah digunakan, di mana Anda dapat memberikan input dan mendapatkan respons dari asisten AI. Cek di [chat.openai.com](https://chat.openai.com/chat).

Sementara versi awal GPT-3 tidak seadvanced seri GPT-3.5 saat ini, mereka tetap mengesankan. Model-model ini telah tersedia melalui API dan <a href="https://beta.openai.com/playground">antarmuka web UI playground</a> yang memungkinkan Anda menyetel beberapa hyperparameter konfigurasi dan menguji prompt. GPT-3 mendapatkan daya tarik yang besar, tetapi tidak se-viral ChatGPT.

Apa yang membuat ChatGPT begitu sukses, dibandingkan dengan GPT-3, adalah aksesibilitasnya sebagai asisten AI yang sederhana bagi orang biasa, tanpa memperdulikan pengetahuan mereka tentang ilmu data, model bahasa, atau AI.

Dalam artikel ini, saya memberikan gambaran tentang bagaimana chatbot seperti ChatGPT dapat diimplementasikan menggunakan model bahasa besar seperti GPT-3.

## Motivasi
Artikel ini ditulis sebagian karena sebuah tweet oleh <a href="https://twitter.com/goodside">Riley Goodside</a>, mencatat bagaimana ChatGPT bisa diimplementasikan.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Bagaimana membuat ChatGPT palsu menggunakan GPT-3 (text-davinci-003) — di mana Anda dapat menyesuaikan aturan sesuai kebutuhan Anda, dan mengakses chatbot hasilnya melalui API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">26 Desember 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Seperti model-model lain dalam seri GPT-3.5, ChatGPT dilatih menggunakan [RLHF](https://huggingface.co/blog/rlhf), tetapi sebagian besar efektivitasnya berasal dari menggunakan sebuah **petunjuk yang baik**.

## Prompt

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Tampilan bot obrolan Skippy dari header artikel</p>
</div>

<a href="https://learnprompting.org/docs/basics/prompting">Prompting adalah proses menginstruksikan AI untuk melakukan sesuatu. </a> Seperti yang mungkin telah Anda lihat dalam contoh ChatGPT online, Anda dapat mempromosikannya untuk melakukan hampir segala hal. Kasus penggunaan umum adalah merangkum teks, menulis konten berdasarkan deskripsi, atau menciptakan hal-hal seperti puisi, resep, dan banyak lagi.

<p></p>

ChatGPT adalah model bahasa dan antarmuka pengguna. Masukan prompt yang dimasukkan oleh pengguna ke antarmuka sebenarnya dimasukkan ke dalam prompt yang lebih besar yang berisi seluruh percakapan antara pengguna dan ChatGPT. Hal ini memungkinkan model bahasa yang mendasarinya untuk memahami konteks percakapan dan merespons dengan tepat.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={ChatGPT} style={{width: "600px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Contoh penambahan prompt pengguna sebelum dikirim ke model</p>
</div>

Model bahasa melengkapi prompt dengan mencari kata-kata apa yang datang berikutnya berdasarkan kemungkinan yang dipelajari selama pra-pelatihan (@jurafsky2009).

<p></p>

GPT-3 mampu 'belajar' dari instruksi sederhana atau beberapa contoh dalam prompt. Yang terakhir disebut few-shot, atau pembelajaran di dalam konteks (@brown2020language). Dalam permintaan chatbot di atas, saya membuat chatbot fiktif bernama Skippy, dan memberinya instruksi untuk memberikan respons kepada pengguna. GPT-3 mengikuti format bolak-balik, `PENGGUNA: {user input}` dan `SKIPPY: {skippy response}`. GPT-3 mengerti bahwa Skippy adalah chatbot dan pertukaran sebelumnya adalah percakapan, sehingga ketika kita memberikan input pengguna berikutnya, "Skippy" akan menjawab.

### Memorisasi

Pertukaran sebelumnya antara Skippy dan pengguna ditambahkan ke prompt berikutnya. Setiap kali kami memberikan lebih banyak input pengguna dan mendapatkan lebih banyak output chatbot, prompt akan memperluas untuk mencakup pertukaran baru ini. Inilah bagaimana chatbot seperti Skippy dan ChatGPT dapat **mengingat input terdahulu.** Namun, ada batas untuk seberapa banyak chatbot GPT-3 dapat mengingat.

Pesan dapat menjadi besar setelah beberapa pertukaran, terutama jika kita menggunakan chatbot untuk menghasilkan tanggapan panjang seperti kiriman blog. Prompt yang dikirim ke GPT-3 dikonversi menjadi token, yang merupakan kata-kata individu atau bagian dari mereka. Batas maksimal untuk <a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">4097 token (sekitar 3000 kata)</a> untuk gabungan permintaan dan respon yang dihasilkan untuk model GPT-3, termasuk ChatGPT.

### Beberapa Contoh

Ada banyak kasus penggunaan yang berbeda dari prompt chatbot yang menyimpan percakapan sebelumnya. ChatGPT dimaksudkan untuk menjadi asisten umum serba guna dan menurut pengalaman saya, jarang sekali meminta informasi tambahan.

#### Chatbot sebagai "terapis" yang menanyakan tentang hari Anda

Bisa sangat membantu memiliki chatbot yang aktif bertanya dan mendapatkan umpan balik dari pengguna. Berikut adalah contoh pernyataan yang akan ditanyakan oleh chatbot terapi untuk membantu pengguna memikirkan hari mereka.

<div style={{textAlign: 'left'}}>
  <LazyLoadImage src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Pertanyaan chatbot terapi</p>
</div>

#### Bicaralah dengan dirimu yang lebih muda menggunakan catatan jurnal lama

<a href="https://twitter.com/michellehuang42">Michelle Huang</a> menggunakan GPT-3 untuk berbicara dengan dirinya yang lebih muda. Perintah menggunakan beberapa konteks, dalam hal ini catatan jurnal lama, dipasangkan dengan format interaksi seperti chatbot. GPT-3 mampu meniru kepribadian berdasarkan entri-entri ini.

<p></p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">saya melatih sebuah chatbot Ai pada catatan jurnal masa kecil saya - sehingga saya bisa berdialog secara real-time dengan &quot;anak dalam diri saya&quot;<br/><br/>beberapa refleksi di bawah ini:</p>&mdash; michelle huang (@michellehuang42) <a href="https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw">27 November 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Prompt dari Tweet:
```markdown
Percakapan berikut adalah dengan Michelle saat ini (usia [redacted]) dan Michelle saat masih muda (usia 14 tahun).

Michelle muda telah menulis catatan jurnal berikut:
[entri diary di sini]

Michelle Saat Ini: [ketik pertanyaan Anda di sini]
```

Penulis mencatat bahwa entri diary dapat mencapai batas token. Dalam hal ini, Anda dapat memilih beberapa entri tertentu atau mencoba untuk merangkum beberapa entri.

## Implementasi

Saya akan melangkah melalui pemrograman bot obrolan sederhana yang didukung oleh GPT-3 dalam Python. Termasuk GPT-3 dalam aplikasi yang Anda bangun sangat mudah dengan menggunakan API OpenAI. Anda harus membuat akun di OpenAI dan mendapatkan API key. Cek dokumentasinya <a href="https://beta.openai.com/docs/introduction">di sini.</a>

Ringkasan tentang apa yang perlu kita lakukan:

1. Mengubah masukan pengguna menjadi permintaan chatbot untuk GPT-3
2. Dapatkan respons chatbot sebagai hasil lengkap dari GPT-3
3. Perbarui prompt dengan masukan pengguna dan respon chatbot
4. Loop/Iterasi/Perulangan

Ini adalah prompt yang akan saya gunakan. Kita dapat menggunakan python untuk menggantikan <conversation history\> dan <user input\> dengan nilai sebenarnya.

```python
chatbot_prompt = """
    Sebagai chatbot canggih, tujuan utama Anda adalah untuk membantu pengguna sebaik mungkin. Ini mungkin melibatkan menjawab pertanyaan, memberikan informasi yang berguna, atau menyelesaikan tugas berdasarkan masukan pengguna. Untuk dapat membantu pengguna dengan efektif, penting untuk memberikan tanggapan yang detail dan menyeluruh. Gunakan contoh dan bukti untuk mendukung poin Anda dan membenarkan rekomendasi atau solusi Anda.

    <conversation history>

    User: <user input>
    Chatbot:"""
```

Saya mencatat baik masukan pengguna selanjutnya maupun percakapan sebelumnya. Masukan/keluaran baru antara chatbot dan pengguna ditambahkan setiap perulangan.
```python
impot openai

openai.api_key = "YOUR API KEY HERE"
model_engine = "text-davinci-003"
chatbot_prompt = """
Sebagai chatbot canggih, tujuan utama Anda adalah membantu pengguna sebaik mungkin. Ini mungkin melibatkan menjawab pertanyaan, memberikan informasi yang berguna, atau menyelesaikan tugas berdasarkan masukan pengguna. Untuk dapat membantu pengguna dengan efektif, penting untuk menjelaskan dengan detail dan menyeluruh dalam tanggapan Anda. Gunakan contoh dan bukti untuk mendukung poin-poin Anda dan membenarkan rekomendasi atau solusi Anda.

<conversation history>

User: <user input>
Chatbot:"""


def get_response(conversation_history, user_input):
    prompt = chatbot_prompt.replace(
        "<conversation history>", conversation_history).replace("<user input>", user_input)

    # Get the response from GPT-3
    response = openai.Completion.create(
        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)

    # Extract the response from the response object
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
        conversation_history += f"User: {user_input}\nChatbot: {chatbot_response}\n"

main()
```

<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">Berikut ini adalah tautan</a> untuk kode program lengkap untuk chatbot yang sederhana.

<p></p>

Sekarang yang tersisa adalah membuat antarmuka yang bagus agar pengguna dapat berinteraksi!

Written by [jayo78](https://twitter.com/jayo782).